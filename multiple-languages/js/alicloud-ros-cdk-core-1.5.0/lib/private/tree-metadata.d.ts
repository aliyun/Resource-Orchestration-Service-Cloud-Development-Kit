import { Construct, ISynthesisSession } from "../construct-compat";
/**
 * Construct that is automatically attached to the top-level `App`.
 * This generates, as part of synthesis, a file containing the construct tree and the metadata for each node in the tree.
 * The output is in a tree format so as to preserve the construct hierarchy.
 *
 * @experimental
 */
export declare class TreeMetadata extends Construct {
    constructor(scope: Construct);
    synthesize(session: ISynthesisSession): void;
    private synthAttributes;
}
