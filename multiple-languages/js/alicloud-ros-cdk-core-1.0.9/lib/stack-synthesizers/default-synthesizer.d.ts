import { ISynthesisSession } from "../construct-compat";
import { Stack } from "../stack";
import { IStackSynthesizer } from "./types";
/**
 * Configuration properties for DefaultStackSynthesizer
 */
export interface DefaultStackSynthesizerProps {
    /**
     * Qualifier to disambiguate multiple environments in the same account
     *
     * You can use this and leave the other naming properties empty if you have deployed
     * the bootstrap environment with standard names but only differnet qualifiers.
     */
    readonly qualifier?: string;
}
/**
 * Uses conventionally named roles and reify asset storage locations
 */
export declare class DefaultStackSynthesizer implements IStackSynthesizer {
    /**
     * Default ARN qualifier
     */
    static readonly DEFAULT_QUALIFIER = "hnb659fds";
    private _stack?;
    constructor();
    bind(stack: Stack): void;
    synthesizeStackArtifacts(session: ISynthesisSession): void;
    protected get stack(): Stack | undefined;
    /**
     * Write an asset manifest to the Cloud Assembly, return the artifact IDs written
     */
    private writeAssetManifest;
}
//# sourceMappingURL=default-synthesizer.d.ts.map