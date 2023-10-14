class SelectItemViewModel {
    public id: number;
    public name: string;
    public price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name ?? "Default name";
        this.price = price ?? 10;
    }
}
export { SelectItemViewModel }