radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)

type drivingSignal = {
    k: number;
    x: number;
    y: number;
    z: number
}

let serialNumber: number = 908640693;
let keySqequence: Array<number> = [4, 8, 6, 1, 5, 3, 4, 7, 2, 6, 0, 3, 9, 4, 8, 2, 6, 3, 7, 5, 2, 1, 0, 6, 8, 3, 5, 9];

let newDrivingPackage: drivingSignal

radio.onReceivedString(function (drivingPackage: string) {
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) === serialNumber) {
        basic.showString("W")
        newDrivingPackage = JSON.parse(drivingPackage) as drivingSignal
        if (newDrivingPackage.k === keySqequence[1]) {
            

        }
    }
})
