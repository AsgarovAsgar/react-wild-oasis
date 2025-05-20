import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const {mutate: login, isLoading, isError} = useMutation({
    mutationFn: (credentials) => loginApi(credentials),
    onSuccess: () => {
      navigate('/dashboard')
    },
    onError: (error) => {
      console.log('ERROR', error)
      toast.error('Provided email or password are incorrect')
    }
  })

  return { login, isLoading, isError };
}
