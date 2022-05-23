const calculator = document.querySelector('.container')
const display = document.querySelector('.display span')
const keys = document.querySelector('.keypad')

const calculate = (n1, operator, n2) => {
	let result = ''

	if (operator === 'add') {
		result = parseFloat(n1) + parseFloat(n2)
		} else if (operator === 'subtract') {
		result = parseFloat(n1) - parseFloat(n2)
		} else if (operator === 'multiply') {
		result = parseFloat(n1) * parseFloat(n2)
		} else if (operator === 'divide') {
		result = parseFloat(n1) / parseFloat(n2)
		}
	
	return result
}

keys.addEventListener('click', (e) => {
	if (e.target.matches('.key')) {
		const key = e.target
		const action = key.dataset.action
		const keyContent = key.textContent
		const displayedNum = display.textContent
		const previousKeyType = calculator.dataset.previousKeyType

		if (!action) {
			if (
				displayedNum === '0' ||
				previousKeyType === 'operator' ||
				previousKeyType === 'calculate'
			) {
				display.textContent = keyContent
			} else {
				display.textContent = displayedNum + keyContent
			}
			calculator.dataset.previousKeyType = 'number'
		}
		
		if (
			action === 'add' ||
			action === 'subtract' ||
			action === 'multiply' ||
			action === 'divide'
		) {
			const firstValue = calculator.dataset.firstValue
			const operator = calculator.dataset.operator
			const secondValue = displayedNum
		  
			// Note: It's sufficient to check for firstValue and operator because secondValue always exists
			if (
				firstValue &&
  				operator &&
  				previousKeyType !== 'operator' &&
				previousKeyType !== 'calculate'
			) {
				const calcValue = calculate(firstValue, operator, secondValue)
				display.textContent = calcValue
			  
				// Update calculated value as firstValue
				calculator.dataset.firstValue = calcValue
			  } else {
				// If there are no calculations, set displayedNum as the firstValue
				calculator.dataset.firstValue = displayedNum
			}

			// Add custom attribute
			calculator.dataset.previousKeyType = 'operator'
			calculator.dataset.operator = action
		}
	
		if (action === 'decimal') {
			// Do nothing if string has a dot
			if (!displayedNum.includes('.')) {
				display.textContent = displayedNum + '.'
			  } else if (
				previousKeyType === 'operator' ||
				previousKeyType === 'calculate'
			  ) {
				display.textContent = '0.'
			  }
			  
			calculator.dataset.previousKeyType = 'decimal'
		}

		if (action === 'delete') {
			display.textContent = 0
			calculator.dataset.previousKeyType = 'delete'
		}
		
		if (action === 'clear') {
			calculator.dataset.firstValue = ''
			calculator.dataset.modValue = ''
			calculator.dataset.operator = ''
			calculator.dataset.previousKeyType = ''

			display.textContent = 0
			calculator.dataset.previousKeyType = 'clear'
		}
		
		if (action === 'calculate') {
			let firstValue = calculator.dataset.firstValue
			const operator = calculator.dataset.operator
			let secondValue = displayedNum
		  
			if (firstValue) {
				if (previousKeyType === 'calculate') {
					firstValue = displayedNum
					secondValue = calculator.dataset.modValue
				}
				
				display.textContent = calculate(firstValue, operator, secondValue)
			}
		  
			// Set modValue attribute
			calculator.dataset.modValue = secondValue
			calculator.dataset.previousKeyType = 'calculate'
		}

	}	
})