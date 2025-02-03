const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'

document.getElementById('wrapper').appendChild(resultdiv)



button.addEventListener('click',displaystats)
function displaystats(){


    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language = ''
    switch(city){
        case 'bengaluru':
            population = 8443675
            literacyRate = 88.71
            language = 'kannada'
            break
          
        case 'tamil nadu':
            population = 4646732
            literacyRate = 90.20
            language = 'tamil'
            break
                
        case 'mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'marathi'
            break

        case 'delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'hindi'
            break
    }
    
    let text = `The Indian city of ${city} has a population of ${population}.language spoken is ${language} and literacy rate is ${literacyRate}%.`
    console.log(text)

   

    document.getElementById('result').innerHTML = text
   
}    