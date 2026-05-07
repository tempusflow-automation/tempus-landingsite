// ─── PRICING ── Sequence framing: Audit → Project → Retainer ───

const AUDIT_PRODUCT = {
  id: 'audit', name: 'Automation Roadmap', icon: '🔍', color: 'var(--gold)',
  price: 350, period: 'AUD · one-time',
  sub: 'Map every automation opportunity in your business before spending a dollar on builds.',
  feats: [
    'Full business automation roadmap',
    'Prioritised opportunity list',
    'ROI estimate per workflow',
    '30-day priority project booking window',
  ],
};

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
    badge: 'Most Popular', workflows: 3,
  },
  {
    id: 'transform', name: 'Tempus Transform', icon: '🌊', color: 'var(--violet)',
    price: 4500, period: 'AUD · one-time',
    sub: 'A full operational overhaul.',
    feats: ['Up to 6 custom workflows', 'Loom per workflow', '60-day support window', 'Full ownership · yours forever'],
    workflows: 6,
  },
];

const RETAINERS = [
  {
    id: 'retainer-lite', name: 'Flow Plan Lite', icon: '🔄', color: 'var(--gold)',
    price: 650, period: 'AUD · per month · cancel anytime',
    sub: 'Keep automations running and growing.',
    feats: ['Monthly automation health check', '4 hrs build/month', 'Priority support', 'No lock-in · cancel anytime'],
  },
  {
    id: 'retainer-pro', name: 'Flow Plan Pro', icon: '🔄', color: 'var(--gold)',
    price: 950, period: 'AUD · per month · cancel anytime',
    sub: 'Ongoing builds and optimisation at scale.',
    feats: ['Monthly automation health check', '8 hrs build/month', 'Priority support', 'No lock-in · cancel anytime'],
    badge: 'Best Value',
  },
];

// ── Decision Path Questions ──────────────────────────────────────────────
const QUESTIONS = [
  {
    q: 'Do you know exactly which processes you want automated?',
    options: [
      { label: "No — I know I'm wasting time but I'm not sure where to start", value: 'no' },
      { label: "Yes — I have specific workflows in mind", value: 'yes' },
    ],
  },
  {
    q: 'Do you already have automations running from a prior project?',
    options: [
      { label: "Yes — I want to maintain and expand them", value: 'yes' },
      { label: "No — I'm starting fresh", value: 'no' },
    ],
  },
  {
    q: 'How many processes need automating?',
    options: [
      { label: 'Just one clear pain point', value: 'reclaim' },
      { label: 'Two or three connected processes', value: 'accelerate' },
      { label: 'Four or more — my whole operation', value: 'transform' },
    ],
  },
];

const RESULTS = {
  audit:     { id: 'audit',     label: 'Automation Roadmap', price: '$350', why: "You need the map before the journey. The Automation Roadmap tells you exactly what to automate, in what order, with a clear ROI estimate — before you spend a dollar on builds." },
  retainer:  { id: 'retainer-lite', label: 'Flow Plan', price: 'from $650/mo', why: "You've already got the foundations. The Flow Plan keeps your automations healthy and adds new workflows as your business grows." },
  reclaim:   { id: 'reclaim',   label: 'Tempus Reclaim', price: '$1,200', why: "One workflow, fully built, handed over in your Make.com account. Pays for itself in weeks." },
  accelerate:{ id: 'accelerate',label: 'Tempus Accelerate', price: '$2,500', why: "Up to three connected workflows — tackle your core operations in one project." },
  transform: { id: 'transform', label: 'Tempus Transform', price: '$4,500', why: "A full operational overhaul. Up to six workflows across every system that's slowing you down." },
};

