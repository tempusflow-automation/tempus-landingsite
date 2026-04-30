// ─── HERO ── kinetic terminal + massive tagline ───
const HERO_LINES = [
{ cmd: 'tempus.scan --your-week', out: '14.3 hours wasted on admin · $1,720 burnt' },
{ cmd: 'tempus.find --leak invoices', out: 'avg invoice paid 23 days late · $8,400 outstanding' },
{ cmd: 'tempus.find --leak leads', out: '37% of leads never followed up · 6 deals lost' },
{ cmd: 'tempus.fix --all', out: 'building 3 workflows · in your account · yours forever' },
{ cmd: 'tempus.deploy', out: 'live · running quietly in the background' }];


const Terminal = () => {
  const [step, setStep] = React.useState(0);
  const [typed, setTyped] = React.useState('');
  const [phase, setPhase] = React.useState('cmd'); // cmd → out → pause

  React.useEffect(() => {
    const line = HERO_LINES[step];
    if (!line) return;
    let t;
    if (phase === 'cmd') {
      const target = '$ ' + line.cmd;
      if (typed.length < target.length) {
        t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 28 + Math.random() * 25);
      } else {
        t = setTimeout(() => setPhase('out'), 380);
      }
    } else if (phase === 'out') {
      t = setTimeout(() => setPhase('pause'), 1200);
    } else {
      t = setTimeout(() => {
        setTyped('');
        setPhase('cmd');
        setStep((s) => (s + 1) % HERO_LINES.length);
      }, 900);
    }
    return () => clearTimeout(t);
  }, [step, typed, phase]);

  const visibleHistory = HERO_LINES.slice(0, step);

  return (
    <div className="conic-border" style={{ padding: 1, borderRadius: 14 }}>
      <div style={{
        background: 'linear-gradient(180deg, rgba(13,20,35,0.95), rgba(10,14,26,0.98))',
        borderRadius: 13,
        padding: '18px 22px 22px',
        fontFamily: 'var(--f-mono)',
        fontSize: 13.5,
        lineHeight: 1.7,
        minHeight: 320,
        display: 'flex', flexDirection: 'column'
      }}>
        {/* chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 14, borderBottom: '1px solid var(--border)', marginBottom: 14 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF6B6B' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FBBF24' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)' }} />
          <span style={{ marginLeft: 10, fontFamily: 'var(--f-ui)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>tempus@flow ~ /your-business</span>
        </div>

        {visibleHistory.map((l, i) =>
        <div key={i} style={{ marginBottom: 10, opacity: 0.55 }}>
            <div style={{ color: 'var(--muted2)' }}>$ {l.cmd}</div>
            <div style={{ color: 'var(--teal)' }}>→ {l.out}</div>
          </div>
        )}

        <div>
          <div style={{ color: 'var(--cloud)' }}>
            {typed}
            {phase === 'cmd' && <span className="caret" />}
          </div>
          {(phase === 'out' || phase === 'pause') &&
          <div style={{ color: 'var(--teal)', marginTop: 4 }}>→ {HERO_LINES[step].out}</div>
          }
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', gap: 14, alignItems: 'center', opacity: .8 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 10px var(--teal)' }} />
          <span style={{ fontFamily: 'var(--f-ui)', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            tempus.live · founding clients · launch month
          </span>
        </div>
      </div>
    </div>);

};

const Hero = () => {
  return (
    <section id="top" style={{ position: 'relative', minHeight: '100vh', paddingTop: 130, paddingBottom: 80, overflow: 'hidden' }}>
      <div className="grid-bg" />
      <div className="glow-radial-teal" style={{ width: 800, height: 800, top: -200, left: '50%', marginLeft: -400, opacity: .8, animation: 'drift1 18s ease-in-out infinite' }} />
      <div className="glow-radial-violet" style={{ width: 500, height: 500, bottom: -150, right: -100, opacity: .5, animation: 'drift2 22s ease-in-out infinite' }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* eyebrow row */}
        <div className="rv in" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px',
          borderRadius: 999, border: '1px solid rgba(78,255,214,0.22)',
          background: 'rgba(78,255,214,0.04)', marginBottom: 36
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 10px var(--teal)' }} />
          <span style={{ fontFamily: 'var(--f-ui)', fontSize: 11, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--teal)' }}>
            Make.com automation · Sydney AU · No calls
          </span>
        </div>

        {/* massive headline */}
        <h1 className="h-display rv in" style={{ fontSize: 'clamp(56px, 11vw, 168px)', marginBottom: 28 }}>
          <span style={{ display: 'block' }}>Take back</span>
          <span style={{ display: 'block' }}>
            your <span className="serif" style={{ color: 'var(--teal)' }}>time.</span>
          </span>
        </h1>

        {/* sub-row: lede + buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'end', marginBottom: 60 }} className="hero-row">
          <p className="rv in d1" style={{
            fontFamily: 'var(--f-body)', fontWeight: 300,
            fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65,
            color: 'var(--muted2)', maxWidth: 560
          }}>
            Done-for-you automations for Australian SMBs. Built in 
            <strong style={{ color: 'var(--cloud)', fontWeight: 500 }}>your</strong> account. Yours forever.
            No discovery calls. No retainer trap. A short form, a proposal
            with a Loom of the solution, one 15-minute sync — then the admin you hate, gone.
          </p>
          <div className="rv in d2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <a href="#audit" className="btn btn-primary">Request a free audit <Icon name="arrow-right" size={14} /></a>
              <a href="#pricing" className="btn btn-ghost">See pricing <Icon name="arrow-down" size={14} /></a>
            </div>
            <span style={{ fontFamily: 'var(--f-ui)', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              No call required · Reply in 24 hrs
            </span>
          </div>
        </div>

        {/* terminal + side stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }} className="hero-row">
          <div className="rv-l in d3"><Terminal /></div>

          <div className="rv-r in d4" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="card" style={{ padding: '20px 22px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 10px var(--teal)' }} />
                <span className="eyebrow-muted" style={{ color:'var(--teal)' }}>Launch month · April 2026</span>
              </div>
              <div style={{ fontFamily: 'var(--f-head)', fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing:'-.015em', lineHeight: 1.25 }}>
                Founding-client pricing<br/>is open right now.
              </div>
              <div style={{ height: 1, background: 'var(--border)', margin: '14px 0' }} />
              <div style={{ fontFamily: 'var(--f-body)', fontSize: 13, fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.65 }}>
                Built by <strong style={{ color: 'var(--cloud)', fontWeight: 500 }}>Corey</strong> in Sydney. Make.com certified. First five Aussie SMBs lock in the launch rate <span style={{ color:'var(--teal)' }}>forever</span>.
              </div>
            </div>

            <div className="card" style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                <Icon name="phone-off" size={18} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--f-head)', fontSize: 14, fontWeight: 600, color: 'var(--cloud)' }}>Zero discovery calls</div>
                <div style={{ fontFamily: 'var(--f-body)', fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>One 15-min sync. That's it.</div>
              </div>
            </div>

            <div className="card" style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                <Icon name="key" size={18} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--f-head)', fontSize: 14, fontWeight: 600, color: 'var(--cloud)' }}>You own everything</div>
                <div style={{ fontFamily: 'var(--f-body)', fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Built in your Make account. Cancel us. Keep it all.</div>
              </div>
            </div>
          </div>
        </div>

        {/* trust marquee */}
        <div style={{ marginTop: 80, paddingTop: 28, borderTop: '1px solid var(--border)' }}>
          <div className="eyebrow-muted" style={{ marginBottom: 18, textAlign: 'center' }}>
Built on Make.com · Plays with the tools you already pay for
          </div>
          <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' }}>
            <div className="marquee">
              {[1, 2].map((k) =>
              <div key={k} className="marquee-track">
                  {['ServiceM8', 'Xero', 'HubSpot', 'Shopify', 'Cliniko', 'Make.com', 'REI Cloud', 'Lightspeed', 'Deputy', 'Halaxy', 'Fergus', 'Zapier', 'WooCommerce', 'Console'].map((t) =>
                <span key={t} style={{
                  fontFamily: 'var(--f-ui)', fontSize: 16, fontWeight: 600,
                  letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)',
                  whiteSpace: 'nowrap'
                }}>{t}</span>
                )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-row { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>);

};

window.Hero = Hero;