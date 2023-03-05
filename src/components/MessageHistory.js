import { generate } from 'shortid';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

const shortid = require('shortid');
export default function MessageHistory({list}) {
    const listIdx = list.map(item => { 
        return ({
            id: shortid(generate),
            value: item 
        }) 
    })
    return (
        <ul>
        {
            listIdx.map((el) => {
                let contentEl = null;
                if (el.value.type === "message") {
                    contentEl = <Message from={el.value.from} message={el.value} key={el.id}/> 
                } else if (el.value.type === "response") {
                    contentEl = <Response from={el.value.from} message={el.value} key={el.id}/> 
                } else {
                    contentEl = <Typing from={el.value.from} message={el.value} key={el.id}/>
                }
                return (
                    contentEl
                    )
                })
            }
            </ul>
            )
        }
        
        MessageHistory.deaultProps = {
            list: []
        }