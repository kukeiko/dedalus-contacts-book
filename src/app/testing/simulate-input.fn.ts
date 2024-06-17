export function simulateInput(element: HTMLInputElement, value: string): void {
    element.value = value;
    element.dispatchEvent(new Event("input"));
}
