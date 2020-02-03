var modoGTARState = {
	create: function() {
		//musica
		musica();		
		
		//background
		backgroundilha();
		//Modos buttoes
		var	modoGRU = game.add.button(0, 245,'modoGRUoff',modoGRUfun,this,1,0,0);
		modoGRU.anchor.set(0,0.5);		
			
		var	modoILHA = game.add.button(0, 385,'modoGTARon',modoILHAfun,this,0,0,0);
		modoILHA.anchor.set(0,0.5);

		var	modoAGRO = game.add.button(0, 525,'modoAGROoff',modoAGROfun,this,1,0,0);
		modoAGRO.anchor.set(0,0.5);

		//cria tartarugas doentes	
		if(tartarugasCriadas == false && spawnTartarugas == true) {
			var	tartarugas = game.add.button(550, 540,'tartarugas',tartarugasfun,this,1,0,0);
			tartarugas.scale.setTo(0.7);
			tartarugas.anchor.set(0.5);
			tartarugasCriadas = true;
		} else if(tartcount>0){
			var tartcurada = game.add.sprite(550, 540,'tartarugacurada');
			tartcurada.scale.setTo(0.7);
			tartcurada.anchor.set(0.5);
		}

		//cria redes	
		if(redesCriadas == false && spawnRedes == true) {
			var	redes = new Array();
			var posXredes;
			var posYredes;
			var posrede = 0;

			for(i=nRedes;i<5;i++) {
				if(posrede == 0) {posXredes=200;posYredes=250;}
				if(posrede == 1) {posXredes=620;posYredes=640;}
				if(posrede == 2) {posXredes=720;posYredes=645;}
				if(posrede == 3) {posXredes=75;posYredes=650;}
				if(posrede == 4) {posXredes=200;posYredes=350;}
				redes[i] = game.add.button(posXredes, posYredes,'redes',redesfun,this,1,0,0);
				redes[i].scale.setTo(0.8);
				redes[i].anchor.set(0.5);
				redesCriadas = true;
				posrede++;
			}
		}	
		
		//missao botao
		missaobotao = game.add.button(1230,145,'missoeson',missaobotaofun,this,1,2,0);
		missaobotao.anchor.set(0.5,0);

		//ovos Tartarugas
		if(ovosTartarugasCriados == false && spawnovosTartarugas == true) {
			var	ovosTartarugas = game.add.button(220, 665,'ovosTartarugas',ovosTartarugasfun,this,1,0,0);
			ovosTartarugas.scale.setTo(0.7);
			ovosTartarugas.anchor.set(0.5);
			ovosTartarugasCriados = true;
		} else if(ovosmissao == true) {
			var bandeira = game.add.sprite(220, 645,'bandeira');
			bandeira.scale.setTo(0.5);
			bandeira.anchor.set(0.5);			
		}
				
		//cria menu topo 		
		menuTopofun();
		//cria circulo dinamico das barras
		bgbarras();
		circuloBarras();
				
		//recompensas
		recompensas();
		
		verificamissoesGTAR();
//fim do create	
	}
};

//cria tartarugas doentes

var tartarugasCriadas;//identifica se ja existem tartarugas doentes
var spawnTartarugas;//permite criar tartarugas
var ovosTartarugasCriados;//identifica se ja existem ovos
var spawnovosTartarugas;//permite criar ovos
var redesCriadas;//identifica se ja existem redes
var spawnRedes;//permite criar redes
var nRedes;
//cria Tartarugas
function criaTartarugas() {
	tartarugasCriadas = false;
	spawnTartarugas = true;	
}

