function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'container-fluid m-0 color-footer';

  const container = document.createElement('div');
  container.className = 'container';
  footer.appendChild(container);

  const row1 = document.createElement('div');
  row1.className = 'row justify-content-between px-4 py-5';
  container.appendChild(row1);

  const col1 = document.createElement('div');
  col1.className = 'col-6 col-md-4';
  row1.appendChild(col1);

  const p1 = document.createElement('p');
  p1.className = 'fw-bolder';
  p1.textContent = 'Iscriviti alla Newsletters';
  col1.appendChild(p1);

  const input = document.createElement('input');
  input.className = 'form-control';
  input.type = 'email';
  input.placeholder = 'example@email.com';
  input.id = 'inputNews';
  col1.appendChild(input);

  const pIncorrect = document.createElement('p');
  pIncorrect.className = 'd-none text-danger fw-bolder';
  pIncorrect.id = 'incorrect';
  pIncorrect.textContent = '*inserire bene l\'email!';
  col1.appendChild(pIncorrect);

  const pCorrect = document.createElement('p');
  pCorrect.className = 'd-none text-success fw-bolder';
  pCorrect.id = 'correct';
  pCorrect.textContent = 'Iscrizione completata!';
  col1.appendChild(pCorrect);

  const button = document.createElement('button');
  button.className = 'btn btn-primary mt-2';
  button.type = 'button';
  button.setAttribute('onclick', 'verificyNewsletter()');
  button.textContent = 'Registrati';
  col1.appendChild(button);

  const col2 = document.createElement('div');
  col2.className = 'col-6 col-md-4 d-flex justify-content-end';
  row1.appendChild(col2);

  const aLogo = document.createElement('a');
  aLogo.className = 'd-flex align-items-center link-body-emphasis text-decoration-none logo-footer';
  aLogo.href = 'index.html';
  col2.appendChild(aLogo);

  const imgLogo = document.createElement('img');
  imgLogo.src = 'assets/img/logo.png';
  aLogo.appendChild(imgLogo);

  const row2 = document.createElement('div');
  row2.className = 'row py-5 px-4 mt-3';
  container.appendChild(row2);

  const sections = [
    { title: 'Vini bianchi', links: [{ text: 'Pecorino', href: 'page/pecorino.html' }, { text: 'Chardonnay', href: 'page/chardonnay.html' }, { text: 'Cococciola', href: 'page/cococciola.html' }] },
    { title: 'Vini rossi', links: [{ text: 'Montepulciano rosso', href: 'page/montepulciano.html' }, { text: 'Montepulciano rosso Bio', href: 'page/montepulciano_bio.html' }] },
    { title: 'Vini Rosati', links: [{ text: 'Montepulciano Cerasuolo', href: 'page/cerasuolo.html' }] },
    { title: 'Spumanti', links: [{ text: 'Cococciola spumante brut', href: 'page/cococciola_spumante.html' }, { text: 'rose spumante brut', href: 'page/rose_brut.html' }, { text: 'rose spumante brut Bio', href: 'page/rose_brut_bio.html' }] },
    { title: 'Dolci', links: [{ text: 'Moscato dolce', href: 'page/moscato.html' }, { text: 'Moscato dolce Bio', href: 'page/moscato_bio.html' }] }
  ];

  sections.forEach(section => {
    const col = document.createElement('div');
    col.className = 'col mb-3';
    row2.appendChild(col);

    const p = document.createElement('p');
    p.className = 'fw-bolder mb-2';
    p.textContent = section.title;
    col.appendChild(p);

    const ul = document.createElement('ul');
    ul.className = 'list-unstyled';
    col.appendChild(ul);

    section.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
  });

  const container2 = document.createElement('div');
  container2.className = 'container';
  container.appendChild(container2);

  const divBorder = document.createElement('div');
  divBorder.className = 'py-3 mt-4 border-top';
  container2.appendChild(divBorder);

  const divFlex = document.createElement('div');
  divFlex.className = 'd-flex align-items-center justify-content-between';
  divBorder.appendChild(divFlex);

  const span1 = document.createElement('span');
  span1.className = 'mb-3 mb-md-0 text-body-secondary';
  span1.textContent = '©1987-2023 Collina d\'Oro, Inc.';
  divFlex.appendChild(span1);

  const span2 = document.createElement('span');
  span2.className = 'mb-3 mb-md-0 text-body-secondary';
  span2.textContent = 'Tel: +39 380 5786898';
  divFlex.appendChild(span2);

  const ulSocial = document.createElement('ul');
  ulSocial.className = 'nav justify-content-end list-unstyled d-flex';
  divFlex.appendChild(ulSocial);

  const socialLinks = [
    { href: '#', iconClass: 'fab fa-facebook' },
    { href: '#', iconClass: 'fab fa-instagram' },
    { href: '#', iconClass: 'fab fa-x-twitter' }
  ];

  socialLinks.forEach(link => {
    const li = document.createElement('li');
    li.className = 'ms-3';
    ulSocial.appendChild(li);

    const a = document.createElement('a');
    a.className = 'text-body-secondary';
    a.href = link.href;
    li.appendChild(a);

    const i = document.createElement('i');
    i.className = link.iconClass;
    a.appendChild(i);
  });

  document.body.appendChild(footer);
}

createFooter();