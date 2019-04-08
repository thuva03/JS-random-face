const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    getPerson(getData);
});

function getPerson(cb) {
    const url = `https://randomuser.me/api/`;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);

    ajax.onload = function () {
        if (this.status === 200) {
            cb(this.responseText, showData)
        } else
            this.onerror();
    };
    ajax.onerror = function () {
        console.log("there was an error");
    };
    ajax.send();
}

function getData(response, cb) {
    const data = JSON.parse(response);
    const { name: { first },
        name: { last },
        picture: { large },
        location: { street },
        phone,
        email
    }
        = data.results[0];

    showData(first, last, large, street, phone, email);
}

function showData(first, last, large, street, phone, email) {
    document.getElementById('first').textContent = first;
    document.getElementById('last').textContent = last;
    document.getElementById('street').textContent = street;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('photo').src = large;
}