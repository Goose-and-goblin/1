function applyFilters() {
    const jobType = document.getElementById("job-type").value;
    const location = document.getElementById("location").value;
    const jobs = document.querySelectorAll(".job");

    jobs.forEach(job => {
        const matchesType = jobType === "all" || job.getAttribute("data-type") === jobType;
        const matchesLocation = location === "all" || job.getAttribute("data-location") === location;

        if (matchesType && matchesLocation) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}
