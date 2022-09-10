const search = document.querySelector(".search");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".time");
const value = document.querySelector(".value");
const shortDesc = document.querySelector(".short-desc");
const visibility = document.querySelector(".visibility div");
const wind = document.querySelector(".wind div");
const cloud = document.querySelector(".cloud div");
const input = document.querySelector("input");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const weather = document.querySelector("#weather");
async function changeWeatheUI(capitalSearch) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "(m/s)";
    cloud.innerText = data.main.humidity;
    let temp = Math.round(data.main.temp);
    value.innerText = temp + "°C";
    shortDesc.innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString("vi");
    content.classList.remove("hiden");
    console.log(temp);
    if (temp > 25) {
      body.style.background =
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(https://www.nodemy.vn/projects/html-css-js/weather-app/hot.png) no-repeat center/cover";
      weather.style.background =
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://www.nodemy.vn/projects/html-css-js/weather-app/hot.png) no-repeat center/cover";
    } else if (temp < 22) {
      body.style.background =
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(https://www.familynursingcare.com/wp-content/uploads/2021/06/1-min-1024x576.png) no-repeat center/cover";
      weather.style.background =
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://www.familynursingcare.com/wp-content/uploads/2021/06/1-min-1024x576.png) no-repeat center/cover";
    }
    if (temp < 20) {
      body.style.background =
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8&w=1000&q=80) no-repeat center/cover";
      weather.style.background =
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8&w=1000&q=80) no-repeat center/cover";
    }
  } else {
    content.classList.add("hiden");
  }
}
search.onkeydown = function (e) {
  if (e.which == 13) {
    changeWeatheUI(input.value);
  }
};
changeWeatheUI("ho chi minh");
