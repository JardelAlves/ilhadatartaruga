var loadState = {
	
	preload: function(){
		// Cria variavel e adiciona um texto(posicao X, posicao Y, 'texto', {objeto com fonte, cor, tamanho, etc})
		var txtLoading = game.add.text(game.world.centerX, game.world.centerY - 20,'LOADING...', {font:'16px MontserratMedium', fill: '#fff'});
			txtLoading.anchor.set(0.5);
			
			
		// Cria variavel e adiciona uma imagem(posicao X, posicao Y, 'nome da instacia da imagem')
		var progressBar = game.add.sprite(game.world.centerX-65, game.world.centerY, 'progressBar');
			progressBar.anchor.set(0,0.5);
			
		game.load.setPreloadSprite(progressBar);
		
		// Carrega Imagens
			
		game.load.image('bgilha1','img/ilha1.png');
		game.load.image('bgilha2','img/ilha2.png');
		game.load.image('bgilha3','img/ilha3.png');
		game.load.image('bgilha4','img/ilha4.png');
		game.load.image('bgmar','img/mar.png');
		game.load.image('esgoto','img/esgoto.png');
			//GRU
		game.load.spritesheet('residuos','img/residuos.png',137,97);
		game.load.spritesheet('lixo','img/lixo.png',181.5,90);
		game.load.image('bg3Rs','img/3Rs-bg.png');
		game.load.spritesheet('sair','img/sair.png',33,31);
		game.load.spritesheet('reduzir','img/Reduzir.png',131.5,52);
		game.load.spritesheet('reciclar','img/Reciclar.png',131.5,52);
		game.load.spritesheet('reutilizar','img/Reutilizar.png',131.5,52);
		game.load.spritesheet('lixoPapel','img/lixoPapel.png',131.5,52);
		game.load.spritesheet('lixoVidro','img/lixoVidro.png',131.5,52);
		game.load.spritesheet('lixoMetal','img/lixoMetal.png',131.5,52);
		game.load.spritesheet('lixoPlastico','img/lixoPlastico.png',131.5,52);
		game.load.image('tipoLixobg','img/tipoLixo.png');
		game.load.image('missao1GRU','img/missao1GRU.png');
		game.load.image('missao2GRU','img/missao2GRU.png');
		game.load.image('missao3GRU','img/missao3GRU.png');
		game.load.image('missao4GRU','img/missao4GRU.png');
		game.load.image('lixeiras','img/lixeiras.png');
		game.load.image('container','img/container.png');
		game.load.image('campo','img/campo.png');
		game.load.image('recicladora','img/recicladora.png');
		
			//GTAR
		game.load.spritesheet('tartarugas','img/Tartarugadoente.png',124.5,102);
		game.load.spritesheet('tartarugacurada','img/Tartarugacurada.png',124.5,102);
		game.load.spritesheet('ovosTartarugas','img/ovosTartarugas.png',124.5,102);	
		game.load.image('bandeira','img/bandeira.png');
		game.load.spritesheet('redes','img/redes.png',97,82)
		game.load.image('missao1GTAR','img/missao1GTAR.png');
		game.load.image('missao2GTAR','img/missao2GTAR.png');
		game.load.image('missao3GTAR','img/missao3GTAR.png');
		game.load.image('missao4GTAR','img/missao4GTAR.png');
		game.load.image('pranchas','img/pranchas.png');
		game.load.image('ETE','img/ETE.png');	
		game.load.image('placa','img/placa.png');
		game.load.image('barquinhos','img/barquinhos.png');
		game.load.image('recbarquinhos','img/recbarquinhos.png');

		//AGRO
		game.load.spritesheet('agro1','img/AGRO1.png',70.5,36);
		game.load.spritesheet('agro2','img/AGRO2.png',70.5,36);
		game.load.spritesheet('agro3','img/AGRO3.png',70.5,36);
		game.load.spritesheet('agro4','img/AGRO4.png',70.5,36);		
		game.load.image('plantabg','img/plantabg.png');
		game.load.image('planta1','img/planta1.png');
		game.load.image('planta2','img/planta2.png');
		game.load.image('planta3','img/planta3.png');
		game.load.spritesheet('milho','img/milho.png',131.5,52);
		game.load.spritesheet('sevada','img/sevada.png',131.5,52);
		game.load.spritesheet('trigo','img/trigo.png',131.5,52);	
		
			//Barras e menus
		game.load.image('modoGRUon','img/modoGRUon.png');
		game.load.spritesheet('modoGRUoff','img/modoGRUoff.png',106,89);
		game.load.image('modoGTARon','img/modoGTARon.png');
		game.load.spritesheet('modoGTARoff','img/modoGTARoff.png',105,91);
		game.load.image('modoAGROon','img/modoAGROon.png');
		game.load.spritesheet('modoAGROoff','img/modoAGROoff.png',105.5,91);
		game.load.image('barraiconGRU','img/barraiconGRU.png');
		game.load.image('barraiconGTAR','img/barraiconGTAR.png');
		game.load.image('barraiconAGRO','img/barraiconAGRO.png');
		game.load.image('MissoesBase','img/missoesline.png');
		game.load.image('Missoesline','img/missoesline2.png');
		game.load.spritesheet('missaooff','img/missaooff.png',36,37);
		game.load.spritesheet('missoeson','img/missoeson.png',101.6,91);
		game.load.image('missoesoff','img/missoesoff.png');
		game.load.image('usericon','img/usericon.png');
		game.load.image('perfil','img/Perfil.png');
		game.load.spritesheet('menuIlha','img/menu_ilha.png',61,14);
		game.load.spritesheet('menuPerfil','img/menu_perfil.png',83,14);
		game.load.spritesheet('menuTutorial','img/menu_Tutorial.png',115.3,14);
		game.load.spritesheet('Tutorial','img/Tutorial.png');
		game.load.spritesheet('menuConfiguracao','img/botao_configuracao.png',33,31);
		game.load.spritesheet('menuSobre','img/botao_Sobre.png',33,31);
		game.load.spritesheet('menuSair','img/botao_Sair.png',33,31);
		game.load.image('sobre','img/Sobre.png');
		game.load.image('respmissao','img/respmissao.png');
		game.load.image('respovos','img/respovos.png');
		game.load.image('respquimico','img/respquimico.png');
		game.load.image('respredes','img/respredes.png');
		game.load.image('respresiduos','img/respresiduos.png');
		game.load.image('resptart','img/resptart.png');
		game.load.spritesheet('ok','img/OK.png',131.5,52);
		
		// Carrega Audio
		game.load.audio('music', 'sfx/Musica1.mp3');
		game.load.audio('music2', 'sfx/Musica2.mp3');
		game.load.audio('ClickMenu', 'sfx/ClickMenu.mp3');
		game.load.audio('ClickMenu2', 'sfx/ClickMenuOp2.mp3');
		game.load.audio('ClickOn', 'sfx/ClickOn.mp3');
		game.load.audio('ClickOut', 'sfx/ClickOut.mp3');
		game.load.audio('LixoAudio', 'sfx/Lixo.mp3');
		game.load.audio('redeEtartaruga', 'sfx/interaçãoComRedeEcomTartaruga.mp3');
	},
	
	create: function(){
		music = game.add.audio('music2');// carrega a musica inicial
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.state.start('stage1');
	}
	
};
