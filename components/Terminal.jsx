import { ReactTerminal } from 'react-terminal';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles/Terminal.module.scss';

const Terminal = ({ terminalStatus, progressBarElements }) => {

    const welcomeMessage = (
        <span>
            Type 'help' for more information. <br />
        </span>
    )

    const commands = {
        'help': (
            <span>
                <span style={{ fontWeight: 'bold' }}>Available commands:</span><br />
                &nbsp;&nbsp;<span><span className={styles.variable}>resume</span> --link to download my cv</span><br />
                &nbsp;&nbsp;<span><span className={styles.variable}>skills</span> --languages competences</span><br />
                &nbsp;&nbsp;<span><span className={styles.variable}>clear</span> --clear the console</span><br />
                <br />
                <span style={{ fontWeight: 'bold' }}>General:</span><br />
                &nbsp;&nbsp;<span>Click 'Terminal' on the  titlebar to toggle the terminal.</span><br />
                &nbsp;&nbsp;<span>Click the file icon on the top left window to toggle the explorer.</span><br />
                &nbsp;&nbsp;<span>You can resize the explorer and terminal by dragging the corresponding border.</span><br />
            </span>
        ),
        'resume': (
            <span>
                <a href='pdf\CV-Charles Bouveret.pdf' target='_blank'>Download my resume</a>
                (french version)
            </span>
        ),
        'skills': (
            <>
                {progressBarElements.map((element) => (
                    <ProgressBar element={element} key={element.name} />
                ))}
            </>
        )
    };

    return (
        <ReactTerminal
            showControlBar={false}
            commands={commands}
            prompt={
                <span style={{ color: '#d1d5da', fontWeight: 'bold' }} >
                    <span style={{ color: '#78d08f' }}>charles@bouveret</span>
                    :
                    <span style={{ color: '#76b4f9' }}>/portfolio/vs-folio</span>
                    $&#32;
                </span>
            }
            welcomeMessage={welcomeMessage}
            themes={{
                vscode: {
                    themeBGColor: '#1f2428',
                    themeColor: '#d1d5da',
                }
            }}
            theme='vscode'
            errorMessage={'command not found'}
        />
    );
};

export default Terminal;