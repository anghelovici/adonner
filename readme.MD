<br><br><br><br>
 <p align="center">
<code>need:object:quantity:localisation</code><br>
<code>have:object:quantity:localisation</code>
 </p>
<br><br><br><br><br>


<ul>
 <li>A.introduction
<ul>

   <li>A.1.problématique</li>
   <li>A.2.ca permet quoi</li>
     <li>A.3.c'est quoi</li>
 </ul>
 </li>
 
 <li>B.faire le lien
 <ul><li>B.1.deux fonctions essentielles</li></ul>
 
 <ul>
 <li>B.2.need<ul>
 <li>B.2.1.temporaire</li>
 <li>B.2.2.mysql</li>
  </ul>
  </li>
  
 <li>B.3.have
 <ul>
 <li>B.3.1.quantité</li>
 <li>B.3.2.objet</li>
 <li>B.3.3.localisation</li>
 <li>B.3.3.1.étoile</li>
 <li>B.3.3.2.djerkesta</li>
 </ul>
  </li>
 
 
 </ul>
</li>
 <li>C.représenter le lien
 <ul>
 
 <li>C.1.on en sort quoi</li>
 <li>C.2.custom<ul>
 <li>C.2.1.hight tech</li>
 <li>C.2.2.low tech</li></ul>
 
 </li>
 </ul>
 
 </li>

 <li>D.déployement
 <ul>
 <li>D.0. qu'est ce qu'il faut</li>
 <li>D.1.serveur</li>
 <li>D.2.client</li>
 </ul>
 </li>
 
 <li>E.source
<ul> <li>E.1.concept</li>
 <li>E.2.module</li>

</li>
 
</ul>

</li>
</uL>


<br><br><br><br><br>

A.2. permet quoi<br>

adonner permet gérer les flux d’échanges entre des proies et prédateurs dans des contextes où elles seraient nombreuses, complexe et rapide. Le projet s'articule autour d'une application <b>server</b> qui gère les transactions entre les acteurs et d'une autre qui permet de retranscrire, communiquer les liaisons. 
 Les prédateurs n'ont plus besoin de communiquer entre eux, ils n'ont qu'à se laisser guider par l'application qui permet elle d'organiser au mieux que possible les interventions. Ainsi d’éviter la désorientation, les oublies ou les doublons. 


Dans un premier temps les proies s’inscrivent en prenant le soin de se quantifier, de se localiser dans un repère x et y et d'indiquer ce qu'il souhaite trouver dans tableau (array) dynamique. Puis, Les prédateurs, qui sont des individus temporaires (variable), viennent défigurer cette base de donnée jusqu’à éradiquer la moindre demande.

En même temps que d’apparaitre ou disparaitre, d’agir ou de déconstruire, le serveur n’est pas seul à écouter ces transformations. Chacun est mise au courant. 

L'application client est quand à elle beaucoup plus fléxible, il est possible de s'imaginer toute sorte de scénarios, de programme. Nous proposons dans le package un example: celui-ci retranscrit ces transactions sur une carte à l'aide de l'api google.map. Il nous permet ainsi de retourner des itinéraires propre à la demande. Mais il serait tout à fait possible de s'imaginer par example un simple renvoie textuel indiquant par example le message de la demande d'où l'idée de dévlopper ce projet en open-source.

<br>


D.2. Déployement<br>
D.2.Serveur<br>

<code>var rays=3, ii=3; </code>


D.2.Client<br>
B.2.2. need<br>

dans la localisation tu peux très bien mettre des coordoonées latlng comme <code>40.434,30.3403</code> ou bien une adresse purement textuelle <code>Reims, france</code>
 
 <code> need(object,quantity,localisation); <code>
 ici tu envoie au serveur une demande</code></code>

<br>
B.2.2. have<br>

La quantité est l'élément de saturation, celui qui permet la non harcélisation souvent décriée dans ces stratégies, ici, l'annonce disparaît immédiatement la quantité close. Nous apprécions cette fonction et l'imaginons comme des proies et prédateurs. Comme si il y aurait un stock de nourriture à épuiser en un point ou si il y aurait une multitude de choses à détruire dissimilue sur un territoire. L'objet ouvre diverses channel, comme des lieux de discussions ou s'articule et se rencontre les choses, c'est comme une superposition de couches laissant aucun1e place à un conflit possible. Et, enfin la proximité est un élément clef de condition, c'est en éméttant un périmétre que l'algorithme se place sur l'individu. C'est ici que réside la fin de notre application, nous, nous proposons simplement la premiere passe, c'est à dire un simple algorithme de proximité : de direction (djerkeasta) ou celui de l'étoile où il est recherche constamment en se référant à un même point. 

<br>
E.1 source<br>
E.1.1 module<br>

https://www.twilio.com/docs/sms/tutorials/how-to-send-sms-messages-node-js<br>
https://nodejs.org/en/<br>
https://expressjs.com<br>
https://socket.io<br>
https://cloud.google.com/maps-platform/?hl=fr
<br>
E.1.2 concept<br>
https://urbanrisklab.org

<br><br>
<img src="example/square.png">
(0).Affichage d'une deuxième passe: réalisé par directionServices de google map, permet de résolver des itinéraires précis. <a href="http://www.adonner.mrself.com">déployement réel</a>

