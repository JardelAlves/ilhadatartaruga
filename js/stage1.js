var stage1State = {
	create: function(){
		//musica
		musica();
	
		//background
		backgroundilha();
			
		//Modos buttoes
		var	modoGRU = game.add.button(0, 245,'modoGRUoff',modoGRUfun,this,1,0,0);
			modoGRU.anchor.set(0,0.5);

		var	modoGTAR = game.add.button(0, 385,'modoGTARoff',modoGTARfun,this,1,0,0);
			modoGTAR.anchor.set(0,0.5);	

		var	modoAGRO = game.add.button(0, 525,'modoAGROoff',modoAGROfun,this,1,0,0);
			modoAGRO.anchor.set(0,0.5);			
					
		//missoes-off sprite
		var missoesoff = game.add.sprite(1230,145,'missoesoff');
			missoesoff.anchor.set(0.5,0);


		//cria menu topo 		
			menuTopofun();
		//cria circulo dinamico das barras
			bgbarras();
			circuloBarras();

		//recompensas
			recompensas();				
				
//fim do create			
	}	
};

//musica
	var music2playing = false;
	var musicplaying = false;
	var music;
function musica(){
		if(barraGRU + barraGTAR + barraAGRO > 1500 && music2playing == false){	
		music.stop();
		music.loop = true;
		music.volume = 0.1;
		music.stop();
		music.play();
		music2playing = true;
		musicplaying = false;
		}else if(barraGRU + barraGTAR + barraAGRO <= 1500 && musicplaying == false){
		music.stop();	
		music = game.add.audio('music');
		music.loop = true;
		music.volume = 0.1;
		music.play();
		musicplaying = true;
		music2playing = false;	
		} 	
}

		
//funcoes modos

	function modoGRUfun(){
	var clicksound = game.add.audio('ClickOn');
		clicksound.volume = 0.25;
		clicksound.play();
	
	// evita que trocar de state com abas abertas trave elas
	missoesmin = true;  
	missaobotaotoggle = true;
	reciclarbool = false;
	reduzirbool = false;
	reutilizarbool = false;	
	// evita que trocar de state sem clicar nas images apague elas
	if(residuosCriados == true){residuosCriados = false;}
	
	// indica em que modo esta
	modoGRU = true;
	modoAGRO = false;
	modoGTAR = false;
	
	game.state.start('modogru'); //muda state
}


	function modoGTARfun(){
	var clicksound = game.add.audio('ClickOn');
		clicksound.volume = 0.25;
		clicksound.play();
	// evita que trocar de state com abas abertas trave elas
	missoesmin = true;
	missaobotaotoggle = true;
	menuSobre.inputEnabled = true;	
	
	// evita que trocar de state sem clicar nas images apague elas
	if(tartarugasCriadas == true){tartarugasCriadas = false;}
	if(ovosTartarugasCriados == true){ovosTartarugasCriados = false;}	
	if(redesCriadas == true){redesCriadas = false;}
	
	// indica em que modo esta
	modoGRU = false;
	modoAGRO = false;
	modoGTAR = true;
	
	game.state.start('modogtar');//muda state
}

	function modoAGROfun(){
	var clicksound = game.add.audio('ClickOn');
		clicksound.volume = 0.25;
		clicksound.play();		
		
	// evita que trocar de state com abas abertas trave elas
	missoesmin = true;  
	missaobotaotoggle = true;
	menuSobre.inputEnabled = true;
	// indica em que modo esta
	modoGRU = false;
	modoAGRO = true;
	modoGTAR = false;
	
	 AGRO1bool = false;
	 AGRO2bool = false;
	 AGRO3bool = false;
	 AGRO4bool = false;
	 plant1bool = false;
	 plant2bool = false;
	 plant3bool	 = false;
	 
	game.state.start('modoagro'); //muda state
}


	function modoILHAfun(){
	var clicksound = game.add.audio('ClickOut');
		clicksound.volume = 0.25;
		clicksound.play();		
		
	// evita que trocar de state com abas abertas trave elas	
	missoesmin = true;
	if(tartarugasCriadas == true){tartarugasCriadas = false;}
	if(ovosTartarugasCriados == true){ovosTartarugasCriados = false;}	
	if(redesCriadas == true){redesCriadas = false;}
	if(residuosCriados == true){residuosCriados = false;}
	menuSobre.inputEnabled = true;	
	game.state.start('stage1');//muda state
}


