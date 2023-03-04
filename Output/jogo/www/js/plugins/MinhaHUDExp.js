
(function() {

  var _SceneMap_createAllWindows = Scene_Map.prototype.createAllWindows;
  Scene_Map.prototype.createAllWindows = function() {
      _SceneMap_createAllWindows.call(this);
      this.createExpHUD();
  };

  Scene_Map.prototype.createExpHUD = function() {
      this._expHUD = new Window_ExpHUD(0, 0, Graphics.width, 60);
      this.addWindow(this._expHUD);
  };

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
      _Game_Interpreter_pluginCommand.call(this, command, args);
      if (command === 'setExp') {
          $gameVariables.setValue(EXP, parseInt(args[0]));
          SceneManager._scene._expHUD.refresh();
      } else if (command === 'setLevel') {
          $gameVariables.setValue(LEVEL, parseInt(args[0]));
          SceneManager._scene._expHUD.refresh();
      }
  };

  function Window_ExpHUD() {
      this.initialize.apply(this, arguments);
  }

  Window_ExpHUD.prototype = Object.create(Window_Base.prototype);
  Window_ExpHUD.prototype.constructor = Window_ExpHUD;

  Window_ExpHUD.prototype.initialize = function(x, y, width, height) {
      Window_Base.prototype.initialize.call(this, x, y, width, height);
      this.refresh();
  };

  Window_ExpHUD.prototype.refresh = function() {
      this.contents.clear();
      this.drawExp();
  };

  Window_ExpHUD.prototype.drawExp = function() {
      var x = 0;
      var y = 0;
      var width = this.contents.width;
      var level = $gameVariables.value(9);
      var expNeeded = Math.round((level * 10) * (level / 5));
      var currentExp = $gameVariables.value(7);
      console.log(level)
      console.log(currentExp)
      console.log(expRate)
      var expRate = currentExp / expNeeded;
      this.drawText(`Lv: ${9}`, x, y, width);
      this.drawText(`EXP: ${7}`, x, y, width);
      this.drawGauge(x + 150, y, width - 150, expRate, this.textColor(14), this.textColor(6));
      this.drawText(currentExp + "/" + expNeeded, x + 150, y, width);
      
  };
  
})();