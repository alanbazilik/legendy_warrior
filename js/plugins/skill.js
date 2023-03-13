//=============================================================================
// PluginName.js
// Descrição: Plugin de habilidades com janela no menu
//=============================================================================

/*:
 * @plugindesc Plugin de habilidades com janela no menu.
 *
 * @help
 * Para usar esse plugin, copie este arquivo para a pasta 'plugins' do seu projeto RPG Maker MV e habilite o plugin no menu de plugins do RPG Maker MV.
 *
 * Esse plugin adiciona uma opção 'Habilidades' ao menu principal. Quando selecionada, uma janela de habilidades será exibida com as opções para o jogador aumentar o HP, MP, ataque, defesa, ataque mágico, defesa mágica, agilidade e sorte do jogador.
 *
 * Para personalizar as habilidades disponíveis e seus efeitos, você precisará editar o código abaixo.
 */

function Scene_SkillUpgrade() {
  this.initialize.apply(this, arguments);
}

Scene_SkillUpgrade.prototype = Object.create(Scene_MenuBase.prototype);
Scene_SkillUpgrade.prototype.constructor = Scene_SkillUpgrade;

Scene_SkillUpgrade.prototype.initialize = function() {
  Scene_MenuBase.prototype.initialize.call(this);
};

Scene_SkillUpgrade.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this.createHelpWindow();
  this.createCommandWindow();
  this.createStatusWindow();
  this.createUpgradeWindow();
};

Scene_SkillUpgrade.prototype.createCommandWindow = function() {
  this._commandWindow = new Window_SkillUpgradeCommand(0, this._helpWindow.height);
  this._commandWindow.setHandler('cancel', this.popScene.bind(this));
  this.addWindow(this._commandWindow);
};

Scene_SkillUpgrade.prototype.createStatusWindow = function() {
  var wy = this._commandWindow.y + this._commandWindow.height;
  var ww = Graphics.boxWidth;
  var wh = Graphics.boxHeight - wy;
  this._statusWindow = new Window_SkillUpgradeStatus(0, wy, ww, wh);
  this.addWindow(this._statusWindow);
};

Scene_SkillUpgrade.prototype.createUpgradeWindow = function() {
  var wx = this._statusWindow.width;
  var wy = this._statusWindow.y;
  var ww = Graphics.boxWidth - wx;
  var wh = Graphics.boxHeight - wy;
  this._upgradeWindow = new Window_SkillUpgradeUpgrade(wx, wy, ww, wh);
  this._upgradeWindow.setHelpWindow(this._helpWindow);
  this._upgradeWindow.setStatusWindow(this._statusWindow);
  this.addWindow(this._upgradeWindow);
};

function Window_SkillUpgradeCommand() {
  this.initialize.apply(this, arguments);
}

Window_SkillUpgradeCommand.prototype = Object.create(Window_Command.prototype);
Window_SkillUpgradeCommand.prototype.constructor = Window_SkillUpgradeCommand;

Window_SkillUpgradeCommand.prototype.initialize = function(x, y) {
  Window_Command.prototype.initialize.call(this, x, y);
};

Window_SkillUpgradeCommand.prototype.makeCommandList = function() {
  this.addCommand('Upgrade HP', 'hp');
  this.addCommand('Upgrade MP', 'mp');
  this.addCommand('Upgrade ATK', 'atk');
  this.addCommand('Upgrade DEF', 'def');
  this.addCommand('Upgrade MAT', 'mat');
  this.addCommand('Upgrade MDF', 'mdf');
  this.addCommand('Upgrade AGI', 'agi');
  this.addCommand('Upgrade LUK', 'luk');
};

function Window_SkillUpgradeStatus() {
  this.initialize.apply(this, arguments);
}

Window_SkillUpgradeStatus.prototype = Object.create(Window_Status.prototype);
Window_SkillUpgradeStatus.prototype.constructor = Window_SkillUpgradeStatus;

Window_SkillUpgradeStatus.prototype.initialize = function(x, y, width, height) {
  Window_Status.prototype.initialize.call(this);
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

function Window_SkillUpgradeUpgrade() {
  this.initialize.apply(this, arguments);
}

Window_SkillUpgradeUpgrade.prototype = Object.create(Window_Selectable.prototype);
Window_SkillUpgradeUpgrade.prototype.constructor = Window_SkillUpgradeUpgrade;