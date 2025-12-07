export default function Contacto() {
  return (
    <section className="py-10">
      <div className="rounded-3xl bg-white p-8 shadow-card max-w-2xl mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contacto</p>
          <h2 className="text-2xl font-semibold text-ink">¿Necesitas algo de la FEUC?</h2>
          <p className="mt-3 text-sm text-slate-600">
            Escríbenos para coordinar apoyos, difusión de actividades o acceder a documentos oficiales.
          </p>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-ink">
            Nombre y correo
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              placeholder="Tu nombre y correo UC"
            />
          </label>
          <label className="block text-sm font-semibold text-ink">
            Tema
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              placeholder="Ej: Solicitud de difusión, apoyo a evento"
            />
          </label>
          <label className="block text-sm font-semibold text-ink">
            Mensaje
            <textarea
              className="mt-2 min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              placeholder="Cuéntanos cómo podemos ayudarte"
            />
          </label>
          <button className="w-full rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition hover:bg-secondary/90">
            Enviar mensaje
          </button>
          <p className="text-xs text-slate-600">Tiempo de respuesta habitual: 24 horas hábiles.</p>
        </div>
      </div>
    </section>
  )
}

