import styles from '../styles/ProgressBar.module.scss';

const ProgressBar = ({ element }) => {

	return (
		<div style={{ marginLeft: '10px' }}>
			<div className={styles.name}>{`~ ${element.name}`}</div>
			<div className={styles.wrapper}>
				<div className={styles.progress}>
					<div className={styles.progressIn}
						style={{
							width: element.value + '%',
							backgroundColor: element.color
						}}>
					</div>
				</div>
				<div>{`${element.value}%`}</div>
			</div>
		</div>
	);
};

export default ProgressBar;