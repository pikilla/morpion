

/*Ecrire un algorithme du jeu du morpion
L’ordinateur demande à l’utilisateur dans quelle case il veut jouer.
On vérifie si la case a déjà été jouée.
Les caractères à utiliser sont X ou O.
jusqu'à former une ligne, colonne ou diagonale*/

var 

var table=new Array(3);
for( i=0;i<3;i++){
    table[i]=new Array(3)
}
etatDePartie="partieEnCours"
var joueur="j1"

    remplirTableauVide();

   // console.log(table[0])
    //console.log(joueur)
   
    while (etatDePartie=="partieEnCours"){
        tourDeJeu(table);
        
       
        etatDePartie=testVictoire(table);
       if (etatDePartie=="partieEnCours"){
        console.log(table)
          alert( "c'est au " +joueur+"de jouer")}
          console.log(table[0][0])
          console.log(table[1][0])
          console.log(table[2][0])
          console.log(table[0][1])
          console.log(table[1][1])
          console.log(table[2][1])
          console.log(table[0][2])
          console.log(table[1][2])
          console.log(table[2][2])
         
        if(etatDePartie=="v1"){alert("le joueur 1 a gagne")}
        else if (etatDePartie=="v2"){alert("le joueur 2 a gagne")}

        

        }
   

function tourDeJeu(table){
    col=Number(prompt ("entrer col"))
    ligne=Number(prompt ("entrer ligne "))
    
        if ((table[ligne][col]==0)&& (joueur=="j1")){
          table[ligne][col]=1;

        joueur ="j2"
        console.log("ifj1")
       
        
    }
        else if ((table[ligne][col]==0)&& (joueur=="j2")){
            table[ligne][col]=-1;
             
            joueur ="j1"
            console.log("ifj2")
        }
        else {
            tourDeJeu(table)
            console.log("case occupee")
        }
       
    }     

function testVictoire(table){
   result="";

    
    for( i=0;i<3;i++){
        console.log("testboucle")
           
           if ((table[0][i]+table[1][i]+table[2][i] == 3)||(table[i][0]+table[i][1]+table[i][2] == 3)){
             result="v1";
             console.log("testv1");
             
            
            
            }
              else if((table[0][i]+table[1][i]+table[2][i]==-3)||(table[i][0]+table[i][1]+table[i][2] ==-3)){
                result="v2";
                console.log("testv2")
            
            }
        }

 if((table[00]+table[1][1]+table[1][0]==3)||(table[2][0]+table[1][1]+table[0][2]==3)){
    
    result="v1";
    console.log("testboucle2")
    
}
else if((table[0][0]+table[1][1]+table[1][0]==-3)||(table[2][0]+table[1][1]+table[0][2]==-3)){
 
    result="v2";
}
else if((result!="v1")&&(result!="v1")){ result="partieEnCours";
console.log("autre")}

 return result;
}
// 
function remplirTableauVide(){
for( i=0;i<3;i++){
    for( j=0;j<3;j++){
        
        
           table[j][i]=0
        }
    }
}




