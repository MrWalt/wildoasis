import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      toast.success("Successfully updated this user");
    },
    onError: () => toast.error("There was an error updating this user"),
  });

  return { updateCurrentUser, isUpdating };
}
