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
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
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
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
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
        this.instanceId = props.instanceId;
    }
    get rosProperties() {
        return {
            user: this.user,
            instanceId: this.instanceId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3IuZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3IuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUF3RDlDOzs7Ozs7R0FNRztBQUNILFNBQVMseUJBQXlCLENBQUMsVUFBZTtJQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNqSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsSUFBRyxVQUFVLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMvRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFlBQVk7WUFDN0IsR0FBRyxFQUFFLG1DQUFtQztTQUN6QyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMs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QUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsb0NBQW9DLENBQUMsVUFBZTtJQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsaUNBQWlDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUQsT0FBTztRQUNMLFFBQVEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztLQUN2RCxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zSW5zdGFuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbWFnZVNjYW5uZXI6IFNlY3VyaXR5IHNjYW4gZW5naW5lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlU2Nhbm5lcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTmFtZTogSW5zdGFuY2UgbmFtZS5UaGUgdmFsdWUgY29udGFpbnMgMyB0byAzMCBsb3dlcmNhc2UgbGV0dGVycywgZGlnaXRzLCBhbmQgZGVsaW1pdGVycyBcIi1cIihpdCBjYW4gbm90IGJlIGZpcnN0IG9yIGxhc3QpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlVHlwZTogVGhlIFZhbHVlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIEdyb3VwIDEgYXR0cmlidXRlIG9mIENvbnRhaW5lciBNaXJyb3IgU2VydmljZSBFbnRlcnByaXNlIEVkaXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCYXNpYzogQmFzaWMgaW5zdGFuY2VcbiAgICAgKiBTdGFuZGFyZDogU3RhbmRhcmQgaW5zdGFuY2VcbiAgICAgKiBBZHZhbmNlZDogQWR2YW5jZWQgRWRpdGlvbiBJbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgY3ljbGUuIFRoZSB1bml0IGlzIE1vbnRobHksIHBsZWFzZSBlbnRlciBhbiBpbnRlZ2VyIG11bHRpcGxlIG9mIDEyIGZvciBhbm51YWwgcGFpZCBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVN0b3JhZ2VOYW1lOiBDdXN0b20gT1NTIEJ1Y2tldCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlU3RvcmFnZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVuZXdhbFN0YXR1czogQXV0b21hdGljIHJlbmV3YWwgc3RhdHVzLCB2YWx1ZTpcbiAgICAgKiAtIEF1dG9SZW5ld2FsOiBhdXRvbWF0aWMgcmVuZXdhbC5cbiAgICAgKiAtIE1hbnVhbFJlbmV3YWw6IG1hbnVhbCByZW5ld2FsLlxuICAgICAqIERlZmF1bHQgTWFudWFsUmVuZXdhbC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW5ld2FsU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbmV3UGVyaW9kOiBBdXRvbWF0aWMgcmVuZXdhbCBjeWNsZSwgaW4gbW9udGhzLlxuICAgICAqIFdoZW4gUmVuZXdhbFN0YXR1cyBpcyBzZXQgdG8gQXV0b1JlbmV3YWwsIGl0IG11c3QgYmUgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJbnN0YW5jZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VTdG9yYWdlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZVN0b3JhZ2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICByZWc6IC9eW2EtejAtOV1bYS16MC05LV17MSwyOH1bYS16MC05XSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbWFnZVNjYW5uZXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW1hZ2VTY2FubmVyKSk7XG4gICAgaWYocHJvcGVydGllcy5pbWFnZVNjYW5uZXIgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmltYWdlU2Nhbm5lcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW1hZ2VTY2FubmVyJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW1hZ2VTY2FubmVyLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFDUlwiLFwiU0FTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW1hZ2VTY2FubmVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmltYWdlU2Nhbm5lcikpO1xuICAgIGlmKHByb3BlcnRpZXMucmVuZXdhbFN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVuZXdhbFN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVuZXdhbFN0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlbmV3YWxTdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQXV0b1JlbmV3YWxcIixcIk1hbnVhbFJlbmV3YWxcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW5ld2FsU3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlbmV3YWxTdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbmV3UGVyaW9kJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJlbmV3UGVyaW9kKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2QnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGVyaW9kKSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2QgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcmlvZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFsxLDIsMyw2LDEyLDI0LDM2LDQ4LDYwXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZVR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQmFzaWNcIixcIlN0YW5kYXJkXCIsXCJBZHZhbmNlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZVR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSW5zdGFuY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6Okluc3RhbmNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6SW5zdGFuY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5zdGFuY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0luc3RhbmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSW1hZ2VTY2FubmVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmltYWdlU2Nhbm5lciksXG4gICAgICBJbnN0YW5jZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSxcbiAgICAgIEluc3RhbmNlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZVR5cGUpLFxuICAgICAgUGVyaW9kOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZCksXG4gICAgICBJbnN0YW5jZVN0b3JhZ2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlU3RvcmFnZU5hbWUpLFxuICAgICAgUmVuZXdhbFN0YXR1czogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZW5ld2FsU3RhdHVzKSxcbiAgICAgIFJlbmV3UGVyaW9kOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlbmV3UGVyaW9kKSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNSOjpJbnN0YW5jZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgQ29udGFpbmVyIFJlZ2lzdHJ5IEVudGVycHJpc2UgRWRpdGlvbiBpbnN0YW5jZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgSW5zdGFuY2VgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NJbnN0YW5jZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q1I6Okluc3RhbmNlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0ZVRpbWU6IFRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIGZpcnN0IElEIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VOYW1lOiBJbnN0YW5jZU5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VTcGVjaWZpY2F0aW9uOiBJbnN0YW5jZVNwZWNpZmljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZVNwZWNpZmljYXRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTW9kaWZpZWRUaW1lOiBMYXN0IG1vZGlmaWNhdGlvbiB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTW9kaWZpZWRUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW1hZ2VTY2FubmVyOiBTZWN1cml0eSBzY2FuIGVuZ2luZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW1hZ2VTY2FubmVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBJbnN0YW5jZSBuYW1lLlRoZSB2YWx1ZSBjb250YWlucyAzIHRvIDMwIGxvd2VyY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBkZWxpbWl0ZXJzIFwiLVwiKGl0IGNhbiBub3QgYmUgZmlyc3Qgb3IgbGFzdCkuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlVHlwZTogVGhlIFZhbHVlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIEdyb3VwIDEgYXR0cmlidXRlIG9mIENvbnRhaW5lciBNaXJyb3IgU2VydmljZSBFbnRlcnByaXNlIEVkaXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCYXNpYzogQmFzaWMgaW5zdGFuY2VcbiAgICAgKiBTdGFuZGFyZDogU3RhbmRhcmQgaW5zdGFuY2VcbiAgICAgKiBBZHZhbmNlZDogQWR2YW5jZWQgRWRpdGlvbiBJbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIGN5Y2xlLiBUaGUgdW5pdCBpcyBNb250aGx5LCBwbGVhc2UgZW50ZXIgYW4gaW50ZWdlciBtdWx0aXBsZSBvZiAxMiBmb3IgYW5udWFsIHBhaWQgcHJvZHVjdHMuXG4gICAgICovXG4gICAgcHVibGljIHBlcmlvZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlU3RvcmFnZU5hbWU6IEN1c3RvbSBPU1MgQnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlU3RvcmFnZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW5ld2FsU3RhdHVzOiBBdXRvbWF0aWMgcmVuZXdhbCBzdGF0dXMsIHZhbHVlOlxuICAgICAqIC0gQXV0b1JlbmV3YWw6IGF1dG9tYXRpYyByZW5ld2FsLlxuICAgICAqIC0gTWFudWFsUmVuZXdhbDogbWFudWFsIHJlbmV3YWwuXG4gICAgICogRGVmYXVsdCBNYW51YWxSZW5ld2FsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZW5ld2FsU3RhdHVzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVuZXdQZXJpb2Q6IEF1dG9tYXRpYyByZW5ld2FsIGN5Y2xlLCBpbiBtb250aHMuXG4gICAgICogV2hlbiBSZW5ld2FsU3RhdHVzIGlzIHNldCB0byBBdXRvUmVuZXdhbCwgaXQgbXVzdCBiZSBzZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlbmV3UGVyaW9kOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zSW5zdGFuY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnQ3JlYXRlVGltZScpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VOYW1lID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZVNwZWNpZmljYXRpb24gPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VTcGVjaWZpY2F0aW9uJyk7XG4gICAgICAgIHRoaXMuYXR0ck1vZGlmaWVkVGltZSA9IHRoaXMuZ2V0QXR0KCdNb2RpZmllZFRpbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VHcm91cElkID0gdGhpcy5nZXRBdHQoJ1Jlc291cmNlR3JvdXBJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pbWFnZVNjYW5uZXIgPSBwcm9wcy5pbWFnZVNjYW5uZXI7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VOYW1lID0gcHJvcHMuaW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLmluc3RhbmNlVHlwZSA9IHByb3BzLmluc3RhbmNlVHlwZTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwcm9wcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VTdG9yYWdlTmFtZSA9IHByb3BzLmluc3RhbmNlU3RvcmFnZU5hbWU7XG4gICAgICAgIHRoaXMucmVuZXdhbFN0YXR1cyA9IHByb3BzLnJlbmV3YWxTdGF0dXM7XG4gICAgICAgIHRoaXMucmVuZXdQZXJpb2QgPSBwcm9wcy5yZW5ld1BlcmlvZDtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW1hZ2VTY2FubmVyOiB0aGlzLmltYWdlU2Nhbm5lcixcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogdGhpcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHRoaXMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZCxcbiAgICAgICAgICAgIGluc3RhbmNlU3RvcmFnZU5hbWU6IHRoaXMuaW5zdGFuY2VTdG9yYWdlTmFtZSxcbiAgICAgICAgICAgIHJlbmV3YWxTdGF0dXM6IHRoaXMucmVuZXdhbFN0YXR1cyxcbiAgICAgICAgICAgIHJlbmV3UGVyaW9kOiB0aGlzLnJlbmV3UGVyaW9kLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSW5zdGFuY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLWluc3RhbmNlZW5kcG9pbnRhY2xwb2xpY3lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVudHJ5OiBUaGUgSVAgYWRkcmVzcyByYW5nZSB0aGF0IGlzIGFsbG93ZWQgdG8gYWNjZXNzIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbnRyeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1lbnQ6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZW50cnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbWVudD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmRwb2ludFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmRwb2ludFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kdWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIG1vZHVsZSBpbiB0aGUgaW5zdGFuY2UgZm9yIHdoaWNoIGEgd2hpdGVsaXN0IGlzIGNvbmZpZ3VyZWQuIFZhbGlkXG4gICAgICogdmFsdWVzOiBSZWdpc3RyeSBhbmQgQ2hhcnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kdWxlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWdpb25JZDogUmVnaW9uIElEIG9mIGluc3RhbmNlLiBEZWZhdWx0IGlzIGN1cnJlbnQgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1lbnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29tbWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW50cnknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW50cnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudHJ5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVudHJ5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kdWxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tb2R1bGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmRwb2ludFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW5kcG9pbnRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb25JZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBFbnRyeTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbnRyeSksXG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgQ29tbWVudDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb21tZW50KSxcbiAgICAgIEVuZHBvaW50VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmRwb2ludFR5cGUpLFxuICAgICAgTW9kdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb2R1bGVOYW1lKSxcbiAgICAgIFJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvbklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDUjo6SW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgd2hpdGVsaXN0IGZvciB0aGUgYWNjZXNzIHBvcnQgb2YgYSBwdWJsaWMtZmFjaW5nIGluc3RhbmNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci1pbnN0YW5jZWVuZHBvaW50YWNscG9saWN5XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDUjo6SW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFbnRyeTogVGhlIElQIGFkZHJlc3MgcmFuZ2UgdGhhdCBpcyBhbGxvd2VkIHRvIGFjY2VzcyB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbnRyeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW50cnk6IFRoZSBJUCBhZGRyZXNzIHJhbmdlIHRoYXQgaXMgYWxsb3dlZCB0byBhY2Nlc3MgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbnRyeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21tZW50OiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGVudHJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb21tZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5kcG9pbnRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIGVuZHBvaW50VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZHVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgaW4gdGhlIGluc3RhbmNlIGZvciB3aGljaCBhIHdoaXRlbGlzdCBpcyBjb25maWd1cmVkLiBWYWxpZFxuICAgICAqIHZhbHVlczogUmVnaXN0cnkgYW5kIENoYXJ0LlxuICAgICAqL1xuICAgIHB1YmxpYyBtb2R1bGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uSWQ6IFJlZ2lvbiBJRCBvZiBpbnN0YW5jZS4gRGVmYXVsdCBpcyBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJFbnRyeSA9IHRoaXMuZ2V0QXR0KCdFbnRyeScpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZW50cnkgPSBwcm9wcy5lbnRyeTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gcHJvcHMuY29tbWVudDtcbiAgICAgICAgdGhpcy5lbmRwb2ludFR5cGUgPSBwcm9wcy5lbmRwb2ludFR5cGU7XG4gICAgICAgIHRoaXMubW9kdWxlTmFtZSA9IHByb3BzLm1vZHVsZU5hbWU7XG4gICAgICAgIHRoaXMucmVnaW9uSWQgPSBwcm9wcy5yZWdpb25JZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRyeTogdGhpcy5lbnRyeSxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMuY29tbWVudCxcbiAgICAgICAgICAgIGVuZHBvaW50VHlwZTogdGhpcy5lbmRwb2ludFR5cGUsXG4gICAgICAgICAgICBtb2R1bGVOYW1lOiB0aGlzLm1vZHVsZU5hbWUsXG4gICAgICAgICAgICByZWdpb25JZDogdGhpcy5yZWdpb25JZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItaW5zdGFuY2V2cGNlbmRwb2ludGxpbmtlZHZwY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgdnBjLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIHZzd2l0Y2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnN3aXRjaElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0OiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgY3JlYXRlIFByaXZhdGV6b25lIHJlY29yZHMuIFxuICAgICAqIElmIHlvdSBlbmFibGUgYXV0b21hdGljIFByaXZhdGV6b25lIHJlY29yZCBjcmVhdGlvbiwgUHJpdmF0ZXpvbmUgcmVjb3JkcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY3JlYXRlZCB3aGVuIFZQQyBpbnN0YW5jZXMgYXJlIGFkZGVkLlxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtICoqdHJ1ZSoqOiBBdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBQcml2YXRlem9uZSByZWNvcmQuXG4gICAgICogLSAqKmZhbHNlKiogKGRlZmF1bHQpOiBEbyBub3QgYXV0b21hdGljYWxseSBjcmVhdGUgUHJpdmF0ZXpvbmUgcmVjb3Jkcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZHVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgaW4gdGhlIGluc3RhbmNlIGZvciB3aGljaCBhIHdoaXRlbGlzdCBpcyBjb25maWd1cmVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKlJlZ2lzdHJ5KiogKGRlZmF1bHQpOiBBY2Nlc3MgdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICogLSAqKkNoYXJ0Kio6IEFjY2VzcyBIZWxtIENoYXJ0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZHVsZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZHVsZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9kdWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnN3aXRjaElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZzd2l0Y2hJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnN3aXRjaElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZzd2l0Y2hJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgVnN3aXRjaElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZzd2l0Y2hJZCksXG4gICAgICBFbmFibGVDcmVhdGVETlNSZWNvcmRJblB2enQ6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dCksXG4gICAgICBNb2R1bGVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vZHVsZU5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNSOjpJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjYCwgd2hpY2ggaXMgdXNlZCB0byBhc3NvY2lhdGUgYSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgd2l0aCBhIENvbnRhaW5lciBSZWdpc3RyeSBpbnN0YW5jZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItaW5zdGFuY2V2cGNlbmRwb2ludGxpbmtlZHZwY1xuICovXG5leHBvcnQgY2xhc3MgUm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwYyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q1I6Okluc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSBJRCBvZiB0aGUgdnBjLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIHZzd2l0Y2guXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWc3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSB2cGMuXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIHZzd2l0Y2guXG4gICAgICovXG4gICAgcHVibGljIHZzd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dDogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBQcml2YXRlem9uZSByZWNvcmRzLiBcbiAgICAgKiBJZiB5b3UgZW5hYmxlIGF1dG9tYXRpYyBQcml2YXRlem9uZSByZWNvcmQgY3JlYXRpb24sIFByaXZhdGV6b25lIHJlY29yZHMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBWUEMgaW5zdGFuY2VzIGFyZSBhZGRlZC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKnRydWUqKjogQXV0b21hdGljYWxseSBjcmVhdGVzIGEgUHJpdmF0ZXpvbmUgcmVjb3JkLlxuICAgICAqIC0gKipmYWxzZSoqIChkZWZhdWx0KTogRG8gbm90IGF1dG9tYXRpY2FsbHkgY3JlYXRlIFByaXZhdGV6b25lIHJlY29yZHMuXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb2R1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbW9kdWxlIGluIHRoZSBpbnN0YW5jZSBmb3Igd2hpY2ggYSB3aGl0ZWxpc3QgaXMgY29uZmlndXJlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gKipSZWdpc3RyeSoqIChkZWZhdWx0KTogQWNjZXNzIHRoZSBpbWFnZSByZXBvc2l0b3J5LlxuICAgICAqIC0gKipDaGFydCoqOiBBY2Nlc3MgSGVsbSBDaGFydC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9kdWxlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHRoaXMuZ2V0QXR0KCdWcGNJZCcpO1xuICAgICAgICB0aGlzLmF0dHJWc3dpdGNoSWQgPSB0aGlzLmdldEF0dCgnVnN3aXRjaElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmluc3RhbmNlSWQgPSBwcm9wcy5pbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgICAgIHRoaXMudnN3aXRjaElkID0gcHJvcHMudnN3aXRjaElkO1xuICAgICAgICB0aGlzLmVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dCA9IHByb3BzLmVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dDtcbiAgICAgICAgdGhpcy5tb2R1bGVOYW1lID0gcHJvcHMubW9kdWxlTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICB2cGNJZDogdGhpcy52cGNJZCxcbiAgICAgICAgICAgIHZzd2l0Y2hJZDogdGhpcy52c3dpdGNoSWQsXG4gICAgICAgICAgICBlbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQ6IHRoaXMuZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0LFxuICAgICAgICAgICAgbW9kdWxlTmFtZTogdGhpcy5tb2R1bGVOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zTmFtZXNwYWNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNyLW5hbWVzcGFjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc05hbWVzcGFjZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2U6IFRoZSBuYW1lIG9mIHRoZSBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b0NyZWF0ZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgYW4gaW1hZ2UgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvQ3JlYXRlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWZhdWx0VmlzaWJpbGl0eTogVGhlIGRlZmF1bHQgdHlwZSBvZiB0aGUgcmVwb3NpdG9yeSB0aGF0IGlzIGF1dG9tYXRpY2FsbHkgY3JlYXRlZC4gVmFsaWQgdmFsdWVzOiBQVUJMSUMsIFBSSVZBVEUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVmYXVsdFZpc2liaWxpdHk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBlbnRlcnByaXNlIGVkaXRpb24gaW5zdGFuY2Ugd2hpY2ggbmFtZXNwYWNlIGJlbG9uZ3MgdG8uIElmIG5vdCBwcm92aWRlZCwgd2lsbCB1c2UgcGVyc29uYWwgZWRpdGlvbiBpbnN0YW5jZSBhcyBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTmFtZXNwYWNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hbWVzcGFjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc05hbWVzcGFjZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvQ3JlYXRlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hdXRvQ3JlYXRlKSk7XG4gICAgaWYocHJvcGVydGllcy5kZWZhdWx0VmlzaWJpbGl0eSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVmYXVsdFZpc2liaWxpdHkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlZmF1bHRWaXNpYmlsaXR5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVmYXVsdFZpc2liaWxpdHksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUFVCTElDXCIsXCJQUklWQVRFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVmYXVsdFZpc2liaWxpdHknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVmYXVsdFZpc2liaWxpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWVzcGFjZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lc3BhY2UpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5hbWVzcGFjZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm5hbWVzcGFjZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWVzcGFjZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uYW1lc3BhY2UubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiAzMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NOYW1lc3BhY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6Ok5hbWVzcGFjZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmFtZXNwYWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpOYW1lc3BhY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTmFtZXNwYWNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NOYW1lc3BhY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBOYW1lc3BhY2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZXNwYWNlKSxcbiAgICAgIEF1dG9DcmVhdGU6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmF1dG9DcmVhdGUpLFxuICAgICAgRGVmYXVsdFZpc2liaWxpdHk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVmYXVsdFZpc2liaWxpdHkpLFxuICAgICAgSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDUjo6TmFtZXNwYWNlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBuYW1lc3BhY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYE5hbWVzcGFjZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NOYW1lc3BhY2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNSOjpOYW1lc3BhY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBlbnRlcnByaXNlIGVkaXRpb24gaW5zdGFuY2Ugd2hpY2ggbmFtZXNwYWNlIGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWVzcGFjZTogVGhlIG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOYW1lc3BhY2VJZDogVGhlIG5hbWVzcGFjZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2U6IFRoZSBuYW1lIG9mIHRoZSBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgcHVibGljIG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9DcmVhdGU6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGFuIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcHVibGljIGF1dG9DcmVhdGU6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVmYXVsdFZpc2liaWxpdHk6IFRoZSBkZWZhdWx0IHR5cGUgb2YgdGhlIHJlcG9zaXRvcnkgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQuIFZhbGlkIHZhbHVlczogUFVCTElDLCBQUklWQVRFLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWZhdWx0VmlzaWJpbGl0eTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgZW50ZXJwcmlzZSBlZGl0aW9uIGluc3RhbmNlIHdoaWNoIG5hbWVzcGFjZSBiZWxvbmdzIHRvLiBJZiBub3QgcHJvdmlkZWQsIHdpbGwgdXNlIHBlcnNvbmFsIGVkaXRpb24gaW5zdGFuY2UgYXMgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc05hbWVzcGFjZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTmFtZXNwYWNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZXNwYWNlID0gdGhpcy5nZXRBdHQoJ05hbWVzcGFjZScpO1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2VJZCA9IHRoaXMuZ2V0QXR0KCdOYW1lc3BhY2VJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBwcm9wcy5uYW1lc3BhY2U7XG4gICAgICAgIHRoaXMuYXV0b0NyZWF0ZSA9IHByb3BzLmF1dG9DcmVhdGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZpc2liaWxpdHkgPSBwcm9wcy5kZWZhdWx0VmlzaWJpbGl0eTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlLFxuICAgICAgICAgICAgYXV0b0NyZWF0ZTogdGhpcy5hdXRvQ3JlYXRlLFxuICAgICAgICAgICAgZGVmYXVsdFZpc2liaWxpdHk6IHRoaXMuZGVmYXVsdFZpc2liaWxpdHksXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc05hbWVzcGFjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1JlcG9zaXRvcnlgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItcmVwb3NpdG9yeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1JlcG9zaXRvcnlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb05hbWU6IFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb05hbWVzcGFjZTogVGhlIG5hbWUgb2YgdGhlIG5hbWVzcGFjZSB0byB3aGljaCB0aGUgcmVwb3NpdG9yeSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9OYW1lc3BhY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBvVHlwZTogVGhlIHR5cGUgb2YgdGhlIHJlcG9zaXRvcnkuIFZhbGlkIHZhbHVlczogUFVCTElDLCBQUklWQVRFLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9UeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3VtbWFyeTogVGhlIHN1bW1hcnkgb2YgdGhlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3VtbWFyeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRldGFpbDogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRldGFpbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGVudGVycHJpc2UgZWRpdGlvbiBpbnN0YW5jZSB3aGljaCByZXBvc2l0b3J5IGJlbG9uZ3MgdG8uIElmIG5vdCBwcm92aWRlZCwgd2lsbCB1c2UgcGVyc29uYWwgZWRpdGlvbiBpbnN0YW5jZSBhcyBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb1NvdXJjZTogQ29kZSBTb3VyY2UgbWVzc2FnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBvU291cmNlPzogUm9zUmVwb3NpdG9yeS5SZXBvU291cmNlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnSW1tdXRhYmlsaXR5OiBTcGVjaWZpZXMgd2hldGhlciB0aGUgcmVwb3NpdG9yeSBpcyBpbW11dGFibGUuIE9ubHkgdGFrZXMgZWZmZWN0IHdoZW4gSW5zdGFuY2VJZCBpcyBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFnSW1tdXRhYmlsaXR5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NSZXBvc2l0b3J5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JlcG9zaXRvcnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSZXBvc2l0b3J5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdJbW11dGFiaWxpdHknLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnRhZ0ltbXV0YWJpbGl0eSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb05hbWVzcGFjZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXBvTmFtZXNwYWNlKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXBvTmFtZXNwYWNlICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucmVwb05hbWVzcGFjZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlcG9OYW1lc3BhY2UpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvTmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlcG9OYW1lc3BhY2UubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiAzMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb05hbWVzcGFjZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBvTmFtZXNwYWNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXBvVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVwb1R5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlcG9UeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlcG9UeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlBVQkxJQ1wiLFwiUFJJVkFURVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcG9UeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlcG9UeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcG9OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcG9OYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXBvTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnJlcG9OYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucmVwb05hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXBvTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBvTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VtbWFyeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdW1tYXJ5KSk7XG4gICAgaWYocHJvcGVydGllcy5zdW1tYXJ5ICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc3VtbWFyeSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1bW1hcnkpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdW1tYXJ5Jywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN1bW1hcnkubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1bW1hcnknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3VtbWFyeSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGV0YWlsICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGV0YWlsKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGV0YWlsKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV0YWlsJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRldGFpbC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV0YWlsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRldGFpbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwb1NvdXJjZScsIFJvc1JlcG9zaXRvcnlfUmVwb1NvdXJjZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcG9Tb3VyY2UpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUmVwb3NpdG9yeVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6UmVwb3NpdG9yeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmVwb3NpdG9yeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6UmVwb3NpdG9yeWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSZXBvc2l0b3J5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSZXBvc2l0b3J5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUmVwb05hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwb05hbWUpLFxuICAgICAgUmVwb05hbWVzcGFjZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBvTmFtZXNwYWNlKSxcbiAgICAgIFJlcG9UeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcG9UeXBlKSxcbiAgICAgIFN1bW1hcnk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VtbWFyeSksXG4gICAgICBEZXRhaWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGV0YWlsKSxcbiAgICAgIEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICBSZXBvU291cmNlOiByb3NSZXBvc2l0b3J5UmVwb1NvdXJjZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcG9Tb3VyY2UpLFxuICAgICAgVGFnSW1tdXRhYmlsaXR5OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YWdJbW11dGFiaWxpdHkpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNSOjpSZXBvc2l0b3J5YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gaW1hZ2UgcmVwb3NpdG9yeS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgUmVwb3NpdG9yeWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItcmVwb3NpdG9yeVxuICovXG5leHBvcnQgY2xhc3MgUm9zUmVwb3NpdG9yeSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q1I6OlJlcG9zaXRvcnlcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBlbnRlcnByaXNlIGVkaXRpb24gaW5zdGFuY2Ugd2hpY2ggcmVwb3NpdG9yeSBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXBvSWQ6IFRoZSByZXBvc2l0b3J5IElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVwb0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlcG9OYW1lOiBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcG9OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlcG9OYW1lc3BhY2U6IFRoZSBuYW1lIG9mIHRoZSBuYW1lc3BhY2UgdG8gd2hpY2ggdGhlIHJlcG9zaXRvcnkgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcG9OYW1lc3BhY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVwb1R5cGU6IFRoZSB0eXBlIG9mIHRoZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVwb1R5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcG9OYW1lOiBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBvTmFtZXNwYWNlOiBUaGUgbmFtZSBvZiB0aGUgbmFtZXNwYWNlIHRvIHdoaWNoIHRoZSByZXBvc2l0b3J5IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlcG9OYW1lc3BhY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBvVHlwZTogVGhlIHR5cGUgb2YgdGhlIHJlcG9zaXRvcnkuIFZhbGlkIHZhbHVlczogUFVCTElDLCBQUklWQVRFLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXBvVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN1bW1hcnk6IFRoZSBzdW1tYXJ5IG9mIHRoZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdW1tYXJ5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGV0YWlsOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcHVibGljIGRldGFpbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgZW50ZXJwcmlzZSBlZGl0aW9uIGluc3RhbmNlIHdoaWNoIHJlcG9zaXRvcnkgYmVsb25ncyB0by4gSWYgbm90IHByb3ZpZGVkLCB3aWxsIHVzZSBwZXJzb25hbCBlZGl0aW9uIGluc3RhbmNlIGFzIGRlZmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBvU291cmNlOiBDb2RlIFNvdXJjZSBtZXNzYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXBvU291cmNlOiBSb3NSZXBvc2l0b3J5LlJlcG9Tb3VyY2VQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdJbW11dGFiaWxpdHk6IFNwZWNpZmllcyB3aGV0aGVyIHRoZSByZXBvc2l0b3J5IGlzIGltbXV0YWJsZS4gT25seSB0YWtlcyBlZmZlY3Qgd2hlbiBJbnN0YW5jZUlkIGlzIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnSW1tdXRhYmlsaXR5OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1JlcG9zaXRvcnlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1JlcG9zaXRvcnkuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZXBvSWQgPSB0aGlzLmdldEF0dCgnUmVwb0lkJyk7XG4gICAgICAgIHRoaXMuYXR0clJlcG9OYW1lID0gdGhpcy5nZXRBdHQoJ1JlcG9OYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clJlcG9OYW1lc3BhY2UgPSB0aGlzLmdldEF0dCgnUmVwb05hbWVzcGFjZScpO1xuICAgICAgICB0aGlzLmF0dHJSZXBvVHlwZSA9IHRoaXMuZ2V0QXR0KCdSZXBvVHlwZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5yZXBvTmFtZSA9IHByb3BzLnJlcG9OYW1lO1xuICAgICAgICB0aGlzLnJlcG9OYW1lc3BhY2UgPSBwcm9wcy5yZXBvTmFtZXNwYWNlO1xuICAgICAgICB0aGlzLnJlcG9UeXBlID0gcHJvcHMucmVwb1R5cGU7XG4gICAgICAgIHRoaXMuc3VtbWFyeSA9IHByb3BzLnN1bW1hcnk7XG4gICAgICAgIHRoaXMuZGV0YWlsID0gcHJvcHMuZGV0YWlsO1xuICAgICAgICB0aGlzLmluc3RhbmNlSWQgPSBwcm9wcy5pbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLnJlcG9Tb3VyY2UgPSBwcm9wcy5yZXBvU291cmNlO1xuICAgICAgICB0aGlzLnRhZ0ltbXV0YWJpbGl0eSA9IHByb3BzLnRhZ0ltbXV0YWJpbGl0eTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXBvTmFtZTogdGhpcy5yZXBvTmFtZSxcbiAgICAgICAgICAgIHJlcG9OYW1lc3BhY2U6IHRoaXMucmVwb05hbWVzcGFjZSxcbiAgICAgICAgICAgIHJlcG9UeXBlOiB0aGlzLnJlcG9UeXBlLFxuICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5zdW1tYXJ5LFxuICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmRldGFpbCxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHJlcG9Tb3VyY2U6IHRoaXMucmVwb1NvdXJjZSxcbiAgICAgICAgICAgIHRhZ0ltbXV0YWJpbGl0eTogdGhpcy50YWdJbW11dGFiaWxpdHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1JlcG9zaXRvcnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NSZXBvc2l0b3J5IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBvU291cmNlUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlzQXV0b0J1aWxkOiBXaGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgY29uc3RydWN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpc0F1dG9CdWlsZDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VSZXBvTmFtZTogU291cmNlIGNvZGUgd2FyZWhvdXNlIG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvdXJjZVJlcG9OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc291cmNlUmVwb05hbWVzcGFjZTogU291cmNlIGNvZGUgcmVwb3NpdG9yeSBuYW1lc3BhY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvdXJjZVJlcG9OYW1lc3BhY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpc092ZXJzZWE6IFdoZXRoZXIgdG8gZW5hYmxlIG92ZXJzZWFzIGNvbnN0cnVjdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaXNPdmVyc2VhOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNvdXJjZVJlcG9UeXBlOiBjb2RlIHNvdXJjZSB0eXBlLiBBbGxvdyB2YWx1ZXM6IFxuICAgICAqIENPREUsIEdJVEhVQiwgR0lUTEFCLCBCSVRCVUNLRVQuIEVudGVycHJpc2UgRWRpdGlvbiBhZGRpdGlvbmFsIHN1cHBvcnQgQ09ERVVQIGFuZCBHSVRFRVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc291cmNlUmVwb1R5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpc0Rpc2FibGVDYWNoZTogV2hldGhlciB0byBkaXNhYmxlIENhY2hlIGF0IGJ1aWxkIHRpbWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlzRGlzYWJsZUNhY2hlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVwb1NvdXJjZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXBvU291cmNlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUmVwb3NpdG9yeV9SZXBvU291cmNlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc0F1dG9CdWlsZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pc0F1dG9CdWlsZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNBdXRvQnVpbGQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzQXV0b0J1aWxkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VSZXBvTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VSZXBvTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUmVwb05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlUmVwb05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVJlcG9OYW1lc3BhY2UnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc291cmNlUmVwb05hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUmVwb05hbWVzcGFjZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3VyY2VSZXBvTmFtZXNwYWNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc092ZXJzZWEnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaXNPdmVyc2VhKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc092ZXJzZWEnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzT3ZlcnNlYSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUmVwb1R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc291cmNlUmVwb1R5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNvdXJjZVJlcG9UeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5zb3VyY2VSZXBvVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUmVwb1R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zb3VyY2VSZXBvVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJDT0RFXCIsXCJHSVRIVUJcIixcIkdJVExBQlwiLFwiQklUQlVDS0VUXCIsXCJDT0RFVVBcIixcIkdJVEVFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUmVwb1R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlUmVwb1R5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzRGlzYWJsZUNhY2hlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmlzRGlzYWJsZUNhY2hlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc0Rpc2FibGVDYWNoZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaXNEaXNhYmxlQ2FjaGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVwb1NvdXJjZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDUjo6UmVwb3NpdG9yeS5SZXBvU291cmNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXBvU291cmNlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpSZXBvc2l0b3J5LlJlcG9Tb3VyY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVwb3NpdG9yeVJlcG9Tb3VyY2VQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zUmVwb3NpdG9yeV9SZXBvU291cmNlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBJc0F1dG9CdWlsZDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNBdXRvQnVpbGQpLFxuICAgICAgU291cmNlUmVwb05hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlUmVwb05hbWUpLFxuICAgICAgU291cmNlUmVwb05hbWVzcGFjZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VSZXBvTmFtZXNwYWNlKSxcbiAgICAgIElzT3ZlcnNlYTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNPdmVyc2VhKSxcbiAgICAgIFNvdXJjZVJlcG9UeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZVJlcG9UeXBlKSxcbiAgICAgIElzRGlzYWJsZUNhY2hlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc0Rpc2FibGVDYWNoZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NVc2VySW5mb2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci11c2VyaW5mb1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1VzZXJJbmZvUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXI6IFVzZXIgaW5mby4gSWYgdXNlciBleGlzdHMsIHdpbGwgdXBkYXRlIHVzZXIgaW5mby5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyOiBSb3NVc2VySW5mby5Vc2VyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIGVudGVycHJpc2UgZWRpdGlvbiBBQ1IgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NVc2VySW5mb1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NVc2VySW5mb1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJJbmZvUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXInLCBSb3NVc2VySW5mb19Vc2VyUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMudXNlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJJbmZvUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpVc2VySW5mb2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckluZm9Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q1I6OlVzZXJJbmZvYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJJbmZvUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NVc2VySW5mb1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFVzZXI6IHJvc1VzZXJJbmZvVXNlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXIpLFxuICAgICAgSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDUjo6VXNlckluZm9gLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYSB1c2VyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBVc2VySW5mb2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3ItdXNlcmluZm9cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1VzZXJJbmZvIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDUjo6VXNlckluZm9cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9naW5OYW1lOiBMb2dpbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9naW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogVXNlciBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlcjogVXNlciBpbmZvLiBJZiB1c2VyIGV4aXN0cywgd2lsbCB1cGRhdGUgdXNlciBpbmZvLlxuICAgICAqL1xuICAgIHB1YmxpYyB1c2VyOiBSb3NVc2VySW5mby5Vc2VyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIGVudGVycHJpc2UgZWRpdGlvbiBBQ1IgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NVc2VySW5mb1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlckluZm8uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckxvZ2luTmFtZSA9IHRoaXMuZ2V0QXR0KCdMb2dpbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcklkID0gdGhpcy5nZXRBdHQoJ1VzZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy51c2VyID0gcHJvcHMudXNlcjtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1VzZXJJbmZvUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVXNlckluZm8ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFzc3dvcmQ6IFBhc3N3b3JkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzc3dvcmQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFVzZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVXNlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJJbmZvX1VzZXJQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhc3N3b3JkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzd29yZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXNzd29yZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJVc2VyUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpVc2VySW5mby5Vc2VyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBVc2VyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNSOjpVc2VySW5mby5Vc2VyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJJbmZvVXNlclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NVc2VySW5mb19Vc2VyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXNzd29yZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzd29yZCksXG4gICAgfTtcbn1cbiJdfQ==