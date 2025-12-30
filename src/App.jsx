import { useEffect, useMemo, useRef, useState } from 'react'
import { data } from './data.js'
import CanvasBackgrounds from './components/CanvasBackground.jsx'

function useScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight
      const v = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0
      setP(Math.min(1, Math.max(0, v)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return p
}


function useRevealQueue(
  selector = '[data-reveal]',
  { rootMargin = '0px 0px -10% 0px', threshold = 0.12 } = {}
) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector))
    if (!els.length) return

    // queue order (DOM order)
    els.forEach((el, i) => el.style.setProperty('--reveal-delay', `${i * 70}ms`))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
          else entry.target.classList.remove('is-visible') // ✅ key for “permanent”
        })
      },
      { root: null, rootMargin, threshold }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selector, rootMargin, threshold])
}


function Icon({ name }) {
  // Simple inline icons so we don't add deps.
  if (name === 'in') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5S1.12 1 2.5 1S4.98 2.12 4.98 3.5ZM.5 23.5h4V7.5h-4v16Zm7 0h4v-8.4c0-2.25 2.9-2.43 2.9 0v8.4h4v-9.8c0-6.1-6.6-5.9-8.9-2.9V7.5h-4v16Z"/>
      </svg>
    )
  }
  if (name === 'gh') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4c-.5-1.3-1.3-1.6-1.3-1.6c-1.1-.7.1-.7.1-.7c1.2.1 1.8 1.2 1.8 1.2c1.1 1.8 2.8 1.3 3.5 1c.1-.8.4-1.3.7-1.6c-2.6-.3-5.3-1.3-5.3-5.8c0-1.3.5-2.4 1.2-3.2c-.1-.3-.5-1.5.1-3.1c0 0 1-.3 3.3 1.2c1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2c.6 1.6.2 2.8.1 3.1c.8.8 1.2 1.9 1.2 3.2c0 4.5-2.7 5.5-5.3 5.8c.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/>
      </svg>
    )
  }
  // mail
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4l-8 5L4 8V6l8 5l8-5v2Z"/>
    </svg>
  )
}

function SocialButton({ href, icon, label }) {
  return (
    <a className="social" href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noreferrer" : undefined} aria-label={label}>
      <Icon name={icon} />
    </a>
  )
}

function ScrollRail({ progress }) {
  return (
    <div className="scroll-rail" aria-hidden="true">
      <div className="scroll-rail-track">
        <div className="scroll-rail-thumb" style={{ transform: `translateY(${progress * 260}px)` }} />
      </div>
    </div>
  )
}

function SideEmail({ email }) {
  if (!email) return null
  return (
    <a className="side-email" href={`mailto:${email}`} aria-label={`Email ${email}`}>
      {email}
    </a>
  )
}

function BackToTop() {
  return (
    <a className="back-top" href="#top" aria-label="Back to top">
      ↑
    </a>
  )
}

