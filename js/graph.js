(() => {
    
    var canvas;
    var ctx;
    var xMin = 0;
    var xMax = 1;
    var yMin = 0;
    var yMax = 1;
    var data = []

    window.graph = {
        set(c) {
            canvas = c;
            ctx = c.getContext('2d')
        },
        setData(d) {
    
            data = d.map(x => {
                return [
                    mapRange(xMin, x[0], xMax) * canvas.width,
                    mapRange(yMin, x[1], yMax) * -canvas.height + canvas.height
                ]
            })

        },
        start() {
            draw()
        }
    }
    
    function line(p1, p2) {
        ctx.beginPath()
        ctx.moveTo(p1[0], p1[1])
        ctx.lineTo(p2[0], p2[1])
        ctx.stroke()
    }

    function point(p) {
        ctx.beginPath();
        ctx.arc(p[0], p[1], 5, 0, Math.PI * 2)
        ctx.stroke()
    }

    function mapRange(min, x, max) {
        return (x - min) / (max - min)
    }
    
    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for(var i = 0; i < data.length; i++) {
            point(data[i])
        }

        for(var i = 0; i < data.length; i++) {
            line(data[i], i < data.length - 1 ? data[i + 1] : data[0])
        }
    
        window.requestAnimationFrame(draw)
    }

})()