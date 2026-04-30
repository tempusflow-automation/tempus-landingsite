// ─── LEAD MAGNET ── free automation guide download ───
const LeadMagnet = () => {
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState('idle'); // idle | submitting | success | error
  const [error, setError] = React.useState('');

  const validate = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(email)) {
      setError('That email looks off — double-check it.');
      setState('error');
      return;
    }
    setError('');
    setState('submitting');

    // Persist locally so we have a record on the client side too
    try {
      const list = JSON.parse(localStorage.getItem('tf_guide_leads') || '[]');
      list.push({ email: email.trim(), at: new Date().toISOString() });
      localStorage.setItem('tf_guide_leads', JSON.stringify(list));
    } catch (_) { /* ignore */ }

    // Fire webhook (fire-and-forget)
    fetch(window.MAKE_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'guide-download', email: email.trim(), submittedAt: new Date().toISOString() }),
    }).catch(() => {});

    // Trigger download
    setTimeout(() => {
      const pdfUrl = (window.__resources && window.__resources.guidePdf) || './assets/Tempus-Flow-Automation-Guide.pdf';
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = 'Tempus-Flow-Automation-Guide.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setState('success');
    }, 600);
  };

  const reset = () => {
    setEmail('');
    setState('idle');
    setError('');
  };

  return (
    <section id="guide" style={{ position: 'relative', padding: '120px 0 100px', overflow: 'hidden' }}>
      {/* ambient glow */}
      <div className="glow-radial-teal" style={{ width: 700, height: 700, left: '-20%', top: '10%', opacity: 0.3, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="lm-grid" style={{
          display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center',
          padding: '56px 56px', borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(78,255,214,0.04), rgba(123,110,246,0.02)), var(--card2)',
          border: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
        }}>
          {/* corner mark */}
          <div style={{
            position: 'absolute', top: 24, right: 28,
            fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '.22em',
            textTransform: 'uppercase', color: 'var(--muted)',
          }}>
            <span style={{ color: 'var(--teal)' }}>●</span> free · 18 pages · pdf
          </div>

          {/* LEFT — copy + form */}
          <div className="rv-l in">
            <div className="eyebrow" style={{ marginBottom: 18 }}>06 — Free guide</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', marginBottom: 18, lineHeight: 1.02 }}>
              The 12 automations<br/>
              <span className="serif" style={{ color: 'var(--teal)' }}>every</span> Aussie SMB<br/>
              should run.
            </h2>
            <p style={{
              fontFamily: 'var(--f-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.7,
              color: 'var(--muted2)', maxWidth: 480, marginBottom: 30,
            }}>
              The exact workflows we build for clients on ServiceM8, Xero, HubSpot, Cliniko and Shopify —
              with the trigger, the steps, the time saved, and how to start. No fluff, no upsell.
            </p>

            {/* What's inside list */}
            <div style={{ marginBottom: 32 }}>
              {[
                'The 12-automation map (with hours saved per week)',
                'Tool-by-tool playbooks for the 5 biggest Aussie SMB stacks',
                'A one-page "where do I start" decision tree',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '10px 0', borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{
                    fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--teal)',
                    width: 24, flexShrink: 0, paddingTop: 2,
                  }}>0{i + 1}</span>
                  <span style={{
                    fontFamily: 'var(--f-body)', fontSize: 14.5, color: 'var(--cloud)', lineHeight: 1.55,
                  }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Form / states */}
            {state !== 'success' ? (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{
                  display: 'flex', alignItems: 'stretch',
                  border: `1px solid ${error ? '#ff7a7a' : 'var(--border)'}`,
                  borderRadius: 10, background: 'var(--card)',
                  overflow: 'hidden', transition: 'border-color .2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--teal)'}
                onBlur={e => e.currentTarget.style.borderColor = error ? '#ff7a7a' : 'var(--border)'}
                >
                  <input
                    type="email"
                    placeholder="you@yourbusiness.com.au"
                    value={email}
                    onChange={e => { setEmail(e.target.value); if (error) { setError(''); setState('idle'); } }}
                    disabled={state === 'submitting'}
                    style={{
                      flex: 1, padding: '18px 20px', background: 'transparent', border: 'none', outline: 'none',
                      color: 'var(--cloud)', fontFamily: 'var(--f-body)', fontSize: 15.5, fontWeight: 400,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    style={{
                      padding: '0 28px', border: 'none',
                      background: 'var(--teal)', color: '#0A0F0E',
                      fontFamily: 'var(--f-ui)', fontSize: 12, fontWeight: 700,
                      letterSpacing: '.14em', textTransform: 'uppercase',
                      cursor: state === 'submitting' ? 'wait' : 'pointer',
                      display: 'flex', alignItems: 'center', gap: 10,
                      transition: 'filter .2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.filter = 'none'}
                  >
                    {state === 'submitting' ? 'Sending…' : <>Send the guide <Icon name="arrow-right" size={14} color="#0A0F0E"/></>}
                  </button>
                </div>
                {error && (
                  <div style={{
                    marginTop: 10, fontFamily: 'var(--f-body)', fontSize: 13, color: '#ff7a7a',
                  }}>{error}</div>
                )}
                <div style={{
                  marginTop: 14, fontFamily: 'var(--f-ui)', fontSize: 11, letterSpacing: '.12em',
                  textTransform: 'uppercase', color: 'var(--muted)',
                }}>
                  No spam. One email, one PDF, that's it.
                </div>
              </form>
            ) : (
              <div className="rv-scale in" style={{
                padding: '24px 26px', borderRadius: 10,
                border: '1px solid var(--teal)', background: 'rgba(78,255,214,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%', background: 'var(--teal)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon name="check" size={16} color="#0A0F0E"/>
                  </span>
                  <div style={{ fontFamily: 'var(--f-head)', fontSize: 18, fontWeight: 600, color: 'var(--cloud)' }}>
                    Check your downloads.
                  </div>
                </div>
                <div style={{
                  fontFamily: 'var(--f-body)', fontSize: 14, fontWeight: 300, color: 'var(--muted2)',
                  lineHeight: 1.6, marginBottom: 14, paddingLeft: 40,
                }}>
                  The guide is downloading now. Didn't start?{' '}
                  <a href={(window.__resources && window.__resources.guidePdf) || './assets/Tempus-Flow-Automation-Guide.pdf'} download
                    style={{ color: 'var(--teal)', textDecoration: 'underline' }}>
                    Click here
                  </a>.
                </div>
                <button onClick={reset} style={{
                  marginLeft: 40, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
                  fontFamily: 'var(--f-ui)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  ← Send to another address
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — PDF mockup */}
          <div className="rv-r in" style={{ position: 'relative', perspective: 1400 }}>
            <div className="lm-cover" style={{
              position: 'relative',
              transform: 'rotateY(-12deg) rotateX(4deg) rotateZ(-1deg)',
              transformStyle: 'preserve-3d',
              width: '100%', maxWidth: 380, marginLeft: 'auto',
              aspectRatio: '8.5 / 11',
              background: 'linear-gradient(160deg, #0F1716 0%, #0A0F0E 50%, #060A09 100%)',
              border: '1px solid rgba(78,255,214,0.25)',
              borderRadius: 6,
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 60px -10px rgba(78,255,214,0.2)',
              padding: '36px 32px 32px',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden',
            }}>
              {/* spine highlight */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
                background: 'linear-gradient(180deg, var(--teal), transparent)',
                opacity: .6,
              }}/>
              {/* corner deco */}
              <div style={{
                position: 'absolute', top: 18, right: 18,
                width: 30, height: 30, borderRadius: '50%',
                border: '1px solid var(--teal)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--f-ui)', fontSize: 9, fontWeight: 700, color: 'var(--teal)',
                letterSpacing: '.05em',
              }}>TF</div>

              <div style={{
                fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '.22em',
                textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24,
              }}>
                Tempus Flow / Field Guide v1
              </div>

              <div style={{
                fontFamily: 'var(--f-head)', fontSize: 28, fontWeight: 600, color: 'var(--cloud)',
                letterSpacing: '-.02em', lineHeight: 1.05, marginBottom: 14,
              }}>
                The 12<br/>
                Automations<br/>
                <em className="serif" style={{ color: 'var(--teal)', fontStyle: 'italic', fontWeight: 500 }}>every</em>
                {' '}Aussie<br/>SMB should run.
              </div>

              <div style={{
                fontFamily: 'var(--f-body)', fontSize: 11, fontWeight: 300, color: 'var(--muted2)',
                lineHeight: 1.6, marginBottom: 'auto',
              }}>
                A practical playbook. Triggers, steps,<br/>
                hours saved, and where to start.
              </div>

              {/* faux page indicators */}
              <div style={{ display: 'flex', gap: 4, marginTop: 24, marginBottom: 12 }}>
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} style={{
                    flex: 1, height: 2, background: i < 3 ? 'var(--teal)' : 'var(--border)',
                  }}/>
                ))}
              </div>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontFamily: 'var(--f-mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '.1em',
              }}>
                <span>18 PAGES</span>
                <span>FREE · 2026</span>
              </div>
            </div>

            {/* download badge */}
            <div className="rv-scale in d2" style={{
              position: 'absolute', bottom: -16, left: 8,
              padding: '10px 16px', borderRadius: 999,
              background: 'var(--card)', border: '1px solid var(--teal)',
              display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--f-ui)', fontSize: 10, fontWeight: 700, letterSpacing: '.14em',
              textTransform: 'uppercase', color: 'var(--teal)',
              boxShadow: '0 8px 24px -6px rgba(0,0,0,0.5)',
            }}>
              <Icon name="arrow-right" size={11} color="var(--teal)"/>
              Instant download
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .lm-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; gap: 40px !important; }
          .lm-cover { transform: none !important; max-width: 280px !important; margin: 0 auto !important; }
        }
      `}</style>
    </section>);

};

window.LeadMagnet = LeadMagnet;
