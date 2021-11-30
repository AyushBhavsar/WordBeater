const levels = {
    easy: 6,
    medium: 4,
    hard: 2
};

function level(lvl_id) {
    if (lvl_id == "easy") {
        currentLevel = levels.easy;
        console.log(currentLevel);
        localStorage.setItem("choice", currentLevel);
    } else if (lvl_id == "medium") {
        currentLevel = levels.medium;
        console.log(currentLevel);
        localStorage.setItem("choice", currentLevel);
    } else {
        currentLevel = levels.hard;
        console.log(currentLevel);
        localStorage.setItem("choice", currentLevel);
    }
}
