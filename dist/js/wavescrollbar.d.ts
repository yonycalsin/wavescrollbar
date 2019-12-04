interface WavescrollbarI {
    readonly cont: Element | null;
    readonly progress: Element;
    readonly scrollTop?: number;
    readonly scrollHeight?: number;
    readonly clientHeight?: number;
    readonly windowHeight?: number;
    readonly porcent?: number;
    readonly procentString?: string;
}
interface TransitionProps {
    readonly duration?: string;
    readonly delay?: string;
    readonly timing?: "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out";
}
interface GradientProps {
    readonly angle?: string;
    readonly colors?: Array<string>;
}
declare const d: Document;
declare const w: Window;
declare const de: HTMLElement;
declare class Wavescrollbar implements WavescrollbarI {
    cont: any;
    progress: HTMLElement;
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
    windowHeight: number;
    porcent: number;
    procentString: string;
    version: string;
    author: string;
    constructor(selector?: string | null);
    initProgress(): void;
    initCont(): void;
    handleScroll: () => void;
    init(): void;
    setHeight(value?: string): void;
    setTransition(options?: TransitionProps): void;
    setBackground(color?: string): void;
    setGradient(options?: GradientProps): void;
    setContainerBackground(color?: string): void;
    setAnimation(): void;
}
