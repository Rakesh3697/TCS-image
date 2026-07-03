/* ==========================================
   GAMEVERSE ADMIN SYSTEM STATUS JS
========================================== */

/* ========= SEARCH FUNCTION ========= */


document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search-box input");

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        // Search all cards, alerts and table rows
        const searchableElements = document.querySelectorAll(
            ".stat-card, .alert-item, tbody tr, .quick-stat"
        );

        searchableElements.forEach(item => {

            const text = item.textContent.toLowerCase();

            if (text.includes(value)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

});


/* ========= LIVE TIME ========= */

function updateLastUpdated() {

    const updateText = document.querySelector(
        ".status-card .table-header span"
    );

    if (updateText) {

        const now = new Date();

        updateText.textContent =
            "Last Updated : " +
            now.toLocaleTimeString();

    }

}

updateLastUpdated();

setInterval(updateLastUpdated, 60000);


/* ========= RANDOM RESOURCE UPDATE DEMO ========= */

function updateResources() {

    const cpu = Math.floor(Math.random() * 40) + 20;
    const ram = Math.floor(Math.random() * 30) + 40;
    const disk = Math.floor(Math.random() * 20) + 30;
    const network = Math.floor(Math.random() * 30) + 10;

    const bars = document.querySelectorAll(".progress-bar");
    const values = [cpu, ram, disk, network];

    bars.forEach((bar, index) => {

        bar.style.width = values[index] + "%";

        const valueElement =
            bar.closest(".resource-item")
               .querySelector("strong");

        valueElement.textContent = values[index] + "%";

    });

}

setInterval(updateResources, 10000);
/* ==========================================
   UPTIME HISTORY CHART
========================================== */

const ctx = document.getElementById("uptimeChart");

if (ctx) {

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [{

                label: "Uptime %",

                data: [
                    99.96,
                    99.97,
                    99.98,
                    99.99,
                    99.95,
                    99.99,
                    99.98
                ],

                borderColor: "#7C3AED",

                backgroundColor:
                    "rgba(124,58,237,0.2)",

                fill: true,

                tension: 0.4

            }]
        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {
                        color: "#fff"
                    }

                }

            },

            scales: {

                x: {

                    ticks: {
                        color: "#94A3B8"
                    }

                },

                y: {

                    min: 99.9,

                    max: 100,

                    ticks: {
                        color: "#94A3B8"
                    }

                }

            }

        }

    });

}