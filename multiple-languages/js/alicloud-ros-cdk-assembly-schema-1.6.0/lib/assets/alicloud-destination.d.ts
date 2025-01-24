/**
 * Destination for assets that need to be uploaded to AliCloud
 */
export interface AliCloudDestination {
    /**
     * The region where this asset will need to be published
     *
     * @default - Current region
     */
    readonly region?: string;
}
