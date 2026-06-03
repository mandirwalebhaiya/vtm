export const getWhatsAppLink = (imageUrl: string) => {
  const phone = "918826858845"; // 👉 YOUR NUMBER

  const message = `Hi, I saw this mandir design on your website.
Can you share price & details?

Design: ${imageUrl}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};