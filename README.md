<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Brand Verification | Gaming Admin</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Remix Icons -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet">

    <link rel="stylesheet" href="Admin-Brand-Verification.css">

</head>

<body>

<div class="dashboard">

     <!-- ========================= -->
    <!-- SIDEBAR -->
    <!-- ========================= -->

    <aside class="sidebar">

    <div class="logo">

        <div class="logo-icon">🎮</div>

        <div>

            <h2>GAMEVERSE</h2>

            <span>Admin Panel</span>

        </div>

    </div>

    <ul class="menu">

        <li >
            <!-- Change active class for each page -->
            <a href="Admin-Dashboard.html">
                <i class="ri-dashboard-line"></i>
                Dashboard
            </a>
        </li>

        <li>
            <a href="Admin-User-Verification.html">
                <i class="ri-user-search-line"></i>
                User Verification
            </a>
        </li>

        <li>
            <a href="Admin-Influencer-Verification.html">
                <i class="ri-user-star-line"></i>
                Influencer Verification
            </a>
        </li>

        <li>
            <a href="Admin-Brand-Verification.html">
                <i class="ri-building-line"></i>
                Brand Verification
            </a>
        </li>

        <li>
            <a href="Admin-Tournament.html">
                <i class="ri-trophy-line"></i>
                Tournament Management
            </a>
        </li>

        <li>
            <a href="Admin-subcriptions.html">
                <i class="ri-vip-crown-line"></i>
                Subscription Management
            </a>
        </li>

        <li>
            <a href="Admin-Report.html">
                <i class="ri-file-chart-line"></i>
                Reports
            </a>
        </li>

        <li>
            <a href="Admin-Analytics.html">
                <i class="ri-bar-chart-box-line"></i>
                Analytics
            </a>
        </li>

        <li>
            <a href="Admin-Settings.html">
                <i class="ri-settings-3-line"></i>
                Settings
            </a>
        </li>

        <li>
            <a href="Admin-activity-logs.html">
                <i class="ri-history-line"></i>
                Activity Logs
            </a>
        </li>

        <li>
            <a href="Admin-System-logs.html">
                <i class="ri-server-line"></i>
                System Status
            </a>
        </li>

        <li>
            <a href="Admin-support-tickets.html">
                <i class="ri-customer-service-2-line"></i>
                Support Tickets
            </a>
        </li>

        <li>
            <a href="#">
                <i class="ri-logout-box-r-line"></i>
                Logout
            </a>
        </li>

    </ul>

</aside>
    <!-- ========================= -->
    <!-- MAIN CONTENT -->
    <!-- ========================= -->

    <main class="main-content">

        <!-- TOP NAVBAR -->

        <header class="topbar">

            <div class="search-box">

                <i class="ri-search-line"></i>

               <input
    id="searchInput"
    type="text"
    placeholder="Search by brand, company or email">
            </div>

            <div class="top-right">

                <button class="notification">

                    <i class="ri-notification-3-line"></i>

                </button>

                <button class="notification">

                    <i class="ri-message-3-line"></i>

                </button>

                <div class="admin-profile">

                    <img src="https://i.pravatar.cc/100?img=12" alt="Admin">

                    <div>

                        <h4>Admin User</h4>

                        <span>Super Admin</span>

                    </div>

                    <i class="ri-arrow-down-s-line"></i>

                </div>

            </div>

        </header>

        <!-- PAGE HEADER -->

        <section class="page-header">

            <div>

                <h1>Brand Verification</h1>

                
            </div>

        </section>

        <!-- ========================= -->
        <!-- STATISTICS CARDS -->
        <!-- ========================= -->

        <section class="stats-grid">

            <div class="stat-card">

                <div class="icon purple">

                    <i class="ri-building-line"></i>

                </div>

                <h5>All Brands</h5>

<h2 id="allBrands">1842</h2>

                <span>100%</span>

            </div>

            <div class="stat-card">

                <div class="icon orange">

                    <i class="ri-time-line"></i>

                </div>

                <h5>Pending</h5>

                <h2 id="pendingCount">156</h2>

                <span>8.47%</span>

            </div>

            <div class="stat-card">

                <div class="icon yellow">

                    <i class="ri-loader-4-line"></i>

                </div>

                <h5>Under Review</h5>

                <h2 id="reviewCount">278</h2>

                <span>15.09%</span>

            </div>

            <div class="stat-card">

                <div class="icon green">

                    <i class="ri-checkbox-circle-line"></i>

                </div>

                <h5>Approved</h5>

                <h2 id="approvedCount">1312</h2>

                <span>71.20%</span>

            </div>

            <div class="stat-card">

                <div class="icon red">

                    <i class="ri-close-circle-line"></i>

                </div>

                <h5>Rejected</h5>

               <h2 id="rejectedCount">96</h2>

                <span>5.21%</span>

            </div>

        </section>

        <!-- ========================= -->
        <!-- PART 2 STARTS HERE -->
        <!-- ========================= -->


