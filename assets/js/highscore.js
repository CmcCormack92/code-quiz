var storage = JSON.parse(localStorage.getItem('user'));
var mainContent = document.getElementById('main')
var ul = document.getElementById('scores')

if (storage === null) {

    mainContent.textContent = "No Highscores"

} else {
    
    mainContent.textContent = ""

    for (var i = 0; i < storage.length; i++) {
        var li = document.createElement('li')
        li.textContent = 'Name: ' + storage[i].name + ' - Score: ' + storage[i].score
        ul.append(li)
    }
}