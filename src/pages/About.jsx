import React from 'react'

const About = () => {
  return (
    <div className=''>
    <div className="max-w-[700px] mx-auto mt-6 p-12 bg-[#041E23] rounded-[40px] border border-[#0E464F] shadow-lg">
      <section>
      <h2 className="text-xl font-semibold">Event Ticket Booking UI – Open Source Practice Project</h2>
      <p>
        This project is a beginner-friendly yet practical <strong>Event Ticket Booking UI</strong> designed for developers to explore and build upon.
        The focus is on a <strong>seamless, login-free ticket reservation flow</strong>, enabling users to book event tickets quickly and efficiently.
      </p>
    </section>
    
    <section>
      <h2 className="text-xl font-semibold">Flow & Features</h2>
      <h3 className="text-lg font-medium">1️⃣ Ticket Selection</h3>
      <ul className="list-disc pl-6">
        <li>Users can browse available tickets (<strong>Free & Paid</strong>).</li>
        <li>Tickets are displayed in a <strong>list or card view</strong>.</li>
        <li><strong>Free Tickets</strong> → Clicking <em>“Get Free Ticket”</em> proceeds to attendee details.</li>
        <li><strong>Paid Tickets</strong> → Clicking <em>“Purchase Ticket”</em> opens a <strong>payment modal</strong>.</li>
      </ul>

      <h3 className="text-lg font-medium mt-4">2️⃣ Attendee Details Form</h3>
      <ul className="list-disc pl-6">
        <li>Users provide their <strong>Name, Email, and optional Phone Number</strong>.</li>
        <li><strong>Profile picture upload</strong> with preview functionality.</li>
        <li><strong>Ticket summary</strong> is visible before submission for user confirmation.</li>
      </ul>

      <h3 className="text-lg font-medium mt-4">3️⃣ Payment or Success Page</h3>
      <ul className="list-disc pl-6">
        <li><strong>For Free Tickets</strong> → The user is taken directly to the <strong>Ticket Confirmation Page</strong>.</li>
        <li><strong>For Paid Tickets</strong> → Developers can integrate <strong>Stripe, Paystack, or Flutterwave</strong> for secure transactions.</li>
        <li>Upon successful booking, users receive:</li>
        <ul className="list-disc pl-10">
          <li>A <strong>visual ticket preview</strong> with a <strong>unique QR Code</strong>.</li>
          <li>An option to <strong>download the ticket as a PDF</strong>.</li>
          <li>An <strong>email confirmation</strong> with ticket details.</li>
        </ul>
      </ul>
    </section>
    
    <section>
      <h2 className="text-xl font-semibold">How to Build This</h2>
      <p className="mt-2">This UI can be built using:</p>
      <h3 className="text-lg font-medium">Frontend (React or Next.js)</h3>
      <ul className="list-disc pl-6">
        <li>Component Breakdown:
          <ul className="list-disc pl-10">
            <li><code>TicketCard.tsx</code> → Displays ticket details</li>
            <li><code>AttendeeForm.tsx</code> → Captures user details</li>
            <li><code>PaymentModal.tsx</code> → Handles payment processing</li>
            <li><code>SuccessScreen.tsx</code> → Shows the final ticket preview</li>
          </ul>
        </li>
        <li>State Management: React Context API, Zustand, or Redux.</li>
        <li>File Handling: Firebase Storage, Cloudinary, or local previews.</li>
      </ul>
    </section>
    
    <section>
      <h2 className="text-xl font-semibold">What You’ll Learn</h2>
      <ul className="list-disc pl-6">
        <li>File handling & validation (profile picture uploads).</li>
        <li>Dynamic UI updates based on ticket selection.</li>
        <li>Persisting bookings using local state or a backend.</li>
        <li>Integrating payment gateways for ticket purchases.</li>
        <li>Generating & validating QR Codes for event check-in.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold">Need Help? Reach Out!</h2>
      <p>Enjoy building with this open-source project!</p>
      <p className="mt-4">📂 <strong>Design File & GitHub Code:</strong> (Provide link here)</p>
    </section>
    </div>

    <div className="flex flex-col mx-auto sm:flex-row mt-5 max-w-3xl justify-center items-center gap-4">
    <a
    href='https://www.figma.com/community/file/1470800949188681164'
    target='blank'
          className="flex-1 p-3 justify-center items-center rounded-xl 
                   border border-[#24A0B5] transition-all duration-200
                   hover:bg-[#24A0B5]/10 cursor-pointer"
        >
          Design File
        </a>
        <a
        href='https://github.com/mogs1/conference-ticket-generator.git'
        target='blank'
          className="flex-1 p-3 justify-center items-center rounded-xl 
                   bg-[#24A0B5] transition-all duration-200
                   hover:bg-[#24A0B5]/90 flex gap-2 cursor-pointer"
        >
          Github Code
        </a>
        </div>
  </div>
  )
}

export default About
