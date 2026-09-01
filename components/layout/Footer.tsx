import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-200 px-6 py-2 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-5 md:mx-20 py-10 px-2 md:px-3">
        {/* GRID1 */}
        <div className="flex items-center justify-center ">
          <h2 className="text-4xl md:text-[3rem] font-bold bg-linear-to-r from-plum to-coral bg-clip-text text-transparent">
            MoodLit
          </h2>
        </div>

        {/* GRID2 */}
        <div className="text-start">
          <h2 className="font-medium text-base mb-2">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-plum-light ">
            {["Support", "Pricing", "Policies"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              ),
            )}
          </ul>
        </div>

        {/* GRID3 */}
        <div className="text-start">
          <h2 className="font-medium text-base mb-2">Contact</h2>
          <ul className="flex flex-col gap-2 text-sm text-plum-light">
            <li>+234 801 234 5678</li>
            <li>hello@Moodlit.com</li>
            <li>123 Taste Blvd, Lagos, Nigeriat</li>
          </ul>
        </div>

        {/* GRID4 */}
        {/* <div className="flex items-center justify-center text-center">
          <ul className="flex gap-2 text-sm text-plum-light">
            <li>FB</li>
            <li>TW</li>
            <li>In</li>
            <li>IG</li>
          </ul>
        </div> */}
      
      </div>
      <div className="text-center py-4 px-8 text-light-muted border-t border-light">
        <p className="text-xs md:text-sm font-">
          © 2026 Moodlit. Find your next read based on how you feel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

//  <p className='text-xs md:text-sm font-'>
//           © 2026 Moodlit. Find your next read based on how you feel.
//         </p>
