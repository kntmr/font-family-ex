var option = null;

$(function() {
  chrome.runtime.sendMessage({
    action: "getValues",
    args: [{
      "enabled": "",
      "fontFamily": "",
    }]
  }, function(response) {
    option = response.values;
    init();
  });
});

function init() {
  if (option["enabled"] === 'true') {
    var fontFamily = option["fontFamily"];
    $('head').append($('<style>').text('*{font-family:' + fontFamily + ' !important}'));
  }
}
