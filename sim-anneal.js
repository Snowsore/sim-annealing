(() => {

    window.simAnneal = {
        setup(temp, rate, prev, generate, eval) {

            return {
                step() {

                    var next = generate(prev.map(x => x))
                    var dE = eval(next) - eval(prev)

                    if(dE < 0) {
                        prev = next
                    } else {
                        if(Math.random() < Math.exp(-dE / temp)) {
                            prev = next
                        }
                    }
        
                    temp = rate * temp

                    return prev
                }
            }
        }
    }

})()