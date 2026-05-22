import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Download, Truck, PlayCircle, Star, Sparkles, BookOpen, Package, CheckCircle2, Mail, Instagram } from "lucide-react";

const products = [
  {
    type: "Kit físico",
    title: "Kit Unidad: Multiplicación y División",
    grade: "2° Básico",
    description: "Caja educativa con guías impresas, material de apoyo y ruta completa para estudiar en casa paso a paso.",
    tag: "Disponible pronto",
    icon: Package,
  },
  {
    type: "PDF digital",
    title: "Mini guía: Estrategias multiplicativas",
    grade: "2° Básico",
    description: "Material descargable con actividades visuales, explicación simple y QR con video explicativo.",
    tag: "Descarga inmediata",
    icon: Download,
  },
  {
    type: "PDF digital",
    title: "Mini guía: Resolución de problemas",
    grade: "2° Básico",
    description: "Guía breve para practicar, pensar y aplicar estrategias matemáticas en situaciones reales.",
    tag: "Con versión adaptada",
    icon: BookOpen,
  },
];

const steps = [
  "Elige curso y asignatura",
  "Selecciona unidad o subtema",
  "Compra kit o recurso digital",
  "Aprende en casa con apoyo visual y QR",
];

const palette = {
  purple: "#6D4EDD",
  lilac: "#B79CF7",
  pink: "#FF6FAE",
  yellow: "#FFC857",
  teal: "#36C6B6",
  cream: "#F7F3ED",
};

function FloatingKibu() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto flex h-56 w-56 items-center justify-center"
    >
      <div className="absolute h-44 w-32 rounded-[48%] border-4 border-purple-200 bg-white shadow-xl" />
      <div className="absolute top-8 h-16 w-16 rounded-full border-4 border-pink-300 bg-cyan-50" />
      <div className="absolute top-14 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-slate-900" />
        <span className="h-3 w-3 rounded-full bg-slate-900" />
      </div>
      <div className="absolute top-[92px] h-2 w-8 rounded-full bg-pink-300" />
      <div className="absolute bottom-2 h-14 w-16 rounded-b-full bg-orange-300 blur-[1px]" />
      <div className="absolute left-7 top-24 h-12 w-5 -rotate-12 rounded-full bg-teal-400" />
      <div className="absolute right-7 top-24 h-12 w-5 rotate-12 rounded-full bg-teal-400" />
      <div className="absolute -top-3 rounded-full bg-purple-500 px-4 py-1 text-xs font-bold text-white">KIBU</div>
    </motion.div>
  );
}

