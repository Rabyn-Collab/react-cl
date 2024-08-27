import { useSelector } from 'react-redux'

const useAuth = () => {
  const { user } = useSelector((state) => state.userSlice);

  return user;
}

export default useAuth