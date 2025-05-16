radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(52)
radio.setTransmitSerialNumber(true)

type drivingSignal = {
    x: number;
    y: number;
    z: number
}

let newDrivingPackage: drivingSignal
let unlock = false


radio.onReceivedString(function (drivingPackage: string) {
    let serialNumber = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if (serialNumber === radio.receivedPacket(RadioPacketProperty.SerialNumber)) {
        newDrivingPackage = JSON.parse(drivingPackage) as drivingSignal
        //zde bude kód na ovládání autíčka
        if (newDrivingPackage.x === 1) {
            basic.showString("W")
        }
    }
})
