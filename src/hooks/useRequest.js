import { useState, useEffect } from "react";
import Axios from 'axios';


const useRequest = (url) => { 
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false); 
  const [error, setError] = useState(null);
  const [resMessage, setResMessage] = useState('');



  const get = async () => {
      setIsPending(true)
        try {
            const res = await Axios.get(url)
            setData(res.data);
            setIsPending(false)
            setError(null)
            setResMessage('Data sucessfully received')
        
        } catch (error) {
            setIsPending(false)
            setError(error.message)
            setResMessage('could not fetch the data for that resource')

          }
        
    }

    const post = async (body)=> {
        try {
            setIsPending(true)
            setResMessage('')
            await Axios.post(url, body)
            setResMessage('Data sucessfully added')
            setIsPending(false)
            setError(null)
        
        } catch (error) {
            setIsPending(false)
            setError(error.message)
            setResMessage('could not fetch the data for that resource')
          }
    }

    const remove = async (id)=> {
        try {
            setIsPending(true)
            setResMessage('')
            await Axios.delete(url)
            setResMessage('Data sucessfully deleted')
            setIsPending(false)
            setError(null)
        
        } catch (error) {
            setIsPending(false)
            setError(error.message)
            setResMessage('Error could not delete the data for that resource')
          }
    }

  useEffect(() => {
    console.log(resMessage);
  }, [resMessage]);

  return { data, get, post, remove, isPending, error, resMessage };
}


export default useRequest;