const x = document.querySelectorAll('.xo>div')
let flag =true
let winnerX =0
let winnerO =0
const bx = document.querySelector('.xo')
const win = document.querySelectorAll('.win>span')
x.forEach((val)=>{
    val.addEventListener('click' , ()=>{
        let text = val.innerHTML
        if(text == ''){
            if(flag){
                val.innerText = 'X'
            }else{
                val.innerText = 'O'
            }
            flag = !flag
        }
        const _array = []
        switch (true) {
            case (x[0].innerText !='') && (x[0].innerText == x[1].innerText && x[0].innerText == x[2].innerText) : _array.push(0,1,2) ; break
            case (x[3].innerText !='') && (x[3].innerText == x[4].innerText && x[3].innerText == x[5].innerText) : _array.push(3,4,5) ; break    
            case (x[6].innerText !='') && (x[6].innerText == x[7].innerText && x[6].innerText == x[8].innerText) : _array.push(6,7,8) ; break
            case (x[0].innerText !='') && (x[0].innerText == x[3].innerText && x[0].innerText == x[6].innerText) : _array.push(0,3,6) ; break
            case (x[1].innerText !='') && (x[1].innerText == x[4].innerText && x[1].innerText == x[7].innerText) : _array.push(1,4,7) ; break
            case (x[2].innerText !='') && (x[2].innerText == x[5].innerText && x[2].innerText == x[8].innerText) : _array.push(2,5,8) ; break
            case (x[0].innerText !='') && (x[0].innerText == x[4].innerText && x[0].innerText == x[8].innerText) : _array.push(0,4,8) ; break
            case (x[2].innerText !='') && (x[2].innerText == x[4].innerText && x[2].innerText == x[6].innerText) : _array.push(2,4,6) ; break
            
                
        }
        console.log(_array);
        
        _array.forEach((index)=>{
            x[index].style.backgroundColor='green'
        })

        if(_array.length == 3){
            bx.setAttribute('inert' , true)
            if(x[_array[0]].innerText == 'X'){
                winnerX++
                win[1].innerText = 'X'
            }else if(x[_array[0]].innerText == 'O'){
                winnerO
                win[1].innerText = 'O'
            }
            console.log(winnerX);
            console.log(winnerO);
         setTimeout(() => {
            x.forEach((val)=>{
                val.innerText = ''
            })
            _array.forEach((index)=>{
                x[index].style.backgroundColor='white'
            })
            win[1].innerText = ''
            bx.removeAttribute('inert')
         }, 5000);   

            
        }
        let num = 0 
            x.forEach((val)=>{
                if(val.innerText == ''){
                    num++
                }
            }) 
            if(num == 0 && _array.length !=3){
                
                win[1].innerText = 'Draw'
            
                setTimeout(() => {
                x.forEach((val) => {
                    val.innerText = ''
                    
                })
                _array.forEach((val) => {
                    x[val].style.background = 'white'
                })
                bx.removeAttribute('inert')
                win[1].innerText = ''
            }, 2500);
            }


    })
})
