"use client";

import { trackViaFbPixel } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20there%2C%20i%20am%20interested%20in%20your%20product%20Mobile%20Connect%20and%20would%20like%20to%20know%20more%20about%20it.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-tooltip flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 ease-out hover:scale-105"
      onClick={() =>
        trackViaFbPixel("lead_whatsapp", `lead_whatsapp_${Date.now()}`, {})
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-7"
        aria-hidden
      >
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.12.82.83-3.04-.19-.31a8.13 8.13 0 0 1-1.25-4.3c0-4.49 3.66-8.15 8.17-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.49-3.66 8.14-8.16 8.14Zm4.47-6.1c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.96-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
