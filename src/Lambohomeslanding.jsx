import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ArrowRight, MapPin, Bed, Bath, Maximize, 
  ShieldCheck, TrendingUp, Gem, Instagram, Facebook, Twitter, 
  MessageSquare, Send, Phone, Mail, ExternalLink, Calendar, CheckCircle2,
  Star, Home, Building2, DollarSign
} from 'lucide-react';
import PropertiesPage from './PropertiesPage';
import InvestPage from './InvestPage';
import AboutMercyPage from './AboutMercyPage';
import ContactModal from './ContactModal';
import ChatWidget from './components/ChatWidget';

const LamboHomesLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [navBackground, setNavBackground] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'properties', 'invest', 'about'
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalType, setModalType] = useState('contact'); // 'contact' or 'consultation'
  const [defaultMessage, setDefaultMessage] = useState(''); // Default message for modal
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers for contact modal
  const openContactModal = (type = 'contact', message = '') => {
    setModalType(type);
    setDefaultMessage(message);
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setDefaultMessage(''); // Reset default message
  };

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "The Orchid Penthouse",
      location: "Orchid Road, Lekki",
      price: "₦120,000,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
      beds: 4,
      baths: 5,
      sqm: 450,
      type: "For Sale",
      description: "A stunning penthouse offering panoramic views of Lekki. Features include a private rooftop terrace, smart home automation, infinity pool, and premium Italian marble finishes.",
      features: [
        "24/7 Security & CCTV",
        "Fully Fitted Kitchen",
        "Smart Home System",
        "Backup Generator",
        "Gym & Swimming Pool",
        "Private Parking (3 spaces)"
      ],
      roi: "18% Annual Appreciation",
      status: "Available"
    },
    {
      id: 2,
      title: "Ikoyi Heights",
      location: "Glover Road, Ikoyi",
      price: "₦450,000,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 5,
      baths: 6,
      sqm: 600,
      type: "Selling Fast",
      description: "Ultra-luxury residence in the heart of Ikoyi. This architectural masterpiece features floor-to-ceiling windows, a private elevator, wine cellar, and direct waterfront access.",
      features: [
        "Waterfront Location",
        "Private Elevator",
        "Wine Cellar & Bar",
        "Home Cinema",
        "Staff Quarters",
        "Helipad Access"
      ],
      roi: "25% Annual Appreciation",
      status: "Only 2 Units Left"
    },
    {
      id: 3,
      title: "Chevron Terraces",
      location: "Chevron Drive, Lekki",
      price: "₦85,000,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      beds: 3,
      baths: 4,
      sqm: 300,
      type: "Investment",
      description: "Perfect for young professionals and investors. Located in a gated estate with modern amenities, this property offers high rental yields and strong capital appreciation potential.",
      features: [
        "Gated Estate",
        "Children's Playground",
        "Jogging Track",
        "Solar Power System",
        "Fitted Wardrobes",
        "Service Charge Included (1 Year)"
      ],
      roi: "22% Rental Yield",
      status: "High Demand"
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Integrity",
      description: "Backed by a brand built on transparency. We verify every title and document so you invest with 100% peace of mind."
    },
    {
      icon: TrendingUp,
      title: "High ROI Assets",
      description: "Our properties in Orchid, Chevron, and Ikoyi are curated for maximum appreciation and rental yield."
    },
    {
      icon: Gem,
      title: "Luxury Standard",
      description: "Modern architecture, smart home features, and premium finishing. We sell homes that define status."
    }
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Properties Sold" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
    { icon: Home, value: "₦50B+", label: "Portfolio Value" },
    { icon: DollarSign, value: "23%", label: "Avg. ROI" }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Show Invest Page
  if (currentPage === 'invest') {
    return (
      <>
        {/* Navigation - Always visible */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentPage('home')}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xl">
                  LH
                </div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  LAMBO<span className="text-yellow-500">HOMES</span>
                </span>
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Properties', action: () => setCurrentPage('properties') },
                  { name: 'Invest', action: () => setCurrentPage('invest') },
                  { name: 'About Mercy', action: () => setCurrentPage('about') }
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={item.action}
                    className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest font-semibold"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => openContactModal('contact', 'I have a question about Lambo Homes and would like to get in touch.')}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-sm transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>

              <motion.button
                className="md:hidden text-white"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.button>
            </div>
          </div>
        </motion.nav>

        <InvestPage 
          onBack={() => setCurrentPage('home')}
          onOpenContact={(portfolioName) => {
            const message = portfolioName === 'General Investment Consultation' 
              ? 'I want to book a free consultation to discuss investment opportunities.'
              : `I'm interested in the ${portfolioName} and would like to learn more about this investment opportunity.`;
            openContactModal('consultation', message);
          }}
        />
        
        <ContactModal 
          isOpen={contactModalOpen}
          onClose={closeContactModal}
          modalType={modalType}
          defaultMessage={defaultMessage}
        />
      </>
    );
  }

  // Show About Mercy Page
  if (currentPage === 'about') {
    return (
      <>
        {/* Navigation - Always visible */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentPage('home')}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xl">
                  LH
                </div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  LAMBO<span className="text-yellow-500">HOMES</span>
                </span>
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Properties', action: () => setCurrentPage('properties') },
                  { name: 'Invest', action: () => setCurrentPage('invest') },
                  { name: 'About Mercy', action: () => setCurrentPage('about') }
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={item.action}
                    className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest font-semibold"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => openContactModal('contact', 'I have a question about Lambo Homes and would like to get in touch.')}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-sm transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>

              <motion.button
                className="md:hidden text-white"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.button>
            </div>
          </div>
        </motion.nav>

        <AboutMercyPage 
          onBack={() => setCurrentPage('home')}
          onOpenContact={() => openContactModal('consultation', 'I would like to schedule a consultation with Mercy Eke to discuss real estate investment opportunities.')}
        />
        
        <ContactModal 
          isOpen={contactModalOpen}
          onClose={closeContactModal}
          modalType={modalType}
          defaultMessage={defaultMessage}
        />
      </>
    );
  }

  // Show Properties Page
  if (currentPage === 'properties') {
    return (
      <>
        {/* Navigation - Always visible */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <motion.div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentPage('home')}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xl">
                  LH
                </div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  LAMBO<span className="text-yellow-500">HOMES</span>
                </span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Properties', action: () => setCurrentPage('properties') },
                  { name: 'Invest', action: () => setCurrentPage('invest') },
                  { name: 'About Mercy', action: () => setCurrentPage('about') }
                ].map((item, i) => (
                  <motion.button
                    key={item.name}
                    onClick={item.action}
                    className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest font-semibold"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => openContactModal('contact', 'I have a question about Lambo Homes and would like to get in touch.')}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-sm transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-white"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-gray-900 border-t border-white/10"
              >
                <div className="px-4 py-6 space-y-4">
                  {[
                    { name: 'Properties', action: () => { setCurrentPage('properties'); setMobileMenuOpen(false); } },
                    { name: 'Invest', action: () => { setCurrentPage('invest'); setMobileMenuOpen(false); } },
                    { name: 'About Mercy', action: () => { setCurrentPage('about'); setMobileMenuOpen(false); } },
                    { name: 'Contact Us', action: () => { openContactModal('contact', 'I have a question about Lambo Homes and would like to get in touch.'); setMobileMenuOpen(false); } }
                  ].map((item) => (
                    <button
                      key={item.name}
                      onClick={item.action}
                      className="block w-full text-left text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest font-semibold py-2"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <PropertiesPage 
          onBack={() => setCurrentPage('home')}
          onPropertySelect={setSelectedProperty}
        />

        <ContactModal 
          isOpen={contactModalOpen}
          onClose={closeContactModal}
          modalType={modalType}
          defaultMessage={defaultMessage}
        />

        {/* Property Detail Modal - Shared */}
        <AnimatePresence>
          {selectedProperty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProperty(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProperty(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className={`inline-block ${
                      selectedProperty.type === 'For Sale' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-900 text-white'
                    } text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-full mb-4`}>
                      {selectedProperty.type}
                    </span>
                    <h2 className="text-4xl font-serif font-bold text-white mb-2">
                      {selectedProperty.title}
                    </h2>
                    <p className="text-gray-200 flex items-center text-lg">
                      <MapPin className="w-5 h-5 mr-2" /> {selectedProperty.location}
                    </p>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2">
                      {/* Price & Status */}
                      <div className="flex flex-wrap justify-between items-start mb-8 pb-6 border-b">
                        <div>
                          <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Price</p>
                          <h3 className="text-4xl font-serif font-bold text-gray-900">
                            {selectedProperty.price}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Status</p>
                          <span className="inline-flex items-center gap-2 text-green-600 font-bold">
                            <CheckCircle2 className="w-5 h-5" />
                            {selectedProperty.status}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold mb-4">Description</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {selectedProperty.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold mb-4">Property Features</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedProperty.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Property Details */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold mb-4">Property Details</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b">
                            <span className="flex items-center gap-2 text-gray-600">
                              <Bed className="w-5 h-5" /> Bedrooms
                            </span>
                            <span className="font-bold">{selectedProperty.beds}</span>
                          </div>
                          <div className="flex items-center justify-between pb-3 border-b">
                            <span className="flex items-center gap-2 text-gray-600">
                              <Bath className="w-5 h-5" /> Bathrooms
                            </span>
                            <span className="font-bold">{selectedProperty.baths}</span>
                          </div>
                          <div className="flex items-center justify-between pb-3 border-b">
                            <span className="flex items-center gap-2 text-gray-600">
                              <Maximize className="w-5 h-5" /> Size
                            </span>
                            <span className="font-bold">{selectedProperty.sqm} sqm</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 text-gray-600">
                              <TrendingUp className="w-5 h-5" /> ROI
                            </span>
                            <span className="font-bold text-green-600">{selectedProperty.roi}</span>
                          </div>
                        </div>
                      </div>

                      {/* Contact Card */}
                      <div className="bg-yellow-500 text-gray-900 rounded-xl p-6">
                        <h4 className="font-bold text-lg mb-4">Interested in this property?</h4>
                        <div className="space-y-3">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                          >
                            <Phone className="w-4 h-4" /> Call Agent
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                          >
                            <Calendar className="w-4 h-4" /> Schedule Tour
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                          >
                            <Mail className="w-4 h-4" /> Send Inquiry
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Show Landing Page (default)
  return (
    <div className="font-sans text-gray-800 bg-gray-50 antialiased overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          navBackground ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-10 h-10 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xl">
                LH
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                LAMBO<span className="text-yellow-500">HOMES</span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Properties', action: () => setCurrentPage('properties') },
                { name: 'Invest', action: () => setCurrentPage('invest') },
                { name: 'About Mercy', action: () => setCurrentPage('about') }
              ].map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={item.action}
                  className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest font-semibold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => openContactModal('contact', 'I have a question about Lambo Homes and would like to get in touch.')}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-sm transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { name: 'Properties', action: () => { setCurrentPage('properties'); setMobileMenuOpen(false); } },
                  { name: 'Invest', action: () => { setCurrentPage('invest'); setMobileMenuOpen(false); } },
                  { name: 'About Mercy', action: () => { setCurrentPage('about'); setMobileMenuOpen(false); } },
                  { name: 'Contact Us', action: () => { openContactModal('contact', 'I have a question about Lambo Homes and would like to get in touch.'); setMobileMenuOpen(false); } }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="block w-full text-left text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest font-semibold py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600596542815-6ad4b7213269?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')"
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-yellow-500 uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-6"
          >
            Redefining Luxury in Lagos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-6"
          >
            Invest in the{' '}
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
                Extraordinary.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light mb-12"
          >
            Discover exclusive properties in Lekki & Ikoyi tailored for the modern elite. 
            Secure your future with Lambo Homes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => setCurrentPage('properties')}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-sm transition-all shadow-2xl shadow-yellow-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Listings
            </motion.button>
            <motion.button
              onClick={() => openContactModal('consultation', 'I want to book a consultation to discuss investment opportunities.')}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/50"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block mb-4"
                >
                  <stat.icon className="w-12 h-12 text-yellow-500 mx-auto" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Lambo Homes Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Invest with Lambo Homes?
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="text-center group p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto bg-gray-900 text-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-xl"
                >
                  <feature.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Properties */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                Exclusive Listings
              </h2>
              <p className="text-gray-500 text-lg">
                Curated properties available for immediate acquisition.
              </p>
            </div>
            <motion.button
              onClick={() => setCurrentPage('properties')}
              className="hidden md:flex items-center text-yellow-600 font-bold hover:text-yellow-500 transition-colors group"
              whileHover={{ x: 5 }}
            >
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedProperty(property)}
              >
                <div className="relative h-72 overflow-hidden">
                  <span className={`absolute top-4 left-4 ${
                    property.type === 'For Sale' ? 'bg-yellow-500' : 'bg-gray-900'
                  } text-${property.type === 'For Sale' ? 'gray-900' : 'white'} text-xs font-bold px-4 py-2 uppercase tracking-wider z-10 rounded-full`}>
                    {property.type}
                  </span>
                  <motion.img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <h3 className="font-bold text-2xl mb-1">{property.title}</h3>
                    <p className="text-gray-300 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" /> {property.location}
                    </p>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-serif font-bold text-gray-900">
                      {property.price}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm border-t pt-4">
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" /> {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" /> {property.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" /> {property.sqm} sqm
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 px-4 py-3 bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 font-bold rounded-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
                >
                  <X className="w-6 h-6" />
                </motion.button>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className={`inline-block ${
                    selectedProperty.type === 'For Sale' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-900 text-white'
                  } text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-full mb-4`}>
                    {selectedProperty.type}
                  </span>
                  <h2 className="text-4xl font-serif font-bold text-white mb-2">
                    {selectedProperty.title}
                  </h2>
                  <p className="text-gray-200 flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-2" /> {selectedProperty.location}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-2">
                    {/* Price & Status */}
                    <div className="flex flex-wrap justify-between items-start mb-8 pb-6 border-b">
                      <div>
                        <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Price</p>
                        <h3 className="text-4xl font-serif font-bold text-gray-900">
                          {selectedProperty.price}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Status</p>
                        <span className="inline-flex items-center gap-2 text-green-600 font-bold">
                          <CheckCircle2 className="w-5 h-5" />
                          {selectedProperty.status}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">Description</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProperty.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">Property Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProperty.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Property Details */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold mb-4">Property Details</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b">
                          <span className="flex items-center gap-2 text-gray-600">
                            <Bed className="w-5 h-5" /> Bedrooms
                          </span>
                          <span className="font-bold">{selectedProperty.beds}</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b">
                          <span className="flex items-center gap-2 text-gray-600">
                            <Bath className="w-5 h-5" /> Bathrooms
                          </span>
                          <span className="font-bold">{selectedProperty.baths}</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b">
                          <span className="flex items-center gap-2 text-gray-600">
                            <Maximize className="w-5 h-5" /> Size
                          </span>
                          <span className="font-bold">{selectedProperty.sqm} sqm</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-gray-600">
                            <TrendingUp className="w-5 h-5" /> ROI
                          </span>
                          <span className="font-bold text-green-600">{selectedProperty.roi}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-yellow-500 text-gray-900 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-4">Interested in this property?</h4>
                      <div className="space-y-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Phone className="w-4 h-4" /> Call Agent
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Calendar className="w-4 h-4" /> Schedule Tour
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Mail className="w-4 h-4" /> Send Inquiry
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xl">
                  LH
                </div>
                <span className="font-serif text-2xl font-bold tracking-wider">
                  LAMBO<span className="text-yellow-500">HOMES</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                The premier real estate agency in Lagos. Founded by Mercy Eke, we bridge the gap between luxury living and smart investment.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 rounded-full flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 rounded-full flex items-center justify-center transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 rounded-full flex items-center justify-center transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Lekki Phase 1, Lagos
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +234 812 345 6789
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@lambohomes.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Properties</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Investment Plans</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Lambo Homes Limited. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Demo created by <span className="text-yellow-500 font-bold">Plex Hedge AI</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={contactModalOpen}
        onClose={closeContactModal}
        modalType={modalType}
        defaultMessage={defaultMessage}
      />

      {/* AI Chatbot Widget */}
      <ChatWidget />
    </div>
  );
};

export default LamboHomesLanding;