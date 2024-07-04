import React from "react";

export function NavBar() {
  return (
    <header>
      <div className="flex bg-back-0 justify-center w-full h-20 ">
        <ul className="flex gap-32 justify-center p-4">
          <a href="/">
            <li className="font-plex-mono text-2xl text-detail-0">Home</li>
          </a>
          <a href="/">
            <li className="font-plex-mono text-2xl text-detail-0">About Me</li>
          </a>
          <a href="/">
            <li className="font-plex-mono text-2xl text-detail-0">
              Case Studies
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
}
