import './Message.css'
import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false

  const trimName = name.trim().toLowerCase()

  if (user === trimName) {
    isSentByCurrentUser = true
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox bg-gray-700">
        <p className="messageText text-gray-300">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  )
}

export default Message
