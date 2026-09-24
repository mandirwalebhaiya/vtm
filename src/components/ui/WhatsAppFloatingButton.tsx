import { getWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Vaishno Temple on WhatsApp"
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.88 9.88 0 1 1 8.38 4.62Zm5.42-7.41c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.65-.94-2.26-.25-.59-.5-.51-.69-.52h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.27 5.19 4.59.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </span>
      <span className="whatsapp-float__label">Chat on WhatsApp</span>
    </a>
  );
}