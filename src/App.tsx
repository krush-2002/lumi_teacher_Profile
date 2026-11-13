import { useMemo, useState, type ReactNode } from 'react'

type IconName =
  | 'arrow' | 'award' | 'book' | 'briefcase' | 'calendar' | 'check' | 'chevron'
  | 'clock' | 'close' | 'facebook' | 'globe' | 'heart' | 'instagram' | 'linkedin'
  | 'map' | 'menu' | 'message' | 'phone' | 'play' | 'qr' | 'share' | 'star'
  | 'users' | 'video' | 'whatsapp'

function Icon({ name, size = 20, className = '' }: { name: IconName; size?: number; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    award: <><circle cx="12" cy="9" r="6" /><path d="m8 14-1 8 5-3 5 3-1-8" /></>,
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z" /><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v17h4.5A3.5 3.5 0 0 1 20 22V5.5Z" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V4h6v3M3 12h18" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    check: <path d="m7 12 3 3 7-7" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    facebook: <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5c-.5-.1-1.7-.2-3-.2-3 0-5 1.8-5 5.2V9H7v4h3v8h4Z" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
    heart: <path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" /></>,
    linkedin: <><rect x="3" y="9" width="4" height="12" /><path d="M5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 21V9h4v2c1-1.5 6-3.5 6 4v6h-4v-6c0-3-2-3-2-1v7h-4Z" /></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    message: <path d="M21 14a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z" />,
    phone: <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.8 2 2 0 0 1 3.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
    play: <path d="m9 7 8 5-8 5V7Z" />,
    qr: <><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zM18 18h3v3h-3zM18 14h3M14 19v2" /></>,
    share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" /></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /></>,
    video: <><rect x="3" y="5" width="14" height="14" rx="2" /><path d="m17 10 4-2v8l-4-2" /></>,
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z" /><path d="M8.5 7.7c.5 3.6 2.4 5.5 6 6" /></>,
  }
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const mainPhoto = 'https://images.unsplash.com/photo-1601655781320-205e34c94eb1?auto=format&fit=crop&w=1200&q=88'

const similarTeachers = [
  { name: 'Dinuka Jayasinghe', subject: 'Combined Mathematics', meta: '10 years · Colombo', rating: '4.9', image: 'https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&w=700&q=82' },
  { name: 'Ashan Wickramasinghe', subject: 'Physics & Mathematics', meta: '7 years · Galle', rating: '4.8', image: 'https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?auto=format&fit=crop&w=700&q=82' },
  { name: 'Tharushi Fernando', subject: 'Pure Mathematics', meta: '8 years · Gampaha', rating: '4.9', image: 'https://images.unsplash.com/photo-1573496800808-56566a492b63?auto=format&fit=crop&w=700&q=82' },
]

const reviews = [
  { name: 'S. Fernando', date: '12 May 2025', rating: 5, subject: 'Combined Mathematics', exam: 'G.C.E. A/L', verified: true, text: 'Sir explains difficult concepts in a way that finally makes sense. The paper discussions helped me identify exactly where I was losing marks.' },
  { name: 'Nethmi A.', date: '28 April 2025', rating: 5, subject: 'Pure Mathematics', exam: 'G.C.E. A/L', verified: true, text: 'A calm and encouraging teacher. I never feel uncomfortable asking questions, and every lesson has a clear structure.' },
  { name: 'Student 94', date: '03 April 2025', rating: 4, subject: 'Applied Mathematics', exam: 'International', verified: false, text: 'Very useful practical examples and regular progress checks. The revision notes are concise and easy to follow.' },
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${light ? 'text-white' : 'text-charcoal'}`} aria-label="LUMI home">
      <span className="relative flex size-9 items-center justify-center rounded-xl bg-lime text-charcoal shadow-lime">
        <span className="absolute h-4 w-0.5 -rotate-45 rounded-full bg-charcoal" /><span className="absolute h-4 w-0.5 rotate-45 rounded-full bg-charcoal" />
      </span>
      <span><span className="block text-xl font-extrabold tracking-[0.18em]">LUMI</span><span className={`block text-[8px] font-semibold uppercase tracking-[0.2em] ${light ? 'text-white/50' : 'text-muted'}`}>Illuminate your path</span></span>
    </a>
  )
}

function SectionTitle({ eyebrow, children, description }: { eyebrow: string; children: ReactNode; description?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-olive">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">{children}</h2>
      {description && <p className="mt-3 leading-7 text-muted">{description}</p>}
    </div>
  )
}

function Stars({ rating = 5, interactive = false, onRate }: { rating?: number; interactive?: boolean; onRate?: (value: number) => void }) {
  return <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>{[1, 2, 3, 4, 5].map((value) => interactive ? <button key={value} type="button" onClick={() => onRate?.(value)} aria-label={`Rate ${value} stars`} className="p-1"><Icon name="star" size={22} className={value <= rating ? 'fill-lime text-lime' : 'text-line'} /></button> : <Icon key={value} name="star" size={15} className={value <= rating ? 'fill-lime text-lime' : 'text-line'} />)}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bioOpen, setBioOpen] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)
  const [shareText, setShareText] = useState('Share Profile')
  const [rating, setRating] = useState(0)
  const [reviewFilter, setReviewFilter] = useState('All subjects')
  const [reviewSort, setReviewSort] = useState('Newest')
  const [video, setVideo] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const tabs = [['Overview', 'overview'], ['About', 'about'], ['Subjects', 'subjects'], ['Teaching Methods', 'methods'], ['Videos', 'videos'], ['Reviews', 'reviews']]
  const filteredReviews = useMemo(() => {
    const result = reviewFilter === 'All subjects' ? [...reviews] : reviews.filter((review) => review.subject === reviewFilter)
    return reviewSort === 'Highest rated' ? result.sort((a, b) => b.rating - a.rating) : result
  }, [reviewFilter, reviewSort])

  const shareProfile = async () => {
    try {
      if (navigator.share) await navigator.share({ title: 'Mr. Kavindu Perera on LUMI', url: window.location.href })
      else await navigator.clipboard.writeText(window.location.href)
      setShareText('Link copied')
      setTimeout(() => setShareText('Share Profile'), 1800)
    } catch { /* sharing was cancelled */ }
  }

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-white text-charcoal">
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {['Home', 'Find Teachers', 'Subjects', 'Examinations', 'Locations'].map((item) => <a href="#" key={item} className={`text-sm font-semibold transition hover:text-olive ${item === 'Find Teachers' ? 'text-charcoal' : 'text-muted'}`}>{item}</a>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex"><a href="#" className="px-3 py-2 text-sm font-bold">Log In</a><a href="#" className="rounded-full bg-lime px-5 py-3 text-sm font-bold transition hover:bg-lime-dark">Become a Teacher</a></div>
          <button type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center rounded-full bg-surface lg:hidden"><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-line bg-white p-5 lg:hidden">{['Home', 'Find Teachers', 'Subjects', 'Examinations', 'Locations', 'Log In'].map((item) => <a key={item} href="#" className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-surface">{item}</a>)}<a href="#" className="mt-2 rounded-full bg-lime px-5 py-3 text-center text-sm font-bold">Become a Teacher</a></nav>}
      </header>

      <main>
        <section id="overview" className="scroll-mt-36 bg-hero px-5 py-10 md:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex items-center gap-2 text-xs font-semibold text-muted"><a href="#">Find Teachers</a><span>/</span><span>Mathematics</span><span>/</span><span className="text-charcoal">Kavindu Perera</span></div>
            <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-charcoal shadow-card md:min-h-[560px]">
                <img src={mainPhoto} alt="Mr. Kavindu Perera, Advanced Level Mathematics Educator" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-xs font-extrabold shadow"><span className="grid size-5 place-items-center rounded-full bg-lime"><Icon name="check" size={13} /></span>Verified Teacher</span>
                <button type="button" onClick={() => setQrOpen(true)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/95 shadow transition hover:scale-105" aria-label="Show profile QR code"><Icon name="qr" /></button>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white"><div><p className="text-xs font-semibold text-white/60">Usually responds</p><p className="mt-1 flex items-center gap-2 text-sm font-bold"><span className="size-2 rounded-full bg-lime" />Within a few hours</p></div><span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold backdrop-blur">ID: LUMI-1048</span></div>
              </div>
              <div className="flex flex-col justify-center rounded-[2rem] border border-line bg-white p-6 shadow-card md:p-10">
                <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-soft-green px-3 py-1.5 text-xs font-extrabold text-olive">Open for new students</span><span className="rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-muted">Online & Physical</span></div>
                <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Mr. Kavindu Perera</h1>
                <p className="mt-3 text-lg font-bold text-muted md:text-xl">Advanced Level Mathematics Educator</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted"><Icon name="map" size={18} />Gampaha, Sri Lanka</p>
                <div className="my-7 h-px bg-line" />
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                  <Stat value="4.8" label="Overall rating" icon="star" />
                  <Stat value="126" label="Student reviews" icon="message" />
                  <Stat value="8+" label="Years teaching" icon="award" />
                  <Stat value="100%" label="Profile verified" icon="check" />
                </div>
                <div className="mt-8 rounded-2xl bg-surface p-5">
                  <div className="grid gap-4 text-sm md:grid-cols-2">
                    <Info icon="book" label="Qualification" value="B.Sc. in Mathematics" />
                    <Info icon="briefcase" label="Experience" value="8+ years of teaching" />
                    <Info icon="globe" label="Teaching modes" value="Physical & online classes" />
                    <Info icon="users" label="Class types" value="Individual, group & revision" />
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">{['Combined Mathematics', 'Pure Mathematics', 'Applied Mathematics'].map((subject) => <span key={subject} className="rounded-full border border-line px-3 py-2 text-xs font-bold">{subject}</span>)}</div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a href="#contact" className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-lime px-6 text-sm font-extrabold transition hover:bg-lime-dark"><Icon name="message" size={18} />Contact Teacher</a>
                  <button type="button" onClick={shareProfile} className="flex min-h-14 items-center justify-center gap-2 rounded-full border border-line px-6 text-sm font-extrabold transition hover:bg-surface"><Icon name="share" size={18} />{shareText}</button>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white"><Icon name="whatsapp" size={18} />WhatsApp</a>
                  <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-bold text-white"><Icon name="phone" size={17} />Request a call</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-20 z-40 border-y border-line bg-white/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-2 lg:px-8" aria-label="Profile sections">
            {tabs.map(([label, id]) => <a href={`#${id}`} onClick={() => setActiveTab(id)} aria-current={activeTab === id ? 'location' : undefined} key={id} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition hover:bg-soft-green ${activeTab === id ? 'bg-lime text-charcoal' : 'text-muted'}`}>{label}</a>)}
          </nav>
        </div>

        <section id="about" className="scroll-mt-36 px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
            <div>
              <SectionTitle eyebrow="About Kavindu">Get to Know Your Teacher</SectionTitle>
              <div className="space-y-5 text-base leading-8 text-muted">
                <p>I’m Kavindu, a mathematics educator who believes every student can understand mathematics when ideas are explained in a way that connects with how they think. My classes are calm, structured, and designed to make even complex concepts feel approachable.</p>
                <p>I began teaching while completing my B.Sc. in Mathematics at the University of Colombo. Over the past eight years, I have guided students through Advanced Level examinations, international curricula, and university entrance preparation.</p>
                {bioOpen && <><p>My teaching journey has taken me from small individual sessions to large revision programmes, but my priority has remained the same: to notice where each learner gets stuck and help them build confidence step by step.</p><p>I regularly develop original problem sets, progress reviews, and exam strategy sessions. Several of my students have gone on to study engineering, physical sciences, and technology at leading Sri Lankan universities.</p></>}
              </div>
              <button type="button" onClick={() => setBioOpen(!bioOpen)} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-olive">{bioOpen ? 'Show Less' : 'Read More'}<Icon name="chevron" size={16} className={bioOpen ? 'rotate-180' : ''} /></button>
            </div>
            <aside className="rounded-3xl bg-charcoal p-7 text-white md:p-9">
              <span className="text-6xl font-extrabold leading-none text-lime">“</span>
              <blockquote className="-mt-2 text-2xl font-bold leading-snug">Mathematics becomes easier when students understand the why—not just the steps.</blockquote>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6"><img src={mainPhoto} alt="" className="size-12 rounded-full object-cover" /><div><p className="text-sm font-bold">Kavindu Perera</p><p className="text-xs text-white/50">Mathematics Educator</p></div></div>
            </aside>
          </div>
        </section>

        <section id="subjects" className="scroll-mt-36 bg-surface px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Subjects & examinations" description="Focused support across local and international mathematics syllabi.">What I Teach</SectionTitle>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ['Combined Mathematics', 'G.C.E. Advanced Level', 'Sinhala / English Medium', 'Advanced'],
                ['Pure Mathematics', 'G.C.E. Advanced Level', 'Sinhala / English Medium', 'Advanced'],
                ['Applied Mathematics', 'G.C.E. A/L & International', 'English Medium', 'Advanced'],
              ].map(([subject, exam, medium, level], i) => <article key={subject} className={`group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-card ${i === 0 ? 'border-charcoal bg-charcoal text-white' : 'border-line bg-white'}`}><span className={`grid size-12 place-items-center rounded-2xl ${i === 0 ? 'bg-lime text-charcoal' : 'bg-soft-green text-olive'}`}><Icon name="book" /></span><h3 className="mt-8 text-xl font-extrabold">{subject}</h3><p className={`mt-2 text-sm font-semibold ${i === 0 ? 'text-white/60' : 'text-muted'}`}>{exam}</p><div className={`mt-6 space-y-3 border-t pt-5 text-xs font-bold ${i === 0 ? 'border-white/10' : 'border-line'}`}><p className="flex justify-between"><span className={i === 0 ? 'text-white/50' : 'text-muted'}>Medium</span>{medium}</p><p className="flex justify-between"><span className={i === 0 ? 'text-white/50' : 'text-muted'}>Level</span>{level}</p></div></article>)}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">{['G.C.E. Advanced Level', 'G.C.E. Ordinary Level', 'International Curriculum'].map((item) => <span key={item} className="rounded-full border border-line bg-white px-4 py-2 text-xs font-bold">{item}</span>)}</div>
          </div>
        </section>

        <section className="px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Background">Qualifications & Professional Experience</SectionTitle>
            <div className="max-w-4xl">
              {[
                ['2021 – Present', 'Senior Mathematics Educator', 'Nexus Education Institute, Gampaha', 'Lead A/L Combined Mathematics classes, revision programmes, and island-wide online paper discussions.'],
                ['2018 – 2021', 'Mathematics Educator', 'Siyane Higher Education Centre', 'Developed concept-based lesson plans and mentored over 300 Advanced Level students.'],
                ['2017', 'Certificate in Digital Teaching Practice', 'Sri Lanka National Institute of Education', 'Training in interactive online instruction, assessment, and accessible digital learning.'],
                ['2013 – 2017', 'B.Sc. in Mathematics', 'University of Colombo', 'Specialized in applied mathematics, statistics, and mathematical modelling.'],
              ].map(([year, role, place, text], index) => <div key={role} className="relative grid gap-3 pb-10 pl-12 md:grid-cols-[160px_1fr] md:pl-0"><div className="absolute left-3 top-2 h-full border-l border-line md:left-[174px]" /><span className="text-xs font-extrabold uppercase tracking-wider text-olive">{year}</span><span className="absolute left-0 top-0 grid size-7 place-items-center rounded-full bg-lime md:left-[161px]"><span className="size-2 rounded-full bg-charcoal" /></span><div className="md:pl-12"><h3 className="text-lg font-extrabold">{role}</h3><p className="mt-1 text-sm font-bold text-muted">{place}</p><p className="mt-3 text-sm leading-6 text-muted">{text}</p>{index === 0 && <span className="mt-3 inline-block rounded-full bg-soft-green px-3 py-1 text-xs font-bold text-olive">Current position</span>}</div></div>)}
            </div>
          </div>
        </section>

        <section id="methods" className="scroll-mt-36 bg-soft-green px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Teaching style" description="See whether Kavindu’s approach feels like the right match for the way you learn.">How I Make Learning Work</SectionTitle>
            <div className="grid gap-5 lg:grid-cols-3">
              <MethodCard icon="book" title="Teaching Approach" items={['Concept-based learning', 'Practical examples', 'Interactive discussions', 'Exam-focused preparation', 'Individual student attention', 'Step-by-step explanations']} />
              <MethodCard icon="users" title="Class Structure" items={['Individual classes', 'Small group classes', 'Theory & revision classes', 'Timed paper discussions']} />
              <MethodCard icon="heart" title="Learning Environment" items={['Friendly atmosphere', 'Active participation', 'Dedicated doubt-clearing', 'Regular progress evaluation']} />
            </div>
            <div className="mt-6 rounded-3xl bg-lime p-7 md:flex md:items-center md:justify-between md:p-9"><p className="max-w-3xl text-xl font-extrabold md:text-2xl">“I slow down when you need clarity, and challenge you when you are ready to go further.”</p><span className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-xs font-bold text-white md:mt-0"><Icon name="check" size={14} className="text-lime" />Student-first approach</span></div>
          </div>
        </section>

        <section className="px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Classes & availability">Where and How I Teach</SectionTitle>
            <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <LocationCard icon="map" title="Physical Classes" text="Gampaha · Yakkala · Kiribathgoda" detail="Nexus Education Institute and selected small-group locations." />
                <LocationCard icon="globe" title="Online Classes" text="Available island-wide" detail="Live sessions via Zoom with digital notes and recorded lesson access." />
                <LocationCard icon="users" title="Class Types" text="Individual · Group · Institute" detail="Weekday and weekend options for theory, revision, and paper classes." />
              </div>
              <div className="rounded-3xl border border-line bg-white p-6 md:p-8">
                <div className="flex items-center justify-between"><div><h3 className="text-xl font-extrabold">Weekly Availability</h3><p className="mt-1 text-sm text-muted">Typical schedule · Confirm directly with teacher</p></div><Icon name="calendar" className="text-olive" /></div>
                <div className="mt-7 overflow-x-auto">
                  <div className="min-w-[540px] space-y-3">
                    {[
                      ['Monday', '4:00 PM – 7:00 PM', 'Online', true],
                      ['Wednesday', '3:30 PM – 6:30 PM', 'Physical · Gampaha', true],
                      ['Friday', '5:00 PM – 8:00 PM', 'Online', true],
                      ['Saturday', '8:00 AM – 4:00 PM', 'Institute classes', true],
                      ['Sunday', '9:00 AM – 1:00 PM', 'Revision classes', false],
                    ].map(([day, time, mode, available]) => <div key={String(day)} className="grid grid-cols-[100px_1fr_1fr_auto] items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm"><span className="font-extrabold">{day}</span><span className="text-muted">{time}</span><span className="font-semibold">{mode}</span><span className={`size-2 rounded-full ${available ? 'bg-lime' : 'bg-muted'}`} title={available ? 'Available' : 'Limited'} /></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="scroll-mt-36 bg-charcoal px-5 py-20 text-white md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lime">Introduction videos</p><h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">See How I Teach</h2><p className="mt-3 text-white/55">Get a feel for Kavindu’s communication style before joining a class.</p></div>
            <div className="grid gap-6 lg:grid-cols-[1.45fr_.55fr]">
              <div className="group relative aspect-video overflow-hidden rounded-3xl bg-black">
                <img src={video === 0 ? 'https://images.unsplash.com/photo-1758685734463-98672a67dd1c?auto=format&fit=crop&w=1400&q=85' : mainPhoto} alt="" className="h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 grid place-items-center"><button type="button" className="grid size-20 place-items-center rounded-full bg-lime text-charcoal shadow-xl transition group-hover:scale-105" aria-label="Play video"><Icon name="play" size={30} /></button></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"><p className="text-xs font-bold uppercase tracking-wider text-lime">{video === 0 ? 'Teacher introduction · 2:14' : 'Sample lesson · 8:42'}</p><h3 className="mt-2 text-xl font-bold">{video === 0 ? 'Meet Kavindu: My approach to mathematics' : 'Understanding functions through visual thinking'}</h3></div>
              </div>
              <div className="space-y-3">
                {[
                  ['Meet your teacher', 'My teaching philosophy and class experience', '2:14'],
                  ['Functions made visual', 'A sample concept-based explanation', '8:42'],
                  ['Exam paper strategy', 'How to manage time and show your working', '6:18'],
                ].map(([title, text, duration], i) => <button type="button" onClick={() => setVideo(i)} key={title} className={`w-full rounded-2xl border p-4 text-left transition ${video === i ? 'border-lime bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}><div className="flex gap-4"><span className={`grid size-11 shrink-0 place-items-center rounded-xl ${video === i ? 'bg-lime text-charcoal' : 'bg-white/10'}`}><Icon name="play" size={18} /></span><span><span className="block text-sm font-bold">{title}</span><span className="mt-1 block text-xs leading-5 text-white/50">{text}</span><span className="mt-2 block text-[10px] font-bold uppercase tracking-wider text-lime">{duration}</span></span></div></button>)}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-36 px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionTitle eyebrow="Student feedback" description="Real experiences shared by students and families.">What Students Say</SectionTitle><button type="button" className="mb-8 rounded-full bg-charcoal px-6 py-3 text-sm font-extrabold text-white transition hover:bg-black">Write a Review</button></div>
            <div className="grid gap-6 lg:grid-cols-[.68fr_1.32fr]">
              <div>
                <div className="rounded-3xl bg-surface p-7">
                  <div className="flex items-end gap-3"><span className="text-6xl font-extrabold">4.8</span><span className="pb-2 text-muted">/ 5.0</span></div><Stars /><p className="mt-2 text-sm font-semibold text-muted">Based on 126 student reviews</p>
                  <div className="mt-7 space-y-3">{[[5, 78], [4, 16], [3, 4], [2, 1], [1, 1]].map(([stars, width]) => <div key={stars} className="grid grid-cols-[42px_1fr_28px] items-center gap-3 text-xs font-bold"><span>{stars} star</span><span className="h-2 overflow-hidden rounded-full bg-line"><span className="block h-full rounded-full bg-lime" style={{ width: `${width}%` }} /></span><span className="text-right text-muted">{stars === 5 ? 98 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 2 : 1}</span></div>)}</div>
                </div>
                <div className="mt-4 rounded-3xl border border-line p-6"><p className="text-sm font-extrabold">Rate your learning experience</p><p className="mt-1 text-xs text-muted">Your rating is only submitted with a review.</p><div className="mt-3"><Stars rating={rating} interactive onRate={setRating} /></div>{rating > 0 && <p className="mt-2 text-xs font-bold text-olive">You selected {rating} stars</p>}</div>
              </div>
              <div>
                <div className="mb-4 flex flex-wrap gap-3">
                  <label className="relative"><span className="sr-only">Filter by subject</span><select value={reviewFilter} onChange={(e) => setReviewFilter(e.target.value)} className="appearance-none rounded-full border border-line bg-white py-3 pl-4 pr-10 text-xs font-bold outline-none"><option>All subjects</option><option>Combined Mathematics</option><option>Pure Mathematics</option><option>Applied Mathematics</option></select><Icon name="chevron" size={14} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" /></label>
                  <label className="relative"><span className="sr-only">Sort reviews</span><select value={reviewSort} onChange={(e) => setReviewSort(e.target.value)} className="appearance-none rounded-full border border-line bg-white py-3 pl-4 pr-10 text-xs font-bold outline-none"><option>Newest</option><option>Highest rated</option></select><Icon name="chevron" size={14} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" /></label>
                </div>
                <div className="space-y-4">{filteredReviews.map((review) => <article key={review.name} className="rounded-3xl border border-line p-6 transition hover:shadow-card"><div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-full bg-soft-green text-sm font-extrabold text-olive">{review.name.charAt(0)}</span><div><h3 className="text-sm font-extrabold">{review.name}</h3><p className="mt-0.5 text-xs text-muted">{review.date}</p></div></div><Stars rating={review.rating} /></div><p className="mt-5 text-sm leading-7 text-muted">“{review.text}”</p><div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4"><span className="rounded-full bg-surface px-3 py-1 text-[10px] font-bold">{review.subject}</span><span className="rounded-full bg-surface px-3 py-1 text-[10px] font-bold">{review.exam}</span>{review.verified && <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-extrabold text-olive"><Icon name="check" size={13} />Verified learning experience</span>}</div></article>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Professional milestones">Achievements & Recognition</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['award', 'Excellence in Mathematics Education', 'Nexus Education Awards · 2023'],
                ['book', 'Advanced Level Problem Collection', 'Author of a student revision guide · 2022'],
                ['users', '1,000+ Learners Supported', 'Across in-person and online programmes'],
                ['globe', 'Digital Teaching Certification', 'National Institute of Education · 2017'],
              ].map(([icon, title, text]) => <article key={title} className="rounded-3xl border border-line bg-white p-6"><span className="grid size-12 place-items-center rounded-2xl bg-soft-green text-olive"><Icon name={icon as IconName} /></span><h3 className="mt-7 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Related educators">You May Also Like</SectionTitle>
            <div className="grid gap-5 md:grid-cols-3">{similarTeachers.map((teacher) => <article key={teacher.name} className="overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-card"><div className="h-60 overflow-hidden"><img src={teacher.image} alt={teacher.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div><div className="p-5"><div className="flex items-start justify-between gap-3"><div><h3 className="font-extrabold">{teacher.name}</h3><p className="mt-1 text-sm font-semibold text-muted">{teacher.subject}</p></div><span className="flex items-center gap-1 text-xs font-extrabold"><Icon name="star" size={14} className="fill-lime text-lime" />{teacher.rating}</span></div><p className="mt-4 text-xs text-muted">{teacher.meta}</p><a href="#" className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm font-extrabold">View Profile <Icon name="arrow" size={17} /></a></div></article>)}</div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-36 px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-charcoal p-7 text-white md:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Contact Kavindu</p><h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Ready to Start Learning?</h2><p className="mt-4 max-w-2xl leading-7 text-white/60">Connect with this teacher and take the next step in your learning journey. Contact details are shared according to the teacher’s privacy preferences.</p><p className="mt-5 flex items-center gap-2 text-xs font-bold text-white/50"><Icon name="clock" size={15} />Usually responds within a few hours</p></div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <button type="button" className="flex min-w-52 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-extrabold"><Icon name="whatsapp" size={18} />WhatsApp</button>
                <button type="button" className="flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-extrabold text-charcoal"><Icon name="phone" size={17} />Request a Call</button>
                <button type="button" className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-extrabold"><Icon name="message" size={17} />Send Enquiry</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-footer px-5 pb-8 pt-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div><Logo light /><p className="mt-5 max-w-xs text-sm leading-6 text-white/50">Sri Lanka’s thoughtful teacher-discovery platform. Find the educator who understands how you learn.</p><div className="mt-6 flex gap-2">{(['instagram', 'facebook', 'linkedin'] as IconName[]).map((icon) => <a href="#" aria-label={icon} key={icon} className="grid size-10 place-items-center rounded-full border border-white/10 text-white/60 hover:border-lime hover:text-lime"><Icon name={icon} size={17} /></a>)}</div></div>
            <Footer title="Discover" links={['Find Teachers', 'Explore Subjects', 'Examinations', 'Locations']} />
            <Footer title="For Teachers" links={['Become a Teacher', 'Teacher Login', 'Teacher Guidelines']} />
            <Footer title="Support" links={['About LUMI', 'Help Center', 'Contact Us', 'Privacy Policy', 'Terms & Conditions']} />
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:justify-between"><p>© 2025 LUMI Education. All rights reserved.</p><p>Learning feels different when you find the right teacher.</p></div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-line bg-white p-2 shadow-2xl sm:hidden">
        <a href="#contact" className="flex items-center justify-center gap-2 rounded-xl bg-lime py-3 text-xs font-extrabold"><Icon name="message" size={16} />Contact</a>
        <a href="#contact" className="flex items-center justify-center gap-2 rounded-xl bg-charcoal py-3 text-xs font-extrabold text-white"><Icon name="whatsapp" size={16} />WhatsApp</a>
      </div>

      {qrOpen && <div className="fixed inset-0 z-[70] grid place-items-center bg-charcoal/70 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="qr-title" onMouseDown={(e) => { if (e.currentTarget === e.target) setQrOpen(false) }}><div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl"><button type="button" onClick={() => setQrOpen(false)} aria-label="Close QR code" className="ml-auto grid size-10 place-items-center rounded-full bg-surface"><Icon name="close" /></button><div className="mx-auto mt-2 grid size-48 grid-cols-7 gap-1 rounded-2xl bg-white p-4 shadow-inner ring-1 ring-line" aria-label="Profile QR code placeholder">{Array.from({ length: 49 }).map((_, i) => <span key={i} className={`rounded-[1px] ${(i * 7 + i * i + 3) % 5 < 2 || [0, 1, 7, 8, 5, 6, 12, 13, 35, 36, 42, 43].includes(i) ? 'bg-charcoal' : 'bg-white'}`} />)}</div><h2 id="qr-title" className="mt-6 text-xl font-extrabold">Kavindu’s LUMI Profile</h2><p className="mt-2 text-sm leading-6 text-muted">Scan to open or share this verified public teacher profile.</p><button type="button" onClick={shareProfile} className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-extrabold"><Icon name="share" size={17} />Share Profile</button></div></div>}
    </div>
  )
}

function Stat({ value, label, icon }: { value: string; label: string; icon: IconName }) {
  return <div><span className="mb-2 grid size-8 place-items-center rounded-lg bg-soft-green text-olive"><Icon name={icon} size={16} className={icon === 'star' ? 'fill-lime text-olive' : ''} /></span><p className="text-xl font-extrabold">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">{label}</p></div>
}

function Info({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return <div className="flex gap-3"><Icon name={icon} size={18} className="mt-0.5 shrink-0 text-olive" /><div><p className="text-[10px] font-bold uppercase tracking-wider text-muted">{label}</p><p className="mt-1 text-xs font-extrabold">{value}</p></div></div>
}

function MethodCard({ icon, title, items }: { icon: IconName; title: string; items: string[] }) {
  return <article className="rounded-3xl bg-white p-7"><span className="grid size-12 place-items-center rounded-2xl bg-charcoal text-lime"><Icon name={icon} /></span><h3 className="mt-7 text-xl font-extrabold">{title}</h3><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold text-muted"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime text-charcoal"><Icon name="check" size={12} /></span>{item}</li>)}</ul></article>
}

function LocationCard({ icon, title, text, detail }: { icon: IconName; title: string; text: string; detail: string }) {
  return <article className="rounded-3xl border border-line p-6"><div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft-green text-olive"><Icon name={icon} /></span><div><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-sm font-bold">{text}</p><p className="mt-2 text-xs leading-5 text-muted">{detail}</p></div></div></article>
}

function Footer({ title, links }: { title: string; links: string[] }) {
  return <div><h3 className="text-sm font-extrabold">{title}</h3><ul className="mt-5 space-y-3.5">{links.map((link) => <li key={link}><a href="#" className="text-sm text-white/50 transition hover:text-lime">{link}</a></li>)}</ul></div>
}

export default App
