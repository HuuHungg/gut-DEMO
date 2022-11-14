 // CallBack?

 // Là Hàm (function) được truyền qua đối số
 // Khi gọi hàm khác

 // 1. là hàm
 // 2. Truyền qua đối số của một function khác gọi là callBack


function myFunction(param)   {

    if (typeof param === 'function') {
        param('Hoc lap trinh')
    }
}


function myCallback(value) { 
    console.log('Value: ', value )
}



myFunction(myCallback) 


// CallBack phần 2 -------------------------------------------
// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)


var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]



Array.prototype.map2 = function(callback) {
    var output = []
    var arrayLength = this.length;
    
     for(var i = 0; i < arrayLength; ++i) {
       var result = callback(this[i], i);
        output.push(result)
     } 

     return output;
}



var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>` 
});

console.log(htmls.join(''))





// var htmls = courses.map(function(course) {  
//     return `<h2>${course}</h2>`
// });

// console.log(htmls.join(''));






var courses1 = [
    'Ngocrongonline',
    'PHP',
    'dreamelengausoccer'
]

Array.prototype.map3 = function(callback) {
    var output = []
    var arrayLength = this.length

    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result)
    } 
    return output
}

 
var htmls =  courses1.map3(function(course) {      
    return `<h2>${course}</h2>` 
})

console.log(htmls)


// courses1.map(function (course) {
//     return `<h2>${course}</h2>`
// })

// console.log(htmls.join(''))


var course2 = [
    'Khoa hoc reacjs',
    'Khoa hoc html,css',
    'Khoa hoc Javarscript'
]


Array.prototype.forEach = function(cb) {
    var Output = []
    var arrayLength = this.length

    for (var i = 0; i < arrayLength; i++) {
        var result = cb(this[i],i)
        Output.push(result)
    }
        return Output

}


var javascripts = course2.forEach(function(course) {
    return `<h2>${course2}</h2>` 
})

console.log(javascripts)



// Empty element of array? ----------------------------------------------

// var length1 = [
//     'Javarscript',
//     'PHP'
// ]

// for (var index in length1) {
//     console.log(length1[index])
// }


// var length2 = new Array(10)
// length2.push('javascript', 'PHP')

// console.log(length2);
// for (var index in length2) {
//     console.log(length2[index]) 
// }


var myString = 'Javascript bazzic'
console.log(myString. charAt(3))