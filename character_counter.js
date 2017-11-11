javascript:(function () {
  function getSelectionText() {
    var text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

  var len = getSelectionText().length;
  var len_no_spaces = getSelectionText().replace(/ /g, '').length;
  alert('Number of highlighted characters.\n- including whitespaces: ' + len + ';\n' + '- excluding whitespaces: ' + len_no_spaces + ';');
})();
