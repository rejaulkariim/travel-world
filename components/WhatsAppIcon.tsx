"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppIcon = () => {
  return (
    <div className="hidden md:flex">
      <FloatingWhatsApp
        phoneNumber="+60166256738"
        accountName="Miah World"
        className="text-black"
      />
    </div>
  );
};

export default WhatsAppIcon;
