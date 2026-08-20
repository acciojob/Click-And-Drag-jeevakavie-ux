const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    item.addEventListener("mousedown", (e) => {
        isDragging = true;

        const rect = item.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        item.style.position = "absolute";
        item.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();

        let left = e.clientX - containerRect.left - offsetX;
        let top = e.clientY - containerRect.top - offsetY;

        const maxLeft = container.clientWidth - item.offsetWidth;
        const maxTop = container.clientHeight - item.offsetHeight;

        left = Math.max(0, Math.min(left, maxLeft));
        top = Math.max(0, Math.min(top, maxTop));

        item.style.left = left + "px";
        item.style.top = top + "px";
    });

    item.addEventListener("mouseup", () => {
        isDragging = false;
    });
});