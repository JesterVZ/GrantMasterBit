$(document).ready(function () {
    $("input[type=radio][name=radios]").change(function () {
        if(this.value == 'weight'){
            $(".table").css("display", "none");
            $(".work").css("display", "none");
            $(".weight").css("display", "block");
        }
        if(this.value == 'new'){
            $(".table").css("display", "block");
            $(".weight").css("display", "none");
            $(".work").css("display", "none");
        }
        if(this.value == 'work'){
            $(".table").css("display", "none");
            $(".weight").css("display", "none");
            $(".work").css("display", "block");
        }
    });
});