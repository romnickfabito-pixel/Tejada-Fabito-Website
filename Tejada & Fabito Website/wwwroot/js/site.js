// ==========================================================
// TEJADA & FABITO TREE PLANTING WEBSITE
// MAIN JAVASCRIPT
// ==========================================================



// ==========================================================
// SHOW THE MAIN WEBSITE
// ==========================================================

function showWebsite() {

    const landingPage = document.getElementById("landingPage");
    const mainWebsite = document.getElementById("mainWebsite");

    if (landingPage) {
        landingPage.style.display = "none";
    }

    if (mainWebsite) {
        mainWebsite.style.display = "block";
    }

    // Show Home automatically
    const homeButton = getNavButton(0);

    showSection("home", homeButton);
}



// ==========================================================
// SHOW WEBSITE SECTION
// ==========================================================

function showSection(sectionId, button) {

    // ------------------------------------------------------
    // IMPORTANT:
    // Navbar uses "science"
    // Actual Science section uses "science-section"
    // ------------------------------------------------------

    if (sectionId === "science") {
        sectionId = "science-section";
    }


    // ------------------------------------------------------
    // GET ALL MAIN WEBSITE SECTIONS
    // INCLUDING SCIENCE
    // ------------------------------------------------------

    const sections = document.querySelectorAll(
        ".content-section, .science-section"
    );


    // ------------------------------------------------------
    // HIDE ALL SECTIONS
    // ------------------------------------------------------

    sections.forEach(function (section) {

        section.classList.remove("active-section");

        section.style.display = "none";

    });


    // ------------------------------------------------------
    // SHOW SELECTED SECTION
    // ------------------------------------------------------

    const selectedSection =
        document.getElementById(sectionId);


    if (selectedSection) {

        selectedSection.classList.add("active-section");

        selectedSection.style.display = "block";
        // Initialize / refresh Location map
        if (sectionId === "location" &&
            typeof openTreeMap === "function") {

            openTreeMap();

        }


        // --------------------------------------------------
        // FIX LEAFLET MAP SIZE WHEN LOCATION IS OPENED
        // --------------------------------------------------

        if (
            sectionId === "location" &&
            typeof treeMap !== "undefined"
        ) {

            setTimeout(function () {

                treeMap.invalidateSize();

            }, 300);

        }

    }


    // ------------------------------------------------------
    // REMOVE ACTIVE FROM ALL NAV BUTTONS
    // ------------------------------------------------------

    const buttons =
        document.querySelectorAll(".nav-btn");


    buttons.forEach(function (navButton) {

        navButton.classList.remove("active");

    });


    // ------------------------------------------------------
    // MAKE SELECTED NAV BUTTON ACTIVE
    // ------------------------------------------------------

    if (button) {

        button.classList.add("active");

    }


    // ------------------------------------------------------
    // RETURN TO TOP
    // ------------------------------------------------------

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ==========================================================
// GET NAVBAR BUTTON BY INDEX
// ==========================================================

function getNavButton(index) {

    const buttons =
        document.querySelectorAll(".nav-btn");

    return buttons[index];

}



// ==========================================================
// WHY THIS TREE
// TREE STORY NAVIGATION
// ==========================================================

function showTreeStory(student) {

    const mainPage =
        document.getElementById("whyTreeMain");

    const tejadaStory =
        document.getElementById("tejadaStory");

    const fabitoStory =
        document.getElementById("fabitoStory");


    // ------------------------------------------------------
    // HIDE MAIN WHY THIS TREE PAGE
    // ------------------------------------------------------

    if (mainPage) {
        mainPage.style.display = "none";
    }


    // ------------------------------------------------------
    // HIDE BOTH STORIES
    // ------------------------------------------------------

    if (tejadaStory) {
        tejadaStory.classList.remove("active-story");
    }

    if (fabitoStory) {
        fabitoStory.classList.remove("active-story");
    }


    // ------------------------------------------------------
    // SHOW SELECTED STUDENT
    // ------------------------------------------------------

    if (student === "tejada") {

        if (tejadaStory) {
            tejadaStory.classList.add("active-story");
        }

    }


    if (student === "fabito") {

        if (fabitoStory) {
            fabitoStory.classList.add("active-story");
        }

    }


    // ------------------------------------------------------
    // RETURN TO TOP
    // ------------------------------------------------------

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ==========================================================
// BACK TO WHY THIS TREE
// ==========================================================

function backToTreeStories() {

    const mainPage =
        document.getElementById("whyTreeMain");

    const tejadaStory =
        document.getElementById("tejadaStory");

    const fabitoStory =
        document.getElementById("fabitoStory");


    // ------------------------------------------------------
    // HIDE STORY PAGES
    // ------------------------------------------------------

    if (tejadaStory) {
        tejadaStory.classList.remove("active-story");
    }

    if (fabitoStory) {
        fabitoStory.classList.remove("active-story");
    }


    // ------------------------------------------------------
    // SHOW MAIN PAGE
    // ------------------------------------------------------

    if (mainPage) {
        mainPage.style.display = "block";
    }


    // ------------------------------------------------------
    // RETURN TO TOP
    // ------------------------------------------------------

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ==========================================================
// SCIENCE BEHIND THE TREE
// SHOW SCIENTIFIC DETAILS
// ==========================================================

function showScienceDetails(student) {

    const scienceMain =
        document.getElementById("scienceMain");

    const tejadaScience =
        document.getElementById("tejadaScience");

    const fabitoScience =
        document.getElementById("fabitoScience");


    // ------------------------------------------------------
    // HIDE MAIN SCIENCE CARDS
    // ------------------------------------------------------

    if (scienceMain) {
        scienceMain.style.display = "none";
    }


    // ------------------------------------------------------
    // HIDE BOTH SCIENCE DETAILS
    // ------------------------------------------------------

    if (tejadaScience) {
        tejadaScience.classList.remove("active-science");
    }

    if (fabitoScience) {
        fabitoScience.classList.remove("active-science");
    }


    // ------------------------------------------------------
    // SHOW SELECTED TREE
    // ------------------------------------------------------

    if (student === "tejada") {

        if (tejadaScience) {
            tejadaScience.classList.add("active-science");
        }

    }


    if (student === "fabito") {

        if (fabitoScience) {
            fabitoScience.classList.add("active-science");
        }

    }


    // ------------------------------------------------------
    // RETURN TO TOP
    // ------------------------------------------------------

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ==========================================================
// BACK TO SCIENCE MAIN PAGE
// ==========================================================

function backToScienceMain() {

    const scienceMain =
        document.getElementById("scienceMain");

    const tejadaScience =
        document.getElementById("tejadaScience");

    const fabitoScience =
        document.getElementById("fabitoScience");


    // ------------------------------------------------------
    // HIDE SCIENCE DETAILS
    // ------------------------------------------------------

    if (tejadaScience) {
        tejadaScience.classList.remove("active-science");
    }

    if (fabitoScience) {
        fabitoScience.classList.remove("active-science");
    }


    // ------------------------------------------------------
    // SHOW SCIENCE MAIN CARDS
    // ------------------------------------------------------

    if (scienceMain) {
        scienceMain.style.display = "block";
    }


    // ------------------------------------------------------
    // RETURN TO TOP
    // ------------------------------------------------------

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}// =========================================
// SECTION 7 - TREE GROWTH DASHBOARD
// =========================================

function selectDashboardTree(tree, button) {

    // Remove active button
    const buttons = document.querySelectorAll(".tree-select-btn");

    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    // Activate clicked button
    if (button) {
        button.classList.add("active");
    }

    // Hide both dashboards
    const tejadaDashboard =
        document.getElementById("tejadaDashboard");

    const fabitoDashboard =
        document.getElementById("fabitoDashboard");

    tejadaDashboard.classList.remove("active-dashboard");
    fabitoDashboard.classList.remove("active-dashboard");

    // Show selected dashboard
    if (tree === "tejada") {

        tejadaDashboard.classList.add("active-dashboard");

    } else if (tree === "fabito") {

        fabitoDashboard.classList.add("active-dashboard");

    }
}


// =========================================
// SAMPLE GROWTH DATA
// TEMPORARY ONLY
// =========================================

// NOTE:
// These are temporary sample values so we can test
// whether the dashboard and charts are working.
//
// Replace these later with the REAL monitoring data.

const tejadaGrowthData = {

    labels: [
        "Entry 1",
        "Entry 2",
        "Entry 3"
    ],

    heights: [
        30,
        38,
        47
    ],

    leaves: [
        8,
        12,
        18
    ]

};


const fabitoGrowthData = {

    labels: [
        "Entry 1",
        "Entry 2",
        "Entry 3"
    ],

    heights: [
        25,
        32,
        41
    ],

    leaves: [
        10,
        15,
        21
    ]

};


// =========================================
// CREATE CHART
// =========================================

function createGrowthChart(canvasId, data) {

    const canvas =
        document.getElementById(canvasId);

    if (!canvas) {
        return;
    }

    new Chart(canvas, {

        type: "line",

        data: {

            labels: data.labels,

            datasets: [

                {
                    label: "Tree Height (cm)",

                    data: data.heights,

                    tension: 0.3,

                    borderWidth: 3,

                    pointRadius: 5,

                    fill: false
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    title: {
                        display: true,
                        text: "Height (cm)"
                    }

                },

                x: {

                    title: {
                        display: true,
                        text: "Monitoring Entry"
                    }

                }

            }

        }

    });

}


// =========================================
// UPDATE SUMMARY
// =========================================

function updateGrowthSummary(prefix, data) {

    if (!data.heights.length) {
        return;
    }

    const initialHeight =
        data.heights[0];

    const latestHeight =
        data.heights[data.heights.length - 1];

    const totalGrowth =
        latestHeight - initialHeight;

    const latestLeaves =
        data.leaves[data.leaves.length - 1];


    document.getElementById(
        prefix + "InitialHeight"
    ).textContent =
        initialHeight + " cm";


    document.getElementById(
        prefix + "LatestHeight"
    ).textContent =
        latestHeight + " cm";


    document.getElementById(
        prefix + "Growth"
    ).textContent =
        "+" + totalGrowth + " cm";


    document.getElementById(
        prefix + "Leaves"
    ).textContent =
        latestLeaves;
}


// =========================================
// START DASHBOARD
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    updateGrowthSummary(
        "tejada",
        tejadaGrowthData
    );

    updateGrowthSummary(
        "fabito",
        fabitoGrowthData
    );


    createGrowthChart(
        "tejadaGrowthChart",
        tejadaGrowthData
    );


    createGrowthChart(
        "fabitoGrowthChart",
        fabitoGrowthData
    );

});