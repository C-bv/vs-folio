import { useEffect } from 'react';
import { getProgressBarElements } from '/pages/api/progressBarElements.js';
import Terminal from './Terminal';
import styles from '../styles/Resizer.module.scss';

const Resizer = ({ terminalStatus, toggleTerminal }) => {
    const progressBarElements = getProgressBarElements();

    useEffect(() => {

        const mainContainer = document.querySelector('.Layout_mainContainer__5WZfx'),
            code = document.querySelector('main'),
            terminal = document.querySelector('#resizer'),
            handle = document.querySelector('.Resizer_handle__V8LEA'),
            minimum_size = 70,
            maximum_size = mainContainer.offsetHeight;

        let original_height = 0;
        let original_mouse_y = 0;
        code.style.height = 70 + '%';

        handle.addEventListener('mousedown', function (e) {
            e.preventDefault()
            original_height = parseFloat(getComputedStyle(code, null).getPropertyValue('height').replace('px', ''));
            original_mouse_y = e.pageY;
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
        })

        function resize(e) {
            const codeHeight = code.offsetHeight
            if (codeHeight > minimum_size && codeHeight < maximum_size) {
                code.style.height = e.pageY - 65 + 'px';
                terminal.style.height = (mainContainer.offsetHeight - e.pageY) + 65 + 'px';
            }
            else if (codeHeight <= minimum_size || codeHeight >= maximum_size) {
                toggleTerminal(!toggleTerminal)
            }
        }

        function stopResize() {
            window.removeEventListener('mousemove', resize)
        }
    }, []);

    return (
        <div id='resizer'
            className={styles.resizer}
            style={terminalStatus ? { height: '30%' } : { height: '0%' }}
        >
            <span className={styles.handle} style={terminalStatus ? null : { display: 'none' }}></span>
            <Terminal progressBarElements={progressBarElements} />
        </div>
    );
}

export default Resizer;