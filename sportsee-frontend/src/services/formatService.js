/**
 * Service de formatage des données pour les différents graphiques
 */

// Pour AverageSession
export const formatAverageSessions = (data) => {
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
  return data.sessions.map((session, index) => ({
    ...session,
    day: daysOfWeek[index],
  }));
};

// Pour DailyActivity
export const formatDailyActivity = (data) => {
  return data.sessions.map((session, index) => ({
    ...session,
    day: index + 1,
  }));
};

// Pour Performance
export const formatPerformance = (data) => {
  const kindMapping = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  return data.data.map((item) => ({
    value: item.value,
    kind: kindMapping[item.kind],
  }));
};
