export const formattedPrice = (value: number, currency: string = "BRL") =>
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency,
    }).format(value);
