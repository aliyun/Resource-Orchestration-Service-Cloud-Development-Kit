"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosUserInfo = exports.RosRepository = exports.RosNamespace = exports.RosInstanceVpcEndpointLinkedVpc = exports.RosInstanceEndpointAclPolicy = exports.RosInstance = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceStorageName', ros.validateString)(properties.instanceStorageName));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if (properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
            data: properties.instanceName,
            reg: /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('imageScanner', ros.requiredValidator)(properties.imageScanner));
    if (properties.imageScanner && (typeof properties.imageScanner) !== 'object') {
        errors.collect(ros.propertyValidator('imageScanner', ros.validateAllowedValues)({
            data: properties.imageScanner,
            allowedValues: ["ACR", "SAS"],
        }));
    }
    errors.collect(ros.propertyValidator('imageScanner', ros.validateString)(properties.imageScanner));
    if (properties.renewalStatus && (typeof properties.renewalStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewalStatus', ros.validateAllowedValues)({
            data: properties.renewalStatus,
            allowedValues: ["AutoRenewal", "ManualRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    errors.collect(ros.propertyValidator('renewPeriod', ros.validateNumber)(properties.renewPeriod));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 6, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if (properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
            data: properties.instanceType,
            allowedValues: ["Basic", "Standard", "Advanced"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
        ImageScanner: ros.stringToRosTemplate(properties.imageScanner),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        InstanceType: ros.stringToRosTemplate(properties.instanceType),
        Period: ros.numberToRosTemplate(properties.period),
        InstanceStorageName: ros.stringToRosTemplate(properties.instanceStorageName),
        RenewalStatus: ros.stringToRosTemplate(properties.renewalStatus),
        RenewPeriod: ros.numberToRosTemplate(properties.renewPeriod),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Instance`, which is used to create a Container Registry Enterprise Edition instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
 */
class RosInstance extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceSpecification = this.getAtt('InstanceSpecification');
        this.attrModifiedTime = this.getAtt('ModifiedTime');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageScanner = props.imageScanner;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.period = props.period;
        this.instanceStorageName = props.instanceStorageName;
        this.renewalStatus = props.renewalStatus;
        this.renewPeriod = props.renewPeriod;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            imageScanner: this.imageScanner,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            period: this.period,
            instanceStorageName: this.instanceStorageName,
            renewalStatus: this.renewalStatus,
            renewPeriod: this.renewPeriod,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstance = RosInstance;
/**
 * The resource type name for this resource class.
 */
RosInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Instance";
/**
 * Determine whether the given properties match those of a `RosInstanceEndpointAclPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceEndpointAclPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceEndpointAclPolicyPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('entry', ros.requiredValidator)(properties.entry));
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('moduleName', ros.validateString)(properties.moduleName));
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "RosInstanceEndpointAclPolicyProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceEndpointAclPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceEndpointAclPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceEndpointAclPolicy` resource.
 */
// @ts-ignore TS6133
function rosInstanceEndpointAclPolicyPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstanceEndpointAclPolicyPropsValidator(properties).assertSuccess();
    }
    return {
        Entry: ros.stringToRosTemplate(properties.entry),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        Comment: ros.stringToRosTemplate(properties.comment),
        EndpointType: ros.stringToRosTemplate(properties.endpointType),
        ModuleName: ros.stringToRosTemplate(properties.moduleName),
        RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::InstanceEndpointAclPolicy`, which is used to create a whitelist for the access port of a public-facing instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceEndpointAclPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
class RosInstanceEndpointAclPolicy extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstanceEndpointAclPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEntry = this.getAtt('Entry');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.entry = props.entry;
        this.instanceId = props.instanceId;
        this.comment = props.comment;
        this.endpointType = props.endpointType;
        this.moduleName = props.moduleName;
        this.regionId = props.regionId;
    }
    get rosProperties() {
        return {
            entry: this.entry,
            instanceId: this.instanceId,
            comment: this.comment,
            endpointType: this.endpointType,
            moduleName: this.moduleName,
            regionId: this.regionId,
        };
    }
    renderProperties(props) {
        return rosInstanceEndpointAclPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstanceEndpointAclPolicy = RosInstanceEndpointAclPolicy;
/**
 * The resource type name for this resource class.
 */
RosInstanceEndpointAclPolicy.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceEndpointAclPolicy";
/**
 * Determine whether the given properties match those of a `RosInstanceVpcEndpointLinkedVpcProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceVpcEndpointLinkedVpcProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceVpcEndpointLinkedVpcPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableCreateDnsRecordInPvzt', ros.validateBoolean)(properties.enableCreateDnsRecordInPvzt));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('moduleName', ros.validateString)(properties.moduleName));
    errors.collect(ros.propertyValidator('vswitchId', ros.requiredValidator)(properties.vswitchId));
    errors.collect(ros.propertyValidator('vswitchId', ros.validateString)(properties.vswitchId));
    return errors.wrap('supplied properties not correct for "RosInstanceVpcEndpointLinkedVpcProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceVpcEndpointLinkedVpc` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceVpcEndpointLinkedVpcProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceVpcEndpointLinkedVpc` resource.
 */
// @ts-ignore TS6133
function rosInstanceVpcEndpointLinkedVpcPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstanceVpcEndpointLinkedVpcPropsValidator(properties).assertSuccess();
    }
    return {
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VswitchId: ros.stringToRosTemplate(properties.vswitchId),
        EnableCreateDNSRecordInPvzt: ros.booleanToRosTemplate(properties.enableCreateDnsRecordInPvzt),
        ModuleName: ros.stringToRosTemplate(properties.moduleName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceVpcEndpointLinkedVpc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
class RosInstanceVpcEndpointLinkedVpc extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstanceVpcEndpointLinkedVpc.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVswitchId = this.getAtt('VswitchId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.vpcId = props.vpcId;
        this.vswitchId = props.vswitchId;
        this.enableCreateDnsRecordInPvzt = props.enableCreateDnsRecordInPvzt;
        this.moduleName = props.moduleName;
    }
    get rosProperties() {
        return {
            instanceId: this.instanceId,
            vpcId: this.vpcId,
            vswitchId: this.vswitchId,
            enableCreateDnsRecordInPvzt: this.enableCreateDnsRecordInPvzt,
            moduleName: this.moduleName,
        };
    }
    renderProperties(props) {
        return rosInstanceVpcEndpointLinkedVpcPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstanceVpcEndpointLinkedVpc = RosInstanceVpcEndpointLinkedVpc;
/**
 * The resource type name for this resource class.
 */
RosInstanceVpcEndpointLinkedVpc.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceVpcEndpointLinkedVpc";
/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('autoCreate', ros.validateBoolean)(properties.autoCreate));
    if (properties.defaultVisibility && (typeof properties.defaultVisibility) !== 'object') {
        errors.collect(ros.propertyValidator('defaultVisibility', ros.validateAllowedValues)({
            data: properties.defaultVisibility,
            allowedValues: ["PUBLIC", "PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultVisibility', ros.validateString)(properties.defaultVisibility));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    if (properties.namespace && (Array.isArray(properties.namespace) || (typeof properties.namespace) === 'string')) {
        errors.collect(ros.propertyValidator('namespace', ros.validateLength)({
            data: properties.namespace.length,
            min: 2,
            max: 30,
        }));
    }
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
        Namespace: ros.stringToRosTemplate(properties.namespace),
        AutoCreate: ros.booleanToRosTemplate(properties.autoCreate),
        DefaultVisibility: ros.stringToRosTemplate(properties.defaultVisibility),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Namespace`, which is used to create a namespace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
 */
class RosNamespace extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrNamespaceId = this.getAtt('NamespaceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespace = props.namespace;
        this.autoCreate = props.autoCreate;
        this.defaultVisibility = props.defaultVisibility;
        this.instanceId = props.instanceId;
    }
    get rosProperties() {
        return {
            namespace: this.namespace,
            autoCreate: this.autoCreate,
            defaultVisibility: this.defaultVisibility,
            instanceId: this.instanceId,
        };
    }
    renderProperties(props) {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNamespace = RosNamespace;
/**
 * The resource type name for this resource class.
 */
RosNamespace.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Namespace";
/**
 * Determine whether the given properties match those of a `RosRepositoryProps`
 *
 * @param properties - the TypeScript properties of a `RosRepositoryProps`
 *
 * @returns the result of the validation.
 */
function RosRepositoryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagImmutability', ros.validateBoolean)(properties.tagImmutability));
    errors.collect(ros.propertyValidator('repoNamespace', ros.requiredValidator)(properties.repoNamespace));
    if (properties.repoNamespace && (Array.isArray(properties.repoNamespace) || (typeof properties.repoNamespace) === 'string')) {
        errors.collect(ros.propertyValidator('repoNamespace', ros.validateLength)({
            data: properties.repoNamespace.length,
            min: 2,
            max: 30,
        }));
    }
    errors.collect(ros.propertyValidator('repoNamespace', ros.validateString)(properties.repoNamespace));
    errors.collect(ros.propertyValidator('repoType', ros.requiredValidator)(properties.repoType));
    if (properties.repoType && (typeof properties.repoType) !== 'object') {
        errors.collect(ros.propertyValidator('repoType', ros.validateAllowedValues)({
            data: properties.repoType,
            allowedValues: ["PUBLIC", "PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('repoType', ros.validateString)(properties.repoType));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('repoName', ros.requiredValidator)(properties.repoName));
    if (properties.repoName && (Array.isArray(properties.repoName) || (typeof properties.repoName) === 'string')) {
        errors.collect(ros.propertyValidator('repoName', ros.validateLength)({
            data: properties.repoName.length,
            min: 1,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('repoName', ros.validateString)(properties.repoName));
    errors.collect(ros.propertyValidator('summary', ros.requiredValidator)(properties.summary));
    if (properties.summary && (Array.isArray(properties.summary) || (typeof properties.summary) === 'string')) {
        errors.collect(ros.propertyValidator('summary', ros.validateLength)({
            data: properties.summary.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('summary', ros.validateString)(properties.summary));
    if (properties.detail && (Array.isArray(properties.detail) || (typeof properties.detail) === 'string')) {
        errors.collect(ros.propertyValidator('detail', ros.validateLength)({
            data: properties.detail.length,
            min: undefined,
            max: 2000,
        }));
    }
    errors.collect(ros.propertyValidator('detail', ros.validateString)(properties.detail));
    errors.collect(ros.propertyValidator('repoSource', RosRepository_RepoSourcePropertyValidator)(properties.repoSource));
    return errors.wrap('supplied properties not correct for "RosRepositoryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository` resource
 *
 * @param properties - the TypeScript properties of a `RosRepositoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository` resource.
 */
// @ts-ignore TS6133
function rosRepositoryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRepositoryPropsValidator(properties).assertSuccess();
    }
    return {
        RepoName: ros.stringToRosTemplate(properties.repoName),
        RepoNamespace: ros.stringToRosTemplate(properties.repoNamespace),
        RepoType: ros.stringToRosTemplate(properties.repoType),
        Summary: ros.stringToRosTemplate(properties.summary),
        Detail: ros.stringToRosTemplate(properties.detail),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        RepoSource: rosRepositoryRepoSourcePropertyToRosTemplate(properties.repoSource),
        TagImmutability: ros.booleanToRosTemplate(properties.tagImmutability),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Repository`, which is used to create an image repository.
 * @Note This class does not contain additional functions, so it is recommended to use the `Repository` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
class RosRepository extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRepository.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrRepoId = this.getAtt('RepoId');
        this.attrRepoName = this.getAtt('RepoName');
        this.attrRepoNamespace = this.getAtt('RepoNamespace');
        this.attrRepoType = this.getAtt('RepoType');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.repoName = props.repoName;
        this.repoNamespace = props.repoNamespace;
        this.repoType = props.repoType;
        this.summary = props.summary;
        this.detail = props.detail;
        this.instanceId = props.instanceId;
        this.repoSource = props.repoSource;
        this.tagImmutability = props.tagImmutability;
    }
    get rosProperties() {
        return {
            repoName: this.repoName,
            repoNamespace: this.repoNamespace,
            repoType: this.repoType,
            summary: this.summary,
            detail: this.detail,
            instanceId: this.instanceId,
            repoSource: this.repoSource,
            tagImmutability: this.tagImmutability,
        };
    }
    renderProperties(props) {
        return rosRepositoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRepository = RosRepository;
/**
 * The resource type name for this resource class.
 */
RosRepository.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Repository";
/**
 * Determine whether the given properties match those of a `RepoSourceProperty`
 *
 * @param properties - the TypeScript properties of a `RepoSourceProperty`
 *
 * @returns the result of the validation.
 */
function RosRepository_RepoSourcePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isAutoBuild', ros.requiredValidator)(properties.isAutoBuild));
    errors.collect(ros.propertyValidator('isAutoBuild', ros.validateBoolean)(properties.isAutoBuild));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.requiredValidator)(properties.sourceRepoName));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.validateString)(properties.sourceRepoName));
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.requiredValidator)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.validateString)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('isOversea', ros.requiredValidator)(properties.isOversea));
    errors.collect(ros.propertyValidator('isOversea', ros.validateBoolean)(properties.isOversea));
    errors.collect(ros.propertyValidator('sourceRepoType', ros.requiredValidator)(properties.sourceRepoType));
    if (properties.sourceRepoType && (typeof properties.sourceRepoType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceRepoType', ros.validateAllowedValues)({
            data: properties.sourceRepoType,
            allowedValues: ["CODE", "GITHUB", "GITLAB", "BITBUCKET", "CODEUP", "GITEE"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceRepoType', ros.validateString)(properties.sourceRepoType));
    errors.collect(ros.propertyValidator('isDisableCache', ros.requiredValidator)(properties.isDisableCache));
    errors.collect(ros.propertyValidator('isDisableCache', ros.validateBoolean)(properties.isDisableCache));
    return errors.wrap('supplied properties not correct for "RepoSourceProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository.RepoSource` resource
 *
 * @param properties - the TypeScript properties of a `RepoSourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository.RepoSource` resource.
 */
// @ts-ignore TS6133
function rosRepositoryRepoSourcePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRepository_RepoSourcePropertyValidator(properties).assertSuccess();
    return {
        IsAutoBuild: ros.booleanToRosTemplate(properties.isAutoBuild),
        SourceRepoName: ros.stringToRosTemplate(properties.sourceRepoName),
        SourceRepoNamespace: ros.stringToRosTemplate(properties.sourceRepoNamespace),
        IsOversea: ros.booleanToRosTemplate(properties.isOversea),
        SourceRepoType: ros.stringToRosTemplate(properties.sourceRepoType),
        IsDisableCache: ros.booleanToRosTemplate(properties.isDisableCache),
    };
}
/**
 * Determine whether the given properties match those of a `RosUserInfoProps`
 *
 * @param properties - the TypeScript properties of a `RosUserInfoProps`
 *
 * @returns the result of the validation.
 */
function RosUserInfoPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('user', ros.requiredValidator)(properties.user));
    errors.collect(ros.propertyValidator('user', RosUserInfo_UserPropertyValidator)(properties.user));
    return errors.wrap('supplied properties not correct for "RosUserInfoProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo` resource
 *
 * @param properties - the TypeScript properties of a `RosUserInfoProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo` resource.
 */
// @ts-ignore TS6133
function rosUserInfoPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosUserInfoPropsValidator(properties).assertSuccess();
    }
    return {
        User: rosUserInfoUserPropertyToRosTemplate(properties.user),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::UserInfo`, which is used to create the information about a user.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserInfo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
 */
class RosUserInfo extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosUserInfo.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoginName = this.getAtt('LoginName');
        this.attrUserId = this.getAtt('UserId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.user = props.user;
    }
    get rosProperties() {
        return {
            user: this.user,
        };
    }
    renderProperties(props) {
        return rosUserInfoPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosUserInfo = RosUserInfo;
/**
 * The resource type name for this resource class.
 */
RosUserInfo.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::UserInfo";
/**
 * Determine whether the given properties match those of a `UserProperty`
 *
 * @param properties - the TypeScript properties of a `UserProperty`
 *
 * @returns the result of the validation.
 */
function RosUserInfo_UserPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "UserProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo.User` resource
 *
 * @param properties - the TypeScript properties of a `UserProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo.User` resource.
 */
// @ts-ignore TS6133
function rosUserInfoUserPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosUserInfo_UserPropertyValidator(properties).assertSuccess();
    return {
        Password: ros.stringToRosTemplate(properties.password),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3IuZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3IuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUF3RDlDOzs7Ozs7R0FNRztBQUNILFNBQVMseUJBQXlCLENBQUMsVUFBZTtJQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNqSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsSUFBRyxVQUFVLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMvRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFlBQVk7WUFDN0IsR0FBRyxFQUFFLG1DQUFtQztTQUN6QyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMs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RSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlELE9BQU87UUFDTCxRQUFRLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7S0FDdkQsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0luc3RhbmNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW1hZ2VTY2FubmVyOiBTZWN1cml0eSBzY2FuIGVuZ2luZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZVNjYW5uZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IEluc3RhbmNlIG5hbWUuVGhlIHZhbHVlIGNvbnRhaW5zIDMgdG8gMzAgbG93ZXJjYXNlIGxldHRlcnMsIGRpZ2l0cywgYW5kIGRlbGltaXRlcnMgXCItXCIoaXQgY2FuIG5vdCBiZSBmaXJzdCBvciBsYXN0KS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IFRoZSBWYWx1ZSBjb25maWd1cmF0aW9uIG9mIHRoZSBHcm91cCAxIGF0dHJpYnV0ZSBvZiBDb250YWluZXIgTWlycm9yIFNlcnZpY2UgRW50ZXJwcmlzZSBFZGl0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQmFzaWM6IEJhc2ljIGluc3RhbmNlXG4gICAgICogU3RhbmRhcmQ6IFN0YW5kYXJkIGluc3RhbmNlXG4gICAgICogQWR2YW5jZWQ6IEFkdmFuY2VkIEVkaXRpb24gSW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIGN5Y2xlLiBUaGUgdW5pdCBpcyBNb250aGx5LCBwbGVhc2UgZW50ZXIgYW4gaW50ZWdlciBtdWx0aXBsZSBvZiAxMiBmb3IgYW5udWFsIHBhaWQgcHJvZHVjdHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VTdG9yYWdlTmFtZTogQ3VzdG9tIE9TUyBCdWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVN0b3JhZ2VOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbmV3YWxTdGF0dXM6IEF1dG9tYXRpYyByZW5ld2FsIHN0YXR1cywgdmFsdWU6XG4gICAgICogLSBBdXRvUmVuZXdhbDogYXV0b21hdGljIHJlbmV3YWwuXG4gICAgICogLSBNYW51YWxSZW5ld2FsOiBtYW51YWwgcmVuZXdhbC5cbiAgICAgKiBEZWZhdWx0IE1hbnVhbFJlbmV3YWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVuZXdhbFN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW5ld1BlcmlvZDogQXV0b21hdGljIHJlbmV3YWwgY3ljbGUsIGluIG1vbnRocy5cbiAgICAgKiBXaGVuIFJlbmV3YWxTdGF0dXMgaXMgc2V0IHRvIEF1dG9SZW5ld2FsLCBpdCBtdXN0IGJlIHNldC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW5ld1BlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0luc3RhbmNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0luc3RhbmNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5zdGFuY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlU3RvcmFnZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VTdG9yYWdlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXowLTldW2EtejAtOS1dezEsMjh9W2EtejAtOV0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW1hZ2VTY2FubmVyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmltYWdlU2Nhbm5lcikpO1xuICAgIGlmKHByb3BlcnRpZXMuaW1hZ2VTY2FubmVyICYmICh0eXBlb2YgcHJvcGVydGllcy5pbWFnZVNjYW5uZXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ltYWdlU2Nhbm5lcicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmltYWdlU2Nhbm5lcixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBQ1JcIixcIlNBU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ltYWdlU2Nhbm5lcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbWFnZVNjYW5uZXIpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlbmV3YWxTdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlbmV3YWxTdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbmV3YWxTdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZW5ld2FsU3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkF1dG9SZW5ld2FsXCIsXCJNYW51YWxSZW5ld2FsXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVuZXdhbFN0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZW5ld2FsU3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW5ld1BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5yZW5ld1BlcmlvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBlcmlvZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyaW9kICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcmlvZCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbMSwyLDMsNiwxMiwyNCwzNiw0OCw2MF0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2QnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucGVyaW9kKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkJhc2ljXCIsXCJTdGFuZGFyZFwiLFwiQWR2YW5jZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0luc3RhbmNlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpJbnN0YW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6Okluc3RhbmNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0luc3RhbmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NJbnN0YW5jZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEltYWdlU2Nhbm5lcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbWFnZVNjYW5uZXIpLFxuICAgICAgSW5zdGFuY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSksXG4gICAgICBJbnN0YW5jZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSxcbiAgICAgIFBlcmlvZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJpb2QpLFxuICAgICAgSW5zdGFuY2VTdG9yYWdlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZVN0b3JhZ2VOYW1lKSxcbiAgICAgIFJlbmV3YWxTdGF0dXM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVuZXdhbFN0YXR1cyksXG4gICAgICBSZW5ld1BlcmlvZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZW5ld1BlcmlvZCksXG4gICAgICBSZXNvdXJjZUdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDUjo6SW5zdGFuY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIENvbnRhaW5lciBSZWdpc3RyeSBFbnRlcnByaXNlIEVkaXRpb24gaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEluc3RhbmNlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci1pbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgUm9zSW5zdGFuY2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNSOjpJbnN0YW5jZVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgY3JlYXRpb24gdGltZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBmaXJzdCBJRCBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlTmFtZTogSW5zdGFuY2VOYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlU3BlY2lmaWNhdGlvbjogSW5zdGFuY2VTcGVjaWZpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VTcGVjaWZpY2F0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1vZGlmaWVkVGltZTogTGFzdCBtb2RpZmljYXRpb24gdGltZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1vZGlmaWVkVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZUdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGltYWdlU2Nhbm5lcjogU2VjdXJpdHkgc2NhbiBlbmdpbmUuXG4gICAgICovXG4gICAgcHVibGljIGltYWdlU2Nhbm5lcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTmFtZTogSW5zdGFuY2UgbmFtZS5UaGUgdmFsdWUgY29udGFpbnMgMyB0byAzMCBsb3dlcmNhc2UgbGV0dGVycywgZGlnaXRzLCBhbmQgZGVsaW1pdGVycyBcIi1cIihpdCBjYW4gbm90IGJlIGZpcnN0IG9yIGxhc3QpLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IFRoZSBWYWx1ZSBjb25maWd1cmF0aW9uIG9mIHRoZSBHcm91cCAxIGF0dHJpYnV0ZSBvZiBDb250YWluZXIgTWlycm9yIFNlcnZpY2UgRW50ZXJwcmlzZSBFZGl0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQmFzaWM6IEJhc2ljIGluc3RhbmNlXG4gICAgICogU3RhbmRhcmQ6IFN0YW5kYXJkIGluc3RhbmNlXG4gICAgICogQWR2YW5jZWQ6IEFkdmFuY2VkIEVkaXRpb24gSW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogUHJlcGFpZCBjeWNsZS4gVGhlIHVuaXQgaXMgTW9udGhseSwgcGxlYXNlIGVudGVyIGFuIGludGVnZXIgbXVsdGlwbGUgb2YgMTIgZm9yIGFubnVhbCBwYWlkIHByb2R1Y3RzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJpb2Q6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVN0b3JhZ2VOYW1lOiBDdXN0b20gT1NTIEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZVN0b3JhZ2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVuZXdhbFN0YXR1czogQXV0b21hdGljIHJlbmV3YWwgc3RhdHVzLCB2YWx1ZTpcbiAgICAgKiAtIEF1dG9SZW5ld2FsOiBhdXRvbWF0aWMgcmVuZXdhbC5cbiAgICAgKiAtIE1hbnVhbFJlbmV3YWw6IG1hbnVhbCByZW5ld2FsLlxuICAgICAqIERlZmF1bHQgTWFudWFsUmVuZXdhbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVuZXdhbFN0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbmV3UGVyaW9kOiBBdXRvbWF0aWMgcmVuZXdhbCBjeWNsZSwgaW4gbW9udGhzLlxuICAgICAqIFdoZW4gUmVuZXdhbFN0YXR1cyBpcyBzZXQgdG8gQXV0b1JlbmV3YWwsIGl0IG11c3QgYmUgc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZW5ld1BlcmlvZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0luc3RhbmNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gdGhpcy5nZXRBdHQoJ0NyZWF0ZVRpbWUnKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZU5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VTcGVjaWZpY2F0aW9uID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlU3BlY2lmaWNhdGlvbicpO1xuICAgICAgICB0aGlzLmF0dHJNb2RpZmllZFRpbWUgPSB0aGlzLmdldEF0dCgnTW9kaWZpZWRUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZUdyb3VwSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW1hZ2VTY2FubmVyID0gcHJvcHMuaW1hZ2VTY2FubmVyO1xuICAgICAgICB0aGlzLmluc3RhbmNlTmFtZSA9IHByb3BzLmluc3RhbmNlTmFtZTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZVR5cGUgPSBwcm9wcy5pbnN0YW5jZVR5cGU7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcHJvcHMucGVyaW9kO1xuICAgICAgICB0aGlzLmluc3RhbmNlU3RvcmFnZU5hbWUgPSBwcm9wcy5pbnN0YW5jZVN0b3JhZ2VOYW1lO1xuICAgICAgICB0aGlzLnJlbmV3YWxTdGF0dXMgPSBwcm9wcy5yZW5ld2FsU3RhdHVzO1xuICAgICAgICB0aGlzLnJlbmV3UGVyaW9kID0gcHJvcHMucmVuZXdQZXJpb2Q7XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGltYWdlU2Nhbm5lcjogdGhpcy5pbWFnZVNjYW5uZXIsXG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHRoaXMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiB0aGlzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIHBlcmlvZDogdGhpcy5wZXJpb2QsXG4gICAgICAgICAgICBpbnN0YW5jZVN0b3JhZ2VOYW1lOiB0aGlzLmluc3RhbmNlU3RvcmFnZU5hbWUsXG4gICAgICAgICAgICByZW5ld2FsU3RhdHVzOiB0aGlzLnJlbmV3YWxTdGF0dXMsXG4gICAgICAgICAgICByZW5ld1BlcmlvZDogdGhpcy5yZW5ld1BlcmlvZCxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0luc3RhbmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci1pbnN0YW5jZWVuZHBvaW50YWNscG9saWN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnRyeTogVGhlIElQIGFkZHJlc3MgcmFuZ2UgdGhhdCBpcyBhbGxvd2VkIHRvIGFjY2VzcyB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW50cnk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21tZW50OiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGVudHJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5kcG9pbnRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZHVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgaW4gdGhlIGluc3RhbmNlIGZvciB3aGljaCBhIHdoaXRlbGlzdCBpcyBjb25maWd1cmVkLiBWYWxpZFxuICAgICAqIHZhbHVlczogUmVnaXN0cnkgYW5kIENoYXJ0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZHVsZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uSWQ6IFJlZ2lvbiBJRCBvZiBpbnN0YW5jZS4gRGVmYXVsdCBpcyBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudHJ5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVudHJ5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbnRyeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbnRyeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZHVsZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9kdWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5kcG9pbnRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuZHBvaW50VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6SW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6SW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRW50cnk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW50cnkpLFxuICAgICAgSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICAgIENvbW1lbnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tbWVudCksXG4gICAgICBFbmRwb2ludFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5kcG9pbnRUeXBlKSxcbiAgICAgIE1vZHVsZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW9kdWxlTmFtZSksXG4gICAgICBSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWdpb25JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q1I6Okluc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHdoaXRlbGlzdCBmb3IgdGhlIGFjY2VzcyBwb3J0IG9mIGEgcHVibGljLWZhY2luZyBpbnN0YW5jZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItaW5zdGFuY2VlbmRwb2ludGFjbHBvbGljeVxuICovXG5leHBvcnQgY2xhc3MgUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q1I6Okluc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRW50cnk6IFRoZSBJUCBhZGRyZXNzIHJhbmdlIHRoYXQgaXMgYWxsb3dlZCB0byBhY2Nlc3MgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW50cnk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVudHJ5OiBUaGUgSVAgYWRkcmVzcyByYW5nZSB0aGF0IGlzIGFsbG93ZWQgdG8gYWNjZXNzIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW50cnk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWVudDogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBlbnRyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29tbWVudDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuZHBvaW50VHlwZTogVGhlIHR5cGUgb2YgdGhlIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmRwb2ludFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb2R1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbW9kdWxlIGluIHRoZSBpbnN0YW5jZSBmb3Igd2hpY2ggYSB3aGl0ZWxpc3QgaXMgY29uZmlndXJlZC4gVmFsaWRcbiAgICAgKiB2YWx1ZXM6IFJlZ2lzdHJ5IGFuZCBDaGFydC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9kdWxlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBSZWdpb24gSUQgb2YgaW5zdGFuY2UuIERlZmF1bHQgaXMgY3VycmVudCByZWdpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRW50cnkgPSB0aGlzLmdldEF0dCgnRW50cnknKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmVudHJ5ID0gcHJvcHMuZW50cnk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IHByb3BzLmluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuY29tbWVudCA9IHByb3BzLmNvbW1lbnQ7XG4gICAgICAgIHRoaXMuZW5kcG9pbnRUeXBlID0gcHJvcHMuZW5kcG9pbnRUeXBlO1xuICAgICAgICB0aGlzLm1vZHVsZU5hbWUgPSBwcm9wcy5tb2R1bGVOYW1lO1xuICAgICAgICB0aGlzLnJlZ2lvbklkID0gcHJvcHMucmVnaW9uSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW50cnk6IHRoaXMuZW50cnksXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBjb21tZW50OiB0aGlzLmNvbW1lbnQsXG4gICAgICAgICAgICBlbmRwb2ludFR5cGU6IHRoaXMuZW5kcG9pbnRUeXBlLFxuICAgICAgICAgICAgbW9kdWxlTmFtZTogdGhpcy5tb2R1bGVOYW1lLFxuICAgICAgICAgICAgcmVnaW9uSWQ6IHRoaXMucmVnaW9uSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLWluc3RhbmNldnBjZW5kcG9pbnRsaW5rZWR2cGNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHZwYy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZzd2l0Y2hJZDogVGhlIElEIG9mIHRoZSB2c3dpdGNoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZzd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dDogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBQcml2YXRlem9uZSByZWNvcmRzLiBcbiAgICAgKiBJZiB5b3UgZW5hYmxlIGF1dG9tYXRpYyBQcml2YXRlem9uZSByZWNvcmQgY3JlYXRpb24sIFByaXZhdGV6b25lIHJlY29yZHMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBWUEMgaW5zdGFuY2VzIGFyZSBhZGRlZC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKnRydWUqKjogQXV0b21hdGljYWxseSBjcmVhdGVzIGEgUHJpdmF0ZXpvbmUgcmVjb3JkLlxuICAgICAqIC0gKipmYWxzZSoqIChkZWZhdWx0KTogRG8gbm90IGF1dG9tYXRpY2FsbHkgY3JlYXRlIFByaXZhdGV6b25lIHJlY29yZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb2R1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbW9kdWxlIGluIHRoZSBpbnN0YW5jZSBmb3Igd2hpY2ggYSB3aGl0ZWxpc3QgaXMgY29uZmlndXJlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gKipSZWdpc3RyeSoqIChkZWZhdWx0KTogQWNjZXNzIHRoZSBpbWFnZSByZXBvc2l0b3J5LlxuICAgICAqIC0gKipDaGFydCoqOiBBY2Nlc3MgSGVsbSBDaGFydC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2R1bGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2R1bGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vZHVsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Zzd2l0Y2hJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52c3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Zzd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52c3dpdGNoSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6SW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6SW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICAgIFZwY0lkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0lkKSxcbiAgICAgIFZzd2l0Y2hJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52c3dpdGNoSWQpLFxuICAgICAgRW5hYmxlQ3JlYXRlRE5TUmVjb3JkSW5Qdnp0OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQpLFxuICAgICAgTW9kdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb2R1bGVOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDUjo6SW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY2AsIHdoaWNoIGlzIHVzZWQgdG8gYXNzb2NpYXRlIGEgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIHdpdGggYSBDb250YWluZXIgUmVnaXN0cnkgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEluc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLWluc3RhbmNldnBjZW5kcG9pbnRsaW5rZWR2cGNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNSOjpJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwY0lkOiBUaGUgSUQgb2YgdGhlIHZwYy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZzd2l0Y2hJZDogVGhlIElEIG9mIHRoZSB2c3dpdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnN3aXRjaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgdnBjLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZzd2l0Y2hJZDogVGhlIElEIG9mIHRoZSB2c3dpdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyB2c3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQ6IFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgUHJpdmF0ZXpvbmUgcmVjb3Jkcy4gXG4gICAgICogSWYgeW91IGVuYWJsZSBhdXRvbWF0aWMgUHJpdmF0ZXpvbmUgcmVjb3JkIGNyZWF0aW9uLCBQcml2YXRlem9uZSByZWNvcmRzIHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIHdoZW4gVlBDIGluc3RhbmNlcyBhcmUgYWRkZWQuXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gKip0cnVlKio6IEF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIFByaXZhdGV6b25lIHJlY29yZC5cbiAgICAgKiAtICoqZmFsc2UqKiAoZGVmYXVsdCk6IERvIG5vdCBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBQcml2YXRlem9uZSByZWNvcmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kdWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIG1vZHVsZSBpbiB0aGUgaW5zdGFuY2UgZm9yIHdoaWNoIGEgd2hpdGVsaXN0IGlzIGNvbmZpZ3VyZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtICoqUmVnaXN0cnkqKiAoZGVmYXVsdCk6IEFjY2VzcyB0aGUgaW1hZ2UgcmVwb3NpdG9yeS5cbiAgICAgKiAtICoqQ2hhcnQqKjogQWNjZXNzIEhlbG0gQ2hhcnQuXG4gICAgICovXG4gICAgcHVibGljIG1vZHVsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSB0aGlzLmdldEF0dCgnVnBjSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVnN3aXRjaElkID0gdGhpcy5nZXRBdHQoJ1Zzd2l0Y2hJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy52cGNJZCA9IHByb3BzLnZwY0lkO1xuICAgICAgICB0aGlzLnZzd2l0Y2hJZCA9IHByb3BzLnZzd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5lbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQgPSBwcm9wcy5lbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQ7XG4gICAgICAgIHRoaXMubW9kdWxlTmFtZSA9IHByb3BzLm1vZHVsZU5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgICAgICB2c3dpdGNoSWQ6IHRoaXMudnN3aXRjaElkLFxuICAgICAgICAgICAgZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0OiB0aGlzLmVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dCxcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IHRoaXMubW9kdWxlTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc05hbWVzcGFjZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci1uYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NOYW1lc3BhY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgbmFtZSBvZiB0aGUgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9DcmVhdGU6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGFuIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b0NyZWF0ZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVmYXVsdFZpc2liaWxpdHk6IFRoZSBkZWZhdWx0IHR5cGUgb2YgdGhlIHJlcG9zaXRvcnkgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQuIFZhbGlkIHZhbHVlczogUFVCTElDLCBQUklWQVRFLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZmF1bHRWaXNpYmlsaXR5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgZW50ZXJwcmlzZSBlZGl0aW9uIGluc3RhbmNlIHdoaWNoIG5hbWVzcGFjZSBiZWxvbmdzIHRvLiBJZiBub3QgcHJvdmlkZWQsIHdpbGwgdXNlIHBlcnNvbmFsIGVkaXRpb24gaW5zdGFuY2UgYXMgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc05hbWVzcGFjZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NOYW1lc3BhY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NOYW1lc3BhY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0b0NyZWF0ZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYXV0b0NyZWF0ZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVmYXVsdFZpc2liaWxpdHkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlZmF1bHRWaXNpYmlsaXR5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0VmlzaWJpbGl0eScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlZmF1bHRWaXNpYmlsaXR5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlBVQkxJQ1wiLFwiUFJJVkFURVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlZmF1bHRWaXNpYmlsaXR5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlZmF1bHRWaXNpYmlsaXR5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lc3BhY2UnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZXNwYWNlKSk7XG4gICAgaWYocHJvcGVydGllcy5uYW1lc3BhY2UgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5uYW1lc3BhY2UpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5uYW1lc3BhY2UpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lc3BhY2UnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmFtZXNwYWNlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogMzAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWVzcGFjZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lc3BhY2UpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTmFtZXNwYWNlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpOYW1lc3BhY2VgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hbWVzcGFjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6TmFtZXNwYWNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc05hbWVzcGFjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTmFtZXNwYWNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTmFtZXNwYWNlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWVzcGFjZSksXG4gICAgICBBdXRvQ3JlYXRlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvQ3JlYXRlKSxcbiAgICAgIERlZmF1bHRWaXNpYmlsaXR5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlZmF1bHRWaXNpYmlsaXR5KSxcbiAgICAgIEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q1I6Ok5hbWVzcGFjZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgbmFtZXNwYWNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBOYW1lc3BhY2VgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLW5hbWVzcGFjZVxuICovXG5leHBvcnQgY2xhc3MgUm9zTmFtZXNwYWNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDUjo6TmFtZXNwYWNlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgZW50ZXJwcmlzZSBlZGl0aW9uIGluc3RhbmNlIHdoaWNoIG5hbWVzcGFjZSBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOYW1lc3BhY2U6IFRoZSBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lc3BhY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZXNwYWNlSWQ6IFRoZSBuYW1lc3BhY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lc3BhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgbmFtZSBvZiB0aGUgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvQ3JlYXRlOiBTcGVjaWZpZXMgd2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhbiBpbWFnZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRvQ3JlYXRlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlZmF1bHRWaXNpYmlsaXR5OiBUaGUgZGVmYXVsdCB0eXBlIG9mIHRoZSByZXBvc2l0b3J5IHRoYXQgaXMgYXV0b21hdGljYWxseSBjcmVhdGVkLiBWYWxpZCB2YWx1ZXM6IFBVQkxJQywgUFJJVkFURS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVmYXVsdFZpc2liaWxpdHk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGVudGVycHJpc2UgZWRpdGlvbiBpbnN0YW5jZSB3aGljaCBuYW1lc3BhY2UgYmVsb25ncyB0by4gSWYgbm90IHByb3ZpZGVkLCB3aWxsIHVzZSBwZXJzb25hbCBlZGl0aW9uIGluc3RhbmNlIGFzIGRlZmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NOYW1lc3BhY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc05hbWVzcGFjZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWVzcGFjZSA9IHRoaXMuZ2V0QXR0KCdOYW1lc3BhY2UnKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZXNwYWNlSWQgPSB0aGlzLmdldEF0dCgnTmFtZXNwYWNlSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gcHJvcHMubmFtZXNwYWNlO1xuICAgICAgICB0aGlzLmF1dG9DcmVhdGUgPSBwcm9wcy5hdXRvQ3JlYXRlO1xuICAgICAgICB0aGlzLmRlZmF1bHRWaXNpYmlsaXR5ID0gcHJvcHMuZGVmYXVsdFZpc2liaWxpdHk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IHByb3BzLmluc3RhbmNlSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZSxcbiAgICAgICAgICAgIGF1dG9DcmVhdGU6IHRoaXMuYXV0b0NyZWF0ZSxcbiAgICAgICAgICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0aGlzLmRlZmF1bHRWaXNpYmlsaXR5LFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NOYW1lc3BhY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NSZXBvc2l0b3J5YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLXJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSZXBvc2l0b3J5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcG9OYW1lOiBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBvTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcG9OYW1lc3BhY2U6IFRoZSBuYW1lIG9mIHRoZSBuYW1lc3BhY2UgdG8gd2hpY2ggdGhlIHJlcG9zaXRvcnkgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBvTmFtZXNwYWNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb1R5cGU6IFRoZSB0eXBlIG9mIHRoZSByZXBvc2l0b3J5LiBWYWxpZCB2YWx1ZXM6IFBVQkxJQywgUFJJVkFURS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBvVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN1bW1hcnk6IFRoZSBzdW1tYXJ5IG9mIHRoZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN1bW1hcnk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXRhaWw6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXRhaWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBlbnRlcnByaXNlIGVkaXRpb24gaW5zdGFuY2Ugd2hpY2ggcmVwb3NpdG9yeSBiZWxvbmdzIHRvLiBJZiBub3QgcHJvdmlkZWQsIHdpbGwgdXNlIHBlcnNvbmFsIGVkaXRpb24gaW5zdGFuY2UgYXMgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcG9Tb3VyY2U6IENvZGUgU291cmNlIG1lc3NhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVwb1NvdXJjZT86IFJvc1JlcG9zaXRvcnkuUmVwb1NvdXJjZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ0ltbXV0YWJpbGl0eTogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHJlcG9zaXRvcnkgaXMgaW1tdXRhYmxlLiBPbmx5IHRha2VzIGVmZmVjdCB3aGVuIEluc3RhbmNlSWQgaXMgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ0ltbXV0YWJpbGl0eT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUmVwb3NpdG9yeVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXBvc2l0b3J5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUmVwb3NpdG9yeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnSW1tdXRhYmlsaXR5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy50YWdJbW11dGFiaWxpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcG9OYW1lc3BhY2UnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVwb05hbWVzcGFjZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVwb05hbWVzcGFjZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnJlcG9OYW1lc3BhY2UpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZXBvTmFtZXNwYWNlKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb05hbWVzcGFjZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXBvTmFtZXNwYWNlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogMzAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcG9OYW1lc3BhY2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwb05hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb1R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVwb1R5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlcG9UeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5yZXBvVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb1R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXBvVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJQVUJMSUNcIixcIlBSSVZBVEVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBvVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXBvTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVwb05hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZXBvTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlcG9OYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb05hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVwb05hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwb05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1bW1hcnknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3VtbWFyeSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3VtbWFyeSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnN1bW1hcnkpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zdW1tYXJ5KSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VtbWFyeScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdW1tYXJ5Lmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdW1tYXJ5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN1bW1hcnkpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRldGFpbCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRldGFpbCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRldGFpbCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RldGFpbCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXRhaWwubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RldGFpbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXRhaWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcG9Tb3VyY2UnLCBSb3NSZXBvc2l0b3J5X1JlcG9Tb3VyY2VQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZXBvU291cmNlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JlcG9zaXRvcnlQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6OlJlcG9zaXRvcnlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JlcG9zaXRvcnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6OlJlcG9zaXRvcnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVwb3NpdG9yeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUmVwb3NpdG9yeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFJlcG9OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcG9OYW1lKSxcbiAgICAgIFJlcG9OYW1lc3BhY2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwb05hbWVzcGFjZSksXG4gICAgICBSZXBvVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBvVHlwZSksXG4gICAgICBTdW1tYXJ5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1bW1hcnkpLFxuICAgICAgRGV0YWlsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRldGFpbCksXG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgUmVwb1NvdXJjZTogcm9zUmVwb3NpdG9yeVJlcG9Tb3VyY2VQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBvU291cmNlKSxcbiAgICAgIFRhZ0ltbXV0YWJpbGl0eTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFnSW1tdXRhYmlsaXR5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDUjo6UmVwb3NpdG9yeWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGltYWdlIHJlcG9zaXRvcnkuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFJlcG9zaXRvcnlgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLXJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1JlcG9zaXRvcnkgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNSOjpSZXBvc2l0b3J5XCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgZW50ZXJwcmlzZSBlZGl0aW9uIGluc3RhbmNlIHdoaWNoIHJlcG9zaXRvcnkgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVwb0lkOiBUaGUgcmVwb3NpdG9yeSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcG9JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXBvTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXBvTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXBvTmFtZXNwYWNlOiBUaGUgbmFtZSBvZiB0aGUgbmFtZXNwYWNlIHRvIHdoaWNoIHRoZSByZXBvc2l0b3J5IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXBvTmFtZXNwYWNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlcG9UeXBlOiBUaGUgdHlwZSBvZiB0aGUgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcG9UeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBvTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcHVibGljIHJlcG9OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb05hbWVzcGFjZTogVGhlIG5hbWUgb2YgdGhlIG5hbWVzcGFjZSB0byB3aGljaCB0aGUgcmVwb3NpdG9yeSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXBvTmFtZXNwYWNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb1R5cGU6IFRoZSB0eXBlIG9mIHRoZSByZXBvc2l0b3J5LiBWYWxpZCB2YWx1ZXM6IFBVQkxJQywgUFJJVkFURS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb1R5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdW1tYXJ5OiBUaGUgc3VtbWFyeSBvZiB0aGUgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3VtbWFyeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRldGFpbDogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXRhaWw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGVudGVycHJpc2UgZWRpdGlvbiBpbnN0YW5jZSB3aGljaCByZXBvc2l0b3J5IGJlbG9uZ3MgdG8uIElmIG5vdCBwcm92aWRlZCwgd2lsbCB1c2UgcGVyc29uYWwgZWRpdGlvbiBpbnN0YW5jZSBhcyBkZWZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb1NvdXJjZTogQ29kZSBTb3VyY2UgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb1NvdXJjZTogUm9zUmVwb3NpdG9yeS5SZXBvU291cmNlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnSW1tdXRhYmlsaXR5OiBTcGVjaWZpZXMgd2hldGhlciB0aGUgcmVwb3NpdG9yeSBpcyBpbW11dGFibGUuIE9ubHkgdGFrZXMgZWZmZWN0IHdoZW4gSW5zdGFuY2VJZCBpcyBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ0ltbXV0YWJpbGl0eTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSZXBvc2l0b3J5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSZXBvc2l0b3J5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVwb0lkID0gdGhpcy5nZXRBdHQoJ1JlcG9JZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZXBvTmFtZSA9IHRoaXMuZ2V0QXR0KCdSZXBvTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJSZXBvTmFtZXNwYWNlID0gdGhpcy5nZXRBdHQoJ1JlcG9OYW1lc3BhY2UnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVwb1R5cGUgPSB0aGlzLmdldEF0dCgnUmVwb1R5cGUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucmVwb05hbWUgPSBwcm9wcy5yZXBvTmFtZTtcbiAgICAgICAgdGhpcy5yZXBvTmFtZXNwYWNlID0gcHJvcHMucmVwb05hbWVzcGFjZTtcbiAgICAgICAgdGhpcy5yZXBvVHlwZSA9IHByb3BzLnJlcG9UeXBlO1xuICAgICAgICB0aGlzLnN1bW1hcnkgPSBwcm9wcy5zdW1tYXJ5O1xuICAgICAgICB0aGlzLmRldGFpbCA9IHByb3BzLmRldGFpbDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5yZXBvU291cmNlID0gcHJvcHMucmVwb1NvdXJjZTtcbiAgICAgICAgdGhpcy50YWdJbW11dGFiaWxpdHkgPSBwcm9wcy50YWdJbW11dGFiaWxpdHk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVwb05hbWU6IHRoaXMucmVwb05hbWUsXG4gICAgICAgICAgICByZXBvTmFtZXNwYWNlOiB0aGlzLnJlcG9OYW1lc3BhY2UsXG4gICAgICAgICAgICByZXBvVHlwZTogdGhpcy5yZXBvVHlwZSxcbiAgICAgICAgICAgIHN1bW1hcnk6IHRoaXMuc3VtbWFyeSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpcy5kZXRhaWwsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICByZXBvU291cmNlOiB0aGlzLnJlcG9Tb3VyY2UsXG4gICAgICAgICAgICB0YWdJbW11dGFiaWxpdHk6IHRoaXMudGFnSW1tdXRhYmlsaXR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSZXBvc2l0b3J5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUmVwb3NpdG9yeSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb1NvdXJjZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpc0F1dG9CdWlsZDogV2hldGhlciB0byBlbmFibGUgYXV0b21hdGljIGNvbnN0cnVjdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaXNBdXRvQnVpbGQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc291cmNlUmVwb05hbWU6IFNvdXJjZSBjb2RlIHdhcmVob3VzZSBuYW1lXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3VyY2VSZXBvTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNvdXJjZVJlcG9OYW1lc3BhY2U6IFNvdXJjZSBjb2RlIHJlcG9zaXRvcnkgbmFtZXNwYWNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3VyY2VSZXBvTmFtZXNwYWNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXNPdmVyc2VhOiBXaGV0aGVyIHRvIGVuYWJsZSBvdmVyc2VhcyBjb25zdHJ1Y3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlzT3ZlcnNlYTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VSZXBvVHlwZTogY29kZSBzb3VyY2UgdHlwZS4gQWxsb3cgdmFsdWVzOiBcbiAgICAgKiBDT0RFLCBHSVRIVUIsIEdJVExBQiwgQklUQlVDS0VULiBFbnRlcnByaXNlIEVkaXRpb24gYWRkaXRpb25hbCBzdXBwb3J0IENPREVVUCBhbmQgR0lURUVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvdXJjZVJlcG9UeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXNEaXNhYmxlQ2FjaGU6IFdoZXRoZXIgdG8gZGlzYWJsZSBDYWNoZSBhdCBidWlsZCB0aW1lXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpc0Rpc2FibGVDYWNoZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlcG9Tb3VyY2VQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVwb1NvdXJjZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1JlcG9zaXRvcnlfUmVwb1NvdXJjZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNBdXRvQnVpbGQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaXNBdXRvQnVpbGQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzQXV0b0J1aWxkJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pc0F1dG9CdWlsZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUmVwb05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc291cmNlUmVwb05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVJlcG9OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZVJlcG9OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VSZXBvTmFtZXNwYWNlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNvdXJjZVJlcG9OYW1lc3BhY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVJlcG9OYW1lc3BhY2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlUmVwb05hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNPdmVyc2VhJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmlzT3ZlcnNlYSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNPdmVyc2VhJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pc092ZXJzZWEpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVJlcG9UeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNvdXJjZVJlcG9UeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5zb3VyY2VSZXBvVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc291cmNlUmVwb1R5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVJlcG9UeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc291cmNlUmVwb1R5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQ09ERVwiLFwiR0lUSFVCXCIsXCJHSVRMQUJcIixcIkJJVEJVQ0tFVFwiLFwiQ09ERVVQXCIsXCJHSVRFRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVJlcG9UeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZVJlcG9UeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc0Rpc2FibGVDYWNoZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pc0Rpc2FibGVDYWNoZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNEaXNhYmxlQ2FjaGUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzRGlzYWJsZUNhY2hlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlcG9Tb3VyY2VQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6OlJlcG9zaXRvcnkuUmVwb1NvdXJjZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVwb1NvdXJjZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6UmVwb3NpdG9yeS5SZXBvU291cmNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JlcG9zaXRvcnlSZXBvU291cmNlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1JlcG9zaXRvcnlfUmVwb1NvdXJjZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgSXNBdXRvQnVpbGQ6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzQXV0b0J1aWxkKSxcbiAgICAgIFNvdXJjZVJlcG9OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZVJlcG9OYW1lKSxcbiAgICAgIFNvdXJjZVJlcG9OYW1lc3BhY2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlUmVwb05hbWVzcGFjZSksXG4gICAgICBJc092ZXJzZWE6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzT3ZlcnNlYSksXG4gICAgICBTb3VyY2VSZXBvVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VSZXBvVHlwZSksXG4gICAgICBJc0Rpc2FibGVDYWNoZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNEaXNhYmxlQ2FjaGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVXNlckluZm9gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItdXNlcmluZm9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NVc2VySW5mb1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyOiBVc2VyIGluZm8uIElmIHVzZXIgZXhpc3RzLCB3aWxsIHVwZGF0ZSB1c2VyIGluZm8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlcjogUm9zVXNlckluZm8uVXNlclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1VzZXJJbmZvUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJJbmZvUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVXNlckluZm9Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudXNlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlcicsIFJvc1VzZXJJbmZvX1VzZXJQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy51c2VyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJJbmZvUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpVc2VySW5mb2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckluZm9Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6OlVzZXJJbmZvYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJJbmZvUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NVc2VySW5mb1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFVzZXI6IHJvc1VzZXJJbmZvVXNlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXIpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNSOjpVc2VySW5mb2AsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhIHVzZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFVzZXJJbmZvYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci11c2VyaW5mb1xuICovXG5leHBvcnQgY2xhc3MgUm9zVXNlckluZm8gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNSOjpVc2VySW5mb1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2dpbk5hbWU6IExvZ2luIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dpbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXNlcklkOiBVc2VyIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXNlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyOiBVc2VyIGluZm8uIElmIHVzZXIgZXhpc3RzLCB3aWxsIHVwZGF0ZSB1c2VyIGluZm8uXG4gICAgICovXG4gICAgcHVibGljIHVzZXI6IFJvc1VzZXJJbmZvLlVzZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NVc2VySW5mb1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlckluZm8uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckxvZ2luTmFtZSA9IHRoaXMuZ2V0QXR0KCdMb2dpbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcklkID0gdGhpcy5nZXRBdHQoJ1VzZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy51c2VyID0gcHJvcHMudXNlcjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1VzZXJJbmZvUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVXNlckluZm8ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzc3dvcmQ6IFBhc3N3b3JkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzc3dvcmQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFVzZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVXNlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJJbmZvX1VzZXJQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhc3N3b3JkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzd29yZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXNzd29yZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJVc2VyUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpVc2VySW5mby5Vc2VyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBVc2VyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpVc2VySW5mby5Vc2VyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJJbmZvVXNlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NVc2VySW5mb19Vc2VyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXNzd29yZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzd29yZCksXG4gICAgfTtcbn1cbiJdfQ==