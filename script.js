const container = document.querrySelector(".items");
const cubes = document.querySelectorAll("item");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(function(cube) {

    cube.addEventListener("mousedown", function(e) {
		selectedCube = cube;

        const cubeRect = cube.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        offsetX = e.clientX - cubeRect.left;
        offsetY = e.clientY - cubeRect.top;

        cube.style.position = "absolute";
        cube.style.zIndex = "10";

        function moveCube(e) {
            if (!selectedCube) return;

            let left = e.clientX - containerRect.left - offsetX;
            let top = e.clientY - containerRect.top - offsetY;

            const maxLeft = containerRect.Width - cubeReact.Width;
            const maxTop = containerRect.Height - cubeReact.Height;

            left = Math.max(0, Math.min(left, maxLeft));
            top = Math.max(0, Math.min(top, maxTop));

            selectedCube.style.left = left + "px";
            selectedCube.style.top = top + "px";
        }

        function stopDrag() {
            selectedCube = null;

            document.removeEventListener("mousemove", moveCube);
            document.removeEventListener("mouseup", stopDrag);
        }

        document.addEventListener("mousemove", moveCube);
        document.addEventListener("mouseup", stopDrag);
	});
});
