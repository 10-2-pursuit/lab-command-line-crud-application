const { nanoid } = require("nanoid");
const inform = console.log;

function create(userInput) {
    const changeToDonation = {
        id: nanoid(4),
        name: userInput.split(" ", 0),
        amount: userInput.split(" ", 1),
        donation: userInput.split(" ", 2)
    }
    return changeToDonation;
}

function index(donations) {
    return donations.map((changeToDonation) => changeToDonation.id + " " + changeToDonation.name).join("\n")
}

function show(donations, changeToDonationId) {
    const foundDonation = donations.find((changeToDonation) => changeToDonationId === changeToDonationId);
    
    return foundDonation.id + " " + foundDonation.name + " " + foundDonation.amount + " " + foundDonation.donation;
}

function destroy (donations, changeToDonationId) {
   
   const index =  donations.findIndex((donation) => donation.id === changeToDonationId);
   
   if (index > -1) {
    
    donations.splice(index, 1);
    console.log("we deleted your donation");
    
    return donations
   } else {
    console.log("couldnt find an donation with that id")
   }
}

function update (donations, changeToDonationId, updatedChangeToDonation ) {
   
     const index =  donation.findIndex((donation) => donation.id === changeToDonationId);
    
     if (index > -1) {
        
        donations[index].id = changeToDonationId;
       
        donations[index].name = updatedChangeToDonation;
      
       
        console.log("your donation has been updated");
        
        return donations
    } else {
      console.log("couldnt find an donation with that id")
     }
    
    }

function total(donations) {
    let totalDonation = 0;
        for (let donation of donations) {
           totalDonation += donations.donation
       }
    return totalDonation;
    }

    module.exports = {
        create,
        index,
        show,
        destroy,
        update,
        total
    }