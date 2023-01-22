export interface IProducts {
    id: number;
    selected: boolean;
    title: string;
    numberServings: string;
    kilogram: number;
    description: IDescription;
    disabled: boolean;
}

export interface IDescription {
    haveProduct: string,
    notProduct: string,
}