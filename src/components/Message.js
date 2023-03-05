export default function Message({from, message}) {
    return (
        <li>
        <div className="message-data">
        <span className="fa fa-circle online">&bull;</span>&nbsp;
        <span className="message-data-name">{from.name}</span>        
        <span className="message-data-time">{message.time}</span>
        </div>
        <div className ="message my-message">
        {message.text}
        </div>
        </li>       
        )
    }