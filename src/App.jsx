import React, { useState, useEffect } from "react";
import TicketForm from "./Components/TicketForm";
import TicketList from "./Components/TicketList";

const STATUS = {
  ALL: "All",
  OPEN: "Open",
  CLOSED: "Closed",
  ESCALATED: "Escalated",
};

const App = () => {
  const [tickets, setTickets] = useState(() => {
    try {
      const saved = localStorage.getItem("tickets");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(tickets.length === 0);
  const [filter, setFilter] = useState(STATUS.ALL);

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = (data) => {
    const newTicket = {
      id: crypto?.randomUUID?.() || Date.now().toString(),
      ...data,
      status: STATUS.OPEN,
    };
    setTickets((prev) => [newTicket, ...prev]);
    setShowForm(false);
  };

  const updateStatus = (id, status) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  const closeTicket = (id) => updateStatus(id, STATUS.CLOSED);
  const escalateTicket = (id) => updateStatus(id, STATUS.ESCALATED);

  const filteredTickets =
    filter === STATUS.ALL
      ? tickets
      : tickets.filter((t) => t.status === filter);

  if (showForm) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-start p-4">
        <TicketForm addTicket={addTicket} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4">

      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-black mb-3">
          Ticket List
        </h1>

        <div className="flex justify-between items-center">

          {/* FILTER */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Filter:</span>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              {Object.values(STATUS).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* NEW TICKET */}
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            + New Ticket
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white p-4 overflow-auto">
        <TicketList
          tickets={filteredTickets}
          onClose={closeTicket}
          onEscalate={escalateTicket}
        />
      </div>

    </div>
  );
};

export default App;