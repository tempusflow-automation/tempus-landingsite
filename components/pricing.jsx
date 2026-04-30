// ─── PRICING ── ROI calculator + stacked tiers ───
const PACKAGES = [
  {
    id: 'reclaim', name: 'Tempus Reclaim', icon: '⚡', color: 'var(--teal)',
    price: 1200, period: 'AUD · one-time',
    sub: 'Fix your single biggest time drain.',
    feats: ['1 custom workflow', 'Loom walkthrough on delivery', '14-day support window', 'Full ownership · yours forever'],
    workflows: 1,
  },
  {
    id: 'accelerate', name: 'Tempus Accelerate', icon: '🚀', color: 'var(--teal)',
    price: 2500, period: 'AUD · one-time',
    sub: 'Automate your core operations.',
    feats: ['Up to 3 custom workflows', 'Loom per workflow', '30-day support window', 'Full ownership · yours forever'],
    badge: 'Popular', workflows: 3, featured: true,
  },
  {
    id: 'transform', name: 'Tempus Transform', icon: '🌊', color: 'var(--violet)',
    price: 4500, period: 'AUD · one-time',
    sub: 'A full operational overhaul.',
    feats: ['Up to 6 custom workflows', 'Loom per workflow', '60-day support window', 'Full ownership · yours forever'],
    workflows: 6,
  },
  {
    id: 'retainer', name: 'Tempus Flow Retainer', icon: '🔄', color: 'var(--gold)',
    price: 600, priceLabel: '$600–$900', period: 'AUD · per month · cancel anytime',
    sub: 'Keep automations at their best.',
    feats: ['Monthly health check', 'Up to 2 hrs tweaks/month', 'Priority support', 'No lock-in · cancel anytime'],
    workflows: 0,
  },
];

