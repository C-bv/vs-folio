import styles from '../styles/ProgressBar.module.scss';

const ProgressBar = ({ element }) => {
	return (
		<div className={styles.wrapper}>
			<img src={element.image}/>
			<div className={styles.progress}>
				<div className={styles.progressIn}
					style={{
						width: element.value + '%',
						backgroundColor: element.color
					}}>
				</div>
				{/* <div className={styles.percent}>{element.value}</div> */}
			</div>
		</div>
	);
};

export default ProgressBar;