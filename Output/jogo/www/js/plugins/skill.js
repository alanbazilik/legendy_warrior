BattleManager.displayAction = function(subject, item) {
    var actionIcon = item.iconIndex;
    if (actionIcon > 0) {
      var subjectName = '<span style="color:' + subject.hpColor() + '">' + subject.name() + '</span>';
      var itemName = '<span style="color:' + subject.mpColor() + '">' + item.name + '</span>';
      var message = '\\i[' + actionIcon + ']' + subjectName + ' usa ' + itemName;
      $gameMessage.newPage();
      $gameMessage.add(message);
    } else {
      _alias_displayAction.call(this, subject, item);
    }
  };
  