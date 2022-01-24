import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net';
import { Costumer, User, Client, Seller, ClientManager } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

const erico: User = new User("1", "erico@email.com", "Érico", "1234")
const raie: User = new User("2", "raie@email.com", "Raiê", "1234")



console.log(erico)

//exercício 1:
//a) sim, foi impresso.
//b) Apenas uma vez, ao criar o novo user.

//exercício 2:
const luli: Costumer = new Costumer("1", "luli@email.com", "Luísa", "1235", "555-555-555-555")
//a) e b) Cada um foi chamado uma vez para a criação da instancia costumer.

//exercício 3:
console.log(luli)
//a) é possivel pois está sendo chamada em sua instancia e não está privada.

//exercício 4 e 5:
console.log(luli.introduceYourself())

//exercício 6:
const client: Client = {
   name: "Alirio",
   registrationNumber: 1,
   consumedEnergy: 100,
   calculateBill: () => {
       return 2;
   }
}

//exercico 8:

const bernardo: Seller = new Seller("1", "be@email.com", "Bernardo", "1236")
//a) foi necessário colocar os parâmetros de user.
console.log(bernardo)
//b) tudo foi impresso.

//exercicio 9:
// console.log(bernardo.salesQuantity)
//não é possivel pois é particular e só acessível através de Seller a não ser através da função publica


//exercício 10:
const ines: Seller = new Seller("2", "ines@email.com", "Inês", "1237")
ines.setSalesQuantity(4)
console.log(ines.calculateTotalSalary())
//foi impresso o valor total após incluir um novo valor para sales Quantity

//desafios Polimorfismo

// const clientManager = new ClientManager()

// const residentialClient = new ResidentialClient() 
// clientManager.registerClient(residentialClient)

// const commercialClient = new CommercialClient() 
// clientManager.registerClient(commercialClient)

// const industrialClient = new IndustrialClient() 
// clientManager.registerClient(industrialClient)