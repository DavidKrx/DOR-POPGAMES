dia=document.getElementById("diaNoc");
con=document.getElementById("contraste");

function diurnoNocturno(){
    if (dia.value=="diurno"){
        if (con.value=="alto"){
            document.body.setAttribute("class","diurno-alto");}
        else if (con.value=="bajo") document.body.setAttribute("class","diurno");
       }
    else if (dia.value=="nocturno"){
        if (con.value=="alto"){
            document.body.setAttribute("class","nocturno-alto");
        }
        else if (con.value=="bajo") document.body.setAttribute("class","nocturno");
    }   
}



