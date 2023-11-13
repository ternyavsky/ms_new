import { useMutation, useQueryClient } from "react-query";
import { changeUserDetails } from "../../api/user";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { TUserDataForPutRequest } from "../../types/userDataForPutRequest.type";
import { useAuth } from "@/shared/model/store/auth";

export const useUserMutate = (data: TUserDataForPutRequest) => {
    const { getCookie } = useCookie();
    const { setUser } = useAuth();

    const client = useQueryClient();

    return useMutation({
        mutationFn: () =>
            changeUserDetails(getCookie("access_token") as string, data),
        mutationKey: ["userDetails", "put"],
        onSuccess: (data) => {
            client.invalidateQueries(["userDetails", "get"]);
            setUser(data.data);
        },
    });
};
