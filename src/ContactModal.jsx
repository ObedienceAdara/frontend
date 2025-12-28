import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MessageSquare, Calendar, Home, CheckCircle2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose, modalType = 'contact', defaultMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyInterest: '',
    message: '',
    preferredDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Set default message when modal opens with a default message
  useEffect(() => {
    if (isOpen && defaultMessage) {
      setFormData(prev => ({
        ...prev,
        message: defaultMessage
      }));
    }
  }, [isOpen, defaultMessage]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyInterest: '',
        message: '',
        preferredDate: ''
      });
      onClose();
    }, 2000);
  };

  const modalTitle = modalType === 'consultation' 
    ? 'Book a Consultation' 
    : 'Get in Touch';

  const modalDescription = modalType === 'consultation'
    ? 'Schedule a one-on-one consultation with our property experts.'
    : 'Send us a message and we\'ll get back to you within 24 hours.';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 relative">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  {modalType === 'consultation' ? (
                    <Calendar className="w-6 h-6 text-gray-900" />
                  ) : (
                    <MessageSquare className="w-6 h-6 text-gray-900" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white">
                    {modalTitle}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {modalDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Success State */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center z-10"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
                    <p className="text-gray-600">
                      We've received your {modalType === 'consultation' ? 'booking request' : 'message'}.
                      <br />We'll contact you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Property Interest & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Interest
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer bg-white"
                    >
                      <option value="">Select property type</option>
                      <option value="lekki">Lekki Properties</option>
                      <option value="ikoyi">Ikoyi Properties</option>
                      <option value="victoria-island">Victoria Island</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="luxury">Luxury Homes</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {modalType === 'consultation' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message {modalType === 'consultation' ? '(Optional)' : '*'}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required={modalType !== 'consultation'}
                    rows="4"
                    placeholder={modalType === 'consultation' 
                      ? "Tell us about your requirements..."
                      : "How can we help you?"
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
                      />
                      Submitting...
                    </span>
                  ) : (
                    modalType === 'consultation' ? 'Book Now' : 'Send Message'
                  )}
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;