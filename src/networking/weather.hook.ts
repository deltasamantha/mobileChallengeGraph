import {useQuery} from "@tanstack/react-query";

import {Weather} from "../models/Wather";
import {get} from "./ApiClient";

export const useWether = (latitude: number, longitude: number) => {
  const {data, ...rest} = useQuery(["weather"], () => {
    return get<Weather>({
      path: "/forecast",
      query: {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        hourly: "temperature_2m",
      },
    }).then(res => res.data);
  });
  return {weather: data, ...rest};
};

/**
 export function useCreateChatRoom({onSuccess}: {onSuccess?: (chatRoom: ChatRoom) => any} = {}) {
  const {apiStore} = useStore();
  const queryClient = useQueryClient();

  return useMutation(
    (programId: string) => {
      return apiStore
        .get<ChatRoom>({
          path: `/chatroom/for-program/${programId}`,
          isAuthRequired: true,
        })
        .then(d => d.data);
    },
    {
      onSuccess: chatRoom => {
        queryClient.invalidateQueries(["chatroom"]);
        onSuccess && onSuccess(chatRoom);
      },
      onError: () => {},
    },
  );
}s
 */
