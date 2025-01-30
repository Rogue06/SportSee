import { useState, useEffect } from "react";
import { getUserData } from "../services/userService";

export const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(userId);
        setUserData(data);
      } catch (err) {
        setError("Erreur lors du chargement des données");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return { userData, error, isLoading };
};
