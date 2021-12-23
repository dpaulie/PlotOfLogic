function main() {
    const canvas = document.querySelector("#glCanvas");
    //init GL context
    const gl = canvas.getContext("webgl");

    //check if GL initialized
    if(gl == null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    //fill screen, black, full opacity
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    //clear buffers to re-render
    gl.clear(gl.COLOR_BUFFER_BIT)
}

window.onload = main;