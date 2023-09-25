import { ISynthesisSession } from "../construct-compat";
import { Stack } from "../stack";
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
     * Synthesize all artifacts required for the stack into the session
     *
     * @experimental
     */
    synthesizeStackArtifacts(session: ISynthesisSession): void;
}
