const R = require("ramda")

const data = [
	{
		id: 1,
		thresholdEnabled: true,
		thresholds: [
			{type: "lt", value: 1 },
			{type: "lt", value: 2 },
			{type: "gt", value: 3 },
			{type: "gt", value: 4 },
		]
	},
	{
		id: 2,
		thresholdEnabled: true,
		thresholds: [
			{type: "gt", value: 1 },
			{type: "lt", value: 2 },
			{type: "gt", value: 3 },
			{type: "lt", value: 4 },
		]
	},
	{
		id: 3,
		thresholdEnabled: true,
		thresholds: [
			{type: "lt", value: 1 },
			{type: "lt", value: 2 },
			{type: "gt", value: 3 },
			{type: "gt", value: 4 },
		]
	},
	{
		id: 4,
		thresholdEnabled: true,
		thresholds: [
			{type: "gt", value: 1 },
			{type: "lt", value: 2 },
			{type: "gt", value: 3 },
			{type: "lt", value: 4 },
		]
	}
]


const thresholdValue = 2
const enabled = x => {return x.thresholdEnabled}
const thresholds = x => {
	return({
		id: x.id,
		cards: x.thresholds.filter(y => {
			return (y.type == "gt" && y.value >= thresholdValue) || (y.type == "lt" && y.value <= thresholdValue)
		})
	})
}
const generateCards = x => {
	x.cards.map(y => console.log(R.merge(y, {id: x.id})))
}


const Piper = R.pipe(
	R.filter(enabled),
	R.map(thresholds),
	R.map(generateCards)
)

console.log(Piper(data))