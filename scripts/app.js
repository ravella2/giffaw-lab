$(document).ready(function() {
    //console.log("ready");
    
    $('form').on('submit', function(e){
        e.preventDefault();

        var gifSearch = $('.gif-input').val();
        var key = "dc6zaTOxFJmzC";
        var giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=${key}`;

        $.ajax({
            method: "GET",
            url: giphyUrl,
            success: onSuccess,
            error: onError
        });
        
        function onSuccess (response) {
            //console.log(response);
            $('.gif-gallery').empty();

            var gif = response.data

            gif.forEach(function(gif) {
                var imageItemHTML = `<img src="${gif.images.downsized.url}">`;
                $('.gif-gallery').append(imageItemHTML);
            })
        }

        function onError (e1,e2,e3) {
            console.log('there was an error', e2);
        } 
    });
});