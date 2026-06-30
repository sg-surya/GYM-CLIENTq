"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Dumbbell,
  Award,
  Users,
  Flame,
  Calendar,
  TrendingUp,
  Heart,
  Shield,
  Zap,
  Apple,
  Sparkles,
  Instagram,
  Smartphone,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  X,
  ChevronDown,
  MessageSquare,
  Send,
  Activity,
  Compass,
} from "lucide-react";

// --- STATS DATA ---
const stats = [
  { label: "Active Members", target: 5000, suffix: "+" },
  { label: "Personal Training Sessions", target: 10000, suffix: "+" },
  { label: "Certified Elite Coaches", target: 25, suffix: "+" },
  { label: "Years of High-End Excellence", target: 10, suffix: "+" },
];

// --- WHY CHOOSE US FEATURES ---
const features = [
  {
    title: "Elite Equipment",
    desc: "Train on state-of-the-art biomechanically optimized premium machines from Biostrength and Keiser.",
    icon: Dumbbell,
  },
  {
    title: "Certified Coaches",
    desc: "Work with elite international trainers specializing in functional hypertrophy, fat loss, and athletic performance.",
    icon: Award,
  },
  {
    title: "Personalized Diet Plans",
    desc: "Tailored nutritional pathways synchronized with your specific metabolism and biometric profile.",
    icon: Apple,
  },
  {
    title: "Strength Training",
    desc: "Dedicated power racks, Olympic lifting platforms, and calibrated competition plates.",
    icon: Shield,
  },
  {
    title: "CrossFit Zone",
    desc: "Fully equipped military-grade tactical setup for high-intensity power and conditioning.",
    icon: Flame,
  },
  {
    title: "Functional Fitness",
    desc: "Multi-planar training setups designed to enhance real-world agility, posture, and core power.",
    icon: Compass,
  },
  {
    title: "Vinyasa & Hot Yoga",
    desc: "A sensory-controlled ambient sanctuary to elevate mindfulness, spinal mobility, and deep flexibility.",
    icon: Heart,
  },
  {
    title: "HIIT Chambers",
    desc: "Atmospheric, music-synchronized interval conditioning designed to maximize post-workout caloric burn.",
    icon: Zap,
  },
  {
    title: "Steam & Recovery Rooms",
    desc: "Contrast therapy chambers, Finnish wood steam rooms, and physiological recovery pods.",
    icon: Activity,
  },
  {
    title: "Sensory Locker Rooms",
    desc: "Keyless sensory lockers, custom rainforest showers, and organic premium luxury amenities.",
    icon: Users,
  },
  {
    title: "Nutrition Guidance",
    desc: "On-site metabolic clinics offering clinical-grade body fat analysis and customized mineral hydration.",
    icon: TrendingUp,
  },
  {
    title: "Community Events",
    desc: "Exclusive member mixers, high-altitude hiking expeditions, and professional masterclasses.",
    icon: Calendar,
  },
];

// --- PRICING PLANS ---
const plans = [
  {
    name: "Basic",
    price: "₹4,500",
    period: "month",
    description: "Premium access for dedicated individuals looking to elevate their workout standards.",
    features: [
      "Access to Elite Gym Floor & Equipment",
      "Full Locker Room & Rainforest Showers Access",
      "1 Complementary Body Composition Assessment",
      "Standard Steam & Contrast Sauna Access",
      "Complimentary High-Speed Lounge Wi-Fi",
    ],
    cta: "Select Basic",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹8,500",
    period: "month",
    description: "Our highly recommended membership. Unleash ultimate performance with expert guidance.",
    features: [
      "Unrestricted 24/7 Access to All Zones",
      "Unlimited Hot Yoga & HIIT Class Bookings",
      "2 Dedicated 1-on-1 Personal Training Sessions/mo",
      "Continuous Personalized Diet & Macro Plan updates",
      "Unlimited Recovery Room & Steam Chamber Access",
      "Priority Booking via the mobile companion app",
    ],
    cta: "Join Pro Pathway",
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹15,000",
    period: "month",
    description: "The absolute pinnacle of luxury fitness. Fully bespoke, high-touch training and longevity.",
    features: [
      "Everything in Pro with Premium Concierge",
      "Unlimited 1-on-1 Elite Coaching Sessions",
      "Personalized Hyperbaric Oxygen Therapy (HBOT)",
      "Dedicated Private Locker & Laundry Service",
      "Bi-Weekly Clinical Blood Panel & Nutrient Reviews",
      "VIP Invitation to International Outings & Events",
    ],
    cta: "Embark on Elite",
    highlight: false,
  },
];

