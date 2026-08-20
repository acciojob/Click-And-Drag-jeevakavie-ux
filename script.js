const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

cubes.forEach((cube) => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    cube.addEventListener("mousedown", (e) => {
        isDragging = true;

        const rect = cube.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        cube.style.position = "absolute";
        cube.style.zIndex = "10";
        cube.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();

        let left = e.clientX - containerRect.left - offsetX;
        let top = e.clientY - containerRect.top - offsetY;

        const maxLeft = container.clientWidth - cube.offsetWidth;
        const maxTop = container.clientHeight - cube.offsetHeight;

        left = Math.max(0, Math.min(left, maxLeft));
        top = Math.max(0, Math.min(top, maxTop));

        cube.style.left = left + "px";
        cube.style.top = top + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        cube.style.cursor = "grab";
    });
});