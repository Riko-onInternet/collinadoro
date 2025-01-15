let head = document.querySelector("head");
let metaTag = document.createElement("meta");
head.appendChild(metaTag);
metaTag.setAttribute("name", "robots");
metaTag.setAttribute("content", "noindex, nofollow");

// Check Box
function checkboxPriv() {
  let check = document.querySelector("#checkboxPriv");
  let form = document.querySelector("#formPriv");
  let formAzie = document.querySelector("#formAzie");

  if (check.checked == true) {
    form.classList.remove("d-none");
    formAzie.classList.add("d-none");
  }
}

function checkboxAzie() {
  let check = document.querySelector("#checkboxAzie");
  let form = document.querySelector("#formAzie");
  let formPriv = document.querySelector("#formPriv");

  if (check.checked == true) {
    form.classList.remove("d-none");
    formPriv.classList.add("d-none");
  }
}


// Check Richiesta Priv
function checkFormPriv() {
  let nome = document.querySelector("#nome");
  let cognome = document.querySelector("#cognome");
  let via = document.querySelector("#via");
  let citta = document.querySelector("#citta");
  let provincia = document.querySelector("#provincia");
  let tel = document.querySelector("#tel");
  let email = document.querySelector("#emailPriv");

  let patternNome = /^[a-zA-Z ]*[a-zA-Z ]$/;
  let patternCognome = /^[a-zA-Z ]*[a-zA-Z ]$/;
  let patternVia = /^[a-zA-Z0-9, ]*[a-zA-Z0-9, ]$/;
  let patternCitta = /^[a-zA-Z ]*[a-zA-Z ]$/;
  let patternProvincia = /^[a-zA-Z]*[a-zA-Z]$/;
  let patternTel = /^[0-9]{10}$/;
  let patternEmail = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let checkName = patternNome.test(nome.value);
  let checkCognome = patternCognome.test(cognome.value);
  let checkVia = patternVia.test(via.value);
  let checkCitta = patternCitta.test(citta.value);
  let checkProvincia = patternProvincia.test(provincia.value);
  let checkTel = patternTel.test(tel.value);
  let checkEmail = patternEmail.test(email.value);

  // Text Error
  let errorName = document.querySelector("#nameError");
  let errorCognome = document.querySelector("#cognomeError");
  let errorVia = document.querySelector("#viaError");
  let errorCitta = document.querySelector("#cittaError");
  let errorProvincia = document.querySelector("#provinciaError");
  let errorTel = document.querySelector("#telError");
  let errorEmail = document.querySelector("#emailError");
  let errorEnd = document.querySelector("#endError");


  // Text Correct
  let correctName = document.querySelector("#nameCorrect");
  let correctCognome = document.querySelector("#cognomeCorrect");
  let correctVia = document.querySelector("#viaCorrect");
  let correctCitta = document.querySelector("#cittaCorrect");
  let correctProvincia = document.querySelector("#provinciaCorrect");
  let correctTel = document.querySelector("#telCorrect");
  let correctEmail = document.querySelector("#emailCorrect");
  let correctEnd = document.querySelector("#endCorrect");


  // Flag
  let flagName = false;
  let flagCognome = false;
  let flagVia = false;
  let flagCitta = false;
  let flagProvincia = false;
  let flagTel = false;
  let flagEmail = false;

  // Nome
  if (checkName) {
    nome.classList.add("bg-success-subtle", "border-success");
    nome.classList.remove("bg-danger-subtle", "border-danger");
    correctName.classList.remove("d-none");
    errorName.classList.add("d-none");
    flagName = true;
  } else {
    nome.classList.remove("bg-success-subtle", "border-success");
    nome.classList.add("bg-danger-subtle", "border-danger");
    correctName.classList.add("d-none");
    errorName.classList.remove("d-none");
  }

  // Cognome
  if (checkCognome) {
    cognome.classList.add("bg-success-subtle", "border-success");
    cognome.classList.remove("bg-danger-subtle", "border-danger");
    correctCognome.classList.remove("d-none");
    errorCognome.classList.add("d-none");
    flagCognome = true;
  } else {
    cognome.classList.remove("bg-success-subtle", "border-success");
    cognome.classList.add("bg-danger-subtle", "border-danger");
    correctCognome.classList.add("d-none");
    errorCognome.classList.remove("d-none");
  }

  // Indirizzo
  if (checkVia) {
    via.classList.add("bg-success-subtle", "border-success");
    via.classList.remove("bg-danger-subtle", "border-danger");
    errorVia.classList.add("d-none");
    correctVia.classList.remove("d-none");
    flagVia = true;
  } else {
    via.classList.remove("bg-success-subtle", "border-success");
    via.classList.add("bg-danger-subtle", "border-danger");
    errorVia.classList.remove("d-none");
    correctVia.classList.add("d-none");
  }

  // Città
  if (checkCitta) {
    citta.classList.add("bg-success-subtle", "border-success");
    citta.classList.remove("bg-danger-subtle", "border-danger");
    errorCitta.classList.add("d-none");
    correctCitta.classList.remove("d-none");
    flagCitta = true;
  } else {
    citta.classList.remove("bg-success-subtle", "border-success");
    citta.classList.add("bg-danger-subtle", "border-danger");
    errorCitta.classList.remove("d-none");
    correctCitta.classList.add("d-none");
  }

  // Provincia
  if (checkProvincia) {
    provincia.classList.add("bg-success-subtle", "border-success");
    provincia.classList.remove("bg-danger-subtle", "border-danger");
    errorProvincia.classList.add("d-none");
    correctProvincia.classList.remove("d-none");
    flagProvincia = true;
  } else {
    provincia.classList.remove("bg-success-subtle", "border-success");
    provincia.classList.add("bg-danger-subtle", "border-danger");
    errorProvincia.classList.remove("d-none");
    correctProvincia.classList.add("d-none");
  }

  // Telefono
  if (checkTel) {
    tel.classList.add("bg-success-subtle", "border-success");
    tel.classList.remove("bg-danger-subtle", "border-danger");
    errorTel.classList.add("d-none");
    correctTel.classList.remove("d-none");
    flagTel = true;
  } else {
    tel.classList.remove("bg-success-subtle", "border-success");
    tel.classList.add("bg-danger-subtle", "border-danger");
    errorTel.classList.remove("d-none");
    correctTel.classList.add("d-none");
  }

  if (checkEmail) {
    email.classList.add("bg-success-subtle", "border-success");
    email.classList.remove("bg-danger-subtle", "border-danger");
    errorEmail.classList.add("d-none");
    correctEmail.classList.remove("d-none");
    flagEmail = true;
  } else {
    email.classList.remove("bg-success-subtle", "border-success");
    email.classList.add("bg-danger-subtle", "border-danger");
    errorEmail.classList.remove("d-none");
    correctEmail.classList.add("d-none");
  }

  // Totale
  if (flagName && flagCognome && flagVia && flagCitta && flagProvincia && flagTel && flagEmail == true) {
    correctEnd.classList.remove("d-none");
    errorEnd.classList.add("d-none")
    let row = document.querySelector("#formPriv .row");
    let c1 = document.querySelector("#c1");
    let c2 = document.querySelector("#c2");
    row.remove();
    c1.remove();
    c2.remove();
  } else {
    errorEnd.classList.remove("d-none")
  }
}

