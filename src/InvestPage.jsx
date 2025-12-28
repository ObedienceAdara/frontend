import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, TrendingUp, Shield, Zap, Calculator, CheckCircle2,
  PieChart, BarChart3, LineChart, DollarSign, Users, Award,
  Clock, Target, Briefcase, Home
} from 'lucide-react';

const InvestPage = ({ onBack, onOpenContact }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const investmentPlans = [
    {
      id: 1,
      name: "Starter Portfolio",
      minInvestment: "₦20M - ₦50M",
      roi: "18-22%",
      duration: "12-24 Months",
      type: "Low Risk",
      color: "blue",
      icon: Home,
      features: [
        "Entry-level investment properties",
        "Lekki Phase 1 & Ajah locations",
        "Fixed rental income guarantee",
        "Professional property management",
        "Quarterly dividend payout",
        "Exit strategy after 12 months"
      ],
      ideal: "First-time investors seeking stable returns"
    },
    {
      id: 2,
      name: "Growth Portfolio",
      minInvestment: "₦50M - ₦150M",
      roi: "22-28%",
      duration: "18-36 Months",
      type: "Medium Risk",
      color: "yellow",
      icon: TrendingUp,
      features: [
        "High-growth areas (Lekki, Ikoyi)",
        "Mix of rental & capital appreciation",
        "Priority access to new developments",
        "Portfolio diversification options",
        "Monthly income + annual bonus",
        "Flexible reinvestment options"
      ],
      ideal: "Experienced investors seeking higher returns",
      featured: true
    },
    {
      id: 3,
      name: "Premium Portfolio",
      minInvestment: "₦150M+",
      roi: "25-35%",
      duration: "24-48 Months",
      type: "High Reward",
      color: "purple",
      icon: Award,
      features: [
        "Ultra-luxury properties (Banana Island, Ikoyi)",
        "Exclusive development partnerships",
        "Dedicated portfolio manager",
        "International property access",
        "Tax optimization strategies",
        "VIP concierge services"
      ],
      ideal: "High-net-worth individuals & institutions"
    }
  ];

  const whyInvest = [
    {
      icon: TrendingUp,
      title: "Consistent Growth",
      description: "Lagos property market has shown 15-25% annual appreciation over the past decade",
      stat: "23% Avg ROI"
    },
    {
      icon: Shield,
      title: "Verified Titles",
      description: "Every property undergoes thorough legal verification and due diligence",
      stat: "100% Secure"
    },
    {
      icon: Users,
      title: "Expert Management",
      description: "Professional property management ensures hassle-free investment experience",
      stat: "500+ Clients"
    },
    {
      icon: Zap,
      title: "Quick Returns",
      description: "Start earning rental income within 60 days of investment completion",
      stat: "60-Day Returns"
    }
  ];

  const investmentProcess = [
    {
      step: "01",
      title: "Consultation",
      description: "Schedule a meeting with our investment advisors to discuss your goals and budget"
    },
    {
      step: "02",
      title: "Portfolio Selection",
      description: "Choose from curated investment packages tailored to your risk appetite"
    },
    {
      step: "03",
      title: "Due Diligence",
      description: "We conduct comprehensive property inspections and legal verification"
    },
    {
      step: "04",
      title: "Investment Execution",
      description: "Complete documentation and transfer ownership to your name"
    },
    {
      step: "05",
      title: "Returns Management",
      description: "Receive regular income statements and performance reports"
    }
  ];

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
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 text-sm font-semibold mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              Average 23% Annual Returns
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Build Wealth Through <br />
              <span className="text-yellow-500">Strategic Real Estate</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join Nigeria's most trusted real estate investment platform. Start earning passive income with as little as ₦20M.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={onOpenContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-all shadow-xl"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-900 font-bold rounded-lg transition-all"
              >
                Download Investment Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Invest Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Invest with Lambo Homes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with global investment standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyInvest.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-6 text-center group hover:bg-yellow-50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-gray-900" />
                </motion.div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Investment Plans */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Investment Portfolios
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that matches your investment goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  plan.featured ? 'ring-4 ring-yellow-500 relative' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${
                  plan.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                  plan.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  'bg-gradient-to-br from-purple-500 to-purple-600'
                } text-white`}>
                  <plan.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-serif font-bold mb-1">{plan.minInvestment}</div>
                  <div className="text-sm opacity-90">Minimum Investment</div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{plan.roi}</div>
                      <div className="text-xs text-gray-500 uppercase">ROI Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{plan.duration.split('-')[0]}</div>
                      <div className="text-xs text-gray-500 uppercase">Min. Period</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600 flex items-center justify-center">
                        <Shield className="w-4 h-4 mr-1" />
                        {plan.type}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-xs text-gray-600">
                      <strong>Ideal for:</strong> {plan.ideal}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenContact(plan.name)}
                    className={`w-full py-3 font-bold rounded-lg transition-all ${
                      plan.featured 
                        ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Investment Process */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              A simple, transparent 5-step process
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {investmentProcess.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg relative z-10"
                  >
                    <span className="text-3xl font-bold text-gray-900">{item.step}</span>
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Schedule a free consultation with our investment advisors today
          </p>
          <motion.button
            onClick={() => onOpenContact('General Investment Consultation')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-all shadow-xl text-lg"
          >
            Book Free Consultation
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default InvestPage;