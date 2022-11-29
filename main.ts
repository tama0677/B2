basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P1.run(-100)
    }
    if (input.buttonIsPressed(Button.B)) {
        servos.P1.run(0)
    }
})
