// Trabalhando com datas

// data atual de acordo com o horário do sistema
var data = new Date();

console.log(data);

// desmenbrando a data

// horas
data.getHours(); 

console.log(data.getHours());

// minutos
data.getMinutes();

console.log(data.getMinutes());

// segundos
data.getSeconds();

console.log(data.getSeconds());

// Criando uma data específica

var datanova = new Date("March 10, 2018");

console.log(datanova);

// dia do mês

datanova.getDate();

console.log(datanova.getDate());

// mês

datanova.getMonth();

console.log(datanova.getMonth());

// ano

datanova.getFullYear();

console.log(datanova.getFullYear());

// dia da semana

datanova.getDay();

console.log(datanova.getDay());

// formatando a data
/*
datanova.getDay()"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear();

console.log(datanova.getDay() + "/" + (datanova.getMonth() + 1) + "/" + datanova.getFullYear());
  */

// mudando a data

datanova.setDate(datanova.getDate() + 5);
console.log(datanova);  

// mudando a hora

datanova.setHours(datanova.getHours() + 10);
console.log(datanova);

// mostrando o dia da semana por extenso

// array com os dias da semana
var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

console.log(dias[datanova.getDay()]);