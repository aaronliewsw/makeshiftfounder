import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#071011] text-[#ffffff] p-6 md:p-12 font-sans flex flex-col items-center">
      <style>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-2px, -1px); }
          60% { transform: translate(1px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes pulse-chaos {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(230, 168, 53, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 12px 4px rgba(230, 168, 53, 0.6); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(230, 168, 53, 0.4); }
        }

        .chaos-button {
          animation: pulse-chaos 2s infinite, glitch 1.5s infinite ease-in-out;
          transition: transform 0.2s ease-in-out;
        }
      `}</style>

      <div className="w-full max-w-4xl">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e6a835]">Makeshift Founder</h1>
          <p className="text-lg md:text-xl mb-6 text-[#fbfbdd]">
            Building tiny tools, documenting the chaos, and rebuilding in public.<br />
            <span className="italic">For tinkerers, builders, and other high-functioning disasters.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-sm px-4 py-2 text-[#071011] bg-[#fbfbdd] rounded-md"
            />
            <button className="bg-[#e6a835] text-[#071011] px-4 py-2 rounded-md font-semibold chaos-button">
              Get Updates
            </button>
          </div>
        </div>

        {/* Subcopy */}
        <div className="max-w-2xl mx-auto mt-12 text-center text-[#91a0aa]">
          <p>
            I’m Aaron—an ex-something, now-something-else. I’m rebuilding after burning out, blowing up, and
            blacking out most of my past projects.
          </p>
          <p className="mt-4">
            I make small, weird tools for humans like me: ADHD-coded, ambition-warped, allergic to corporate nonsense.
          </p>
          <p className="mt-4">This isn’t a brand. It’s a lab. You’re welcome here.</p>
        </div>

        {/* Tool Teasers */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#e6a835]">Tools in the Works</h2>
          <ul className="space-y-4 text-[#91a0aa] text-center">
            <li>🛑 <strong>Deadline Dodger</strong> – auto-writes polite "I need more time" emails so you don’t spiral</li>
            <li>🪦 <strong>Project Autopsy</strong> – analyze your last failed project like a gremlin Sherlock</li>
            <li>📤 <strong>Outbox Ghost</strong> – deletes scheduled emails you regret sending before they send</li>
            <li>⏳ <strong>Spite Timer</strong> – work sprint tool powered by revenge and timers</li>
            <li className="italic">(more to come, all semi-functional and full of personality)</li>
          </ul>
        </div>

        {/* Email CTA */}
        <div className="text-center mt-20">
          <p className="mb-4 text-[#91a0aa]">
            Want to test early tools and get weekly chaos logs? Drop your email.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Your email again, sorry"
              className="w-full max-w-sm px-4 py-2 text-[#071011] bg-[#fbfbdd] rounded-md"
            />
            <button className="bg-[#e6a835] text-[#071011] px-4 py-2 rounded-md font-semibold chaos-button">
              Join the List
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-[#91a0aa] mt-20 border-t border-[#91a0aa] pt-6 text-sm">
          <p>© 2025 makeshiftfounder</p>
          <p>Born in a fire. Coded in a browser.</p>
          <p className="mt-1">
            <a href="https://x.com/makeshftfounder" className="underline">X</a> |
            <a href="https://instagram.com/makeshiftfounder" className="underline ml-2">IG</a>
          </p>
          <p className="mt-2 italic">No tracking cookies, no BS, no vibes harmed in the making of this site.</p>
        </footer>
      </div>
    </div>
  );
}
