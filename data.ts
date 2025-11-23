
import { Content } from './types';

export const contentData: { en: Content; ar: Content } = {
  en: {
    header: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      callAction: "Start Now",
    },
    hero: {
      headline: "Get Online Ready... Start Receiving Customers in Just 24 Hours.",
      subheadline: "With Shamy Media, you get a ready-made system that works immediately: No subscriptions, no complexity, no waiting. Just send your data... and we deliver a solution that grows your business from day one.",
      primaryCta: "Start Now",
      secondaryCta: "View Plans",
    },
    whyUs: {
      title: "We aren't just a design agency... We make your work easier.",
      subtitle: "Forget technical headaches. We handle everything.",
      features: [
        { id: '1', title: "Don't Waste Time", description: "Delivery within 24-48 hours, no matter your project type.", icon: 'Zap' },
        { id: '2', title: "Don't Get Lost", description: "Everything is ready, organized, and set up for you.", icon: 'Palette' },
        { id: '3', title: "Don't Overspend", description: "Fixed, clear, one-time payments. No hidden fees.", icon: 'Tag' },
        { id: '4', title: "Quick Support", description: "Fast WhatsApp support for any simple edits you need.", icon: 'Headphones' },
      ]
    },
    services: {
      title: "Choose Your Solution",
      subtitle: "Select your industry and get ready to work immediately.",
      items: [
        {
          id: 'rest',
          title: "Restaurants & Cafes",
          description: "A professional menu that makes customers order faster. QR ready, instant price changes, and a system anyone can use.",
          icon: 'Utensils',
          link: 'https://shamymedia.github.io/restaurant-menu-demo/',
          cta: 'View Menu Demo'
        },
        {
          id: 'clinic',
          title: "Clinics & Doctors",
          description: "A respectable page for the doctor. Booking without overcrowding, ensuring your schedule is respected and saving time.",
          icon: 'Stethoscope',
          link: 'https://clinicbooking2.netlify.app/',
          cta: 'View Booking Demo'
        },
        {
          id: 'travel',
          title: "Travel Agencies",
          description: "A neat page showing trips clearly. Fast WhatsApp booking, full trip schedules, and a professional look.",
          icon: 'Bus',
          link: 'https://shamy-bus-tickets-demo.vercel.app/',
          cta: 'View Ticket Demo'
        }
      ]
    },
    process: {
      title: "How It Works",
      subtitle: "3 steps... and you are ready to work.",
      steps: [
        { id: '1', title: "Contact Us", description: "Tell us your idea or send your data, that's it.", icon: "MessageCircle" },
        { id: '2', title: "We Build It", description: "Design + Coding + Setup... all done in 24-48 hours.", icon: "Hammer" },
        { id: '3', title: "Start Working", description: "Receive your system and start immediately. Not happy? Money back guarantee.", icon: "Rocket" }
      ]
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "Pick what suits your project... Delivered in 2 days.",
      categories: [
        { id: 'social', label: 'Social Media' },
        { id: 'restaurant', label: 'Restaurants' },
        { id: 'clinic', label: 'Clinics' },
        { id: 'travel', label: 'Travel' }
      ],
      items: [
        // Social
        {
          id: 'soc-1', category: 'social', title: 'Starter', price: '250 EGP', period: 'Starts from',
          features: ["4 Professional Designs/mo", "High Quality"], recommended: false
        },
        {
          id: 'soc-2', category: 'social', title: 'Standard', price: '450 EGP', period: 'Starts from',
          features: ["8 Professional Designs/mo", "High Quality"], recommended: true
        },
        {
          id: 'soc-3', category: 'social', title: 'Business', price: '1600 EGP', period: 'Starts from',
          features: ["30 Professional Designs/mo", "High Quality", "Fast Delivery"], recommended: false
        },
        // Restaurant
        {
          id: 'rest-1', category: 'restaurant', title: 'PDF Menu', price: '450 EGP', period: 'One Time',
          features: ["Simple Menu (Easy to Edit)", "Print-Ready QR Code"], recommended: false
        },
        {
          id: 'rest-2', category: 'restaurant', title: 'Smart Menu', price: '800 EGP', period: 'One Time',
          features: ["Full Digital Menu (12 Pages)", "Photos + Descriptions", "Easy Navigation", "Print-Ready QR Code"], recommended: true
        },
        {
          id: 'rest-3', category: 'restaurant', title: 'Full System', price: '1600 EGP', period: 'One Time',
          features: ["Unlimited Items", "Social Links + Map", "Free Hosting", "Print-Ready QR Code"], recommended: false
        },
        // Clinic
        {
          id: 'cli-1', category: 'clinic', title: 'Profile Site', price: '450 EGP', period: 'One Time',
          features: ["Professional Doctor Page", "WhatsApp Booking", "Free Hosting"], recommended: false
        },
        {
          id: 'cli-2', category: 'clinic', title: 'Basic System', price: '1200 EGP', period: 'One Time',
          features: ["Appointment Verification Form", "Prevent Double Booking", "Tech Support"], recommended: false
        },
        {
          id: 'cli-3', category: 'clinic', title: 'Full System', price: '2200 EGP', period: 'One Time',
          features: ["Full System + Dashboard", "Patient Database", "Map + Contact Info"], recommended: true
        },
        // Travel
        {
          id: 'trav-1', category: 'travel', title: 'Static Site', price: '450 EGP', period: 'One Time',
          features: ["Simple Booking Page", "Direct WhatsApp", "Print-Ready QR Code"], recommended: false
        },
        {
          id: 'trav-2', category: 'travel', title: 'Profile Site', price: '800 EGP', period: 'One Time',
          features: ["Better Design", "Trip Details Display", "Print-Ready QR Code"], recommended: false
        },
        {
          id: 'trav-3', category: 'travel', title: 'Full System', price: '1600 EGP', period: 'One Time',
          features: ["Trip Management", "Full Schedule", "WhatsApp Confirmation", "Free Hosting + Map"], recommended: true
        }
      ]
    },
    faq: {
      title: "FAQ",
      subtitle: "Answers to what you're thinking before you ask.",
      items: [
        { id: '1', question: 'Is there a monthly subscription?', answer: 'No. You pay once only (for websites). Social media designs are monthly.' },
        { id: '2', question: 'Can I edit after delivery?', answer: 'Yes, simple edits can be done via WhatsApp.' },
        { id: '3', question: 'Is hosting free?', answer: 'Yes, for all ready-made projects.' },
        { id: '4', question: 'Can you add extra features?', answer: 'Of course... upon request.' },
      ]
    },
    testimonials: {
      title: "Social Proof",
      subtitle: "People worked with us... and came back for more.",
      items: [
        { 
          id: '1', 
          name: 'Lipo Fit', 
          role: 'Health Brand', 
          content: 'We improved our ads and achieved a sales increase.', 
          time: '10:30 AM',
          image: 'https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/lipofit1.jpg'
        },
        { 
          id: '2', 
          name: 'Dr. Noura Samy', 
          role: 'Dental Clinic', 
          content: 'Saved us a terrible amount of time on appointments.', 
          time: 'Yesterday',
          image: 'https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/solution-clinic.jpg'
        },
        { 
          id: '3', 
          name: 'Tasty Burger', 
          role: 'Restaurant', 
          content: 'Awesome menu, customers loved it.', 
          time: '2:15 PM',
          image: 'https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/custom-1.jpg'
        },
      ]
    },
    footer: {
      copyright: "© 2024 Shamy Media. All rights reserved.",
      address: "Ready to increase sales?",
      phone: "+20 100 640 4614"
    }
  },
  ar: {
    header: {
      home: "الرئيسية",
      services: "خدماتنا",
      pricing: "الأسعار",
      contact: "اتصل بنا",
      callAction: "ابدأ الآن",
    },
    hero: {
      headline: "خليك جاهز أونلاين… وابدأ تستقبل عملاء خلال ٢٤ ساعة فقط.",
      subheadline: "مع شامي ميديا، هتاخد صفحة أو نظام جاهز يشغّل شغلك فورًا: – بدون اشتراكات – بدون تعقيد – بدون انتظار. كل اللي عليك تبعت البيانات… واحنا نسلّمك حاجة تفتح النفس وتكبر شغلك من أول يوم.",
      primaryCta: "ابدأ دلوقتي",
      secondaryCta: "شوف الباقات",
    },
    whyUs: {
      title: "إحنا مش شركة تصميم… إحنا ناس بتسهّل عليك الشغل.",
      subtitle: "ريح دماغك من التفاصيل التقنية، احنا بنجهزلك كل حاجة.",
      features: [
        { id: '1', title: 'مش هتضيع وقت', description: 'بنسلّم خلال ٢٤–٤٨ ساعة، مهما كان نوع مشروعك.', icon: 'Zap' },
        { id: '2', title: 'مش هتتوه', description: 'كل حاجة جاهزة ومترتبة، وإحنا بنظبطها عنك.', icon: 'Palette' },
        { id: '3', title: 'مش هتصرف كتير', description: 'أسعار ثابتة وواضحة وتدفع مرة واحدة.', icon: 'Tag' },
        { id: '4', title: 'دعم سريع', description: 'على الواتساب لأي تعديل بسيط محتاجه.', icon: 'Headphones' },
      ]
    },
    services: {
      title: "اختار نوع مشروعك",
      subtitle: "وخليك جاهز للشغل فورًا.",
      items: [
        {
          id: 'rest',
          title: "المطاعم والكافيهات",
          description: "منيو شكلّه محترف يخلي العميل يطلب أسرع. QR جاهز للطباعة، وأسعار تقدر تغيرها في ثواني.",
          icon: 'Utensils',
          link: 'https://shamymedia.github.io/restaurant-menu-demo/',
          cta: 'جرب المنيو'
        },
        {
          id: 'clinic',
          title: "العيادات والأطباء",
          description: "صفحة محترمة تعرّف الدكتور. حجز من غير تكدّس، نظام يضمن احترام مواعيدك ورسائل تأكيد.",
          icon: 'Stethoscope',
          link: 'https://clinicbooking2.netlify.app/',
          cta: 'جرب حجز العيادة'
        },
        {
          id: 'travel',
          title: "مكاتب السفر والرحلات",
          description: "صفحة مرتبة تعرض الرحلات بوضوح. حجز سريع عن طريق الواتساب وجدول رحلات كامل.",
          icon: 'Bus',
          link: 'https://shamy-bus-tickets-demo.vercel.app/',
          cta: 'جرب حجز التذاكر'
        }
      ]
    },
    process: {
      title: "خطوات العمل",
      subtitle: "٣ خطوات… وتبقى جاهز للشغل.",
      steps: [
        { id: '1', title: "تواصل معانا", description: "تقول لنا فكرتك أو تبعت بياناتك وخلاص.", icon: "MessageCircle" },
        { id: '2', title: "بنجهّز كل حاجة", description: "تصميم + برمجة + ضبط النظام… كله بيخلص في ٢٤–٤٨ ساعة.", icon: "Hammer" },
        { id: '3', title: "تستلم جاهز للشغل", description: "تفتحه وتبدأ تشتغل فورًا. ولو مش عاجبك؟ استرجع فلوسك.", icon: "Rocket" }
      ]
    },
    pricing: {
      title: "اختار اللي يناسب مشروعك",
      subtitle: "وكلها تتسلم خلال يومين.",
      categories: [
        { id: 'social', label: 'تصميمات السوشيال' },
        { id: 'restaurant', label: 'المطاعم' },
        { id: 'clinic', label: 'العيادات' },
        { id: 'travel', label: 'حجز التذاكر' }
      ],
      items: [
        // Social
        {
          id: 'soc-1', category: 'social', title: 'البداية', price: '٢٥٠ جنيه', period: 'تبدأ من',
          features: ["٤ تصميم احترافي شهري", "جودة عالية جداً"], recommended: false
        },
        {
          id: 'soc-2', category: 'social', title: 'التوفير', price: '٤٥٠ جنيه', period: 'تبدأ من',
          features: ["٨ تصميم احترافي شهري", "جودة عالية جداً"], recommended: true
        },
        {
          id: 'soc-3', category: 'social', title: 'الشركات', price: '١٦٠٠ جنيه', period: 'تبدأ من',
          features: ["٣٠ تصميم احترافي شهري", "جودة عالية جداً", "تسليم سريع"], recommended: false
        },
        // Restaurant
        {
          id: 'rest-1', category: 'restaurant', title: 'منيو PDF', price: '٤٥٠ جنيه', period: 'مرة واحدة',
          features: ["منيو بسيط وسهل يتعدل", "طباعة QR Code"], recommended: false
        },
        {
          id: 'rest-2', category: 'restaurant', title: 'منيو ذكي', price: '٨٠٠ جنيه', period: 'مرة واحدة',
          features: ["منيو الكتروني ١٢ صفحة", "صور + وصف للأطباق", "تنقل سهل وموقع تفاعلي", "طباعة QR Code"], recommended: true
        },
        {
          id: 'rest-3', category: 'restaurant', title: 'نظام كامل', price: '١٦٠٠ جنيه', period: 'مرة واحدة',
          features: ["أصناف غير محدودة", "روابط تواصل + خريطة", "استضافة مجانية", "طباعة QR Code"], recommended: false
        },
        // Clinic
        {
          id: 'cli-1', category: 'clinic', title: 'موقع تعريفي', price: '٤٥٠ جنيه', period: 'One Time',
          features: ["صفحة دكتور محترمة", "حجز واتساب", "استضافة مجانية"], recommended: false
        },
        {
          id: 'cli-2', category: 'clinic', title: 'نظام أساسي', price: '١٢٠٠ جنيه', period: 'One Time',
          features: ["فورم يتحقق من المواعيد", "منع تكرار الحجز", "دعم فني"], recommended: false
        },
        {
          id: 'cli-3', category: 'clinic', title: 'نظام كامل', price: '٢٢٠٠ جنيه', period: 'One Time',
          features: ["نظام شامل + لوحة تحكم", "قاعدة بيانات مرضى", "خريطة + تواصل"], recommended: true
        },
        // Travel
        {
          id: 'trav-1', category: 'travel', title: 'موقع ثابت', price: '٤٥٠ جنيه', period: 'One Time',
          features: ["صفحة حجز بسيطة", "واتساب مباشر", "طباعة QR Code"], recommended: false
        },
        {
          id: 'trav-2', category: 'travel', title: 'موقع تعريفي', price: '٨٠٠ جنيه', period: 'One Time',
          features: ["تصميم أقوى وشكل أفضل", "عرض تفاصيل الرحلات", "طباعة QR Code"], recommended: false
        },
        {
          id: 'trav-3', category: 'travel', title: 'نظام كامل', price: '١٦٠٠ جنيه', period: 'One Time',
          features: ["إدارة رحلات + جدول كامل", "تأكيد الحجز واتساب", "استضافة + خريطة", "طباعة QR Code"], recommended: true
        }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على اللي هتفكر فيه قبل ما تسأل.",
      items: [
        { id: '1', question: 'هل فيه اشتراك شهري؟', answer: 'لا، دفع مرة واحدة فقط للمواقع. باقات السوشيال ميديا فقط هي اللي باشتراك شهري.' },
        { id: '2', question: 'هل أقدر أعدل بعد التسليم؟', answer: 'أيوه، تعديلات بسيطة على الواتساب.' },
        { id: '3', question: 'الاستضافة مجانية؟', answer: 'نعم، لكل المشاريع الجاهزة.' },
        { id: '4', question: 'ينفع تضيف حاجات زيادة؟', answer: 'طبعاً… حسب الطلب.' },
      ]
    },
    testimonials: {
      title: "شركاء النجاح",
      subtitle: "ناس اشتغلت معانا… ورجعت تشتغل تاني.",
      items: [
        { 
          id: '1', 
          name: 'ليبو فيت', 
          role: 'براند صحي', 
          content: 'قدرنا نطور اعلاناتنا وحققنا زيادة في المبيعات.', 
          time: '١٠:٣٠ ص',
          image: 'https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/lipofit1.jpg'
        },
        { 
          id: '2', 
          name: 'د. نورا سامي', 
          role: 'عيادة أسنان', 
          content: 'وفّر علينا وقت رهيب في المواعيد.', 
          time: 'أمس',
          image: 'https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/solution-clinic.jpg'
        },
        { 
          id: '3', 
          name: 'تاستي برجر', 
          role: 'مطعم', 
          content: 'منيو زي الفل، العملاء حبّوه.', 
          time: '٢:١٥ م',
          image: 'https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/custom-1.jpg'
        },
      ]
    },
    footer: {
      copyright: "© ٢٠٢٤ شامي ميديا. جميع الحقوق محفوظة.",
      address: "جاهز تزوّد مبيعاتك وتوفّر وقت؟ ابعت لنا دلوقتي.",
      phone: "+20 100 640 4614"
    }
  }
};
