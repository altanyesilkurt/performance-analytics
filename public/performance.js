window.onload = function () {
  // FCP
  const paintEntries = window.performance.getEntriesByType("paint")[1];
  const navigationEntries = performance.getEntriesByType("navigation")[0];

    const URL = "https://performance-analytic.herokuapp.com/"
  // const URL = "http://localhost:3000"

  //TTFB
  const ttfb = navigationEntries.responseStart - navigationEntries.requestStart;

  // DOM lOAD 
  const domLoad = navigationEntries.domComplete - navigationEntries.domContentLoadedEventStart;

  // WINDOW LOAD 
  const windowLoadEvents = navigationEntries.loadEventStart - navigationEntries.loadEventEnd

  const siteName = window.location.href;

  const data = JSON.stringify({
    site: siteName,
    ttfb: ttfb,
    fcp: paintEntries && paintEntries.startTime || 0,
    domload: domLoad,
    windowLoadEvents: windowLoadEvents
  })
  fetch(URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  }).then(res => {
    console.log("Fetch data request completed! response:", res);
  });

}