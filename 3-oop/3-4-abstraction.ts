{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeBeans: number) {
            this.coffeeBeans = coffeBeans;
        }


        static makeMachine(coffeeBeans: number) : CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }
        
        clean() {
            console.log('cleaning the machine...');
        }

        grindBeans(shots) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        preheat(): void {
            console.log('heating up...');
        }

        extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class AmatureUser {
        constructor(private machine: CoffeeMaker) {
            this.machine = machine;
        }
        makeCoffeee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
        
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {
            this.machine = machine;
        }

        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(32);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amature = new AmatureUser(maker);
    const pro = new ProBarista(maker);
    amature.makeCoffeee();
    pro.makeCoffee();
}