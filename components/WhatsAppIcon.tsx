"use client";

import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-16 right-3 z-50 bg-gradient p-3 md:p-4 rounded-full">
      <Link href="https://wa.me/+60166256738">
        <BsWhatsapp size={30} className="text-white" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
