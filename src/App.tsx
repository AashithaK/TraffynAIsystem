import { useState, type ReactNode } from "react";

type Screen = "login" | "traveller" | "authority";
type AuthoritySection =
  | "Overview"
  | "Live Traffic"
  | "Signals"
  | "Emergency"
  | "Analytics"
  | "AI Recommendations";
type IconName =
  | "activity"
  | "alert"
  | "ambulance"
  | "analytics"
  | "bell"
  | "brain"
  | "car"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "dashboard"
  | "direction"
  | "eye"
  | "incident"
  | "location"
  | "lock"
  | "mail"
  | "menu"
  | "route"
  | "search"
  | "signal"
  | "sparkle"
  | "speed"
  | "user";

const paths: Record<IconName, ReactNode> = {
  activity: <><path d="M4 12h3l2-5 4 10 2-5h5" /></>,
  alert: <><path d="M12 3 2.8 19h18.4L12 3Z" /><path d="M12 9v4M12 17h.01" /></>,
  ambulance: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" /><path d="M7 10h3M8.5 8.5v3M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
  analytics: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  brain: <><path d="M9.5 4a3 3 0 0 0-5 2.2A3 3 0 0 0 4 12a3 3 0 0 0 2 5.8A3 3 0 0 0 12 17V7a3 3 0 0 0-2.5-3ZM14.5 4a3 3 0 0 1 5 2.2A3 3 0 0 1 20 12a3 3 0 0 1-2 5.8A3 3 0 0 1 12 17V7a3 3 0 0 1 2.5-3Z" /></>,
  car: <><path d="m5 11 1.5-4h11l1.5 4M4 11h16v6H4zM7 17v2M17 17v2M7 14h.01M17 14h.01" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m9 18 6-6-6-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  direction: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  incident: <><path d="M12 3 2.8 19h18.4L12 3Z" /><path d="M12 9v4M12 17h.01" /></>,
  location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  route: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  signal: <><rect x="7" y="2" width="10" height="17" rx="3" /><circle cx="12" cy="6" r="1.5" /><circle cx="12" cy="10.5" r="1.5" /><circle cx="12" cy="15" r="1.5" /><path d="M12 19v3" /></>,
  sparkle: <><path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3ZM19 15l.6 2 1.9 1-.9.5-.6 2-.6-2-1.9-1 1.9-1 .6-2Z" /></>,
  speed: <><path d="M4 17a9 9 0 1 1 16 0M12 13l4-4" /><path d="M7 17h10" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <div className={`brand ${inverse ? "brand-inverse" : ""}`}>
    <div className="brand-mark"><span /><span /><span /></div>
    <div><strong>Traffyn AI</strong><small>Predict. Optimize. Move.</small></div>
  </div>;
}

function Button({ children, variant = "primary", icon, onClick, full = false, disabled = false }: {
  children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "danger"; icon?: IconName; onClick?: () => void; full?: boolean; disabled?: boolean;
}) {
  return <button className={`btn btn-${variant} ${full ? "btn-full" : ""}`} onClick={onClick} disabled={disabled}>
    {icon && <Icon name={icon} size={17} />}{children}
  </button>;
}

function Badge({ children, tone = "blue", dot = false }: { children: ReactNode; tone?: "blue" | "green" | "yellow" | "red" | "gray"; dot?: boolean }) {
  return <span className={`badge badge-${tone}`}>{dot && <i />}{children}</span>;
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`panel ${className}`}>{children}</section>;
}

function ActionModal({ title, eyebrow, children, close, actions }: {
  title: string; eyebrow?: string; children: ReactNode; close: () => void; actions?: ReactNode;
}) {
  return <div className="modal-backdrop" onMouseDown={close}><div className="modal action-modal" onMouseDown={(e) => e.stopPropagation()}>
    <div className="modal-head"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2></div><button className="icon-btn" onClick={close} aria-label="Close modal"><Icon name="close" /></button></div>
    <div className="modal-body">{children}</div>
    {actions && <div className="modal-actions">{actions}</div>}
  </div></div>;
}

function NotificationPanel({ close, onSelect }: { close: () => void; onSelect?: (message: string) => void }) {
  const items = [
    { icon: "alert" as IconName, tone: "red", title: "High congestion detected", place: "NH-16" },
    { icon: "ambulance" as IconName, tone: "red", title: "Emergency vehicle detected", place: "Junction 3" },
    { icon: "sparkle" as IconName, tone: "blue", title: "AI signal optimization available", place: "Central Junction" },
  ];
  return <div className="floating-panel notifications-panel">
    <div className="floating-head"><div><b>Notifications</b><span>3 new updates</span></div><button onClick={close}><Icon name="close" size={16} /></button></div>
    {items.map((item) => <button className="notification-item" key={item.title} onClick={() => onSelect?.(`${item.title} — ${item.place}`)}>
      <div className={`notification-icon tone-${item.tone}`}><Icon name={item.icon} size={17} /></div><div><b>{item.title}</b><span>{item.place}</span></div><i />
    </button>)}
  </div>;
}

function ProfileMenu({ role, logout, close, onAccount }: { role: "Traveller" | "Traffic Authority"; logout: () => void; close: () => void; onAccount: () => void }) {
  return <div className="floating-panel profile-menu">
    <div className="profile-menu-user"><span>{role === "Traveller" ? "AK" : "RM"}</span><div><b>{role === "Traveller" ? "Arun Kumar" : "Authority User"}</b><small>{role}</small></div></div>
    <button onClick={onAccount}><Icon name="user" /> Account Settings</button>
    <button className="logout-action" onClick={logout}><Icon name="direction" /> Logout</button>
  </div>;
}

