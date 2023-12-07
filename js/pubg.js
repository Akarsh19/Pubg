let gaming = [
    {
        name:"Pubg Erangle",
        img:"pubgerangle.jpg",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam, tempora quas accusantium esse architecto repellat corporis commodi aliquid quidem minus ipsa, dolores ipsam laudantium harum eos magni sequi consequuntur!",
        Gun:"Dp",
        Maxine:"47 Bullets"
    },

    {
        name:"Pubg Sanhok",
        img:"sanhok.jpg",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam, tempora quas accusantium esse architecto repellat corporis commodi aliquid quidem minus ipsa, dolores ipsam laudantium harum eos magni sequi consequuntur!",
        Gun:"M416",
        Maxine:"40 Bullets"
    },
    {
        name:"Pubg Warehouse",
        img:"warehouse.jpeg",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam, tempora quas accusantium esse architecto repellat corporis commodi aliquid quidem minus ipsa, dolores ipsam laudantium harum eos magni sequi consequuntur!",
        Gun:"M24",
        Maxine:"6 Bullets"
    },
    {
        name:"Pubg Milatry Base",
        img:"milatrybase.jpg",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam, tempora quas accusantium esse architecto repellat corporis commodi aliquid quidem minus ipsa, dolores ipsam laudantium harum eos magni sequi consequuntur!",
        Gun:"AKM",
        Maxine:"40 Bullets"
    },
    {
        name:"Pubg Pochinki",
        img:"pochinki.jpeg",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam, tempora quas accusantium esse architecto repellat corporis commodi aliquid quidem minus ipsa, dolores ipsam laudantium harum eos magni sequi consequuntur!",
        Gun:"SCAR-L",
        Maxine:"40 Bullets"
    },
    {
        name:"Pubg Mylta Power",
        img:"myltapower.webp",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam, tempora quas accusantium esse architecto repellat corporis commodi aliquid quidem minus ipsa, dolores ipsam laudantium harum eos magni sequi consequuntur!",
        Gun:"Kar-98",
        Maxine:"6 Bullets"
    }


]

let gamer="";

for(i=0;i<gaming.length;i++){

    gamer+='<div class="col-md-4 col-sm-6 col-12 mb-3"><div class="card h-100"><img src="./images/'+gaming[i].img+'" alt=""><div class="card-body"><h3 class="card-title">'+gaming[i].name+'</h3><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam, tempora quas accusantium esse architecto repellat corporis commodi aliquid quidem minus ipsa, dolores ipsam laudantium harum eos magni sequi consequuntur!</p><button class="btn btn-danger me-2">'+gaming[i].Gun+'</button><button class="btn btn-primary">'+gaming[i].Maxine+'</button></div></div></div>'
}
//console.log(gamer)

document.querySelector("#msg").innerHTML=gamer