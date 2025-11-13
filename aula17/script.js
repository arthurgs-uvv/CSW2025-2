function repetir()
{
    var n = document.getElementById('n1').value;
    var x = 1;
    var y = 0;

    for(i=n; (i>=1); i--){
        y = y + x * i;
    }

    document.writeln(y);
}