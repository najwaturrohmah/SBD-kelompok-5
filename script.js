const translations = {
  id: {
    skip: "Lewati ke konten",
    "nav.about": "Tentang", "nav.education": "Pendidikan", "nav.experience": "Pengalaman", "nav.skills": "Keahlian", "nav.contact": "Kontak",
    "hero.eyebrow": "Mahasiswi Teknik Informatika", "hero.title": "Penuh rasa ingin tahu.<br><em>Siap berkontribusi.</em>", "hero.description": "Saya Nabila, mahasiswi Teknik Informatika tahun pertama yang senang belajar bersama, memikirkan solusi, dan memberi kontribusi dengan penuh perhatian.", "hero.experience": "Lihat pengalaman", "hero.cv": "Unduh CV", "hero.contact": "Hubungi saya", "hero.location": "Berbasis di Jakarta, Indonesia", "hero.note": "Terbuka untuk kesempatan belajar dan kolaborasi yang bermakna.", "hero.scroll": "Gulir untuk menjelajah",
    "about.label": "Tentang", "about.title": "Awal yang penuh perhatian<br>untuk perjalanan panjang.", "about.copy": "Saya sedang membangun fondasi di bidang Teknik Informatika di UIN Syarif Hidayatullah Jakarta. Di luar perkuliahan, saya menghargai pengalaman yang membantu saya memahami orang lain, bertanggung jawab, dan bekerja dengan tenang sebagai bagian dari tim.", "about.copy2": "Pengalaman awal saya dalam organisasi siswa dan dukungan acara mengajarkan saya untuk mendengarkan dengan saksama, mengambil keputusan dengan pertimbangan, dan hadir dengan empati. Saya antusias untuk terus berkembang melalui kesempatan nyata.",
    "education.label": "Pendidikan", "education.title": "Belajar dengan<br>tujuan.", "education.uni": "S1 Teknik Informatika", "education.current": "Sedang menempuh studi",
    "experience.label": "Pengalaman", "experience.title": "Hadir untuk<br>tim.", "experience.k3.title": "Anggota Divisi K3", "experience.k3.copy": "Bertanggung jawab mendukung kesehatan dan keselamatan mahasiswa selama acara.", "experience.mpls.title": "Mentor MPLS", "experience.mpls.copy": "Membimbing siswa baru dan membantu menciptakan pengalaman orientasi sekolah yang ramah.", "experience.osis.title": "Anggota Divisi Sosial OSIS", "experience.osis.copy": "Berpartisipasi dalam kegiatan sosial dan berkontribusi pada inisiatif komunitas siswa.",
    "skills.label": "Keahlian", "skills.title": "Fondasi<br>yang berarti.", "skills.technical": "Teknis", "skills.professional": "Profesional", "skills.collaboration": "Kolaborasi tim", "skills.empathy": "Empati & kecerdasan emosional", "skills.decision": "Pengambilan keputusan", "skills.critical": "Berpikir kritis", "skills.languages": "Bahasa", "skills.native": "Native", "skills.active": "Aktif",
    "contact.label": "Kontak", "contact.title": "Mari mulai<br><em>percakapan.</em>", "contact.copy": "Jika Anda mencari seseorang yang ingin tahu, dapat diandalkan, dan siap belajar, saya dengan senang hati akan mendengar kabar dari Anda.", "footer.note": "Dirancang dengan penuh perhatian."
  }
};

const html = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const langToggle = document.querySelector("#language-toggle");
const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const savedTheme = localStorage.getItem("nabila-theme");
if (savedTheme) html.dataset.theme = savedTheme;
function updateThemeLabel() {
  const dark = html.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  document.querySelector(".icon-sun").style.display = dark ? "none" : "block";
  document.querySelector(".icon-moon").style.display = dark ? "block" : "none";
}
themeToggle.addEventListener("click", () => { html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark"; localStorage.setItem("nabila-theme", html.dataset.theme); updateThemeLabel(); });
function setLanguage(language) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (language === "id" && translations.id[key]) element.innerHTML = translations.id[key];
    else element.innerHTML = element.dataset.original || element.innerHTML;
    if (!element.dataset.original) element.dataset.original = language === "id" ? document.querySelector(`[data-i18n="${key}"]`).innerHTML : element.innerHTML;
  });
  if (language === "id") {
    document.querySelectorAll("[data-i18n]").forEach((element) => { if (translations.id[element.dataset.i18n]) element.innerHTML = translations.id[element.dataset.i18n]; });
  } else {
    window.location.reload();
  }
  html.lang = language;
  langToggle.setAttribute("aria-label", language === "id" ? "Switch language to English" : "Switch language to Indonesian");
  document.querySelector(".language-en").style.fontWeight = language === "en" ? "700" : "500";
  document.querySelector(".language-id").style.fontWeight = language === "id" ? "700" : "500";
}
document.querySelectorAll("[data-i18n]").forEach((element) => { element.dataset.original = element.innerHTML; });
langToggle.addEventListener("click", () => setLanguage(html.lang === "en" ? "id" : "en"));
menuToggle.addEventListener("click", () => { const open = mobileMenu.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(open)); });
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { mobileMenu.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));
document.querySelector("#year").textContent = new Date().getFullYear();
updateThemeLabel();
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
