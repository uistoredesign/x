function ui_v1moleplots(){
	$('.ui-v1moleplots').show();
	$('.ui-v2designs').hide();
	$('.ui-v3xcraybos').hide();
	var element = document.getElementById("pertamaMenu");
    element.classList.add("active");
    var element = document.getElementById("keduaMenu");
    element.classList.remove("active");
    var element = document.getElementById("ketigaMenu");
    element.classList.remove("active");
}
function ui_v2designs(){
	$('.ui-v1moleplots').hide();
	$('.ui-v2designs').show();
	$('.ui-v3xcraybos').hide();
	var element = document.getElementById("pertamaMenu");
    element.classList.remove("active");
    var element = document.getElementById("keduaMenu");
    element.classList.add("active");
    var element = document.getElementById("ketigaMenu");
    element.classList.remove("active");
}
function ui_v3xcraybos(){
	$('.ui-v1moleplots').hide();
	$('.ui-v2designs').hide();
	$('.ui-v3xcraybos').show();
	var element = document.getElementById("pertamaMenu");
    element.classList.remove("active");
    var element = document.getElementById("keduaMenu");
    element.classList.remove("active");
    var element = document.getElementById("ketigaMenu");
    element.classList.add("active");
}
