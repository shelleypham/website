function launchIndex(){
  // all functions from index.js





  $(".index-HackForTheFuture").parent().mouseenter(function(){
    const size = $(".isFull .content").width();
    $(".index-HF2").animate({
      width:size - 120
    }, 500)
  });

  $(".index-HackForTheFuture").parent().mouseleave(function(){
    $(".index-HF2").animate({
      width:0
    }, 500)
  });
}

function launchApplyField(noanimation){
  if(noanimation){
    launchApplyData();
  } else {
    launchApplyData();
  }
}

function launchApplyData(){

}

$(document).on("click", ".applyNow", function(){
  launchApplyField(false);
});
