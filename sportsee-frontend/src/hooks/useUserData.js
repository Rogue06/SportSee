import { useState, useEffect } from "react";
import { getUserData } from "../services/userService";

/**
 * Hook personnalisé pour gérer le chargement des données utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Object} {userData, error, isLoading}
 */
export const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId || isNaN(userId)) {
          throw new Error("ID utilisateur invalide");
        }
        const data = await getUserData(userId);
        if (!data) {
          throw new Error("Utilisateur non trouvé");
        }
        setUserData(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Erreur lors du chargement des données");
        setUserData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { userData, error, isLoading };
};