const trafficRoads = [
  { name: "Central Junction", level: "HIGH", x: "47%", y: "48%", tone: "red" },
  { name: "NH-16", level: "HIGH", x: "72%", y: "23%", tone: "red" },
  { name: "Market Road", level: "MEDIUM", x: "68%", y: "67%", tone: "yellow" },
  { name: "Railway Road", level: "LOW", x: "21%", y: "30%", tone: "green" },
];

function TrafficMap({ emergency = false, compact = false, selectedRoute }: { emergency?: boolean; compact?: boolean; selectedRoute?: string }) {
  const [zoom, setZoom] = useState(100);
  return <div className={`traffic-map ${compact ? "map-compact" : ""} ${emergency ? "map-emergency" : ""} ${selectedRoute ? `map-route-${selectedRoute}` : ""}`}>
    <div className="map-canvas" style={{ transform: `scale(${zoom / 100})` }}>
      <div className="map-grid" />
      <div className="road road-one" /><div className="road road-two" /><div className="road road-three" /><div className="road road-four" />
      <div className="flow flow-one" /><div className="flow flow-two" /><div className="flow flow-three" />
      {emergency ? <>
        <div className="emergency-line" />
        {[
          ["Junction 3", "25%", "70%"], ["Junction 5", "49%", "49%"], ["Junction 7", "73%", "28%"],
        ].map(([name, x, y]) => <div key={name} className="emergency-node" style={{ left: x, top: y }}><span /><b>{name}</b></div>)}
        <div className="ambulance-marker"><Icon name="ambulance" size={19} /></div>
      </> : trafficRoads.map((r) => <div key={r.name} className={`map-marker marker-${r.tone}`} style={{ left: r.x, top: r.y }}>
        <span className="marker-pulse" /><div><b>{r.name}</b><small>{r.level}</small></div>
      </div>)}
    </div>
    <div className="map-legend"><Badge tone="green" dot>Low</Badge><Badge tone="yellow" dot>Moderate</Badge><Badge tone="red" dot>Heavy</Badge></div>
    <div className="map-controls"><button onClick={() => setZoom(Math.min(zoom + 10, 130))} aria-label="Zoom in">+</button><span>{zoom}%</span><button onClick={() => setZoom(Math.max(zoom - 10, 80))} aria-label="Zoom out">−</button></div>
  </div>;
}

function Login({ enter }: { enter: (screen: Screen) => void }) {
  const [visible, setVisible] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  return <main className="login-shell">
    <section className="login-visual">
      <Logo inverse />
      <div className="login-copy">
        <Badge tone="blue"><Icon name="sparkle" size={14} /> AI-powered mobility</Badge>
        <h1>Predict. Optimize.<br /><span>Move.</span></h1>
        <p>AI-powered traffic intelligence for safer, faster and smarter mobility.</p>
      </div>
      <div className="network-art">
        <i className="network-road nr-1" /><i className="network-road nr-2" /><i className="network-road nr-3" />
        <span className="network-node nn-1" /><span className="network-node nn-2" /><span className="network-node nn-3" /><span className="network-node nn-4" />
      </div>
      <div className="live-pill"><span /> Live city intelligence</div>
    </section>
    <section className="login-form-side">
      <div className="login-card">
        <div className="mobile-logo"><Logo /></div>
        <div className="eyebrow">WELCOME TO TRAFFYN AI</div>
        <h2>Welcome back</h2>
        <p className="muted">Sign in to access your mobility dashboard.</p>
        <label>Email address<div className="input-wrap"><Icon name="mail" /><input defaultValue="demo@traffyn.ai" /></div></label>
        <label>Password<div className="input-wrap"><Icon name="lock" /><input type={visible ? "text" : "password"} defaultValue="traffyn2025" /><button className="input-action" onClick={() => setVisible(!visible)}><Icon name="eye" /></button></div></label>
        <div className="form-options"><label className="check-row"><input type="checkbox" defaultChecked /><span>Remember me</span></label><button className="text-action" onClick={() => { setResetOpen(true); setResetSent(false); }}>Forgot password?</button></div>
        <Button full onClick={() => enter("traveller")}>Login <Icon name="chevron" /></Button>
        <div className="divider"><span>or continue as</span></div>
        <div className="role-buttons">
          <Button variant="secondary" icon="user" onClick={() => enter("traveller")}>Traveller</Button>
          <Button variant="secondary" icon="signal" onClick={() => enter("authority")}>Traffic Authority</Button>
        </div>
        <p className="secure-note"><Icon name="lock" size={13} /> Secured with enterprise-grade encryption</p>
      </div>
    </section>
    {resetOpen && <ActionModal title="Reset Password" eyebrow="ACCOUNT RECOVERY" close={() => setResetOpen(false)} actions={<><Button variant="secondary" onClick={() => setResetOpen(false)}>Close</Button><Button icon={resetSent ? "check" : "mail"} onClick={() => setResetSent(true)}>{resetSent ? "Reset Link Sent" : "Send Reset Link"}</Button></>}>
      <p className="modal-copy">Enter the email associated with your Traffyn AI account.</p>
      <label className="modal-label">Email address<div className="input-wrap"><Icon name="mail" /><input defaultValue="demo@traffyn.ai" /></div></label>
      {resetSent && <div className="inline-success"><Icon name="check" /><span>Password reset link sent.</span></div>}
    </ActionModal>}
  </main>;
}

