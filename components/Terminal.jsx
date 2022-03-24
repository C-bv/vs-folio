import { ResizableBox } from 'react-resizable';
import { ReactTerminal } from "react-terminal";
// import styles from '../styles/Terminal.module.scss';

const Terminal = () => {

    const commands = {
        cd: (directory) => `changed path to ${directory}`,
        // skills: ProgressBarElements.map((element) => (
        //     <ProgressBar element={element} />
        // ))
    };

    // useEffect(() => {
    // 	if (window.innerWidth <= 800) {
    // 		toggleExplorer(!explorerStatus)
    // 	}
    // }, []);

    return (
        <ResizableBox
            // Undefined width
            height={500}
			// minConstraints={[0, 0]}
            handle={<span className="react-resizable-handle-terminal" />}
        >
            <ReactTerminal
                showControlBar={false}
                commands={commands}
                prompt={
                    <span style={{ color: '#efefef', fontWeight: 'bold' }}>
                        <span style={{ color: '#78d08f' }}>charles@bouveret</span>
                        :
                        <span style={{ color: '#76b4f9' }}>/portfolio/vs-folio</span>
                        $
                    </span>
                }
                themes={{
                    vscode: {
                        themeBGColor: '#1f2428',
                        themeColor: "#efefef",
                        themePromptColor: "grey"
                    }
                }}
                theme="vscode"
            />
        </ResizableBox>
    );
};

export default Terminal;