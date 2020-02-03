// Variáveis barras
var barraGRU = 1000;
var barraGTAR = 1000;
var barraAGRO = 1000;	
var taxaGRU = 10;
var taxaGTAR = 10;
var taxaAGRO = 10;	

// Variáveis para dias seguidos
var reciclardayStreak = false;
var reduzirdayStreak = false;
var reutilizardayStreak = false;

var reduzirplasticoStreak = false;
var reduzirplastico = 0;
var reutilizarvidroStreak = false;
var reutilizarvidro = 0;
	
$(document).ready(function() {
	// Escreve os valores das barras
	$('#GRU').html('GRU:' + barraGRU +'<p></p>'+ 'Taxa GRU: ' + taxaGRU+'/5s'+'<p></p>'+'Dias Seguidos: Reduziu: '+reduzirStreak+' reciclou: '+ reciclarStreak+' reutilizou: '+reutilizarStreak+'<p></p>');				
	$('#GTAR').html('GTAR:' + barraGTAR +'<p></p>'+ 'Taxa GTAR: ' + taxaGTAR+'/5s'+'<p></p>'+'Tartarugas e Redes surgem a cada: 10 segundos'+'<p></p>');
	$('#AGRO').html('AGRO:' + barraAGRO +'<p></p>'+ 'Taxa AGRO: ' + taxaAGRO+'/5s');
	
	// Temporiza a taxa das barras	
	setInterval(barraGRUfun, 5000);
	setInterval(barraGTARfun, 5000);
	setInterval(barraAGROfun, 5000);
	
	// Contas dias seguidos
	setInterval(dayStreakfun, 5000);
	
	// Funções das barras	
	function barraGRUfun() {
		barraGRU += taxaGRU;
		if(barraGRU > 1000){barraGRU = 1000;}
		if(barraGRU < 0){barraGRU = 0;}
		$('#GRU').html('GRU:' + barraGRU +'<p></p>'+ 'Taxa GRU: ' + taxaGRU+'/5s'+'<p></p>'+'Dias Seguidos: Reduziu: '+reduzirStreak+' reciclou: '+ reciclarStreak+' reutilizou: '+reutilizarStreak+'<p></p>');				
		barra1.clear();
		barra2.clear();
		barra3.clear();
		outbarraiconGRU();
		circuloBarras();	
	}
	
	function barraGTARfun() {
		barraGTAR += taxaGTAR;
		if(barraGTAR > 1000) {barraGTAR = 1000;}
		if(barraGTAR < 0) {barraGTAR = 0;}		
		$('#GTAR').html('GTAR:' + barraGTAR +'<p></p>'+ 'Taxa GTAR: ' + taxaGTAR+'/5s'+'<p></p>'+'Tartarugas e Redes surgem a cada: 10 segundos'+'<p></p>');
		barra1.clear();
		barra2.clear();
		barra3.clear();
		outbarraiconGTAR();		
		circuloBarras();	
	}
	
	function barraAGROfun() {
		barraAGRO += taxaAGRO;
		if(barraAGRO > 1000){barraAGRO = 1000;}
		if(barraAGRO < 0){barraAGRO = 0;}		
		$('#AGRO').html('AGRO:' + barraAGRO +'<p></p>'+ 'Taxa AGRO: ' + taxaAGRO+'/5s');
		barra1.clear();
		barra2.clear();
		barra3.clear();
		outbarraiconAGRO();		
		circuloBarras();	
	}
	
	//tartarugas doentes aparecem na praia a cada 15s
	setInterval(criaTartarugas, 15000);
	//ovos aparecem na praia a cada 15s
	setInterval(criaovosTartarugas, 15000)	
	//redes aparecem na praia a cada 15s
	setInterval(criaRedes, 15000);
	//residuos aparecem na praia a cada 15s
	setInterval(criaResiduos, 15000);
	
	//Dias seguidos funcao
	function dayStreakfun() {
		if(reciclardayStreak == false) {
			reciclarStreak = 0;
		}
		if(reduzirdayStreak == false) {
			reduzirStreak = 0;
			if(reduzirplasticoStreak == false) {reduzirplastico = 0;}
		}
		if(reutilizardayStreak == false) {
			if(reutilizarvidroStreak == false) {reutilizarvidro = 0;}
		}

	reciclardayStreak = false;
	reduzirdayStreak = false;
	reutilizardayStreak = false;
	
	reduzirplasticoStreak = false;
	reutilizarvidroStreak = false; 
	}	
});	