<!-- ========================================= -->
        <!-- FILTER SECTION -->
        <!-- ========================================= -->

        <section class="filter-card">

            <div class="filter-top">

                <div class="table-search">

                    <i class="ri-search-line"></i>

                    <input
    id="tableSearch"
    type="text"
    placeholder="Search by brand, company or email">
                </div>

                <div class="filters">

                    <select id="industryFilter">
    <option value="all">Industry</option>
                        <option>All</option>
                        <option>Gaming Hardware</option>
                        <option>Technology</option>
                        <option>Beverages</option>
                        <option>Accessories</option>
                    </select>

                    <select id="statusFilter">
    <option value="all">Verification Status</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                        <option>Under Review</option>
                    </select>

                    <select id="countryFilter">
    <option value="all">Country</option>
                        <option>All</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Taiwan</option>
                        <option>Hong Kong</option>
                    </select>

                    <select>
                        <option>Joined On</option>
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>All Time</option>
                    </select>

                    <button class="secondary-btn">
                        <i class="ri-filter-3-line"></i>
                        Filter
                    </button>

                    <button id="resetBtn" class="secondary-btn">
    Reset
</button>

                </div>

            </div>

        </section>

        <!-- ========================================= -->
        <!-- CONTENT -->
        <!-- ========================================= -->

        <div class="content-wrapper">

            <section class="table-card">

                <table>

                    <thead>

                        <tr>

                            <th></th>
                            <th>Brand / Company</th>
                            <th>Industry</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>Joined On</th>
                            <th>Documents</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        <!-- Row 1 -->

                        <tr
class="brand-row"
data-name="Razer India Pvt. Ltd."
data-email="contact@razer.com"
data-industry="Gaming Hardware"
data-country="India"
data-status="Pending">

                            <td><input type="checkbox"></td>

                            <td>

                                <div class="user-info">

                                    <img src="images/razer.png" alt="Razer">

                                    <div>

                                        <h4>Razer India Pvt. Ltd.</h4>

                                        <span>contact@razer.com</span><br>

                                        <span>+91 98765 43210</span>

                                    </div>

                                </div>

                            </td>

                            <td>Gaming Hardware</td>

                            <td>India</td>

                            <td>

                                <span class="badge pending">
                                    Pending
                                </span>

                            </td>

                            <td>

                                12 May 2024

                            </td>

                            <td>

                                3 / 5 Submitted

                            </td>

                            <td>

                                <button class="primary-btn select-brand">

    Select

</button>

                            </td>

                        </tr>

                        <!-- Row 2 -->

       <tr
class="brand-row"
data-name="Red Bull Gaming"
data-email="partnership@redbull.com"
data-industry="Beverages"
data-country="Austria"
data-status="Under Review">
                            <td><input type="checkbox"></td>

                            <td>

                                <div class="user-info">

                                    <img src="images/redbull.png">

                                    <div>

                                        <h4>Red Bull Gaming</h4>

                                        <span>partnership@redbull.com</span><br>

                                        <span>+91 91234 56789</span>

                                    </div>

                                </div>

                            </td>

                            <td>Beverages</td>

                            <td>Austria</td>

                            <td>

                                <span class="badge review2">

                                    Under Review

                                </span>

                            </td>

                            <td>

                                11 May 2024

                            </td>

                            <td>

                                4 / 6 Submitted

                            </td>

                            <td>

                                <button class="primary-btn select-brand">

    Review

</button>

                            </td>

                        </tr>

                        <!-- Row 3 -->

                        <tr
