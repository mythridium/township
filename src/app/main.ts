import { ComponentMaker } from '../framework/component';
import { Totals } from './totals/totals';

export class App {
    constructor(private readonly context: Modding.ModContext) {}

    public init() {
        ComponentMaker.create(this.context, Totals);
    }
}
