<br><br><br><br>
 <p align="center">
<code>need:object:quantity:localisation</code><br>
<code>have:object:quantity:localisation</code>
 </p>
<br><br><br><br><br>

adonner permet gérer les flux d’échanges entre proies et prédateurs dans des contextes où elles seraient nombreuses, complexe et rapide. Le projet s'articule autour d'une application <b>server</b> qui gère les transactions.

Son socle est un tableau (array) dynamique dans lequel les proies s’inscrivent en prenant le soin de se quantifier, de se localiser dans un repère x et y et d'indiquer ce qu'il souhaite trouver. Les têtes sont des individus temporaires (variable) qui viennent défigurer cette base de donnée jusqu’à éradiquer la moindre demande. En même temps que d’apparaitre ou disparaitre, d’agir ou de déconstruire, le serveur n’est pas seul à écouter ces transformations. Chacun est miste au courant. (broadcast). 

L'application client est quand à elle beaucoup plus fléxible, il est possible de s'imaginer toute sorte de scénarios, de programme. Nous proposons dans le package un example: celui-ci retranscrit ces transactions sur une carte à l'aide de l'api google.map. Il nous permet ainsi de retourner des itinéraires propre à la demande. Mais il serait tout à fait possible de s'imaginer par example un simple renvoie textuel indiquant par example le message de la demande d'où l'idée de dévlopper ce projet en open-source.

Les prédateurs n'ont plus besoin de communiquer entre eux, ils n'ont qu'à se laisser guider par l'application qui permet elle d'organiser au mieux que possible les interventions. Ainsi d’éviter la désorientation, les oublies ou les doublons. 

<br><br>
<img src="example/square.png">
(0).Affichage d'une deuxième passe: réalisé par directionServices de google map, permet de résolver des itinéraires précis.

1.installation


2.<a href="www.adonner.mrself.com">déployement typique</a>
3.examples
