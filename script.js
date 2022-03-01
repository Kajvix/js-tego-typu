function sekcja()
{
    var liczba = document.getElementById("in").value;
    if (liczba>0) document.getElementById("nioh").innerHTML="Dodatnia";
    else if (liczba<0) document.getElementById("nioh").innerHTML="Ujemna";
    else if (liczba==0) document.getElementById("nioh").innerHTML="Po prostu zero";
    else document.getElementById("nioh").innerHTML="Liczbę jełopie";
    
}