//funcoes barras recursos
var overIconGRU;
var overIconGTAR;
var overIconAGRO;
var GRUbarratxt;
var GRUtaxatxt;
var GTARbarratxt;
var GTARtaxatxt;
var AGRObarratxt;
var AGROtaxatxt;
var barra1;
var barra2;
var barra3;
function overbarraiconGRU(){	
			overIconGRU = game.add.graphics();
			overIconGRU.beginFill(0xebebeb,1);
			overIconGRU.drawRoundedRect(768, 80, 165, 60,10);
			overIconGRU.endFill();
			barra1.clear();
			barra1.drawRect(0, 0, 50, barraGRU/20);
			GRUbarratxt = game.add.text(778,90,"Resíduos: "+barraGRU+'/1000',{font:'14px MontserratMedium', fill: '#2ca090'});
			GRUtaxatxt = game.add.text(778,115,"Taxa: +"+taxaGRU+' a cada 5s',{font:'14px MontserratMedium', fill: '#2ca090'});	
}
function outbarraiconGRU(){
	if(typeof overIconGRU !== "undefined"){overIconGRU.destroy();}
	if(typeof GRUtaxatxt  !== "undefined"){GRUtaxatxt.destroy();}
	if(typeof GRUbarratxt !== "undefined"){GRUbarratxt.destroy();}
	
	
}	

function overbarraiconGTAR(){	
			overIconGTAR = game.add.graphics();
			overIconGTAR.beginFill(0xebebeb,1);
			overIconGTAR.drawRoundedRect(848, 80, 165, 60,10);
			overIconGTAR.endFill();
			barra2.clear();
			barra2.drawRect(0, 0, 50, barraGTAR/20);
			GTARbarratxt = game.add.text(858,90,"Extinção: "+barraGTAR+'/1000',{font:'14px MontserratMedium', fill: '#2ca090'});
			GTARtaxatxt = game.add.text(858,115,"Taxa: +"+taxaGTAR+' a cada 5s',{font:'14px MontserratMedium', fill: '#2ca090'});				
}
function outbarraiconGTAR(){
	if(typeof overIconGTAR !== "undefined"){overIconGTAR.destroy();}
	if(typeof GTARtaxatxt  !== "undefined"){GTARtaxatxt.destroy();}
	if(typeof GTARbarratxt !== "undefined"){GTARbarratxt.destroy();}		
}	

function overbarraiconAGRO(){	
			overIconAGRO = game.add.graphics();
			overIconAGRO.beginFill(0xebebeb,1);
			overIconAGRO.drawRoundedRect(918, 80, 165, 60,10);
			overIconAGRO.endFill();
			barra3.clear();
			barra3.drawRect(0, 0, 50, barraAGRO/20);
			AGRObarratxt = game.add.text(928,90,"Escassez: "+barraAGRO+'/1000',{font:'14px MontserratMedium', fill: '#2ca090'});
			AGROtaxatxt = game.add.text(928,115,"Taxa: +"+taxaAGRO+' a cada 5s',{font:'14px MontserratMedium', fill: '#2ca090'});				
}
function outbarraiconAGRO(){
		if(typeof overIconAGRO !== "undefined"){overIconAGRO.destroy();}
		if(typeof AGROtaxatxt  !== "undefined"){AGROtaxatxt.destroy();}
		if(typeof AGRObarratxt !== "undefined"){AGRObarratxt.destroy();}		
}
	
