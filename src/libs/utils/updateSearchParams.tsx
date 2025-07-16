
{/*import { useRouter, useSearchParams } from 'next/navigation';
export function useUpdateSearchParam() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === null || value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.replace(`?${params.toString()}`);
  };
}*/}

export function updateSearchParams(url:string,params: Record<string, string | null>): string{
 const urlObj = new URL(url);

 Object.entries(params).forEach(([key,value])=>{
    if(value === null || value === ''){
        urlObj.searchParams.delete(key);
    }else{
        urlObj.searchParams.set(key,value);
    }
 });

 return urlObj.toString();
}