function TimeButton({ setIsShowInputTime, isShowInputTime, setMainTime }) {
	return (
		<div className="flex w-[22%] items-center justify-end">
			<div
				className="cursor-pointer rounded-md border border-slate-200 py-[6px] px-3 text-xs text-slate-500 hover:bg-slate-100"
				onClick={() => {
					setIsShowInputTime(!isShowInputTime);
					setMainTime("00:00:00");
				}}
			>
				{isShowInputTime ? <span>Just date</span> : <span>Add time</span>}
			</div>
		</div>
	);
}

export default TimeButton;
