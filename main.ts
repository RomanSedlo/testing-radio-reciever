radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(52)
radio.setTransmitSerialNumber(true)

type drivingSignal = {
    k: number;
    x: number;
    y: number;
    z: number
}

let serialNumber = 908640693;
let keySqequence: Array<number> = [4, 8, 6, 1, 5, 3, 4, 7, 2, 6, 0, 3, 9, 4, 8, 2, 6, 3, 7, 5, 2, 1, 0, 6, 8, 3, 5, 9];

let newDrivingPackage: drivingSignal


radio.onReceivedString(function (drivingPackage: string) {
    basic.showString(".")
    if (serialNumber === radio.receivedPacket(RadioPacketProperty.SerialNumber)) {
        newDrivingPackage = JSON.parse(drivingPackage) as drivingSignal
        //zde bude kód na ovládání autíčka
        if (newDrivingPackage.k === keySqequence[1]) {
            basic.showString("K")
        } else basic.showString("W")
    }
})
