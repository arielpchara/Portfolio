import { EventEmitter } from "@angular/core";

export interface Commands {
    onKeyDown: KeyFunction;
}

interface KeyFunction {
    (event: any): void;
}
