export default function Response({from, message}) {
    return (
        <li>
        <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp;
        <span className="message-data-name">{from.name}</span> &nbsp;
        <span className="fa fa-circle me">&bull;</span>
        </div>
        <div className ="message other-message float-right">
        {message.text}
        </div>
        </li>     
        )
    }