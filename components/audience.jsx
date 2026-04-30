// ─── AUDIENCE ── industry verticals ───
const AUDIENCES = [
  { name: 'Trades & Construction', pain: 'Invoice chasing, lead entry, job scheduling, quoting', tools: ['ServiceM8','Fergus','Xero'] },
  { name: 'Real Estate Agencies',  pain: 'Lead follow-up speed, landlord reporting, inspections', tools: ['REI Cloud','Console'] },
  { name: 'Professional Services', pain: 'Client onboarding, compliance deadlines, weekly reports', tools: ['HubSpot','Xero'] },
  { name: 'Health & Wellness',     pain: 'Reminders, no-show follow-ups, rebooking sequences', tools: ['Cliniko','Halaxy'] },
  { name: 'Hospitality & Cafes',   pain: 'Google review requests, rosters, supplier reorders', tools: ['Lightspeed','Deputy'] },
  { name: 'Retail & E-commerce',   pain: 'Abandoned cart, inventory alerts, post-purchase win-back', tools: ['Shopify','WooCommerce'] },
];

const Audience = () => {
  return (
    <section id="audience" style={{ position:'relative', padding:'140px 0 120px', overflow:'hidden' }}>
      <div className="container" style={{ position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'end', marginBottom: 56 }} className="aud-head">
          <div>
            <div className="eyebrow rv" style={{ marginBottom: 18 }}>05 — Who we build for</div>
            <h2 className="h-display rv" style={{ fontSize:'clamp(40px, 5.5vw, 76px)' }}>
              Owner-operated.<br/><span className="serif" style={{color:'var(--teal)'}}>Australian.</span> Specific.
            </h2>
          </div>
          <p className="rv d1" style={{ fontFamily:'var(--f-body)', fontWeight:300, fontSize:16.5, lineHeight:1.7, color:'var(--muted2)', maxWidth: 480 }}>
            Six verticals where we know the tools, the workflows, and the hours bleeding out the bottom.
            If you're 1–20 people on an Australian ABN, you're our person.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 12 }} className="aud-grid">
          {AUDIENCES.map((a,i) => (
            <div key={a.name} className={`rv d${(i%6)+1}`} style={{
              padding: '24px 22px', borderRadius: 12,
              background: 'var(--card2)', border:'1px solid var(--border)',
              transition: 'border-color .2s, transform .2s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--teal)'; e.currentTarget.style.transform='translateY(-2px)';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)';}}
            >
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, color:'var(--teal)', marginBottom: 12 }}>0{i+1}</div>
              <div style={{ fontFamily:'var(--f-head)', fontSize:18, fontWeight:600, color:'var(--cloud)', letterSpacing:'-.01em', marginBottom: 8 }}>{a.name}</div>
              <div style={{ fontFamily:'var(--f-body)', fontSize:13, fontWeight:300, color:'var(--muted2)', lineHeight:1.65, marginBottom: 14 }}>{a.pain}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {a.tools.map(t => (
                  <span key={t} style={{
                    fontFamily:'var(--f-ui)', fontSize:9, fontWeight:600,
                    letterSpacing:'.12em', textTransform:'uppercase',
                    padding:'3px 9px', borderRadius:3,
                    background:'var(--midnight)', border:'1px solid var(--border2)', color:'var(--muted)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* testimonial pull */}
        <div className="rv-scale" style={{
          marginTop: 56, padding: '40px 44px', borderRadius: 16,
          background:'linear-gradient(135deg, rgba(78,255,214,0.05), rgba(123,110,246,0.03)), var(--card2)',
          border:'1px solid var(--border)', position:'relative', overflow:'hidden',
        }}>
          <div className="glow-radial-teal" style={{ width: 400, height: 400, top:-100, right:-100, opacity:.4 }}/>
          <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr auto', gap:32, alignItems:'center' }} className="quote-row">
            <div>
              <div style={{ fontFamily:'var(--f-ui)', fontSize:10, letterSpacing:'.24em', textTransform:'uppercase', color:'var(--teal)', marginBottom: 14 }}>A note from Corey</div>
              <div style={{ fontFamily:'var(--f-head)', fontSize:'clamp(20px, 2.4vw, 28px)', fontWeight:500, color:'#fff', letterSpacing:'-.015em', lineHeight:1.35, marginBottom: 18 }}>
                I'm taking on the <span style={{color:'var(--teal)'}}>first five</span> founding clients at launch pricing. You'll get the same build process every client gets after — just with my full attention and a price that's locked in for life.
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg, var(--teal), var(--violet))', opacity:.4 }}/>
                <div>
                  <div style={{ fontFamily:'var(--f-head)', fontSize:14, fontWeight:600, color:'var(--cloud)' }}>Corey</div>
                  <div style={{ fontFamily:'var(--f-ui)', fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)' }}>Founder · Tempus Flow · Sydney</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontFamily:'var(--f-head)', fontSize:64, fontWeight:600, color:'var(--teal)', letterSpacing:'-.03em', lineHeight:1 }}>5</div>
              <div style={{ fontFamily:'var(--f-ui)', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--muted)', marginTop:6 }}>spots · launch month</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .aud-head { grid-template-columns: 1fr !important; }
          .aud-grid { grid-template-columns: 1fr 1fr !important; }
          .quote-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .aud-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.Audience = Audience;
