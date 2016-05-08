// make UI display foreign home letter
function showWushuLetter(){
    $(".puppetry").addClass('hidden');
    $(".wushu").removeClass('hidden');
    $("#puppetry").removeClass('active');
    $('#wushu').addClass('active');
}

// make UI display single submit form
function showPuppetLetter(){
    $(".puppetry").removeClass('hidden');
    $(".wushu").addClass('hidden');
    $("#puppetry").addClass('active');
    $('#wushu').removeClass('active');
}