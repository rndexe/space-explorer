import Game from "./Game";
import Stats from "three/examples/jsm/libs/stats.module.js";

// Initialize Game Object
function main() {
    // Show stats
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    //Run the game
    const game = new Game(stats);
    game.animate();

    // Event listeners
    window.addEventListener("resize", () => {
        game.onResize();
    });

    document.addEventListener("keyup", (e) => {
        game.onKeyUp(e);
    });

    document.addEventListener("keydown", (e) => {
        game.onKeyDown(e);
    });
}

main();
