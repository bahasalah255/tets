import './App.css'

const sections = [
  {
    eyebrow: 'Front office',
    title: 'Public website',
    description: 'Pages for visitors, customers, and marketing content.',
    items: ['Home', 'About', 'Products', 'Contact'],
  },
  {
    eyebrow: 'Back office',
    title: 'Admin dashboard',
    description: 'Protected area for management, editing, and reporting.',
    items: ['Dashboard', 'Users', 'Orders', 'Settings'],
  },
]

const sharedItems = ['Auth', 'API layer', 'Design system', 'Shared components']

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Monorepo structure</p>
        <h1>
          Front office in <span>frontend/</span> and back office in <span>backoffice/</span>
        </h1>
        <p className="hero-copy">
          The React app now lives in its own folder, and the Laravel admin side lives in a
          separate backoffice app.
        </p>
      </section>

      <section className="grid">
        {sections.map((section) => (
          <article className="card" key={section.title}>
            <p className="card-eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="shared">
        <p className="card-eyebrow">Shared layer</p>
        <h2>Keep these common pieces outside both apps</h2>
        <div className="chips">
          {sharedItems.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
