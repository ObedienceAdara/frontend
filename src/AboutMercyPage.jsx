import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Award, TrendingUp, Users, Target, Heart, 
  Briefcase, Star, Quote, CheckCircle2, Instagram, Twitter, Facebook
} from 'lucide-react';

const AboutMercyPage = ({ onBack, onOpenContact }) => {
  const achievements = [
    {
      year: "2019",
      title: "Big Brother Naija Winner",
      description: "Won Season 4 'Pepper Dem' edition, becoming a household name across Nigeria"
    },
    {
      year: "2020",
      title: "Lambo Homes Founded",
      description: "Launched Lambo Homes to bridge the gap between luxury living and smart investment"
    },
    {
      year: "2021",
      title: "₦5B Portfolio",
      description: "Reached ₦5 billion in total property portfolio value within first year"
    },
    {
      year: "2023",
      title: "500+ Clients Served",
      description: "Successfully helped over 500 clients achieve their real estate dreams"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "₦20B+", label: "Portfolio Value" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: Star, value: "4.9/5", label: "Client Rating" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity First",
      description: "Every deal is built on honesty, transparency, and trust. We verify every property title and provide full disclosure."
    },
    {
      icon: Target,
      title: "Client Success",
      description: "Your investment success is our success. We go beyond selling properties—we build lasting wealth for our clients."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "From property selection to after-sales service, we maintain the highest standards in every interaction."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We leverage technology and market insights to identify the best investment opportunities before others."
    }
  ];

  const testimonials = [
    {
      name: "Chinedu Okafor",
      role: "Tech Entrepreneur",
      image: "https://ui-avatars.com/api/?name=Chinedu+Okafor&background=0D8ABC&color=fff",
      quote: "Mercy's team helped me build a ₦200M property portfolio in just 18 months. The ROI has exceeded my expectations."
    },
    {
      name: "Aisha Mohammed",
      role: "Investment Banker",
      image: "https://ui-avatars.com/api/?name=Aisha+Mohammed&background=D4AF37&color=000",
      quote: "Working with Lambo Homes was seamless. From property selection to documentation, everything was professional and transparent."
    },
    {
      name: "David Adeleke",
      role: "Diaspora Investor",
      image: "https://ui-avatars.com/api/?name=David+Adeleke&background=8B5CF6&color=fff",
      quote: "As a diaspora investor, I needed someone I could trust. Lambo Homes delivered beyond expectations. My properties are already yielding 25% annual returns."
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
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #EAB308 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-24 h-24 text-white mx-auto mb-4" />
                    <p className="text-white text-2xl font-bold">Mercy Eke</p>
                    <p className="text-white/80">CEO & Founder</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-600">Clients Served</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                CEO & Founder
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Meet <span className="text-yellow-500">Mercy Eke</span>
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                From reality TV star to real estate mogul, Mercy Eke is redefining luxury property investment in Nigeria. 
                Her journey from winning Big Brother Naija to building a ₦20B+ real estate portfolio is a testament to 
                vision, hard work, and strategic thinking.
              </p>

              <p className="text-lg text-gray-400 mb-8">
                "My mission is simple: to make wealth creation through real estate accessible to everyone, 
                from first-time buyers to seasoned investors. Every property we sell is not just a transaction—it's 
                a step toward financial freedom for our clients."
              </p>

              <div className="flex gap-4">
                <motion.button
                  onClick={onOpenContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-all"
                >
                  Work With Mercy
                </motion.button>
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 bg-white border-y"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-4"
                >
                  <stat.icon className="w-8 h-8 text-gray-900" />
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Journey Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              The Journey
            </h2>
            <p className="text-xl text-gray-600">
              From entertainment to real estate excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-500" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="text-xl font-bold text-gray-900">{achievement.year}</span>
                  </motion.div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-4"
                >
                  <value.icon className="w-8 h-8 text-yellow-500" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear from those who've invested with Lambo Homes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <Quote className="w-12 h-12 text-yellow-500 mb-4" />
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Lambo Homes family and let us help you build lasting wealth through strategic real estate investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onOpenContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-all shadow-xl text-lg"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-white hover:bg-white hover:text-gray-900 font-bold rounded-lg transition-all text-lg"
            >
              View Properties
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutMercyPage;