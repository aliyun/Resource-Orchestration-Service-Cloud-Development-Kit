import * as ros from '@alicloud/ros-cdk-core';
import { RosBucket } from './oss.generated';
export { RosBucket as BucketProperty };
/**
 * Properties for defining a `ALIYUN::OSS::Bucket`
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
     * Property websiteConfiguration: The properties of website config.
     */
    readonly websiteConfiguration?: RosBucket.WebsiteConfigurationProperty | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::OSS::Bucket`
 */
export declare class Bucket extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DomainName: The public DNS name of the specified bucket.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    readonly attrInternalDomainName: ros.IResolvable;
    /**
     * Attribute Name: The name of Bucket
     */
    readonly attrName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketProps, enableResourcePropertyConstraint?: boolean);
}
