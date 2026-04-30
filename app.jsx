// ─── ROOT APP ───
const { Nav, Hero, Problem, Moat, Process, Pricing, Audience, LeadMagnet, Audit, FAQ, Footer, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle, TweakText } = window;

const App = () => {
  const [tweaks, setTweak] = useTweaks(window.TF_TWEAKS);

  // Reveal observer
  React.useEffect(() => {
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.rv, .rv-l, .rv-r, .rv-scale').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Apply grain toggle
  React.useEffect(() => {
    document.body.style.setProperty('--grain-op', tweaks.showGrain ? '0.22' : '0');
    const style = document.getElementById('grain-toggle') || (() => {
      const s = document.createElement('style'); s.id = 'grain-toggle'; document.head.appendChild(s); return s;
    })();
    style.textContent = `body::after { opacity: ${tweaks.showGrain ? 0.22 : 0} !important; }`;
  }, [tweaks.showGrain]);

  return (
    <>
      <Nav/>
      <Hero/>
      <Problem/>
      <Moat/>
      <Process/>
      <Pricing/>
      <Audience/>
      <LeadMagnet/>
      <Audit/>
      <FAQ/>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero">
          <TweakRadio label="Tagline accent" value={tweaks.accentMode} onChange={v=>setTweak('accentMode', v)}
            options={[{value:'teal',label:'Teal'},{value:'violet',label:'Violet'},{value:'gold',label:'Gold'}]}/>
        </TweakSection>
        <TweakSection title="Effects">
          <TweakToggle label="Film grain overlay" value={tweaks.showGrain} onChange={v=>setTweak('showGrain', v)}/>
        </TweakSection>
        <TweakSection title="Copy">
          <TweakText label="Primary tagline" value={tweaks.tagline} onChange={v=>setTweak('tagline', v)}/>
        </TweakSection>
      </TweaksPanel>

      {/* Accent override */}
      <style>{`
        :root {
          --teal: ${tweaks.accentMode === 'violet' ? '#A78BFA' : tweaks.accentMode === 'gold' ? '#FBBF24' : '#4EFFD6'};
          --teal-glow: ${tweaks.accentMode === 'violet' ? 'rgba(167,139,250,0.22)' : tweaks.accentMode === 'gold' ? 'rgba(251,191,36,0.22)' : 'rgba(78,255,214,0.18)'};
        }
      `}</style>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
