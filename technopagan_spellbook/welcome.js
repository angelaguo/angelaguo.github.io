// make UI display foreign home letter
function toggleInstructionVisibility(){
    $(".help").toggleClass('hidden');
}

function safety(){
    $(".safety").removeClass('hidden');
    $(".crystal").addClass('hidden');
    $(".truth").addClass('hidden');
    $(".neutrality").addClass('hidden');
    $(".deformation").addClass('hidden');
    $(".invis").addClass('hidden');
    $(".web").addClass('hidden');
}

function crystal(){
    $(".safety").addClass('hidden');
    $(".crystal").removeClass('hidden');
    $(".truth").addClass('hidden');
    $(".neutrality").addClass('hidden');
    $(".deformation").addClass('hidden');
    $(".invis").addClass('hidden');
    $(".web").addClass('hidden');
}

function truth(){
    $(".safety").addClass('hidden');
    $(".crystal").addClass('hidden');
    $(".truth").removeClass('hidden');
    $(".neutrality").addClass('hidden');
    $(".deformation").addClass('hidden');
    $(".invis").addClass('hidden');
    $(".web").addClass('hidden');
}

function invis(){
    $(".safety").addClass('hidden');
    $(".crystal").addClass('hidden');
    $(".truth").addClass('hidden');
    $(".neutrality").addClass('hidden');
    $(".deformation").addClass('hidden');
    $(".invis").removeClass('hidden');
    $(".web").addClass('hidden');
}

function neutrality(){
    $(".safety").addClass('hidden');
    $(".crystal").addClass('hidden');
    $(".truth").addClass('hidden');
    $(".neutrality").removeClass('hidden');
    $(".deformation").addClass('hidden');
    $(".invis").addClass('hidden');
    $(".web").addClass('hidden');
}

function deformation(){
    $(".safety").addClass('hidden');
    $(".crystal").addClass('hidden');
    $(".truth").addClass('hidden');
    $(".neutrality").addClass('hidden');
    $(".deformation").removeClass('hidden');
    $(".invis").addClass('hidden');
    $(".web").addClass('hidden');
}

function web(){
    $(".safety").addClass('hidden');
    $(".crystal").addClass('hidden');
    $(".truth").addClass('hidden');
    $(".neutrality").addClass('hidden');
    $(".deformation").addClass('hidden');
    $(".invis").addClass('hidden');
    $(".web").removeClass('hidden');
}

function submit(){
    $(".presubmit").addClass('hidden');
    $(".postsubmit").removeClass('hidden');
}
