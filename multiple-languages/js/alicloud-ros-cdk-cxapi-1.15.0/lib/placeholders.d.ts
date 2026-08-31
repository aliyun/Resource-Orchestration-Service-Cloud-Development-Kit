/**
 * Placeholders which can be used manifests
 *
 * These can occur both in the Asset Manifest as well as the general
 * Cloud Assembly manifest.
 */
export declare class EnvironmentPlaceholders {
    /**
     * Insert this into the destination fields to be replaced with the current region
     */
    static readonly CURRENT_REGION = "${ALIYUN::Region}";
    /**
     * Insert this into the destination fields to be replaced with the current account
     */
    static readonly CURRENT_ACCOUNT = "${ALIYUN::AccountId}";
    /**
     * Replace the environment placeholders in all strings found in a complex object.
     */
    static replace(object: any, values: EnvironmentPlaceholderValues): any;
    /**
     * Like 'replace', but asynchronous
     */
    static replaceAsync(object: any, provider: IEnvironmentPlaceholderProvider): Promise<any>;
    private static recurse;
}
/**
 * Return the appropriate values for the environment placeholders
 */
export interface EnvironmentPlaceholderValues {
    /**
     * Return the region
     */
    readonly region: string;
    /**
     * Return the account
     */
    readonly accountId: string;
}
/**
 * Return the appropriate values for the environment placeholders
 */
export interface IEnvironmentPlaceholderProvider {
    /**
     * Return the region
     */
    region(): Promise<string>;
    /**
     * Return the account
     */
    accountId(): Promise<string>;
}
