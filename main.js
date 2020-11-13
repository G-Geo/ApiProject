let users;


const fetchFunction = () => {

    let jsonData;

    fetch('https://randomuser.me/api?results=10')
        .then(res => res.json())
        .then((data)=> {
            jsonData = data
            
     users = jsonData.results
    

     
     users.forEach(function(element, index){
         
        let userName = users[index].name.first + " " + users[index].name.last
        let userNumber = `${users[index].phone}`
        let userEmail = `${users[index].email}`
        let userPicture = `${users[index].picture.medium}`
  


        let userCard = generateContactCard2(userName, userNumber, userPicture, userEmail, index)
        let div = document.createElement("div")
        div.innerHTML = userCard

     

        document.getElementById("contactCards").appendChild(div)
     })
    })
}




const generateContactCard2 = (userName, userNumber, userPicture, userEmail, index) => {
    return`
    <div class=contactCard>
        <img class=userImg src="${userPicture}"></img>

        <h3 id=${index}>${index}</h3>
        <div class=userContainer>
            <span class=userName>${userName}</span>
            <span class=userEmail>${userEmail}</span>
            <span class=userNumber>${userNumber}</span>
        </div>

        <div class=buttonWrapper>
            <button id=${index} onclick=getAddress(this)>Address</button>
            <button id=${index} class=dob onclick=getDOB(this)>DOB</button>
        </div>

        <div>
            <div id=wrapper>
                <span id=dob${index}></span>
                <span id=address${index}></span>
            </div>
        </div>
    </div>
    `
}

const getDOB = (target) => {

    let thisIndex = target.id

    let userDOB = `${users[thisIndex].dob.date}`
    let trimDOB = userDOB.slice(0,10)

    let htmlDOBelement = document.getElementById(`dob${thisIndex}`)
    htmlDOBelement.innerText = trimDOB
    // let userAddress = `${users[index].location.city}, ${users[index].location.country}`

}

const getAddress = (target) => {
    let addressIndex = target.id
 

    let thisCountry = users[addressIndex].location.country
    let thisState = users[addressIndex].location.state

    let fullAddress = thisState + ", " + thisCountry

    let htmlAddressElement = document.getElementById(`address${addressIndex}`)

    htmlAddressElement.innerText = fullAddress

}


window.onload = () => {
    fetchFunction()
}

console.log(users)
setTimeout(function(){ console.log(users); }, 1000);

// const generateContactCard = (userName, userNumber, userPicture) => {
//     let contactCard = document.createElement("div")
//     contactCard.className = 'contactCard'

//     let img = document.createElement("img")
//     img.className = "userImage"
//     img.src = userPicture
//     contactCard.appendChild(img)


//     let name = document.createElement("span")
//     name.className = "userName"
//     name.innerText = userName
//     contactCard.appendChild(name)

    
//     let number = document.createElement("div")
//     number.className = "userNumber"
//     number.innerText = userNumber
//     contactCard.appendChild(number)
//     return contactCard
// }
