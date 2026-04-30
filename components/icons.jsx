// ─── Tiny inline icons (1.25 stroke, 24x24) ───
const Icon = ({ name, size = 18, color = 'currentColor', className = '' }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', className };
  switch (name) {
    case 'arrow-right':  return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrow-down':   return <svg {...common}><path d="M12 5v14M6 13l6 6 6-6"/></svg>;
    case 'check':        return <svg {...common}><path d="M5 12l5 5 9-11"/></svg>;
    case 'x':            return <svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'lock':         return <svg {...common}><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>;
    case 'unlock':       return <svg {...common}><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 7-2"/></svg>;
    case 'key':          return <svg {...common}><circle cx="8" cy="14" r="4"/><path d="M11 11l8-8M16 6l3 3M14 8l3 3"/></svg>;
    case 'tag':          return <svg {...common}><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9z"/><circle cx="8" cy="8" r="1.5"/></svg>;
    case 'send':         return <svg {...common}><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
    case 'clock':        return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'calendar':     return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case 'phone-off':    return <svg {...common}><path d="M3 3l18 18"/><path d="M10.7 13.3a16 16 0 0 0 6 4 2 2 0 0 0 2-1.3l.4-1.7a2 2 0 0 0-1-2.4l-2.5-1.2-1.6 1.6"/><path d="M5 8.4 4.3 6.7A2 2 0 0 1 5.5 4l1.7-.4a2 2 0 0 1 2.4 1L11 7.4 9 9"/></svg>;
    case 'mail':         return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>;
    case 'spark':        return <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/></svg>;
    case 'plus':         return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus':        return <svg {...common}><path d="M5 12h14"/></svg>;
    case 'dollar':       return <svg {...common}><path d="M12 3v18"/><path d="M16 7H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H7"/></svg>;
    case 'logo-mark':    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 7v9l6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="1.6" fill="currentColor"/>
      </svg>
    );
    default: return null;
  }
};

window.Icon = Icon;
