import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mocks/data.js";

const API_BASE_URL = "http://localhost:3000";
const USE_MOCKED_DATA = true; // Pour switcher facilement entre mock et API

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

  // Utilisation de l'API réelle (production)
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
};
