// ─── Top nav with glass effect, sticky ───
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 30);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  const links = [
    { label: 'Problem', href: '#problem' },
    { label: 'The Difference', href: '#moat' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)',
      zIndex: 100, width: 'min(1180px, calc(100% - 32px))',
      transition: 'all .3s ease',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 16px 12px 22px',
        borderRadius: 999,
        background: scrolled ? 'rgba(10,14,26,0.72)' : 'rgba(13,20,35,0.45)',
        border: `1px solid ${scrolled ? 'rgba(78,255,214,0.18)' : 'var(--border)'}`,
        backdropFilter: 'blur(18px) saturate(160%)',
        WebkitBackdropFilter: 'blur(18px) saturate(160%)',
        boxShadow: scrolled ? '0 8px 40px -10px rgba(0,0,0,0.6)' : 'none',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--cloud)' }}>
          <span style={{ fontFamily: 'var(--f-head)', fontSize: 17, fontWeight: 600, letterSpacing: '-.01em' }}>
            Tempus <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>Flow</em>
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--f-ui)', fontSize: 11.5, fontWeight: 500,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--muted2)', textDecoration: 'none',
              padding: '8px 14px', borderRadius: 999, transition: 'color .15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted2)'}
            >{l.label}</a>
          ))}
        </div>

        <a href="#audit" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 11 }}>
          Request Audit <Icon name="arrow-right" size={14} />
        </a>
      </div>
      <style>{`
        @media (max-width: 880px) { .nav-links { display: none !important; } }
      `}</style>
    </nav>
  );
};
window.Nav = Nav;
