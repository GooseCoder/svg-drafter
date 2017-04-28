/**
 * Created by gustav on 4/21/17.
 */
export interface IDecorator {
    getId(): string
    getType(): string
    render(): boolean
}
