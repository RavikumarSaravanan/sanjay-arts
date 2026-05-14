import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const text = `Hi Sanjay Art Studio!\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/917639263815?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-secondary-bg border-t border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-text-main font-light tracking-tight mb-6">Get in <span className="italic">Touch</span></h2>
            <div className="w-24 h-[1px] bg-accent mb-8"></div>
            <p className="text-text-main/70 text-lg font-light mb-12 max-w-lg leading-relaxed">
              Whether you're planning a grand wedding, a corporate event, or a personal celebration, our team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="text-accent shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Location</h4>
                  <p className="text-sm font-light text-text-main/80 leading-relaxed">
                    Kamarajar Salai, <br />
                    Tharangambadi, Mayiladuthurai 609313,<br />
                    Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-accent shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Contact</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+917639263815" className="text-sm font-light text-text-main/80 hover:text-accent transition-colors">
                      +91 76392 63815
                    </a>
                    <a href="https://wa.me/917639263815" target="_blank" rel="noreferrer" className="text-sm font-light text-[#25D366] hover:text-[#1da851] transition-colors">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-accent shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Hours</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-light text-text-main/80">9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-accent shrink-0 mt-1">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Social</h4>
                  <a href="https://www.instagram.com/sanjay_arts_tharangai" target="_blank" rel="noreferrer" className="text-sm font-light text-text-main/80 hover:text-accent transition-colors">
                    @sanjay_arts_tharangai
                  </a>
                </div>
              </div>
            </div>

            {/* Map inside Contact details column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 w-full h-[250px] md:h-[300px] border border-black/5 relative overflow-hidden bg-surface group"
            >
              <iframe 
                src="https://maps.google.com/maps?q=Sanjay%20Arts,%20Kamarajar%20Salai,%20Tharangambadi,%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-10 md:p-12 border border-black/5"
          >
            <h3 className="text-3xl font-serif text-text-main font-light mb-8">Send an <span className="italic">Inquiry</span></h3>
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-[10px] font-medium tracking-[0.2em] text-accent uppercase mb-3">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-primary-bg border border-black/10 px-4 py-3 text-text-main placeholder:text-text-main/40 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-accent uppercase mb-3">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full bg-primary-bg border border-black/10 px-4 py-3 text-text-main placeholder:text-text-main/40 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-accent uppercase mb-3">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full bg-primary-bg border border-black/10 px-4 py-3 text-text-main placeholder:text-text-main/40 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium tracking-[0.2em] text-accent uppercase mb-3">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-primary-bg border border-black/10 px-4 py-3 text-text-main placeholder:text-text-main/40 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tell us about your event, printing needs, or photography query..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold tracking-widest uppercase text-xs py-4 transition-colors mt-4 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.614-.087-.112-.708-.94-.708-1.793s.448-1.273.606-1.446c.158-.173.346-.217.461-.217l.332.006c.106.005.249-.04-.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964 1.005-3.585c-.605-1.037-.924-2.227-.924-3.441 0-3.826 3.111-6.937 6.937-6.937 3.829 0 6.94 3.111 6.94 6.937 0 3.828-3.111 6.939-6.939 6.939z"/>
                </svg>
                Send via WhatsApp
              </button>

              {/* Quotes Section */}
              <div className="mt-12 pt-8 border-t border-black/5 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm italic text-text-main/70 leading-relaxed">
                    "Your event isn't just an occasion, it's a memory waiting to be captured. We turn those moments into timeless stories."
                  </p>
                  <p className="text-xs text-accent font-medium">— Sanjay Arts</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm italic text-text-main/70 leading-relaxed">
                    "Every celebration tells a story. We ensure yours is told beautifully, frame by frame, moment by moment."
                  </p>
                  <p className="text-xs text-accent font-medium">— Our Commitment</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm italic text-text-main/70 leading-relaxed">
                    "Excellence isn't an act but a habit. We deliver cinematic quality in every project, every single time."
                  </p>
                  <p className="text-xs text-accent font-medium">— Sanjay Arts Team</p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
