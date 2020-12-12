/*----------------------------------------------------
Rollover using JQuery
------------------------------------------------------*/
"use strict";
$(document).ready(function () {
    $("#image_rollovers img").each(function () {
        var image1 = $(this).attr("src");
        var image2 = $(this).attr("id");

        var rolloverImage = new Image();
        rolloverImage.src = image2;

        $(this).hover(
            function () {
                $(this).attr("src", image1);
            },
            function () {
                $(this).attr("src", image2);
            }
        );
    });
});
