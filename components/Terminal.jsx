import { Resizable } from 'react-resizable-element';
import { ReactTerminal } from "react-terminal";
import ProgressBar from './ProgressBar';
import styles from '../styles/Terminal.module.scss';

const Terminal = ({ terminalStatus, progressBarElements }) => {

    const commands = {
        hello: `Hi there !`
        // cd: (directory) => `changed path to ${directory}`,
        // skills: progressBarElements.map((element) => (
        //     <ProgressBar element={element} />
        // ))
    };

    return (
        <Resizable
			style={terminalStatus ? { height: '225px' } : { height: '0px' }}
            direction="top"
            maxSize={500}
            className={styles.terminalResizable}
        >
            <ReactTerminal
                showControlBar={false}
                commands={commands}
                prompt={
                    <span style={{ color: '#d1d5da', fontWeight: 'bold' }}>
                        <span style={{ color: '#78d08f' }}>charles@bouveret</span>
                        :
                        <span style={{ color: '#76b4f9' }}>/portfolio/vs-folio</span>
                        $
                    </span>
                }
                themes={{
                    vscode: {
                        themeBGColor: '#1f2428',
                        themeColor: "#d1d5da",
                    }
                }}
                theme="vscode"
                errorMessage={'command not found'}
            />
        </Resizable>
    );
};

export default Terminal;