import * as cxapi from "@alicloud/ros-cdk-cxapi";
import { Construct, IConstruct } from "./construct-compat";
/**
 * Initialization props for a stage.
 */
export interface StageProps {
    /**
     * The output directory into which to emit synthesized artifacts.
     *
     * Can only be specified if this stage is the root stage (the app). If this is
     * specified and this stage is nested within another stage, an error will be
     * thrown.
     *
     * @default - for nested stages, outdir will be determined as a relative
     * directory to the outdir of the app. For apps, if outdir is not specified, a
     * temporary directory will be created.
     */
    readonly outdir?: string;
}
/**
 * An abstract application modeling unit consisting of Stacks that should be
 * deployed together.
 *
 * Derive a subclass of `Stage` and use it to model a single instance of your
 * application.
 *
 * You can then instantiate your subclass multiple times to model multiple
 * copies of your application which should be be deployed to different
 * environments.
 */
export declare class Stage extends Construct {
    /**
     * Return the stage this construct is contained with, if available. If called
     * on a nested stage, returns its parent.
     *
     * @experimental
     */
    static of(construct: IConstruct): Stage | undefined;
    /**
     * Test whether the given construct is a stage.
     *
     * @experimental
     */
    static isStage(x: any): x is Stage;
    /**
     * The default region for all resources defined within this stage.
     *
     * @experimental
     */
    /**
     * The default account for all resources defined within this stage.
     *
     * @experimental
     */
    /**
     * The cloud assembly builder that is being used for this App
     *
     * @experimental
     * @internal
     */
    readonly _assemblyBuilder: cxapi.CloudAssemblyBuilder;
    /**
     * The name of the stage. Based on names of the parent stages separated by
     * hypens.
     *
     * @experimental
     */
    readonly stageName: string;
    /**
     * The parent stage or `undefined` if this is the app.
     * *
     * @experimental
     */
    readonly parentStage?: Stage;
    /**
     * The cached assembly if it was already built
     */
    private assembly?;
    constructor(scope: Construct, id: string, props?: StageProps);
    /**
     * Artifact ID of the assembly if it is a nested stage. The root stage (app)
     * will return an empty string.
     *
     * Derived from the construct path.
     *
     * @experimental
     */
    get artifactId(): string;
    /**
     * Synthesize this stage into a cloud assembly.
     *
     * Once an assembly has been synthesized, it cannot be modified. Subsequent
     * calls will return the same assembly.
     */
    synth(options?: StageSynthesisOptions): cxapi.CloudAssembly;
    private createBuilder;
}
/**
 * Options for assemly synthesis.
 */
export interface StageSynthesisOptions {
    /**
     * Should we skip construct validation.
     * @default - false
     */
    readonly skipValidation?: boolean;
}
