import { useState } from "react";
import { getDomicilio } from "../services/domicilio";
import { useAlert } from "../Context/AlertContext";

export const useGetResidences = () => {
  const [residences, setResidences] = useState([]);
  const [loading, setLoading] = useState(false);

  const { handleError } = useAlert();

  const fetchResidences = async () => {
    try {
      setLoading(true);
      const response = await getDomicilio();

      setResidences(response);
    } catch (error) {
      handleError;
      error;
    } finally {
      setLoading(false);
    }
  };

  /*    const fetchResidences = async () => {
      try {
        setLoading(true);
        const response = await getDomicilio();

        setResidences(response);
      } catch (error) {
        handleError;
        error;
      } finally {
        setLoading(false);
      }
    };
 */
  return { residences, loading, fetchResidences };
};
