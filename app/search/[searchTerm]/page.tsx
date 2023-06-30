'use client'
import { useParams } from 'next/navigation'
import { searchApi } from "../../../utils/api";

type Props = {}
type params = {
    searchTerm:string
}
type searchApi = {
    data: any;
    isError: any;
    isLoading: boolean;
  };

function page({}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {searchTerm} = useParams()


    const { data, isLoading, isError }: searchApi = searchApi(searchTerm);
    console.log(data)
  return (
    <div className='text-primary'>Here</div>
  )
}

export default page