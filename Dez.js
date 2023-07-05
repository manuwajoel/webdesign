// (The javascript 😉)

        // Function to toggle between light and dark mode
        function toggleMode() {
            const body = document.body;
            body.classList.toggle("dark-mode");

            // Update button text
            const btn = document.getElementById("modeBtn");
            if (body.classList.contains("dark-mode")) {
                btn.textContent = "Light Mode";
            } else {
                btn.textContent = "Dark Mode";
            }
        }

        // to attach click event listener to the button
        const modeBtn = document.getElementById("modeBtn");
        modeBtn.addEventListener("click", toggleMode);