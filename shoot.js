AFRAME.registerComponent("shoot", {
    init: function(){
        this.createShoot()
    },
    createShoot: function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "z"){
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry", {
                    primitive:"sphere",
                    radius:0.1,
                })
                bullet.setAttribute("material", "color", "black")
                var cam=document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bullet.setAttribute("position", {
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
                var camPhi = document.querySelector("#camera").object3D
                var vector = new THREE.Vector3()
                camPhi.getWorldDirection(vector)
                bullet.setAttribute("velocity", vector.multiplyScalar(-10))
                var escena = document.querySelector("#scene")
                escena.appendChild(bullet)
            }
        })
    } 
})