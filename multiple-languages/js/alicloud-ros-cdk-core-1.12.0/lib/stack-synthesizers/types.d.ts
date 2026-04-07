import { ISynthesisSession } from "../construct-compat";
import { Stack } from "../stack";
import { FileAssetLocation, FileAssetSource } from "../assets";
/**
 * Encodes information how a certain Stack should be deployed
 */
export interface IStackSynthesizer {
    /**
     * Bind to the stack this environment is going to be used on
     *
     * Must be called before any of the other methods are called.
     */
    bind(stack: Stack): void;
    /**
     * Register a File Asset
     *
     * Returns the parameters that can be used to refer to the asset inside the template.
     */
    addFileAsset(asset: FileAssetSource): FileAssetLocation;
    /**
     * Synthesize the associated stack to the session
     */
    synthesize(session: ISynthesisSession): void;
}
/**
 * Interface for Stack Synthesizers that can be used for more than one stack.
 *
 * Regular `IStackSynthesizer` instances can only be bound to a Stack once.
 * `IReusableStackSynthesizer` instances.
 *
 * For backwards compatibility reasons, this class inherits from
 * `IStackSynthesizer`, but if an object implements `IReusableStackSynthesizer`,
 * no other methods than `reusableBind()` will be called.
 */
export interface IReusableStackSynthesizer extends IStackSynthesizer {
    /**
     * Produce a bound Stack Synthesizer for the given stack.
     *
     * This method may be called more than once on the same object.
     */
    reusableBind(stack: Stack): IBoundStackSynthesizer;
}
/**
 * A Stack Synthesizer, obtained from `IReusableStackSynthesizer.`
 *
 * Just a type alias with a very concrete contract.
 */
export interface IBoundStackSynthesizer extends IStackSynthesizer {
}
/**
 * Whether the given Stack Synthesizer is reusable or not
 */
export declare function isReusableStackSynthesizer(x: IStackSynthesizer): x is IReusableStackSynthesizer;
