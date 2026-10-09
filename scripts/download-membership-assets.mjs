import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  { url: "https://lifefitgroup.widen.net/content/cqjw3d5unt/web/fitness-first-website-desktop-header-oktober-keyvisual.jpg", out: "public/images/membership/hero.jpg" },
  { url: "https://lifefitgroup.widen.net/content/vdhyavadhm/web/fitnessfirst-bootyzone-020.jpg", out: "public/images/membership/area-booty-zone.jpg" },
  { url: "https://lifefitgroup.widen.net/content/lea1eq5kf9/web/fitness-first-trainer-hilft-frau-mit-egym-beinstrecker.jpg", out: "public/images/membership/area-egym.jpg" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2025-02/fitness-first-trainerin-zeigt-uebung-foam-roller-betreuung-physio_0.jpg.webp", out: "public/images/membership/area-recovery.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2024-06/fitness-first-langhantel-frau-mit-fokusierte-curls.jpg.webp", out: "public/images/membership/area-performance.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/mobile_resize_width_only_600xauto_webp/public/2024-06/fitness-first-hyrox-training-paar-split-squat-gewichte.jpg.webp", out: "public/images/membership/area-functional.webp" },
  { url: "https://lifefitgroup.widen.net/content/tdlrfrzsri/web/cropped_272_0_1580_1365_fitness-first-wiesbaden-im-kuenstlerviertel-003.jpg", out: "public/images/membership/club-experience.jpg" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/card_project_small_/public/2024-10/fitness-first-frau-und-mann-rucken-an-rucken-lachend_2_1.jpg.webp", out: "public/images/membership/offer-students.webp" },
  { url: "https://www.fitnessfirst.de/sites/g/files/tbchtk381/files/styles/card_project_small_/public/2024-08/file_24_1.jpg.webp", out: "public/images/membership/offer-corporate.webp" },
  { url: "https://lifefitgroup.widen.net/content/to9l1x7t53/web/fitness-first-frau-und-trainer-lachen-am-egym.jpg", out: "public/images/membership/offer-switchers.jpg" },
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
