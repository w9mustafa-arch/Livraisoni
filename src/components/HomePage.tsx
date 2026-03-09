import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Star,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Truck,
  ShoppingBag,
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- الألوان المستخدمة في الصور ---
// Primary: #2563eb (Blue)
// Success: #22c55e (Green)

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#about', label: 'À propos', id: 'about' },
    { href: '#contact', label: 'Nous contacter', id: 'contact' },
    { href: '#hours', label: 'Horaires', id: 'hours' },
    { href: '#zones', label: 'Zones de livraison', id: 'zones' },
    { href: '#reviews', label: 'Avis', id: 'reviews' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm px-4 py-3 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-blue-600 font-bold text-xl flex items-center gap-1">
          <Truck className="h-6 w-6" />
          <span>LIVRAISON <span className="text-blue-400">PLUS</span></span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} className="hover:text-blue-600 transition-colors">
            {link.label}
          </a>
        ))}
        <div className="flex items-center gap-3 ml-4">
          <span className="text-gray-400 text-xs">+212 674-007161</span>
          <button className="bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-green-600 transition-all">
            WhatsApp
          </button>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="px-6 py-12 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 bg-white">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <img 
          src="/images/delivery_illustration.png" // استبدل بمسار الصورة من السكرين شوت
          alt="Livraison Rapide"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>
      
      <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Livreur Marrakech 24h/7 – Repas, Courses et Médicaments livrés rapidement
        </h1>
        <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          <span className="text-blue-600 font-bold ml-2">(61) 4,8</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
            <Phone size={20} /> Appeler maintenant
          </button>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all">
            <MessageCircle size={20} /> WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

const AccordionSection = ({ title, children, id }: { title: string, children: React.ReactNode, id: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div id={id} className="mb-4 border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between font-bold text-gray-800 hover:bg-gray-50 transition-colors"
      >
        {title}
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-50">{children}</div>}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Hero />

        {/* À propos */}
        <AccordionSection title="À propos" id="about">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Service de livraison à domicile à Marrakech – Professionnalisme et disponibilité 24h/24</h3>
          <p className="mb-4">Bienvenue sur notre plateforme dédiée à la livraison à domicile à Marrakech, où votre confort et vos besoins sont notre priorité absolue.</p>
          <ul className="space-y-3">
            <li className="flex gap-2"><strong>• Repas complets :</strong> provenant de vos restaurants préférés : McDonald's, KFC, Pizza Hut...</li>
            <li className="flex gap-2"><strong>• Produits pharmaceutiques :</strong> livrés avec discrétion et précision.</li>
            <li className="flex gap-2"><strong>• Fleurs et cadeaux :</strong> pour accompagner vos moments spéciaux.</li>
          </ul>
        </AccordionSection>

        {/* Nous contacter */}
        <AccordionSection title="Nous contacter" id="contact">
          <div className="space-y-4">
            <a href="tel:+212674007161" className="flex items-center gap-3 text-blue-600 font-medium hover:underline">
              <Phone size={20} /> +212 674-007161
            </a>
            <a href="#" className="flex items-center gap-3 text-blue-600 font-medium hover:underline">
              <MessageCircle size={20} /> Contactez-nous sur WhatsApp
            </a>
          </div>
        </AccordionSection>

        {/* Horaires */}
        <AccordionSection title="Horaires d'ouverture" id="hours">
          <div className="divide-y divide-gray-100">
            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
              <div key={day} className="py-3 flex justify-between items-center">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> {day}</span>
                <span className="font-medium">Ouvert 24h/24</span>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Avis */}
        <AccordionSection title="Avis" id="reviews">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
            </div>
            <p className="font-bold text-xl">(61 avis) 4,8 sur 5</p>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-4 overflow-hidden">
              <div className="bg-yellow-400 h-full w-[95%]" />
            </div>
          </div>
          
          {/* Sample Review */}
          <div className="border-t pt-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold">A</div>
              <div>
                <p className="font-bold">Abdlhafaid Id lhcen</p>
                <div className="flex text-yellow-400"><Star size={12} fill="currentColor" /> <Star size={12} fill="currentColor" /> <Star size={12} fill="currentColor" /></div>
              </div>
            </div>
            <p className="italic text-gray-500 text-sm">"Très bon service, sérieux, ponctuel et réactif. Je le recommande 👍👍👍"</p>
          </div>
        </AccordionSection>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 px-6 text-center">
        <div className="flex justify-center gap-4 mb-8">
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-600"><Phone size={18} /></div>
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-green-500"><MessageCircle size={18} /></div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-600 mb-6 font-medium">
          <a href="#">Politique de Confidentialité</a>
          <a href="#">CGU</a>
          <a href="#">Contactez-nous</a>
        </div>
        <p className="text-gray-400 text-xs">© 2025 Livraison Plus. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
