AOS.init();

const diaDoEvento = new Date("Oct 20, 2023 22:00:00");
const timeStampEvento = diaDoEvento.getTime();

const contaAsHoras =  setInterval(function(){

const agora = new Date();
const timeStampAgora = agora.getTime()

const tempoAteOEvento = timeStampEvento - timeStampAgora 

const dias = 1000 * 60 * 60 * 24;//Em milissegundos
const horas = 1000 * 60 * 60;//Em milissegundos
const minutos = 1000 * 60 ;//Em milissegundos
const segundos = 1000;//Em milissegundos

const diasAteOEvento = Math.floor(tempoAteOEvento / dias);
const horasAteOEvento = Math.floor(tempoAteOEvento % dias / (horas));
const minutosAteOEvento = Math.floor(tempoAteOEvento % horas /(minutos));
const segundosAteOEvento = Math.floor(tempoAteOEvento % minutos /(segundos));

document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

if(diasAteOEvento < 0){
    clearInterval(contaAsHoras);
    document.getElementById('ola').innerHTML = "O EVENTO JA COMEÇOU"
}

}, 1000)