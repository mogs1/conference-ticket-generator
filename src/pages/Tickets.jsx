import { useEffect, useState } from "react";
import { getStoredTickets, clearTicketsFromDB } from "../database/indexDB";
import Ticket from "../components/Ticket";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const storedTickets = await getStoredTickets();
      
      const uniqueTicket = storedTickets.reduce((acc, ticket) => {
        if (!acc.some(t => t.email === ticket.email)) {
          acc.push(ticket);
        }
        return acc;
      }, []);

      setTickets(uniqueTicket);
    };


    fetchTickets();
  }, []);

  const handleClearTickets = async () => {
    const confirmClear = window.confirm("Are you sure you want to your tickets?")
    if(confirmClear) {
      await clearTicketsFromDB()
      setTickets([])
    }
  }

  return (
    <div className="flex flex-col items-center max-w-[700px] mx-auto mt-6 p-12 bg-[#041E23] rounded-[40px] border border-[#0E464F] shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-white">Your Tickets</h1>
      
      {tickets.length > 0 ? (
        <div>
        {tickets.map((ticket, index) => (
          <div key={ticket.id} className="mb-6">
            <Ticket formData={ticket} />
          </div>
        ))}
        <button
            onClick={handleClearTickets}
            className="mt-4 p-3 w-full bg-red-500 text-white rounded-xl transition-all duration-200 cursor-pointer hover:bg-red-600"
          >
            Clear All Tickets
          </button>
        </div>
      ) : (
        <p className="text-center text-white">No tickets found. Book one now!</p>
      )}
    </div>
  );
};

export default Tickets;
