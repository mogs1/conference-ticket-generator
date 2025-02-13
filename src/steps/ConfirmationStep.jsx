import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import Ticket from '../components/Ticket';
import { saveToIndexDB, } from "../database/indexDB";


const ConfirmationStep = ({ setStep }) => {
  const navigate = useNavigate()
  const { getValues } = useFormContext();
  const formData = getValues();
  
  const handleBookAnother = () => {
    setStep(1);
  };

  const handleSaveTicket = async () => {
    const formData = getValues();
    await saveToIndexDB(formData);
  };

  const handleDownloadTicket = async (event) => {
    event.preventDefault();
  event.stopPropagation();

  navigate("/tickets", { state: { formData } }); 

    try {
      const ticketElement = document.getElementById('ticket-container');
  
      if(!ticketElement) return
      
      const loadImages = () => {
        return new Promise((resolve) => {
          const images = ticketElement.getElementsByTagName('img');
          let loadedCount = 0;
          for (let img of images) {
            if (img.complete) {
              loadedCount++;
            } else {
              img.onload = () => {
                loadedCount++;
                if (loadedCount === images.length) resolve();
              };
            }
          }
          if (loadedCount === images.length) resolve();
        });
      };
  
      await loadImages();
  
      const canvas = await html2canvas(ticketElement, {
        scale: 2, 
        useCORS: true, 
        backgroundColor: null, 
      });
  
      const link = document.createElement('a');
      link.download = `techember-ticket.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
  
    } catch (error) {
      console.error('Error downloading ticket:', error);
    }
  };  

  useEffect(() => {
    handleSaveTicket();
  }, []);
  

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-[32px] font-[alatsi]">
          Your Ticket is Booked!
        </h2>
        <p>
          Check your email for a copy or you can download
        </p>
      </div>

      <div
        id="ticket-container"
        className="flex justify-center items-center"
      >
        <Ticket formData={formData} />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleBookAnother}
          className="flex-1 p-3 justify-center items-center rounded-xl 
                   border border-[#24A0B5] transition-all duration-200
                   hover:bg-[#24A0B5]/10 cursor-pointer"
        >
          Book Another Ticket
        </button>
        <button
          onClick={handleDownloadTicket}
          className="flex-1 p-3 justify-center items-center rounded-xl 
                   bg-[#24A0B5] transition-all duration-200
                   hover:bg-[#24A0B5]/90 flex gap-2 cursor-pointer"
        >
          <Download className="w-5 h-5" />
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;