import { StackSynthesizer } from './stack-synthesizer';
import { ISynthesisSession } from "../construct-compat";
import { IReusableStackSynthesizer, IBoundStackSynthesizer } from './types';
import { FileAssetLocation, FileAssetSource } from '../assets';
import { Stack } from '../stack';
/**
 * Use the CDK classic way of referencing assets
 *
 * This synthesizer will generate ROS parameters for every referenced
 * asset, and use the CLI's current credentials to deploy the stack.
 *
 * - It does not support cross-account deployment (the CLI must have credentials
 *   to the account you are trying to deploy to).
 * - It cannot be used with **CDK Pipelines**. To deploy using CDK Pipelines,
 *   you must use the `DefaultStackSynthesizer`.
 * - Each asset will take up a ROS Parameter in your template. Keep in
 *   mind that there is a maximum of 200 parameters in a ROS template.
 *   To use deterministic asset locations instead, use `CliCredentialsStackSynthesizer`.
 *
 * Be aware that your CLI credentials must be valid for the duration of the
 * entire deployment. If you are using session credentials, make sure the
 * session lifetime is long enough.
 */
export declare class LegacyStackSynthesizer extends StackSynthesizer implements IReusableStackSynthesizer, IBoundStackSynthesizer {
    private cycle;
    /**
     * Includes all parameters synthesized for assets (lazy).
     */
    private _assetParameters?;
    addFileAsset(asset: FileAssetSource): FileAssetLocation;
    /**
     * Synthesize the associated stack to the session
     */
    synthesize(session: ISynthesisSession): void;
    /**
     * Produce a bound Stack Synthesizer for the given stack.
     *
     * This method may be called more than once on the same object.
     */
    reusableBind(stack: Stack): IBoundStackSynthesizer;
    private doAddFileAsset;
    private get assetParameters();
}
