import * as ros from '@alicloud/ros-cdk-core';
import { RosBucket } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBucket as BucketProperty };

/**
 * Properties for defining a `ALIYUN::OSS::Bucket`
 */
export interface BucketProps {

    /**
     * Property bucketName: bucket name.
     */
    readonly bucketName: string;

    /**
     * Property accessControl: The access control list.
     */
    readonly accessControl?: string;

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
    readonly policy?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property refererConfiguration: undefined
     */
    readonly refererConfiguration?: RosBucket.RefererConfigurationProperty | ros.IResolvable;

    /**
     * Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    readonly serverSideEncryptionConfiguration?: RosBucket.ServerSideEncryptionConfigurationProperty | ros.IResolvable;

    /**
     * Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
     */
    readonly storageClass?: string;

    /**
     * Property tags: Bucket tags in k-v pairs format.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * Property websiteConfiguration: The properties of website config.
     */
    readonly websiteConfiguration?: RosBucket.WebsiteConfigurationProperty | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::OSS::Bucket`
 */
export class Bucket extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DomainName: The public DNS name of the specified bucket.
     */
    public readonly attrDomainName: any;

    /**
     * Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    public readonly attrInternalDomainName: any;

    /**
     * Attribute Name: The name of Bucket
     */
    public readonly attrName: any;

    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosBucket = new RosBucket(this, id,  {
            policy: props.policy,
            corsConfiguration: props.corsConfiguration,
            deletionForce: props.deletionForce ? props.deletionForce : false,
            bucketName: props.bucketName,
            storageClass: props.storageClass,
            loggingConfiguration: props.loggingConfiguration,
            websiteConfiguration: props.websiteConfiguration,
            refererConfiguration: props.refererConfiguration,
            lifecycleConfiguration: props.lifecycleConfiguration,
            serverSideEncryptionConfiguration: props.serverSideEncryptionConfiguration,
            accessControl: props.accessControl ? props.accessControl : 'private',
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucket;
        this.attrDomainName = rosBucket.attrDomainName;
        this.attrInternalDomainName = rosBucket.attrInternalDomainName;
        this.attrName = rosBucket.attrName;
    }
}
