class exports.InputComponent extends Layer
	constructor: (@options={}) ->

		# DEFAULTS
		
		@isFocus = false
		
		super _.defaults @options,
			width: 360
			height: 76
			backgroundColor: "#fff"
			inputLabel: "Label"

		# LAYERS
		
		# Label
		@label = new TextLayer
			parent: @
			text: @options.inputLabel
			fontSize: 16
			lineHeight: 1.25
			y: 18
		@label.states =
			basic:
				fontSize: 16
				y: 18
			active:
				fontSize: 12
				y: 0
				
		# Line
		@line = new Layer
			parent: @
			width: @.width
			height: 2
			y: 54
			backgroundColor: "#808080"
			opacity: 0.5
		@line.states =
			basic:
				backgroundColor: "#808080"
				opacity: 0.5
			hover:
				backgroundColor: "#000000"
				opacity: 1
			active:
				backgroundColor: "#000000"
				opacity: 1
			error:
				backgroundColor: "#bf3048"
				
		# Text input
		@inputField = document.createElement("input")
		@inputField.style["width"] = @.width + 'px'
		@inputField.style["height"] = "56px"
		@inputField.style["color"] = "#000000"
		@inputField.style["font-size"] = "16px"
		@inputField.style["background-color"] = "rgba(0,0,0,0)"
		@inputField.style["outline"] = "none"
		@inputField.value = ""
		@._element.appendChild(@inputField)
		
		# EVENTS
		@.onMouseOver () ->
			@line.animate("hover")
		@.onMouseOut () ->
			if !@isFocus
				@line.animate("basic")
		
		@inputField.onfocus = =>
			@isFocus = true
			@line.animate("active")
			@label.animate("active")
		@inputField.onblur = =>
			@isFocus = false
			@line.animate("basic")
			if @inputField.value == ""
				@label.animate("basic")