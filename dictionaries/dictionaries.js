// make UI display foreign home letter
function showWushuDict(){
    $(".puppetry").addClass('hidden');
    $(".cs").addClass('hidden');
    $(".wushu").removeClass('hidden');
    $("#puppetry").removeClass('active');
    $("#cs").removeClass('active');
    $('#wushu').addClass('active');
}

// make UI display single submit form
function showPuppetDict(){
    $(".puppetry").removeClass('hidden');
    $(".wushu").addClass('hidden');
    $(".cs").addClass('hidden');
    $("#puppetry").addClass('active');
    $('#wushu').removeClass('active');
    $('#cs').removeClass('active');
}

// make UI display single submit form
function showCSDict(){
    $(".cs").removeClass('hidden');
    $(".wushu").addClass('hidden');
    $(".puppetry").addClass('hidden');
    $("#cs").addClass('active');
    $('#wushu').removeClass('active');
    $('#puppetry').removeClass('active');
}