export default function KitUpKidsLanding() {
  return (
    <div className="min-h-screen bg-[#FFFCF8] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-600 text-xl font-black text-white shadow-md">K</div>
            <div>
              <p className="text-xl font-black tracking-tight text-purple-700">KitUp Kids</p>
              <p className="text-xs font-semibold text-pink-500">¡Listos para la misión!</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
            <a href="#como-funciona" className="hover:text-purple-600">Cómo funciona</a>
            <a href="#productos" className="hover:text-purple-600">Productos</a>
            <a href="#blog" className="hover:text-purple-600">KIBU Tips</a>
            <a href="#contacto" className="hover:text-purple-600">Contacto</a>
          </nav>
          <button className="rounded-full bg-purple-600 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-700">
            Ver kits
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-16 md:py-24">
          <div className="absolute left-10 top-20 h-4 w-4 rounded-full bg-pink-400" />
          <div className="absolute right-16 top-32 h-5 w-5 rounded-full bg-yellow-300" />
          <div className="absolute bottom-20 left-1/3 h-3 w-3 rounded-full bg-teal-400" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-black text-purple-700">
                <Sparkles className="h-4 w-4" /> Disponible pronto: 2° Básico
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-2xl text-5xl font-black leading-tight tracking-tight text-purple-800 md:text-7xl">
                Aprender en casa no tiene que ser complicado.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                KitUp acompaña a las familias con kits educativos digitales y físicos, organizados por unidades de aprendizaje, con explicaciones simples, actividades listas para usar y códigos QR con mini videos en inglés y español.
              </motion.p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-pink-500 px-7 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-pink-600">
                  Explorar productos
                </button>
                <button className="rounded-full border-2 border-teal-300 bg-white px-7 py-4 font-black text-teal-700 transition hover:-translate-y-1 hover:bg-teal-50">
                  Ver cómo funciona
                </button>
              </div>
            </div>

            <div className="relative rounded-[2rem] bg-gradient-to-br from-purple-100 via-white to-teal-100 p-8 shadow-2xl">
              <FloatingKibu />
              <div className="mt-5 rounded-3xl bg-white p-5 shadow-lg">
                <p className="text-center text-lg font-black text-purple-700">“Paso a paso llegamos lejos.”</p>
                <p className="mt-2 text-center text-sm text-slate-500">KIBU acompaña cada misión de aprendizaje.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-black uppercase tracking-[0.2em] text-teal-500">Cómo funciona</p>
              <h2 className="mt-3 text-4xl font-black text-purple-800 md:text-5xl">Una ruta clara para acompañar sin estrés.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Diseñado para madres, padres y cuidadores que quieren apoyar el aprendizaje en casa, incluso sin experiencia enseñando.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div whileHover={{ y: -6 }} key={step} className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-xl font-black text-teal-700">{index + 1}</div>
                  <p className="text-lg font-black text-purple-800">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-purple-50 px-5 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            {[
              [PlayCircle, "Videos QR", "Mini videos explicativos privados para apoyar cada recurso."],
              [CheckCircle2, "Versión adaptada", "Material pensado para diferentes ritmos y necesidades de aprendizaje."],
              [Truck, "Despacho RM", "Kits físicos con entrega en Región Metropolitana en hasta 2 días hábiles."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-[2rem] bg-white p-8 shadow-md">
                <Icon className="h-10 w-10 text-pink-500" />
                <h3 className="mt-5 text-2xl font-black text-purple-800">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="productos" className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-pink-500">Productos</p>
                <h2 className="mt-3 text-4xl font-black text-purple-800 md:text-5xl">Kits y recursos digitales.</h2>
              </div>
              <p className="max-w-md text-slate-600">Organizados por asignatura, unidad y subunidad. Compra el kit completo o recursos por separado.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <motion.article whileHover={{ y: -8 }} key={product.title} className="overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-lg">
                    <div className="h-44 bg-gradient-to-br from-purple-100 via-white to-teal-100 p-6">
                      <div className="flex justify-between">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-purple-700 shadow-sm">{product.type}</span>
                        <Icon className="h-8 w-8 text-teal-500" />
                      </div>
                      <div className="mt-10 rounded-2xl bg-white/80 p-4 shadow-sm">
                        <p className="text-sm font-black text-pink-500">{product.grade}</p>
                        <p className="font-black text-purple-800">Vista previa protegida</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-black text-yellow-700">{product.tag}</span>
                      <h3 className="mt-4 text-2xl font-black text-purple-800">{product.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                      <button className="mt-6 w-full rounded-full bg-purple-600 px-5 py-3 font-black text-white transition hover:bg-purple-700">
                        Ver detalle
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-r from-purple-700 to-purple-500 p-8 text-white shadow-2xl md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-yellow-300">Sobre KitUp</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Creado por educadoras que entienden a las familias.</h2>
                <p className="mt-5 text-lg leading-8 text-purple-50">Nuestros recursos nacen desde la experiencia real en aula y en casa: materiales claros, visuales y listos para usar, para que acompañar el aprendizaje sea más simple, dinámico y menos estresante.</p>
              </div>
              <div className="rounded-[2rem] bg-white/15 p-6 backdrop-blur">
                <div className="grid gap-4">
                  {["Inglés y español", "Actividades listas para usar", "Apoyo visual paso a paso", "Pensado para familias"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/15 p-4">
                      <Star className="h-5 w-5 text-yellow-300" />
                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="bg-[#F7F3ED] px-5 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="font-black uppercase tracking-[0.2em] text-teal-600">KIBU Tips</p>
            <h2 className="mt-3 text-4xl font-black text-purple-800 md:text-5xl">Consejos para aprender en casa.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Recibe ideas simples para apoyar hábitos de estudio, motivación y aprendizaje sin convertir la casa en una sala de clases eterna.</p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-full bg-white p-2 shadow-lg sm:flex-row">
              <input className="flex-1 rounded-full px-5 py-3 outline-none" placeholder="Tu correo" />
              <button className="rounded-full bg-teal-500 px-7 py-3 font-black text-white hover:bg-teal-600">Suscribirme</button>
            </div>
          </div>
        </section>

        <section id="contacto" className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black text-purple-800 md:text-5xl">¿Listos para la misión?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Pronto podrás comprar recursos digitales descargables y kits físicos para Región Metropolitana.</p>
            </div>
            <div className="rounded-[2rem] border border-purple-100 bg-white p-8 shadow-lg">
              <div className="flex items-center gap-3 text-purple-700">
                <Mail className="h-6 w-6" />
                <p className="font-black">hello@kitupkids.cl</p>
              </div>
              <div className="mt-5 flex items-center gap-3 text-pink-500">
                <Instagram className="h-6 w-6" />
                <p className="font-black">@kitupkids</p>
              </div>
              <button className="mt-8 w-full rounded-full bg-pink-500 px-6 py-4 font-black text-white shadow-lg hover:bg-pink-600">
                Quiero que me avisen del lanzamiento
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-purple-100 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p className="font-bold text-purple-700">KitUp Kids © 2026</p>
          <p>Aprender en casa no tiene que ser complicado. Con KitUp, cada paso cuenta.</p>
        </div>
      </footer>
    </div>
  );
}