class="brand-row"
data-name="NVIDIA India"
data-email="business.india@nvidia.com"
data-industry="Technology"
data-country="India"
data-status="Approved">

                            <td><input type="checkbox"></td>

                            <td>

                                <div class="user-info">

                                    <img src="images/nvidia.png">

                                    <div>

                                        <h4>NVIDIA India</h4>

                                        <span>business.india@nvidia.com</span><br>

                                        <span>+91 99876 54321</span>

                                    </div>

                                </div>

                            </td>

                            <td>Technology</td>

                            <td>India</td>

                            <td>

                                <span class="badge approved">

                                    Approved

                                </span>

                            </td>

                            <td>

                                10 May 2024

                            </td>

                            <td>

                                6 / 6 Verified

                            </td>

                            <td>

                               <button class="primary-btn select-brand">

    View

</button>

                            </td>

                        </tr>

                        <!-- Row 4 -->

                        <tr
class="brand-row"
data-name="ASUS ROG"
data-email="business@asus.com"
data-industry="Gaming Hardware"
data-country="Taiwan"
data-status="Approved">

                            <td><input type="checkbox"></td>

                            <td>

                                <div class="user-info">

                                    <img src="images/asus.png">

                                    <div>

                                        <h4>ASUS ROG</h4>

                                        <span>business@asus.com</span><br>

                                        <span>+91 90090 90090</span>

                                    </div>

                                </div>

                            </td>

                            <td>Gaming Hardware</td>

                            <td>Taiwan</td>

                            <td>

                                <span class="badge approved">

                                    Approved

                                </span>

                            </td>

                            <td>

                                08 May 2024

                            </td>

                            <td>

                                6 / 6 Verified

                            </td>

                            <td>

                               <button class="primary-btn select-brand">

    Select

</button>
                            </td>

                        </tr>

                        <!-- Row 5 -->

                     <tr
class="brand-row"
data-name="ZOTAC Gaming"
data-email="sales@zotac.com"
data-industry="Gaming Hardware"
data-country="Hong Kong"
data-status="Rejected">

                            <td><input type="checkbox"></td>

                            <td>

                                <div class="user-info">

                                    <img src="images/zotac.png">

                                    <div>

                                        <h4>ZOTAC Gaming</h4>

                                        <span>sales@zotac.com</span><br>

                                        <span>+91 70070 70070</span>

                                    </div>

                                </div>

                            </td>

                            <td>Gaming Hardware</td>

                            <td>Hong Kong</td>

                            <td>

                                <span class="badge rejected">

                                    Rejected

                                </span>

                            </td>

                            <td>

                                07 May 2024

                            </td>

                            <td>

                                3 / 6 Incomplete

                            </td>

                            <td>

                                <button class="primary-btn select-brand">

    View

</button>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </section>

            <!-- ========= PART 3 STARTS HERE ========= -->

<!-- ========================================= -->
            <!-- RIGHT SIDE BRAND DETAILS PANEL -->
            <!-- ========================================= -->

            <aside class="details-panel">

                <!-- BRAND DETAILS -->

                <div class="panel-card">

                    <h3>Brand Details</h3>

                    <div class="profile-card">

                        <img src="images/razer.png" alt="Razer Logo">

                        <h2 id="brandName">Razer India Pvt. Ltd.</h2>

                        <p>Gaming Hardware</p>

                        <span id="brandStatus">Pending</span>

                    </div>

                    <div class="profile-info">

                        <div class="info-row">
                            <span>Industry</span>
                            <strong id="industryValue">Gaming Hardware</strong>
                        </div>

                        <div class="info-row">
                            <span>Website</span>
                            <strong>www.razer.com</strong>
                        </div>

                        <div class="info-row">
                            <span>Country</span>
                            <strong id="countryValue">India</strong>
                        </div>

                        <div class="info-row">
                            <span>Email</span>
                            <strong id="emailValue">contact@razer.com</strong>
                        </div>

                        <div class="info-row">
                            <span>Phone</span>
                            <strong>+91 98765 43210</strong>
                        </div>

                        <div class="info-row">
                            <span>Contact Person</span>
                            <strong>Rohit Sharma</strong>
                        </div>

                        <div class="info-row">
                            <span>Designation</span>
                            <strong>Marketing Manager</strong>
                        </div>

                        <div class="info-row">
                            <span>Joined</span>
                            <strong>12 May 2024</strong>
                        </div>

                    </div>

                </div>

                <!-- DOCUMENTS -->

                <div class="panel-card">

                    <h3>Documents Submitted</h3>

                    <ul class="document-list">

                        <li>
                            <span>Business Registration</span>
                            <button class="secondary-btn">View</button>
                        </li>

                        <li>
                            <span>GST Certificate</span>
                            <button class="secondary-btn">View</button>
                        </li>

                        <li>
                            <span>Company PAN Card</span>
                            <button class="secondary-btn">View</button>
                        </li>

                        <li>
                            <span>Trademark Certificate</span>
                            <button class="secondary-btn">Pending</button>
                        </li>

                        <li>
                            <span>Website Screenshot</span>
                            <button class="secondary-btn">View</button>
                        </li>

                        <li>
                            <span>Company Logo</span>
                            <button class="secondary-btn">View</button>
                        </li>

                    </ul>

                </div>

                <!-- VERIFICATION SUMMARY -->

                <div class="panel-card">

                    <h3>Verification Summary</h3>

                    <div class="progress-item">

                        <div class="label">
                            <span>Business Verification</span>
                            <strong>90%</strong>
                        </div>

                        <div class="progress">
                            <div class="progress-fill" style="width:90%"></div>
                        </div>

                    </div>

                    <div class="progress-item">

                        <div class="label">
                            <span>Document Validation</span>
                            <strong>82%</strong>
                        </div>

                        <div class="progress">
                            <div class="progress-fill" style="width:82%"></div>
                        </div>

                    </div>

                    <div class="progress-item">

                        <div class="label">
                            <span>Website Authenticity</span>
                            <strong>88%</strong>
                        </div>

                        <div class="progress">
                            <div class="progress-fill" style="width:88%"></div>
                        </div>

                    </div>

                    <div class="progress-item">

                        <div class="label">
                            <span>Brand Trust Score</span>
                            <strong>94%</strong>
                        </div>

                        <div class="progress">
                            <div class="progress-fill" style="width:94%"></div>
                        </div>

                    </div>

                </div>

                <!-- ADMIN NOTES -->

                <div class="panel-card">

                    <h3>Admin Notes</h3>

                    <textarea
                        rows="6"
                        placeholder="Write internal verification notes..."></textarea>

                </div>

                <!-- ACTIONS -->

                <div class="panel-card">

                    <h3>Verification Actions</h3>

                    <div class="action-buttons">

