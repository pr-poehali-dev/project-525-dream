import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

interface RoutePoint {
  number: string
  title: string
  description: string
  category: string
  time: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState("")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const routePoints: RoutePoint[] = [
    {
      number: "01",
      title: "Площадь 50-летия НефтеКамска",
      description: "Стартовая точка маршрута. Центральная площадь города с монументальным фонтаном и праздничным оформлением к юбилею.",
      category: "Площадь",
      time: "9:00",
    },
    {
      number: "02",
      title: "Краеведческий музей",
      description: "Уникальная экспозиция о 60-летней истории Нижнекамска: от нефтехимического гиганта до современного города.",
      category: "Музей",
      time: "9:30",
    },
    {
      number: "03",
      title: "Парк культуры и отдыха",
      description: "Зелёная зона отдыха с фонтанами, скульптурами и аллеями. Идеальное место для прогулки и знакомства с горожанами.",
      category: "Парк",
      time: "11:00",
    },
    {
      number: "04",
      title: "Набережная реки Камы",
      description: "Живописная прогулочная зона вдоль реки с видами на промышленный горизонт — символ города-труженика.",
      category: "Природа",
      time: "13:00",
    },
    {
      number: "05",
      title: "Памятник нефтехимикам",
      description: "Монумент в честь первостроителей Нижнекамска — людей, создавших один из крупнейших нефтехимических центров России.",
      category: "Памятник",
      time: "15:00",
    },
    {
      number: "06",
      title: "Дворец культуры «Нефтехимик»",
      description: "Центр культурной жизни города. Здесь проходят юбилейные выставки, концерты и мультимедийные показы об истории Нижнекамска.",
      category: "Культура",
      time: "16:30",
    },
  ]

  const features = [
    {
      icon: "Map",
      title: "Умный маршрут",
      description: "Маршрут спроектирован так, чтобы равномерно распределить поток туристов и избежать очередей.",
    },
    {
      icon: "Clock",
      title: "6 точек за день",
      description: "Оптимальный тайминг: все ключевые места города без спешки за один день.",
    },
    {
      icon: "Star",
      title: "60 лет истории",
      description: "Каждая точка маршрута — часть большого юбилейного рассказа о городе.",
    },
    {
      icon: "Users",
      title: "Для всех",
      description: "Маршрут удобен для семей с детьми, пожилых гостей и иностранных туристов.",
    },
  ]

  const faqs: FAQ[] = [
    {
      question: "Сколько времени займёт весь маршрут?",
      answer:
        "Полный маршрут рассчитан на один день: с 9:00 до 18:00 с учётом остановок и отдыха. Вы можете пройти его самостоятельно или с экскурсоводом.",
    },
    {
      question: "Нужно ли покупать билеты заранее?",
      answer:
        "Большинство точек маршрута — это открытые пространства (площади, парки, набережная). Для посещения музея и Дворца культуры рекомендуем приобрести билеты онлайн или на входе.",
    },
    {
      question: "Удобен ли маршрут для людей с ограниченными возможностями?",
      answer:
        "Да! Все объекты маршрута адаптированы для маломобильных граждан: пандусы, ровные дорожки и доступный транспорт между точками.",
    },
    {
      question: "Как добраться между точками?",
      answer:
        "Большинство объектов находятся в пешей доступности. Для более дальних переездов рекомендуем городской автобус или такси. Расстояние между крайними точками — около 4 км.",
    },
    {
      question: "Есть ли экскурсоводы на маршруте?",
      answer:
        "Да, в рамках юбилейной программы организованы бесплатные экскурсии по маршруту каждые выходные. Записывайтесь через форму на этом сайте.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/57bf430d-119b-44dd-9ab9-27a0cbb64436/files/af253535-c9de-44bd-9933-e6619fe95f71.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Compass" size={20} />
            <span className="font-medium">Нижнекамск 60</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Маршрут", href: "#route" },
              { label: "Точки", href: "#points" },
              { label: "Вопросы", href: "#faq" },
              { label: "Контакты", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
              Скачать карту
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Нижнекамск · 60 лет · Умный туристический маршрут</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-6 text-balance leading-tight">
            Открой город<br />за один день.
          </h1>

          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mb-12 leading-relaxed text-pretty">
            Умный маршрут по 6 ключевым точкам Нижнекамска — музеям, паркам, набережной и памятникам. Создан к 60-летию города.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg"
              onClick={() => document.getElementById("route")?.scrollIntoView({ behavior: "smooth" })}
            >
              Смотреть маршрут
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Записаться на экскурсию
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="MapPin" size={16} />
            <span className="text-sm font-medium">Нижнекамск, Республика Татарстан</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Icon name={f.icon} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{f.title}</h3>
                <p className="text-white/80 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Section */}
      <section id="route" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 md:p-12">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 ring-1 ring-white/20 rounded-full text-sm">
                Юбилейный маршрут 2026
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Ваш день в Нижнекамске
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                6 точек притяжения, равномерно распределённых по городу — без толпы и без усталости.
              </p>
            </div>

            {/* Route Cards */}
            <div id="points" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {routePoints.map((point) => (
                <div
                  key={point.number}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold text-white/20">{point.number}</span>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs px-2 py-1 bg-white/10 ring-1 ring-white/20 rounded-full">
                        {point.category}
                      </span>
                      <span className="text-xs text-white/50 flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        {point.time}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{point.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-white/50 text-xs mt-auto">
                    <Icon name="MapPin" size={12} />
                    <span>Нижнекамск</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Route stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "6", label: "точек маршрута" },
                { value: "~9 км", label: "общий путь" },
                { value: "8 ч", label: "продолжительность" },
                { value: "60", label: "лет истории" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center"
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder section */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden ring-1 ring-white/10 relative"
            style={{ height: 400 }}
          >
            <img
              src="https://cdn.poehali.dev/projects/57bf430d-119b-44dd-9ab9-27a0cbb64436/files/a9b4acf9-db80-402c-bd3b-e8f067eea2bb.jpg"
              alt="Нижнекамск — маршрут"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Интерактивная карта маршрута</h3>
                <p className="text-white/80 mb-4">Все 6 точек с навигацией и описаниями</p>
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
                  Открыть карту
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Частые вопросы</h2>
            <p className="text-white/70 text-lg">Всё, что нужно знать перед визитом</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    {openFaq === index ? (
                      <Icon name="Minus" size={16} />
                    ) : (
                      <Icon name="Plus" size={16} />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Newsletter Section */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 md:p-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/20 mb-8">
              <Icon name="Mail" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Записаться на бесплатную экскурсию
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Каждые выходные — групповые экскурсии по юбилейному маршруту. Оставьте email и мы пришлём расписание.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваш@email.ru"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/20 text-white placeholder:text-white/40 outline-none focus:ring-white/40 transition-all"
              />
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-3 shrink-0">
                Записаться
              </Button>
            </div>
            <p className="text-white/40 text-sm mt-4">Без спама. Только расписание и новости маршрута.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Icon name="Compass" size={20} />
            <span className="font-medium">Нижнекамск 60 — Умный маршрут</span>
          </div>
          <p className="text-white/50 text-sm text-center">
            © 2026 · Туристический маршрут к 60-летию Нижнекамска · Республика Татарстан
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <a href="#route" className="hover:text-white transition-colors">Маршрут</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
