import localStorage from '@/utils/localStorage'
import {loginUser} from "@/config/localStorage.config"

export default {
  user:localStorage.get(loginUser),
  loading:false,
  articleList:'',
  category:''
}
