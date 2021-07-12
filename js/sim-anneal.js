(() => {

    window.simAnneal = {
        setup(temp, rate, cur, generate, eval) {

            var count = 1

            return {
                step() {

                    var next = generate(cur)
                    var nE = eval(next)
                    var cE = eval(cur)
                    var dE = nE - cE

                    if(dE < 0) {
                        cur = next
                    } else {
                        if(Math.random() < Math.exp(-dE / temp)) {
                            cur = next
                        }
                    }
        
                    temp = rate * temp

                    return {
                        solution: cur,
                        energy: cE,
                        count: count++,
                        temp: temp,
                        rate: rate
                    }
                }
            }
        }
    }

})()