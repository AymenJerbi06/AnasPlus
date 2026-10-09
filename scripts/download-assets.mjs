// One-off asset fetcher for the Fitness First "Personal Training" clone.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  // Fonts
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/cohesion/Soho-Bold.woff2", out: "public/fonts/Soho-Bold.woff2" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/cohesion/Soho-Bold-Italic.woff2", out: "public/fonts/Soho-Bold-Italic.woff2" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/cohesion/SohoGothicPro-Medium.woff2", out: "public/fonts/SohoGothicPro-Medium.woff2" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/cohesion/SohoGothicPro-Regular.woff2", out: "public/fonts/SohoGothicPro-Regular.woff2" },
  // Logo
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/images/lfg/logo/fitness-first-logo-primary-white-970px.png", out: "public/images/logo-white.png" },
  // Hero image
  { url: "https://lifefitgroup.widen.net/content/v7gmbynm3f/web/fitness-first-personal-training-hero-subpages-large-mobile_320x560.jpg", out: "public/images/hero-personal-training.jpg" },
  // FAQ section image
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/2024-03/dropsaetze_beinpresse.jpg", out: "public/images/faq-training.jpg" },
  // Article cards
  { url: "https://lifefitgroup.widen.net/content/wcxrwuk7mg/jpeg/fitness-first-physio-rezeption-checkin-therapeutin-haelt-formular.jpeg", out: "public/images/article-trainingsplan.jpg" },
  { url: "https://lifefitgroup.widen.net/content/70ndywvtcw/jpeg/fitness-first-mann-laechelt-in-die-kamera.jpeg", out: "public/images/article-muskelaufbau.jpg" },
  { url: "https://lifefitgroup.widen.net/content/svssbi4pm7/jpeg/fitness-first-freestyle-paar-abklatschen-sitzen-kurse.jpeg", out: "public/images/article-rekomposition.jpg" },
];

async function downloadOne({ url, out }) {
  const dest = path.resolve(process.cwd(), out);
  await mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; asset-fetch-script/1.0)" },
  });
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK  ${out}  (${buf.length} bytes)`);
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
}

run();
