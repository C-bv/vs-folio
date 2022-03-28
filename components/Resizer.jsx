import { useState, useEffect } from 'react';
import styles from '../styles/Resizer.module.scss';
export default function Resizer({ terminalStatus, toggleTerminal }) {

    useEffect(() => {
        const container = document.querySelector('#Layout_container__z4qWC > div:nth-child(3) > div.Layout_mainContainer__5WZfx'),
            code = document.querySelector('#Layout_container__z4qWC > div:nth-child(3) > div.Layout_mainContainer__5WZfx > main'),
            terminal = document.querySelector('#Layout_container__z4qWC > div:nth-child(3) > div.Layout_mainContainer__5WZfx > div'),
            handle = document.querySelector('#Layout_container__z4qWC > div:nth-child(3) > div.Layout_mainContainer__5WZfx > div > span'),
            terminalBaseHeight = terminal.offsetHeight;

        terminal.style.height = terminalBaseHeight + 'px';
        code.style.height = (container.offsetHeight - terminalBaseHeight) + 'px';
        terminal.style.top = code.style.height;

        handle.addEventListener('mousedown', function (e) {
            e.preventDefault()
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
        })

        function resize(e) {
            if (terminal.offsetHeight > 65) {
                code.style.height = e.pageY - 65 + 'px';
                terminal.style.top = e.pageY - 65 + 'px';
                terminal.style.height = (container.offsetHeight - e.pageY) + 65 + 'px';
            } else {
                stopResize()
                toggleTerminal(!terminalStatus)
            }
        }

        function stopResize() {
            window.removeEventListener('mousemove', resize)
        }
    }, []);


    return (
        <div style={{ width: '100%', height: '200px' }}>
            <span className={styles.handle}></span>
        </div>
    );
}