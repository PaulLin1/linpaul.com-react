export default function LinksPage() {
  const links = [
    { label: "GitHub", url: "https://github.com/PaulLin1" },
    { label: "LinkedIn", url: "https://linkedin.com/in/plin" },
    { label: "Email", url: "mailto:linp40182@gmail.com" }
  ];

  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '90vw',
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}>
        {/* Section 1: Name */}
        <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: 0, backgroundColor: 'white' }}>Links</h1>

        {/* Section 2: Links with line highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                display: 'inline',
                padding: '0 0.25rem',
                textDecoration: 'none',
                color: 'black',
                fontSize: '1.25rem'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
