// ─── Top nav with glass pill + hamburger menu ───
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 30);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: 'Problem',        href: '#problem' },
    { label: 'The Difference', href: '#moat' },
    { label: 'Process',        href: '#process' },
    { label: 'Pricing',        href: '#pricing' },
    { label: 'FAQ',            href: '#faq' },
  ];

  const close = () => setOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)',
        zIndex: 200, width: 'min(1180px, calc(100% - 32px))',
        transition: 'all .3s ease',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px 12px 22px',
          borderRadius: 999,
          background: scrolled || open ? 'rgba(10,14,26,0.85)' : 'rgba(13,20,35,0.45)',
          border: `1px solid ${scrolled || open ? 'rgba(78,255,214,0.18)' : 'var(--border)'}`,
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          boxShadow: scrolled ? '0 8px 40px -10px rgba(0,0,0,0.6)' : 'none',
        }}>
          {/* Logo */}
          <a href="#top" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--cloud)' }}>
            <span style={{ fontFamily: 'var(--f-head)', fontSize: 17, fontWeight: 600, letterSpacing: '-.01em' }}>
              Tempus <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>Flow</em>
            </span>
          </a>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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

          {/* Hamburger (mobile only) */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              background: 'transparent', border: 'none',
              cursor: 'pointer', padding: '6px 8px',
              color: 'var(--cloud)',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              gap: 5, width: 36, height: 36,
            }}
          >
            <span style={{
              display: 'block', width: 20, height: 1.5,
              background: open ? 'var(--teal)' : 'var(--cloud)',
              transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
              transition: 'transform .22s ease, background .2s',
            }}/>
            <span style={{
              display: 'block', width: 20, height: 1.5,
              background: open ? 'transparent' : 'var(--cloud)',
              transition: 'background .15s',
            }}/>
            <span style={{
              display: 'block', width: 20, height: 1.5,
              background: open ? 'var(--teal)' : 'var(--cloud)',
              transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              transition: 'transform .22s ease, background .2s',
            }}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className="nav-overlay" style={{
        position: 'fixed', inset: 0, zIndex: 190,
        background: 'rgba(6,9,18,0.97)',
        backdropFilter: 'blur(12px)',
        display: 'flex', flexDirection: 'column',
        padding: '100px 32px 48px',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity .25s ease',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} style={{
              fontFamily: 'var(--f-head)', fontSize: 'clamp(28px, 7vw, 40px)',
              fontWeight: 600, letterSpacing: '-.02em',
              color: 'var(--cloud)', textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid var(--border)',
              opacity: open ? 1 : 0,
              transform: open ? 'translateX(0)' : 'translateX(-16px)',
              transition: `opacity .3s ease ${i * 0.06}s, transform .3s ease ${i * 0.06}s`,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--cloud)'}
            >
              {l.label}
              <Icon name="arrow-right" size={18} color="var(--muted)"/>
            </a>
          ))}
        </nav>

        <a href="#audit" onClick={close} className="btn btn-primary" style={{
          marginTop: 40, justifyContent: 'center',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(12px)',
          transition: `opacity .3s ease ${links.length * 0.06 + 0.05}s, transform .3s ease ${links.length * 0.06 + 0.05}s`,
        }}>
          Request a free audit <Icon name="arrow-right" size={14}/>
        </a>

        <p style={{
          marginTop: 20, textAlign: 'center',
          fontFamily: 'var(--f-ui)', fontSize: 10, letterSpacing: '.2em',
          textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          No call required · Reply in 24 hrs
        </p>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 881px) {
          .nav-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
};
window.Nav = Nav;
