import localStorage from '@/utils/localStorage'
import {loginUser} from "@/config/localStorage.config"

export default {
  user:JSON.parse(localStorage.get(loginUser)),
  loading:false
}
