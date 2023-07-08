/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
// const BASE_URL = "https://lumosbackend.onrender.com"
// const BASE_URL = "http://localhost:3000/api";
const BASE_URL = process.env.API_BASE_URL;
console.log(BASE_URL);
export function searchApi(searchTerm, options) {
  const address = `${BASE_URL}/search/${searchTerm}`;
  const { data, error, isLoading } = useSWR(address, fetcher, {
    revalidateOnFocus: false,
  });

  async () => {
    const newOptions = {
      page: options.page,
      safe: false,
      additional_params: {
        hl: "en",
      },
    };
    await fetcher(address, {
      method: "GET",
      body: JSON.stringify(newOptions),
    });
    mutate(address);
  };

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export function imagesApi(searchTerm) {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/images/${searchTerm}`,
    fetcher
  );
  return {
    data: data,
    isLoading,
    isError: error,
  };
}
