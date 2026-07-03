document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // ELEMENTS
    // ===============================

    const searchInput = document.querySelector(
        '.activity-card input[type="text"]'
    );

    const moduleSelect = document.querySelectorAll("select")[0];
    const userSelect = document.querySelectorAll("select")[1];
    const dateInput = document.querySelector('input[type="date"]');

    const filterBtn = document.querySelectorAll(".primary-btn")[0];
    const resetBtn = document.querySelector(".secondary-btn");
    const exportBtn = document.querySelectorAll(".primary-btn")[1];

    const tableBody = document.querySelector(".data-table tbody");
    const rows = [...tableBody.querySelectorAll("tr")];

    const totalActivities = document.querySelectorAll(".stat-card h2")[0];

    // ===============================
    // FILTER FUNCTION
    // ===============================

    function applyFilters() {

        const searchValue = searchInput.value
            .toLowerCase()
            .trim();

        const moduleValue = moduleSelect.value
            .toLowerCase();

        const userValue = userSelect.value
            .toLowerCase();

        const selectedDate = dateInput.value;

        let visibleCount = 0;

        rows.forEach(row => {

            const rowText = row.innerText.toLowerCase();

            const moduleText =
                row.cells[2].innerText.toLowerCase();

            const performedBy =
                row.cells[4].innerText.toLowerCase();

            const dateText =
                row.cells[1].innerText.split("\n")[0];

            let matchesSearch = true;
            let matchesModule = true;
            let matchesUser = true;
            let matchesDate = true;

            // Search Filter

            if (searchValue) {
                matchesSearch = rowText.includes(searchValue);
            }

            // Module Filter

            if (
                moduleValue !== "all modules"
            ) {
                matchesModule =
                    moduleText.includes(moduleValue);
            }

            // User Filter

            if (
                userValue !== "all users"
            ) {
                matchesUser =
                    performedBy.includes(userValue);
            }

            // Date Filter

            if (selectedDate) {

                const rowDate = convertRowDate(dateText);

                matchesDate =
                    rowDate === selectedDate;
            }

            const visible =
                matchesSearch &&
                matchesModule &&
                matchesUser &&
                matchesDate;

            row.style.display =
                visible ? "" : "none";

            if (visible) visibleCount++;
        });

        totalActivities.textContent = visibleCount;
        updatePaginationCount(visibleCount);
    }

    // ===============================
    // DATE CONVERTER
    // "30 May 2026" -> 2026-05-30
    // ===============================

    function convertRowDate(dateStr) {

        const months = {
            january: "01",
            february: "02",
            march: "03",
            april: "04",
            may: "05",
            june: "06",
            july: "07",
            august: "08",
            september: "09",
            october: "10",
            november: "11",
            december: "12"
        };

        const parts = dateStr.split(" ");

        const day = parts[0].padStart(2, "0");
        const month = months[
            parts[1].toLowerCase()
        ];
        const year = parts[2];

        return `${year}-${month}-${day}`;
    }

    // ===============================
    // UPDATE RECORD COUNT
    // ===============================

    function updatePaginationCount(count) {

        const paginationText =
            document.querySelector(
                ".pagination span"
            );

        paginationText.textContent =
            `Showing ${count === 0 ? 0 : 1} to ${count} of ${count} records`;
    }

    // ===============================
    // RESET FILTERS
    // ===============================

    function resetFilters() {

        searchInput.value = "";

        moduleSelect.selectedIndex = 0;

        userSelect.selectedIndex = 0;

        dateInput.value = "";

        rows.forEach(row => {
            row.style.display = "";
        });

        totalActivities.textContent = rows.length;

        updatePaginationCount(rows.length);
    }

    // ===============================
    // EXPORT CSV
    // ===============================

    function exportTable() {

        let csv = [];

        const headers = Array.from(
            document.querySelectorAll(
                ".data-table thead th"
            )
        ).slice(0, -1);

        csv.push(
            headers
                .map(th =>
                    `"${th.innerText.trim()}"`
                )
                .join(",")
        );

        rows.forEach(row => {

            if (
                row.style.display === "none"
            ) return;

            const cols = Array.from(
                row.querySelectorAll("td")
            ).slice(0, -1);

            const rowData = cols.map(td =>
                `"${td.innerText
                    .replace(/\n/g, " ")
                    .trim()}"`
            );

            csv.push(rowData.join(","));
        });

        const blob = new Blob(
            [csv.join("\n")],
            {
                type:
                "text/csv;charset=utf-8;"
            }
        );

        const link =
            document.createElement("a");

        const url =
            URL.createObjectURL(blob);

        link.href = url;
        link.download =
            "activity-logs.csv";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    // ===============================
    // VIEW BUTTON
    // ===============================

    const viewBtns =
        document.querySelectorAll(
            ".icon-btn"
        );

    viewBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            const row =
                btn.closest("tr");

            const details =
                row.cells[5].innerText;

            alert("Log Details:\n\n" + details);
        });
    });

    // ===============================
    // EVENTS
    // ===============================

    filterBtn.addEventListener(
        "click",
        applyFilters
    );

    resetBtn.addEventListener(
        "click",
        resetFilters
    );

    exportBtn.addEventListener(
        "click",
        exportTable
    );

    searchInput.addEventListener(
        "keyup",
        applyFilters
    );

    moduleSelect.addEventListener(
        "change",
        applyFilters
    );

    userSelect.addEventListener(
        "change",
        applyFilters
    );

    dateInput.addEventListener(
        "change",
        applyFilters
    );

    updatePaginationCount(rows.length);
});