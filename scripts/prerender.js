import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Routes to prerender
const routes = [
  '/',
  '/services',
  '/services/tagarbejde',
  '/services/tilbygninger', 
  '/services/renoveringer',
  '/services/terrasser',
  '/toemrer-silkeborg',
  '/kontakt',
  '/politik'
];

// Read the main index.html template
const template = readFileSync(resolve(__dirname, '../dist/index.html'), 'utf-8');

// Basic HTML template with improved SEO structure
const generateHTML = (route) => {
  let title, description, ogTitle, ogDescription;
  
  switch (route) {
    case '/':
      title = 'Tømrer Jylland | Lokalt tømrerteam – Tag, Tilbygninger & Renoveringer';
      description = 'Skal du bruge en erfaren tømrer i Jylland? Vi leverer alt fra tagarbejde til tilbygninger og renoveringer. Få et GRATIS og uforpligtende tilbud – ring +45 27 85 13 81 i dag!';
      break;
    case '/services':
      title = 'Tømrer Services | Tag, Tilbygninger, Renoveringer & Terrasser';
      description = 'Udforsk vores komplette udvalg af tømrer services i Jylland. Fra tagarbejde til tilbygninger og renoveringer. Professionel kvalitet og fair priser.';
      break;
    case '/services/tagarbejde':
      title = 'Tagarbejde Jylland | Nyt tag, reparationer & tagrender – Få tilbud';
      description = 'Professionelt tagarbejde i Jylland: nyt tag, reparationer og tagrender. Beskyt dit hjem med kvalitet fra erfarne tømrere. Gratis besigtigelse – ring +45 27 85 13 81.';
      break;
    case '/services/tilbygninger':
      title = 'Tilbygninger Jylland | Garage, Orangeri & Udestue – Fast pris';
      description = 'Drømmer du om mere plads? Vi designer og opfører tilbygninger i Jylland: garage, orangeri, udestue og ekstra værelser. Gratis skitseforslag – ring +45 27 85 13 81.';
      break;
    case '/services/renoveringer':
      title = 'Renoveringer Jylland | Køkken, bad & totalrenovering – Få tilbud';
      description = 'Totalrenovering i Jylland: køkken, badeværelse og hele boliger. Moderne design og energioptimering. Gratis rådgivning – ring +45 27 85 13 81.';
      break;
    case '/services/terrasser':
      title = 'Træterrasser Jylland | Altaner & Pergola – Få fast pris';
      description = 'Smukke træterrasser og altaner i Jylland. Kvalitetstræ og fagmandsmæssig udførelse. Gratis opmåling og tilbud – ring +45 27 85 13 81.';
      break;
    case '/toemrer-silkeborg':
      title = 'Tømrer Silkeborg | Lokalt tømrerteam – Tag, Tilbygninger & Renoveringer';
      description = 'Skal du bruge en erfaren tømrer i Silkeborg? Vi leverer alt fra tagarbejde til tilbygninger og renoveringer. Få et GRATIS og uforpligtende tilbud – ring +45 27 85 13 81 i dag!';
      break;
    case '/kontakt':
      title = 'Kontakt Tømrer Jylland | Ring +45 27 85 13 81 for Gratis Tilbud';
      description = 'Kontakt Tømrer Jylland for professionel rådgivning og gratis tilbud. Ring +45 27 85 13 81 eller send en besked. Vi svarer inden for 24 timer.';
      break;
    case '/politik':
      title = 'Privatlivspolitik | Tømrer Jylland';
      description = 'Læs vores privatlivspolitik og se hvordan vi beskytter dine personlige oplysninger hos Tømrer Jylland.';
      break;
    default:
      title = 'Tømrer Jylland | Professionelt tømrerarbejde i Jylland';
      description = 'Professionelt tømrerarbejde i Jylland. Kontakt os for tagarbejde, tilbygninger og renoveringer.';
  }

  ogTitle = ogTitle || title;
  ogDescription = ogDescription || description;

  // Update meta tags in the template
  let html = template;
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/,`$1${description}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/,`$1${ogTitle}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/,`$1${ogDescription}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/,`$1${ogTitle}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/,`$1${ogDescription}$2`);
  
  // Update canonical URL
  const canonicalUrl = `https://toemrerjylland.dk${route === '/' ? '' : route}`;
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/,`$1${canonicalUrl}$2`);
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
  }

  return html;
};

// Generate static files for each route
routes.forEach(route => {
  const html = generateHTML(route);
  const outputPath = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
  const outputDir = dirname(outputPath);
  
  // Create directory if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  
  // Write the HTML file
  writeFileSync(outputPath, html);
  console.log(`✓ Generated: ${outputPath}`);
});

console.log('\n🎉 Static files generated successfully!');
console.log('📁 Files are available in the dist/ directory');
console.log('🚀 You can now deploy these files to any static hosting service');
