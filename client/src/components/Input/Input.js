import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      placeholder="Type a message ⌨"
      className="input px-5 bg-gray-800 text-gray-200 placeholder-gray-500"
      type="text"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <button
      className="sendButton bg-indigo-500 hover:bg-indigo-700"
      onClick={(event) => sendMessage(event)}
    >
      Send
    </button>
  </form>
)

export default Input
