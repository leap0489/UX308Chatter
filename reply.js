export function reply(message){
    let reply = `${message} to you too`;
    if(message.toLowerCase().includes("nice")){
        reply = "Yes ... I think that's nice too"
    
    }

    return reply;
}