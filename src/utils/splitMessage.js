/**
 * Split the message into parts, all of them meeting the maxLength character requirement. 
 * @param  {string} message The input message
 * @param  {number} maxLength Max length of chunk
 */
export default function splitMessage(message, maxLength)
{
    if(message.length < maxLength)
    {
        return [message];
    }
}