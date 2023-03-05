export default function Typing({from, message}) {
    return (
        <li>
        <div className="message-data">
        <span className="fa fa-circle online">&bull;</span>
        <span className="message-data-name">{from.name}</span>&nbsp;
        <span className="message-data-time">{message.time}</span>           
        </div>
             
        </li>  
        )
    }