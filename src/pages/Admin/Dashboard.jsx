// src/pages/AdminTable.jsx
import React, { useEffect, useState } from "react";
import { database, auth } from "../../../firebase";
import { ref, onValue, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login");
    });

    // ✅ All sources you want to track
    const sources = ["inquiries", "popupEnquiries"];

    const listeners = sources.map((source) => {
      const dbRef = ref(database, source);
      return onValue(dbRef, (snapshot) => {
        const records = snapshot.val();
        const newData = records
          ? Object.entries(records).map(([id, values]) => ({
              id,
              source,
              name: values.name || "N/A",
              email: values.email || "N/A",
              mobile: values.mobile || values.phone || "N/A",
              message: values.message || "N/A",
              timestamp: values.timestamp || 0,
            }))
          : [];

        setData((prev) => {
          // Remove old entries from same source before merging
          const filtered = prev.filter((d) => d.source !== source);
          const combined = [...filtered, ...newData];

          // Sort newest first
          return combined.sort((a, b) => b.timestamp - a.timestamp);
        });
      });
    });

    return () => {
      listeners.forEach((unsub) => unsub());
      unsubscribeAuth();
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const handleDelete = async (entryId, source) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (!confirmDelete) return;

    try {
      await remove(ref(database, `${source}/${entryId}`)); // ✅ Correct path (no 'Enquiries' suffix)
      setData((prev) => prev.filter((item) => !(item.id === entryId && item.source === source)));
    } catch (error) {
      console.error("Failed to delete entry:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-600">All Enquiries Dashboard</h2>
          <button
            onClick={handleLogout}
            className="px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-md transition"
          >
            Logout
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Mobile</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Date/Time</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((entry, index) => (
                <tr key={entry.source + entry.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.email}</td>
                  <td className="px-4 py-2">{entry.mobile}</td>
                  <td className="px-4 py-2">{entry.message}</td>
                  <td className="px-4 py-2">
                    {entry.source === "inquiries"
                      ? "Contact Form"
                      : entry.source === "popupEnquiries"
                      ? "Popup Form"
                      : entry.source}
                  </td>
                  <td className="px-4 py-2">
                    {entry.timestamp
                      ? new Date(entry.timestamp).toLocaleString("en-IN")
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(entry.id, entry.source)}
                      className="px-3 py-1 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center px-4 py-6 text-gray-500">
                    No submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
