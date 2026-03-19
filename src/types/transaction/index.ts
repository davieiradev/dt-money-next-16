export type ITransaction = {
    id: string;
    title: string;
    price: number;
    category: string;
    type: "INCOME" | "OUTCOME";
    data: Date;
}