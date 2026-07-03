document.addEventListener("DOMContentLoaded", () => {

    // ==================================
    // DUMMY DATA
    // ==================================

    const dashboardData = {
        users: [
            {
                name: "Rohit Gamer",
                role: "Player",
                date: "30 May 2026",
                status: "Verified"
            },
            {
                name: "Tech Blaze",
                role: "Influencer",
                date: "30 May 2026",
                status: "Pending"
            },
            {
                name: "RedBull Gaming",
                role: "Brand",
                date: "29 May 2026",
                status: "Approved"
            },
            {
                name: "ASUS ROG",
                role: "Brand",
                date: "29 May 2026",
                status: "Rejected"
            },
            {
                name: "GameX Arena",
                role: "Organizer",
                date: "28 May 2026",
                status: "Verified"
            }
        ],

        notifications: [
            "3 New User Verification Requests",
            "5 New Support Tickets",
            "Tournament Approval Pending"
        ],

        messages: [
            "Support Team Message",
            "Subscription Payment Issue",
            "New Brand Applied"
        ]
    };

    // ==================================
    // GLOBAL SEARCH
    // ==================================

    const searchInput = document.querySelector(
        ".search-box input"
    );

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value =
                this.value.toLowerCase();

            document
                .querySelectorAll("tbody tr")
                .forEach(row => {

                    const text =
                        row.textContent.toLowerCase();

                    row.style.display =
                        text.includes(value)
                            ? ""
                            : "none";
                });

        });
    }

    // ==================================
    // NOTIFICATIONS
    // ==================================

    const notificationButtons =
        document.querySelectorAll(".notification");

    if (notificationButtons.length > 0) {

        notificationButtons[0].addEventListener(
            "click",
            () => {

                alert(
                    dashboardData.notifications.join("\n")
                );
            }
        );
    }

    if (notificationButtons.length > 1) {

        notificationButtons[1].addEventListener(
            "click",
            () => {

                alert(
                    dashboardData.messages.join("\n")
                );
            }
        );
    }

    // ==================================
    // QUICK ACTIONS
    // ==================================

    document
        .querySelectorAll(".quick-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                alert(
                    button.innerText.trim() +
                    " module opened"
                );

            });

        });

    // ==================================
    // VIEW PENDING REQUESTS
    // ==================================

    const pendingButton =
        document.querySelector(".full-btn");

    if (pendingButton) {

        pendingButton.addEventListener(
            "click",
            () => {

                alert(
                    "Showing all pending verification requests"
                );

            }
        );
    }

    // ==================================
    // ADMIN PROFILE
    // ==================================

    const adminProfile =
        document.querySelector(
            ".admin-profile"
        );

    if (adminProfile) {

        adminProfile.addEventListener(
            "click",
            () => {

                alert(
                    "Admin Profile Settings"
                );

            }
        );
    }

    // ==================================
    // LOGOUT
    // ==================================

    const menuLinks =
        document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {

        if (
            link.textContent
                .trim()
                .toLowerCase() === "logout"
        ) {
            link.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    const logout =
                        confirm(
                            "Do you want to logout?"
                        );

                    if (logout) {

                        alert("Logged Out");

                    }
                }
            );
        }
    });

    // ==================================
    // LIVE TIME
    // ==================================

    const pageHeader =
        document.querySelector(".page-header");

    if (pageHeader) {

        const clock =
            document.createElement("div");

        clock.id = "liveClock";

        clock.style.marginTop = "10px";
        clock.style.fontWeight = "600";

        pageHeader.appendChild(clock);

        setInterval(() => {

            clock.innerHTML =
                "Current Time : " +
                new Date().toLocaleString();

        }, 1000);

    }

    // ==================================
    // DYNAMIC STATISTICS
    // ==================================

    const statValues =
        document.querySelectorAll(
            ".dashboard-stats .stat-card h2"
        );

    function updateStats() {

        if (statValues.length >= 7) {

            statValues[0].innerText =
                (24850 +
                 randomNumber(1, 20))
                .toLocaleString();

            statValues[1].innerText =
                (8932 +
                 randomNumber(1, 10))
                .toLocaleString();

            statValues[2].innerText =
                (1256 +
                 randomNumber(1, 5))
                .toLocaleString();

            statValues[3].innerText =
                (632 +
                 randomNumber(1, 3))
                .toLocaleString();

            statValues[4].innerText =
                (3421 +
                 randomNumber(1, 5))
                .toLocaleString();

            statValues[5].innerText =
                "₹" +
                (
                    48250 +
                    randomNumber(100, 500)
                ).toLocaleString();

            statValues[6].innerText =
                128 -
                randomNumber(0, 5);

        }
    }

    setInterval(updateStats, 10000);

    // ==================================
    // RECENT ACTIVITY AUTO UPDATE
    // ==================================

    const activities = [
        "New Player Registered",
        "Influencer Verified",
        "Brand Approved",
        "Subscription Purchased",
        "Tournament Created",
        "Report Generated",
        "Verification Approved"
    ];

    const activityList =
        document.querySelector(
            ".activity-list"
        );

    function addActivity() {

        if (!activityList) return;

        const activity =
            document.createElement("div");

        activity.className =
            "activity-item";

        activity.innerHTML = `
            <i class="ri-checkbox-circle-fill success-icon"></i>
            <div>
                <h4>${activities[randomNumber(0, activities.length - 1)]}</h4>
                <p>System Generated Activity</p>
            </div>
            <span>Just Now</span>
        `;

        activityList.prepend(activity);

        if (
            activityList.children.length > 10
        ) {
            activityList.lastElementChild.remove();
        }
    }

    setInterval(addActivity, 15000);

    // ==================================
    // SELECT FILTERS
    // ==================================

    document
        .querySelectorAll("select")
        .forEach(select => {

            select.addEventListener(
                "change",
                () => {

                    console.log(
                        "Filter Changed:",
                        select.value
                    );

                }
            );

        });

    // ==================================
    // LOCAL STORAGE
    // ==================================

    document
        .querySelectorAll("select")
        .forEach((select, index) => {

            const key =
                "dashboardFilter" + index;

            const saved =
                localStorage.getItem(key);

            if (saved) {
                select.value = saved;
            }

            select.addEventListener(
                "change",
                () => {

                    localStorage.setItem(
                        key,
                        select.value
                    );

                }
            );

        });

    // ==================================
    // RANDOM NUMBER
    // ==================================

    function randomNumber(min, max) {

        return (
            Math.floor(
                Math.random() *
                (max - min + 1)
            ) + min
        );
    }

    // ==================================
    // AUTO NOTIFICATION COUNT UPDATE
    // ==================================

    setInterval(() => {

        const badge =
            document.querySelector(
                ".notification span"
            );

        if (badge) {

            badge.innerText =
                randomNumber(1, 20);

        }

    }, 20000);

    console.log(
        "GameVerse Dashboard Ready"
    );
});

