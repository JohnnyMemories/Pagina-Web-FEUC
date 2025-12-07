import { summary } from '../data/constants'

export default function QuienesSomos() {
  return (
    <section className="py-12">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Quiénes somos</p>
        <h2 className="text-2xl font-semibold text-ink">Sobre la FEUC</h2>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h3 className="mb-4 text-lg font-semibold text-ink">¿Qué es la FEUC?</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            La FEUC es el <strong>máximo órgano de representación estudiantil</strong> de la Pontificia Universidad Católica de Chile. 
            El rol de la Federación de Estudiantes <strong>ha sido sumamente importante en el desarrollo de la Universidad y el país</strong>. 
            La FEUC promueve iniciativas estudiantiles, genera discusión política dentro de la UC y asegura el desarrollo de los estudiantes 
            y la comunidad universitaria.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h3 className="mb-4 text-lg font-semibold text-ink">Su fundación</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            La FEUC fue fundada a fines de la década de 1930 con el <strong>objetivo de unificar las distintas organizaciones estudiantiles 
            y de representación estudiantil que fueron surgiendo</strong> en años anteriores. La primera FEUC fue elegida en 1938, siendo su 
            primer presidente José Piñera Carvallo.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h3 className="mb-4 text-lg font-semibold text-ink">Declaración de Principios</h3>
          <p className="mb-4 text-sm leading-relaxed text-slate-700">
            En su <strong>declaración de principios</strong>, la FEUC suscribe que los estudiantes UC expresan su adhesión al mensaje evangélico 
            de Cristo y proclaman la libertad e igualdad en dignidad y derechos de todos los seres humanos, reconociendo los derechos fundamentales 
            de la Declaración Universal de los Derechos Humanos. Creen en el respeto a la libertad de conciencia, de culto, de opinión, de reunión, 
            de asociación y de movimiento.
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            Asumen un <strong>compromiso con la Pontificia Universidad Católica de Chile</strong>, contribuyendo al cumplimiento de sus propósitos 
            y propugnando el derecho a participar en su gobierno. Expresan solidaridad con el pueblo de Chile, especialmente con los más vulnerables. 
            Reafirman su fe en la democracia, rechazando todo totalitarismo. La FEUC se constituye como una organización <strong>democrática, 
            participativa, gremial, pluralista, libre, autónoma y unitaria</strong> para defender los derechos e intereses estudiantiles.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {summary.map((item) => (
          <div key={item.label} className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
            <p className="text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

