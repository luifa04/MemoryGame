// class importData{
//     constructor(groupCards, totalCards){
//        this.groupCards= groupCards;
//        this.totalCards = totalCards;

//     }

    
//     async function constructorArray(){  
    
//         for (let i = 0; i < 8; i++) {
                 
//             try {
//                 const numRamdom = () => Math.floor((Math.random() * (826 - 1 + 1)) + 1);
//                 const response = await fetch(
//                     `https://rickandmortyapi.com/api/character/${numRamdom()}`
//                 )
//                 const data = await response.json()
//                 console.log(data.image); 
                
//                 groupCards.push(data.image);
//             } catch (error) {
//                 return new Error (console.log(error));
//             }
//         }
//         totalCards= groupCards.concat(groupCards);
//     }




// }