<button id="approveBtn" class="approve-btn">

                            <i class="ri-checkbox-circle-line"></i>

                            Approve

                        </button>

                       <button id="rejectBtn" class="reject-btn">

                            <i class="ri-close-circle-line"></i>

                            Reject

                        </button>

                    </div>

                    <br>

                    <button class="secondary-btn" style="width:100%;">

                        <i class="ri-edit-2-line"></i>

                        Request Changes

                    </button>

                </div>

            </aside>

        </div>

    </main>

</div>

<script src="Admin-Brand-Verification.js"></script>

</body>

</html>





/*==================================================
    GAMEVERSE ADMIN DASHBOARD
    STYLE.CSS - PART 1
===================================================*/

/* Google Font */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/*==================================================
    VARIABLES
===================================================*/

:root{

    --bg:#0D1117;
    --bg-secondary:#161B22;
    --card:#1F2937;

    --purple:#7C3AED;
    --purple2:#9333EA;

    --cyan:#06B6D4;

    --green:#22C55E;
    --yellow:#F59E0B;
    --red:#EF4444;

    --text:#F8FAFC;
    --text2:#94A3B8;

    --border:#334155;

    --radius:16px;

    --shadow:
        0 10px 25px rgba(0,0,0,.35);

    --transition:.25s ease;

}

/*==================================================
    RESET
===================================================*/

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{

    background:var(--bg);

    color:var(--text);

    font-family:'Inter',sans-serif;

}

a{
    text-decoration:none;
    color:inherit;
}

ul{
    list-style:none;
}

img{
    display:block;
    max-width:100%;
}

button{
    cursor:pointer;
    border:none;
    outline:none;
}

input,
select,
textarea{

    outline:none;

    border:none;

    font-family:inherit;

}

/*==================================================
    SCROLLBAR
===================================================*/

::-webkit-scrollbar{

    width:8px;

}

::-webkit-scrollbar-track{

    background:#111827;

}

::-webkit-scrollbar-thumb{

    background:var(--purple);

    border-radius:20px;

}

/*==================================================
    DASHBOARD LAYOUT
===================================================*/

.dashboard{

    display:grid;

    grid-template-columns:270px 1fr;

    min-height:100vh;

}

/*==================================================
    SIDEBAR
===================================================*/

.sidebar{

    background:var(--bg-secondary);

    border-right:1px solid var(--border);

    padding:25px;

    position:sticky;

    top:0;

    height:100vh;

    display:flex;

    flex-direction:column;

    justify-content:space-between;
    overflow-y: scroll;

}
.brand-row.selected{
    background:rgba(124,58,237,.15);
    border-left:4px solid var(--purple);
}
/*==================================================
    LOGO
===================================================*/

