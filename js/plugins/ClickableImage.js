function callCommonEvent() {
    PluginManager.call('createClickableImage', 'forja', 100, 100, 1);

  }
  function createClickableImage(imagePath, x, y, eventId) {
    var sprite = new Sprite(ImageManager.loadPicture(imagePath));
    sprite.x = x;
    sprite.y = y;
    sprite.setClickHandler(function() {
      $gameTemp.reserveCommonEvent(eventId);
    });
    SceneManager._scene.addChild(sprite);
  }
  