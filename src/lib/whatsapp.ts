export const getWhatsAppLink = (imageUrl?: string) => {
  const phone = "918826858845"; // 👉 YOUR NUMBER

  const message = imageUrl
    ? `Hi, I saw the mandir designs on your website.
Can you share location & details?

Design: ${imageUrl}`
    : "Hi, I am looking for a mandir, visted your website. Please share location and catalogue.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};