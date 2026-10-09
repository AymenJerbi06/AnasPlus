import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/desktop_image_width_500_height_auto/public/2025-04/2504_fitness-first-region-berlin-1400px.jpg.webp", out: "public/images/gyms/berlin.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2023-09/fitness-first-hero-bielefeld-4320x2160px.jpg.webp", out: "public/images/gyms/bielefeld.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2023-09/fitness-first-hero-bremen-4320x2160px.jpg.webp", out: "public/images/gyms/bremen.webp" },
  { url: "https://lifefitgroup.widen.net/content/owiotvn9lh/web/fitness-first-regio-darmstadt.jpeg", out: "public/images/gyms/darmstadt.jpg" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/desktop_image_width_500_height_auto/public/2023-09/fitness-first-hero-dresden-4320x2160px.jpg.webp", out: "public/images/gyms/dresden.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2020-07/fitness-first-region-duesseldorf-1400px.jpg.webp", out: "public/images/gyms/duesseldorf.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2025-04/2504_fitness-first-region-frankfurt-1400px.jpg.webp", out: "public/images/gyms/frankfurt.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2023-09/fitness-first-fitnessstudios-goettingen-hero-4320x2160_1.jpg.webp", out: "public/images/gyms/goettingen.webp" },
];

async function downloadOne({ url, out }) {
  const dest = path.resolve(process.cwd(), out);
  await mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; asset-fetch-script/1.0)" } });
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
    await Promise.all(assets.slice(i, i + batchSize).map(downloadOne));
  }
}

run();
