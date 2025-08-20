export interface CityContent {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  localIntro: string;
  advantages: string[];
  services: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  pricingTable: Array<{
    service: string;
    duration: string;
    price: string;
    note: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// City-specific data and variations
const cityData: Record<string, {
  region: string;
  climateNotes: string;
  specialConsiderations: string;
  localPriceAdjustment: string;
}> = {
  'herning': {
    region: 'Midtjylland',
    climateNotes: 'Vestjysk klima med jævn vind og nedbør',
    specialConsiderations: 'Stærk vindbelastning og fugtige forhold',
    localPriceAdjustment: 'Standard priser for regionen'
  },
  'holstebro': {
    region: 'Vestjylland',
    climateNotes: 'Kystklima med saltluft og vind',
    specialConsiderations: 'Saltluft korrosion og kraftig vind',
    localPriceAdjustment: 'Lidt højere pga. vanskelige adgangsforhold'
  },
  'horsens': {
    region: 'Østjylland',
    climateNotes: 'Overgangsklima mellem øst og vest',
    specialConsiderations: 'Varierende vejrforhold og grundvand',
    localPriceAdjustment: 'Standard priser'
  },
  'randers': {
    region: 'Østjylland',
    climateNotes: 'Kystklima med fugtig luft',
    specialConsiderations: 'Højt grundvand og fugtproblemer',
    localPriceAdjustment: 'Standard priser'
  },
  'silkeborg': {
    region: 'Midtjylland',
    climateNotes: 'Søklima med høj luftfugtighed',
    specialConsiderations: 'Fugtbelastning og søspecifikke forhold',
    localPriceAdjustment: 'Lidt højere pga. søklima'
  },
  'viborg': {
    region: 'Midtjylland',
    climateNotes: 'Klassisk jysk klima',
    specialConsiderations: 'Traditionel byggekultur',
    localPriceAdjustment: 'Standard priser'
  },
  'grenaa': {
    region: 'Østjylland',
    climateNotes: 'Kystklima med koldt vand',
    specialConsiderations: 'Saltluft og fugt',
    localPriceAdjustment: 'Standard priser'
  },
  'ringkoebing': {
    region: 'Vestjylland',
    climateNotes: 'Vestkystklima med vind',
    specialConsiderations: 'Sand og vind',
    localPriceAdjustment: 'Standard priser'
  },
  'skanderborg': {
    region: 'Østjylland',
    climateNotes: 'Sø- og skovklima',
    specialConsiderations: 'Fugt og skovområder',
    localPriceAdjustment: 'Standard priser'
  },
  'hjoerring': {
    region: 'Nordjylland',
    climateNotes: 'Kystklima med kold vind',
    specialConsiderations: 'Hårdt klima og saltluft',
    localPriceAdjustment: 'Lidt højere pga. vejrforhold'
  },
  'frederikshavn': {
    region: 'Nordjylland',
    climateNotes: 'Kystklima med meget vind',
    specialConsiderations: 'Ekstremt vejr og salt',
    localPriceAdjustment: 'Højere pga. vanskelige forhold'
  },
  'hobro': {
    region: 'Nordjylland',
    climateNotes: 'Kystklima med fugt',
    specialConsiderations: 'Marienlund og fugt',
    localPriceAdjustment: 'Standard priser'
  },
  'thisted': {
    region: 'Nordjylland',
    climateNotes: 'Kystklima med blæst',
    specialConsiderations: 'Vind og sand',
    localPriceAdjustment: 'Standard priser'
  },
  'nykoebing mors': {
    region: 'Nordjylland',
    climateNotes: 'Kystklima med vind',
    specialConsiderations: 'Øbelastning',
    localPriceAdjustment: 'Standard priser'
  },
  'esbjerg': {
    region: 'Sydjylland',
    climateNotes: 'Vestkystklima med vind',
    specialConsiderations: 'Sand og salt',
    localPriceAdjustment: 'Standard priser'
  },
  'fredericia': {
    region: 'Østjylland',
    climateNotes: 'Fjordklima med fugt',
    specialConsiderations: 'Havn og industri',
    localPriceAdjustment: 'Standard priser'
  },
  'kolding': {
    region: 'Sydjylland',
    climateNotes: 'Overgangsklima',
    specialConsiderations: 'Byudvikling',
    localPriceAdjustment: 'Standard priser'
  },
  'svendborg': {
    region: 'Fyn',
    climateNotes: 'Kystklima med fugt',
    specialConsiderations: 'Øhav og skibstrafik',
    localPriceAdjustment: 'Standard priser'
  },
  'soenderborg': {
    region: 'Sønderjylland',
    climateNotes: 'Kystklima med tysk påvirkning',
    specialConsiderations: 'Grænseland og fugt',
    localPriceAdjustment: 'Standard priser'
  },
  'vejle': {
    region: 'Østjylland',
    climateNotes: 'Fjordklima med regn',
    specialConsiderations: 'Fjord og grundvand',
    localPriceAdjustment: 'Standard priser'
  },
  'aabenraa': {
    region: 'Sønderjylland',
    climateNotes: 'Kystklima med fugt',
    specialConsiderations: 'Grænseland og regn',
    localPriceAdjustment: 'Standard priser'
  },
  'haderslev': {
    region: 'Sønderjylland',
    climateNotes: 'Kystklima med regn',
    specialConsiderations: 'Fjord og bymidte',
    localPriceAdjustment: 'Standard priser'
  },
  'middelfart': {
    region: 'Fyn',
    climateNotes: 'Fjordklima med fugt',
    specialConsiderations: 'Bro og trafik',
    localPriceAdjustment: 'Standard priser'
  },
  'nykoebing-mors': {
    region: 'Nordjylland',
    climateNotes: 'Kystklima med vind',
    specialConsiderations: 'Øbelastning',
    localPriceAdjustment: 'Standard priser'
  },
  'nyborg': {
    region: 'Fyn',
    climateNotes: 'Kystklima med vind',
    specialConsiderations: 'Øhav og turisme',
    localPriceAdjustment: 'Standard priser'
  },
  'varde': {
    region: 'Sydjylland',
    climateNotes: 'Vestkystklima med vind',
    specialConsiderations: 'Sand og natur',
    localPriceAdjustment: 'Standard priser'
  }
};

export function generateCityContent(citySlug: string): CityContent {
  const city = citySlug.replace('toemrer-', '').replace(/-/g, ' ');

  // Map normalized city names back to proper Danish characters for display
  const displayMap: Record<string, string> = {
    'ringkoebing': 'Ringkøbing',
    'hjoerring': 'Hjørring',
    'nykoebing-mors': 'Nykøbing Mors',
    'soenderborg': 'Sønderborg',
    'aabenraa': 'Aabenraa'
  };

  const displayCity = displayMap[city] || city.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const cityInfo = cityData[citySlug.replace('toemrer-', '').replace(/-/g, ' ')] || {
    region: 'Jylland',
    climateNotes: 'Lokalt klima',
    specialConsiderations: 'Lokale forhold',
    localPriceAdjustment: 'Standard priser'
  };

  return {
    title: `Tømrer ${displayCity} | Lokalt tømrerteam – Tag, Tilbygninger & Renoveringer`,
    metaDescription: `Skal du bruge en erfaren tømrer i ${displayCity}? Vi leverer alt fra tagarbejde til tilbygninger og renoveringer. Få et GRATIS og uforpligtende tilbud – ring +45 27 85 13 81 i dag!`,
    heroTitle: `Tømrer ${displayCity} – Dit lokale tømrerteam`,
    heroSubtitle: `Som lokalt forankret tømrerteam kender vi ${displayCity}s særlige byggetekniske udfordringer – fra ${cityInfo.climateNotes} til kommunale bestemmelser. Vi leverer kvalitetstømrering med hurtigt respons og lokalt kendskab.`,
    localIntro: `${displayCity}s placering stiller særlige krav til byggeri - ${cityInfo.climateNotes}. Som lokalt tømrerteam kender vi udfordringerne og de karakteristiske forhold der holder bedst i området.`,
    advantages: [
      `Lokalt kendskab: Vi kender ${displayCity}s byggestil og kommunale krav`,
      'Hurtig responstid: 1-2 timer til akutte opgaver',
      'Leverandørnetværk: Tætte relationer til lokale leverandører',
      'Referencer: Mange tilfredse kunder i området'
    ],
    services: [
      {
        title: `Tagarbejde ${displayCity}`,
        description: `Specialister i tagarbejde tilpasset ${displayCity}s klima og byggeregler.`,
        features: ['Ny tagbelægning', 'Tagreparationer', 'Tagrender', `${cityInfo.climateNotes}`]
      },
      {
        title: `Tilbygninger ${displayCity}`,
        description: `Fra garage til orangeri - vi kender ${displayCity} Kommunes byggebestemmelser.`,
        features: ['Garage', 'Orangeri', 'Udestue', 'Ekstra værelser']
      },
      {
        title: `Renoveringer ${displayCity}`,
        description: `Totalrenoveringer af ældre ${displayCity}-huse med respekt for arkitekturen.`,
        features: ['Køkkenrenovering', 'Badrenovering', 'Energiforbedringer', 'Tømmererstatning']
      }
    ],
    pricingTable: [
      {
        service: 'Tagreparation',
        duration: '1-3 dage',
        price: '12.000-35.000 kr.',
        note: `Ekstra vejrforsegning pga. ${cityInfo.climateNotes}`
      },
      {
        service: 'Garage (30 m²)',
        duration: '2-3 uger',
        price: '180.000-250.000 kr.',
        note: 'Inkl. kommunal byggesag'
      },
      {
        service: 'Køkkenrenovering',
        duration: '1-2 uger',
        price: '85.000-150.000 kr.',
        note: cityInfo.specialConsiderations
      },
      {
        service: 'Træterrasse (25 m²)',
        duration: '3-5 dage',
        price: '35.000-55.000 kr.',
        note: 'Drænage pga. lokale forhold'
      }
    ],
    faq: [
      {
        question: `Hvor hurtigt kan I være i ${displayCity}?`,
        answer: `Som lokalt team i Jylland kan vi typisk være i ${displayCity} inden for 1-2 timer ved akutte opgaver. Planlagte projekter starter normalt inden for 1-2 uger.`
      },
      {
        question: `Kender I ${displayCity} Kommunes byggebestemmelser?`,
        answer: `Ja, vi arbejder regelmæssigt med ${displayCity} Kommune og kender deres specifikke krav til byggetilladelser, bevaringsværdige områder og lokalplanbestemmelser.`
      },
      {
        question: `Hvad koster tømrerarbejde i ${displayCity}?`,
        answer: `Timepris: 475-550 kr. for standard tømrerarbejde. Komplette projekter prissættes efter besigtigelse. Ring for gratis prisoverslag på dit projekt. ${cityInfo.localPriceAdjustment}.`
      },
      {
        question: 'Arbejder I også i omegnskommuner?',
        answer: `Ja, vi dækker hele ${cityInfo.region} inkl. nabokommuner. Kontakt os for at høre om serviceområde for dit projekt.`
      }
    ]
  };
}
