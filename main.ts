radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)
radio.setTransmitSerialNumber(true)

type drivingSignal = {
    x: number;
    y: number;
    z: number
}

let serialNumber = 908640693;

let recievedPackage: string
let drivingPackage: drivingSignal


radio.onReceivedString(function (recievedPackage: string) {
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) === serialNumber) {
        let hyperPackage = recievedPackage.split(",")
        drivingPackage.x = parseInt(hyperPackage[0])
        drivingPackage.y = parseInt(hyperPackage[1])
        drivingPackage.z = parseInt(hyperPackage[2])
        basic.showString("W")
    }
})
