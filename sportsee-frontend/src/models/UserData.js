class UserData {
  constructor(data) {
    this.id = data.id;
    this.userInfos = {
      firstName: data.userInfos.firstName,
      lastName: data.userInfos.lastName,
      age: data.userInfos.age,
    };
    this.score = data.score || data.todayScore;
    this.keyData = {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    };
  }

  getFullName() {
    return `${this.userInfos.firstName} ${this.userInfos.lastName}`;
  }
}

export default UserData;
