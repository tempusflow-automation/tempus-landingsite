// ─── WORKFLOW LIBRARY ── individual automations ───
const WORKFLOWS = [
  {
    id: 1, industry: 'trades',
    complexity: 'MEDIUM', price: 897,
    name: 'Invoice Chase Sequence',
    desc: 'Three-stage payment reminders fire automatically — 3 days before, on the due date, and 7 days overdue.',
    from: ['Xero'], to: ['Gmail', 'SMS'],
  },
  {
    id: 2, industry: 'trades',
    complexity: 'MEDIUM', price: 897,
    name: 'Quote Follow-Up Sequence',
    desc: 'Auto-nudges a prospect at 3 days and again at 7 days if your quote sits unopened.',
    from: ['ServiceM8'], to: ['Gmail'],
  },
  {
    id: 3, industry: 'trades',
    complexity: 'SIMPLE', price: 597,
    name: 'Missed Call → Auto SMS',
    desc: 'Fires a personalised SMS within 60 seconds of a missed call. No lead escapes.',
    from: ['Phone'], to: ['SMS'],
  },
  {
    id: 4, industry: 'trades',
    complexity: 'SIMPLE', price: 597,
    name: 'Job Booking Confirmation + Reminder',
    desc: 'Sends a confirmation on booking, then a 24-hour reminder to cut no-shows.',
    from: ['ServiceM8'], to: ['SMS', 'Email'],
  },
  {
    id: 5, industry: 'trades',
    complexity: 'SIMPLE', price: 597,
    name: 'Google Review Request',
    desc: 'Auto-fires a review request the moment a job is marked complete.',
    from: ['ServiceM8'], to: ['SMS'],
  },
  {
    id: 6, industry: 'all',
    complexity: 'MEDIUM', price: 897,
    name: 'New Lead → CRM + Auto Reply',
    desc: 'Every form submission or Facebook lead hits your CRM and gets an instant SMS acknowledgment.',
    from: ['Website', 'Facebook'], to: ['Airtable', 'SMS'],
  },
  {
    id: 7, industry: 'all',
    complexity: 'MEDIUM', price: 897,
    name: 'Client Onboarding Delivery',
    desc: 'Payment confirmed → welcome email, discovery form, and Calendly link fired in one chain.',
    from: ['Stripe'], to: ['Gmail', 'Airtable'],
  },
  {
    id: 8, industry: 'all',
    complexity: 'COMPLEX', price: 1497,
    name: 'Weekly Performance Report',
    desc: 'Pulls data across your tools every Friday and emails a formatted summary to your inbox.',
    from: ['Airtable', 'Xero'], to: ['Gmail'],
  },
  {
    id: 9, industry: 'realestate',
    complexity: 'MEDIUM', price: 897,
    name: 'New Rental Enquiry Response',
    desc: 'Captures rental enquiries, creates the CRM record, and fires a personalised reply within 2 minutes.',
    from: ['Website'], to: ['CRM', 'Gmail'],
  },
  {
    id: 10, industry: 'realestate',
    complexity: 'MEDIUM', price: 897,
    name: 'Inspection Reminder Sequence',
    desc: 'Reminds landlord and tenant 48 hours before every inspection. No more no-shows.',
    from: ['Calendar'], to: ['SMS', 'Email'],
  },
  {
    id: 11, industry: 'realestate',
    complexity: 'COMPLEX', price: 1497,
    name: 'Landlord Monthly Report',
    desc: 'Compiles rent status, maintenance log, and vacancy data into a clean email — sent automatically.',
    from: ['Airtable'], to: ['Gmail PDF'],
  },
  {
    id: 12, industry: 'health',
    complexity: 'MEDIUM', price: 897,
    name: 'Appointment Reminder + No-Show Follow-Up',
    desc: '24-hour reminder, then an automatic follow-up if the client doesn\'t show.',
    from: ['Calendly'], to: ['SMS', 'Email'],
  },
];

const FILTERS = [
  { key: 'all',        label: 'All Workflows' },
  { key: 'trades',     label: 'Trades & Construction' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'health',     label: 'Health & Wellness' },
];

const COMPLEXITY_META = {
  SIMPLE:  { label: 'Simple',  color: 'var(--teal)',   bg: 'rgba(78,255,214,0.07)',  border: 'rgba(78,255,214,0.22)' },
  MEDIUM:  { label: 'Medium',  color: 'var(--violet)', bg: 'rgba(123,110,246,0.08)', border: 'rgba(123,110,246,0.28)' },
  COMPLEX: { label: 'Complex', color: 'var(--gold)',   bg: 'rgba(201,168,76,0.08)',  border: 'rgba(201,168,76,0.28)' },
};

const ToolPill = ({ name }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 5,
    fontFamily: 'var(--f-ui)', fontSize: 10, fontWeight: 700,
    letterSpacing: '.12em', textTransform: 'uppercase',
    padding: '3px 8px', borderRadius: 4,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border2)',
    color: 'var(--muted2)',
    whiteSpace: 'nowrap',
  }}>
    {name}
  </span>
);

const FlowRow = ({ from, to }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
    <div style={{ display: 'flex', gap: 4 }}>
      {from.map(t => <ToolPill key={t} name={t}/>)}
    </div>
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" style={{ flexShrink: 0 }}>
      <path d="M1 5h14M11 1l4 4-4 4" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <div style={{ display: 'flex', gap: 4 }}>
      {to.map(t => <ToolPill key={t} name={t}/>)}
    </div>
  </div>
);

