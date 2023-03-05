let data = ["Shravani" , "Mishra"]

let BioData = [
    1,
    ...data,
    24,
    "Female"
]
console.log(BioData)

// *****************************


const details = {
    fname: "Shravani",
    lname:"Mishra"
}

const FullDetails={
    id:1,
    ...details,
    age:24,
    gender:"Female"


}
console.log(FullDetails)