//funcoes missoes
	//variaveis buttoes missoes
	var missoesbg;
	var missoesline;
	var missoesbuttons = new Array();
	var tempbuttons = new Array();
	var missoesmin = true;
	var missaobotaotoggle = true;
	var missaobotao;
	var butname;
	var tweenbut;
	var tweenbg;
	
	var modoGRU;
	var missao1GRU;
	var missao2GRU;
	var missao3GRU;
	var missao4GRU;
	var missao5GRU;
	
	var modoGTAR;
	var missao1GTAR;
	var missao2GTAR;
	var missao3GTAR;
	var missao4GTAR;
	var missao5GTAR;
	
	var modoAGRO;
	
	function missaobotaofun(){
		var buttons;
		missoesmin = true;
		var nbut = 4;
		
		if(typeof missao1GRU !== "undefined"){missao1GRU.destroy();	missoesline.destroy();}
		if(typeof missao2GRU !== "undefined"){missao2GRU.destroy();	missoesline.destroy();}
		if(typeof missao3GRU !== "undefined"){missao3GRU.destroy();	missoesline.destroy();}
		if(typeof missao4GRU !== "undefined"){missao4GRU.destroy();	missoesline.destroy();}
		if(typeof missao5GRU !== "undefined"){missao5GRU.destroy();	missoesline.destroy();}
	
		if(typeof missao1GTAR !== "undefined"){missao1GTAR.destroy();	missoesline.destroy();}
		if(typeof missao2GTAR !== "undefined"){missao2GTAR.destroy();	missoesline.destroy();}
		if(typeof missao3GTAR !== "undefined"){missao3GTAR.destroy();	missoesline.destroy();}
		if(typeof missao4GTAR !== "undefined"){missao4GTAR.destroy();	missoesline.destroy();}
		if(typeof missao5GTAR !== "undefined"){missao5GTAR.destroy();	missoesline.destroy();}
		
		if(missaobotaotoggle == true){
			
			var clicksound = game.add.audio('ClickOn');
				clicksound.volume = 0.25;
				clicksound.play();	
			
				missaobotao.inputEnabled = false;
					//missoes bg
				missoesbg = game.add.sprite(1230,230,'MissoesBase');
				missoesbg.scale.setTo(1,0);
				missoesbg.anchor.set(0.5,0);
				tweenbg = game.add.tween(missoesbg.scale).to( { y: 0.8 }, 600, "Sine.easeInOut", true, 0);
				tweenbg.onComplete.add(function(){missaobotao.inputEnabled = true;}, this);
				
				
			//missoes butoes
			var posbut = 0;
			for(i = 0; i < nbut; i++){
					buttons = game.add.button(1230,245,'missaooff',missoesfun,this,1,0,0);
					buttons.anchor.set(0.5);
					buttons.nameButton = "button" + i;
					tempbuttons[i] = buttons;
					missoesbuttons.push(buttons);
					missaobotaotoggle = false;
					tempbuttons[i].inputEnabled = false;

			}
			for(i = 0; i < nbut; i++){
					tweenbut = game.add.tween(tempbuttons[i]).to( { x: [1230], y: [300+posbut] }, 600, "Sine.easeInOut", true, 0);						
					posbut += 80;
					tweenbut.onComplete.add(function(){for(i = 0; i < nbut; i++){tempbuttons[i].inputEnabled = true;}}, this);		
			}	
		}else{
			var clicksound = game.add.audio('ClickOut');
				clicksound.volume = 0.25;
				clicksound.play();			
			
			missaobotao.inputEnabled = false;
			for(i = 0; i < nbut; i++){
			tweenbut = game.add.tween(tempbuttons[i]).to( { x: [1230], y: [245] }, 300, "Sine.easeInOut", true, 0);
			tweenbut.onComplete.add(function(){for(i = 0; i < nbut; i++){tempbuttons[i].destroy();}}, this);	
			}
			
			missaobotaotoggle = true;
			tweenbg = game.add.tween(missoesbg.scale).to( { y: 0 }, 300, "Sine.easeInOut", true, 0);
			tweenbg.onComplete.add(function(){missoesbg.destroy();missaobotao.inputEnabled = true;}, this);
		}
	}
	
	function missoesfun(missoesbuttons){
		var nbut = 4;
			var clicksound = game.add.audio('ClickMenu2');
				clicksound.volume = 0.25;
				clicksound.play();
				
		if(missoesmin == false && butname == missoesbuttons.nameButton){
			for(i = 0; i < nbut; i++){		
				//missoesbg.scale.setTo(0.2,0.21);	
				tempbuttons[i].scale.setTo(1);
				tempbuttons[i].setFrames(1, 0, 0);
				missoesbuttons.scale.setTo(1);
				missoesbuttons.setFrames(1, 0, 0);
			}
			
		if(typeof missao1GRU !== "undefined"){missao1GRU.destroy();	missoesline.destroy();}
		if(typeof missao2GRU !== "undefined"){missao2GRU.destroy();	missoesline.destroy();}
		if(typeof missao3GRU !== "undefined"){missao3GRU.destroy();	missoesline.destroy();}
		if(typeof missao4GRU !== "undefined"){missao4GRU.destroy();	missoesline.destroy();}
		if(typeof missao5GRU !== "undefined"){missao5GRU.destroy();	missoesline.destroy();}
	
		if(typeof missao1GTAR !== "undefined"){missao1GTAR.destroy();	missoesline.destroy();}
		if(typeof missao2GTAR !== "undefined"){missao2GTAR.destroy();	missoesline.destroy();}
		if(typeof missao3GTAR !== "undefined"){missao3GTAR.destroy();	missoesline.destroy();}
		if(typeof missao4GTAR !== "undefined"){missao4GTAR.destroy();	missoesline.destroy();}
		if(typeof missao5GTAR !== "undefined"){missao5GTAR.destroy();	missoesline.destroy();}
		
		}else{missoesmin = true;}
		
		
		if(missoesmin == true){
			
		if(typeof missao1GRU !== "undefined"){missao1GRU.destroy();	missoesline.destroy();}
		if(typeof missao2GRU !== "undefined"){missao2GRU.destroy();	missoesline.destroy();}
		if(typeof missao3GRU !== "undefined"){missao3GRU.destroy();	missoesline.destroy();}
		if(typeof missao4GRU !== "undefined"){missao4GRU.destroy();	missoesline.destroy();}
		if(typeof missao5GRU !== "undefined"){missao5GRU.destroy();	missoesline.destroy();}
	
		if(typeof missao1GTAR !== "undefined"){missao1GTAR.destroy();	missoesline.destroy();}
		if(typeof missao2GTAR !== "undefined"){missao2GTAR.destroy();	missoesline.destroy();}
		if(typeof missao3GTAR !== "undefined"){missao3GTAR.destroy();	missoesline.destroy();}
		if(typeof missao4GTAR !== "undefined"){missao4GTAR.destroy();	missoesline.destroy();}
		if(typeof missao5GTAR !== "undefined"){missao5GTAR.destroy();	missoesline.destroy();}
				
				for(i = 0; i < nbut; i++){	
				//missoesbg.scale.setTo(0.2,0.21);	
				tempbuttons[i].scale.setTo(1);
				tempbuttons[i].setFrames(1, 0, 0);
				missoesbuttons.scale.setTo(1.3);
				missoesbuttons.setFrames(2, 2, 2);
			}
			
			butname = missoesbuttons.nameButton;
			
			if(modoGRU==true){
				if(butname == 'button0'){	
				missao1GRU = game.add.sprite(920,220,'missao1GRU');
				missoesline = game.add.sprite(1172,297,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);
				}
				
				if(butname == 'button1'){	
				missao2GRU = game.add.sprite(920,220,'missao2GRU');
				missoesline = game.add.sprite(1172,377,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);
				}
				
				if(butname == 'button2'){	
				missao3GRU = game.add.sprite(920,220,'missao3GRU');
				missoesline = game.add.sprite(1172,457,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);				
				}

				if(butname == 'button3'){	
				missao4GRU = game.add.sprite(920,220,'missao4GRU');
				missoesline = game.add.sprite(1172,537,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);				
				}
			}

			if(modoGTAR==true){
				if(butname == 'button0'){	
				missao1GTAR = game.add.sprite(920,220,'missao1GTAR');
				missoesline = game.add.sprite(1172,297,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);				
				}
				
				if(butname == 'button1'){	
				missao2GTAR = game.add.sprite(920,220,'missao2GTAR');
				missoesline = game.add.sprite(1172,377,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);				
				}
				
				if(butname == 'button2'){	
				missao3GTAR = game.add.sprite(920,220,'missao3GTAR');
				missoesline = game.add.sprite(1172,457,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);					
				}

				if(butname == 'button3'){	
				missao4GTAR = game.add.sprite(920,220,'missao4GTAR');
				missoesline = game.add.sprite(1172,537,'Missoesline');
				missoesline.anchor.set(0,0.5);
				missoesline.scale.setTo(0.8,1);				
				}
			}
			
			missoesmin = false;
				
		}else{missoesmin = true;}
			
		butname = missoesbuttons.nameButton;
	}
	
	function bgbarras(){
	
		var bgbarra	= game.add.graphics();
			bgbarra.beginFill(0xffffff);
			bgbarra.drawCircle(850, 40, 55);			
			
			bgbarra.beginFill(0x091f44);
			bgbarra.drawCircle(850, 40, 50);			
			
			bgbarra	= game.add.graphics();
			bgbarra.beginFill(0xffffff);
			bgbarra.drawCircle(920, 40, 55);			
			
			bgbarra.beginFill(0x091f44);
			bgbarra.drawCircle(920, 40, 50);			
			
			bgbarra	= game.add.graphics();
			bgbarra.beginFill(0xffffff);
			bgbarra.drawCircle(990, 40, 55);			
			
			bgbarra.beginFill(0x091f44);
			bgbarra.drawCircle(990, 40, 50);			
			
	}
	function circuloBarras(){
				//circulo dinamico da barra
	
			
			barra1	= game.add.graphics(875, 65);
		var mask1 = game.add.graphics();
			if(barraGRU > 750){barra1.beginFill(0xff0103,1);}
			if(barraGRU <= 750){barra1.beginFill(0xffb901,1);}
			if(barraGRU <= 250){barra1.beginFill(0x2bc501,1);}
			barra1.drawRect(0, 0, 50, barraGRU/20);
			barra1.angle = 180;
			mask1.beginFill(0xffffff);
			mask1.drawCircle(850, 40, 50);
			barra1.mask = mask1;				
			mask1.endFill();
			
			barra2	= game.add.graphics(945, 65);
		var mask2 = game.add.graphics();
			if(barraGTAR > 750){barra2.beginFill(0xff0103,1);}
			if(barraGTAR <= 750){barra2.beginFill(0xffb901,1);}
			if(barraGTAR <= 250){barra2.beginFill(0x2bc501,1);}
			barra2.drawRect(0, 0, 50, barraGTAR/20);
			barra2.angle = 180;
			mask2.beginFill(0xffffff);
			mask2.drawCircle(920, 40, 50);
			barra2.mask = mask2;				
			mask2.endFill();	

			barra3	= game.add.graphics(1015, 65);
		var mask3 = game.add.graphics();
			if(barraAGRO > 750){barra3.beginFill(0xff0103,1);}
			if(barraAGRO <= 750){barra3.beginFill(0xffb901,1);}
			if(barraAGRO <= 250){barra3.beginFill(0x2bc501,1);}
			barra3.drawRect(0, 0, 50, barraAGRO/20);
			barra3.angle = 180;
			mask3.beginFill(0xffffff);
			mask3.drawCircle(990, 40, 50);
			barra3.mask = mask3;				
			mask3.endFill();
			
			barrasRecursosfun();		
	}


