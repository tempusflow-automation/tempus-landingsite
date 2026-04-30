// ─── FAQ + FOOTER ───
const FAQ_ITEMS = [
{ q: 'Wait — there really aren\'t any calls?', a: 'One. A 15-minute credential sync to connect Make to your accounts. Everything else is async. The form takes 9 minutes. The Loom walkthroughs you watch when you want.' },
{ q: 'What does "built in your account" mean?', a: 'We log into your Make.com workspace and build there. The scenarios live under your billing, your owner login, your data. Cancel us tomorrow and nothing turns off.' },
{ q: 'What if I need changes later?', a: 'Three options. Make them yourself (everything\'s documented). Pay hourly when you need us. Or grab the Flow Retainer for ongoing tweaks. No lock-in.' },
{ q: 'How is this different from hiring a freelancer?', a: 'Fixed price published upfront. Specific to Aussie SMB tools. Done in 9 days, not 9 weeks. And we don\'t hold your work hostage in our account.' },
{ q: 'Is $1,200 really the start price?', a: 'Yes. Reclaim is one workflow, fully built and handed over, for $1,200 AUD. No setup fees. No subscription. No "from $1,200" — that IS the price.' }];


const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ position: 'relative', padding: '120px 0 100px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'flex-start' }} className="faq-row">
          <div>
            <div className="eyebrow rv" style={{ marginBottom: 18 }}>07 — FAQ</div>
            <h2 className="h-display rv" style={{ fontSize: 'clamp(36px, 4.8vw, 64px)' }}>
              Asked &<br /><span className="serif" style={{ color: 'var(--teal)' }}>answered.</span>
            </h2>
            <p className="rv d1" style={{ fontFamily: 'var(--f-body)', fontWeight: 300, fontSize: 15, color: 'var(--muted2)', marginTop: 20, lineHeight: 1.7, maxWidth: 320 }}>
              The questions every prospect asks. If yours isn't here, reply to the audit form and ask.
            </p>
          </div>
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {FAQ_ITEMS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  background: isOpen ? 'var(--card2)' : 'transparent',
                  border: '1px solid', borderColor: isOpen ? 'var(--teal)' : 'var(--border)',
                  borderRadius: 12, padding: '20px 24px', cursor: 'pointer',
                  transition: 'all .2s'
                }} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                    <div style={{ fontFamily: 'var(--f-head)', fontSize: 17, fontWeight: 600, color: isOpen ? 'var(--teal)' : 'var(--cloud)', letterSpacing: '-.01em' }}>
                      {f.q}
                    </div>
                    <Icon name={isOpen ? 'minus' : 'plus'} size={16} color={isOpen ? 'var(--teal)' : 'var(--muted)'} />
                  </div>
                  <div style={{
                    maxHeight: isOpen ? 200 : 0, overflow: 'hidden',
                    transition: 'max-height .35s ease, margin-top .35s ease',
                    marginTop: isOpen ? 12 : 0
                  }}>
                    <p style={{ fontFamily: 'var(--f-body)', fontSize: 14, fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.75 }}>{f.a}</p>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .faq-row { grid-template-columns: 1fr !important; gap: 28px !important; } }
      `}</style>
    </section>);

};

const Footer = () =>
<footer style={{ borderTop: '1px solid var(--border)', background: 'var(--card2)', padding: '56px 0 36px' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 36, marginBottom: 40 }} className="ft-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span style={{
            width: 34, height: 34, borderRadius: '50%',
            border: '1.5px solid var(--teal)', background: 'var(--card)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--f-ui)', fontSize: 11, fontWeight: 700, color: 'var(--teal)', letterSpacing: '.05em'
          }}>TF</span>
            <span style={{ fontFamily: 'var(--f-head)', fontSize: 18, fontWeight: 600, color: 'var(--cloud)' }}>
              Tempus <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>Flow</em>
            </span>
          </div>
          <p style={{ fontFamily: 'var(--f-body)', fontSize: 13, fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.7, maxWidth: 280 }}>Done-for-you automations for Australian SMBs. Built in your account. Yours forever.

        </p>
        </div>
        {[
      { t: 'Site', l: ['Problem', 'The Difference', 'Process', 'Pricing', 'FAQ'] },
      { t: 'Packages', l: ['Reclaim · $1,200', 'Accelerate · $2,500', 'Transform · $4,500', 'Flow Retainer'] },
      { t: 'Contact', l: ['corey@tempusflow.com.au', 'Sydney, Australia', 'LinkedIn', 'Instagram'] }].
      map((c) =>
      <div key={c.t}>
            <div className="eyebrow-muted" style={{ marginBottom: 14 }}>{c.t}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {c.l.map((i) =>
          <a key={i} href="#" style={{ fontFamily: 'var(--f-body)', fontSize: 13, fontWeight: 300, color: 'var(--muted2)', textDecoration: 'none', transition: 'color .15s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--teal)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted2)'}>
            {i}</a>
          )}
            </div>
          </div>
      )}
      </div>
      <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--f-body)', fontSize: 11, color: 'var(--muted)' }}>
          © 2026 Tempus Flow · ABN coming soon · Built in Sydney
        </span>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--muted)' }}>
          tempusflow.com.au
        </span>
      </div>
    </div>
    <style>{`
      @media (max-width: 760px) { .ft-grid { grid-template-columns: 1fr 1fr !important; } }
    `}</style>
  </footer>;


window.FAQ = FAQ;
window.Footer = Footer;