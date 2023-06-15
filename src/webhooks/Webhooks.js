import { useQuery } from "react-query";
import * as api from 'config/ApiConfig';
import { message } from "antd";


export const useUser = () => {

      return useQuery(["UserData"], () => api.user(), {
          retry: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
      });
  }
