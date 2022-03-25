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
        help: (
            <span>
                <span>Available:</span><br /><br />

                <span>VARIABLES</span><br />
                <span style={{ marginLeft: "20px" }}><strong>bony.about</strong> -- know more about me</span><br />
                <span style={{ marginLeft: "20px" }}><strong>bony.resume</strong> -- want to have a look at my resume?</span><br /><br />

                <span>FUNCTIONS</span><br />
                {/* <span style={{ marginLeft: "20px" }}><strong>bony.experience()</strong> -> float</span><br />
                <span style={{ marginLeft: "40px" }}>returns the total years of working experience</span><br />
                <span style={{ marginLeft: "20px" }}><strong>bony.toggle_theme()</strong> -> None</span><br />
                <span style={{ marginLeft: "40px" }}>toggle the website's theme</span><br />
                <span style={{ marginLeft: "20px" }}><strong>bony.audio()</strong> -> Tracks[]</span><br />
                <span style={{ marginLeft: "40px" }}>check my playlist on spotify</span> */}
            </span>
        ),
        skills: (
            <span>
                {progressBarElements.map((element) => (
                    <ProgressBar element={element} />
                ))}
            </span>
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
              {/* <span>
                {progressBarElements.map((element) => (
                    <ProgressBar element={element} />
                ))}
            </span> */}
        </Resizable>
    );
};

export default Terminal;