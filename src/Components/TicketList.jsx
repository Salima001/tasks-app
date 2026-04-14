import React from "react";
import TicketItem from "./TicketItem";

const TicketList = ({
  tickets = [],
  onClose,
  onEscalate,
  deleteTicket,
}) => {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-xl">
      <table className="w-full text-left bg-white">
        <thead
          className="bg-gray-50 border-b border-gray-200"
          style={{ fontFamily: "Tahoma" }}
        >
          <tr> 
            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Customer
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Phone
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Type
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Title
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Description
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Status
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Agent
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Supervisor
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              N+1
            </th>

            <th className="px-4 py-3 text-sm font-bold text-black-600 capitalize tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {tickets.length === 0 ? (
            <tr>
              <td colSpan={10} className="text-center py-10 text-gray-400">
                No tickets available
              </td>
            </tr>
          ) : (
            tickets.map((ticket) => (
              <TicketItem
                key={ticket.id}
                ticket={ticket}
                onClose={onClose}
                onEscalate={onEscalate}
                onDelete={deleteTicket}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;