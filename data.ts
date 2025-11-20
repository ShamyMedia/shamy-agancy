
// --- مكتبة صور الموقع (Centralized Images) ---
// قم بوضع الصور في مجلد public/images بهذه الأسماء
export const IMAGES = {
  logo: "/images/logo.svg", // تم التصحيح لـ SVG ليتطابق مع الملف الموجود
  favicons: {
    default: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png"
  },
  heroBg: "/images/hero-bg.jpg",
  aboutBg: "/images/about-bg.jpg",
  customWork: {
    img1: "/images/custom-1.jpg",
    img2: "/images/custom-2.jpg",
    main: "/images/custom-3.jpg"
  },
  solutions: {
    restaurant: "/images/solution-restaurant.jpg",
    clinic: "/images/solution-clinic.jpg",
    travel: "/images/solution-travel.jpg",
    design: "/images/solution-design.jpg"
  }
};

// --- بيانات التواصل والروابط ---
export const CONTACT_INFO = {
  whatsappNumber: "201006404614", // الرقم الدولي بدون +
  phoneDisplay: "01006404614", // الرقم كما يظهر للعميل
  whatsappLink: "https://wa.me/201006404614",
  social: {
    facebook: "https://www.facebook.com/shamymediaeg",
    instagram: "https://www.instagram.com/shamymedia.eg/",
    behance: "https://www.behance.net/shamymedia",
  }
};

// --- بيانات الباقات (Pricing) ---
// تم استبدال الإيموجي بمفتاح أيقونة برمجية لضمان الاحترافية
export const PACKAGES = [
  {
    name: "باقة المطاعم",
    icon: "restaurant",
    price: "1800 جنيه",
    features: ["منيو إلكتروني جاهز", "روابط طلب سريع", "إضافة الصور والعروض", "تعديل مجاني أول أسبوع", "دعم 7 أيام"],
    featured: true
  },
  {
    name: "باقة العيادات",
    icon: "clinic",
    price: "2200 جنيه",
    features: ["جدول أسبوعي", "نظام حجز بسيط", "صفحة خدمات", "أرشيف مرضى (اختياري)", "تذكير بالمواعيد"],
    featured: false
  },
  {
    name: "باقة مكاتب السفر",
    icon: "travel",
    price: "2500 جنيه",
    features: ["نظام حجز تذاكر", "إدارة رحلات", "حسابات للموظفين", "طباعة بيانات العميل", "تقارير مالية مبسطة"],
    featured: true
  },
  {
    name: "باقة التصميم",
    icon: "design",
    price: "600 جنيه",
    features: ["تصميم لوجو احترافي", "بوستات شهرية", "Templates جاهزة", "تصميم مطبوعات", "ملفات PDF عالية الجودة"],
    featured: false
  }
];

// --- بيانات الحلول (Solutions) ---
export const SOLUTIONS_DATA = [
  { 
      title: 'أصحاب المطاعم', 
      problem: 'المنيو بيتغير… الطباعة غالية… والطلب غلط بيزعّل الزبون.',
      solution: 'منيو إلكتروني جاهز + صفحة طلبات + تصميم محترم.',
      result: 'شكل أحسن، تنظيم، وتقليل الأخطاء.',
      image: IMAGES.solutions.restaurant
  },
  { 
      title: 'العيادات', 
      problem: 'مواعيد مكركبة… مرضى كتير… ستاف مش متابع.',
      solution: 'نظام حجز + جدول أسبوعي + أرشيف للمرضى.',
      result: 'وقت منظم، ضغط أقل، ورضا أعلى للمرضى.',
      image: IMAGES.solutions.clinic
  },
  { 
      title: 'مكاتب السفر والشحن', 
      problem: 'زحمة على الصفحات… والناس عايزة تذاكر بسرعة.',
      solution: 'نظام تذاكر إلكتروني + إدارة رحلات جاهزة.',
      result: 'مبيعات أسرع، وطلبات مضبوطة.',
      image: IMAGES.solutions.travel
  },
  { 
      title: 'شغل التصميم', 
      problem: 'محتاج شغل نظيف يتسلّم بسرعة؟',
      solution: 'لوجو – بوستات – مطبوعات – شنط – هويات كاملة.',
      result: 'شكل محترف يجذب الزبون ويزود الثقة.',
      image: IMAGES.solutions.design
  },
];

// --- بيانات الميزات (Benefits) ---
export const BENEFITS_DATA = [
  { icon: 'speed', title: 'شغل سريع وواضح', description: 'تسليم خلال 24–48 ساعة حسب الخدمة.' },
  { icon: 'ready', title: 'كلّها حلول جاهزة', description: 'مفيش وجع دماغ… كل حاجة معمولة ومجهزة.' },
  { icon: 'price', title: 'سعر ثابت وواضح', description: 'بدون مفاجآت أو زيادات في التكلفة.' },
  { icon: 'support', title: 'دعم محترم بعد الشغل', description: 'تواصل مباشر واتساب لأي تعديل بسيط.' },
  { icon: 'design', title: 'شكل شغل يفتح نفس الزبون', description: 'تصميمات نظيفة، ألوان مرتّبة، وطريقة عرض محترمة.' },
];