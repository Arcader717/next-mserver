import { useEffect } from 'react'
import io from 'socket.io-client'

function socket() {
  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      const socket = io()

      socket.on('connection', () => {
          console.log("connected")
      })
    })
  }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted

  return <h1>Socket.io</h1>
}

export default socket;