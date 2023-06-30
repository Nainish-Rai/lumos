import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json());
const BASE_URL = "https://lumosbackend.onrender.com"

export function searchApi(searchTerm) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR(`${BASE_URL}/search/${searchTerm}`, fetcher)
 
  return {
    data: data,
    isLoading,
    isError: error
  }
}