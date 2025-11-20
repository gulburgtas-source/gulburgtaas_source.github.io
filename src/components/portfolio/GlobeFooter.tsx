export default function GlobeFooter() {
  return (
    <footer className="relative w-full py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold text-white">Let's Create Together</h3>
          <p className="text-gray-400 text-lg">Available for freelance projects worldwide</p>
          <div className="flex gap-6 justify-center mt-6">
            <a href="#" className="text-[#33ccff] hover:text-[#ff3366] transition-colors">
              Email
            </a>
            <a href="#" className="text-[#33ccff] hover:text-[#ff3366] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-[#33ccff] hover:text-[#ff3366] transition-colors">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}