const WorkflowCard = ({ w, idx }) => {
  const meta = COMPLEXITY_META[w.complexity];
  return (
    <div className={`rv d${Math.min(idx % 3 + 1, 6)}`} style={{
      background: 'var(--card2)', border: '1px solid var(--border)',
      borderRadius: 14, padding: '24px 24px 22px',
      display: 'flex', flexDirection: 'column', gap: 16,
      transition: 'border-color .2s ease, box-shadow .25s ease',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(78,255,214,0.35)';
      e.currentTarget.style.boxShadow = '0 0 32px -8px rgba(78,255,214,0.14)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      {/* Top row: complexity + price */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--f-ui)', fontSize: 9, fontWeight: 700,
          letterSpacing: '.22em', textTransform: 'uppercase',
          padding: '3px 9px', borderRadius: 4,
          background: meta.bg, border: `1px solid ${meta.border}`,
          color: meta.color,
        }}>
          {meta.label}
        </span>
        <span style={{
          fontFamily: 'var(--f-mono)', fontSize: 17, fontWeight: 700,
          color: '#fff', letterSpacing: '-.01em',
        }}>
          <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 400, marginRight: 1 }}>AUD</span>
          ${w.price.toLocaleString()}
        </span>
      </div>

      {/* Name */}
      <div style={{
        fontFamily: 'var(--f-head)', fontSize: 20, fontWeight: 600,
        color: '#fff', lineHeight: 1.15, letterSpacing: '-.02em',
      }}>
        {w.name}
      </div>

      {/* Flow diagram */}
      <FlowRow from={w.from} to={w.to}/>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--f-body)', fontSize: 13.5, fontWeight: 300,
        color: 'var(--muted2)', lineHeight: 1.65,
        flexGrow: 1,
      }}>
        {w.desc}
      </p>

      {/* CTA */}
      <a
        href="#audit"
        className="btn btn-ghost"
        style={{ justifyContent: 'space-between', width: '100%', marginTop: 4 }}
      >
        Get This Workflow
        <span className="arrow" style={{ color: 'var(--teal)' }}>→</span>
      </a>
    </div>
  );
};

const Workflows = () => {
  const [active, setActive] = React.useState('all');

  const visible = active === 'all'
    ? WORKFLOWS
    : WORKFLOWS.filter(w => w.industry === active || w.industry === 'all');

  return (
    <section id="workflows" style={{ position: 'relative', padding: '140px 0 120px', overflow: 'hidden' }}>
      {/* Background grid */}
      <div className="grid-bg"/>

      {/* Teal glow top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 300, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(78,255,214,0.09) 0%, transparent 70%)',
      }}/>

      <div className="container" style={{ position: 'relative' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 52 }} className="proc-head">
          <div>
            <div className="eyebrow rv" style={{ marginBottom: 18 }}>05 — Workflow Library</div>
            <h2 className="h-display rv" style={{ fontSize: 'clamp(38px, 5vw, 70px)' }}>
              Pick your<br/><em>exact</em> fix.
            </h2>
          </div>
          <div className="rv d1">
            <p style={{ fontFamily: 'var(--f-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: 'var(--muted2)', marginBottom: 14 }}>
              Every workflow below is built inside <em style={{ color: 'var(--cloud)', fontStyle: 'normal' }}>your</em> Make.com account.
              You own it permanently — whether you come back next month or never.
            </p>
            <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--teal)', letterSpacing: '.06em', marginBottom: 16 }}>
              SIMPLE · $597 &nbsp;·&nbsp; MEDIUM · $897 &nbsp;·&nbsp; COMPLEX · $1,497
            </p>
            <a href="workflows.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--f-ui)', fontSize: 11, fontWeight: 700,
              letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--cloud)', textDecoration: 'none',
              padding: '9px 16px', borderRadius: 6,
              border: '1px solid var(--border2)',
              transition: 'border-color .18s, color .18s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--cloud)'; }}
            >
              View Full Workflow Library →
            </a>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="no-sb rv" style={{
          display: 'flex', gap: 8, marginBottom: 40,
          overflowX: 'auto', paddingBottom: 4,
        }}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              style={{
                fontFamily: 'var(--f-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '.18em', textTransform: 'uppercase',
                padding: '9px 18px', borderRadius: 6, cursor: 'pointer',
                whiteSpace: 'nowrap', transition: 'all .18s ease',
                background: active === f.key ? 'var(--teal)' : 'transparent',
                color: active === f.key ? 'var(--midnight)' : 'var(--muted)',
                border: active === f.key ? '1px solid var(--teal)' : '1px solid var(--border2)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
          marginBottom: 56,
        }}>
          {visible.map((w, i) => <WorkflowCard key={w.id} w={w} idx={i}/>)}
        </div>

        {/* Bundle nudge */}
        <div className="rv" style={{
          background: 'var(--card2)', border: '1px solid var(--border)',
          borderRadius: 14, padding: '28px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--f-ui)', fontSize: 10, fontWeight: 700,
              letterSpacing: '.22em', textTransform: 'uppercase',
              color: 'var(--teal)', marginBottom: 8,
            }}>
              Bundle &amp; Save
            </div>
            <div style={{
              fontFamily: 'var(--f-head)', fontSize: 22, fontWeight: 600,
              color: '#fff', letterSpacing: '-.02em',
            }}>
              Need more than one?
            </div>
            <p style={{
              fontFamily: 'var(--f-body)', fontSize: 14, fontWeight: 300,
              color: 'var(--muted2)', marginTop: 6, lineHeight: 1.6,
            }}>
              Grab 3 workflows for <span style={{ color: 'var(--cloud)', fontWeight: 400 }}>$2,197</span> or all 6 for <span style={{ color: 'var(--cloud)', fontWeight: 400 }}>$3,997</span> — saving up to $1,785 off individual pricing.
            </p>
          </div>
          <a href="#pricing" className="btn btn-primary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            See Packages <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

window.Workflows = Workflows;
