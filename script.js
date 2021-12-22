function buttonClicked() {
    switch (button.innerHTML) {
        case "Show Password":
            button.innerHTML = "Hide Password";
            input.setAttribute("type", "text");
            break;
        case "Hide Password":
            button.innerHTML = "Show Password";
            input.setAttribute("type", "password");
            break;
    }
}

const button = document.querySelector("button");
button.addEventListener("click", buttonClicked);

const input = document.querySelector("input");