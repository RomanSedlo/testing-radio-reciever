radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)
radio.setTransmitSerialNumber(true)

type drivingSignal = {
    x: number;
    y: number;
    z: number
}

let serialNumber = -1584843917;

let recievedPackage: string
let drivingPackage: drivingSignal = { x: 0, y: 0, z: 0 }

radio.onReceivedString(function (recievedPackage: string) {
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) === serialNumber) {
        let hyperPackage = recievedPackage.split(",")
        drivingPackage.x = parseInt(hyperPackage[0])
        drivingPackage.y = parseInt(hyperPackage[1])
        drivingPackage.z = parseInt(hyperPackage[2])
    }
})

