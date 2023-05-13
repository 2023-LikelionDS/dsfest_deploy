import '../../css/Splash.css';
import title from '../../img/1-title.svg';
import title2 from '../../img/2-title.svg';
import pink from '../../img/1-pink1.svg';
import ivory from '../../img/1-ivory1.svg';
import purple from '../../img/1-purple1.svg';
import obj from '../../img/1-objects.svg';
import take1 from '../../img/2-take1_card.svg';
import take2 from '../../img/2-take2_card.svg';
import take3 from '../../img/2-take3_card.svg';
import text from '../../img/2-text.svg';
import roundback from '../../img/1-roundback.svg';
import React, { useRef, useEffect } from 'react';
import useHistory from 'react-router-dom';

function Splash() {
    const canvasRef = useRef(null);

    useEffect(() => {
        var canvas = canvasRef.current;
        var ctx = canvas.getContext('2d');
        var cw = 10;
        var cx = cw / 2;
        var ch = 10;
        var cy = ch / 2;
        ctx.strokeStyle = '#ca95c2';

        var requestId = null;
        var rad = Math.PI / 180;

        var colors = ['#a094e4', '#7060D0', '#bd85b9', '#ca95c2'];

        var spring = 1 / 10;
        var friction = 0.85;
        var explosions = [];

        function Particle(o) {
            this.decay = 0.95; //randomIntFromInterval(80, 95)/100;//
            this.r = randomIntFromInterval(10, 70);
            this.R = 100 - this.r;
            this.angle = Math.random() * 2 * Math.PI;
            this.center = o; //{x:cx,y:cy}
            this.pos = {};
            this.pos.x = this.center.x + this.r * Math.cos(this.angle);
            this.pos.y = this.center.y + this.r * Math.sin(this.angle);
            this.dest = {};
            this.dest.x = this.center.x + this.R * Math.cos(this.angle);
            this.dest.y = this.center.y + this.R * Math.sin(this.angle);
            this.color = colors[~~(Math.random() * colors.length)];
            this.vel = {
                x: 0,
                y: 0,
            };
            this.acc = {
                x: 0,
                y: 0,
            };

            this.update = function () {
                var dx = this.dest.x - this.pos.x;
                var dy = this.dest.y - this.pos.y;

                this.acc.x = dx * spring;
                this.acc.y = dy * spring;
                this.vel.x += this.acc.x;
                this.vel.y += this.acc.y;

                this.vel.x *= friction;
                this.vel.y *= friction;

                this.pos.x += this.vel.x;
                this.pos.y += this.vel.y;

                if (this.r > 0) this.r *= this.decay;
            };

            this.draw = function () {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
                ctx.fill();
            };
        }

        function Explosion() {
            this.pos = {
                x: Math.random() * cw,
                y: Math.random() * ch,
            };
            this.particles = [];
            for (var i = 0; i < 20; i++) {
                this.particles.push(new Particle(this.pos));
            }

            this.update = function () {
                for (var i = 0; i < this.particles.length; i++) {
                    this.particles[i].update();
                    if (this.particles[i].r < 0.3) {
                        this.particles.splice(i, 1);
                    }
                }
            };

            this.draw = function () {
                for (var i = 0; i < this.particles.length; i++) {
                    this.particles[i].draw();
                }
            };
        }

        function Draw() {
            requestId = window.requestAnimationFrame(Draw);
            ctx.clearRect(0, 0, cw, ch);
            ctx.globalCompositeOperation = 'lighter';
            if (Math.random() < 0.01) {
                explosions.push(new Explosion());
            }

            for (var j = 0; j < explosions.length; j++) {
                explosions[j].update();
                explosions[j].draw();
            }
        }
        var Init = function () {
            if (requestId) {
                window.cancelAnimationFrame(requestId);
                requestId = null;
            }
            cw = canvas.width = 500;
            cx = cw / 2;
            ch = canvas.height = 350;
            cy = ch / 2;
            Draw();
        };

        window.setTimeout(function () {
            Init();
            window.addEventListener('resize', Init, false);
        }, 2000);

        function randomIntFromInterval(mn, mx) {
            return Math.floor(Math.random() * (mx - mn + 1) + mn);
        }

        setTimeout(() => {
            window.scrollTo({ top: 800, behavior: 'smooth' }); // 스크롤이 자동으로 이동되도록 함
        }, 7000);

        setTimeout(() => {
            window.location.href = '/';
        }, 12000);

        window.addEventListener('click', () => (window.location.href = '/'));
    });

    return (
        <>
            <div className="SplashBody">
                <img src={title} id="title"></img>
                <img src={roundback} id="roundback"></img>
                <div className="content">
                    <img src={purple} id="purple1"></img>
                    <img src={ivory} id="ivory1"></img>
                    <img src={pink} id="pink1"></img>
                    <img src={pink} id="pink2"></img>
                    <img src={purple} id="purple2"></img>
                    <img src={obj} id="obj"></img>
                    <canvas ref={canvasRef} id="canvas" />
                </div>
                <div id="background"></div>
            </div>
            <div className="SplashBody">
                <img src={title2} id="title2"></img>
                <div className="content">
                    <img src={purple} id="purple3"></img>
                    <img src={ivory} id="ivory3"></img>
                    <img src={pink} id="pink3"></img>
                    <img src={take1} id="take1"></img>
                    <img src={take2} id="take2"></img>
                    <img src={take3} id="take3"></img>
                </div>
                <img src={text} id="text"></img>
                <div className="cloud">
                    <div id="cloud1"></div>
                    <div id="cloud2"></div>
                    <div id="cloud3"></div>
                    <div id="cloud4"></div>
                </div>
            </div>
        </>
    );
}
export default Splash;
