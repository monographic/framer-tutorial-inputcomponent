{InputComponent} = require 'InputComponent'

Framer.Defaults.Animation =
	curve: "ease-in-out"
	time: 0.2

createForm = (fieldsList) ->
	formWidth = 412
	gap = 25
	firstInputX = 50
	firstInputY = 5
	inputs = []
	for field in fieldsList
		inputs[field] = new InputComponent
			width: formWidth
			x: firstInputX
			y: 50 + fieldsList.indexOf(field)*(76+gap)
			inputLabel: field

createForm(["First name", "Last name", "E-mail", "Phone number"])