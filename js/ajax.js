const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  console.log(this.responseText);
  const navbar = document.querySelector("#navbar");
  navbar.innerHTML = this.responseText;
};

xhr.open("GET", "/navbar.html", true);

xhr.send();

const footer = new XMLHttpRequest();

footer.onreadystatechange = function () {
  const foot = document.querySelector("#footer");
  foot.innerHTML = this.responseText;
};

footer.open("GET", "/footer.html", true);
footer.send();
