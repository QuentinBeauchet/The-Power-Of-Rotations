# parkourBabylonJS

Quentin BEAUCHET <br>
Pierre KOUYOUMDJIAN <br>

<h1>⚠️WARNING⚠️</h1>
Notre jeu ne fonctionne pas sur safari et vu qu'on a pas de mac on ne peut pas regler le probleme.

<a href="https://power-of-rotations.herokuapp.com/"><h1>Lien du jeu</h1></a>

<h1>Le jeu</h1>

> Le but du jeu est de finir chaque niveau le plus vite possible, ou pour les collectionneurs de récupérer toutes les citrouilles.
>
> Les mouvements sont relatifs à la rotation de la balle, donc lorsque l'on veut sauter dans une direction
> il faut que la balle tourne déjà dans celle-ci. Le joueur dispose de 3 sauts, la trainée derrière
> lui sert d'indicateur de combien il lui en reste.
> Les touches sont décrites en globalité dans le menu d'aide.
>
> Il y a un mode facile a activer depuis le menu de sélection des niveaux qui accorde au joueur un nombre de saut infini.

<h1>Nos types de blocs</h1>

- <h2>Les checkpoints:</h2>
  >Ils permettent de revenir à un point du niveau lorsque l'on meurt ou on peut le faire manuellement en appuyant sur la touche R.</br>
  Le checkpoint sauvegardé est le dernier activé par le joueur.</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367782619693077/checkpoint.png" alt="CHECKPOINT" width="80px">

- <h2>La fin du niveau:</h2>
  ><img src="https://cdn.discordapp.com/attachments/324198067089702913/979367783005577306/end.png" alt="END" width="80px">

- <h2>Les collectibles:</h2>
  >Pour ceux qui sont des collectionneurs dans l'âme (le niveau est finissable sans tous les récupérer).</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367783563415582/collectible.png" alt="COLLECTIBLE" width="80px">

- <h2>Les trampolines:</h2>
  >Il font sauter la balle plus haut qu'un saut traditionnel.</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367783311740988/trampoline.png" alt="TRAMPOLINES" width="80px">

- <h2>Les piques:</h2>
  >Ce sont des obstacles qu'il ne vaut mieux pas toucher sous peine de vous renvoyer au dernier checkpoint.</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367784330969138/spikes.png" alt="PIQUES" width="80px">

- <h2>Les ennemies:</h2>
  >Comme les piques mais ils se déplacent sur un axe jusqu'aux premiers objstacles puis font demi-tour.</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367781785034832/ennemy.png" alt="ENNEMIES" width="80px">

- <h2>Les rotateurs:</h2>
  >De base le joueur ne se déplace que sur un axe, grace à ses blocs, le jeu devient 3D.</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367782112198686/rotator.png" alt="ROTATEURS" width="80px">

- <h2>Les ralentisseurs:</h2>
  >Ils diminuent la vitesse max du joueur.</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367781474639882/decreaseSpeed.png" alt="RALENTISSEURS" width="80px">

- <h2>Les accélérateurs:</h2>
  >Ils augmentent la vitesse max du joueur.</br>
      <img src="https://cdn.discordapp.com/attachments/324198067089702913/979367783806693376/increaseSpeed.png" alt="ACCELERATEURS" width="80px">

<h1>Les points forts</h1>

- Le jeu est tres complet avec 10 types de blocs differents.
- Il est très addictif une fois que l'on s'est habitué aux controles.
- La conception permet de tres facilement créer de nouveaux niveaux.

<h1>Les points faibles</h1>

- Le jeu saccade un peu sur les vieux pc portables.
- Les contrôles sont un peu longs à prendre en main.

<h1>Le developpement</h1>

<h2><i>La version v0 de notre jeu après 1 mois de développement:</i></h2>

[<img src="https://img.youtube.com/vi/zmXxdcZGE9g/maxresdefault.jpg" alt="v0" width="50%" style="border: 1px solid grey">](https://www.youtube.com/watch?v=zmXxdcZGE9g)

    Nous avions aussi un outil pour générer des niveaux plus facilement, mais depuis nous l'avons supprimé.

<img src="https://cdn.discordapp.com/attachments/324198067089702913/979378224855412766/generate.png" alt="generate" width="50%">

<h2><i>La version v1 de notre jeu après 2 mois de développement:</i></h2>

[<img src="https://img.youtube.com/vi/y6I14wP70HY/maxresdefault.jpg" alt="v0" width="50%" style="border: 1px solid grey">](https://www.youtube.com/watch?v=y6I14wP70HY)

    C'est a peu pres à ce moment-là que l'on a commencé notre serveur Heroku pour host jeu.
    Vous pouvez voir qu'on avait des problèmes de chargement des textures car nous gérions mal les promesses,
    ce qui a été resolu depuis bien heureusement.
    Pour les plus attentifs vous aurez peut-être remarqué que ce niveau est un prototype du niveau 14 du jeu final.

<h2><i>Notre jeu au moment du rendu final pour le cours de Mr Michel Buffa:</i></h2>

[<img src="https://img.youtube.com/vi/HzAEGsJKKqI/maxresdefault.jpg" alt="v0" width="50%" style="border: 1px solid grey">](https://www.youtube.com/watch?v=HzAEGsJKKqI)

    La gui n'était pas terminée, on avait encore des problèmes d'audio et encore très peu de niveaux.

<h2><i>La version finale / Demo</i></h2>

[<img src="https://img.youtube.com/vi/YCBGXZKgEaU/maxresdefault.jpg" alt="v0" width="50%" style="border: 1px solid grey">](https://www.youtube.com/watch?v=YCBGXZKgEaU)

<h1>Ressources</h1>

    Les sons viennent de https://freesound.org/
    Les models viennent de https://sketchfab.com et de https://www.turbosquid.com/
    On a beaucoup utilisé https://gui.babylonjs.com/ et https://nme.babylonjs.com/
