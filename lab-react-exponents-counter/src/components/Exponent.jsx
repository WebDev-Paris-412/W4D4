const Exponent = ({ count, exponent }) => {
	let multiplication = `${count} * `.repeat(exponent - 1)
	return (
		<div className="exponent-counter-container">
			<p className="exponent-label">
				{count}
				<sup>{exponent}</sup>
			</p>
			<p className="exponent-result">
				{multiplication} {count} ={" "}
				<span className="total">{Math.pow(count, exponent)}</span>
			</p>
		</div>
	)
}

export default Exponent
