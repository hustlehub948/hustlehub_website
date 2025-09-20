"use client"; // only if using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Works() {
  const projects = [
    {
      title: "Care-Connect",
      desc: "CareConnect is a MERN-stack web application that streamlines clinic workflows by enabling online appointment booking, secure data management, and automated notifications for patients, doctors, and admins.",
      link: "",
    },
    {
      title: "Encrypto-Box",
      desc: "EncryptoBox – Secure File Encryption System built with FastAPI, React.js, and Firebase. It lets users encrypt, decrypt, store, and share files with AES-256 encryption, secure authentication, role-based access, and cloud integration.",
      link: "",
    },
 
  ];

  return (
    <section id="works" className="py-12 md:py-16">
      <div className="container">
        <div className="rounded-[24px] backdrop-blur-md bg-white/20 border border-white/30 shadow-lg px-6 md:px-12 py-10 md:py-16 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-hhDark mb-4">
            Works
          </h2>
          <p className="text-hhDark/70 text-[17px] max-w-2xl mx-auto mb-10">
            A showcase of projects and campaigns we delivered for our clients.
          </p>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-6xl mx-auto"
          >
            {projects.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl p-6 text-left hover:scale-[1.03] transition-transform duration-300">
                  <h3 className="text-xl font-bold text-hhDark mb-2">
                    {p.title}
                  </h3>
                  <p className="text-hhDark/70 text-sm mb-4">{p.desc}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hhAccent font-semibold hover:underline"
                  >
                    View in GitHub →
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
