import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::OSS::Bucket`
 */
export interface RosBucketProps {
    /**
     * @Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * @Property accessControl: The access control list.
     */
    readonly accessControl?: string | ros.IResolvable;
    /**
     * @Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
     */
    readonly corsConfiguration?: RosBucket.CORSConfigurationProperty | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
     */
    readonly lifecycleConfiguration?: RosBucket.LifecycleConfigurationProperty | ros.IResolvable;
    /**
     * @Property loggingConfiguration: Settings that defines where logs are stored.
     */
    readonly loggingConfiguration?: RosBucket.LoggingConfigurationProperty | ros.IResolvable;
    /**
     * @Property policy: Bucket policy
     */
    readonly policy?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property refererConfiguration: undefined
     */
    readonly refererConfiguration?: RosBucket.RefererConfigurationProperty | ros.IResolvable;
    /**
     * @Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    readonly serverSideEncryptionConfiguration?: RosBucket.ServerSideEncryptionConfigurationProperty | ros.IResolvable;
    /**
     * @Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
     */
    readonly storageClass?: string | ros.IResolvable;
    /**
     * @Property tags: Bucket tags in k-v pairs format.
     */
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * @Property websiteConfiguration: The properties of website config.
     */
    readonly websiteConfiguration?: RosBucket.WebsiteConfigurationProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::OSS::Bucket`
 */
export declare class RosBucket extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Bucket";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DomainName: The public DNS name of the specified bucket.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    readonly attrInternalDomainName: ros.IResolvable;
    /**
     * @Attribute Name: The name of Bucket
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: bucket name.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @Property accessControl: The access control list.
     */
    accessControl: string | ros.IResolvable | undefined;
    /**
     * @Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
     */
    corsConfiguration: RosBucket.CORSConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
     */
    lifecycleConfiguration: RosBucket.LifecycleConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property loggingConfiguration: Settings that defines where logs are stored.
     */
    loggingConfiguration: RosBucket.LoggingConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property policy: Bucket policy
     */
    policy: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property refererConfiguration: undefined
     */
    refererConfiguration: RosBucket.RefererConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    serverSideEncryptionConfiguration: RosBucket.ServerSideEncryptionConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
     */
    storageClass: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Bucket tags in k-v pairs format.
     */
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property websiteConfiguration: The properties of website config.
     */
    websiteConfiguration: RosBucket.WebsiteConfigurationProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface AbortMultipartUploadProperty {
        /**
         * @Property createdBeforeDate: undefined
         */
        readonly createdBeforeDate?: string | ros.IResolvable;
        /**
         * @Property days: undefined
         */
        readonly days?: number | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface CORSConfigurationProperty {
        /**
         * @Property corsRule: A set of origins and methods that you allow.
         */
        readonly corsRule?: Array<RosBucket.CORSRuleProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface CORSRuleProperty {
        /**
         * @Property maxAgeSeconds: undefined
         */
        readonly maxAgeSeconds?: number | ros.IResolvable;
        /**
         * @Property allowedMethod: undefined
         */
        readonly allowedMethod?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property exposeHeader: undefined
         */
        readonly exposeHeader?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property allowedOrigin: undefined
         */
        readonly allowedOrigin?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property allowedHeader: undefined
         */
        readonly allowedHeader?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface ExpirationProperty {
        /**
         * @Property createdBeforeDate: undefined
         */
        readonly createdBeforeDate?: string | ros.IResolvable;
        /**
         * @Property days: undefined
         */
        readonly days?: number | ros.IResolvable;
        /**
         * @Property date: undefined
         */
        readonly date?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface LifecycleConfigurationProperty {
        /**
         * @Property rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
         */
        readonly rule: Array<RosBucket.RuleProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface LoggingConfigurationProperty {
        /**
         * @Property targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
         */
        readonly targetPrefix?: string | ros.IResolvable;
        /**
         * @Property targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
         */
        readonly targetBucket?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface RefererConfigurationProperty {
        /**
         * @Property refererList: undefined
         */
        readonly refererList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property allowEmptyReferer: undefined
         */
        readonly allowEmptyReferer?: boolean | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface RuleProperty {
        /**
         * @Property status: undefined
         */
        readonly status?: string | ros.IResolvable;
        /**
         * @Property abortMultipartUpload: undefined
         */
        readonly abortMultipartUpload?: RosBucket.AbortMultipartUploadProperty | ros.IResolvable;
        /**
         * @Property expiration: undefined
         */
        readonly expiration?: RosBucket.ExpirationProperty | ros.IResolvable;
        /**
         * @Property prefix: undefined
         */
        readonly prefix: string | ros.IResolvable;
        /**
         * @Property id: undefined
         */
        readonly id?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * @Property sseAlgorithm: Specifies the default server-side encryption method.
         */
        readonly sseAlgorithm: string | ros.IResolvable;
        /**
         * @Property kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
         */
        readonly kmsMasterKeyId?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface WebsiteConfigurationProperty {
        /**
         * @Property indexDocument: default home page.
         */
        readonly indexDocument?: string | ros.IResolvable;
        /**
         * @Property errorDocument: default error page.
         */
        readonly errorDocument?: string | ros.IResolvable;
    }
}
