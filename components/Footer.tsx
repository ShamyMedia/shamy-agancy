import React from 'react';
import { CONTACT_INFO } from '../data';
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode, title: string }> = ({ href, children, title }) => (
    <a href={href} title={title} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#6A3EEA] transition-all duration-300 transform hover:scale-110 hover:bg-purple-50 p-3 rounded-full">
        {children}
        <span className="sr-only">{title}</span>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F9FAFB]">
             <div className="bg-[#F5F3FF] py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">شامي ميديا</h2>
                    <p className="text-xl font-medium text-[#6A3EEA] mb-6">حلول جاهزة تساعد شغلك يكبر</p>
                    
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg flex items-center justify-center gap-2">
                         <Phone size={20} className="text-[#6A3EEA]" />
                         تواصل واتساب: 
                         <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#6A3EEA] transition-colors" dir="ltr">
                            {CONTACT_INFO.phoneDisplay}
                         </a>
                    </p>

                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <SocialIcon href={CONTACT_INFO.whatsappLink} title="WhatsApp">
                            <MessageCircle size={28} />
                        </SocialIcon>
                        <SocialIcon href={CONTACT_INFO.social.facebook} title="Facebook">
                            <Facebook size={28} />
                        </SocialIcon>
                        <SocialIcon href={CONTACT_INFO.social.instagram} title="Instagram">
                             <Instagram size={28} />
                        </SocialIcon>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-6 px-4">
                <div className="container mx-auto text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} شامي ميديا. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;