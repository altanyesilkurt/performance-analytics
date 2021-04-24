# performance-analytics
  - I created a virtual machion on google cloud server and I create a  database on Postgres by using docker container.
	(docker run --name [container_name] -e POSTGRES_PASSWORD=[your_password] -d postgres)
  - I used react-svg-line-chart to show performance values.
  - I write test code by using enzyme and enzyme-adapter-react-16 on client side. 
  - I used window-performance built-in functions to mesaure performace issues.
  - I used scss for styling especially for responsiveness on client side.
  - I used express.js for api connection
  - Demo page has <script src="https://performance-analytic.herokuapp.com/static/performance.js"></script> in index.html
	I put in it for demonstrate the mesauring
# How can I test the system ?

  - Firstly, You should open https://legend-travel.netlify.app/  page which is dummy page for test
  - Then, You should open https://perfanalytic-dashboard.netlify.app/  page which shows dashboard of the performance metrics
  - You will see the chart take new point by refresh each page 
