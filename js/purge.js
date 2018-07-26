// alert("loaded");

function DOMModificationHandler() {
    $(this).unbind('DOMSubtreeModified.event1');
    setTimeout(function () {
        modify();
        $('#timeline').bind('DOMSubtreeModified.event1', DOMModificationHandler);
    }, 10);
}
$('#timeline').bind('DOMSubtreeModified.event1', DOMModificationHandler);

function modify() {
    // alert("modifying");
    //find and modify tall tweets
    $('.tweet-text').each(function (index) {
        //   alert("found tweet");
        var total = $(this).find(".twitter-hashtag").length;
        if (total > 3) {
            $(this).parent().parent().css("opacity", "0.3");
            $(this).parent().parent().find(".AdaptiveMediaOuterContainer").html("<small>Media removed for your convenience.</small>")
            // alert("tweet is spam");
        }
    });
}