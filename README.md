let selectedRow = null;

// Select Brand

document.querySelectorAll(".select-brand").forEach(button => {

    button.addEventListener("click", function () {

        selectedRow = this.closest("tr");

        document.getElementById("brandName").innerText =
            selectedRow.dataset.name;

        document.getElementById("industryValue").innerText =
            selectedRow.dataset.industry;

        document.getElementById("countryValue").innerText =
            selectedRow.dataset.country;

        document.getElementById("emailValue").innerText =
            selectedRow.dataset.email;

        document.getElementById("brandStatus").innerText =
            selectedRow.dataset.status;

    });

});


// Approve Button

document.getElementById("approveBtn").addEventListener("click", function () {

    if (!selectedRow) {

        alert("Please select a brand.");

        return;

    }

    selectedRow.dataset.status = "Approved";

    let badge = selectedRow.querySelector(".badge");

    badge.innerText = "Approved";

    badge.className = "badge approved";

    document.getElementById("brandStatus").innerText = "Approved";

    updateCounts();

});


// Reject Button

document.getElementById("rejectBtn").addEventListener("click", function () {

    if (!selectedRow) {

        alert("Please select a brand.");

        return;

    }

    selectedRow.dataset.status = "Rejected";

    let badge = selectedRow.querySelector(".badge");

    badge.innerText = "Rejected";

    badge.className = "badge rejected";

    document.getElementById("brandStatus").innerText = "Rejected";

    updateCounts();

});


// Update Dashboard Counts

function updateCounts() {

    let pending = 0;
    let approved = 0;
    let rejected = 0;
    let review = 0;

    document.querySelectorAll(".brand-row").forEach(row => {

        switch (row.dataset.status) {

            case "Pending":
                pending++;
                break;

            case "Approved":
                approved++;
                break;

            case "Rejected":
                rejected++;
                break;

            case "Under Review":
                review++;
                break;

        }

    });

    document.getElementById("pendingCount").innerText = pending;

    document.getElementById("approvedCount").innerText = approved;

    document.getElementById("rejectedCount").innerText = rejected;

    document.getElementById("reviewCount").innerText = review;

}


<span id="brandStatus" class="badge pending">Pending</span>



