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
     * @Property websiteConfigurationV2: Website configuration.
     */
    readonly websiteConfigurationV2?: RosBucket.WebsiteConfigurationV2Property | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('websiteConfigurationV2', RosBucket_WebsiteConfigurationV2PropertyValidator)(properties.websiteConfigurationV2));
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
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'AccessControl': ros.stringToRosTemplate(properties.accessControl),
      'CORSConfiguration': rosBucketCORSConfigurationPropertyToRosTemplate(properties.corsConfiguration),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'EnableOssHdfsService': ros.booleanToRosTemplate(properties.enableOssHdfsService),
      'LifecycleConfiguration': rosBucketLifecycleConfigurationPropertyToRosTemplate(properties.lifecycleConfiguration),
      'LoggingConfiguration': rosBucketLoggingConfigurationPropertyToRosTemplate(properties.loggingConfiguration),
      'Policy': ros.hashMapper(ros.objectToRosTemplate)(properties.policy),
      'RedundancyType': ros.stringToRosTemplate(properties.redundancyType),
      'RefererConfiguration': rosBucketRefererConfigurationPropertyToRosTemplate(properties.refererConfiguration),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ServerSideEncryptionConfiguration': rosBucketServerSideEncryptionConfigurationPropertyToRosTemplate(properties.serverSideEncryptionConfiguration),
      'StorageClass': ros.stringToRosTemplate(properties.storageClass),
      'Tags': ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      'VersioningConfiguration': rosBucketVersioningConfigurationPropertyToRosTemplate(properties.versioningConfiguration),
      'WebsiteConfigurationV2': rosBucketWebsiteConfigurationV2PropertyToRosTemplate(properties.websiteConfigurationV2),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Bucket`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Bucket` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
 */
