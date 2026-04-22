"use client";

import { useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    setPosition({
      top: randomY,
      left: randomX,
    });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {!accepted ? (
        <>
          <h1>Hari jumat mau keluar sama aku nggak??</h1>

          <img src="/gifs/cute.gif" alt="cute" width={500} />

          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => setAccepted(true)}
              style={{
                marginRight: "10px",
                padding: "10px 20px",
                background: "pink",
                border: "none",
                borderRadius: "10px",
              }}
            >
              YESSS
            </button>

            <button
              onMouseEnter={moveButton}
              style={{
                position: "relative",
                top: position.top,
                left: position.left,
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <h1>Yay!! Can't wait! 🥰</h1>
        <img src="/gifs/cute.gif" alt="cute" width={500} />
      )}
    </div>
  );
}
