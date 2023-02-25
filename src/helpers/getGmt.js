function getGmt(city) {
  switch (city) {
    case 'Sakhir':
    case 'Djeddah':
    case 'Sochi':
    case 'Losail':
    case 'Istanbul':
      return 'Etc/GMT-3';
    case 'Melbourne':
      return 'Australia/Melbourne';
    case 'Imola':
    case 'Zandvoort':
    case 'Montmeló':
    case 'Monte-Carlo':
    case 'Spielberg':
    case 'Le Castellet':
    case 'Mogyoród':
    case 'Francorchamps':
    case 'Monza':
    case 'Hockenheim':
    case null:
      return 'Europe/Amsterdam';
    case 'Miami':
    case 'Montréal':
      return 'Etc/GMT+5';
    case 'Bakou':
    case 'Yas Marina, Abou Dabi':
      return 'Etc/GMT-4';
    case 'Silverstone Northamptonshire':
      return 'Etc/GMT+0';
    case 'Singapour':
    case 'Anting':
      return 'Etc/GMT-8';
    case 'Suzuka':
      return 'Etc/GMT-9';
    case 'Elroy':
    case 'Mexico':
      return 'Etc/GMT+6';
    case 'São Paulo':
      return 'Etc/GMT+3';
    case 'Las Vegas':
      return 'Etc/GMT-3';
    case 'Hanoï':
      return 'Etc/GMT-7'
    default:
      return '';
  }
}

export default getGmt;