function TravellerHeader({ logout }: { logout: () => void }) {
  const [notifications, setNotifications] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [active, setActive] = useState("Dashboard");
  const navigate = (name: string) => {
    setActive(name);
    const target = name === "Dashboard" ? "traveller-top" : name === "Routes" ? "routes" : name === "Alerts" ? "traffic-alert" : "incidents";
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return <header className="topbar">
    <Logo />
    <nav>{["Dashboard", "Routes", "Alerts", "Incidents"].map((n) => <button key={n} onClick={() => navigate(n)} className={active === n ? "active" : ""}>{n}</button>)}</nav>
    <div className="header-actions">
      <button className={`icon-btn ${notifications ? "active-control" : ""}`} onClick={() => { setNotifications(!notifications); setProfileOpen(false); }}><Icon name="bell" /><span className="notification-dot" /></button>
      <button className="profile" onClick={() => { setProfileOpen(!profileOpen); setNotifications(false); }}><span>AK</span><div><b>Arun Kumar</b><small>Traveller</small></div><Icon name="chevron" size={15} /></button>
    </div>
    {notifications && <NotificationPanel close={() => setNotifications(false)} onSelect={(message) => { setNotice(message); setNotifications(false); }} />}
    {profileOpen && <ProfileMenu role="Traveller" close={() => setProfileOpen(false)} logout={logout} onAccount={() => { setNotice("Account settings are ready for review."); setProfileOpen(false); }} />}
    {notice && <div className="toast header-toast"><div className="toast-icon"><Icon name="bell" /></div><div><b>Notification opened</b><span>{notice}</span></div><button onClick={() => setNotice(null)}><Icon name="close" /></button></div>}
  </header>;
}

function StatCard({ icon, label, value, note, tone = "blue" }: { icon: IconName; label: string; value: string; note?: string; tone?: string }) {
  return <Panel className="stat-card"><div className={`stat-icon tone-${tone}`}><Icon name={icon} /></div><div><span>{label}</span><strong>{value}</strong>{note && <small>{note}</small>}</div></Panel>;
}

function RouteCard({ name, time, status, note, selected, recommended, onClick }: {
  name: string; time: string; status: "Heavy traffic" | "Low traffic" | "Moderate traffic"; note: string; selected: boolean; recommended?: boolean; onClick: () => void;
}) {
  const tone = status === "Low traffic" ? "green" : status === "Heavy traffic" ? "red" : "yellow";
  return <button className={`route-card ${selected ? "selected" : ""}`} onClick={onClick}>
    <div className="route-radio"><span /></div>
    <div className="route-content"><div className="route-top"><b>{name}</b>{recommended && <Badge tone="blue"><Icon name="sparkle" size={12} /> AI Recommended</Badge>}</div>
      <div className="route-meta"><strong>{time}</strong><Badge tone={tone} dot>{status}</Badge></div><small>{note}</small>
    </div>
    <Icon name="chevron" />
  </button>;
}

function IncidentCard({ type, road, time, impact, tone, onClick }: { type: string; road: string; time: string; impact: string; tone: "red" | "yellow" | "green"; onClick: () => void }) {
  return <button className="incident-card" onClick={onClick}><div className={`incident-icon tone-${tone}`}><Icon name={type === "Accident" ? "alert" : type === "Road Work" ? "signal" : "car"} /></div>
    <div><b>{type}</b><span>{road}</span><small>{time}</small></div><Badge tone={tone}>{impact} impact</Badge><Icon name="chevron" size={16} /></button>;
}

function NavigationModal({ close, from, to }: { close: () => void; from: string; to: string }) {
  return <div className="modal-backdrop" onMouseDown={close}><div className="modal" onMouseDown={(e) => e.stopPropagation()}>
    <div className="modal-head"><div><div className="eyebrow">NAVIGATION ACTIVE</div><h2>Navigation Started</h2></div><button className="icon-btn" onClick={close}><Icon name="close" /></button></div>
    <TrafficMap compact />
    <div className="navigation-summary"><Icon name="route" /><div><span>ACTIVE ROUTE</span><b>{from} → Market Road → {to}</b></div></div>
    <div className="nav-route"><span className="route-point start" /><div><b>{from}</b><small>Start</small></div><i /><span className="route-point end" /><div><b>{to}</b><small>via Market Road</small></div></div>
    <div className="nav-stats"><div><span>ETA</span><b>10:42 AM</b></div><div><span>Travel time</span><b>21 min</b></div><div><span>Distance</span><b>14.2 km</b></div><div><span>Traffic</span><Badge tone="green" dot>Low</Badge></div></div>
    <Button full icon="close" onClick={close}>Close Navigation</Button>
  </div></div>;
}

function Traveller({ logout }: { logout: () => void }) {
  const [route, setRoute] = useState("B");
  const [searched, setSearched] = useState(false);
  const [modal, setModal] = useState(false);
  const [from, setFrom] = useState("Central Junction");
  const [to, setTo] = useState("Government General Hospital");
  const [congestion, setCongestion] = useState(false);
  const [incident, setIncident] = useState<{ title: string; time: string; severity: string; status: string } | null>(null);
  const citySuggestions = ["RTC Complex", "RK Beach", "MVP Colony", "Dwaraka Nagar", "Gajuwaka", "Airport"];
  const revealRoutes = () => {
    setSearched(true);
    window.setTimeout(() => document.getElementById("routes")?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  };
  const findBestRoute = () => {
    setSearched(true);
    setRoute("B");
    setModal(true);
  };
  return <div className="app-shell traveller-shell">
    <TravellerHeader logout={logout} />
    <main className="page" id="traveller-top">
      <div className="page-heading"><div><span className="eyebrow">GOOD MORNING, ARUN</span><h1>Where are you going today?</h1><p>Real-time traffic intelligence, powered by AI.</p></div><div className="live-status"><span /> Live traffic updated 12 sec ago</div></div>
      <Panel className="route-search">
        <div className="search-field"><span className="pin-start" /><label>FROM<input list="from-destinations" value={from} onChange={(event) => setFrom(event.target.value)} /><datalist id="from-destinations"><option value="Central Junction" /><option value="Railway Station Road" /><option value="NH-16" /><option value="Market Road" /><option value="Bus Stand Road" /><option value="RTC Complex" /><option value="RK Beach" /><option value="MVP Colony" /><option value="Dwaraka Nagar" /><option value="Gajuwaka" /><option value="NAD Junction" /><option value="Akkayyapalem" /><option value="Rushikonda" /><option value="Simhachalam" /><option value="Visakhapatnam Airport" /></datalist></label><Icon name="chevron" size={14} /></div>
        <div className="route-connector"><span /><Icon name="route" /></div>
        <div className="search-field"><span className="pin-end" /><label>TO<input list="to-destinations" value={to} onChange={(event) => setTo(event.target.value)} /><datalist id="to-destinations"><option value="Government General Hospital" /><option value="Central Junction" /><option value="Railway Station Road" /><option value="Market Road" /><option value="Bus Stand Road" /><option value="RTC Complex" /><option value="RK Beach" /><option value="MVP Colony" /><option value="Dwaraka Nagar" /><option value="Gajuwaka" /><option value="NAD Junction" /><option value="Akkayyapalem" /><option value="Rushikonda" /><option value="Simhachalam" /><option value="Visakhapatnam Airport" /></datalist></label><Icon name="chevron" size={14} /></div>
        <Button icon="search" onClick={findBestRoute}>Find Best Route</Button>
      </Panel>
      <div className="city-suggestions"><span><Icon name="location" size={13} /> Popular across the city</span>{citySuggestions.map((place) => <button key={place} onClick={() => setTo(place)}>{place}</button>)}</div>
      {searched && <div className="success-banner"><Icon name="sparkle" /><div><b>Best route found</b><span>AI analysed 12 route combinations using live traffic data.</span></div><Badge tone="green">7 min faster</Badge></div>}
      <div className="stats-grid four">
        <StatCard icon="car" label="Vehicles Detected" value="12,458" note="+8.2% today" />
        <StatCard icon="route" label="Congested Roads" value="7" note="3 high severity" tone="red" />
        <StatCard icon="speed" label="Average Speed" value="32 km/h" note="+4 km/h vs peak" tone="green" />
        <StatCard icon="clock" label="Average Delay" value="8 min" note="2 min below average" tone="yellow" />
      </div>
      <div className="traveller-grid">
        <Panel className="map-panel"><div className="panel-heading"><div><h2>Live Traffic Map</h2><p>{searched ? `Route ${route} highlighted with live conditions` : "Route B recommended using current traffic"}</p></div><div className="map-updated"><span /> LIVE</div></div><TrafficMap selectedRoute={route} /></Panel>
        <div className={`route-side ${searched ? "results-active" : ""}`} id="routes">
          <Panel className={`recommended-card ${searched ? "result-revealed" : ""}`}>
            <div className="recommend-head"><div className="ai-orb"><Icon name="sparkle" /></div><div><span>AI RECOMMENDED ROUTE</span><b>Fastest & most reliable</b></div><Badge tone="blue">7 min saved</Badge></div>
            <div className="route-visual"><span /><i /><span /><i /><span /></div>
            <h3>Central Junction → Market Road → Hospital Road</h3>
            <div className="recommend-stats"><div><strong>21 min</strong><span>Travel time</span></div><div><strong>14.2 km</strong><span>Distance</span></div><Badge tone="green" dot>Low traffic</Badge></div>
            <Button full icon="direction" onClick={() => setModal(true)}>Start Navigation</Button>
          </Panel>
          <div className="section-title"><h2>Alternate Routes</h2><span>{searched ? "Select a route" : "3 options"}</span></div>
          <div className="route-list">
            <RouteCard name="Route A" time="18 min" status="Heavy traffic" note="Accident reported · 12.8 km" selected={route === "A"} onClick={() => setRoute("A")} />
            <RouteCard name="Route B" time="21 min" status="Low traffic" note="via Market Road · 14.2 km" recommended selected={route === "B"} onClick={() => setRoute("B")} />
            <RouteCard name="Route C" time="26 min" status="Moderate traffic" note="Road work ahead · 13.6 km" selected={route === "C"} onClick={() => setRoute("C")} />
          </div>
        </div>
      </div>
      <Panel className="congestion-alert" ><div id="traffic-alert" className="alert-symbol"><Icon name="alert" /></div><div><div className="alert-title"><b>Congestion Alert</b><Badge tone="red">HIGH</Badge></div><strong>NH-16 near Central Junction</strong><p>High traffic density detected. Expected delay: <b>18 minutes.</b></p></div><Button variant="secondary" onClick={() => setCongestion(true)}>View Details</Button></Panel>
      <div className="section-title incidents-title" id="incidents"><div><h2>Live Incidents</h2><p>Incidents affecting your area</p></div><button className="text-action" onClick={() => setIncident({ title: "Active Incidents — City Network", time: "Updated just now", severity: "3 REPORTED", status: "Monitoring" })}>View all incidents <Icon name="chevron" size={14} /></button></div>
      <div className="incidents-grid">
        <IncidentCard type="Accident" road="NH-16" time="10:18 AM" impact="High" tone="red" onClick={() => setIncident({ title: "Accident — NH-16", time: "10:18 AM", severity: "HIGH", status: "Active" })} />
        <IncidentCard type="Road Work" road="Railway Road" time="09:45 AM" impact="Moderate" tone="yellow" onClick={() => setIncident({ title: "Road Work — Railway Road", time: "09:45 AM", severity: "MODERATE", status: "In progress" })} />
        <IncidentCard type="Vehicle Breakdown" road="Market Road" time="09:32 AM" impact="Low" tone="green" onClick={() => setIncident({ title: "Vehicle Breakdown — Market Road", time: "09:32 AM", severity: "LOW", status: "Clearing" })} />
      </div>
    </main>
    {modal && <NavigationModal from={from} to={to} close={() => setModal(false)} />}
    {congestion && <ActionModal title="NH-16 Congestion" eyebrow="LIVE TRAFFIC ALERT" close={() => setCongestion(false)} actions={<><Button variant="secondary" onClick={() => setCongestion(false)}>Close</Button><Button icon="route" onClick={() => { setCongestion(false); revealRoutes(); }}>View Alternate Routes</Button></>}>
      <div className="detail-grid"><div><span>Current traffic</span><Badge tone="red">HIGH</Badge></div><div><span>Expected delay</span><b>18 min</b></div><div><span>Reason</span><b>High vehicle density near Central Junction.</b></div><div><span>Recommended action</span><b>Use Market Road.</b></div></div>
    </ActionModal>}
    {incident && <ActionModal title={incident.title} eyebrow="INCIDENT DETAILS" close={() => setIncident(null)} actions={<Button onClick={() => setIncident(null)}>Close</Button>}>
      <div className="detail-grid"><div><span>Time</span><b>{incident.time}</b></div><div><span>Severity</span><Badge tone={incident.severity === "HIGH" ? "red" : incident.severity === "MODERATE" ? "yellow" : "green"}>{incident.severity}</Badge></div><div><span>Status</span><Badge tone="blue" dot>{incident.status}</Badge></div></div>
    </ActionModal>}
  </div>;
}

const sidebarItems: { label: AuthoritySection; icon: IconName }[] = [
  { label: "Overview", icon: "dashboard" }, { label: "Live Traffic", icon: "activity" },
  { label: "Signals", icon: "signal" }, { label: "Emergency", icon: "ambulance" },
  { label: "Analytics", icon: "analytics" }, { label: "AI Recommendations", icon: "brain" },
];

function Sidebar({ active, setActive, logout }: { active: AuthoritySection; setActive: (s: AuthoritySection) => void; logout: () => void }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notice, setNotice] = useState(false);
  return <aside className="sidebar">
    <Logo inverse />
    <div className="control-label">TRAFFIC CONTROL CENTER</div>
    <nav>{sidebarItems.map((item) => <button key={item.label} className={active === item.label ? "active" : ""} onClick={() => setActive(item.label)}><Icon name={item.icon} /><span>{item.label}</span>{item.label === "Emergency" && <i className="nav-alert">2</i>}</button>)}</nav>
    <div className="system-health"><div><span /> System Operational</div><small>All sensors connected</small></div>
    <button className="authority-profile" onClick={() => setProfileOpen(!profileOpen)}><span>RM</span><div><b>Rajesh Menon</b><small>Traffic Authority</small></div><Icon name="chevron" size={15} /></button>
    {profileOpen && <ProfileMenu role="Traffic Authority" close={() => setProfileOpen(false)} logout={logout} onAccount={() => { setNotice(true); setProfileOpen(false); }} />}
    {notice && <div className="sidebar-notice"><Icon name="check" /><span>Account settings opened</span><button onClick={() => setNotice(false)}><Icon name="close" size={13} /></button></div>}
  </aside>;
}

function AuthorityHeader({ active }: { active: AuthoritySection }) {
  const [notifications, setNotifications] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  return <header className="authority-header"><div><h1>{active === "Overview" ? "Traffic Authority" : active}</h1><p>Visakhapatnam Traffic Management Zone</p></div><div className="header-actions"><div className="date-chip"><Icon name="clock" /><div><b>Monday, 14 July</b><small>10:24:38 AM</small></div></div><button className={`icon-btn ${notifications ? "active-control" : ""}`} onClick={() => setNotifications(!notifications)}><Icon name="bell" /><span className="notification-dot" /></button></div>
    {notifications && <NotificationPanel close={() => setNotifications(false)} onSelect={(message) => { setNotice(message); setNotifications(false); }} />}
    {notice && <div className="toast header-toast"><div className="toast-icon"><Icon name="bell" /></div><div><b>Notification opened</b><span>{notice}</span></div><button onClick={() => setNotice(null)}><Icon name="close" /></button></div>}
  </header>;
}

function LineChart() {
  return <div className="line-chart"><div className="chart-line l1" /><div className="chart-line l2" /><div className="chart-line l3" /><svg viewBox="0 0 400 115" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--blue)" stopOpacity=".24" /><stop offset="1" stopColor="var(--blue)" stopOpacity="0" /></linearGradient></defs><path className="area" d="M0 88 C35 82 55 57 90 66 S140 79 170 46 S215 32 245 50 S290 70 320 35 S365 16 400 29 V115 H0Z" /><path className="trend" d="M0 88 C35 82 55 57 90 66 S140 79 170 46 S215 32 245 50 S290 70 320 35 S365 16 400 29" /></svg><div className="chart-labels"><span>9 AM</span><span>10 AM</span><span>11 AM</span><span>12 PM</span></div></div>;
}

