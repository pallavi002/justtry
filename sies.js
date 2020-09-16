const burger = document.querySelector(".nav i");
const side = document.querySelector(".nav-list");
burger.addEventListener("click", (e) => {
    side.classList.toggle("open");
    e.preventDefault();
});

//images
filterSelection("StudentLife")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//logos filter

$(document).ready(function() {
    var images = $(".handler > div").hide(),
        x = 4;
    var showMore = $('#showMore');
    var showLess = $('#showLess');
    var funcs = {
        'showMore': function() {
            ++x;
            show();
        },
        'showLess': function() {
            --x;
            show();
        }
    }
    $('.controls').on('click', 'a', function(e) {
        return (funcs[e.target.id] || function() {})(), false;
    });

    function show() {
        images.hide().filter(function(i) {
            return i < (x * 6);
        }).show();
        showMore.show().filter(function() {
            return !images.is(':hidden');
        }).hide();
        showLess.show().filter(function() {
            return x === 1;
        }).hide();
    }
    show();
});