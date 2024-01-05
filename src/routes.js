const route = (event) => {
  event = event || window.event;
  event.prefentDefault();
  window.history.pushState({}, "", event.target.href);
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/layanankami": "/html/layanankami.html",
  "/sewamobil": "/html/sewamobil.html",
  "/sewamotor": "/html/sewamotor.html",
  "/tentangkami": "/html/aboutus.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = routes;

handleLocation();
