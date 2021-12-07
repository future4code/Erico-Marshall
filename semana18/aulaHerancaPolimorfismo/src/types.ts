//Exercícios Herança:

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ){
        console.log("Chamando o construtor da classe User")
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password
    }
    public getId(): string {
        return this.id
    }
    public getEmail(): string {
        return this.email
    }
    public getName(): string{
        return this.name
    }

    public introduceYourself(): string {
        //ou return "Olá, bom dia! Me chamo "+this.name+"!"
        return `Olá, bom dia! Me chamo ${this.name}!`
    }
}

export class Costumer extends User{
    private creditCard: string;
    public totalPurchase: number = 0;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCart: string,
    ){
        super(id, email, name, password)
        console.log("Chamando o construtor da classe Costumer")
        this.creditCard = creditCart
    }

    public getCreditCard(): string {
        return this.creditCard
    }
}


//Exercícios Polimorfismo:

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
}


export class Employee extends User {
    protected baseSalary: number = 0
    //exercício 11:
    static BENEFITS_VALUE: number = 400

    //exercício 7:
    public calculateTotalSalary(): number{
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}

export class Seller extends Employee {
    private salesQuantity: number = 0
    //exercício 11:
    static SELLING_COMMISSION: number = 5

    public getSalesQuantity(): number {
        return this.salesQuantity
    }

    public setSalesQuantity(quantity: number): void{
        this.salesQuantity = quantity
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Seller.BENEFITS_VALUE + this.salesQuantity * Seller.SELLING_COMMISSION
    }
}

export class ClientManager {
    private clients: Client[] = []

    getClientsQuantity():number {
        return this.clients.length
    }

    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public calculateBillsOfClient(registrationNumber: number): number {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })
        if (foundClient) {
            return foundClient.calculateBill()
        }

        return 0
    }
}