function AnalysisPanel() {
  return <Panel className="analysis-panel"><div className="analysis-head"><div className="ai-orb"><Icon name="brain" /></div><div><h2>AI Traffic Analysis</h2><p>Real-time prediction model</p></div><Badge tone="blue"><span className="spin-dot" /> LIVE AI</Badge></div>
    <div className="analysis-data"><div><span>Current congestion</span><Badge tone="red" dot>HIGH</Badge></div><div><span>Peak traffic</span><b>6:00 PM – 8:00 PM</b></div><div><span>Predicted congestion</span><b className="red-text">HIGH in 20 min</b></div><div><span>Vehicle density</span><b>42% above historical avg.</b></div></div>
    <div className="trend-head"><span>Traffic density trend</span><Badge tone="red">+18% projected</Badge></div><LineChart /></Panel>;
}

function RecommendationCard({ type, title, description, suggestion, expected, action, tone = "blue", onAction, active = false }: {
  type: IconName; title: string; description: string; suggestion: string; expected: string; action: string; tone?: string; onAction: () => void; active?: boolean;
}) {
  return <Panel className={`ai-card ${active ? "recommendation-active" : ""}`}><div className="ai-card-head"><div className={`stat-icon tone-${tone}`}><Icon name={type} /></div><div><h3>{title}</h3><Badge tone={active ? "green" : "blue"}><Icon name={active ? "check" : "sparkle"} size={11} /> {active ? "ACTIVE" : "AI INSIGHT"}</Badge></div></div><p>{description}</p><div className="suggestion"><span>AI SUGGESTION</span><b>{suggestion}</b></div><div className="expected"><Icon name="check" /><span>{expected}</span></div><Button variant={active ? "primary" : "secondary"} onClick={onAction}>{action}{active ? <Icon name="check" size={15} /> : <Icon name="chevron" size={15} />}</Button></Panel>;
}