// Check Richiesta Azienda
function checkFormAzie() {
  let azienda = document.querySelector("#azienda");
  let referente = document.querySelector("#referente");
  let email = document.querySelector("#emailAzie");
  let via = document.querySelector("#viaAzie");
  let citta = document.querySelector("#cittaAzie");
  let provincia = document.querySelector("#provAzie");
  let tel = document.querySelector("#telAzie");
  let quantita = document.querySelector("#quantita");
  let selectA = document.querySelector("#selectAzie");

  let patternAzienda = /^[a-zA-Z ]*[a-zA-Z ]$/;
  let patternReferente = /^[a-zA-Z ]*[a-zA-Z ]$/;
  let patternEmail = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let patternVia = /^[a-zA-Z0-9, ]*[a-zA-Z0-9, ]$/;
  let patternCitta = /^[a-zA-Z ]*[a-zA-Z ]$/;
  let patternProvincia = /^[a-zA-Z]*[a-zA-Z]$/;
  let patternTel = /^[0-9]{10}$/;

  let checkAzienda = patternAzienda.test(azienda.value);
  let checkReferente = patternReferente.test(referente.value);
  let checkEmail = patternEmail.test(email.value);
  let checkVia = patternVia.test(via.value);
  let checkCitta = patternCitta.test(citta.value);
  let checkProvincia = patternProvincia.test(provincia.value);
  let checkTel = patternTel.test(tel.value);

  // Text Error
  let errorAzienda = document.querySelector("#aziendaError");
  let errorReferente = document.querySelector("#referenteError");
  let errorEmail = document.querySelector("#emailAzieError");
  let errorVia = document.querySelector("#viaAzieError");
  let errorCitta = document.querySelector("#cittaAzieError");
  let errorProvincia = document.querySelector("#provinciaAzieError");
  let errorTel = document.querySelector("#telAzieError");
  let errorQuantita = document.querySelector("#quantitaError");
  let errorSelect = document.querySelector("#selectError");
  let errorEnd = document.querySelector("#endAzieError");

  // Text Correct
  let correctAzienda = document.querySelector("#aziendaCorrect");
  let correctReferente = document.querySelector("#referenteCorrect");
  let correctEmail = document.querySelector("#emailAzieCorrect");
  let correctVia = document.querySelector("#viaAzieCorrect");
  let correctCitta = document.querySelector("#cittaAzieCorrect");
  let correctProvincia = document.querySelector("#provinciaAzieCorrect");
  let correctTel = document.querySelector("#telAzieCorrect");
  let correctQuantita = document.querySelector("#quantitaCorrect");
  let correctSelect = document.querySelector("#selectCorrect");
  let correctEnd = document.querySelector("#endAzieCorrect");

  // Flag
  let flagAzienda = false;
  let flagReferente = false;
  let flagEmail = false;
  let flagVia = false;
  let flagCitta = false;
  let flagProvinvia = false;
  let flagTel = false;
  let flagQuantita = false;
  let flagSelect = false;

  // Azienda
  if (checkAzienda) {
    azienda.classList.add("bg-success-subtle", "border-success");
    azienda.classList.remove("bg-danger-subtle", "border-danger");
    errorAzienda.classList.add("d-none");
    correctAzienda.classList.remove("d-none");
    flagAzienda = true;
  } else {
    azienda.classList.remove("bg-success-subtle", "border-success");
    azienda.classList.add("bg-danger-subtle", "border-danger");
    errorAzienda.classList.remove("d-none");
    correctAzienda.classList.add("d-none");
  }

  // Referente
  if (checkReferente) {
    referente.classList.add("bg-success-subtle", "border-success");
    referente.classList.remove("bg-danger-subtle", "border-danger");
    errorReferente.classList.add("d-none");
    correctReferente.classList.remove("d-none");
    flagReferente = true;
  } else {
    referente.classList.remove("bg-success-subtle", "border-success");
    referente.classList.add("bg-danger-subtle", "border-danger");
    errorReferente.classList.remove("d-none");
    correctReferente.classList.add("d-none");
  }

  if (checkEmail) {
    email.classList.add("bg-success-subtle", "border-success");
    email.classList.remove("bg-danger-subtle", "border-danger");
    errorEmail.classList.add("d-none");
    correctEmail.classList.remove("d-none");
    flagEmail = true;
  } else {
    email.classList.remove("bg-success-subtle", "border-success");
    email.classList.add("bg-danger-subtle", "border-danger");
    errorEmail.classList.remove("d-none");
    correctEmail.classList.add("d-none");
  }

  // Indirizzo 
  if (checkVia) {
    via.classList.add("bg-success-subtle", "border-success");
    via.classList.remove("bg-danger-subtle", "border-danger");
    errorVia.classList.add("d-none");
    correctVia.classList.remove("d-none");
    flagVia = true;
  } else {
    via.classList.remove("bg-success-subtle", "border-success");
    via.classList.add("bg-danger-subtle", "border-danger");
    errorVia.classList.remove("d-none");
    correctVia.classList.add("d-none");
  }

  // Città
  if (checkCitta) {
    citta.classList.add("bg-success-subtle", "border-success");
    citta.classList.remove("bg-danger-subtle", "border-danger");
    errorCitta.classList.add("d-none");
    correctCitta.classList.remove("d-none");
    flagCitta = true;
  } else {
    citta.classList.remove("bg-success-subtle", "border-success");
    citta.classList.add("bg-danger-subtle", "border-danger");
    errorCitta.classList.remove("d-none");
    correctCitta.classList.add("d-none");
  }

  // Provincia
  if (checkProvincia) {
    provincia.classList.add("bg-success-subtle", "border-success");
    provincia.classList.remove("bg-danger-subtle", "border-danger");
    errorProvincia.classList.add("d-none");
    correctProvincia.classList.remove("d-none");
    flagProvinvia = true;
  } else {
    provincia.classList.remove("bg-success-subtle", "border-success");
    provincia.classList.add("bg-danger-subtle", "border-danger");
    errorProvincia.classList.remove("d-none");
    correctProvincia.classList.add("d-none");
  }

  if (checkTel) {
    tel.classList.add("bg-success-subtle", "border-success");
    tel.classList.remove("bg-danger-subtle", "border-danger");
    errorTel.classList.add("d-none");
    correctTel.classList.remove("d-none");
    flagTel = true;
  } else {
    tel.classList.remove("bg-success-subtle", "border-success");
    tel.classList.add("bg-danger-subtle", "border-danger");
    errorTel.classList.remove("d-none");
    correctTel.classList.add("d-none");
  }

  // Quantità
  if (quantita.value != "") {
    quantita.classList.add("bg-success-subtle", "border-success");
    quantita.classList.remove("bg-danger-subtle", "border-danger");
    errorQuantita.classList.add("d-none");
    correctQuantita.classList.remove("d-none");
    flagQuantita = true;
  } else {
    quantita.classList.remove("bg-success-subtle", "border-success");
    quantita.classList.add("bg-danger-subtle", "border-danger");
    errorQuantita.classList.remove("d-none");
    correctQuantita.classList.add("d-none");
  }

  // Settore
  if (selectA.value != 0) {
    selectA.classList.add("bg-success-subtle", "border-success");
    selectA.classList.remove("bg-danger-subtle", "border-danger");
    errorSelect.classList.add("d-none");
    correctSelect.classList.remove("d-none");
    flagSelect = true;
  } else {
    selectA.classList.remove("bg-success-subtle", "border-success");
    selectA.classList.add("bg-danger-subtle", "border-danger");
    errorSelect.classList.remove("d-none");
    correctSelect.classList.add("d-none");
  }

  if (flagAzienda && flagReferente && flagEmail && flagVia && flagCitta && flagProvinvia && flagTel && flagQuantita && flagSelect == true) {
    correctEnd.classList.remove("d-none");
    errorEnd.classList.add("d-none")
    let row = document.querySelector("#formAzie .row");
    let c1 = document.querySelector("#c1");
    let c2 = document.querySelector("#c2");
    row.remove();
    c1.remove();
    c2.remove();
  } else {
    errorEnd.classList.remove("d-none");
  }
}