var recmissao1GTAR = false;
var recmissao2GTAR = false;
var recmissao3GTAR = false;
var recmissao4GTAR = false;
//funcoes verifica missoes
function verificamissoesGTAR() {
	//missao 1
	if(redesStreak >=3) {
		console.log('GTAR: missao 1 concluida');
		recmissao1GTAR = true;
		recompensas();	
	}	
	
	//missao 2
	if(ovosmissao == true) {
		console.log('GTAR: missao 2 concluida');	
		recmissao2GTAR = true;
		recompensas();		
	}
	
	//missao 3
	if(tartcount>=5) {
		console.log('GTAR: missao 3 concluida');
		recmissao3GTAR = true;
		recompensas();		
	}
	
	//missao 4 GRU
	if(reduzirStreak>=5) {
		console.log('GTAR: missao 4 concluida');
		recmissao4GTAR = true;
		recompensas();			
	}
}

//click tartarugas doentes
var tartcount = 0;
function tartarugasfun(tartarugas) {
	taxaGTAR -= 5;
	var clicksound = game.add.audio('redeEtartaruga');
	clicksound.volume = 0.6;
	clicksound.play();		
	$('#GTAR').html('GTAR:' + barraGTAR +'<p></p>'+ 'Taxa GTAR: ' + taxaGTAR+'/5s'+'<p></p>'+'Tartarugas e Redes surgem a cada: 10 segundos');
	tartarugas.destroy();
	tartarugasCriadas = false;
	spawnTartarugas = false;
	tartcount++;
	var tartcurada = game.add.sprite(550, 540,'tartarugacurada');
	tartcurada.scale.setTo(0.7);
	tartcurada.anchor.set(0.5);			
	verificamissoesGTAR();
	var resptart = game.add.sprite(game.world.centerX,game.world.centerY,'resptart');
	resptart.anchor.set(0.5);
	var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){resptart.destroy(); ok.destroy();},this,1,0,0);
	ok.anchor.set(0.5);
}
//cria ovos
function criaovosTartarugas() {
	ovosTartarugasCriados = false;
	spawnovosTartarugas = true;	
}

//click ovos
var ovosmissao = false;
function ovosTartarugasfun(ovosTartarugas) {
	barraGTAR -= 50;
	var clicksound = game.add.audio('redeEtartaruga');
	clicksound.volume = 0.6;
	clicksound.play();		
	$('#GTAR').html('GTAR:' + barraGTAR +'<p></p>'+ 'Taxa GTAR: ' + taxaGTAR+'/5s'+'<p></p>'+'Tartarugas e Redes surgem a cada: 10 segundos');
	ovosTartarugas.destroy();
	ovosTartarugasCriados = false;
	spawnovosTartarugas = false;
	ovosmissao = true;
	verificamissoesGTAR();
	var bandeira = game.add.sprite(220, 645,'bandeira');
	bandeira.scale.setTo(0.5);
	bandeira.anchor.set(0.5);		
	var respovos = game.add.sprite(game.world.centerX,game.world.centerY,'respovos');
	respovos.anchor.set(0.5);
	var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respovos.destroy(); ok.destroy();},this,1,0,0);
	ok.anchor.set(0.5);		
}

//cria redes
function criaRedes() {
	redesCriadas = false;
	spawnRedes = true;
	nRedes = 0;	
}

//click redes
var redesStreak = 0;
function redesfun(redes) {
	taxaGTAR -= 5;
	var clicksound = game.add.audio('redeEtartaruga');
	clicksound.volume = 0.6;
	clicksound.play();		
	$('#GTAR').html('GTAR:' + barraGTAR +'<p></p>'+ 'Taxa GTAR: ' + taxaGTAR+'/5s'+'<p></p>'+'Tartarugas e Redes surgem a cada: 10 segundos'+'<p></p>');
	redes.destroy();
	redesCriadas = false;
	nRedes++;	

	if(nRedes>=5) {
		spawnRedes=false;
		redesStreak++;
		verificamissoesGTAR();
		var respredes = game.add.sprite(game.world.centerX,game.world.centerY,'respredes');
		respredes.anchor.set(0.5);
		var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respredes.destroy(); ok.destroy();},this,1,0,0);
		ok.anchor.set(0.5);
	}
}
