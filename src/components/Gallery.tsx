import { motion } from 'motion/react';

const portfolio = [
  { id: 1, title: 'Wedding Ceremonies', img: 'https://images.unsplash.com/photo-1583939000140-5e8ed5405417?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'large' },
  { id: 2, title: 'Candid Shots', img: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
  { id: 3, title: 'Event Decoration', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
  { id: 4, title: 'Pre-Wedding Shoots', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'medium' },
  { id: 5, title: 'Photo Albums', img: 'https://images.unsplash.com/photo-1623992209706-e79e602fba7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'medium' },
  { id: 6, title: 'Digital Signage & Printing', img: 'https://images.unsplash.com/photo-1560126786-81cfdb88f722?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'large' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4">The Work</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-text-main leading-tight italic">
              Recent Archive.
            </h3>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-text-muted text-lg font-light leading-relaxed max-w-sm">
              A curated selection of ceremonies, meticulously planned events, and high-quality creative work.
            </p>
            <a href="https://www.instagram.com/sanjay_arts_tharangai" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-accent text-[11px] uppercase tracking-[0.2em] font-bold hover:gap-4 transition-all">
              Instagram Portfolio <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {portfolio.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden group cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''
              } ${item.size === 'medium' ? 'lg:row-span-2 lg:h-auto' : ''}`}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <div className="overflow-hidden">
                  <h4 className="text-3xl font-serif mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.title}
                  </h4>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    Sanjay Arts • Archive {item.id}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
