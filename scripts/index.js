$(function () {
    startSoftwareDeveloperCursorTimer($("#header-welcome-software-developer-cursor-block"), 1, 5);
});

function startSoftwareDeveloperCursorTimer(softwareDeveloperCursor, opacity, counter) {
    if (counter == 0) {
        return;
    }
    setTimeout(function () {
        if (opacity == 1) {
            opacity = 0;
        } else {
            opacity = 1;
        }
        softwareDeveloperCursor.css("opacity", opacity);
        startSoftwareDeveloperCursorTimer(softwareDeveloperCursor, opacity, counter - opacity);
    }, 1000);
}
