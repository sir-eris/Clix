export const tokenConfig = (getState) => {
  const access_token =
    getState().authReducer.access || localStorage.getItem("access");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      // "X-CSRFToken": getCookie("csrftoken"),
    },
  };
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
};

// function getCookie(name) {
//   var cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     var cookies = document.cookie.split(";");
//     for (var i = 0; i < cookies.length; i++) {
//       var cookie = cookies[i].trim()
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }

//   return cookieValue;
// }