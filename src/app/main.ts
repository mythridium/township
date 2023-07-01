import { Totals } from './totals/totals';

export class App {
    constructor(private readonly context: Modding.ModContext) {}

    public init() {
        const totals = new Totals(this.context);

        totals.init();
    }
}