// --- WORKOUT PROGRAMS ---
const programs = [
  {
    title: "Strength Conditioning",
    desc: "Master high-threshold neurological motor unit recruitment and perfect multi-joint compound lift mechanics.",
    duration: "12 Weeks",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Hypertrophy Bodybuilding",
    desc: "Scientific mechanical tension and metabolic stress protocols engineered to maximize localized muscle fiber density.",
    duration: "8 Weeks",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Elite Powerlifting",
    desc: "Uncompromising focus on the Big Three: Squat, Bench Press, and Deadlift. Peak your physical maximum single rep.",
    duration: "10 Weeks",
    difficulty: "Expert",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Tactical CrossFit",
    desc: "Constantly varied high-intensity movements combining Olympic weightlifting, calisthenics, and high aerobic conditioning.",
    duration: "6 Weeks",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Chamber HIIT",
    desc: "Unleash explosive athletic conditioning inside sensory-controlled, music-synchronized high heart rate environments.",
    duration: "4 Weeks",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Biometric Weight Loss",
    desc: "Comprehensive heart rate zone targeted cardiovascular conditioning paired with calculated hormonal calorie structures.",
    duration: "12 Weeks",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Functional Kinetic Fitness",
    desc: "Multi-directional movement coaching centered on posture alignment, fascia release, and structural stability.",
    duration: "8 Weeks",
    difficulty: "Beginner-Friendly",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cardiovascular Longevity",
    desc: "Vo2 max optimization utilizing precision treadmill work, stationary bike protocols, and clinical respiratory analysis.",
    duration: "10 Weeks",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
];

// --- TRAINERS ---
const trainers = [
  {
    name: "Vikram Malhotra",
    role: "Head Coach & Strength Specialist",
    exp: "12+ Years Experience",
    achievements: "IPF Gold Medalist Powerlifting, Certified CSCS Specialist",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    instagram: "@vikram_malhotra",
  },
  {
    name: "Arya Sen",
    role: "Senior Metabolic & Nutrition Coach",
    exp: "8+ Years Experience",
    achievements: "M.Sc. Sports Nutritionist, Reebok Fitness Ambassador",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    instagram: "@arya_sen_nutrition",
  },
  {
    name: "Marcus Vance",
    role: "Elite Athletic Conditioning Specialist",
    exp: "10+ Years Experience",
    achievements: "Ex-US Army Ranger physical lead, CrossFit L3 Coach",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800&auto=format&fit=crop",
    instagram: "@marcus_vance_train",
  },
];

// --- SUCCESS STORIES ---
const successStories = [
  {
    name: "Rohan Singhania",
    weightLost: "14 kg Fat Lost",
    muscleGained: "+6 kg Lean Muscle",
    time: "16 Weeks",
    review: "The level of precision at AURA is unmatched. The combination of elite equipment, personalized bio-nutrition, and constant checking with my personal coach transformed not just my body, but my absolute focus in life.",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Kriti Sharma",
    weightLost: "8 kg Body Fat",
    muscleGained: "Enhanced Core Power",
    time: "12 Weeks",
    review: "I joined to regain my core stability post-injury. The functional trainers here worked with my therapist, designing a custom low-inflammation diet and multi-planar routine. I am now stronger and faster than ever.",
    beforeImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
  },
];

// --- TESTIMONIALS ---
const testimonials = [
  {
    quote: "AURA represents a paradigm shift. There is no crowd, no noisy commercial tracks. It feels like an elite performance private hangar. Everything is meticulously curated.",
    author: "Aditya Roy",
    role: "Managing Director, Roy Enterprises",
    rating: 5,
  },
  {
    quote: "The personalized coaching and the steam room recovery protocols have entirely changed my routine. I wake up with 100% cellular recovery, ready for intense business days.",
    author: "Shreya Ghoshal",
    role: "Venture Capitalist & Angel Investor",
    rating: 5,
  },
  {
    quote: "The AI Personal Fitness Coach is unbelievable. Getting immediate, scientific biomechanical advice on what to eat and how to split my routine is an absolute luxury.",
    author: "Karan Johar",
    role: "Creative Director",
    rating: 5,
  },
];

// --- GALLERY IMAGES ---
const gallery = [
  {
    title: "Elite Free Weight Arena",
    category: "Equipment",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sensory Finnish Sauna",
    category: "Recovery",
    img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "High-Threshold Lifting Platform",
    category: "Workouts",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Atmospheric Conditioning Deck",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Vinyasa Mind Sanctuary",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Elite Biostrength Circuit",
    category: "Equipment",
    img: "https://images.unsplash.com/photo-1637666062717-1c6bcab4a4ed?q=80&w=800&auto=format&fit=crop",
  },
];

export default function HomePage() {
  // --- STATE FOR SCROLL & MOUSE EFFECTS ---
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveredDesktop, setIsHoveredDesktop] = useState(false);

  // --- STATS COUNTERS STATE ---
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // --- INTERACTIVE AI COACH STATE ---
  const [selectedGoal, setSelectedGoal] = useState<string>("Gain Muscle");
  const [customAIInput, setCustomAIInput] = useState<string>("");
  const [isAICoachLoading, setIsAICoachLoading] = useState<boolean>(false);
  const [coachStatusMessage, setCoachStatusMessage] = useState<string>("");
  const [aiCoachBlueprint, setAICoachBlueprint] = useState<any>(null);
  const [activeRoutineDay, setActiveRoutineDay] = useState<number>(0);

  // --- SUCCESS STORIES SLIDER ---
  const [currentSuccessIndex, setCurrentSuccessIndex] = useState(0);

  // --- GALLERY LIGHTBOX STATE ---
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // --- TESTIMONIALS AUTO SLIDER ---
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // --- CONTACT TRIAL BOOKING STATE ---
  const [trialName, setTrialName] = useState("");
  const [trialPhone, setTrialPhone] = useState("");
  const [trialEmail, setTrialEmail] = useState("");
  const [trialGoal, setTrialGoal] = useState("Gain Muscle");
  const [trialTime, setTrialTime] = useState("07:00 AM - 09:00 AM");
  const [isTrialBookingLoading, setIsTrialBookingLoading] = useState(false);
  const [trialBookingResult, setTrialBookingResult] = useState<any>(null);

  // --- NEWSLETTER NEWS FEED ---
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // --- TRACK SCROLLS ---
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- TRACK MOUSE FOR DUST EFFECTS (DESKTOP) ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- TESTIMONIALS TIMER ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // --- TRIGGER COUNTER ANIMATIONS ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const durations = [2000, 2500, 1500, 1000];
          stats.forEach((stat, idx) => {
            let start = 0;
            const end = stat.target;
            const stepTime = Math.max(Math.floor(durations[idx] / end), 15);
            const timer = setInterval(() => {
              start += Math.ceil(end / 80);
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const updated = [...prev];
                updated[idx] = start;
                return updated;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }
    return () => observer.disconnect();
  }, [statsAnimated]);

  // --- GET AI FITNESS BLUEPRINT ---
  const handleGenerateCoachBlueprint = async (presetGoal?: string) => {
    const goalToSubmit = presetGoal || selectedGoal;
    setIsAICoachLoading(true);
    setAICoachBlueprint(null);
    setActiveRoutineDay(0);

    const loaderAffirmations = [
      "Securing connection with AURA Biometric Core...",
      "Synthesizing metabolic indicators and custom splits...",
      "Applying luxury nervous-system down-regulation rules...",
      "Finalizing elite high-performance culinary architecture...",
    ];

    let currentAffirmationIdx = 0;
    setCoachStatusMessage(loaderAffirmations[0]);
    const phraseInterval = setInterval(() => {
      currentAffirmationIdx = (currentAffirmationIdx + 1) % loaderAffirmations.length;
      setCoachStatusMessage(loaderAffirmations[currentAffirmationIdx]);
    }, 1500);

    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal: goalToSubmit,
          customMessage: customAIInput,
        }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const blueprint = await response.json();
      setAICoachBlueprint(blueprint);
    } catch (err) {
      console.error(err);
      setAICoachBlueprint({
        blueprintName: `${goalToSubmit.toUpperCase()} ELITE PATHWAY`,
        overview: "A customized luxury performance blueprint focusing on premium physiological growth and systemic conditioning.",
        weeklyRoutine: [
          { day: "Day 1: Maximum Output", workoutName: "Hypertrophy Push", focus: "Chest, Shoulders & Triceps", exercises: ["Incline Barbell Bench: 4 sets x 8 reps (90s rest)", "Dumbbell Overhead Press: 3 sets x 10 reps", "Weighted Dips: 3 sets x RPE 9"] },
          { day: "Day 2: Cellular Restoration", workoutName: "Active Restoration", focus: "Contrast Therapy & Posture Work", exercises: ["Rainforest Stretching routine: 20 mins", "Contrast Sauna Hot-Cold cycle: 3 sets", "Deep Tissue Mobilization: 15 mins"] },
          { day: "Day 3: Pull & Posterior Chain", workoutName: "Neural Strength Pull", focus: "Lats, Rhomboids & Biceps", exercises: ["Calibrated Barbell Rows: 4 sets x 6 reps", "Weighted Pullups: 3 sets x RPE 8", "Alternating Incline DB Curls: 3 sets x 12 reps"] },
        ],
        dietaryStructure: {
          caloricStrategy: "Optimized metabolic loading based on elite standard daily profiles.",
          proteins: "Lean amino complex: Wild Salmon, Grass-Fed Sirloin, Tempeh (2.2g per kg bodyweight).",
          carbsAndFats: "Slow-release complex carbohydrates (Quinoa, Wild Rice) combined with cold-pressed Avocado Lipids.",
          luxurySupplementation: ["Liposomal Glutathione", "Grass-Fed Whey Isolate", "Hydration Trace Minerals"],
        },
        luxuryRecoveryProtocol: {
          activeRest: "Contrast Plunge: 3 minutes at 4°C, followed by 15 minutes of Ambient Steam Room detoxification.",
          sleepOptimization: "Complete blackout down-regulation. No digital exposure 60 mins before sleeping.",
        },
        coachQuote: "Your body is a masterpiece of dynamic physiology. Elevate every lift, optimize every macro, and refuse to accept standard physical outcomes.",
      });
    } finally {
      clearInterval(phraseInterval);
      setIsAICoachLoading(false);
    }
  };

  // --- SUBMIT TRIAL BOOKING FORM ---
  const handleBookTrial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialName || !trialPhone || !trialEmail) return;

    setIsTrialBookingLoading(true);
    setTimeout(() => {
      setTrialBookingResult({
        bookingId: `AURA-${Math.floor(100000 + Math.random() * 900000)}`,
        name: trialName,
        goal: trialGoal,
        time: trialTime,
        qrCode: "https://picsum.photos/seed/auracode/150/150",
      });
      setIsTrialBookingLoading(false);
    }, 2000);
  };

  return (
    <div id="home" className="relative min-h-screen bg-matte-black text-white font-sans selection:bg-electric-red selection:text-white">
      {/* --- DESKTOP PREMIUM CUSTOM CURSOR --- */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-red bg-electric-red/10 transition-transform duration-75 lg:block"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      />

      {/* --- HEADER NAVIGATION --- */}
      <nav className="glass-navbar fixed top-0 left-0 z-40 w-full px-6 py-4 transition-all duration-300 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 text-2xl font-bebas tracking-widest text-white group">
            <span>AURA</span>
            <span className="h-2 w-2 rounded-full bg-electric-red animate-pulse-slow" />
            <span className="text-xs font-display tracking-widest text-zinc-500 group-hover:text-electric-red transition-colors duration-300 ml-1">ATHLETICS</span>
          </a>

          {/* Nav Items */}
          <div className="hidden items-center space-x-8 text-sm font-display font-medium tracking-wide text-zinc-400 md:flex">
            <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
            <a href="#programs" className="hover:text-white transition-colors duration-200">Programs</a>
            <a href="#trainers" className="hover:text-white transition-colors duration-200">Trainers</a>
            <a href="#membership" className="hover:text-white transition-colors duration-200">Membership</a>
            <a href="#gallery" className="hover:text-white transition-colors duration-200">Gallery</a>
            <a href="#testimonials" className="hover:text-white transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>

          {/* CTA Nav Button */}
          <div>
            <a
              href="#contact"
              className="relative hidden rounded-full border border-electric-red bg-transparent px-6 py-2.5 text-xs font-display font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-electric-red md:inline-block hover:shadow-[0_0_20px_rgba(255,46,46,0.4)]"
            >
              Book Free Session
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-60 scale-105 filter saturate-[0.8]"
            poster="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920"
          >
            <source
              src="https://player.vimeo.com/external/435674703.sd.mp4?s=7fdb2cf485da182390a786ec3b9ecbc658604924&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          {/* Radial Black Overlay & Color Grading Gradients */}
          <div className="radial-overlay absolute inset-0" />
          <div className="bottom-fade absolute inset-0" />
          <div className="top-fade absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Tagline */}
            <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-8 bg-electric-red" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-electric-red text-glow-red">
                {"India's Next Generation Premium Fitness Experience"}
              </span>
              <span className="h-px w-8 bg-electric-red" />
            </div>

            {/* Massive Heading */}
            <h1 className="font-bebas text-5xl tracking-wide uppercase sm:text-7xl md:text-8xl lg:text-9xl text-glow-white leading-none">
              TRANSFORM YOUR BODY.<br />
              <span className="text-electric-red text-glow-red">ELEVATE YOUR LIFE.</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto max-w-xl font-display text-sm font-medium tracking-wide text-zinc-400 sm:text-base md:text-lg">
              A private fitness sanctuary designed to provide sensory recovery chambers, world-class custom biomechanical equipment, and elite nutrition pathways.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center space-y-4 pt-6 sm:flex-row sm:space-y-0 sm:space-x-6">
              <a
                href="#membership"
                className="group relative w-full overflow-hidden rounded-full bg-electric-red px-8 py-4 text-xs font-display font-bold uppercase tracking-wider text-white transition-all duration-300 sm:w-auto hover:bg-red-700 hover:shadow-[0_0_30px_rgba(255,46,46,0.6)]"
              >
                Join Today
                <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100" />
              </a>

              <a
                href="#contact"
                className="group relative w-full rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-8 py-4 text-xs font-display font-bold uppercase tracking-wider text-white transition-all duration-300 sm:w-auto hover:border-electric-red hover:bg-black/60"
              >
                Book Free Trial
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
          <a href="#stats" className="flex flex-col items-center space-y-2 text-zinc-500 hover:text-white transition-colors duration-300">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em]">SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="h-6 w-4 rounded-full border border-zinc-600 p-1 flex justify-center"
            >
              <span className="h-1.5 w-1 rounded-full bg-electric-red" />
            </motion.div>
          </a>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section id="stats" ref={statsSectionRef} className="relative bg-matte-black py-20 px-6 border-y border-white/5 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 border-r border-white/5 last:border-none">
                <h3 className="font-bebas text-4xl tracking-wide text-white sm:text-5xl md:text-6xl text-glow-white">
                  {counters[idx]}
                  <span className="text-electric-red">{stat.suffix}</span>
                </h3>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORKOUT PROGRAMS SECTION --- */}
      <section id="programs" className="relative bg-charcoal py-24 px-6 md:px-12">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
              CURATED DEVELOPMENT PATHWAYS
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              WORKOUT <span className="text-electric-red">PROGRAMS</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-xs text-zinc-400 sm:text-sm">
              Each discipline is led by master coaches and integrated with tailored nutrition blueprints to optimize cellular adaptation.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-matte-black/40 h-96 flex flex-col justify-end p-6"
              >
                {/* Background image zoom on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="h-full w-full object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Tags */}
                <div className="relative z-10 flex items-center justify-between mb-3">
                  <span className="rounded-full bg-electric-red/10 border border-electric-red/20 px-3 py-1 text-[10px] font-display font-semibold uppercase tracking-wider text-electric-red">
                    {prog.duration}
                  </span>
                  <span className="text-[10px] font-display font-medium tracking-widest text-zinc-400 uppercase">
                    {prog.difficulty}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <h3 className="font-bebas text-2xl tracking-wide text-white uppercase group-hover:text-electric-red transition-colors duration-300">
                    {prog.title}
                  </h3>
                  <p className="font-display text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {prog.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 pt-2 text-xs font-display font-bold uppercase tracking-wider text-white group-hover:text-electric-red transition-colors duration-300"
                  >
                    <span>Reserve Program</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="relative bg-matte-black py-24 px-6 md:px-12">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
              UNCOMPROMISING PRECISION
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              WHY CHOOSE <span className="text-electric-red">AURA</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-xs text-zinc-400 sm:text-sm">
              We operate at the threshold of physical luxury, blending biomechanical engineering with bespoke member services.
            </p>
          </div>

          {/* Feature Grid with glassmorphism */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card flex flex-col justify-between p-6 rounded-2xl group"
                >
                  <div className="space-y-4">
                    {/* Icon container with electric glow */}
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal border border-white/5 text-white group-hover:border-electric-red group-hover:bg-electric-red/10 group-hover:text-electric-red transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-bebas text-2xl tracking-wide uppercase text-white group-hover:text-electric-red transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="font-display text-xs text-zinc-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="h-1 w-0 bg-electric-red/40 group-hover:w-full transition-all duration-500 mt-6 rounded-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP PLANS SECTION --- */}
      <section id="membership" className="relative bg-charcoal py-24 px-6 md:px-12 border-y border-white/5">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
              EXCLUSIVE MEMBERSHIP BLUEPRINTS
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              MEMBERSHIP <span className="text-electric-red">PLANS</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-xs text-zinc-400 sm:text-sm">
              All plans incorporate complete on-site access. Highlighted plans incorporate personalized cellular coaching and custom diagnostic reviews.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between ${
                  plan.highlight
                    ? "bg-gradient-to-b from-charcoal to-black border-2 border-electric-red shadow-[0_0_40px_rgba(255,46,46,0.15)] scale-105 z-10"
                    : "bg-matte-black/60 border border-white/5"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-electric-red px-4 py-1 text-[10px] font-display font-bold uppercase tracking-widest text-white animate-pulse">
                    MOST RECOMMENDED
                  </span>
                )}

                {/* Plan Info */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bebas text-3xl tracking-wide uppercase text-white">
                      {plan.name}
                    </h3>
                    <Dumbbell className={`h-5 w-5 ${plan.highlight ? "text-electric-red" : "text-zinc-500"}`} />
                  </div>

                  <p className="font-display text-xs text-zinc-400 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="pt-2">
                    <span className="font-bebas text-4xl tracking-wider text-white sm:text-5xl">
                      {plan.price}
                    </span>
                    <span className="font-display text-xs text-zinc-500"> / {plan.period}</span>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-3 text-xs">
                        <Check className="h-4 w-4 text-electric-red shrink-0 mt-0.5" />
                        <span className="font-display text-zinc-300 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join CTA */}
                <div className="pt-8">
                  <a
                    href="#contact"
                    className={`block w-full text-center rounded-full py-4 text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 ${
                      plan.highlight
                        ? "bg-electric-red text-white hover:bg-red-700 hover:shadow-[0_0_25px_rgba(255,46,46,0.4)]"
                        : "bg-zinc-800 text-white hover:bg-zinc-700"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AI FITNESS COACH SECTION --- */}
      <section className="relative bg-matte-black py-24 px-6 md:px-12">
        {/* Vector Accent Light */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-red/10 blur-[120px]" />

        <div className="mx-auto max-w-5xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red flex items-center justify-center space-x-2">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span>AURA BIOMETRIC COGNITION ENGINE</span>
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              MEET YOUR PERSONAL <span className="text-electric-red">AI FITNESS COACH</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-xs text-zinc-400 sm:text-sm">
              Instantly compile dynamic, high-performance physical blueprints and localized nutrition architectures calibrated by artificial intelligence.
            </p>
          </div>

          {/* Interactive Chat Board */}
          <div className="glass-card rounded-3xl p-6 md:p-10 space-y-8">
            {/* Step 1: Select Preset Goal */}
            <div className="space-y-4">
              <label className="font-display text-xs font-bold uppercase tracking-wider text-zinc-400 block text-center md:text-left">
                1. Select Your Biometric Focus Target
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {["Lose Weight", "Gain Muscle", "Fat Loss", "Strength", "Endurance"].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => {
                      setSelectedGoal(goal);
                      handleGenerateCoachBlueprint(goal);
                    }}
                    className={`rounded-xl py-3 px-4 text-xs font-display font-semibold transition-all duration-300 border ${
                      selectedGoal === goal
                        ? "bg-electric-red/10 border-electric-red text-white shadow-[0_0_15px_rgba(255,46,46,0.25)]"
                        : "bg-charcoal border-white/5 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Text Area */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-display text-xs font-bold uppercase tracking-wider text-zinc-400">
                  2. Add Biometric Parameters / Questions (Optional)
                </label>
                <span className="text-[10px] font-mono text-zinc-500">e.g., age, injury notes, target calories</span>
              </div>
              <div className="relative">
                <textarea
                  value={customAIInput}
                  onChange={(e) => setCustomAIInput(e.target.value)}
                  placeholder="Ask Coach Vik anything: 'I have a minor left knee meniscus strain, please adjust Day 2 leg training.' or 'What high-protein meal options do you suggest?'"
                  rows={3}
                  className="w-full rounded-2xl bg-charcoal border border-white/5 p-4 text-xs font-display text-white placeholder-zinc-500 focus:outline-none focus:border-electric-red transition-all duration-300 leading-relaxed"
                />
                <button
                  onClick={() => handleGenerateCoachBlueprint()}
                  disabled={isAICoachLoading}
                  className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center rounded-xl bg-electric-red text-white hover:bg-red-700 transition-colors disabled:bg-zinc-800"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* AI Output Area */}
            <div className="border-t border-white/5 pt-8">
              <AnimatePresence mode="wait">
                {isAICoachLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 space-y-4"
                  >
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-electric-red border-t-transparent" />
                    <p className="font-display text-xs font-semibold text-electric-red animate-pulse tracking-widest uppercase">
                      {coachStatusMessage}
                    </p>
                  </motion.div>
                )}

                {!isAICoachLoading && !aiCoachBlueprint && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 space-y-2"
                  >
                    <p className="font-display text-sm text-zinc-500">
                      Select a Biometric focus or submit custom parameters above to compile your blueprint.
                    </p>
                  </motion.div>
                )}

                {!isAICoachLoading && aiCoachBlueprint && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Header Details */}
                    <div className="rounded-2xl border border-electric-red/20 bg-electric-red/5 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-electric-red block mb-1">
                          PERSONAL BLUEPRINT ACQUIRED
                        </span>
                        <h4 className="font-bebas text-3xl tracking-wide uppercase text-white">
                          {aiCoachBlueprint.blueprintName}
                        </h4>
                      </div>
                      <span className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 font-mono text-[10px] text-zinc-400">
                        Calibrated for: <strong className="text-white">{selectedGoal}</strong>
                      </span>
                    </div>

                    {/* Coach Quote */}
                    <blockquote className="border-l-2 border-electric-red pl-4 py-1 italic font-display text-xs text-zinc-300 leading-relaxed">
                      &ldquo;{aiCoachBlueprint.coachQuote}&rdquo;
                    </blockquote>

                    {/* Blueprint Overview */}
                    <div className="space-y-2">
                      <h5 className="font-display text-xs font-bold uppercase tracking-widest text-zinc-400">
                        Physiological Overview
                      </h5>
                      <p className="font-display text-xs text-zinc-400 leading-relaxed">
                        {aiCoachBlueprint.overview}
                      </p>
                    </div>

                    {/* Grid Splits and Nutrition */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {/* Left: 7-Day Routine Tabs & Details */}
                      <div className="space-y-4">
                        <h5 className="font-display text-xs font-bold uppercase tracking-widest text-zinc-400">
                          Curated 7-Day Training routine
                        </h5>
                        <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-none">
                          {aiCoachBlueprint.weeklyRoutine.map((item: any, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => setActiveRoutineDay(idx)}
                              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-display font-semibold transition-all duration-200 border ${
                                activeRoutineDay === idx
                                  ? "bg-white text-black border-white"
                                  : "bg-charcoal border-white/5 text-zinc-400 hover:border-zinc-700"
                              }`}
                            >
                              Day {idx + 1}
                            </button>
                          ))}
                        </div>

                        {/* Routine Content */}
                        <div className="rounded-xl border border-white/5 bg-charcoal/40 p-5 space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-display text-[10px] font-bold uppercase tracking-widest text-electric-red">
                              {aiCoachBlueprint.weeklyRoutine[activeRoutineDay]?.day}
                            </span>
                            <span className="text-[10px] font-display text-zinc-500 font-medium">
                              Focus: {aiCoachBlueprint.weeklyRoutine[activeRoutineDay]?.focus}
                            </span>
                          </div>
                          <h6 className="font-bebas text-xl tracking-wide uppercase text-white">
                            {aiCoachBlueprint.weeklyRoutine[activeRoutineDay]?.workoutName}
                          </h6>
                          <ul className="space-y-2">
                            {aiCoachBlueprint.weeklyRoutine[activeRoutineDay]?.exercises.map(
                              (ex: string, exIdx: number) => (
                                <li key={exIdx} className="flex items-start space-x-2 text-xs">
                                  <span className="h-1.5 w-1.5 rounded-full bg-electric-red shrink-0 mt-1.5" />
                                  <span className="font-display text-zinc-300 leading-relaxed">{ex}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Nutrition & Recovery */}
                      <div className="space-y-6">
                        {/* Nutrition */}
                        <div className="space-y-3">
                          <h5 className="font-display text-xs font-bold uppercase tracking-widest text-zinc-400">
                            Macro-Nutrient & Caloric Structure
                          </h5>
                          <div className="rounded-xl border border-white/5 bg-charcoal/40 p-5 space-y-3">
                            <div className="text-xs">
                              <span className="font-semibold text-white block mb-0.5">Caloric Strategy:</span>
                              <p className="font-display text-zinc-400 leading-relaxed">{aiCoachBlueprint.dietaryStructure?.caloricStrategy}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/5">
                              <div>
                                <span className="font-semibold text-white block mb-0.5">Proteins:</span>
                                <p className="font-display text-zinc-400 leading-relaxed text-[11px]">{aiCoachBlueprint.dietaryStructure?.proteins}</p>
                              </div>
                              <div>
                                <span className="font-semibold text-white block mb-0.5">Lipids & Carbs:</span>
                                <p className="font-display text-zinc-400 leading-relaxed text-[11px]">{aiCoachBlueprint.dietaryStructure?.carbsAndFats}</p>
                              </div>
                            </div>
                            <div className="pt-2 border-t border-white/5">
                              <span className="font-semibold text-white block text-xs mb-1">Luxury Supplements:</span>
                              <div className="flex flex-wrap gap-1.5">
                                {aiCoachBlueprint.dietaryStructure?.luxurySupplementation.map(
                                  (sup: string, sIdx: number) => (
                                    <span key={sIdx} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-display text-zinc-300">
                                      {sup}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Recovery */}
                        <div className="space-y-3">
                          <h5 className="font-display text-xs font-bold uppercase tracking-widest text-zinc-400">
                            On-Site Recovery Protocols
                          </h5>
                          <div className="rounded-xl border border-white/5 bg-charcoal/40 p-5 space-y-2">
                            <div className="text-xs">
                              <span className="font-semibold text-white block mb-0.5">Active Restoration:</span>
                              <p className="font-display text-zinc-400 leading-relaxed">{aiCoachBlueprint.luxuryRecoveryProtocol?.activeRest}</p>
                            </div>
                            <div className="text-xs pt-2 border-t border-white/5">
                              <span className="font-semibold text-white block mb-0.5">Sleep down-regulation:</span>
                              <p className="font-display text-zinc-400 leading-relaxed">{aiCoachBlueprint.luxuryRecoveryProtocol?.sleepOptimization}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- ELITE TRAINERS SECTION --- */}
      <section id="trainers" className="relative bg-charcoal py-24 px-6 md:px-12 border-y border-white/5">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
              WORLD-CLASS LEADERSHIP
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              ELITE <span className="text-electric-red">MASTER COACHES</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-xs text-zinc-400 sm:text-sm">
              Our guides are certified physiological researchers, competitive athletes, and biometric weight management professionals.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {trainers.map((train, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-matte-black/60 p-4"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src={train.image}
                    alt={train.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle black overlay fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                {/* Trainer info */}
                <div className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bebas text-2xl tracking-wide uppercase text-white group-hover:text-electric-red transition-colors duration-300">
                        {train.name}
                      </h3>
                      <p className="font-display text-xs text-zinc-500 font-bold uppercase tracking-wider">{train.role}</p>
                    </div>
                    {/* Instagram Button */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal border border-white/5 text-zinc-400 hover:text-white hover:border-electric-red transition-all duration-300"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="font-display text-xs text-zinc-400">
                    <strong className="text-white font-medium">Expertise:</strong> {train.exp}
                  </p>
                  <p className="font-display text-xs text-zinc-500 leading-relaxed border-t border-white/5 pt-2">
                    {train.achievements}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUCCESS STORIES BEFORE / AFTER SLIDER --- */}
      <section className="relative bg-matte-black py-24 px-6 md:px-12">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
              PROVEN BIOMETRIC TRANSFORMATION
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              REAL <span className="text-electric-red">SUCCESS STORIES</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-xs text-zinc-400 sm:text-sm">
              Discover how our customized cellular programming has systematically carved stunning strength and fat loss transformations.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative glass-card rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              {/* Left Side: Before/After Side-by-Side Images */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 text-center">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-zinc-500">BASE STATE</span>
                    <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/5">
                      <img
                        src={successStories[currentSuccessIndex].beforeImg}
                        alt="Before Transformation"
                        className="h-full w-full object-cover filter saturate-50 brightness-75"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-electric-red text-glow-red">PEAK PERFORMANCE</span>
                    <div className="aspect-[3/4] overflow-hidden rounded-xl border border-electric-red/20">
                      <img
                        src={successStories[currentSuccessIndex].afterImg}
                        alt="After Transformation"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Performance indicators */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="rounded-lg bg-charcoal p-2 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block uppercase font-display">Target Loss</span>
                    <strong className="text-xs font-display text-white">{successStories[currentSuccessIndex].weightLost}</strong>
                  </div>
                  <div className="rounded-lg bg-charcoal p-2 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block uppercase font-display">Hypertrophy</span>
                    <strong className="text-xs font-display text-white">{successStories[currentSuccessIndex].muscleGained}</strong>
                  </div>
                  <div className="rounded-lg bg-charcoal p-2 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block uppercase font-display">Timeline</span>
                    <strong className="text-xs font-display text-white">{successStories[currentSuccessIndex].time}</strong>
                  </div>
                </div>
              </div>

              {/* Right Side: Written review */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-electric-red text-electric-red" />
                  ))}
                </div>

                <blockquote className="font-display text-sm md:text-base text-zinc-300 leading-relaxed italic">
                  &ldquo;{successStories[currentSuccessIndex].review}&rdquo;
                </blockquote>

                <div>
                  <h4 className="font-bebas text-2xl tracking-wide uppercase text-white">
                    {successStories[currentSuccessIndex].name}
                  </h4>
                  <p className="font-display text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    AURA Verified Member
                  </p>
                </div>

                {/* Slider Navigation */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setCurrentSuccessIndex((prev) => (prev - 1 + successStories.length) % successStories.length)}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-charcoal border border-white/5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentSuccessIndex((prev) => (prev + 1) % successStories.length)}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-charcoal border border-white/5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="text-xs font-mono text-zinc-500">
                    0{currentSuccessIndex + 1} / 0{successStories.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MASONRY GALLERY SECTION --- */}
      <section id="gallery" className="relative bg-charcoal py-24 px-6 md:px-12 border-y border-white/5">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
              VISUAL IMMERSION
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              THE <span className="text-electric-red">AURA GALLERY</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-xs text-zinc-400 sm:text-sm">
              Take a sensory tour of our luxury training sanctuaries, contrast steam pools, and biomechanical workout facilities.
            </p>
          </div>

          {/* Masonry Layout Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 aspect-video md:aspect-square"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-electric-red">
                    {item.category}
                  </span>
                  <h4 className="font-bebas text-2xl tracking-wide uppercase text-white">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-charcoal border border-white/10 text-white hover:text-electric-red transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Slider controls */}
              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0))}
                className="absolute left-6 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-charcoal border border-white/10 text-white hover:text-electric-red transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % gallery.length : 0))}
                className="absolute right-6 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-charcoal border border-white/10 text-white hover:text-electric-red transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image & Detail */}
              <div className="max-w-4xl w-full text-center space-y-4">
                <img
                  src={gallery[lightboxIndex].img}
                  alt={gallery[lightboxIndex].title}
                  className="mx-auto max-h-[75vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                />
                <div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-electric-red">
                    {gallery[lightboxIndex].category}
                  </span>
                  <h3 className="font-bebas text-3xl tracking-wide uppercase text-white mt-1">
                    {gallery[lightboxIndex].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* --- CUSTOMER TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="relative bg-matte-black py-24 px-6 md:px-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
              TESTIMONIAL REVIEWS
            </span>
            <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              TRUSTED BY THE <span className="text-electric-red">ELITE</span>
            </h2>
          </div>

          {/* Testimonial slider */}
          <div className="relative min-h-[220px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-8 md:p-12 space-y-6"
              >
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-electric-red text-electric-red" />
                  ))}
                </div>

                <p className="font-display text-sm md:text-lg text-zinc-300 leading-relaxed italic">
                  &ldquo;{testimonials[currentTestimonialIndex].quote}&rdquo;
                </p>

                <div>
                  <strong className="font-bebas text-xl tracking-wide uppercase text-white block">
                    {testimonials[currentTestimonialIndex].author}
                  </strong>
                  <span className="font-display text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    {testimonials[currentTestimonialIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bullet navigators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentTestimonialIndex === idx ? "w-8 bg-electric-red" : "w-2 bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- MOBILE APP PROMOTION --- */}
      <section className="relative bg-charcoal py-24 px-6 md:px-12 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            {/* Left Column: written parameters */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
                  UNRESTRICTED ACCESS IN YOUR POCKET
                </span>
                <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
                  AURA COMPANION <span className="text-electric-red">APP</span>
                </h2>
                <p className="font-display text-xs text-zinc-400 sm:text-sm leading-relaxed">
                  Seamlessly monitor your biometric development, reserve training sessions, and access personalized dietary blueprints designed by Vikram and our scientific nutrition team.
                </p>
              </div>

              {/* Feature bullet list with custom labels */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
                {[
                  { title: "Book Private Classes", desc: "Instantly reserve HIIT chambers or private personal training sessions." },
                  { title: "Track Gym Attendance", desc: "Keyless, contactless NFC locker entry and diagnostic check-in." },
                  { title: "Personalized Diet Plans", desc: "Live dietary blueprints synchronized with your biometric assessments." },
                  { title: "Biometric Progress Analytics", desc: "Continuously review body composition charts and Vo2 max adaptions." },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-xl bg-matte-black/60 p-4 border border-white/5 space-y-1">
                    <strong className="font-display text-white font-semibold flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-electric-red" />
                      <span>{item.title}</span>
                    </strong>
                    <p className="font-display text-[11px] text-zinc-500 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white text-black px-6 py-3 flex items-center justify-center space-x-3 hover:bg-zinc-200 transition-colors duration-200 shadow-md"
                >
                  <Smartphone className="h-5 w-5 fill-black" />
                  <div className="text-left leading-tight">
                    <span className="text-[10px] uppercase font-display block">Download on the</span>
                    <strong className="text-xs uppercase font-bebas tracking-wide block">App Store</strong>
                  </div>
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-zinc-800 border border-white/10 text-white px-6 py-3 flex items-center justify-center space-x-3 hover:bg-zinc-700 transition-colors duration-200"
                >
                  <Smartphone className="h-5 w-5" />
                  <div className="text-left leading-tight">
                    <span className="text-[10px] uppercase font-display block">Get it on</span>
                    <strong className="text-xs uppercase font-bebas tracking-wide block">Google Play</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Interactive App Simulator */}
            <div className="flex justify-center">
              <div className="relative w-80 rounded-[40px] border-8 border-zinc-800 bg-matte-black p-4 aspect-[9/19] shadow-2xl overflow-hidden group">
                {/* Speaker Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-zinc-800 rounded-b-2xl z-20 flex justify-center items-center">
                  <div className="h-1 w-10 bg-zinc-600 rounded-full" />
                </div>

                {/* Simulated Screen Content */}
                <div className="h-full w-full flex flex-col justify-between pt-6 space-y-4 text-xs font-display">
                  {/* App Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold block">AURA DIRECTORY</span>
                      <strong className="text-white">Vikram Malhotra</strong>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-electric-red" />
                  </div>

                  {/* Progress chart simulation */}
                  <div className="rounded-xl bg-charcoal p-3 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-zinc-400 font-bold uppercase">Weekly Caloric Burn</span>
                      <span className="text-electric-red font-semibold">12,400 kcal</span>
                    </div>
                    {/* Simulated Graph Lines */}
                    <div className="flex items-end justify-between h-20 pt-2">
                      {[40, 60, 45, 80, 50, 95, 75].map((val, i) => (
                        <div key={i} className="w-2 rounded-t-sm bg-zinc-800 h-full relative overflow-hidden">
                          <div
                            className="bg-electric-red absolute bottom-0 left-0 w-full rounded-t-sm transition-all duration-700 group-hover:bg-red-500"
                            style={{ height: `${val}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between font-mono text-[9px] text-zinc-600">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                  </div>

                  {/* Daily task tracker mockup */}
                  <div className="space-y-2">
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">{"Today's Blueprint"}</span>
                    <div className="rounded-xl bg-charcoal/50 p-2 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Dumbbell className="h-3 w-3 text-electric-red" />
                        <span className="text-[11px] text-zinc-300">Push Strength Circuit</span>
                      </div>
                      <span className="text-[10px] text-zinc-500">07:30 AM</span>
                    </div>
                    <div className="rounded-xl bg-charcoal/50 p-2 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Apple className="h-3 w-3 text-electric-red" />
                        <span className="text-[11px] text-zinc-300">Hydro Amino Intake</span>
                      </div>
                      <span className="text-[10px] text-zinc-500">Post-workout</span>
                    </div>
                  </div>

                  {/* Booking notification */}
                  <div className="rounded-xl bg-electric-red/10 border border-electric-red/20 p-2 text-center text-[10px] text-white">
                    Sauna Room Reserved: <strong className="text-electric-red">06:00 PM</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FREE TRIAL BOOKING SECTION --- */}
      <section id="contact" className="relative bg-matte-black py-24 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column: Gym information & addresses */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-electric-red text-glow-red">
                  SECURE YOUR PRIVATE TOUR
                </span>
                <h2 className="font-bebas text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
                  CONNECT WITH <span className="text-electric-red">AURA</span>
                </h2>
                <p className="font-display text-xs text-zinc-400 sm:text-sm leading-relaxed">
                  Our private sanctuary operates exclusively to maintain peak personal attention. Request a private walkthrough or book a complimentary fitness blueprint session below.
                </p>
              </div>

              {/* Interactive Details list */}
              <div className="space-y-4 text-xs font-display text-zinc-300">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal border border-white/5 text-electric-red shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Club Sanctuary Address:</strong>
                    <p className="text-zinc-400 leading-relaxed">Plot No. 44, Elite Avenue, Bandra West, Mumbai, Maharashtra 400050</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal border border-white/5 text-electric-red shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Concierge Support Desk:</strong>
                    <p className="text-zinc-400 leading-relaxed">+91 22 8877 6655, +91 99887 76655</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal border border-white/5 text-electric-red shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Electronic Communications:</strong>
                    <p className="text-zinc-400 leading-relaxed">concierge@aura-fitness.com, membership@aura-fitness.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal border border-white/5 text-electric-red shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Sanctuary Operational Hours:</strong>
                    <p className="text-zinc-400 leading-relaxed">Monday - Friday: 05:00 AM - Midnight<br />Saturday - Sunday: 06:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp instant assist button */}
              <div className="pt-4">
                <a
                  href="https://wa.me/919988776655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-xs font-display font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                >
                  <MessageSquare className="h-4 w-4 fill-white text-emerald-600" />
                  <span>Instant Concierge WhatsApp Chat</span>
                </a>
              </div>

              {/* Embedded custom styled maps mock iframe */}
              <div className="rounded-2xl border border-white/5 overflow-hidden h-64 relative bg-charcoal">
                {/* Simulated luxury dark map */}
                <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <MapPin className="h-8 w-8 text-electric-red animate-bounce" />
                  <div className="space-y-1">
                    <strong className="font-bebas text-2xl tracking-wide uppercase text-white">AURA MUMBAI HQ</strong>
                    <p className="font-display text-[11px] text-zinc-500">Click to load interactive directions in Google Maps</p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-zinc-800 hover:bg-zinc-700 px-4 py-2 font-display text-[10px] font-bold uppercase text-white transition-colors border border-white/5"
                  >
                    Open Google Maps Navigator
                  </a>
                </div>
                {/* Background Grid simulation */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-40" />
              </div>
            </div>

            {/* Right Column: Active Booking Form */}
            <div className="glass-card rounded-3xl p-6 md:p-10 space-y-6">
              <h3 className="font-bebas text-3xl tracking-wide uppercase text-white">
                BOOK FREE <span className="text-electric-red">TRIAL SESSION</span>
              </h3>
              <p className="font-display text-xs text-zinc-400 leading-relaxed">
                Fill in your parameters. Our private membership managers will secure your complimentary sanctuary walkthrough and body composition check within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {!trialBookingResult ? (
                  <motion.form
                    key="booking-form"
                    onSubmit={handleBookTrial}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="font-display text-[10px] font-bold uppercase tracking-wider text-zinc-500">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={trialName}
                        onChange={(e) => setTrialName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-charcoal border border-white/5 p-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-electric-red transition-all duration-300"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="font-display text-[10px] font-bold uppercase tracking-wider text-zinc-500">Contact Number</label>
                        <input
                          type="tel"
                          required
                          value={trialPhone}
                          onChange={(e) => setTrialPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl bg-charcoal border border-white/5 p-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-electric-red transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-display text-[10px] font-bold uppercase tracking-wider text-zinc-500">Electronic Mail</label>
                        <input
                          type="email"
                          required
                          value={trialEmail}
                          onChange={(e) => setTrialEmail(e.target.value)}
                          placeholder="johndoe@gmail.com"
                          className="w-full rounded-xl bg-charcoal border border-white/5 p-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-electric-red transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Goals Select option */}
                    <div className="space-y-1.5">
                      <label className="font-display text-[10px] font-bold uppercase tracking-wider text-zinc-500">Primary Biometric Goal</label>
                      <select
                        value={trialGoal}
                        onChange={(e) => setTrialGoal(e.target.value)}
                        className="w-full rounded-xl bg-charcoal border border-white/5 p-3.5 text-xs text-white focus:outline-none focus:border-electric-red transition-all duration-300"
                      >
                        <option value="Gain Muscle">Gain Muscle / Physical Hypertrophy</option>
                        <option value="Lose Weight">Lose Weight / Fat Reduction</option>
                        <option value="Strength">Powerlifting & Maximum Strength</option>
                        <option value="Endurance">Vo2 Max & Cardiovascular Endurance</option>
                        <option value="Flexibility">Posture, Yoga & Mind-body Balance</option>
                      </select>
                    </div>

                    {/* Time Select option */}
                    <div className="space-y-1.5">
                      <label className="font-display text-[10px] font-bold uppercase tracking-wider text-zinc-500">Preferred Visit Timeframe</label>
                      <select
                        value={trialTime}
                        onChange={(e) => setTrialTime(e.target.value)}
                        className="w-full rounded-xl bg-charcoal border border-white/5 p-3.5 text-xs text-white focus:outline-none focus:border-electric-red transition-all duration-300"
                      >
                        <option value="07:00 AM - 09:00 AM">07:00 AM - 09:00 AM (Early Morning Rise)</option>
                        <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM (Midday Session)</option>
                        <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM (Evening Sunset Peak)</option>
                        <option value="08:00 PM - 10:00 PM">08:00 PM - 10:00 PM (Late Night Recharge)</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isTrialBookingLoading}
                        className="w-full rounded-full bg-electric-red hover:bg-red-700 py-4 text-xs font-display font-bold uppercase tracking-widest text-white transition-all duration-300 disabled:bg-zinc-800 shadow-[0_0_20px_rgba(255,46,46,0.3)] hover:shadow-[0_0_35px_rgba(255,46,46,0.6)]"
                      >
                        {isTrialBookingLoading ? "Processing Biometric Credentials..." : "Secure My Guest Walkthrough"}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 space-y-6 text-center"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Check className="h-6 w-6" />
                    </div>

                    <div className="space-y-1">
                      <strong className="font-bebas text-3xl tracking-wide uppercase text-white block">
                        GUEST PERMISSION SECURED
                      </strong>
                      <p className="font-display text-xs text-zinc-400">
                        Welcome to AURA, <strong className="text-white">{trialBookingResult.name}</strong>. Your complimentary physical blueprint pass is active.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-charcoal border border-white/5 space-y-3 text-left">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-zinc-500 font-bold uppercase">WALKTHROUGH PASS ID</span>
                        <strong className="text-white font-mono">{trialBookingResult.bookingId}</strong>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-zinc-500 font-bold uppercase">FOCUS FIELD</span>
                        <strong className="text-white">{trialBookingResult.goal}</strong>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-zinc-500 font-bold uppercase">VISIT HOUR</span>
                        <strong className="text-white">{trialBookingResult.time}</strong>
                      </div>
                    </div>

                    {/* QR Code Graphic Mockup */}
                    <div className="flex flex-col items-center space-y-2 pt-2">
                      <div className="h-32 w-32 bg-white p-2 rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
                        <img
                          src={trialBookingResult.qrCode}
                          alt="NFC Access Code"
                          className="h-full w-full object-contain filter brightness-95"
                        />
                      </div>
                      <span className="font-display text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                        SCAN PASS AT ENTRANCE PORTAL
                      </span>
                    </div>

                    <button
                      onClick={() => setTrialBookingResult(null)}
                      className="rounded-full bg-zinc-800 text-white font-display text-xs font-semibold px-6 py-2 hover:bg-zinc-700 transition-colors"
                    >
                      Book Another Pass
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative bg-matte-black py-16 px-6 md:px-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand details */}
            <div className="space-y-4">
              <a href="#home" className="flex items-center space-x-2 text-2xl font-bebas tracking-widest text-white">
                <span>AURA</span>
                <span className="h-2 w-2 rounded-full bg-electric-red" />
              </a>
              <p className="font-display text-xs text-zinc-500 leading-relaxed">
                {"India's next-generation premium fitness experience. Combining sensory recovery, world-class athletic coaching, and custom bio-nutrition pathways."}
              </p>
              <div className="flex space-x-3">
                {["instagram", "facebook", "twitter", "linkedin"].map((soc) => (
                  <a
                    key={soc}
                    href="https://social.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-charcoal border border-white/5 text-zinc-500 hover:text-white hover:border-electric-red transition-all duration-300"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bebas text-xl tracking-wide uppercase text-white">Quick Links</h4>
              <ul className="space-y-2 text-xs font-display text-zinc-500">
                <li><a href="#home" className="hover:text-white transition-colors">Home Base</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Curated Programs</a></li>
                <li><a href="#trainers" className="hover:text-white transition-colors">Elite Guides</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Pricing Pathways</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Visual Tour</a></li>
              </ul>
            </div>

            {/* Column 3: Curated Programs */}
            <div className="space-y-4">
              <h4 className="font-bebas text-xl tracking-wide uppercase text-white">Curated Programs</h4>
              <ul className="space-y-2 text-xs font-display text-zinc-500">
                <li><a href="#programs" className="hover:text-white transition-colors">Strength Hypertrophy</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Tactical CrossFit</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Cellular Recovery Sauna</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Vo2 Max Longevity</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Metabolic Nutrition</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-4">
              <h4 className="font-bebas text-xl tracking-wide uppercase text-white">Metabolic Dispatch</h4>
              <p className="font-display text-xs text-zinc-500 leading-relaxed">
                Receive weekly longevity research, dietary guides, and exclusive masterclass invitations.
              </p>

              {!newsletterSuccess ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail) setNewsletterSuccess(true);
                  }}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="concierge@aura.com"
                    className="rounded-xl bg-charcoal border border-white/5 px-4 py-2 text-xs placeholder-zinc-600 focus:outline-none focus:border-electric-red flex-1"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-white text-black font-display font-semibold text-xs px-4 py-2 hover:bg-zinc-200 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <span className="font-display text-[11px] font-semibold text-electric-red text-glow-red uppercase block">
                  SYSTEM ACTIVE. WELCOME TO THE CIRCLE.
                </span>
              )}
            </div>
          </div>

          {/* Bottom copyright details */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-display text-zinc-600">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span>&copy; {new Date().getFullYear()} AURA Athletics Ltd. All rights, designs, and biomechanics reserved.</span>
              <span>
                Build by{" "}
                <a
                  href="https://vasudevai.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-electric-red transition-colors font-semibold underline underline-offset-4"
                >
                  vasudev ai
                </a>
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-white transition-colors">Privacy Charter</a>
              <a href="#home" className="hover:text-white transition-colors">Terms of Sanctuary Use</a>
              <a href="#home" className="hover:text-white transition-colors">Diagnostic Disclaimers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
