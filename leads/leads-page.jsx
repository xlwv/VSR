"use client";

import { useEffect, useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | success | failed

  useEffect(() => {
    fetch("/api/leads")
      .then((r) => r.json())
      .then((data) => {
        setLeads(data.leads || []);
        setTotal(data.total || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = leads.filter((lead) => {
    const matchesFilter = filter === "all" || lead.status === filter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      (lead.name || "").toLowerCase().includes(q) ||
      (lead.email || "").toLowerCase().includes(q) ||
      (lead.phone || "").includes(q);
    return matchesFilter && matchesSearch;
  });

  const successCount = leads.filter((l) => l.status === "success").length;
  const failedCount = leads.filter((l) => l.status === "failed").length;

  return (
    <div className="min-h-screen bg-[#FDF6F2] p-6 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#A03D13]">Leads Log</h1>
          <p className="text-sm text-gray-500 mt-1">VSR Vriksha Nature Cure centre</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total", value: total, color: "text-[#A03D13]" },
            { label: "Successful", value: successCount, color: "text-green-600" },
            { label: "Failed", value: failedCount, color: "text-red-500" },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-[#f0ddd5]">
              <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
              <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-lg border border-[#e0c9bf] bg-white px-4 py-2 text-sm text-gray-700 outline-none focus:border-[#A03D13]"
          />
          <div className="flex gap-2">
            {["all", "success", "failed"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${
                  filter === f
                    ? "bg-[#A03D13] text-white"
                    : "bg-white border border-[#e0c9bf] text-gray-600 hover:border-[#A03D13]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No leads found.</div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-[#f0ddd5] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#FBEEE8] text-[#A03D13] text-left">
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Phone</th>
                    <th className="px-4 py-3 font-medium">Source</th>
                    <th className="px-4 py-3 font-medium">Message</th>
                    <th className="px-4 py-3 font-medium">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead, i) => (
                    <tr
                      key={i}
                      className={`border-t border-[#f5e8e2] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf6f2]"}`}
                    >
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            lead.status === "success"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-800">{lead.name || "—"}</td>
                      <td className="px-4 py-3 text-gray-600">{lead.email || "—"}</td>
                      <td className="px-4 py-3 text-gray-600">{lead.phone || "—"}</td>
                      <td className="px-4 py-3 text-gray-500">{lead.source || "—"}</td>
                      <td className="px-4 py-3 text-gray-500 max-w-[180px] truncate" title={lead.message}>
                        {lead.message || "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                        {lead.timestamp
                          ? new Date(lead.timestamp).toLocaleString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 border-t border-[#f0ddd5] text-xs text-gray-400">
              Showing {filtered.length} of {total} leads
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