.logo{

    display:flex;

    align-items:center;

    gap:15px;

    margin-bottom:45px;

}

.logo-icon{

    width:56px;

    height:56px;

    border-radius:14px;

    background:linear-gradient(
    135deg,
    var(--purple),
    var(--purple2));

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:26px;

    box-shadow:
    0 0 20px rgba(124,58,237,.5);

}

.logo h2{

    font-size:22px;

    font-weight:800;

}

.logo span{

    color:var(--text2);

    font-size:13px;

}

/*==================================================
    MENU
===================================================*/

.menu{

    display:flex;

    flex-direction:column;

    gap:8px;

}

.menu li a{

    display:flex;

    align-items:center;

    gap:14px;

    padding:15px 18px;

    border-radius:14px;

    color:var(--text2);

    transition:var(--transition);

    font-weight:500;

}

.menu li a i{

    font-size:21px;

}

.menu li a:hover{

    background:rgba(124,58,237,.15);

    color:white;

    transform:translateX(5px);

}

.menu li.active a{

    background:linear-gradient(
    90deg,
    rgba(124,58,237,.25),
    rgba(6,182,212,.08));

    color:white;

    border:1px solid rgba(124,58,237,.35);

    box-shadow:
    0 0 15px rgba(124,58,237,.25);

}

/*==================================================
    SIDEBAR BOTTOM
===================================================*/

.sidebar-bottom{

    display:flex;

    flex-direction:column;

    gap:10px;

}

.sidebar-bottom a{

    display:flex;

    align-items:center;

    gap:12px;

    padding:14px 16px;

    border-radius:12px;

    color:var(--text2);

    transition:var(--transition);

}

.sidebar-bottom a:hover{

    background:rgba(255,255,255,.04);

    color:white;

}

/*==================================================
    MAIN CONTENT
===================================================*/

.main-content{

    padding:28px;

}

/*==================================================
    TOPBAR
===================================================*/

.topbar{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:35px;

}

/*==================================================
    SEARCH BOX
===================================================*/

.search-box{

    width:420px;

    height:52px;

    background:var(--bg-secondary);

    border:1px solid var(--border);

    border-radius:14px;

    display:flex;

    align-items:center;

    padding:0 18px;

}

.search-box i{

    color:var(--text2);

    margin-right:12px;

    font-size:20px;

}

.search-box input{

    flex:1;

    background:none;

    color:white;

    font-size:15px;

}

.search-box input::placeholder{

    color:var(--text2);

}

/*==================================================
    TOP RIGHT
===================================================*/

.top-right{

    display:flex;

    align-items:center;

    gap:18px;

}

.notification{

    width:48px;

    height:48px;

    border-radius:50%;

    background:var(--bg-secondary);

    color:white;

    border:1px solid var(--border);

    transition:var(--transition);

    font-size:19px;

}

.notification:hover{

    background:var(--purple);

    box-shadow:
    0 0 20px rgba(124,58,237,.45);

}

/*==================================================
    ADMIN PROFILE
===================================================*/

.admin-profile{

    display:flex;

    align-items:center;

    gap:14px;

    background:var(--bg-secondary);

    padding:10px 16px;

    border-radius:16px;

    border:1px solid var(--border);

}

.admin-profile img{

    width:48px;

    height:48px;

    border-radius:50%;

}

.admin-profile h4{

    font-size:15px;

}

.admin-profile span{

    font-size:13px;

    color:var(--text2);

}

.admin-profile i{

    color:var(--text2);

}

/*==================================================
    PAGE HEADER
===================================================*/

.page-header{

    margin-bottom:30px;

}

.page-header h1{

    font-size:34px;

    font-weight:800;

    margin-bottom:8px;

}

.page-header p{

    color:var(--text2);

    font-size:15px;

}

.page-header span{

    color:var(--cyan);

}

/*==================================================
    STATISTICS GRID
===================================================*/

.stats-grid{

    display:grid;

    grid-template-columns:repeat(6,1fr);

    gap:20px;

    margin-bottom:30px;

}

.stat-card{

    background:var(--card);

    border:1px solid var(--border);

    border-radius:var(--radius);

    padding:22px;

    transition:var(--transition);

    box-shadow:var(--shadow);

}

