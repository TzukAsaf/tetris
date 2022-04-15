function getBaseShape()
{
    return [{row: 0, col: 9}, {row: 1, col: 9}, {row: 2, col: 9}, {row:2, col: 10}]
}


function getShape(rowAdder, colAdder)
{
    baseShape = getBaseShape()
    return baseShape.map(square => {
        return {row: square.row + rowAdder, col: square.col + colAdder}
    })

}