var modoGRUState = {
	create: function(){
		//musica
		musica();
		
		//background
		backgroundilha();	
		
		//lixo	
			lixo = game.add.button(340, 360,'lixo',treserres,this,1,0,0);
			lixo.anchor.set(0.5);
			

		//Modos buttoes
		var	modoILHA = game.add.button(0, 245,'modoGRUon',modoILHAfun,this,0,0,0);
			modoILHA.anchor.set(0,0.5);

		var	modoGTAR = game.add.button(0, 385,'modoGTARoff',modoGTARfun,this,1,0,0);
			modoGTAR.anchor.set(0,0.5);	

		var	modoAGRO = game.add.button(0, 525,'modoAGROoff',modoAGROfun,this,1,0,0);
			modoAGRO.anchor.set(0,0.5);			
		
		//missao botao
			missaobotao = game.add.button(1230,145,'missoeson',missaobotaofun,this,1,2,0);
			missaobotao.anchor.set(0.5,0);
		
		//cria residuos	
		if(residuosCriados == false && spawnResiduos == true){
			var	residuos = game.add.button(760, 420,'residuos',residuosfun,this,1,0,0);
				residuos.scale.setTo(0.3);
				residuos.anchor.set(0.5);
				residuosCriados = true;
		}					
		//cria menu topo 		
			menuTopofun();
		//cria circulo dinamico das barras
			bgbarras();
			circuloBarras();
		//recompensas
			recompensas();
			
			updatelixo();	
//fim do create		
	}
};

var recmissao1GRU = false;
var recmissao2GRU = false;
var recmissao3GRU = false;
var recmissao4GRU = false;
//funcoes lixo
	function updatelixo(lixo){
		verificamissoesGTAR();
		$('#GRU').html('GRU:' + barraGRU +'<p></p>'+ 'Taxa GRU: ' + taxaGRU+'/5s'+'<p></p>'+'Dias Seguidos: Reduziu: '+reduzirStreak+' reciclou: '+ reciclarStreak+' reutilizou: '+reutilizarStreak+'<p></p>');

		//missao 1
		if(reduzirplastico>=3){
		console.log('GRU: missao 1 concluida');
		recmissao1GRU = true;
		recompensas();	
		}	
		
		//missao 2
		if(residuosmissao == true){
		console.log('GRU: missao 2 concluida');	
		recmissao2GRU = true;
		recompensas();		
		}
		//missao 3
		if(reutilizarvidro>=3){
		console.log('GRU: missao 3 concluida');
		recmissao3GRU = true;
		recompensas();		
		}
		
		//missao 4 GRU
		if(reciclarStreak>=3){
		console.log('GRU: missao 4 concluida');
		recmissao4GRU = true;
		recompensas();			
		}
}
	
	var m1pop = true;
	var m2pop = true;
	var m3pop = true;
	var m4pop = true;
	var m5pop = true;
	var m6pop = true;
	var m7pop = true;
	var m8pop = true;
	function recompensas(){
		//gru
		if(recmissao1GRU == true ){
		var lixeiras = game.add.sprite(675, 360, 'lixeiras');
			if(m1pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'lixeiras');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.7);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);
				m1pop = false;
			}
		}
		if(recmissao2GRU == true ){
		var container = game.add.sprite(340, 495, 'container');
			if(m2pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'container');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.7);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);	
				m2pop = false;
			}
		}
		if(recmissao3GRU == true ){
		var campo = game.add.sprite(715, 210, 'campo');
			campo.scale.setTo(0.9);
			
			if(m3pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'campo');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.7);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);
				m3pop = false;
			}
		}
		if(recmissao4GRU == true ){
		var recicladora = game.add.sprite(200, 400, 'recicladora');

			if(m4pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'recicladora');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.65);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);
				m4pop = false;
			}		
		}
		
		//gtar
		if(recmissao1GTAR == true ){
		var pranchas = game.add.sprite(770, 490, 'pranchas');

			if(m5pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'pranchas');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.7);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);
				m5pop = false;
			}		
		}
		if(recmissao2GTAR == true ){
		var barquinhos = game.add.sprite(240, 110, 'barquinhos');

			if(m6pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'recbarquinhos');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.7);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);
				m6pop = false;
			}		
		}
		if(recmissao3GTAR == true ){
		var ETE = game.add.sprite(945, 105, 'ETE');
			destroyesgoto();	

			if(m7pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'ETE');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.7);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);
				m7pop = false;
			}		
		}
		if(recmissao4GTAR == true ){
		var placa = game.add.sprite(880, 470, 'placa');	
			destroyesgoto();	
		
			if(m8pop == true){
			var respmissao = game.add.sprite(game.world.centerX,game.world.centerY,'respmissao');
				respmissao.anchor.set(0.5);
			var respmissaorec = game.add.sprite(game.world.centerX,game.world.centerY+80,'placa');
				respmissaorec.anchor.set(0.5);
				respmissaorec.scale.setTo(0.7);	
			var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respmissao.destroy(); ok.destroy(); respmissaorec.destroy();},this,1,0,0);
				ok.anchor.set(0.5);
				m8pop = false;
			}		
		}		
	}
	
	