.stat-card:hover{

    transform:translateY(-6px);

    box-shadow:
    0 0 25px rgba(124,58,237,.25);

}

.stat-card .icon{

    width:58px;

    height:58px;

    border-radius:14px;

    display:flex;

    align-items:center;

    justify-content:center;

    margin-bottom:18px;

    font-size:24px;

    color:#fff;

}

.icon.purple{
    background:linear-gradient(135deg,var(--purple),var(--purple2));
}

.icon.orange{
    background:#F97316;
}

.icon.cyan{
    background:var(--cyan);
}

.icon.yellow{
    background:var(--yellow);
}

.icon.green{
    background:var(--green);
}

.icon.red{
    background:var(--red);
}

.stat-card h5{

    color:var(--text2);

    font-size:14px;

    margin-bottom:8px;

    font-weight:500;

}

.stat-card h2{

    font-size:30px;

    margin-bottom:6px;

}

.stat-card span{

    color:var(--cyan);

    font-size:14px;

}

/*==================================================
    FILTER CARD
===================================================*/

.filter-card{

    background:var(--card);

    border-radius:var(--radius);

    border:1px solid var(--border);

    padding:22px;

    margin-bottom:25px;

}

.filter-top{

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:20px;

    flex-wrap:wrap;

}

/*==================================================
    TABLE SEARCH
===================================================*/

.table-search{

    width:340px;

    height:48px;

    background:var(--bg-secondary);

    border-radius:12px;

    border:1px solid var(--border);

    display:flex;

    align-items:center;

    padding:0 16px;

}

.table-search i{

    color:var(--text2);

    margin-right:10px;

}

.table-search input{

    flex:1;

    background:none;

    color:white;

}

.table-search input::placeholder{

    color:var(--text2);

}

/*==================================================
    FILTERS
===================================================*/

.filters{

    display:flex;

    gap:12px;

    flex-wrap:wrap;

}

.filters select{

    height:46px;

    background:var(--bg-secondary);

    border:1px solid var(--border);

    color:var(--text);

    padding:0 15px;

    border-radius:12px;

    min-width:140px;

}

.filters select:focus{

    border-color:var(--cyan);

}

/*==================================================
    BUTTONS
===================================================*/

.primary-btn{

    background:linear-gradient(
    135deg,
    var(--purple),
    var(--purple2));

    color:white;

    border:none;

    padding:10px 22px;

    border-radius:12px;

    font-weight:600;

    transition:var(--transition);

}

.primary-btn:hover{

    transform:scale(1.04);

    box-shadow:
    0 0 20px rgba(124,58,237,.4);

}

.secondary-btn{

    background:transparent;

    color:var(--cyan);

    border:1px solid var(--cyan);

    padding:10px 18px;

    border-radius:12px;

    transition:var(--transition);

}

.secondary-btn:hover{

    background:var(--cyan);

    color:#fff;

}

/*==================================================
    CONTENT WRAPPER
===================================================*/

.content-wrapper{

    display:grid;

    grid-template-columns:2fr 1fr;

    gap:24px;

}

/*==================================================
    TABLE CARD
===================================================*/

.table-card{

    background:var(--card);

    border-radius:var(--radius);

    border:1px solid var(--border);

    overflow:scroll;

    box-shadow:var(--shadow);

}

/*==================================================
    TABLE
===================================================*/

table{

    width:100%;

    border-collapse:collapse;

}

thead{

    background:#111827;

}

thead th{

    padding:18px;

    text-align:left;

    color:var(--text2);

    font-size:14px;

    font-weight:600;

}

tbody td{

    padding:18px;

    border-top:1px solid rgba(255,255,255,.06);

    vertical-align:middle;

}

tbody tr{

    transition:var(--transition);

}

tbody tr:hover{

    background:rgba(124,58,237,.08);

}

/*==================================================
    USER INFO
===================================================*/

.user-info{

    display:flex;

    align-items:center;

    gap:15px;

}

.user-info img{

    width:52px;

    height:52px;

    border-radius:50%;

}

.user-info h4{

    font-size:15px;

    margin-bottom:4px;

}

.user-info span{

    color:var(--text2);

    font-size:13px;

}

/*==================================================
    PLATFORM TAGS
===================================================*/

.platform-list{

    display:flex;

    gap:8px;

    flex-wrap:wrap;

}

.platform-list span{

    padding:6px 12px;

    background:rgba(6,182,212,.15);

    color:var(--cyan);

    border-radius:30px;

    font-size:12px;

    border:1px solid rgba(6,182,212,.25);

}

