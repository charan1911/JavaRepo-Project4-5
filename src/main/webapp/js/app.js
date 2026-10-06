// AURA Dashboard
// Frontend interactions


// --------------------------------
// NAVIGATION
// --------------------------------

const navItems =
    document.querySelectorAll("nav a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav =>
            nav.classList.remove("active")
        );

        item.classList.add("active");

    });

});


// --------------------------------
// QUICK ACTIONS
// --------------------------------

const actionButtons =
    document.querySelectorAll(".actions button");

actionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const originalText =
            button.innerText;

        button.innerText = "✓ Done";

        setTimeout(() => {

            button.innerText =
                originalText;

        }, 1200);

    });

});


// --------------------------------
// NOTIFICATION
// --------------------------------

const notification =
    document.querySelector(".notification");

const notificationButton =
    document.querySelector(".icon-button");

notificationButton.addEventListener(
    "click",
    () => {

        notification.style.display = "none";

        alert(
            "You have 3 new notifications."
        );

    }
);


// --------------------------------
// CHART SELECT
// --------------------------------

const chartSelect =
    document.getElementById("chartSelect");

chartSelect.addEventListener(
    "change",
    () => {

        const tooltip =
            document.querySelector(
                ".chart-tooltip strong"
            );

        if (
            chartSelect.value ===
            "Last 12 months"
        ) {

            tooltip.innerText =
                "$186,420";

        } else {

            tooltip.innerText =
                "$36,420";

        }

    }
);


// --------------------------------
// STAT CARD ANIMATION
// --------------------------------

const statNumbers =
    document.querySelectorAll(
        ".stat-card h2"
    );

statNumbers.forEach(number => {

    number.style.opacity = "0";

    number.style.transform =
        "translateY(8px)";

    setTimeout(() => {

        number.style.transition =
            "all .6s ease";

        number.style.opacity = "1";

        number.style.transform =
            "translateY(0)";

    }, 200);

});


// --------------------------------
// LIVE SYSTEM PULSE
// --------------------------------

setInterval(() => {

    const status =
        document.querySelector(".status");

    status.style.opacity =
        status.style.opacity === "0.3"
            ? "1"
            : "0.3";

}, 1000);
//----------