// Auto fill Priv 
function autoFillPriv() {
  let nome = document.querySelector("#nome");
  let cognome = document.querySelector("#cognome");
  let via = document.querySelector("#via");
  let citta = document.querySelector("#citta");
  let provincia = document.querySelector("#provincia");
  let tel = document.querySelector("#tel");
  let email = document.querySelector("#emailPriv");

  nome.value = "Andrea";
  cognome.value = "De Laurentis";
  via.value = "Milano, 98";
  citta.value = "Vasto";
  provincia.value = "Chieti";
  tel.value = "3335287566";
  email.value = "andrea.prova@outlook.it"
}

// Auto fill Azienda
function autoFillAzie() {
  let azienda = document.querySelector("#azienda");
  let referente = document.querySelector("#referente");
  let email = document.querySelector("#emailAzie");
  let via = document.querySelector("#viaAzie");
  let citta = document.querySelector("#cittaAzie");
  let provincia = document.querySelector("#provAzie");
  let tel = document.querySelector("#telAzie");
  let quantita = document.querySelector("#quantita");
  let selectA = document.querySelector("#selectAzie");

  azienda.value = "Microsoft";
  referente.value = "Guglielmo Cancelli";
  email.value = "microsoft.boh@idk.com";
  via.value = "Chi Si Ricorda, 6E";
  citta.value = "San Diego";
  provincia.value = "Manatthan";
  tel.value = "1234567890";
  quantita.value = "2";
  selectA.value = "2"
}

// Check Newsletter
function verificyNewsletter() {
  let input = document.querySelector("#inputNews");
  let patternNews = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let checkNews = patternNews.test(input.value);
  let correct = document.querySelector("#correct");
  let incorrect = document.querySelector("#incorrect");

  if (checkNews) {
    input.classList.add("bg-success-subtle", "border-success");
    input.classList.remove("bg-danger-subtle", "border-danger");
    incorrect.classList.add("d-none");
    correct.classList.remove("d-none");
  } else {
    input.classList.remove("bg-success-subtle", "border-success");
    input.classList.add("bg-danger-subtle", "border-danger");
    incorrect.classList.remove("d-none");
    correct.classList.add("d-none");
  }
}