const DecisionPath = () => {
  const [step, setStep]       = React.useState(0);   // 0 = not started, 1-3 = questions, 4 = result
  const [answers, setAnswers] = React.useState([]);
  const [result, setResult]   = React.useState(null);

  const answer = (val) => {
    const all = [...answers, val];
    setAnswers(all);
    if (step === 1 && val === 'no')  { setResult('audit');    setStep(4); return; }
    if (step === 2 && val === 'yes') { setResult('retainer'); setStep(4); return; }
    if (step === 3)                  { setResult(val);        setStep(4); return; }
    setStep(step + 1);
  };

  const reset = () => { setStep(0); setAnswers([]); setResult(null); };

  const res = result ? RESULTS[result] : null;
  const bodyOpen = step > 0;

  return (
    <div style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 14, overflow: 'hidden',
    }}>
      {/* Header — always visible, Start CTA included */}
      <div style={{
        padding: '20px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        flexWrap: 'wrap',
        borderBottom: bodyOpen ? '1px solid var(--border)' : 'none',
        transition: 'border-color .2s',
      }}>
        <div>
          <div className="eyebrow-muted" style={{ marginBottom: 4 }}>Not sure where to start?</div>
          <div style={{ fontFamily: 'var(--f-head)', fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-.01em' }}>
            Answer three questions.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {bodyOpen && step < 4 && (
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--teal)' }}>
              {step} / 3
            </div>
          )}
          {!bodyOpen && (
            <button onClick={() => setStep(1)} style={{
              fontFamily: 'var(--f-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase',
              background: 'var(--teal)', color: 'var(--midnight)',
              border: 'none', borderRadius: 6, padding: '11px 20px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
            }}>
              Start <Icon name="arrow-right" size={13}/>
            </button>
          )}
        </div>
      </div>

      {/* Body — expands when questions are active */}
      <div style={{
        maxHeight: bodyOpen ? 600 : 0,
        overflow: 'hidden',
        transition: 'max-height .35s ease',
      }}>
        <div style={{ padding: '24px 28px' }}>

          {/* Questions */}
          {step >= 1 && step <= 3 && (
            <div>
              <div style={{ fontFamily: 'var(--f-head)', fontSize: 19, fontWeight: 600, color: '#fff', marginBottom: 16, lineHeight: 1.3, letterSpacing: '-.01em' }}>
                {QUESTIONS[step - 1].q}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {QUESTIONS[step - 1].options.map(opt => (
                  <button key={opt.value} onClick={() => answer(opt.value)} style={{
                    textAlign: 'left', background: 'var(--card2)',
                    border: '1px solid var(--border)', borderRadius: 8,
                    padding: '14px 18px', cursor: 'pointer',
                    fontFamily: 'var(--f-body)', fontSize: 13.5, fontWeight: 300, color: 'var(--muted2)',
                    lineHeight: 1.5, transition: 'border-color .15s, color .15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--cloud)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted2)'; }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {step === 4 && res && (
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(78,255,214,0.08)', border: '1px solid var(--teal)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name="check" size={16} color="var(--teal)"/>
                </div>
                <div>
                  <div className="eyebrow-muted" style={{ marginBottom: 4, color: 'var(--teal)' }}>Your starting point</div>
                  <div style={{ fontFamily: 'var(--f-head)', fontSize: 22, fontWeight: 600, color: '#fff', letterSpacing: '-.015em' }}>
                    {res.label} <span style={{ color: 'var(--teal)' }}>{res.price}</span>
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--f-body)', fontSize: 13.5, fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.7, marginBottom: 20 }}>
                {res.why}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href={`#tier-${res.id}`}
                  onClick={e => { e.preventDefault(); document.getElementById(`tier-${res.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
                  className="btn btn-primary"
                  style={{ fontSize: 11 }}
                >
                  See {res.label} <Icon name="arrow-down" size={13}/>
                </a>
                <button onClick={reset} style={{
                  fontFamily: 'var(--f-ui)', fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase',
                  background: 'transparent', border: '1px solid var(--border)', borderRadius: 6,
                  padding: '10px 18px', cursor: 'pointer', color: 'var(--muted)',
                }}>
                  Start over
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// ── Tier Row ─────────────────────────────────────────────────────────────
const TierRow = ({ p, index, gated, bookingNote, recommended }) => {
  const isRecommended = recommended === p.id;
  return (
    <div id={`tier-${p.id}`} className={`rv d${index + 1} tier-row`} style={{
      display: 'grid', gridTemplateColumns: '56px 1fr auto auto', gap: 28, alignItems: 'center',
      padding: '26px 30px', borderRadius: 14,
      background: isRecommended ? 'linear-gradient(180deg, rgba(78,255,214,0.05), transparent), var(--card2)' : 'var(--card2)',
      border: isRecommended ? '1px solid var(--teal)' : `1px solid ${p.color === 'var(--gold)' ? 'rgba(201,168,76,0.3)' : 'var(--border)'}`,
      boxShadow: isRecommended ? '0 0 60px -20px var(--teal-glow)' : 'none',
      transition: 'border-color .3s ease, box-shadow .3s ease, background .3s ease',
      position: 'relative',
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--midnight)', border: `1px solid ${p.color}`, fontSize: 24,
        boxShadow: `0 0 30px -8px ${p.color}`,
      }}>{p.icon}</div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <h3 style={{ fontFamily: 'var(--f-head)', fontSize: 22, fontWeight: 600, color: 'var(--cloud)', letterSpacing: '-.015em' }}>{p.name}</h3>
          {isRecommended && (
            <span style={{
              fontFamily: 'var(--f-ui)', fontSize: 9, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase',
              padding: '3px 10px', borderRadius: 3,
              background: 'rgba(78,255,214,0.08)', border: '1px solid rgba(78,255,214,0.25)', color: 'var(--teal)',
            }}>Recommended</span>
          )}
          {!isRecommended && p.badge && (
            <span style={{
              fontFamily: 'var(--f-ui)', fontSize: 9, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase',
              padding: '3px 10px', borderRadius: 3,
              background: p.color === 'var(--gold)' ? 'rgba(201,168,76,0.1)' : 'rgba(78,255,214,0.08)',
              border: `1px solid ${p.color === 'var(--gold)' ? 'rgba(201,168,76,0.3)' : 'rgba(78,255,214,0.25)'}`,
              color: p.color,
            }}>{p.badge}</span>
          )}
        </div>
        <div style={{ fontFamily: 'var(--f-body)', fontSize: 13.5, fontWeight: 300, color: 'var(--muted2)', marginBottom: 10 }}>{p.sub}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {p.feats.map(f => (
            <span key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--f-body)', fontSize: 12, fontWeight: 300, color: 'var(--muted)' }}>
              <Icon name="check" size={12} color={p.color}/>{f}
            </span>
          ))}
        </div>
        {bookingNote && (
          <div style={{
            marginTop: 12, padding: '8px 12px',
            background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 6, fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 300, color: 'var(--gold)', lineHeight: 1.6,
          }}>
            ⏱ {bookingNote}
          </div>
        )}
        {gated && (
          <div style={{
            marginTop: 12, padding: '8px 12px',
            background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 6, fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 300, color: 'var(--gold)', lineHeight: 1.6,
          }}>
            🔒 Available to clients who have completed an Automation Roadmap or fixed-price project.
          </div>
        )}
      </div>

      <div style={{ textAlign: 'right' }}>
        <div style={{ fontFamily: 'var(--f-head)', fontSize: 36, fontWeight: 600, color: p.color, letterSpacing: '-.025em', lineHeight: 1 }}>
          {p.priceLabel || `$${p.price.toLocaleString()}`}
        </div>
        <div style={{ fontFamily: 'var(--f-ui)', fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>
          {p.period}
        </div>
      </div>

      <a href="#audit" className={isRecommended ? 'btn btn-primary' : 'btn btn-ghost'} style={{ padding: '12px 20px', fontSize: 11 }}>
        Start <Icon name="arrow-right" size={13}/>
      </a>
    </div>
  );
};

// ── Section Divider ───────────────────────────────────────────────────────
const StepDivider = ({ step, label, sub }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '32px 0 16px' }}>
    <div style={{
      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
      background: 'var(--midnight)', border: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 500, color: 'var(--teal)',
    }}>{step}</div>
    <div>
      <div style={{ fontFamily: 'var(--f-ui)', fontSize: 10, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--teal)' }}>{label}</div>
      {sub && <div style={{ fontFamily: 'var(--f-body)', fontSize: 12, fontWeight: 300, color: 'var(--muted)', marginTop: 1 }}>{sub}</div>}
    </div>
    <div style={{ flex: 1, height: 1, background: 'var(--border)' }}/>
  </div>
);

// ── Main Pricing Component ────────────────────────────────────────────────
const Pricing = () => {
  const [hours, setHours] = React.useState(12);
  const [rate,  setRate]  = React.useState(85);

  const weeklyCost   = hours * rate;
  const annualSavings = Math.round(weeklyCost * 48 * 0.85);
  const recommended  = hours <= 5 ? 'reclaim' : hours <= 12 ? 'accelerate' : 'transform';
  const recPkg       = PACKAGES.find(p => p.id === recommended);
  const paybackWeeks = (recPkg.price / (weeklyCost * 0.85)).toFixed(1);

  return (
    <section id="pricing" style={{ position: 'relative', padding: '140px 0 120px', overflow: 'hidden' }}>
      <div className="glow-radial-teal" style={{ width: 700, height: 700, top: -100, right: -200, opacity: .35 }}/>
      <div className="container" style={{ position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow rv" style={{ marginBottom: 16 }}>04 — Pricing</div>
          <h2 className="h-display rv" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            Real numbers.<br/>Right <span className="serif" style={{ color: 'var(--teal)' }}>here.</span>
          </h2>
          <p className="rv d1" style={{ fontFamily: 'var(--f-body)', fontWeight: 300, fontSize: 16.5, color: 'var(--muted2)', maxWidth: 560, margin: '24px auto 0', lineHeight: 1.7 }}>
            Every product has a place in a sequence. Road Map first. Build second. Flow third. You don't have to follow all three steps — but understanding the path means you'll never buy the wrong thing.
          </p>
        </div>

        {/* Sequence visual */}
        <div className="rv" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 0, marginBottom: 40, flexWrap: 'wrap',
        }}>
          {[
            { step: '01', label: 'Road Map', price: '$350', sub: 'Map it' },
            null,
            { step: '02', label: 'Project', price: '$1,200–$4,500', sub: 'Build it' },
            null,
            { step: '03', label: 'Flow', price: 'from $650/mo', sub: 'Scale it' },
          ].map((item, i) => item === null ? (
            <div key={i} style={{ padding: '0 8px', color: 'var(--border)', fontSize: 18 }}>→</div>
          ) : (
            <div key={i} style={{
              padding: '14px 22px', background: 'var(--card2)',
              border: '1px solid var(--border)', borderRadius: 10, textAlign: 'center', minWidth: 120,
            }}>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--teal)', marginBottom: 3 }}>{item.step}</div>
              <div style={{ fontFamily: 'var(--f-head)', fontSize: 16, fontWeight: 600, color: '#fff' }}>{item.label}</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{item.price}</div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="rv-scale" style={{
          background: 'linear-gradient(180deg, rgba(78,255,214,0.04), transparent), var(--card2)',
          border: '1px solid var(--border)', borderRadius: 16, padding: '34px 36px', marginBottom: 40,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }} className="calc-grid">
            <div>
              <div className="eyebrow-muted" style={{ marginBottom: 14 }}>ROI Calculator · move the sliders</div>
              <div style={{ fontFamily: 'var(--f-head)', fontSize: 24, fontWeight: 600, color: '#fff', marginBottom: 28, letterSpacing: '-.015em' }}>
                What's your week actually costing you?
              </div>
              <div style={{ marginBottom: 26 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--f-ui)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted2)' }}>Hours of admin per week</span>
                  <span style={{ fontFamily: 'var(--f-head)', fontSize: 22, fontWeight: 600, color: 'var(--teal)' }}>{hours} hrs</span>
                </div>
                <input type="range" min="2" max="30" step="1" value={hours} onChange={e => setHours(+e.target.value)}
                  style={{ width: '100%', accentColor: 'var(--teal)' }}/>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--f-ui)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted2)' }}>Your hourly value (AUD)</span>
                  <span style={{ fontFamily: 'var(--f-head)', fontSize: 22, fontWeight: 600, color: 'var(--teal)' }}>${rate}/hr</span>
                </div>
                <input type="range" min="40" max="250" step="5" value={rate} onChange={e => setRate(+e.target.value)}
                  style={{ width: '100%', accentColor: 'var(--teal)' }}/>
              </div>
            </div>
            <div style={{ background: 'var(--midnight)', border: '1px solid var(--border)', borderRadius: 12, padding: 28 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 22 }}>
                <div>
                  <div className="eyebrow-muted" style={{ marginBottom: 6, color: 'var(--muted)' }}>Weekly bleed</div>
                  <div style={{ fontFamily: 'var(--f-head)', fontSize: 32, fontWeight: 600, color: 'var(--rose)', letterSpacing: '-.02em' }}>${weeklyCost.toLocaleString()}</div>
                </div>
                <div>
                  <div className="eyebrow-muted" style={{ marginBottom: 6, color: 'var(--muted)' }}>Yearly opportunity</div>
                  <div style={{ fontFamily: 'var(--f-head)', fontSize: 32, fontWeight: 600, color: 'var(--teal)', letterSpacing: '-.02em' }}>${annualSavings.toLocaleString()}</div>
                </div>
              </div>
              <div style={{ height: 1, background: 'var(--border)', margin: '4px 0 18px' }}/>
              <div style={{ fontFamily: 'var(--f-body)', fontSize: 13.5, fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.65, marginBottom: 16 }}>
                Recommended tier: <strong style={{ color: 'var(--cloud)', fontWeight: 500 }}>{recPkg.name}</strong>{' '}
                at <strong style={{ color: 'var(--teal)', fontWeight: 500 }}>${recPkg.price.toLocaleString()}</strong>.<br/>
                Pays for itself in <strong style={{ color: 'var(--cloud)', fontWeight: 500 }}>{paybackWeeks} weeks</strong>.
              </div>
              <a
                href={`#tier-${recommended}`}
                onClick={e => { e.preventDefault(); document.getElementById(`tier-${recommended}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                See {recPkg.name} <Icon name="arrow-down" size={14}/>
              </a>
            </div>
          </div>
        </div>

        {/* ── Step 1: Audit ── */}
        <StepDivider step="1" label="Start Here — Automation Roadmap" sub="Not sure what to automate? Get the map first."/>
        <div id="tier-audit" className="rv tier-row" style={{
          display: 'grid', gridTemplateColumns: '56px 1fr auto auto', gap: 28, alignItems: 'center',
          padding: '26px 30px', borderRadius: 14,
          background: 'linear-gradient(180deg, rgba(201,168,76,0.05), transparent), var(--card2)',
          border: '1px solid rgba(201,168,76,0.3)',
          marginBottom: 8,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--midnight)', border: '1px solid var(--gold)', fontSize: 24,
            boxShadow: '0 0 30px -8px var(--gold)',
          }}>🔍</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <h3 style={{ fontFamily: 'var(--f-head)', fontSize: 22, fontWeight: 600, color: 'var(--cloud)', letterSpacing: '-.015em' }}>Automation Roadmap</h3>
              <span style={{
                fontFamily: 'var(--f-ui)', fontSize: 9, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase',
                padding: '3px 10px', borderRadius: 3,
                background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)',
              }}>Entry Point</span>
            </div>
            <div style={{ fontFamily: 'var(--f-body)', fontSize: 13.5, fontWeight: 300, color: 'var(--muted2)', marginBottom: 10 }}>
              Map every automation opportunity in your business before spending a dollar on builds.
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 12 }}>
              {AUDIT_PRODUCT.feats.map(f => (
                <span key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--f-body)', fontSize: 12, fontWeight: 300, color: 'var(--muted)' }}>
                  <Icon name="check" size={12} color="var(--gold)"/>{f}
                </span>
              ))}
            </div>
            <div style={{
              padding: '8px 12px',
              background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 6, fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 300, color: 'var(--gold)', lineHeight: 1.6,
            }}>
              ⏱ This audit is valid for 30 days. Book your project within this window to lock in your current pricing.
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--f-head)', fontSize: 36, fontWeight: 600, color: 'var(--gold)', letterSpacing: '-.025em', lineHeight: 1 }}>$350</div>
            <div style={{ fontFamily: 'var(--f-ui)', fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>AUD · one-time</div>
          </div>
          <a href="#audit" className="btn btn-ghost" style={{ padding: '12px 20px', fontSize: 11 }}>
            Start <Icon name="arrow-right" size={13}/>
          </a>
        </div>

        {/* ── Step 2: Build ── */}
        <StepDivider step="2" label="Build — Fixed-Price Projects" sub="Done in a defined timeframe. Owned by you forever."/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 8 }}>
          {PACKAGES.map((p, i) => <TierRow key={p.id} p={p} index={i} recommended={recommended}/>)}
        </div>

        {/* ── Step 3: Scale ── */}
        <StepDivider step="3" label="Scale — Flow Plan" sub="For clients who already have their foundations automated."/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
          {RETAINERS.map((p, i) => <TierRow key={p.id} p={p} index={i} gated={true}/>)}
        </div>

        {/* Decision Path — collapsible, below all tiers */}
        <DecisionPath/>

        <p style={{ marginTop: 20, textAlign: 'center', fontFamily: 'var(--f-body)', fontSize: 13, color: 'var(--muted)' }}>
          Not sure which step you're at? The free workflow review figures it out. Reply within 24 hrs.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .tier-row { grid-template-columns: 56px 1fr !important; }
          .tier-row > :nth-child(3) { grid-column: 1 / -1; text-align: center !important; }
          .tier-row > :nth-child(4) { grid-column: 1 / -1; text-align: left !important; }
        }
      `}</style>
    </section>
  );
};

window.Pricing = Pricing;