var	menuSobre;
var	menuIlha;	
	function menuTopofun(){
// menu topo

		var menutopo = game.add.graphics();
			menutopo.beginFill(0x058797,1);
			menutopo.drawRect(0, 0, 1280, 80);
			menutopo.endFill();
			
//avatar	
		var bgicon = game.add.graphics();
			bgicon.beginFill(0xffffff);
			bgicon.drawCircle(115, 40, 65);			
		var	usericon = game.add.sprite(115, 40,'usericon');
			usericon.anchor.set(0.5);
			usericon.scale.setTo(0.2);
		var nome = game.add.text(155,31,"Maria",{font:'18px MontserratMedium', fill: '#fff'});	
//ilha			
			menuIlha = game.add.button(260, 30,'menuIlha',function(){
			missoesmin = true;
			if(tartarugasCriadas == true){tartarugasCriadas = false;}
			if(ovosTartarugasCriados == true){ovosTartarugasCriados = false;}	
			if(redesCriadas == true){redesCriadas = false;}
			if(residuosCriados == true){residuosCriados = false;}
			menuSobre.inputEnabled = true;	
			game.state.start('stage1');//muda state
}				
				,this,2,2,2);

//Tutorial			
		var	menuTutorial = game.add.button(600, 30,'menuTutorial',function(){
				tutorial = game.add.sprite(0,80,'Tutorial');
				menuTutorial.setFrames(2);	
				menuPerfil.setFrames(1,0,2);
				menuIlha.setFrames(1,0,2);				
		},this,1,0,2);
		
//Perfil			
		var	menuPerfil = game.add.button(430, 30,'menuPerfil',function(){	
			menuPerfil.setFrames(2);
			menuIlha.setFrames(1,0,2);			
		var	perfil = game.add.sprite(0, 80,'perfil');
if(m1pop == false){
var lixeiras = game.add.sprite(250, 550, 'lixeiras');
	lixeiras.scale.setTo(1);
}
if(m2pop == false){
var container = game.add.sprite(340, 550, 'container');
	container.scale.setTo(1);
}
if(m3pop == false){
var campo = game.add.sprite(400, 550, 'campo');
	campo.scale.setTo(0.6);
}
if(m4pop == false){
var recicladora = game.add.sprite(500, 550, 'recicladora');
	recicladora.scale.setTo(0.5);
}		
		
if(m5pop == false){
var pranchas = game.add.sprite(250, 650, 'pranchas');
	pranchas.scale.setTo(1);
}
if(m6pop == false){
var recbarquinhos = game.add.sprite(330, 650, 'recbarquinhos');
	recbarquinhos.scale.setTo(0.4);
}
if(m7pop == false){
var ETE = game.add.sprite(415, 650, 'ETE');
	ETE.scale.setTo(0.7);
}
if(m8pop == false){
var placa = game.add.sprite(530, 650, 'placa');	
	placa.scale.setTo(0.8);
}					
		},this,1,0,2);		

//Configuracoes			
		var	menuConfiguracao = game.add.button(1125, 40,'menuConfiguracao',modoILHAfun,this,1,0,2);		
			menuConfiguracao.anchor.set(0.5);
//Sobre	
		var sobre;
			menuSobre = game.add.button(1170, 40,'menuSobre',function(){
				sobre = game.add.sprite(game.world.centerX,game.world.centerY,'sobre'); 
				sobre.anchor.set(0.5);
				menuSobre.inputEnabled = false;
			var	sairSobre = game.add.button(game.world.centerX + 410,game.world.centerY - 240,'menuSair',function(){
				sobre.destroy();
				sairSobre.destroy();
				menuSobre.inputEnabled = true;
				},this,1,0,0);
		},this,1,0,2);
			menuSobre.anchor.set(0.5);


		
//Sair			
		var	menuSair = game.add.button(1215,40,'menuSair',modoILHAfun,this,1,0,2);		
			menuSair.anchor.set(0.5);
			
	}
