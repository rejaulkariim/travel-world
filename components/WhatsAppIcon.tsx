"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppIcon = () => {
  return (
    <div className="hidden md:flex">
      <FloatingWhatsApp
        phoneNumber="+60182947517"
        accountName="Rejaul Karim"
        className="text-black"
      />
    </div>
  );
};

export default WhatsAppIcon;
