import React from "react";

const TicketItem = ({ ticket, onClose, onEscalate }) => {
  const statusStyles = {
    Open: "bg-emerald-100 text-emerald-700",
    Closed: "bg-gray-100 text-gray-600",
    Escalated: "bg-red-100 text-red-700",
  };

  const truncate = (text = "", max = 30) =>
    typeof text === "string" && text.length > max
      ? text.slice(0, max) + "…"
      : text;

  const canClose =
    ticket.status === "Open" || ticket.status === "Escalated";
  const canEscalate = ticket.status === "Open";

  const statusClass =
    statusStyles[ticket.status] ?? "bg-yellow-100 text-yellow-700";

  return (
    <tr className="hover:bg-gray-50 transition">

      <td className="px-4 py-3 text-sm text-gray-800">
        {ticket.customerName}
      </td>

      <td className="px-4 py-3 text-sm text-gray-600">
        {ticket.phone}
      </td>

      <td className="px-4 py-3 text-sm text-gray-600">
        {ticket.rqc}
      </td>

      <td className="px-4 py-3 text-sm text-gray-800" title={ticket.title}>
        {truncate(ticket.title, 25)}
      </td>

      <td className="px-4 py-3 text-sm text-gray-600" title={ticket.description}>
        {truncate(ticket.description, 35)}
      </td>

      <td className="px-4 py-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClass}`}>
          {ticket.status}
        </span>
      </td>

      <td className="px-4 py-3 text-sm text-gray-600">
        {ticket.agent}
      </td>

      <td className="px-4 py-3 text-sm text-gray-600">
        {ticket.supervisor}
      </td>

      <td className="px-4 py-3 text-sm text-gray-600">
        {ticket.n1}
      </td>

      
      <td className="px-4 py-3">
        <div className="flex gap-2">

          <button
            onClick={() => onClose(ticket.id)}
            disabled={!canClose}
            className={`px-3 py-1 text-xs rounded-md text-white transition
              ${
                canClose
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-gray-300 cursor-not-allowed opacity-50"
              }`}
          >
            Close
          </button>

          <button
            onClick={() => onEscalate(ticket.id)}
            disabled={!canEscalate}
            className={`px-3 py-1 text-xs rounded-md text-white transition
              ${
                canEscalate
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-gray-300 cursor-not-allowed opacity-50"
              }`}
          >
            Escalate
          </button>

        </div>
      </td>

    </tr>
  );
};

export default TicketItem;