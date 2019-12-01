var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameCanvas');
	
	game.state.add('boot', bootState);
	game.state.add('load', loadState);
	game.state.add('stage1', stage1State);
	game.state.add('modogru', modoGRUState);
	game.state.add('modogtar', modoGTARState);
	game.state.add('modoagro', modoAGROState);
	
	game.state.start('boot');