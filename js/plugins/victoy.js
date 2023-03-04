//=============================================================================
// MeuPluginDeMensagemDeVitoria.js
//=============================================================================

/*:
 * @plugindesc Plugin de mensagem de vitória personalizada
 *
 * @param Mensagem de Vitória
 * @desc A mensagem de vitória que será exibida quando o jogador vencer uma batalha.
 * @default Parabéns, você venceu!
 *
 * @help
 * Esse plugin exibe uma mensagem de vitória personalizada quando o jogador vencer uma batalha.
 * Para personalizar a mensagem, basta editar o parâmetro "Mensagem de Vitória".
 */

(function() {
  
    var parameters = PluginManager.parameters('MeuPluginDeMensagemDeVitoria');
    var victoryMessage = parameters['Mensagem de Vitória'];
    
    // Cria uma nova cena para exibir a mensagem de vitória personalizada em uma janela
    function SceneVictoryMessage() {
      this.initialize.apply(this, arguments);
    }
    
    SceneVictoryMessage.prototype = Object.create(Scene_Base.prototype);
    SceneVictoryMessage.prototype.constructor = SceneVictoryMessage;
    
    SceneVictoryMessage.prototype.initialize = function() {
      Scene_Base.prototype.initialize.call(this);
    };
    
    SceneVictoryMessage.prototype.create = function() {
      Scene_Base.prototype.create.call(this);
      this.createWindow();
    };
    
    SceneVictoryMessage.prototype.createWindow = function() {
      this._messageWindow = new Window_Base(0, 0, 400, 100);
      this._messageWindow.x = Graphics.boxWidth / 2 - this._messageWindow.width / 2;
      this._messageWindow.y = Graphics.boxHeight / 2 - this._messageWindow.height / 2;
      this._messageWindow.drawTextEx(victoryMessage, 0, 0);
      this.addWindow(this._messageWindow);
    };
    
    SceneVictoryMessage.prototype.update = function() {
      if (Input.isTriggered('ok') || TouchInput.isTriggered()) {
        this.popScene();
      }
      Scene_Base.prototype.update.call(this);
    };
    
    // Sobrescreve a função padrão de vitória para exibir a mensagem personalizada
    BattleManager.processVictory = function() {
      $gameParty.performVictory();
      this.playVictoryMe();
      this.replayBgmAndBgs();
      this.makeRewards();
      this.displayVictoryMessage();
      this.displayExp();
      this.displayGold();
      this.displayDropItems();
      this.gainRewards();
      this.endBattle(0);
      
      // Exibe a mensagem de vitória personalizada em uma janela
      SceneManager.push(SceneVictoryMessage);
    };
    
})();
