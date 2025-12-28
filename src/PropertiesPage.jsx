import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Bed, Bath, Maximize, TrendingUp, Search, SlidersHorizontal,
  X, ChevronDown, CheckCircle2, Phone, Mail, Calendar, ArrowLeft,
  Home, Building2, DollarSign
} from 'lucide-react';

const PropertiesPage = ({ onBack, onPropertySelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000000000]);
  const [showFilters, setShowFilters] = useState(false);

  // Expanded property data
  const allProperties = [
    {
      id: 1,
      title: "The Orchid Penthouse",
      location: "Orchid Road, Lekki",
      area: "Lekki",
      price: 120000000,
      priceFormatted: "₦120,000,000",
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
      status: "Available",
      featured: true
    },
    {
      id: 2,
      title: "Ikoyi Heights",
      location: "Glover Road, Ikoyi",
      area: "Ikoyi",
      price: 450000000,
      priceFormatted: "₦450,000,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 5,
      baths: 6,
      sqm: 600,
      type: "For Sale",
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
      status: "Only 2 Units Left",
      featured: true
    },
    {
      id: 3,
      title: "Chevron Terraces",
      location: "Chevron Drive, Lekki",
      area: "Lekki",
      price: 85000000,
      priceFormatted: "₦85,000,000",
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
      status: "High Demand",
      featured: true
    },
    {
      id: 4,
      title: "Banana Island Villa",
      location: "Banana Island, Ikoyi",
      area: "Ikoyi",
      price: 850000000,
      priceFormatted: "₦850,000,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 6,
      baths: 7,
      sqm: 800,
      type: "For Sale",
      description: "Exclusive waterfront villa on Banana Island. This palatial residence offers unmatched luxury with a private dock, Olympic-sized pool, and 360-degree water views.",
      features: [
        "Private Dock",
        "Olympic Pool",
        "Smart Home Integration",
        "Security Room",
        "7-Car Garage",
        "Full Staff Quarters"
      ],
      roi: "15% Annual Appreciation",
      status: "Exclusive",
      featured: true
    },
    {
      id: 5,
      title: "Lekki Phase 1 Duplex",
      location: "Lekki Phase 1, Lagos",
      area: "Lekki",
      price: 95000000,
      priceFormatted: "₦95,000,000",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 4,
      baths: 5,
      sqm: 380,
      type: "For Sale",
      description: "Modern duplex in a serene estate. Features contemporary design, spacious rooms, and proximity to major business districts and entertainment centers.",
      features: [
        "Modern Architecture",
        "Spacious Compound",
        "24/7 Power Supply",
        "Fitted Kitchen",
        "BQ Attached",
        "Ample Parking"
      ],
      roi: "20% Annual Appreciation",
      status: "Move-in Ready",
      featured: false
    },
    {
      id: 6,
      title: "Victoria Island Apartment",
      location: "Victoria Island, Lagos",
      area: "Victoria Island",
      price: 180000000,
      priceFormatted: "₦180,000,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 3,
      baths: 4,
      sqm: 280,
      type: "Investment",
      description: "Prime commercial district apartment with high rental demand. Perfect for expatriates and business executives seeking luxury in the heart of VI.",
      features: [
        "Central Location",
        "Concierge Service",
        "Gym & Spa",
        "Rooftop Lounge",
        "Underground Parking",
        "High-Speed Elevators"
      ],
      roi: "28% Rental Yield",
      status: "Hot Property",
      featured: false
    },
    {
      id: 7,
      title: "Ajah Luxury Estate",
      location: "Ajah, Lagos",
      area: "Ajah",
      price: 65000000,
      priceFormatted: "₦65,000,000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
      beds: 3,
      baths: 3,
      sqm: 250,
      type: "For Sale",
      description: "Affordable luxury in a rapidly developing area. This property offers excellent value with modern finishes and estate amenities.",
      features: [
        "Gated Community",
        "Estate Pool",
        "Power Backup",
        "Security Personnel",
        "Close to Beach",
        "Shopping Complex Nearby"
      ],
      roi: "25% Annual Appreciation",
      status: "Best Value",
      featured: false
    },
    {
      id: 8,
      title: "Osapa London Mansion",
      location: "Osapa London, Lekki",
      area: "Lekki",
      price: 320000000,
      priceFormatted: "₦320,000,000",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 5,
      baths: 6,
      sqm: 550,
      type: "For Sale",
      description: "Architecturally stunning mansion with contemporary design. Features include a home theater, wine cellar, and expansive outdoor entertainment area.",
      features: [
        "Home Theater",
        "Wine Cellar",
        "Outdoor Kitchen",
        "Smart Lighting",
        "3-Car Garage",
        "Maids Quarters"
      ],
      roi: "19% Annual Appreciation",
      status: "Premium Listing",
      featured: false
    },
    {
      id: 9,
      title: "Parkview Estate Villa",
      location: "Parkview Estate, Ikoyi",
      area: "Ikoyi",
      price: 620000000,
      priceFormatted: "₦620,000,000",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 6,
      baths: 7,
      sqm: 700,
      type: "For Sale",
      description: "Prestigious address in one of Lagos's most sought-after estates. This villa combines old-world charm with modern luxury amenities.",
      features: [
        "Heritage Estate",
        "Tennis Court",
        "Landscaped Gardens",
        "Staff Quarters",
        "4-Car Garage",
        "Study & Library"
      ],
      roi: "16% Annual Appreciation",
      status: "Elite Property",
      featured: false
    },
    {
      id: 10,
      title: "Sangotedo Investment Units",
      location: "Sangotedo, Lagos",
      area: "Sangotedo",
      price: 45000000,
      priceFormatted: "₦45,000,000",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 2,
      baths: 3,
      sqm: 180,
      type: "Investment",
      description: "Affordable investment opportunity in a growing corridor. Perfect for first-time investors seeking entry into Lagos real estate market.",
      features: [
        "Affordable Entry",
        "High Growth Area",
        "Modern Design",
        "Estate Facilities",
        "Title: Governor's Consent",
        "Payment Plan Available"
      ],
      roi: "30% Rental Yield",
      status: "Starter Investment",
      featured: false
    },
    {
      id: 11,
      title: "Ikate Elegushi Terrace",
      location: "Ikate, Lekki",
      area: "Lekki",
      price: 110000000,
      priceFormatted: "₦110,000,000",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 4,
      baths: 5,
      sqm: 350,
      type: "For Sale",
      description: "Contemporary terrace in vibrant Ikate neighborhood. Close to nightlife, restaurants, and shopping with excellent accessibility.",
      features: [
        "Contemporary Design",
        "Rooftop Terrace",
        "Smart Home Ready",
        "Backup Power",
        "2-Car Parking",
        "BQ Included"
      ],
      roi: "21% Annual Appreciation",
      status: "Newly Listed",
      featured: false
    },
    {
      id: 12,
      title: "Idado New Heights",
      location: "Idado, Lekki",
      area: "Lekki",
      price: 75000000,
      priceFormatted: "₦75,000,000",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      beds: 3,
      baths: 4,
      sqm: 280,
      type: "Investment",
      description: "Strategic location with excellent rental potential. Modern finishes and estate amenities make this ideal for young professionals.",
      features: [
        "Strategic Location",
        "Modern Finishes",
        "Estate Swimming Pool",
        "Gym Access",
        "24/7 Security",
        "Generator"
      ],
      roi: "26% Rental Yield",
      status: "High Yield",
      featured: false
    }
  ];

  // Filter and search logic
  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesLocation = selectedLocation === 'All' || property.area === selectedLocation;
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    return matchesSearch && matchesType && matchesLocation && matchesPrice;
  });

  // Sort logic
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'beds':
        return b.beds - a.beds;
      case 'newest':
        return b.id - a.id;
      default: // featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const propertyTypes = ['All', 'For Sale', 'Investment'];
  const locations = ['All', 'Lekki', 'Ikoyi', 'Victoria Island', 'Ajah', 'Sangotedo'];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Explore Our <span className="text-yellow-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {sortedProperties.length} premium properties curated for the discerning investor
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">{sortedProperties.length}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">₦2.5B+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">23%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Avg ROI</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="sticky top-20 z-40 bg-white shadow-lg border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by property name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Filters Toggle (Mobile) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </motion.button>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none cursor-pointer bg-white"
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none cursor-pointer bg-white"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none cursor-pointer bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="beds">Most Bedrooms</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden mt-4 space-y-3 overflow-hidden"
              >
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="beds">Most Bedrooms</option>
                  <option value="newest">Newest</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sortedProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                onClick={() => onPropertySelect(property)}
              >
                <div className="relative h-72 overflow-hidden">
                  {property.featured && (
                    <span className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 rounded-full">
                      Featured
                    </span>
                  )}
                  <span className={`absolute top-4 left-4 ${
                    property.type === 'For Sale' ? 'bg-gray-900 text-white' : 'bg-yellow-500 text-gray-900'
                  } text-xs font-bold px-4 py-2 uppercase tracking-wider z-10 rounded-full`}>
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
                      {property.priceFormatted}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-gray-500 text-sm border-t pt-4 mb-4">
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

                  <div className="flex items-center justify-between text-xs text-gray-600 bg-gray-50 rounded-lg p-3">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      {property.roi}
                    </span>
                    <span className="font-semibold text-green-600">{property.status}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-4 py-3 bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 font-bold rounded-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;