export function defaultDeprecationTriggerHandler(message: string, error: Error) {
    const stack = error.stack ?? "";

    console.warn(message, stack.split(/\r?\n/g).slice(1).join("\n"));
}
