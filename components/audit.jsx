// ─── AUDIT ── immersive multi-step lead capture ───
const Q1_INDUSTRY = ['Trades & Construction','Real Estate','Pro Services','Health & Wellness','Hospitality','Retail / E-com','Other'];
const Q2_HOURS    = ['< 5 hrs','5–10 hrs','10–20 hrs','20+ hrs'];
const Q3_PAINS    = ['Invoice chasing','Lead follow-up','Reporting','Onboarding','Reminders','Inventory','Reviews','Other'];

const Audit = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({ industry:'', hours:'', pains: [], name:'', email:'', biz:'' });

  const [sending, setSending] = React.useState(false);

  const next = () => setStep(s => Math.min(4, s+1));
  const back = () => setStep(s => Math.max(0, s-1));
  const togglePain = (p) => setAnswers(a => ({ ...a, pains: a.pains.includes(p) ? a.pains.filter(x=>x!==p) : [...a.pains, p] }));

  const sendRequest = async () => {
    setSending(true);
    try {
      await fetch(window.MAKE_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'audit-request',
          name: answers.name,
          email: answers.email,
          business: answers.biz,
          industry: answers.industry,
          hoursOfAdmin: answers.hours,
          painPoints: answers.pains,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (_) { /* fail silently */ }
    setSending(false);
    setStep(4);
  };

  return (
    <section id="audit" style={{ position:'relative', padding:'140px 0 120px', overflow:'hidden', minHeight: '100vh' }}>
      <div className="glow-radial-teal" style={{ width: 800, height: 800, top: '40%', left:'50%', transform:'translate(-50%,-50%)', opacity:.4 }}/>
      <div className="grid-bg" style={{ opacity:.5 }}/>

      <div className="container" style={{ position:'relative' }}>
        <div style={{ textAlign:'center', marginBottom: 60 }}>
          <div className="eyebrow rv" style={{ marginBottom: 16 }}>06 — Free audit</div>
          <h2 className="h-display rv" style={{ fontSize:'clamp(40px, 6vw, 84px)' }}>
            Let's find your<br/><span className="serif" style={{color:'var(--teal)'}}>biggest</span> time leak.
          </h2>
          <p className="rv d1" style={{ fontFamily:'var(--f-body)', fontWeight:300, fontSize:16.5, color:'var(--muted2)', maxWidth:520, margin:'24px auto 0', lineHeight:1.7 }}>
            Three questions, your details, and a Loom in your inbox within 24 hours showing exactly which scenarios would pay for themselves first. No call.
          </p>
        </div>

        <div className="rv-scale" style={{
          maxWidth: 820, margin:'0 auto',
          background:'linear-gradient(180deg, rgba(78,255,214,0.04), transparent), var(--card2)',
          border:'1px solid var(--border)', borderRadius: 18, padding: '40px 44px', position:'relative', minHeight: 460,
        }}>
          {/* progress */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 32 }}>
            <div style={{ display:'flex', gap: 6 }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{
                  width: i === step ? 36 : 8, height: 4, borderRadius: 2,
                  background: i <= step ? 'var(--teal)' : 'var(--border2)',
                  transition: 'all .3s',
                }}/>
              ))}
            </div>
            <span style={{ fontFamily:'var(--f-mono)', fontSize:11, color:'var(--muted)' }}>step {step+1}/5</span>
          </div>

          {/* Q1 */}
          {step === 0 && (
            <div>
              <div style={{ fontFamily:'var(--f-ui)', fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--teal)', marginBottom: 14 }}>01 · industry</div>
              <h3 style={{ fontFamily:'var(--f-head)', fontSize:'clamp(24px, 3vw, 36px)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom: 28, lineHeight:1.15 }}>
                What kind of business are you running?
              </h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom: 36 }}>
                {Q1_INDUSTRY.map(o => (
                  <button key={o} onClick={() => { setAnswers(a => ({ ...a, industry: o })); }} style={{
                    fontFamily:'var(--f-ui)', fontSize:12, fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase',
                    padding:'12px 18px', borderRadius:8, cursor:'pointer',
                    background: answers.industry === o ? 'rgba(78,255,214,0.08)' : 'var(--midnight)',
                    border: answers.industry === o ? '1px solid var(--teal)' : '1px solid var(--border2)',
                    color: answers.industry === o ? 'var(--teal)' : 'var(--cloud)',
                    transition: 'all .15s',
                  }}>{o}</button>
                ))}
              </div>
            </div>
          )}

          {/* Q2 */}
          {step === 1 && (
            <div>
              <div style={{ fontFamily:'var(--f-ui)', fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--teal)', marginBottom: 14 }}>02 · hours</div>
              <h3 style={{ fontFamily:'var(--f-head)', fontSize:'clamp(24px, 3vw, 36px)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom: 28, lineHeight:1.15 }}>
                How much of your week disappears into admin?
              </h3>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:10, marginBottom: 36 }}>
                {Q2_HOURS.map(o => (
                  <button key={o} onClick={() => setAnswers(a => ({ ...a, hours: o }))} style={{
                    fontFamily:'var(--f-head)', fontSize:18, fontWeight:600,
                    padding:'24px 22px', borderRadius:10, cursor:'pointer', textAlign:'left',
                    background: answers.hours === o ? 'rgba(78,255,214,0.06)' : 'var(--midnight)',
                    border: answers.hours === o ? '1px solid var(--teal)' : '1px solid var(--border2)',
                    color: answers.hours === o ? 'var(--teal)' : 'var(--cloud)',
                    transition: 'all .15s',
                  }}>{o}</button>
                ))}
              </div>
            </div>
          )}

          {/* Q3 */}
          {step === 2 && (
            <div>
              <div style={{ fontFamily:'var(--f-ui)', fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--teal)', marginBottom: 14 }}>03 · pain · pick all</div>
              <h3 style={{ fontFamily:'var(--f-head)', fontSize:'clamp(24px, 3vw, 36px)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom: 28, lineHeight:1.15 }}>
                Which of these are eating your week?
              </h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom: 36 }}>
                {Q3_PAINS.map(o => {
                  const on = answers.pains.includes(o);
                  return (
                    <button key={o} onClick={() => togglePain(o)} style={{
                      fontFamily:'var(--f-ui)', fontSize:12, fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase',
                      padding:'12px 18px', borderRadius:8, cursor:'pointer',
                      display:'inline-flex', alignItems:'center', gap:8,
                      background: on ? 'rgba(78,255,214,0.08)' : 'var(--midnight)',
                      border: on ? '1px solid var(--teal)' : '1px solid var(--border2)',
                      color: on ? 'var(--teal)' : 'var(--cloud)',
                    }}>
                      {on && <Icon name="check" size={12}/>}{o}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Details */}
          {step === 3 && (
            <div>
              <div style={{ fontFamily:'var(--f-ui)', fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--teal)', marginBottom: 14 }}>04 · your details</div>
              <h3 style={{ fontFamily:'var(--f-head)', fontSize:'clamp(24px, 3vw, 36px)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom: 28, lineHeight:1.15 }}>
                Where do we send your audit?
              </h3>
              <div style={{ display:'flex', flexDirection:'column', gap: 6, marginBottom: 36 }}>
                <input className="field" placeholder="Your name" value={answers.name} onChange={e=>setAnswers(a=>({...a, name:e.target.value}))}/>
                <input className="field" placeholder="Email" value={answers.email} onChange={e=>setAnswers(a=>({...a, email:e.target.value}))}/>
                <input className="field" placeholder="Business name" value={answers.biz} onChange={e=>setAnswers(a=>({...a, biz:e.target.value}))}/>
              </div>
            </div>
          )}

          {/* Confirmation */}
          {step === 4 && (
            <div style={{ textAlign:'center', padding:'20px 0' }}>
              <div style={{
                width:64, height:64, borderRadius:'50%', margin:'0 auto 24px',
                background:'rgba(78,255,214,0.08)', border:'1px solid var(--teal)',
                display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--teal)',
                boxShadow:'0 0 40px -8px var(--teal-glow)',
              }}><Icon name="check" size={28}/></div>
              <h3 style={{ fontFamily:'var(--f-head)', fontSize:'clamp(26px, 3.4vw, 38px)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom: 14 }}>
                Got it{answers.name ? `, ${answers.name.split(' ')[0]}` : ''}.
              </h3>
              <p style={{ fontFamily:'var(--f-body)', fontSize:15, fontWeight:300, color:'var(--muted2)', maxWidth: 460, margin:'0 auto 28px', lineHeight:1.7 }}>
                Corey will reply within 24 hours with a Loom showing the two scenarios most likely to pay for themselves first. No call. No pitch deck.
              </p>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, color:'var(--muted)' }}>
                ↳ corey@tempusflow.com.au · Sydney, AU
              </div>
            </div>
          )}

          {/* nav */}
          {step < 4 && (
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 28, paddingTop: 24, borderTop:'1px solid var(--border)' }}>
              <button onClick={back} disabled={step === 0 || sending} style={{
                fontFamily:'var(--f-ui)', fontSize:11, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase',
                background:'transparent', border:'none', color: step === 0 ? 'var(--border2)' : 'var(--muted2)',
                cursor: step === 0 ? 'default' : 'pointer', padding: '10px 0',
              }}>← Back</button>
              {step < 3 ? (
                <button onClick={next} className="btn btn-primary">
                  Next <Icon name="arrow-right" size={14}/>
                </button>
              ) : (
                <button onClick={sendRequest} disabled={sending} className="btn btn-primary">
                  {sending ? 'Sending…' : <React.Fragment>Send Request <Icon name="arrow-right" size={14}/></React.Fragment>}
                </button>
              )}
            </div>
          )}
        </div>

        {/* trust row */}
        <div style={{ display:'flex', justifyContent:'center', gap:36, marginTop: 36, flexWrap:'wrap' }}>
          {['No discovery call','Reply in 24 hrs','Free · no obligation'].map(t => (
            <span key={t} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'var(--f-ui)', fontSize:11, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--muted)' }}>
              <Icon name="check" size={12} color="var(--teal)"/>{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Audit = Audit;
