let searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener('click', function () {
    let searchBtnIcon = document.querySelector(".search-button i");
    if (searchBtnIcon.classList.contains("fa-search")) {
        searchBtnIcon.classList.remove("fa-search");
        searchBtnIcon.classList.add("fa-times");
        document.querySelector(".search-div").style.visibility = "visible";
    } else {
        searchBtnIcon.classList.remove("fa-times");
        searchBtnIcon.classList.add("fa-search");
        document.querySelector(".search-div").style.visibility = "hidden";
    };
})


function initMap() {
    const myLatLng = { lat: 41.673409, lng: 44.832981 };
    const map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 19,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}

window.onscroll = function () {
    if (this.oldScroll > this.scrollY) {
        document.getElementById('up-arrow').style.visibility = 'hidden';
    }
    else if (this.oldScroll < this.scrollY) {
        document.getElementById('up-arrow').style.visibility = 'visible';
    }
    this.oldScroll = this.scrollY;
}




