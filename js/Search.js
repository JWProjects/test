function searchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    

    // Loop through all list items, and hide those who don't match the search query
     document.getElementById('myInput').style.display = "block";
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    if (myInput.value.length > 0) {
        document.getElementById('search').style.display = 'block';
    } else
        document.getElementById('search').style.display = 'none';
    }
}

   