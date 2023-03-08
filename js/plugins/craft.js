/* 
Plugin de Sistema de Craft 
por Alan 
*/ 

(function() { 

  // cria um objeto para os itens de craft
  var itensCraft = {}; 

  // define os itens de craft
  itensCraft.itens = [ 
    { id: 1, nome: "Poção de Cura", ingredientes: [ 
      { itemId: 2, quantidade: 1 }, 
      { itemId: 3, quantidade: 2 } 
    ]}, 
    { id: 2, nome: "Poção de Mana", ingredientes: [ 
      { itemId: 2, quantidade: 1 }, 
      { itemId: 4, quantidade: 1 } 
    ]}
  ]; 

  // define a janela de craft
  function Window_Craft() { 
    this.initialize.apply(this, arguments); 
  } 

  Window_Craft.prototype = Object.create(Window_Base.prototype); 
  Window_Craft.prototype.constructor = Window_Craft; 

  Window_Craft.prototype.initialize = function(x, y) { 
    var width = this.windowWidth(); 
    var height = this.windowHeight(); 
    Window_Base.prototype.initialize.call(this, x, y, width, height); 
    this.refresh(); 
  }; 

  Window_Craft.prototype.windowWidth = function() { 
    return 240; 
  }; 

  Window_Craft.prototype.windowHeight = function() { 
    return 320; 
  }; 

  Window_Craft.prototype.refresh = function() { 
    this.contents.clear(); 
    this.drawAllItems(); 
  }; 

  Window_Craft.prototype.drawAllItems = function() { 
    for (var i = 0; i < itensCraft.itens.length; i++) { 
      var item = itensCraft.itens[i]; 
      this.drawItem(item, i * this.lineHeight() + this.standardPadding() * 2); 
    } 
  }; 

  Window_Craft.prototype.drawItem = function(item, y) { 
    var x = this.textPadding(); 
    var width = this.contents.width - this.textPadding() * 2; 
    this.changeTextColor(this.normalColor()); 
    this.drawText(item.nome, x, y, width); 

    // verifica se os ingredientes estão disponíveis
    var ingredientesDisponiveis = true; 
    for (var j = 0; j < item.ingredientes.length; j++) { 
      var ingrediente = item.ingredientes[j]; 
      if ($gameParty.numItems($dataItems[ingrediente.itemId]) < ingrediente.quantidade) { 
        ingredientesDisponiveis = false; 
        break; 
      } 
    } 

    // desenha os ingredientes
    var y2 = y + this.lineHeight(); 
    this.changePaintOpacity(ingredientesDisponiveis); 
    for (var j = 0; j < item.ingredientes.length; j++) { 
      var ingrediente = item.ingredientes[j]; 
      var itemIngrediente = $dataItems[ingrediente.itemId]; 
      var quantidade = ingrediente.quantidade; 
      var iconWidth = Window_Base._iconWidth + 4; 
      this.drawIcon(itemIngrediente.iconIndex, x + j * iconWidth, y2); 
      this.drawText(quantidade, x + j * iconWidth + Window_Base._iconWidth, y2, iconWidth, 'right'); 
    } 
  }
})
