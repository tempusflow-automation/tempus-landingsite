// ─── PROBLEM section: split-screen "weight of admin" ───
const Problem = () => {
  const manualTasks = [
    { time: '07:12', task: 'Re-type yesterday\'s job sheets into Xero',  cost: '$48' },
    { time: '08:40', task: 'Chase 4 overdue invoices, one by one',        cost: '$72' },
    { time: '10:05', task: 'Copy Squarespace lead → HubSpot → email',     cost: '$36' },
    { time: '11:22', task: 'Send "are we still on?" reminder texts',      cost: '$24' },
    { time: '13:48', task: 'Update job statuses across three apps',       cost: '$60' },
    { time: '15:30', task: 'Manual landlord report. Again.',              cost: '$96' },
    { time: '16:55', task: 'Forward supplier email + reorder',            cost: '$28' },
    { time: '18:20', task: 'Catch up on the day. Skip dinner.',           cost: '—' },
  ];
  const flowTasks = [
    { time: '—', task: 'Tempus Flow runs while you do the actual work.', cost: '✓' },
  ];

  return (
    <section id="problem" style={{ position: 'relative', padding: '160px 0 120px', overflow: 'hidden' }}>
      <div className="glow-radial-violet" style={{ width: 600, height: 600, top: 100, left: -200, opacity: .35 }}/>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 60 }} className="prob-head">
          <div>
            <div className="eyebrow rv" style={{ marginBottom: 18 }}>01 — The weight</div>
            <h2 className="h-display rv" style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}>
              You didn't start a business<br/>to <span className="serif" style={{ color: 'var(--teal)' }}>do data entry.</span>
            </h2>
          </div>
          <p className="rv d1" style={{ fontFamily: 'var(--f-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: 'var(--muted2)', maxWidth: 480 }}>
            But that's what running an SMB becomes. The average owner-operator we meet is losing
            <strong style={{ color: 'var(--cloud)', fontWeight: 500 }}> 12 to 18 hours a week </strong>
            to admin a script could do in seconds. Look at one Tuesday.
          </p>
        </div>

        {/* split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)' }} className="split-grid">

          {/* MANUAL */}
          <div className="rv-l" style={{ background: 'linear-gradient(180deg, rgba(255,107,107,0.05), transparent 60%), var(--card2)', padding: '34px 32px' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--f-ui)', fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: 6 }}>The way it is now</div>
                <div style={{ fontFamily: 'var(--f-head)', fontSize: 26, fontWeight: 600, color: 'var(--cloud)', letterSpacing: '-.015em' }}>Manual Tuesday</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--f-head)', fontSize: 32, fontWeight: 600, color: 'var(--rose)', letterSpacing: '-.02em', lineHeight: 1 }}>9.4h</div>
                <div style={{ fontFamily: 'var(--f-ui)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>$364 in time burnt</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {manualTasks.map((t, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '52px 1fr 50px', gap: 14, alignItems: 'center',
                  padding: '12px 0', borderBottom: i < manualTasks.length - 1 ? '1px solid rgba(255,107,107,0.08)' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--muted)' }}>{t.time}</span>
                  <span style={{ fontFamily: 'var(--f-body)', fontSize: 13.5, fontWeight: 300, color: 'var(--cloud)' }}>{t.task}</span>
                  <span style={{ fontFamily: 'var(--f-ui)', fontSize: 11, fontWeight: 600, color: 'var(--rose)', textAlign: 'right' }}>{t.cost}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FLOW */}
          <div className="rv-r" style={{ background: 'linear-gradient(180deg, rgba(78,255,214,0.06), transparent 60%), var(--card2)', padding: '34px 32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--f-ui)', fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 6 }}>The way it could be</div>
                <div style={{ fontFamily: 'var(--f-head)', fontSize: 26, fontWeight: 600, color: 'var(--cloud)', letterSpacing: '-.015em' }}>Tempus Tuesday</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--f-head)', fontSize: 32, fontWeight: 600, color: 'var(--teal)', letterSpacing: '-.02em', lineHeight: 1 }}>0.4h</div>
                <div style={{ fontFamily: 'var(--f-ui)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>$15 supervision</div>
              </div>
            </div>

            <div style={{
              flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              gap: 22, padding: '40px 20px',
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(78,255,214,0.05), transparent 70%)',
              borderRadius: 12,
            }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 14px var(--teal)' }}/>
                <span style={{ fontFamily: 'var(--f-ui)', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--teal)' }}>Running · scenarios live</span>
              </div>
              <div style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 500, color: '#fff', textAlign: 'center', lineHeight: 1.25, letterSpacing: '-.015em', maxWidth: 420 }}>
                Invoices chased.<br/>Leads routed.<br/>Reports sent.<br/>Reminders fired.
              </div>
              <div style={{ fontFamily: 'var(--f-body)', fontSize: 13, color: 'var(--muted2)', textAlign: 'center', maxWidth: 320 }}>
                You did <strong style={{ color: 'var(--cloud)', fontWeight: 500 }}>none of it</strong>. You shipped the actual work.
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                {['ServiceM8','Xero','HubSpot','Gmail'].map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--f-ui)', fontSize: 9, fontWeight: 600,
                    letterSpacing: '.14em', textTransform: 'uppercase',
                    padding: '4px 9px', borderRadius: 4, background: 'var(--midnight)',
                    border: '1px solid var(--border2)', color: 'var(--muted2)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* delta */}
        <div className="rv d2 delta-grid" style={{ marginTop: 32, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 14 }}>
          {[
            { k: '9 hrs', v: 'reclaimed every Tuesday' },
            { k: '$349', v: 'of your time, weekly' },
            { k: '$1,397', v: 'monthly opportunity cost' },
            { k: '7.2 wks', v: 'payback on Accelerate' },
          ].map(s => (
            <div key={s.k} style={{ padding: '14px 22px', borderRadius: 10, background: 'var(--card2)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--f-head)', fontSize: 22, fontWeight: 600, color: 'var(--teal)', letterSpacing: '-.01em' }}>{s.k}</span>
              <span style={{ fontFamily: 'var(--f-body)', fontSize: 12.5, fontWeight: 300, color: 'var(--muted2)' }}>{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prob-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .split-grid { grid-template-columns: 1fr !important; }
          .delta-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

window.Problem = Problem;
