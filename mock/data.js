
class Task {
    constructor(
        name = "",
        description = "",
        done = false,
        deadline = new Date(Date.now() + 1000 * 60 * 60 * 24),
    ) {

    }
}

module.exports = new Array(10).fill(1).map((element, index) => new Task(`Task ${index}`, `Task ${index}`));
