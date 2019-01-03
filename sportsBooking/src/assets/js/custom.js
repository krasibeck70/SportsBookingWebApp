import $ from 'jquery';
window.onload = (() => {
    var interval = setInterval(() => {
        try {
            var currentElement = document.getElementsByClassName('active')

            var numberOfImage = currentElement[0].getAttribute('id').match(/(\d+)/)[0];

            if (numberOfImage == 4) {
                numberOfImage = 0;
            }

            addClassActive("img" + currentElement[0].getAttribute('id').match(/(\d+)/)[0]);
            numberOfImage++;

            removeClassActive("img" + numberOfImage);
        } catch (error) {
            clearInterval(interval)
            console.log("error");
            $('#principal').css({ height: $(window).height(), width: $(window).width() })
                .fadeIn('slow', function () {
                    $('#principal').css('background-image', 'url(/pictures/backgrounds/screenBackground4.jpg)');
                    $('.container').fadeIn('slow');
                });
            //document.body.style.backgroundImage = 'url("/pictures/backgrounds/screenBackground4.jpg")';
        }
    }, 50)

    function addClassActive(id) {
        var element = document.getElementById(id);
        element.classList.add('d-none');
        element.classList.remove('active');
    }

    function removeClassActive(id) {
        var element = document.getElementById(id);
        element.classList.remove('d-none');
        element.classList.add('active');
    }
})