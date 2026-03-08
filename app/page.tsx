import Image from "next/image";
import Link from "next/link";
import {
  Printer,
  Camera,
  FileText,
  Image as ImageIcon,
  CreditCard,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { CTABanner } from "@/components/cta-banner";
import { QuickContactCard } from "@/components/quick-contact-card";
import { ScrollNav } from "@/components/scroll-nav";

const services = [
  {
    icon: Printer,
    title: "พิมพ์เอกสาร",
    description: "พิมพ์เอกสารทุกชนิด ขาว-ดำ และสี คมชัดทุกหน้า",
    color: "from-brand-blue to-brand-blue-dark",
    accent: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Camera,
    title: "ถ่ายรูปติดบัตร",
    description: "ถ่ายรูปติดบัตรทุกขนาด สวย คมชัด ได้มาตรฐาน",
    color: "from-brand-yellow-dark to-brand-yellow",
    accent: "bg-brand-yellow/15 text-brand-yellow-dark",
  },
  {
    icon: ImageIcon,
    title: "อัดรูป / ขยายรูป",
    description: "อัดรูปทุกขนาด ขยายรูปภาพคุณภาพสูง สีสดใส",
    color: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: FileText,
    title: "ถ่ายเอกสาร",
    description: "ถ่ายสำเนาเอกสาร คมชัด รวดเร็ว ราคาถูก",
    color: "from-brand-navy to-slate-700",
    accent: "bg-brand-navy/10 text-brand-navy",
  },
  {
    icon: CreditCard,
    title: "เคลือบบัตร / เคลือบเอกสาร",
    description: "เคลือบบัตรทุกขนาด ทนทาน กันน้ำ กันรอยขีดข่วน",
    color: "from-violet-500 to-purple-600",
    accent: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Sparkles,
    title: "งานพิมพ์พิเศษ",
    description: "สติกเกอร์ นามบัตร ใบปลิว โปสเตอร์ ไวนิล แบนเนอร์",
    color: "from-rose-500 to-pink-600",
    accent: "bg-rose-500/10 text-rose-600",
  },
];

const features = [
  { text: "รวดเร็ว รอรับได้เลย", icon: Zap },
  { text: "ราคาเป็นกันเอง", icon: Star },
  { text: "คุณภาพคมชัด", icon: CheckCircle2 },
  { text: "บริการเป็นกันเอง", icon: Sparkles },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <ScrollNav />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] noise-overlay">
        {/* Background */}

        {/* Decorative blobs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-brand-blue-light/30 rounded-full blur-3xl animate-blob delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-[15%] w-20 h-20 border-4 border-brand-yellow/30 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-40 left-[10%] w-16 h-16 bg-brand-yellow/20 rounded-full animate-float-delayed" />
        <div className="absolute top-[40%] right-[8%] w-12 h-12 border-4 border-white/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-[30%] left-[20%] w-6 h-6 bg-white/30 rounded-full animate-float" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/20">
                  <Sparkles className="w-4 h-4 text-brand-yellow" />
                  <span>ร้านพิมพ์ & ถ่ายรูปครบวงจร</span>
                </div>
              </div>

              <h1 className="animate-slide-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                <span className="text-brand-yellow drop-shadow-[0_2px_10px_rgba(255,210,51,0.3)]">
                  ภูสิท
                </span>{" "}
                โปร
              </h1>

              <p className="animate-slide-up delay-200 mt-6 text-lg sm:text-xl text-white/80 font-body max-w-lg mx-auto lg:mx-0 leading-relaxed">
                บริการพิมพ์เอกสาร ถ่ายรูปติดบัตร อัดรูป ถ่ายเอกสาร
                เคลือบบัตร และงานพิมพ์ทุกชนิด
                <span className="text-brand-yellow font-semibold">
                  {" "}รวดเร็ว คุณภาพดี ราคาเป็นกันเอง
                </span>
              </p>

              <div className="animate-slide-up delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-light text-brand-navy font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:shadow-brand-yellow/30 active:scale-95"
                >
                  ดูบริการทั้งหมด
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all border border-white/20 hover:border-white/40"
                >
                  <Phone className="w-5 h-5" />
                  โทรหาเรา
                </a>
              </div>

              {/* Quick features */}
              <div className="animate-slide-up delay-400 mt-12 grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/70 text-sm font-body"
                  >
                    <feature.icon className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Logo showcase */}
            <div className="animate-scale-in delay-300 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 -m-8 bg-brand-yellow/20 rounded-[3rem] blur-2xl animate-pulse-ring" />

                {/* Logo card */}
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 border border-white/20 shadow-2xl">
                  <Image
                    src="/logo.png"
                    alt="ภูสิท โปร"
                    width={320}
                    height={320}
                    className="rounded-2xl drop-shadow-2xl"
                    priority
                  />

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-brand-yellow text-brand-navy font-bold text-sm px-4 py-2 rounded-2xl shadow-lg rotate-6 animate-float">
                    เปิดทุกวัน!
                  </div>

                  {/* Bottom badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-brand-navy font-bold text-sm px-6 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                    <span>บริการดีเยี่ยม</span>
                    <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 border-b-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
            stroke="none"
          >
            <path
              d="M0 60L48 54C96 48 192 36 288 36C384 36 480 48 576 54C672 60 768 60 864 54C960 48 1056 36 1152 30C1248 24 1344 24 1392 24L1440 24V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Printer className="w-4 h-4" />
              บริการของเรา
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
              บริการ
              <span className="text-brand-blue">ครบวงจร</span>
            </h2>
            <p className="mt-4 text-lg text-brand-navy/60 font-body leading-relaxed">
              ไม่ว่าจะพิมพ์เอกสาร ถ่ายรูป หรืองานพิมพ์พิเศษ เราพร้อมให้บริการ
            </p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.accent} mb-6 transition-transform group-hover:scale-110`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-navy/60 font-body leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient bar */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

        {/* Decorative */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-brand-blue to-brand-navy rounded-[2rem] p-10 sm:p-14 overflow-hidden grain">
                {/* Inner pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative z-10 space-y-8">
                  <div className="text-6xl sm:text-8xl font-black text-brand-yellow leading-none">
                    10+
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    ปีแห่งประสบการณ์
                    <br />
                    <span className="text-white/60 text-lg sm:text-xl font-medium font-body">
                      บริการพิมพ์และถ่ายรูปคุณภาพ
                    </span>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-3xl font-extrabold text-brand-yellow">
                        5,000+
                      </div>
                      <div className="text-white/60 font-body text-sm mt-1">
                        ลูกค้าที่ไว้วางใจ
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-2xl p-5 shadow-xl shadow-brand-navy/10 border border-gray-100 max-w-[260px] animate-float-delayed">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-brand-yellow fill-brand-yellow"
                    />
                  ))}
                </div>
                <p className="text-sm text-brand-navy/70 font-body leading-relaxed">
                  &ldquo;บริการดีมาก รวดเร็ว งานพิมพ์คุณภาพเยี่ยม
                  ราคาสมเหตุสมผล&rdquo;
                </p>
                <div className="mt-3 text-xs font-semibold text-brand-navy">
                  -- ลูกค้าประจำ
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-yellow/15 text-brand-yellow-dark text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4" />
                ทำไมต้องเลือกเรา
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
                เพราะเราใส่ใจ
                <br />
                <span className="text-brand-blue">ทุกรายละเอียด</span>
              </h2>
              <p className="mt-4 text-lg text-brand-navy/60 font-body leading-relaxed max-w-lg">
                เราทุ่มเทให้กับคุณภาพงานพิมพ์ทุกชิ้น
                ด้วยเครื่องพิมพ์คุณภาพสูงและทีมงานมืออาชีพ
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    title: "เครื่องพิมพ์คุณภาพสูง",
                    desc: "ใช้เครื่องพิมพ์รุ่นใหม่ ให้งานพิมพ์คมชัดทุกครั้ง",
                  },
                  {
                    title: "รวดเร็ว รอรับได้ทันที",
                    desc: "ไม่ต้องรอนาน งานเสร็จไว รับได้เลย",
                  },
                  {
                    title: "ราคาเป็นกันเอง",
                    desc: "ราคายุติธรรม โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง",
                  },
                  {
                    title: "ที่จอดรถสะดวก",
                    desc: "จอดรถสะดวก เข้าถึงง่าย ไม่ต้องเดินไกล",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start group"
                  >
                    <div className="mt-1 w-8 h-8 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">
                        {item.title}
                      </div>
                      <div className="text-brand-navy/60 font-body text-sm mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* Contact Section */}
      <section id="contact" className="relative py-24 sm:py-32 bg-brand-navy overflow-hidden grain">
        {/* Decorative */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue-light text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                ติดต่อเรา
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                มาหาเราได้
                <br />
                <span className="text-brand-yellow">ที่ร้านเลย!</span>
              </h2>
              <p className="mt-4 text-lg text-white/60 font-body leading-relaxed max-w-lg">
                ยินดีให้บริการทุกวัน ไม่ว่าจะงานเล็กหรือใหญ่ เราพร้อมดูแล
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue-light" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      ที่อยู่ร้าน
                    </div>
                    <div className="text-white/60 font-body mt-1">
                      ร้านภูสิท โปร 95/5 ตำบล หนองหิน อำเภอ หนองหิน เลย 42190
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue-light" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">โทรศัพท์</div>
                    <div className="text-white/60 font-body mt-1">
                      062-189-1755, 081-158-8353
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-blue-light" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      เวลาเปิด-ปิด
                    </div>
                    <div className="text-white/60 font-body mt-1">
                      เปิดทุกวัน 07:00 - 19:00 น.
                    </div>
                  </div>
                </div>
              </div>

              {/* Social hint */}
              <div className="mt-10 flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61585438902426"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook: ภูสิทโปร"
                  className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center hover:bg-brand-blue/30 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 text-brand-blue-light" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                 
                <span className="text-white/40 font-body text-sm ml-2">
                  Facebook: ภูสิทโปร
                </span>
                </Link>

              </div>
            </div>

            {/* Right: Map placeholder / Quick contact card */}
            <div className="flex items-center justify-center">
              <QuickContactCard />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ภูสิท โปร"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-white/60 font-body text-sm">
                &copy; 2026 ภูสิท โปร. สงวนลิขสิทธิ์.
              </span>
            </div>
            <div className="flex items-center gap-6 text-white/40 font-body text-sm">
              <a href="#services" className="hover:text-white/70 transition-colors">
                บริการ
              </a>
              <a href="#why-us" className="hover:text-white/70 transition-colors">
                เกี่ยวกับเรา
              </a>
              <a href="#contact" className="hover:text-white/70 transition-colors">
                ติดต่อ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
