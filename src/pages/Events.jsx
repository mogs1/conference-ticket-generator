import { useEffect, useState } from 'react';
import {  useForm, FormProvider } from 'react-hook-form'
import TicketSelection from '../steps/TicketSelection';
import AttendeeDetails from '../steps/AttendeeDetails';
import ConfirmationStep from '../steps/ConfirmationStep';
import { saveToIndexDB } from '../database/indexDB'

const Events = () => {
  const [step, setStep] = useState(1);
  const [header, setHeader] = useState("")

  const details = useForm({
    ticketType: '',
    quantity: 1,
    name: '',
    email: '',
    about: '',
    profilePhoto: null
  });

  const onSubmit = async (data) => {
    if (step === 2) {
      try {
        await saveToIndexDB(data);
        setStep(3);
      } catch (error) {
        console.error('Error saving booking:', error);
        alert('There was an error saving your booking');
      }
    } else {
      setStep(prev => prev + 1);
    }
  };

  useEffect(() => {
    switch(step) {
      case 1:
        setHeader("Ticket Selection")
        break
        case 2:
          setHeader("Attendee Details")
          break
          case 3:
            setHeader("Ready")
            break
            default:
              setHeader("Ticket Selection")    
    }
  }, [step])

  return (
    <FormProvider {...details}>
    <div className="max-w-[700px] mx-auto mt-6 p-12 bg-[#041E23] rounded-[40px] border border-[#0E464F] shadow-lg">

      <header className='flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center mb-1.5 text-white'>
        <h1 className='text-[32px] font-[JejuMyeongjo]'>{header}</h1>

        <div className="flex justify-between sm:mt-2 font-[roboto] 
                        text-[16px]/[24px] text-[#FAFAFA]">
          <span>Step {step} / 3</span>
        </div>
      </header>

      <div className="mb-8">
        <div className="relative h-1 bg-[#0E464F] rounded-full self-stretch">
          <div 
            className="absolute h-1 bg-[#24A0B5] rounded-[5px] self-stretch transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <form onSubmit={details.handleSubmit(onSubmit)}>
          {step === 1 && <TicketSelection />}
          {step === 2 && <AttendeeDetails  setStep={setStep}/>}
          {step === 3 && <ConfirmationStep setStep={setStep} />}
        </form>
    </div>
    </FormProvider>
  );
};

export default Events;