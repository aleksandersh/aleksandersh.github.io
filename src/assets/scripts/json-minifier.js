$(function () {
    const jsonMinifierIn = $('#json-minifier-in');
    const jsonMinifierOut = $('#json-minifier-out');

    jsonMinifierIn.on('input', function (e) {
        minifyAndUpdate(e.target.value, jsonMinifierIn, jsonMinifierOut);
    });
});

function minifyAndUpdate(json, widgetIn, widgetOut) {
    if (json === '') {
        widgetOut.val('');
        widgetIn.removeClass('json-minifier-textarea-error');
        return;
    }
    try {
        widgetOut.val(JSON.stringify(JSON.parse(json)));
        widgetIn.removeClass('json-minifier-textarea-error');
    } catch (error) {
        widgetIn.addClass('json-minifier-textarea-error');
    }
}
