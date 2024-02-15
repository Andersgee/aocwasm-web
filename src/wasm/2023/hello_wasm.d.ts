/* tslint:disable */
/* eslint-disable */
/**
* @param {string} input
* @returns {string}
*/
export function day1solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day1solveB(input: string): string;
/**
* @returns {string}
*/
export function some_rust_string(): string;
/**
* @returns {number}
*/
export function some_stuff(): number;
/**
* @param {Function} callback
* @returns {number}
*/
export function timed(callback: Function): number;
/**
* @param {string} input
* @returns {string}
*/
export function day7solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day7solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day5solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day5solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day3solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day3solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day9solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day9solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day2solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day2solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day6solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day6solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day4solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day4solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day8solveA(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day8solveB(input: string): string;
/**
* @param {string} input
* @returns {string}
*/
export function day10solveA(input: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly day1solveA: (a: number, b: number, c: number) => void;
  readonly day1solveB: (a: number, b: number, c: number) => void;
  readonly some_rust_string: (a: number) => void;
  readonly some_stuff: () => number;
  readonly timed: (a: number) => number;
  readonly day7solveA: (a: number, b: number, c: number) => void;
  readonly day7solveB: (a: number, b: number, c: number) => void;
  readonly day5solveA: (a: number, b: number, c: number) => void;
  readonly day5solveB: (a: number, b: number, c: number) => void;
  readonly day3solveA: (a: number, b: number, c: number) => void;
  readonly day3solveB: (a: number, b: number, c: number) => void;
  readonly day9solveA: (a: number, b: number, c: number) => void;
  readonly day9solveB: (a: number, b: number, c: number) => void;
  readonly day2solveA: (a: number, b: number, c: number) => void;
  readonly day2solveB: (a: number, b: number, c: number) => void;
  readonly day6solveA: (a: number, b: number, c: number) => void;
  readonly day6solveB: (a: number, b: number, c: number) => void;
  readonly day4solveA: (a: number, b: number, c: number) => void;
  readonly day4solveB: (a: number, b: number, c: number) => void;
  readonly day8solveA: (a: number, b: number, c: number) => void;
  readonly day8solveB: (a: number, b: number, c: number) => void;
  readonly day10solveA: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
