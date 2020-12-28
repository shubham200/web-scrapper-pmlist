const cheerio=require('cheerio')
const request =require('request')

const url="https://en.wikipedia.org/wiki/List_of_prime_ministers_of_India"

request(url,{json:true},(res,err,html)=> {
    try{
        const $=cheerio.load(html)
        $('b>span>span>span.fn>a,td>small').map(function(i,element){
            const a=$(this).prev()
            console.log($(element).text())
        })


    }catch{
        console.log(err)
    }

        
    }
)
