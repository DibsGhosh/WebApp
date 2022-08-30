export interface IProduct{
    productCategory: "Electronics" | "Fashion" | "Food" | "Book"
    productName: string;
    productCode: string;
    productColor: string;
    prodDescription: string;
    price: number;
    inStockQuantity: number;
    imageUrl: string;
}