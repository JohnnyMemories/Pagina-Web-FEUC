import { historyHighlights } from '../data/constants'

export default function Archivo() {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Archivo FEUC</p>
          <h2 className="text-2xl font-semibold text-ink">Historia y documentos históricos</h2>
          <p className="text-sm text-slate-600">Documentación histórica, actas y archivos de la Federación.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-ink">Documentos históricos</h3>
          <p className="mt-2 text-sm text-slate-600">Actas, resoluciones y documentos históricos de la FEUC desde 1938.</p>
          <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3">
            Explorar archivo →
          </a>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-ink">Presidencias históricas</h3>
          <p className="mt-2 text-sm text-slate-600">Listado completo de presidentes y directivas desde la fundación.</p>
          <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3">
            Ver lista →
          </a>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-ink">Fotografías y memorias</h3>
          <p className="mt-2 text-sm text-slate-600">Galería de imágenes y material gráfico histórico de la FEUC.</p>
          <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3">
            Ver galería →
          </a>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Historia</p>
            <h2 className="text-2xl font-semibold text-ink">Hitos de la FEUC</h2>
            <p className="text-sm text-slate-600">Resumen basado en antecedentes históricos y estatutos.</p>
          </div>
          <a className="text-sm font-semibold text-primary hover:underline" href="https://es.wikipedia.org/wiki/Federaci%C3%B3n_de_Estudiantes_de_la_Universidad_Cat%C3%B3lica_de_Chile" target="_blank" rel="noreferrer">
            Fuente Wikipedia
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {historyHighlights.map((item) => (
            <div key={item.year} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {item.year}
              </div>
              <p className="text-sm text-ink">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

