"use client";
import { useState } from "react";
import { ITransaction } from "@/types/transaction"
import { formatDate, formatPrice } from "@/utils"

export type TableProps = {
    data: ITransaction[]
    onDelete: (id: string) => void;
    onEdit: (transaction: ITransaction) => void;
}
export const Table = ({ data, onDelete, onEdit }: TableProps) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState<string | null>(null);

  function handleDeleteConfirm() {
    if (transactionToDelete) {
      onDelete(transactionToDelete);
    }
    setIsDeleteModalOpen(false); 
  }
    return <>
        <table className="w-full mt-16 border-separate border-spacing-y-2">
            <thead>
                <tr>
                   <th className="px-4 text-left text-table-header text-base font-medium">Título</th> 
                   <th className="px-4 text-left text-table-header text-base font-medium">Preço</th> 
                   <th className="px-4 text-left text-table-header text-base font-medium">Categoria</th> 
                   <th className="px-4 text-left text-table-header text-base font-medium">Data</th> 
                   <th className="px-4 text-left text-table-header text-base font-medium">Ações</th>
                </tr>
            </thead> 
            <tbody>
               {data.map(transaction => (
                <tr key={transaction.id} className="h-16">
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white rounded-l-lg">{transaction.title} </td> 
                   <td className={`px-4 py-4 whitespace-nowrap ${transaction.type === "INCOME"? "text-income": "text-outcome"} bg-white text-right`}>{formatPrice(transaction.price)} </td> 
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white">{transaction.category} </td>
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white rounded-r-lg">{formatDate(transaction.data)} </td>
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white">

<button
  onClick={() => onEdit(transaction)}
  className="text-blue-500 hover:text-blue-700 font-bold mr-4 transition-colors"
>
  Editar
</button>
  <button 
    onClick={() => {
      setTransactionToDelete(transaction.id);
      setIsDeleteModalOpen(true);
    }}
    className="text-red-500 hover:text-red-700 font-bold"
  >
    Excluir
  </button>
</td>
                </tr>
               ))} 
            </tbody>
        </table>
        {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Confirmar Exclusão</h2>
            <p className="mb-6 text-gray-600">Tem certeza que deseja excluir esta transação?</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded font-bold">Cancelar</button>
              <button onClick={handleDeleteConfirm} className="px-4 py-2 bg-red-500 text-white rounded font-bold">Excluir</button>
            </div>
          </div>
        </div>
      )}
    </>
}