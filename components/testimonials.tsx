"use client";

import Image from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";

const team = [
  {
    img: TestimonialImg01,
    name: "Wassila A.",
    role: "Étudiante à Sciences Po Paris",
    expertise: "Expertise Médicale",
    content: "Compréhension profonde des enjeux cliniques et des parcours patients. Conception centrée sur l'humain.",
  },
  {
    img: TestimonialImg02,
    name: "Ossama L.",
    role: "Ingénieur en IA Ex.BNP Paribas",
    expertise: "Excellence Technique",
    content: "Maîtrise des LLM et des architectures Cloud sécurisées (HDS) pour des performances de pointe.",
  },
  {
    img: TestimonialImg03,
    name: "Abdoullah I.",
    role: "Ingénieur en informatique chez MBDA",
    expertise: "Développement Systèmes",
    content: "Architecture logicielle robuste et intégration continue pour assurer une fiabilité à toute épreuve.",
  },
  {
    img: TestimonialImg04,
    name: "Youssef E.",
    role: "Ingénieur informatique chez GEODIS",
    expertise: "Développement Fullstack",
    content: "Création d'interfaces ergonomiques zéro clic et d'expériences fluides pour les professionnels de santé.",
  },
];

export default function Testimonials() {
  return (
    <div id="equipe" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            L'Équipe MedSyn'IA
          </h2>
          <p className="text-lg text-indigo-200/65">
            Une complémentarité des profils alliant expertise médicale et excellence technique pour une solution centrée sur l'usage.
          </p>
        </div>

        <div>
          {/* Cards */}
          <div className="mx-auto grid max-w-sm items-stretch gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="group">
                <TeamMember member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMember({
  member,
}: {
  member: {
    img: any;
    name: string;
    role: string;
    expertise: string;
    content: string;
  };
}) {
  return (
    <article className="relative h-full rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={member.img}
            width={48}
            height={48}
            alt={member.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span className="block text-base">{member.name}</span>
            <span className="text-indigo-500">{member.expertise}</span>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400">
          {member.role}
        </div>
        <p className="text-indigo-200/65">
          {member.content}
        </p>
      </div>
    </article>
  );
}