var residuosCriados;//identifica se ja existem residuos
var spawnResiduos;//permite criar residuos

	function criaResiduos(){
		residuosCriados = false;
		spawnResiduos = true;	
}

//click residuos
	var residuosmissao = false;
	function residuosfun(residuos){
		taxaGRU -= 5
		var clicksound = game.add.audio('ClickMenu');
			clicksound.volume = 0.25;
			clicksound.play();		
		$('#GRU').html('GRU:' + barraGRU +'<p></p>'+ 'Taxa GRU: ' + taxaGRU+'/5s'+'<p></p>'+'Dias Seguidos: Reduziu: '+reduzirStreak+' reciclou: '+ reciclarStreak+' reutilizou: '+reutilizarStreak+'<p></p>');
		residuos.destroy();
		residuosCriados = false;
		spawnResiduos = false;
		residuosmissao = true;	
		updatelixo();
		var respquimico = game.add.sprite(game.world.centerX,game.world.centerY,'respquimico');
			respquimico.anchor.set(0.5);
		var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respquimico.destroy(); ok.destroy();},this,1,0,0);
			ok.anchor.set(0.5);				
}

	// variaves buttoes 3rs
	var reduzir;
	var reutilizar;
	var reciclar;	
	var reduzirbool;
	var reutilizarbool;
	var reciclarbool;	
	var lixoPlastico;
	var lixoMetal;
	var lixoPapel;
	var lixoVidro;
	var bg3Rs;
	var tipoLixobg;
	var lixo;
	var	sair3Rs;
	var sairTipolixo;
	//variáveis das missoes
	var reduzirStreak = 0;
	var reutilizarStreak = 0;
	var reciclarStreak = 0;
	
	function treserres(){
		
			var clicksound = game.add.audio('LixoAudio');
				clicksound.volume = 0.25;
				clicksound.play();		
		
		lixo.inputEnabled = false;
		
			bg3Rs = game.add.sprite(game.world.centerX, game.world.centerY, 'bg3Rs');
			
			bg3Rs.anchor.set(0.5);
			
			reciclar = game.add.button(game.world.centerX, game.world.centerY-10,'reciclar',reciclarfun,this,1,0,0);
			
			reciclar.anchor.set(0.5);
			
			reduzir = game.add.button(game.world.centerX, game.world.centerY+60,'reduzir',reduzirfun,this,1,0,0);
			
			reduzir.anchor.set(0.5);
			
			reutilizar = game.add.button(game.world.centerX, game.world.centerY+130,'reutilizar',reutilizarfun,this,1,0,0);
			
			reutilizar.anchor.set(0.5);

			sair3Rs = game.add.button(game.world.centerX + 200, game.world.centerY - 170,'sair',sair3Rsfun,this,1,0,0);
			sair3Rs.scale.setTo(0.8);
			sair3Rs.anchor.set(0.5);			
	}

	function reciclarfun(){
		reciclarbool = true;		
		tipoLixo();
		destroy3Rs();
	}
	function updatereciclar(){
		barraGRU -= 75;
		reciclarStreak++;
		reciclardayStreak = true;
		destroyTipoLixo();
		updatelixo();
		}


	function reduzirfun(){
		reduzirbool = true;
		tipoLixo();
		destroy3Rs();
	}
	function updatereduzir(){
		taxaGRU -= 3;
		reduzirStreak++;
		reduzirdayStreak = true;	
		destroyTipoLixo();
		updatelixo();		
	}
	
	
	function reutilizarfun(){
		reutilizarbool = true;
		tipoLixo();
		destroy3Rs();
	}
	function updatereutilizar(){
		taxaGRU -= 5;
		reutilizarStreak++;
		reutilizardayStreak = true;
		destroyTipoLixo();	
		updatelixo();		
	}
	
	
	function destroy3Rs(){
		reciclar.destroy();
		reduzir.destroy();
		reutilizar.destroy();
		bg3Rs.destroy();
		sair3Rs.destroy();		
	}
	function destroyTipoLixo(){
		lixoPlastico.destroy();
		lixoMetal.destroy();
		lixoVidro.destroy();
		lixoPapel.destroy();
		tipoLixobg.destroy();
		sairTipolixo.destroy();
	}
	function sair3Rsfun(){
		destroy3Rs();
		lixo.inputEnabled = true;
		}
	function sairTipoLixofun(){
		destroyTipoLixo();
		lixo.inputEnabled = true;
		reciclarbool = false;
		reduzirbool = false;
		reutilizarbool = false;	
		}	
		
	
	function tipoLixo(){
			tipoLixobg = game.add.sprite(game.world.centerX, game.world.centerY, 'tipoLixobg');
			
			tipoLixobg.anchor.set(0.5);
			
			lixoPlastico = game.add.button(game.world.centerX-75, game.world.centerY-10 ,'lixoPlastico',plastico,this,1,0,0);
			
			lixoPlastico.anchor.set(0.5);

			lixoMetal = game.add.button(game.world.centerX+75, game.world.centerY +60,'lixoMetal',qualR,this,1,0,0);
		
			lixoMetal.anchor.set(0.5);

			lixoVidro = game.add.button(game.world.centerX+75, game.world.centerY-10,'lixoVidro',vidro,this,1,0,0);
		
			lixoVidro.anchor.set(0.5);

			lixoPapel = game.add.button(game.world.centerX-75, game.world.centerY+60,'lixoPapel',qualR,this,1,0,0);
		
			lixoPapel.anchor.set(0.5);
			
			sairTipolixo = game.add.button(game.world.centerX + 200, game.world.centerY - 170,'sair',sairTipoLixofun,this,1,0,0);
			sairTipolixo.scale.setTo(0.8);
			sairTipolixo.anchor.set(0.5);			
			
	}
	
	function qualR(){
		if(reciclarbool == true){
			updatereciclar();
			reciclarbool = false;
		}
		if(reduzirbool == true){
			updatereduzir();
			reduzirbool = false;
		}
		if(reutilizarbool == true){
			updatereutilizar();
			reutilizarbool = false;	
		}
		var respresiduos = game.add.sprite(game.world.centerX,game.world.centerY,'respresiduos');
			respresiduos.anchor.set(0.5);
		var ok = game.add.button(game.world.centerX,game.world.centerY + 150,'ok',function(){respresiduos.destroy(); ok.destroy(); 	lixo.inputEnabled = true;},this,1,0,0);
			ok.anchor.set(0.5);			
	}
	
	function plastico(){
		if(reduzirbool == true){
		reduzirplastico++;
		reduzirplasticoStreak = true;
		}
		qualR();
	}
	
	function vidro(){
		if(reutilizarbool == true){
		reutilizarvidro++;
		reutilizarvidroStreak = true;
		}
		qualR();
	}	