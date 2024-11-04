import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
import HomePage from "./pages/HomePage";
import DelegatePage from "./pages/DelegatePage";

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="fr" />
        <title>Le Nexus - Communauté Francophone de Polkadot</title>
        <meta
          name="description"
          content="Le Nexus est une communauté francophone dédiée à l'écosystème Polkadot et à la gouvernance décentralisée. Rejoignez-nous pour explorer l'avenir du Web3 !"
        />
        <meta name="keywords" content="Polkadot, Nexus, Communauté, Web3, Blockchain, Gouvernance décentralisée" />
        <meta property="og:title" content="Le Nexus - Communauté Francophone de Polkadot" />
        <meta property="og:description" content="Rejoignez la communauté francophone du Nexus, dédiée à Polkadot et à la gouvernance décentralisée." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lenexus.org" />
        <meta property="og:image" content="https://lenexus.4everland.store/background/Previews_LeNexus.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le Nexus - Communauté Francophone de Polkadot" />
        <meta name="twitter:description" content="Rejoignez la communauté francophone du Nexus, dédiée à Polkadot et à la gouvernance décentralisée." />
        <meta name="twitter:image" content="https://lenexus.4everland.store/background/Previews_LeNexus.png" />
      </Helmet>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/delegate" element={<DelegatePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
