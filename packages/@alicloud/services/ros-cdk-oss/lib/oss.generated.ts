// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosBucket`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
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
     * @Property enableOssHdfsService: Whether enable OSS-HDFS service. 
     * **Note**: Once it's enabled, it can't be disabled again.
     */
    readonly enableOssHdfsService?: boolean | ros.IResolvable;

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
    readonly policy?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
     * LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
     * ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
     */
    readonly redundancyType?: string | ros.IResolvable;

    /**
     * @Property refererConfiguration: undefined
     */
    readonly refererConfiguration?: RosBucket.RefererConfigurationProperty | ros.IResolvable;

    /**
     * @Property resourceGroupId: The resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

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
    readonly tags?: { [key: string]: (any) };

    /**
     * @Property versioningConfiguration: A state of versioning
     */
    readonly versioningConfiguration?: RosBucket.VersioningConfigurationProperty | ros.IResolvable;

    /**
     * @Property websiteConfiguration: The properties of website config.
     */
    readonly websiteConfiguration?: RosBucket.WebsiteConfigurationProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBucketProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketProps`
 *
 * @returns the result of the validation.
 */
function RosBucketPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.hashValidator(ros.validateAny))(properties.policy));
    errors.collect(ros.propertyValidator('enableOssHdfsService', ros.validateBoolean)(properties.enableOssHdfsService));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.storageClass && (typeof properties.storageClass) !== 'object') {
        errors.collect(ros.propertyValidator('storageClass', ros.validateAllowedValues)({
          data: properties.storageClass,
          allowedValues: ["Standard","IA","Archive","ColdArchive"],
        }));
    }
    errors.collect(ros.propertyValidator('storageClass', ros.validateString)(properties.storageClass));
    if(properties.redundancyType && (typeof properties.redundancyType) !== 'object') {
        errors.collect(ros.propertyValidator('redundancyType', ros.validateAllowedValues)({
          data: properties.redundancyType,
          allowedValues: ["LRS","ZRS"],
        }));
    }
    errors.collect(ros.propertyValidator('redundancyType', ros.validateString)(properties.redundancyType));
    errors.collect(ros.propertyValidator('websiteConfiguration', RosBucket_WebsiteConfigurationPropertyValidator)(properties.websiteConfiguration));
    errors.collect(ros.propertyValidator('lifecycleConfiguration', RosBucket_LifecycleConfigurationPropertyValidator)(properties.lifecycleConfiguration));
    errors.collect(ros.propertyValidator('serverSideEncryptionConfiguration', RosBucket_ServerSideEncryptionConfigurationPropertyValidator)(properties.serverSideEncryptionConfiguration));
    errors.collect(ros.propertyValidator('versioningConfiguration', RosBucket_VersioningConfigurationPropertyValidator)(properties.versioningConfiguration));
    if(properties.accessControl && (typeof properties.accessControl) !== 'object') {
        errors.collect(ros.propertyValidator('accessControl', ros.validateAllowedValues)({
          data: properties.accessControl,
          allowedValues: ["private","public-read","public-read-write"],
        }));
    }
    errors.collect(ros.propertyValidator('accessControl', ros.validateString)(properties.accessControl));
    errors.collect(ros.propertyValidator('corsConfiguration', RosBucket_CORSConfigurationPropertyValidator)(properties.corsConfiguration));
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('loggingConfiguration', RosBucket_LoggingConfigurationPropertyValidator)(properties.loggingConfiguration));
    errors.collect(ros.propertyValidator('refererConfiguration', RosBucket_RefererConfigurationPropertyValidator)(properties.refererConfiguration));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosBucketProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket` resource.
 */
