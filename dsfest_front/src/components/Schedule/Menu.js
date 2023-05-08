import '../../css/Schedule.css';
import { useEffect, useState } from 'react';
import Take1 from './Take1';
import Take2 from './Take2';
import Take3 from './Take3';
function Menu() {
    const [status, setStatus] = useState(1);
    useEffect(() => {
        const indicator = document.querySelector('.nav-indicator');
        const items = document.querySelectorAll('.nav-item');

        function handleIndicator(el) {
            items.forEach((item) => {
                item.classList.remove('is-active');
                item.removeAttribute('style');
            });

            indicator.style.width = `${el.offsetWidth}px`;
            indicator.style.left = `${el.offsetLeft}px`;
            indicator.style.backgroundColor =
                el.getAttribute('data-active-color');

            el.classList.add('is-active');
            el.style.color = el.getAttribute('data-active-color');
        }

        items.forEach((item) => {
            item.addEventListener('click', (e) => {
                handleIndicator(e.target);
            });
            item.classList.contains('is-active');
            handleIndicator(item);
        });
    }, []);
    return (
        <>
            <nav className="nav">
                <div
                    className="nav-item"
                    data-active-color="gold"
                    onClick={() => setStatus(1)}
                >
                    TAKE 1:
                </div>
                <div
                    className="nav-item"
                    data-active-color="lightcoral"
                    onClick={() => setStatus(2)}
                >
                    TAKE 2:
                </div>
                <div
                    className="nav-item"
                    data-active-color="skyblue"
                    onClick={() => setStatus(3)}
                >
                    TAKE 3:
                </div>
                <span className="nav-indicator"></span>
            </nav>
            {status === 1 && <Take1 />}
            {status === 2 && <Take2 />}
            {status === 3 && <Take3 />}
        </>
    );
}

export default Menu;
