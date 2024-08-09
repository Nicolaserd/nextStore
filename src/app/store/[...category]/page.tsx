interface categoryProps {
    params:{
        category:string
    }

}
export default function Category( props:categoryProps) {
    const {category} = props.params
    

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className=" font-bold text-white "> Categoria de : {category?category:""} </h1>
      </main>
    );
  }