const ACTIVE_CLASS = "is-active";
const VISITED_CLASS = "is-visited";

export function initMetroLine() {
  const rail = document.querySelector("[data-metro-line]");
  if (!rail) {
    return;
  }

  const stations = Array.from(rail.querySelectorAll(".metro-line__station"));

  const stationMap = new Map();
  stations.forEach((station) => {
    const sectionId = station.dataset.stationFor;
    const section = document.getElementById(sectionId);
    if (section) {
      stationMap.set(section, station);
    }
  });

  if (stationMap.size === 0) {
    return;
  }

  const visibleSections = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target);
        } else {
          visibleSections.delete(entry.target);
        }
      });
      updateStations(stationMap, visibleSections);
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    }
  );

  stationMap.forEach((_, section) => observer.observe(section));

  stations.forEach((station) => {
    station.style.pointerEvents = "auto";
    station.style.cursor = "pointer";
    station.addEventListener("click", () => {
      const sectionId = station.dataset.stationFor;
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function updateStations(stationMap, visibleSections) {
  const allSections = Array.from(stationMap.keys());
  const visibleIndices = allSections
    .map((section, idx) => (visibleSections.has(section) ? idx : -1))
    .filter((idx) => idx !== -1);

  const activeIndex =
    visibleIndices.length > 0
      ? Math.min(...visibleIndices)
      : nearestSectionIndex(allSections);

  allSections.forEach((section, idx) => {
    const station = stationMap.get(section);
    station.classList.toggle(ACTIVE_CLASS, idx === activeIndex);
    station.classList.toggle(VISITED_CLASS, idx < activeIndex);
  });
}

function nearestSectionIndex(sections) {
  let chosen = 0;
  let bestDelta = Infinity;
  sections.forEach((section, idx) => {
    const top = section.getBoundingClientRect().top;
    if (top <= 100 && Math.abs(top) < bestDelta) {
      bestDelta = Math.abs(top);
      chosen = idx;
    }
  });
  return chosen;
}
