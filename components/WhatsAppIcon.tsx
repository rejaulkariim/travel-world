"use client";

import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-20 md:bottom-4 right-2 z-50 bg-gradient p-3 rounded-full">
      <Link href="https://wa.me/+60166256738">
        <BsWhatsapp size={30} className="text-white" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
