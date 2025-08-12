"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosWebsite = exports.RosObjectAcl = exports.RosDomain = exports.RosDirectory = exports.RosBucketReplication = exports.RosBucket = void 0;
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
function rosBucketExpirationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_ExpirationPropertyValidator(properties).assertSuccess();
    return {
        'ExpiredObjectDeleteMarker': ros.booleanToRosTemplate(properties.expiredObjectDeleteMarker),
        'CreatedBeforeDate': ros.stringToRosTemplate(properties.createdBeforeDate),
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
        'Prefix': ros.stringToRosTemplate(properties.prefix),
        'ID': ros.stringToRosTemplate(properties.id),
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
            allowedValues: ["internal", "accelerate"],
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Domain`, which is used to bind a custom domain name.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Website`.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9zcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWlHOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx1QkFBdUIsQ0FBQyxVQUFlO0lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3BILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxJQUFHLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzlFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtZQUM3QixhQUFhLEVBQUUs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LENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RSxPQUFPO1FBQ0wsZUFBZSxFQUFFLDRDQUE0QyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDdkYsY0FBYyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3BHLGVBQWUsRUFBRSw0Q0FBNEMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3hGLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NCdWNrZXRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0J1Y2tldFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXROYW1lOiBidWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBidWNrZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29udHJvbDogVGhlIGFjY2VzcyBjb250cm9sIGxpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBibG9ja1B1YmxpY0FjY2VzczogV2hldGhlciB0byBibG9jayBwdWJsaWMgYWNjZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJsb2NrUHVibGljQWNjZXNzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb3JzQ29uZmlndXJhdGlvbjogUnVsZXMgdGhhdCBkZWZpbmUgY3Jvc3Mtb3JpZ2luIHJlc291cmNlIHNoYXJpbmcgb2Ygb2JqZWN0cyBpbiB0aGlzIGJ1Y2tldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3JzQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5DT1JTQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSByZWxhdGl2ZSBvYmplY3RzIGluIHRoZSBidWNrZXQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlT3NzSGRmc1NlcnZpY2U6IFdoZXRoZXIgZW5hYmxlIE9TUy1IREZTIHNlcnZpY2UuIFxuICAgICAqICoqTm90ZSoqOiBPbmNlIGl0J3MgZW5hYmxlZCwgaXQgY2FuJ3QgYmUgZGlzYWJsZWQgYWdhaW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlT3NzSGRmc1NlcnZpY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpZmVjeWNsZUNvbmZpZ3VyYXRpb246IFJ1bGVzIHRoYXQgZGVmaW5lIGhvdyBvc3MgYnVja2V0IG1hbmFnZXMgb2JqZWN0cyBkdXJpbmcgdGhlaXIgbGlmZXRpbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGlmZWN5Y2xlQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5MaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0NvbmZpZ3VyYXRpb246IFNldHRpbmdzIHRoYXQgZGVmaW5lcyB3aGVyZSBsb2dzIGFyZSBzdG9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nZ2luZ0NvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3k6IEJ1Y2tldCBwb2xpY3lcbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3k/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVkdW5kYW5jeVR5cGU6IFNwZWNpZmllcyB0aGUgZGF0YSBkaXNhc3RlciByZWNvdmVyeSB0eXBlIG9mIHRoZSBzdG9yYWdlIHNwYWNlLiBUaGUgdmFsdWUgcmFuZ2UgaXMgYXMgZm9sbG93czpcbiAgICAgKiBMUlMgKGRlZmF1bHQpOiBMb2NhbCByZWR1bmRhbnQgTFJTIHN0b3JlcyB5b3VyIGRhdGEgcmVkdW5kYW50bHkgb24gZGlmZmVyZW50IHN0b3JhZ2UgZGV2aWNlcyBpbiB0aGUgc2FtZSBhdmFpbGFiaWxpdHkgem9uZSwgYW5kIGNhbiBzdXBwb3J0IGRhdGEgbG9zcyBhbmQgbm9ybWFsIGFjY2VzcyBldmVuIHdoZW4gdHdvIHN0b3JhZ2UgZGV2aWNlcyBhcmUgZGFtYWdlZCBjb25jdXJyZW50bHkuXG4gICAgICogWlJTOiBJbnRyYS1jaXR5IHJlZHVuZGFudCBaUlMgYWRvcHRzIGEgZGF0YSByZWR1bmRhbmN5IHN0b3JhZ2UgbWVjaGFuaXNtIGluIG11bHRpcGxlIGF2YWlsYWJpbGl0eSB6b25lcyAoQVopLCBhbmQgc3RvcmVzIHVzZXIgZGF0YSByZWR1bmRhbnRseSBpbiBtdWx0aXBsZSBhdmFpbGFiaWxpdHkgem9uZXMgaW4gdGhlIHNhbWUgcmVnaW9uLiBXaGVuIGFuIGF2YWlsYWJpbGl0eSB6b25lIGlzIHVuYXZhaWxhYmxlLCBub3JtYWwgYWNjZXNzIHRvIGRhdGEgY2FuIHN0aWxsIGJlIGd1YXJhbnRlZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVkdW5kYW5jeVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmZXJlckNvbmZpZ3VyYXRpb246IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZmVyZXJDb25maWd1cmF0aW9uPzogUm9zQnVja2V0LlJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgcmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogU3BlY2lmaWVzIHRoZSBidWNrZXQgdXNlZCB0byBzdG9yZSB0aGUgc2VydmVyLXNpZGUgZW5jcnlwdGlvbiBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdG9yYWdlQ2xhc3M6IFNwZWNpZmllcyB0aGUgc3RvcmFnZSBjbGFzcyBvZiB0aGUgYnVja2V0LiBEZWZhdWx0IGlzIFwiU3RhbmRhcmRcIi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdG9yYWdlQ2xhc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogQnVja2V0IHRhZ3MgaW4gay12IHBhaXJzIGZvcm1hdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiAoYW55KSB9O1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZlcnNpb25pbmdDb25maWd1cmF0aW9uOiBBIHN0YXRlIG9mIHZlcnNpb25pbmdcbiAgICAgKi9cbiAgICByZWFkb25seSB2ZXJzaW9uaW5nQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5WZXJzaW9uaW5nQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYnNpdGVDb25maWd1cmF0aW9uVjI6IFdlYnNpdGUgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJzaXRlQ29uZmlndXJhdGlvblYyPzogUm9zQnVja2V0LldlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCdWNrZXRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3knLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBvbGljeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlT3NzSGRmc1NlcnZpY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZU9zc0hkZnNTZXJ2aWNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgaWYocHJvcGVydGllcy5zdG9yYWdlQ2xhc3MgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0b3JhZ2VDbGFzcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmFnZUNsYXNzJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RvcmFnZUNsYXNzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlN0YW5kYXJkXCIsXCJJQVwiLFwiQXJjaGl2ZVwiLFwiQ29sZEFyY2hpdmVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdG9yYWdlQ2xhc3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RvcmFnZUNsYXNzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWR1bmRhbmN5VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVkdW5kYW5jeVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZHVuZGFuY3lUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVkdW5kYW5jeVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTFJTXCIsXCJaUlNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWR1bmRhbmN5VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWR1bmRhbmN5VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGlmZWN5Y2xlQ29uZmlndXJhdGlvbicsIFJvc0J1Y2tldF9MaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubGlmZWN5Y2xlQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uJywgUm9zQnVja2V0X1NlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy52ZXJzaW9uaW5nQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmxvY2tQdWJsaWNBY2Nlc3MnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmJsb2NrUHVibGljQWNjZXNzKSk7XG4gICAgaWYocHJvcGVydGllcy5hY2Nlc3NDb250cm9sICYmICh0eXBlb2YgcHJvcGVydGllcy5hY2Nlc3NDb250cm9sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NDb250cm9sJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWNjZXNzQ29udHJvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJwcml2YXRlXCIsXCJwdWJsaWMtcmVhZFwiLFwicHVibGljLXJlYWQtd3JpdGVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NDb250cm9sJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbnRyb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvcnNDb25maWd1cmF0aW9uJywgUm9zQnVja2V0X0NPUlNDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29yc0NvbmZpZ3VyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxldGlvbkZvcmNlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dnaW5nQ29uZmlndXJhdGlvbicsIFJvc0J1Y2tldF9Mb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvZ2dpbmdDb25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJzaXRlQ29uZmlndXJhdGlvblYyJywgUm9zQnVja2V0X1dlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy53ZWJzaXRlQ29uZmlndXJhdGlvblYyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZlcmVyQ29uZmlndXJhdGlvbicsIFJvc0J1Y2tldF9SZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZmVyZXJDb25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0J1Y2tldFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpLFxuICAgICAgJ0FjY2Vzc0NvbnRyb2wnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2Vzc0NvbnRyb2wpLFxuICAgICAgJ0Jsb2NrUHVibGljQWNjZXNzJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmxvY2tQdWJsaWNBY2Nlc3MpLFxuICAgICAgJ0NPUlNDb25maWd1cmF0aW9uJzogcm9zQnVja2V0Q09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb3JzQ29uZmlndXJhdGlvbiksXG4gICAgICAnRGVsZXRpb25Gb3JjZSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpLFxuICAgICAgJ0VuYWJsZU9zc0hkZnNTZXJ2aWNlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlT3NzSGRmc1NlcnZpY2UpLFxuICAgICAgJ0xpZmVjeWNsZUNvbmZpZ3VyYXRpb24nOiByb3NCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGlmZWN5Y2xlQ29uZmlndXJhdGlvbiksXG4gICAgICAnTG9nZ2luZ0NvbmZpZ3VyYXRpb24nOiByb3NCdWNrZXRMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2dpbmdDb25maWd1cmF0aW9uKSxcbiAgICAgICdQb2xpY3knOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wb2xpY3kpLFxuICAgICAgJ1JlZHVuZGFuY3lUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWR1bmRhbmN5VHlwZSksXG4gICAgICAnUmVmZXJlckNvbmZpZ3VyYXRpb24nOiByb3NCdWNrZXRSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZmVyZXJDb25maWd1cmF0aW9uKSxcbiAgICAgICdSZXNvdXJjZUdyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgICAnU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uJzogcm9zQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uKSxcbiAgICAgICdTdG9yYWdlQ2xhc3MnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0b3JhZ2VDbGFzcyksXG4gICAgICAnVGFncyc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgICAgJ1ZlcnNpb25pbmdDb25maWd1cmF0aW9uJzogcm9zQnVja2V0VmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy52ZXJzaW9uaW5nQ29uZmlndXJhdGlvbiksXG4gICAgICAnV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMic6IHJvc0J1Y2tldFdlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWJzaXRlQ29uZmlndXJhdGlvblYyKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpPU1M6OkJ1Y2tldGAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEJ1Y2tldGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWJ1Y2tldFxuICovXG5leHBvcnQgY2xhc3MgUm9zQnVja2V0IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpPU1M6OkJ1Y2tldFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcm46IFRoZSBBbGliYWJhIENsb3VkIFJlc291cmNlIE5hbWUgKEFSTikuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluTmFtZTogVGhlIHB1YmxpYyBETlMgbmFtZSBvZiB0aGUgc3BlY2lmaWVkIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW50ZXJuYWxEb21haW5OYW1lOiBUaGUgaW50ZXJuYWwgRE5TIG5hbWUgb2YgdGhlIHNwZWNpZmllZCBidWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5hbERvbWFpbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZTogVGhlIG5hbWUgb2YgQnVja2V0XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXROYW1lOiBidWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0NvbnRyb2w6IFRoZSBhY2Nlc3MgY29udHJvbCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2Nlc3NDb250cm9sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmxvY2tQdWJsaWNBY2Nlc3M6IFdoZXRoZXIgdG8gYmxvY2sgcHVibGljIGFjY2Vzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmxvY2tQdWJsaWNBY2Nlc3M6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29yc0NvbmZpZ3VyYXRpb246IFJ1bGVzIHRoYXQgZGVmaW5lIGNyb3NzLW9yaWdpbiByZXNvdXJjZSBzaGFyaW5nIG9mIG9iamVjdHMgaW4gdGhpcyBidWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIGNvcnNDb25maWd1cmF0aW9uOiBSb3NCdWNrZXQuQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRlbGV0ZSB0aGUgcmVsYXRpdmUgb2JqZWN0cyBpbiB0aGUgYnVja2V0LiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvbkZvcmNlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZU9zc0hkZnNTZXJ2aWNlOiBXaGV0aGVyIGVuYWJsZSBPU1MtSERGUyBzZXJ2aWNlLiBcbiAgICAgKiAqKk5vdGUqKjogT25jZSBpdCdzIGVuYWJsZWQsIGl0IGNhbid0IGJlIGRpc2FibGVkIGFnYWluLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVPc3NIZGZzU2VydmljZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaWZlY3ljbGVDb25maWd1cmF0aW9uOiBSdWxlcyB0aGF0IGRlZmluZSBob3cgb3NzIGJ1Y2tldCBtYW5hZ2VzIG9iamVjdHMgZHVyaW5nIHRoZWlyIGxpZmV0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBsaWZlY3ljbGVDb25maWd1cmF0aW9uOiBSb3NCdWNrZXQuTGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2dpbmdDb25maWd1cmF0aW9uOiBTZXR0aW5ncyB0aGF0IGRlZmluZXMgd2hlcmUgbG9ncyBhcmUgc3RvcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dnaW5nQ29uZmlndXJhdGlvbjogUm9zQnVja2V0LkxvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5OiBCdWNrZXQgcG9saWN5XG4gICAgICovXG4gICAgcHVibGljIHBvbGljeTogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZHVuZGFuY3lUeXBlOiBTcGVjaWZpZXMgdGhlIGRhdGEgZGlzYXN0ZXIgcmVjb3ZlcnkgdHlwZSBvZiB0aGUgc3RvcmFnZSBzcGFjZS4gVGhlIHZhbHVlIHJhbmdlIGlzIGFzIGZvbGxvd3M6XG4gICAgICogTFJTIChkZWZhdWx0KTogTG9jYWwgcmVkdW5kYW50IExSUyBzdG9yZXMgeW91ciBkYXRhIHJlZHVuZGFudGx5IG9uIGRpZmZlcmVudCBzdG9yYWdlIGRldmljZXMgaW4gdGhlIHNhbWUgYXZhaWxhYmlsaXR5IHpvbmUsIGFuZCBjYW4gc3VwcG9ydCBkYXRhIGxvc3MgYW5kIG5vcm1hbCBhY2Nlc3MgZXZlbiB3aGVuIHR3byBzdG9yYWdlIGRldmljZXMgYXJlIGRhbWFnZWQgY29uY3VycmVudGx5LlxuICAgICAqIFpSUzogSW50cmEtY2l0eSByZWR1bmRhbnQgWlJTIGFkb3B0cyBhIGRhdGEgcmVkdW5kYW5jeSBzdG9yYWdlIG1lY2hhbmlzbSBpbiBtdWx0aXBsZSBhdmFpbGFiaWxpdHkgem9uZXMgKEFaKSwgYW5kIHN0b3JlcyB1c2VyIGRhdGEgcmVkdW5kYW50bHkgaW4gbXVsdGlwbGUgYXZhaWxhYmlsaXR5IHpvbmVzIGluIHRoZSBzYW1lIHJlZ2lvbi4gV2hlbiBhbiBhdmFpbGFiaWxpdHkgem9uZSBpcyB1bmF2YWlsYWJsZSwgbm9ybWFsIGFjY2VzcyB0byBkYXRhIGNhbiBzdGlsbCBiZSBndWFyYW50ZWVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWR1bmRhbmN5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZmVyZXJDb25maWd1cmF0aW9uOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmZXJlckNvbmZpZ3VyYXRpb246IFJvc0J1Y2tldC5SZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIHJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IFNwZWNpZmllcyB0aGUgYnVja2V0IHVzZWQgdG8gc3RvcmUgdGhlIHNlcnZlci1zaWRlIGVuY3J5cHRpb24gcnVsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uOiBSb3NCdWNrZXQuU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RvcmFnZUNsYXNzOiBTcGVjaWZpZXMgdGhlIHN0b3JhZ2UgY2xhc3Mgb2YgdGhlIGJ1Y2tldC4gRGVmYXVsdCBpcyBcIlN0YW5kYXJkXCIuXG4gICAgICovXG4gICAgcHVibGljIHN0b3JhZ2VDbGFzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IEJ1Y2tldCB0YWdzIGluIGstdiBwYWlycyBmb3JtYXQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IHsgW2tleTogc3RyaW5nXTogKGFueSkgfSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2ZXJzaW9uaW5nQ29uZmlndXJhdGlvbjogQSBzdGF0ZSBvZiB2ZXJzaW9uaW5nXG4gICAgICovXG4gICAgcHVibGljIHZlcnNpb25pbmdDb25maWd1cmF0aW9uOiBSb3NCdWNrZXQuVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJzaXRlQ29uZmlndXJhdGlvblYyOiBXZWJzaXRlIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHdlYnNpdGVDb25maWd1cmF0aW9uVjI6IFJvc0J1Y2tldC5XZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQnVja2V0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCdWNrZXQuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybiA9IHRoaXMuZ2V0QXR0KCdBcm4nKTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluTmFtZSA9IHRoaXMuZ2V0QXR0KCdEb21haW5OYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmFsRG9tYWluTmFtZSA9IHRoaXMuZ2V0QXR0KCdJbnRlcm5hbERvbWFpbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHRoaXMuZ2V0QXR0KCdOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJ1Y2tldE5hbWUgPSBwcm9wcy5idWNrZXROYW1lO1xuICAgICAgICB0aGlzLmFjY2Vzc0NvbnRyb2wgPSBwcm9wcy5hY2Nlc3NDb250cm9sO1xuICAgICAgICB0aGlzLmJsb2NrUHVibGljQWNjZXNzID0gcHJvcHMuYmxvY2tQdWJsaWNBY2Nlc3M7XG4gICAgICAgIHRoaXMuY29yc0NvbmZpZ3VyYXRpb24gPSBwcm9wcy5jb3JzQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5kZWxldGlvbkZvcmNlID0gcHJvcHMuZGVsZXRpb25Gb3JjZTtcbiAgICAgICAgdGhpcy5lbmFibGVPc3NIZGZzU2VydmljZSA9IHByb3BzLmVuYWJsZU9zc0hkZnNTZXJ2aWNlO1xuICAgICAgICB0aGlzLmxpZmVjeWNsZUNvbmZpZ3VyYXRpb24gPSBwcm9wcy5saWZlY3ljbGVDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmxvZ2dpbmdDb25maWd1cmF0aW9uID0gcHJvcHMubG9nZ2luZ0NvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMucG9saWN5ID0gcHJvcHMucG9saWN5O1xuICAgICAgICB0aGlzLnJlZHVuZGFuY3lUeXBlID0gcHJvcHMucmVkdW5kYW5jeVR5cGU7XG4gICAgICAgIHRoaXMucmVmZXJlckNvbmZpZ3VyYXRpb24gPSBwcm9wcy5yZWZlcmVyQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uID0gcHJvcHMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0b3JhZ2VDbGFzcyA9IHByb3BzLnN0b3JhZ2VDbGFzcztcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICAgICAgdGhpcy52ZXJzaW9uaW5nQ29uZmlndXJhdGlvbiA9IHByb3BzLnZlcnNpb25pbmdDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLndlYnNpdGVDb25maWd1cmF0aW9uVjIgPSBwcm9wcy53ZWJzaXRlQ29uZmlndXJhdGlvblYyO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6IHRoaXMuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIGFjY2Vzc0NvbnRyb2w6IHRoaXMuYWNjZXNzQ29udHJvbCxcbiAgICAgICAgICAgIGJsb2NrUHVibGljQWNjZXNzOiB0aGlzLmJsb2NrUHVibGljQWNjZXNzLFxuICAgICAgICAgICAgY29yc0NvbmZpZ3VyYXRpb246IHRoaXMuY29yc0NvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBkZWxldGlvbkZvcmNlOiB0aGlzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBlbmFibGVPc3NIZGZzU2VydmljZTogdGhpcy5lbmFibGVPc3NIZGZzU2VydmljZSxcbiAgICAgICAgICAgIGxpZmVjeWNsZUNvbmZpZ3VyYXRpb246IHRoaXMubGlmZWN5Y2xlQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGxvZ2dpbmdDb25maWd1cmF0aW9uOiB0aGlzLmxvZ2dpbmdDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgcG9saWN5OiB0aGlzLnBvbGljeSxcbiAgICAgICAgICAgIHJlZHVuZGFuY3lUeXBlOiB0aGlzLnJlZHVuZGFuY3lUeXBlLFxuICAgICAgICAgICAgcmVmZXJlckNvbmZpZ3VyYXRpb246IHRoaXMucmVmZXJlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHRoaXMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uOiB0aGlzLnNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIHN0b3JhZ2VDbGFzczogdGhpcy5zdG9yYWdlQ2xhc3MsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgICAgICB2ZXJzaW9uaW5nQ29uZmlndXJhdGlvbjogdGhpcy52ZXJzaW9uaW5nQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIHdlYnNpdGVDb25maWd1cmF0aW9uVjI6IHRoaXMud2Vic2l0ZUNvbmZpZ3VyYXRpb25WMixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQnVja2V0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjcmVhdGVkQmVmb3JlRGF0ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjcmVhdGVkQmVmb3JlRGF0ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkYXlzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRheXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9BYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3JlYXRlZEJlZm9yZURhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY3JlYXRlZEJlZm9yZURhdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RheXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZGF5cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5BYm9ydE11bHRpcGFydFVwbG9hZGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQWJvcnRNdWx0aXBhcnRVcGxvYWRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0QWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0Fib3J0TXVsdGlwYXJ0VXBsb2FkUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ3JlYXRlZEJlZm9yZURhdGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNyZWF0ZWRCZWZvcmVEYXRlKSxcbiAgICAgICdEYXlzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kYXlzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVzcG9uc2VWYXJ5OiBXaGV0aGVyIHRvIHJldHVybiB0aGUgVmFyeTogT3JpZ2luIGhlYWRlci4gVGhlIHJhbmdlIGlzIGFzIGZvbGxvd3M6XG4gICAgICogLSB0cnVlOiBUaGUgVmFyeTogT3JpZ2luIGhlYWRlciBpcyByZXR1cm5lZCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgYSBjcm9zcy1vcmlnaW4gcmVxdWVzdCB3YXMgc2VudCBvciB3aGV0aGVyIHRoZSBjcm9zcy1vcmlnaW4gcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bC5cbiAgICAgKiAtIGZhbHNlIChkZWZhdWx0KSA6IERvIG5vdCByZXR1cm4gdGhlIFZhcnk6IE9yaWdpbiBoZWFkZXIgdW5kZXIgYW55IGNpcmN1bXN0YW5jZXNcbiAgICAgKiBOb3RlOiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBjb25maWd1cmVkIHNlcGFyYXRlbHk7IGF0IGxlYXN0IG9uZSBjcm9zcy1kb21haW4gcnVsZSBtdXN0IGJlIGNvbmZpZ3VyZWQgdG8gdGFrZSBlZmZlY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXNwb25zZVZhcnk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvcnNSdWxlOiBBIHNldCBvZiBvcmlnaW5zIGFuZCBtZXRob2RzIHRoYXQgeW91IGFsbG93LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29yc1J1bGU/OiBBcnJheTxSb3NCdWNrZXQuQ09SU1J1bGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9DT1JTQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzcG9uc2VWYXJ5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5yZXNwb25zZVZhcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvcnNSdWxlJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQnVja2V0X0NPUlNSdWxlUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmNvcnNSdWxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNPUlNDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkNPUlNDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5DT1JTQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXNwb25zZVZhcnknOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNwb25zZVZhcnkpLFxuICAgICAgJ0NPUlNSdWxlJzogcm9zLmxpc3RNYXBwZXIocm9zQnVja2V0Q09SU1J1bGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29yc1J1bGUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDT1JTUnVsZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGxvd2VkTWV0aG9kOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFsbG93ZWRNZXRob2Q/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heEFnZVNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4QWdlU2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleHBvc2VIZWFkZXI6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXhwb3NlSGVhZGVyPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGxvd2VkT3JpZ2luOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFsbG93ZWRPcmlnaW4/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFsbG93ZWRIZWFkZXI6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWxsb3dlZEhlYWRlcj86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDT1JTUnVsZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDT1JTUnVsZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9DT1JTUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb3dlZE1ldGhvZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuYWxsb3dlZE1ldGhvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4QWdlU2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhBZ2VTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleHBvc2VIZWFkZXInLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmV4cG9zZUhlYWRlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb3dlZE9yaWdpbicsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuYWxsb3dlZE9yaWdpbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb3dlZEhlYWRlcicsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuYWxsb3dlZEhlYWRlcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDT1JTUnVsZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5DT1JTUnVsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ09SU1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQ09SU1J1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0Q09SU1J1bGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0NPUlNSdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQWxsb3dlZE1ldGhvZCc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFsbG93ZWRNZXRob2QpLFxuICAgICAgJ01heEFnZVNlY29uZHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heEFnZVNlY29uZHMpLFxuICAgICAgJ0V4cG9zZUhlYWRlcic6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmV4cG9zZUhlYWRlciksXG4gICAgICAnQWxsb3dlZE9yaWdpbic6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFsbG93ZWRPcmlnaW4pLFxuICAgICAgJ0FsbG93ZWRIZWFkZXInOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hbGxvd2VkSGVhZGVyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29uZGl0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluY2x1ZGVIZWFkZXJzOiBUaGlzIHJ1bGUgd2lsbCBvbmx5IG1hdGNoIGlmIHRoZSByZXF1ZXN0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgSGVhZGVyIGFuZCB0aGUgdmFsdWUgaXMgdGhlIHNwZWNpZmllZCB2YWx1ZS4gVXAgdG8gMTAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmNsdWRlSGVhZGVycz86IEFycmF5PFJvc0J1Y2tldC5JbmNsdWRlSGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXlQcmVmaXhFcXVhbHM6IFRoZSBwcmVmaXggb2YgdGhlIE9iamVjdCBuYW1lIHRvIGJlIG1hdGNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXlQcmVmaXhFcXVhbHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEVycm9yQ29kZVJldHVybmVkRXF1YWxzOiBXaGVuIGFjY2Vzc2luZyB0aGUgc3BlY2lmaWVkIE9iamVjdCwgdGhpcyBzdGF0dXMgbXVzdCBiZSByZXR1cm5lZCB0byBtYXRjaCB0aGlzIHJ1bGUuIFRoaXMgZmllbGQgbXVzdCBiZSA0MDQgd2hlbiB0aGUganVtcCBydWxlIGlzIG1pcnJvci1iYWNrIHRvIHRoZSBzb3VyY2UgdHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXlTdWZmaXhFcXVhbHM6IFRoZSBzdWZmaXggb2YgdGhlIE9iamVjdCBuYW1lIHRvIGJlIG1hdGNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXlTdWZmaXhFcXVhbHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb25kaXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uZGl0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X0NvbmRpdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pbmNsdWRlSGVhZGVycykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5jbHVkZUhlYWRlcnMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmNsdWRlSGVhZGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0J1Y2tldF9JbmNsdWRlSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5pbmNsdWRlSGVhZGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5UHJlZml4RXF1YWxzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleVByZWZpeEVxdWFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEVycm9yQ29kZVJldHVybmVkRXF1YWxzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5U3VmZml4RXF1YWxzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleVN1ZmZpeEVxdWFscykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDb25kaXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQ29uZGl0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb25kaXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQ29uZGl0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldENvbmRpdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfQ29uZGl0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnSW5jbHVkZUhlYWRlcnMnOiByb3MubGlzdE1hcHBlcihyb3NCdWNrZXRJbmNsdWRlSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pbmNsdWRlSGVhZGVycyksXG4gICAgICAnS2V5UHJlZml4RXF1YWxzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXlQcmVmaXhFcXVhbHMpLFxuICAgICAgJ0h0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cEVycm9yQ29kZVJldHVybmVkRXF1YWxzKSxcbiAgICAgICdLZXlTdWZmaXhFcXVhbHMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleVN1ZmZpeEVxdWFscyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVycm9yRG9jdW1lbnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cFN0YXR1czogVGhlIEhUVFAgc3RhdHVzIGNvZGUgb2YgdGhlIGVycm9yIHBhZ2UuIFZhbGlkIHZhbHVlczogMjAwLCA0MDQgKGRlZmF1bHQpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cFN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IFRoZSBkZWZhdWx0IGVycm9yIHBhZ2UuXG4gICAgICogV2hlbiBhbiBlcnJvciBwYWdlIGlzIHNwZWNpZmllZCwgaWYgdGhlIGFjY2Vzc2VkIE9iamVjdCBkb2VzIG5vdCBleGlzdCwgdGhpcyBlcnJvciBwYWdlIGlzIHJldHVybmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFcnJvckRvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVycm9yRG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfRXJyb3JEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuaHR0cFN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaHR0cFN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFN0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmh0dHBTdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiMjAwXCIsXCI0MDRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwU3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmh0dHBTdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRXJyb3JEb2N1bWVudFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5FcnJvckRvY3VtZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFcnJvckRvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkVycm9yRG9jdW1lbnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0RXJyb3JEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfRXJyb3JEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0h0dHBTdGF0dXMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBTdGF0dXMpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRXhwaXJhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyOiBTcGVjaWZpZXMgd2hldGhlciBleHBpcmVkIGRlbGV0ZSB0YWdzIHNob3VsZCBiZSByZW1vdmVkIGF1dG9tYXRpY2FsbHkuIFRoZSB2YWx1ZXMgYXJlIGFzIGZvbGxvd3M6XG4gICAgICogLSB0cnVlOiBUaGlzIG1lYW5zIHRoYXQgdGhlIGV4cGlyYXRpb24gZGVsZXRlIGZsYWcgaXMgYXV0b21hdGljYWxseSByZW1vdmVkLiBXaGVuIHNldCB0byB0cnVlLCBzcGVjaWZ5aW5nIERheXMgb3IgQ3JlYXRlZEJlZm9yZURhdGUgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgKiAtIGZhbHNlOiBUaGlzIGluZGljYXRlcyB0aGF0IHRoZSBleHBpcmF0aW9uIGRlbGV0ZSBtYXJrZXIgd2lsbCBub3QgYmUgYXV0b21hdGljYWxseSByZW1vdmVkLiBXaGVuIGZhbHNlLCBlaXRoZXIgRGF5cyBvciBDcmVhdGVkQmVmb3JlRGF0ZSBtdXN0IGJlIHNwZWNpZmllZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4cGlyZWRPYmplY3REZWxldGVNYXJrZXI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNyZWF0ZWRCZWZvcmVEYXRlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNyZWF0ZWRCZWZvcmVEYXRlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRheXM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGF5cz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEV4cGlyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXhwaXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9FeHBpcmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5leHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjcmVhdGVkQmVmb3JlRGF0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jcmVhdGVkQmVmb3JlRGF0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF5cycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5kYXlzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkV4cGlyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuRXhwaXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXhwaXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5FeHBpcmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldEV4cGlyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0V4cGlyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdFeHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlciksXG4gICAgICAnQ3JlYXRlZEJlZm9yZURhdGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNyZWF0ZWRCZWZvcmVEYXRlKSxcbiAgICAgICdEYXlzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kYXlzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5vdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBub3Q/OiBSb3NCdWNrZXQuTm90UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBGaWx0ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRmlsdGVyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X0ZpbHRlclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90JywgUm9zQnVja2V0X05vdFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5vdCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJGaWx0ZXJQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuRmlsdGVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGaWx0ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuRmlsdGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldEZpbHRlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTm90Jzogcm9zQnVja2V0Tm90UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubm90KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiBUaGUgbmFtZSBvZiB0aGUgaGVhZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXF1YWxzVG86IFRoZSB2YWx1ZSBvZiB0aGUgaGVhZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXF1YWxzVG8/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbmNsdWRlSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmNsdWRlSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9JbmNsdWRlSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXF1YWxzVG8nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZXF1YWxzVG8pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuSW5jbHVkZUhlYWRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluY2x1ZGVIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkluY2x1ZGVIZWFkZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldEluY2x1ZGVIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9JbmNsdWRlSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICAgICdFcXVhbHMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVxdWFsc1RvKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5kZXhEb2N1bWVudFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBCZWhhdmlvciB3aGVuIGFuIE9iamVjdCB0aGF0IGVuZHMgd2l0aCBhIG5vbi1mb3J3YXJkIHNsYXNoIChcXC8pIGFuZCBkb2VzIG5vdCBleGlzdCBpcyBhY2Nlc3NlZCBhZnRlciBzZXR0aW5nIHRoZSBkZWZhdWx0IGhvbWUgcGFnZS4gSXQgb25seSB0YWtlcyBlZmZlY3Qgd2hlbiBTdXBwb3J0U3ViRGlyIGlzIHNldCB0byB0cnVlLCBhbmQgaXQgdGFrZXMgZWZmZWN0IGFmdGVyIFJvdXRpbmdSdWxlIGFuZCBiZWZvcmUgRXJyb3JGaWxlLlxuICAgICAqIEFzc3VtZSB0aGF0IHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBmb3IgdGhlIGluZGV4LiBUaGUgSFRNTCwgdG8gYWNjZXNzIHRoZSBmaWxlIHBhdGggZm9yIGJ1Y2tldC5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tXFwvYWJjLCBhbmQgQUJDIHRoaXMgT2JqZWN0IGRvZXMgbm90IGV4aXN0LCBhdCB0aGlzIG1vbWVudCwgaW4gZGlmZmVyZW50IHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBUeXBlIG9mIGJlaGF2aW9yIGlzIGFzIGZvbGxvd3M6XG4gICAgICogLSAwIChkZWZhdWx0KSA6IENoZWNrIGlmIGFiY1xcL2luZGV4Lmh0bWwgZXhpc3RzIChPYmplY3QgKyBmb3J3YXJkIHNsYXNoIChcXC8pICsgaG9tZSBwYWdlKSBhbmQgcmV0dXJuIDMwMiB3aXRoIHRoZSBVUkwgY29kZSBvZiBcXC9hYmNcXC8gYXMgTG9jYXRpb24gaGVhZGVyIChmb3J3YXJkIHNsYXNoIChcXC8pICsgT2JqZWN0ICsgZm9yd2FyZCBzbGFzaCAoXFwvKSkuIElmIGl0IGRvZXNuJ3QsIGl0IHdpbGwgcmV0dXJuIDQwNCBhbmQga2VlcCBjaGVja2luZyBFcnJvckZpbGUuXG4gICAgICogLSAxOiBEaXJlY3RseSByZXR1cm4gNDA0LCBlcnJvciBOb1N1Y2hLZXksIGNvbnRpbnVlIHRvIGNoZWNrIEVycm9yRmlsZS5cbiAgICAgKiAtIDI6IENoZWNrIGlmIGFiY1xcL2luZGV4Lmh0bWwgZXhpc3RzIGFuZCByZXR1cm4gdGhlIGNvbnRlbnRzIG9mIHRoZSBPYmplY3QgaWYgaXQgZG9lcy4gSWYgaXQgZG9lc24ndCwgaXQgd2lsbCByZXR1cm4gNDA0IGFuZCBrZWVwIGNoZWNraW5nIEVycm9yRmlsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VmZml4OiBEZWZhdWx0IGhvbWUgcGFnZS5cbiAgICAgKiBBZnRlciBzZXR0aW5nIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSwgaWYgeW91IHZpc2l0IGFuIE9iamVjdCBlbmRpbmcgd2l0aCBhIGZvcndhcmQgc2xhc2ggKFxcLyksIE9TUyB3aWxsIHJldHVybiB0byB0aGlzIGRlZmF1bHQgaG9tZSBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3VmZml4OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VwcG9ydFN1YkRpcjogV2hldGhlciB0byBqdW1wIHRvIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBvZiBhIHN1YmRpcmVjdG9yeSB3aGVuIGFjY2Vzc2luZyBpdC4gVGhlIHJhbmdlIGlzIGFzIGZvbGxvd3M6XG4gICAgICogLSB0cnVlOiBHbyB0byB0aGUgZGVmYXVsdCBob21lIHBhZ2UgaW4gYSBzdWJkaXJlY3RvcnkuXG4gICAgICogLSBmYWxzZSAoZGVmYXVsdCkgOiBJbnN0ZWFkIG9mIGdvaW5nIHRvIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBpbiBhIHN1YmRpcmVjdG9yeSwgZ28gdG8gdGhlIGRlZmF1bHQgaG9tZSBwYWdlIGluIHRoZSByb290IGRpcmVjdG9yeS5cbiAgICAgKiBBc3N1bWUgdGhhdCB0aGUgZGVmYXVsdCBob21lIHBhZ2UgZm9yIHRoZSBpbmRleC4gVGhlIEhUTUwsIHRvIGFjY2VzcyBidWNrZXQub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbVxcL3N1YmRpclxcLywgaWYgc2V0IFN1cHBvcnRTdWJEaXIgdG8gZmFsc2UsIFRoZW4gZ28gdG8gYnVja2V0Lm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb21cXC9pbmRleC5odG1sOyBJZiBzZXQgU3VwcG9ydFN1YkRpciBpcyB0cnVlLCB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBidWNrZXQub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbVxcL3N1YmRpclxcL2luZGV4Lmh0bWwuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdXBwb3J0U3ViRGlyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5kZXhEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleERvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X0luZGV4RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50eXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIjBcIixcIjFcIixcIjJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1ZmZpeCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdWZmaXgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1ZmZpeCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdWZmaXgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN1cHBvcnRTdWJEaXIgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1cHBvcnRTdWJEaXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1cHBvcnRTdWJEaXInLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdXBwb3J0U3ViRGlyLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcInRydWVcIixcImZhbHNlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VwcG9ydFN1YkRpcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdXBwb3J0U3ViRGlyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluZGV4RG9jdW1lbnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuSW5kZXhEb2N1bWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5kZXhEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5JbmRleERvY3VtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldEluZGV4RG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0luZGV4RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgICdTdWZmaXgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1ZmZpeCksXG4gICAgICAnU3VwcG9ydFN1YkRpcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VwcG9ydFN1YkRpciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcnVsZTogRGVzY3JpYmVzIGxpZmVjeWNsZSBydWxlcyBmb3IgdGhlIG9zcyBidWNrZXQgTGlmZWN5Y2xlIENvbmZpZ3VyYXRpb24gcHJvcGVydHkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBydWxlOiBBcnJheTxSb3NCdWNrZXQuUnVsZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9MaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGUnLCByb3MubGlzdFZhbGlkYXRvcihSb3NCdWNrZXRfUnVsZVByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5ydWxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkxpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuTGlmZWN5Y2xlQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5MaWZlY3ljbGVDb25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0xpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSdWxlJzogcm9zLmxpc3RNYXBwZXIocm9zQnVja2V0UnVsZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5ydWxlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGFyZ2V0UHJlZml4OiBUaGlzIGVsZW1lbnQgbGV0cyB5b3Ugc3BlY2lmeSBhIHByZWZpeCBmb3IgdGhlIG9iamVjdHMgdGhhdCB0aGUgbG9nIGZpbGVzIHdpbGwgYmUgc3RvcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFyZ2V0UHJlZml4Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRhcmdldEJ1Y2tldDogU3BlY2lmaWVzIHRoZSBidWNrZXQgd2hlcmUgeW91IHdhbnQgQWxpeXVuIE9TUyB0byBzdG9yZSBzZXJ2ZXIgYWNjZXNzIGxvZ3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0YXJnZXRCdWNrZXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9Mb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0UHJlZml4Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldFByZWZpeCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0QnVja2V0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldEJ1Y2tldCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5Mb2dnaW5nQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuTG9nZ2luZ0NvbmZpZ3VyYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0TG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0xvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVGFyZ2V0UHJlZml4Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRQcmVmaXgpLFxuICAgICAgJ1RhcmdldEJ1Y2tldCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0QnVja2V0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWlycm9ySGVhZGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXNzQWxsOiBXaGV0aGVyIHRvIHBhc3MgdGhyb3VnaCBvdGhlciBoZWFkZXJzIHRvIHRoZSBzb3VyY2UgZXhjZXB0IHRoZSBmb2xsb3dpbmcgaGVhZGVycy4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIC0gY29udGVudC1sZW5ndGgsIGF1dGhvcml6YXRpb24yLCBhdXRob3JpemF0aW9uLCByYW5nZSwgZGF0ZSBhbmQgb3RoZXIgaGVhZGVyc1xuICAgICAqIC0gSGVhZGVycyBzdGFydGluZyB3aXRoIG9zcy1cXC94LW9zcy1cXC94LWRycy1cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzc0FsbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzczogUGFzcyB0aHJvdWdoIHRoZSBzcGVjaWZpZWQgSGVhZGVyIHRvIHRoZSBzb3VyY2UuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBFYWNoIEhlYWRlciBpcyBhdCBtb3N0IDEsMDI0IGJ5dGVzIGxvbmcgYW5kIGhhcyB0aGUgY2hhcmFjdGVyIHNldHMgMC05LCBhLXosIEEtWiwgYW5kIGRhc2ggKC0pLlxuICAgICAqIEEgbWF4aW11bSBvZiAxMCBjYW4gYmUgc3BlY2lmaWVkIGZvciB0aGlzIGZpZWxkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2V0czogU2V0IGEgSGVhZGVyIHRvIHRoZSBvcmlnaW4sIGFuZCBpdCB3aWxsIGJlIHNldCB3aGVuIHRoZSByZXF1ZXN0IGlzIHNlbnQgYmFjayB0byB0aGUgb3JpZ2luLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBoZWFkZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgcmVxdWVzdC4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAqIFVwIHRvIDEwIGdyb3VwcyBjYW4gYmUgc3BlY2lmaWVkIGZvciB0aGlzIGNvbnRhaW5lci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNldHM/OiBBcnJheTxSb3NCdWNrZXQuU2V0c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZW1vdmU6IERpc2FibGVzIHBhc3MtdGhyb3VnaCBvZiB0aGUgc3BlY2lmaWVkIEhlYWRlciB0byB0aGUgc291cmNlLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogRWFjaCBIZWFkZXIgaXMgYXQgbW9zdCAxLDAyNCBieXRlcyBsb25nIGFuZCBoYXMgdGhlIGNoYXJhY3RlciBzZXRzIDAtOSwgYS16LCBBLVosIGFuZCBkYXNoICgtKS5cbiAgICAgKiBBIG1heGltdW0gb2YgMTAgY2FuIGJlIHNwZWNpZmllZCBmb3IgdGhpcyBmaWVsZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlbW92ZT86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNaXJyb3JIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1pcnJvckhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfTWlycm9ySGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc0FsbCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucGFzc0FsbCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGFzcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnBhc3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5wYXNzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYXNzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMucGFzcykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2V0cyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNldHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2V0cycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2V0cycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0J1Y2tldF9TZXRzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNldHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlbW92ZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnJlbW92ZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlbW92ZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbW92ZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZW1vdmUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1vdmUnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnJlbW92ZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNaXJyb3JIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0Lk1pcnJvckhlYWRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1pcnJvckhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuTWlycm9ySGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRNaXJyb3JIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9NaXJyb3JIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUGFzc0FsbCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhc3NBbGwpLFxuICAgICAgJ1Bhc3MnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wYXNzKSxcbiAgICAgICdTZXRzJzogcm9zLmxpc3RNYXBwZXIocm9zQnVja2V0U2V0c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zZXRzKSxcbiAgICAgICdSZW1vdmUnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yZW1vdmUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOb3RQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJlZml4OiBUaGUgT2JqZWN0IHByZWZpeCB0byB3aGljaCB0aGlzIGV4Y2x1c2lvbiBydWxlIGFwcGxpZXMuXG4gICAgICogLSBJZiBQcmVmaXggaXMgY29uZmlndXJlZCB1bmRlciBSdWxlIG5vZGUsIHRoZSBQcmVmaXggdW5kZXIgTm90IG5vZGUgbXVzdCBiZSBwcmVmaXhlZCBieSB0aGUgUHJlZml4IHVuZGVyIFJ1bGUgbm9kZS4gRm9yIGV4YW1wbGUsIGlmIHRoZSBQcmVmaXggY29uZmlndXJlZCB1bmRlciB0aGUgUnVsZSBub2RlIGlzIGRpciwgdGhlIFByZWZpeCB1bmRlciB0aGUgTm90IG5vZGUgbXVzdCBiZWdpbiB3aXRoIGRpciwgc3VjaCBhcyBkaXIxLCBkaXIyLCBhbmQgc28gb24uXG4gICAgICogLSBJZiB0aGUgVGFnIGlzIE5vdCBjb25maWd1cmVkIHVuZGVyIHRoZSBOb3Qgbm9kZSwgdGhlIFByZWZpeCBjb25maWd1cmVkIHVuZGVyIHRoZSBOT1Qgbm9kZSBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgdGhlIFByZWZpeCBjb25maWd1cmVkIHVuZGVyIHRoZSBSdWxlIG5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGFnOiBBdCBtb3N0IG9uZSBPYmplY3QgdGFnIHRvIHdoaWNoIHRoaXMgZXhjbHVzaW9uIHJ1bGUgYXBwbGllcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRhZz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOb3RQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTm90UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X05vdFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlZml4Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByZWZpeCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFnICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFnKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFnKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy50YWcpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTm90UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0Lk5vdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTm90UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0Lk5vdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXROb3RQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X05vdFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ByZWZpeCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJlZml4KSxcbiAgICAgICdUYWcnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWcpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWRpcmVjdFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JVcmw6IE1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2Ugc3RhdGlvbiBhZGRyZXNzIG9mIHRoZSBzb3VyY2UuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBUaGUgb3JpZ2luIFVSTCBtdXN0IGJlZ2luIHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvIGFuZCBlbmQgd2l0aCBhIGZvcndhcmQgc2xhc2ggKFxcLyksIHdoaWNoIE9TUyB3aWxsIGZvbGxvdyB3aXRoIHRoZSBPYmplY3QgbmFtZSB0byBmb3JtIHRoZSByZXR1cm4gVVJMLlxuICAgICAqIE5hbWUgdG8gYWNjZXNzIHRoZSBPYmplY3QgbXlvYmplY3QsIGZvciBleGFtcGxlLCBpZiB5b3Ugc3BlY2lmeSB0aGlzIHRvIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC8sIHRoZW4gYmFjayB0byB0aGUgc291cmNlIFVSTCBmb3IgaHR0cDpcXC9cXC9leGFtcGxlLmNvbVxcL215b2JqZWN0LCBpZiB5b3Ugc3BlY2lmeSB0aGlzIHRvIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9kaXIxXFwvLCBCYWNrIHRvIHRoZSBzb3VyY2UgVVJMIGFzIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9kaXIxXFwvbXlvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVwbGFjZUtleVdpdGg6IFdpdGggUmVkaXJlY3QsIHRoZSBPYmplY3QgbmFtZSBpcyByZXBsYWNlZCB3aXRoIHRoZSB2YWx1ZSBzcGVjaWZpZWQgYnkgUmVwbGFjZUtleVdpdGgsIHdoaWNoIGFsbG93cyB5b3UgdG8gc2V0IHZhcmlhYmxlcy4gVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgdmFyaWFibGUgaXMgJHtrZXl9LCB3aGljaCByZXByZXNlbnRzIHRoZSBuYW1lIG9mIHRoZSBPYmplY3QgaW4gdGhlIHJlcXVlc3QuXG4gICAgICogU3VwcG9zZSB0byBhY2Nlc3MgdGhlIE9iamVjdCBmb3IgdGhlIHRlc3QsIGlmIHNldCBSZXBsYWNlS2V5V2l0aCB0byBwcmVmaXhcXC8ke2tleX0uIFRoZSBzdWZmaXgsIGlzIHRoZSBMb2NhdGlvbiBoZWFkIHRvIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9wcmVmaXhcXC90ZXN0LnN1ZmZpeC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlcGxhY2VLZXlXaXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pcnJvckhlYWRlcnM6IFNwZWNpZmllcyB0aGUgSGVhZGVyIHRoYXQgaXMgbWlycm9yZWQgYmFjayB0byB0aGUgc291cmNlLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JIZWFkZXJzPzogUm9zQnVja2V0Lk1pcnJvckhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwUmVkaXJlY3RDb2RlOiBTdGF0dXMgY29kZSByZXR1cm5lZCB3aGVuIGp1bXBpbmcuIE9ubHkgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBFeHRlcm5hbCBvciBBbGlDRE4uVGhlIGRlZmF1bHQgdmFsdWUgaXMgMzAyLlxuICAgICAqIFZhbHVlOiAzMDEsIDMwMiwgMzA3XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwUmVkaXJlY3RDb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZVJlcGxhY2VQcmVmaXg6IElmIHlvdSBzZXQgdGhpcyBmaWVsZCB0byB0cnVlLCB0aGUgcHJlZml4IG9mIE9iamVjdCBpcyByZXBsYWNlZCB3aXRoIHRoZSB2YWx1ZSBzcGVjaWZpZWQgYnkgUmVwbGFjZUtleVByZWZpeFdpdGguIElmIHRoaXMgZmllbGQgaXMgbm90IHNwZWNpZmllZCBvciBpcyBlbXB0eSwgaXQgbWVhbnMgdGhhdCB0aGUgT2JqZWN0IHByZWZpeCBpcyB0cnVuY2F0ZWQuXG4gICAgICogTm90ZXM6IFRoaXMgZmllbGQgY2Fubm90IGJlIHNldCB0byB0cnVlIHdoZW4gdGhlIFJlcGxhY2VLZXlXaXRoIGZpZWxkIGlzIG5vdCBudWxsLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbmFibGVSZXBsYWNlUHJlZml4PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXNzUXVlcnlTdHJpbmc6IFdoZXRoZXIgdG8gY2FycnkgcmVxdWVzdCBwYXJhbWV0ZXJzIHdoZW4gcGVyZm9ybWluZyBhIGp1bXAgb3IgbWlycm9yaW5nIGJhY2sgdG8gdGhlIHNvdXJjZSBydWxlLlxuICAgICAqIERvZXMgdGhlIHVzZXIgcmVxdWVzdCBPU1Mgd2l0aCB0aGUgcmVxdWVzdCBwYXJhbWV0ZXJzPyBhPWImYz1kLCBhbmQgc2V0IFBhc3NRdWVyeVN0cmluZyB0byB0cnVlLCBpZiB0aGUgcnVsZSBpcyBhIDMwMiBqdW1wLCB0aGVuIHRoaXMgcmVxdWVzdCBwYXJhbWV0ZXIgaXMgYWRkZWQgaW4gdGhlIExvY2F0aW9uIGhlYWRlciBvZiB0aGUganVtcC4gRm9yIGV4YW1wbGUsIExvY2F0aW9uOmV4YW1wbGUuY29tP2E9YiZjPWQsIHRoZSBqdW1wIHR5cGUgaXMgbWlycm9yIGJhY2sgdG8gdGhlIHNvdXJjZSwgdGhlbiB0aGlzIHJlcXVlc3QgcGFyYW1ldGVyIHdpbGwgYWxzbyBiZSBjYXJyaWVkIGluIHRoZSBpbml0aWF0ZWQgYmFjayB0byB0aGUgc291cmNlIHJlcXVlc3QuXG4gICAgICogVmFsaWQgdmFsdWVzOiB0cnVlLCBmYWxzZSAoZGVmYXVsdClcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhc3NRdWVyeVN0cmluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWlycm9yRm9sbG93UmVkaXJlY3Q6IElmIHRoZSByZXN1bHQgb2J0YWluZWQgYnkgbWlycmlsaW5nIGJhY2sgdG8gdGhlIHNvdXJjZSBpcyAzeHgsIHdoZXRoZXIgdG8gY29udGludWUgdG8ganVtcCB0byB0aGUgc3BlY2lmaWVkIExvY2F0aW9uIHRvIG9idGFpbiBkYXRhLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogRm9yIGV4YW1wbGUsIHdoZW4gd2UgbWlycm9yIGJhY2sgdG8gdGhlIHNvdXJjZSwgdGhlIHNvdXJjZSByZXR1cm5zIGEgMzAyIHdpdGggTG9jYXRpb24gc3BlY2lmaWVkLlxuICAgICAqIC0gSWYgc2V0IHRvIHRydWUsIE9TUyB3aWxsIGNvbnRpbnVlIHRvIHJlcXVlc3QgdGhlIExvY2F0aW9uLlxuICAgICAqIEl0IGNhbiBqdW1wIHVwIHRvIDEwIHRpbWVzLCBhbmQgaWYgaXQganVtcHMgbW9yZSB0aGFuIDEwIHRpbWVzLCBpdCBmYWlscyB0byByZXR1cm4gdGhlIG1pcnJvciBiYWNrIHRvIHRoZSBzb3VyY2UuXG4gICAgICogLSBJZiBzZXQgdG8gZmFsc2UsIE9TUyB3aWxsIHJldHVybiAzMDIgYW5kIHBhc3MgdGhyb3VnaCB0aGUgTG9jYXRpb24uXG4gICAgICogRGVmYXVsdCB2YWx1ZTogdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWlycm9yRm9sbG93UmVkaXJlY3Q/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlcGxhY2VLZXlQcmVmaXhXaXRoOiBUaGlzIHZhbHVlIHdpbGwgYmUgc3Vic3RpdHV0ZWQgZm9yIHRoZSBwcmVmaXggb2YgdGhlIE9iamVjdCBuYW1lIGluIFJlZGlyZWN0LiBJZiB0aGUgcHJlZml4IGlzIGVtcHR5LCB0aGUgc3RyaW5nIGlzIGluc2VydGVkIGJlZm9yZSB0aGUgT2JqZWN0IG5hbWUuXG4gICAgICogTm90ZXM6IE9ubHkgUmVwbGFjZUtleVdpdGggb3IgUmVwbGFjZUtleVByZWZpeFdpdGggbm9kZXMgYXJlIGFsbG93ZWQuXG4gICAgICogSHlwb3RoZXNpcyB0byBhY2Nlc3MgdGhlIE9iamVjdCBmb3IgQUJDXFwvdGVzdC4gVFhULCBpZiBzZXQgS2V5UHJlZml4RXF1YWxzIGZvciBBQkMgXFwvLCBSZXBsYWNlS2V5UHJlZml4V2l0aCBmb3IgZGVmIFxcLywgdGhlbiB0aGUgTG9jYXRpb24gaGVhZCB0byBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvZGVmXFwvdGVzdC50eHQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXBsYWNlS2V5UHJlZml4V2l0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZWRpcmVjdFR5cGU6IFNwZWNpZmllcyB0aGUgdHlwZSBvZiBqdW1wLiBUaGUgcmFuZ2UgaXMgYXMgZm9sbG93czpcbiAgICAgKiAtIE1pcnJvcjogTWlycm9yIGJhY2sgdG8gdGhlIHNvdXJjZS5cbiAgICAgKiAtIEV4dGVybmFsOiBFeHRlcm5hbCBicmFuY2gsIGkuZS4gT1NTIHdpbGwgcmV0dXJuIGEgM3h4IHJlcXVlc3Qgc3BlY2lmeWluZyB0aGUgYnJhbmNoIHRvIGFub3RoZXIgYWRkcmVzcy5cbiAgICAgKiAtIEFsaUNETjogQWxpeXVuIENETiBqdW1wLCBtYWlubHkgdXNlZCBmb3IgdGhlIENETiBvZiBBbGl5dW4uIFVubGlrZSBFeHRlcm5hbCwgT1NTIGFkZHMgYW4gYWRkaXRpb25hbCBIZWFkZXIuIEFmdGVyIGlkZW50aWZ5aW5nIHRoaXMgSGVhZGVyLCBBbGl5dW4gQ0ROIHdpbGwgYWN0aXZlbHkganVtcCB0byB0aGUgc3BlY2lmaWVkIGFkZHJlc3MgYW5kIHJldHVybiB0aGUgb2J0YWluZWQgZGF0YSB0byB0aGUgdXNlciBpbnN0ZWFkIG9mIHJldHVybmluZyB0aGUgM3h4IGp1bXAgcmVxdWVzdCB0byB0aGUgdXNlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZGlyZWN0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pcnJvclBhc3NRdWVyeVN0cmluZzogU2FtZSBhcyBQYXNzUXVlcnlTdHJpbmcsIGJ1dCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgUGFzc1F1ZXJ5U3RyaW5nLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1pcnJvclBhc3NRdWVyeVN0cmluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWlycm9yQ2hlY2tNZDU6IFdoZXRoZXIgdG8gY2hlY2sgTUQ1IGJhY2sgdG8gdGhlIHNvdXJjZSBib2R5LiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogV2hlbiBNaXJyb3JDaGVja01kNSBpcyBzZXQgdG8gdHJ1ZSwgYW5kIHRoZSByZXNwb25zZSByZXR1cm5lZCBieSB0aGUgc291cmNlIGNvbnRhaW5zIHRoZSBDb250ZW50LU1kNSBIZWFkZXIsIE9TUyBjaGVja3Mgd2hldGhlciB0aGUgcHVsbGVkIGRhdGEgTUQ1IG1hdGNoZXMgdGhpcyBoZWFkZXIsIGlmIG5vdCwgaXQgaXMgbm90IHNhdmVkIG9uIE9TUy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWlycm9yQ2hlY2tNZDU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByb3RvY29sOiBQcm90b2NvbCB3aGVuIGp1bXBpbmcuIE9ubHkgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBFeHRlcm5hbCBvciBBbGlDRE4uXG4gICAgICogSWYgdGhlIGZpbGUgeW91IHdhbnQgdG8gYWNjZXNzIGlzIHRlc3QsIHNldCB0byBnbyB0byBleGFtcGxlLmNvbSwgYW5kIHNldCBQcm90b2NvbCB0byBodHRwcywgdGhlIExvY2F0aW9uIGhlYWRlciBpcyBodHRwczpcXC9cXC9leGFtcGxlLmNvbVxcL3Rlc3QuXG4gICAgICogVmFsdWU6IGh0dHAsIGh0dHBzXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcm90b2NvbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0TmFtZTogVGhlIGRvbWFpbiBuYW1lIG9mIHRoZSBqdW1wLCB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGNvbmZvcm0gdG8gdGhlIGRvbWFpbiBuYW1lIHNwZWNpZmljYXRpb24uXG4gICAgICogSWYgdGhlIGZpbGUgeW91IHdhbnQgdG8gYWNjZXNzIGlzIHRlc3QsIHRoZSBQcm90b2NvbCBpcyBzZXQgdG8gaHR0cHMsIGFuZCB0aGUgSG9zdG5hbWUgaXMgc2V0IHRvIGV4YW1wbGUuY29tLCB0aGUgTG9jYXRpb24gaGVhZGVyIGlzIGh0dHBzOlxcL1xcL2V4YW1wbGUuY29tXFwvdGVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVkaXJlY3RQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVkaXJlY3RQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfUmVkaXJlY3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pcnJvclVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5taXJyb3JVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcGxhY2VLZXlXaXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlcGxhY2VLZXlXaXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtaXJyb3JIZWFkZXJzJywgUm9zQnVja2V0X01pcnJvckhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5taXJyb3JIZWFkZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5odHRwUmVkaXJlY3RDb2RlICYmICh0eXBlb2YgcHJvcGVydGllcy5odHRwUmVkaXJlY3RDb2RlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwUmVkaXJlY3RDb2RlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCIzMDFcIixcIjMwMlwiLFwiMzA3XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFJlZGlyZWN0Q29kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5odHRwUmVkaXJlY3RDb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVSZXBsYWNlUHJlZml4Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVSZXBsYWNlUHJlZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzUXVlcnlTdHJpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnBhc3NRdWVyeVN0cmluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9yRm9sbG93UmVkaXJlY3QnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1pcnJvckZvbGxvd1JlZGlyZWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsYWNlS2V5UHJlZml4V2l0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBsYWNlS2V5UHJlZml4V2l0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkaXJlY3RUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVkaXJlY3RUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWRpcmVjdFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZGlyZWN0VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJNaXJyb3JcIixcIkV4dGVybmFsXCIsXCJBbGlDRE5cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVkaXJlY3RUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtaXJyb3JQYXNzUXVlcnlTdHJpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1pcnJvclBhc3NRdWVyeVN0cmluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9yQ2hlY2tNZDUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1pcnJvckNoZWNrTWQ1KSk7XG4gICAgaWYocHJvcGVydGllcy5wcm90b2NvbCAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJvdG9jb2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvdG9jb2wsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiaHR0cFwiLFwiaHR0cHNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaG9zdE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVkaXJlY3RQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuUmVkaXJlY3RgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlZGlyZWN0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJlZGlyZWN0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJlZGlyZWN0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9SZWRpcmVjdFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ01pcnJvclVSTCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWlycm9yVXJsKSxcbiAgICAgICdSZXBsYWNlS2V5V2l0aCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGFjZUtleVdpdGgpLFxuICAgICAgJ01pcnJvckhlYWRlcnMnOiByb3NCdWNrZXRNaXJyb3JIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWlycm9ySGVhZGVycyksXG4gICAgICAnSHR0cFJlZGlyZWN0Q29kZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSksXG4gICAgICAnRW5hYmxlUmVwbGFjZVByZWZpeCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZVJlcGxhY2VQcmVmaXgpLFxuICAgICAgJ1Bhc3NRdWVyeVN0cmluZyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhc3NRdWVyeVN0cmluZyksXG4gICAgICAnTWlycm9yRm9sbG93UmVkaXJlY3QnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5taXJyb3JGb2xsb3dSZWRpcmVjdCksXG4gICAgICAnUmVwbGFjZUtleVByZWZpeFdpdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcGxhY2VLZXlQcmVmaXhXaXRoKSxcbiAgICAgICdSZWRpcmVjdFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSksXG4gICAgICAnTWlycm9yUGFzc1F1ZXJ5U3RyaW5nJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWlycm9yUGFzc1F1ZXJ5U3RyaW5nKSxcbiAgICAgICdNaXJyb3JDaGVja01kNSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pcnJvckNoZWNrTWQ1KSxcbiAgICAgICdQcm90b2NvbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgJ0hvc3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0TmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZmVyZXJMaXN0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZmVyZXJMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGxvd0VtcHR5UmVmZXJlcjogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbGxvd0VtcHR5UmVmZXJlcj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9SZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmZXJlckxpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJlZmVyZXJMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGxvd0VtcHR5UmVmZXJlcicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYWxsb3dFbXB0eVJlZmVyZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuUmVmZXJlckNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJlZmVyZXJDb25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9SZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1JlZmVyZXJMaXN0Jzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVmZXJlckxpc3QpLFxuICAgICAgJ0FsbG93RW1wdHlSZWZlcmVyJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxsb3dFbXB0eVJlZmVyZXIpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb3V0aW5nUnVsZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29uZGl0aW9uOiBDb25kaXRpb25zIGZvciBtYXRjaGluZy5cbiAgICAgKiBUaGlzIHJ1bGUgaXMgZXhlY3V0ZWQgaWYgdGhlIHNwZWNpZmllZCBpdGVtcyBhcmUgYWxsIHNhdGlzZmllZC4gQSBtYXRjaCBpcyBvbmx5IGNvbnNpZGVyZWQgaWYgYWxsIGNvbmRpdGlvbnMgZm9yIGVhY2ggbm9kZSB1bmRlciB0aGlzIGNvbnRhaW5lciBhcmUgbWV0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29uZGl0aW9uOiBSb3NCdWNrZXQuQ29uZGl0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcnVsZU51bWJlcjogTWF0Y2ggYW5kIGV4ZWN1dGUgdGhlIHNlcXVlbmNlIG51bWJlciBvZiB0aGUgUm91dGluZ1J1bGUsIE9TUyB3aWxsIG1hdGNoIHRoZSBydWxlcyBpbiB0dXJuIGFjY29yZGluZyB0byB0aGlzIHNlcXVlbmNlIG51bWJlci4gSWYgdGhlIG1hdGNoIGlzIHN1Y2Nlc3NmdWwsIHRoaXMgcnVsZSBpcyBleGVjdXRlZCBhbmQgbm8gc3Vic2VxdWVudCBydWxlcyBhcmUgZXhlY3V0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBydWxlTnVtYmVyOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVkaXJlY3Q6IFNwZWNpZmllcyB0aGUgYWN0aW9uIHRvIGJlIHBlcmZvcm1lZCB3aGVuIHRoaXMgcnVsZSBpcyBtYXRjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVkaXJlY3Q6IFJvc0J1Y2tldC5SZWRpcmVjdFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm91dGluZ1J1bGVzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvdXRpbmdSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9Sb3V0aW5nUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIFJvc0J1Y2tldF9Db25kaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOdW1iZXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZU51bWJlcikpO1xuICAgIGlmKHByb3BlcnRpZXMucnVsZU51bWJlciAmJiAodHlwZW9mIHByb3BlcnRpZXMucnVsZU51bWJlcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU51bWJlcicsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTnVtYmVyJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZGlyZWN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZGlyZWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdCcsIFJvc0J1Y2tldF9SZWRpcmVjdFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZGlyZWN0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvdXRpbmdSdWxlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5Sb3V0aW5nUnVsZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvdXRpbmdSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5Sb3V0aW5nUnVsZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0Um91dGluZ1J1bGVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9Sb3V0aW5nUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb25kaXRpb24nOiByb3NCdWNrZXRDb25kaXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25kaXRpb24pLFxuICAgICAgJ1J1bGVOdW1iZXInOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpLFxuICAgICAgJ1JlZGlyZWN0Jzogcm9zQnVja2V0UmVkaXJlY3RQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWRpcmVjdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJ1bGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhYm9ydE11bHRpcGFydFVwbG9hZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhYm9ydE11bHRpcGFydFVwbG9hZD86IFJvc0J1Y2tldC5BYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZpbHRlcjogVGhpcyBleGNsdXNpb24gcnVsZSBoYXMgYXQgbW9zdCBvbmUgY29uZGl0aW9uYWwgYXJndW1lbnQgY29udGFpbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmlsdGVyPzogUm9zQnVja2V0LkZpbHRlclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGV4cGlyYXRpb246IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXhwaXJhdGlvbj86IFJvc0J1Y2tldC5FeHBpcmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJlZml4OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUnVsZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X1J1bGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RhdHVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiRW5hYmxlZFwiLFwiRGlzYWJsZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhYm9ydE11bHRpcGFydFVwbG9hZCcsIFJvc0J1Y2tldF9BYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFib3J0TXVsdGlwYXJ0VXBsb2FkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWx0ZXInLCBSb3NCdWNrZXRfRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZmlsdGVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleHBpcmF0aW9uJywgUm9zQnVja2V0X0V4cGlyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5leHBpcmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVmaXgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJlZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJlZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSdWxlUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJ1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJ1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuUnVsZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9SdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgICAgJ0Fib3J0TXVsdGlwYXJ0VXBsb2FkJzogcm9zQnVja2V0QWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hYm9ydE11bHRpcGFydFVwbG9hZCksXG4gICAgICAnRmlsdGVyJzogcm9zQnVja2V0RmlsdGVyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmlsdGVyKSxcbiAgICAgICdFeHBpcmF0aW9uJzogcm9zQnVja2V0RXhwaXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV4cGlyYXRpb24pLFxuICAgICAgJ1ByZWZpeCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJlZml4KSxcbiAgICAgICdJRCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3NlQWxnb3JpdGhtOiBTcGVjaWZpZXMgdGhlIGRlZmF1bHQgc2VydmVyLXNpZGUgZW5jcnlwdGlvbiBtZXRob2QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzc2VBbGdvcml0aG06IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrbXNNYXN0ZXJLZXlJZDogU3BlY2lmaWVzIHRoZSBDTUsgSUQgd2hlbiB0aGUgdmFsdWUgb2YgU1NFQWxnb3JpdGhtIGlzIEtNUyBhbmQgYSBzcGVjaWZpZWQgQ01LIGlzIHVzZWQgZm9yIGVuY3J5cHRpb24uIElmIHRoZSB2YWx1ZSBvZiBTU0VBbGdvcml0aG0gaXMgbm90IEtNUywgdGhpcyBlbGVtZW50IG11c3QgYmUgbnVsbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGttc01hc3RlcktleUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NzZUFsZ29yaXRobScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zc2VBbGdvcml0aG0pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNzZUFsZ29yaXRobSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3NlQWxnb3JpdGhtKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2VBbGdvcml0aG0nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zc2VBbGdvcml0aG0sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiS01TXCIsXCJBRVMyNTZcIixcIlNNNFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NzZUFsZ29yaXRobScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zc2VBbGdvcml0aG0pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ttc01hc3RlcktleUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmttc01hc3RlcktleUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTU0VBbGdvcml0aG0nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNzZUFsZ29yaXRobSksXG4gICAgICAnS01TTWFzdGVyS2V5SUQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmttc01hc3RlcktleUlkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2V0c1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgSGVhZGVyIHRvIGEgbWF4aW11bSBvZiAxMDI0IGJ5dGVzIHdpdGhvdXQgXFxyXFxuLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogU2V0cyB0aGUgSGVhZGVyIGtleSB0byBhIG1heGltdW0gb2YgMTAyNCBieXRlcyBpbiB0aGUgc2FtZSBjaGFyYWN0ZXIgc2V0IGFzIFBhc3MuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2V0c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X1NldHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgaWYocHJvcGVydGllcy52YWx1ZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnZhbHVlKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudmFsdWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy52YWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmtleSAmJiAodHlwZW9mIHByb3BlcnRpZXMua2V5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMua2V5LFxuICAgICAgICAgIHJlZzogL15bLWEtekEtWjAtOV17MSwxMDI0fSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNldHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuU2V0c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2V0c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5TZXRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFNldHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X1NldHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiBTcGVjaWZpZXMgdGhlIHZlcnNpb25pbmcgc3RhdGUgb2YgYSBidWNrZXQuIFZhbGlkIHZhbHVlczogRW5hYmxlZCBhbmQgU3VzcGVuZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhdHVzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBWZXJzaW9uaW5nQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWZXJzaW9uaW5nQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9WZXJzaW9uaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXR1cykpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkXCIsXCJTdXNwZW5kZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdHVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlZlcnNpb25pbmdDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlZlcnNpb25pbmdDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWZXJzaW9uaW5nQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5WZXJzaW9uaW5nQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRWZXJzaW9uaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTdGF0dXMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXR1cyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFdlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5kZXhEb2N1bWVudDogVGhlIHByb3BlcnRpZXMgb2YgZGVmYXVsdCBob21lIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmRleERvY3VtZW50PzogUm9zQnVja2V0LkluZGV4RG9jdW1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByb3V0aW5nUnVsZXM6IFRoZSBsaXN0IG9mIHJvdXRpbmcgcnVsZXMsIHVwIHRvIDIwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcm91dGluZ1J1bGVzPzogQXJyYXk8Um9zQnVja2V0LlJvdXRpbmdSdWxlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlcnJvckRvY3VtZW50OiBUaGUgcHJvcGVydGllcyBvZiBkZWZhdWx0IGVycm9yIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlcnJvckRvY3VtZW50PzogUm9zQnVja2V0LkVycm9yRG9jdW1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFdlYnNpdGVDb25maWd1cmF0aW9uVjJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMlByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9XZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmRleERvY3VtZW50JywgUm9zQnVja2V0X0luZGV4RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pbmRleERvY3VtZW50KSk7XG4gICAgaWYocHJvcGVydGllcy5yb3V0aW5nUnVsZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yb3V0aW5nUnVsZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yb3V0aW5nUnVsZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0aW5nUnVsZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucm91dGluZ1J1bGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGluZ1J1bGVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQnVja2V0X1JvdXRpbmdSdWxlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5yb3V0aW5nUnVsZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Vycm9yRG9jdW1lbnQnLCBSb3NCdWNrZXRfRXJyb3JEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVycm9yRG9jdW1lbnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMlByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5XZWJzaXRlQ29uZmlndXJhdGlvblYyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXZWJzaXRlQ29uZmlndXJhdGlvblYyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LldlYnNpdGVDb25maWd1cmF0aW9uVjJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0V2Vic2l0ZUNvbmZpZ3VyYXRpb25WMlByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfV2Vic2l0ZUNvbmZpZ3VyYXRpb25WMlByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0luZGV4RG9jdW1lbnQnOiByb3NCdWNrZXRJbmRleERvY3VtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5kZXhEb2N1bWVudCksXG4gICAgICAnUm91dGluZ1J1bGVzJzogcm9zLmxpc3RNYXBwZXIocm9zQnVja2V0Um91dGluZ1J1bGVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJvdXRpbmdSdWxlcyksXG4gICAgICAnRXJyb3JEb2N1bWVudCc6IHJvc0J1Y2tldEVycm9yRG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lcnJvckRvY3VtZW50KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0J1Y2tldFJlcGxpY2F0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRyZXBsaWNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldE5hbWU6IEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb246IFJlcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVwbGljYXRpb25Db25maWd1cmF0aW9uOiBSb3NCdWNrZXRSZXBsaWNhdGlvbi5SZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCdWNrZXRSZXBsaWNhdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NCdWNrZXRSZXBsaWNhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGljYXRpb25Db25maWd1cmF0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGljYXRpb25Db25maWd1cmF0aW9uJywgUm9zQnVja2V0UmVwbGljYXRpb25fUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVwbGljYXRpb25Db25maWd1cmF0aW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UmVwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpLFxuICAgICAgJ1JlcGxpY2F0aW9uQ29uZmlndXJhdGlvbic6IHJvc0J1Y2tldFJlcGxpY2F0aW9uUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGljYXRpb25Db25maWd1cmF0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQnVja2V0UmVwbGljYXRpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1idWNrZXRyZXBsaWNhdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zQnVja2V0UmVwbGljYXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb25cIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldE5hbWU6IEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBidWNrZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwbGljYXRpb25Db25maWd1cmF0aW9uOiBSZXBsaWNhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb246IFJvc0J1Y2tldFJlcGxpY2F0aW9uLlJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCdWNrZXRSZXBsaWNhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYnVja2V0TmFtZSA9IHByb3BzLmJ1Y2tldE5hbWU7XG4gICAgICAgIHRoaXMucmVwbGljYXRpb25Db25maWd1cmF0aW9uID0gcHJvcHMucmVwbGljYXRpb25Db25maWd1cmF0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6IHRoaXMuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIHJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbjogdGhpcy5yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0J1Y2tldFJlcGxpY2F0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0UmVwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIERlc3RpbmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGJ1Y2tldDogRGVzdGluYXRpb24gYnVja2V0IG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBidWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0cmFuc2ZlclR5cGU6IFRyYW5zZmVyIHR5cGUgZm9yIHJlcGxpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHJhbnNmZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9jYXRpb246IERlc3RpbmF0aW9uIHJlZ2lvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvY2F0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEZXN0aW5hdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEZXN0aW5hdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldFJlcGxpY2F0aW9uX0Rlc3RpbmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFuc2ZlclR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHJhbnNmZXJUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50cmFuc2ZlclR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRyYW5zZmVyVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhbnNmZXJUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHJhbnNmZXJUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImludGVybmFsXCIsXCJhY2NlbGVyYXRlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhbnNmZXJUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyYW5zZmVyVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYXRpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9jYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2F0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvY2F0aW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkRlc3RpbmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uRGVzdGluYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlc3RpbmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uRGVzdGluYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UmVwbGljYXRpb25EZXN0aW5hdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRSZXBsaWNhdGlvbl9EZXN0aW5hdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0KSxcbiAgICAgICdUcmFuc2ZlclR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYW5zZmVyVHlwZSksXG4gICAgICAnTG9jYXRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvY2F0aW9uKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldFJlcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXBsaWNhS21zS2V5SWQ6IEFSTiBvZiB0aGUgS01TIGtleSB1c2VkIHRvIGVuY3J5cHQgcmVwbGljYSBvYmplY3RzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVwbGljYUttc0tleUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRSZXBsaWNhdGlvbl9FbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGljYUttc0tleUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlcGxpY2FLbXNLZXlJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLkVuY3J5cHRpb25Db25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLkVuY3J5cHRpb25Db25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJlcGxpY2F0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0UmVwbGljYXRpb25fRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXBsaWNhS21zS2V5SUQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcGxpY2FLbXNLZXlJZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXRSZXBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUlRDUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXR1czogV2hldGhlciB0byBlbmFibGUgcmVhbC10aW1lIHJlcGxpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUlRDUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJUQ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1JUQ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJlbmFibGVkXCIsXCJkaXNhYmxlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUlRDUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uUlRDYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSVENQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5SVENgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UmVwbGljYXRpb25SVENQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0UmVwbGljYXRpb25fUlRDUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0UmVwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBydWxlOiBSZXBsaWNhdGlvbiBSdWxlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBydWxlOiBSb3NCdWNrZXRSZXBsaWNhdGlvbi5SdWxlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UmVwbGljYXRpb25fUmVwbGljYXRpb25Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGUnLCBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SdWxlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5SZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLlJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSZXBsaWNhdGlvblJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSdWxlJzogcm9zQnVja2V0UmVwbGljYXRpb25SdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucnVsZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXRSZXBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUnVsZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBydGM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcnRjPzogUm9zQnVja2V0UmVwbGljYXRpb24uUlRDUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzdGluYXRpb246IERlc3RpbmF0aW9uIGJ1Y2tldCBhbmQgbG9jYXRpb24gZm9yIHJlcGxpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzdGluYXRpb246IFJvc0J1Y2tldFJlcGxpY2F0aW9uLkRlc3RpbmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWN0aW9uOiBBY3Rpb24gdG8gYmUgdGFrZW4gb24gbWF0Y2hpbmcgb2JqZWN0cy4gVmFsaWQgdmFsdWVzIGFyZSBBTEwsIFBVVCwgREVMRVRFLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWN0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN5bmNSb2xlOiBSb2xlIHVzZWQgZm9yIHJlcGxpY2F0aW9uIHN5bmNocm9uaXphdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN5bmNSb2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuY3J5cHRpb25Db25maWd1cmF0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuY3J5cHRpb25Db25maWd1cmF0aW9uPzogUm9zQnVja2V0UmVwbGljYXRpb24uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYTogQ3JpdGVyaWEgZm9yIHNlbGVjdGluZyBzb3VyY2Ugb2JqZWN0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhPzogUm9zQnVja2V0UmVwbGljYXRpb24uU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmVmaXhTZXQ6IExpc3Qgb2YgcHJlZml4ZXMgdG8gd2hpY2ggdGhpcyBydWxlIGFwcGxpZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmVmaXhTZXQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhpc3RvcmljYWxPYmplY3RSZXBsaWNhdGlvbjogV2hldGhlciB0byByZXBsaWNhdGUgZXhpc3Rpbmcgb2JqZWN0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhpc3RvcmljYWxPYmplY3RSZXBsaWNhdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZGVudGl0eTogSUQgb2YgdGhlIHJ1bGUgYXBwbGllZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkZW50aXR5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUnVsZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UmVwbGljYXRpb25fUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnRjJywgUm9zQnVja2V0UmVwbGljYXRpb25fUlRDUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucnRjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXN0aW5hdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZXN0aW5hdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzdGluYXRpb24nLCBSb3NCdWNrZXRSZXBsaWNhdGlvbl9EZXN0aW5hdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5hY3Rpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFjdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWN0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWN0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFMTFwiLFwiUFVUXCIsXCJERUxFVEVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY3Rpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWN0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzeW5jUm9sZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zeW5jUm9sZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRSZXBsaWNhdGlvbl9FbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVuY3J5cHRpb25Db25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYScsIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuc291cmNlU2VsZWN0aW9uQ3JpdGVyaWEpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZWZpeFNldCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMucHJlZml4U2V0KSk7XG4gICAgaWYocHJvcGVydGllcy5oaXN0b3JpY2FsT2JqZWN0UmVwbGljYXRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmhpc3RvcmljYWxPYmplY3RSZXBsaWNhdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImVuYWJsZWRcIixcImRpc2FibGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhpc3RvcmljYWxPYmplY3RSZXBsaWNhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWRlbnRpdHknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWRlbnRpdHkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUnVsZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLlJ1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJ1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5SdWxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJlcGxpY2F0aW9uUnVsZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRSZXBsaWNhdGlvbl9SdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUlRDJzogcm9zQnVja2V0UmVwbGljYXRpb25SVENQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydGMpLFxuICAgICAgJ0Rlc3RpbmF0aW9uJzogcm9zQnVja2V0UmVwbGljYXRpb25EZXN0aW5hdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uKSxcbiAgICAgICdBY3Rpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjdGlvbiksXG4gICAgICAnU3luY1JvbGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN5bmNSb2xlKSxcbiAgICAgICdFbmNyeXB0aW9uQ29uZmlndXJhdGlvbic6IHJvc0J1Y2tldFJlcGxpY2F0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgICAnU291cmNlU2VsZWN0aW9uQ3JpdGVyaWEnOiByb3NCdWNrZXRSZXBsaWNhdGlvblNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlU2VsZWN0aW9uQ3JpdGVyaWEpLFxuICAgICAgJ1ByZWZpeFNldCc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnByZWZpeFNldCksXG4gICAgICAnSGlzdG9yaWNhbE9iamVjdFJlcGxpY2F0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oaXN0b3JpY2FsT2JqZWN0UmVwbGljYXRpb24pLFxuICAgICAgJ0lkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZGVudGl0eSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXRSZXBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3NlS21zRW5jcnlwdGVkT2JqZWN0czogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzc2VLbXNFbmNyeXB0ZWRPYmplY3RzPzogUm9zQnVja2V0UmVwbGljYXRpb24uU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRSZXBsaWNhdGlvbl9Tb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3NlS21zRW5jcnlwdGVkT2JqZWN0cycsIFJvc0J1Y2tldFJlcGxpY2F0aW9uX1NzZUttc0VuY3J5cHRlZE9iamVjdHNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5zc2VLbXNFbmNyeXB0ZWRPYmplY3RzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0UmVwbGljYXRpb24uU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0UmVwbGljYXRpb25Tb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRSZXBsaWNhdGlvbl9Tb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NzZUttc0VuY3J5cHRlZE9iamVjdHMnOiByb3NCdWNrZXRSZXBsaWNhdGlvblNzZUttc0VuY3J5cHRlZE9iamVjdHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zc2VLbXNFbmNyeXB0ZWRPYmplY3RzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldFJlcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXR1czogU3RhdHVzIG9mIEtNUyBlbmNyeXB0ZWQgb2JqZWN0IHJlcGxpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UmVwbGljYXRpb25fU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkXCIsXCJEaXNhYmxlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldFJlcGxpY2F0aW9uLlNzZUttc0VuY3J5cHRlZE9iamVjdHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNzZUttc0VuY3J5cHRlZE9iamVjdHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXRSZXBsaWNhdGlvbi5Tc2VLbXNFbmNyeXB0ZWRPYmplY3RzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJlcGxpY2F0aW9uU3NlS21zRW5jcnlwdGVkT2JqZWN0c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRSZXBsaWNhdGlvbl9Tc2VLbXNFbmNyeXB0ZWRPYmplY3RzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zRGlyZWN0b3J5YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy1kaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEaXJlY3RvcnlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeU5hbWU6IERpcmVjdG9yeSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSByZWxhdGl2ZSBvYmplY3RzIGluIHRoZSBkaXJlY3RvcnkuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRGlyZWN0b3J5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RpcmVjdG9yeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RpcmVjdG9yeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uRm9yY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlyZWN0b3J5TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGlyZWN0b3J5TmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGlyZWN0b3J5TmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5TmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kaXJlY3RvcnlOYW1lLFxuICAgICAgICAgIHJlZzogL1teXFxcXC9cXFxcXSg/IVxcL1xcLykoLiopezEsMjU0fSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpcmVjdG9yeU5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRGlyZWN0b3J5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6RGlyZWN0b3J5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEaXJlY3RvcnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpEaXJlY3RvcnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGlyZWN0b3J5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEaXJlY3RvcnlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQnVja2V0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0TmFtZSksXG4gICAgICAnRGlyZWN0b3J5TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5TmFtZSksXG4gICAgICAnRGVsZXRpb25Gb3JjZSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6RGlyZWN0b3J5YC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRGlyZWN0b3J5YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3MtZGlyZWN0b3J5XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEaXJlY3RvcnkgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6RGlyZWN0b3J5XCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJ1Y2tldE5hbWU6IFRoZSBuYW1lIG9mIEJ1Y2tldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQnVja2V0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEaXJlY3RvcnlOYW1lOiBUaGUgbmFtZSBvZiBEaXJlY3RvcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpcmVjdG9yeU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldE5hbWU6IGJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBidWNrZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5TmFtZTogRGlyZWN0b3J5IG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSByZWxhdGl2ZSBvYmplY3RzIGluIHRoZSBkaXJlY3RvcnkuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0aW9uRm9yY2U6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGlyZWN0b3J5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEaXJlY3RvcnkuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckJ1Y2tldE5hbWUgPSB0aGlzLmdldEF0dCgnQnVja2V0TmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJEaXJlY3RvcnlOYW1lID0gdGhpcy5nZXRBdHQoJ0RpcmVjdG9yeU5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYnVja2V0TmFtZSA9IHByb3BzLmJ1Y2tldE5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5TmFtZSA9IHByb3BzLmRpcmVjdG9yeU5hbWU7XG4gICAgICAgIHRoaXMuZGVsZXRpb25Gb3JjZSA9IHByb3BzLmRlbGV0aW9uRm9yY2U7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0TmFtZTogdGhpcy5idWNrZXROYW1lLFxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZTogdGhpcy5kaXJlY3RvcnlOYW1lLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEaXJlY3RvcnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEb21haW5gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLWRvbWFpblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RvbWFpblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXROYW1lOiBidWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBidWNrZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogRG9tYWluIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRG9tYWluUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RvbWFpblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RvbWFpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZG9tYWluTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kb21haW5OYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kb21haW5OYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEb21haW5Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpEb21haW5gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RvbWFpblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkRvbWFpbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEb21haW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RvbWFpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdCdWNrZXROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXROYW1lKSxcbiAgICAgICdEb21haW5OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW5OYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpPU1M6OkRvbWFpbmAsIHdoaWNoIGlzIHVzZWQgdG8gYmluZCBhIGN1c3RvbSBkb21haW4gbmFtZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRG9tYWluYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3MtZG9tYWluXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEb21haW4gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6RG9tYWluXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJ1Y2tldE5hbWU6IFRoZSBuYW1lIG9mIEJ1Y2tldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQnVja2V0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5OYW1lOiBUaGUgY3VzdG9tIGRvbWFpbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBEb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEb21haW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckJ1Y2tldE5hbWUgPSB0aGlzLmdldEF0dCgnQnVja2V0TmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJEb21haW5OYW1lID0gdGhpcy5nZXRBdHQoJ0RvbWFpbk5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYnVja2V0TmFtZSA9IHByb3BzLmJ1Y2tldE5hbWU7XG4gICAgICAgIHRoaXMuZG9tYWluTmFtZSA9IHByb3BzLmRvbWFpbk5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0TmFtZTogdGhpcy5idWNrZXROYW1lLFxuICAgICAgICAgICAgZG9tYWluTmFtZTogdGhpcy5kb21haW5OYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEb21haW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NPYmplY3RBY2xgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3NzLW9iamVjdGFjbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc09iamVjdEFjbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9iamVjdEFjbDogT2JqZWN0IGFjbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBvYmplY3RBY2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvYmplY3RLZXk6IE9iamVjdCBrZXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb2JqZWN0S2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zT2JqZWN0QWNsUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc09iamVjdEFjbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc09iamVjdEFjbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb2JqZWN0QWNsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9iamVjdEFjbCkpO1xuICAgIGlmKHByb3BlcnRpZXMub2JqZWN0QWNsICYmICh0eXBlb2YgcHJvcGVydGllcy5vYmplY3RBY2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29iamVjdEFjbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm9iamVjdEFjbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJwcml2YXRlXCIsXCJwdWJsaWMtcmVhZFwiLFwicHVibGljLXJlYWQtd3JpdGVcIixcImRlZmF1bHRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvYmplY3RBY2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub2JqZWN0QWNsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvYmplY3RLZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMub2JqZWN0S2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvYmplY3RLZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub2JqZWN0S2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc09iamVjdEFjbFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6Ok9iamVjdEFjbGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zT2JqZWN0QWNsUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6T2JqZWN0QWNsYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc09iamVjdEFjbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zT2JqZWN0QWNsUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0KSxcbiAgICAgICdPYmplY3RBY2wnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9iamVjdEFjbCksXG4gICAgICAnT2JqZWN0S2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vYmplY3RLZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6T2JqZWN0QWNsYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgT2JqZWN0QWNsYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3Mtb2JqZWN0YWNsXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NPYmplY3RBY2wgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6T2JqZWN0QWNsXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXQ6IEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBidWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvYmplY3RBY2w6IE9iamVjdCBhY2wuXG4gICAgICovXG4gICAgcHVibGljIG9iamVjdEFjbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9iamVjdEtleTogT2JqZWN0IGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb2JqZWN0S2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zT2JqZWN0QWNsUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NPYmplY3RBY2wuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJ1Y2tldCA9IHByb3BzLmJ1Y2tldDtcbiAgICAgICAgdGhpcy5vYmplY3RBY2wgPSBwcm9wcy5vYmplY3RBY2w7XG4gICAgICAgIHRoaXMub2JqZWN0S2V5ID0gcHJvcHMub2JqZWN0S2V5O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldDogdGhpcy5idWNrZXQsXG4gICAgICAgICAgICBvYmplY3RBY2w6IHRoaXMub2JqZWN0QWNsLFxuICAgICAgICAgICAgb2JqZWN0S2V5OiB0aGlzLm9iamVjdEtleSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zT2JqZWN0QWNsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zV2Vic2l0ZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vc3Mtd2Vic2l0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1dlYnNpdGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogQnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYnNpdGVDb25maWd1cmF0aW9uOiBXZWJzaXRlIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2Vic2l0ZUNvbmZpZ3VyYXRpb24/OiBSb3NXZWJzaXRlLldlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zV2Vic2l0ZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXZWJzaXRlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYnNpdGVDb25maWd1cmF0aW9uJywgUm9zV2Vic2l0ZV9XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLndlYnNpdGVDb25maWd1cmF0aW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1dlYnNpdGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXZWJzaXRlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXZWJzaXRlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NXZWJzaXRlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0J1Y2tldE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpLFxuICAgICAgJ1dlYnNpdGVDb25maWd1cmF0aW9uJzogcm9zV2Vic2l0ZVdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2Vic2l0ZUNvbmZpZ3VyYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9TUzo6V2Vic2l0ZWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFdlYnNpdGVgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9zcy13ZWJzaXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NXZWJzaXRlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpPU1M6OldlYnNpdGVcIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1Y2tldE5hbWU6IEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBidWNrZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2Vic2l0ZUNvbmZpZ3VyYXRpb246IFdlYnNpdGUgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2Vic2l0ZUNvbmZpZ3VyYXRpb246IFJvc1dlYnNpdGUuV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NXZWJzaXRlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NXZWJzaXRlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5idWNrZXROYW1lID0gcHJvcHMuYnVja2V0TmFtZTtcbiAgICAgICAgdGhpcy53ZWJzaXRlQ29uZmlndXJhdGlvbiA9IHByb3BzLndlYnNpdGVDb25maWd1cmF0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6IHRoaXMuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIHdlYnNpdGVDb25maWd1cmF0aW9uOiB0aGlzLndlYnNpdGVDb25maWd1cmF0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXZWJzaXRlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29uZGl0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluY2x1ZGVIZWFkZXJzOiBUaGlzIHJ1bGUgd2lsbCBvbmx5IG1hdGNoIGlmIHRoZSByZXF1ZXN0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgSGVhZGVyIGFuZCB0aGUgdmFsdWUgaXMgdGhlIHNwZWNpZmllZCB2YWx1ZS4gVXAgdG8gMTAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmNsdWRlSGVhZGVycz86IEFycmF5PFJvc1dlYnNpdGUuSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5UHJlZml4RXF1YWxzOiBUaGUgcHJlZml4IG9mIHRoZSBPYmplY3QgbmFtZSB0byBiZSBtYXRjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5UHJlZml4RXF1YWxzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFsczogV2hlbiBhY2Nlc3NpbmcgdGhlIHNwZWNpZmllZCBPYmplY3QsIHRoaXMgc3RhdHVzIG11c3QgYmUgcmV0dXJuZWQgdG8gbWF0Y2ggdGhpcyBydWxlLiBUaGlzIGZpZWxkIG11c3QgYmUgNDA0IHdoZW4gdGhlIGp1bXAgcnVsZSBpcyBtaXJyb3ItYmFjayB0byB0aGUgc291cmNlIHR5cGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwRXJyb3JDb2RlUmV0dXJuZWRFcXVhbHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5U3VmZml4RXF1YWxzOiBUaGUgc3VmZml4IG9mIHRoZSBPYmplY3QgbmFtZSB0byBiZSBtYXRjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5U3VmZml4RXF1YWxzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29uZGl0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbmRpdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dlYnNpdGVfQ29uZGl0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5pbmNsdWRlSGVhZGVycyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuaW5jbHVkZUhlYWRlcnMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmNsdWRlSGVhZGVycycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbmNsdWRlSGVhZGVycy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luY2x1ZGVIZWFkZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zV2Vic2l0ZV9JbmNsdWRlSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5pbmNsdWRlSGVhZGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5UHJlZml4RXF1YWxzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleVByZWZpeEVxdWFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEVycm9yQ29kZVJldHVybmVkRXF1YWxzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmh0dHBFcnJvckNvZGVSZXR1cm5lZEVxdWFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5U3VmZml4RXF1YWxzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleVN1ZmZpeEVxdWFscykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDb25kaXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkNvbmRpdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uZGl0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5Db25kaXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2Vic2l0ZUNvbmRpdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX0NvbmRpdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0luY2x1ZGVIZWFkZXJzJzogcm9zLmxpc3RNYXBwZXIocm9zV2Vic2l0ZUluY2x1ZGVIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmluY2x1ZGVIZWFkZXJzKSxcbiAgICAgICdLZXlQcmVmaXhFcXVhbHMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleVByZWZpeEVxdWFscyksXG4gICAgICAnSHR0cEVycm9yQ29kZVJldHVybmVkRXF1YWxzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwRXJyb3JDb2RlUmV0dXJuZWRFcXVhbHMpLFxuICAgICAgJ0tleVN1ZmZpeEVxdWFscyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5U3VmZml4RXF1YWxzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1dlYnNpdGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVycm9yRG9jdW1lbnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cFN0YXR1czogVGhlIEhUVFAgc3RhdHVzIGNvZGUgb2YgdGhlIGVycm9yIHBhZ2UuIFZhbGlkIHZhbHVlczogMjAwLCA0MDQgKGRlZmF1bHQpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cFN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IFRoZSBkZWZhdWx0IGVycm9yIHBhZ2UuXG4gICAgICogV2hlbiBhbiBlcnJvciBwYWdlIGlzIHNwZWNpZmllZCwgaWYgdGhlIGFjY2Vzc2VkIE9iamVjdCBkb2VzIG5vdCBleGlzdCwgdGhpcyBlcnJvciBwYWdlIGlzIHJldHVybmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFcnJvckRvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVycm9yRG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NXZWJzaXRlX0Vycm9yRG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmh0dHBTdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmh0dHBTdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBTdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5odHRwU3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIjIwMFwiLFwiNDA0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFN0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5odHRwU3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVycm9yRG9jdW1lbnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkVycm9yRG9jdW1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVycm9yRG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkVycm9yRG9jdW1lbnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2Vic2l0ZUVycm9yRG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zV2Vic2l0ZV9FcnJvckRvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnSHR0cFN0YXR1cyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cFN0YXR1cyksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiBUaGUgbmFtZSBvZiB0aGUgaGVhZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXF1YWxzVG86IFRoZSB2YWx1ZSBvZiB0aGUgaGVhZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXF1YWxzVG8/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbmNsdWRlSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmNsdWRlSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dlYnNpdGVfSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VxdWFsc1RvJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVxdWFsc1RvKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluY2x1ZGVIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5JbmNsdWRlSGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5jbHVkZUhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLkluY2x1ZGVIZWFkZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dlYnNpdGVJbmNsdWRlSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX0luY2x1ZGVIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgICAgJ0VxdWFscyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXF1YWxzVG8pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5kZXhEb2N1bWVudFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBCZWhhdmlvciB3aGVuIGFuIE9iamVjdCB0aGF0IGVuZHMgd2l0aCBhIG5vbi1mb3J3YXJkIHNsYXNoIChcXC8pIGFuZCBkb2VzIG5vdCBleGlzdCBpcyBhY2Nlc3NlZCBhZnRlciBzZXR0aW5nIHRoZSBkZWZhdWx0IGhvbWUgcGFnZS4gSXQgb25seSB0YWtlcyBlZmZlY3Qgd2hlbiBTdXBwb3J0U3ViRGlyIGlzIHNldCB0byB0cnVlLCBhbmQgaXQgdGFrZXMgZWZmZWN0IGFmdGVyIFJvdXRpbmdSdWxlIGFuZCBiZWZvcmUgRXJyb3JGaWxlLlxuICAgICAqIEFzc3VtZSB0aGF0IHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBmb3IgdGhlIGluZGV4LiBUaGUgSFRNTCwgdG8gYWNjZXNzIHRoZSBmaWxlIHBhdGggZm9yIGJ1Y2tldC5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tXFwvYWJjLCBhbmQgQUJDIHRoaXMgT2JqZWN0IGRvZXMgbm90IGV4aXN0LCBhdCB0aGlzIG1vbWVudCwgaW4gZGlmZmVyZW50IHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBUeXBlIG9mIGJlaGF2aW9yIGlzIGFzIGZvbGxvd3M6XG4gICAgICogLSAwIChkZWZhdWx0KSA6IENoZWNrIGlmIGFiY1xcL2luZGV4Lmh0bWwgZXhpc3RzIChPYmplY3QgKyBmb3J3YXJkIHNsYXNoIChcXC8pICsgaG9tZSBwYWdlKSBhbmQgcmV0dXJuIDMwMiB3aXRoIHRoZSBVUkwgY29kZSBvZiBcXC9hYmNcXC8gYXMgTG9jYXRpb24gaGVhZGVyIChmb3J3YXJkIHNsYXNoIChcXC8pICsgT2JqZWN0ICsgZm9yd2FyZCBzbGFzaCAoXFwvKSkuIElmIGl0IGRvZXNuJ3QsIGl0IHdpbGwgcmV0dXJuIDQwNCBhbmQga2VlcCBjaGVja2luZyBFcnJvckZpbGUuXG4gICAgICogLSAxOiBEaXJlY3RseSByZXR1cm4gNDA0LCBlcnJvciBOb1N1Y2hLZXksIGNvbnRpbnVlIHRvIGNoZWNrIEVycm9yRmlsZS5cbiAgICAgKiAtIDI6IENoZWNrIGlmIGFiY1xcL2luZGV4Lmh0bWwgZXhpc3RzIGFuZCByZXR1cm4gdGhlIGNvbnRlbnRzIG9mIHRoZSBPYmplY3QgaWYgaXQgZG9lcy4gSWYgaXQgZG9lc24ndCwgaXQgd2lsbCByZXR1cm4gNDA0IGFuZCBrZWVwIGNoZWNraW5nIEVycm9yRmlsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VmZml4OiBEZWZhdWx0IGhvbWUgcGFnZS5cbiAgICAgKiBBZnRlciBzZXR0aW5nIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSwgaWYgeW91IHZpc2l0IGFuIE9iamVjdCBlbmRpbmcgd2l0aCBhIGZvcndhcmQgc2xhc2ggKFxcLyksIE9TUyB3aWxsIHJldHVybiB0byB0aGlzIGRlZmF1bHQgaG9tZSBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3VmZml4OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VwcG9ydFN1YkRpcjogV2hldGhlciB0byBqdW1wIHRvIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBvZiBhIHN1YmRpcmVjdG9yeSB3aGVuIGFjY2Vzc2luZyBpdC4gVGhlIHJhbmdlIGlzIGFzIGZvbGxvd3M6XG4gICAgICogLSB0cnVlOiBHbyB0byB0aGUgZGVmYXVsdCBob21lIHBhZ2UgaW4gYSBzdWJkaXJlY3RvcnkuXG4gICAgICogLSBmYWxzZSAoZGVmYXVsdCkgOiBJbnN0ZWFkIG9mIGdvaW5nIHRvIHRoZSBkZWZhdWx0IGhvbWUgcGFnZSBpbiBhIHN1YmRpcmVjdG9yeSwgZ28gdG8gdGhlIGRlZmF1bHQgaG9tZSBwYWdlIGluIHRoZSByb290IGRpcmVjdG9yeS5cbiAgICAgKiBBc3N1bWUgdGhhdCB0aGUgZGVmYXVsdCBob21lIHBhZ2UgZm9yIHRoZSBpbmRleC4gVGhlIEhUTUwsIHRvIGFjY2VzcyBidWNrZXQub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbVxcL3N1YmRpclxcLywgaWYgc2V0IFN1cHBvcnRTdWJEaXIgdG8gZmFsc2UsIFRoZW4gZ28gdG8gYnVja2V0Lm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb21cXC9pbmRleC5odG1sOyBJZiBzZXQgU3VwcG9ydFN1YkRpciBpcyB0cnVlLCB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBidWNrZXQub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbVxcL3N1YmRpclxcL2luZGV4Lmh0bWwuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdXBwb3J0U3ViRGlyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5kZXhEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleERvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9JbmRleERvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy50eXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50eXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCIwXCIsXCIxXCIsXCIyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWZmaXgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3VmZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWZmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3VmZml4KSk7XG4gICAgaWYocHJvcGVydGllcy5zdXBwb3J0U3ViRGlyICYmICh0eXBlb2YgcHJvcGVydGllcy5zdXBwb3J0U3ViRGlyKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdXBwb3J0U3ViRGlyJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3VwcG9ydFN1YkRpcixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJ0cnVlXCIsXCJmYWxzZVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1cHBvcnRTdWJEaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3VwcG9ydFN1YkRpcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmRleERvY3VtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5JbmRleERvY3VtZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleERvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5JbmRleERvY3VtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dlYnNpdGVJbmRleERvY3VtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1dlYnNpdGVfSW5kZXhEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1R5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgJ1N1ZmZpeCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VmZml4KSxcbiAgICAgICdTdXBwb3J0U3ViRGlyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdXBwb3J0U3ViRGlyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1dlYnNpdGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1pcnJvckhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzc0FsbDogV2hldGhlciB0byBwYXNzIHRocm91Z2ggb3RoZXIgaGVhZGVycyB0byB0aGUgc291cmNlIGV4Y2VwdCB0aGUgZm9sbG93aW5nIGhlYWRlcnMuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiAtIGNvbnRlbnQtbGVuZ3RoLCBhdXRob3JpemF0aW9uMiwgYXV0aG9yaXphdGlvbiwgcmFuZ2UsIGRhdGUgYW5kIG90aGVyIGhlYWRlcnNcbiAgICAgKiAtIEhlYWRlcnMgc3RhcnRpbmcgd2l0aCBvc3MtXFwveC1vc3MtXFwveC1kcnMtXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhc3NBbGw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhc3M6IFBhc3MgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIEhlYWRlciB0byB0aGUgc291cmNlLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogRWFjaCBIZWFkZXIgaXMgYXQgbW9zdCAxLDAyNCBieXRlcyBsb25nIGFuZCBoYXMgdGhlIGNoYXJhY3RlciBzZXRzIDAtOSwgYS16LCBBLVosIGFuZCBkYXNoICgtKS5cbiAgICAgKiBBIG1heGltdW0gb2YgMTAgY2FuIGJlIHNwZWNpZmllZCBmb3IgdGhpcyBmaWVsZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhc3M/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNldHM6IFNldCBhIEhlYWRlciB0byB0aGUgb3JpZ2luLCBhbmQgaXQgd2lsbCBiZSBzZXQgd2hlbiB0aGUgcmVxdWVzdCBpcyBzZW50IGJhY2sgdG8gdGhlIG9yaWdpbiwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaGVhZGVycyBhcmUgaW5jbHVkZWQgaW4gdGhlIHJlcXVlc3QuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBVcCB0byAxMCBncm91cHMgY2FuIGJlIHNwZWNpZmllZCBmb3IgdGhpcyBjb250YWluZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXRzPzogQXJyYXk8Um9zV2Vic2l0ZS5TZXRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlbW92ZTogRGlzYWJsZXMgcGFzcy10aHJvdWdoIG9mIHRoZSBzcGVjaWZpZWQgSGVhZGVyIHRvIHRoZSBzb3VyY2UuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBFYWNoIEhlYWRlciBpcyBhdCBtb3N0IDEsMDI0IGJ5dGVzIGxvbmcgYW5kIGhhcyB0aGUgY2hhcmFjdGVyIHNldHMgMC05LCBhLXosIEEtWiwgYW5kIGRhc2ggKC0pLlxuICAgICAqIEEgbWF4aW11bSBvZiAxMCBjYW4gYmUgc3BlY2lmaWVkIGZvciB0aGlzIGZpZWxkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVtb3ZlPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1pcnJvckhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWlycm9ySGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dlYnNpdGVfTWlycm9ySGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc0FsbCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucGFzc0FsbCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGFzcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnBhc3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5wYXNzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYXNzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMucGFzcykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2V0cyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNldHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2V0cycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2V0cycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1dlYnNpdGVfU2V0c1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zZXRzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZW1vdmUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZW1vdmUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZW1vdmUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1vdmUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVtb3ZlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVtb3ZlJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5yZW1vdmUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTWlycm9ySGVhZGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuTWlycm9ySGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWlycm9ySGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuTWlycm9ySGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXZWJzaXRlTWlycm9ySGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX01pcnJvckhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQYXNzQWxsJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFzc0FsbCksXG4gICAgICAnUGFzcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBhc3MpLFxuICAgICAgJ1NldHMnOiByb3MubGlzdE1hcHBlcihyb3NXZWJzaXRlU2V0c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zZXRzKSxcbiAgICAgICdSZW1vdmUnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yZW1vdmUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zV2Vic2l0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVkaXJlY3RQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWlycm9yVXJsOiBNaXJyb3IgYmFjayB0byB0aGUgc291cmNlIHN0YXRpb24gYWRkcmVzcyBvZiB0aGUgc291cmNlLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICogVGhlIG9yaWdpbiBVUkwgbXVzdCBiZWdpbiB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLyBhbmQgZW5kIHdpdGggYSBmb3J3YXJkIHNsYXNoIChcXC8pLCB3aGljaCBPU1Mgd2lsbCBmb2xsb3cgd2l0aCB0aGUgT2JqZWN0IG5hbWUgdG8gZm9ybSB0aGUgcmV0dXJuIFVSTC5cbiAgICAgKiBOYW1lIHRvIGFjY2VzcyB0aGUgT2JqZWN0IG15b2JqZWN0LCBmb3IgZXhhbXBsZSwgaWYgeW91IHNwZWNpZnkgdGhpcyB0byBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvLCB0aGVuIGJhY2sgdG8gdGhlIHNvdXJjZSBVUkwgZm9yIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9teW9iamVjdCwgaWYgeW91IHNwZWNpZnkgdGhpcyB0byBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvZGlyMVxcLywgQmFjayB0byB0aGUgc291cmNlIFVSTCBhcyBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvZGlyMVxcL215b2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWlycm9yVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlcGxhY2VLZXlXaXRoOiBXaXRoIFJlZGlyZWN0LCB0aGUgT2JqZWN0IG5hbWUgaXMgcmVwbGFjZWQgd2l0aCB0aGUgdmFsdWUgc3BlY2lmaWVkIGJ5IFJlcGxhY2VLZXlXaXRoLCB3aGljaCBhbGxvd3MgeW91IHRvIHNldCB2YXJpYWJsZXMuIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIHZhcmlhYmxlIGlzICR7a2V5fSwgd2hpY2ggcmVwcmVzZW50cyB0aGUgbmFtZSBvZiB0aGUgT2JqZWN0IGluIHRoZSByZXF1ZXN0LlxuICAgICAqIFN1cHBvc2UgdG8gYWNjZXNzIHRoZSBPYmplY3QgZm9yIHRoZSB0ZXN0LCBpZiBzZXQgUmVwbGFjZUtleVdpdGggdG8gcHJlZml4XFwvJHtrZXl9LiBUaGUgc3VmZml4LCBpcyB0aGUgTG9jYXRpb24gaGVhZCB0byBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvcHJlZml4XFwvdGVzdC5zdWZmaXguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXBsYWNlS2V5V2l0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JIZWFkZXJzOiBTcGVjaWZpZXMgdGhlIEhlYWRlciB0aGF0IGlzIG1pcnJvcmVkIGJhY2sgdG8gdGhlIHNvdXJjZS4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWlycm9ySGVhZGVycz86IFJvc1dlYnNpdGUuTWlycm9ySGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBSZWRpcmVjdENvZGU6IFN0YXR1cyBjb2RlIHJldHVybmVkIHdoZW4ganVtcGluZy4gT25seSBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIEV4dGVybmFsIG9yIEFsaUNETi5UaGUgZGVmYXVsdCB2YWx1ZSBpcyAzMDIuXG4gICAgICogVmFsdWU6IDMwMSwgMzAyLCAzMDdcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBSZWRpcmVjdENvZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5hYmxlUmVwbGFjZVByZWZpeDogSWYgeW91IHNldCB0aGlzIGZpZWxkIHRvIHRydWUsIHRoZSBwcmVmaXggb2YgT2JqZWN0IGlzIHJlcGxhY2VkIHdpdGggdGhlIHZhbHVlIHNwZWNpZmllZCBieSBSZXBsYWNlS2V5UHJlZml4V2l0aC4gSWYgdGhpcyBmaWVsZCBpcyBub3Qgc3BlY2lmaWVkIG9yIGlzIGVtcHR5LCBpdCBtZWFucyB0aGF0IHRoZSBPYmplY3QgcHJlZml4IGlzIHRydW5jYXRlZC5cbiAgICAgKiBOb3RlczogVGhpcyBmaWVsZCBjYW5ub3QgYmUgc2V0IHRvIHRydWUgd2hlbiB0aGUgUmVwbGFjZUtleVdpdGggZmllbGQgaXMgbm90IG51bGwuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZVJlcGxhY2VQcmVmaXg/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhc3NRdWVyeVN0cmluZzogV2hldGhlciB0byBjYXJyeSByZXF1ZXN0IHBhcmFtZXRlcnMgd2hlbiBwZXJmb3JtaW5nIGEganVtcCBvciBtaXJyb3JpbmcgYmFjayB0byB0aGUgc291cmNlIHJ1bGUuXG4gICAgICogRG9lcyB0aGUgdXNlciByZXF1ZXN0IE9TUyB3aXRoIHRoZSByZXF1ZXN0IHBhcmFtZXRlcnM/IGE9YiZjPWQsIGFuZCBzZXQgUGFzc1F1ZXJ5U3RyaW5nIHRvIHRydWUsIGlmIHRoZSBydWxlIGlzIGEgMzAyIGp1bXAsIHRoZW4gdGhpcyByZXF1ZXN0IHBhcmFtZXRlciBpcyBhZGRlZCBpbiB0aGUgTG9jYXRpb24gaGVhZGVyIG9mIHRoZSBqdW1wLiBGb3IgZXhhbXBsZSwgTG9jYXRpb246ZXhhbXBsZS5jb20/YT1iJmM9ZCwgdGhlIGp1bXAgdHlwZSBpcyBtaXJyb3IgYmFjayB0byB0aGUgc291cmNlLCB0aGVuIHRoaXMgcmVxdWVzdCBwYXJhbWV0ZXIgd2lsbCBhbHNvIGJlIGNhcnJpZWQgaW4gdGhlIGluaXRpYXRlZCBiYWNrIHRvIHRoZSBzb3VyY2UgcmVxdWVzdC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IHRydWUsIGZhbHNlIChkZWZhdWx0KVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzc1F1ZXJ5U3RyaW5nPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JGb2xsb3dSZWRpcmVjdDogSWYgdGhlIHJlc3VsdCBvYnRhaW5lZCBieSBtaXJyaWxpbmcgYmFjayB0byB0aGUgc291cmNlIGlzIDN4eCwgd2hldGhlciB0byBjb250aW51ZSB0byBqdW1wIHRvIHRoZSBzcGVjaWZpZWQgTG9jYXRpb24gdG8gb2J0YWluIGRhdGEuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBGb3IgZXhhbXBsZSwgd2hlbiB3ZSBtaXJyb3IgYmFjayB0byB0aGUgc291cmNlLCB0aGUgc291cmNlIHJldHVybnMgYSAzMDIgd2l0aCBMb2NhdGlvbiBzcGVjaWZpZWQuXG4gICAgICogLSBJZiBzZXQgdG8gdHJ1ZSwgT1NTIHdpbGwgY29udGludWUgdG8gcmVxdWVzdCB0aGUgTG9jYXRpb24uXG4gICAgICogSXQgY2FuIGp1bXAgdXAgdG8gMTAgdGltZXMsIGFuZCBpZiBpdCBqdW1wcyBtb3JlIHRoYW4gMTAgdGltZXMsIGl0IGZhaWxzIHRvIHJldHVybiB0aGUgbWlycm9yIGJhY2sgdG8gdGhlIHNvdXJjZS5cbiAgICAgKiAtIElmIHNldCB0byBmYWxzZSwgT1NTIHdpbGwgcmV0dXJuIDMwMiBhbmQgcGFzcyB0aHJvdWdoIHRoZSBMb2NhdGlvbi5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JGb2xsb3dSZWRpcmVjdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVwbGFjZUtleVByZWZpeFdpdGg6IFRoaXMgdmFsdWUgd2lsbCBiZSBzdWJzdGl0dXRlZCBmb3IgdGhlIHByZWZpeCBvZiB0aGUgT2JqZWN0IG5hbWUgaW4gUmVkaXJlY3QuIElmIHRoZSBwcmVmaXggaXMgZW1wdHksIHRoZSBzdHJpbmcgaXMgaW5zZXJ0ZWQgYmVmb3JlIHRoZSBPYmplY3QgbmFtZS5cbiAgICAgKiBOb3RlczogT25seSBSZXBsYWNlS2V5V2l0aCBvciBSZXBsYWNlS2V5UHJlZml4V2l0aCBub2RlcyBhcmUgYWxsb3dlZC5cbiAgICAgKiBIeXBvdGhlc2lzIHRvIGFjY2VzcyB0aGUgT2JqZWN0IGZvciBBQkNcXC90ZXN0LiBUWFQsIGlmIHNldCBLZXlQcmVmaXhFcXVhbHMgZm9yIEFCQyBcXC8sIFJlcGxhY2VLZXlQcmVmaXhXaXRoIGZvciBkZWYgXFwvLCB0aGVuIHRoZSBMb2NhdGlvbiBoZWFkIHRvIGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9kZWZcXC90ZXN0LnR4dC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlcGxhY2VLZXlQcmVmaXhXaXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZGlyZWN0VHlwZTogU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGp1bXAuIFRoZSByYW5nZSBpcyBhcyBmb2xsb3dzOlxuICAgICAqIC0gTWlycm9yOiBNaXJyb3IgYmFjayB0byB0aGUgc291cmNlLlxuICAgICAqIC0gRXh0ZXJuYWw6IEV4dGVybmFsIGJyYW5jaCwgaS5lLiBPU1Mgd2lsbCByZXR1cm4gYSAzeHggcmVxdWVzdCBzcGVjaWZ5aW5nIHRoZSBicmFuY2ggdG8gYW5vdGhlciBhZGRyZXNzLlxuICAgICAqIC0gQWxpQ0ROOiBBbGl5dW4gQ0ROIGp1bXAsIG1haW5seSB1c2VkIGZvciB0aGUgQ0ROIG9mIEFsaXl1bi4gVW5saWtlIEV4dGVybmFsLCBPU1MgYWRkcyBhbiBhZGRpdGlvbmFsIEhlYWRlci4gQWZ0ZXIgaWRlbnRpZnlpbmcgdGhpcyBIZWFkZXIsIEFsaXl1biBDRE4gd2lsbCBhY3RpdmVseSBqdW1wIHRvIHRoZSBzcGVjaWZpZWQgYWRkcmVzcyBhbmQgcmV0dXJuIHRoZSBvYnRhaW5lZCBkYXRhIHRvIHRoZSB1c2VyIGluc3RlYWQgb2YgcmV0dXJuaW5nIHRoZSAzeHgganVtcCByZXF1ZXN0IHRvIHRoZSB1c2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVkaXJlY3RUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWlycm9yUGFzc1F1ZXJ5U3RyaW5nOiBTYW1lIGFzIFBhc3NRdWVyeVN0cmluZywgYnV0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciBQYXNzUXVlcnlTdHJpbmcuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWlycm9yUGFzc1F1ZXJ5U3RyaW5nPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaXJyb3JDaGVja01kNTogV2hldGhlciB0byBjaGVjayBNRDUgYmFjayB0byB0aGUgc291cmNlIGJvZHkuIFRoaXMgb25seSB3b3JrcyBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIE1pcnJvci5cbiAgICAgKiBXaGVuIE1pcnJvckNoZWNrTWQ1IGlzIHNldCB0byB0cnVlLCBhbmQgdGhlIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzb3VyY2UgY29udGFpbnMgdGhlIENvbnRlbnQtTWQ1IEhlYWRlciwgT1NTIGNoZWNrcyB3aGV0aGVyIHRoZSBwdWxsZWQgZGF0YSBNRDUgbWF0Y2hlcyB0aGlzIGhlYWRlciwgaWYgbm90LCBpdCBpcyBub3Qgc2F2ZWQgb24gT1NTLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaXJyb3JDaGVja01kNT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2w6IFByb3RvY29sIHdoZW4ganVtcGluZy4gT25seSBpZiBSZWRpcmVjdFR5cGUgaXMgc2V0IHRvIEV4dGVybmFsIG9yIEFsaUNETi5cbiAgICAgKiBJZiB0aGUgZmlsZSB5b3Ugd2FudCB0byBhY2Nlc3MgaXMgdGVzdCwgc2V0IHRvIGdvIHRvIGV4YW1wbGUuY29tLCBhbmQgc2V0IFByb3RvY29sIHRvIGh0dHBzLCB0aGUgTG9jYXRpb24gaGVhZGVyIGlzIGh0dHBzOlxcL1xcL2V4YW1wbGUuY29tXFwvdGVzdC5cbiAgICAgKiBWYWx1ZTogaHR0cCwgaHR0cHNcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByb3RvY29sPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhvc3ROYW1lOiBUaGUgZG9tYWluIG5hbWUgb2YgdGhlIGp1bXAsIHRoZSBkb21haW4gbmFtZSBzaG91bGQgY29uZm9ybSB0byB0aGUgZG9tYWluIG5hbWUgc3BlY2lmaWNhdGlvbi5cbiAgICAgKiBJZiB0aGUgZmlsZSB5b3Ugd2FudCB0byBhY2Nlc3MgaXMgdGVzdCwgdGhlIFByb3RvY29sIGlzIHNldCB0byBodHRwcywgYW5kIHRoZSBIb3N0bmFtZSBpcyBzZXQgdG8gZXhhbXBsZS5jb20sIHRoZSBMb2NhdGlvbiBoZWFkZXIgaXMgaHR0cHM6XFwvXFwvZXhhbXBsZS5jb21cXC90ZXN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaG9zdE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWRpcmVjdFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWRpcmVjdFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dlYnNpdGVfUmVkaXJlY3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pcnJvclVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5taXJyb3JVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcGxhY2VLZXlXaXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlcGxhY2VLZXlXaXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtaXJyb3JIZWFkZXJzJywgUm9zV2Vic2l0ZV9NaXJyb3JIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWlycm9ySGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFJlZGlyZWN0Q29kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmh0dHBSZWRpcmVjdENvZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiMzAxXCIsXCIzMDJcIixcIjMwN1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBSZWRpcmVjdENvZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlUmVwbGFjZVByZWZpeCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlUmVwbGFjZVByZWZpeCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc1F1ZXJ5U3RyaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5wYXNzUXVlcnlTdHJpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pcnJvckZvbGxvd1JlZGlyZWN0Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5taXJyb3JGb2xsb3dSZWRpcmVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGFjZUtleVByZWZpeFdpdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwbGFjZUtleVByZWZpeFdpdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZGlyZWN0VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWRpcmVjdFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVkaXJlY3RUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWRpcmVjdFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTWlycm9yXCIsXCJFeHRlcm5hbFwiLFwiQWxpQ0ROXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkaXJlY3RUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWlycm9yUGFzc1F1ZXJ5U3RyaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5taXJyb3JQYXNzUXVlcnlTdHJpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pcnJvckNoZWNrTWQ1Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5taXJyb3JDaGVja01kNSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImh0dHBcIixcImh0dHBzXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hvc3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3ROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlZGlyZWN0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5SZWRpcmVjdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVkaXJlY3RQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpXZWJzaXRlLlJlZGlyZWN0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dlYnNpdGVSZWRpcmVjdFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX1JlZGlyZWN0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTWlycm9yVVJMJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5taXJyb3JVcmwpLFxuICAgICAgJ1JlcGxhY2VLZXlXaXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBsYWNlS2V5V2l0aCksXG4gICAgICAnTWlycm9ySGVhZGVycyc6IHJvc1dlYnNpdGVNaXJyb3JIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWlycm9ySGVhZGVycyksXG4gICAgICAnSHR0cFJlZGlyZWN0Q29kZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cFJlZGlyZWN0Q29kZSksXG4gICAgICAnRW5hYmxlUmVwbGFjZVByZWZpeCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZVJlcGxhY2VQcmVmaXgpLFxuICAgICAgJ1Bhc3NRdWVyeVN0cmluZyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhc3NRdWVyeVN0cmluZyksXG4gICAgICAnTWlycm9yRm9sbG93UmVkaXJlY3QnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5taXJyb3JGb2xsb3dSZWRpcmVjdCksXG4gICAgICAnUmVwbGFjZUtleVByZWZpeFdpdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcGxhY2VLZXlQcmVmaXhXaXRoKSxcbiAgICAgICdSZWRpcmVjdFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZGlyZWN0VHlwZSksXG4gICAgICAnTWlycm9yUGFzc1F1ZXJ5U3RyaW5nJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWlycm9yUGFzc1F1ZXJ5U3RyaW5nKSxcbiAgICAgICdNaXJyb3JDaGVja01kNSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pcnJvckNoZWNrTWQ1KSxcbiAgICAgICdQcm90b2NvbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgJ0hvc3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0TmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NXZWJzaXRlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb3V0aW5nUnVsZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29uZGl0aW9uOiBDb25kaXRpb25zIGZvciBtYXRjaGluZy5cbiAgICAgKiBUaGlzIHJ1bGUgaXMgZXhlY3V0ZWQgaWYgdGhlIHNwZWNpZmllZCBpdGVtcyBhcmUgYWxsIHNhdGlzZmllZC4gQSBtYXRjaCBpcyBvbmx5IGNvbnNpZGVyZWQgaWYgYWxsIGNvbmRpdGlvbnMgZm9yIGVhY2ggbm9kZSB1bmRlciB0aGlzIGNvbnRhaW5lciBhcmUgbWV0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29uZGl0aW9uOiBSb3NXZWJzaXRlLkNvbmRpdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGVOdW1iZXI6IE1hdGNoIGFuZCBleGVjdXRlIHRoZSBzZXF1ZW5jZSBudW1iZXIgb2YgdGhlIFJvdXRpbmdSdWxlLCBPU1Mgd2lsbCBtYXRjaCB0aGUgcnVsZXMgaW4gdHVybiBhY2NvcmRpbmcgdG8gdGhpcyBzZXF1ZW5jZSBudW1iZXIuIElmIHRoZSBtYXRjaCBpcyBzdWNjZXNzZnVsLCB0aGlzIHJ1bGUgaXMgZXhlY3V0ZWQgYW5kIG5vIHN1YnNlcXVlbnQgcnVsZXMgYXJlIGV4ZWN1dGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcnVsZU51bWJlcjogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZGlyZWN0OiBTcGVjaWZpZXMgdGhlIGFjdGlvbiB0byBiZSBwZXJmb3JtZWQgd2hlbiB0aGlzIHJ1bGUgaXMgbWF0Y2hlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZGlyZWN0OiBSb3NXZWJzaXRlLlJlZGlyZWN0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3V0aW5nUnVsZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm91dGluZ1J1bGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2Vic2l0ZV9Sb3V0aW5nUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIFJvc1dlYnNpdGVfQ29uZGl0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29uZGl0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTnVtYmVyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJ1bGVOdW1iZXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOdW1iZXInLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ydWxlTnVtYmVyLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU51bWJlcicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5ydWxlTnVtYmVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWRpcmVjdCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWRpcmVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkaXJlY3QnLCBSb3NXZWJzaXRlX1JlZGlyZWN0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVkaXJlY3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm91dGluZ1J1bGVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5Sb3V0aW5nUnVsZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvdXRpbmdSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuUm91dGluZ1J1bGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dlYnNpdGVSb3V0aW5nUnVsZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zV2Vic2l0ZV9Sb3V0aW5nUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb25kaXRpb24nOiByb3NXZWJzaXRlQ29uZGl0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29uZGl0aW9uKSxcbiAgICAgICdSdWxlTnVtYmVyJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTnVtYmVyKSxcbiAgICAgICdSZWRpcmVjdCc6IHJvc1dlYnNpdGVSZWRpcmVjdFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZGlyZWN0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1dlYnNpdGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNldHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IFNldCB0aGUgdmFsdWUgb2YgdGhlIEhlYWRlciB0byBhIG1heGltdW0gb2YgMTAyNCBieXRlcyB3aXRob3V0IFxcclxcbi4gVGhpcyBvbmx5IHdvcmtzIGlmIFJlZGlyZWN0VHlwZSBpcyBzZXQgdG8gTWlycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IFNldHMgdGhlIEhlYWRlciBrZXkgdG8gYSBtYXhpbXVtIG9mIDEwMjQgYnl0ZXMgaW4gdGhlIHNhbWUgY2hhcmFjdGVyIHNldCBhcyBQYXNzLiBUaGlzIG9ubHkgd29ya3MgaWYgUmVkaXJlY3RUeXBlIGlzIHNldCB0byBNaXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNldHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2V0c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dlYnNpdGVfU2V0c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnZhbHVlICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudmFsdWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy52YWx1ZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDI0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGlmKHByb3BlcnRpZXMua2V5ICYmICh0eXBlb2YgcHJvcGVydGllcy5rZXkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5rZXksXG4gICAgICAgICAgcmVnOiAvXlstYS16QS1aMC05XXsxLDEwMjR9JC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2V0c1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuU2V0c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2V0c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuU2V0c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXZWJzaXRlU2V0c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NXZWJzaXRlX1NldHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1dlYnNpdGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluZGV4RG9jdW1lbnQ6IFRoZSBwcm9wZXJ0aWVzIG9mIGRlZmF1bHQgaG9tZSBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5kZXhEb2N1bWVudD86IFJvc1dlYnNpdGUuSW5kZXhEb2N1bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJvdXRpbmdSdWxlczogVGhlIGxpc3Qgb2Ygcm91dGluZyBydWxlcywgdXAgdG8gMjAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByb3V0aW5nUnVsZXM/OiBBcnJheTxSb3NXZWJzaXRlLlJvdXRpbmdSdWxlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlcnJvckRvY3VtZW50OiBUaGUgcHJvcGVydGllcyBvZiBkZWZhdWx0IGVycm9yIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlcnJvckRvY3VtZW50PzogUm9zV2Vic2l0ZS5FcnJvckRvY3VtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dlYnNpdGVfV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4RG9jdW1lbnQnLCBSb3NXZWJzaXRlX0luZGV4RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pbmRleERvY3VtZW50KSk7XG4gICAgaWYocHJvcGVydGllcy5yb3V0aW5nUnVsZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yb3V0aW5nUnVsZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yb3V0aW5nUnVsZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0aW5nUnVsZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucm91dGluZ1J1bGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGluZ1J1bGVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zV2Vic2l0ZV9Sb3V0aW5nUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMucm91dGluZ1J1bGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlcnJvckRvY3VtZW50JywgUm9zV2Vic2l0ZV9FcnJvckRvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXJyb3JEb2N1bWVudCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OldlYnNpdGUuV2Vic2l0ZUNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6V2Vic2l0ZS5XZWJzaXRlQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXZWJzaXRlV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zV2Vic2l0ZV9XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0luZGV4RG9jdW1lbnQnOiByb3NXZWJzaXRlSW5kZXhEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4RG9jdW1lbnQpLFxuICAgICAgJ1JvdXRpbmdSdWxlcyc6IHJvcy5saXN0TWFwcGVyKHJvc1dlYnNpdGVSb3V0aW5nUnVsZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucm91dGluZ1J1bGVzKSxcbiAgICAgICdFcnJvckRvY3VtZW50Jzogcm9zV2Vic2l0ZUVycm9yRG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lcnJvckRvY3VtZW50KSxcbiAgICB9O1xufVxuIl19