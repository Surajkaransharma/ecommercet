
var noOfProduct = $("#main ul li").length;
var totalProductWidth = 0;
for (var i = 0; i < noOfProduct; i++) {
    var productWidth = $("#main ul li").eq(i).outerWidth(true);
    totalProductWidth = totalProductWidth + productWidth;
}

$("#slider").css('width', totalProductWidth + 'px');

var speed = 1;
animateProducts();

function animateProducts() {
    $("#slider li").eq(0).animate({
        'marginLeft': '-=' + speed + 'px'
    }, 1, function() {
        var animProductWidth = $(this).outerWidth(true);

        if (speed >= animProductWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr('style');
        }

        aninInterval = setTimeout(function() {
            animateProducts();
        });
    });
}

$("#slider").hover(function() {
    clearTimeout(aninInterval);
    $("#slider li").eq(0).stop();
}, function() {
    animateProducts();
});

$("#main ul li:nth-child(1)").hover(function() {
    $(".t1").animate({ marginTop: '-80px' });
});

$("#main ul li:nth-child(1)").mouseleave(function() {
    $(".t1").animate({ marginTop: '25px' });
});

$("#main ul li:nth-child(2)").hover(function() {
    $(".t2").animate({ marginTop: '-80px' });
});

$("#main ul li:nth-child(2)").mouseleave(function() {
    $(".t2").animate({ marginTop: '25px' });
});

$("#main ul li:nth-child(3)").hover(function() {
    $(".t3").animate({ marginTop: '-80px' });
});

$("#main ul li:nth-child(3)").mouseleave(function() {
    $(".t3").animate({ marginTop: '25px' });
});

$("#main ul li:nth-child(4)").hover(function() {
    $(".t4").animate({ marginTop: '-80px' });
});

$("#main ul li:nth-child(4)").mouseleave(function() {
    $(".t4").animate({ marginTop: '25px' });
});

$("#main ul li:nth-child(5)").hover(function() {
    $(".t5").animate({ marginTop: '-80px' });
});

$("#main ul li:nth-child(5)").mouseleave(function() {
    $(".t5").animate({ marginTop: '25px' });
});

$("#main ul li:nth-child(6)").hover(function() {
    $(".t6").animate({ marginTop: '-80px' });
});

$("#main ul li:nth-child(6)").mouseleave(function() {
    $(".t6").animate({ marginTop: '25px' });
});


/*SLIDER*/





/////////////////////////counter increament




let count = 1;

// Getting elements
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// Update counter display
function updateCounter() {
counterValue.textContent = count;
decrementBtn.disabled = count === 1; // Disable the decrement button if count is 0
}

// Increment the counter
incrementBtn.addEventListener('click', () => {
count++;
updateCounter();
});

// Decrement the counter
decrementBtn.addEventListener('click', () => {
if (count > 0) {
count--;
updateCounter();
}
});

// Initialize the counter on page load
updateCounter();
