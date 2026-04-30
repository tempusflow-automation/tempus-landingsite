// ─── MOAT ── scroll-driven 3-act narrative ───
const MOAT_ACTS = [
  {
    n: '01',
    kicker: 'Ownership',
    title: <>Built in <em>your</em> account.<br/>Yours <span className="serif" style={{color:'var(--teal)'}}>forever.</span></>,
    body: 'Every other agency builds in their account. Then charges you forever to keep it on. We build in yours. Cancel us tomorrow — your automations keep running. Nothing breaks. Nothing leaves.',
    visual: 'ownership',
    color: 'var(--teal)',
  },
  {
    n: '02',
    kicker: 'Pricing',
    title: <>Prices on the <span className="serif" style={{color:'var(--gold)'}}>website.</span><br/>Always have been.</>,
    body: 'Try this: open any other Australian automation agency. Find a price. You can\'t. Every quote starts with "book a 30-minute call." Ours start at $1,200. Right there. No hiding.',
    visual: 'pricing',
    color: 'var(--gold)',
  },
  {
    n: '03',
    kicker: 'Async',
    title: <>One <span className="serif" style={{color:'var(--violet)'}}>15-minute</span> call.<br/>That's the entire process.</>,
    body: 'A short form to start. A written proposal with a Loom showing the proposed solution. One 15-minute sync to confirm and grant access. A Loom walkthrough on delivery. Handover. That’s it.',
    visual: 'async',
    color: 'var(--violet)',
  },
];

const OwnershipVisual = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
    <div style={{
      width: 320, height: 220, borderRadius: 14,
      background: 'linear-gradient(180deg, rgba(78,255,214,0.06), transparent), var(--card2)',
      border: '1px solid var(--teal)', position:'relative',
      boxShadow: '0 0 80px -10px var(--teal-glow)',
      padding: 22,
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 14 }}>
        <span style={{ fontFamily:'var(--f-ui)', fontSize:9, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--teal)' }}>your.make.com</span>
        <span style={{ width:8, height:8, borderRadius:'50%', background:'var(--teal)', boxShadow:'0 0 10px var(--teal)' }}/>
      </div>
      <div style={{ fontFamily:'var(--f-head)', fontSize:18, fontWeight:600, color:'#fff', marginBottom: 6 }}>3 scenarios · live</div>
      <div style={{ fontFamily:'var(--f-mono)', fontSize:11, color:'var(--muted2)', lineHeight: 1.7 }}>
        <div>↳ Invoice chase &nbsp;<span style={{color:'var(--teal)'}}>active</span></div>
        <div>↳ Lead routing &nbsp;<span style={{color:'var(--teal)'}}>active</span></div>
        <div>↳ Job sync &nbsp;<span style={{color:'var(--teal)'}}>active</span></div>
      </div>
      <div style={{ position:'absolute', bottom:18, left:22, right:22, padding:'10px 12px', borderRadius:8, background:'var(--midnight)', border:'1px solid var(--border)', display:'flex', alignItems:'center', gap:9 }}>
        <Icon name="key" size={14} color="var(--teal)"/>
        <span style={{ fontFamily:'var(--f-ui)', fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--cloud)' }}>Owner: <span style={{color:'var(--teal)'}}>You</span></span>
      </div>
    </div>
    {/* faint "tempus flow" with strikethrough */}
    <div style={{ position:'absolute', bottom:-44, left:'50%', transform:'translateX(-50%)', textAlign:'center' }}>
      <div style={{ fontFamily:'var(--f-ui)', fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--muted)', textDecoration:'line-through' }}>Tempus Flow dependency</div>
    </div>
  </div>
);

const PricingVisual = () => (
  <div style={{ display:'flex', flexDirection:'column', gap:10, width:'min(420px, 90%)', margin:'0 auto' }}>
    {[
      { name:'Reclaim',    price:'$1,200', shown:true,  color:'var(--teal)' },
      { name:'Accelerate', price:'$2,500', shown:true,  color:'var(--teal)' },
      { name:'Transform',  price:'$4,500', shown:true,  color:'var(--violet)' },
      { name:'Retainer',   price:'$600+/mo', shown:true, color:'var(--gold)' },
    ].map((p,i) => (
      <div key={p.name} style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'14px 18px', borderRadius:10,
        background:'var(--card2)', border:'1px solid var(--border)',
      }}>
        <span style={{ fontFamily:'var(--f-head)', fontSize:15, fontWeight:600, color:'var(--cloud)' }}>{p.name}</span>
        <span style={{ fontFamily:'var(--f-head)', fontSize:18, fontWeight:600, color:p.color, letterSpacing:'-.01em' }}>{p.price}</span>
      </div>
    ))}
    <div style={{ marginTop:12, display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'12px 16px', borderRadius:10, background:'rgba(255,107,107,0.04)', border:'1px dashed rgba(255,107,107,0.25)' }}>
      <Icon name="x" size={14} color="var(--rose)"/>
      <span style={{ fontFamily:'var(--f-ui)', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--rose)' }}>Other agencies: "Contact us for a quote"</span>
    </div>
  </div>
);

const AsyncVisual = () => (
  <div style={{ display:'flex', flexDirection:'column', gap:10, width:'min(420px, 90%)', margin:'0 auto' }}>
    {[
      { ico:'mail',     label:'Short intake form', sub:'~9 minutes · async', state:'on' },
      { ico:'send',     label:'Proposal + Loom of solution', sub:'Watch when you want · async', state:'on' },
      { ico:'phone-off',label:'15-min sync', sub:'Only call · confirm + access', state:'live' },
      { ico:'clock',    label:'Loom walkthrough',  sub:'On delivery · async', state:'on' },
      { ico:'key',      label:'Handover',          sub:'Account + docs · yours', state:'on' },
    ].map((s,i) => (
      <div key={i} style={{
        display:'flex', alignItems:'center', gap:14,
        padding:'12px 16px', borderRadius:10,
        background:'var(--card2)', border: s.state==='live'?'1px solid var(--violet)':'1px solid var(--border)',
        boxShadow: s.state==='live'?'0 0 30px -8px rgba(123,110,246,0.4)':'none',
      }}>
        <span style={{ width:34, height:34, borderRadius:8, background:'var(--midnight)', border:'1px solid var(--border2)', display:'inline-flex', alignItems:'center', justifyContent:'center', color: s.state==='live'?'var(--violet)':'var(--teal)' }}>
          <Icon name={s.ico} size={15}/>
        </span>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:'var(--f-head)', fontSize:13.5, fontWeight:600, color:'var(--cloud)' }}>{s.label}</div>
          <div style={{ fontFamily:'var(--f-body)', fontSize:11, color:'var(--muted)' }}>{s.sub}</div>
        </div>
      </div>
    ))}
  </div>
);

