import { useEffect, useContext } from "react";
import { GlobalContext } from "../../services/context/GlobalState";
import { useApi } from "../../services/api/index";

function LoadData() {
  const { env } = useContext(GlobalContext);
  const { getAllTransactions } = useApi();

  useEffect(() => {
    if (!env.loading) return;
    getAllTransactions();
  }, [getAllTransactions, env]);
  return null;
}

export default LoadData;
