{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        public constructor(coffeBeans: number) {
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

    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }

    // 설탕 제조기
    class AutomaticSugarMixer {
        private getSugar() {
            console.log('getting some sugar');
            return true;
        } 

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: true,
            }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber:string, private milkFrother: CheapMilkSteamer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(beans: number, private sugar: AutomaticSugarMixer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(private beans:number, private milk: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugarAdded: CoffeeCup = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }

    }
    const machines : CoffeeMaker[]= [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach(machine => {
        console.log('-------');
        machine.makeCoffee(1);
    });

}