// @ts-ignore TS6133
function rosBucketPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBucketPropsValidator(properties).assertSuccess();
    }
    return {
      BucketName: ros.stringToRosTemplate(properties.bucketName),
      AccessControl: ros.stringToRosTemplate(properties.accessControl),
      CORSConfiguration: rosBucketCORSConfigurationPropertyToRosTemplate(properties.corsConfiguration),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
      EnableOssHdfsService: ros.booleanToRosTemplate(properties.enableOssHdfsService),
      LifecycleConfiguration: rosBucketLifecycleConfigurationPropertyToRosTemplate(properties.lifecycleConfiguration),
      LoggingConfiguration: rosBucketLoggingConfigurationPropertyToRosTemplate(properties.loggingConfiguration),
      Policy: ros.hashMapper(ros.objectToRosTemplate)(properties.policy),
      RedundancyType: ros.stringToRosTemplate(properties.redundancyType),
      RefererConfiguration: rosBucketRefererConfigurationPropertyToRosTemplate(properties.refererConfiguration),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      ServerSideEncryptionConfiguration: rosBucketServerSideEncryptionConfigurationPropertyToRosTemplate(properties.serverSideEncryptionConfiguration),
      StorageClass: ros.stringToRosTemplate(properties.storageClass),
      Tags: ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      VersioningConfiguration: rosBucketVersioningConfigurationPropertyToRosTemplate(properties.versioningConfiguration),
      WebsiteConfiguration: rosBucketWebsiteConfigurationPropertyToRosTemplate(properties.websiteConfiguration),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Bucket`, which is used to create an Object Storage Service (OSS) bucket.
 * @Note This class does not contain additional functions, so it is recommended to use the `Bucket` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
 */
export class RosBucket extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Bucket";

    /**
     * @Attribute DomainName: The public DNS name of the specified bucket.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    public readonly attrInternalDomainName: ros.IResolvable;

    /**
     * @Attribute Name: The name of Bucket
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucketName: bucket name.
     */
    public bucketName: string | ros.IResolvable;

    /**
     * @Property accessControl: The access control list.
     */
    public accessControl: string | ros.IResolvable | undefined;

    /**
     * @Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
     */
    public corsConfiguration: RosBucket.CORSConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableOssHdfsService: Whether enable OSS-HDFS service. 
     * **Note**: Once it's enabled, it can't be disabled again.
     */
    public enableOssHdfsService: boolean | ros.IResolvable | undefined;

    /**
     * @Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
     */
    public lifecycleConfiguration: RosBucket.LifecycleConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property loggingConfiguration: Settings that defines where logs are stored.
     */
    public loggingConfiguration: RosBucket.LoggingConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property policy: Bucket policy
     */
    public policy: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
     * LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
     * ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
     */
    public redundancyType: string | ros.IResolvable | undefined;

    /**
     * @Property refererConfiguration: undefined
     */
    public refererConfiguration: RosBucket.RefererConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    public serverSideEncryptionConfiguration: RosBucket.ServerSideEncryptionConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
     */
    public storageClass: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Bucket tags in k-v pairs format.
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * @Property versioningConfiguration: A state of versioning
     */
    public versioningConfiguration: RosBucket.VersioningConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property websiteConfiguration: The properties of website config.
     */
    public websiteConfiguration: RosBucket.WebsiteConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBucket.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainName = this.getAtt('DomainName');
        this.attrInternalDomainName = this.getAtt('InternalDomainName');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.accessControl = props.accessControl;
        this.corsConfiguration = props.corsConfiguration;
        this.deletionForce = props.deletionForce;
        this.enableOssHdfsService = props.enableOssHdfsService;
        this.lifecycleConfiguration = props.lifecycleConfiguration;
        this.loggingConfiguration = props.loggingConfiguration;
        this.policy = props.policy;
        this.redundancyType = props.redundancyType;
        this.refererConfiguration = props.refererConfiguration;
        this.resourceGroupId = props.resourceGroupId;
        this.serverSideEncryptionConfiguration = props.serverSideEncryptionConfiguration;
        this.storageClass = props.storageClass;
        this.tags = props.tags;
        this.versioningConfiguration = props.versioningConfiguration;
        this.websiteConfiguration = props.websiteConfiguration;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucketName: this.bucketName,
            accessControl: this.accessControl,
            corsConfiguration: this.corsConfiguration,
            deletionForce: this.deletionForce,
            enableOssHdfsService: this.enableOssHdfsService,
            lifecycleConfiguration: this.lifecycleConfiguration,
            loggingConfiguration: this.loggingConfiguration,
            policy: this.policy,
            redundancyType: this.redundancyType,
            refererConfiguration: this.refererConfiguration,
            resourceGroupId: this.resourceGroupId,
            serverSideEncryptionConfiguration: this.serverSideEncryptionConfiguration,
            storageClass: this.storageClass,
            tags: this.tags,
            versioningConfiguration: this.versioningConfiguration,
            websiteConfiguration: this.websiteConfiguration,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBucketPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface AbortMultipartUploadProperty {
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
/**
 * Determine whether the given properties match those of a `AbortMultipartUploadProperty`
 *
 * @param properties - the TypeScript properties of a `AbortMultipartUploadProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_AbortMultipartUploadPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('createdBeforeDate', ros.validateString)(properties.createdBeforeDate));
    errors.collect(ros.propertyValidator('days', ros.validateNumber)(properties.days));
    return errors.wrap('supplied properties not correct for "AbortMultipartUploadProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.AbortMultipartUpload` resource
 *
 * @param properties - the TypeScript properties of a `AbortMultipartUploadProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.AbortMultipartUpload` resource.
 */
// @ts-ignore TS6133
function rosBucketAbortMultipartUploadPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_AbortMultipartUploadPropertyValidator(properties).assertSuccess();
    return {
      CreatedBeforeDate: ros.stringToRosTemplate(properties.createdBeforeDate),
      Days: ros.numberToRosTemplate(properties.days),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface CORSConfigurationProperty {
        /**
         * @Property corsRule: A set of origins and methods that you allow.
         */
        readonly corsRule?: Array<RosBucket.CORSRuleProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CORSConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `CORSConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_CORSConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('corsRule', ros.listValidator(RosBucket_CORSRulePropertyValidator))(properties.corsRule));
    return errors.wrap('supplied properties not correct for "CORSConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.CORSConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `CORSConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.CORSConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketCORSConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_CORSConfigurationPropertyValidator(properties).assertSuccess();
    return {
      CORSRule: ros.listMapper(rosBucketCORSRulePropertyToRosTemplate)(properties.corsRule),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface CORSRuleProperty {
        /**
         * @Property allowedMethod: undefined
         */
        readonly allowedMethod?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property maxAgeSeconds: undefined
         */
        readonly maxAgeSeconds?: number | ros.IResolvable;
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
/**
 * Determine whether the given properties match those of a `CORSRuleProperty`
 *
 * @param properties - the TypeScript properties of a `CORSRuleProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_CORSRulePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('allowedMethod', ros.listValidator(ros.validateString))(properties.allowedMethod));
    errors.collect(ros.propertyValidator('maxAgeSeconds', ros.validateNumber)(properties.maxAgeSeconds));
    errors.collect(ros.propertyValidator('exposeHeader', ros.listValidator(ros.validateString))(properties.exposeHeader));
    errors.collect(ros.propertyValidator('allowedOrigin', ros.listValidator(ros.validateString))(properties.allowedOrigin));
    errors.collect(ros.propertyValidator('allowedHeader', ros.listValidator(ros.validateString))(properties.allowedHeader));
    return errors.wrap('supplied properties not correct for "CORSRuleProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.CORSRule` resource
 *
 * @param properties - the TypeScript properties of a `CORSRuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.CORSRule` resource.
 */
// @ts-ignore TS6133
function rosBucketCORSRulePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_CORSRulePropertyValidator(properties).assertSuccess();
    return {
      AllowedMethod: ros.listMapper(ros.stringToRosTemplate)(properties.allowedMethod),
      MaxAgeSeconds: ros.numberToRosTemplate(properties.maxAgeSeconds),
      ExposeHeader: ros.listMapper(ros.stringToRosTemplate)(properties.exposeHeader),
      AllowedOrigin: ros.listMapper(ros.stringToRosTemplate)(properties.allowedOrigin),
      AllowedHeader: ros.listMapper(ros.stringToRosTemplate)(properties.allowedHeader),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface ExpirationProperty {
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
/**
 * Determine whether the given properties match those of a `ExpirationProperty`
 *
 * @param properties - the TypeScript properties of a `ExpirationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ExpirationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('createdBeforeDate', ros.validateString)(properties.createdBeforeDate));
    errors.collect(ros.propertyValidator('days', ros.validateNumber)(properties.days));
    return errors.wrap('supplied properties not correct for "ExpirationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Expiration` resource
 *
 * @param properties - the TypeScript properties of a `ExpirationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Expiration` resource.
 */
// @ts-ignore TS6133
function rosBucketExpirationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_ExpirationPropertyValidator(properties).assertSuccess();
    return {
      CreatedBeforeDate: ros.stringToRosTemplate(properties.createdBeforeDate),
      Days: ros.numberToRosTemplate(properties.days),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface LifecycleConfigurationProperty {
        /**
         * @Property rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
         */
        readonly rule: Array<RosBucket.RuleProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LifecycleConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LifecycleConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_LifecycleConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rule', ros.requiredValidator)(properties.rule));
    errors.collect(ros.propertyValidator('rule', ros.listValidator(RosBucket_RulePropertyValidator))(properties.rule));
    return errors.wrap('supplied properties not correct for "LifecycleConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.LifecycleConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `LifecycleConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.LifecycleConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketLifecycleConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_LifecycleConfigurationPropertyValidator(properties).assertSuccess();
    return {
      Rule: ros.listMapper(rosBucketRulePropertyToRosTemplate)(properties.rule),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface LoggingConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `LoggingConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LoggingConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_LoggingConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetPrefix', ros.validateString)(properties.targetPrefix));
    errors.collect(ros.propertyValidator('targetBucket', ros.validateString)(properties.targetBucket));
    return errors.wrap('supplied properties not correct for "LoggingConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.LoggingConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `LoggingConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.LoggingConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketLoggingConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_LoggingConfigurationPropertyValidator(properties).assertSuccess();
    return {
      TargetPrefix: ros.stringToRosTemplate(properties.targetPrefix),
      TargetBucket: ros.stringToRosTemplate(properties.targetBucket),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface RefererConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `RefererConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `RefererConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RefererConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('refererList', ros.listValidator(ros.validateAny))(properties.refererList));
    errors.collect(ros.propertyValidator('allowEmptyReferer', ros.validateBoolean)(properties.allowEmptyReferer));
    return errors.wrap('supplied properties not correct for "RefererConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.RefererConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `RefererConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.RefererConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketRefererConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_RefererConfigurationPropertyValidator(properties).assertSuccess();
    return {
      RefererList: ros.listMapper(ros.objectToRosTemplate)(properties.refererList),
      AllowEmptyReferer: ros.booleanToRosTemplate(properties.allowEmptyReferer),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface RuleProperty {
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
/**
 * Determine whether the given properties match those of a `RuleProperty`
 *
 * @param properties - the TypeScript properties of a `RuleProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RulePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Enabled","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('abortMultipartUpload', RosBucket_AbortMultipartUploadPropertyValidator)(properties.abortMultipartUpload));
    errors.collect(ros.propertyValidator('expiration', RosBucket_ExpirationPropertyValidator)(properties.expiration));
    errors.collect(ros.propertyValidator('prefix', ros.requiredValidator)(properties.prefix));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    return errors.wrap('supplied properties not correct for "RuleProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Rule` resource
 *
 * @param properties - the TypeScript properties of a `RuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Rule` resource.
 */
// @ts-ignore TS6133
function rosBucketRulePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_RulePropertyValidator(properties).assertSuccess();
    return {
      Status: ros.stringToRosTemplate(properties.status),
      AbortMultipartUpload: rosBucketAbortMultipartUploadPropertyToRosTemplate(properties.abortMultipartUpload),
      Expiration: rosBucketExpirationPropertyToRosTemplate(properties.expiration),
      Prefix: ros.stringToRosTemplate(properties.prefix),
      ID: ros.stringToRosTemplate(properties.id),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface ServerSideEncryptionConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `ServerSideEncryptionConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ServerSideEncryptionConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ServerSideEncryptionConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sseAlgorithm', ros.requiredValidator)(properties.sseAlgorithm));
    if(properties.sseAlgorithm && (typeof properties.sseAlgorithm) !== 'object') {
        errors.collect(ros.propertyValidator('sseAlgorithm', ros.validateAllowedValues)({
          data: properties.sseAlgorithm,
          allowedValues: ["KMS","AES256","SM4"],
        }));
    }
    errors.collect(ros.propertyValidator('sseAlgorithm', ros.validateString)(properties.sseAlgorithm));
    errors.collect(ros.propertyValidator('kmsMasterKeyId', ros.validateString)(properties.kmsMasterKeyId));
    return errors.wrap('supplied properties not correct for "ServerSideEncryptionConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.ServerSideEncryptionConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `ServerSideEncryptionConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.ServerSideEncryptionConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketServerSideEncryptionConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_ServerSideEncryptionConfigurationPropertyValidator(properties).assertSuccess();
    return {
      SSEAlgorithm: ros.stringToRosTemplate(properties.sseAlgorithm),
      KMSMasterKeyID: ros.stringToRosTemplate(properties.kmsMasterKeyId),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface VersioningConfigurationProperty {
        /**
         * @Property status: Specifies the versioning state of a bucket. Valid values: Enabled and Suspended.
         */
        readonly status: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VersioningConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `VersioningConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_VersioningConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.requiredValidator)(properties.status));
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Enabled","Suspended"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    return errors.wrap('supplied properties not correct for "VersioningConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.VersioningConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `VersioningConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.VersioningConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketVersioningConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_VersioningConfigurationPropertyValidator(properties).assertSuccess();
    return {
      Status: ros.stringToRosTemplate(properties.status),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface WebsiteConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `WebsiteConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_WebsiteConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexDocument', ros.validateString)(properties.indexDocument));
    errors.collect(ros.propertyValidator('errorDocument', ros.validateString)(properties.errorDocument));
    return errors.wrap('supplied properties not correct for "WebsiteConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.WebsiteConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.WebsiteConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketWebsiteConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_WebsiteConfigurationPropertyValidator(properties).assertSuccess();
    return {
      IndexDocument: ros.stringToRosTemplate(properties.indexDocument),
      ErrorDocument: ros.stringToRosTemplate(properties.errorDocument),
    };
}

/**
 * Properties for defining a `RosDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
export interface RosDirectoryProps {

    /**
     * @Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * @Property directoryName: Directory name
     */
    readonly directoryName: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force delete the relative objects in the directory. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosDirectoryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('directoryName', ros.requiredValidator)(properties.directoryName));
    if(properties.directoryName && (typeof properties.directoryName) !== 'object') {
        errors.collect(ros.propertyValidator('directoryName', ros.validateAllowedPattern)({
          data: properties.directoryName,
          reg: /[^\\/\\](?!\/\/)(.*){1,254}$/
        }));
    }
    errors.collect(ros.propertyValidator('directoryName', ros.validateString)(properties.directoryName));
    return errors.wrap('supplied properties not correct for "RosDirectoryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Directory` resource
 *
 * @param properties - the TypeScript properties of a `RosDirectoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Directory` resource.
 */
// @ts-ignore TS6133
function rosDirectoryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDirectoryPropsValidator(properties).assertSuccess();
    }
    return {
      BucketName: ros.stringToRosTemplate(properties.bucketName),
      DirectoryName: ros.stringToRosTemplate(properties.directoryName),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Directory`DATASOURCE::OSS::Buckets is used to query an Object Storage Service (OSS) bucket.
 * @Note This class does not contain additional functions, so it is recommended to use the `Directory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
export class RosDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Directory";

    /**
     * @Attribute BucketName: The name of Bucket
     */
    public readonly attrBucketName: ros.IResolvable;

    /**
     * @Attribute DirectoryName: The name of Directory
     */
    public readonly attrDirectoryName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucketName: bucket name.
     */
    public bucketName: string | ros.IResolvable;

    /**
     * @Property directoryName: Directory name
     */
    public directoryName: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force delete the relative objects in the directory. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDirectoryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBucketName = this.getAtt('BucketName');
        this.attrDirectoryName = this.getAtt('DirectoryName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.directoryName = props.directoryName;
        this.deletionForce = props.deletionForce;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucketName: this.bucketName,
            directoryName: this.directoryName,
            deletionForce: this.deletionForce,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
 */
export interface RosDomainProps {

    /**
     * @Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    if(properties.domainName && (Array.isArray(properties.domainName) || (typeof properties.domainName) === 'string')) {
        errors.collect(ros.propertyValidator('domainName', ros.validateLength)({
            data: properties.domainName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      BucketName: ros.stringToRosTemplate(properties.bucketName),
      DomainName: ros.stringToRosTemplate(properties.domainName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Domain`, which is used to bind a custom domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Domain";

    /**
     * @Attribute BucketName: The name of Bucket
     */
    public readonly attrBucketName: ros.IResolvable;

    /**
     * @Attribute DomainName: The custom domain name.
     */
    public readonly attrDomainName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucketName: bucket name.
     */
    public bucketName: string | ros.IResolvable;

    /**
     * @Property domainName: Domain name
     */
    public domainName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBucketName = this.getAtt('BucketName');
        this.attrDomainName = this.getAtt('DomainName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.domainName = props.domainName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucketName: this.bucketName,
            domainName: this.domainName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
