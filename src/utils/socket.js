import io from 'socket.io-client';

// const socket = io('ws://localhost:9001', {transports: ['websocket']})
const socket = io('ws://totrip.xin:3000', {transports: ['websocket']})

socket.on('recvmsg', function (data) {
  console.log(data)
})

export function sendMsg(from, to, msg) {
  socket.emit('sendMsg', {from, to, msg})
}