export class RosBucket extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Bucket";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
     * @Property websiteConfigurationV2: Website configuration.
     */
    public websiteConfigurationV2: RosBucket.WebsiteConfigurationV2Property | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBucket.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
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
        this.websiteConfigurationV2 = props.websiteConfigurationV2;
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
            websiteConfigurationV2: this.websiteConfigurationV2,
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
      'CreatedBeforeDate': ros.stringToRosTemplate(properties.createdBeforeDate),
      'Days': ros.numberToRosTemplate(properties.days),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface CORSConfigurationProperty {
        /**
         * @Property responseVary: Whether to return the Vary: Origin header. The range is as follows:
     * - true: The Vary: Origin header is returned regardless of whether a cross-origin request was sent or whether the cross-origin request was successful.
     * - false (default) : Do not return the Vary: Origin header under any circumstances
     * Note: This field cannot be configured separately; at least one cross-domain rule must be configured to take effect.
         */
        readonly responseVary?: boolean | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('responseVary', ros.validateBoolean)(properties.responseVary));
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
      'ResponseVary': ros.booleanToRosTemplate(properties.responseVary),
      'CORSRule': ros.listMapper(rosBucketCORSRulePropertyToRosTemplate)(properties.corsRule),
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
      'AllowedMethod': ros.listMapper(ros.stringToRosTemplate)(properties.allowedMethod),
      'MaxAgeSeconds': ros.numberToRosTemplate(properties.maxAgeSeconds),
      'ExposeHeader': ros.listMapper(ros.stringToRosTemplate)(properties.exposeHeader),
      'AllowedOrigin': ros.listMapper(ros.stringToRosTemplate)(properties.allowedOrigin),
      'AllowedHeader': ros.listMapper(ros.stringToRosTemplate)(properties.allowedHeader),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface ConditionProperty {
        /**
         * @Property includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
         */
        readonly includeHeaders?: Array<RosBucket.IncludeHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keyPrefixEquals: The prefix of the Object name to be matched.
         */
        readonly keyPrefixEquals?: string | ros.IResolvable;
        /**
         * @Property httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
         */
        readonly httpErrorCodeReturnedEquals?: string | ros.IResolvable;
        /**
         * @Property keySuffixEquals: The suffix of the Object name to be matched.
         */
        readonly keySuffixEquals?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConditionProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ConditionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.includeHeaders && (Array.isArray(properties.includeHeaders) || (typeof properties.includeHeaders) === 'string')) {
        errors.collect(ros.propertyValidator('includeHeaders', ros.validateLength)({
            data: properties.includeHeaders.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('includeHeaders', ros.listValidator(RosBucket_IncludeHeadersPropertyValidator))(properties.includeHeaders));
    errors.collect(ros.propertyValidator('keyPrefixEquals', ros.validateString)(properties.keyPrefixEquals));
    errors.collect(ros.propertyValidator('httpErrorCodeReturnedEquals', ros.validateString)(properties.httpErrorCodeReturnedEquals));
    errors.collect(ros.propertyValidator('keySuffixEquals', ros.validateString)(properties.keySuffixEquals));
    return errors.wrap('supplied properties not correct for "ConditionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Condition` resource
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Condition` resource.
 */
// @ts-ignore TS6133
function rosBucketConditionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_ConditionPropertyValidator(properties).assertSuccess();
    return {
      'IncludeHeaders': ros.listMapper(rosBucketIncludeHeadersPropertyToRosTemplate)(properties.includeHeaders),
      'KeyPrefixEquals': ros.stringToRosTemplate(properties.keyPrefixEquals),
      'HttpErrorCodeReturnedEquals': ros.stringToRosTemplate(properties.httpErrorCodeReturnedEquals),
      'KeySuffixEquals': ros.stringToRosTemplate(properties.keySuffixEquals),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface ErrorDocumentProperty {
        /**
         * @Property httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
         */
        readonly httpStatus?: string | ros.IResolvable;
        /**
         * @Property key: The default error page.
     * When an error page is specified, if the accessed Object does not exist, this error page is returned.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ErrorDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `ErrorDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ErrorDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.httpStatus && (typeof properties.httpStatus) !== 'object') {
        errors.collect(ros.propertyValidator('httpStatus', ros.validateAllowedValues)({
          data: properties.httpStatus,
          allowedValues: ["200","404"],
        }));
    }
    errors.collect(ros.propertyValidator('httpStatus', ros.validateString)(properties.httpStatus));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "ErrorDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.ErrorDocument` resource
 *
 * @param properties - the TypeScript properties of a `ErrorDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.ErrorDocument` resource.
 */
// @ts-ignore TS6133
function rosBucketErrorDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_ErrorDocumentPropertyValidator(properties).assertSuccess();
    return {
      'HttpStatus': ros.stringToRosTemplate(properties.httpStatus),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface ExpirationProperty {
        /**
         * @Property expiredObjectDeleteMarker: Specifies whether expired delete tags should be removed automatically. The values are as follows:
     * - true: This means that the expiration delete flag is automatically removed. When set to true, specifying Days or CreatedBeforeDate is not supported.
     * - false: This indicates that the expiration delete marker will not be automatically removed. When false, either Days or CreatedBeforeDate must be specified.
         */
        readonly expiredObjectDeleteMarker?: boolean | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('expiredObjectDeleteMarker', ros.validateBoolean)(properties.expiredObjectDeleteMarker));
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
      'ExpiredObjectDeleteMarker': ros.booleanToRosTemplate(properties.expiredObjectDeleteMarker),
      'CreatedBeforeDate': ros.stringToRosTemplate(properties.createdBeforeDate),
      'Days': ros.numberToRosTemplate(properties.days),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface FilterProperty {
        /**
         * @Property not: undefined
         */
        readonly not?: RosBucket.NotProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FilterProperty`
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_FilterPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('not', RosBucket_NotPropertyValidator)(properties.not));
    return errors.wrap('supplied properties not correct for "FilterProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Filter` resource
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Filter` resource.
 */
// @ts-ignore TS6133
function rosBucketFilterPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_FilterPropertyValidator(properties).assertSuccess();
    return {
      'Not': rosBucketNotPropertyToRosTemplate(properties.not),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface IncludeHeadersProperty {
        /**
         * @Property key: The name of the header.
         */
        readonly key: string | ros.IResolvable;
        /**
         * @Property equalsTo: The value of the header.
         */
        readonly equalsTo?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IncludeHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `IncludeHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_IncludeHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    errors.collect(ros.propertyValidator('equalsTo', ros.validateString)(properties.equalsTo));
    return errors.wrap('supplied properties not correct for "IncludeHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.IncludeHeaders` resource
 *
 * @param properties - the TypeScript properties of a `IncludeHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.IncludeHeaders` resource.
 */
// @ts-ignore TS6133
function rosBucketIncludeHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_IncludeHeadersPropertyValidator(properties).assertSuccess();
    return {
      'Key': ros.stringToRosTemplate(properties.key),
      'Equals': ros.stringToRosTemplate(properties.equalsTo),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface IndexDocumentProperty {
        /**
         * @Property type: Behavior when an Object that ends with a non-forward slash (\/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
     * Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com\/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:
     * - 0 (default) : Check if abc\/index.html exists (Object + forward slash (\/) + home page) and return 302 with the URL code of \/abc\/ as Location header (forward slash (\/) + Object + forward slash (\/)). If it doesn't, it will return 404 and keep checking ErrorFile.
     * - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
     * - 2: Check if abc\/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property suffix: Default home page.
     * After setting the default home page, if you visit an Object ending with a forward slash (\/), OSS will return to this default home page.
         */
        readonly suffix: string | ros.IResolvable;
        /**
         * @Property supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:
     * - true: Go to the default home page in a subdirectory.
     * - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
     * Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com\/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/index.html.
         */
        readonly supportSubDir?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IndexDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `IndexDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_IndexDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["0","1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('suffix', ros.requiredValidator)(properties.suffix));
    errors.collect(ros.propertyValidator('suffix', ros.validateString)(properties.suffix));
    if(properties.supportSubDir && (typeof properties.supportSubDir) !== 'object') {
        errors.collect(ros.propertyValidator('supportSubDir', ros.validateAllowedValues)({
          data: properties.supportSubDir,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('supportSubDir', ros.validateString)(properties.supportSubDir));
    return errors.wrap('supplied properties not correct for "IndexDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.IndexDocument` resource
 *
 * @param properties - the TypeScript properties of a `IndexDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.IndexDocument` resource.
 */
// @ts-ignore TS6133
function rosBucketIndexDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_IndexDocumentPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Suffix': ros.stringToRosTemplate(properties.suffix),
      'SupportSubDir': ros.stringToRosTemplate(properties.supportSubDir),
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
      'Rule': ros.listMapper(rosBucketRulePropertyToRosTemplate)(properties.rule),
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
      'TargetPrefix': ros.stringToRosTemplate(properties.targetPrefix),
      'TargetBucket': ros.stringToRosTemplate(properties.targetBucket),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface MirrorHeadersProperty {
        /**
         * @Property passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.
     * - content-length, authorization2, authorization, range, date and other headers
     * - Headers starting with oss-\/x-oss-\/x-drs-
     * Default value: false
         */
        readonly passAll?: boolean | ros.IResolvable;
        /**
         * @Property pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly pass?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
     * Up to 10 groups can be specified for this container.
         */
        readonly sets?: Array<RosBucket.SetsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly remove?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MirrorHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `MirrorHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_MirrorHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('passAll', ros.validateBoolean)(properties.passAll));
    if(properties.pass && (Array.isArray(properties.pass) || (typeof properties.pass) === 'string')) {
        errors.collect(ros.propertyValidator('pass', ros.validateLength)({
            data: properties.pass.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('pass', ros.listValidator(ros.validateString))(properties.pass));
    if(properties.sets && (Array.isArray(properties.sets) || (typeof properties.sets) === 'string')) {
        errors.collect(ros.propertyValidator('sets', ros.validateLength)({
            data: properties.sets.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('sets', ros.listValidator(RosBucket_SetsPropertyValidator))(properties.sets));
    if(properties.remove && (Array.isArray(properties.remove) || (typeof properties.remove) === 'string')) {
        errors.collect(ros.propertyValidator('remove', ros.validateLength)({
            data: properties.remove.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('remove', ros.listValidator(ros.validateString))(properties.remove));
    return errors.wrap('supplied properties not correct for "MirrorHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.MirrorHeaders` resource
 *
 * @param properties - the TypeScript properties of a `MirrorHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.MirrorHeaders` resource.
 */
// @ts-ignore TS6133
function rosBucketMirrorHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_MirrorHeadersPropertyValidator(properties).assertSuccess();
    return {
      'PassAll': ros.booleanToRosTemplate(properties.passAll),
      'Pass': ros.listMapper(ros.stringToRosTemplate)(properties.pass),
      'Sets': ros.listMapper(rosBucketSetsPropertyToRosTemplate)(properties.sets),
      'Remove': ros.listMapper(ros.stringToRosTemplate)(properties.remove),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface NotProperty {
        /**
         * @Property prefix: The Object prefix to which this exclusion rule applies.
     * - If Prefix is configured under Rule node, the Prefix under Not node must be prefixed by the Prefix under Rule node. For example, if the Prefix configured under the Rule node is dir, the Prefix under the Not node must begin with dir, such as dir1, dir2, and so on.
     * - If the Tag is Not configured under the Not node, the Prefix configured under the NOT node cannot be the same as the Prefix configured under the Rule node.
         */
        readonly prefix?: string | ros.IResolvable;
        /**
         * @Property tag: At most one Object tag to which this exclusion rule applies.
         */
        readonly tag?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NotProperty`
 *
 * @param properties - the TypeScript properties of a `NotProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_NotPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    if(properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
        errors.collect(ros.propertyValidator('tag', ros.validateLength)({
            data: properties.tag.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateString))(properties.tag));
    return errors.wrap('supplied properties not correct for "NotProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Not` resource
 *
 * @param properties - the TypeScript properties of a `NotProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Not` resource.
 */
// @ts-ignore TS6133
function rosBucketNotPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_NotPropertyValidator(properties).assertSuccess();
    return {
      'Prefix': ros.stringToRosTemplate(properties.prefix),
      'Tag': ros.listMapper(ros.stringToRosTemplate)(properties.tag),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface RedirectProperty {
        /**
         * @Property mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
     * The origin URL must begin with http:\/\/ or https:\/\/ and end with a forward slash (\/), which OSS will follow with the Object name to form the return URL.
     * Name to access the Object myobject, for example, if you specify this to http:\/\/example.com\/, then back to the source URL for http:\/\/example.com\/myobject, if you specify this to http:\/\/example.com\/dir1\/, Back to the source URL as http:\/\/example.com\/dir1\/myobject.
         */
        readonly mirrorUrl?: string | ros.IResolvable;
        /**
         * @Property replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
     * Suppose to access the Object for the test, if set ReplaceKeyWith to prefix\/${key}. The suffix, is the Location head to http:\/\/example.com\/prefix\/test.suffix.
         */
        readonly replaceKeyWith?: string | ros.IResolvable;
        /**
         * @Property mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
         */
        readonly mirrorHeaders?: RosBucket.MirrorHeadersProperty | ros.IResolvable;
        /**
         * @Property httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
     * Value: 301, 302, 307
         */
        readonly httpRedirectCode?: string | ros.IResolvable;
        /**
         * @Property enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
     * Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
     * Default value: false
         */
        readonly enableReplacePrefix?: boolean | ros.IResolvable;
        /**
         * @Property passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
     * Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
     * Valid values: true, false (default)
         */
        readonly passQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
     * For example, when we mirror back to the source, the source returns a 302 with Location specified.
     * - If set to true, OSS will continue to request the Location.
     * It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
     * - If set to false, OSS will return 302 and pass through the Location.
     * Default value: true
         */
        readonly mirrorFollowRedirect?: boolean | ros.IResolvable;
        /**
         * @Property replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
     * Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
     * Hypothesis to access the Object for ABC\/test. TXT, if set KeyPrefixEquals for ABC \/, ReplaceKeyPrefixWith for def \/, then the Location head to http:\/\/example.com\/def\/test.txt.
         */
        readonly replaceKeyPrefixWith?: string | ros.IResolvable;
        /**
         * @Property redirectType: Specifies the type of jump. The range is as follows:
     * - Mirror: Mirror back to the source.
     * - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
     * - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
         */
        readonly redirectType: string | ros.IResolvable;
        /**
         * @Property mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
     * Default value: false
         */
        readonly mirrorPassQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
     * When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
     * Default value: false
         */
        readonly mirrorCheckMd5?: boolean | ros.IResolvable;
        /**
         * @Property protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
     * If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https:\/\/example.com\/test.
     * Value: http, https
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property hostName: The domain name of the jump, the domain name should conform to the domain name specification.
     * If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https:\/\/example.com\/test.
         */
        readonly hostName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RedirectProperty`
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RedirectPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mirrorUrl', ros.validateString)(properties.mirrorUrl));
    errors.collect(ros.propertyValidator('replaceKeyWith', ros.validateString)(properties.replaceKeyWith));
    errors.collect(ros.propertyValidator('mirrorHeaders', RosBucket_MirrorHeadersPropertyValidator)(properties.mirrorHeaders));
    if(properties.httpRedirectCode && (typeof properties.httpRedirectCode) !== 'object') {
        errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateAllowedValues)({
          data: properties.httpRedirectCode,
          allowedValues: ["301","302","307"],
        }));
    }
    errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateString)(properties.httpRedirectCode));
    errors.collect(ros.propertyValidator('enableReplacePrefix', ros.validateBoolean)(properties.enableReplacePrefix));
    errors.collect(ros.propertyValidator('passQueryString', ros.validateBoolean)(properties.passQueryString));
    errors.collect(ros.propertyValidator('mirrorFollowRedirect', ros.validateBoolean)(properties.mirrorFollowRedirect));
    errors.collect(ros.propertyValidator('replaceKeyPrefixWith', ros.validateString)(properties.replaceKeyPrefixWith));
    errors.collect(ros.propertyValidator('redirectType', ros.requiredValidator)(properties.redirectType));
    if(properties.redirectType && (typeof properties.redirectType) !== 'object') {
        errors.collect(ros.propertyValidator('redirectType', ros.validateAllowedValues)({
          data: properties.redirectType,
          allowedValues: ["Mirror","External","AliCDN"],
        }));
    }
    errors.collect(ros.propertyValidator('redirectType', ros.validateString)(properties.redirectType));
    errors.collect(ros.propertyValidator('mirrorPassQueryString', ros.validateBoolean)(properties.mirrorPassQueryString));
    errors.collect(ros.propertyValidator('mirrorCheckMd5', ros.validateBoolean)(properties.mirrorCheckMd5));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["http","https"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    return errors.wrap('supplied properties not correct for "RedirectProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Redirect` resource
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Redirect` resource.
 */
// @ts-ignore TS6133
function rosBucketRedirectPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_RedirectPropertyValidator(properties).assertSuccess();
    return {
      'MirrorURL': ros.stringToRosTemplate(properties.mirrorUrl),
      'ReplaceKeyWith': ros.stringToRosTemplate(properties.replaceKeyWith),
      'MirrorHeaders': rosBucketMirrorHeadersPropertyToRosTemplate(properties.mirrorHeaders),
      'HttpRedirectCode': ros.stringToRosTemplate(properties.httpRedirectCode),
      'EnableReplacePrefix': ros.booleanToRosTemplate(properties.enableReplacePrefix),
      'PassQueryString': ros.booleanToRosTemplate(properties.passQueryString),
      'MirrorFollowRedirect': ros.booleanToRosTemplate(properties.mirrorFollowRedirect),
      'ReplaceKeyPrefixWith': ros.stringToRosTemplate(properties.replaceKeyPrefixWith),
      'RedirectType': ros.stringToRosTemplate(properties.redirectType),
      'MirrorPassQueryString': ros.booleanToRosTemplate(properties.mirrorPassQueryString),
      'MirrorCheckMd5': ros.booleanToRosTemplate(properties.mirrorCheckMd5),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'HostName': ros.stringToRosTemplate(properties.hostName),
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
      'RefererList': ros.listMapper(ros.objectToRosTemplate)(properties.refererList),
      'AllowEmptyReferer': ros.booleanToRosTemplate(properties.allowEmptyReferer),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface RoutingRulesProperty {
        /**
         * @Property condition: Conditions for matching.
     * This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
         */
        readonly condition: RosBucket.ConditionProperty | ros.IResolvable;
        /**
         * @Property ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
         */
        readonly ruleNumber: number | ros.IResolvable;
        /**
         * @Property redirect: Specifies the action to be performed when this rule is matched.
         */
        readonly redirect: RosBucket.RedirectProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RoutingRulesProperty`
 *
 * @param properties - the TypeScript properties of a `RoutingRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RoutingRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.requiredValidator)(properties.condition));
    errors.collect(ros.propertyValidator('condition', RosBucket_ConditionPropertyValidator)(properties.condition));
    errors.collect(ros.propertyValidator('ruleNumber', ros.requiredValidator)(properties.ruleNumber));
    if(properties.ruleNumber && (typeof properties.ruleNumber) !== 'object') {
        errors.collect(ros.propertyValidator('ruleNumber', ros.validateRange)({
            data: properties.ruleNumber,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('ruleNumber', ros.validateNumber)(properties.ruleNumber));
    errors.collect(ros.propertyValidator('redirect', ros.requiredValidator)(properties.redirect));
    errors.collect(ros.propertyValidator('redirect', RosBucket_RedirectPropertyValidator)(properties.redirect));
    return errors.wrap('supplied properties not correct for "RoutingRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.RoutingRules` resource
 *
 * @param properties - the TypeScript properties of a `RoutingRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.RoutingRules` resource.
 */
// @ts-ignore TS6133
function rosBucketRoutingRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_RoutingRulesPropertyValidator(properties).assertSuccess();
    return {
      'Condition': rosBucketConditionPropertyToRosTemplate(properties.condition),
      'RuleNumber': ros.numberToRosTemplate(properties.ruleNumber),
      'Redirect': rosBucketRedirectPropertyToRosTemplate(properties.redirect),
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
         * @Property filter: This exclusion rule has at most one conditional argument container.
         */
        readonly filter?: RosBucket.FilterProperty | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('filter', RosBucket_FilterPropertyValidator)(properties.filter));
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
      'Status': ros.stringToRosTemplate(properties.status),
      'AbortMultipartUpload': rosBucketAbortMultipartUploadPropertyToRosTemplate(properties.abortMultipartUpload),
      'Filter': rosBucketFilterPropertyToRosTemplate(properties.filter),
      'Expiration': rosBucketExpirationPropertyToRosTemplate(properties.expiration),
      'Prefix': ros.stringToRosTemplate(properties.prefix),
      'ID': ros.stringToRosTemplate(properties.id),
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
      'SSEAlgorithm': ros.stringToRosTemplate(properties.sseAlgorithm),
      'KMSMasterKeyID': ros.stringToRosTemplate(properties.kmsMasterKeyId),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface SetsProperty {
        /**
         * @Property value: Set the value of the Header to a maximum of 1024 bytes without \r\n. This only works if RedirectType is set to Mirror.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SetsProperty`
 *
 * @param properties - the TypeScript properties of a `SetsProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_SetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    if(properties.value && (Array.isArray(properties.value) || (typeof properties.value) === 'string')) {
        errors.collect(ros.propertyValidator('value', ros.validateLength)({
            data: properties.value.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    if(properties.key && (typeof properties.key) !== 'object') {
        errors.collect(ros.propertyValidator('key', ros.validateAllowedPattern)({
          data: properties.key,
          reg: /^[-a-zA-Z0-9]{1,1024}$/
        }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "SetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Sets` resource
 *
 * @param properties - the TypeScript properties of a `SetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Sets` resource.
 */
// @ts-ignore TS6133
function rosBucketSetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_SetsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
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
      'Status': ros.stringToRosTemplate(properties.status),
    };
}

export namespace RosBucket {
    /**
     * @stability external
     */
    export interface WebsiteConfigurationV2Property {
        /**
         * @Property indexDocument: The properties of default home page.
         */
        readonly indexDocument?: RosBucket.IndexDocumentProperty | ros.IResolvable;
        /**
         * @Property routingRules: The list of routing rules, up to 20.
         */
        readonly routingRules?: Array<RosBucket.RoutingRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property errorDocument: The properties of default error page.
         */
        readonly errorDocument?: RosBucket.ErrorDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WebsiteConfigurationV2Property`
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationV2Property`
 *
 * @returns the result of the validation.
 */
function RosBucket_WebsiteConfigurationV2PropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexDocument', RosBucket_IndexDocumentPropertyValidator)(properties.indexDocument));
    if(properties.routingRules && (Array.isArray(properties.routingRules) || (typeof properties.routingRules) === 'string')) {
        errors.collect(ros.propertyValidator('routingRules', ros.validateLength)({
            data: properties.routingRules.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('routingRules', ros.listValidator(RosBucket_RoutingRulesPropertyValidator))(properties.routingRules));
    errors.collect(ros.propertyValidator('errorDocument', RosBucket_ErrorDocumentPropertyValidator)(properties.errorDocument));
    return errors.wrap('supplied properties not correct for "WebsiteConfigurationV2Property"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.WebsiteConfigurationV2` resource
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationV2Property`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.WebsiteConfigurationV2` resource.
 */
// @ts-ignore TS6133
function rosBucketWebsiteConfigurationV2PropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBucket_WebsiteConfigurationV2PropertyValidator(properties).assertSuccess();
    return {
      'IndexDocument': rosBucketIndexDocumentPropertyToRosTemplate(properties.indexDocument),
      'RoutingRules': ros.listMapper(rosBucketRoutingRulesPropertyToRosTemplate)(properties.routingRules),
      'ErrorDocument': rosBucketErrorDocumentPropertyToRosTemplate(properties.errorDocument),
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
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'DirectoryName': ros.stringToRosTemplate(properties.directoryName),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Directory`, which is used to create a directory for a specified bucket.
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
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'DomainName': ros.stringToRosTemplate(properties.domainName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Domain`.
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

/**
 * Properties for defining a `RosObjectAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
export interface RosObjectAclProps {

    /**
     * @Property bucket: Bucket name.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * @Property objectAcl: Object acl.
     */
    readonly objectAcl: string | ros.IResolvable;

    /**
     * @Property objectKey: Object key.
     */
    readonly objectKey: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosObjectAclProps`
 *
 * @param properties - the TypeScript properties of a `RosObjectAclProps`
 *
 * @returns the result of the validation.
 */
function RosObjectAclPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('objectAcl', ros.requiredValidator)(properties.objectAcl));
    if(properties.objectAcl && (typeof properties.objectAcl) !== 'object') {
        errors.collect(ros.propertyValidator('objectAcl', ros.validateAllowedValues)({
          data: properties.objectAcl,
          allowedValues: ["private","public-read","public-read-write","default"],
        }));
    }
    errors.collect(ros.propertyValidator('objectAcl', ros.validateString)(properties.objectAcl));
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('objectKey', ros.requiredValidator)(properties.objectKey));
    errors.collect(ros.propertyValidator('objectKey', ros.validateString)(properties.objectKey));
    return errors.wrap('supplied properties not correct for "RosObjectAclProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::ObjectAcl` resource
 *
 * @param properties - the TypeScript properties of a `RosObjectAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::ObjectAcl` resource.
 */
// @ts-ignore TS6133
function rosObjectAclPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosObjectAclPropsValidator(properties).assertSuccess();
    }
    return {
      'Bucket': ros.stringToRosTemplate(properties.bucket),
      'ObjectAcl': ros.stringToRosTemplate(properties.objectAcl),
      'ObjectKey': ros.stringToRosTemplate(properties.objectKey),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::ObjectAcl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ObjectAcl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
export class RosObjectAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::ObjectAcl";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucket: Bucket name.
     */
    public bucket: string | ros.IResolvable;

    /**
     * @Property objectAcl: Object acl.
     */
    public objectAcl: string | ros.IResolvable;

    /**
     * @Property objectKey: Object key.
     */
    public objectKey: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosObjectAclProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosObjectAcl.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.objectAcl = props.objectAcl;
        this.objectKey = props.objectKey;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucket: this.bucket,
            objectAcl: this.objectAcl,
            objectKey: this.objectKey,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosObjectAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWebsite`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
export interface RosWebsiteProps {

    /**
     * @Property bucketName: Bucket name.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * @Property websiteConfiguration: Website configuration.
     */
    readonly websiteConfiguration?: RosWebsite.WebsiteConfigurationProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWebsiteProps`
 *
 * @param properties - the TypeScript properties of a `RosWebsiteProps`
 *
 * @returns the result of the validation.
 */
function RosWebsitePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('websiteConfiguration', RosWebsite_WebsiteConfigurationPropertyValidator)(properties.websiteConfiguration));
    return errors.wrap('supplied properties not correct for "RosWebsiteProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website` resource
 *
 * @param properties - the TypeScript properties of a `RosWebsiteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website` resource.
 */
// @ts-ignore TS6133
function rosWebsitePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWebsitePropsValidator(properties).assertSuccess();
    }
    return {
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'WebsiteConfiguration': rosWebsiteWebsiteConfigurationPropertyToRosTemplate(properties.websiteConfiguration),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Website`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Website` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
export class RosWebsite extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Website";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucketName: Bucket name.
     */
    public bucketName: string | ros.IResolvable;

    /**
     * @Property websiteConfiguration: Website configuration.
     */
    public websiteConfiguration: RosWebsite.WebsiteConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWebsiteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWebsite.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.websiteConfiguration = props.websiteConfiguration;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucketName: this.bucketName,
            websiteConfiguration: this.websiteConfiguration,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWebsitePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface ConditionProperty {
        /**
         * @Property includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
         */
        readonly includeHeaders?: Array<RosWebsite.IncludeHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keyPrefixEquals: The prefix of the Object name to be matched.
         */
        readonly keyPrefixEquals?: string | ros.IResolvable;
        /**
         * @Property httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
         */
        readonly httpErrorCodeReturnedEquals?: string | ros.IResolvable;
        /**
         * @Property keySuffixEquals: The suffix of the Object name to be matched.
         */
        readonly keySuffixEquals?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConditionProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_ConditionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.includeHeaders && (Array.isArray(properties.includeHeaders) || (typeof properties.includeHeaders) === 'string')) {
        errors.collect(ros.propertyValidator('includeHeaders', ros.validateLength)({
            data: properties.includeHeaders.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('includeHeaders', ros.listValidator(RosWebsite_IncludeHeadersPropertyValidator))(properties.includeHeaders));
    errors.collect(ros.propertyValidator('keyPrefixEquals', ros.validateString)(properties.keyPrefixEquals));
    errors.collect(ros.propertyValidator('httpErrorCodeReturnedEquals', ros.validateString)(properties.httpErrorCodeReturnedEquals));
    errors.collect(ros.propertyValidator('keySuffixEquals', ros.validateString)(properties.keySuffixEquals));
    return errors.wrap('supplied properties not correct for "ConditionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.Condition` resource
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.Condition` resource.
 */
// @ts-ignore TS6133
function rosWebsiteConditionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_ConditionPropertyValidator(properties).assertSuccess();
    return {
      'IncludeHeaders': ros.listMapper(rosWebsiteIncludeHeadersPropertyToRosTemplate)(properties.includeHeaders),
      'KeyPrefixEquals': ros.stringToRosTemplate(properties.keyPrefixEquals),
      'HttpErrorCodeReturnedEquals': ros.stringToRosTemplate(properties.httpErrorCodeReturnedEquals),
      'KeySuffixEquals': ros.stringToRosTemplate(properties.keySuffixEquals),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface ErrorDocumentProperty {
        /**
         * @Property httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
         */
        readonly httpStatus?: string | ros.IResolvable;
        /**
         * @Property key: The default error page.
     * When an error page is specified, if the accessed Object does not exist, this error page is returned.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ErrorDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `ErrorDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_ErrorDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.httpStatus && (typeof properties.httpStatus) !== 'object') {
        errors.collect(ros.propertyValidator('httpStatus', ros.validateAllowedValues)({
          data: properties.httpStatus,
          allowedValues: ["200","404"],
        }));
    }
    errors.collect(ros.propertyValidator('httpStatus', ros.validateString)(properties.httpStatus));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "ErrorDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.ErrorDocument` resource
 *
 * @param properties - the TypeScript properties of a `ErrorDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.ErrorDocument` resource.
 */
// @ts-ignore TS6133
function rosWebsiteErrorDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_ErrorDocumentPropertyValidator(properties).assertSuccess();
    return {
      'HttpStatus': ros.stringToRosTemplate(properties.httpStatus),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface IncludeHeadersProperty {
        /**
         * @Property key: The name of the header.
         */
        readonly key: string | ros.IResolvable;
        /**
         * @Property equalsTo: The value of the header.
         */
        readonly equalsTo?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IncludeHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `IncludeHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_IncludeHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    errors.collect(ros.propertyValidator('equalsTo', ros.validateString)(properties.equalsTo));
    return errors.wrap('supplied properties not correct for "IncludeHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.IncludeHeaders` resource
 *
 * @param properties - the TypeScript properties of a `IncludeHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.IncludeHeaders` resource.
 */
// @ts-ignore TS6133
function rosWebsiteIncludeHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_IncludeHeadersPropertyValidator(properties).assertSuccess();
    return {
      'Key': ros.stringToRosTemplate(properties.key),
      'Equals': ros.stringToRosTemplate(properties.equalsTo),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface IndexDocumentProperty {
        /**
         * @Property type: Behavior when an Object that ends with a non-forward slash (\/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
     * Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com\/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:
     * - 0 (default) : Check if abc\/index.html exists (Object + forward slash (\/) + home page) and return 302 with the URL code of \/abc\/ as Location header (forward slash (\/) + Object + forward slash (\/)). If it doesn't, it will return 404 and keep checking ErrorFile.
     * - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
     * - 2: Check if abc\/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property suffix: Default home page.
     * After setting the default home page, if you visit an Object ending with a forward slash (\/), OSS will return to this default home page.
         */
        readonly suffix: string | ros.IResolvable;
        /**
         * @Property supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:
     * - true: Go to the default home page in a subdirectory.
     * - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
     * Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com\/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/index.html.
         */
        readonly supportSubDir?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IndexDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `IndexDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_IndexDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["0","1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('suffix', ros.requiredValidator)(properties.suffix));
    errors.collect(ros.propertyValidator('suffix', ros.validateString)(properties.suffix));
    if(properties.supportSubDir && (typeof properties.supportSubDir) !== 'object') {
        errors.collect(ros.propertyValidator('supportSubDir', ros.validateAllowedValues)({
          data: properties.supportSubDir,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('supportSubDir', ros.validateString)(properties.supportSubDir));
    return errors.wrap('supplied properties not correct for "IndexDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.IndexDocument` resource
 *
 * @param properties - the TypeScript properties of a `IndexDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.IndexDocument` resource.
 */
// @ts-ignore TS6133
function rosWebsiteIndexDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_IndexDocumentPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Suffix': ros.stringToRosTemplate(properties.suffix),
      'SupportSubDir': ros.stringToRosTemplate(properties.supportSubDir),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface MirrorHeadersProperty {
        /**
         * @Property passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.
     * - content-length, authorization2, authorization, range, date and other headers
     * - Headers starting with oss-\/x-oss-\/x-drs-
     * Default value: false
         */
        readonly passAll?: boolean | ros.IResolvable;
        /**
         * @Property pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly pass?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
     * Up to 10 groups can be specified for this container.
         */
        readonly sets?: Array<RosWebsite.SetsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly remove?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MirrorHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `MirrorHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_MirrorHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('passAll', ros.validateBoolean)(properties.passAll));
    if(properties.pass && (Array.isArray(properties.pass) || (typeof properties.pass) === 'string')) {
        errors.collect(ros.propertyValidator('pass', ros.validateLength)({
            data: properties.pass.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('pass', ros.listValidator(ros.validateString))(properties.pass));
    if(properties.sets && (Array.isArray(properties.sets) || (typeof properties.sets) === 'string')) {
        errors.collect(ros.propertyValidator('sets', ros.validateLength)({
            data: properties.sets.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('sets', ros.listValidator(RosWebsite_SetsPropertyValidator))(properties.sets));
    if(properties.remove && (Array.isArray(properties.remove) || (typeof properties.remove) === 'string')) {
        errors.collect(ros.propertyValidator('remove', ros.validateLength)({
            data: properties.remove.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('remove', ros.listValidator(ros.validateString))(properties.remove));
    return errors.wrap('supplied properties not correct for "MirrorHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.MirrorHeaders` resource
 *
 * @param properties - the TypeScript properties of a `MirrorHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.MirrorHeaders` resource.
 */
// @ts-ignore TS6133
function rosWebsiteMirrorHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_MirrorHeadersPropertyValidator(properties).assertSuccess();
    return {
      'PassAll': ros.booleanToRosTemplate(properties.passAll),
      'Pass': ros.listMapper(ros.stringToRosTemplate)(properties.pass),
      'Sets': ros.listMapper(rosWebsiteSetsPropertyToRosTemplate)(properties.sets),
      'Remove': ros.listMapper(ros.stringToRosTemplate)(properties.remove),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface RedirectProperty {
        /**
         * @Property mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
     * The origin URL must begin with http:\/\/ or https:\/\/ and end with a forward slash (\/), which OSS will follow with the Object name to form the return URL.
     * Name to access the Object myobject, for example, if you specify this to http:\/\/example.com\/, then back to the source URL for http:\/\/example.com\/myobject, if you specify this to http:\/\/example.com\/dir1\/, Back to the source URL as http:\/\/example.com\/dir1\/myobject.
         */
        readonly mirrorUrl?: string | ros.IResolvable;
        /**
         * @Property replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
     * Suppose to access the Object for the test, if set ReplaceKeyWith to prefix\/${key}. The suffix, is the Location head to http:\/\/example.com\/prefix\/test.suffix.
         */
        readonly replaceKeyWith?: string | ros.IResolvable;
        /**
         * @Property mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
         */
        readonly mirrorHeaders?: RosWebsite.MirrorHeadersProperty | ros.IResolvable;
        /**
         * @Property httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
     * Value: 301, 302, 307
         */
        readonly httpRedirectCode?: string | ros.IResolvable;
        /**
         * @Property enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
     * Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
     * Default value: false
         */
        readonly enableReplacePrefix?: boolean | ros.IResolvable;
        /**
         * @Property passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
     * Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
     * Valid values: true, false (default)
         */
        readonly passQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
     * For example, when we mirror back to the source, the source returns a 302 with Location specified.
     * - If set to true, OSS will continue to request the Location.
     * It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
     * - If set to false, OSS will return 302 and pass through the Location.
     * Default value: true
         */
        readonly mirrorFollowRedirect?: boolean | ros.IResolvable;
        /**
         * @Property replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
     * Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
     * Hypothesis to access the Object for ABC\/test. TXT, if set KeyPrefixEquals for ABC \/, ReplaceKeyPrefixWith for def \/, then the Location head to http:\/\/example.com\/def\/test.txt.
         */
        readonly replaceKeyPrefixWith?: string | ros.IResolvable;
        /**
         * @Property redirectType: Specifies the type of jump. The range is as follows:
     * - Mirror: Mirror back to the source.
     * - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
     * - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
         */
        readonly redirectType: string | ros.IResolvable;
        /**
         * @Property mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
     * Default value: false
         */
        readonly mirrorPassQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
     * When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
     * Default value: false
         */
        readonly mirrorCheckMd5?: boolean | ros.IResolvable;
        /**
         * @Property protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
     * If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https:\/\/example.com\/test.
     * Value: http, https
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property hostName: The domain name of the jump, the domain name should conform to the domain name specification.
     * If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https:\/\/example.com\/test.
         */
        readonly hostName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RedirectProperty`
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_RedirectPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mirrorUrl', ros.validateString)(properties.mirrorUrl));
    errors.collect(ros.propertyValidator('replaceKeyWith', ros.validateString)(properties.replaceKeyWith));
    errors.collect(ros.propertyValidator('mirrorHeaders', RosWebsite_MirrorHeadersPropertyValidator)(properties.mirrorHeaders));
    if(properties.httpRedirectCode && (typeof properties.httpRedirectCode) !== 'object') {
        errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateAllowedValues)({
          data: properties.httpRedirectCode,
          allowedValues: ["301","302","307"],
        }));
    }
    errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateString)(properties.httpRedirectCode));
    errors.collect(ros.propertyValidator('enableReplacePrefix', ros.validateBoolean)(properties.enableReplacePrefix));
    errors.collect(ros.propertyValidator('passQueryString', ros.validateBoolean)(properties.passQueryString));
    errors.collect(ros.propertyValidator('mirrorFollowRedirect', ros.validateBoolean)(properties.mirrorFollowRedirect));
    errors.collect(ros.propertyValidator('replaceKeyPrefixWith', ros.validateString)(properties.replaceKeyPrefixWith));
    errors.collect(ros.propertyValidator('redirectType', ros.requiredValidator)(properties.redirectType));
    if(properties.redirectType && (typeof properties.redirectType) !== 'object') {
        errors.collect(ros.propertyValidator('redirectType', ros.validateAllowedValues)({
          data: properties.redirectType,
          allowedValues: ["Mirror","External","AliCDN"],
        }));
    }
    errors.collect(ros.propertyValidator('redirectType', ros.validateString)(properties.redirectType));
    errors.collect(ros.propertyValidator('mirrorPassQueryString', ros.validateBoolean)(properties.mirrorPassQueryString));
    errors.collect(ros.propertyValidator('mirrorCheckMd5', ros.validateBoolean)(properties.mirrorCheckMd5));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["http","https"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    return errors.wrap('supplied properties not correct for "RedirectProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.Redirect` resource
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.Redirect` resource.
 */
// @ts-ignore TS6133
function rosWebsiteRedirectPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_RedirectPropertyValidator(properties).assertSuccess();
    return {
      'MirrorURL': ros.stringToRosTemplate(properties.mirrorUrl),
      'ReplaceKeyWith': ros.stringToRosTemplate(properties.replaceKeyWith),
      'MirrorHeaders': rosWebsiteMirrorHeadersPropertyToRosTemplate(properties.mirrorHeaders),
      'HttpRedirectCode': ros.stringToRosTemplate(properties.httpRedirectCode),
      'EnableReplacePrefix': ros.booleanToRosTemplate(properties.enableReplacePrefix),
      'PassQueryString': ros.booleanToRosTemplate(properties.passQueryString),
      'MirrorFollowRedirect': ros.booleanToRosTemplate(properties.mirrorFollowRedirect),
      'ReplaceKeyPrefixWith': ros.stringToRosTemplate(properties.replaceKeyPrefixWith),
      'RedirectType': ros.stringToRosTemplate(properties.redirectType),
      'MirrorPassQueryString': ros.booleanToRosTemplate(properties.mirrorPassQueryString),
      'MirrorCheckMd5': ros.booleanToRosTemplate(properties.mirrorCheckMd5),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'HostName': ros.stringToRosTemplate(properties.hostName),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface RoutingRulesProperty {
        /**
         * @Property condition: Conditions for matching.
     * This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
         */
        readonly condition: RosWebsite.ConditionProperty | ros.IResolvable;
        /**
         * @Property ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
         */
        readonly ruleNumber: number | ros.IResolvable;
        /**
         * @Property redirect: Specifies the action to be performed when this rule is matched.
         */
        readonly redirect: RosWebsite.RedirectProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RoutingRulesProperty`
 *
 * @param properties - the TypeScript properties of a `RoutingRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_RoutingRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.requiredValidator)(properties.condition));
    errors.collect(ros.propertyValidator('condition', RosWebsite_ConditionPropertyValidator)(properties.condition));
    errors.collect(ros.propertyValidator('ruleNumber', ros.requiredValidator)(properties.ruleNumber));
    if(properties.ruleNumber && (typeof properties.ruleNumber) !== 'object') {
        errors.collect(ros.propertyValidator('ruleNumber', ros.validateRange)({
            data: properties.ruleNumber,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('ruleNumber', ros.validateNumber)(properties.ruleNumber));
    errors.collect(ros.propertyValidator('redirect', ros.requiredValidator)(properties.redirect));
    errors.collect(ros.propertyValidator('redirect', RosWebsite_RedirectPropertyValidator)(properties.redirect));
    return errors.wrap('supplied properties not correct for "RoutingRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.RoutingRules` resource
 *
 * @param properties - the TypeScript properties of a `RoutingRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.RoutingRules` resource.
 */
// @ts-ignore TS6133
function rosWebsiteRoutingRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_RoutingRulesPropertyValidator(properties).assertSuccess();
    return {
      'Condition': rosWebsiteConditionPropertyToRosTemplate(properties.condition),
      'RuleNumber': ros.numberToRosTemplate(properties.ruleNumber),
      'Redirect': rosWebsiteRedirectPropertyToRosTemplate(properties.redirect),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface SetsProperty {
        /**
         * @Property value: Set the value of the Header to a maximum of 1024 bytes without \r\n. This only works if RedirectType is set to Mirror.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SetsProperty`
 *
 * @param properties - the TypeScript properties of a `SetsProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_SetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    if(properties.value && (Array.isArray(properties.value) || (typeof properties.value) === 'string')) {
        errors.collect(ros.propertyValidator('value', ros.validateLength)({
            data: properties.value.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    if(properties.key && (typeof properties.key) !== 'object') {
        errors.collect(ros.propertyValidator('key', ros.validateAllowedPattern)({
          data: properties.key,
          reg: /^[-a-zA-Z0-9]{1,1024}$/
        }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "SetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.Sets` resource
 *
 * @param properties - the TypeScript properties of a `SetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.Sets` resource.
 */
// @ts-ignore TS6133
function rosWebsiteSetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_SetsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosWebsite {
    /**
     * @stability external
     */
    export interface WebsiteConfigurationProperty {
        /**
         * @Property indexDocument: The properties of default home page.
         */
        readonly indexDocument?: RosWebsite.IndexDocumentProperty | ros.IResolvable;
        /**
         * @Property routingRules: The list of routing rules, up to 20.
         */
        readonly routingRules?: Array<RosWebsite.RoutingRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property errorDocument: The properties of default error page.
         */
        readonly errorDocument?: RosWebsite.ErrorDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WebsiteConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_WebsiteConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexDocument', RosWebsite_IndexDocumentPropertyValidator)(properties.indexDocument));
    if(properties.routingRules && (Array.isArray(properties.routingRules) || (typeof properties.routingRules) === 'string')) {
        errors.collect(ros.propertyValidator('routingRules', ros.validateLength)({
            data: properties.routingRules.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('routingRules', ros.listValidator(RosWebsite_RoutingRulesPropertyValidator))(properties.routingRules));
    errors.collect(ros.propertyValidator('errorDocument', RosWebsite_ErrorDocumentPropertyValidator)(properties.errorDocument));
    return errors.wrap('supplied properties not correct for "WebsiteConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.WebsiteConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Website.WebsiteConfiguration` resource.
 */
// @ts-ignore TS6133
function rosWebsiteWebsiteConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWebsite_WebsiteConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'IndexDocument': rosWebsiteIndexDocumentPropertyToRosTemplate(properties.indexDocument),
      'RoutingRules': ros.listMapper(rosWebsiteRoutingRulesPropertyToRosTemplate)(properties.routingRules),
      'ErrorDocument': rosWebsiteErrorDocumentPropertyToRosTemplate(properties.errorDocument),
    };
}