document.addEventListener("DOMContentLoaded", function () {

    // Platform Overview

    new Chart(
        document.getElementById("platformOverviewChart"),
        {
            type: "line",
            data: {
                labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
                datasets: [
                    {
                        label: "Users",
                        data: [18000,19000,20500,21500,22500,23800,24850],
                        borderColor: "#7c3aed",
                        backgroundColor: "rgba(124,58,237,0.2)",
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: "Players",
                        data: [6500,6900,7200,7500,8000,8500,8932],
                        borderColor: "#06b6d4",
                        backgroundColor: "rgba(6,182,212,0.2)",
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    );

    // User Distribution

    new Chart(
        document.getElementById("userDistributionChart"),
        {
            type: "doughnut",
            data: {
                labels: [
                    "Users",
                    "Players",
                    "Influencers",
                    "Brands",
                    "Organizers"
                ],
                datasets: [{
                    data: [
                        24850,
                        8932,
                        1256,
                        632,
                        3421
                    ],
                    backgroundColor: [
                        "#7c3aed",
                        "#06b6d4",
                        "#3b82f6",
                        "#10b981",
                        "#f97316"
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    );

    // Revenue Chart

    new Chart(
        document.getElementById("revenueChart"),
        {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],
                datasets: [{
                    label: "Revenue ₹",
                    data: [
                        25000,
                        30000,
                        34000,
                        38000,
                        42000,
                        48250
                    ],
                    backgroundColor: "#10b981"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    );

    // User Growth

    new Chart(
        document.getElementById("userGrowthChart"),
        {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],
                datasets: [{
                    label: "User Growth",
                    data: [
                        3000,
                        5000,
                        8000,
                        13000,
                        19000,
                        24850
                    ],
                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37,99,235,0.2)",
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    );

    // Revenue Source

    new Chart(
        document.getElementById("revenueSourceChart"),
        {
            type: "pie",
            data: {
                labels: [
                    "Premium Subscription",
                    "Tournament Entry",
                    "Brand Promotion",
                    "Advertisements"
                ],
                datasets: [{
                    data: [
                        325000,
                        145000,
                        82000,
                        30100
                    ],
                    backgroundColor: [
                        "#7c3aed",
                        "#06b6d4",
                        "#10b981",
                        "#f59e0b"
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    );

});

