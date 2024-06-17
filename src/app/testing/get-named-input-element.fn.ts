import { ComponentFixture } from "@angular/core/testing";

export function getNamedInputElement(fixture: ComponentFixture<any>, name: string): HTMLInputElement {
    const element = (fixture.nativeElement as HTMLElement).querySelector<HTMLInputElement>(`input[name=${name}]`);

    if (!element) {
        throw new Error(`input element w/ name ${name} not found`);
    }

    return element;
}

