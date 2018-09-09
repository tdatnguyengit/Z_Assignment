import { MAX_LENGTH_MESSAGE } from "../constants/settings";

/**
 * Split the message into parts, all of them meeting the maxLength character requirement. 
 * @param  {string} message The input message
 * @param  {number} maxLength Max length of chunk
 * @return {string[]} list of chunk
 */
export default function splitMessage(message, maxLength = MAX_LENGTH_MESSAGE) {

    if (!maxLength || maxLength < 0) {
        throw "Can't split message!";
    }
    //clone message
    let input = message.slice();

    //remove excess whitespace
    input = input.trim();
    input = input.replace(/\s+/g, ' ');

    if (input.length <= maxLength) {
        return [input];
    }

    let lstWords = input.split(' ');

    //detect error word
    if (lstWords.some(u => u.length > maxLength)) {
        throw `The message contains a span of non-whitespace characters longer than ${maxLength} characters`;
    }


    //estimate total chunk
    var estTotalChunk = Math.round(input.length / maxLength);

    do {
        validateTotalChunk(estTotalChunk, maxLength);

        //calculate length of indicator
        //indicator: 'm/n ' with m = 1..n
        //the longest indicator: 'n/n ' => length = length(n) * 2 + 2
        //the shortest indicator: '1/n ' => length = length(n) + 3
        let totalChunkLength = estTotalChunk.toString(10).length;
        let maxLenIndicator = totalChunkLength * 2 + 2;
        let minLenIndicator = totalChunkLength + 3;
        let avgLenIndicator = (maxLenIndicator + minLenIndicator) / 2;

        //check estTotalChunk after add indicator
        let totalLenResult = (avgLenIndicator * estTotalChunk) + input.length;
        let totalChunk = Math.round(totalLenResult / maxLength);
        if (totalChunk === estTotalChunk) {
            break;
        }
        estTotalChunk = totalChunk;
    } while (true);


    var result = [];

    //try split msg into chunks with estTotal
    do {
        var chunkIndex = 1;
        result = [];
        for (let i = 0; i < lstWords.length;) {
            let indicator = `${chunkIndex}/${estTotalChunk}`;
            let chunk = '' + indicator;
            let j = i;

            //create chunk by combine indicator and words
            //length of chunk must less than macLength
            while ((chunk + ' ' + lstWords[j]).length <= maxLength && j < lstWords.length) {
                chunk += ' ' + lstWords[j];
                j++;
            }

            //if can't add any word with Indicator
            if (i === j) {
                throw "Can't split message!";
            }

            result.push(chunk);
            i = j;
            chunkIndex++;
        }

        //if number of chunk > estTotalChunk
        if (chunkIndex - 1 === estTotalChunk) {
            break;
        }

        //calculate new estTotalChunk and test again
        estTotalChunk = chunkIndex - 1;
        validateTotalChunk(estTotalChunk, maxLength);
    }
    while (true)

    return result;
}


/**
 * Validate TotalChunk by length of indicator. The length of longest indicator must less than maxLength.
 * @param  {string} totalChunk The total chunk
 * @param  {number} maxLength Max length of chunk
 */
function validateTotalChunk(totalChunk, maxLength) {
    //the longest indicator: 'n/n ' => length = length(n) * 2 + 2
    let totalChunkLength = totalChunk.toString(10).length;
    let maxLenIndicator = totalChunkLength * 2 + 2;
    if (maxLenIndicator > maxLength) {
        throw "Can't split message!";
    }
}