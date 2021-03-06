import random from '@/utils/random'
import debounce from '@/utils/debounce'

let WIDTH = 1920
let HEIGHT = 1200

let isMobile = window.innerWidth < 960

const volume = .85

const time = {
	items:		500,
	gas:		4000,
	checkpoint: 25000 + random.range(-2000, 2000),
	score:		1000,
}

let maxSpeed = 1.2
let portrait = false

let check = () => {
	if (window.innerWidth <= window.innerHeight) {
		maxSpeed = 0.8
		time.items = 1200

		portrait = true
	} else {
		maxSpeed = 1.2
		time.items = 500

		portrait = false
	}

	isMobile = window.innerWidth < 960
}
check()
window.addEventListener('resize', debounce(check, 100))


export {
	time,
	WIDTH,
	HEIGHT,
	isMobile,
	volume,
	maxSpeed,
	portrait,
}
