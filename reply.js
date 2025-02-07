export function reply(message){
    let reply = `Thanks for choosing to order with us. Would you like a pizza or chicken tenders? `;
    if(message.toLowerCase().includes("pizza")){
        reply = "What size would you like? We have small, medium, large."
    }
    else if(message.toLowerCase().includes("small") || message.toLowerCase().includes("medium") || message.toLowerCase().includes("large")){
        reply = "Now what toppings would you like. We have cheese or pepperoni."
    }
    else if (message.toLowerCase().includes("cheese")){
        reply = "One cheese pizza on the way to you! Payment will be required upon delivery."
    }
    else if (message.toLowerCase().includes("pepperoni")){
        reply = "One pepperoni pizza on the way to you! Payment will be required upon delivery."
    }
    else if (message.toLowerCase().includes("chicken") || message.toLowerCase().includes("tenders")){
        reply = "Awesome! What size meal would you like? We can do a 3-piece or a 5-piece."
    }
    else if (message.toLowerCase().includes("3") || message.toLowerCase().includes("5")){
        reply = "Great! Do you want plum or ranch as your dipping sauce?"
    }
    else if (message.toLowerCase().includes("plum") || message.toLowerCase().includes("ranch")){
        reply = "One chicken strip order on the way to you! Payment will be required upon delivery."
    }




    return reply;
}