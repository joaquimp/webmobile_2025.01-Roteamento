import Link from "next/link"


export default function FCI() {
    // cursos é a resposta de uma API convertida para JSON
    const cursos = [
        {codigo: "si", nome: "Sistemas de Informação"},
        {codigo: "cc", nome: "Ciência da Computação"}
    ]

    return (
        <main>
            <h1>Página da FCI</h1>
            <h2>Nossos cursos</h2>
            <section className="cursos">
            {
                cursos.map((c) => {
                    return (
                        <Link href={'\\fci\\'+c.codigo}>{c.nome}</Link>
                    )
                })
            }
            </section>
        </main>
    )
}