import * as ros from '@alicloud/ros-cdk-core';
import { RosBucket } from './oss.generated';
export { RosBucket as BucketProperty };
import * as ram from "@alicloud/ros-cdk-ram";
/**
 * A reference to a bucket outside this stack
 */
export interface BucketAttributes {
    /**
     * The name of the bucket.
     */
    readonly bucketName?: string;
    /**
     * The domain name of the bucket.
     *
     * @default - Inferred from bucket name and region
     */
    readonly bucketDomainName?: string;
    /**
     * The website URL of the bucket (if static web hosting is enabled).
     *
     * @default - Inferred from bucket name and region
     */
    readonly bucketWebsiteUrl?: string;
    /**
     * The endpoint of the bucket.
     *
     * @default - Inferred from region
     */
    readonly bucketEndpoint?: string;
    /**
     * If this bucket has been configured for static website hosting.
     *
     * @default false
     */
    readonly isWebsite?: boolean;
    /**
     * The region this existing bucket is in.
     * Features that require the region (e.g. `bucketWebsiteUrl`) won't fully work
     * if the region cannot be correctly inferred.
     *
     * @default - it's assumed the bucket is in the same region as the scope it's being imported into
     */
    readonly region?: string;
}
/**
 * Properties for defining a `Bucket`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
 */
export interface BucketProps {
    /**
     * Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * Property accessControl: The access control list.
     */
    readonly accessControl?: string | ros.IResolvable;
    /**
     * Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
     */
    readonly corsConfiguration?: RosBucket.CORSConfigurationProperty | ros.IResolvable;
    /**
     * Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property enableOssHdfsService: Whether enable OSS-HDFS service.
     * **Note**: Once it's enabled, it can't be disabled again.
     */
    readonly enableOssHdfsService?: boolean | ros.IResolvable;
    /**
     * Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
     */
    readonly lifecycleConfiguration?: RosBucket.LifecycleConfigurationProperty | ros.IResolvable;
    /**
     * Property loggingConfiguration: Settings that defines where logs are stored.
     */
    readonly loggingConfiguration?: RosBucket.LoggingConfigurationProperty | ros.IResolvable;
    /**
     * Property policy: Bucket policy
     */
    readonly policy?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
     * LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
     * ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
     */
    readonly redundancyType?: string | ros.IResolvable;
    /**
     * Property refererConfiguration: undefined
     */
    readonly refererConfiguration?: RosBucket.RefererConfigurationProperty | ros.IResolvable;
    /**
     * Property resourceGroupId: The resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    readonly serverSideEncryptionConfiguration?: RosBucket.ServerSideEncryptionConfigurationProperty | ros.IResolvable;
    /**
     * Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
     */
    readonly storageClass?: string | ros.IResolvable;
    /**
     * Property tags: Bucket tags in k-v pairs format.
     */
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * Property versioningConfiguration: A state of versioning
     */
    readonly versioningConfiguration?: RosBucket.VersioningConfigurationProperty | ros.IResolvable;
    /**
     * Property websiteConfigurationV2: Website configuration.
     */
    readonly websiteConfigurationV2?: RosBucket.WebsiteConfigurationV2Property | ros.IResolvable;
}
/**
 * Represents a `Bucket`.
 */
export interface IBucket extends ros.IResource {
    readonly props: BucketProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DomainName: The public DNS name of the specified bucket.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    readonly attrInternalDomainName: ros.IResolvable | string;
    /**
     * Attribute Name: The name of Bucket
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Bucket`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucket`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
 */
export declare class Bucket extends ros.Resource implements IBucket {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BucketProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DomainName: The public DNS name of the specified bucket.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    readonly attrInternalDomainName: ros.IResolvable | string;
    /**
     * Attribute Name: The name of Bucket
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Thrown an exception if the given bucket name is not valid.
     *
     * @param physicalName name of the bucket.
     */
    static validateBucketName(physicalName: string): Promise<void>;
    /**
     * Returns an ARN that represents all objects within the bucket that match
     * the key pattern specified. To represent all keys, specify ``"*"``.
     *
     * If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:
     *
     *   arnForObjects(`home/${team}/${user}/*`)
     *
     */
    arnForObjects(keyPattern: string): string;
    private grant;
    /**
     * Grant an RAM principal (Role/Group/User) permission to list and read all resources for this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    grantRead(identity: ram.IPrincipal, objectsKeyPattern?: string): ram.ManagedPolicy;
    /**
     * Grant an RAM principal (Role/Group/User) permission to read and write resources for this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    grantReadWrite(identity: ram.IPrincipal, objectsKeyPattern?: string): ram.ManagedPolicy;
    /**
     * Grant an RAM principal (Role/Group/User) permission to list resources for this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    grantList(identity: ram.IPrincipal, objectsKeyPattern?: string): ram.ManagedPolicy;
    /**
     * Grant an RAM principal (Role/Group/User) full control over this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    grantFullAccess(identity: ram.IPrincipal, objectsKeyPattern?: string): ram.ManagedPolicy;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketProps, enableResourcePropertyConstraint?: boolean);
}
