interface categoryProps {
    params:{
        categories:string[]
        searchParams?: string
    }

}
export default function Category( props:categoryProps) {
    const {categories} = props.params
   
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className=" font-bold text-white "> Categoria de : {categories?categories:""} </h1>
      </main>
    );
  }