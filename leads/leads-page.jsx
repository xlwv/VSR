"use client";

import { useEffect, useState, useMemo } from "react";

// ── Change these credentials ───────────────────────────────────
const VALID_USERNAME = "8views";
const VALID_PASSWORD = "Pass@123";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

export default function LeadsPage() {
  // Auth
  const [authed, setAuthed] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  // Data
  const [leads, setLeads] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  useEffect(() => {
    if (!authed) return;
    setLoading(true);
    fetch("/api/leads")
      .then((r) => r.json())
      .then((data) => {
        setLeads(data.leads || []);
        setTotal(data.total || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [authed]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username.trim() === VALID_USERNAME && loginForm.password === VALID_PASSWORD) {
      setAuthed(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const yearOptions = useMemo(() => {
    const years = new Set(
      leads.map((l) => l.timestamp && new Date(l.timestamp).getFullYear()).filter(Boolean)
    );
    return ["all", ...Array.from(years).sort((a, b) => b - a)];
  }, [leads]);

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;

      const q = search.toLowerCase();
      if (
        q &&
        !(lead.name || "").toLowerCase().includes(q) &&
        !(lead.email || "").toLowerCase().includes(q) &&
        !(lead.phone || "").includes(q)
      ) return false;

      if (lead.timestamp) {
        const d = new Date(lead.timestamp);
        if (selectedYear !== "all" && d.getFullYear() !== Number(selectedYear)) return false;
        if (selectedMonth !== "all" && d.getMonth() !== Number(selectedMonth)) return false;
        if (dateFrom) {
          const from = new Date(dateFrom); from.setHours(0, 0, 0, 0);
          if (d < from) return false;
        }
        if (dateTo) {
          const to = new Date(dateTo); to.setHours(23, 59, 59, 999);
          if (d > to) return false;
        }
      }
      return true;
    });
  }, [leads, statusFilter, search, selectedYear, selectedMonth, dateFrom, dateTo]);

  const successCount = leads.filter((l) => l.status === "success").length;
  const failedCount = leads.filter((l) => l.status === "failed").length;

  const clearDateFilters = () => {
    setSelectedYear("all"); setSelectedMonth("all");
    setDateFrom(""); setDateTo("");
  };

  // ── LOGIN SCREEN ──────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#FDF6F2] flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-[#f0ddd5] p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-[#A03D13]">Leads Dashboard</h1>
            <p className="text-sm text-gray-400 mt-1">VSR Vriksha Nature Cure Centre</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 text-center">
                {loginError}
              </div>
            )}
            <div>
              <label className="block text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                placeholder="Enter username"
                className="w-full rounded-lg border border-[#e0c9bf] px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#A03D13] transition-colors"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="Enter password"
                className="w-full rounded-lg border border-[#e0c9bf] px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#A03D13] transition-colors"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#A03D13] hover:bg-[#7f3214] text-white rounded-lg py-2.5 text-sm font-medium transition-colors mt-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── DASHBOARD ─────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FDF6F2] p-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-[#A03D13]">Leads Log</h1>
            <p className="text-sm text-gray-500 mt-1">VSR Vriksha Nature Cure Centre</p>
          </div>
          <button
            onClick={() => setAuthed(false)}
            className="text-sm text-gray-400 hover:text-[#A03D13] underline underline-offset-2 transition-colors"
          >
            Sign out
          </button>
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

        {/* Filters */}
        <div className="bg-white rounded-xl border border-[#f0ddd5] shadow-sm p-4 mb-5 space-y-3">
          {/* Row 1: search + status */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search by name, email or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-lg border border-[#e0c9bf] bg-white px-4 py-2 text-sm text-gray-700 outline-none focus:border-[#A03D13] transition-colors"
            />
            <div className="flex gap-2">
              {["all", "success", "failed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setStatusFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${
                    statusFilter === f
                      ? "bg-[#A03D13] text-white"
                      : "bg-white border border-[#e0c9bf] text-gray-600 hover:border-[#A03D13]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: date filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="rounded-lg border border-[#e0c9bf] px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#A03D13] bg-white"
            >
              <option value="all">All Years</option>
              {yearOptions.filter((y) => y !== "all").map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="rounded-lg border border-[#e0c9bf] px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#A03D13] bg-white"
            >
              <option value="all">All Months</option>
              {MONTHS.map((m, i) => (
                <option key={m} value={i}>{m}</option>
              ))}
            </select>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">From</span>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="rounded-lg border border-[#e0c9bf] px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#A03D13] bg-white"
              />
              <span className="text-xs text-gray-400">To</span>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="rounded-lg border border-[#e0c9bf] px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#A03D13] bg-white"
              />
            </div>

            {(selectedYear !== "all" || selectedMonth !== "all" || dateFrom || dateTo) && (
              <button
                onClick={clearDateFilters}
                className="text-xs text-[#A03D13] underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Clear date filters
              </button>
            )}
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
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Status</th>
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Name</th>
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Email</th>
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Phone</th>
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Source</th>
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Message</th>
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Scaledino Response</th>
                    <th className="px-4 py-3 font-medium whitespace-nowrap">Timestamp</th>
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
                              : lead.status === "error"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-800 whitespace-nowrap">{lead.name || "—"}</td>
                      <td className="px-4 py-3 text-gray-600">{lead.email || "—"}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{lead.phone || "—"}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{lead.source || "—"}</td>
                      <td className="px-4 py-3 text-gray-500 max-w-[160px] truncate" title={lead.message}>
                        {lead.message || "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-400 min-w-[180px]">
                        {lead.scaledinoResponse ? (
                          <details className="cursor-pointer">
                            <summary className="text-xs text-[#A03D13] hover:opacity-70 list-none flex items-center gap-1">
                              <span className={`inline-block w-2 h-2 rounded-full ${lead.scaledinoStatus < 300 ? "bg-green-400" : "bg-red-400"}`} />
                              HTTP {lead.scaledinoStatus} — view
                            </summary>
                            <pre className="mt-2 text-[11px] bg-gray-50 border border-gray-200 rounded p-2 overflow-x-auto whitespace-pre-wrap break-all max-w-[260px]">
                              {JSON.stringify(lead.scaledinoResponse, null, 2)}
                            </pre>
                          </details>
                        ) : lead.errorMessage ? (
                          <span className="text-xs text-orange-500">{lead.errorMessage}</span>
                        ) : (
                          "—"
                        )}
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