export default async function Curso({params}) {
    const { curso } = await params;

    const cursos = [
        {codigo: "si", nome: "Sistemas de Informação"},
        {codigo: "cc", nome: "Ciência da Computação"}
    ]

    const resposta = cursos.filter((c) => c.codigo === curso);
    
    if(resposta.length === 0) {
        return <h1>404 - Página não encontrada</h1>
    }

    return(
        <main>
            <h2>Curso - {resposta[0].nome}</h2>
        </main>
    )
}