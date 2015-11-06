function saveOptions() {
  localStorage["enabled"] = $('#chkEnabled').is(':checked');
  localStorage["fontFamily"] = $('#inputFontFamily').val();

  var status = $("#status");
  status.text('Options Saved.');
  setTimeout(function() {
    status.text('');
  }, 750);
}

function restoreOptions() {
  $('#chkEnabled').attr('checked', localStorage["enabled"] === 'true' ? true : false);
  $('#inputFontFamily').val(localStorage["fontFamily"] || "" );
}

function changeEnabled() {
  if ($('#chkEnabled').is(':checked')) {
    $('#inputFontFamily').removeAttr('disabled');
  } else {
    $('#inputFontFamily').attr('disabled', 'disabled');
  }
}

$(function() {
  restoreOptions();
  changeEnabled();

  $('#chkEnabled').change(function() {
    changeEnabled();
  });
});

$('#btnSave').on('click', function() {
  saveOptions();
});
