export default function Pricing() {
  return (
    <section id="prix" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Modèle Économique
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Une tarification claire
            </h2>
            <p className="text-lg text-indigo-200/65">
              Adaptée à la taille de votre structure pour vous accompagner au mieux.
            </p>
          </div>

          <div className="mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Tier 1 */}
            <article className="relative flex flex-col h-full rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="relative z-20 flex h-full flex-col overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="mb-4">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">Médecin individuel</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-200">79€</span>
                    <span className="text-indigo-200/65">/ MOIS</span>
                  </div>
                </div>
                <ul className="mb-6 grow space-y-3 text-indigo-200/65">
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Jusqu'à 60% des médecins libéraux</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Écoute ambiante</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Génération de documents</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Tier 2 */}
            <article className="relative flex flex-col h-full rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="relative z-20 flex h-full flex-col overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="mb-4">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">Cabinets (2 à 5 médecins)</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-200">149€</span>
                    <span className="text-indigo-200/65">/ MOIS</span>
                  </div>
                </div>
                <ul className="mb-6 grow space-y-3 text-indigo-200/65">
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>30% du marché</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Toutes les fonctionnalités</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Gestion de groupe</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Tier 3 */}
            <article className="relative flex flex-col h-full rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="relative z-20 flex h-full flex-col overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="mb-4">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">Centres & Cliniques</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-200">299€</span>
                    <span className="text-indigo-200/65">/ MOIS</span>
                  </div>
                </div>
                <ul className="mb-6 grow space-y-3 text-indigo-200/65">
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Plus de 5 praticiens</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Toutes les fonctionnalités</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-3 w-3 shrink-0 fill-indigo-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                    <span>Support prioritaire</span>
                  </li>
                </ul>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
