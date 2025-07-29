export type ViagemData = {
    id: string;
    destination: string;
    imageURl: string;
    category: string;
    date_in: string
    date_out:string;
    touristic: string;
    staying: string;
}
export type ItemList = {
    id: string;
    name: string;
    quantity: number;
    category: string;
}
export const viagensdatas: ViagemData[] = [
    {
        id: "1",
        destination: "Paris",
        imageURl: "/imagens/paris.png",
        category: "Turismo",
        date_in: "02/07/2024",
        date_out:"16/07/2024",
        touristic: "Tour Eiffel; Museu do Louvre",
        staying: "Hotel Paris",
    },
    {
        id: "2",
        destination: "Amsterdam",
        imageURl: "/imagens/amsterda.png",
        category: "Intercâmbio",
        date_in: "01/12/2018",
        date_out: "03/07/2019",
        touristic: "Rijksmuseum; Casa de Anne Frank",
        staying: "Hotel Amsterdam",
    },
    {
        id: "3",
        destination: "Portugal",
        imageURl: "/imagens/portugal.png",
        category: "Trabalho",
        date_in: "29/10/2022",
        date_out:"05/11/2022",
        touristic: "Torre de Belém; Castelo de São Jorge",
        staying: "Hotel Lisboa",
    }
]

export const listaItens: ItemList[] = [
    { id: '1', name: "Camisetas", quantity: 3, category: "Roupas" },
    { id: '2', name: "Escova de dentes", quantity: 2, category: "Higiene" },
    { id: '3', name: "Carregador", quantity: 1, category: "Eletrônicos" },
    { id: '4', name: "Shorts", quantity: 2, category: "Roupas" },
  ];