var modoAGROState = {
	create: function(){
		//musica
		musica();		
		
		//background
		backgroundilha();		
		//Modos buttoes
		var	modoILHA = game.add.button(0, 525,'modoAGROon',modoILHAfun,this,0,0,0);
			modoILHA.anchor.set(0,0.5);

		var	modoGTAR = game.add.button(0, 385,'modoGTARoff',modoGTARfun,this,1,0,0);
			modoGTAR.anchor.set(0,0.5);	

		var	modoGRU = game.add.button(0, 245,'modoGRUoff',modoGRUfun,this,1,0,0);
			modoGRU.anchor.set(0,0.5);		
		
		//missoes-off sprite
		var missoesoff = game.add.sprite(1230,145,'missoesoff');
			missoesoff.anchor.set(0.5,0);


			
		//Rotacao agraria
				AGRO1 = game.add.button(550,150 ,'agro1',AGRO1fun,this,1,0,0);
				AGRO1.anchor.set(0,0.5);
						
				AGRO2 = game.add.button(625, 150 ,'agro2',AGRO2fun,this,1,0,0);
				AGRO2.anchor.set(0,0.5);
				
				AGRO3 = game.add.button(550, 190,'agro3',AGRO3fun,this,1,0,0);
				AGRO3.anchor.set(0,0.5);
				
				AGRO4 = game.add.button(625, 190,'agro4',AGRO4fun,this,1,0,0);
				AGRO4.anchor.set(0,0.5);
				
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

//AGRO = terrenos; plant = plantas; 
var	AGRO1;
var	AGRO2;
var	AGRO3;
var	AGRO4;
var AGRO1bool;
var AGRO2bool;
var AGRO3bool;
var AGRO4bool;
var	plant1;
var	plant2;
var	plant3;
var plant1bool;
var plant2bool;
var plant3bool;
var plantabg;
var plant1temp;
var plant2temp;
var plant3temp;

function AGRO1fun(){
	
	destroyplant();
	AGRO1bool = true;
	AGROrotacao();
	AGRO1.inputEnabled = false;
	AGRO2.inputEnabled = false;
	AGRO3.inputEnabled = false;
	AGRO4.inputEnabled = false;
}
function AGRO2fun(){
	
	destroyplant();
	AGRO2bool = true;
	AGROrotacao();
	AGRO1.inputEnabled = false;
	AGRO2.inputEnabled = false;
	AGRO3.inputEnabled = false;
	AGRO4.inputEnabled = false;
}
function AGRO3fun(){
	
	destroyplant();
	AGRO3bool = true;
	AGROrotacao();
	AGRO1.inputEnabled = false;
	AGRO2.inputEnabled = false;
	AGRO3.inputEnabled = false;
	AGRO4.inputEnabled = false;
}
function AGRO4fun(){
	
	destroyplant();
	AGRO4bool = true;
	AGROrotacao();
	AGRO1.inputEnabled = false;
	AGRO2.inputEnabled = false;
	AGRO3.inputEnabled = false;
	AGRO4.inputEnabled = false;	
}
var sairagro;
function AGROrotacao() {
					
				plantabg = game.add.sprite(game.world.centerX, game.world.centerY  , 'plantabg');
				plantabg.anchor.set(0.5);
				
				plant1 = game.add.button(game.world.centerX, game.world.centerY+120,'milho',plant1fun,this,1,0,0);
				plant1.anchor.set(0.5);
						
				plant2 = game.add.button(game.world.centerX-140, game.world.centerY+120,'trigo',plant2fun,this,1,0,0);
				plant2.anchor.set(0.5);
				
				plant3 = game.add.button(game.world.centerX+140, game.world.centerY+120,'sevada',plant3fun,this,1,0,0);
				plant3.anchor.set(0.5);
				
				 sairagro = game.add.button(game.world.centerX+200, game.world.centerY-170 ,'sair',destroyplant,this,1,0,0);
					sairagro.scale.setTo(0.8);
					sairagro.anchor.set(0.5);
}

function plant1fun(){
	plant1bool = true;
	plantacao();
}

function plant2fun(){
	plant2bool = true;
	plantacao();
}

function plant3fun(){
	plant3bool = true;
	plantacao();
}

var ultAGRO1;
var ultAGRO2;
var ultAGRO3;
var ultAGRO4;


function plantacao(){
	if(AGRO1bool == true){
		if(plant1bool == true){
			if(ultAGRO1 == 1){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO1 = 1;
			if(typeof plant1temp !== "undefined"){plant1temp.destroy();}
			 plant1temp = game.add.sprite(550, 130 ,'planta1');

			console.log('planta 1 terreno 1');
		}
		if(plant2bool == true){
			if(ultAGRO1 == 2){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO1 = 2;
			if(typeof plant2temp !== "undefined"){plant2temp.destroy();}
			 plant2temp = game.add.sprite(550, 130 ,'planta2');
	
			console.log('planta 2 terreno 1');
		}
		if(plant3bool == true){
			if(ultAGRO1 == 3){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO1 = 3;
			if(typeof plant3temp !== "undefined"){plant3temp.destroy();}
			 plant3temp = game.add.sprite(550, 130 ,'planta3');
	
			console.log('planta 3 terreno 1');
			}
		destroyAGRO();
		destroyplant();
	}
	
	if(AGRO2bool == true){
		if(plant1bool == true){
			if(ultAGRO2 == 1){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO2 = 1;
			if(typeof plant1temp !== "undefined"){plant1temp.destroy();}
			 plant1temp = game.add.sprite(625, 130 ,'planta1');

			console.log('planta 1 terreno 2');
		}
		if(plant2bool == true){
			if(ultAGRO2 == 2){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO2 = 2;
			if(typeof plant2temp !== "undefined"){plant2temp.destroy();}
			 plant2temp = game.add.sprite(625, 130 ,'planta2');	

			console.log('planta 2 terreno 2');
			}
		if(plant3bool == true){
			if(ultAGRO2 == 3){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO2 = 3;
			if(typeof plant3temp !== "undefined"){plant3temp.destroy();}		
			console.log('planta 3 terreno 2');
			 plant3temp = game.add.sprite(625, 130 ,'planta3');

			}
		destroyAGRO();
		destroyplant();
	}
	
	if(AGRO3bool == true){
		if(plant1bool == true){
			if(ultAGRO3 == 1){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO3 = 1;
			if(typeof plant1temp !== "undefined"){plant1temp.destroy();}	
			console.log('planta 1 terreno 3');
			 plant1temp = game.add.sprite(550, 160 ,'planta1');

			}
		if(plant2bool == true){
			if(ultAGRO3 == 2){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO3 = 2;	
			if(typeof plant2temp !== "undefined"){plant2temp.destroy();}		
			console.log('planta 2 terreno 3');
			 plant2temp = game.add.sprite(550, 160 ,'planta2');
			 plantatual=8;
			}
		if(plant3bool == true){
			if(ultAGRO3 == 3){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO3 = 3;
			if(typeof plant3temp !== "undefined"){plant3temp.destroy();}		
			console.log('planta 3 terreno 3');
			 plant3temp = game.add.sprite(550, 160 ,'planta3');

			}
		destroyAGRO();
		destroyplant();
	}
	
	if(AGRO4bool == true){
		if(plant1bool == true){
			if(ultAGRO4 == 1){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO4 = 1;
			if(typeof plant1temp !== "undefined"){plant1temp.destroy();}		
			console.log('planta 1 terreno 4');
			 plant1temp = game.add.sprite(625, 160 ,'planta1');

			}
		if(plant2bool == true){
			if(ultAGRO4 == 2){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO4 = 2;
			if(typeof plant2temp !== "undefined"){plant2temp.destroy();}	
			console.log('planta 2 terreno 4');
			 plant2temp = game.add.sprite(625, 160 ,'planta2');

			}
		if(plant3bool == true){
			if(ultAGRO4 == 3){barraAGRO -= 25;}else{barraAGRO -= 50;}
			ultAGRO4 = 3;
			if(typeof plant3temp !== "undefined"){plant3temp.destroy();}	
			console.log('planta 3 terreno 4');
			 plant3temp = game.add.sprite(625, 160 ,'planta3');

			}
		destroyAGRO();
		destroyplant();
	}
}

function destroyAGRO(){
// if(typeof AGRO1 !== "undefined"){AGRO1.destroy();}	
// if(typeof AGRO2 !== "undefined"){AGRO2.destroy();}
// if(typeof AGRO3 !== "undefined"){AGRO3.destroy();}
// if(typeof AGRO4 !== "undefined"){AGRO4.destroy();}


AGRO1bool = false;
AGRO2bool = false;
AGRO3bool = false;
AGRO4bool = false;
plant1bool = false;
plant2bool = false;
plant3bool = false;
}

function destroyplant(){
if(typeof sairagro !== "undefined"){sairagro.destroy();}
if(typeof plantabg !== "undefined"){plantabg.destroy();}
if(typeof plant1 !== "undefined"){plant1.destroy();}
if(typeof plant2 !== "undefined"){plant2.destroy();}
if(typeof plant3 !== "undefined"){plant3.destroy();}

AGRO1bool = false;
AGRO2bool = false;
AGRO3bool = false;
AGRO4bool = false;
plant1bool = false;
plant2bool = false;
plant3bool = false;

AGRO1.inputEnabled = true;
AGRO2.inputEnabled = true;
AGRO3.inputEnabled = true;
AGRO4.inputEnabled = true;	
}