function Overview({ navigate, recommendationsOnly = false }: { navigate: (s: AuthoritySection) => void; recommendationsOnly?: boolean }) {
  const [dialog, setDialog] = useState<"review" | "prediction" | null>(null);
  const [applied, setApplied] = useState(false);
  const [success, setSuccess] = useState(false);
  const applyStrategy = () => { setApplied(true); setSuccess(true); setDialog(null); };
  return <>
    {!recommendationsOnly && <><div className="status-strip"><div><span /> All systems operational</div><span>24/24 Signals Online</span><span>48/48 Cameras Active</span><span>Last sync: just now</span></div>
    <div className="stats-grid five">
      <StatCard icon="car" label="Total Vehicles" value="24,850" note="+12.4% vs yesterday" />
      <StatCard icon="alert" label="Congested Zones" value="7" note="2 critical zones" tone="red" />
      <StatCard icon="signal" label="Active Signals" value="24" note="100% operational" tone="green" />
      <StatCard icon="speed" label="Average Speed" value="32 km/h" note="+3.2% this hour" tone="yellow" />
      <StatCard icon="ambulance" label="Emergency Vehicles" value="2" note="1 priority active" tone="red" />
    </div>
    <div className="command-grid">
      <Panel className="map-panel"><div className="panel-heading"><div><h2>Live Traffic Control Map</h2><p>City-wide density and vehicle movement</p></div><Button variant="ghost" onClick={() => navigate("Live Traffic")}>Open full map <Icon name="chevron" size={14} /></Button></div><TrafficMap /></Panel>
      <AnalysisPanel />
    </div></>}
    <div className="section-title"><div><span className="eyebrow">POWERED BY TRAFFYN AI</span><h2>AI Recommendations</h2><p>Actions ranked by impact and urgency</p></div><Button variant="ghost" onClick={() => navigate("AI Recommendations")}>View all <Icon name="chevron" /></Button></div>
    <div className="recommendation-grid">
      <RecommendationCard type="signal" title="Signal Optimization" description="Central Junction vehicle density is 42% higher than normal." suggestion="North-South green: 30 sec → 45 sec" expected="23% queue reduction expected" action={applied ? "Applied" : "Apply Strategy"} active={applied} tone="blue" onAction={applyStrategy} />
      <RecommendationCard type="route" title="Traffic Diversion" description="NH-16 is experiencing heavy congestion." suggestion="Divert ~18% traffic toward Market Road" expected="8 min delay reduction" action="Review" tone="yellow" onAction={() => setDialog("review")} />
      <RecommendationCard type="analytics" title="Congestion Prediction" description="High traffic expected between 6:00 PM – 8:00 PM." suggestion="Prepare diversion strategy before peak" expected="18% congestion increase predicted" action="View Prediction" tone="red" onAction={() => setDialog("prediction")} />
    </div>
    {dialog === "review" && <ActionModal title="Traffic Diversion Strategy" eyebrow="AI RECOMMENDATION" close={() => setDialog(null)} actions={<><Button variant="secondary" onClick={() => setDialog(null)}>Close</Button><Button icon="check" onClick={applyStrategy}>Apply Strategy</Button></>}>
      <div className="detail-grid"><div><span>Problem</span><b>Heavy congestion detected on NH-16.</b></div><div><span>AI recommendation</span><b>Divert approximately 18% traffic toward Market Road.</b></div><div><span>Expected delay reduction</span><b className="green-text">8 min</b></div></div>
    </ActionModal>}
    {dialog === "prediction" && <ActionModal title="AI Congestion Prediction" eyebrow="PREDICTIVE ANALYSIS" close={() => setDialog(null)} actions={<Button onClick={() => setDialog(null)}>Close</Button>}>
      <div className="detail-grid"><div><span>Current</span><b>Moderate → <span className="red-text">High</span></b></div><div><span>Predicted increase</span><b>18%</b></div><div><span>Time</span><b>Next 20 minutes</b></div><div><span>Peak period</span><b>6 PM – 8 PM</b></div></div>
    </ActionModal>}
    {success && <div className="toast success-toast"><div className="toast-icon tone-green"><Icon name="check" /></div><div><b>Strategy active</b><span>Traffic diversion strategy applied successfully.</span></div><button onClick={() => setSuccess(false)}><Icon name="close" /></button></div>}
  </>;
}

