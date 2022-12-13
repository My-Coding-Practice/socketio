import React from 'react'

const Messages = (messages) => {
  return (
    <div>
        {messages.map(message => {
            return (
                <div>
                    <h3>{message.author}</h3>
                    <p>{message.message}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Messages