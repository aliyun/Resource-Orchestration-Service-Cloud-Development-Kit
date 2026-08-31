"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosWebsite = exports.RosObjectAcl = exports.RosDomain = exports.RosDirectory = exports.RosBucketWorm = exports.RosBucketStyle = exports.RosBucketReplication = exports.RosBucketPublicAccessBlock = exports.RosBucketOverwriteConfig = exports.RosBucketLogging = exports.RosBucketCnameToken = exports.RosBucketAccessMonitor = exports.RosBucket = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosBucketProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketProps`
 *
 * @returns the result of the validation.
 */
function RosBucketPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.hashValidator(ros.validateAny))(properties.policy));
    errors.collect(ros.propertyValidator('enableOssHdfsService', ros.validateBoolean)(properties.enableOssHdfsService));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.storageClass && (typeof properties.storageClass) !== 'object') {
        errors.collect(ros.propertyValidator('storageClass', ros.validateAllowedValues)({
            data: properties.storageClass,
            allowedValues: ["Standard", "IA", "Archive", "ColdArchive"],
        }));
    }
    errors.collect(ros.propertyValidator('storageClass', ros.validateString)(properties.storageClass));
    if (properties.redundancyType && (typeof properties.redundancyType) !== 'object') {
        errors.collect(ros.propertyValidator('redundancyType', ros.validateAllowedValues)({
            data: properties.redundancyType,
            allowedValues: ["LRS", "ZRS"],
        }));
    }
    errors.collect(ros.propertyValidator('redundancyType', ros.validateString)(properties.redundancyType));
    errors.collect(ros.propertyValidator('lifecycleConfiguration', RosBucket_LifecycleConfigurationPropertyValidator)(properties.lifecycleConfiguration));
    errors.collect(ros.propertyValidator('serverSideEncryptionConfiguration', RosBucket_ServerSideEncryptionConfigurationPropertyValidator)(properties.serverSideEncryptionConfiguration));
    errors.collect(ros.propertyValidator('versioningConfiguration', RosBucket_VersioningConfigurationPropertyValidator)(properties.versioningConfiguration));
    errors.collect(ros.propertyValidator('blockPublicAccess', ros.validateBoolean)(properties.blockPublicAccess));
    if (properties.accessControl && (typeof properties.accessControl) !== 'object') {
        errors.collect(ros.propertyValidator('accessControl', ros.validateAllowedValues)({
            data: properties.accessControl,
            allowedValues: ["private", "public-read", "public-read-write"],
        }));
    }
    errors.collect(ros.propertyValidator('accessControl', ros.validateString)(properties.accessControl));
    errors.collect(ros.propertyValidator('corsConfiguration', RosBucket_CORSConfigurationPropertyValidator)(properties.corsConfiguration));
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('websiteConfigurationV2', RosBucket_WebsiteConfigurationV2PropertyValidator)(properties.websiteConfigurationV2));
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
function rosBucketPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketPropsValidator(properties).assertSuccess();
    }
    return {
        'BucketName': ros.stringToRosTemplate(properties.bucketName),
        'AccessControl': ros.stringToRosTemplate(properties.accessControl),
        'BlockPublicAccess': ros.booleanToRosTemplate(properties.blockPublicAccess),
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
class RosBucket extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucket.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrInternalDomainName = this.getAtt('InternalDomainName');
        this.attrName = this.getAtt('Name');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.accessControl = props.accessControl;
        this.blockPublicAccess = props.blockPublicAccess;
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
    get rosProperties() {
        return {
            bucketName: this.bucketName,
            accessControl: this.accessControl,
            blockPublicAccess: this.blockPublicAccess,
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
    renderProperties(props) {
        return rosBucketPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucket = RosBucket;
/**
 * The resource type name for this resource class.
 */
RosBucket.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Bucket";
/**
 * Determine whether the given properties match those of a `AbortMultipartUploadProperty`
 *
 * @param properties - the TypeScript properties of a `AbortMultipartUploadProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_AbortMultipartUploadPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketAbortMultipartUploadPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_AbortMultipartUploadPropertyValidator(properties).assertSuccess();
    return {
        'CreatedBeforeDate': ros.stringToRosTemplate(properties.createdBeforeDate),
        'Days': ros.numberToRosTemplate(properties.days),
    };
}
/**
 * Determine whether the given properties match those of a `CORSConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `CORSConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_CORSConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketCORSConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_CORSConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'ResponseVary': ros.booleanToRosTemplate(properties.responseVary),
        'CORSRule': ros.listMapper(rosBucketCORSRulePropertyToRosTemplate)(properties.corsRule),
    };
}
/**
 * Determine whether the given properties match those of a `CORSRuleProperty`
 *
 * @param properties - the TypeScript properties of a `CORSRuleProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_CORSRulePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketCORSRulePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_CORSRulePropertyValidator(properties).assertSuccess();
    return {
        'AllowedMethod': ros.listMapper(ros.stringToRosTemplate)(properties.allowedMethod),
        'MaxAgeSeconds': ros.numberToRosTemplate(properties.maxAgeSeconds),
        'ExposeHeader': ros.listMapper(ros.stringToRosTemplate)(properties.exposeHeader),
        'AllowedOrigin': ros.listMapper(ros.stringToRosTemplate)(properties.allowedOrigin),
        'AllowedHeader': ros.listMapper(ros.stringToRosTemplate)(properties.allowedHeader),
    };
}
/**
 * Determine whether the given properties match those of a `ConditionProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ConditionPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.includeHeaders && (Array.isArray(properties.includeHeaders) || (typeof properties.includeHeaders) === 'string')) {
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
function rosBucketConditionPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_ConditionPropertyValidator(properties).assertSuccess();
    return {
        'IncludeHeaders': ros.listMapper(rosBucketIncludeHeadersPropertyToRosTemplate)(properties.includeHeaders),
        'KeyPrefixEquals': ros.stringToRosTemplate(properties.keyPrefixEquals),
        'HttpErrorCodeReturnedEquals': ros.stringToRosTemplate(properties.httpErrorCodeReturnedEquals),
        'KeySuffixEquals': ros.stringToRosTemplate(properties.keySuffixEquals),
    };
}
/**
 * Determine whether the given properties match those of a `ErrorDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `ErrorDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ErrorDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.httpStatus && (typeof properties.httpStatus) !== 'object') {
        errors.collect(ros.propertyValidator('httpStatus', ros.validateAllowedValues)({
            data: properties.httpStatus,
            allowedValues: ["200", "404"],
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
function rosBucketErrorDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_ErrorDocumentPropertyValidator(properties).assertSuccess();
    return {
        'HttpStatus': ros.stringToRosTemplate(properties.httpStatus),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `ExpirationProperty`
 *
 * @param properties - the TypeScript properties of a `ExpirationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ExpirationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('createdBeforeDate', ros.validateString)(properties.createdBeforeDate));
    errors.collect(ros.propertyValidator('expiredObjectDeleteMarker', ros.validateBoolean)(properties.expiredObjectDeleteMarker));
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
function rosBucketExpirationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_ExpirationPropertyValidator(properties).assertSuccess();
    return {
        'CreatedBeforeDate': ros.stringToRosTemplate(properties.createdBeforeDate),
        'ExpiredObjectDeleteMarker': ros.booleanToRosTemplate(properties.expiredObjectDeleteMarker),
        'Days': ros.numberToRosTemplate(properties.days),
    };
}
/**
 * Determine whether the given properties match those of a `FilterProperty`
 *
 * @param properties - the TypeScript properties of a `FilterProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_FilterPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketFilterPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_FilterPropertyValidator(properties).assertSuccess();
    return {
        'Not': rosBucketNotPropertyToRosTemplate(properties.not),
    };
}
/**
 * Determine whether the given properties match those of a `IncludeHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `IncludeHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_IncludeHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketIncludeHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_IncludeHeadersPropertyValidator(properties).assertSuccess();
    return {
        'Key': ros.stringToRosTemplate(properties.key),
        'Equals': ros.stringToRosTemplate(properties.equalsTo),
    };
}
/**
 * Determine whether the given properties match those of a `IndexDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `IndexDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_IndexDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["0", "1", "2"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('suffix', ros.requiredValidator)(properties.suffix));
    errors.collect(ros.propertyValidator('suffix', ros.validateString)(properties.suffix));
    if (properties.supportSubDir && (typeof properties.supportSubDir) !== 'object') {
        errors.collect(ros.propertyValidator('supportSubDir', ros.validateAllowedValues)({
            data: properties.supportSubDir,
            allowedValues: ["true", "false"],
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
function rosBucketIndexDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_IndexDocumentPropertyValidator(properties).assertSuccess();
    return {
        'Type': ros.stringToRosTemplate(properties.type),
        'Suffix': ros.stringToRosTemplate(properties.suffix),
        'SupportSubDir': ros.stringToRosTemplate(properties.supportSubDir),
    };
}
/**
 * Determine whether the given properties match those of a `LifecycleConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LifecycleConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_LifecycleConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketLifecycleConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_LifecycleConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'Rule': ros.listMapper(rosBucketRulePropertyToRosTemplate)(properties.rule),
    };
}
/**
 * Determine whether the given properties match those of a `LoggingConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LoggingConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_LoggingConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketLoggingConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_LoggingConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'TargetPrefix': ros.stringToRosTemplate(properties.targetPrefix),
        'TargetBucket': ros.stringToRosTemplate(properties.targetBucket),
    };
}
/**
 * Determine whether the given properties match those of a `MirrorHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `MirrorHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_MirrorHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('passAll', ros.validateBoolean)(properties.passAll));
    if (properties.pass && (Array.isArray(properties.pass) || (typeof properties.pass) === 'string')) {
        errors.collect(ros.propertyValidator('pass', ros.validateLength)({
            data: properties.pass.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('pass', ros.listValidator(ros.validateString))(properties.pass));
    if (properties.sets && (Array.isArray(properties.sets) || (typeof properties.sets) === 'string')) {
        errors.collect(ros.propertyValidator('sets', ros.validateLength)({
            data: properties.sets.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('sets', ros.listValidator(RosBucket_SetsPropertyValidator))(properties.sets));
    if (properties.remove && (Array.isArray(properties.remove) || (typeof properties.remove) === 'string')) {
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
function rosBucketMirrorHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_MirrorHeadersPropertyValidator(properties).assertSuccess();
    return {
        'PassAll': ros.booleanToRosTemplate(properties.passAll),
        'Pass': ros.listMapper(ros.stringToRosTemplate)(properties.pass),
        'Sets': ros.listMapper(rosBucketSetsPropertyToRosTemplate)(properties.sets),
        'Remove': ros.listMapper(ros.stringToRosTemplate)(properties.remove),
    };
}
/**
 * Determine whether the given properties match those of a `NotProperty`
 *
 * @param properties - the TypeScript properties of a `NotProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_NotPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    if (properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
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
function rosBucketNotPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_NotPropertyValidator(properties).assertSuccess();
    return {
        'Prefix': ros.stringToRosTemplate(properties.prefix),
        'Tag': ros.listMapper(ros.stringToRosTemplate)(properties.tag),
    };
}
/**
 * Determine whether the given properties match those of a `RedirectProperty`
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RedirectPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mirrorUrl', ros.validateString)(properties.mirrorUrl));
    errors.collect(ros.propertyValidator('replaceKeyWith', ros.validateString)(properties.replaceKeyWith));
    errors.collect(ros.propertyValidator('mirrorHeaders', RosBucket_MirrorHeadersPropertyValidator)(properties.mirrorHeaders));
    if (properties.httpRedirectCode && (typeof properties.httpRedirectCode) !== 'object') {
        errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateAllowedValues)({
            data: properties.httpRedirectCode,
            allowedValues: ["301", "302", "307"],
        }));
    }
    errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateString)(properties.httpRedirectCode));
    errors.collect(ros.propertyValidator('enableReplacePrefix', ros.validateBoolean)(properties.enableReplacePrefix));
    errors.collect(ros.propertyValidator('passQueryString', ros.validateBoolean)(properties.passQueryString));
    errors.collect(ros.propertyValidator('mirrorFollowRedirect', ros.validateBoolean)(properties.mirrorFollowRedirect));
    errors.collect(ros.propertyValidator('replaceKeyPrefixWith', ros.validateString)(properties.replaceKeyPrefixWith));
    errors.collect(ros.propertyValidator('redirectType', ros.requiredValidator)(properties.redirectType));
    if (properties.redirectType && (typeof properties.redirectType) !== 'object') {
        errors.collect(ros.propertyValidator('redirectType', ros.validateAllowedValues)({
            data: properties.redirectType,
            allowedValues: ["Mirror", "External", "AliCDN"],
        }));
    }
    errors.collect(ros.propertyValidator('redirectType', ros.validateString)(properties.redirectType));
    errors.collect(ros.propertyValidator('mirrorPassQueryString', ros.validateBoolean)(properties.mirrorPassQueryString));
    errors.collect(ros.propertyValidator('mirrorCheckMd5', ros.validateBoolean)(properties.mirrorCheckMd5));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["http", "https"],
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
function rosBucketRedirectPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
/**
 * Determine whether the given properties match those of a `RefererConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `RefererConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RefererConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketRefererConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_RefererConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'RefererList': ros.listMapper(ros.objectToRosTemplate)(properties.refererList),
        'AllowEmptyReferer': ros.booleanToRosTemplate(properties.allowEmptyReferer),
    };
}
/**
 * Determine whether the given properties match those of a `RoutingRulesProperty`
 *
 * @param properties - the TypeScript properties of a `RoutingRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RoutingRulesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.requiredValidator)(properties.condition));
    errors.collect(ros.propertyValidator('condition', RosBucket_ConditionPropertyValidator)(properties.condition));
    errors.collect(ros.propertyValidator('ruleNumber', ros.requiredValidator)(properties.ruleNumber));
    if (properties.ruleNumber && (typeof properties.ruleNumber) !== 'object') {
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
function rosBucketRoutingRulesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_RoutingRulesPropertyValidator(properties).assertSuccess();
    return {
        'Condition': rosBucketConditionPropertyToRosTemplate(properties.condition),
        'RuleNumber': ros.numberToRosTemplate(properties.ruleNumber),
        'Redirect': rosBucketRedirectPropertyToRosTemplate(properties.redirect),
    };
}
/**
 * Determine whether the given properties match those of a `RuleProperty`
 *
 * @param properties - the TypeScript properties of a `RuleProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_RulePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["Enabled", "Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('abortMultipartUpload', RosBucket_AbortMultipartUploadPropertyValidator)(properties.abortMultipartUpload));
    errors.collect(ros.propertyValidator('filter', RosBucket_FilterPropertyValidator)(properties.filter));
    errors.collect(ros.propertyValidator('expiration', RosBucket_ExpirationPropertyValidator)(properties.expiration));
    if (properties.transition && (Array.isArray(properties.transition) || (typeof properties.transition) === 'string')) {
        errors.collect(ros.propertyValidator('transition', ros.validateLength)({
            data: properties.transition.length,
            min: 1,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('transition', ros.listValidator(RosBucket_TransitionPropertyValidator))(properties.transition));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('prefix', ros.requiredValidator)(properties.prefix));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
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
function rosBucketRulePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_RulePropertyValidator(properties).assertSuccess();
    return {
        'Status': ros.stringToRosTemplate(properties.status),
        'AbortMultipartUpload': rosBucketAbortMultipartUploadPropertyToRosTemplate(properties.abortMultipartUpload),
        'Filter': rosBucketFilterPropertyToRosTemplate(properties.filter),
        'Expiration': rosBucketExpirationPropertyToRosTemplate(properties.expiration),
        'Transition': ros.listMapper(rosBucketTransitionPropertyToRosTemplate)(properties.transition),
        'ID': ros.stringToRosTemplate(properties.id),
        'Prefix': ros.stringToRosTemplate(properties.prefix),
    };
}
/**
 * Determine whether the given properties match those of a `ServerSideEncryptionConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ServerSideEncryptionConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_ServerSideEncryptionConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sseAlgorithm', ros.requiredValidator)(properties.sseAlgorithm));
    if (properties.sseAlgorithm && (typeof properties.sseAlgorithm) !== 'object') {
        errors.collect(ros.propertyValidator('sseAlgorithm', ros.validateAllowedValues)({
            data: properties.sseAlgorithm,
            allowedValues: ["KMS", "AES256", "SM4"],
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
function rosBucketServerSideEncryptionConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_ServerSideEncryptionConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'SSEAlgorithm': ros.stringToRosTemplate(properties.sseAlgorithm),
        'KMSMasterKeyID': ros.stringToRosTemplate(properties.kmsMasterKeyId),
    };
}
/**
 * Determine whether the given properties match those of a `SetsProperty`
 *
 * @param properties - the TypeScript properties of a `SetsProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_SetsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    if (properties.value && (Array.isArray(properties.value) || (typeof properties.value) === 'string')) {
        errors.collect(ros.propertyValidator('value', ros.validateLength)({
            data: properties.value.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    if (properties.key && (typeof properties.key) !== 'object') {
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
function rosBucketSetsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_SetsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `TransitionProperty`
 *
 * @param properties - the TypeScript properties of a `TransitionProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_TransitionPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('createdBeforeDate', ros.validateString)(properties.createdBeforeDate));
    errors.collect(ros.propertyValidator('returnToStdWhenVisit', ros.validateBoolean)(properties.returnToStdWhenVisit));
    if (properties.storageClass && (typeof properties.storageClass) !== 'object') {
        errors.collect(ros.propertyValidator('storageClass', ros.validateAllowedValues)({
            data: properties.storageClass,
            allowedValues: ["IA", "Archive", "ColdArchive", "DeepColdArchive"],
        }));
    }
    errors.collect(ros.propertyValidator('storageClass', ros.validateString)(properties.storageClass));
    if (properties.days && (typeof properties.days) !== 'object') {
        errors.collect(ros.propertyValidator('days', ros.validateRange)({
            data: properties.days,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('days', ros.validateNumber)(properties.days));
    errors.collect(ros.propertyValidator('allowSmallFile', ros.validateBoolean)(properties.allowSmallFile));
    errors.collect(ros.propertyValidator('isAccessTime', ros.validateBoolean)(properties.isAccessTime));
    return errors.wrap('supplied properties not correct for "TransitionProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Transition` resource
 *
 * @param properties - the TypeScript properties of a `TransitionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::Bucket.Transition` resource.
 */
// @ts-ignore TS6133
function rosBucketTransitionPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_TransitionPropertyValidator(properties).assertSuccess();
    return {
        'CreatedBeforeDate': ros.stringToRosTemplate(properties.createdBeforeDate),
        'ReturnToStdWhenVisit': ros.booleanToRosTemplate(properties.returnToStdWhenVisit),
        'StorageClass': ros.stringToRosTemplate(properties.storageClass),
        'Days': ros.numberToRosTemplate(properties.days),
        'AllowSmallFile': ros.booleanToRosTemplate(properties.allowSmallFile),
        'IsAccessTime': ros.booleanToRosTemplate(properties.isAccessTime),
    };
}
/**
 * Determine whether the given properties match those of a `VersioningConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `VersioningConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_VersioningConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.requiredValidator)(properties.status));
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["Enabled", "Suspended"],
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
function rosBucketVersioningConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_VersioningConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'Status': ros.stringToRosTemplate(properties.status),
    };
}
/**
 * Determine whether the given properties match those of a `WebsiteConfigurationV2Property`
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationV2Property`
 *
 * @returns the result of the validation.
 */
function RosBucket_WebsiteConfigurationV2PropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexDocument', RosBucket_IndexDocumentPropertyValidator)(properties.indexDocument));
    if (properties.routingRules && (Array.isArray(properties.routingRules) || (typeof properties.routingRules) === 'string')) {
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
function rosBucketWebsiteConfigurationV2PropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_WebsiteConfigurationV2PropertyValidator(properties).assertSuccess();
    return {
        'IndexDocument': rosBucketIndexDocumentPropertyToRosTemplate(properties.indexDocument),
        'RoutingRules': ros.listMapper(rosBucketRoutingRulesPropertyToRosTemplate)(properties.routingRules),
        'ErrorDocument': rosBucketErrorDocumentPropertyToRosTemplate(properties.errorDocument),
    };
}
/**
 * Determine whether the given properties match those of a `RosBucketAccessMonitorProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketAccessMonitorProps`
 *
 * @returns the result of the validation.
 */
function RosBucketAccessMonitorPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    return errors.wrap('supplied properties not correct for "RosBucketAccessMonitorProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketAccessMonitor` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketAccessMonitorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketAccessMonitor` resource.
 */
// @ts-ignore TS6133
function rosBucketAccessMonitorPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketAccessMonitorPropsValidator(properties).assertSuccess();
    }
    return {
        'Bucket': ros.stringToRosTemplate(properties.bucket),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketAccessMonitor`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketAccessMonitor` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketaccessmonitor
 */
class RosBucketAccessMonitor extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketAccessMonitor.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
    }
    get rosProperties() {
        return {
            bucket: this.bucket,
        };
    }
    renderProperties(props) {
        return rosBucketAccessMonitorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketAccessMonitor = RosBucketAccessMonitor;
/**
 * The resource type name for this resource class.
 */
RosBucketAccessMonitor.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketAccessMonitor";
/**
 * Determine whether the given properties match those of a `RosBucketCnameTokenProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketCnameTokenProps`
 *
 * @returns the result of the validation.
 */
function RosBucketCnameTokenPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RosBucketCnameTokenProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketCnameToken` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketCnameTokenProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketCnameToken` resource.
 */
// @ts-ignore TS6133
function rosBucketCnameTokenPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketCnameTokenPropsValidator(properties).assertSuccess();
    }
    return {
        'Bucket': ros.stringToRosTemplate(properties.bucket),
        'Domain': ros.stringToRosTemplate(properties.domain),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketCnameToken`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketCnameToken` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketcnametoken
 */
class RosBucketCnameToken extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketCnameToken.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBucket = this.getAtt('Bucket');
        this.attrDomain = this.getAtt('Domain');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrToken = this.getAtt('Token');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.domain = props.domain;
    }
    get rosProperties() {
        return {
            bucket: this.bucket,
            domain: this.domain,
        };
    }
    renderProperties(props) {
        return rosBucketCnameTokenPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketCnameToken = RosBucketCnameToken;
/**
 * The resource type name for this resource class.
 */
RosBucketCnameToken.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketCnameToken";
/**
 * Determine whether the given properties match those of a `RosBucketLoggingProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketLoggingProps`
 *
 * @returns the result of the validation.
 */
function RosBucketLoggingPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loggingRole', ros.validateString)(properties.loggingRole));
    errors.collect(ros.propertyValidator('targetPrefix', ros.validateString)(properties.targetPrefix));
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('targetBucket', ros.requiredValidator)(properties.targetBucket));
    errors.collect(ros.propertyValidator('targetBucket', ros.validateString)(properties.targetBucket));
    return errors.wrap('supplied properties not correct for "RosBucketLoggingProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketLogging` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketLoggingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketLogging` resource.
 */
// @ts-ignore TS6133
function rosBucketLoggingPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketLoggingPropsValidator(properties).assertSuccess();
    }
    return {
        'Bucket': ros.stringToRosTemplate(properties.bucket),
        'TargetBucket': ros.stringToRosTemplate(properties.targetBucket),
        'LoggingRole': ros.stringToRosTemplate(properties.loggingRole),
        'TargetPrefix': ros.stringToRosTemplate(properties.targetPrefix),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketLogging`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketLogging` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
 */
class RosBucketLogging extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketLogging.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoggingRole = this.getAtt('LoggingRole');
        this.attrTargetBucket = this.getAtt('TargetBucket');
        this.attrTargetPrefix = this.getAtt('TargetPrefix');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.targetBucket = props.targetBucket;
        this.loggingRole = props.loggingRole;
        this.targetPrefix = props.targetPrefix;
    }
    get rosProperties() {
        return {
            bucket: this.bucket,
            targetBucket: this.targetBucket,
            loggingRole: this.loggingRole,
            targetPrefix: this.targetPrefix,
        };
    }
    renderProperties(props) {
        return rosBucketLoggingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketLogging = RosBucketLogging;
/**
 * The resource type name for this resource class.
 */
RosBucketLogging.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketLogging";
/**
 * Determine whether the given properties match those of a `RosBucketOverwriteConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketOverwriteConfigProps`
 *
 * @returns the result of the validation.
 */
function RosBucketOverwriteConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    if (properties.rule && (Array.isArray(properties.rule) || (typeof properties.rule) === 'string')) {
        errors.collect(ros.propertyValidator('rule', ros.validateLength)({
            data: properties.rule.length,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('rule', ros.listValidator(RosBucketOverwriteConfig_RulePropertyValidator))(properties.rule));
    return errors.wrap('supplied properties not correct for "RosBucketOverwriteConfigProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketOverwriteConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketOverwriteConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketOverwriteConfig` resource.
 */
// @ts-ignore TS6133
function rosBucketOverwriteConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketOverwriteConfigPropsValidator(properties).assertSuccess();
    }
    return {
        'Bucket': ros.stringToRosTemplate(properties.bucket),
        'Rule': ros.listMapper(rosBucketOverwriteConfigRulePropertyToRosTemplate)(properties.rule),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketOverwriteConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketOverwriteConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketoverwriteconfig
 */
class RosBucketOverwriteConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketOverwriteConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRule = this.getAtt('Rule');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.rule = props.rule;
    }
    get rosProperties() {
        return {
            bucket: this.bucket,
            rule: this.rule,
        };
    }
    renderProperties(props) {
        return rosBucketOverwriteConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketOverwriteConfig = RosBucketOverwriteConfig;
/**
 * The resource type name for this resource class.
 */
RosBucketOverwriteConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketOverwriteConfig";
/**
 * Determine whether the given properties match those of a `PrincipalsProperty`
 *
 * @param properties - the TypeScript properties of a `PrincipalsProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketOverwriteConfig_PrincipalsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.principal && (Array.isArray(properties.principal) || (typeof properties.principal) === 'string')) {
        errors.collect(ros.propertyValidator('principal', ros.validateLength)({
            data: properties.principal.length,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('principal', ros.listValidator(ros.validateString))(properties.principal));
    return errors.wrap('supplied properties not correct for "PrincipalsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketOverwriteConfig.Principals` resource
 *
 * @param properties - the TypeScript properties of a `PrincipalsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketOverwriteConfig.Principals` resource.
 */
// @ts-ignore TS6133
function rosBucketOverwriteConfigPrincipalsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketOverwriteConfig_PrincipalsPropertyValidator(properties).assertSuccess();
    return {
        'Principal': ros.listMapper(ros.stringToRosTemplate)(properties.principal),
    };
}
/**
 * Determine whether the given properties match those of a `RuleProperty`
 *
 * @param properties - the TypeScript properties of a `RuleProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketOverwriteConfig_RulePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.action && (typeof properties.action) !== 'object') {
        errors.collect(ros.propertyValidator('action', ros.validateAllowedValues)({
            data: properties.action,
            allowedValues: ["forbid"],
        }));
    }
    errors.collect(ros.propertyValidator('action', ros.validateString)(properties.action));
    errors.collect(ros.propertyValidator('suffix', ros.validateString)(properties.suffix));
    errors.collect(ros.propertyValidator('principals', RosBucketOverwriteConfig_PrincipalsPropertyValidator)(properties.principals));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    errors.collect(ros.propertyValidator('identity', ros.validateString)(properties.identity));
    return errors.wrap('supplied properties not correct for "RuleProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketOverwriteConfig.Rule` resource
 *
 * @param properties - the TypeScript properties of a `RuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketOverwriteConfig.Rule` resource.
 */
// @ts-ignore TS6133
function rosBucketOverwriteConfigRulePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketOverwriteConfig_RulePropertyValidator(properties).assertSuccess();
    return {
        'Action': ros.stringToRosTemplate(properties.action),
        'Suffix': ros.stringToRosTemplate(properties.suffix),
        'Principals': rosBucketOverwriteConfigPrincipalsPropertyToRosTemplate(properties.principals),
        'Prefix': ros.stringToRosTemplate(properties.prefix),
        'Id': ros.stringToRosTemplate(properties.identity),
    };
}
/**
 * Determine whether the given properties match those of a `RosBucketPublicAccessBlockProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketPublicAccessBlockProps`
 *
 * @returns the result of the validation.
 */
function RosBucketPublicAccessBlockPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('blockPublicAccess', ros.requiredValidator)(properties.blockPublicAccess));
    errors.collect(ros.propertyValidator('blockPublicAccess', ros.validateBoolean)(properties.blockPublicAccess));
    return errors.wrap('supplied properties not correct for "RosBucketPublicAccessBlockProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketPublicAccessBlock` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketPublicAccessBlockProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketPublicAccessBlock` resource.
 */
// @ts-ignore TS6133
function rosBucketPublicAccessBlockPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketPublicAccessBlockPropsValidator(properties).assertSuccess();
    }
    return {
        'BlockPublicAccess': ros.booleanToRosTemplate(properties.blockPublicAccess),
        'Bucket': ros.stringToRosTemplate(properties.bucket),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketPublicAccessBlock`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketPublicAccessBlock` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
 */
class RosBucketPublicAccessBlock extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketPublicAccessBlock.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBlockPublicAccess = this.getAtt('BlockPublicAccess');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.blockPublicAccess = props.blockPublicAccess;
        this.bucket = props.bucket;
    }
    get rosProperties() {
        return {
            blockPublicAccess: this.blockPublicAccess,
            bucket: this.bucket,
        };
    }
    renderProperties(props) {
        return rosBucketPublicAccessBlockPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketPublicAccessBlock = RosBucketPublicAccessBlock;
/**
 * The resource type name for this resource class.
 */
RosBucketPublicAccessBlock.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketPublicAccessBlock";
/**
 * Determine whether the given properties match those of a `RosBucketReplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketReplicationProps`
 *
 * @returns the result of the validation.
 */
function RosBucketReplicationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('replicationConfiguration', ros.requiredValidator)(properties.replicationConfiguration));
    errors.collect(ros.propertyValidator('replicationConfiguration', RosBucketReplication_ReplicationConfigurationPropertyValidator)(properties.replicationConfiguration));
    return errors.wrap('supplied properties not correct for "RosBucketReplicationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketReplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketReplicationPropsValidator(properties).assertSuccess();
    }
    return {
        'BucketName': ros.stringToRosTemplate(properties.bucketName),
        'ReplicationConfiguration': rosBucketReplicationReplicationConfigurationPropertyToRosTemplate(properties.replicationConfiguration),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketReplication`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketReplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
 */
class RosBucketReplication extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketReplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.replicationConfiguration = props.replicationConfiguration;
    }
    get rosProperties() {
        return {
            bucketName: this.bucketName,
            replicationConfiguration: this.replicationConfiguration,
        };
    }
    renderProperties(props) {
        return rosBucketReplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketReplication = RosBucketReplication;
/**
 * The resource type name for this resource class.
 */
RosBucketReplication.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketReplication";
/**
 * Determine whether the given properties match those of a `DestinationProperty`
 *
 * @param properties - the TypeScript properties of a `DestinationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketReplication_DestinationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('transferType', ros.requiredValidator)(properties.transferType));
    if (properties.transferType && (typeof properties.transferType) !== 'object') {
        errors.collect(ros.propertyValidator('transferType', ros.validateAllowedValues)({
            data: properties.transferType,
            allowedValues: ["internal", "accelerate", "oss_acc"],
        }));
    }
    errors.collect(ros.propertyValidator('transferType', ros.validateString)(properties.transferType));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "DestinationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.Destination` resource
 *
 * @param properties - the TypeScript properties of a `DestinationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.Destination` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationDestinationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketReplication_DestinationPropertyValidator(properties).assertSuccess();
    return {
        'Bucket': ros.stringToRosTemplate(properties.bucket),
        'TransferType': ros.stringToRosTemplate(properties.transferType),
        'Location': ros.stringToRosTemplate(properties.location),
    };
}
/**
 * Determine whether the given properties match those of a `EncryptionConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `EncryptionConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketReplication_EncryptionConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replicaKmsKeyId', ros.validateString)(properties.replicaKmsKeyId));
    return errors.wrap('supplied properties not correct for "EncryptionConfigurationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.EncryptionConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `EncryptionConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.EncryptionConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationEncryptionConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketReplication_EncryptionConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'ReplicaKmsKeyID': ros.stringToRosTemplate(properties.replicaKmsKeyId),
    };
}
/**
 * Determine whether the given properties match those of a `RTCProperty`
 *
 * @param properties - the TypeScript properties of a `RTCProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketReplication_RTCPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["enabled", "disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    return errors.wrap('supplied properties not correct for "RTCProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.RTC` resource
 *
 * @param properties - the TypeScript properties of a `RTCProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.RTC` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationRTCPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketReplication_RTCPropertyValidator(properties).assertSuccess();
    return {
        'Status': ros.stringToRosTemplate(properties.status),
    };
}
/**
 * Determine whether the given properties match those of a `ReplicationConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ReplicationConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketReplication_ReplicationConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rule', ros.requiredValidator)(properties.rule));
    errors.collect(ros.propertyValidator('rule', RosBucketReplication_RulePropertyValidator)(properties.rule));
    return errors.wrap('supplied properties not correct for "ReplicationConfigurationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.ReplicationConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `ReplicationConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.ReplicationConfiguration` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationReplicationConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketReplication_ReplicationConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'Rule': rosBucketReplicationRulePropertyToRosTemplate(properties.rule),
    };
}
/**
 * Determine whether the given properties match those of a `RuleProperty`
 *
 * @param properties - the TypeScript properties of a `RuleProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketReplication_RulePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rtc', RosBucketReplication_RTCPropertyValidator)(properties.rtc));
    errors.collect(ros.propertyValidator('destination', ros.requiredValidator)(properties.destination));
    errors.collect(ros.propertyValidator('destination', RosBucketReplication_DestinationPropertyValidator)(properties.destination));
    if (properties.action && (typeof properties.action) !== 'object') {
        errors.collect(ros.propertyValidator('action', ros.validateAllowedValues)({
            data: properties.action,
            allowedValues: ["ALL", "PUT", "DELETE"],
        }));
    }
    errors.collect(ros.propertyValidator('action', ros.validateString)(properties.action));
    errors.collect(ros.propertyValidator('syncRole', ros.validateString)(properties.syncRole));
    errors.collect(ros.propertyValidator('encryptionConfiguration', RosBucketReplication_EncryptionConfigurationPropertyValidator)(properties.encryptionConfiguration));
    errors.collect(ros.propertyValidator('sourceSelectionCriteria', RosBucketReplication_SourceSelectionCriteriaPropertyValidator)(properties.sourceSelectionCriteria));
    errors.collect(ros.propertyValidator('prefixSet', ros.listValidator(ros.validateString))(properties.prefixSet));
    if (properties.historicalObjectReplication && (typeof properties.historicalObjectReplication) !== 'object') {
        errors.collect(ros.propertyValidator('historicalObjectReplication', ros.validateAllowedValues)({
            data: properties.historicalObjectReplication,
            allowedValues: ["enabled", "disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('historicalObjectReplication', ros.validateString)(properties.historicalObjectReplication));
    errors.collect(ros.propertyValidator('identity', ros.validateString)(properties.identity));
    return errors.wrap('supplied properties not correct for "RuleProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.Rule` resource
 *
 * @param properties - the TypeScript properties of a `RuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.Rule` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationRulePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketReplication_RulePropertyValidator(properties).assertSuccess();
    return {
        'RTC': rosBucketReplicationRTCPropertyToRosTemplate(properties.rtc),
        'Destination': rosBucketReplicationDestinationPropertyToRosTemplate(properties.destination),
        'Action': ros.stringToRosTemplate(properties.action),
        'SyncRole': ros.stringToRosTemplate(properties.syncRole),
        'EncryptionConfiguration': rosBucketReplicationEncryptionConfigurationPropertyToRosTemplate(properties.encryptionConfiguration),
        'SourceSelectionCriteria': rosBucketReplicationSourceSelectionCriteriaPropertyToRosTemplate(properties.sourceSelectionCriteria),
        'PrefixSet': ros.listMapper(ros.stringToRosTemplate)(properties.prefixSet),
        'HistoricalObjectReplication': ros.stringToRosTemplate(properties.historicalObjectReplication),
        'Id': ros.stringToRosTemplate(properties.identity),
    };
}
/**
 * Determine whether the given properties match those of a `SourceSelectionCriteriaProperty`
 *
 * @param properties - the TypeScript properties of a `SourceSelectionCriteriaProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketReplication_SourceSelectionCriteriaPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sseKmsEncryptedObjects', RosBucketReplication_SseKmsEncryptedObjectsPropertyValidator)(properties.sseKmsEncryptedObjects));
    return errors.wrap('supplied properties not correct for "SourceSelectionCriteriaProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.SourceSelectionCriteria` resource
 *
 * @param properties - the TypeScript properties of a `SourceSelectionCriteriaProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.SourceSelectionCriteria` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationSourceSelectionCriteriaPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketReplication_SourceSelectionCriteriaPropertyValidator(properties).assertSuccess();
    return {
        'SseKmsEncryptedObjects': rosBucketReplicationSseKmsEncryptedObjectsPropertyToRosTemplate(properties.sseKmsEncryptedObjects),
    };
}
/**
 * Determine whether the given properties match those of a `SseKmsEncryptedObjectsProperty`
 *
 * @param properties - the TypeScript properties of a `SseKmsEncryptedObjectsProperty`
 *
 * @returns the result of the validation.
 */
function RosBucketReplication_SseKmsEncryptedObjectsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["Enabled", "Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    return errors.wrap('supplied properties not correct for "SseKmsEncryptedObjectsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.SseKmsEncryptedObjects` resource
 *
 * @param properties - the TypeScript properties of a `SseKmsEncryptedObjectsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketReplication.SseKmsEncryptedObjects` resource.
 */
// @ts-ignore TS6133
function rosBucketReplicationSseKmsEncryptedObjectsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucketReplication_SseKmsEncryptedObjectsPropertyValidator(properties).assertSuccess();
    return {
        'Status': ros.stringToRosTemplate(properties.status),
    };
}
/**
 * Determine whether the given properties match those of a `RosBucketStyleProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketStyleProps`
 *
 * @returns the result of the validation.
 */
function RosBucketStylePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
            data: properties.category,
            allowedValues: ["document", "video", "image"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('styleName', ros.requiredValidator)(properties.styleName));
    errors.collect(ros.propertyValidator('styleName', ros.validateString)(properties.styleName));
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    return errors.wrap('supplied properties not correct for "RosBucketStyleProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketStyle` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketStyleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketStyle` resource.
 */
// @ts-ignore TS6133
function rosBucketStylePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketStylePropsValidator(properties).assertSuccess();
    }
    return {
        'Bucket': ros.stringToRosTemplate(properties.bucket),
        'Content': ros.stringToRosTemplate(properties.content),
        'StyleName': ros.stringToRosTemplate(properties.styleName),
        'Category': ros.stringToRosTemplate(properties.category),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketStyle`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketStyle` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
 */
class RosBucketStyle extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketStyle.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCategory = this.getAtt('Category');
        this.attrContent = this.getAtt('Content');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrLastModifyTime = this.getAtt('LastModifyTime');
        this.attrStyleName = this.getAtt('StyleName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.content = props.content;
        this.styleName = props.styleName;
        this.category = props.category;
    }
    get rosProperties() {
        return {
            bucket: this.bucket,
            content: this.content,
            styleName: this.styleName,
            category: this.category,
        };
    }
    renderProperties(props) {
        return rosBucketStylePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketStyle = RosBucketStyle;
/**
 * The resource type name for this resource class.
 */
RosBucketStyle.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketStyle";
/**
 * Determine whether the given properties match those of a `RosBucketWormProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketWormProps`
 *
 * @returns the result of the validation.
 */
function RosBucketWormPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('retentionPeriodInDays', ros.requiredValidator)(properties.retentionPeriodInDays));
    if (properties.retentionPeriodInDays && (typeof properties.retentionPeriodInDays) !== 'object') {
        errors.collect(ros.propertyValidator('retentionPeriodInDays', ros.validateRange)({
            data: properties.retentionPeriodInDays,
            min: 1,
            max: 25567,
        }));
    }
    errors.collect(ros.propertyValidator('retentionPeriodInDays', ros.validateNumber)(properties.retentionPeriodInDays));
    return errors.wrap('supplied properties not correct for "RosBucketWormProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketWorm` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketWormProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OSS::BucketWorm` resource.
 */
// @ts-ignore TS6133
function rosBucketWormPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBucketWormPropsValidator(properties).assertSuccess();
    }
    return {
        'Bucket': ros.stringToRosTemplate(properties.bucket),
        'RetentionPeriodInDays': ros.numberToRosTemplate(properties.retentionPeriodInDays),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketWorm`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketWorm` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
 */
class RosBucketWorm extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucketWorm.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrExpirationDate = this.getAtt('ExpirationDate');
        this.attrRetentionPeriodInDays = this.getAtt('RetentionPeriodInDays');
        this.attrWormId = this.getAtt('WormId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.retentionPeriodInDays = props.retentionPeriodInDays;
    }
    get rosProperties() {
        return {
            bucket: this.bucket,
            retentionPeriodInDays: this.retentionPeriodInDays,
        };
    }
    renderProperties(props) {
        return rosBucketWormPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBucketWorm = RosBucketWorm;
/**
 * The resource type name for this resource class.
 */
RosBucketWorm.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketWorm";
/**
 * Determine whether the given properties match those of a `RosDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosDirectoryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('directoryName', ros.requiredValidator)(properties.directoryName));
    if (properties.directoryName && (typeof properties.directoryName) !== 'object') {
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
function rosDirectoryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDirectoryPropsValidator(properties).assertSuccess();
    }
    return {
        'BucketName': ros.stringToRosTemplate(properties.bucketName),
        'DirectoryName': ros.stringToRosTemplate(properties.directoryName),
        'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Directory`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Directory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
class RosDirectory extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBucketName = this.getAtt('BucketName');
        this.attrDirectoryName = this.getAtt('DirectoryName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.directoryName = props.directoryName;
        this.deletionForce = props.deletionForce;
    }
    get rosProperties() {
        return {
            bucketName: this.bucketName,
            directoryName: this.directoryName,
            deletionForce: this.deletionForce,
        };
    }
    renderProperties(props) {
        return rosDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDirectory = RosDirectory;
/**
 * The resource type name for this resource class.
 */
RosDirectory.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Directory";
/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    if (properties.domainName && (Array.isArray(properties.domainName) || (typeof properties.domainName) === 'string')) {
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
function rosDomainPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosDomain extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBucketName = this.getAtt('BucketName');
        this.attrDomainName = this.getAtt('DomainName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.domainName = props.domainName;
    }
    get rosProperties() {
        return {
            bucketName: this.bucketName,
            domainName: this.domainName,
        };
    }
    renderProperties(props) {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDomain = RosDomain;
/**
 * The resource type name for this resource class.
 */
RosDomain.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Domain";
/**
 * Determine whether the given properties match those of a `RosObjectAclProps`
 *
 * @param properties - the TypeScript properties of a `RosObjectAclProps`
 *
 * @returns the result of the validation.
 */
function RosObjectAclPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('objectAcl', ros.requiredValidator)(properties.objectAcl));
    if (properties.objectAcl && (typeof properties.objectAcl) !== 'object') {
        errors.collect(ros.propertyValidator('objectAcl', ros.validateAllowedValues)({
            data: properties.objectAcl,
            allowedValues: ["private", "public-read", "public-read-write", "default"],
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
function rosObjectAclPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosObjectAcl extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosObjectAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.objectAcl = props.objectAcl;
        this.objectKey = props.objectKey;
    }
    get rosProperties() {
        return {
            bucket: this.bucket,
            objectAcl: this.objectAcl,
            objectKey: this.objectKey,
        };
    }
    renderProperties(props) {
        return rosObjectAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosObjectAcl = RosObjectAcl;
/**
 * The resource type name for this resource class.
 */
RosObjectAcl.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::ObjectAcl";
/**
 * Determine whether the given properties match those of a `RosWebsiteProps`
 *
 * @param properties - the TypeScript properties of a `RosWebsiteProps`
 *
 * @returns the result of the validation.
 */
function RosWebsitePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosWebsitePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWebsitePropsValidator(properties).assertSuccess();
    }
    return {
        'BucketName': ros.stringToRosTemplate(properties.bucketName),
        'WebsiteConfiguration': rosWebsiteWebsiteConfigurationPropertyToRosTemplate(properties.websiteConfiguration),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Website`, which is used to configure static website hosting and redirection rules for an Object Storage Service (OSS) bucket.
 * @Note This class does not contain additional functions, so it is recommended to use the `Website` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
class RosWebsite extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosWebsite.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.websiteConfiguration = props.websiteConfiguration;
    }
    get rosProperties() {
        return {
            bucketName: this.bucketName,
            websiteConfiguration: this.websiteConfiguration,
        };
    }
    renderProperties(props) {
        return rosWebsitePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWebsite = RosWebsite;
/**
 * The resource type name for this resource class.
 */
RosWebsite.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Website";
/**
 * Determine whether the given properties match those of a `ConditionProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_ConditionPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.includeHeaders && (Array.isArray(properties.includeHeaders) || (typeof properties.includeHeaders) === 'string')) {
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
function rosWebsiteConditionPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_ConditionPropertyValidator(properties).assertSuccess();
    return {
        'IncludeHeaders': ros.listMapper(rosWebsiteIncludeHeadersPropertyToRosTemplate)(properties.includeHeaders),
        'KeyPrefixEquals': ros.stringToRosTemplate(properties.keyPrefixEquals),
        'HttpErrorCodeReturnedEquals': ros.stringToRosTemplate(properties.httpErrorCodeReturnedEquals),
        'KeySuffixEquals': ros.stringToRosTemplate(properties.keySuffixEquals),
    };
}
/**
 * Determine whether the given properties match those of a `ErrorDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `ErrorDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_ErrorDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.httpStatus && (typeof properties.httpStatus) !== 'object') {
        errors.collect(ros.propertyValidator('httpStatus', ros.validateAllowedValues)({
            data: properties.httpStatus,
            allowedValues: ["200", "404"],
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
function rosWebsiteErrorDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_ErrorDocumentPropertyValidator(properties).assertSuccess();
    return {
        'HttpStatus': ros.stringToRosTemplate(properties.httpStatus),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `IncludeHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `IncludeHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_IncludeHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosWebsiteIncludeHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_IncludeHeadersPropertyValidator(properties).assertSuccess();
    return {
        'Key': ros.stringToRosTemplate(properties.key),
        'Equals': ros.stringToRosTemplate(properties.equalsTo),
    };
}
/**
 * Determine whether the given properties match those of a `IndexDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `IndexDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_IndexDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["0", "1", "2"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('suffix', ros.requiredValidator)(properties.suffix));
    errors.collect(ros.propertyValidator('suffix', ros.validateString)(properties.suffix));
    if (properties.supportSubDir && (typeof properties.supportSubDir) !== 'object') {
        errors.collect(ros.propertyValidator('supportSubDir', ros.validateAllowedValues)({
            data: properties.supportSubDir,
            allowedValues: ["true", "false"],
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
function rosWebsiteIndexDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_IndexDocumentPropertyValidator(properties).assertSuccess();
    return {
        'Type': ros.stringToRosTemplate(properties.type),
        'Suffix': ros.stringToRosTemplate(properties.suffix),
        'SupportSubDir': ros.stringToRosTemplate(properties.supportSubDir),
    };
}
/**
 * Determine whether the given properties match those of a `MirrorHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `MirrorHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_MirrorHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('passAll', ros.validateBoolean)(properties.passAll));
    if (properties.pass && (Array.isArray(properties.pass) || (typeof properties.pass) === 'string')) {
        errors.collect(ros.propertyValidator('pass', ros.validateLength)({
            data: properties.pass.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('pass', ros.listValidator(ros.validateString))(properties.pass));
    if (properties.sets && (Array.isArray(properties.sets) || (typeof properties.sets) === 'string')) {
        errors.collect(ros.propertyValidator('sets', ros.validateLength)({
            data: properties.sets.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('sets', ros.listValidator(RosWebsite_SetsPropertyValidator))(properties.sets));
    if (properties.remove && (Array.isArray(properties.remove) || (typeof properties.remove) === 'string')) {
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
function rosWebsiteMirrorHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_MirrorHeadersPropertyValidator(properties).assertSuccess();
    return {
        'PassAll': ros.booleanToRosTemplate(properties.passAll),
        'Pass': ros.listMapper(ros.stringToRosTemplate)(properties.pass),
        'Sets': ros.listMapper(rosWebsiteSetsPropertyToRosTemplate)(properties.sets),
        'Remove': ros.listMapper(ros.stringToRosTemplate)(properties.remove),
    };
}
/**
 * Determine whether the given properties match those of a `RedirectProperty`
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_RedirectPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mirrorUrl', ros.validateString)(properties.mirrorUrl));
    errors.collect(ros.propertyValidator('replaceKeyWith', ros.validateString)(properties.replaceKeyWith));
    errors.collect(ros.propertyValidator('mirrorHeaders', RosWebsite_MirrorHeadersPropertyValidator)(properties.mirrorHeaders));
    if (properties.httpRedirectCode && (typeof properties.httpRedirectCode) !== 'object') {
        errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateAllowedValues)({
            data: properties.httpRedirectCode,
            allowedValues: ["301", "302", "307"],
        }));
    }
    errors.collect(ros.propertyValidator('httpRedirectCode', ros.validateString)(properties.httpRedirectCode));
    errors.collect(ros.propertyValidator('enableReplacePrefix', ros.validateBoolean)(properties.enableReplacePrefix));
    errors.collect(ros.propertyValidator('passQueryString', ros.validateBoolean)(properties.passQueryString));
    errors.collect(ros.propertyValidator('mirrorFollowRedirect', ros.validateBoolean)(properties.mirrorFollowRedirect));
    errors.collect(ros.propertyValidator('replaceKeyPrefixWith', ros.validateString)(properties.replaceKeyPrefixWith));
    errors.collect(ros.propertyValidator('redirectType', ros.requiredValidator)(properties.redirectType));
    if (properties.redirectType && (typeof properties.redirectType) !== 'object') {
        errors.collect(ros.propertyValidator('redirectType', ros.validateAllowedValues)({
            data: properties.redirectType,
            allowedValues: ["Mirror", "External", "AliCDN"],
        }));
    }
    errors.collect(ros.propertyValidator('redirectType', ros.validateString)(properties.redirectType));
    errors.collect(ros.propertyValidator('mirrorPassQueryString', ros.validateBoolean)(properties.mirrorPassQueryString));
    errors.collect(ros.propertyValidator('mirrorCheckMd5', ros.validateBoolean)(properties.mirrorCheckMd5));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["http", "https"],
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
function rosWebsiteRedirectPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
/**
 * Determine whether the given properties match those of a `RoutingRulesProperty`
 *
 * @param properties - the TypeScript properties of a `RoutingRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_RoutingRulesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.requiredValidator)(properties.condition));
    errors.collect(ros.propertyValidator('condition', RosWebsite_ConditionPropertyValidator)(properties.condition));
    errors.collect(ros.propertyValidator('ruleNumber', ros.requiredValidator)(properties.ruleNumber));
    if (properties.ruleNumber && (typeof properties.ruleNumber) !== 'object') {
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
function rosWebsiteRoutingRulesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_RoutingRulesPropertyValidator(properties).assertSuccess();
    return {
        'Condition': rosWebsiteConditionPropertyToRosTemplate(properties.condition),
        'RuleNumber': ros.numberToRosTemplate(properties.ruleNumber),
        'Redirect': rosWebsiteRedirectPropertyToRosTemplate(properties.redirect),
    };
}
/**
 * Determine whether the given properties match those of a `SetsProperty`
 *
 * @param properties - the TypeScript properties of a `SetsProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_SetsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    if (properties.value && (Array.isArray(properties.value) || (typeof properties.value) === 'string')) {
        errors.collect(ros.propertyValidator('value', ros.validateLength)({
            data: properties.value.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    if (properties.key && (typeof properties.key) !== 'object') {
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
function rosWebsiteSetsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_SetsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `WebsiteConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosWebsite_WebsiteConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexDocument', RosWebsite_IndexDocumentPropertyValidator)(properties.indexDocument));
    if (properties.routingRules && (Array.isArray(properties.routingRules) || (typeof properties.routingRules) === 'string')) {
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
function rosWebsiteWebsiteConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosWebsite_WebsiteConfigurationPropertyValidator(properties).assertSuccess();
    return {
        'IndexDocument': rosWebsiteIndexDocumentPropertyToRosTemplate(properties.indexDocument),
        'RoutingRules': ros.listMapper(rosWebsiteRoutingRulesPropertyToRosTemplate)(properties.routingRules),
        'ErrorDocument': rosWebsiteErrorDocumentPropertyToRosTemplate(properties.errorDocument),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9zcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWlHOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx1QkFBdUIsQ0FBQyxVQUFlO0lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3BILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxJQUFHLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzlFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtZQUM3QixhQUFhLEVBQUUs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ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQnVja2V0YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NCdWNrZXRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0NvbnRyb2w6IFRoZSBhY2Nlc3MgY29udHJvbCBsaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2Vzc0NvbnRyb2w/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmxvY2tQdWJsaWNBY2Nlc3M6IFdoZXRoZXIgdG8gYmxvY2sgcHVibGljIGFjY2Vzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBibG9ja1B1YmxpY0FjY2Vzcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29yc0NvbmZpZ3VyYXRpb246IFJ1bGVzIHRoYXQgZGVmaW5lIGNyb3NzLW9yaWdpbiByZXNvdXJjZSBzaGFyaW5nIG9mIG9iamVjdHMgaW4gdGhpcyBidWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29yc0NvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRlbGV0ZSB0aGUgcmVsYXRpdmUgb2JqZWN0cyBpbiB0aGUgYnVja2V0LiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZU9zc0hkZnNTZXJ2aWNlOiBXaGV0aGVyIGVuYWJsZSBPU1MtSERGUyBzZXJ2aWNlLiBcbiAgICAgKiAqKk5vdGUqKjogT25jZSBpdCdzIGVuYWJsZWQsIGl0IGNhbid0IGJlIGRpc2FibGVkIGFnYWluLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZU9zc0hkZnNTZXJ2aWNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaWZlY3ljbGVDb25maWd1cmF0aW9uOiBSdWxlcyB0aGF0IGRlZmluZSBob3cgb3NzIGJ1Y2tldCBtYW5hZ2VzIG9iamVjdHMgZHVyaW5nIHRoZWlyIGxpZmV0aW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpZmVjeWNsZUNvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuTGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2dpbmdDb25maWd1cmF0aW9uOiBTZXR0aW5ncyB0aGF0IGRlZmluZXMgd2hlcmUgbG9ncyBhcmUgc3RvcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ2dpbmdDb25maWd1cmF0aW9uPzogUm9zQnVja2V0LkxvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5OiBCdWNrZXQgcG9saWN5XG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5PzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZHVuZGFuY3lUeXBlOiBTcGVjaWZpZXMgdGhlIGRhdGEgZGlzYXN0ZXIgcmVjb3ZlcnkgdHlwZSBvZiB0aGUgc3RvcmFnZSBzcGFjZS4gVGhlIHZhbHVlIHJhbmdlIGlzIGFzIGZvbGxvd3M6XG4gICAgICogTFJTIChkZWZhdWx0KTogTG9jYWwgcmVkdW5kYW50IExSUyBzdG9yZXMgeW91ciBkYXRhIHJlZHVuZGFudGx5IG9uIGRpZmZlcmVudCBzdG9yYWdlIGRldmljZXMgaW4gdGhlIHNhbWUgYXZhaWxhYmlsaXR5IHpvbmUsIGFuZCBjYW4gc3VwcG9ydCBkYXRhIGxvc3MgYW5kIG5vcm1hbCBhY2Nlc3MgZXZlbiB3aGVuIHR3byBzdG9yYWdlIGRldmljZXMgYXJlIGRhbWFnZWQgY29uY3VycmVudGx5LlxuICAgICAqIFpSUzogSW50cmEtY2l0eSByZWR1bmRhbnQgWlJTIGFkb3B0cyBhIGRhdGEgcmVkdW5kYW5jeSBzdG9yYWdlIG1lY2hhbmlzbSBpbiBtdWx0aXBsZSBhdmFpbGFiaWxpdHkgem9uZXMgKEFaKSwgYW5kIHN0b3JlcyB1c2VyIGRhdGEgcmVkdW5kYW50bHkgaW4gbXVsdGlwbGUgYXZhaWxhYmlsaXR5IHpvbmVzIGluIHRoZSBzYW1lIHJlZ2lvbi4gV2hlbiBhbiBhdmFpbGFiaWxpdHkgem9uZSBpcyB1bmF2YWlsYWJsZSwgbm9ybWFsIGFjY2VzcyB0byBkYXRhIGNhbiBzdGlsbCBiZSBndWFyYW50ZWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZHVuZGFuY3lUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZmVyZXJDb25maWd1cmF0aW9uOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSByZWZlcmVyQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5SZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIHJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IFNwZWNpZmllcyB0aGUgYnVja2V0IHVzZWQgdG8gc3RvcmUgdGhlIHNlcnZlci1zaWRlIGVuY3J5cHRpb24gcnVsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RvcmFnZUNsYXNzOiBTcGVjaWZpZXMgdGhlIHN0b3JhZ2UgY2xhc3Mgb2YgdGhlIGJ1Y2tldC4gRGVmYXVsdCBpcyBcIlN0YW5kYXJkXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IEJ1Y2tldCB0YWdzIGluIGstdiBwYWlycyBmb3JtYXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogKGFueSkgfTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2ZXJzaW9uaW5nQ29uZmlndXJhdGlvbjogQSBzdGF0ZSBvZiB2ZXJzaW9uaW5nXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJzaXRlQ29uZmlndXJhdGlvblYyOiBXZWJzaXRlIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2Vic2l0ZUNvbmZpZ3VyYXRpb25WMj86IFJvc0J1Y2tldC5XZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQnVja2V0UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5Jywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5wb2xpY3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZU9zc0hkZnNTZXJ2aWNlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVPc3NIZGZzU2VydmljZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RvcmFnZUNsYXNzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdG9yYWdlQ2xhc3MpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0b3JhZ2VDbGFzcycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0b3JhZ2VDbGFzcyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJTdGFuZGFyZFwiLFwiSUFcIixcIkFyY2hpdmVcIixcIkNvbGRBcmNoaXZlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmFnZUNsYXNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0b3JhZ2VDbGFzcykpO1xuICAgIGlmKHByb3BlcnRpZXMucmVkdW5kYW5jeVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlZHVuZGFuY3lUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWR1bmRhbmN5VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZHVuZGFuY3lUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkxSU1wiLFwiWlJTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkdW5kYW5jeVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVkdW5kYW5jeVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpZmVjeWNsZUNvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfTGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxpZmVjeWNsZUNvbmZpZ3VyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbicsIFJvc0J1Y2tldF9TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZlcnNpb25pbmdDb25maWd1cmF0aW9uJywgUm9zQnVja2V0X1ZlcnNpb25pbmdDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMudmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Jsb2NrUHVibGljQWNjZXNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5ibG9ja1B1YmxpY0FjY2VzcykpO1xuICAgIGlmKHByb3BlcnRpZXMuYWNjZXNzQ29udHJvbCAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWNjZXNzQ29udHJvbCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29udHJvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFjY2Vzc0NvbnRyb2wsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wicHJpdmF0ZVwiLFwicHVibGljLXJlYWRcIixcInB1YmxpYy1yZWFkLXdyaXRlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29udHJvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2Nlc3NDb250cm9sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb3JzQ29uZmlndXJhdGlvbicsIFJvc0J1Y2tldF9DT1JTQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvcnNDb25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRpb25Gb3JjZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2Vic2l0ZUNvbmZpZ3VyYXRpb25WMicsIFJvc0J1Y2tldF9XZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMud2Vic2l0ZUNvbmZpZ3VyYXRpb25WMikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nZ2luZ0NvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5sb2dnaW5nQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmZXJlckNvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZWZlcmVyQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudGFncykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCdWNrZXRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0J1Y2tldFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdCdWNrZXROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXROYW1lKSxcbiAgICAgICdBY2Nlc3NDb250cm9sJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2Nlc3NDb250cm9sKSxcbiAgICAgICdCbG9ja1B1YmxpY0FjY2Vzcyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJsb2NrUHVibGljQWNjZXNzKSxcbiAgICAgICdDT1JTQ29uZmlndXJhdGlvbic6IHJvc0J1Y2tldENPUlNDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29yc0NvbmZpZ3VyYXRpb24pLFxuICAgICAgJ0RlbGV0aW9uRm9yY2UnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSxcbiAgICAgICdFbmFibGVPc3NIZGZzU2VydmljZSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZU9zc0hkZnNTZXJ2aWNlKSxcbiAgICAgICdMaWZlY3ljbGVDb25maWd1cmF0aW9uJzogcm9zQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpZmVjeWNsZUNvbmZpZ3VyYXRpb24pLFxuICAgICAgJ0xvZ2dpbmdDb25maWd1cmF0aW9uJzogcm9zQnVja2V0TG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dnaW5nQ29uZmlndXJhdGlvbiksXG4gICAgICAnUG9saWN5Jzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucG9saWN5KSxcbiAgICAgICdSZWR1bmRhbmN5VHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVkdW5kYW5jeVR5cGUpLFxuICAgICAgJ1JlZmVyZXJDb25maWd1cmF0aW9uJzogcm9zQnVja2V0UmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZlcmVyQ29uZmlndXJhdGlvbiksXG4gICAgICAnUmVzb3VyY2VHcm91cElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgICAgJ1NlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbic6IHJvc0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgICAnU3RvcmFnZUNsYXNzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdG9yYWdlQ2xhc3MpLFxuICAgICAgJ1RhZ3MnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICAgICdWZXJzaW9uaW5nQ29uZmlndXJhdGlvbic6IHJvc0J1Y2tldFZlcnNpb25pbmdDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24pLFxuICAgICAgJ1dlYnNpdGVDb25maWd1cmF0aW9uVjInOiByb3NCdWNrZXRXZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2Vic2l0ZUNvbmZpZ3VyYXRpb25WMiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6T1NTOjpCdWNrZXRgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBCdWNrZXRgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0J1Y2tldCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1NTOjpCdWNrZXRcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXJuOiBUaGUgQWxpYmFiYSBDbG91ZCBSZXNvdXJjZSBOYW1lIChBUk4pLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERvbWFpbk5hbWU6IFRoZSBwdWJsaWMgRE5TIG5hbWUgb2YgdGhlIHNwZWNpZmllZCBidWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEludGVybmFsRG9tYWluTmFtZTogVGhlIGludGVybmFsIEROUyBuYW1lIG9mIHRoZSBzcGVjaWZpZWQgYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuYWxEb21haW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWU6IFRoZSBuYW1lIG9mIEJ1Y2tldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb250cm9sOiBUaGUgYWNjZXNzIGNvbnRyb2wgbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXNzQ29udHJvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJsb2NrUHVibGljQWNjZXNzOiBXaGV0aGVyIHRvIGJsb2NrIHB1YmxpYyBhY2Nlc3MuXG4gICAgICovXG4gICAgcHVibGljIGJsb2NrUHVibGljQWNjZXNzOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvcnNDb25maWd1cmF0aW9uOiBSdWxlcyB0aGF0IGRlZmluZSBjcm9zcy1vcmlnaW4gcmVzb3VyY2Ugc2hhcmluZyBvZiBvYmplY3RzIGluIHRoaXMgYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb3JzQ29uZmlndXJhdGlvbjogUm9zQnVja2V0LkNPUlNDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBmb3JjZSBkZWxldGUgdGhlIHJlbGF0aXZlIG9iamVjdHMgaW4gdGhlIGJ1Y2tldC4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsZXRpb25Gb3JjZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVPc3NIZGZzU2VydmljZTogV2hldGhlciBlbmFibGUgT1NTLUhERlMgc2VydmljZS4gXG4gICAgICogKipOb3RlKio6IE9uY2UgaXQncyBlbmFibGVkLCBpdCBjYW4ndCBiZSBkaXNhYmxlZCBhZ2Fpbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlT3NzSGRmc1NlcnZpY2U6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGlmZWN5Y2xlQ29uZmlndXJhdGlvbjogUnVsZXMgdGhhdCBkZWZpbmUgaG93IG9zcyBidWNrZXQgbWFuYWdlcyBvYmplY3RzIGR1cmluZyB0aGVpciBsaWZldGltZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlmZWN5Y2xlQ29uZmlndXJhdGlvbjogUm9zQnVja2V0LkxpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dnaW5nQ29uZmlndXJhdGlvbjogU2V0dGluZ3MgdGhhdCBkZWZpbmVzIHdoZXJlIGxvZ3MgYXJlIHN0b3JlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nZ2luZ0NvbmZpZ3VyYXRpb246IFJvc0J1Y2tldC5Mb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeTogQnVja2V0IHBvbGljeVxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xpY3k6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWR1bmRhbmN5VHlwZTogU3BlY2lmaWVzIHRoZSBkYXRhIGRpc2FzdGVyIHJlY292ZXJ5IHR5cGUgb2YgdGhlIHN0b3JhZ2Ugc3BhY2UuIFRoZSB2YWx1ZSByYW5nZSBpcyBhcyBmb2xsb3dzOlxuICAgICAqIExSUyAoZGVmYXVsdCk6IExvY2FsIHJlZHVuZGFudCBMUlMgc3RvcmVzIHlvdXIgZGF0YSByZWR1bmRhbnRseSBvbiBkaWZmZXJlbnQgc3RvcmFnZSBkZXZpY2VzIGluIHRoZSBzYW1lIGF2YWlsYWJpbGl0eSB6b25lLCBhbmQgY2FuIHN1cHBvcnQgZGF0YSBsb3NzIGFuZCBub3JtYWwgYWNjZXNzIGV2ZW4gd2hlbiB0d28gc3RvcmFnZSBkZXZpY2VzIGFyZSBkYW1hZ2VkIGNvbmN1cnJlbnRseS5cbiAgICAgKiBaUlM6IEludHJhLWNpdHkgcmVkdW5kYW50IFpSUyBhZG9wdHMgYSBkYXRhIHJlZHVuZGFuY3kgc3RvcmFnZSBtZWNoYW5pc20gaW4gbXVsdGlwbGUgYXZhaWxhYmlsaXR5IHpvbmVzIChBWiksIGFuZCBzdG9yZXMgdXNlciBkYXRhIHJlZHVuZGFudGx5IGluIG11bHRpcGxlIGF2YWlsYWJpbGl0eSB6b25lcyBpbiB0aGUgc2FtZSByZWdpb24uIFdoZW4gYW4gYXZhaWxhYmlsaXR5IHpvbmUgaXMgdW5hdmFpbGFibGUsIG5vcm1hbCBhY2Nlc3MgdG8gZGF0YSBjYW4gc3RpbGwgYmUgZ3VhcmFudGVlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVkdW5kYW5jeVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZlcmVyQ29uZmlndXJhdGlvbjogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIHJlZmVyZXJDb25maWd1cmF0aW9uOiBSb3NCdWNrZXQuUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSByZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uOiBTcGVjaWZpZXMgdGhlIGJ1Y2tldCB1c2VkIHRvIHN0b3JlIHRoZSBzZXJ2ZXItc2lkZSBlbmNyeXB0aW9uIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogUm9zQnVja2V0LlNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0b3JhZ2VDbGFzczogU3BlY2lmaWVzIHRoZSBzdG9yYWdlIGNsYXNzIG9mIHRoZSBidWNrZXQuIERlZmF1bHQgaXMgXCJTdGFuZGFyZFwiLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9yYWdlQ2xhc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBCdWNrZXQgdGFncyBpbiBrLXYgcGFpcnMgZm9ybWF0LlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiB7IFtrZXk6IHN0cmluZ106IChhbnkpIH0gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmVyc2lvbmluZ0NvbmZpZ3VyYXRpb246IEEgc3RhdGUgb2YgdmVyc2lvbmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJzaW9uaW5nQ29uZmlndXJhdGlvbjogUm9zQnVja2V0LlZlcnNpb25pbmdDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2Vic2l0ZUNvbmZpZ3VyYXRpb25WMjogV2Vic2l0ZSBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB3ZWJzaXRlQ29uZmlndXJhdGlvblYyOiBSb3NCdWNrZXQuV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMlByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0J1Y2tldFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQnVja2V0LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcm4gPSB0aGlzLmdldEF0dCgnQXJuJyk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbk5hbWUgPSB0aGlzLmdldEF0dCgnRG9tYWluTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJJbnRlcm5hbERvbWFpbk5hbWUgPSB0aGlzLmdldEF0dCgnSW50ZXJuYWxEb21haW5OYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSB0aGlzLmdldEF0dCgnTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5idWNrZXROYW1lID0gcHJvcHMuYnVja2V0TmFtZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NDb250cm9sID0gcHJvcHMuYWNjZXNzQ29udHJvbDtcbiAgICAgICAgdGhpcy5ibG9ja1B1YmxpY0FjY2VzcyA9IHByb3BzLmJsb2NrUHVibGljQWNjZXNzO1xuICAgICAgICB0aGlzLmNvcnNDb25maWd1cmF0aW9uID0gcHJvcHMuY29yc0NvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGVsZXRpb25Gb3JjZSA9IHByb3BzLmRlbGV0aW9uRm9yY2U7XG4gICAgICAgIHRoaXMuZW5hYmxlT3NzSGRmc1NlcnZpY2UgPSBwcm9wcy5lbmFibGVPc3NIZGZzU2VydmljZTtcbiAgICAgICAgdGhpcy5saWZlY3ljbGVDb25maWd1cmF0aW9uID0gcHJvcHMubGlmZWN5Y2xlQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5sb2dnaW5nQ29uZmlndXJhdGlvbiA9IHByb3BzLmxvZ2dpbmdDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLnBvbGljeSA9IHByb3BzLnBvbGljeTtcbiAgICAgICAgdGhpcy5yZWR1bmRhbmN5VHlwZSA9IHByb3BzLnJlZHVuZGFuY3lUeXBlO1xuICAgICAgICB0aGlzLnJlZmVyZXJDb25maWd1cmF0aW9uID0gcHJvcHMucmVmZXJlckNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLnNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbiA9IHByb3BzLnNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdG9yYWdlQ2xhc3MgPSBwcm9wcy5zdG9yYWdlQ2xhc3M7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgICAgIHRoaXMudmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24gPSBwcm9wcy52ZXJzaW9uaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy53ZWJzaXRlQ29uZmlndXJhdGlvblYyID0gcHJvcHMud2Vic2l0ZUNvbmZpZ3VyYXRpb25WMjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWNrZXROYW1lOiB0aGlzLmJ1Y2tldE5hbWUsXG4gICAgICAgICAgICBhY2Nlc3NDb250cm9sOiB0aGlzLmFjY2Vzc0NvbnRyb2wsXG4gICAgICAgICAgICBibG9ja1B1YmxpY0FjY2VzczogdGhpcy5ibG9ja1B1YmxpY0FjY2VzcyxcbiAgICAgICAgICAgIGNvcnNDb25maWd1cmF0aW9uOiB0aGlzLmNvcnNDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgZW5hYmxlT3NzSGRmc1NlcnZpY2U6IHRoaXMuZW5hYmxlT3NzSGRmc1NlcnZpY2UsXG4gICAgICAgICAgICBsaWZlY3ljbGVDb25maWd1cmF0aW9uOiB0aGlzLmxpZmVjeWNsZUNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBsb2dnaW5nQ29uZmlndXJhdGlvbjogdGhpcy5sb2dnaW5nQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIHBvbGljeTogdGhpcy5wb2xpY3ksXG4gICAgICAgICAgICByZWR1bmRhbmN5VHlwZTogdGhpcy5yZWR1bmRhbmN5VHlwZSxcbiAgICAgICAgICAgIHJlZmVyZXJDb25maWd1cmF0aW9uOiB0aGlzLnJlZmVyZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogdGhpcy5zZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBzdG9yYWdlQ2xhc3M6IHRoaXMuc3RvcmFnZUNsYXNzLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgdmVyc2lvbmluZ0NvbmZpZ3VyYXRpb246IHRoaXMudmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICB3ZWJzaXRlQ29uZmlndXJhdGlvblYyOiB0aGlzLndlYnNpdGVDb25maWd1cmF0aW9uVjIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0J1Y2tldFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY3JlYXRlZEJlZm9yZURhdGU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY3JlYXRlZEJlZm9yZURhdGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGF5czogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkYXlzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyZWF0ZWRCZWZvcmVEYXRlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNyZWF0ZWRCZWZvcmVEYXRlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXlzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRheXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQWJvcnRNdWx0aXBhcnRVcGxvYWRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEFib3J0TXVsdGlwYXJ0VXBsb2FkUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkFib3J0TXVsdGlwYXJ0VXBsb2FkYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldEFib3J0TXVsdGlwYXJ0VXBsb2FkUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9BYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NyZWF0ZWRCZWZvcmVEYXRlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jcmVhdGVkQmVmb3JlRGF0ZSksXG4gICAgICAnRGF5cyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGF5cyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENPUlNDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlc3BvbnNlVmFyeTogV2hldGhlciB0byByZXR1cm4gdGhlIFZhcnk6IE9yaWdpbiBoZWFkZXIuIFRoZSByYW5nZSBpcyBhcyBmb2xsb3dzOlxuICAgICAqIC0gdHJ1ZTogVGhlIFZhcnk6IE9yaWdpbiBoZWFkZXIgaXMgcmV0dXJuZWQgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGEgY3Jvc3Mtb3JpZ2luIHJlcXVlc3Qgd2FzIHNlbnQgb3Igd2hldGhlciB0aGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwuXG4gICAgICogLSBmYWxzZSAoZGVmYXVsdCkgOiBEbyBub3QgcmV0dXJuIHRoZSBWYXJ5OiBPcmlnaW4gaGVhZGVyIHVuZGVyIGFueSBjaXJjdW1zdGFuY2VzXG4gICAgICogTm90ZTogVGhpcyBmaWVsZCBjYW5ub3QgYmUgY29uZmlndXJlZCBzZXBhcmF0ZWx5OyBhdCBsZWFzdCBvbmUgY3Jvc3MtZG9tYWluIHJ1bGUgbXVzdCBiZSBjb25maWd1cmVkIHRvIHRha2UgZWZmZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVzcG9uc2VWYXJ5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb3JzUnVsZTogQSBzZXQgb2Ygb3JpZ2lucyBhbmQgbWV0aG9kcyB0aGF0IHlvdSBhbGxvdy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvcnNSdWxlPzogQXJyYXk8Um9zQnVja2V0LkNPUlNSdWxlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc3BvbnNlVmFyeScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucmVzcG9uc2VWYXJ5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb3JzUnVsZScsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0J1Y2tldF9DT1JTUnVsZVByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5jb3JzUnVsZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5DT1JTQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQ09SU0NvbmZpZ3VyYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0Q09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0NPUlNDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUmVzcG9uc2VWYXJ5Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzcG9uc2VWYXJ5KSxcbiAgICAgICdDT1JTUnVsZSc6IHJvcy5saXN0TWFwcGVyKHJvc0J1Y2tldENPUlNSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvcnNSdWxlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ09SU1J1bGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxsb3dlZE1ldGhvZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbGxvd2VkTWV0aG9kPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhBZ2VTZWNvbmRzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1heEFnZVNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXhwb3NlSGVhZGVyOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4cG9zZUhlYWRlcj86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxsb3dlZE9yaWdpbjogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbGxvd2VkT3JpZ2luPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGxvd2VkSGVhZGVyOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFsbG93ZWRIZWFkZXI/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ09SU1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ09SU1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfQ09SU1J1bGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93ZWRNZXRob2QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmFsbG93ZWRNZXRob2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heEFnZVNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4QWdlU2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXhwb3NlSGVhZGVyJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5leHBvc2VIZWFkZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93ZWRPcmlnaW4nLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmFsbG93ZWRPcmlnaW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93ZWRIZWFkZXInLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmFsbG93ZWRIZWFkZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ09SU1J1bGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQ09SU1J1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENPUlNSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkNPUlNSdWxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldENPUlNSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9DT1JTUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0FsbG93ZWRNZXRob2QnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hbGxvd2VkTWV0aG9kKSxcbiAgICAgICdNYXhBZ2VTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhBZ2VTZWNvbmRzKSxcbiAgICAgICdFeHBvc2VIZWFkZXInOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5leHBvc2VIZWFkZXIpLFxuICAgICAgJ0FsbG93ZWRPcmlnaW4nOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hbGxvd2VkT3JpZ2luKSxcbiAgICAgICdBbGxvd2VkSGVhZGVyJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYWxsb3dlZEhlYWRlciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbmRpdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbmNsdWRlSGVhZGVyczogVGhpcyBydWxlIHdpbGwgb25seSBtYXRjaCBpZiB0aGUgcmVxdWVzdCBjb250YWlucyB0aGUgc3BlY2lmaWVkIEhlYWRlciBhbmQgdGhlIHZhbHVlIGlzIHRoZSBzcGVjaWZpZWQgdmFsdWUuIFVwIHRvIDEwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5jbHVkZUhlYWRlcnM/OiBBcnJheTxSb3NCdWNrZXQuSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5UHJlZml4RXF1YWxzOiBUaGUgcHJlZml4IG9mIHRoZSBPYmplY3QgbmFtZSB0byBiZSBtYXRjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5UHJlZml4RXF1YWxzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFsczogV2hlbiBhY2Nlc3NpbmcgdGhlIHNwZWNpZmllZCBPYmplY3QsIHRoaXMgc3RhdHVzIG11c3QgYmUgcmV0dXJuZWQgdG8gbWF0Y2ggdGhpcyBydWxlLiBUaGlzIGZpZWxkIG11c3QgYmUgNDA0IHdoZW4gdGhlIGp1bXAgcnVsZSBpcyBtaXJyb3ItYmFjayB0byB0aGUgc291cmNlIHR5cGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwRXJyb3JDb2RlUmV0dXJuZWRFcXVhbHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5U3VmZml4RXF1YWxzOiBUaGUgc3VmZml4IG9mIHRoZSBPYmplY3QgbmFtZSB0byBiZSBtYXRjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5U3VmZml4RXF1YWxzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29uZGl0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbmRpdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9Db25kaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbmNsdWRlSGVhZGVycykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luY2x1ZGVIZWFkZXJzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5jbHVkZUhlYWRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NCdWNrZXRfSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleVByZWZpeEVxdWFscycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXlQcmVmaXhFcXVhbHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5odHRwRXJyb3JDb2RlUmV0dXJuZWRFcXVhbHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleVN1ZmZpeEVxdWFscycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXlTdWZmaXhFcXVhbHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29uZGl0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkNvbmRpdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uZGl0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkNvbmRpdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRDb25kaXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0NvbmRpdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0luY2x1ZGVIZWFkZXJzJzogcm9zLmxpc3RNYXBwZXIocm9zQnVja2V0SW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMpLFxuICAgICAgJ0tleVByZWZpeEVxdWFscyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5UHJlZml4RXF1YWxzKSxcbiAgICAgICdIdHRwRXJyb3JDb2RlUmV0dXJuZWRFcXVhbHMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscyksXG4gICAgICAnS2V5U3VmZml4RXF1YWxzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXlTdWZmaXhFcXVhbHMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFcnJvckRvY3VtZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBTdGF0dXM6IFRoZSBIVFRQIHN0YXR1cyBjb2RlIG9mIHRoZSBlcnJvciBwYWdlLiBWYWxpZCB2YWx1ZXM6IDIwMCwgNDA0IChkZWZhdWx0KS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBTdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiBUaGUgZGVmYXVsdCBlcnJvciBwYWdlLlxuICAgICAqIFdoZW4gYW4gZXJyb3IgcGFnZSBpcyBzcGVjaWZpZWQsIGlmIHRoZSBhY2Nlc3NlZCBPYmplY3QgZG9lcyBub3QgZXhpc3QsIHRoaXMgZXJyb3IgcGFnZSBpcyByZXR1cm5lZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRXJyb3JEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFcnJvckRvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X0Vycm9yRG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmh0dHBTdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmh0dHBTdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBTdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5odHRwU3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIjIwMFwiLFwiNDA0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFN0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5odHRwU3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVycm9yRG9jdW1lbnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuRXJyb3JEb2N1bWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXJyb3JEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5FcnJvckRvY3VtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldEVycm9yRG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0Vycm9yRG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdIdHRwU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwU3RhdHVzKSxcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4cGlyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY3JlYXRlZEJlZm9yZURhdGU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY3JlYXRlZEJlZm9yZURhdGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlcjogU3BlY2lmaWVzIHdoZXRoZXIgZXhwaXJlZCBkZWxldGUgdGFncyBzaG91bGQgYmUgcmVtb3ZlZCBhdXRvbWF0aWNhbGx5LiBUaGUgdmFsdWVzIGFyZSBhcyBmb2xsb3dzOlxuICAgICAqIC0gdHJ1ZTogVGhpcyBtZWFucyB0aGF0IHRoZSBleHBpcmF0aW9uIGRlbGV0ZSBmbGFnIGlzIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC4gV2hlbiBzZXQgdG8gdHJ1ZSwgc3BlY2lmeWluZyBEYXlzIG9yIENyZWF0ZWRCZWZvcmVEYXRlIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAgICogLSBmYWxzZTogVGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGUgZXhwaXJhdGlvbiBkZWxldGUgbWFya2VyIHdpbGwgbm90IGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC4gV2hlbiBmYWxzZSwgZWl0aGVyIERheXMgb3IgQ3JlYXRlZEJlZm9yZURhdGUgbXVzdCBiZSBzcGVjaWZpZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBleHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkYXlzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRheXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFeHBpcmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEV4cGlyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfRXhwaXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3JlYXRlZEJlZm9yZURhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY3JlYXRlZEJlZm9yZURhdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V4cGlyZWRPYmplY3REZWxldGVNYXJrZXInLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmV4cGlyZWRPYmplY3REZWxldGVNYXJrZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RheXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZGF5cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJFeHBpcmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkV4cGlyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEV4cGlyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuRXhwaXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRFeHBpcmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9FeHBpcmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ3JlYXRlZEJlZm9yZURhdGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNyZWF0ZWRCZWZvcmVEYXRlKSxcbiAgICAgICdFeHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlciksXG4gICAgICAnRGF5cyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGF5cyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEZpbHRlclByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBub3Q6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbm90PzogUm9zQnVja2V0Lk5vdFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRmlsdGVyUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9GaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdCcsIFJvc0J1Y2tldF9Ob3RQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5ub3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRmlsdGVyUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkZpbHRlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRmlsdGVyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkZpbHRlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRGaWx0ZXJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0ZpbHRlclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ05vdCc6IHJvc0J1Y2tldE5vdFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5vdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluY2x1ZGVIZWFkZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogVGhlIG5hbWUgb2YgdGhlIGhlYWRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVxdWFsc1RvOiBUaGUgdmFsdWUgb2YgdGhlIGhlYWRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVxdWFsc1RvPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VxdWFsc1RvJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVxdWFsc1RvKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluY2x1ZGVIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkluY2x1ZGVIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmNsdWRlSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5JbmNsdWRlSGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRJbmNsdWRlSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgICAnRXF1YWxzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lcXVhbHNUbyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluZGV4RG9jdW1lbnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdHlwZTogQmVoYXZpb3Igd2hlbiBhbiBPYmplY3QgdGhhdCBlbmRzIHdpdGggYSBub24tZm9yd2FyZCBzbGFzaCAoXFwvKSBhbmQgZG9lcyBub3QgZXhpc3QgaXMgYWNjZXNzZWQgYWZ0ZXIgc2V0dGluZyB0aGUgZGVmYXVsdCBob21lIHBhZ2UuIEl0IG9ubHkgdGFrZXMgZWZmZWN0IHdoZW4gU3VwcG9ydFN1YkRpciBpcyBzZXQgdG8gdHJ1ZSwgYW5kIGl0IHRha2VzIGVmZmVjdCBhZnRlciBSb3V0aW5nUnVsZSBhbmQgYmVmb3JlIEVycm9yRmlsZS5cbiAgICAgKiBBc3N1bWUgdGhhdCB0aGUgZGVmYXVsdCBob21lIHBhZ2UgZm9yIHRoZSBpbmRleC4gVGhlIEhUTUwsIHRvIGFjY2VzcyB0aGUgZmlsZSBwYXRoIGZvciBidWNrZXQub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbVxcL2FiYywgYW5kIEFCQyB0aGlzIE9iamVjdCBkb2VzIG5vdCBleGlzdCwgYXQgdGhpcyBtb21lbnQsIGluIGRpZmZlcmVudCB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgVHlwZSBvZiBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICAgICAqIC0gMCAoZGVmYXVsdCkgOiBDaGVjayBpZiBhYmNcXC9pbmRleC5odG1sIGV4aXN0cyAoT2JqZWN0ICsgZm9yd2FyZCBzbGFzaCAoXFwvKSArIGhvbWUgcGFnZSkgYW5kIHJldHVybiAzMDIgd2l0aCB0aGUgVVJMIGNvZGUgb2YgXFwvYWJjXFwvIGFzIExvY2F0aW9uIGhlYWRlciAoZm9yd2FyZCBzbGFzaCAoXFwvKSArIE9iamVjdCArIGZvcndhcmQgc2xhc2ggKFxcLykpLiBJZiBpdCBkb2Vzbid0LCBpdCB3aWxsIHJldHVybiA0MDQgYW5kIGtlZXAgY2hlY2tpbmcgRXJyb3JGaWxlLlxuICAgICAqIC0gMTogRGlyZWN0bHkgcmV0dXJuIDQwNCwgZXJyb3IgTm9TdWNoS2V5LCBjb250aW51ZSB0byBjaGVjayBFcnJvckZpbGUuXG4gICAgICogLSAyOiBDaGVjayBpZiBhYmNcXC9pbmRleC5odG1sIGV4aXN0cyBhbmQgcmV0dXJuIHRoZSBjb250ZW50cyBvZiB0aGUgT2JqZWN0IGlmIGl0IGRvZXMuIElmIGl0IGRvZXNuJ3QsIGl0IHdpbGwgcmV0dXJuIDQwNCBhbmQga2VlcCBjaGVja2luZyBFcnJvckZpbGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN1ZmZpeDogRGVmYXVsdCBob21lIHBhZ2UuXG4gICAgICogQWZ0ZXIgc2V0dGluZyB0aGUgZGVmYXVsdCBob21lIHBhZ2UsIGlmIHlvdSB2aXNpdCBhbiBPYmplY3QgZW5kaW5nIHdpdGggYSBmb3J3YXJkIHNsYXNoIChcXC8pLCBPU1Mgd2lsbCByZXR1cm4gdG8gdGhpcyBkZWZhdWx0IGhvbWUgcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1ZmZpeDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN1cHBvcnRTdWJEaXI6IFdoZXRoZXIgdG8ganVtcCB0byB0aGUgZGVmYXVsdCBob21lIHBhZ2Ugb2YgYSBzdWJkaXJlY3Rvcnkgd2hlbiBhY2Nlc3NpbmcgaXQuIFRoZSByYW5nZSBpcyBhcyBmb2xsb3dzOlxuICAgICAqIC0gdHJ1ZTogR28gdG8gdGhlIGRlZmF1bHQgaG9tZSBwYWdlIGluIGEgc3ViZGlyZWN0b3J5LlxuICAgICAqIC0gZmFsc2UgKGRlZmF1bHQpIDogSW5zdGVhZCBvZiBnb2luZyB0byB0aGUgZGVmYXVsdCBob21lIHBhZ2UgaW4gYSBzdWJkaXJlY3RvcnksIGdvIHRvIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBpbiB0aGUgcm9vdCBkaXJlY3RvcnkuXG4gICAgICogQXNzdW1lIHRoYXQgdGhlIGRlZmF1bHQgaG9tZSBwYWdlIGZvciB0aGUgaW5kZXguIFRoZSBIVE1MLCB0byBhY2Nlc3MgYnVja2V0Lm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb21cXC9zdWJkaXJcXC8sIGlmIHNldCBTdXBwb3J0U3ViRGlyIHRvIGZhbHNlLCBUaGVuIGdvIHRvIGJ1Y2tldC5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tXFwvaW5kZXguaHRtbDsgSWYgc2V0IFN1cHBvcnRTdWJEaXIgaXMgdHJ1ZSwgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnVja2V0Lm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb21cXC9zdWJkaXJcXC9pbmRleC5odG1sLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3VwcG9ydFN1YkRpcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluZGV4RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5kZXhEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9JbmRleERvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy50eXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50eXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCIwXCIsXCIxXCIsXCIyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWZmaXgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3VmZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWZmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3VmZml4KSk7XG4gICAgaWYocHJvcGVydGllcy5zdXBwb3J0U3ViRGlyICYmICh0eXBlb2YgcHJvcGVydGllcy5zdXBwb3J0U3ViRGlyKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdXBwb3J0U3ViRGlyJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3VwcG9ydFN1YkRpcixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJ0cnVlXCIsXCJmYWxzZVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1cHBvcnRTdWJEaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3VwcG9ydFN1YkRpcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmRleERvY3VtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkluZGV4RG9jdW1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZGV4RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuSW5kZXhEb2N1bWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRJbmRleERvY3VtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9JbmRleERvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICAnU3VmZml4Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdWZmaXgpLFxuICAgICAgJ1N1cHBvcnRTdWJEaXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1cHBvcnRTdWJEaXIpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGU6IERlc2NyaWJlcyBsaWZlY3ljbGUgcnVsZXMgZm9yIHRoZSBvc3MgYnVja2V0IExpZmVjeWNsZSBDb25maWd1cmF0aW9uIHByb3BlcnR5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcnVsZTogQXJyYXk8Um9zQnVja2V0LlJ1bGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfTGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ydWxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQnVja2V0X1J1bGVQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMucnVsZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkxpZmVjeWNsZUNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuTGlmZWN5Y2xlQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9MaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUnVsZSc6IHJvcy5saXN0TWFwcGVyKHJvc0J1Y2tldFJ1bGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucnVsZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRhcmdldFByZWZpeDogVGhpcyBlbGVtZW50IGxldHMgeW91IHNwZWNpZnkgYSBwcmVmaXggZm9yIHRoZSBvYmplY3RzIHRoYXQgdGhlIGxvZyBmaWxlcyB3aWxsIGJlIHN0b3JlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRhcmdldFByZWZpeD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRCdWNrZXQ6IFNwZWNpZmllcyB0aGUgYnVja2V0IHdoZXJlIHlvdSB3YW50IEFsaXl1biBPU1MgdG8gc3RvcmUgc2VydmVyIGFjY2VzcyBsb2dzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFyZ2V0QnVja2V0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFByZWZpeCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRQcmVmaXgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldEJ1Y2tldCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRCdWNrZXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuTG9nZ2luZ0NvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkxvZ2dpbmdDb25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldExvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9Mb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1RhcmdldFByZWZpeCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0UHJlZml4KSxcbiAgICAgICdUYXJnZXRCdWNrZXQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldEJ1Y2tldCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1pcnJvckhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzc0FsbDogV2hldGhlciB0byBwYXNzIHRocm91Z2ggb3RoZXIgaGVhZGVycyB0byB0aGUgc291cmNlIGV4Y2VwdCB0aGUgZm9sbG93aW5nIGhlYWRlcnMuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiAtIGNvbnRlbnQtbGVuZ3RoLCBhdXRob3JpemF0aW9uMiwgYXV0aG9yaXphdGlvbiwgcmFuZ2UsIGRhdGUgYW5kIG90aGVyIGhlYWRlcnNcbiAgICAgKiAtIEhlYWRlcnMgc3RhcnRpbmcgd2l0aCBvc3MtXFwveC1vc3MtXFwveC1kcnMtXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhc3NBbGw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhc3M6IFBhc3MgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIEhlYWRlciB0byB0aGUgc291cmNlLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogRWFjaCBIZWFkZXIgaXMgYXQgbW9zdCAxLDAyNCBieXRlcyBsb25nIGFuZCBoYXMgdGhlIGNoYXJhY3RlciBzZXRzIDAtOSwgYS16LCBBLVosIGFuZCBkYXNoICgtKS5cbiAgICAgKiBBIG1heGltdW0gb2YgMTAgY2FuIGJlIHNwZWNpZmllZCBmb3IgdGhpcyBmaWVsZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhc3M/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNldHM6IFNldCBhIEhlYWRlciB0byB0aGUgb3JpZ2luLCBhbmQgaXQgd2lsbCBiZSBzZXQgd2hlbiB0aGUgcmVxdWVzdCBpcyBzZW50IGJhY2sgdG8gdGhlIG9yaWdpbiwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaGVhZGVycyBhcmUgaW5jbHVkZWQgaW4gdGhlIHJlcXVlc3QuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBVcCB0byAxMCBncm91cHMgY2FuIGJlIHNwZWNpZmllZCBmb3IgdGhpcyBjb250YWluZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXRzPzogQXJyYXk8Um9zQnVja2V0LlNldHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVtb3ZlOiBEaXNhYmxlcyBwYXNzLXRocm91Z2ggb2YgdGhlIHNwZWNpZmllZCBIZWFkZXIgdG8gdGhlIHNvdXJjZS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIEVhY2ggSGVhZGVyIGlzIGF0IG1vc3QgMSwwMjQgYnl0ZXMgbG9uZyBhbmQgaGFzIHRoZSBjaGFyYWN0ZXIgc2V0cyAwLTksIGEteiwgQS1aLCBhbmQgZGFzaCAoLSkuXG4gICAgICogQSBtYXhpbXVtIG9mIDEwIGNhbiBiZSBzcGVjaWZpZWQgZm9yIHRoaXMgZmllbGQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZW1vdmU/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTWlycm9ySGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNaXJyb3JIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X01pcnJvckhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3NBbGwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnBhc3NBbGwpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBhc3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wYXNzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucGFzcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGFzcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3MnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnBhc3MpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNldHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2V0cykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NldHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2V0cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NldHMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NCdWNrZXRfU2V0c1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zZXRzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZW1vdmUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZW1vdmUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZW1vdmUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1vdmUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVtb3ZlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVtb3ZlJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5yZW1vdmUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTWlycm9ySGVhZGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5NaXJyb3JIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNaXJyb3JIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0Lk1pcnJvckhlYWRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0TWlycm9ySGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfTWlycm9ySGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1Bhc3NBbGwnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzQWxsKSxcbiAgICAgICdQYXNzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGFzcyksXG4gICAgICAnU2V0cyc6IHJvcy5saXN0TWFwcGVyKHJvc0J1Y2tldFNldHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2V0cyksXG4gICAgICAnUmVtb3ZlJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVtb3ZlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTm90UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByZWZpeDogVGhlIE9iamVjdCBwcmVmaXggdG8gd2hpY2ggdGhpcyBleGNsdXNpb24gcnVsZSBhcHBsaWVzLlxuICAgICAqIC0gSWYgUHJlZml4IGlzIGNvbmZpZ3VyZWQgdW5kZXIgUnVsZSBub2RlLCB0aGUgUHJlZml4IHVuZGVyIE5vdCBub2RlIG11c3QgYmUgcHJlZml4ZWQgYnkgdGhlIFByZWZpeCB1bmRlciBSdWxlIG5vZGUuIEZvciBleGFtcGxlLCBpZiB0aGUgUHJlZml4IGNvbmZpZ3VyZWQgdW5kZXIgdGhlIFJ1bGUgbm9kZSBpcyBkaXIsIHRoZSBQcmVmaXggdW5kZXIgdGhlIE5vdCBub2RlIG11c3QgYmVnaW4gd2l0aCBkaXIsIHN1Y2ggYXMgZGlyMSwgZGlyMiwgYW5kIHNvIG9uLlxuICAgICAqIC0gSWYgdGhlIFRhZyBpcyBOb3QgY29uZmlndXJlZCB1bmRlciB0aGUgTm90IG5vZGUsIHRoZSBQcmVmaXggY29uZmlndXJlZCB1bmRlciB0aGUgTk9UIG5vZGUgY2Fubm90IGJlIHRoZSBzYW1lIGFzIHRoZSBQcmVmaXggY29uZmlndXJlZCB1bmRlciB0aGUgUnVsZSBub2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRhZzogQXQgbW9zdCBvbmUgT2JqZWN0IHRhZyB0byB3aGljaCB0aGlzIGV4Y2x1c2lvbiBydWxlIGFwcGxpZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0YWc/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTm90UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5vdFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9Ob3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZWZpeCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmVmaXgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWcubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMudGFnKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk5vdFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5Ob3RgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5vdFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5Ob3RgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0Tm90UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9Ob3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQcmVmaXgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZWZpeCksXG4gICAgICAnVGFnJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFnKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVkaXJlY3RQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWlycm9yVXJsOiBNaXJyb3IgYmFjayB0byB0aGUgc291cmNlIHN0YXRpb24gYWRkcmVzcyBvZiB0aGUgc291cmNlLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogVGhlIG9yaWdpbiBVUkwgbXVzdCBiZWdpbiB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLyBhbmQgZW5kIHdpdGggYSBmb3J3YXJkIHNsYXNoIChcXC8pLCB3aGljaCBPU1Mgd2lsbCBmb2xsb3cgd2l0aCB0aGUgT2JqZWN0IG5hbWUgdG8gZm9ybSB0aGUgcmV0dXJuIFVSTC5cbiAgICAgKiBOYW1lIHRvIGFjY2VzcyB0aGUgT2JqZWN0IG15b2JqZWN0LCBmb3IgZXhhbXBsZSwgaWYgeW91IHNwZWNpZnkgdGhpcyB0byBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvLCB0aGVuIGJhY2sgdG8gdGhlIHNvdXJjZSBVUkwgZm9yIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9teW9iamVjdCwgaWYgeW91IHNwZWNpZnkgdGhpcyB0byBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvZGlyMVxcLywgQmFjayB0byB0aGUgc291cmNlIFVSTCBhcyBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvZGlyMVxcL215b2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWlycm9yVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlcGxhY2VLZXlXaXRoOiBXaXRoIFJlZGlyZWN0LCB0aGUgT2JqZWN0IG5hbWUgaXMgcmVwbGFjZWQgd2l0aCB0aGUgdmFsdWUgc3BlY2lmaWVkIGJ5IFJlcGxhY2VLZXlXaXRoLCB3aGljaCBhbGxvd3MgeW91IHRvIHNldCB2YXJpYWJsZXMuIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIHZhcmlhYmxlIGlzICR7a2V5fSwgd2hpY2ggcmVwcmVzZW50cyB0aGUgbmFtZSBvZiB0aGUgT2JqZWN0IGluIHRoZSByZXF1ZXN0LlxuICAgICAqIFN1cHBvc2UgdG8gYWNjZXNzIHRoZSBPYmplY3QgZm9yIHRoZSB0ZXN0LCBpZiBzZXQgUmVwbGFjZUtleVdpdGggdG8gcHJlZml4XFwvJHtrZXl9LiBUaGUgc3VmZml4LCBpcyB0aGUgTG9jYXRpb24gaGVhZCB0byBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvcHJlZml4XFwvdGVzdC5zdWZmaXguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXBsYWNlS2V5V2l0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JIZWFkZXJzOiBTcGVjaWZpZXMgdGhlIEhlYWRlciB0aGF0IGlzIG1pcnJvcmVkIGJhY2sgdG8gdGhlIHNvdXJjZS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWlycm9ySGVhZGVycz86IFJvc0J1Y2tldC5NaXJyb3JIZWFkZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cFJlZGlyZWN0Q29kZTogU3RhdHVzIGNvZGUgcmV0dXJuZWQgd2hlbiBqdW1waW5nLiBPbmx5IGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gRXh0ZXJuYWwgb3IgQWxpQ0ROLlRoZSBkZWZhdWx0IHZhbHVlIGlzIDMwMi5cbiAgICAgKiBWYWx1ZTogMzAxLCAzMDIsIDMwN1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cFJlZGlyZWN0Q29kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmFibGVSZXBsYWNlUHJlZml4OiBJZiB5b3Ugc2V0IHRoaXMgZmllbGQgdG8gdHJ1ZSwgdGhlIHByZWZpeCBvZiBPYmplY3QgaXMgcmVwbGFjZWQgd2l0aCB0aGUgdmFsdWUgc3BlY2lmaWVkIGJ5IFJlcGxhY2VLZXlQcmVmaXhXaXRoLiBJZiB0aGlzIGZpZWxkIGlzIG5vdCBzcGVjaWZpZWQgb3IgaXMgZW1wdHksIGl0IG1lYW5zIHRoYXQgdGhlIE9iamVjdCBwcmVmaXggaXMgdHJ1bmNhdGVkLlxuICAgICAqIE5vdGVzOiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBSZXBsYWNlS2V5V2l0aCBmaWVsZCBpcyBub3QgbnVsbC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5hYmxlUmVwbGFjZVByZWZpeD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzc1F1ZXJ5U3RyaW5nOiBXaGV0aGVyIHRvIGNhcnJ5IHJlcXVlc3QgcGFyYW1ldGVycyB3aGVuIHBlcmZvcm1pbmcgYSBqdW1wIG9yIG1pcnJvcmluZyBiYWNrIHRvIHRoZSBzb3VyY2UgcnVsZS5cbiAgICAgKiBEb2VzIHRoZSB1c2VyIHJlcXVlc3QgT1NTIHdpdGggdGhlIHJlcXVlc3QgcGFyYW1ldGVycz8gYT1iJmM9ZCwgYW5kIHNldCBQYXNzUXVlcnlTdHJpbmcgdG8gdHJ1ZSwgaWYgdGhlIHJ1bGUgaXMgYSAzMDIganVtcCwgdGhlbiB0aGlzIHJlcXVlc3QgcGFyYW1ldGVyIGlzIGFkZGVkIGluIHRoZSBMb2NhdGlvbiBoZWFkZXIgb2YgdGhlIGp1bXAuIEZvciBleGFtcGxlLCBMb2NhdGlvbjpleGFtcGxlLmNvbT9hPWImYz1kLCB0aGUganVtcCB0eXBlIGlzIG1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2UsIHRoZW4gdGhpcyByZXF1ZXN0IHBhcmFtZXRlciB3aWxsIGFsc28gYmUgY2FycmllZCBpbiB0aGUgaW5pdGlhdGVkIGJhY2sgdG8gdGhlIHNvdXJjZSByZXF1ZXN0LlxuICAgICAqIFZhbGlkIHZhbHVlczogdHJ1ZSwgZmFsc2UgKGRlZmF1bHQpXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXNzUXVlcnlTdHJpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pcnJvckZvbGxvd1JlZGlyZWN0OiBJZiB0aGUgcmVzdWx0IG9idGFpbmVkIGJ5IG1pcnJpbGluZyBiYWNrIHRvIHRoZSBzb3VyY2UgaXMgM3h4LCB3aGV0aGVyIHRvIGNvbnRpbnVlIHRvIGp1bXAgdG8gdGhlIHNwZWNpZmllZCBMb2NhdGlvbiB0byBvYnRhaW4gZGF0YS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIEZvciBleGFtcGxlLCB3aGVuIHdlIG1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2UsIHRoZSBzb3VyY2UgcmV0dXJucyBhIDMwMiB3aXRoIExvY2F0aW9uIHNwZWNpZmllZC5cbiAgICAgKiAtIElmIHNldCB0byB0cnVlLCBPU1Mgd2lsbCBjb250aW51ZSB0byByZXF1ZXN0IHRoZSBMb2NhdGlvbi5cbiAgICAgKiBJdCBjYW4ganVtcCB1cCB0byAxMCB0aW1lcywgYW5kIGlmIGl0IGp1bXBzIG1vcmUgdGhhbiAxMCB0aW1lcywgaXQgZmFpbHMgdG8gcmV0dXJuIHRoZSBtaXJyb3IgYmFjayB0byB0aGUgc291cmNlLlxuICAgICAqIC0gSWYgc2V0IHRvIGZhbHNlLCBPU1Mgd2lsbCByZXR1cm4gMzAyIGFuZCBwYXNzIHRocm91Z2ggdGhlIExvY2F0aW9uLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1pcnJvckZvbGxvd1JlZGlyZWN0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXBsYWNlS2V5UHJlZml4V2l0aDogVGhpcyB2YWx1ZSB3aWxsIGJlIHN1YnN0aXR1dGVkIGZvciB0aGUgcHJlZml4IG9mIHRoZSBPYmplY3QgbmFtZSBpbiBSZWRpcmVjdC4gSWYgdGhlIHByZWZpeCBpcyBlbXB0eSwgdGhlIHN0cmluZyBpcyBpbnNlcnRlZCBiZWZvcmUgdGhlIE9iamVjdCBuYW1lLlxuICAgICAqIE5vdGVzOiBPbmx5IFJlcGxhY2VLZXlXaXRoIG9yIFJlcGxhY2VLZXlQcmVmaXhXaXRoIG5vZGVzIGFyZSBhbGxvd2VkLlxuICAgICAqIEh5cG90aGVzaXMgdG8gYWNjZXNzIHRoZSBPYmplY3QgZm9yIEFCQ1xcL3Rlc3QuIFRYVCwgaWYgc2V0IEtleVByZWZpeEVxdWFscyBmb3IgQUJDIFxcLywgUmVwbGFjZUtleVByZWZpeFdpdGggZm9yIGRlZiBcXC8sIHRoZW4gdGhlIExvY2F0aW9uIGhlYWQgdG8gaHR0cDpcXC9cXC9leGFtcGxlLmNvbVxcL2RlZlxcL3Rlc3QudHh0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVwbGFjZUtleVByZWZpeFdpdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVkaXJlY3RUeXBlOiBTcGVjaWZpZXMgdGhlIHR5cGUgb2YganVtcC4gVGhlIHJhbmdlIGlzIGFzIGZvbGxvd3M6XG4gICAgICogLSBNaXJyb3I6IE1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2UuXG4gICAgICogLSBFeHRlcm5hbDogRXh0ZXJuYWwgYnJhbmNoLCBpLmUuIE9TUyB3aWxsIHJldHVybiBhIDN4eCByZXF1ZXN0IHNwZWNpZnlpbmcgdGhlIGJyYW5jaCB0byBhbm90aGVyIGFkZHJlc3MuXG4gICAgICogLSBBbGlDRE46IEFsaXl1biBDRE4ganVtcCwgbWFpbmx5IHVzZWQgZm9yIHRoZSBDRE4gb2YgQWxpeXVuLiBVbmxpa2UgRXh0ZXJuYWwsIE9TUyBhZGRzIGFuIGFkZGl0aW9uYWwgSGVhZGVyLiBBZnRlciBpZGVudGlmeWluZyB0aGlzIEhlYWRlciwgQWxpeXVuIENETiB3aWxsIGFjdGl2ZWx5IGp1bXAgdG8gdGhlIHNwZWNpZmllZCBhZGRyZXNzIGFuZCByZXR1cm4gdGhlIG9idGFpbmVkIGRhdGEgdG8gdGhlIHVzZXIgaW5zdGVhZCBvZiByZXR1cm5pbmcgdGhlIDN4eCBqdW1wIHJlcXVlc3QgdG8gdGhlIHVzZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWRpcmVjdFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JQYXNzUXVlcnlTdHJpbmc6IFNhbWUgYXMgUGFzc1F1ZXJ5U3RyaW5nLCBidXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIFBhc3NRdWVyeVN0cmluZy4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JQYXNzUXVlcnlTdHJpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pcnJvckNoZWNrTWQ1OiBXaGV0aGVyIHRvIGNoZWNrIE1ENSBiYWNrIHRvIHRoZSBzb3VyY2UgYm9keS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIFdoZW4gTWlycm9yQ2hlY2tNZDUgaXMgc2V0IHRvIHRydWUsIGFuZCB0aGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgdGhlIHNvdXJjZSBjb250YWlucyB0aGUgQ29udGVudC1NZDUgSGVhZGVyLCBPU1MgY2hlY2tzIHdoZXRoZXIgdGhlIHB1bGxlZCBkYXRhIE1ENSBtYXRjaGVzIHRoaXMgaGVhZGVyLCBpZiBub3QsIGl0IGlzIG5vdCBzYXZlZCBvbiBPU1MuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1pcnJvckNoZWNrTWQ1PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogUHJvdG9jb2wgd2hlbiBqdW1waW5nLiBPbmx5IGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gRXh0ZXJuYWwgb3IgQWxpQ0ROLlxuICAgICAqIElmIHRoZSBmaWxlIHlvdSB3YW50IHRvIGFjY2VzcyBpcyB0ZXN0LCBzZXQgdG8gZ28gdG8gZXhhbXBsZS5jb20sIGFuZCBzZXQgUHJvdG9jb2wgdG8gaHR0cHMsIHRoZSBMb2NhdGlvbiBoZWFkZXIgaXMgaHR0cHM6XFwvXFwvZXhhbXBsZS5jb21cXC90ZXN0LlxuICAgICAqIFZhbHVlOiBodHRwLCBodHRwc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdE5hbWU6IFRoZSBkb21haW4gbmFtZSBvZiB0aGUganVtcCwgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBjb25mb3JtIHRvIHRoZSBkb21haW4gbmFtZSBzcGVjaWZpY2F0aW9uLlxuICAgICAqIElmIHRoZSBmaWxlIHlvdSB3YW50IHRvIGFjY2VzcyBpcyB0ZXN0LCB0aGUgUHJvdG9jb2wgaXMgc2V0IHRvIGh0dHBzLCBhbmQgdGhlIEhvc3RuYW1lIGlzIHNldCB0byBleGFtcGxlLmNvbSwgdGhlIExvY2F0aW9uIGhlYWRlciBpcyBodHRwczpcXC9cXC9leGFtcGxlLmNvbVxcL3Rlc3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlZGlyZWN0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlZGlyZWN0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X1JlZGlyZWN0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtaXJyb3JVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubWlycm9yVXJsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsYWNlS2V5V2l0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBsYWNlS2V5V2l0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9ySGVhZGVycycsIFJvc0J1Y2tldF9NaXJyb3JIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWlycm9ySGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFJlZGlyZWN0Q29kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmh0dHBSZWRpcmVjdENvZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiMzAxXCIsXCIzMDJcIixcIjMwN1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBSZWRpcmVjdENvZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlUmVwbGFjZVByZWZpeCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlUmVwbGFjZVByZWZpeCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc1F1ZXJ5U3RyaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5wYXNzUXVlcnlTdHJpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pcnJvckZvbGxvd1JlZGlyZWN0Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5taXJyb3JGb2xsb3dSZWRpcmVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGFjZUtleVByZWZpeFdpdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwbGFjZUtleVByZWZpeFdpdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZGlyZWN0VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWRpcmVjdFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVkaXJlY3RUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWRpcmVjdFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTWlycm9yXCIsXCJFeHRlcm5hbFwiLFwiQWxpQ0ROXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkaXJlY3RUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9yUGFzc1F1ZXJ5U3RyaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5taXJyb3JQYXNzUXVlcnlTdHJpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pcnJvckNoZWNrTWQ1Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5taXJyb3JDaGVja01kNSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImh0dHBcIixcImh0dHBzXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hvc3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3ROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlZGlyZWN0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJlZGlyZWN0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWRpcmVjdFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5SZWRpcmVjdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSZWRpcmVjdFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfUmVkaXJlY3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdNaXJyb3JVUkwnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pcnJvclVybCksXG4gICAgICAnUmVwbGFjZUtleVdpdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcGxhY2VLZXlXaXRoKSxcbiAgICAgICdNaXJyb3JIZWFkZXJzJzogcm9zQnVja2V0TWlycm9ySGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pcnJvckhlYWRlcnMpLFxuICAgICAgJ0h0dHBSZWRpcmVjdENvZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBSZWRpcmVjdENvZGUpLFxuICAgICAgJ0VuYWJsZVJlcGxhY2VQcmVmaXgnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVSZXBsYWNlUHJlZml4KSxcbiAgICAgICdQYXNzUXVlcnlTdHJpbmcnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzUXVlcnlTdHJpbmcpLFxuICAgICAgJ01pcnJvckZvbGxvd1JlZGlyZWN0Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWlycm9yRm9sbG93UmVkaXJlY3QpLFxuICAgICAgJ1JlcGxhY2VLZXlQcmVmaXhXaXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBsYWNlS2V5UHJlZml4V2l0aCksXG4gICAgICAnUmVkaXJlY3RUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWRpcmVjdFR5cGUpLFxuICAgICAgJ01pcnJvclBhc3NRdWVyeVN0cmluZyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pcnJvclBhc3NRdWVyeVN0cmluZyksXG4gICAgICAnTWlycm9yQ2hlY2tNZDUnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5taXJyb3JDaGVja01kNSksXG4gICAgICAnUHJvdG9jb2wnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb3RvY29sKSxcbiAgICAgICdIb3N0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdE5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZWZlcmVyTGlzdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWZlcmVyTGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxsb3dFbXB0eVJlZmVyZXI6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWxsb3dFbXB0eVJlZmVyZXI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZmVyZXJMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5yZWZlcmVyTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb3dFbXB0eVJlZmVyZXInLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFsbG93RW1wdHlSZWZlcmVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJlZmVyZXJDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5SZWZlcmVyQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZWZlcmVyTGlzdCc6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJlZmVyZXJMaXN0KSxcbiAgICAgICdBbGxvd0VtcHR5UmVmZXJlcic6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFsbG93RW1wdHlSZWZlcmVyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm91dGluZ1J1bGVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbmRpdGlvbjogQ29uZGl0aW9ucyBmb3IgbWF0Y2hpbmcuXG4gICAgICogVGhpcyBydWxlIGlzIGV4ZWN1dGVkIGlmIHRoZSBzcGVjaWZpZWQgaXRlbXMgYXJlIGFsbCBzYXRpc2ZpZWQuIEEgbWF0Y2ggaXMgb25seSBjb25zaWRlcmVkIGlmIGFsbCBjb25kaXRpb25zIGZvciBlYWNoIG5vZGUgdW5kZXIgdGhpcyBjb250YWluZXIgYXJlIG1ldC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbmRpdGlvbjogUm9zQnVja2V0LkNvbmRpdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGVOdW1iZXI6IE1hdGNoIGFuZCBleGVjdXRlIHRoZSBzZXF1ZW5jZSBudW1iZXIgb2YgdGhlIFJvdXRpbmdSdWxlLCBPU1Mgd2lsbCBtYXRjaCB0aGUgcnVsZXMgaW4gdHVybiBhY2NvcmRpbmcgdG8gdGhpcyBzZXF1ZW5jZSBudW1iZXIuIElmIHRoZSBtYXRjaCBpcyBzdWNjZXNzZnVsLCB0aGlzIHJ1bGUgaXMgZXhlY3V0ZWQgYW5kIG5vIHN1YnNlcXVlbnQgcnVsZXMgYXJlIGV4ZWN1dGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcnVsZU51bWJlcjogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZGlyZWN0OiBTcGVjaWZpZXMgdGhlIGFjdGlvbiB0byBiZSBwZXJmb3JtZWQgd2hlbiB0aGlzIHJ1bGUgaXMgbWF0Y2hlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZGlyZWN0OiBSb3NCdWNrZXQuUmVkaXJlY3RQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvdXRpbmdSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0aW5nUnVsZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfUm91dGluZ1J1bGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb25kaXRpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29uZGl0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb25kaXRpb24nLCBSb3NCdWNrZXRfQ29uZGl0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29uZGl0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTnVtYmVyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOdW1iZXInLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ydWxlTnVtYmVyLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU51bWJlcicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5ydWxlTnVtYmVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWRpcmVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkaXJlY3QnLCBSb3NCdWNrZXRfUmVkaXJlY3RQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZWRpcmVjdCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3V0aW5nUnVsZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuUm91dGluZ1J1bGVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0aW5nUnVsZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuUm91dGluZ1J1bGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJvdXRpbmdSdWxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfUm91dGluZ1J1bGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ29uZGl0aW9uJzogcm9zQnVja2V0Q29uZGl0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29uZGl0aW9uKSxcbiAgICAgICdSdWxlTnVtYmVyJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTnVtYmVyKSxcbiAgICAgICdSZWRpcmVjdCc6IHJvc0J1Y2tldFJlZGlyZWN0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVkaXJlY3QpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSdWxlUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXR1czogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWJvcnRNdWx0aXBhcnRVcGxvYWQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWJvcnRNdWx0aXBhcnRVcGxvYWQ/OiBSb3NCdWNrZXQuQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmaWx0ZXI6IFRoaXMgZXhjbHVzaW9uIHJ1bGUgaGFzIGF0IG1vc3Qgb25lIGNvbmRpdGlvbmFsIGFyZ3VtZW50IGNvbnRhaW5lci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZpbHRlcj86IFJvc0J1Y2tldC5GaWx0ZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleHBpcmF0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4cGlyYXRpb24/OiBSb3NCdWNrZXQuRXhwaXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRyYW5zaXRpb246IFRoZSBjaGFuZ2Ugb2YgdGhlIHN0b3JhZ2UgY2xhc3Mgb2Ygb2JqZWN0cyB0aGF0IG1hdGNoIHRoZSBsaWZlY3ljbGUgcnVsZSB3aGVuIHRoZSBvYmplY3RzIGV4cGlyZS5cbiAgICAgKiBJbiB0aGUgY2hpbGQgcHJvcGVydGllcywgeW91IGNhbiBvbmx5IGNob29zZSBvbmUgYmV0d2VlbiBEYXlzIGFuZCBDcmVhdGVkQmVmb3JlRGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRyYW5zaXRpb24/OiBBcnJheTxSb3NCdWNrZXQuVHJhbnNpdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmVmaXg6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJ1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkXCIsXCJEaXNhYmxlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Fib3J0TXVsdGlwYXJ0VXBsb2FkJywgUm9zQnVja2V0X0Fib3J0TXVsdGlwYXJ0VXBsb2FkUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWJvcnRNdWx0aXBhcnRVcGxvYWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpbHRlcicsIFJvc0J1Y2tldF9GaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5maWx0ZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V4cGlyYXRpb24nLCBSb3NCdWNrZXRfRXhwaXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmV4cGlyYXRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRyYW5zaXRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50cmFuc2l0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudHJhbnNpdGlvbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zaXRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHJhbnNpdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2l0aW9uJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQnVja2V0X1RyYW5zaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudHJhbnNpdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZWZpeCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcmVmaXgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZWZpeCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmVmaXgpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUnVsZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5SdWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJ1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UnVsZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1N0YXR1cyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdHVzKSxcbiAgICAgICdBYm9ydE11bHRpcGFydFVwbG9hZCc6IHJvc0J1Y2tldEFib3J0TXVsdGlwYXJ0VXBsb2FkUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWJvcnRNdWx0aXBhcnRVcGxvYWQpLFxuICAgICAgJ0ZpbHRlcic6IHJvc0J1Y2tldEZpbHRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZpbHRlciksXG4gICAgICAnRXhwaXJhdGlvbic6IHJvc0J1Y2tldEV4cGlyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5leHBpcmF0aW9uKSxcbiAgICAgICdUcmFuc2l0aW9uJzogcm9zLmxpc3RNYXBwZXIocm9zQnVja2V0VHJhbnNpdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50cmFuc2l0aW9uKSxcbiAgICAgICdJRCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWQpLFxuICAgICAgJ1ByZWZpeCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJlZml4KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNzZUFsZ29yaXRobTogU3BlY2lmaWVzIHRoZSBkZWZhdWx0IHNlcnZlci1zaWRlIGVuY3J5cHRpb24gbWV0aG9kLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3NlQWxnb3JpdGhtOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga21zTWFzdGVyS2V5SWQ6IFNwZWNpZmllcyB0aGUgQ01LIElEIHdoZW4gdGhlIHZhbHVlIG9mIFNTRUFsZ29yaXRobSBpcyBLTVMgYW5kIGEgc3BlY2lmaWVkIENNSyBpcyB1c2VkIGZvciBlbmNyeXB0aW9uLiBJZiB0aGUgdmFsdWUgb2YgU1NFQWxnb3JpdGhtIGlzIG5vdCBLTVMsIHRoaXMgZWxlbWVudCBtdXN0IGJlIG51bGwuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrbXNNYXN0ZXJLZXlJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2VBbGdvcml0aG0nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3NlQWxnb3JpdGhtKSk7XG4gICAgaWYocHJvcGVydGllcy5zc2VBbGdvcml0aG0gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNzZUFsZ29yaXRobSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3NlQWxnb3JpdGhtJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3NlQWxnb3JpdGhtLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIktNU1wiLFwiQUVTMjU2XCIsXCJTTTRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2VBbGdvcml0aG0nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3NlQWxnb3JpdGhtKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrbXNNYXN0ZXJLZXlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rbXNNYXN0ZXJLZXlJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU1NFQWxnb3JpdGhtJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zc2VBbGdvcml0aG0pLFxuICAgICAgJ0tNU01hc3RlcktleUlEJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rbXNNYXN0ZXJLZXlJZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNldHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IFNldCB0aGUgdmFsdWUgb2YgdGhlIEhlYWRlciB0byBhIG1heGltdW0gb2YgMTAyNCBieXRlcyB3aXRob3V0IFxcclxcbi4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IFNldHMgdGhlIEhlYWRlciBrZXkgdG8gYSBtYXhpbXVtIG9mIDEwMjQgYnl0ZXMgaW4gdGhlIHNhbWUgY2hhcmFjdGVyIHNldCBhcyBQYXNzLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNldHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2V0c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9TZXRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudmFsdWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy52YWx1ZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnZhbHVlKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgaWYocHJvcGVydGllcy5rZXkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmtleSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmtleSxcbiAgICAgICAgICByZWc6IC9eWy1hLXpBLVowLTldezEsMTAyNH0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTZXRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlNldHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNldHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuU2V0c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRTZXRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9TZXRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY3JlYXRlZEJlZm9yZURhdGU6IFNwZWNpZnkgYSBkYXRlOyBPU1Mgd2lsbCBhcHBseSBsaWZlY3ljbGUgcnVsZXMgdG8gZGF0YSB3aG9zZSBsYXN0IG1vZGlmaWNhdGlvbiB0aW1lIGlzIGVhcmxpZXIgdGhhbiB0aGlzIGRhdGUuIFRoZSBkYXRlIG11c3QgY29uZm9ybSB0byB0aGUgSVNPODYwMSBmb3JtYXQgYW5kIG11c3QgYmUgYXQgbWlkbmlnaHQgVVRDLlxuICAgICAqIEV4YW1wbGUgdmFsdWU6IDIwMDItMTAtMTFUMDA6MDA6MDAuMDAwWlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY3JlYXRlZEJlZm9yZURhdGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmV0dXJuVG9TdGRXaGVuVmlzaXQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGNoYW5nZSB0aGUgc3RvcmFnZSBjbGFzcyBvZiBub24tU3RhbmRhcmQgb2JqZWN0cyBiYWNrIHRvIFN0YW5kYXJkIGFmdGVyIHRoZSBvYmplY3RzIGFyZSBhY2Nlc3NlZC4gVGhpcyBlbGVtZW50IHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gdGhlIElzQWNjZXNzVGltZSBlbGVtZW50IGlzIHNldCB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmV0dXJuVG9TdGRXaGVuVmlzaXQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0b3JhZ2VDbGFzczogVGhlIHN0b3JhZ2UgY2xhc3MgdG8gd2hpY2ggb2JqZWN0cyBhcmUgY2hhbmdlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0b3JhZ2VDbGFzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkYXlzOiBTcGVjaWZ5IHRoZSBudW1iZXIgb2YgZGF5cyBhZnRlciB0aGUgb2JqZWN0J3MgbGFzdCB1cGRhdGUgd2hlbiB0aGUgbGlmZWN5Y2xlIHJ1bGUgdGFrZXMgZWZmZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGF5cz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGxvd1NtYWxsRmlsZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gY2hhbmdlIHRoZSBzdG9yYWdlIGNsYXNzIG9mIG9iamVjdHMgd2hvc2Ugc2l6ZXMgYXJlIGxlc3MgdGhhbiA2NCBLQiB0byBJQSwgQXJjaGl2ZSwgb3IgQ29sZCBBcmNoaXZlIGJhc2VkIG9uIHRoZWlyIGxhc3QgYWNjZXNzIHRpbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbGxvd1NtYWxsRmlsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXNBY2Nlc3NUaW1lOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgbGlmZWN5Y2xlIHJ1bGUgYXBwbGllcyB0byBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIGxhc3QgYWNjZXNzIHRpbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpc0FjY2Vzc1RpbWU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVHJhbnNpdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUcmFuc2l0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X1RyYW5zaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyZWF0ZWRCZWZvcmVEYXRlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNyZWF0ZWRCZWZvcmVEYXRlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXR1cm5Ub1N0ZFdoZW5WaXNpdCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucmV0dXJuVG9TdGRXaGVuVmlzaXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0b3JhZ2VDbGFzcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RvcmFnZUNsYXNzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdG9yYWdlQ2xhc3MnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdG9yYWdlQ2xhc3MsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSUFcIixcIkFyY2hpdmVcIixcIkNvbGRBcmNoaXZlXCIsXCJEZWVwQ29sZEFyY2hpdmVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdG9yYWdlQ2xhc3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RvcmFnZUNsYXNzKSk7XG4gICAgaWYocHJvcGVydGllcy5kYXlzICYmICh0eXBlb2YgcHJvcGVydGllcy5kYXlzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXlzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGF5cyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXlzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRheXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93U21hbGxGaWxlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hbGxvd1NtYWxsRmlsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNBY2Nlc3NUaW1lJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pc0FjY2Vzc1RpbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVHJhbnNpdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5UcmFuc2l0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUcmFuc2l0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlRyYW5zaXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0VHJhbnNpdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfVHJhbnNpdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NyZWF0ZWRCZWZvcmVEYXRlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jcmVhdGVkQmVmb3JlRGF0ZSksXG4gICAgICAnUmV0dXJuVG9TdGRXaGVuVmlzaXQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXR1cm5Ub1N0ZFdoZW5WaXNpdCksXG4gICAgICAnU3RvcmFnZUNsYXNzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdG9yYWdlQ2xhc3MpLFxuICAgICAgJ0RheXMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRheXMpLFxuICAgICAgJ0FsbG93U21hbGxGaWxlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxsb3dTbWFsbEZpbGUpLFxuICAgICAgJ0lzQWNjZXNzVGltZSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzQWNjZXNzVGltZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFZlcnNpb25pbmdDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXR1czogU3BlY2lmaWVzIHRoZSB2ZXJzaW9uaW5nIHN0YXRlIG9mIGEgYnVja2V0LiBWYWxpZCB2YWx1ZXM6IEVuYWJsZWQgYW5kIFN1c3BlbmRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RhdHVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiRW5hYmxlZFwiLFwiU3VzcGVuZGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXR1cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJWZXJzaW9uaW5nQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5WZXJzaW9uaW5nQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0VmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X1ZlcnNpb25pbmdDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBXZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluZGV4RG9jdW1lbnQ6IFRoZSBwcm9wZXJ0aWVzIG9mIGRlZmF1bHQgaG9tZSBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5kZXhEb2N1bWVudD86IFJvc0J1Y2tldC5JbmRleERvY3VtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcm91dGluZ1J1bGVzOiBUaGUgbGlzdCBvZiByb3V0aW5nIHJ1bGVzLCB1cCB0byAyMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJvdXRpbmdSdWxlcz86IEFycmF5PFJvc0J1Y2tldC5Sb3V0aW5nUnVsZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXJyb3JEb2N1bWVudDogVGhlIHByb3BlcnRpZXMgb2YgZGVmYXVsdCBlcnJvciBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXJyb3JEb2N1bWVudD86IFJvc0J1Y2tldC5FcnJvckRvY3VtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBXZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMlByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5kZXhEb2N1bWVudCcsIFJvc0J1Y2tldF9JbmRleERvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5kZXhEb2N1bWVudCkpO1xuICAgIGlmKHByb3BlcnRpZXMucm91dGluZ1J1bGVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucm91dGluZ1J1bGVzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucm91dGluZ1J1bGVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGluZ1J1bGVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJvdXRpbmdSdWxlcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRpbmdSdWxlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0J1Y2tldF9Sb3V0aW5nUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMucm91dGluZ1J1bGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlcnJvckRvY3VtZW50JywgUm9zQnVja2V0X0Vycm9yRG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5lcnJvckRvY3VtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIldlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMlByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5XZWJzaXRlQ29uZmlndXJhdGlvblYyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFdlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X1dlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdJbmRleERvY3VtZW50Jzogcm9zQnVja2V0SW5kZXhEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4RG9jdW1lbnQpLFxuICAgICAgJ1JvdXRpbmdSdWxlcyc6IHJvcy5saXN0TWFwcGVyKHJvc0J1Y2tldFJvdXRpbmdSdWxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yb3V0aW5nUnVsZXMpLFxuICAgICAgJ0Vycm9yRG9jdW1lbnQnOiByb3NCdWNrZXRFcnJvckRvY3VtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXJyb3JEb2N1bWVudCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NCdWNrZXRBY2Nlc3NNb25pdG9yYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRhY2Nlc3Ntb25pdG9yXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQnVja2V0QWNjZXNzTW9uaXRvclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IFRoZSBuYW1lIG9mIHRoZSBidWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQnVja2V0QWNjZXNzTW9uaXRvclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NCdWNrZXRBY2Nlc3NNb25pdG9yUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0QWNjZXNzTW9uaXRvclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCdWNrZXRBY2Nlc3NNb25pdG9yUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0QWNjZXNzTW9uaXRvcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0QWNjZXNzTW9uaXRvclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldEFjY2Vzc01vbml0b3JgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0QWNjZXNzTW9uaXRvclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0QWNjZXNzTW9uaXRvclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdCdWNrZXQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6T1NTOjpCdWNrZXRBY2Nlc3NNb25pdG9yYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQnVja2V0QWNjZXNzTW9uaXRvcmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldGFjY2Vzc21vbml0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0J1Y2tldEFjY2Vzc01vbml0b3IgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6QnVja2V0QWNjZXNzTW9uaXRvclwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0OiBUaGUgbmFtZSBvZiB0aGUgYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBidWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NCdWNrZXRBY2Nlc3NNb25pdG9yUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCdWNrZXRBY2Nlc3NNb25pdG9yLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5idWNrZXQgPSBwcm9wcy5idWNrZXQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0OiB0aGlzLmJ1Y2tldCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQnVja2V0QWNjZXNzTW9uaXRvclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0J1Y2tldENuYW1lVG9rZW5gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldGNuYW1ldG9rZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NCdWNrZXRDbmFtZVRva2VuUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldDogVGhlIG5hbWUgb2YgdGhlIGJ1Y2tldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBidWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW46IFRoZSBjdXN0b20gZG9tYWluLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0J1Y2tldENuYW1lVG9rZW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0Q25hbWVUb2tlblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldENuYW1lVG9rZW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5idWNrZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kb21haW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW4pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQnVja2V0Q25hbWVUb2tlblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldENuYW1lVG9rZW5gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldENuYW1lVG9rZW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRDbmFtZVRva2VuYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldENuYW1lVG9rZW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0J1Y2tldENuYW1lVG9rZW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQnVja2V0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXQpLFxuICAgICAgJ0RvbWFpbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZG9tYWluKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpPU1M6OkJ1Y2tldENuYW1lVG9rZW5gLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBCdWNrZXRDbmFtZVRva2VuYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3MtYnVja2V0Y25hbWV0b2tlblxuICovXG5leHBvcnQgY2xhc3MgUm9zQnVja2V0Q25hbWVUb2tlbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1NTOjpCdWNrZXRDbmFtZVRva2VuXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJ1Y2tldDogVGhlIG5hbWUgb2YgdGhlIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJ1Y2tldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW46IFRoZSBjdXN0b20gZG9tYWluLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEV4cGlyZVRpbWU6IFRva2VuIEV4cGlyYXRpb24gVGltZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckV4cGlyZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVG9rZW46IFRva2VuIHVzZWQgdG8gdmVyaWZ5IGRvbWFpbiBvd25lcnNoaXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUb2tlbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0OiBUaGUgbmFtZSBvZiB0aGUgYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBidWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW46IFRoZSBjdXN0b20gZG9tYWluLlxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NCdWNrZXRDbmFtZVRva2VuUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCdWNrZXRDbmFtZVRva2VuLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJCdWNrZXQgPSB0aGlzLmdldEF0dCgnQnVja2V0Jyk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbiA9IHRoaXMuZ2V0QXR0KCdEb21haW4nKTtcbiAgICAgICAgdGhpcy5hdHRyRXhwaXJlVGltZSA9IHRoaXMuZ2V0QXR0KCdFeHBpcmVUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clRva2VuID0gdGhpcy5nZXRBdHQoJ1Rva2VuJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJ1Y2tldCA9IHByb3BzLmJ1Y2tldDtcbiAgICAgICAgdGhpcy5kb21haW4gPSBwcm9wcy5kb21haW47XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0OiB0aGlzLmJ1Y2tldCxcbiAgICAgICAgICAgIGRvbWFpbjogdGhpcy5kb21haW4sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0J1Y2tldENuYW1lVG9rZW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NCdWNrZXRMb2dnaW5nYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRsb2dnaW5nXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQnVja2V0TG9nZ2luZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IFRoZSBuYW1lIG9mIHRoZSBidWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0QnVja2V0OiBUaGUgYnVja2V0IHRoYXQgc3RvcmVzIGFjY2VzcyBsb2dzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldEJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2dpbmdSb2xlOiBBdXRob3JpemF0aW9uIHJvbGUgdXNlZCBmb3IgYnVja2V0IGxvZ2dpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nZ2luZ1JvbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0UHJlZml4OiBUaGUgcHJlZml4IG9mIHRoZSBzYXZlZCBsb2cgb2JqZWN0cy4gVGhpcyBlbGVtZW50IGNhbiBiZSBsZWZ0IGVtcHR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldFByZWZpeD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCdWNrZXRMb2dnaW5nUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldExvZ2dpbmdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRMb2dnaW5nUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dnaW5nUm9sZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dnaW5nUm9sZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0UHJlZml4Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldFByZWZpeCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0QnVja2V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldEJ1Y2tldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0QnVja2V0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldEJ1Y2tldCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCdWNrZXRMb2dnaW5nUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0TG9nZ2luZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0TG9nZ2luZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldExvZ2dpbmdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0TG9nZ2luZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0TG9nZ2luZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdCdWNrZXQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldCksXG4gICAgICAnVGFyZ2V0QnVja2V0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRCdWNrZXQpLFxuICAgICAgJ0xvZ2dpbmdSb2xlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dnaW5nUm9sZSksXG4gICAgICAnVGFyZ2V0UHJlZml4Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRQcmVmaXgpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6QnVja2V0TG9nZ2luZ2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEJ1Y2tldExvZ2dpbmdgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRsb2dnaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCdWNrZXRMb2dnaW5nIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpPU1M6OkJ1Y2tldExvZ2dpbmdcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9nZ2luZ1JvbGU6IEF1dGhvcml6YXRpb24gcm9sZSB1c2VkIGZvciBidWNrZXQgbG9nZ2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvZ2dpbmdSb2xlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhcmdldEJ1Y2tldDogVGhlIGJ1Y2tldCB0aGF0IHN0b3JlcyBhY2Nlc3MgbG9ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhcmdldEJ1Y2tldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUYXJnZXRQcmVmaXg6IFRoZSBwcmVmaXggb2YgdGhlIHNhdmVkIGxvZyBvYmplY3RzLiBUaGlzIGVsZW1lbnQgY2FuIGJlIGxlZnQgZW1wdHkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXJnZXRQcmVmaXg6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldDogVGhlIG5hbWUgb2YgdGhlIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0QnVja2V0OiBUaGUgYnVja2V0IHRoYXQgc3RvcmVzIGFjY2VzcyBsb2dzLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRCdWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dnaW5nUm9sZTogQXV0aG9yaXphdGlvbiByb2xlIHVzZWQgZm9yIGJ1Y2tldCBsb2dnaW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dnaW5nUm9sZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldFByZWZpeDogVGhlIHByZWZpeCBvZiB0aGUgc2F2ZWQgbG9nIG9iamVjdHMuIFRoaXMgZWxlbWVudCBjYW4gYmUgbGVmdCBlbXB0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0UHJlZml4OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQnVja2V0TG9nZ2luZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQnVja2V0TG9nZ2luZy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTG9nZ2luZ1JvbGUgPSB0aGlzLmdldEF0dCgnTG9nZ2luZ1JvbGUnKTtcbiAgICAgICAgdGhpcy5hdHRyVGFyZ2V0QnVja2V0ID0gdGhpcy5nZXRBdHQoJ1RhcmdldEJ1Y2tldCcpO1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXRQcmVmaXggPSB0aGlzLmdldEF0dCgnVGFyZ2V0UHJlZml4Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJ1Y2tldCA9IHByb3BzLmJ1Y2tldDtcbiAgICAgICAgdGhpcy50YXJnZXRCdWNrZXQgPSBwcm9wcy50YXJnZXRCdWNrZXQ7XG4gICAgICAgIHRoaXMubG9nZ2luZ1JvbGUgPSBwcm9wcy5sb2dnaW5nUm9sZTtcbiAgICAgICAgdGhpcy50YXJnZXRQcmVmaXggPSBwcm9wcy50YXJnZXRQcmVmaXg7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0OiB0aGlzLmJ1Y2tldCxcbiAgICAgICAgICAgIHRhcmdldEJ1Y2tldDogdGhpcy50YXJnZXRCdWNrZXQsXG4gICAgICAgICAgICBsb2dnaW5nUm9sZTogdGhpcy5sb2dnaW5nUm9sZSxcbiAgICAgICAgICAgIHRhcmdldFByZWZpeDogdGhpcy50YXJnZXRQcmVmaXgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0J1Y2tldExvZ2dpbmdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NCdWNrZXRPdmVyd3JpdGVDb25maWdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldG92ZXJ3cml0ZWNvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0J1Y2tldE92ZXJ3cml0ZUNvbmZpZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IFRoZSBuYW1lIG9mIHRoZSBidWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZTogRm9yYmlkIG92ZXJ3cml0ZSBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGU/OiBBcnJheTxSb3NCdWNrZXRPdmVyd3JpdGVDb25maWcuUnVsZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCdWNrZXRPdmVyd3JpdGVDb25maWdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgaWYocHJvcGVydGllcy5ydWxlICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucnVsZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnJ1bGUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJ1bGUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGUnLCByb3MubGlzdFZhbGlkYXRvcihSb3NCdWNrZXRPdmVyd3JpdGVDb25maWdfUnVsZVByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5ydWxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0J1Y2tldE92ZXJ3cml0ZUNvbmZpZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldE92ZXJ3cml0ZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0T3ZlcndyaXRlQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldE92ZXJ3cml0ZUNvbmZpZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0KSxcbiAgICAgICdSdWxlJzogcm9zLmxpc3RNYXBwZXIocm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUnVsZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5ydWxlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpPU1M6OkJ1Y2tldE92ZXJ3cml0ZUNvbmZpZ2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEJ1Y2tldE92ZXJ3cml0ZUNvbmZpZ2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldG92ZXJ3cml0ZWNvbmZpZ1xuICovXG5leHBvcnQgY2xhc3MgUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpPU1M6OkJ1Y2tldE92ZXJ3cml0ZUNvbmZpZ1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSdWxlOiBGb3JiaWQgb3ZlcndyaXRlIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSdWxlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IFRoZSBuYW1lIG9mIHRoZSBidWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIGJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGU6IEZvcmJpZCBvdmVyd3JpdGUgcnVsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVsZTogQXJyYXk8Um9zQnVja2V0T3ZlcndyaXRlQ29uZmlnLlJ1bGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCdWNrZXRPdmVyd3JpdGVDb25maWcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJ1bGUgPSB0aGlzLmdldEF0dCgnUnVsZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5idWNrZXQgPSBwcm9wcy5idWNrZXQ7XG4gICAgICAgIHRoaXMucnVsZSA9IHByb3BzLnJ1bGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0OiB0aGlzLmJ1Y2tldCxcbiAgICAgICAgICAgIHJ1bGU6IHRoaXMucnVsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmluY2lwYWxzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaW5jaXBhbDogQXV0aG9yaXplZCBzdWJqZWN0LiBTdXBwb3J0cyB0aGUgaW5wdXQgb2YgcHJpbWFyeSBhY2NvdW50cywgc3ViLWFjY291bnRzLCBvciByb2xlcy4gSW52YWxpZCBzZXR0aW5nIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByaW5jaXBhbD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmluY2lwYWxzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW5jaXBhbHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRPdmVyd3JpdGVDb25maWdfUHJpbmNpcGFsc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpbmNpcGFsICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucHJpbmNpcGFsKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucHJpbmNpcGFsKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaW5jaXBhbC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5wcmluY2lwYWwpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJpbmNpcGFsc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldE92ZXJ3cml0ZUNvbmZpZy5QcmluY2lwYWxzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmluY2lwYWxzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0T3ZlcndyaXRlQ29uZmlnLlByaW5jaXBhbHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUHJpbmNpcGFsc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRPdmVyd3JpdGVDb25maWdfUHJpbmNpcGFsc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ByaW5jaXBhbCc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnByaW5jaXBhbCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXRPdmVyd3JpdGVDb25maWcge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJ1bGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWN0aW9uOiBUaGUgb3BlcmF0aW9uIHR5cGUuIEN1cnJlbnRseSwgb25seSBcImZvcmJpZFwiIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFjdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdWZmaXg6IFRoZSBzdWZmaXggb2YgdGhlIE9iamVjdCBuYW1lLCB3aGljaCBpcyB1c2VkIHRvIGZpbHRlciBvYmplY3RzIHRvIGJlIHByb2Nlc3NlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1ZmZpeD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxzOiBBIGNvbGxlY3Rpb24gb2YgYXV0aG9yaXplZCBwcmluY2lwYWxzLiBUaGUgdXNhZ2UgaXMgc2ltaWxhciB0byB0aGF0IG9mIHRoZSBQcmluY2lwYWwgb2YgdGhlIEJ1Y2tldCBQb2xpY3kuIFlvdSBjYW4gZW50ZXIgdGhlIHByaW1hcnkgYWNjb3VudCwgc3ViLWFjY291bnQsIG9yIHJvbGUuIElmIHRoaXMgcGFyYW1ldGVyIGlzIGVtcHR5IG9yIG5vdCBjb25maWd1cmVkLCBvdmVyd3JpdGluZyBpcyBub3QgYWxsb3dlZCBmb3Igb2JqZWN0cyB0aGF0IG1lZXQgdGhlIHByZWNlZGluZyBhbmQgc3VmZml4IGNvbmRpdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmluY2lwYWxzPzogUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnLlByaW5jaXBhbHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmVmaXg6IFRoZSBwcmVmaXggb2YgdGhlIE9iamVjdCBuYW1lLCB3aGljaCBpcyB1c2VkIHRvIGZpbHRlciBvYmplY3RzIHRvIGJlIHByb2Nlc3NlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZGVudGl0eTogUnVsZSBJRC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkZW50aXR5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUnVsZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnX1J1bGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFjdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWN0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY3Rpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hY3Rpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZm9yYmlkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWN0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VmZml4Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN1ZmZpeCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFscycsIFJvc0J1Y2tldE92ZXJ3cml0ZUNvbmZpZ19QcmluY2lwYWxzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbmNpcGFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlZml4Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByZWZpeCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWRlbnRpdHknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWRlbnRpdHkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUnVsZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldE92ZXJ3cml0ZUNvbmZpZy5SdWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0T3ZlcndyaXRlQ29uZmlnLlJ1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0T3ZlcndyaXRlQ29uZmlnUnVsZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRPdmVyd3JpdGVDb25maWdfUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0FjdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWN0aW9uKSxcbiAgICAgICdTdWZmaXgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1ZmZpeCksXG4gICAgICAnUHJpbmNpcGFscyc6IHJvc0J1Y2tldE92ZXJ3cml0ZUNvbmZpZ1ByaW5jaXBhbHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmluY2lwYWxzKSxcbiAgICAgICdQcmVmaXgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZWZpeCksXG4gICAgICAnSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkZW50aXR5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRwdWJsaWNhY2Nlc3NibG9ja1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJsb2NrUHVibGljQWNjZXNzOiBXaGV0aGVyIEFsaWJhYmFDbG91ZCBPU1Mgc2hvdWxkIGJsb2NrIHB1YmxpYyBidWNrZXQgcG9saWNpZXMgYW5kIEFDTCBmb3IgdGhpcyBidWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmxvY2tQdWJsaWNBY2Nlc3M6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0OiBUaGUgbmFtZSBvZiB0aGUgYnVja2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UHVibGljQWNjZXNzQmxvY2tQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5idWNrZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Jsb2NrUHVibGljQWNjZXNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJsb2NrUHVibGljQWNjZXNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdibG9ja1B1YmxpY0FjY2VzcycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYmxvY2tQdWJsaWNBY2Nlc3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQnVja2V0UHVibGljQWNjZXNzQmxvY2tQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRQdWJsaWNBY2Nlc3NCbG9ja2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0UHVibGljQWNjZXNzQmxvY2tQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRQdWJsaWNBY2Nlc3NCbG9ja2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRQdWJsaWNBY2Nlc3NCbG9ja1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0UHVibGljQWNjZXNzQmxvY2tQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQmxvY2tQdWJsaWNBY2Nlc3MnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ibG9ja1B1YmxpY0FjY2VzcyksXG4gICAgICAnQnVja2V0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6QnVja2V0UHVibGljQWNjZXNzQmxvY2tgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBCdWNrZXRQdWJsaWNBY2Nlc3NCbG9ja2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldHB1YmxpY2FjY2Vzc2Jsb2NrXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCdWNrZXRQdWJsaWNBY2Nlc3NCbG9jayBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1NTOjpCdWNrZXRQdWJsaWNBY2Nlc3NCbG9ja1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBCbG9ja1B1YmxpY0FjY2VzczogV2hldGhlciBBbGliYWJhQ2xvdWQgT1NTIHNob3VsZCBibG9jayBwdWJsaWMgYnVja2V0IHBvbGljaWVzIGFuZCBBQ0wgZm9yIHRoaXMgYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmxvY2tQdWJsaWNBY2Nlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJsb2NrUHVibGljQWNjZXNzOiBXaGV0aGVyIEFsaWJhYmFDbG91ZCBPU1Mgc2hvdWxkIGJsb2NrIHB1YmxpYyBidWNrZXQgcG9saWNpZXMgYW5kIEFDTCBmb3IgdGhpcyBidWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIGJsb2NrUHVibGljQWNjZXNzOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldDogVGhlIG5hbWUgb2YgdGhlIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQnVja2V0UHVibGljQWNjZXNzQmxvY2tQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJCbG9ja1B1YmxpY0FjY2VzcyA9IHRoaXMuZ2V0QXR0KCdCbG9ja1B1YmxpY0FjY2VzcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ibG9ja1B1YmxpY0FjY2VzcyA9IHByb3BzLmJsb2NrUHVibGljQWNjZXNzO1xuICAgICAgICB0aGlzLmJ1Y2tldCA9IHByb3BzLmJ1Y2tldDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBibG9ja1B1YmxpY0FjY2VzczogdGhpcy5ibG9ja1B1YmxpY0FjY2VzcyxcbiAgICAgICAgICAgIGJ1Y2tldDogdGhpcy5idWNrZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQnVja2V0UmVwbGljYXRpb25gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldHJlcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQnVja2V0UmVwbGljYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogQnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbjogUmVwbGljYXRpb24gY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb246IFJvc0J1Y2tldFJlcGxpY2F0aW9uLlJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UmVwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVwbGljYXRpb25Db25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQnVja2V0UmVwbGljYXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0UmVwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSZXBsaWNhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0UmVwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQnVja2V0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0TmFtZSksXG4gICAgICAnUmVwbGljYXRpb25Db25maWd1cmF0aW9uJzogcm9zQnVja2V0UmVwbGljYXRpb25SZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb25gLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBCdWNrZXRSZXBsaWNhdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldHJlcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCdWNrZXRSZXBsaWNhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvblwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogQnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb246IFJlcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbjogUm9zQnVja2V0UmVwbGljYXRpb24uUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQnVja2V0UmVwbGljYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0J1Y2tldFJlcGxpY2F0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5idWNrZXROYW1lID0gcHJvcHMuYnVja2V0TmFtZTtcbiAgICAgICAgdGhpcy5yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSBwcm9wcy5yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0TmFtZTogdGhpcy5idWNrZXROYW1lLFxuICAgICAgICAgICAgcmVwbGljYXRpb25Db25maWd1cmF0aW9uOiB0aGlzLnJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQnVja2V0UmVwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXRSZXBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRGVzdGluYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYnVja2V0OiBEZXN0aW5hdGlvbiBidWNrZXQgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRyYW5zZmVyVHlwZTogVHJhbnNmZXIgdHlwZSBmb3IgcmVwbGljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0cmFuc2ZlclR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsb2NhdGlvbjogRGVzdGluYXRpb24gcmVnaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9jYXRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYERlc3RpbmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlc3RpbmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UmVwbGljYXRpb25fRGVzdGluYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5idWNrZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYW5zZmVyVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50cmFuc2ZlclR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRyYW5zZmVyVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudHJhbnNmZXJUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2ZlclR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50cmFuc2ZlclR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiaW50ZXJuYWxcIixcImFjY2VsZXJhdGVcIixcIm9zc19hY2NcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2ZlclR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJhbnNmZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2NhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYXRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9jYXRpb24pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRGVzdGluYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5EZXN0aW5hdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGVzdGluYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5EZXN0aW5hdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSZXBsaWNhdGlvbkRlc3RpbmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldFJlcGxpY2F0aW9uX0Rlc3RpbmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQnVja2V0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXQpLFxuICAgICAgJ1RyYW5zZmVyVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJhbnNmZXJUeXBlKSxcbiAgICAgICdMb2NhdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9jYXRpb24pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0UmVwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlcGxpY2FLbXNLZXlJZDogQVJOIG9mIHRoZSBLTVMga2V5IHVzZWQgdG8gZW5jcnlwdCByZXBsaWNhIG9iamVjdHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXBsaWNhS21zS2V5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldFJlcGxpY2F0aW9uX0VuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsaWNhS21zS2V5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwbGljYUttc0tleUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UmVwbGljYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRSZXBsaWNhdGlvbl9FbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1JlcGxpY2FLbXNLZXlJRCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGljYUttc0tleUlkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldFJlcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSVENQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiBXaGV0aGVyIHRvIGVuYWJsZSByZWFsLXRpbWUgcmVwbGljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSVENQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUlRDUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UmVwbGljYXRpb25fUlRDUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5zdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImVuYWJsZWRcIixcImRpc2FibGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXR1cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSVENQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5SVENgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJUQ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLlJUQ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSZXBsaWNhdGlvblJUQ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SVENQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTdGF0dXMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXR1cyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXRSZXBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGU6IFJlcGxpY2F0aW9uIFJ1bGVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJ1bGU6IFJvc0J1Y2tldFJlcGxpY2F0aW9uLlJ1bGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZScsIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1J1bGVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5ydWxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLlJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uUmVwbGljYXRpb25Db25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJlcGxpY2F0aW9uUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1JlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1J1bGUnOiByb3NCdWNrZXRSZXBsaWNhdGlvblJ1bGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldFJlcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSdWxlUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ0YzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBydGM/OiBSb3NCdWNrZXRSZXBsaWNhdGlvbi5SVENQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZXN0aW5hdGlvbjogRGVzdGluYXRpb24gYnVja2V0IGFuZCBsb2NhdGlvbiBmb3IgcmVwbGljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZXN0aW5hdGlvbjogUm9zQnVja2V0UmVwbGljYXRpb24uRGVzdGluYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhY3Rpb246IEFjdGlvbiB0byBiZSB0YWtlbiBvbiBtYXRjaGluZyBvYmplY3RzLiBWYWxpZCB2YWx1ZXMgYXJlIEFMTCwgUFVULCBERUxFVEUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhY3Rpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3luY1JvbGU6IFJvbGUgdXNlZCBmb3IgcmVwbGljYXRpb24gc3luY2hyb25pemF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3luY1JvbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXRSZXBsaWNhdGlvbi5FbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhOiBDcml0ZXJpYSBmb3Igc2VsZWN0aW5nIHNvdXJjZSBvYmplY3RzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc291cmNlU2VsZWN0aW9uQ3JpdGVyaWE/OiBSb3NCdWNrZXRSZXBsaWNhdGlvbi5Tb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByZWZpeFNldDogTGlzdCBvZiBwcmVmaXhlcyB0byB3aGljaCB0aGlzIHJ1bGUgYXBwbGllcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByZWZpeFNldD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uOiBXaGV0aGVyIHRvIHJlcGxpY2F0ZSBleGlzdGluZyBvYmplY3RzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkZW50aXR5OiBJRCBvZiB0aGUgcnVsZSBhcHBsaWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWRlbnRpdHk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJ1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydGMnLCBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SVENQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5ydGMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc3RpbmF0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXN0aW5hdGlvbicsIFJvc0J1Y2tldFJlcGxpY2F0aW9uX0Rlc3RpbmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzdGluYXRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFjdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWN0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY3Rpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hY3Rpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQUxMXCIsXCJQVVRcIixcIkRFTEVURVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY3Rpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N5bmNSb2xlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN5bmNSb2xlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmNyeXB0aW9uQ29uZmlndXJhdGlvbicsIFJvc0J1Y2tldFJlcGxpY2F0aW9uX0VuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhJywgUm9zQnVja2V0UmVwbGljYXRpb25fU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlZml4U2V0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5wcmVmaXhTZXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmhpc3RvcmljYWxPYmplY3RSZXBsaWNhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuaGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoaXN0b3JpY2FsT2JqZWN0UmVwbGljYXRpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5oaXN0b3JpY2FsT2JqZWN0UmVwbGljYXRpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZW5hYmxlZFwiLFwiZGlzYWJsZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoaXN0b3JpY2FsT2JqZWN0UmVwbGljYXRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZGVudGl0eScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pZGVudGl0eSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSdWxlUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uUnVsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUnVsZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLlJ1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UmVwbGljYXRpb25SdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1J1bGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSVEMnOiByb3NCdWNrZXRSZXBsaWNhdGlvblJUQ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ0YyksXG4gICAgICAnRGVzdGluYXRpb24nOiByb3NCdWNrZXRSZXBsaWNhdGlvbkRlc3RpbmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzdGluYXRpb24pLFxuICAgICAgJ0FjdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWN0aW9uKSxcbiAgICAgICdTeW5jUm9sZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3luY1JvbGUpLFxuICAgICAgJ0VuY3J5cHRpb25Db25maWd1cmF0aW9uJzogcm9zQnVja2V0UmVwbGljYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuY3J5cHRpb25Db25maWd1cmF0aW9uKSxcbiAgICAgICdTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYSc6IHJvc0J1Y2tldFJlcGxpY2F0aW9uU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYSksXG4gICAgICAnUHJlZml4U2V0Jzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucHJlZml4U2V0KSxcbiAgICAgICdIaXN0b3JpY2FsT2JqZWN0UmVwbGljYXRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhpc3RvcmljYWxPYmplY3RSZXBsaWNhdGlvbiksXG4gICAgICAnSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkZW50aXR5KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldFJlcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzc2VLbXNFbmNyeXB0ZWRPYmplY3RzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNzZUttc0VuY3J5cHRlZE9iamVjdHM/OiBSb3NCdWNrZXRSZXBsaWNhdGlvbi5Tc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2VLbXNFbmNyeXB0ZWRPYmplY3RzJywgUm9zQnVja2V0UmVwbGljYXRpb25fU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNzZUttc0VuY3J5cHRlZE9iamVjdHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5Tb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5Tb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSZXBsaWNhdGlvblNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU3NlS21zRW5jcnlwdGVkT2JqZWN0cyc6IHJvc0J1Y2tldFJlcGxpY2F0aW9uU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNzZUttc0VuY3J5cHRlZE9iamVjdHMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0UmVwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNzZUttc0VuY3J5cHRlZE9iamVjdHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiBTdGF0dXMgb2YgS01TIGVuY3J5cHRlZCBvYmplY3QgcmVwbGljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNzZUttc0VuY3J5cHRlZE9iamVjdHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRSZXBsaWNhdGlvbl9Tc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5zdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkVuYWJsZWRcIixcIkRpc2FibGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXR1cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uU3NlS21zRW5jcnlwdGVkT2JqZWN0c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLlNzZUttc0VuY3J5cHRlZE9iamVjdHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UmVwbGljYXRpb25Tc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1NzZUttc0VuY3J5cHRlZE9iamVjdHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTdGF0dXMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXR1cyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NCdWNrZXRTdHlsZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3MtYnVja2V0c3R5bGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NCdWNrZXRTdHlsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IFN0b3JhZ2Ugc3BhY2UgdG8gd2hpY2ggdGhlIHBpY3R1cmUgc3R5bGUgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBidWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250ZW50OiBUaGUgSW1hZ2Ugc3R5bGUgY29udGVudCBjYW4gY29udGFpbiBzaW5nbGUgb3IgbXVsdGlwbGUgaW1hZ2UgcHJvY2Vzc2luZyBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdHlsZU5hbWU6IEltYWdlIFN0eWxlIE5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3R5bGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2F0ZWdvcnk6IFN0eWxlIGNhdGVnb3J5LCB2YWxpZCB2YWx1ZXM6IGltYWdlLCBkb2N1bWVudCwgdmlkZW8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2F0ZWdvcnk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQnVja2V0U3R5bGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0U3R5bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRTdHlsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuY2F0ZWdvcnkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNhdGVnb3J5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYXRlZ29yeScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNhdGVnb3J5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImRvY3VtZW50XCIsXCJ2aWRlb1wiLFwiaW1hZ2VcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYXRlZ29yeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jYXRlZ29yeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3R5bGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0eWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3R5bGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0eWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGVudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250ZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRlbnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQnVja2V0U3R5bGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRTdHlsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0U3R5bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRTdHlsZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRTdHlsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0U3R5bGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQnVja2V0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXQpLFxuICAgICAgJ0NvbnRlbnQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRlbnQpLFxuICAgICAgJ1N0eWxlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3R5bGVOYW1lKSxcbiAgICAgICdDYXRlZ29yeSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2F0ZWdvcnkpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6QnVja2V0U3R5bGVgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBCdWNrZXRTdHlsZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldHN0eWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCdWNrZXRTdHlsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1NTOjpCdWNrZXRTdHlsZVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDYXRlZ29yeTogU3R5bGUgY2F0ZWdvcnksIHZhbGlkIHZhbHVlczogaW1hZ2UsIGRvY3VtZW50LCB2aWRlby5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNhdGVnb3J5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbnRlbnQ6IFRoZSBJbWFnZSBzdHlsZSBjb250ZW50IGNhbiBjb250YWluIHNpbmdsZSBvciBtdWx0aXBsZSBpbWFnZSBwcm9jZXNzaW5nIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250ZW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0ZVRpbWU6IEltYWdlIFN0eWxlIENyZWF0aW9uIFRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExhc3RNb2RpZnlUaW1lOiBMYXN0IG1vZGlmaWNhdGlvbiB0aW1lIG9mIEltYWdlIHN0eWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGFzdE1vZGlmeVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3R5bGVOYW1lOiBJbWFnZSBTdHlsZSBOYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3R5bGVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IFN0b3JhZ2Ugc3BhY2UgdG8gd2hpY2ggdGhlIHBpY3R1cmUgc3R5bGUgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGVudDogVGhlIEltYWdlIHN0eWxlIGNvbnRlbnQgY2FuIGNvbnRhaW4gc2luZ2xlIG9yIG11bHRpcGxlIGltYWdlIHByb2Nlc3NpbmcgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29udGVudDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0eWxlTmFtZTogSW1hZ2UgU3R5bGUgTmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3R5bGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2F0ZWdvcnk6IFN0eWxlIGNhdGVnb3J5LCB2YWxpZCB2YWx1ZXM6IGltYWdlLCBkb2N1bWVudCwgdmlkZW8uXG4gICAgICovXG4gICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQnVja2V0U3R5bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0J1Y2tldFN0eWxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDYXRlZ29yeSA9IHRoaXMuZ2V0QXR0KCdDYXRlZ29yeScpO1xuICAgICAgICB0aGlzLmF0dHJDb250ZW50ID0gdGhpcy5nZXRBdHQoJ0NvbnRlbnQnKTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHRoaXMuZ2V0QXR0KCdDcmVhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckxhc3RNb2RpZnlUaW1lID0gdGhpcy5nZXRBdHQoJ0xhc3RNb2RpZnlUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clN0eWxlTmFtZSA9IHRoaXMuZ2V0QXR0KCdTdHlsZU5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYnVja2V0ID0gcHJvcHMuYnVja2V0O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBwcm9wcy5jb250ZW50O1xuICAgICAgICB0aGlzLnN0eWxlTmFtZSA9IHByb3BzLnN0eWxlTmFtZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHByb3BzLmNhdGVnb3J5O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldDogdGhpcy5idWNrZXQsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBzdHlsZU5hbWU6IHRoaXMuc3R5bGVOYW1lLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuY2F0ZWdvcnksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0J1Y2tldFN0eWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQnVja2V0V29ybWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3MtYnVja2V0d29ybVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0J1Y2tldFdvcm1Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0OiBUaGUgbmFtZSBvZiB0aGUgYnVja2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJldGVudGlvblBlcmlvZEluRGF5czogVGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byByZXRhaW4gdGhlIE9iamVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXRlbnRpb25QZXJpb2RJbkRheXM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCdWNrZXRXb3JtUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldFdvcm1Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRXb3JtUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXRlbnRpb25QZXJpb2RJbkRheXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmV0ZW50aW9uUGVyaW9kSW5EYXlzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXRlbnRpb25QZXJpb2RJbkRheXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJldGVudGlvblBlcmlvZEluRGF5cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmV0ZW50aW9uUGVyaW9kSW5EYXlzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmV0ZW50aW9uUGVyaW9kSW5EYXlzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyNTU2NyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmV0ZW50aW9uUGVyaW9kSW5EYXlzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJldGVudGlvblBlcmlvZEluRGF5cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCdWNrZXRXb3JtUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0V29ybWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0V29ybVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFdvcm1gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0V29ybVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0V29ybVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdCdWNrZXQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldCksXG4gICAgICAnUmV0ZW50aW9uUGVyaW9kSW5EYXlzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXRlbnRpb25QZXJpb2RJbkRheXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6QnVja2V0V29ybWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEJ1Y2tldFdvcm1gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXR3b3JtXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCdWNrZXRXb3JtIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpPU1M6OkJ1Y2tldFdvcm1cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogVGhlIGNyZWF0aW9uIHRpbWUgb2YgdGhlIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFeHBpcmF0aW9uRGF0ZTogUmV0ZW50aW9uIFBvbGljeSBFeHBpcmF0aW9uIFRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFeHBpcmF0aW9uRGF0ZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXRlbnRpb25QZXJpb2RJbkRheXM6IFRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gcmV0YWluIHRoZSBPYmplY3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXRlbnRpb25QZXJpb2RJbkRheXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgV29ybUlkOiBUaGUgSUQgb2YgdGhlIHJldGVudGlvbiBwb2xpY3kuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3JtSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldDogVGhlIG5hbWUgb2YgdGhlIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmV0ZW50aW9uUGVyaW9kSW5EYXlzOiBUaGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHJldGFpbiB0aGUgT2JqZWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZXRlbnRpb25QZXJpb2RJbkRheXM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NCdWNrZXRXb3JtUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCdWNrZXRXb3JtLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gdGhpcy5nZXRBdHQoJ0NyZWF0ZVRpbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyRXhwaXJhdGlvbkRhdGUgPSB0aGlzLmdldEF0dCgnRXhwaXJhdGlvbkRhdGUnKTtcbiAgICAgICAgdGhpcy5hdHRyUmV0ZW50aW9uUGVyaW9kSW5EYXlzID0gdGhpcy5nZXRBdHQoJ1JldGVudGlvblBlcmlvZEluRGF5cycpO1xuICAgICAgICB0aGlzLmF0dHJXb3JtSWQgPSB0aGlzLmdldEF0dCgnV29ybUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJ1Y2tldCA9IHByb3BzLmJ1Y2tldDtcbiAgICAgICAgdGhpcy5yZXRlbnRpb25QZXJpb2RJbkRheXMgPSBwcm9wcy5yZXRlbnRpb25QZXJpb2RJbkRheXM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0OiB0aGlzLmJ1Y2tldCxcbiAgICAgICAgICAgIHJldGVudGlvblBlcmlvZEluRGF5czogdGhpcy5yZXRlbnRpb25QZXJpb2RJbkRheXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0J1Y2tldFdvcm1Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEaXJlY3RvcnlgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWRpcmVjdG9yeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RpcmVjdG9yeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXROYW1lOiBidWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBidWNrZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5TmFtZTogRGlyZWN0b3J5IG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3RvcnlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBmb3JjZSBkZWxldGUgdGhlIHJlbGF0aXZlIG9iamVjdHMgaW4gdGhlIGRpcmVjdG9yeS4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvbkZvcmNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEaXJlY3RvcnlQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGlyZWN0b3J5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGlyZWN0b3J5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRpb25Gb3JjZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5kaXJlY3RvcnlOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5kaXJlY3RvcnlOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRpcmVjdG9yeU5hbWUsXG4gICAgICAgICAgcmVnOiAvW15cXFxcL1xcXFxdKD8hXFwvXFwvKSguKil7MSwyNTR9JC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5TmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEaXJlY3RvcnlQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpEaXJlY3RvcnlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RpcmVjdG9yeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkRpcmVjdG9yeWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEaXJlY3RvcnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RpcmVjdG9yeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdCdWNrZXROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXROYW1lKSxcbiAgICAgICdEaXJlY3RvcnlOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXJlY3RvcnlOYW1lKSxcbiAgICAgICdEZWxldGlvbkZvcmNlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6T1NTOjpEaXJlY3RvcnlgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBEaXJlY3RvcnlgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1kaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RpcmVjdG9yeSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1NTOjpEaXJlY3RvcnlcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQnVja2V0TmFtZTogVGhlIG5hbWUgb2YgQnVja2V0XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCdWNrZXROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERpcmVjdG9yeU5hbWU6IFRoZSBuYW1lIG9mIERpcmVjdG9yeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGlyZWN0b3J5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlOYW1lOiBEaXJlY3RvcnkgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBmb3JjZSBkZWxldGUgdGhlIHJlbGF0aXZlIG9iamVjdHMgaW4gdGhlIGRpcmVjdG9yeS4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsZXRpb25Gb3JjZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEaXJlY3RvcnlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0RpcmVjdG9yeS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQnVja2V0TmFtZSA9IHRoaXMuZ2V0QXR0KCdCdWNrZXROYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckRpcmVjdG9yeU5hbWUgPSB0aGlzLmdldEF0dCgnRGlyZWN0b3J5TmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5idWNrZXROYW1lID0gcHJvcHMuYnVja2V0TmFtZTtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlOYW1lID0gcHJvcHMuZGlyZWN0b3J5TmFtZTtcbiAgICAgICAgdGhpcy5kZWxldGlvbkZvcmNlID0gcHJvcHMuZGVsZXRpb25Gb3JjZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWNrZXROYW1lOiB0aGlzLmJ1Y2tldE5hbWUsXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lOiB0aGlzLmRpcmVjdG9yeU5hbWUsXG4gICAgICAgICAgICBkZWxldGlvbkZvcmNlOiB0aGlzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RpcmVjdG9yeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0RvbWFpbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3MtZG9tYWluXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRG9tYWluUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldE5hbWU6IGJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBEb21haW4gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEb21haW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRG9tYWluUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5kb21haW5OYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZG9tYWluTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRvbWFpbk5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RvbWFpblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkRvbWFpbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6RG9tYWluYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RvbWFpblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRG9tYWluUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpLFxuICAgICAgJ0RvbWFpbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6RG9tYWluYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRG9tYWluYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3MtZG9tYWluXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEb21haW4gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6RG9tYWluXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJ1Y2tldE5hbWU6IFRoZSBuYW1lIG9mIEJ1Y2tldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQnVja2V0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5OYW1lOiBUaGUgY3VzdG9tIGRvbWFpbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBEb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEb21haW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckJ1Y2tldE5hbWUgPSB0aGlzLmdldEF0dCgnQnVja2V0TmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJEb21haW5OYW1lID0gdGhpcy5nZXRBdHQoJ0RvbWFpbk5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYnVja2V0TmFtZSA9IHByb3BzLmJ1Y2tldE5hbWU7XG4gICAgICAgIHRoaXMuZG9tYWluTmFtZSA9IHByb3BzLmRvbWFpbk5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0TmFtZTogdGhpcy5idWNrZXROYW1lLFxuICAgICAgICAgICAgZG9tYWluTmFtZTogdGhpcy5kb21haW5OYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEb21haW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NPYmplY3RBY2xgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLW9iamVjdGFjbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc09iamVjdEFjbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9iamVjdEFjbDogT2JqZWN0IGFjbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBvYmplY3RBY2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvYmplY3RLZXk6IE9iamVjdCBrZXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb2JqZWN0S2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zT2JqZWN0QWNsUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc09iamVjdEFjbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc09iamVjdEFjbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb2JqZWN0QWNsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9iamVjdEFjbCkpO1xuICAgIGlmKHByb3BlcnRpZXMub2JqZWN0QWNsICYmICh0eXBlb2YgcHJvcGVydGllcy5vYmplY3RBY2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29iamVjdEFjbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm9iamVjdEFjbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJwcml2YXRlXCIsXCJwdWJsaWMtcmVhZFwiLFwicHVibGljLXJlYWQtd3JpdGVcIixcImRlZmF1bHRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvYmplY3RBY2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub2JqZWN0QWNsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvYmplY3RLZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMub2JqZWN0S2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvYmplY3RLZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub2JqZWN0S2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc09iamVjdEFjbFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6Ok9iamVjdEFjbGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zT2JqZWN0QWNsUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6T2JqZWN0QWNsYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc09iamVjdEFjbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zT2JqZWN0QWNsUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0KSxcbiAgICAgICdPYmplY3RBY2wnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9iamVjdEFjbCksXG4gICAgICAnT2JqZWN0S2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vYmplY3RLZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6T2JqZWN0QWNsYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgT2JqZWN0QWNsYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3Mtb2JqZWN0YWNsXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NPYmplY3RBY2wgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6T2JqZWN0QWNsXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBidWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvYmplY3RBY2w6IE9iamVjdCBhY2wuXG4gICAgICovXG4gICAgcHVibGljIG9iamVjdEFjbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9iamVjdEtleTogT2JqZWN0IGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb2JqZWN0S2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zT2JqZWN0QWNsUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NPYmplY3RBY2wuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJ1Y2tldCA9IHByb3BzLmJ1Y2tldDtcbiAgICAgICAgdGhpcy5vYmplY3RBY2wgPSBwcm9wcy5vYmplY3RBY2w7XG4gICAgICAgIHRoaXMub2JqZWN0S2V5ID0gcHJvcHMub2JqZWN0S2V5O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldDogdGhpcy5idWNrZXQsXG4gICAgICAgICAgICBvYmplY3RBY2w6IHRoaXMub2JqZWN0QWNsLFxuICAgICAgICAgICAgb2JqZWN0S2V5OiB0aGlzLm9iamVjdEtleSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zT2JqZWN0QWNsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zV2Vic2l0ZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3Mtd2Vic2l0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1dlYnNpdGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogQnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYnNpdGVDb25maWd1cmF0aW9uOiBXZWJzaXRlIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2Vic2l0ZUNvbmZpZ3VyYXRpb24/OiBSb3NXZWJzaXRlLldlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zV2Vic2l0ZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXZWJzaXRlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYnNpdGVDb25maWd1cmF0aW9uJywgUm9zV2Vic2l0ZV9XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLndlYnNpdGVDb25maWd1cmF0aW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1dlYnNpdGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXZWJzaXRlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXZWJzaXRlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NXZWJzaXRlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpLFxuICAgICAgJ1dlYnNpdGVDb25maWd1cmF0aW9uJzogcm9zV2Vic2l0ZVdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2Vic2l0ZUNvbmZpZ3VyYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6V2Vic2l0ZWAsIHdoaWNoIGlzIHVzZWQgdG8gY29uZmlndXJlIHN0YXRpYyB3ZWJzaXRlIGhvc3RpbmcgYW5kIHJlZGlyZWN0aW9uIHJ1bGVzIGZvciBhbiBPYmplY3QgU3RvcmFnZSBTZXJ2aWNlIChPU1MpIGJ1Y2tldC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgV2Vic2l0ZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLXdlYnNpdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1dlYnNpdGUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6V2Vic2l0ZVwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogQnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJzaXRlQ29uZmlndXJhdGlvbjogV2Vic2l0ZSBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB3ZWJzaXRlQ29uZmlndXJhdGlvbjogUm9zV2Vic2l0ZS5XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1dlYnNpdGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dlYnNpdGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJ1Y2tldE5hbWUgPSBwcm9wcy5idWNrZXROYW1lO1xuICAgICAgICB0aGlzLndlYnNpdGVDb25maWd1cmF0aW9uID0gcHJvcHMud2Vic2l0ZUNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0TmFtZTogdGhpcy5idWNrZXROYW1lLFxuICAgICAgICAgICAgd2Vic2l0ZUNvbmZpZ3VyYXRpb246IHRoaXMud2Vic2l0ZUNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1dlYnNpdGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NXZWJzaXRlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb25kaXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5jbHVkZUhlYWRlcnM6IFRoaXMgcnVsZSB3aWxsIG9ubHkgbWF0Y2ggaWYgdGhlIHJlcXVlc3QgY29udGFpbnMgdGhlIHNwZWNpZmllZCBIZWFkZXIgYW5kIHRoZSB2YWx1ZSBpcyB0aGUgc3BlY2lmaWVkIHZhbHVlLiBVcCB0byAxMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluY2x1ZGVIZWFkZXJzPzogQXJyYXk8Um9zV2Vic2l0ZS5JbmNsdWRlSGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXlQcmVmaXhFcXVhbHM6IFRoZSBwcmVmaXggb2YgdGhlIE9iamVjdCBuYW1lIHRvIGJlIG1hdGNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXlQcmVmaXhFcXVhbHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEVycm9yQ29kZVJldHVybmVkRXF1YWxzOiBXaGVuIGFjY2Vzc2luZyB0aGUgc3BlY2lmaWVkIE9iamVjdCwgdGhpcyBzdGF0dXMgbXVzdCBiZSByZXR1cm5lZCB0byBtYXRjaCB0aGlzIHJ1bGUuIFRoaXMgZmllbGQgbXVzdCBiZSA0MDQgd2hlbiB0aGUganVtcCBydWxlIGlzIG1pcnJvci1iYWNrIHRvIHRoZSBzb3VyY2UgdHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXlTdWZmaXhFcXVhbHM6IFRoZSBzdWZmaXggb2YgdGhlIE9iamVjdCBuYW1lIHRvIGJlIG1hdGNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXlTdWZmaXhFcXVhbHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb25kaXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uZGl0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9Db25kaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbmNsdWRlSGVhZGVycykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luY2x1ZGVIZWFkZXJzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5jbHVkZUhlYWRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NXZWJzaXRlX0luY2x1ZGVIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXlQcmVmaXhFcXVhbHMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5UHJlZml4RXF1YWxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwRXJyb3JDb2RlUmV0dXJuZWRFcXVhbHMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaHR0cEVycm9yQ29kZVJldHVybmVkRXF1YWxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXlTdWZmaXhFcXVhbHMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5U3VmZml4RXF1YWxzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvbmRpdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuQ29uZGl0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb25kaXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkNvbmRpdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXZWJzaXRlQ29uZGl0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1dlYnNpdGVfQ29uZGl0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnSW5jbHVkZUhlYWRlcnMnOiByb3MubGlzdE1hcHBlcihyb3NXZWJzaXRlSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMpLFxuICAgICAgJ0tleVByZWZpeEVxdWFscyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5UHJlZml4RXF1YWxzKSxcbiAgICAgICdIdHRwRXJyb3JDb2RlUmV0dXJuZWRFcXVhbHMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscyksXG4gICAgICAnS2V5U3VmZml4RXF1YWxzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXlTdWZmaXhFcXVhbHMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEb2N1bWVudFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwU3RhdHVzOiBUaGUgSFRUUCBzdGF0dXMgY29kZSBvZiB0aGUgZXJyb3IgcGFnZS4gVmFsaWQgdmFsdWVzOiAyMDAsIDQwNCAoZGVmYXVsdCkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogVGhlIGRlZmF1bHQgZXJyb3IgcGFnZS5cbiAgICAgKiBXaGVuIGFuIGVycm9yIHBhZ2UgaXMgc3BlY2lmaWVkLCBpZiB0aGUgYWNjZXNzZWQgT2JqZWN0IGRvZXMgbm90IGV4aXN0LCB0aGlzIGVycm9yIHBhZ2UgaXMgcmV0dXJuZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEVycm9yRG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXJyb3JEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dlYnNpdGVfRXJyb3JEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuaHR0cFN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaHR0cFN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFN0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmh0dHBTdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiMjAwXCIsXCI0MDRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwU3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmh0dHBTdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRXJyb3JEb2N1bWVudFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuRXJyb3JEb2N1bWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXJyb3JEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuRXJyb3JEb2N1bWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXZWJzaXRlRXJyb3JEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX0Vycm9yRG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdIdHRwU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwU3RhdHVzKSxcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NXZWJzaXRlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbmNsdWRlSGVhZGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IFRoZSBuYW1lIG9mIHRoZSBoZWFkZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlcXVhbHNUbzogVGhlIHZhbHVlIG9mIHRoZSBoZWFkZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlcXVhbHNUbz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluY2x1ZGVIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluY2x1ZGVIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9JbmNsdWRlSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXF1YWxzVG8nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZXF1YWxzVG8pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkluY2x1ZGVIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmNsdWRlSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuSW5jbHVkZUhlYWRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2Vic2l0ZUluY2x1ZGVIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1dlYnNpdGVfSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgICAnRXF1YWxzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lcXVhbHNUbyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NXZWJzaXRlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbmRleERvY3VtZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IEJlaGF2aW9yIHdoZW4gYW4gT2JqZWN0IHRoYXQgZW5kcyB3aXRoIGEgbm9uLWZvcndhcmQgc2xhc2ggKFxcLykgYW5kIGRvZXMgbm90IGV4aXN0IGlzIGFjY2Vzc2VkIGFmdGVyIHNldHRpbmcgdGhlIGRlZmF1bHQgaG9tZSBwYWdlLiBJdCBvbmx5IHRha2VzIGVmZmVjdCB3aGVuIFN1cHBvcnRTdWJEaXIgaXMgc2V0IHRvIHRydWUsIGFuZCBpdCB0YWtlcyBlZmZlY3QgYWZ0ZXIgUm91dGluZ1J1bGUgYW5kIGJlZm9yZSBFcnJvckZpbGUuXG4gICAgICogQXNzdW1lIHRoYXQgdGhlIGRlZmF1bHQgaG9tZSBwYWdlIGZvciB0aGUgaW5kZXguIFRoZSBIVE1MLCB0byBhY2Nlc3MgdGhlIGZpbGUgcGF0aCBmb3IgYnVja2V0Lm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb21cXC9hYmMsIGFuZCBBQkMgdGhpcyBPYmplY3QgZG9lcyBub3QgZXhpc3QsIGF0IHRoaXMgbW9tZW50LCBpbiBkaWZmZXJlbnQgdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIFR5cGUgb2YgYmVoYXZpb3IgaXMgYXMgZm9sbG93czpcbiAgICAgKiAtIDAgKGRlZmF1bHQpIDogQ2hlY2sgaWYgYWJjXFwvaW5kZXguaHRtbCBleGlzdHMgKE9iamVjdCArIGZvcndhcmQgc2xhc2ggKFxcLykgKyBob21lIHBhZ2UpIGFuZCByZXR1cm4gMzAyIHdpdGggdGhlIFVSTCBjb2RlIG9mIFxcL2FiY1xcLyBhcyBMb2NhdGlvbiBoZWFkZXIgKGZvcndhcmQgc2xhc2ggKFxcLykgKyBPYmplY3QgKyBmb3J3YXJkIHNsYXNoIChcXC8pKS4gSWYgaXQgZG9lc24ndCwgaXQgd2lsbCByZXR1cm4gNDA0IGFuZCBrZWVwIGNoZWNraW5nIEVycm9yRmlsZS5cbiAgICAgKiAtIDE6IERpcmVjdGx5IHJldHVybiA0MDQsIGVycm9yIE5vU3VjaEtleSwgY29udGludWUgdG8gY2hlY2sgRXJyb3JGaWxlLlxuICAgICAqIC0gMjogQ2hlY2sgaWYgYWJjXFwvaW5kZXguaHRtbCBleGlzdHMgYW5kIHJldHVybiB0aGUgY29udGVudHMgb2YgdGhlIE9iamVjdCBpZiBpdCBkb2VzLiBJZiBpdCBkb2Vzbid0LCBpdCB3aWxsIHJldHVybiA0MDQgYW5kIGtlZXAgY2hlY2tpbmcgRXJyb3JGaWxlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdWZmaXg6IERlZmF1bHQgaG9tZSBwYWdlLlxuICAgICAqIEFmdGVyIHNldHRpbmcgdGhlIGRlZmF1bHQgaG9tZSBwYWdlLCBpZiB5b3UgdmlzaXQgYW4gT2JqZWN0IGVuZGluZyB3aXRoIGEgZm9yd2FyZCBzbGFzaCAoXFwvKSwgT1NTIHdpbGwgcmV0dXJuIHRvIHRoaXMgZGVmYXVsdCBob21lIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdWZmaXg6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdXBwb3J0U3ViRGlyOiBXaGV0aGVyIHRvIGp1bXAgdG8gdGhlIGRlZmF1bHQgaG9tZSBwYWdlIG9mIGEgc3ViZGlyZWN0b3J5IHdoZW4gYWNjZXNzaW5nIGl0LiBUaGUgcmFuZ2UgaXMgYXMgZm9sbG93czpcbiAgICAgKiAtIHRydWU6IEdvIHRvIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBpbiBhIHN1YmRpcmVjdG9yeS5cbiAgICAgKiAtIGZhbHNlIChkZWZhdWx0KSA6IEluc3RlYWQgb2YgZ29pbmcgdG8gdGhlIGRlZmF1bHQgaG9tZSBwYWdlIGluIGEgc3ViZGlyZWN0b3J5LCBnbyB0byB0aGUgZGVmYXVsdCBob21lIHBhZ2UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5LlxuICAgICAqIEFzc3VtZSB0aGF0IHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBmb3IgdGhlIGluZGV4LiBUaGUgSFRNTCwgdG8gYWNjZXNzIGJ1Y2tldC5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tXFwvc3ViZGlyXFwvLCBpZiBzZXQgU3VwcG9ydFN1YkRpciB0byBmYWxzZSwgVGhlbiBnbyB0byBidWNrZXQub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbVxcL2luZGV4Lmh0bWw7IElmIHNldCBTdXBwb3J0U3ViRGlyIGlzIHRydWUsIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJ1Y2tldC5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tXFwvc3ViZGlyXFwvaW5kZXguaHRtbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1cHBvcnRTdWJEaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbmRleERvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZGV4RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NXZWJzaXRlX0luZGV4RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50eXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIjBcIixcIjFcIixcIjJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1ZmZpeCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdWZmaXgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1ZmZpeCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdWZmaXgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN1cHBvcnRTdWJEaXIgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1cHBvcnRTdWJEaXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1cHBvcnRTdWJEaXInLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdXBwb3J0U3ViRGlyLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcInRydWVcIixcImZhbHNlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VwcG9ydFN1YkRpcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdXBwb3J0U3ViRGlyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluZGV4RG9jdW1lbnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkluZGV4RG9jdW1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZGV4RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkluZGV4RG9jdW1lbnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2Vic2l0ZUluZGV4RG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zV2Vic2l0ZV9JbmRleERvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICAnU3VmZml4Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdWZmaXgpLFxuICAgICAgJ1N1cHBvcnRTdWJEaXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1cHBvcnRTdWJEaXIpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWlycm9ySGVhZGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXNzQWxsOiBXaGV0aGVyIHRvIHBhc3MgdGhyb3VnaCBvdGhlciBoZWFkZXJzIHRvIHRoZSBzb3VyY2UgZXhjZXB0IHRoZSBmb2xsb3dpbmcgaGVhZGVycy4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIC0gY29udGVudC1sZW5ndGgsIGF1dGhvcml6YXRpb24yLCBhdXRob3JpemF0aW9uLCByYW5nZSwgZGF0ZSBhbmQgb3RoZXIgaGVhZGVyc1xuICAgICAqIC0gSGVhZGVycyBzdGFydGluZyB3aXRoIG9zcy1cXC94LW9zcy1cXC94LWRycy1cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzc0FsbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzczogUGFzcyB0aHJvdWdoIHRoZSBzcGVjaWZpZWQgSGVhZGVyIHRvIHRoZSBzb3VyY2UuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBFYWNoIEhlYWRlciBpcyBhdCBtb3N0IDEsMDI0IGJ5dGVzIGxvbmcgYW5kIGhhcyB0aGUgY2hhcmFjdGVyIHNldHMgMC05LCBhLXosIEEtWiwgYW5kIGRhc2ggKC0pLlxuICAgICAqIEEgbWF4aW11bSBvZiAxMCBjYW4gYmUgc3BlY2lmaWVkIGZvciB0aGlzIGZpZWxkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2V0czogU2V0IGEgSGVhZGVyIHRvIHRoZSBvcmlnaW4sIGFuZCBpdCB3aWxsIGJlIHNldCB3aGVuIHRoZSByZXF1ZXN0IGlzIHNlbnQgYmFjayB0byB0aGUgb3JpZ2luLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBoZWFkZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgcmVxdWVzdC4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIFVwIHRvIDEwIGdyb3VwcyBjYW4gYmUgc3BlY2lmaWVkIGZvciB0aGlzIGNvbnRhaW5lci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNldHM/OiBBcnJheTxSb3NXZWJzaXRlLlNldHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVtb3ZlOiBEaXNhYmxlcyBwYXNzLXRocm91Z2ggb2YgdGhlIHNwZWNpZmllZCBIZWFkZXIgdG8gdGhlIHNvdXJjZS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIEVhY2ggSGVhZGVyIGlzIGF0IG1vc3QgMSwwMjQgYnl0ZXMgbG9uZyBhbmQgaGFzIHRoZSBjaGFyYWN0ZXIgc2V0cyAwLTksIGEteiwgQS1aLCBhbmQgZGFzaCAoLSkuXG4gICAgICogQSBtYXhpbXVtIG9mIDEwIGNhbiBiZSBzcGVjaWZpZWQgZm9yIHRoaXMgZmllbGQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZW1vdmU/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTWlycm9ySGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNaXJyb3JIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9NaXJyb3JIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzQWxsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5wYXNzQWxsKSk7XG4gICAgaWYocHJvcGVydGllcy5wYXNzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucGFzcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnBhc3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBhc3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5wYXNzKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2V0cykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNldHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNldHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXRzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zV2Vic2l0ZV9TZXRzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNldHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlbW92ZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnJlbW92ZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlbW92ZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbW92ZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZW1vdmUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1vdmUnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnJlbW92ZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNaXJyb3JIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5NaXJyb3JIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNaXJyb3JIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5NaXJyb3JIZWFkZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dlYnNpdGVNaXJyb3JIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1dlYnNpdGVfTWlycm9ySGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1Bhc3NBbGwnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzQWxsKSxcbiAgICAgICdQYXNzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGFzcyksXG4gICAgICAnU2V0cyc6IHJvcy5saXN0TWFwcGVyKHJvc1dlYnNpdGVTZXRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNldHMpLFxuICAgICAgJ1JlbW92ZSc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJlbW92ZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NXZWJzaXRlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWRpcmVjdFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JVcmw6IE1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2Ugc3RhdGlvbiBhZGRyZXNzIG9mIHRoZSBzb3VyY2UuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBUaGUgb3JpZ2luIFVSTCBtdXN0IGJlZ2luIHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvIGFuZCBlbmQgd2l0aCBhIGZvcndhcmQgc2xhc2ggKFxcLyksIHdoaWNoIE9TUyB3aWxsIGZvbGxvdyB3aXRoIHRoZSBPYmplY3QgbmFtZSB0byBmb3JtIHRoZSByZXR1cm4gVVJMLlxuICAgICAqIE5hbWUgdG8gYWNjZXNzIHRoZSBPYmplY3QgbXlvYmplY3QsIGZvciBleGFtcGxlLCBpZiB5b3Ugc3BlY2lmeSB0aGlzIHRvIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC8sIHRoZW4gYmFjayB0byB0aGUgc291cmNlIFVSTCBmb3IgaHR0cDpcXC9cXC9leGFtcGxlLmNvbVxcL215b2JqZWN0LCBpZiB5b3Ugc3BlY2lmeSB0aGlzIHRvIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9kaXIxXFwvLCBCYWNrIHRvIHRoZSBzb3VyY2UgVVJMIGFzIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9kaXIxXFwvbXlvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVwbGFjZUtleVdpdGg6IFdpdGggUmVkaXJlY3QsIHRoZSBPYmplY3QgbmFtZSBpcyByZXBsYWNlZCB3aXRoIHRoZSB2YWx1ZSBzcGVjaWZpZWQgYnkgUmVwbGFjZUtleVdpdGgsIHdoaWNoIGFsbG93cyB5b3UgdG8gc2V0IHZhcmlhYmxlcy4gVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgdmFyaWFibGUgaXMgJHtrZXl9LCB3aGljaCByZXByZXNlbnRzIHRoZSBuYW1lIG9mIHRoZSBPYmplY3QgaW4gdGhlIHJlcXVlc3QuXG4gICAgICogU3VwcG9zZSB0byBhY2Nlc3MgdGhlIE9iamVjdCBmb3IgdGhlIHRlc3QsIGlmIHNldCBSZXBsYWNlS2V5V2l0aCB0byBwcmVmaXhcXC8ke2tleX0uIFRoZSBzdWZmaXgsIGlzIHRoZSBMb2NhdGlvbiBoZWFkIHRvIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9wcmVmaXhcXC90ZXN0LnN1ZmZpeC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlcGxhY2VLZXlXaXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pcnJvckhlYWRlcnM6IFNwZWNpZmllcyB0aGUgSGVhZGVyIHRoYXQgaXMgbWlycm9yZWQgYmFjayB0byB0aGUgc291cmNlLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JIZWFkZXJzPzogUm9zV2Vic2l0ZS5NaXJyb3JIZWFkZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cFJlZGlyZWN0Q29kZTogU3RhdHVzIGNvZGUgcmV0dXJuZWQgd2hlbiBqdW1waW5nLiBPbmx5IGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gRXh0ZXJuYWwgb3IgQWxpQ0ROLlRoZSBkZWZhdWx0IHZhbHVlIGlzIDMwMi5cbiAgICAgKiBWYWx1ZTogMzAxLCAzMDIsIDMwN1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cFJlZGlyZWN0Q29kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmFibGVSZXBsYWNlUHJlZml4OiBJZiB5b3Ugc2V0IHRoaXMgZmllbGQgdG8gdHJ1ZSwgdGhlIHByZWZpeCBvZiBPYmplY3QgaXMgcmVwbGFjZWQgd2l0aCB0aGUgdmFsdWUgc3BlY2lmaWVkIGJ5IFJlcGxhY2VLZXlQcmVmaXhXaXRoLiBJZiB0aGlzIGZpZWxkIGlzIG5vdCBzcGVjaWZpZWQgb3IgaXMgZW1wdHksIGl0IG1lYW5zIHRoYXQgdGhlIE9iamVjdCBwcmVmaXggaXMgdHJ1bmNhdGVkLlxuICAgICAqIE5vdGVzOiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBSZXBsYWNlS2V5V2l0aCBmaWVsZCBpcyBub3QgbnVsbC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5hYmxlUmVwbGFjZVByZWZpeD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzc1F1ZXJ5U3RyaW5nOiBXaGV0aGVyIHRvIGNhcnJ5IHJlcXVlc3QgcGFyYW1ldGVycyB3aGVuIHBlcmZvcm1pbmcgYSBqdW1wIG9yIG1pcnJvcmluZyBiYWNrIHRvIHRoZSBzb3VyY2UgcnVsZS5cbiAgICAgKiBEb2VzIHRoZSB1c2VyIHJlcXVlc3QgT1NTIHdpdGggdGhlIHJlcXVlc3QgcGFyYW1ldGVycz8gYT1iJmM9ZCwgYW5kIHNldCBQYXNzUXVlcnlTdHJpbmcgdG8gdHJ1ZSwgaWYgdGhlIHJ1bGUgaXMgYSAzMDIganVtcCwgdGhlbiB0aGlzIHJlcXVlc3QgcGFyYW1ldGVyIGlzIGFkZGVkIGluIHRoZSBMb2NhdGlvbiBoZWFkZXIgb2YgdGhlIGp1bXAuIEZvciBleGFtcGxlLCBMb2NhdGlvbjpleGFtcGxlLmNvbT9hPWImYz1kLCB0aGUganVtcCB0eXBlIGlzIG1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2UsIHRoZW4gdGhpcyByZXF1ZXN0IHBhcmFtZXRlciB3aWxsIGFsc28gYmUgY2FycmllZCBpbiB0aGUgaW5pdGlhdGVkIGJhY2sgdG8gdGhlIHNvdXJjZSByZXF1ZXN0LlxuICAgICAqIFZhbGlkIHZhbHVlczogdHJ1ZSwgZmFsc2UgKGRlZmF1bHQpXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXNzUXVlcnlTdHJpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pcnJvckZvbGxvd1JlZGlyZWN0OiBJZiB0aGUgcmVzdWx0IG9idGFpbmVkIGJ5IG1pcnJpbGluZyBiYWNrIHRvIHRoZSBzb3VyY2UgaXMgM3h4LCB3aGV0aGVyIHRvIGNvbnRpbnVlIHRvIGp1bXAgdG8gdGhlIHNwZWNpZmllZCBMb2NhdGlvbiB0byBvYnRhaW4gZGF0YS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIEZvciBleGFtcGxlLCB3aGVuIHdlIG1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2UsIHRoZSBzb3VyY2UgcmV0dXJucyBhIDMwMiB3aXRoIExvY2F0aW9uIHNwZWNpZmllZC5cbiAgICAgKiAtIElmIHNldCB0byB0cnVlLCBPU1Mgd2lsbCBjb250aW51ZSB0byByZXF1ZXN0IHRoZSBMb2NhdGlvbi5cbiAgICAgKiBJdCBjYW4ganVtcCB1cCB0byAxMCB0aW1lcywgYW5kIGlmIGl0IGp1bXBzIG1vcmUgdGhhbiAxMCB0aW1lcywgaXQgZmFpbHMgdG8gcmV0dXJuIHRoZSBtaXJyb3IgYmFjayB0byB0aGUgc291cmNlLlxuICAgICAqIC0gSWYgc2V0IHRvIGZhbHNlLCBPU1Mgd2lsbCByZXR1cm4gMzAyIGFuZCBwYXNzIHRocm91Z2ggdGhlIExvY2F0aW9uLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1pcnJvckZvbGxvd1JlZGlyZWN0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXBsYWNlS2V5UHJlZml4V2l0aDogVGhpcyB2YWx1ZSB3aWxsIGJlIHN1YnN0aXR1dGVkIGZvciB0aGUgcHJlZml4IG9mIHRoZSBPYmplY3QgbmFtZSBpbiBSZWRpcmVjdC4gSWYgdGhlIHByZWZpeCBpcyBlbXB0eSwgdGhlIHN0cmluZyBpcyBpbnNlcnRlZCBiZWZvcmUgdGhlIE9iamVjdCBuYW1lLlxuICAgICAqIE5vdGVzOiBPbmx5IFJlcGxhY2VLZXlXaXRoIG9yIFJlcGxhY2VLZXlQcmVmaXhXaXRoIG5vZGVzIGFyZSBhbGxvd2VkLlxuICAgICAqIEh5cG90aGVzaXMgdG8gYWNjZXNzIHRoZSBPYmplY3QgZm9yIEFCQ1xcL3Rlc3QuIFRYVCwgaWYgc2V0IEtleVByZWZpeEVxdWFscyBmb3IgQUJDIFxcLywgUmVwbGFjZUtleVByZWZpeFdpdGggZm9yIGRlZiBcXC8sIHRoZW4gdGhlIExvY2F0aW9uIGhlYWQgdG8gaHR0cDpcXC9cXC9leGFtcGxlLmNvbVxcL2RlZlxcL3Rlc3QudHh0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVwbGFjZUtleVByZWZpeFdpdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVkaXJlY3RUeXBlOiBTcGVjaWZpZXMgdGhlIHR5cGUgb2YganVtcC4gVGhlIHJhbmdlIGlzIGFzIGZvbGxvd3M6XG4gICAgICogLSBNaXJyb3I6IE1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2UuXG4gICAgICogLSBFeHRlcm5hbDogRXh0ZXJuYWwgYnJhbmNoLCBpLmUuIE9TUyB3aWxsIHJldHVybiBhIDN4eCByZXF1ZXN0IHNwZWNpZnlpbmcgdGhlIGJyYW5jaCB0byBhbm90aGVyIGFkZHJlc3MuXG4gICAgICogLSBBbGlDRE46IEFsaXl1biBDRE4ganVtcCwgbWFpbmx5IHVzZWQgZm9yIHRoZSBDRE4gb2YgQWxpeXVuLiBVbmxpa2UgRXh0ZXJuYWwsIE9TUyBhZGRzIGFuIGFkZGl0aW9uYWwgSGVhZGVyLiBBZnRlciBpZGVudGlmeWluZyB0aGlzIEhlYWRlciwgQWxpeXVuIENETiB3aWxsIGFjdGl2ZWx5IGp1bXAgdG8gdGhlIHNwZWNpZmllZCBhZGRyZXNzIGFuZCByZXR1cm4gdGhlIG9idGFpbmVkIGRhdGEgdG8gdGhlIHVzZXIgaW5zdGVhZCBvZiByZXR1cm5pbmcgdGhlIDN4eCBqdW1wIHJlcXVlc3QgdG8gdGhlIHVzZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWRpcmVjdFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JQYXNzUXVlcnlTdHJpbmc6IFNhbWUgYXMgUGFzc1F1ZXJ5U3RyaW5nLCBidXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIFBhc3NRdWVyeVN0cmluZy4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JQYXNzUXVlcnlTdHJpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pcnJvckNoZWNrTWQ1OiBXaGV0aGVyIHRvIGNoZWNrIE1ENSBiYWNrIHRvIHRoZSBzb3VyY2UgYm9keS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIFdoZW4gTWlycm9yQ2hlY2tNZDUgaXMgc2V0IHRvIHRydWUsIGFuZCB0aGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgdGhlIHNvdXJjZSBjb250YWlucyB0aGUgQ29udGVudC1NZDUgSGVhZGVyLCBPU1MgY2hlY2tzIHdoZXRoZXIgdGhlIHB1bGxlZCBkYXRhIE1ENSBtYXRjaGVzIHRoaXMgaGVhZGVyLCBpZiBub3QsIGl0IGlzIG5vdCBzYXZlZCBvbiBPU1MuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1pcnJvckNoZWNrTWQ1PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogUHJvdG9jb2wgd2hlbiBqdW1waW5nLiBPbmx5IGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gRXh0ZXJuYWwgb3IgQWxpQ0ROLlxuICAgICAqIElmIHRoZSBmaWxlIHlvdSB3YW50IHRvIGFjY2VzcyBpcyB0ZXN0LCBzZXQgdG8gZ28gdG8gZXhhbXBsZS5jb20sIGFuZCBzZXQgUHJvdG9jb2wgdG8gaHR0cHMsIHRoZSBMb2NhdGlvbiBoZWFkZXIgaXMgaHR0cHM6XFwvXFwvZXhhbXBsZS5jb21cXC90ZXN0LlxuICAgICAqIFZhbHVlOiBodHRwLCBodHRwc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdE5hbWU6IFRoZSBkb21haW4gbmFtZSBvZiB0aGUganVtcCwgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBjb25mb3JtIHRvIHRoZSBkb21haW4gbmFtZSBzcGVjaWZpY2F0aW9uLlxuICAgICAqIElmIHRoZSBmaWxlIHlvdSB3YW50IHRvIGFjY2VzcyBpcyB0ZXN0LCB0aGUgUHJvdG9jb2wgaXMgc2V0IHRvIGh0dHBzLCBhbmQgdGhlIEhvc3RuYW1lIGlzIHNldCB0byBleGFtcGxlLmNvbSwgdGhlIExvY2F0aW9uIGhlYWRlciBpcyBodHRwczpcXC9cXC9leGFtcGxlLmNvbVxcL3Rlc3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlZGlyZWN0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlZGlyZWN0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9SZWRpcmVjdFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9yVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1pcnJvclVybCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGFjZUtleVdpdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwbGFjZUtleVdpdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pcnJvckhlYWRlcnMnLCBSb3NXZWJzaXRlX01pcnJvckhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5taXJyb3JIZWFkZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5odHRwUmVkaXJlY3RDb2RlICYmICh0eXBlb2YgcHJvcGVydGllcy5odHRwUmVkaXJlY3RDb2RlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwUmVkaXJlY3RDb2RlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCIzMDFcIixcIjMwMlwiLFwiMzA3XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFJlZGlyZWN0Q29kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5odHRwUmVkaXJlY3RDb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVSZXBsYWNlUHJlZml4Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVSZXBsYWNlUHJlZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzUXVlcnlTdHJpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnBhc3NRdWVyeVN0cmluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9yRm9sbG93UmVkaXJlY3QnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1pcnJvckZvbGxvd1JlZGlyZWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsYWNlS2V5UHJlZml4V2l0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBsYWNlS2V5UHJlZml4V2l0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkaXJlY3RUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVkaXJlY3RUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWRpcmVjdFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZGlyZWN0VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJNaXJyb3JcIixcIkV4dGVybmFsXCIsXCJBbGlDRE5cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVkaXJlY3RUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtaXJyb3JQYXNzUXVlcnlTdHJpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1pcnJvclBhc3NRdWVyeVN0cmluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9yQ2hlY2tNZDUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1pcnJvckNoZWNrTWQ1KSk7XG4gICAgaWYocHJvcGVydGllcy5wcm90b2NvbCAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJvdG9jb2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvdG9jb2wsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiaHR0cFwiLFwiaHR0cHNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaG9zdE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVkaXJlY3RQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLlJlZGlyZWN0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWRpcmVjdFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuUmVkaXJlY3RgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2Vic2l0ZVJlZGlyZWN0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1dlYnNpdGVfUmVkaXJlY3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdNaXJyb3JVUkwnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pcnJvclVybCksXG4gICAgICAnUmVwbGFjZUtleVdpdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcGxhY2VLZXlXaXRoKSxcbiAgICAgICdNaXJyb3JIZWFkZXJzJzogcm9zV2Vic2l0ZU1pcnJvckhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5taXJyb3JIZWFkZXJzKSxcbiAgICAgICdIdHRwUmVkaXJlY3RDb2RlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwUmVkaXJlY3RDb2RlKSxcbiAgICAgICdFbmFibGVSZXBsYWNlUHJlZml4Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlUmVwbGFjZVByZWZpeCksXG4gICAgICAnUGFzc1F1ZXJ5U3RyaW5nJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFzc1F1ZXJ5U3RyaW5nKSxcbiAgICAgICdNaXJyb3JGb2xsb3dSZWRpcmVjdCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pcnJvckZvbGxvd1JlZGlyZWN0KSxcbiAgICAgICdSZXBsYWNlS2V5UHJlZml4V2l0aCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGFjZUtleVByZWZpeFdpdGgpLFxuICAgICAgJ1JlZGlyZWN0VHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVkaXJlY3RUeXBlKSxcbiAgICAgICdNaXJyb3JQYXNzUXVlcnlTdHJpbmcnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5taXJyb3JQYXNzUXVlcnlTdHJpbmcpLFxuICAgICAgJ01pcnJvckNoZWNrTWQ1Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWlycm9yQ2hlY2tNZDUpLFxuICAgICAgJ1Byb3RvY29sJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm90b2NvbCksXG4gICAgICAnSG9zdE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhvc3ROYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1dlYnNpdGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvdXRpbmdSdWxlc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb25kaXRpb246IENvbmRpdGlvbnMgZm9yIG1hdGNoaW5nLlxuICAgICAqIFRoaXMgcnVsZSBpcyBleGVjdXRlZCBpZiB0aGUgc3BlY2lmaWVkIGl0ZW1zIGFyZSBhbGwgc2F0aXNmaWVkLiBBIG1hdGNoIGlzIG9ubHkgY29uc2lkZXJlZCBpZiBhbGwgY29uZGl0aW9ucyBmb3IgZWFjaCBub2RlIHVuZGVyIHRoaXMgY29udGFpbmVyIGFyZSBtZXQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb25kaXRpb246IFJvc1dlYnNpdGUuQ29uZGl0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcnVsZU51bWJlcjogTWF0Y2ggYW5kIGV4ZWN1dGUgdGhlIHNlcXVlbmNlIG51bWJlciBvZiB0aGUgUm91dGluZ1J1bGUsIE9TUyB3aWxsIG1hdGNoIHRoZSBydWxlcyBpbiB0dXJuIGFjY29yZGluZyB0byB0aGlzIHNlcXVlbmNlIG51bWJlci4gSWYgdGhlIG1hdGNoIGlzIHN1Y2Nlc3NmdWwsIHRoaXMgcnVsZSBpcyBleGVjdXRlZCBhbmQgbm8gc3Vic2VxdWVudCBydWxlcyBhcmUgZXhlY3V0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBydWxlTnVtYmVyOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVkaXJlY3Q6IFNwZWNpZmllcyB0aGUgYWN0aW9uIHRvIGJlIHBlcmZvcm1lZCB3aGVuIHRoaXMgcnVsZSBpcyBtYXRjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVkaXJlY3Q6IFJvc1dlYnNpdGUuUmVkaXJlY3RQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvdXRpbmdSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0aW5nUnVsZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NXZWJzaXRlX1JvdXRpbmdSdWxlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uZGl0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbmRpdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uZGl0aW9uJywgUm9zV2Vic2l0ZV9Db25kaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOdW1iZXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZU51bWJlcikpO1xuICAgIGlmKHByb3BlcnRpZXMucnVsZU51bWJlciAmJiAodHlwZW9mIHByb3BlcnRpZXMucnVsZU51bWJlcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU51bWJlcicsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTnVtYmVyJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZGlyZWN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZGlyZWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdCcsIFJvc1dlYnNpdGVfUmVkaXJlY3RQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZWRpcmVjdCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3V0aW5nUnVsZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLlJvdXRpbmdSdWxlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm91dGluZ1J1bGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5Sb3V0aW5nUnVsZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2Vic2l0ZVJvdXRpbmdSdWxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX1JvdXRpbmdSdWxlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NvbmRpdGlvbic6IHJvc1dlYnNpdGVDb25kaXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25kaXRpb24pLFxuICAgICAgJ1J1bGVOdW1iZXInOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpLFxuICAgICAgJ1JlZGlyZWN0Jzogcm9zV2Vic2l0ZVJlZGlyZWN0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVkaXJlY3QpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2V0c1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgSGVhZGVyIHRvIGEgbWF4aW11bSBvZiAxMDI0IGJ5dGVzIHdpdGhvdXQgXFxyXFxuLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogU2V0cyB0aGUgSGVhZGVyIGtleSB0byBhIG1heGltdW0gb2YgMTAyNCBieXRlcyBpbiB0aGUgc2FtZSBjaGFyYWN0ZXIgc2V0IGFzIFBhc3MuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2V0c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9TZXRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudmFsdWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy52YWx1ZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnZhbHVlKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgaWYocHJvcGVydGllcy5rZXkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmtleSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmtleSxcbiAgICAgICAgICByZWc6IC9eWy1hLXpBLVowLTldezEsMTAyNH0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTZXRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5TZXRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5TZXRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dlYnNpdGVTZXRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1dlYnNpdGVfU2V0c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5kZXhEb2N1bWVudDogVGhlIHByb3BlcnRpZXMgb2YgZGVmYXVsdCBob21lIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmRleERvY3VtZW50PzogUm9zV2Vic2l0ZS5JbmRleERvY3VtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcm91dGluZ1J1bGVzOiBUaGUgbGlzdCBvZiByb3V0aW5nIHJ1bGVzLCB1cCB0byAyMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJvdXRpbmdSdWxlcz86IEFycmF5PFJvc1dlYnNpdGUuUm91dGluZ1J1bGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVycm9yRG9jdW1lbnQ6IFRoZSBwcm9wZXJ0aWVzIG9mIGRlZmF1bHQgZXJyb3IgcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVycm9yRG9jdW1lbnQ/OiBSb3NXZWJzaXRlLkVycm9yRG9jdW1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5kZXhEb2N1bWVudCcsIFJvc1dlYnNpdGVfSW5kZXhEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluZGV4RG9jdW1lbnQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJvdXRpbmdSdWxlcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnJvdXRpbmdSdWxlcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnJvdXRpbmdSdWxlcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRpbmdSdWxlcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yb3V0aW5nUnVsZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0aW5nUnVsZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NXZWJzaXRlX1JvdXRpbmdSdWxlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5yb3V0aW5nUnVsZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Vycm9yRG9jdW1lbnQnLCBSb3NXZWJzaXRlX0Vycm9yRG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5lcnJvckRvY3VtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIldlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5XZWJzaXRlQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLldlYnNpdGVDb25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dlYnNpdGVXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX1dlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnSW5kZXhEb2N1bWVudCc6IHJvc1dlYnNpdGVJbmRleERvY3VtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5kZXhEb2N1bWVudCksXG4gICAgICAnUm91dGluZ1J1bGVzJzogcm9zLmxpc3RNYXBwZXIocm9zV2Vic2l0ZVJvdXRpbmdSdWxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yb3V0aW5nUnVsZXMpLFxuICAgICAgJ0Vycm9yRG9jdW1lbnQnOiByb3NXZWJzaXRlRXJyb3JEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVycm9yRG9jdW1lbnQpLFxuICAgIH07XG59XG4iXX0=