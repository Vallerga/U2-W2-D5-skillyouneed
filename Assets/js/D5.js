const changeTheme = (event) => {
    const body = document.querySelector("body");
  const button = document.querySelector(".mainButton");
  if (body.classList == 'light') {
    body.classList.add('dark');
    body.classList.remove('light');
    console.log("true");
  } else {
    body.classList.add('light');
    body.classList.remove('dark');
    console.log("false");
  }
  console.log("eseguito")
};