function Signals() {
  const [optimized, setOptimized] = useState(false);
  const [success, setSuccess] = useState(false);
  const rows = [["North", "420", "30 sec", "45 sec"], ["South", "180", "30 sec", "25 sec"], ["East", "350", "30 sec", "40 sec"], ["West", "90", "30 sec", "20 sec"]];
  return <div className="signals-layout">
    <Panel className="signal-table-panel"><div className="panel-heading"><div><h2>Central Junction Signal Timing</h2><p>AI timing plan based on current vehicle density</p></div><Badge tone={optimized ? "green" : "blue"}>{optimized ? "AI TIMING APPLIED ✓" : "AI READY"}</Badge></div>
      <table><thead><tr><th>Direction</th><th>Vehicles</th><th>Current</th><th>AI Suggested</th></tr></thead><tbody>{rows.map((r) => <tr className={optimized ? "timing-updated" : ""} key={r[0]}><td><span className={`direction-arrow d-${r[0].toLowerCase()}`}>↑</span><b>{r[0]}</b></td><td>{r[1]}</td><td><strong>{optimized ? r[3] : r[2]}</strong></td><td><Badge tone={optimized ? "green" : "blue"}>{optimized ? "APPLIED" : r[3]}</Badge></td></tr>)}</tbody></table>
      <div className="signal-impact"><Icon name="sparkle" /><div><b>Projected impact</b><span>23% shorter queues · 18% faster throughput</span></div></div>
      <Button full icon={optimized ? "check" : "sparkle"} onClick={() => { setOptimized(true); setSuccess(true); }}>{optimized ? "Timing Applied" : "Apply AI Timing"}</Button>
    </Panel>
    <Panel className="signal-visual-panel"><div className="panel-heading"><div><h2>Signal State</h2><p>North-South corridor</p></div><div className="live-status"><span /> LIVE</div></div>
      <div className="traffic-light"><div className="light red" /><div className="light yellow" /><div className="light green active" /></div><strong>GREEN</strong><span>{optimized ? "45" : "30"} seconds remaining</span><div className="countdown"><i style={{ width: optimized ? "82%" : "58%" }} /></div>
      <div className="signal-directions"><div className="go"><b>North ↑</b><small>FLOWING</small></div><div><b>East →</b><small>STOPPED</small></div><div className="go"><b>South ↓</b><small>FLOWING</small></div><div><b>West ←</b><small>STOPPED</small></div></div>
    </Panel>
    {success && <div className="toast success-toast"><div className="toast-icon tone-green"><Icon name="check" /></div><div><b>AI Timing Applied ✓</b><span>Signal timings optimized successfully.</span></div><button onClick={() => setSuccess(false)}><Icon name="close" /></button></div>}
  </div>;
}

