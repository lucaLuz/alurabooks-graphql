import { useMutation, useQuery } from "@apollo/client"
import { ICarrinho } from "../../interfaces/ICarrinho"
import { ADICIONAR_ITEM, OBTER_CARRINHO, REMOVER_ITEM } from "./queries"
import { CarrinhoContext, ICarrinhoContext } from "../../contextApi/carrinho"
import { useContext } from "react"

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}

export function useCarrinhoContext() {
    return useContext<ICarrinhoContext>(CarrinhoContext)
}


export function useAdicionarCarrinho() {
    return useMutation(ADICIONAR_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })
}
export function useRemoverCarrinho() {
    return useMutation(REMOVER_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })
}