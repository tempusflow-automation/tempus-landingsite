// ─── PROCESS ── async timeline ───
const Process = () => {
  const steps = [
    { day: 'Day 0',  ico: 'mail',     title: 'You fill the form',         body: 'Short intake. Tools, pain points, priorities. ~9 minutes. No call required.', tag: 'async' },
    { day: 'Day 1–2',ico: 'spark',    title: 'Proposal + Loom of the solution',body: 'Written scope and a Loom showing the proposed build. Fixed price. You approve when ready.', tag: 'async' },
    { day: 'Day 3',  ico: 'phone-off',title: '15-min sync',               body: 'The only call. Confirm the plan and grant access. Once. Done.', tag: 'one call' },
    { day: 'Day 4–8',ico: 'clock',    title: 'We build · in your account',body: 'Quietly, async. No status meetings. Built under your Make + tool logins.', tag: 'async' },
    { day: 'Day 9',  ico: 'key',      title: 'Loom walkthrough + handover',body: 'Walkthrough Loom, written runbook, owner = you. Cancel us. Keep everything.', tag: 'async' },
  ];

  return (
    <section id="process" style={{ position: 'relative', padding: '140px 0 120px', overflow:'hidden' }}>
      <div className="container" style={{ position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'end', marginBottom: 56 }} className="proc-head">
          <div>
            <div className="eyebrow rv" style={{ marginBottom: 18 }}>03 — How it works</div>
            <h2 className="h-display rv" style={{ fontSize:'clamp(40px, 5.5vw, 76px)' }}>
              Nine days.<br/><span className="serif" style={{ color:'var(--teal)' }}>One</span> phone call.
            </h2>
          </div>
          <p className="rv d1" style={{ fontFamily:'var(--f-body)', fontWeight:300, fontSize:16.5, lineHeight:1.7, color:'var(--muted2)', maxWidth: 480 }}>
            Most agencies turn a build into a six-week relationship. We turn it into a delivery.
            Async by default — call only when there's literally nothing else for it.
          </p>
        </div>

        <div style={{ position:'relative' }}>
          {/* vertical line */}
          <div style={{ position:'absolute', left: 22, top: 12, bottom: 12, width: 1, background: 'linear-gradient(180deg, var(--teal), var(--border) 80%)', opacity: .4 }}/>

          <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
            {steps.map((s,i) => (
              <div key={i} className={`rv-l d${i+1}`} style={{
                position:'relative', display:'grid', gridTemplateColumns: '46px 1fr', gap: 22, alignItems:'flex-start',
              }}>
                <div style={{
                  width:46, height:46, borderRadius:'50%',
                  background:'var(--midnight)', border: '1px solid var(--teal)',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  color:'var(--teal)', position:'relative', zIndex:1,
                  boxShadow:'0 0 24px -6px var(--teal-glow)',
                }}>
                  <Icon name={s.ico} size={18}/>
                </div>
                <div style={{
                  background:'var(--card2)', border:'1px solid var(--border)',
                  borderRadius:12, padding: '20px 24px',
                  display:'grid', gridTemplateColumns: '110px 1fr auto', gap: 24, alignItems:'center',
                }} className="proc-row">
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:12, color:'var(--teal)', letterSpacing:'.06em' }}>{s.day}</div>
                  <div>
                    <div style={{ fontFamily:'var(--f-head)', fontSize:18, fontWeight:600, color:'var(--cloud)', marginBottom:4 }}>{s.title}</div>
                    <div style={{ fontFamily:'var(--f-body)', fontSize:13.5, fontWeight:300, color:'var(--muted2)', lineHeight:1.6 }}>{s.body}</div>
                  </div>
                  <span style={{
                    fontFamily:'var(--f-ui)', fontSize:9, fontWeight:700,
                    letterSpacing:'.2em', textTransform:'uppercase',
                    padding: '4px 10px', borderRadius: 4,
                    background: s.tag==='async' ? 'rgba(78,255,214,0.07)' : 'rgba(123,110,246,0.08)',
                    border: s.tag==='async' ? '1px solid rgba(78,255,214,0.22)' : '1px solid rgba(123,110,246,0.3)',
                    color: s.tag==='async' ? 'var(--teal)' : 'var(--violet)',
                  }}>{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .proc-head { grid-template-columns: 1fr !important; }
          .proc-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
};

window.Process = Process;
