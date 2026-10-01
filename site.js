/* ============================================================
   ONE-EDIT BRANDING — change values here, never in the HTML.
   ============================================================ */
const SITE = {
  brand: "Admo UGC Studio",
  tagline: "15 scroll-stopping UGC videos for less than one hire's week.",
  whatsapp: "REPLACE_ME",          // e.g. "919854099385" — digits only, with country code
  email: "hello@admosolutions.online",
  demoVideoUrl: "",                // paste YouTube/Vimeo embed URL when ready
  packages: [
    {
      id: "starter",
      name: "Starter",
      videos: 5,
      price: 12000,
      blurb: "Test UGC on your hero products.",
      features: ["Up to 1-min video", "Professional shoot setup", "UGC scripting + editing", "Meta & Instagram ready", "2 basic revisions"]
    },
    {
      id: "growth",
      name: "Growth",
      videos: 15,
      price: 35000,
      popular: true,
      blurb: "A month of ad creative, done.",
      features: ["Up to 1-min video", "Professional shoot setup", "UGC scripting + editing", "Meta & Instagram ready", "2 basic revisions"]
    },
    {
      id: "custom",
      name: "Custom",
      videos: 0,
      price: 0,
      blurb: "Odd formats, bulk shoots, retainers.",
      features: ["Your brief, our crew", "Flexible video count", "Priority turnaround", "Dedicated manager"]
    }
  ]
};

function orderLink(pkgId, name, brand, phone, brief) {
  const p = SITE.packages.find(x => x.id === pkgId);
  const lines = [
    "New order — " + SITE.brand,
    "Package: " + (p ? p.name : pkgId) + (p && p.price ? " (Rs." + p.price.toLocaleString("en-IN") + ")" : ""),
    "Name: " + name,
    "Brand: " + brand,
    phone ? "Phone: " + phone : null,
    "Brief: " + brief
  ].filter(Boolean);
  return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
}