const Visual = ({ kind }) => {
  if (kind === 'ownership') return <OwnershipVisual/>;
  if (kind === 'pricing') return <PricingVisual/>;
  return <AsyncVisual/>;
};

const Moat = () => {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef([]);

  React.useEffect(() => {
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.dataset.idx);
          setActive(idx);
        }
      });
    }, { threshold: 0.55 });
    refs.current.forEach(r => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="moat" style={{ position:'relative' }}>
      {/* intro */}
      <div className="container" style={{ paddingTop: 140, paddingBottom: 60, textAlign:'center' }}>
        <div className="eyebrow rv" style={{ marginBottom: 16 }}>02 — The difference</div>
        <h2 className="h-display rv" style={{ fontSize:'clamp(40px, 6vw, 84px)', maxWidth: 980, margin:'0 auto' }}>
          Three things <span className="ghost">no one else</span><br/>
          in this market <span className="serif" style={{color:'var(--teal)'}}>does.</span>
        </h2>
        <p className="rv d1" style={{ fontFamily:'var(--f-body)', fontWeight:300, fontSize:16, color:'var(--muted2)', maxWidth:560, margin:'24px auto 0', lineHeight:1.7 }}>
          Most automation agencies hide pricing, lock you into their account, and burn your week with calls.
          We refuse all three. Scroll.
        </p>
      </div>

      {/* sticky stage with scrolling text panels */}
      <div style={{ position:'relative' }}>
        <div className="moat-pin moat-stage" style={{
          background:'linear-gradient(180deg, transparent, rgba(13,20,35,0.5))',
        }}>
          <div className="container" style={{ width:'100%' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }} className="moat-row">
              {/* Left: rotating numerical badge */}
              <div style={{ position:'relative', minHeight: 480, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <div className="glow-radial-teal" style={{ width:500, height:500, top:'50%', left:'50%', transform:'translate(-50%,-50%)', opacity:.5 }}/>
                <div style={{ position:'relative' }}>
                  {MOAT_ACTS.map((a, i) => (
                    <div key={i} style={{
                      position: i === 0 ? 'relative' : 'absolute',
                      inset: 0,
                      opacity: active === i ? 1 : 0,
                      transform: active === i ? 'scale(1)' : 'scale(.96)',
                      transition: 'opacity .5s ease, transform .5s ease',
                      pointerEvents: active === i ? 'auto' : 'none',
                    }}>
                      <Visual kind={a.visual}/>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: stacked text, only active visible */}
              <div style={{ position:'relative', minHeight: 320 }}>
                {MOAT_ACTS.map((a, i) => (
                  <div key={i} style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0, left: 0, right: 0,
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity .5s ease, transform .5s ease',
                    pointerEvents: active === i ? 'auto' : 'none',
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap: 14, marginBottom: 24 }}>
                      <span style={{
                        fontFamily:'var(--f-mono)', fontSize: 13, color: a.color,
                        padding: '4px 10px', borderRadius: 4,
                        border: `1px solid ${a.color}`, background: 'rgba(255,255,255,0.02)',
                      }}>{a.n} / 03</span>
                      <span style={{ fontFamily:'var(--f-ui)', fontSize: 11, fontWeight: 700, letterSpacing:'.28em', textTransform:'uppercase', color: a.color }}>{a.kicker}</span>
                    </div>
                    <h3 className="h-display" style={{ fontSize:'clamp(32px, 4.4vw, 60px)', marginBottom: 22 }}>
                      {a.title}
                    </h3>
                    <p style={{ fontFamily:'var(--f-body)', fontWeight:300, fontSize:16.5, lineHeight:1.7, color:'var(--muted2)', maxWidth: 480 }}>
                      {a.body}
                    </p>
                  </div>
                ))}

                {/* progress dots */}
                <div style={{ display:'flex', gap:8, marginTop: 36, position:'absolute', top: 'calc(100% - 12px)' }}>
                  {MOAT_ACTS.map((_, i) => (
                    <div key={i} style={{
                      width: active === i ? 28 : 8, height: 4, borderRadius: 2,
                      background: active === i ? 'var(--teal)' : 'var(--border2)',
                      transition: 'all .3s ease',
                    }}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll triggers */}
        {MOAT_ACTS.map((_, i) => (
          <div key={i} ref={el => refs.current[i] = el} data-idx={i} style={{ height: '90vh', position:'relative', marginTop: i === 0 ? '-100vh' : 0 }}/>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .moat-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .moat-pin { position: relative !important; height: auto !important; }
        }
      `}</style>
    </section>
  );
};

window.Moat = Moat;
