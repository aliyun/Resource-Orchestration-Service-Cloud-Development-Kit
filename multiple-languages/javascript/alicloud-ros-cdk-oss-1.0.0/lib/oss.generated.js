"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosBucket = void 0;
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
    errors.collect(ros.propertyValidator('corsConfiguration', RosBucket_CORSConfigurationPropertyValidator)(properties.corsConfiguration));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    if (properties.storageClass && (typeof properties.storageClass) !== 'object') {
        errors.collect(ros.propertyValidator('storageClass', ros.validateAllowedValues)({
            data: properties.storageClass,
            allowedValues: ["Standard", "IA", "Archive"],
        }));
    }
    errors.collect(ros.propertyValidator('storageClass', ros.validateString)(properties.storageClass));
    errors.collect(ros.propertyValidator('loggingConfiguration', RosBucket_LoggingConfigurationPropertyValidator)(properties.loggingConfiguration));
    errors.collect(ros.propertyValidator('websiteConfiguration', RosBucket_WebsiteConfigurationPropertyValidator)(properties.websiteConfiguration));
    errors.collect(ros.propertyValidator('refererConfiguration', RosBucket_RefererConfigurationPropertyValidator)(properties.refererConfiguration));
    errors.collect(ros.propertyValidator('lifecycleConfiguration', RosBucket_LifecycleConfigurationPropertyValidator)(properties.lifecycleConfiguration));
    errors.collect(ros.propertyValidator('serverSideEncryptionConfiguration', RosBucket_ServerSideEncryptionConfigurationPropertyValidator)(properties.serverSideEncryptionConfiguration));
    if (properties.accessControl && (typeof properties.accessControl) !== 'object') {
        errors.collect(ros.propertyValidator('accessControl', ros.validateAllowedValues)({
            data: properties.accessControl,
            allowedValues: ["private", "public-read", "public-read-write"],
        }));
    }
    errors.collect(ros.propertyValidator('accessControl', ros.validateString)(properties.accessControl));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
        BucketName: ros.stringToRosTemplate(properties.bucketName),
        AccessControl: ros.stringToRosTemplate(properties.accessControl),
        CORSConfiguration: rosBucketCORSConfigurationPropertyToRosTemplate(properties.corsConfiguration),
        DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
        LifecycleConfiguration: rosBucketLifecycleConfigurationPropertyToRosTemplate(properties.lifecycleConfiguration),
        LoggingConfiguration: rosBucketLoggingConfigurationPropertyToRosTemplate(properties.loggingConfiguration),
        Policy: ros.hashMapper(ros.objectToRosTemplate)(properties.policy),
        RefererConfiguration: rosBucketRefererConfigurationPropertyToRosTemplate(properties.refererConfiguration),
        ServerSideEncryptionConfiguration: rosBucketServerSideEncryptionConfigurationPropertyToRosTemplate(properties.serverSideEncryptionConfiguration),
        StorageClass: ros.stringToRosTemplate(properties.storageClass),
        Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
        WebsiteConfiguration: rosBucketWebsiteConfigurationPropertyToRosTemplate(properties.websiteConfiguration),
    };
}
/**
 * A ROS template type:  `ALIYUN::OSS::Bucket`
 */
