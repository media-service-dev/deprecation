/**
 * Trigger deprecation with a custom message.
 *
 * @param {string} message
 */
import { defaultDeprecationTriggerHandler } from "./DefaultDeprecationTriggerHandler";

export function deprecate(message: string): void;

/**
 * Trigger conventional deprecation message.
 *
 * @param {number} currentMajor
 * @param {number} comingMinor
 * @param {number} nextMajor
 */
export function deprecate(currentMajor: number, comingMinor: number, nextMajor: number): void;

/**
 * Trigger conventional deprecation message, with an replacement that can be used instead.
 *
 * @param {number} currentMajor
 * @param {number} comingMinor
 * @param {number} nextMajor
 * @param {string} replacement
 */
export function deprecate(currentMajor: number, comingMinor: number, nextMajor: number, replacement: string): void;

/**
 * Trigger conventional deprecation message, with an overload replacement that can be used instead.
 *
 * @param {number} currentMajor
 * @param {number} comingMinor
 * @param {number} nextMajor
 * @param {string} replacement
 * @param {boolean} overload
 */
export function deprecate(currentMajor: number, comingMinor: number, nextMajor: number, replacement: string, overload: boolean): void;
// eslint-disable-next-line max-params
export function deprecate(message: string | number, comingMinor?: number, nextMajor?: number, replacement?: string, overload?: boolean): void {
    const error = new Error();

    if (typeof message === "string") {
        deprecate.triggerHandler(message, error);

        return;
    }

    if (typeof replacement !== "string") {
        deprecate.triggerHandler(`Deprecated since ${message}.${comingMinor} and will be removed in ${nextMajor}.0.`, error);

        return;
    }

    if (overload) {
        deprecate.triggerHandler(`Deprecated since ${message}.${comingMinor} and will be removed in ${nextMajor}.0, use another overload of ${replacement} instead.`, error);
    } else {
        deprecate.triggerHandler(`Deprecated since ${message}.${comingMinor} and will be removed in ${nextMajor}.0, use ${replacement} instead.`, error);
    }
}

deprecate.triggerHandler = defaultDeprecationTriggerHandler;
