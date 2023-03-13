class HUDBarPlugin {
    constructor() {
      // Construtor da classe
    }
  
    startScene() {
      // Cria a barra de HUD na cena
      let hudBar = {
        x: 100,
        y: 100,
        width: 200,
        height: 20,
        color: "#00FF00"
      };
  
      // Desenha a barra de HUD na tela
      let valuePercentage = $gameActors.actor(1).param(0) / $gameActors.actor(1).paramMax(0);
      Graphics.fillRect(hudBar.x, hudBar.y, hudBar.width * valuePercentage, hudBar.height, hudBar.color);
    }
  }
  
  PluginManager.register("HUDBarPlugin", HUDBarPlugin);
  