radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)

type drivingSignal = {
    x: number;
    y: number;
    z: number
}

let serialNumber: number = 908640693;

let newDrivingPackage: drivingSignal

radio.onReceivedString(function (drivingPackage: string) {
    basic.showString(drivingPackage)
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) === serialNumber) {
        newDrivingPackage = JSON.parse(drivingPackage) as drivingSignal
        basic.showString("W")
    }
})