const Pricing = () => {
  const [hours, setHours] = React.useState(12);
  const [rate, setRate] = React.useState(85);

  // weekly cost → annual savings → recommend tier
  const weeklyCost = hours * rate;
  const annualSavings = Math.round(weeklyCost * 48 * 0.85); // 85% reduction
  const recommended = hours <= 5 ? 'reclaim' : hours <= 12 ? 'accelerate' : 'transform';
  const recPkg = PACKAGES.find(p => p.id === recommended);
  const paybackWeeks = (recPkg.price / (weeklyCost * 0.85)).toFixed(1);

  return (
    <section id="pricing" style={{ position:'relative', padding:'140px 0 120px', overflow:'hidden' }}>
      <div className="glow-radial-teal" style={{ width: 700, height: 700, top: -100, right: -200, opacity: .35 }}/>
      <div className="container" style={{ position:'relative' }}>
        <div style={{ textAlign:'center', marginBottom: 56 }}>
          <div className="eyebrow rv" style={{ marginBottom: 16 }}>04 — Pricing</div>
          <h2 className="h-display rv" style={{ fontSize:'clamp(40px, 6vw, 80px)' }}>
            Real numbers.<br/>Right <span className="serif" style={{color:'var(--teal)'}}>here.</span>
          </h2>
          <p className="rv d1" style={{ fontFamily:'var(--f-body)', fontWeight:300, fontSize:16.5, color:'var(--muted2)', maxWidth:540, margin:'24px auto 0', lineHeight:1.7 }}>
            All AUD. All one-time (except retainer). All published. Try the calculator — find your tier, see the payback.
          </p>
        </div>

        {/* CALCULATOR */}
        <div className="rv-scale" style={{
          background:'linear-gradient(180deg, rgba(78,255,214,0.04), transparent), var(--card2)',
          border:'1px solid var(--border)', borderRadius:16, padding: '34px 36px', marginBottom: 32,
          position:'relative', overflow:'hidden',
        }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 48, alignItems:'center' }} className="calc-grid">
            <div>
              <div className="eyebrow-muted" style={{ marginBottom: 14 }}>ROI Calculator · move the sliders</div>
              <div style={{ fontFamily:'var(--f-head)', fontSize:24, fontWeight:600, color:'#fff', marginBottom: 28, letterSpacing:'-.015em' }}>
                What's your week actually costing you?
              </div>

              {/* Slider rows */}
              <div style={{ marginBottom: 26 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 10 }}>
                  <span style={{ fontFamily:'var(--f-ui)', fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--muted2)' }}>Hours of admin per week</span>
                  <span style={{ fontFamily:'var(--f-head)', fontSize:22, fontWeight:600, color:'var(--teal)' }}>{hours} hrs</span>
                </div>
                <input type="range" min="2" max="30" step="1" value={hours} onChange={e=>setHours(+e.target.value)}
                  style={{ width:'100%', accentColor:'var(--teal)' }}
                />
              </div>

              <div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 10 }}>
                  <span style={{ fontFamily:'var(--f-ui)', fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--muted2)' }}>Your hourly value (AUD)</span>
                  <span style={{ fontFamily:'var(--f-head)', fontSize:22, fontWeight:600, color:'var(--teal)' }}>${rate}/hr</span>
                </div>
                <input type="range" min="40" max="250" step="5" value={rate} onChange={e=>setRate(+e.target.value)}
                  style={{ width:'100%', accentColor:'var(--teal)' }}
                />
              </div>
            </div>

            {/* Right: numbers */}
            <div style={{ background:'var(--midnight)', border:'1px solid var(--border)', borderRadius: 12, padding: 28, position:'relative' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:22 }}>
                <div>
                  <div className="eyebrow-muted" style={{ marginBottom: 6, color:'var(--muted)' }}>Weekly bleed</div>
                  <div style={{ fontFamily:'var(--f-head)', fontSize:32, fontWeight:600, color:'var(--rose)', letterSpacing:'-.02em' }}>${weeklyCost.toLocaleString()}</div>
                </div>
                <div>
                  <div className="eyebrow-muted" style={{ marginBottom: 6, color:'var(--muted)' }}>Yearly opportunity</div>
                  <div style={{ fontFamily:'var(--f-head)', fontSize:32, fontWeight:600, color:'var(--teal)', letterSpacing:'-.02em' }}>${annualSavings.toLocaleString()}</div>
                </div>
              </div>
              <div style={{ height:1, background:'var(--border)', margin:'4px 0 18px' }}/>
              <div style={{ fontFamily:'var(--f-body)', fontSize:13.5, fontWeight:300, color:'var(--muted2)', lineHeight:1.65, marginBottom: 16 }}>
                Recommended tier: <strong style={{ color:'var(--cloud)', fontWeight:500 }}>{recPkg.name}</strong>{' '}
                at <strong style={{ color:'var(--teal)', fontWeight:500 }}>${recPkg.price.toLocaleString()}</strong>.<br/>
                Pays for itself in <strong style={{ color:'var(--cloud)', fontWeight:500 }}>{paybackWeeks} weeks</strong>.
              </div>
              <a href={`#tier-${recommended}`} className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }}>
                See {recPkg.name} <Icon name="arrow-down" size={14}/>
              </a>
            </div>
          </div>
        </div>

        {/* PRICING — stacked horizontal rows, not 4-col */}
        <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
          {PACKAGES.map((p, i) => (
            <div key={p.id} id={`tier-${p.id}`} className={`rv d${i+1} tier-row`} style={{
              display:'grid', gridTemplateColumns:'56px 1fr auto auto', gap: 28, alignItems:'center',
              padding: '26px 30px', borderRadius: 14,
              background: p.featured ? 'linear-gradient(180deg, rgba(78,255,214,0.05), transparent), var(--card2)' : 'var(--card2)',
              border: p.featured ? '1px solid var(--teal)' : '1px solid var(--border)',
              boxShadow: p.featured ? '0 0 60px -20px var(--teal-glow)' : 'none',
              position:'relative',
            }}>
              <div style={{
                width:56, height:56, borderRadius:12, display:'inline-flex', alignItems:'center', justifyContent:'center',
                background: 'var(--midnight)', border:`1px solid ${p.color}`, fontSize: 24,
                boxShadow: `0 0 30px -8px ${p.color}`,
              }}>{p.icon}</div>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
                  <h3 style={{ fontFamily:'var(--f-head)', fontSize:22, fontWeight:600, color:'var(--cloud)', letterSpacing:'-.015em' }}>{p.name}</h3>
                  {p.badge && (
                    <span style={{
                      fontFamily:'var(--f-ui)', fontSize:9, fontWeight:700,
                      letterSpacing:'.18em', textTransform:'uppercase',
                      padding:'3px 10px', borderRadius:3,
                      background:'rgba(78,255,214,0.08)', border:'1px solid rgba(78,255,214,0.25)', color:'var(--teal)',
                    }}>{p.badge}</span>
                  )}
                </div>
                <div style={{ fontFamily:'var(--f-body)', fontSize:13.5, fontWeight:300, color:'var(--muted2)', marginBottom: 10 }}>{p.sub}</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap: 14 }}>
                  {p.feats.map(f => (
                    <span key={f} style={{ display:'flex', alignItems:'center', gap:6, fontFamily:'var(--f-body)', fontSize:12, fontWeight:300, color:'var(--muted)' }}>
                      <Icon name="check" size={12} color={p.color}/>{f}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontFamily:'var(--f-head)', fontSize:36, fontWeight:600, color: p.color, letterSpacing:'-.025em', lineHeight:1 }}>
                  {p.priceLabel || `$${p.price.toLocaleString()}`}
                </div>
                <div style={{ fontFamily:'var(--f-ui)', fontSize:10, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)', marginTop:6 }}>{p.period}</div>
              </div>
              <a href="#audit" className={p.featured ? 'btn btn-primary' : 'btn btn-ghost'} style={{ padding: '12px 20px', fontSize: 11 }}>
                Start <Icon name="arrow-right" size={13}/>
              </a>
            </div>
          ))}
        </div>

        <p style={{ marginTop:28, textAlign:'center', fontFamily:'var(--f-body)', fontSize:13, color:'var(--muted)' }}>
          Not sure which one? The audit form figures it out for you. Reply within 24 hrs.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .tier-row { grid-template-columns: 56px 1fr !important; }
          .tier-row > :nth-child(3), .tier-row > :nth-child(4) { grid-column: 1 / -1; text-align: left !important; }
        }
      `}</style>
    </section>
  );
};

window.Pricing = Pricing;
