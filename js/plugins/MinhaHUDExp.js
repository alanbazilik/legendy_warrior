var _Scene_Map_create = Scene_Map.prototype.create;
Scene_Map.prototype.create = function() {
    _Scene_Map_create.call(this);
    this.createExpHud();
};

Scene_Map.prototype.createExpHud = function() {
    this._expHudSprite = new Sprite();
    this.addChild(this._expHudSprite);
    var expImageName = $gameVariables.value(7); // variável com o nome da imagem
    var bitmap = ImageManager.loadPicture(expImageName);
    this._expHudSprite.bitmap = bitmap;
    this._expHudSprite.x = 0; // coordenada X da imagem
    this._expHudSprite.y = 0; // coordenada Y da imagem
    this._expHudSprite.interactive = true;
    this._expHudSprite.buttonMode = true;
    this._expHudSprite.on('pointerdown', function(event) {
        this.data = event.data;
        this.dragging = true;
    });
    this._expHudSprite.on('pointerup', function() {
        this.dragging = false;
        this.data = null;
    });
    this._expHudSprite.on('pointerupoutside', function() {
        this.dragging = false;
        this.data = null;
    });
    this._expHudSprite.on('pointermove', function() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x - this.width / 2;
            this.y = newPosition.y - this.height / 2;
        }
    });
};

var _Window_Base_drawActorExp = Window_Base.prototype.drawActorExp;
Window_Base.prototype.drawActorExp = function(actor, x, y, width) {
    _Window_Base_drawActorExp.call(this, actor, x, y, width);
    var gaugeX = x + this.textWidth('HP ');
    var gaugeY = y + this.lineHeight() * 2;
    var gaugeWidth = width - gaugeX - this.textWidth('000000/000000');
    var gaugeHeight = this.gaugeHeight();
    this.drawGauge(gaugeX, gaugeY, gaugeWidth, actor.currentExp() / actor.nextLevelExp(), this.expGaugeColor1(), this.expGaugeColor2());
};
