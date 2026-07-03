
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("reportSearch");
    const reportCards = document.querySelectorAll(".report-card");

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        let visibleCount = 0;

        reportCards.forEach(function (card) {

            const cardContent = card.textContent.toLowerCase();

            if (cardContent.includes(searchText)) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        // Show message when no reports found
        const existingMessage = document.getElementById("noReportMessage");

        if (visibleCount === 0) {

            if (!existingMessage) {

                const msg = document.createElement("div");
                msg.id = "noReportMessage";
                msg.innerHTML = `
                    <div style="
                        background:#1F2937;
                        color:white;
                        text-align:center;
                        padding:25px;
                        border-radius:12px;
                        border:1px solid #334155;
                        margin-top:20px;
                    ">
                        <h3>No Reports Found</h3>
                        <p>Try another search keyword.</p>
                    </div>
                `;

                document.querySelector(".main-content").appendChild(msg);
            }

        } else {

            if (existingMessage) {
                existingMessage.remove();
            }

        }

    });

});