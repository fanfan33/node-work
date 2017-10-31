var events = require('events');
var eventEmitter = new events.EventEmitter();

var listen1 = function (){
    console.log('监听器1开启');
}
var listen2 = function (){
    console.log('监听器2开启');
}

eventEmitter.addListener('connect',listen1);
eventEmitter.on('connect',listen2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect');
console.log(eventListeners + " 个监听器监听连接事件。");

eventEmitter.emit('connect');

eventEmitter.removeListener('connect',listen2);
console.log("listener2 不再受监听。");
eventEmitter.emit('connect');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log('game over!');