function Hero() {
  const initials = useMemo(() => {
    const parts = (data.hero.name || '').split(' ').filter(Boolean)
    return (parts[0]?.[0] || 'M') + (parts.at(-1)?.[0] || 'P')
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-photo">
          {data.hero.photo?.src ? (
            <img className="photo-img" src={data.hero.photo.src} alt={data.hero.photo.alt || "Profile"} />
          ) : (
            <div className="photo-fallback" aria-hidden="true">{initials}</div>
          )}
        </div>

        <div className="hero-copy">
          <h1 className="hero-title">
            I&apos;m <span className="accent">{data.hero.highlight}</span>, {data.hero.roleLine1}
            <br />
            {data.hero.roleLine2}
            <br />
            {data.hero.roleLine3}
          </h1>

          <p className="hero-p">{data.hero.about1}</p>
          <p className="hero-p">
            {data.hero.about2}
          </p>

          <div className="social-row">
            {data.hero.socials.map((s) => (
              <SocialButton key={s.label} href={s.href} icon={s.icon} label={s.label} />
            ))}
          </div>

          <div className="download-row">
            <a className="download-btn" href={data.hero.downloadHref || "#"} onClick={(e) => { if (!data.hero.downloadHref) e.preventDefault() }}>
              <span className="dl-icon" aria-hidden="true">↓</span>
              <span>{data.hero.downloadLabel}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-divider" />
    </section>
  )
}

function Journey() {
  const items = data.journey.items
  return (
    <section className="section journey" id="journey">
      <h2 className="section-title" data-reveal>{data.journey.title}</h2>

      <div className="timeline">
        <div className="timeline-line" aria-hidden="true" />
        {items.map((it, idx) => {
          const side = idx % 2 === 0 ? 'left' : 'right'
          return (
            <div className={`tl-item ${side}`} key={`${it.title}-${it.org}-${it.date}`}>
              <div className="tl-dot" aria-hidden="true" />
              <div className="tl-card" data-reveal>
                <div className="tl-head">
                  <div className="tl-role">{it.title} <span className="tl-org">at {it.org}</span></div>
                  <div className="tl-date">{it.date}</div>
                </div>
                <div className="tl-desc">{it.desc}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title" data-reveal>Skills</h2>

      <div className="skills-wrap">
        {data.skills.groups.map((g) => (
          <div className="skills-row" key={g.label}>
            <div className="skills-label">{g.label}</div>
            <div className="skills-grid">
              {g.items.map((s) => (
                <div className="skill" key={s.name} data-reveal>
                  <i className={s.iconClass} aria-hidden="true" />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title" data-reveal>{data.projects.title}</h2>
      <p className="section-sub" data-reveal>{data.projects.subtitle}</p>

      <div className="project-grid">
        {data.projects.cards.map((c) => (
          <div className="project-card" key={c.title} data-reveal>
            <div className="project-title">{c.title}</div>
            <div className="project-desc">{c.desc}</div>
            <div className="project-badge">{c.badge}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('General')
  const [msg, setMsg] = useState('')

  const mailto = useMemo(() => {
    const to = data.contact.info.find((i) => i.label === 'Email')?.value || data.hero.sideEmail || ''
    const body = `Name: ${first} ${last}\nEmail: ${email}\n\n${msg}`
    const url = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return url
  }, [first, last, email, subject, msg])

  return (
    <section className="section" id="contact">
      <h2 className="section-title" data-reveal>{data.contact.title}</h2>
      <p className="section-sub" data-reveal>{data.contact.subtitle}</p>

      <div className="contact-grid">
        <div className="contact-left" data-reveal>
          <h3 className="contact-h">{data.contact.leftTitle}</h3>
          <p className="contact-p">{data.contact.leftText}</p>

          <div className="contact-info">
            {data.contact.info.map((i) => (
              <div className="contact-info-item" key={i.label}>
                <div className="contact-dot" aria-hidden="true" />
                <div>
                  <div className="contact-k">{i.label}</div>
                  <div className="contact-v">{i.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form" data-reveal>
          <div className="form-row two">
            <div className="field">
              <label>First Name <span className="req">*</span></label>
              <input value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First name" />
            </div>
            <div className="field">
              <label>Last Name <span className="req">*</span></label>
              <input value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last name" />
            </div>
          </div>

          <div className="field">
            <label>Email <span className="req">*</span></label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
          </div>

          <div className="field">
            <label>Subject <span className="req">*</span></label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option>General</option>
              <option>Project</option>
              <option>Hiring</option>
              <option>Collaboration</option>
            </select>
          </div>

          <div className="field">
            <label>Message <span className="req">*</span></label>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell me about your project or how I can help you..." rows={5} />
          </div>

          <div className="hint">Tip: write at least a few words so your message is meaningful.</div>

          <a className="send-btn" href={mailto} onClick={(e) => {
            // basic validation
            if (!first || !last || !email || !msg) {
              e.preventDefault()
              alert('Please fill in First Name, Last Name, Email, and Message.')
            }
          }}>
            Send Message
          </a>
        </div>
      </div>

      <div className="footer-email">
        <div className="footer-note">Let&apos;s connect and build something amazing!</div>
        <div className="footer-big">{data.hero.sideEmail}</div>
      </div>
    </section>
  )
}

export default function App() {
  const progress = useScrollProgress()

  useRevealQueue();
  useEffect(() => {
    document.title = data.siteTitle || 'My Portfolio'
  }, [])

  return (
    <div className="page">
      <CanvasBackgrounds />
      <SideEmail email={data.hero.sideEmail} />
      <ScrollRail progress={progress} />
      <BackToTop />

      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
