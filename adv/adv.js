document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        const setButtonData = button.getAttribute("data-target");
        const getDivId = document.getElementById(setButtonData);

        getDivId.style.display =
        getDivId.style.display === "block" ? "none" : "block";
    });
});