import './App.css';
import MainFeatureCard from './MainFeatureCard';
import FeatureCardWithCircle from './FeatureCardWithCircle';
import StaticFeatureCard from './StaticFeatureCard';

function App() {
  return (
    <div>
      
      <header className="spotter-header exact-match">
        <div className="header-left exact-match">
          <span className="spotter-logo-header exact-match" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 32, height: 32, marginRight: 12, display: 'flex', alignItems: 'center' }}>
                   <img src="/logo.png" alt="Logo" style={{ width: 32, height: 32, borderRadius: '50%' }} />
            </span>
            <span className="logo-text" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.35rem', letterSpacing: '0.5px', color: '#232323' }}>
              spotter<span className="dot-accent">.ai</span>
            </span>
          </span>
        </div>
        <nav className="header-nav exact-match">
          <a href="#" className="nav-link exact-match">Product</a>
          <a href="#" className="nav-link exact-match">Use Cases</a>
          <a href="#" className="nav-link exact-match">Developers</a>
          <a href="#" className="nav-link exact-match">Resources</a>
          <a href="#" className="nav-link exact-match">Demo</a>
          <a href="#" className="nav-link exact-match">Pricing</a>
        </nav>
        <div className="header-actions exact-match">
          <button className="header-btn login exact-match">Login</button>
          <button className="header-btn contact exact-match">Contact Sales</button>
          <button className="header-btn get-started exact-match">Get Started</button>
        </div>
      </header>
      
      <main className="spotter-section">
        <div className="main-feature-row">
          <MainFeatureCard />
          <div className="right-feature-cards">
            <StaticFeatureCard
              icon="🔍"
              title="Any browser, any device."
              description="Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy."
            />
            <FeatureCardWithCircle />
            <StaticFeatureCard
              icon="🛡️"
              title="Delight your trusted users."
              description="Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
