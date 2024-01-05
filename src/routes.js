const route = (event) => {
  event = event || window.event;
  event.prefentDefault();
  window.history.pushState({}, "", event.target.href);
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/layanankami": "pages/layanankami.html",
  "/sewamobil": "/pages/sewamobil.html",
  "/sewamotor": "/pages/sewamotor.html",
  "/tentangkami": "/pages/aboutus.html",
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
