// Curated Unsplash imagery for premium interior renovation portfolio.
const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroGallery = [
  { src: u("photo-1600585154340-be6161a56a0c"), alt: "Living modern renovat cu finisaje premium" },
  { src: u("photo-1600566753190-17f0baa2a6c3"), alt: "Bucătărie modernă cu marmură" },
  { src: u("photo-1600607687939-ce8a6c25118c"), alt: "Baie de lux cu piatră naturală" },
];

export const gallerySmall = [
  { src: u("photo-1615529182904-14819c35db37"), alt: "Baie renovată premium" },
  { src: u("photo-1600210492486-724fe5c67fb0"), alt: "Living amenajat modern" },
  { src: u("photo-1600607687644-c7171b42498f"), alt: "Bucătărie contemporană" },
  { src: u("photo-1616486338812-3dadae4b4ace"), alt: "Dormitor cu design curat" },
  { src: u("photo-1600566753086-00f18fe6ba68"), alt: "Placare gresie porțelanată" },
  { src: u("photo-1600585154526-990dced4db0d"), alt: "Detaliu finisaj marmură" },
];

export const galleryLarge = [
  { src: u("photo-1600607687920-4e2a09cf159d"), alt: "Bucătărie premium Iași" },
  { src: u("photo-1600585154363-67eb9e2e2099"), alt: "Living luminos amenajat" },
  { src: u("photo-1616486788371-62d930495c44"), alt: "Living cu tavan din gips carton" },
  { src: u("photo-1600210491892-03d54c0aaf87"), alt: "Baie mică renovată" },
  { src: u("photo-1600566752355-35792bedcfea"), alt: "Coridor cu iluminat LED ascuns" },
  { src: u("photo-1616047006789-b7af5afb8c20"), alt: "Cameră modernă cu marmură" },
  { src: u("photo-1618221195710-dd6b41faaea6"), alt: "Living scandinav renovat" },
  { src: u("photo-1600585152220-90363fe7e115"), alt: "Bucătărie cu insulă" },
];

export const portfolioBig = [
  "photo-1600585154340-be6161a56a0c",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600585154526-990dced4db0d",
  "photo-1615529182904-14819c35db37",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1600607687644-c7171b42498f",
  "photo-1616486338812-3dadae4b4ace",
  "photo-1600566753086-00f18fe6ba68",
  "photo-1600607687920-4e2a09cf159d",
  "photo-1600585154363-67eb9e2e2099",
  "photo-1616486788371-62d930495c44",
  "photo-1600210491892-03d54c0aaf87",
  "photo-1600566752355-35792bedcfea",
  "photo-1616047006789-b7af5afb8c20",
  "photo-1618221195710-dd6b41faaea6",
  "photo-1600585152220-90363fe7e115",
  "photo-1600121848594-d8644e57abab",
  "photo-1600607688969-a5bfcd646154",
  "photo-1600566753151-384129cf4e3e",
  "photo-1617104678098-de229db51175",
  "photo-1615873968403-89e068629265",
  "photo-1600585153490-76fb20a32601",
  "photo-1600566753104-685f4f24cb4d",
  "photo-1600607687166-48ba0b7b6b7a",
  "photo-1600607687126-c2b7fa1b6b6d",
  "photo-1600607687710-1c6c1e56b4c7",
  "photo-1600566753051-6057c1c1c1c1",
  "photo-1600210492493-0946911123c8",
  "photo-1600566753376-12c8ab7fb75b",
].map((id, i) => ({ src: u(id, 900), alt: `Proiect renovare Iași ${i + 1}` }));
