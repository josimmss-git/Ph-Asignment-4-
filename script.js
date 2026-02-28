


let currentTab = "all";

const tabActive = ["bg-navy", "border-navy", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200", "text-black"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
const emptyState = document.getElementById("empty-state");

const tabs = ["all", "interview", "rejected"];

function switchTab(tab) {
  currentTab = tab;

  // tab button styles
  for (const t of tabs) {
    const tabBtn = document.getElementById("tab-" + t);
    tabBtn.classList.remove(...tabActive, ...tabInactive);

    if (t === tab) {
      tabBtn.classList.add(...tabActive);
    } else {
      tabBtn.classList.add(...tabInactive);
    }
  }

  // hide all sections
  allContainer.classList.add("hidden");
  interviewContainer.classList.add("hidden");
  rejectedContainer.classList.add("hidden");
  // emptyState.classList.add("hidden");


  // show selected section empty state
  if (tab === "all") allContainer.classList.remove("hidden");
  if (tab === "interview") interviewContainer.classList.remove("hidden");
  if (tab === "rejected") rejectedContainer.classList.remove("hidden");
}

  
  
  
// stats
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");

function updateStats() {
  totalStat.innerText = allContainer.children.length;
  interviewStat.innerText = interviewContainer.children.length;
  rejectStat.innerText = rejectedContainer.children.length;
}

updateStats();
switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function (event) {
  const clickedElement = event.target;
  const card = clickedElement.closest(".card");
  const parent = card.parentNode;
  const status = card.querySelector(".status");
 
 

  if (clickedElement.classList.contains("interview")) {
    status.innerText = "Interviewed";
    interviewContainer.appendChild(card);
    updateState();
  
  }
  if (clickedElement.classList.contains("rejected")) {
    status.innerText = "Rejected";
    rejectedContainer.appendChild(card);
    updateState();
  }
  if (clickedElement.classList.contains("delete")) {
    parent.removeChild(card);
    updateState();
  }

})

function updateState() {
  totalStat.innerText = allContainer.children.length;
  interviewStat.innerText = interviewContainer.children.length;
  rejectStat.innerText =rejectedContainer.children.length;
}
    updateState();
