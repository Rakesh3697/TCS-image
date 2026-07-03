document.addEventListener("DOMContentLoaded", function () {

    let selectedRow = null;

    const rows = document.querySelectorAll(".brand-row");

    // =========================
    // SEARCH ELEMENTS
    // =========================

    const searchInput = document.getElementById("searchInput");
    const tableSearch = document.getElementById("tableSearch");

    const industryFilter = document.getElementById("industryFilter");
    const statusFilter = document.getElementById("statusFilter");
    const countryFilter = document.getElementById("countryFilter");

    // =========================
    // FILTER FUNCTION
    // =========================

    function applyFilters() {

        const search =
            searchInput.value.toLowerCase();

        const industry =
            industryFilter.value;

        const status =
            statusFilter.value;

        const country =
            countryFilter.value;

        rows.forEach(function (row) {

            let show = true;

            const name =
                row.dataset.name.toLowerCase();

            const email =
                row.dataset.email.toLowerCase();

            if (
                search &&
                !name.includes(search) &&
                !email.includes(search)
            ) {
                show = false;
            }

            if (
                industry !== "all" &&
                row.dataset.industry !== industry
            ) {
                show = false;
            }

            if (
                status !== "all" &&
                row.dataset.status !== status
            ) {
                show = false;
            }

            if (
                country !== "all" &&
                row.dataset.country !== country
            ) {
                show = false;
            }

            row.style.display = show ? "" : "none";
        });
    }

    // =========================
    // SEARCH EVENTS
    // =========================

    if (searchInput && tableSearch) {

        searchInput.addEventListener("keyup", function () {
            tableSearch.value = searchInput.value;
            applyFilters();
        });

        tableSearch.addEventListener("keyup", function () {
            searchInput.value = tableSearch.value;
            applyFilters();
        });
    }

    // =========================
    // FILTER EVENTS
    // =========================

    industryFilter.addEventListener("change", applyFilters);
    statusFilter.addEventListener("change", applyFilters);
    countryFilter.addEventListener("change", applyFilters);

    // =========================
    // RESET
    // =========================

    document.getElementById("resetBtn")
        .addEventListener("click", function () {

            searchInput.value = "";
            tableSearch.value = "";

            industryFilter.value = "all";
            statusFilter.value = "all";
            countryFilter.value = "all";

            applyFilters();
        });

    // =========================
    // SELECT BRAND
    // =========================

    document.querySelectorAll(".select-brand")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                rows.forEach(function (row) {
                    row.classList.remove("selected");
                });

                selectedRow = this.closest("tr");

                selectedRow.classList.add("selected");

                document.getElementById("brandName").textContent =
                    selectedRow.dataset.name;

                document.getElementById("industryValue").textContent =
                    selectedRow.dataset.industry;

                document.getElementById("countryValue").textContent =
                    selectedRow.dataset.country;

                document.getElementById("emailValue").textContent =
                    selectedRow.dataset.email;

                document.getElementById("brandStatus").textContent =
                    selectedRow.dataset.status;

                console.log(
                    "Selected:",
                    selectedRow.dataset.name
                );
            });
        });

    // =========================
    // APPROVE
    // =========================

    document.getElementById("approveBtn")
        .addEventListener("click", function () {

            if (selectedRow === null) {
                alert("Please select a brand first.");
                return;
            }

            selectedRow.dataset.status = "Approved";

            const badge =
                selectedRow.querySelector(".badge");

            badge.className = "badge approved";
            badge.textContent = "Approved";

            document.getElementById("brandStatus")
                .textContent = "Approved";

            alert("Brand Approved");

            applyFilters();
        });

    // =========================
    // REJECT
    // =========================

    document.getElementById("rejectBtn")
        .addEventListener("click", function () {

            if (selectedRow === null) {
                alert("Please select a brand first.");
                return;
            }

            selectedRow.dataset.status = "Rejected";

            const badge =
                selectedRow.querySelector(".badge");

            badge.className = "badge rejected";
            badge.textContent = "Rejected";

            document.getElementById("brandStatus")
                .textContent = "Rejected";

            alert("Brand Rejected");

            applyFilters();
        });

});
document.addEventListener("DOMContentLoaded", function () {

    let selectedRow = null;

    const rows = document.querySelectorAll(".brand-row");

    // ==========================
    // SELECT BRAND
    // ==========================
    document.querySelectorAll(".select-brand").forEach(function (btn) {

        btn.addEventListener("click", function () {

            rows.forEach(function (row) {
                row.classList.remove("selected");
            });

            selectedRow = this.closest("tr");

            selectedRow.classList.add("selected");

            document.getElementById("brandName").textContent =
                selectedRow.dataset.name;

            document.getElementById("industryValue").textContent =
                selectedRow.dataset.industry;

            document.getElementById("countryValue").textContent =
                selectedRow.dataset.country;

            document.getElementById("emailValue").textContent =
                selectedRow.dataset.email;

            document.getElementById("brandStatus").textContent =
                selectedRow.dataset.status;
        });

    });

    // ==========================
    // APPROVE BRAND
    // ==========================
    document.getElementById("approveBtn").addEventListener("click", function () {

        if (!selectedRow) {
            alert("Select a brand first");
            return;
        }

        selectedRow.dataset.status = "Approved";

        const badge = selectedRow.querySelector(".badge");

        badge.classList.remove(
            "pending",
            "rejected",
            "review2"
        );

        badge.classList.add("approved");

        badge.textContent = "Approved";

        document.getElementById("brandStatus").textContent =
            "Approved";
    });

    // ==========================
    // REJECT BRAND
    // ==========================
    document.getElementById("rejectBtn").addEventListener("click", function () {

        if (!selectedRow) {
            alert("Select a brand first");
            return;
        }

        selectedRow.dataset.status = "Rejected";

        const badge = selectedRow.querySelector(".badge");

        badge.classList.remove(
            "pending",
            "approved",
            "review2"
        );

        badge.classList.add("rejected");

        badge.textContent = "Rejected";

        document.getElementById("brandStatus").textContent =
            "Rejected";
    });

});