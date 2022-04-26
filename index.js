let counterEl = document.getElementById("counter-el");

let count = 0 ;

let btns = document.querySelectorAll('.btn')
// console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease-el')){
            count--;
            if(count < 0){
                count = 0;
                counterEl.style.color = 'red'
            }
        } else if(styles.contains('increase-el')){
            count++;
            counterEl.style.color = 'green'
        } else if(styles.contains('reset-el')){
            count = 0 ;
            counterEl.style.color = 'black'
            
        }
        counterEl.textContent = count;
    })
})
