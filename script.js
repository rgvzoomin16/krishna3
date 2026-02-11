const wishBtn = document.getElementById("wishBtn");
const promiseText = document.getElementById("promiseText");
const page = document.getElementById("page");

wishBtn?.addEventListener("click", () => {
  promiseText?.classList.toggle("show");
  promiseText?.classList.remove("hidden");

  page?.animate(
    [
      { transform: "translateY(0)", filter: "brightness(1)" },
      { transform: "translateY(-4px)", filter: "brightness(1.08)" },
      { transform: "translateY(0)", filter: "brightness(1)" },
    ],
    {
      duration: 650,
      easing: "ease-out",
    }
  );

  wishBtn.textContent = promiseText?.classList.contains("show")
    ? "Keep This Promise"
    : "Open My Promise";
});
