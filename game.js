get_p1 = localStorage.getItem("Player_1");
get_p2 = localStorage.getItem("Player_2");

score1 = 0;
score2 = 0;

document.getElementById("p1_score").innerHTML = score1;
document.getElementById("p2_score").innerHTML = score2;

document.getElementById("p1_name").innerHTML = get_p1;
document.getElementById("p2_name").innerHTML = get_p2;

document.getElementById("QT").innerHTML = "Question Turn - " + get_p1;
document.getElementById("AT").innerHTML = "Answer Turn - " + get_p2;

