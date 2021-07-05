const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return (this.width * this.length);
    }
}
const unboundGetX = roomDimensions.getArea;
const boundGetArea = unboundGetX.bind(roomDimensions);
console.log(boundGetArea());
