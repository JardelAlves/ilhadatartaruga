var menuState = {
	create: function() {
		var menubg = game.add.sprite(game.world.centerX,game.world.centerY,'menubg');
		menubg.scale.setTo(1);
		menubg.anchor.set(0.5);
			
		var	Start = game.add.button(game.world.centerX, game.world.centerY + 50,'Start',startGame,this,0,0,0);
		Start.scale.setTo(0.55,0.55);
		Start.anchor.set(0.5);
			
		var txtMenu = game.add.text(game.world.centerX, game.world.centerY - 50,'NOME DO JOGO', {font:'40px MontserratLight', fill: '#fff'});
		txtMenu.anchor.set(0.5);
	}
};

function startGame() {
	game.state.start('stage1');
}