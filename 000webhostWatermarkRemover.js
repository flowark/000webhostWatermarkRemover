$(document).ready( function() {
    $('img').each( function() {
        if($(this).attr("alt") == "www.000webhost.com") {
            $(this).remove();
            console.log("🧹 000webhost watermark found and removed ! 🧹");
        }
        else {
            console.log("🤔 000webhost watermark not found 🤔")
        }
    });
});