import { useCounter,useFetch } from "../hooks"
import { LoadingQuote, Quote, } from "./"



export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)
    
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]

    console.log(data, isLoading, hasError)



  return (
    <>
        <h1>Breakingbad Quotes</h1>
        <hr />

        {
            (isLoading)
            ? (
                <LoadingQuote />
            )
            : (
                <Quote quote={ quote} author={author}/>
            )
        }
        <button onClick={() => increment(1)} className="btn btn-primary mt-2">Next</button>



    </>
  )
}
