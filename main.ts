input.onButtonPressed(Button.A, function () {
    basic.showNumber(Agitazione)
})
input.onGesture(Gesture.Shake, function () {
    Agitazione += 1
})
let Agitazione = 0
Agitazione = input.temperature()
basic.forever(function () {
    while (Agitazione > input.temperature()) {
        Agitazione += -0.2
        basic.pause(1000)
    }
})
