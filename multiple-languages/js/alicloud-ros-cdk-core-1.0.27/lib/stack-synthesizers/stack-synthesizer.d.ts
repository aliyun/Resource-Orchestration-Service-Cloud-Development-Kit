import { IStackSynthesizer } from './types';
import { ISynthesisSession } from "../construct-compat";
import * as cxschema from '@alicloud/ros-cdk-assembly-schema';
import { FileAssetLocation, FileAssetSource } from '../assets';
import { Stack } from '../stack';
/**
 * Base class for implementing an IStackSynthesizer
 *
 * This class needs to exist to provide public surface area for external
 * implementations of stack synthesizers. The protected methods give
 * access to functions that are otherwise @_internal to the framework
 * and could not be accessed by external implementors.
 */
export declare abstract class StackSynthesizer implements IStackSynthesizer {
    private _boundStack?;
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
     *
     * The synthesizer must rely on some out-of-band mechanism to make sure the given files
     * are actually placed in the returned location before the deployment happens. This can
     * be by writing the instructions to the asset manifest (for use by the `cdk-assets` tool),
     * by relying on the CLI to upload files (legacy behavior), or some other operator controlled
     * mechanism.
     */
    abstract addFileAsset(asset: FileAssetSource): FileAssetLocation;
    /**
     * Synthesize the associated stack to the session
     */
    abstract synthesize(session: ISynthesisSession): void;
    /**
     * Write the stack template to the given session
     *
     * Return a descriptor that represents the stack template as a file asset
     * source, for adding to an asset manifest (if desired). This can be used to
     * have the asset manifest system (`cdk-assets`) upload the template to OSS
     * using the appropriate role, so that afterwards only a ROS
     * deployment is necessary.
     *
     * If the template is uploaded as an asset, the `stackTemplateAssetObjectUrl`
     * property should be set when calling `emitArtifact.`
     *
     * If the template is *NOT* uploaded as an asset first and the template turns
     * out to be >50KB, it will need to be uploaded to OSS anyway. At that point
     * the credentials will be the same identity that is doing the `UpdateStack`
     * call, which may not have the right permissions to write to OSS.
     */
    protected synthesizeTemplate(session: ISynthesisSession): FileAssetSource;
    /**
     * Write the ROS stack artifact to the session
     *
     * Use default settings to add a ROSStackArtifact artifact to
     * the given synthesis session. The Stack artifact will control the settings for the
     * ROS deployment.
     */
    protected emitArtifact(session: ISynthesisSession, options?: SynthesizeStackArtifactOptions): void;
    /**
     * Retrieve the bound stack
     *
     * Fails if the stack hasn't been bound yet.
     */
    protected get boundStack(): Stack;
    /**
     * Turn a file asset location into a ROS representation of that location
     *
     * If any of the fields contain placeholders, the result will be wrapped in a `Fn.sub`.
     */
    protected rosLocationFromFileAsset(location: cxschema.FileDestination): FileAssetLocation;
}
/**
 * Stack artifact options
 *
 */
export interface SynthesizeStackArtifactOptions {
    /**
     * Identifiers of additional dependencies
     *
     * @default - No additional dependencies
     */
    readonly additionalDependencies?: string[];
    /**
     * Values for ROS stack parameters that should be passed when the stack is deployed.
     *
     * @default - No parameters
     */
    readonly parameters?: {
        [id: string]: string;
    };
}
