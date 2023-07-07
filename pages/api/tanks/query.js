const { v4: uuidv4 } = require('uuid');
exports.addTank = async (data, userID) => {
const result = await prisma.tank.create({
    data: {
      TankUID: uuidv4(),
      UserID: userID,
      TankName: data.Name,
      TankStartedDate: new Date(data.StartDate),
      TankSizeGallons: Number(data.Size),
      Location: data.Location,
      TankDesc: data.Desc
    },
  })
  return result
}

exports.deleteTank = async (tankUID) => {
    const result = await prisma.tank.delete({
       where: {
        TankUID: tankUID
       }
      })
      return result
    }