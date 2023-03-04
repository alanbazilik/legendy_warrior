//=============================================================================
// Plugin para Efeito de Morte nos Inimigos na Batalha
// Filename: EnemyDeathEffect.js
//=============================================================================

/*:
 * @plugindesc Adiciona um efeito de morte nos inimigos na batalha quando eles são derrotados pelo jogador. 
 * @version 1.0.0
 * @author [Alan]
 *
 * @help Este plugin adiciona um efeito de morte nos inimigos na batalha quando eles são derrotados pelo jogador. 
 * O efeito consiste em uma animação e um som que são reproduzidos quando um inimigo é derrotado. 
 * Para usar este plugin, basta ativá-lo na lista de plugins.
 *
 * @param Death Animation
 * @desc ID da animação a ser exibida quando um inimigo é derrotado.
 * @default 81
 *
 * @param Death Sound
 * @desc Nome do som a ser reproduzido quando um inimigo é derrotado.
 * @default Battle3
 *
 * @param Death Volume
 * @desc Volume do som a ser reproduzido quando um inimigo é derrotado.
 * @default 90
 *
 * @param Death Pitch
 * @desc Pitch do som a ser reproduzido quando um inimigo é derrotado.
 * @default 100
 *
 * @param Death Pan
 * @desc Pan do som a ser reproduzido quando um inimigo é derrotado.
 * @default 0
 *
 * @param Screen Shake
 * @desc Define se a tela deve tremer quando um inimigo é derrotado.
 * @default true
 */

(function() {
  var parameters = PluginManager.parameters('EnemyDeathEffect');
  var deathAnimation = Number(parameters['Death Animation'] || 65);
  var deathSound = parameters['Death Sound'] || 'Battle3';
  var deathVolume = Number(parameters['Death Volume'] || 90);
  var deathPitch = Number(parameters['Death Pitch'] || 100);
  var deathPan = Number(parameters['Death Pan'] || 0);
  var screenShake = parameters['Screen Shake'] === 'true';

  // Sobrescreve a função original para adicionar o efeito de morte
  var _Game_Enemy_performCollapse = Game_Enemy.prototype.performCollapse;
  Game_Enemy.prototype.performCollapse = function() {
      _Game_Enemy_performCollapse.call(this);
      this.startAnimation(deathAnimation, false, 0);
      AudioManager.playSe({
          name: deathSound,
          volume: deathVolume,
          pitch: deathPitch,
          pan: deathPan
      });
      if (screenShake) {
          $gameScreen.startShake(5, 5, 10);
      }
  };
})();
