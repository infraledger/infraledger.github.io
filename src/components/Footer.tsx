
import { Globe, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Coverage",
      links: [
        { label: "Infrastructure Projects", href: "#" },
        { label: "Capital Markets", href: "#" },
        { label: "Policy & Regulation", href: "#" },
        { label: "Technology Trends", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Market Reports", href: "#" },
        { label: "Research Database", href: "#" },
        { label: "Event Calendar", href: "#" },
        { label: "Industry Directory", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About InfraLedger", href: "#" },
        { label: "Editorial Team", href: "#" },
        { label: "Partnerships", href: "#" },
        { label: "Careers", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/22c4d9da-1751-48f9-92d5-30f3ff8b9734.png" 
              alt="InfraLedger" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The leading platform for infrastructure investment intelligence, 
              tracking global developments and market trends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 InfraLedger. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>24/7 Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
