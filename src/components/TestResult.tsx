import TypingTest from '../classes/TypingTest';

const TestResult = ({ test }: { test: TypingTest }) => {
	return (
		<div>
			<div className="flex justify-around text-3xl mx-auto max-w-[900px] mt-10 gap-10">
				<div className="font-semibold bg-white px-5 py-10 rounded-2xl flex gap-4 flex-col flex-1 items-center">
					<div className="font-bold text-5xl">{test?.getResult().wpm}</div>
					<div>WPM</div>
				</div>
				<div className="font-semibold bg-white px-5 py-10 rounded-2xl flex gap-4 flex-col flex-1 items-center">
					<div className="font-bold text-5xl flex items-center gap-2">
						<span>
							{Number(Number(test?.getResult().acc.toFixed(2)).toFixed(2))}
						</span>
						<span className="text-2xl">%</span>
					</div>
					<div>Accuracy</div>
				</div>
			</div>
		</div>
	);
};

export default TestResult;
