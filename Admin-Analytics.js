document.addEventListener("DOMContentLoaded", () => {

    console.log("Analytics Dashboard Loaded");

    // ====================================
    // USER GROWTH DATA
    // ====================================

    const growthData = {
        6: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            values: [1200, 1800, 2600, 3500, 4700, 5742]
        },

        12: {
            labels: [
                "Jul", "Aug", "Sep", "Oct",
                "Nov", "Dec", "Jan", "Feb",
                "Mar", "Apr", "May", "Jun"
            ],
            values: [
                500, 700, 900, 1200,
                1600, 2100, 2600, 3200,
                4000, 4700, 5200, 5742
            ]
        }
    };

    // ====================================
    // USER GROWTH CHART
    // ====================================

    const growthCanvas =
        document.getElementById("userGrowthChart");

    let growthChart = null;

    if (growthCanvas) {

        growthChart = new Chart(growthCanvas, {
            type: "line",

            data: {
                labels: growthData[6].labels,

                datasets: [{
                    label: "Total Users",

                    data: growthData[6].values,

                    borderColor: "#7C3AED",

                    backgroundColor:
                        "rgba(124,58,237,0.2)",

                    fill: true,

                    tension: 0.4,

                    pointRadius: 5,

                    pointBackgroundColor: "#7C3AED"
                }]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        labels: {
                            color: "#ffffff"
                        }
                    }
                },

                scales: {
                    x: {
                        ticks: {
                            color: "#ffffff"
                        },
                        grid: {
                            color: "#334155"
                        }
                    },

                    y: {
                        ticks: {
                            color: "#ffffff"
                        },
                        grid: {
                            color: "#334155"
                        }
                    }
                }
            }
        });
    }

    // ====================================
    // GROWTH FILTER
    // ====================================

    const growthFilter =
        document.getElementById("growthFilter");

    if (growthFilter && growthChart) {

        growthFilter.addEventListener("change", function () {

            const selected =
                this.value;

            growthChart.data.labels =
                growthData[selected].labels;

            growthChart.data.datasets[0].data =
                growthData[selected].values;

            growthChart.update();
        });
    }

    // ====================================
    // TOURNAMENT CHART
    // ====================================

    const tournamentCanvas =
        document.getElementById(
            "tournamentChart"
        );

    if (tournamentCanvas) {

        new Chart(tournamentCanvas, {

            type: "doughnut",

            data: {

                labels: [
                    "Completed",
                    "Active",
                    "Cancelled"
                ],

                datasets: [{
                    data: [318, 76, 27],

                    backgroundColor: [
                        "#22C55E",
                        "#06B6D4",
                        "#EF4444"
                    ],

                    borderWidth: 0
                }]
            },

            options: {

                responsive: true,

                plugins: {
                    legend: {
                        labels: {
                            color: "#ffffff"
                        }
                    }
                }
            }
        });
    }

    // ====================================
    // SUBSCRIPTION CHART
    // ====================================

    const subscriptionCanvas =
        document.getElementById(
            "subscriptionChart"
        );

    if (subscriptionCanvas) {

        new Chart(subscriptionCanvas, {

            type: "pie",

            data: {

                labels: [
                    "Basic Users",
                    "Premium Users"
                ],

                datasets: [{
                    data: [
                        3984,
                        1758
                    ],

                    backgroundColor: [
                        "#7C3AED",
                        "#06B6D4"
                    ],

                    borderWidth: 0
                }]
            },

            options: {

                responsive: true,

                plugins: {
                    legend: {
                        labels: {
                            color: "#ffffff"
                        }
                    }
                }
            }
        });
    }

    // ====================================
    // PLATFORM DISTRIBUTION CHART
    // ====================================

    const platformCanvas =
        document.getElementById(
            "platformChart"
        );

    if (platformCanvas) {

        new Chart(platformCanvas, {

            type: "doughnut",

            data: {

                labels: [
                    "Users",
                    "Influencers",
                    "Brands",
                    "Organisers"
                ],

                datasets: [{
                    data: [
                        5742,
                        1156,
                        632,
                        421
                    ],

                    backgroundColor: [
                        "#7C3AED",
                        "#06B6D4",
                        "#22C55E",
                        "#F59E0B"
                    ],

                    borderWidth: 0
                }]
            },

            options: {

                responsive: true,

                plugins: {
                    legend: {
                        labels: {
                            color: "#ffffff"
                        }
                    }
                }
            }
        });
    }

    // ====================================
    // GLOBAL SEARCH
    // ====================================

    const searchInput =
        document.getElementById(
            "globalSearch"
        );

    if (searchInput) {

        searchInput.addEventListener(
            "keyup",
            function () {

                const value =
                    this.value
                        .toLowerCase()
                        .trim();

                const items =
                    document.querySelectorAll(
                        ".activity-item"
                    );

                items.forEach(item => {

                    const content =
                        item.innerText
                            .toLowerCase();

                    if (
                        content.includes(value)
                    ) {
                        item.style.display =
                            "flex";
                    }
                    else {
                        item.style.display =
                            "none";
                    }
                });

            }
        );
    }

    // ====================================
    // VERIFICATION FILTER
    // ====================================

    const verificationFilter =
        document.getElementById(
            "verificationFilter"
        );

    if (verificationFilter) {

        verificationFilter.addEventListener(
            "change",
            function () {

                const bars =
                    document.querySelectorAll(
                        ".progress-bar"
                    );

                const percentages =
                    document.querySelectorAll(
                        ".progress-top span:last-child"
                    );

                if (
                    this.value === "last"
                ) {

                    bars[0].style.width =
                        "88%";

                    bars[1].style.width =
                        "76%";

                    bars[2].style.width =
                        "70%";

                    percentages[0].textContent =
                        "88%";

                    percentages[1].textContent =
                        "76%";

                    percentages[2].textContent =
                        "70%";
                }
                else {

                    bars[0].style.width =
                        "92%";

                    bars[1].style.width =
                        "81%";

                    bars[2].style.width =
                        "75%";

                    percentages[0].textContent =
                        "92%";

                    percentages[1].textContent =
                        "81%";

                    percentages[2].textContent =
                        "75%";
                }

            }
        );
    }

    // ====================================
    // NOTIFICATION BUTTONS
    // ====================================

    const notifications =
        document.querySelectorAll(
            ".notification"
        );

    notifications.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                alert(
                    "No new notifications available."
                );

            }
        );

    });

    // ====================================
    // VIEW ALL BUTTONS
    // ====================================

    const allButtons =
        document.querySelectorAll(
            ".secondary-btn"
        );

    allButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                console.log(
                    this.innerText
                );

            }
        );

    });

    // ====================================
    // ACTIVITY ITEM CLICK
    // ====================================

    const activityItems =
        document.querySelectorAll(
            ".activity-item"
        );

    activityItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const title =
                    item.querySelector(
                        "h4"
                    ).innerText;

                alert(
                    "Selected Activity:\n\n" +
                    title
                );

            }
        );

    });

    // ====================================
    // STAT CARD ANIMATION
    // ====================================

    const statCards =
        document.querySelectorAll(
            ".stat-card"
        );

    statCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "translateY(-8px)";
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0)";
            }
        );
    });

    // ====================================
    // LIVE CLOCK IN PAGE TITLE (OPTIONAL)
    // ====================================

    const pageTitle =
        document.querySelector(
            ".page-header h1"
        );

    if (pageTitle) {

        setInterval(() => {

            const date =
                new Date();

            document.title =
                "Analytics | " +
                date.toLocaleTimeString();

        }, 1000);

    }

});