function creaNav() {
  // Rimuovi l'header esistente se presente
  const existingHeader = document.querySelector('header');
  if (existingHeader) {
    existingHeader.remove();
  }

  const header = document.createElement('header');
  header.className = 'container-fluid p-0 m-0 bg-header fixed-top box-s';

  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg bg-transparent h-100';

  const container = document.createElement('div');
  container.className = 'container-fluid';

  const logoLink = document.createElement('a');
  logoLink.className = 'navbar-brand logo mx-2';
  logoLink.href = 'index.html';

  const logoImg = document.createElement('img');
  logoImg.src = 'assets/img/logo.png';
  logoLink.appendChild(logoImg);

  const button = document.createElement('button');
  button.className = 'navbar-toggler';
  button.type = 'button';
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarSupportedContent');

  const buttonIcon = document.createElement('span');
  buttonIcon.className = 'navbar-toggler-icon';
  button.appendChild(buttonIcon);

  const collapseDiv = document.createElement('div');
  collapseDiv.className = 'collapse navbar-collapse';
  collapseDiv.id = 'navbarSupportedContent';

  const navList = document.createElement('ul');
  navList.className = 'navbar-nav mx-auto mb-2 mb-lg-0 border-b-hover border-b';

  const homeItem = document.createElement('li');
  homeItem.className = 'nav-item';
  const homeLink = document.createElement('a');
  homeLink.className = 'nav-link';
  homeLink.href = 'index.html';
  homeLink.textContent = 'Home';
  homeItem.appendChild(homeLink);
  navList.appendChild(homeItem);

  const viniItem = document.createElement('li');
  viniItem.className = 'nav-item dropdown';
  const viniLink = document.createElement('a');
  viniLink.className = 'nav-link dropdown-toggle';
  viniLink.role = 'button';
  viniLink.setAttribute('data-bs-toggle', 'dropdown');
  viniLink.textContent = 'Vini';
  viniItem.appendChild(viniLink);

  const viniMenu = document.createElement('ul');
  viniMenu.className = 'dropdown-menu menu-hover border-0';
  viniMenu.id = 'viniMenu';

  const viniBianchiTitle = document.createElement('li');
  const viniBianchiTitleLink = document.createElement('a');
  viniBianchiTitleLink.className = 'drop-title cursor-normal';
  viniBianchiTitleLink.textContent = 'Vini bianchi:';
  viniBianchiTitle.appendChild(viniBianchiTitleLink);
  viniMenu.appendChild(viniBianchiTitle);

  const pecorinoItem = document.createElement('li');
  const pecorinoLink = document.createElement('a');
  pecorinoLink.className = 'dropdown-item';
  pecorinoLink.href = 'page/pecorino.html';
  pecorinoLink.textContent = 'Pecorino (12,5°)';
  pecorinoItem.appendChild(pecorinoLink);
  viniMenu.appendChild(pecorinoItem);

  const chardonnayItem = document.createElement('li');
  const chardonnayLink = document.createElement('a');
  chardonnayLink.className = 'dropdown-item';
  chardonnayLink.href = 'page/chardonnay.html';
  chardonnayLink.textContent = 'Chardonnay (12,5°)';
  chardonnayItem.appendChild(chardonnayLink);
  viniMenu.appendChild(chardonnayItem);

  const cococciolaItem = document.createElement('li');
  const cococciolaLink = document.createElement('a');
  cococciolaLink.className = 'dropdown-item';
  cococciolaLink.href = 'page/cococciola.html';
  cococciolaLink.textContent = 'Cococciola (12,5°)';
  cococciolaItem.appendChild(cococciolaLink);
  viniMenu.appendChild(cococciolaItem);

  viniMenu.appendChild(document.createElement('hr'));

  const viniRossiTitle = document.createElement('li');
  const viniRossiTitleLink = document.createElement('a');
  viniRossiTitleLink.className = 'drop-title cursor-normal';
  viniRossiTitleLink.textContent = 'Vini rossi:';
  viniRossiTitle.appendChild(viniRossiTitleLink);
  viniMenu.appendChild(viniRossiTitle);

  const montepulcianoItem = document.createElement('li');
  const montepulcianoLink = document.createElement('a');
  montepulcianoLink.className = 'dropdown-item';
  montepulcianoLink.href = 'page/montepulciano.html';
  montepulcianoLink.textContent = 'Montepulciano rosso (14,5°)';
  montepulcianoItem.appendChild(montepulcianoLink);
  viniMenu.appendChild(montepulcianoItem);

  viniMenu.appendChild(document.createElement('hr'));

  const viniRosatiTitle = document.createElement('li');
  const viniRosatiTitleLink = document.createElement('a');
  viniRosatiTitleLink.className = 'drop-title cursor-normal';
  viniRosatiTitleLink.textContent = 'Vini rosati:';
  viniRosatiTitle.appendChild(viniRosatiTitleLink);
  viniMenu.appendChild(viniRosatiTitle);

  const cerasuoloItem = document.createElement('li');
  const cerasuoloLink = document.createElement('a');
  cerasuoloLink.className = 'dropdown-item';
  cerasuoloLink.href = 'page/cerasuolo.html';
  cerasuoloLink.textContent = 'Montepulciano Cerasuolo (13°)';
  cerasuoloItem.appendChild(cerasuoloLink);
  viniMenu.appendChild(cerasuoloItem);

  viniMenu.appendChild(document.createElement('hr'));

  const spumantiTitle = document.createElement('li');
  const spumantiTitleLink = document.createElement('a');
  spumantiTitleLink.className = 'drop-title cursor-normal';
  spumantiTitleLink.textContent = 'Spumanti:';
  spumantiTitle.appendChild(spumantiTitleLink);
  viniMenu.appendChild(spumantiTitle);

  const roseBrutItem = document.createElement('li');
  const roseBrutLink = document.createElement('a');
  roseBrutLink.className = 'dropdown-item';
  roseBrutLink.href = 'page/rose_brut.html';
  roseBrutLink.textContent = 'rose spumante brut (11,5°)';
  roseBrutItem.appendChild(roseBrutLink);
  viniMenu.appendChild(roseBrutItem);

  viniMenu.appendChild(document.createElement('hr'));

  const dolciTitle = document.createElement('li');
  const dolciTitleLink = document.createElement('a');
  dolciTitleLink.className = 'drop-title cursor-normal';
  dolciTitleLink.textContent = 'Dolci:';
  dolciTitle.appendChild(dolciTitleLink);
  viniMenu.appendChild(dolciTitle);

  const moscatoItem = document.createElement('li');
  const moscatoLink = document.createElement('a');
  moscatoLink.className = 'dropdown-item';
  moscatoLink.href = 'page/moscato.html';
  moscatoLink.textContent = 'Moscato dolce (6°)';
  moscatoItem.appendChild(moscatoLink);
  viniMenu.appendChild(moscatoItem);

  viniItem.appendChild(viniMenu);
  navList.appendChild(viniItem);

  const viniBioItem = document.createElement('li');
  viniBioItem.className = 'nav-item dropdown';
  const viniBioLink = document.createElement('a');
  viniBioLink.className = 'nav-link dropdown-toggle';
  viniBioLink.role = 'button';
  viniBioLink.setAttribute('data-bs-toggle', 'dropdown');
  viniBioLink.textContent = 'Vini Bio';
  viniBioItem.appendChild(viniBioLink);

  const viniBioMenu = document.createElement('ul');
  viniBioMenu.className = 'dropdown-menu menu-hover border-0';

  const viniBioBianchiTitle = document.createElement('li');
  const viniBioBianchiTitleLink = document.createElement('a');
  viniBioBianchiTitleLink.className = 'drop-title cursor-normal';
  viniBioBianchiTitleLink.textContent = 'Vini bianchi:';
  viniBioBianchiTitle.appendChild(viniBioBianchiTitleLink);
  viniBioMenu.appendChild(viniBioBianchiTitle);

  const cococciolaBioItem = document.createElement('li');
  const cococciolaBioLink = document.createElement('a');
  cococciolaBioLink.className = 'dropdown-item';
  cococciolaBioLink.href = 'page/cococciola_bio.html';
  cococciolaBioLink.textContent = 'Cococciola Bio (11,5°)';
  cococciolaBioItem.appendChild(cococciolaBioLink);
  viniBioMenu.appendChild(cococciolaBioItem);

  viniBioMenu.appendChild(document.createElement('hr'));

  const viniBioRossiTitle = document.createElement('li');
  const viniBioRossiTitleLink = document.createElement('a');
  viniBioRossiTitleLink.className = 'drop-title cursor-normal';
  viniBioRossiTitleLink.textContent = 'Vini rossi:';
  viniBioRossiTitle.appendChild(viniBioRossiTitleLink);
  viniBioMenu.appendChild(viniBioRossiTitle);

  const montepulcianoBioItem = document.createElement('li');
  const montepulcianoBioLink = document.createElement('a');
  montepulcianoBioLink.className = 'dropdown-item';
  montepulcianoBioLink.href = 'page/montepulciano_bio.html';
  montepulcianoBioLink.textContent = 'Montepulciano rosso Bio (13°)';
  montepulcianoBioItem.appendChild(montepulcianoBioLink);
  viniBioMenu.appendChild(montepulcianoBioItem);

  viniBioMenu.appendChild(document.createElement('hr'));

  const spumantiBioTitle = document.createElement('li');
  const spumantiBioTitleLink = document.createElement('a');
  spumantiBioTitleLink.className = 'drop-title cursor-normal';
  spumantiBioTitleLink.textContent = 'Spumanti:';
  spumantiBioTitle.appendChild(spumantiBioTitleLink);
  viniBioMenu.appendChild(spumantiBioTitle);

  const roseBrutBioItem = document.createElement('li');
  const roseBrutBioLink = document.createElement('a');
  roseBrutBioLink.className = 'dropdown-item';
  roseBrutBioLink.href = 'rose_brut_bio.html';
  roseBrutBioLink.textContent = 'rose spumante brut Bio (10,5°)';
  roseBrutBioItem.appendChild(roseBrutBioLink);
  viniBioMenu.appendChild(roseBrutBioItem);

  viniBioMenu.appendChild(document.createElement('hr'));

  const dolciBioTitle = document.createElement('li');
  const dolciBioTitleLink = document.createElement('a');
  dolciBioTitleLink.className = 'drop-title cursor-normal';
  dolciBioTitleLink.textContent = 'Dolci:';
  dolciBioTitle.appendChild(dolciBioTitleLink);
  viniBioMenu.appendChild(dolciBioTitle);

  const moscatoBioItem = document.createElement('li');
  const moscatoBioLink = document.createElement('a');
  moscatoBioLink.className = 'dropdown-item';
  moscatoBioLink.href = 'moscato_bio.html';
  moscatoBioLink.textContent = 'Moscato dolce Bio (5,5°)';
  moscatoBioItem.appendChild(moscatoBioLink);
  viniBioMenu.appendChild(moscatoBioItem);

  viniBioItem.appendChild(viniBioMenu);
  navList.appendChild(viniBioItem);

  const socialList = document.createElement('ul');
  socialList.className = 'nav nav-pills border-b social me-2 ms-5';

  const facebookItem = document.createElement('li');
  const facebookLink = document.createElement('a');
  facebookLink.className = 'nav-link facebook';
  facebookLink.href = '#';
  const facebookIcon = document.createElement('i');
  facebookIcon.className = 'fab fa-facebook';
  facebookLink.appendChild(facebookIcon);
  facebookItem.appendChild(facebookLink);
  socialList.appendChild(facebookItem);

  const instagramItem = document.createElement('li');
  const instagramLink = document.createElement('a');
  instagramLink.className = 'nav-link instagram';
  instagramLink.href = '#';
  const instagramIcon = document.createElement('i');
  instagramIcon.className = 'fab fa-instagram';
  instagramLink.appendChild(instagramIcon);
  instagramItem.appendChild(instagramLink);
  socialList.appendChild(instagramItem);

  const twitterItem = document.createElement('li');
  const twitterLink = document.createElement('a');
  twitterLink.className = 'nav-link twitter';
  twitterLink.href = '#';
  const twitterIcon = document.createElement('i');
  twitterIcon.className = 'fab fa-x-twitter';
  twitterLink.appendChild(twitterIcon);
  twitterItem.appendChild(twitterLink);
  socialList.appendChild(twitterItem);

  collapseDiv.appendChild(navList);
  collapseDiv.appendChild(socialList);

  container.appendChild(logoLink);
  container.appendChild(button);
  container.appendChild(collapseDiv);

  nav.appendChild(container);
  header.appendChild(nav);

  document.body.prepend(header);
}

document.addEventListener('DOMContentLoaded', creaNav);
