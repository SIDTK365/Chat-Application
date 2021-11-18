// This is the file that connects the socket.io-client to the socket.io backend


import { io } from 'socket.io-client'

// const ENDPOINT = 'https://chao-chat.herokuapp.com/';
const ENDPOINT = 'http://localhost:5000/';

export const socket = io(ENDPOINT)
export let socketID = ''
socket.on('connect', () => {
  socketID = socket.id
})
