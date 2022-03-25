import { Resizable } from 'react-resizable-element';
import { ReactTerminal } from "react-terminal";
import ProgressBar from '../components/ProgressBar';
import styles from '../styles/Terminal.module.scss';

const Terminal = ({ terminalStatus, progressBarElements }) => {

    const welcomeMessage = (
        <span>
            Type "help" for more information. <br />
        </span>
    )

    const commands = {
        'help': (
            <span>
                <span style={{ fontWeight: "bold" }}>Available commands:</span><br />
                &nbsp;&nbsp;<span><strong>charles<span className={styles.variable}>.resume</span></strong> --link to download my cv</span><br />
                &nbsp;&nbsp;<span><strong>charles<span className={styles.variable}>.skills</span></strong> --languages competences</span><br />
                &nbsp;&nbsp;<span><strong>clear</strong> --clear the console</span><br />
                <br />
                <span style={{ fontWeight: "bold" }}>General:</span><br />
                &nbsp;&nbsp;<span>Click 'Terminal' on the  titlebar to toggle the terminal.</span><br />
                &nbsp;&nbsp;<span>Click the file icon on the top left window to toggle the explorer.</span><br />
                &nbsp;&nbsp;<span>You can resize the explorer and terminal by dragging the corresponding border.</span><br />
            </span>
        ),
        'charles.resume': (
            <span>
                <a href="pdf\CV-Charles Bouveret.pdf" target="_blank">Download my resume</a>
                (french version)
            </span>
        ),
        'charles.skills': (
            <>
                {progressBarElements.map((element) => (
                    <ProgressBar element={element} />
                ))}
            </>
        )
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
                    <span style={{ color: '#d1d5da', fontWeight: 'bold' }} >
                        <span style={{ color: '#78d08f' }}>charles@bouveret</span>
                        :
                        <span style={{ color: '#76b4f9' }}>/portfolio/vs-folio</span>
                        $
                    </span>
                }
                welcomeMessage={welcomeMessage}
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