function Emergency() {
  const [active, setActive] = useState(false);
  return <>
    <div className={`emergency-banner ${active ? "active" : ""}`}><div className="emergency-big-icon"><Icon name={active ? "check" : "ambulance"} size={28} /></div><div><span>{active ? "EMERGENCY CORRIDOR ACTIVE" : "PRIORITY VEHICLE DETECTED"}</span><h2>{active ? "Signals synchronized for emergency vehicle passage." : "Ambulance Detected"}</h2><p>{active ? "Nearby traffic has been alerted. Live monitoring is in progress." : "AI has prepared the fastest green corridor to Government General Hospital."}</p></div><div className="emergency-pulse"><span /><b>{active ? "ACTIVE" : "URGENT"}</b></div></div>
    <div className="emergency-grid">
      <div className="emergency-main">
        <Panel className="emergency-map-panel"><div className="panel-heading"><div><h2>AI Emergency Corridor</h2><p>Junction 3 → Junction 5 → Junction 7</p></div><Badge tone={active ? "green" : "red"} dot>{active ? "CORRIDOR ACTIVE" : "READY"}</Badge></div><TrafficMap emergency={active} /></Panel>
        <div className="junction-actions">
          {[["Junction 3", "45 sec"], ["Junction 5", "40 sec"], ["Junction 7", "50 sec"]].map((j, i) => <Panel className={`junction-card ${active ? "junction-active" : ""}`} key={j[0]}><div className="junction-number">{active ? <Icon name="check" size={14} /> : i + 1}</div><div><b>{j[0]}</b><span>{active ? "SYNCHRONIZED" : <>RED <Icon name="chevron" size={13} /> <strong>GREEN</strong></>}</span></div><Badge tone="green">{active ? `ACTIVE · ${j[1]}` : j[1]}</Badge></Panel>)}
        </div>
      </div>
      <Panel className="ambulance-card"><div className="ambulance-head"><div className="ambulance-icon"><Icon name="ambulance" size={25} /></div><div><Badge tone="red">EMERGENCY VEHICLE</Badge><h2>Ambulance 04</h2></div></div>
        <div className="vehicle-detail"><span>Current location</span><b><Icon name="location" /> NH-16 — Junction 3</b></div><div className="vehicle-detail"><span>Destination</span><b><Icon name="location" /> Government General Hospital</b></div>
        <div className="eta-comparison"><div><span>{active ? "Previous ETA" : "Current ETA"}</span><b className={active ? "eta-previous" : ""}>18 min</b></div><Icon name="chevron" /><div><span>{active ? "Current ETA" : "AI Optimized"}</span><strong>11 min</strong></div></div>
        <div className="time-saved"><Icon name="clock" /><div><span>TIME SAVED</span><b>7 minutes faster</b></div></div>
        <Button full variant={active ? "secondary" : "danger"} icon={active ? "check" : "ambulance"} onClick={() => setActive(true)}>{active ? "Emergency Corridor Active ✓" : "Activate Emergency Corridor"}</Button>
        <p className={`corridor-note ${active ? "alerted" : ""}`}><Icon name="bell" size={14} /> {active ? "Nearby traffic alerted to keep the emergency corridor clear." : "Nearby traffic will be alerted to keep the corridor clear."}</p>
      </Panel>
    </div>
    {active && <div className="active-status"><span className="active-ring"><Icon name="check" /></span><div><b>Emergency corridor is live</b><span>Junctions 3, 5 and 7 are synchronized. Ambulance ETA: <strong>11 min</strong></span></div><Badge tone="green">7 min saved</Badge></div>}
  </>;
}

