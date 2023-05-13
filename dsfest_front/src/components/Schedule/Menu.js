import '../../css/Schedule.css';
import { useEffect, useState } from 'react';
import Take1 from './Take1';
import Take2 from './Take2';
import Take3 from './Take3';
import styled from 'styled-components';
const Space = styled.div`
    width: 100%;
    height: 60px;
`;
function Menu() {
    const [status, setStatus] = useState(1);

    useEffect(() => {
        const indicator = document.querySelector('.nav-indicator');
        const items = document.querySelectorAll('.nav-item');
        console.log(items[0]);
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
            item.classList.contains('is-active') && handleIndicator(item);
        });
    }, []);
    return (
        <>
            <nav className="schedule_nav">
                <div
                    className="nav-item is-active"
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
            <Space />
        </>
    );
}

export default Menu;
