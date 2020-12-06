

/*Ecrire un algorithme du jeu du morpion
L’ordinateur demande à l’utilisateur dans quelle case il veut jouer.
On vérifie si la case a déjà été jouée.
Les caractères à utiliser sont X ou O.
jusqu'à former une ligne, colonne ou diagonale*/

var table=document.querySelectorAll('td');

etatDePartie="partieEnCours"
var joueur="j1"
var texte=document.querySelector('p')



//while (etatDePartie=="partieEnCours"){



        table.forEach(element => {
           
            texte.innerHTML=`c'est au joueur ${joueur }de jouer`  
                console.log("tour de jeu")
            element.addEventListener("click",()=>{
                if ((element.className=="")&& (joueur=="j1")&&(etatDePartie=="partieEnCours")){
                    element.className="j1"
                    element.innerHTML="x"
                    console.log("tour de jeu j1")
                
                    joueur ="j2";
                 
                }
                else if ((element.className=="")&& (joueur=="j2")&&(etatDePartie=="partieEnCours")){
                    element.className="j2"
                    element.innerHTML="0"
                    
                    joueur ="j1"
                   
                   
                }
                else {
                    
                    console.log("case occupee")
                }
               
                etatDePartie=testVictoire(table,joueur)
                
            if(etatDePartie=="v1"){alert("le joueur 1 a gagne")}
            else if (etatDePartie=="v2"){alert("le joueur 2 a gagne")}
            testMatchNul(table,etatDePartie)
            texte.innerHTML=`c'est au joueur ${joueur }de jouer`
            })
       
    
    
    
   
   
}  )   

function testVictoire(table,joueur){
    result="";
    console.log(table[0].className)
    console.log(table[1].className)
    console.log(table[2].className)
    
            
            if(//testligne
                ((table[0].className==table[1].className)&&(table[2].className==table[1].className)&&(table[1].className!=""))||((table[3].className==table[4].className)&&(table[5].className==table[4].className)&&(table[4].className!=""))||((table[6].className==table[7].className)&&(table[8].className==table[7].className)&&(table[7].className!=""))//testcolonne
                ||((table[0].className==table[3].className)&&(table[6].className==table[3].className)&&(table[0].className!=""))||((table[1].className==table[4].className)&&(table[7].className==table[4].className)&&(table[1].className!=""))||((table[2].className==table[5].className)&&(table[8].className==table[5].className)&&(table[5].className!=""))//testDiagonale
                ||(((table[0].className==table[4].className)&&(table[8].className==table[4].className)&&(table[0].className!=""))||((table[2].className==table[4].className)&&(table[6].className==table[4].className))&&(table[4].className!="")))
               
                {  
                    if(joueur=="j2"){
                result="v1";
                console.log("testv1");
                console.log(table[0].className)
                console.log(table[1].className)
                console.log(table[2].className)
                console.log(table[3].className)
                console.log(table[4].className)
                console.log(table[5].className)
                console.log(table[6].className)
                console.log(table[7].className)
                console.log(table[8].className)

              
                }
             
             
               else if(joueur=="j1"){
                result="v2";
                console.log("testv2");
                
              }
             
             }
        
 


 else if((result!="v1")&&(result!="v2")){ result="partieEnCours";
 console.log("autre")}
 
  return result;
 }
 function testMatchNul(table,statut){
     if(statut!="v1"&&statut!="v2"){
     caseJouee=0
    for(i=0; i<9; i++){
      
        if(table[i].className!=""){
          caseJouee++
          if(caseJouee==9) {
            alert ("match nul")
            etatDePartie="match nul"}}
        } }
  }
   // console.log(table[0])
    //console.log(joueur)
   /*
    while (etatDePartie=="partieEnCours"){
        tourDeJeu(table);
   
       
        etatDePartie=testVictoire(table);
       if (etatDePartie=="partieEnCours"){
        console.log(table)
          alert( "c'est au " +joueur+"de jouer")}
        
         
        if(etatDePartie=="v1"){alert("le joueur 1 a gagne")}
        else if (etatDePartie=="v2"){alert("le joueur 2 a gagne")}

              

        }*/
   





/*
function remplirTableauVide(){
for( i=0;i<3;i++){
    
        
        
           table[j][i]=0
        }
    }
}




*/