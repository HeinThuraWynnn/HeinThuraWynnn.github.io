import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: FC<SEOProps> = ({ 
  title = 'Wynn Solutions Myanmar - Lead Software Engineer & AI Solutions Provider',
  description = `Leading software and AI solutions provider in Myanmar. Expert in Flutter, Kotlin, PHP development with ${new Date().getFullYear() - 2015 - (new Date().getMonth() < 11 ? 1 : 0)}+ years experience. Custom web & mobile applications, QA services.`,
  keywords = 'software development myanmar, AI solutions, flutter developer, kotlin developer, PHP laravel, mobile app development, web development, QA testing, Hein Thura Wynn, Wynn Solutions',
  image = 'https://wynnsolutionsmyanmar.com/w-logo.png',
  url
}) => {
  const location = useLocation();
  const currentUrl = url || `https://wynnsolutionsmyanmar.com${location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set or update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', currentUrl, true);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, currentUrl]);

  return null;
};

export default SEO;