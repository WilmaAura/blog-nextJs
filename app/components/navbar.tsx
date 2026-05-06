export default function Navbar() {
  return (
    <nav className="w-full h-14 px-5 py-6 flex justify-between items-center border-b fixed border-gray-100">
      <div className="font-bold text-xl tracking-tighter">WilmaAura</div>
      <div className="space-x-6 text-sm text-gray500">
        <a href="#">Blog</a>
        <a href="#">Cerpen</a>
      </div>
    </nav>
  );
}
