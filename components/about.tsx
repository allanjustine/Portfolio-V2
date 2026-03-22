import Image from "next/image";

export default function About() {
  const timeline = [
    {
      icon: "fa-solid fa-user",
      title: "Personal Information",
      items: [
        { label: "Name", value: "Allan Justine Mascariñas" },
        { label: "Address", value: "Tinangnan, Tubigon, Bohol" },
        { label: "Mobile", value: "09512072888" },
        { label: "Email", value: "labya31@gmail.com" },
        { label: "Age", value: "24" },
      ],
    },
    {
      icon: "fa-solid fa-school",
      title: "Education",
      items: [
        { label: "School", value: "Mater Dei College" },
        { label: "Graduated", value: "2023" },
      ],
    },
    {
      icon: "fa-solid fa-code",
      title: "Tech Stack",
      items: [
        { label: "Skills", value: "Laravel, Livewire, React, Vue, Next, Nest, HTML, CSS, Alpine, Tailwind, Bootstrap, MySQL, and more." },
      ],
    },
  ];

  return (
    <section id="about" data-aos="fade-up" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 text-sm">Get to know me a little better</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex flex-col items-center gap-4 md:w-64 flex-shrink-0">
            <div className="custom-border shadow-xl overflow-hidden ring-4 ring-cyan-100">
              <Image
                className="image"
                src="/images/profile-image.jpg"
                alt="Allan Justine Mascariñas"
                width={260}
                height={260}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/allanjustine"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-1 transition-all duration-200 shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.797 8.207 11.387.599.111.82-.261.82-.578v-2.17c-3.338.725-4.038-1.607-4.038-1.607-.545-1.384-1.333-1.752-1.333-1.752-1.09-.747.083-.73.083-.73 1.207.085 1.838 1.238 1.838 1.238 1.073 1.837 2.809 1.305 3.494 1 .108-.777.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.933 0-1.31.468-2.378 1.236-3.22-.125-.303-.535-1.525.117-3.175 0 0 1.009-.322 3.303 1.23a11.48 11.48 0 0 1 3.006-.405c1.023.005 2.047.138 3.003.405 2.293-1.552 3.303-1.23 3.303-1.23.653 1.65.243 2.872.119 3.175.767.842 1.236 1.91 1.236 3.22 0 4.615-2.814 5.626-5.489 5.922.43.374.819 1.106.819 2.232v3.289c0 .319.223.693.825.576C20.56 21.795 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
                </svg>
              </a>
              <a
                href="mailto:labya31@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 text-white hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-200 shadow-md shadow-cyan-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <a
                href="mailto:labya31@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 rounded-xl transition-all duration-300 hover:scale-105 shadow-md shadow-cyan-200 text-sm"
              >
                <i className="fa-solid fa-handshake" />
                Hire Me
              </a>
              <a
                href="/files/My-Resume.pdf"
                download="My-Resume.pdf"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 py-2.5 font-semibold text-cyan-600 border-2 border-cyan-400 rounded-xl hover:bg-cyan-50 transition-all duration-300 hover:scale-105 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 mb-6 border border-cyan-100">
              <p className="text-cyan-600 font-semibold text-sm mb-1">👋 Nice to meet you!</p>
              <p className="text-gray-700 leading-relaxed">
                I&apos;m a full-stack web developer with hands-on experience in{" "}
                <span className="font-semibold text-cyan-600">Laravel</span>,{" "}
                <span className="font-semibold text-cyan-600">Livewire</span>,{" "}
                <span className="font-semibold text-cyan-600">Next.js</span>,{" "}
                <span className="font-semibold text-cyan-600">React</span>,{" "}
                <span className="font-semibold text-cyan-600">Vue</span>, and more. Passionate about
                tackling complex problems and crafting efficient solutions, I continuously seek to
                expand my skills and stay at the forefront of technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { value: "2+", label: "Years Work Experience" },
                { value: "4+", label: "Years Web Development Experience" },
                { value: "20+", label: "Projects Built" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                  <p className="text-2xl font-bold text-cyan-500">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-700 mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-cyan-500 inline-block" />
              My Timeline
              <span className="w-6 h-0.5 bg-cyan-500 inline-block" />
            </h3>

            <ol className="relative border-l-2 border-cyan-200 space-y-8 pl-6">
              {timeline.map((item) => (
                <li key={item.title} className="relative">
                  <div className="absolute -left-[40px] w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-md shadow-cyan-200">
                    <i className={`${item.icon} text-white text-xs`} />
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <h4 className="font-bold text-cyan-600 mb-2">{item.title}</h4>
                    {item.items.map((info) => (
                      <p key={info.label} className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-700">{info.label}:</span> {info.value}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
