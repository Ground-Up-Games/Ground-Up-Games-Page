const modelViewer = document.querySelector("model-viewer");
const modelViewerDefaults = document.querySelector("model-viewer");
const selectBox = document.querySelector("select");
const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");

function playAnimation() {
    if (selectBox.selectedIndex == 0) {
        window.alert("Please choose an animation");
    }
    else
    {
        modelViewer.setAttribute('animation-name', selectBox[selectBox.selectedIndex].text);
        modelViewer.play();
    }
}

function stopAnimation() {
    modelViewer.pause();
    modelViewer.currentTime = 0;
}

modelViewer.addEventListener('load', () => {
    const names = modelViewer.availableAnimations;
    let index = 0;
    names.forEach(animation => {
        let selectOption = `<option value="${index}">${animation}</option>`
        selectBox.innerHTML += selectOption;
        index += 1;
    });
});

playButton.addEventListener('click', playAnimation);
stopButton.addEventListener('click', stopAnimation);