const density = [38, 64, 52, 46, 49, 71, 94, 78, 43];
function BarChart({ data = density, labels = ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"], red = false }: { data?: number[]; labels?: string[]; red?: boolean }) {
  return <div className={`bar-chart ${red ? "red-bars" : ""}`}>{data.map((v, i) => <div className="bar-column" key={labels[i]}><div className="bar-value">{v}%</div><div className="bar-track"><i style={{ height: `${v}%` }} /></div><span>{labels[i]}</span></div>)}</div>;
}

function Analytics() {
  const [period, setPeriod] = useState<"Today" | "7 Days" | "30 Days">("Today");
  const periodData = {
    Today: [38, 64, 52, 46, 49, 71, 94, 78, 43],
    "7 Days": [52, 68, 59, 71, 64, 82, 88, 74, 55],
    "30 Days": [46, 57, 66, 61, 73, 79, 86, 69, 50],
  };
  return <>
    <div className="analytics-head"><div><span className="eyebrow">CITY-WIDE INSIGHTS</span><h2>Traffic Analytics</h2><p>Historical patterns and real-time performance.</p></div><div className="filter-tabs">{(["Today", "7 Days", "30 Days"] as const).map((item) => <button className={period === item ? "active" : ""} onClick={() => setPeriod(item)} key={item}>{item}</button>)}</div></div>
    <div className="analytics-grid">
      <Panel className="chart-panel wide"><div className="panel-heading"><div><h2>Vehicle Density by Hour</h2><p>Average road occupancy · {period}</p></div><Badge tone="red">Peak at 6 PM</Badge></div><BarChart data={periodData[period]} /></Panel>
      <Panel className={`chart-panel period-${period.replace(" ", "-").toLowerCase()}`}><div className="panel-heading"><div><h2>Average Speed</h2><p>km/h · {period}</p></div><strong className="metric-up">{period === "Today" ? "32" : period === "7 Days" ? "35" : "33"} km/h</strong></div><LineChart /></Panel>
      <Panel className="chart-panel"><div className="panel-heading"><div><h2>Congestion Level</h2><p>Current network distribution</p></div></div><div className="donut-wrap"><div className="donut"><span><b>28%</b><small>Congested</small></span></div><div className="donut-legend"><span><i className="green" />Low <b>48%</b></span><span><i className="yellow" />Moderate <b>24%</b></span><span><i className="red" />High <b>28%</b></span></div></div></Panel>
      <Panel className="chart-panel wide"><div className="panel-heading"><div><h2>Traffic Volume by Road</h2><p>Vehicles detected in the last hour</p></div></div><div className="horizontal-bars">{[["NH-16", 92, "8,240"], ["Central Junction", 76, "6,810"], ["Market Road", 58, "5,120"], ["Railway Road", 41, "3,680"], ["Bus Stand Road", 30, "2,940"]].map(r => <div key={r[0]}><span>{r[0]}</span><i><b style={{ width: `${r[1]}%` }} /></i><strong>{r[2]}</strong></div>)}</div></Panel>
    </div>
    <Intelligence />
  </>;
}

function Intelligence() {
  const insights = [
    ["red", "Central Junction vehicle density is 42% higher than historical average.", "High priority"],
    ["yellow", "NH-16 congestion is predicted to increase by 18% in the next 20 minutes.", "Prediction"],
    ["blue", "Signal optimization can reduce average waiting time by approximately 23%.", "Opportunity"],
    ["green", "Emergency corridor can reduce ambulance travel time by approximately 7 minutes.", "Impact"],
  ];
  return <Panel className="intelligence"><div className="analysis-head"><div className="ai-orb"><Icon name="brain" /></div><div><h2>AI Traffic Intelligence</h2><p>Insights generated from live sensor and historical data</p></div><Badge tone="blue">92% confidence</Badge></div><div className="insight-list">{insights.map(([tone, text, label]) => <div key={text} className={`insight insight-${tone}`}><div className="insight-icon"><Icon name="sparkle" /></div><p>{text}</p><Badge tone={tone as "red" | "yellow" | "blue" | "green"}>{label}</Badge></div>)}</div></Panel>;
}

function Authority({ logout }: { logout: () => void }) {
  const [active, setActive] = useState<AuthoritySection>("Overview");
  return <div className="authority-shell"><Sidebar active={active} setActive={setActive} logout={logout} /><div className="authority-content"><AuthorityHeader active={active} /><main className="authority-page">
    {active === "Overview" && <Overview navigate={setActive} />}
    {active === "Live Traffic" && <><Panel className="full-map"><div className="panel-heading"><div><h2>Live City Traffic</h2><p>Real-time sensor data across 48 monitoring points</p></div><div className="live-status"><span /> LIVE FEED</div></div><TrafficMap /></Panel><Intelligence /></>}
    {active === "Signals" && <Signals />}
    {active === "Emergency" && <Emergency />}
    {active === "Analytics" && <Analytics />}
    {active === "AI Recommendations" && <><div className="analytics-head"><div><span className="eyebrow">AI DECISION SUPPORT</span><h2>Recommended Actions</h2><p>Prioritized by network impact, urgency and model confidence.</p></div><Badge tone="blue">3 actions ready</Badge></div><Overview navigate={setActive} recommendationsOnly /></>}
  </main></div></div>;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  if (screen === "login") return <Login enter={setScreen} />;
  if (screen === "traveller") return <Traveller logout={() => setScreen("login")} />;
  return <Authority logout={() => setScreen("login")} />;
}
