import { ref } from 'vue'
import axios from 'axios'

export default function useAuth() {
  const loading = ref(false)
  const error = ref(null)
  const baseURL = 'https://api-regs.herokuapp.com/api/auth/login'


  const login = async () => {
    loading.value = true
    await axios.post(baseURL, form)
      .then((response) => {
         localStorage.setItem('token', response.data.token)
         localStorage.setItem('user', JSON.stringify(response.data.user))
         window.location.href = '/proprietaire'
      })
      .catch((error) => {
        error.value = error.response.data.message
      }).finally(() => {
        loading.value = false
      })
  }
  
}
