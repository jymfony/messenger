const ExceptionInterface = Jymfony.Component.Messenger.Exception.ExceptionInterface;

/**
 * @memberOf Jymfony.Component.Messenger.Exception
 */
export default class RuntimeException extends mix(globalThis.RuntimeException, ExceptionInterface) {
}
