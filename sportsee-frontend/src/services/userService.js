import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mocks/data.js";

const API_BASE_URL = "http://localhost:3000";
const USE_MOCKED_DATA = false;

/**
 * Récupère les données d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Données de l'utilisateur
 */
export const getUserData = async (userId) => {
  if (USE_MOCKED_DATA) {
    return {
      mainData: USER_MAIN_DATA.find((user) => user.id === userId),
      activity: USER_ACTIVITY.find((data) => data.userId === userId),
      averageSessions: USER_AVERAGE_SESSIONS.find(
        (data) => data.userId === userId
      ),
      performance: USER_PERFORMANCE.find((data) => data.userId === userId),
    };
  }

  try {
    // Récupération de toutes les données via des appels API parallèles
    const [
      mainDataResponse,
      activityResponse,
      averageSessionsResponse,
      performanceResponse,
    ] = await Promise.all([
      fetch(`${API_BASE_URL}/user/${userId}`),
      fetch(`${API_BASE_URL}/user/${userId}/activity`),
      fetch(`${API_BASE_URL}/user/${userId}/average-sessions`),
      fetch(`${API_BASE_URL}/user/${userId}/performance`),
    ]);

    // Vérification des réponses
    if (
      !mainDataResponse.ok ||
      !activityResponse.ok ||
      !averageSessionsResponse.ok ||
      !performanceResponse.ok
    ) {
      throw new Error("Une ou plusieurs requêtes API ont échoué");
    }

    // Conversion des réponses en JSON
    const [mainData, activity, averageSessions, performance] =
      await Promise.all([
        mainDataResponse.json(),
        activityResponse.json(),
        averageSessionsResponse.json(),
        performanceResponse.json(),
      ]);

    // Retour des données formatées comme avec les mocks
    return {
      mainData: mainData.data,
      activity: activity.data,
      averageSessions: averageSessions.data,
      performance: performance.data,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
};
