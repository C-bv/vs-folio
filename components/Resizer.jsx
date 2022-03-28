import { useEffect } from 'react';
import Terminal from './Terminal';
import { getProgressBarElements } from '/pages/api/progressBarElements.js';
import styles from '../styles/Resizer.module.scss';

export default function Resizer({ terminalStatus }) {
    const progressBarElements = getProgressBarElements();

    useEffect(() => {

        const mainContainer = document.querySelector('.Layout_mainContainer__5WZfx'),
            code = document.querySelector('main'),
            terminal = document.querySelector('#resizer'),
            handle = document.querySelector('.Resizer_handle__V8LEA'),
            terminalBaseHeight = terminal.offsetHeight,
            minimum_size = 70,
            maximum_size = mainContainer.offsetHeight;

        let original_height = 0;
        let original_y = 0;
        let original_mouse_y = 0;

        terminal.style.height = terminalBaseHeight + 'px';
        code.style.height = (mainContainer.offsetHeight - terminalBaseHeight) + 'px';
        terminal.style.top = code.style.height;

        handle.addEventListener('mousedown', function (e) {
            e.preventDefault()
            original_height = parseFloat(getComputedStyle(code, null).getPropertyValue('height').replace('px', ''));
            original_y = code.getBoundingClientRect().top;
            original_mouse_y = e.pageY;
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
        })

        function resize(e) {
            const height = original_height + (e.pageY - original_mouse_y)
            if (height >= minimum_size && height <= maximum_size) {
                console.log(height);
                code.style.height = e.pageY - 65 + 'px';
                terminal.style.top = e.pageY - 65 + 'px';
                terminal.style.height = (mainContainer.offsetHeight - e.pageY) + 65 + 'px';;
            }
        }

        function stopResize() {
            window.removeEventListener('mousemove', resize)
        }
    }, []);


    return (
        <div id='resizer' style={{ width: '100%', height: '200px' }}>
            <span className={styles.handle}></span>
            <Terminal
                progressBarElements={progressBarElements}
            />
        </div>
    );
}