/*==================================================
    AI SCORE
===================================================*/

.score{

    width:140px;

}

.score span{

    display:block;

    margin-bottom:8px;

    font-size:13px;

}

.progress{

    height:8px;

    background:#2B3443;

    border-radius:20px;

    overflow:hidden;

}

.progress-fill{

    height:100%;

    background:linear-gradient(
    90deg,
    var(--purple),
    var(--cyan));

    border-radius:20px;

}

/*==================================================
    BADGES
===================================================*/

.badge{

    display:inline-block;

    padding:7px 14px;

    border-radius:30px;

    font-size:12px;

    font-weight:600;

}

.ai-pass{

    background:rgba(34,197,94,.15);

    color:var(--green);

}

.review{

    background:rgba(245,158,11,.15);

    color:var(--yellow);

}

.review2{

    background:rgba(6,182,212,.15);

    color:var(--cyan);

}

.pending{

    background:rgba(249,115,22,.15);

    color:#FB923C;

}

.approved{

    background:rgba(34,197,94,.15);

    color:var(--green);

}

.rejected{

    background:rgba(239,68,68,.15);

    color:var(--red);

}



/*==================================================
    DETAILS PANEL
===================================================*/

.details-panel{

    display:flex;
    flex-direction:column;
    gap:22px;

}

.panel-card{

    background:var(--card);

    border:1px solid var(--border);

    border-radius:var(--radius);

    padding:24px;

    box-shadow:var(--shadow);

    transition:var(--transition);

}

.panel-card:hover{

    transform:translateY(-4px);

    box-shadow:0 0 25px rgba(124,58,237,.18);

}

.panel-card h3{

    font-size:20px;

    margin-bottom:20px;

    font-weight:700;

}

/*==================================================
    PROFILE CARD
===================================================*/

.profile-card{

    display:flex;

    flex-direction:column;

    align-items:center;

    text-align:center;

    margin-bottom:25px;

}

.profile-card img{

    width:110px;

    height:110px;

    border-radius:50%;

    border:4px solid var(--purple);

    margin-bottom:18px;

}

.profile-card h2{

    font-size:24px;

    margin-bottom:6px;

}

.profile-card p{

    color:var(--text2);

    margin-bottom:10px;

}

.profile-card span{

    background:rgba(245,158,11,.15);

    color:var(--yellow);

    padding:8px 18px;

    border-radius:30px;

    font-size:13px;

}

/*==================================================
    PROFILE INFO
===================================================*/

.profile-info{

    display:flex;

    flex-direction:column;

    gap:16px;

}

.info-row{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding-bottom:10px;

    border-bottom:1px solid rgba(255,255,255,.05);

}

.info-row span{

    color:var(--text2);

}

.info-row strong{

    color:white;

    font-weight:600;

}

/*==================================================
    SOCIAL METRICS
===================================================*/

.metric-row{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:14px 0;

    border-bottom:1px solid rgba(255,255,255,.05);

}

.metric-row:last-child{

    border:none;

}

.metric-row span{

    color:var(--text2);

}

.metric-row strong{

    color:var(--cyan);

}

/*==================================================
    PROGRESS ITEMS
===================================================*/

.progress-item{

    margin-bottom:22px;

}

.label{

    display:flex;

    justify-content:space-between;

    margin-bottom:8px;

}

.label span{

    color:var(--text2);

}

.label strong{

    color:white;

}

/*==================================================
    DOCUMENT LIST
===================================================*/

.document-list{

    display:flex;

    flex-direction:column;

    gap:14px;

}

.document-list li{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:14px;

    background:var(--bg-secondary);

    border-radius:12px;

    border:1px solid rgba(255,255,255,.05);

}

/*==================================================
    TEXTAREA
===================================================*/

textarea{

    width:100%;

    background:var(--bg-secondary);

    border:1px solid var(--border);

    border-radius:12px;

    color:white;

    padding:16px;

    resize:none;

    margin-bottom:18px;

}

textarea:focus{

    border-color:var(--cyan);

}

/*==================================================
    ACTION BUTTONS
===================================================*/

.action-buttons{

    display:flex;

    gap:14px;

}

.approve-btn{

    flex:1;

    background:var(--green);

    color:white;

    padding:14px;

    border-radius:12px;

    font-weight:600;

    transition:var(--transition);

}