class RosBucket extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBucket.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainName = ros.Token.asString(this.getAtt('DomainName'));
        this.attrInternalDomainName = ros.Token.asString(this.getAtt('InternalDomainName'));
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.accessControl = props.accessControl;
        this.corsConfiguration = props.corsConfiguration;
        this.deletionForce = props.deletionForce;
        this.lifecycleConfiguration = props.lifecycleConfiguration;
        this.loggingConfiguration = props.loggingConfiguration;
        this.policy = props.policy;
        this.refererConfiguration = props.refererConfiguration;
        this.serverSideEncryptionConfiguration = props.serverSideEncryptionConfiguration;
        this.storageClass = props.storageClass;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::OSS::Bucket", props.tags, { tagPropertyName: 'tags' });
        this.websiteConfiguration = props.websiteConfiguration;
    }
    get rosProperties() {
        return {
            bucketName: this.bucketName,
            accessControl: this.accessControl,
            corsConfiguration: this.corsConfiguration,
            deletionForce: this.deletionForce,
            lifecycleConfiguration: this.lifecycleConfiguration,
            loggingConfiguration: this.loggingConfiguration,
            policy: this.policy,
            refererConfiguration: this.refererConfiguration,
            serverSideEncryptionConfiguration: this.serverSideEncryptionConfiguration,
            storageClass: this.storageClass,
            tags: this.tags.renderTags(),
            websiteConfiguration: this.websiteConfiguration,
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
        CreatedBeforeDate: ros.stringToRosTemplate(properties.createdBeforeDate),
        Days: ros.numberToRosTemplate(properties.days),
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
        CORSRule: ros.listMapper(rosBucketCORSRulePropertyToRosTemplate)(properties.corsRule),
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
    errors.collect(ros.propertyValidator('maxAgeSeconds', ros.validateNumber)(properties.maxAgeSeconds));
    errors.collect(ros.propertyValidator('allowedMethod', ros.listValidator(ros.validateString))(properties.allowedMethod));
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
        MaxAgeSeconds: ros.numberToRosTemplate(properties.maxAgeSeconds),
        AllowedMethod: ros.listMapper(ros.stringToRosTemplate)(properties.allowedMethod),
        ExposeHeader: ros.listMapper(ros.stringToRosTemplate)(properties.exposeHeader),
        AllowedOrigin: ros.listMapper(ros.stringToRosTemplate)(properties.allowedOrigin),
        AllowedHeader: ros.listMapper(ros.stringToRosTemplate)(properties.allowedHeader),
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
    errors.collect(ros.propertyValidator('days', ros.validateNumber)(properties.days));
    errors.collect(ros.propertyValidator('date', ros.validateString)(properties.date));
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
        CreatedBeforeDate: ros.stringToRosTemplate(properties.createdBeforeDate),
        Days: ros.numberToRosTemplate(properties.days),
        Date: ros.stringToRosTemplate(properties.date),
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
        Rule: ros.listMapper(rosBucketRulePropertyToRosTemplate)(properties.rule),
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
        TargetPrefix: ros.stringToRosTemplate(properties.targetPrefix),
        TargetBucket: ros.stringToRosTemplate(properties.targetBucket),
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
        RefererList: ros.listMapper(ros.objectToRosTemplate)(properties.refererList),
        AllowEmptyReferer: ros.booleanToRosTemplate(properties.allowEmptyReferer),
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
        Status: ros.stringToRosTemplate(properties.status),
        AbortMultipartUpload: rosBucketAbortMultipartUploadPropertyToRosTemplate(properties.abortMultipartUpload),
        Expiration: rosBucketExpirationPropertyToRosTemplate(properties.expiration),
        Prefix: ros.stringToRosTemplate(properties.prefix),
        ID: ros.stringToRosTemplate(properties.id),
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
            allowedValues: ["KMS", "AES256"],
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
        SSEAlgorithm: ros.stringToRosTemplate(properties.sseAlgorithm),
        KMSMasterKeyID: ros.stringToRosTemplate(properties.kmsMasterKeyId),
    };
}
/**
 * Determine whether the given properties match those of a `WebsiteConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `WebsiteConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosBucket_WebsiteConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosBucketWebsiteConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBucket_WebsiteConfigurationPropertyValidator(properties).assertSuccess();
    return {
        IndexDocument: ros.stringToRosTemplate(properties.indexDocument),
        ErrorDocument: ros.stringToRosTemplate(properties.errorDocument),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9zcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQW9FOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx1QkFBdUIsQ0FBQyxVQUFlO0lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLDRDQUE0QyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN2SSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMs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O0FBaUJEOzs7Ozs7R0FNRztBQUNILFNBQVMsK0NBQStDLENBQUMsVUFBZTtJQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7QUFDN0YsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLGtEQUFrRCxDQUFDLFVBQWU7SUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELCtDQUErQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVFLE9BQU87UUFDTCxhQUFhLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ2pFLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok9TUzo6QnVja2V0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0J1Y2tldFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXROYW1lOiBidWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBidWNrZXROYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29udHJvbDogVGhlIGFjY2VzcyBjb250cm9sIGxpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb3JzQ29uZmlndXJhdGlvbjogUnVsZXMgdGhhdCBkZWZpbmUgY3Jvc3Mtb3JpZ2luIHJlc291cmNlIHNoYXJpbmcgb2Ygb2JqZWN0cyBpbiB0aGlzIGJ1Y2tldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3JzQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5DT1JTQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSByZWxhdGl2ZSBvYmplY3RzIGluIHRoZSBidWNrZXQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGlmZWN5Y2xlQ29uZmlndXJhdGlvbjogUnVsZXMgdGhhdCBkZWZpbmUgaG93IG9zcyBidWNrZXQgbWFuYWdlcyBvYmplY3RzIGR1cmluZyB0aGVpciBsaWZldGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaWZlY3ljbGVDb25maWd1cmF0aW9uPzogUm9zQnVja2V0LkxpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dnaW5nQ29uZmlndXJhdGlvbjogU2V0dGluZ3MgdGhhdCBkZWZpbmVzIHdoZXJlIGxvZ3MgYXJlIHN0b3JlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dnaW5nQ29uZmlndXJhdGlvbj86IFJvc0J1Y2tldC5Mb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeTogQnVja2V0IHBvbGljeVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeT86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZlcmVyQ29uZmlndXJhdGlvbjogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmZXJlckNvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IFNwZWNpZmllcyB0aGUgYnVja2V0IHVzZWQgdG8gc3RvcmUgdGhlIHNlcnZlci1zaWRlIGVuY3J5cHRpb24gcnVsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RvcmFnZUNsYXNzOiBTcGVjaWZpZXMgdGhlIHN0b3JhZ2UgY2xhc3Mgb2YgdGhlIGJ1Y2tldC4gRGVmYXVsdCBpcyBcIlN0YW5kYXJkXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IEJ1Y2tldCB0YWdzIGluIGstdiBwYWlycyBmb3JtYXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHJvcy5Sb3NUYWdbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJzaXRlQ29uZmlndXJhdGlvbjogVGhlIHByb3BlcnRpZXMgb2Ygd2Vic2l0ZSBjb25maWcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2Vic2l0ZUNvbmZpZ3VyYXRpb24/OiBSb3NCdWNrZXQuV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCdWNrZXRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3knLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBvbGljeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29yc0NvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jb3JzQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRpb25Gb3JjZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0b3JhZ2VDbGFzcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RvcmFnZUNsYXNzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdG9yYWdlQ2xhc3MnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdG9yYWdlQ2xhc3MsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiU3RhbmRhcmRcIixcIklBXCIsXCJBcmNoaXZlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmFnZUNsYXNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0b3JhZ2VDbGFzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nZ2luZ0NvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5sb2dnaW5nQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2Vic2l0ZUNvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy53ZWJzaXRlQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmZXJlckNvbmZpZ3VyYXRpb24nLCBSb3NCdWNrZXRfUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZWZlcmVyQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGlmZWN5Y2xlQ29uZmlndXJhdGlvbicsIFJvc0J1Y2tldF9MaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubGlmZWN5Y2xlQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uJywgUm9zQnVja2V0X1NlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuYWNjZXNzQ29udHJvbCAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWNjZXNzQ29udHJvbCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29udHJvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFjY2Vzc0NvbnRyb2wsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wicHJpdmF0ZVwiLFwicHVibGljLXJlYWRcIixcInB1YmxpYy1yZWFkLXdyaXRlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29udHJvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2Nlc3NDb250cm9sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlUm9zVGFnKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0J1Y2tldFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQnVja2V0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQnVja2V0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQnVja2V0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXROYW1lKSxcbiAgICAgIEFjY2Vzc0NvbnRyb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzQ29udHJvbCksXG4gICAgICBDT1JTQ29uZmlndXJhdGlvbjogcm9zQnVja2V0Q09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb3JzQ29uZmlndXJhdGlvbiksXG4gICAgICBEZWxldGlvbkZvcmNlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSxcbiAgICAgIExpZmVjeWNsZUNvbmZpZ3VyYXRpb246IHJvc0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5saWZlY3ljbGVDb25maWd1cmF0aW9uKSxcbiAgICAgIExvZ2dpbmdDb25maWd1cmF0aW9uOiByb3NCdWNrZXRMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2dpbmdDb25maWd1cmF0aW9uKSxcbiAgICAgIFBvbGljeTogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucG9saWN5KSxcbiAgICAgIFJlZmVyZXJDb25maWd1cmF0aW9uOiByb3NCdWNrZXRSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZmVyZXJDb25maWd1cmF0aW9uKSxcbiAgICAgIFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogcm9zQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uKSxcbiAgICAgIFN0b3JhZ2VDbGFzczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdG9yYWdlQ2xhc3MpLFxuICAgICAgVGFnczogcm9zLmxpc3RNYXBwZXIocm9zLnJvc1RhZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICBXZWJzaXRlQ29uZmlndXJhdGlvbjogcm9zQnVja2V0V2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWJzaXRlQ29uZmlndXJhdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6T1NTOjpCdWNrZXRgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCdWNrZXQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9TUzo6QnVja2V0XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluTmFtZTogVGhlIHB1YmxpYyBETlMgbmFtZSBvZiB0aGUgc3BlY2lmaWVkIGJ1Y2tldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbk5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW50ZXJuYWxEb21haW5OYW1lOiBUaGUgaW50ZXJuYWwgRE5TIG5hbWUgb2YgdGhlIHNwZWNpZmllZCBidWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5hbERvbWFpbk5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZTogVGhlIG5hbWUgb2YgQnVja2V0XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWNrZXROYW1lOiBidWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVja2V0TmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0NvbnRyb2w6IFRoZSBhY2Nlc3MgY29udHJvbCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2Nlc3NDb250cm9sOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29yc0NvbmZpZ3VyYXRpb246IFJ1bGVzIHRoYXQgZGVmaW5lIGNyb3NzLW9yaWdpbiByZXNvdXJjZSBzaGFyaW5nIG9mIG9iamVjdHMgaW4gdGhpcyBidWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIGNvcnNDb25maWd1cmF0aW9uOiBSb3NCdWNrZXQuQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRlbGV0ZSB0aGUgcmVsYXRpdmUgb2JqZWN0cyBpbiB0aGUgYnVja2V0LiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvbkZvcmNlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpZmVjeWNsZUNvbmZpZ3VyYXRpb246IFJ1bGVzIHRoYXQgZGVmaW5lIGhvdyBvc3MgYnVja2V0IG1hbmFnZXMgb2JqZWN0cyBkdXJpbmcgdGhlaXIgbGlmZXRpbWUuXG4gICAgICovXG4gICAgcHVibGljIGxpZmVjeWNsZUNvbmZpZ3VyYXRpb246IFJvc0J1Y2tldC5MaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0NvbmZpZ3VyYXRpb246IFNldHRpbmdzIHRoYXQgZGVmaW5lcyB3aGVyZSBsb2dzIGFyZSBzdG9yZWQuXG4gICAgICovXG4gICAgcHVibGljIGxvZ2dpbmdDb25maWd1cmF0aW9uOiBSb3NCdWNrZXQuTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3k6IEJ1Y2tldCBwb2xpY3lcbiAgICAgKi9cbiAgICBwdWJsaWMgcG9saWN5OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmZXJlckNvbmZpZ3VyYXRpb246IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWZlcmVyQ29uZmlndXJhdGlvbjogUm9zQnVja2V0LlJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uOiBTcGVjaWZpZXMgdGhlIGJ1Y2tldCB1c2VkIHRvIHN0b3JlIHRoZSBzZXJ2ZXItc2lkZSBlbmNyeXB0aW9uIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogUm9zQnVja2V0LlNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0b3JhZ2VDbGFzczogU3BlY2lmaWVzIHRoZSBzdG9yYWdlIGNsYXNzIG9mIHRoZSBidWNrZXQuIERlZmF1bHQgaXMgXCJTdGFuZGFyZFwiLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9yYWdlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBCdWNrZXQgdGFncyBpbiBrLXYgcGFpcnMgZm9ybWF0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSB0YWdzOiByb3MuVGFnTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJzaXRlQ29uZmlndXJhdGlvbjogVGhlIHByb3BlcnRpZXMgb2Ygd2Vic2l0ZSBjb25maWcuXG4gICAgICovXG4gICAgcHVibGljIHdlYnNpdGVDb25maWd1cmF0aW9uOiBSb3NCdWNrZXQuV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpPU1M6OkJ1Y2tldGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQnVja2V0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCdWNrZXQuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbk5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0RvbWFpbk5hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmFsRG9tYWluTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnSW50ZXJuYWxEb21haW5OYW1lJykpO1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdOYW1lJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5idWNrZXROYW1lID0gcHJvcHMuYnVja2V0TmFtZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NDb250cm9sID0gcHJvcHMuYWNjZXNzQ29udHJvbDtcbiAgICAgICAgdGhpcy5jb3JzQ29uZmlndXJhdGlvbiA9IHByb3BzLmNvcnNDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmRlbGV0aW9uRm9yY2UgPSBwcm9wcy5kZWxldGlvbkZvcmNlO1xuICAgICAgICB0aGlzLmxpZmVjeWNsZUNvbmZpZ3VyYXRpb24gPSBwcm9wcy5saWZlY3ljbGVDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmxvZ2dpbmdDb25maWd1cmF0aW9uID0gcHJvcHMubG9nZ2luZ0NvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMucG9saWN5ID0gcHJvcHMucG9saWN5O1xuICAgICAgICB0aGlzLnJlZmVyZXJDb25maWd1cmF0aW9uID0gcHJvcHMucmVmZXJlckNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uID0gcHJvcHMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0b3JhZ2VDbGFzcyA9IHByb3BzLnN0b3JhZ2VDbGFzcztcbiAgICAgICAgdGhpcy50YWdzID0gbmV3IHJvcy5UYWdNYW5hZ2VyKHJvcy5UYWdUeXBlLlNUQU5EQVJELCBcIkFMSVlVTjo6T1NTOjpCdWNrZXRcIiwgcHJvcHMudGFncywgeyB0YWdQcm9wZXJ0eU5hbWU6ICd0YWdzJyB9KTtcbiAgICAgICAgdGhpcy53ZWJzaXRlQ29uZmlndXJhdGlvbiA9IHByb3BzLndlYnNpdGVDb25maWd1cmF0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6IHRoaXMuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIGFjY2Vzc0NvbnRyb2w6IHRoaXMuYWNjZXNzQ29udHJvbCxcbiAgICAgICAgICAgIGNvcnNDb25maWd1cmF0aW9uOiB0aGlzLmNvcnNDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgbGlmZWN5Y2xlQ29uZmlndXJhdGlvbjogdGhpcy5saWZlY3ljbGVDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbG9nZ2luZ0NvbmZpZ3VyYXRpb246IHRoaXMubG9nZ2luZ0NvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBwb2xpY3k6IHRoaXMucG9saWN5LFxuICAgICAgICAgICAgcmVmZXJlckNvbmZpZ3VyYXRpb246IHRoaXMucmVmZXJlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IHRoaXMuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uLFxuICAgICAgICAgICAgc3RvcmFnZUNsYXNzOiB0aGlzLnN0b3JhZ2VDbGFzcyxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncy5yZW5kZXJUYWdzKCksXG4gICAgICAgICAgICB3ZWJzaXRlQ29uZmlndXJhdGlvbjogdGhpcy53ZWJzaXRlQ29uZmlndXJhdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQnVja2V0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjcmVhdGVkQmVmb3JlRGF0ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjcmVhdGVkQmVmb3JlRGF0ZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkYXlzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRheXM/OiBudW1iZXI7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9BYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3JlYXRlZEJlZm9yZURhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY3JlYXRlZEJlZm9yZURhdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RheXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZGF5cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5BYm9ydE11bHRpcGFydFVwbG9hZGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQWJvcnRNdWx0aXBhcnRVcGxvYWRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0QWJvcnRNdWx0aXBhcnRVcGxvYWRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0Fib3J0TXVsdGlwYXJ0VXBsb2FkUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDcmVhdGVkQmVmb3JlRGF0ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jcmVhdGVkQmVmb3JlRGF0ZSksXG4gICAgICBEYXlzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRheXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb3JzUnVsZTogQSBzZXQgb2Ygb3JpZ2lucyBhbmQgbWV0aG9kcyB0aGF0IHlvdSBhbGxvdy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvcnNSdWxlPzogQXJyYXk8Um9zQnVja2V0LkNPUlNSdWxlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvcnNSdWxlJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQnVja2V0X0NPUlNSdWxlUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmNvcnNSdWxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNPUlNDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkNPUlNDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5DT1JTQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRDT1JTQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfQ09SU0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENPUlNSdWxlOiByb3MubGlzdE1hcHBlcihyb3NCdWNrZXRDT1JTUnVsZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb3JzUnVsZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENPUlNSdWxlUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heEFnZVNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4QWdlU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGxvd2VkTWV0aG9kOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFsbG93ZWRNZXRob2Q/OiBzdHJpbmdbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleHBvc2VIZWFkZXI6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXhwb3NlSGVhZGVyPzogc3RyaW5nW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxsb3dlZE9yaWdpbjogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbGxvd2VkT3JpZ2luPzogc3RyaW5nW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxsb3dlZEhlYWRlcjogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbGxvd2VkSGVhZGVyPzogc3RyaW5nW107XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDT1JTUnVsZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDT1JTUnVsZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9DT1JTUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4QWdlU2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhBZ2VTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGxvd2VkTWV0aG9kJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5hbGxvd2VkTWV0aG9kKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleHBvc2VIZWFkZXInLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmV4cG9zZUhlYWRlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb3dlZE9yaWdpbicsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuYWxsb3dlZE9yaWdpbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb3dlZEhlYWRlcicsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuYWxsb3dlZEhlYWRlcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDT1JTUnVsZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5DT1JTUnVsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ09SU1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuQ09SU1J1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQnVja2V0Q09SU1J1bGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0NPUlNSdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBNYXhBZ2VTZWNvbmRzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heEFnZVNlY29uZHMpLFxuICAgICAgQWxsb3dlZE1ldGhvZDogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYWxsb3dlZE1ldGhvZCksXG4gICAgICBFeHBvc2VIZWFkZXI6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmV4cG9zZUhlYWRlciksXG4gICAgICBBbGxvd2VkT3JpZ2luOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hbGxvd2VkT3JpZ2luKSxcbiAgICAgIEFsbG93ZWRIZWFkZXI6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFsbG93ZWRIZWFkZXIpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeHBpcmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNyZWF0ZWRCZWZvcmVEYXRlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNyZWF0ZWRCZWZvcmVEYXRlPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRheXM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGF5cz86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkYXRlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRhdGU/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFeHBpcmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEV4cGlyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfRXhwaXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3JlYXRlZEJlZm9yZURhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY3JlYXRlZEJlZm9yZURhdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RheXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZGF5cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYXRlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkV4cGlyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuRXhwaXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXhwaXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5FeHBpcmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldEV4cGlyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQnVja2V0X0V4cGlyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENyZWF0ZWRCZWZvcmVEYXRlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNyZWF0ZWRCZWZvcmVEYXRlKSxcbiAgICAgIERheXM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGF5cyksXG4gICAgICBEYXRlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRhdGUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGU6IERlc2NyaWJlcyBsaWZlY3ljbGUgcnVsZXMgZm9yIHRoZSBvc3MgYnVja2V0IExpZmVjeWNsZSBDb25maWd1cmF0aW9uIHByb3BlcnR5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcnVsZTogQXJyYXk8Um9zQnVja2V0LlJ1bGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCdWNrZXRfTGlmZWN5Y2xlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ydWxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQnVja2V0X1J1bGVQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMucnVsZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkxpZmVjeWNsZUNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuTGlmZWN5Y2xlQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9MaWZlY3ljbGVDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBSdWxlOiByb3MubGlzdE1hcHBlcihyb3NCdWNrZXRSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJ1bGUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRQcmVmaXg6IFRoaXMgZWxlbWVudCBsZXRzIHlvdSBzcGVjaWZ5IGEgcHJlZml4IGZvciB0aGUgb2JqZWN0cyB0aGF0IHRoZSBsb2cgZmlsZXMgd2lsbCBiZSBzdG9yZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0YXJnZXRQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGFyZ2V0QnVja2V0OiBTcGVjaWZpZXMgdGhlIGJ1Y2tldCB3aGVyZSB5b3Ugd2FudCBBbGl5dW4gT1NTIHRvIHN0b3JlIHNlcnZlciBhY2Nlc3MgbG9ncy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRhcmdldEJ1Y2tldD86IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYExvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X0xvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRQcmVmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0UHJlZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRCdWNrZXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0QnVja2V0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkxvZ2dpbmdDb25maWd1cmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LkxvZ2dpbmdDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPU1M6OkJ1Y2tldC5Mb2dnaW5nQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRMb2dnaW5nQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfTG9nZ2luZ0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFRhcmdldFByZWZpeDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRQcmVmaXgpLFxuICAgICAgVGFyZ2V0QnVja2V0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldEJ1Y2tldCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZmVyZXJMaXN0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZmVyZXJMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGxvd0VtcHR5UmVmZXJlcjogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbGxvd0VtcHR5UmVmZXJlcj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9SZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmZXJlckxpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJlZmVyZXJMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGxvd0VtcHR5UmVmZXJlcicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYWxsb3dFbXB0eVJlZmVyZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVmZXJlckNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuUmVmZXJlckNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJlZmVyZXJDb25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFJlZmVyZXJDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9SZWZlcmVyQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUmVmZXJlckxpc3Q6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJlZmVyZXJMaXN0KSxcbiAgICAgIEFsbG93RW1wdHlSZWZlcmVyOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGxvd0VtcHR5UmVmZXJlciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCdWNrZXQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJ1bGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhYm9ydE11bHRpcGFydFVwbG9hZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhYm9ydE11bHRpcGFydFVwbG9hZD86IFJvc0J1Y2tldC5BYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGV4cGlyYXRpb246IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXhwaXJhdGlvbj86IFJvc0J1Y2tldC5FeHBpcmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJlZml4OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUnVsZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQnVja2V0X1J1bGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RhdHVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiRW5hYmxlZFwiLFwiRGlzYWJsZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhYm9ydE11bHRpcGFydFVwbG9hZCcsIFJvc0J1Y2tldF9BYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFib3J0TXVsdGlwYXJ0VXBsb2FkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleHBpcmF0aW9uJywgUm9zQnVja2V0X0V4cGlyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5leHBpcmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVmaXgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJlZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVmaXgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJlZml4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSdWxlUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LlJ1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJ1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuUnVsZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCdWNrZXRSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9SdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTdGF0dXM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdHVzKSxcbiAgICAgIEFib3J0TXVsdGlwYXJ0VXBsb2FkOiByb3NCdWNrZXRBYm9ydE11bHRpcGFydFVwbG9hZFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFib3J0TXVsdGlwYXJ0VXBsb2FkKSxcbiAgICAgIEV4cGlyYXRpb246IHJvc0J1Y2tldEV4cGlyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5leHBpcmF0aW9uKSxcbiAgICAgIFByZWZpeDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmVmaXgpLFxuICAgICAgSUQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQnVja2V0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3NlQWxnb3JpdGhtOiBTcGVjaWZpZXMgdGhlIGRlZmF1bHQgc2VydmVyLXNpZGUgZW5jcnlwdGlvbiBtZXRob2QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzc2VBbGdvcml0aG06IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrbXNNYXN0ZXJLZXlJZDogU3BlY2lmaWVzIHRoZSBDTUsgSUQgd2hlbiB0aGUgdmFsdWUgb2YgU1NFQWxnb3JpdGhtIGlzIEtNUyBhbmQgYSBzcGVjaWZpZWQgQ01LIGlzIHVzZWQgZm9yIGVuY3J5cHRpb24uIElmIHRoZSB2YWx1ZSBvZiBTU0VBbGdvcml0aG0gaXMgbm90IEtNUywgdGhpcyBlbGVtZW50IG11c3QgYmUgbnVsbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGttc01hc3RlcktleUlkPzogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9TZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NzZUFsZ29yaXRobScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zc2VBbGdvcml0aG0pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNzZUFsZ29yaXRobSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3NlQWxnb3JpdGhtKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2VBbGdvcml0aG0nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zc2VBbGdvcml0aG0sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiS01TXCIsXCJBRVMyNTZcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2VBbGdvcml0aG0nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3NlQWxnb3JpdGhtKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrbXNNYXN0ZXJLZXlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rbXNNYXN0ZXJLZXlJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCdWNrZXRfU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTU0VBbGdvcml0aG06IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3NlQWxnb3JpdGhtKSxcbiAgICAgIEtNU01hc3RlcktleUlEOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmttc01hc3RlcktleUlkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0J1Y2tldCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5kZXhEb2N1bWVudDogZGVmYXVsdCBob21lIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmRleERvY3VtZW50Pzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVycm9yRG9jdW1lbnQ6IGRlZmF1bHQgZXJyb3IgcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVycm9yRG9jdW1lbnQ/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0J1Y2tldF9XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5kZXhEb2N1bWVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbmRleERvY3VtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlcnJvckRvY3VtZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVycm9yRG9jdW1lbnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1NTOjpCdWNrZXQuV2Vic2l0ZUNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9TUzo6QnVja2V0LldlYnNpdGVDb25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0J1Y2tldFdlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0J1Y2tldF9XZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgSW5kZXhEb2N1bWVudDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbmRleERvY3VtZW50KSxcbiAgICAgIEVycm9yRG9jdW1lbnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXJyb3JEb2N1bWVudCksXG4gICAgfTtcbn1cbiJdfQ==