const btn = document.querySelector("button");
const close = document.querySelector(".close");
const hidden = document.querySelector(".hidden");
const show = document.querySelector(".show");
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  hidden.classList.add("hidden");
  hidden.style.display = "flex";
  show.style.display = "none";
  btn.style.display = "none";
  ul.style.display = "none";
});

close.addEventListener("click", () => {
  hidden.style.display = "none";
  show.style.display = "block";
  btn.style.display = "block";
  ul.style.display = "flex";
});

function updateTime() {
  const currentTime = new Date();
  const currentUTCTime = currentTime.toUTCString();

  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = ` Time : ${currentUTCTime}`;
}

updateTime();
setInterval(updateTime, 1000);