.approve-btn:hover{

    transform:translateY(-2px);

    box-shadow:0 0 18px rgba(34,197,94,.4);

}

.reject-btn{

    flex:1;

    background:var(--red);

    color:white;

    padding:14px;

    border-radius:12px;

    font-weight:600;

    transition:var(--transition);

}

.reject-btn:hover{

    transform:translateY(-2px);

    box-shadow:0 0 18px rgba(239,68,68,.35);

}

/*==================================================
    GLASS EFFECT (Optional)
===================================================*/

.glass{

    background:rgba(31,41,55,.55);

    backdrop-filter:blur(14px);

    -webkit-backdrop-filter:blur(14px);

    border:1px solid rgba(255,255,255,.08);

}

/*==================================================
    FADE ANIMATION
===================================================*/

@keyframes fadeIn{

    from{

        opacity:0;

        transform:translateY(20px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

.stat-card,
.filter-card,
.table-card,
.panel-card{

    animation:fadeIn .5s ease;

}

/*==================================================
    RESPONSIVE - TABLET
===================================================*/

@media(max-width:1200px){

    .dashboard{

        grid-template-columns:90px 1fr;

    }

    .logo h2,
    .logo span,
    .menu li a span,
    .sidebar-bottom a span{

        display:none;

    }

    .stats-grid{

        grid-template-columns:repeat(3,1fr);

    }

    .content-wrapper{

        grid-template-columns:1fr;

    }

}

/*==================================================
    RESPONSIVE - MOBILE
===================================================*/

@media(max-width:768px){

    .dashboard{

        grid-template-columns:1fr;

    }

    .sidebar{

        display:none;

    }

    .topbar{

        flex-direction:column;

        align-items:flex-start;

        gap:18px;

    }

    .search-box{

        width:100%;

    }

    .top-right{

        width:100%;

        justify-content:space-between;

    }

    .stats-grid{

        grid-template-columns:1fr;

    }

    .filter-top{

        flex-direction:column;

        align-items:stretch;

    }

    .filters{

        flex-direction:column;

    }

    .filters select,
    .secondary-btn{

        width:100%;

    }

    .table-card{

        overflow-x:scroll;

    }

    table{

        min-width:1100px;

    }

    .action-buttons{

        flex-direction:column;

    }

}

/*==================================================
    HOVER EFFECTS
===================================================*/

button:hover{

    cursor:pointer;

}

.stat-card,
.panel-card,
.table-card{

    transition:all .3s ease;

}

.primary-btn:hover{

    filter:brightness(1.15);

}

.secondary-btn:hover{

    transform:translateY(-2px);

}

.notification:hover{

    transform:scale(1.08);

}

.logo-icon{

    transition:.3s;

}

.logo-icon:hover{

    transform:rotate(10deg) scale(1.08);

}
/*=========================================
    BRAND LOGO
=========================================*/

.user-info img{
    width:52px;
    height:52px;
    border-radius:12px;
    background:#fff;
    object-fit:contain;
    padding:6px;
}

.profile-card img{
    width:110px;
    height:110px;
    border-radius:20px;
    background:#fff;
    padding:14px;
    object-fit:contain;
    border:3px solid var(--purple);
}

/*=========================================
    DOCUMENT STATUS
=========================================*/

.document-list li{

    display:flex;
    justify-content:space-between;
    align-items:center;

    background:var(--bg-secondary);

    border:1px solid var(--border);

    padding:14px 18px;

    border-radius:12px;

    transition:.25s;

}

.document-list li:hover{

    border-color:var(--cyan);

    transform:translateY(-2px);

}

/*=========================================
    COMPANY WEBSITE
=========================================*/

.info-row strong{

    word-break:break-word;

}

/*=========================================
    REQUEST CHANGES BUTTON
=========================================*/

.request-btn{

    width:100%;

    margin-top:15px;

    background:transparent;

    border:1px solid var(--cyan);

    color:var(--cyan);

    padding:14px;

    border-radius:12px;

    font-weight:600;

    transition:.3s;

}

.request-btn:hover{

    background:var(--cyan);

    color:#fff;

    box-shadow:0 0 18px rgba(6,182,212,.35);

}

/*=========================================
    COMPANY STATUS
=========================================*/

.company-status{

    display:inline-flex;

    align-items:center;

    gap:8px;

    padding:8px 18px;

    border-radius:30px;

    background:rgba(245,158,11,.15);

    color:var(--yellow);

    font-size:13px;

    font-weight:600;

}















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
