import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {mutate: login, isLoading} = useMutation({
    mutationFn: (credentials) => loginApi(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      navigate('/dashboard', { replace: true })
    },
    onError: (error) => {
      console.log('ERROR', error)
      toast.error('Provided email or password are incorrect')
    }
  })

  return { login, isLoading };
}
