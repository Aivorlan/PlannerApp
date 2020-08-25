$(document).ready(function () {


    
    var currentDay = moment().format("dddd, MMMM Do");
    
    $("#currentDay").text(currentDay);

   
    
    var currentTime = parseInt(moment().format("HH"));
    var allBlocks = $(".rowBlock");
    var blockNine = $("[data-time='nine']");
    var blockTen = $("[data-time='ten']");
    var blockEleven = $("[data-time='eleven']");
    var blockTwelve = $("[data-time='twelve']");
    var blockOne = $("[data-time='one']");
    var blockTwo = $("[data-time='two']");
    var blockThree = $("[data-time='three']");
    var blockFour = $("[data-time='four']");
    var blockFive = $("[data-time='five']");
   
    if (currentTime >= 0 && currentTime < 9) {
        allBlocks.addClass("future");
    } else if (currentTime >= 9 && currentTime < 10) {
        allBlocks.addClass("future");
        blockNine.removeClass("future").addClass("present");
    } else if (currentTime >= 10 && currentTime < 11) {
        allBlocks.addClass("future");
        blockTen.removeClass("future").addClass("present");
        blockNine.removeClass("future").addClass("past");
    } else if (currentTime >= 11 && currentTime < 12) {
        allBlocks.addClass("future");
        blockEleven.removeClass("future").addClass("present");
        blockNine.removeClass("future").addClass("past");
        blockTen.removeClass("future").addClass("past");
    } else if (currentTime >= 12 && currentTime < 13) {
        allBlocks.addClass("future");
        blockTwelve.removeClass("future").addClass("present");
        blockNine.removeClass("future").addClass("past");
        blockTen.removeClass("future").addClass("past");
        blockEleven.removeClass("future").addClass("past");
    } else if (currentTime >= 13 && currentTime < 14) {
        allBlocks.addClass("future");
        blockOne.removeClass("future").addClass("present");
        blockNine.removeClass("future").addClass("past");
        blockTen.removeClass("future").addClass("past");
        blockEleven.removeClass("future").addClass("past");        
        blockTwelve.removeClass("future").addClass("past");
    } else if (currentTime >= 14 && currentTime < 15) {
        allBlocks.addClass("past");
        blockTwo.removeClass("past").addClass("present");
        blockThree.removeClass("past").addClass("future");
        blockFour.removeClass("past").addClass("future");
        blockFive.removeClass("past").addClass("future");        
    } else if (currentTime >= 15 && currentTime < 16) {
        allBlocks.addClass("past");
        blockThree.removeClass("past").addClass("present");
        blockFour.removeClass("past").addClass("future");
        blockFive.removeClass("past").addClass("future");
    } else if (currentTime >= 16 && currentTime < 17) {
        allBlocks.addClass("past");
        blockFour.removeClass("past").addClass("present");
        blockFive.removeClass("past").addClass("future");
    } else if (currentTime >= 17 && currentTime < 18) {
        allBlocks.addClass("past");
        blockFive.removeClass("past").addClass("present");
    } else if (currentTime >= 18) {
        allBlocks.addClass("past");
    }


    
    var saveBtn = $(".saveBtn");
    
    saveBtn.on("click", storeTasks);

    
    function storeTasks() {
        var selectedBlock = $(this).prev("div");
        var timeBlock = selectedBlock.data("time");
        var textAreaValue = selectedBlock.find("textarea").val();
        if (timeBlock == "nine") {
            localStorage.setItem("blockNine", textAreaValue);
        } else if (timeBlock == "ten") {
            localStorage.setItem("blockTen", textAreaValue);
        } else if (timeBlock == "eleven") {
            localStorage.setItem("blockEleven", textAreaValue);
        } else if (timeBlock == "twelve") {
            localStorage.setItem("blockTwelve", textAreaValue);
        } else if (timeBlock == "one") {
            localStorage.setItem("blockOne", textAreaValue);
        } else if (timeBlock == "two") {
            localStorage.setItem("blockTwo", textAreaValue);
        } else if (timeBlock == "three") {
            localStorage.setItem("blockThree", textAreaValue);
        } else if (timeBlock == "four") {
            localStorage.setItem("blockFour", textAreaValue);
        } else if (timeBlock == "five") {
            localStorage.setItem("blockFive", textAreaValue);
        }
    }

    
    init();

    
    function init() {
        renderTasks();
    }

    
    function renderTasks() {
        var blockNineValue = localStorage.getItem("blockNine");
        blockNine.find("textarea").val(blockNineValue);
        var blockTenValue = localStorage.getItem("blockTen");
        blockTen.find("textarea").val(blockTenValue);
        var blockElevenValue = localStorage.getItem("blockEleven");
        blockEleven.find("textarea").val(blockElevenValue);
        var blockTwelveValue = localStorage.getItem("blockTwelve");
        blockTwelve.find("textarea").val(blockTwelveValue);
        var blockOneValue = localStorage.getItem("blockOne");
        blockOne.find("textarea").val(blockOneValue);
        var blockTwoValue = localStorage.getItem("blockTwo");
        blockTwo.find("textarea").val(blockTwoValue);
        var blockThreeValue = localStorage.getItem("blockThree");
        blockThree.find("textarea").val(blockThreeValue);
        var blockFourValue = localStorage.getItem("blockFour");
        blockFour.find("textarea").val(blockFourValue);
        var blockFiveValue = localStorage.getItem("blockFive");
        blockFive.find("textarea").val(blockFiveValue);
    }

})