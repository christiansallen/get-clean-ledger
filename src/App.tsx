import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

function getRoute(hash: string): string {
  if (hash === '#/privacy') return 'privacy';
  if (hash === '#/terms') return 'terms';
  return 'home';
}

export function App() {
  const [route, setRoute] = useState(() => getRoute(window.location.hash));

  useEffect(() => {
    function onHashChange() {
      const next = getRoute(window.location.hash);
      setRoute(next);
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <Layout>
      {route === 'privacy' && <PrivacyPolicyPage />}
      {route === 'terms' && <TermsOfServicePage />}
      {route === 'home' && <HomePage />}
    </Layout>
  );
}
