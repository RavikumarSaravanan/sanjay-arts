export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-16 mb-20 text-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <a href="#" className="flex items-center gap-3 group mb-8">
              <div className="h-[45px] w-[120px] overflow-hidden flex items-center justify-center relative">
                <img 
                  src="/logo.png" 
                  alt="Sanjay Art Logo" 
                  className="absolute h-[54px] w-auto max-w-none object-contain scale-[1.1]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.display = 'none';
                      parent.parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
                    }
                  }}
                />
              </div>
              <div className="logo-fallback hidden flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center border-accent bg-surface border-2 rounded-lg">
                  <span className="font-serif text-xl font-bold text-accent uppercase">SA</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-accent uppercase leading-none mb-1">
                    Sanjay Art
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.4em] uppercase opacity-70 text-text-main italic">Events & Media</span>
                </div>
              </div>
            </a>
            <p className="text-text-muted font-medium max-w-sm text-base leading-relaxed">
              We turn specialized events into cinematic stories. Our commitment to precision and elegance makes every moment unforgettable.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6">Navigation</h4>
            <nav className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <a href="#home" className="text-text-main hover:text-accent text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Home</a>
              <a href="#services" className="text-text-main hover:text-accent text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Services</a>
              <a href="#gallery" className="text-text-main hover:text-accent text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Archive</a>
              <a href="#contact" className="text-text-main hover:text-accent text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Inquiry</a>
            </nav>
          </div>

          {/* Social Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6">Social Presence</h4>
            <a href="https://www.instagram.com/sanjay_arts_tharangai" target="_blank" rel="noreferrer" className="text-text-main hover:text-accent text-3xl font-serif italic font-semibold transition-colors">
              Instagram
            </a>
          </div>
        </div>

        {/* Credits Section */}
        <div className="border-t border-black/5 pt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-text-muted/60 font-medium text-[10px] tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Sanjay Art Studio. All rights reserved.
          </p>
          <span className="text-[10px] tracking-widest text-text-muted/60 uppercase font-semibold">
            designed and developed by <a href="https://raventrixtechnologies.netlify.app/" target="_blank" rel="noreferrer" className="text-accent hover:underline transition-all">Raventrix Technologies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