var	barraiconGRU;
var	barraiconGTAR;
var	barraiconAGRO;	
	function barrasRecursosfun(){
		//Barras recursos
		if(typeof barraiconGRU !== "undefined"){barraiconGRU.destroy();}		
		if(typeof barraiconGTAR !== "undefined"){barraiconGTAR.destroy();}
		if(typeof barraiconAGRO !== "undefined"){barraiconAGRO.destroy();}
		
			barraiconGRU = game.add.sprite(850,40,'barraiconGRU');
			barraiconGRU.scale.setTo(0.18);
			barraiconGRU.anchor.set(0.5);
			barraiconGRU.inputEnabled = true;
			barraiconGRU.events.onInputOver.add(overbarraiconGRU, this);
			barraiconGRU.events.onInputOut.add(outbarraiconGRU, this);
			
			barraiconGTAR = game.add.sprite(920,40,'barraiconGTAR');
			barraiconGTAR.scale.setTo(0.18);
			barraiconGTAR.anchor.set(0.5);
			barraiconGTAR.inputEnabled = true;
			barraiconGTAR.events.onInputOver.add(overbarraiconGTAR, this);
			barraiconGTAR.events.onInputOut.add(outbarraiconGTAR, this);
			
			barraiconAGRO = game.add.sprite(990,40,'barraiconAGRO');
			barraiconAGRO.scale.setTo(0.18);
			barraiconAGRO.anchor.set(0.5);
			barraiconAGRO.inputEnabled = true;
			barraiconAGRO.events.onInputOver.add(overbarraiconAGRO, this);
			barraiconAGRO.events.onInputOut.add(outbarraiconAGRO, this);		
	}
	
		//background
		
function backgroundilha(){
var	bg;
var	bgmar;
		bgmar = game.add.sprite(0,25,'bgmar');
		bgmar.scale.setTo(1);	
		
	if((barraGRU + barraGTAR + barraAGRO)>2250){
			bg = game.add.sprite(0,25,'bgilha1');
			bg.scale.setTo(1);
	}
	
	if((barraGRU + barraGTAR + barraAGRO)<=2250){
			bg = game.add.sprite(0,25,'bgilha2');
			bg.scale.setTo(1);
	}
	
	if((barraGRU + barraGTAR + barraAGRO)<=1500){
			bg = game.add.sprite(0,25,'bgilha3');
			bg.scale.setTo(1);
	}
	
	if((barraGRU + barraGTAR + barraAGRO)<=750){
			bg = game.add.sprite(0,25,'bgilha4');
			bg.scale.setTo(1);
	}
	
	if(recmissao3GTAR == false || recmissao4GTAR == false){
		esgoto = game.add.sprite(900, 430, 'esgoto');
	}
}
var esgoto;
function destroyesgoto(){
	if( recmissao3GTAR == true && recmissao4GTAR == true){
	 esgoto.destroy();
	}	
}

