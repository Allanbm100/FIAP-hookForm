"use client"

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  nome: yup.string().required("Campo Obrigatório!").min(2, "Mínimo de 2 caracteres!"),
  email: yup.string().required("Campo Obrigatório!").email("Digite um email válido!"),
  telefone: yup.string().required("Campo Obrigatório!").matches(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, "Formato inválido"),
})

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm( {resolver: yupResolver(schema)} );
  // Aqui importamos o que seria usado e dentro do useForm, passamos o schema para utilizar no código

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <main className="container mx-auto lg">
      <h1 className="text-5xl">Formulário</h1>

      <form className="w-96" onSubmit={handleSubmit(onSubmit)}> {/* Aqui falamos que ao clicar, envia os dados */}
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="rounded-sm text-lg text-gray-950"
            {...register("nome")}   // Aqui capturamos o campo
          />
          {errors.nome ? <span className='text-red-700'>{errors.nome.message}</span> : null}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            className="rounded-sm text-lg text-gray-950"
            {...register("email")} 
          />
            {errors.email ? <span className='text-red-700'>{errors.email.message}</span> : null}
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            className="rounded-sm text-lg text-gray-950"
            {...register("telefone")}
          />
            {errors.telefone ? <span className='text-red-700'>{errors.telefone.message}</span> : null}
        </div>

        <button className="bg-green-700 p-2 rounded-sm mt-2">Salvar</button>
      </form>
    </main>
  )
}
