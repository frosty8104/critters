document.addEventListener('DOMContentLoaded ', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 800;
    class Game {
        constructor(){
            this.enemies = [];
            this.addNewEnemies();
        }
        update(){
            
        }
        draw(){
            
        }
        #addNewEnemy(){
            this.enemies.push(new Enemy());
        }
    }
    class Enemy {
        constructor(){
            this.x = 100;
            this.y = 100;
            this.width = 100;
            this.height = 100;
        }
        update(){
            this.x--;
        }
        draw(){
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    let lastTime = 1;
    function animate(timeStamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        requestAnimationFrame(animate); 
    }
    animate(0);
}); 