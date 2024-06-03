import { ISynthesisSession } from "../construct-compat";
import { Stack } from "../stack";
import { IBoundStackSynthesizer, IReusableStackSynthesizer } from "./types";
import { FileAssetLocation, FileAssetSource } from "../assets";
import { StackSynthesizer } from "./stack-synthesizer";
/**
 * Configuration properties for DefaultStackSynthesizer
 */
export interface DefaultStackSynthesizerProps {
    /**
     * Name of the OSS bucket to hold file assets
     *
     * You must supply this if you have given a non-standard name to the staging bucket.
     *
     * The placeholders `${Qualifier}`, `${ALIYUN::AccountId}` and `${ALIYUN::Region}` will
     * be replaced with the values of qualifier and the stack's account and region,
     * respectively.
     *
     * @default DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
     */
    readonly fileAssetsBucketName?: string;
    /**
     * Qualifier to disambiguate multiple environments in the same account
     *
     * You can use this and leave the other naming properties empty if you have deployed
     * the bootstrap environment with standard names but only differnet qualifiers.
     */
    readonly qualifier?: string;
    /**
     * bucketPrefix to use while storing OSS Assets
     *
     * @default - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
     */
    readonly bucketPrefix?: string;
}
/**
 * Uses conventionally named roles and reify asset storage locations
 */
export declare class DefaultStackSynthesizer extends StackSynthesizer implements IReusableStackSynthesizer, IBoundStackSynthesizer {
    private readonly props;
    /**
     * Default ARN qualifier
     */
    static readonly DEFAULT_QUALIFIER = "";
    /**
     * Default file assets bucket name
     */
    static readonly DEFAULT_FILE_ASSETS_BUCKET_NAME = "cdk-${Qualifier}-assets-${ALIYUN::Region}";
    /**
     * Default file asset prefix
     */
    static readonly DEFAULT_FILE_ASSET_PREFIX = "";
    private _stack?;
    private qualifier?;
    private bucketName?;
    private bucketPrefix?;
    private assetManifest;
    constructor(props?: DefaultStackSynthesizerProps);
    /**
     * Produce a bound Stack Synthesizer for the given stack.
     *
     * This method may be called more than once on the same object.
     */
    reusableBind(stack: Stack): IBoundStackSynthesizer;
    bind(stack: Stack): void;
    addFileAsset(asset: FileAssetSource): FileAssetLocation;
    /**
     * Synthesize the associated stack to the session
     */
    synthesize(session: ISynthesisSession): void;
    synthesizeStackArtifacts(session: ISynthesisSession): void;
    protected get stack(): Stack | undefined;
    /**
     * Write an asset manifest to the Cloud Assembly, return the artifact IDs written
     */
    private writeAssetManifest;
}
