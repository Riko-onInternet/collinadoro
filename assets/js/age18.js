// Modal Age
let box = document.querySelector("#age18");
function openModal() {
  let underDiv = document.createElement("div");
  document.body.classList.add("modal-open", "overflow-hidden", "pe-0");
  box.classList.add("show", "d-block", "cursor-no");
  document.body.appendChild(underDiv);
  underDiv.classList.add("modal-backdrop", "fade", "show");

}
function closeModal() {
  document.body.classList.remove("modal-open", "overflow-hidden", "pe-0");
  box.classList.remove("show", "d-block", "cursor-no");
  document.body.lastElementChild.remove();
}
function directGoogle() {
  window.location = 'https://google.com';
}
setTimeout(openModal, 2000);