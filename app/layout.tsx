export const metadata = {
  title: "For You 💖",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        {children}
      </body>
    </html>
  );
}
