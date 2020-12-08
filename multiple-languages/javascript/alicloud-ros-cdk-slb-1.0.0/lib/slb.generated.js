"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVServerGroup = exports.RosRule = exports.RosMasterSlaveServerGroup = exports.RosLoadBalancerClone = exports.RosLoadBalancer = exports.RosListener = exports.RosDomainExtension = exports.RosCertificate = exports.RosBackendServerToVServerGroupAddition = exports.RosBackendServerAttachment = exports.RosAccessControl = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAccessControlProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the result of the validation.
 */
function RosAccessControlPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.aclEntrys && (Array.isArray(properties.aclEntrys) || (typeof properties.aclEntrys) === 'string')) {
        errors.collect(ros.propertyValidator('aclEntrys', ros.validateLength)({
            data: properties.aclEntrys.length,
            min: undefined,
            max: 50,
        }));
    }
    errors.collect(ros.propertyValidator('aclEntrys', ros.listValidator(RosAccessControl_AclEntrysPropertyValidator))(properties.aclEntrys));
    if (properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
            data: properties.addressIpVersion,
            allowedValues: ["ipv4", "ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('aclName', ros.requiredValidator)(properties.aclName));
    errors.collect(ros.propertyValidator('aclName', ros.validateString)(properties.aclName));
    return errors.wrap('supplied properties not correct for "RosAccessControlProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl` resource.
 */
// @ts-ignore TS6133
function rosAccessControlPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessControlPropsValidator(properties).assertSuccess();
    }
    return {
        AclName: ros.stringToRosTemplate(properties.aclName),
        AclEntrys: ros.listMapper(rosAccessControlAclEntrysPropertyToRosTemplate)(properties.aclEntrys),
        AddressIPVersion: ros.stringToRosTemplate(properties.addressIpVersion),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::AccessControl`
 */
class RosAccessControl extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::AccessControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessControl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = ros.Token.asString(this.getAtt('AclId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclName = props.aclName;
        this.aclEntrys = props.aclEntrys;
        this.addressIpVersion = props.addressIpVersion;
    }
    get rosProperties() {
        return {
            aclName: this.aclName,
            aclEntrys: this.aclEntrys,
            addressIpVersion: this.addressIpVersion,
        };
    }
    renderProperties(props) {
        return rosAccessControlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessControl = RosAccessControl;
/**
 * The resource type name for this resource class.
 */
RosAccessControl.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::AccessControl";
/**
 * Determine whether the given properties match those of a `AclEntrysProperty`
 *
 * @param properties - the TypeScript properties of a `AclEntrysProperty`
 *
 * @returns the result of the validation.
 */
function RosAccessControl_AclEntrysPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entry', ros.requiredValidator)(properties.entry));
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    return errors.wrap('supplied properties not correct for "AclEntrysProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.AclEntrys` resource
 *
 * @param properties - the TypeScript properties of a `AclEntrysProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.AclEntrys` resource.
 */
// @ts-ignore TS6133
function rosAccessControlAclEntrysPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAccessControl_AclEntrysPropertyValidator(properties).assertSuccess();
    return {
        entry: ros.stringToRosTemplate(properties.entry),
        comment: ros.stringToRosTemplate(properties.comment),
    };
}
/**
 * Determine whether the given properties match those of a `RosBackendServerAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosBackendServerAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosBackendServerAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backendServerList', ros.listValidator(ros.validateString))(properties.backendServerList));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('backendServerWeightList', ros.listValidator(ros.validateAny))(properties.backendServerWeightList));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosBackendServerAttachment_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosBackendServerAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendServerAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBackendServerAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
        BackendServerList: ros.listMapper(ros.stringToRosTemplate)(properties.backendServerList),
        BackendServers: ros.listMapper(rosBackendServerAttachmentBackendServersPropertyToRosTemplate)(properties.backendServers),
        BackendServerWeightList: ros.listMapper(ros.objectToRosTemplate)(properties.backendServerWeightList),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerAttachment`
 */
class RosBackendServerAttachment extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::BackendServerAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBackendServerAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendServers = ros.Token.asString(this.getAtt('BackendServers'));
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.backendServerList = props.backendServerList;
        this.backendServers = props.backendServers;
        this.backendServerWeightList = props.backendServerWeightList;
    }
    get rosProperties() {
        return {
            loadBalancerId: this.loadBalancerId,
            backendServerList: this.backendServerList,
            backendServers: this.backendServers,
            backendServerWeightList: this.backendServerWeightList,
        };
    }
    renderProperties(props) {
        return rosBackendServerAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBackendServerAttachment = RosBackendServerAttachment;
/**
 * The resource type name for this resource class.
 */
RosBackendServerAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerAttachment";
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosBackendServerAttachment_BackendServersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if (properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentBackendServersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBackendServerAttachment_BackendServersPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        ServerId: ros.stringToRosTemplate(properties.serverId),
        Description: ros.stringToRosTemplate(properties.description),
        ServerIp: ros.stringToRosTemplate(properties.serverIp),
        Weight: ros.numberToRosTemplate(properties.weight),
    };
}
/**
 * Determine whether the given properties match those of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosBackendServerToVServerGroupAdditionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.requiredValidator)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('backendServers', ros.requiredValidator)(properties.backendServers));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosBackendServerToVServerGroupAdditionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition` resource.
 */
// @ts-ignore TS6133
function rosBackendServerToVServerGroupAdditionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBackendServerToVServerGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
        BackendServers: ros.listMapper(rosBackendServerToVServerGroupAdditionBackendServersPropertyToRosTemplate)(properties.backendServers),
        VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
class RosBackendServerToVServerGroupAddition extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::BackendServerToVServerGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBackendServerToVServerGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVServerGroupId = ros.Token.asString(this.getAtt('VServerGroupId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backendServers = props.backendServers;
        this.vServerGroupId = props.vServerGroupId;
    }
    get rosProperties() {
        return {
            backendServers: this.backendServers,
            vServerGroupId: this.vServerGroupId,
        };
    }
    renderProperties(props) {
        return rosBackendServerToVServerGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBackendServerToVServerGroupAddition = RosBackendServerToVServerGroupAddition;
/**
 * The resource type name for this resource class.
 */
RosBackendServerToVServerGroupAddition.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerToVServerGroupAddition";
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if (properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosBackendServerToVServerGroupAdditionBackendServersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator(properties).assertSuccess();
    return {
        ServerId: ros.stringToRosTemplate(properties.serverId),
        Port: ros.numberToRosTemplate(properties.port),
        Weight: ros.numberToRosTemplate(properties.weight),
    };
}
/**
 * Determine whether the given properties match those of a `RosCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosCertificatePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.certificateType && (typeof properties.certificateType) !== 'object') {
        errors.collect(ros.propertyValidator('certificateType', ros.validateAllowedValues)({
            data: properties.certificateType,
            allowedValues: ["Server", "CA"],
        }));
    }
    errors.collect(ros.propertyValidator('certificateType', ros.validateString)(properties.certificateType));
    errors.collect(ros.propertyValidator('aliCloudCertificateName', ros.validateString)(properties.aliCloudCertificateName));
    errors.collect(ros.propertyValidator('privateKey', ros.validateString)(properties.privateKey));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('certificateName', ros.validateString)(properties.certificateName));
    errors.collect(ros.propertyValidator('certificate', ros.requiredValidator)(properties.certificate));
    errors.collect(ros.propertyValidator('certificate', ros.validateString)(properties.certificate));
    errors.collect(ros.propertyValidator('aliCloudCertificateId', ros.validateString)(properties.aliCloudCertificateId));
    return errors.wrap('supplied properties not correct for "RosCertificateProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate` resource
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate` resource.
 */
// @ts-ignore TS6133
function rosCertificatePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCertificatePropsValidator(properties).assertSuccess();
    }
    return {
        Certificate: ros.stringToRosTemplate(properties.certificate),
        AliCloudCertificateId: ros.stringToRosTemplate(properties.aliCloudCertificateId),
        AliCloudCertificateName: ros.stringToRosTemplate(properties.aliCloudCertificateName),
        CertificateName: ros.stringToRosTemplate(properties.certificateName),
        CertificateType: ros.stringToRosTemplate(properties.certificateType),
        PrivateKey: ros.stringToRosTemplate(properties.privateKey),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::Certificate`
 */
class RosCertificate extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertificateId = ros.Token.asString(this.getAtt('CertificateId'));
        this.attrFingerprint = ros.Token.asString(this.getAtt('Fingerprint'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.certificate = props.certificate;
        this.aliCloudCertificateId = props.aliCloudCertificateId;
        this.aliCloudCertificateName = props.aliCloudCertificateName;
        this.certificateName = props.certificateName;
        this.certificateType = props.certificateType;
        this.privateKey = props.privateKey;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            certificate: this.certificate,
            aliCloudCertificateId: this.aliCloudCertificateId,
            aliCloudCertificateName: this.aliCloudCertificateName,
            certificateName: this.certificateName,
            certificateType: this.certificateType,
            privateKey: this.privateKey,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCertificate = RosCertificate;
/**
 * The resource type name for this resource class.
 */
RosCertificate.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Certificate";
/**
 * Determine whether the given properties match those of a `RosDomainExtensionProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the result of the validation.
 */
function RosDomainExtensionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if (properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.requiredValidator)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.validateString)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RosDomainExtensionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::DomainExtension` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::DomainExtension` resource.
 */
// @ts-ignore TS6133
function rosDomainExtensionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDomainExtensionPropsValidator(properties).assertSuccess();
    }
    return {
        Domain: ros.stringToRosTemplate(properties.domain),
        ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
        LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
        ServerCertificateId: ros.stringToRosTemplate(properties.serverCertificateId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::DomainExtension`
 */
class RosDomainExtension extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDomainExtension.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainExtensionId = ros.Token.asString(this.getAtt('DomainExtensionId'));
        this.attrListenerPort = ros.Token.asString(this.getAtt('ListenerPort'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.serverCertificateId = props.serverCertificateId;
    }
    get rosProperties() {
        return {
            domain: this.domain,
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            serverCertificateId: this.serverCertificateId,
        };
    }
    renderProperties(props) {
        return rosDomainExtensionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDomainExtension = RosDomainExtension;
/**
 * The resource type name for this resource class.
 */
RosDomainExtension.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::DomainExtension";
/**
 * Determine whether the given properties match those of a `RosListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the result of the validation.
 */
function RosListenerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.requestTimeout && (typeof properties.requestTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('requestTimeout', ros.validateRange)({
            data: properties.requestTimeout,
            min: 1,
            max: 180,
        }));
    }
    errors.collect(ros.propertyValidator('requestTimeout', ros.validateNumber)(properties.requestTimeout));
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if (properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('caCertificateId', ros.validateString)(properties.caCertificateId));
    if (properties.scheduler && (typeof properties.scheduler) !== 'object') {
        errors.collect(ros.propertyValidator('scheduler', ros.validateAllowedValues)({
            data: properties.scheduler,
            allowedValues: ["wrr", "wlc"],
        }));
    }
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    errors.collect(ros.propertyValidator('healthCheck', RosListener_HealthCheckPropertyValidator)(properties.healthCheck));
    if (properties.idleTimeout && (typeof properties.idleTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('idleTimeout', ros.validateRange)({
            data: properties.idleTimeout,
            min: 1,
            max: 60,
        }));
    }
    errors.collect(ros.propertyValidator('idleTimeout', ros.validateNumber)(properties.idleTimeout));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('backendServerPort', ros.requiredValidator)(properties.backendServerPort));
    if (properties.backendServerPort && (typeof properties.backendServerPort) !== 'object') {
        errors.collect(ros.propertyValidator('backendServerPort', ros.validateRange)({
            data: properties.backendServerPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('backendServerPort', ros.validateNumber)(properties.backendServerPort));
    errors.collect(ros.propertyValidator('persistence', RosListener_PersistencePropertyValidator)(properties.persistence));
    if (properties.aclStatus && (typeof properties.aclStatus) !== 'object') {
        errors.collect(ros.propertyValidator('aclStatus', ros.validateAllowedValues)({
            data: properties.aclStatus,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('aclStatus', ros.validateString)(properties.aclStatus));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if (properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: -1,
            max: 1000,
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('masterSlaveServerGroupId', ros.validateString)(properties.masterSlaveServerGroupId));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.validateString)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('httpConfig', RosListener_HttpConfigPropertyValidator)(properties.httpConfig));
    if (properties.aclType && (typeof properties.aclType) !== 'object') {
        errors.collect(ros.propertyValidator('aclType', ros.validateAllowedValues)({
            data: properties.aclType,
            allowedValues: ["white", "black"],
        }));
    }
    errors.collect(ros.propertyValidator('aclType', ros.validateString)(properties.aclType));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["http", "https", "tcp", "udp"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
        BackendServerPort: ros.numberToRosTemplate(properties.backendServerPort),
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
        LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
        Protocol: ros.stringToRosTemplate(properties.protocol),
        AclId: ros.stringToRosTemplate(properties.aclId),
        AclStatus: ros.stringToRosTemplate(properties.aclStatus),
        AclType: ros.stringToRosTemplate(properties.aclType),
        CACertificateId: ros.stringToRosTemplate(properties.caCertificateId),
        HealthCheck: rosListenerHealthCheckPropertyToRosTemplate(properties.healthCheck),
        HttpConfig: rosListenerHttpConfigPropertyToRosTemplate(properties.httpConfig),
        IdleTimeout: ros.numberToRosTemplate(properties.idleTimeout),
        MasterSlaveServerGroupId: ros.stringToRosTemplate(properties.masterSlaveServerGroupId),
        Persistence: rosListenerPersistencePropertyToRosTemplate(properties.persistence),
        RequestTimeout: ros.numberToRosTemplate(properties.requestTimeout),
        Scheduler: ros.stringToRosTemplate(properties.scheduler),
        ServerCertificateId: ros.stringToRosTemplate(properties.serverCertificateId),
        VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::Listener`
 */
class RosListener extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerPortsAndProtocol = ros.Token.asString(this.getAtt('ListenerPortsAndProtocol'));
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backendServerPort = props.backendServerPort;
        this.bandwidth = props.bandwidth;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.protocol = props.protocol;
        this.aclId = props.aclId;
        this.aclStatus = props.aclStatus;
        this.aclType = props.aclType;
        this.caCertificateId = props.caCertificateId;
        this.healthCheck = props.healthCheck;
        this.httpConfig = props.httpConfig;
        this.idleTimeout = props.idleTimeout;
        this.masterSlaveServerGroupId = props.masterSlaveServerGroupId;
        this.persistence = props.persistence;
        this.requestTimeout = props.requestTimeout;
        this.scheduler = props.scheduler;
        this.serverCertificateId = props.serverCertificateId;
        this.vServerGroupId = props.vServerGroupId;
    }
    get rosProperties() {
        return {
            backendServerPort: this.backendServerPort,
            bandwidth: this.bandwidth,
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            protocol: this.protocol,
            aclId: this.aclId,
            aclStatus: this.aclStatus,
            aclType: this.aclType,
            caCertificateId: this.caCertificateId,
            healthCheck: this.healthCheck,
            httpConfig: this.httpConfig,
            idleTimeout: this.idleTimeout,
            masterSlaveServerGroupId: this.masterSlaveServerGroupId,
            persistence: this.persistence,
            requestTimeout: this.requestTimeout,
            scheduler: this.scheduler,
            serverCertificateId: this.serverCertificateId,
            vServerGroupId: this.vServerGroupId,
        };
    }
    renderProperties(props) {
        return rosListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosListener = RosListener;
/**
 * The resource type name for this resource class.
 */
RosListener.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Listener";
/**
 * Determine whether the given properties match those of a `HealthCheckProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_HealthCheckPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpCode', ros.validateString)(properties.httpCode));
    if (properties.unhealthyThreshold && (typeof properties.unhealthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateRange)({
            data: properties.unhealthyThreshold,
            min: 1,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    if (properties.healthyThreshold && (typeof properties.healthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('healthyThreshold', ros.validateRange)({
            data: properties.healthyThreshold,
            min: 1,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    if (properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 0,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    if (properties.interval && (typeof properties.interval) !== 'object') {
        errors.collect(ros.propertyValidator('interval', ros.validateRange)({
            data: properties.interval,
            min: 1,
            max: 50,
        }));
    }
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "HealthCheckProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HealthCheck` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HealthCheck` resource.
 */
// @ts-ignore TS6133
function rosListenerHealthCheckPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosListener_HealthCheckPropertyValidator(properties).assertSuccess();
    return {
        HttpCode: ros.stringToRosTemplate(properties.httpCode),
        UnhealthyThreshold: ros.numberToRosTemplate(properties.unhealthyThreshold),
        Timeout: ros.numberToRosTemplate(properties.timeout),
        HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
        Port: ros.numberToRosTemplate(properties.port),
        Domain: ros.stringToRosTemplate(properties.domain),
        URI: ros.stringToRosTemplate(properties.uri),
        Interval: ros.numberToRosTemplate(properties.interval),
    };
}
/**
 * Determine whether the given properties match those of a `HttpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_HttpConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.listenerForward && (typeof properties.listenerForward) !== 'object') {
        errors.collect(ros.propertyValidator('listenerForward', ros.validateAllowedValues)({
            data: properties.listenerForward,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerForward', ros.validateString)(properties.listenerForward));
    if (properties.forwardPort && (typeof properties.forwardPort) !== 'object') {
        errors.collect(ros.propertyValidator('forwardPort', ros.validateRange)({
            data: properties.forwardPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('forwardPort', ros.validateNumber)(properties.forwardPort));
    return errors.wrap('supplied properties not correct for "HttpConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HttpConfig` resource
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HttpConfig` resource.
 */
// @ts-ignore TS6133
function rosListenerHttpConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosListener_HttpConfigPropertyValidator(properties).assertSuccess();
    return {
        ListenerForward: ros.stringToRosTemplate(properties.listenerForward),
        ForwardPort: ros.numberToRosTemplate(properties.forwardPort),
    };
}
/**
 * Determine whether the given properties match those of a `PersistenceProperty`
 *
 * @param properties - the TypeScript properties of a `PersistenceProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_PersistencePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.xForwardedForSlbid && (typeof properties.xForwardedForSlbid) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForSlbid', ros.validateAllowedValues)({
            data: properties.xForwardedForSlbid,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForSlbid', ros.validateString)(properties.xForwardedForSlbid));
    if (properties.cookieTimeout && (typeof properties.cookieTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('cookieTimeout', ros.validateRange)({
            data: properties.cookieTimeout,
            min: 0,
            max: 86400,
        }));
    }
    errors.collect(ros.propertyValidator('cookieTimeout', ros.validateNumber)(properties.cookieTimeout));
    errors.collect(ros.propertyValidator('cookie', ros.validateString)(properties.cookie));
    if (properties.stickySession && (typeof properties.stickySession) !== 'object') {
        errors.collect(ros.propertyValidator('stickySession', ros.validateAllowedValues)({
            data: properties.stickySession,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySession', ros.validateString)(properties.stickySession));
    if (properties.persistenceTimeout && (typeof properties.persistenceTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateRange)({
            data: properties.persistenceTimeout,
            min: 0,
            max: 1000,
        }));
    }
    errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateNumber)(properties.persistenceTimeout));
    if (properties.xForwardedFor && (typeof properties.xForwardedFor) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedFor', ros.validateAllowedValues)({
            data: properties.xForwardedFor,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedFor', ros.validateString)(properties.xForwardedFor));
    if (properties.xForwardedForProto && (typeof properties.xForwardedForProto) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForProto', ros.validateAllowedValues)({
            data: properties.xForwardedForProto,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForProto', ros.validateString)(properties.xForwardedForProto));
    if (properties.stickySessionType && (typeof properties.stickySessionType) !== 'object') {
        errors.collect(ros.propertyValidator('stickySessionType', ros.validateAllowedValues)({
            data: properties.stickySessionType,
            allowedValues: ["insert", "server"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySessionType', ros.validateString)(properties.stickySessionType));
    if (properties.xForwardedForSlbip && (typeof properties.xForwardedForSlbip) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForSlbip', ros.validateAllowedValues)({
            data: properties.xForwardedForSlbip,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForSlbip', ros.validateString)(properties.xForwardedForSlbip));
    return errors.wrap('supplied properties not correct for "PersistenceProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.Persistence` resource
 *
 * @param properties - the TypeScript properties of a `PersistenceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.Persistence` resource.
 */
// @ts-ignore TS6133
function rosListenerPersistencePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosListener_PersistencePropertyValidator(properties).assertSuccess();
    return {
        XForwardedFor_SLBID: ros.stringToRosTemplate(properties.xForwardedForSlbid),
        CookieTimeout: ros.numberToRosTemplate(properties.cookieTimeout),
        Cookie: ros.stringToRosTemplate(properties.cookie),
        StickySession: ros.stringToRosTemplate(properties.stickySession),
        PersistenceTimeout: ros.numberToRosTemplate(properties.persistenceTimeout),
        XForwardedFor: ros.stringToRosTemplate(properties.xForwardedFor),
        XForwardedFor_proto: ros.stringToRosTemplate(properties.xForwardedForProto),
        StickySessionType: ros.stringToRosTemplate(properties.stickySessionType),
        XForwardedFor_SLBIP: ros.stringToRosTemplate(properties.xForwardedForSlbip),
    };
}
/**
 * Determine whether the given properties match those of a `RosLoadBalancerProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
            data: properties.pricingCycle,
            allowedValues: ["month", "year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if (properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateRange)({
            data: properties.duration,
            min: 1,
            max: 9,
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if (properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
            data: properties.payType,
            allowedValues: ["PayOnDemand", "PrePay"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('slaveZoneId', ros.validateString)(properties.slaveZoneId));
    if (properties.modificationProtectionStatus && (typeof properties.modificationProtectionStatus) !== 'object') {
        errors.collect(ros.propertyValidator('modificationProtectionStatus', ros.validateAllowedValues)({
            data: properties.modificationProtectionStatus,
            allowedValues: ["NonProtection", "ConsoleProtection"],
        }));
    }
    errors.collect(ros.propertyValidator('modificationProtectionStatus', ros.validateString)(properties.modificationProtectionStatus));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["paybybandwidth", "paybytraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('loadBalancerSpec', ros.validateString)(properties.loadBalancerSpec));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if (properties.modificationProtectionReason && (Array.isArray(properties.modificationProtectionReason) || (typeof properties.modificationProtectionReason) === 'string')) {
        errors.collect(ros.propertyValidator('modificationProtectionReason', ros.validateLength)({
            data: properties.modificationProtectionReason.length,
            min: undefined,
            max: 80,
        }));
    }
    errors.collect(ros.propertyValidator('modificationProtectionReason', ros.validateString)(properties.modificationProtectionReason));
    if (properties.addressType && (typeof properties.addressType) !== 'object') {
        errors.collect(ros.propertyValidator('addressType', ros.validateAllowedValues)({
            data: properties.addressType,
            allowedValues: ["internet", "intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('masterZoneId', ros.validateString)(properties.masterZoneId));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosLoadBalancerPropsValidator(properties).assertSuccess();
    }
    return {
        AddressType: ros.stringToRosTemplate(properties.addressType),
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        Duration: ros.numberToRosTemplate(properties.duration),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
        LoadBalancerSpec: ros.stringToRosTemplate(properties.loadBalancerSpec),
        MasterZoneId: ros.stringToRosTemplate(properties.masterZoneId),
        ModificationProtectionReason: ros.stringToRosTemplate(properties.modificationProtectionReason),
        ModificationProtectionStatus: ros.stringToRosTemplate(properties.modificationProtectionStatus),
        PayType: ros.stringToRosTemplate(properties.payType),
        PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SlaveZoneId: ros.stringToRosTemplate(properties.slaveZoneId),
        Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancer`
 */
class RosLoadBalancer extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::LoadBalancer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosLoadBalancer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressType = ros.Token.asString(this.getAtt('AddressType'));
        this.attrIpAddress = ros.Token.asString(this.getAtt('IpAddress'));
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));
        this.attrNetworkType = ros.Token.asString(this.getAtt('NetworkType'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressType = props.addressType;
        this.autoPay = props.autoPay;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
        this.duration = props.duration;
        this.internetChargeType = props.internetChargeType;
        this.loadBalancerName = props.loadBalancerName;
        this.loadBalancerSpec = props.loadBalancerSpec;
        this.masterZoneId = props.masterZoneId;
        this.modificationProtectionReason = props.modificationProtectionReason;
        this.modificationProtectionStatus = props.modificationProtectionStatus;
        this.payType = props.payType;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.slaveZoneId = props.slaveZoneId;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::SLB::LoadBalancer", props.tags, { tagPropertyName: 'tags' });
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }
    get rosProperties() {
        return {
            addressType: this.addressType,
            autoPay: this.autoPay,
            bandwidth: this.bandwidth,
            deletionProtection: this.deletionProtection,
            duration: this.duration,
            internetChargeType: this.internetChargeType,
            loadBalancerName: this.loadBalancerName,
            loadBalancerSpec: this.loadBalancerSpec,
            masterZoneId: this.masterZoneId,
            modificationProtectionReason: this.modificationProtectionReason,
            modificationProtectionStatus: this.modificationProtectionStatus,
            payType: this.payType,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            slaveZoneId: this.slaveZoneId,
            tags: this.tags.renderTags(),
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    renderProperties(props) {
        return rosLoadBalancerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLoadBalancer = RosLoadBalancer;
/**
 * The resource type name for this resource class.
 */
RosLoadBalancer.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancer";
/**
 * Determine whether the given properties match those of a `RosLoadBalancerCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerCloneProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerClonePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('sourceLoadBalancerId', ros.requiredValidator)(properties.sourceLoadBalancerId));
    errors.collect(ros.propertyValidator('sourceLoadBalancerId', ros.validateString)(properties.sourceLoadBalancerId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.tagsPolicy && (typeof properties.tagsPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('tagsPolicy', ros.validateAllowedValues)({
            data: properties.tagsPolicy,
            allowedValues: ["clone", "empty", "append", "replace"],
        }));
    }
    errors.collect(ros.propertyValidator('tagsPolicy', ros.validateString)(properties.tagsPolicy));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosLoadBalancerClone_BackendServersPropertyValidator))(properties.backendServers));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    if (properties.backendServersPolicy && (typeof properties.backendServersPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('backendServersPolicy', ros.validateAllowedValues)({
            data: properties.backendServersPolicy,
            allowedValues: ["clone", "empty", "append", "replace"],
        }));
    }
    errors.collect(ros.propertyValidator('backendServersPolicy', ros.validateString)(properties.backendServersPolicy));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerCloneProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerClonePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosLoadBalancerClonePropsValidator(properties).assertSuccess();
    }
    return {
        SourceLoadBalancerId: ros.stringToRosTemplate(properties.sourceLoadBalancerId),
        BackendServers: ros.listMapper(rosLoadBalancerCloneBackendServersPropertyToRosTemplate)(properties.backendServers),
        BackendServersPolicy: ros.stringToRosTemplate(properties.backendServersPolicy),
        LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
        TagsPolicy: ros.stringToRosTemplate(properties.tagsPolicy),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancerClone`
 */
class RosLoadBalancerClone extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosLoadBalancerClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceLoadBalancerId = props.sourceLoadBalancerId;
        this.backendServers = props.backendServers;
        this.backendServersPolicy = props.backendServersPolicy;
        this.loadBalancerName = props.loadBalancerName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::SLB::LoadBalancerClone", props.tags, { tagPropertyName: 'tags' });
        this.tagsPolicy = props.tagsPolicy;
        this.vSwitchId = props.vSwitchId;
    }
    get rosProperties() {
        return {
            sourceLoadBalancerId: this.sourceLoadBalancerId,
            backendServers: this.backendServers,
            backendServersPolicy: this.backendServersPolicy,
            loadBalancerName: this.loadBalancerName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags.renderTags(),
            tagsPolicy: this.tagsPolicy,
            vSwitchId: this.vSwitchId,
        };
    }
    renderProperties(props) {
        return rosLoadBalancerClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLoadBalancerClone = RosLoadBalancerClone;
/**
 * The resource type name for this resource class.
 */
RosLoadBalancerClone.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancerClone";
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerClone_BackendServersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if (properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerCloneBackendServersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosLoadBalancerClone_BackendServersPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        ServerId: ros.stringToRosTemplate(properties.serverId),
        Description: ros.stringToRosTemplate(properties.description),
        ServerIp: ros.stringToRosTemplate(properties.serverIp),
        Weight: ros.numberToRosTemplate(properties.weight),
    };
}
/**
 * Determine whether the given properties match those of a `RosMasterSlaveServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMasterSlaveServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMasterSlaveServerGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('masterSlaveServerGroupName', ros.validateString)(properties.masterSlaveServerGroupName));
    errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.requiredValidator)(properties.masterSlaveBackendServers));
    if (properties.masterSlaveBackendServers && (Array.isArray(properties.masterSlaveBackendServers) || (typeof properties.masterSlaveBackendServers) === 'string')) {
        errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.validateLength)({
            data: properties.masterSlaveBackendServers.length,
            min: 2,
            max: 2,
        }));
    }
    errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.listValidator(RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator))(properties.masterSlaveBackendServers));
    return errors.wrap('supplied properties not correct for "RosMasterSlaveServerGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMasterSlaveServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup` resource.
 */
// @ts-ignore TS6133
function rosMasterSlaveServerGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosMasterSlaveServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
        LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
        MasterSlaveBackendServers: ros.listMapper(rosMasterSlaveServerGroupMasterSlaveBackendServersPropertyToRosTemplate)(properties.masterSlaveBackendServers),
        MasterSlaveServerGroupName: ros.stringToRosTemplate(properties.masterSlaveServerGroupName),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::MasterSlaveServerGroup`
 */
class RosMasterSlaveServerGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMasterSlaveServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMasterSlaveServerGroupId = ros.Token.asString(this.getAtt('MasterSlaveServerGroupId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.masterSlaveBackendServers = props.masterSlaveBackendServers;
        this.masterSlaveServerGroupName = props.masterSlaveServerGroupName;
    }
    get rosProperties() {
        return {
            loadBalancerId: this.loadBalancerId,
            masterSlaveBackendServers: this.masterSlaveBackendServers,
            masterSlaveServerGroupName: this.masterSlaveServerGroupName,
        };
    }
    renderProperties(props) {
        return rosMasterSlaveServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMasterSlaveServerGroup = RosMasterSlaveServerGroup;
/**
 * The resource type name for this resource class.
 */
RosMasterSlaveServerGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::MasterSlaveServerGroup";
/**
 * Determine whether the given properties match those of a `MasterSlaveBackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `MasterSlaveBackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.serverType && (typeof properties.serverType) !== 'object') {
        errors.collect(ros.propertyValidator('serverType', ros.validateAllowedValues)({
            data: properties.serverType,
            allowedValues: ["Master", "Slave"],
        }));
    }
    errors.collect(ros.propertyValidator('serverType', ros.validateString)(properties.serverType));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if (properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if (properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "MasterSlaveBackendServersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup.MasterSlaveBackendServers` resource
 *
 * @param properties - the TypeScript properties of a `MasterSlaveBackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup.MasterSlaveBackendServers` resource.
 */
// @ts-ignore TS6133
function rosMasterSlaveServerGroupMasterSlaveBackendServersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator(properties).assertSuccess();
    return {
        ServerType: ros.stringToRosTemplate(properties.serverType),
        ServerId: ros.stringToRosTemplate(properties.serverId),
        Port: ros.numberToRosTemplate(properties.port),
        Weight: ros.numberToRosTemplate(properties.weight),
    };
}
/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if (properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('ruleList', ros.requiredValidator)(properties.ruleList));
    if (properties.ruleList && (Array.isArray(properties.ruleList) || (typeof properties.ruleList) === 'string')) {
        errors.collect(ros.propertyValidator('ruleList', ros.validateLength)({
            data: properties.ruleList.length,
            min: 1,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('ruleList', ros.listValidator(RosRule_RuleListPropertyValidator))(properties.ruleList));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
        ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
        LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
        RuleList: ros.listMapper(rosRuleRuleListPropertyToRosTemplate)(properties.ruleList),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::Rule`
 */
class RosRule extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRules = ros.Token.asString(this.getAtt('Rules'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.ruleList = props.ruleList;
    }
    get rosProperties() {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            ruleList: this.ruleList,
        };
    }
    renderProperties(props) {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRule = RosRule;
/**
 * The resource type name for this resource class.
 */
RosRule.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Rule";
/**
 * Determine whether the given properties match those of a `RuleListProperty`
 *
 * @param properties - the TypeScript properties of a `RuleListProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RuleListPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.requiredValidator)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RuleListProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.RuleList` resource
 *
 * @param properties - the TypeScript properties of a `RuleListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.RuleList` resource.
 */
// @ts-ignore TS6133
function rosRuleRuleListPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRule_RuleListPropertyValidator(properties).assertSuccess();
    return {
        VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
        Domain: ros.stringToRosTemplate(properties.domain),
        Url: ros.stringToRosTemplate(properties.url),
        RuleName: ros.stringToRosTemplate(properties.ruleName),
    };
}
/**
 * Determine whether the given properties match those of a `RosVServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosVServerGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupName', ros.requiredValidator)(properties.vServerGroupName));
    errors.collect(ros.propertyValidator('vServerGroupName', ros.validateString)(properties.vServerGroupName));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosVServerGroup_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosVServerGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
        LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
        VServerGroupName: ros.stringToRosTemplate(properties.vServerGroupName),
        BackendServers: ros.listMapper(rosVServerGroupBackendServersPropertyToRosTemplate)(properties.backendServers),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLB::VServerGroup`
 */
class RosVServerGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendServers = ros.Token.asString(this.getAtt('BackendServers'));
        this.attrVServerGroupId = ros.Token.asString(this.getAtt('VServerGroupId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.vServerGroupName = props.vServerGroupName;
        this.backendServers = props.backendServers;
    }
    get rosProperties() {
        return {
            loadBalancerId: this.loadBalancerId,
            vServerGroupName: this.vServerGroupName,
            backendServers: this.backendServers,
        };
    }
    renderProperties(props) {
        return rosVServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVServerGroup = RosVServerGroup;
/**
 * The resource type name for this resource class.
 */
RosVServerGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::VServerGroup";
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosVServerGroup_BackendServersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if (properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupBackendServersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVServerGroup_BackendServersPropertyValidator(properties).assertSuccess();
    return {
        ServerId: ros.stringToRosTemplate(properties.serverId),
        Port: ros.numberToRosTemplate(properties.port),
        Weight: ros.numberToRosTemplate(properties.weight),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xiLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsYi5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXVCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyw4QkFBOEIsQ0FBQyxVQUFlO0lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDNUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2pDLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pJLElBQUcsVUFBVSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDakYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMs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QyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDN0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5RCxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDdkIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxrREFBa0QsQ0FBQyxVQUFlO0lBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCwrQ0FBK0MsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1RSxPQUFPO1FBQ0wsUUFBUSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUM5QyxNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7S0FDbkQsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xCOjpBY2Nlc3NDb250cm9sYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FjY2Vzc0NvbnRyb2xQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFjY2VzcyBjb250cm9sIGxpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNsTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbEVudHJ5czogQSBsaXN0IG9mIGFjbCBlbnRyeXMuIEVhY2ggZW50cnkgY2FuIGJlIElQIGFkZHJlc3NlcyBvciBDSURSIGJsb2Nrcy4gTWF4IGxlbmd0aDogNTAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNsRW50cnlzPzogQXJyYXk8Um9zQWNjZXNzQ29udHJvbC5BY2xFbnRyeXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkcmVzc0lwVmVyc2lvbjogSVAgdmVyc2lvbi4gQ291bGQgYmUgXCJpcHY0XCIgb3IgXCJpcHY2XCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkcmVzc0lwVmVyc2lvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBY2Nlc3NDb250cm9sUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY2Vzc0NvbnRyb2xQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2Nlc3NDb250cm9sUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5hY2xFbnRyeXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5hY2xFbnRyeXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5hY2xFbnRyeXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2xFbnRyeXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWNsRW50cnlzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1MCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNsRW50cnlzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQWNjZXNzQ29udHJvbF9BY2xFbnRyeXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuYWNsRW50cnlzKSk7XG4gICAgaWYocHJvcGVydGllcy5hZGRyZXNzSXBWZXJzaW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5hZGRyZXNzSXBWZXJzaW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRyZXNzSXBWZXJzaW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWRkcmVzc0lwVmVyc2lvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJpcHY0XCIsXCJpcHY2XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWRkcmVzc0lwVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hZGRyZXNzSXBWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2xOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFjbE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjbE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNsTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2Nlc3NDb250cm9sUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6QWNjZXNzQ29udHJvbGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzQ29udHJvbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkFjY2Vzc0NvbnRyb2xgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWNjZXNzQ29udHJvbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWNjZXNzQ29udHJvbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFjbE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNsTmFtZSksXG4gICAgICBBY2xFbnRyeXM6IHJvcy5saXN0TWFwcGVyKHJvc0FjY2Vzc0NvbnRyb2xBY2xFbnRyeXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYWNsRW50cnlzKSxcbiAgICAgIEFkZHJlc3NJUFZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWRkcmVzc0lwVmVyc2lvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpBY2Nlc3NDb250cm9sYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQWNjZXNzQ29udHJvbCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xCOjpBY2Nlc3NDb250cm9sXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWNsSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbnRyb2wgbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjbElkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2xOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWNjZXNzIGNvbnRyb2wgbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNsTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbEVudHJ5czogQSBsaXN0IG9mIGFjbCBlbnRyeXMuIEVhY2ggZW50cnkgY2FuIGJlIElQIGFkZHJlc3NlcyBvciBDSURSIGJsb2Nrcy4gTWF4IGxlbmd0aDogNTAuXG4gICAgICovXG4gICAgcHVibGljIGFjbEVudHJ5czogQXJyYXk8Um9zQWNjZXNzQ29udHJvbC5BY2xFbnRyeXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkcmVzc0lwVmVyc2lvbjogSVAgdmVyc2lvbi4gQ291bGQgYmUgXCJpcHY0XCIgb3IgXCJpcHY2XCIuXG4gICAgICovXG4gICAgcHVibGljIGFkZHJlc3NJcFZlcnNpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTEI6OkFjY2Vzc0NvbnRyb2xgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FjY2Vzc0NvbnRyb2xQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FjY2Vzc0NvbnRyb2wuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFjbElkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdBY2xJZCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWNsTmFtZSA9IHByb3BzLmFjbE5hbWU7XG4gICAgICAgIHRoaXMuYWNsRW50cnlzID0gcHJvcHMuYWNsRW50cnlzO1xuICAgICAgICB0aGlzLmFkZHJlc3NJcFZlcnNpb24gPSBwcm9wcy5hZGRyZXNzSXBWZXJzaW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjbE5hbWU6IHRoaXMuYWNsTmFtZSxcbiAgICAgICAgICAgIGFjbEVudHJ5czogdGhpcy5hY2xFbnRyeXMsXG4gICAgICAgICAgICBhZGRyZXNzSXBWZXJzaW9uOiB0aGlzLmFkZHJlc3NJcFZlcnNpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FjY2Vzc0NvbnRyb2xQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBY2Nlc3NDb250cm9sIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBY2xFbnRyeXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW50cnk6IElQIGFkZHJlc3NlcyBvciBDSURSIGJsb2Nrcy4gRm9yIGV4YW1wbGU6IFwiMTAuMC4wLjFcIiBvciBcIjE5Mi4xNjguMC4wLzE2XCJcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVudHJ5OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29tbWVudDogRGVzY3JpcHRpb24gb2YgdGhlIGVudHJ5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tbWVudD86IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEFjbEVudHJ5c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBY2xFbnRyeXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2Nlc3NDb250cm9sX0FjbEVudHJ5c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW50cnknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW50cnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudHJ5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVudHJ5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbW1lbnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQWNsRW50cnlzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6QWNjZXNzQ29udHJvbC5BY2xFbnRyeXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEFjbEVudHJ5c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkFjY2Vzc0NvbnRyb2wuQWNsRW50cnlzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FjY2Vzc0NvbnRyb2xBY2xFbnRyeXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQWNjZXNzQ29udHJvbF9BY2xFbnRyeXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudHJ5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVudHJ5KSxcbiAgICAgIGNvbW1lbnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tbWVudCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6QmFja2VuZFNlcnZlckF0dGFjaG1lbnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9hZEJhbGFuY2VySWQ6IFRoZSBpZCBvZiBsb2FkIGJhbGFuY2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlckxpc3Q6IFRoZSBjb21tYSBkZWxpbWl0ZWQgaW5zdGFuY2UgaWQgbGlzdC5JZiB0aGUgcHJvcGVydHkgXCJCYWNrZW5kU2VydmVyc1wiIGlzIHNldHRpbmcsIHRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJMaXN0Pzogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcnM6IFRoZSBsaXN0IG9mIEVDUyBpbnN0YW5jZSwgd2hpY2ggd2lsbCBhdHRhY2hlZCB0byBsb2FkIGJhbGFuY2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJzPzogQXJyYXk8Um9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnQuQmFja2VuZFNlcnZlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcldlaWdodExpc3Q6IFRoZSBjb21tYSBkZWxpbWl0ZWQgd2VpZ2h0IGxpc3QuIElmIG5vIHZhbHVlIHNwZWNpZmllZCB3aWxsIHVzZSAxMDAuIElmIHRoZSBsZW5ndGggaXMgc21hbGwgdGhhbiBcIkJhY2tlbmRTZXJ2ZXJMaXN0XCIsIGl0IHdpbGwgY29weSB0aGUgbGFzdCBvbmUgdG8gZmlsbCB0aGUgYXJyYXkuSWYgdGhlIHByb3BlcnR5IFwiQmFja2VuZFNlcnZlcnNcIiBpcyBzZXR0aW5nLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrZW5kU2VydmVyV2VpZ2h0TGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZFNlcnZlckxpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2FkQmFsYW5jZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhY2tlbmRTZXJ2ZXJXZWlnaHRMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5iYWNrZW5kU2VydmVyV2VpZ2h0TGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZFNlcnZlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudF9CYWNrZW5kU2VydmVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5iYWNrZW5kU2VydmVycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkJhY2tlbmRTZXJ2ZXJBdHRhY2htZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkJhY2tlbmRTZXJ2ZXJBdHRhY2htZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0JhY2tlbmRTZXJ2ZXJBdHRhY2htZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIExvYWRCYWxhbmNlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvYWRCYWxhbmNlcklkKSxcbiAgICAgIEJhY2tlbmRTZXJ2ZXJMaXN0OiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5iYWNrZW5kU2VydmVyTGlzdCksXG4gICAgICBCYWNrZW5kU2VydmVyczogcm9zLmxpc3RNYXBwZXIocm9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnRCYWNrZW5kU2VydmVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5iYWNrZW5kU2VydmVycyksXG4gICAgICBCYWNrZW5kU2VydmVyV2VpZ2h0TGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYmFja2VuZFNlcnZlcldlaWdodExpc3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNMQjo6QmFja2VuZFNlcnZlckF0dGFjaG1lbnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xCOjpCYWNrZW5kU2VydmVyQXR0YWNobWVudFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJhY2tlbmRTZXJ2ZXJzOiBUaGUgY29sbGVjdGlvbiBvZiBhdHRhY2hlZCBiYWNrZW5kIHNlcnZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJhY2tlbmRTZXJ2ZXJzOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExvYWRCYWxhbmNlcklkOiBUaGUgaWQgb2YgbG9hZCBiYWxhbmNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlcklkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIGlkIG9mIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcHVibGljIGxvYWRCYWxhbmNlcklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlckxpc3Q6IFRoZSBjb21tYSBkZWxpbWl0ZWQgaW5zdGFuY2UgaWQgbGlzdC5JZiB0aGUgcHJvcGVydHkgXCJCYWNrZW5kU2VydmVyc1wiIGlzIHNldHRpbmcsIHRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBiYWNrZW5kU2VydmVyTGlzdDogc3RyaW5nW10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcnM6IFRoZSBsaXN0IG9mIEVDUyBpbnN0YW5jZSwgd2hpY2ggd2lsbCBhdHRhY2hlZCB0byBsb2FkIGJhbGFuY2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBiYWNrZW5kU2VydmVyczogQXJyYXk8Um9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnQuQmFja2VuZFNlcnZlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcldlaWdodExpc3Q6IFRoZSBjb21tYSBkZWxpbWl0ZWQgd2VpZ2h0IGxpc3QuIElmIG5vIHZhbHVlIHNwZWNpZmllZCB3aWxsIHVzZSAxMDAuIElmIHRoZSBsZW5ndGggaXMgc21hbGwgdGhhbiBcIkJhY2tlbmRTZXJ2ZXJMaXN0XCIsIGl0IHdpbGwgY29weSB0aGUgbGFzdCBvbmUgdG8gZmlsbCB0aGUgYXJyYXkuSWYgdGhlIHByb3BlcnR5IFwiQmFja2VuZFNlcnZlcnNcIiBpcyBzZXR0aW5nLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFja2VuZFNlcnZlcldlaWdodExpc3Q6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xCOjpCYWNrZW5kU2VydmVyQXR0YWNobWVudGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0JhY2tlbmRTZXJ2ZXJBdHRhY2htZW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJCYWNrZW5kU2VydmVycyA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQmFja2VuZFNlcnZlcnMnKSk7XG4gICAgICAgIHRoaXMuYXR0ckxvYWRCYWxhbmNlcklkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdMb2FkQmFsYW5jZXJJZCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubG9hZEJhbGFuY2VySWQgPSBwcm9wcy5sb2FkQmFsYW5jZXJJZDtcbiAgICAgICAgdGhpcy5iYWNrZW5kU2VydmVyTGlzdCA9IHByb3BzLmJhY2tlbmRTZXJ2ZXJMaXN0O1xuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2ZXJzID0gcHJvcHMuYmFja2VuZFNlcnZlcnM7XG4gICAgICAgIHRoaXMuYmFja2VuZFNlcnZlcldlaWdodExpc3QgPSBwcm9wcy5iYWNrZW5kU2VydmVyV2VpZ2h0TGlzdDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJJZDogdGhpcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIGJhY2tlbmRTZXJ2ZXJMaXN0OiB0aGlzLmJhY2tlbmRTZXJ2ZXJMaXN0LFxuICAgICAgICAgICAgYmFja2VuZFNlcnZlcnM6IHRoaXMuYmFja2VuZFNlcnZlcnMsXG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyV2VpZ2h0TGlzdDogdGhpcy5iYWNrZW5kU2VydmVyV2VpZ2h0TGlzdCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQmFja2VuZFNlcnZlckF0dGFjaG1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQmFja2VuZFNlcnZlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdHlwZTogVGhlIGJhY2tlbmQgc2VydmVyIHR5cGUuIFZhbGlkIHZhbHVlczplY3M6IEVDUyBpbnN0YW5jZSAoZGVmYXVsdCllbmk6IEVsYXN0aWMgTmV0d29yayBJbnRlcmZhY2UgKEVOSSlcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmVySWQ6IE5lZWQgb25lIHZhbGlkIGluc3RhbmNlIGlkLiBUaGUgaW5zdGFuY2Ugc3RhdHVzIHNob3VsZCBydW5uaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVySWQ6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgYmFja2VuZCBzZXJ2ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJJcDogVGhlIElQIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZlcklwPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHdlaWdodDogVGhlIHdlaWdodCBvZiBiYWNrZW5kIHNlcnZlciBvZiBsb2FkIGJhbGFuY2VyLiBGcm9tIDAgdG8gMTAwLCAwIG1lYW5zIG9mZmxpbmUuIERlZmF1bHQgaXMgMTAwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBCYWNrZW5kU2VydmVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBCYWNrZW5kU2VydmVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0JhY2tlbmRTZXJ2ZXJBdHRhY2htZW50X0JhY2tlbmRTZXJ2ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlcklwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZlcklwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWlnaHQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMud2VpZ2h0KSk7XG4gICAgaWYocHJvcGVydGllcy53ZWlnaHQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLndlaWdodCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2VpZ2h0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMud2VpZ2h0LFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlaWdodCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy53ZWlnaHQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpCYWNrZW5kU2VydmVyQXR0YWNobWVudC5CYWNrZW5kU2VydmVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpCYWNrZW5kU2VydmVyQXR0YWNobWVudC5CYWNrZW5kU2VydmVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCYWNrZW5kU2VydmVyQXR0YWNobWVudEJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0JhY2tlbmRTZXJ2ZXJBdHRhY2htZW50X0JhY2tlbmRTZXJ2ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgU2VydmVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVySWQpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgU2VydmVySXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVySXApLFxuICAgICAgV2VpZ2h0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlaWdodCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6QmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcnM6IFRoZSBsaXN0IG9mIGEgY29tYmluYXRpb24gb2YgRUNTIEluc3RhbmNlLVBvcnQtV2VpZ2h0LlNhbWUgZWNzIGluc3RhbmNlIHdpdGggZGlmZmVyZW50IHBvcnQgaXMgYWxsb3dlZCwgYnV0IHNhbWUgZWNzIGluc3RhbmNlIHdpdGggc2FtZSBwb3J0IGlzbid0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJzOiBBcnJheTxSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbi5CYWNrZW5kU2VydmVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U2VydmVyR3JvdXBJZDogVGhlIElEIG9mIHZpcnR1YWwgc2VydmVyIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTZXJ2ZXJHcm91cElkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndlNlcnZlckdyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudlNlcnZlckdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTZXJ2ZXJHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZTZXJ2ZXJHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYWNrZW5kU2VydmVycycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5iYWNrZW5kU2VydmVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZFNlcnZlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbl9CYWNrZW5kU2VydmVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5iYWNrZW5kU2VydmVycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkJhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkJhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0JhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEJhY2tlbmRTZXJ2ZXJzOiByb3MubGlzdE1hcHBlcihyb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbkJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJzKSxcbiAgICAgIFZTZXJ2ZXJHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZTZXJ2ZXJHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTTEI6OkJhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNMQjo6QmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWU2VydmVyR3JvdXBJZDogVGhlIElEIG9mIHZpcnR1YWwgc2VydmVyIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlNlcnZlckdyb3VwSWQ6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhY2tlbmRTZXJ2ZXJzOiBUaGUgbGlzdCBvZiBhIGNvbWJpbmF0aW9uIG9mIEVDUyBJbnN0YW5jZS1Qb3J0LVdlaWdodC5TYW1lIGVjcyBpbnN0YW5jZSB3aXRoIGRpZmZlcmVudCBwb3J0IGlzIGFsbG93ZWQsIGJ1dCBzYW1lIGVjcyBpbnN0YW5jZSB3aXRoIHNhbWUgcG9ydCBpc24ndC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFja2VuZFNlcnZlcnM6IEFycmF5PFJvc0JhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uLkJhY2tlbmRTZXJ2ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTZXJ2ZXJHcm91cElkOiBUaGUgSUQgb2YgdmlydHVhbCBzZXJ2ZXIgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHZTZXJ2ZXJHcm91cElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xCOjpCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0JhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJWU2VydmVyR3JvdXBJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnVlNlcnZlckdyb3VwSWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2ZXJzID0gcHJvcHMuYmFja2VuZFNlcnZlcnM7XG4gICAgICAgIHRoaXMudlNlcnZlckdyb3VwSWQgPSBwcm9wcy52U2VydmVyR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyczogdGhpcy5iYWNrZW5kU2VydmVycyxcbiAgICAgICAgICAgIHZTZXJ2ZXJHcm91cElkOiB0aGlzLnZTZXJ2ZXJHcm91cElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0JhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBCYWNrZW5kU2VydmVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJJZDogTmVlZCBvbmUgdmFsaWQgRUNTIGluc3RhbmNlIGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVySWQ6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiBUaGUgcG9ydCBvZiBiYWNrZW5kIHNlcnZlci4gRnJvbSAxIHRvIDY1NTM1LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHdlaWdodDogVGhlIHdlaWdodCBvZiBiYWNrZW5kIHNlcnZlciBvZiBsb2FkIGJhbGFuY2VyLiBGcm9tIDAgdG8gMTAwLCAwIG1lYW5zIG9mZmxpbmUuIERlZmF1bHQgaXMgMTAwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgd2VpZ2h0PzogbnVtYmVyO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbl9CYWNrZW5kU2VydmVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGlmKHByb3BlcnRpZXMud2VpZ2h0ICYmICh0eXBlb2YgcHJvcGVydGllcy53ZWlnaHQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlaWdodCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLndlaWdodCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWlnaHQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMud2VpZ2h0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6QmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb24uQmFja2VuZFNlcnZlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6QmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb24uQmFja2VuZFNlcnZlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25CYWNrZW5kU2VydmVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbl9CYWNrZW5kU2VydmVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgU2VydmVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVySWQpLFxuICAgICAgUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIFdlaWdodDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWlnaHQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6OkNlcnRpZmljYXRlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NlcnRpZmljYXRlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlOiBUaGUgY29udGVudCBvZiB0aGUgY2VydGlmaWNhdGUgcHVibGljIGtleS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0aWZpY2F0ZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsaUNsb3VkQ2VydGlmaWNhdGVJZDogVGhlIElEIG9mIHRoZSBBbGliYWJhIENsb3VkIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsaUNsb3VkQ2VydGlmaWNhdGVJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGlDbG91ZENlcnRpZmljYXRlTmFtZTogVGhlIG5hbWUgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxpQ2xvdWRDZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VydGlmaWNhdGVOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlS2V5OiBUaGUgcHJpdmF0ZSBrZXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpdmF0ZUtleT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDZXJ0aWZpY2F0ZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZXJ0aWZpY2F0ZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NlcnRpZmljYXRlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5jZXJ0aWZpY2F0ZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNlcnRpZmljYXRlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydGlmaWNhdGVUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY2VydGlmaWNhdGVUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlNlcnZlclwiLFwiQ0FcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0aWZpY2F0ZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VydGlmaWNhdGVUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGlDbG91ZENlcnRpZmljYXRlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbGlDbG91ZENlcnRpZmljYXRlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpdmF0ZUtleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcml2YXRlS2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0aWZpY2F0ZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VydGlmaWNhdGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0aWZpY2F0ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jZXJ0aWZpY2F0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydGlmaWNhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VydGlmaWNhdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsaUNsb3VkQ2VydGlmaWNhdGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbGlDbG91ZENlcnRpZmljYXRlSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VydGlmaWNhdGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpDZXJ0aWZpY2F0ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VydGlmaWNhdGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpDZXJ0aWZpY2F0ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDZXJ0aWZpY2F0ZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2VydGlmaWNhdGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDZXJ0aWZpY2F0ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0aWZpY2F0ZSksXG4gICAgICBBbGlDbG91ZENlcnRpZmljYXRlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxpQ2xvdWRDZXJ0aWZpY2F0ZUlkKSxcbiAgICAgIEFsaUNsb3VkQ2VydGlmaWNhdGVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFsaUNsb3VkQ2VydGlmaWNhdGVOYW1lKSxcbiAgICAgIENlcnRpZmljYXRlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0aWZpY2F0ZU5hbWUpLFxuICAgICAgQ2VydGlmaWNhdGVUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlVHlwZSksXG4gICAgICBQcml2YXRlS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaXZhdGVLZXkpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpDZXJ0aWZpY2F0ZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NlcnRpZmljYXRlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTTEI6OkNlcnRpZmljYXRlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2VydGlmaWNhdGVJZDogVGhlIElEIG9mIHRoZSBjZXJ0aWZpY2F0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNlcnRpZmljYXRlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRmluZ2VycHJpbnQ6IFRoZSBmaW5nZXJwcmludCBvZiB0aGUgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGaW5nZXJwcmludDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGU6IFRoZSBjb250ZW50IG9mIHRoZSBjZXJ0aWZpY2F0ZSBwdWJsaWMga2V5LlxuICAgICAqL1xuICAgIHB1YmxpYyBjZXJ0aWZpY2F0ZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsaUNsb3VkQ2VydGlmaWNhdGVJZDogVGhlIElEIG9mIHRoZSBBbGliYWJhIENsb3VkIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhbGlDbG91ZENlcnRpZmljYXRlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGlDbG91ZENlcnRpZmljYXRlTmFtZTogVGhlIG5hbWUgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcHVibGljIGFsaUNsb3VkQ2VydGlmaWNhdGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcHVibGljIGNlcnRpZmljYXRlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZXJ0aWZpY2F0ZVR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlS2V5OiBUaGUgcHJpdmF0ZSBrZXkuXG4gICAgICovXG4gICAgcHVibGljIHByaXZhdGVLZXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTEI6OkNlcnRpZmljYXRlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDZXJ0aWZpY2F0ZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2VydGlmaWNhdGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNlcnRpZmljYXRlSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0NlcnRpZmljYXRlSWQnKSk7XG4gICAgICAgIHRoaXMuYXR0ckZpbmdlcnByaW50ID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdGaW5nZXJwcmludCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2VydGlmaWNhdGUgPSBwcm9wcy5jZXJ0aWZpY2F0ZTtcbiAgICAgICAgdGhpcy5hbGlDbG91ZENlcnRpZmljYXRlSWQgPSBwcm9wcy5hbGlDbG91ZENlcnRpZmljYXRlSWQ7XG4gICAgICAgIHRoaXMuYWxpQ2xvdWRDZXJ0aWZpY2F0ZU5hbWUgPSBwcm9wcy5hbGlDbG91ZENlcnRpZmljYXRlTmFtZTtcbiAgICAgICAgdGhpcy5jZXJ0aWZpY2F0ZU5hbWUgPSBwcm9wcy5jZXJ0aWZpY2F0ZU5hbWU7XG4gICAgICAgIHRoaXMuY2VydGlmaWNhdGVUeXBlID0gcHJvcHMuY2VydGlmaWNhdGVUeXBlO1xuICAgICAgICB0aGlzLnByaXZhdGVLZXkgPSBwcm9wcy5wcml2YXRlS2V5O1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZTogdGhpcy5jZXJ0aWZpY2F0ZSxcbiAgICAgICAgICAgIGFsaUNsb3VkQ2VydGlmaWNhdGVJZDogdGhpcy5hbGlDbG91ZENlcnRpZmljYXRlSWQsXG4gICAgICAgICAgICBhbGlDbG91ZENlcnRpZmljYXRlTmFtZTogdGhpcy5hbGlDbG91ZENlcnRpZmljYXRlTmFtZSxcbiAgICAgICAgICAgIGNlcnRpZmljYXRlTmFtZTogdGhpcy5jZXJ0aWZpY2F0ZU5hbWUsXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZVR5cGU6IHRoaXMuY2VydGlmaWNhdGVUeXBlLFxuICAgICAgICAgICAgcHJpdmF0ZUtleTogdGhpcy5wcml2YXRlS2V5LFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VydGlmaWNhdGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6RG9tYWluRXh0ZW5zaW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RvbWFpbkV4dGVuc2lvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW46IFRoZSBkb21haW4gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW46IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFRoZSBmcm9udC1lbmQgSFRUUFMgbGlzdGVuZXIgcG9ydCBvZiB0aGUgU2VydmVyIExvYWQgQmFsYW5jZXIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlOlxuICAgICAqIDEtNjU1MzVcbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lclBvcnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIFNlcnZlciBMb2FkIEJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmVyQ2VydGlmaWNhdGVJZDogVGhlIElEIG9mIHRoZSBjZXJ0aWZpY2F0ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkb21haW4gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2ZXJDZXJ0aWZpY2F0ZUlkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRG9tYWluRXh0ZW5zaW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RvbWFpbkV4dGVuc2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RvbWFpbkV4dGVuc2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGlzdGVuZXJQb3J0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxpc3RlbmVyUG9ydCkpO1xuICAgIGlmKHByb3BlcnRpZXMubGlzdGVuZXJQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5saXN0ZW5lclBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpc3RlbmVyUG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmxpc3RlbmVyUG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpc3RlbmVyUG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5saXN0ZW5lclBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlckNlcnRpZmljYXRlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmVyQ2VydGlmaWNhdGVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVyQ2VydGlmaWNhdGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJDZXJ0aWZpY2F0ZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2FkQmFsYW5jZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kb21haW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW4pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRG9tYWluRXh0ZW5zaW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6RG9tYWluRXh0ZW5zaW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEb21haW5FeHRlbnNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpEb21haW5FeHRlbnNpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRG9tYWluRXh0ZW5zaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEb21haW5FeHRlbnNpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEb21haW46IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZG9tYWluKSxcbiAgICAgIExpc3RlbmVyUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5saXN0ZW5lclBvcnQpLFxuICAgICAgTG9hZEJhbGFuY2VySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpLFxuICAgICAgU2VydmVyQ2VydGlmaWNhdGVJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2ZXJDZXJ0aWZpY2F0ZUlkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTTEI6OkRvbWFpbkV4dGVuc2lvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RvbWFpbkV4dGVuc2lvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xCOjpEb21haW5FeHRlbnNpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5FeHRlbnNpb25JZDogVGhlIElEIG9mIHRoZSBjcmVhdGVkIGRvbWFpbiBuYW1lIGV4dGVuc2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbkV4dGVuc2lvbklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExpc3RlbmVyUG9ydDogVGhlIGZyb250LWVuZCBIVFRQUyBsaXN0ZW5lciBwb3J0IG9mIHRoZSBTZXJ2ZXIgTG9hZCBCYWxhbmNlciBpbnN0YW5jZS4gVmFsaWQgdmFsdWU6XG4xLTY1NTM1XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMaXN0ZW5lclBvcnQ6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbjogVGhlIGRvbWFpbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW46IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFRoZSBmcm9udC1lbmQgSFRUUFMgbGlzdGVuZXIgcG9ydCBvZiB0aGUgU2VydmVyIExvYWQgQmFsYW5jZXIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlOlxuICAgICAqIDEtNjU1MzVcbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuZXJQb3J0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9hZEJhbGFuY2VySWQ6IFRoZSBJRCBvZiBTZXJ2ZXIgTG9hZCBCYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEJhbGFuY2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJDZXJ0aWZpY2F0ZUlkOiBUaGUgSUQgb2YgdGhlIGNlcnRpZmljYXRlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRvbWFpbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2ZXJDZXJ0aWZpY2F0ZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xCOjpEb21haW5FeHRlbnNpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RvbWFpbkV4dGVuc2lvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRG9tYWluRXh0ZW5zaW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEb21haW5FeHRlbnNpb25JZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnRG9tYWluRXh0ZW5zaW9uSWQnKSk7XG4gICAgICAgIHRoaXMuYXR0ckxpc3RlbmVyUG9ydCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnTGlzdGVuZXJQb3J0JykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kb21haW4gPSBwcm9wcy5kb21haW47XG4gICAgICAgIHRoaXMubGlzdGVuZXJQb3J0ID0gcHJvcHMubGlzdGVuZXJQb3J0O1xuICAgICAgICB0aGlzLmxvYWRCYWxhbmNlcklkID0gcHJvcHMubG9hZEJhbGFuY2VySWQ7XG4gICAgICAgIHRoaXMuc2VydmVyQ2VydGlmaWNhdGVJZCA9IHByb3BzLnNlcnZlckNlcnRpZmljYXRlSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgICAgICAgIGxpc3RlbmVyUG9ydDogdGhpcy5saXN0ZW5lclBvcnQsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJJZDogdGhpcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIHNlcnZlckNlcnRpZmljYXRlSWQ6IHRoaXMuc2VydmVyQ2VydGlmaWNhdGVJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRG9tYWluRXh0ZW5zaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6Okxpc3RlbmVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0xpc3RlbmVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhY2tlbmRTZXJ2ZXJQb3J0OiBCYWNrZW5kIHNlcnZlciBjYW4gbGlzdGVuIG9uIHBvcnRzIGZyb20gMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrZW5kU2VydmVyUG9ydDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBvZiBuZXR3b3JrLCB1bml0IGluIE1icHMoTWlsbGlvbiBiaXRzIHBlciBzZWNvbmQpLiBJZiB0aGUgc3BlY2lmaWVkIGxvYWQgYmFsYW5jZXIgd2l0aCBcIkxPQURfQkFMQU5DRV9JRFwiIGlzIGNoYXJnZWQgYnkgXCJwYXlieWJhbmR3aWR0aFwiIGFuZCBpcyBjcmVhdGVkIGluIGNsYXNzaWMgbmV0d29yaywgZWFjaCBMaXN0ZW5lcidzIGJhbmR3aWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCB0aGUgc3VtIG9mIGFsbCBvZiBpdHMgTGlzdGVuZXJzJyBiYW5kd2lkdGggY2FuJ3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBiYW5kd2lkdGggb2YgdGhlIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGlzdGVuZXJQb3J0OiBQb3J0IGZvciBmcm9udCBsaXN0ZW5lci4gUmFuZ2UgZnJvbSAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpc3RlbmVyUG9ydDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlcklkOiBUaGUgaWQgb2YgbG9hZCBiYWxhbmNlciB0byBjcmVhdGUgbGlzdGVuZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogVGhlIGxvYWQgYmFsYW5jZXIgdHJhbnNwb3J0IHByb3RvY29sIHRvIHVzZSBmb3Igcm91dGluZzogaHR0cCwgaHR0cHMsIHRjcCwgb3IgdWRwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbnRyb2wgbGlzdCBhc3NvY2lhdGVkIHdpdGggdGhlIGxpc3RlbmVyIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogSWYgdGhlIHZhbHVlIG9mIHRoZSBBY2xTdGF0dXMgcGFyYW1ldGVyIGlzIG9uLCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2xTdGF0dXM6IEluZGljYXRlcyB3aGV0aGVyIHRvIGVuYWJsZSBhY2Nlc3MgY29udHJvbC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IG9uIHwgb2ZmLiBEZWZhdWx0IHZhbHVlOiBvZmZcbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xTdGF0dXM/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsVHlwZTogVGhlIGFjY2VzcyBjb250cm9sIHR5cGU6XG4gICAgICogKiB3aGl0ZTogSW5kaWNhdGVzIGEgd2hpdGVsaXN0LiBPbmx5IHJlcXVlc3RzIGZyb20gSVAgYWRkcmVzc2VzIG9yIENJRFIgYmxvY2tzIGluIHRoZSBzZWxlY3RlZCBhY2Nlc3MgY29udHJvbCBsaXN0cyBhcmUgZm9yd2FyZGVkLiBUaGlzIGFwcGxpZXMgdG8gc2NlbmFyaW9zIGluIHdoaWNoIGFuIGFwcGxpY2F0aW9uIG9ubHkgYWxsb3dzIGFjY2VzcyBmcm9tIHNwZWNpZmljIElQIGFkZHJlc3Nlcy5cbiAgICAgKiBFbmFibGluZyBhIHdoaXRlbGlzdCBwb3NlcyBzb21lIHJpc2tzIHRvIHlvdXIgc2VydmljZXMuXG4gICAgICogQWZ0ZXIgYSB3aGl0ZWxpc3QgaXMgZW5hYmxlZCwgb25seSB0aGUgSVAgYWRkcmVzc2VzIGluIHRoZSBsaXN0IGNhbiBhY2Nlc3MgdGhlIGxpc3RlbmVyLlxuICAgICAqIElmIHlvdSBlbmFibGUgYSB3aGl0ZWxpc3Qgd2l0aG91dCBhZGRpbmcgYW55IElQIGFkZHJlc3NlcyBpbiB0aGUgbGlzdCwgbm8gcmVxdWVzdHMgYXJlIGZvcndhcmRlZC5cbiAgICAgKiAqIGJsYWNrOiBJbmRpY2F0ZXMgYSBibGFja2xpc3QuIFJlcXVlc3RzIGZyb20gSVAgYWRkcmVzc2VzIG9yIENJRFIgYmxvY2tzIGluIHRoZSBzZWxlY3RlZCBhY2Nlc3MgY29udHJvbCBsaXN0cyBhcmUgbm90IGZvcndhcmRlZCAodGhhdCBpcywgdGhleSBhcmUgYmxvY2tlZCkuIFRoaXMgYXBwbGllcyB0byBzY2VuYXJpb3MgaW4gd2hpY2ggYW4gYXBwbGljYXRpb24gb25seSBkZW5pZXMgYWNjZXNzIGZyb20gc3BlY2lmaWMgSVAgYWRkcmVzc2VzLlxuICAgICAqIElmIHlvdSBlbmFibGUgYSBibGFja2xpc3Qgd2l0aG91dCBhZGRpbmcgYW55IElQIGFkZHJlc3NlcyBpbiB0aGUgbGlzdCwgYWxsIHJlcXVlc3RzIGFyZSBmb3J3YXJkZWQuXG4gICAgICogXG4gICAgICogSWYgdGhlIHZhbHVlIG9mIHRoZSBBY2xTdGF0dXMgcGFyYW1ldGVyIGlzIG9uLCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNhQ2VydGlmaWNhdGVJZDogQ0Egc2VydmVyIGNlcnRpZmljYXRlIGlkLCBmb3IgaHR0cHMgbGlzdGVuZXIgb25seS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjYUNlcnRpZmljYXRlSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGVhbHRoQ2hlY2s6IFRoZSBwcm9wZXJ0aWVzIG9mIGhlYWx0aCBjaGVja2luZyBzZXR0aW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrPzogUm9zTGlzdGVuZXIuSGVhbHRoQ2hlY2tQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBodHRwQ29uZmlnOiBDb25maWcgZm9yIGh0dHAgcHJvdG9jb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaHR0cENvbmZpZz86IFJvc0xpc3RlbmVyLkh0dHBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpZGxlVGltZW91dDogU3BlY2lmeSB0aGUgaWRsZSBjb25uZWN0aW9uIHRpbWVvdXQgaW4gc2Vjb25kcy4gVmFsaWQgdmFsdWU6IDEtNjAgSWYgbm8gcmVxdWVzdCBpcyByZWNlaXZlZCBkdXJpbmcgdGhlIHNwZWNpZmllZCB0aW1lb3V0IHBlcmlvZCwgU2VydmVyIExvYWQgQmFsYW5jZXIgd2lsbCB0ZW1wb3JhcmlseSB0ZXJtaW5hdGUgdGhlIGNvbm5lY3Rpb24gYW5kIHJlc3RhcnQgdGhlIGNvbm5lY3Rpb24gd2hlbiB0aGUgbmV4dCByZXF1ZXN0IGNvbWVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlkbGVUaW1lb3V0PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hc3RlclNsYXZlU2VydmVyR3JvdXBJZDogVGhlIGlkIG9mIHRoZSBNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwIHdoaWNoIHVzZSBpbiBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyc2lzdGVuY2U6IFRoZSBwcm9wZXJ0aWVzIG9mIHBlcnNpc3RlbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlPzogUm9zTGlzdGVuZXIuUGVyc2lzdGVuY2VQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0VGltZW91dDogU3BlY2lmeSB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIHNlY29uZHMuIFZhbGlkIHZhbHVlOiAxLTE4MCBJZiBubyByZXNwb25zZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlciBkdXJpbmcgdGhlIHNwZWNpZmllZCB0aW1lb3V0IHBlcmlvZCwgU2VydmVyIExvYWQgQmFsYW5jZXIgd2lsbCBzdG9wIHdhaXRpbmcgYW5kIHNlbmQgYW4gSFRUUCA1MDQgZXJyb3IgdG8gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXF1ZXN0VGltZW91dD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2hlZHVsZXI6IFRoZSBzY2hlZHVsZXIgYWxnb3JpdGhtLiBTdXBwb3J0ICd3cnInIG9yICd3bGMnIG9ubHksIGRlZmF1bHQgaXMgJ3dycidcbiAgICAgKi9cbiAgICByZWFkb25seSBzY2hlZHVsZXI/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmVyQ2VydGlmaWNhdGVJZDogU2VydmVyIGNlcnRpZmljYXRlIGlkLCBmb3IgaHR0cHMgbGlzdGVuZXIgb25seSwgdGhpcyBwcm9wZXJ0aWVzIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZlckNlcnRpZmljYXRlSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlNlcnZlckdyb3VwSWQ6IFRoZSBpZCBvZiB0aGUgVlNlcnZlckdyb3VwIHdoaWNoIHVzZSBpbiBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U2VydmVyR3JvdXBJZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NMaXN0ZW5lclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NMaXN0ZW5lclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xpc3RlbmVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5yZXF1ZXN0VGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVxdWVzdFRpbWVvdXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RUaW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVxdWVzdFRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDE4MCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdFRpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmVxdWVzdFRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpc3RlbmVyUG9ydCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5saXN0ZW5lclBvcnQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmxpc3RlbmVyUG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMubGlzdGVuZXJQb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsaXN0ZW5lclBvcnQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5saXN0ZW5lclBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsaXN0ZW5lclBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubGlzdGVuZXJQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U2VydmVyR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U2VydmVyR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2FDZXJ0aWZpY2F0ZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNhQ2VydGlmaWNhdGVJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2NoZWR1bGVyICYmICh0eXBlb2YgcHJvcGVydGllcy5zY2hlZHVsZXIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVkdWxlcicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjaGVkdWxlcixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJ3cnJcIixcIndsY1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVkdWxlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2hlZHVsZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjbElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFsdGhDaGVjaycsIFJvc0xpc3RlbmVyX0hlYWx0aENoZWNrUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2spKTtcbiAgICBpZihwcm9wZXJ0aWVzLmlkbGVUaW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy5pZGxlVGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWRsZVRpbWVvdXQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pZGxlVGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lkbGVUaW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmlkbGVUaW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2FkQmFsYW5jZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhY2tlbmRTZXJ2ZXJQb3J0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJQb3J0KSk7XG4gICAgaWYocHJvcGVydGllcy5iYWNrZW5kU2VydmVyUG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMuYmFja2VuZFNlcnZlclBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhY2tlbmRTZXJ2ZXJQb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYmFja2VuZFNlcnZlclBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYWNrZW5kU2VydmVyUG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYWNrZW5kU2VydmVyUG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyc2lzdGVuY2UnLCBSb3NMaXN0ZW5lcl9QZXJzaXN0ZW5jZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBlcnNpc3RlbmNlKSk7XG4gICAgaWYocHJvcGVydGllcy5hY2xTdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFjbFN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNsU3RhdHVzJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWNsU3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIm9uXCIsXCJvZmZcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2xTdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNsU3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYW5kd2lkdGgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYmFuZHdpZHRoKSk7XG4gICAgaWYocHJvcGVydGllcy5iYW5kd2lkdGggJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmJhbmR3aWR0aCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYmFuZHdpZHRoLFxuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogMTAwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJhbmR3aWR0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1hc3RlclNsYXZlU2VydmVyR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVyQ2VydGlmaWNhdGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJDZXJ0aWZpY2F0ZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwQ29uZmlnJywgUm9zTGlzdGVuZXJfSHR0cENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmh0dHBDb25maWcpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFjbFR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFjbFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjbFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hY2xUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIndoaXRlXCIsXCJibGFja1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjbFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNsVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm90b2NvbCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJodHRwXCIsXCJodHRwc1wiLFwidGNwXCIsXCJ1ZHBcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NMaXN0ZW5lclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6Okxpc3RlbmVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NMaXN0ZW5lclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6Okxpc3RlbmVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0xpc3RlbmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NMaXN0ZW5lclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEJhY2tlbmRTZXJ2ZXJQb3J0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJQb3J0KSxcbiAgICAgIEJhbmR3aWR0aDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYW5kd2lkdGgpLFxuICAgICAgTGlzdGVuZXJQb3J0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpc3RlbmVyUG9ydCksXG4gICAgICBMb2FkQmFsYW5jZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCksXG4gICAgICBQcm90b2NvbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm90b2NvbCksXG4gICAgICBBY2xJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2xJZCksXG4gICAgICBBY2xTdGF0dXM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNsU3RhdHVzKSxcbiAgICAgIEFjbFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNsVHlwZSksXG4gICAgICBDQUNlcnRpZmljYXRlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2FDZXJ0aWZpY2F0ZUlkKSxcbiAgICAgIEhlYWx0aENoZWNrOiByb3NMaXN0ZW5lckhlYWx0aENoZWNrUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2spLFxuICAgICAgSHR0cENvbmZpZzogcm9zTGlzdGVuZXJIdHRwQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cENvbmZpZyksXG4gICAgICBJZGxlVGltZW91dDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZGxlVGltZW91dCksXG4gICAgICBNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkKSxcbiAgICAgIFBlcnNpc3RlbmNlOiByb3NMaXN0ZW5lclBlcnNpc3RlbmNlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyc2lzdGVuY2UpLFxuICAgICAgUmVxdWVzdFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdFRpbWVvdXQpLFxuICAgICAgU2NoZWR1bGVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaGVkdWxlciksXG4gICAgICBTZXJ2ZXJDZXJ0aWZpY2F0ZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZlckNlcnRpZmljYXRlSWQpLFxuICAgICAgVlNlcnZlckdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudlNlcnZlckdyb3VwSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNMQjo6TGlzdGVuZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NMaXN0ZW5lciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xCOjpMaXN0ZW5lclwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExpc3RlbmVyUG9ydHNBbmRQcm90b2NvbDogVGhlIGNvbGxlY3Rpb24gb2YgbGlzdGVuZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMaXN0ZW5lclBvcnRzQW5kUHJvdG9jb2w6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9hZEJhbGFuY2VySWQ6IFRoZSBpZCBvZiBsb2FkIGJhbGFuY2VyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2FkQmFsYW5jZXJJZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlclBvcnQ6IEJhY2tlbmQgc2VydmVyIGNhbiBsaXN0ZW4gb24gcG9ydHMgZnJvbSAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHB1YmxpYyBiYWNrZW5kU2VydmVyUG9ydDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBvZiBuZXR3b3JrLCB1bml0IGluIE1icHMoTWlsbGlvbiBiaXRzIHBlciBzZWNvbmQpLiBJZiB0aGUgc3BlY2lmaWVkIGxvYWQgYmFsYW5jZXIgd2l0aCBcIkxPQURfQkFMQU5DRV9JRFwiIGlzIGNoYXJnZWQgYnkgXCJwYXlieWJhbmR3aWR0aFwiIGFuZCBpcyBjcmVhdGVkIGluIGNsYXNzaWMgbmV0d29yaywgZWFjaCBMaXN0ZW5lcidzIGJhbmR3aWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCB0aGUgc3VtIG9mIGFsbCBvZiBpdHMgTGlzdGVuZXJzJyBiYW5kd2lkdGggY2FuJ3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBiYW5kd2lkdGggb2YgdGhlIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcHVibGljIGJhbmR3aWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpc3RlbmVyUG9ydDogUG9ydCBmb3IgZnJvbnQgbGlzdGVuZXIuIFJhbmdlIGZyb20gMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuZXJQb3J0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9hZEJhbGFuY2VySWQ6IFRoZSBpZCBvZiBsb2FkIGJhbGFuY2VyIHRvIGNyZWF0ZSBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEJhbGFuY2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogVGhlIGxvYWQgYmFsYW5jZXIgdHJhbnNwb3J0IHByb3RvY29sIHRvIHVzZSBmb3Igcm91dGluZzogaHR0cCwgaHR0cHMsIHRjcCwgb3IgdWRwLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm90b2NvbDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbElkOiBUaGUgSUQgb2YgdGhlIGFjY2VzcyBjb250cm9sIGxpc3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBsaXN0ZW5lciB0byBiZSBjcmVhdGVkLlxuICAgICAqIElmIHRoZSB2YWx1ZSBvZiB0aGUgQWNsU3RhdHVzIHBhcmFtZXRlciBpcyBvbiwgdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIGFjbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsU3RhdHVzOiBJbmRpY2F0ZXMgd2hldGhlciB0byBlbmFibGUgYWNjZXNzIGNvbnRyb2wuXG4gICAgICogVmFsaWQgdmFsdWVzOiBvbiB8IG9mZi4gRGVmYXVsdCB2YWx1ZTogb2ZmXG4gICAgICovXG4gICAgcHVibGljIGFjbFN0YXR1czogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbFR5cGU6IFRoZSBhY2Nlc3MgY29udHJvbCB0eXBlOlxuICAgICAqICogd2hpdGU6IEluZGljYXRlcyBhIHdoaXRlbGlzdC4gT25seSByZXF1ZXN0cyBmcm9tIElQIGFkZHJlc3NlcyBvciBDSURSIGJsb2NrcyBpbiB0aGUgc2VsZWN0ZWQgYWNjZXNzIGNvbnRyb2wgbGlzdHMgYXJlIGZvcndhcmRlZC4gVGhpcyBhcHBsaWVzIHRvIHNjZW5hcmlvcyBpbiB3aGljaCBhbiBhcHBsaWNhdGlvbiBvbmx5IGFsbG93cyBhY2Nlc3MgZnJvbSBzcGVjaWZpYyBJUCBhZGRyZXNzZXMuXG4gICAgICogRW5hYmxpbmcgYSB3aGl0ZWxpc3QgcG9zZXMgc29tZSByaXNrcyB0byB5b3VyIHNlcnZpY2VzLlxuICAgICAqIEFmdGVyIGEgd2hpdGVsaXN0IGlzIGVuYWJsZWQsIG9ubHkgdGhlIElQIGFkZHJlc3NlcyBpbiB0aGUgbGlzdCBjYW4gYWNjZXNzIHRoZSBsaXN0ZW5lci5cbiAgICAgKiBJZiB5b3UgZW5hYmxlIGEgd2hpdGVsaXN0IHdpdGhvdXQgYWRkaW5nIGFueSBJUCBhZGRyZXNzZXMgaW4gdGhlIGxpc3QsIG5vIHJlcXVlc3RzIGFyZSBmb3J3YXJkZWQuXG4gICAgICogKiBibGFjazogSW5kaWNhdGVzIGEgYmxhY2tsaXN0LiBSZXF1ZXN0cyBmcm9tIElQIGFkZHJlc3NlcyBvciBDSURSIGJsb2NrcyBpbiB0aGUgc2VsZWN0ZWQgYWNjZXNzIGNvbnRyb2wgbGlzdHMgYXJlIG5vdCBmb3J3YXJkZWQgKHRoYXQgaXMsIHRoZXkgYXJlIGJsb2NrZWQpLiBUaGlzIGFwcGxpZXMgdG8gc2NlbmFyaW9zIGluIHdoaWNoIGFuIGFwcGxpY2F0aW9uIG9ubHkgZGVuaWVzIGFjY2VzcyBmcm9tIHNwZWNpZmljIElQIGFkZHJlc3Nlcy5cbiAgICAgKiBJZiB5b3UgZW5hYmxlIGEgYmxhY2tsaXN0IHdpdGhvdXQgYWRkaW5nIGFueSBJUCBhZGRyZXNzZXMgaW4gdGhlIGxpc3QsIGFsbCByZXF1ZXN0cyBhcmUgZm9yd2FyZGVkLlxuICAgICAqIFxuICAgICAqIElmIHRoZSB2YWx1ZSBvZiB0aGUgQWNsU3RhdHVzIHBhcmFtZXRlciBpcyBvbiwgdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIGFjbFR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYUNlcnRpZmljYXRlSWQ6IENBIHNlcnZlciBjZXJ0aWZpY2F0ZSBpZCwgZm9yIGh0dHBzIGxpc3RlbmVyIG9ubHkuXG4gICAgICovXG4gICAgcHVibGljIGNhQ2VydGlmaWNhdGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrOiBUaGUgcHJvcGVydGllcyBvZiBoZWFsdGggY2hlY2tpbmcgc2V0dGluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGVhbHRoQ2hlY2s6IFJvc0xpc3RlbmVyLkhlYWx0aENoZWNrUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaHR0cENvbmZpZzogQ29uZmlnIGZvciBodHRwIHByb3RvY29sLlxuICAgICAqL1xuICAgIHB1YmxpYyBodHRwQ29uZmlnOiBSb3NMaXN0ZW5lci5IdHRwQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaWRsZVRpbWVvdXQ6IFNwZWNpZnkgdGhlIGlkbGUgY29ubmVjdGlvbiB0aW1lb3V0IGluIHNlY29uZHMuIFZhbGlkIHZhbHVlOiAxLTYwIElmIG5vIHJlcXVlc3QgaXMgcmVjZWl2ZWQgZHVyaW5nIHRoZSBzcGVjaWZpZWQgdGltZW91dCBwZXJpb2QsIFNlcnZlciBMb2FkIEJhbGFuY2VyIHdpbGwgdGVtcG9yYXJpbHkgdGVybWluYXRlIHRoZSBjb25uZWN0aW9uIGFuZCByZXN0YXJ0IHRoZSBjb25uZWN0aW9uIHdoZW4gdGhlIG5leHQgcmVxdWVzdCBjb21lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaWRsZVRpbWVvdXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQ6IFRoZSBpZCBvZiB0aGUgTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cCB3aGljaCB1c2UgaW4gbGlzdGVuZXIuXG4gICAgICovXG4gICAgcHVibGljIG1hc3RlclNsYXZlU2VydmVyR3JvdXBJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcnNpc3RlbmNlOiBUaGUgcHJvcGVydGllcyBvZiBwZXJzaXN0ZW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGVyc2lzdGVuY2U6IFJvc0xpc3RlbmVyLlBlcnNpc3RlbmNlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVxdWVzdFRpbWVvdXQ6IFNwZWNpZnkgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBzZWNvbmRzLiBWYWxpZCB2YWx1ZTogMS0xODAgSWYgbm8gcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgYmFja2VuZCBzZXJ2ZXIgZHVyaW5nIHRoZSBzcGVjaWZpZWQgdGltZW91dCBwZXJpb2QsIFNlcnZlciBMb2FkIEJhbGFuY2VyIHdpbGwgc3RvcCB3YWl0aW5nIGFuZCBzZW5kIGFuIEhUVFAgNTA0IGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlcXVlc3RUaW1lb3V0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NoZWR1bGVyOiBUaGUgc2NoZWR1bGVyIGFsZ29yaXRobS4gU3VwcG9ydCAnd3JyJyBvciAnd2xjJyBvbmx5LCBkZWZhdWx0IGlzICd3cnInXG4gICAgICovXG4gICAgcHVibGljIHNjaGVkdWxlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZlckNlcnRpZmljYXRlSWQ6IFNlcnZlciBjZXJ0aWZpY2F0ZSBpZCwgZm9yIGh0dHBzIGxpc3RlbmVyIG9ubHksIHRoaXMgcHJvcGVydGllcyBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmVyQ2VydGlmaWNhdGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTZXJ2ZXJHcm91cElkOiBUaGUgaWQgb2YgdGhlIFZTZXJ2ZXJHcm91cCB3aGljaCB1c2UgaW4gbGlzdGVuZXIuXG4gICAgICovXG4gICAgcHVibGljIHZTZXJ2ZXJHcm91cElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xCOjpMaXN0ZW5lcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTGlzdGVuZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0xpc3RlbmVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJMaXN0ZW5lclBvcnRzQW5kUHJvdG9jb2wgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0xpc3RlbmVyUG9ydHNBbmRQcm90b2NvbCcpKTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0xvYWRCYWxhbmNlcklkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5iYWNrZW5kU2VydmVyUG9ydCA9IHByb3BzLmJhY2tlbmRTZXJ2ZXJQb3J0O1xuICAgICAgICB0aGlzLmJhbmR3aWR0aCA9IHByb3BzLmJhbmR3aWR0aDtcbiAgICAgICAgdGhpcy5saXN0ZW5lclBvcnQgPSBwcm9wcy5saXN0ZW5lclBvcnQ7XG4gICAgICAgIHRoaXMubG9hZEJhbGFuY2VySWQgPSBwcm9wcy5sb2FkQmFsYW5jZXJJZDtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3BzLnByb3RvY29sO1xuICAgICAgICB0aGlzLmFjbElkID0gcHJvcHMuYWNsSWQ7XG4gICAgICAgIHRoaXMuYWNsU3RhdHVzID0gcHJvcHMuYWNsU3RhdHVzO1xuICAgICAgICB0aGlzLmFjbFR5cGUgPSBwcm9wcy5hY2xUeXBlO1xuICAgICAgICB0aGlzLmNhQ2VydGlmaWNhdGVJZCA9IHByb3BzLmNhQ2VydGlmaWNhdGVJZDtcbiAgICAgICAgdGhpcy5oZWFsdGhDaGVjayA9IHByb3BzLmhlYWx0aENoZWNrO1xuICAgICAgICB0aGlzLmh0dHBDb25maWcgPSBwcm9wcy5odHRwQ29uZmlnO1xuICAgICAgICB0aGlzLmlkbGVUaW1lb3V0ID0gcHJvcHMuaWRsZVRpbWVvdXQ7XG4gICAgICAgIHRoaXMubWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkID0gcHJvcHMubWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkO1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlID0gcHJvcHMucGVyc2lzdGVuY2U7XG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBwcm9wcy5yZXF1ZXN0VGltZW91dDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBwcm9wcy5zY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuc2VydmVyQ2VydGlmaWNhdGVJZCA9IHByb3BzLnNlcnZlckNlcnRpZmljYXRlSWQ7XG4gICAgICAgIHRoaXMudlNlcnZlckdyb3VwSWQgPSBwcm9wcy52U2VydmVyR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyUG9ydDogdGhpcy5iYWNrZW5kU2VydmVyUG9ydCxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogdGhpcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBsaXN0ZW5lclBvcnQ6IHRoaXMubGlzdGVuZXJQb3J0LFxuICAgICAgICAgICAgbG9hZEJhbGFuY2VySWQ6IHRoaXMubG9hZEJhbGFuY2VySWQsXG4gICAgICAgICAgICBwcm90b2NvbDogdGhpcy5wcm90b2NvbCxcbiAgICAgICAgICAgIGFjbElkOiB0aGlzLmFjbElkLFxuICAgICAgICAgICAgYWNsU3RhdHVzOiB0aGlzLmFjbFN0YXR1cyxcbiAgICAgICAgICAgIGFjbFR5cGU6IHRoaXMuYWNsVHlwZSxcbiAgICAgICAgICAgIGNhQ2VydGlmaWNhdGVJZDogdGhpcy5jYUNlcnRpZmljYXRlSWQsXG4gICAgICAgICAgICBoZWFsdGhDaGVjazogdGhpcy5oZWFsdGhDaGVjayxcbiAgICAgICAgICAgIGh0dHBDb25maWc6IHRoaXMuaHR0cENvbmZpZyxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0OiB0aGlzLmlkbGVUaW1lb3V0LFxuICAgICAgICAgICAgbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkOiB0aGlzLm1hc3RlclNsYXZlU2VydmVyR3JvdXBJZCxcbiAgICAgICAgICAgIHBlcnNpc3RlbmNlOiB0aGlzLnBlcnNpc3RlbmNlLFxuICAgICAgICAgICAgcmVxdWVzdFRpbWVvdXQ6IHRoaXMucmVxdWVzdFRpbWVvdXQsXG4gICAgICAgICAgICBzY2hlZHVsZXI6IHRoaXMuc2NoZWR1bGVyLFxuICAgICAgICAgICAgc2VydmVyQ2VydGlmaWNhdGVJZDogdGhpcy5zZXJ2ZXJDZXJ0aWZpY2F0ZUlkLFxuICAgICAgICAgICAgdlNlcnZlckdyb3VwSWQ6IHRoaXMudlNlcnZlckdyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0xpc3RlbmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTGlzdGVuZXIge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEhlYWx0aENoZWNrUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBDb2RlOiBUaGUgZXhwZWN0IHN0YXR1cyBvZiBoZWFsdGggY2hlY2sgcmVzdWx0LiBBbnkgYW5zd2VyIG90aGVyIHRoYW4gcmVmZXJyZWQgc3RhdHVzIHdpdGhpbiB0aGUgdGltZW91dCBwZXJpb2QgaXMgY29uc2lkZXJlZCB1bmhlYWx0aHkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwQ29kZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1bmhlYWx0aHlUaHJlc2hvbGQ6IFRoZSBudW1iZXIgb2YgY29uc2VjdXRpdmUgaGVhbHRoIGNoZWNrcyBmYWlsdXJlcyByZXF1aXJlZCxiZWZvcmUgaWRlbnRpZmllZCB0aGUgYmFja2VuZCBzZXJ2ZXIgaW4gVW5oZWFsdGh5IHN0YXR1cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVuaGVhbHRoeVRocmVzaG9sZD86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIHNlY29uZHMsIGR1cmluZyB3aGljaCBubyByZXNwb25zZSBtZWFucyBhIGZhaWxlZCBoZWFsdGggY2hlY2suXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYWx0aHlUaHJlc2hvbGQ6IFRoZSBudW1iZXIgb2YgY29uc2VjdXRpdmUgaGVhbHRoIGNoZWNrcyBzdWNjZXNzZXMgcmVxdWlyZWQsYmVmb3JlIGlkZW50aWZpZWQgdGhlIGJhY2tlbmQgc2VydmVyIGluIEhlYWx0aHkgc3RhdHVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaGVhbHRoeVRocmVzaG9sZD86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiBUaGUgcG9ydCBiZWluZyBjaGVja2VkLiBUaGUgcmFuZ2Ugb2YgdmFsaWQgcG9ydHMgaXMgMCB0aHJvdWdoIDY1NTM1LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkb21haW46IFRoZSBkb21haW4gb2YgaGVhbHRoIGNoZWNrIHRhcmdldC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRvbWFpbj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1cmk6IFRoZSB1cmwgb2YgaGVhbHRoIGNoZWNrIHRhcmdldC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVyaT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbnRlcnZhbDogVGhlIGFwcHJveGltYXRlIGludGVydmFsLCB1bml0IGluIHNlY29uZHMsIGJldHdlZW4gaGVhbHRoIGNoZWNrcyBvZiBhbiBiYWNrZW5kIHNlcnZlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSGVhbHRoQ2hlY2tQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSGVhbHRoQ2hlY2tQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NMaXN0ZW5lcl9IZWFsdGhDaGVja1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cENvZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaHR0cENvZGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnVuaGVhbHRoeVRocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMudW5oZWFsdGh5VGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1bmhlYWx0aHlUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy51bmhlYWx0aHlUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1bmhlYWx0aHlUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudW5oZWFsdGh5VGhyZXNob2xkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmhlYWx0aHlUaHJlc2hvbGQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmhlYWx0aHlUaHJlc2hvbGQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hlYWx0aHlUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5oZWFsdGh5VGhyZXNob2xkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhbHRoeVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5oZWFsdGh5VGhyZXNob2xkKSk7XG4gICAgaWYocHJvcGVydGllcy5wb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5wb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9ydCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRvbWFpbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXJpJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnVyaSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50ZXJ2YWwgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmludGVydmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcnZhbCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludGVydmFsLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA1MCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJ2YWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50ZXJ2YWwpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSGVhbHRoQ2hlY2tQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpMaXN0ZW5lci5IZWFsdGhDaGVja2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSGVhbHRoQ2hlY2tQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpMaXN0ZW5lci5IZWFsdGhDaGVja2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMaXN0ZW5lckhlYWx0aENoZWNrUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0xpc3RlbmVyX0hlYWx0aENoZWNrUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBIdHRwQ29kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwQ29kZSksXG4gICAgICBVbmhlYWx0aHlUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudW5oZWFsdGh5VGhyZXNob2xkKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICBIZWFsdGh5VGhyZXNob2xkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhlYWx0aHlUaHJlc2hvbGQpLFxuICAgICAgUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIERvbWFpbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW4pLFxuICAgICAgVVJJOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVyaSksXG4gICAgICBJbnRlcnZhbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcnZhbCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NMaXN0ZW5lciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSHR0cENvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsaXN0ZW5lckZvcndhcmQ6IFdoZXRoZXIgdG8gZW5hYmxlIEhUVFAgdG8gSFRUUFMgZm9yd2FyZGluZy5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IG9uIHwgb2ZmLiBEZWZhdWx0IHZhbHVlOiBvZmYuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsaXN0ZW5lckZvcndhcmQ/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZm9yd2FyZFBvcnQ6IEhUVFAgdG8gSFRUUFMgbGlzdGVuaW5nIGZvcndhcmRpbmcgcG9ydC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiA0NDMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmb3J3YXJkUG9ydD86IG51bWJlcjtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEh0dHBDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xpc3RlbmVyX0h0dHBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmxpc3RlbmVyRm9yd2FyZCAmJiAodHlwZW9mIHByb3BlcnRpZXMubGlzdGVuZXJGb3J3YXJkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsaXN0ZW5lckZvcndhcmQnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5saXN0ZW5lckZvcndhcmQsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wib25cIixcIm9mZlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpc3RlbmVyRm9yd2FyZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5saXN0ZW5lckZvcndhcmQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmZvcndhcmRQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5mb3J3YXJkUG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZm9yd2FyZFBvcnQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5mb3J3YXJkUG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZvcndhcmRQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmZvcndhcmRQb3J0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkh0dHBDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpMaXN0ZW5lci5IdHRwQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6TGlzdGVuZXIuSHR0cENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMaXN0ZW5lckh0dHBDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTGlzdGVuZXJfSHR0cENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTGlzdGVuZXJGb3J3YXJkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpc3RlbmVyRm9yd2FyZCksXG4gICAgICBGb3J3YXJkUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mb3J3YXJkUG9ydCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NMaXN0ZW5lciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVyc2lzdGVuY2VQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgeEZvcndhcmRlZEZvclNsYmlkOiBPcHRpb25hbC4gSW5kaWNhdGVzIHdoZXRoZXIgdG8gdXNlIHRoZSBTTEItSUQgaGVhZGVyIGZpZWxkIHRvIG9idGFpbiB0aGUgU0xCIGluc3RhbmNlIElELiBWYWxpZCB2YWx1ZXM6IG9uIHwgb2ZmLiBEZWZhdWx0IHZhbHVlOiBvZmYgSWYgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB4Rm9yd2FyZGVkRm9yU2xiaWQ/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29va2llVGltZW91dDogVGhlIHRpbWVvdXQgZm9yIGNvb2tpZSBzZXR0aW5nLCBpbiBzZWNvbmRzLiBJdCBvbmx5IHRha2UgZWZmZWN0IHdoaWxlIFN0aWNreVNlc3Npb24gaXMgc2V0dGluZyB0byAnb24nIGFuZCBTdGlja3lTZXNzaW9uVHlwZSBpcyBzZXR0aW5nIHRvICdpbnNlcnQnLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29va2llVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb29raWU6IFRoZSB0eXBlIG9mIHNlc3Npb24gcGVyc2lzdGVuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb29raWU/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RpY2t5U2Vzc2lvbjogVGhlIHN3aXRjaCBvZiBzZXNzaW9uIHBlcnNpc3RlbmNlLiBTdXBwb3J0ICdvbicgYW5kICdvZmYnLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RpY2t5U2Vzc2lvbj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwZXJzaXN0ZW5jZVRpbWVvdXQ6IFRoZSB0aW1lb3V0IG51bWJlciBvZiBwZXJzaXN0ZW5jZSwgaW4gc2Vjb25kcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB4Rm9yd2FyZGVkRm9yOiBVc2UgJ1gtRm9yd2FyZGVkLUZvcicgdG8gZ2V0IHJlYWwgaXAgb2YgYWNjZXNzb3IuIE9uIGZvciBvcGVuLCBvZmYgZm9yIGNsb3NlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgeEZvcndhcmRlZEZvcj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB4Rm9yd2FyZGVkRm9yUHJvdG86IE9wdGlvbmFsLiBJbmRpY2F0ZXMgd2hldGhlciB0byB1c2UgdGhlIFgtRm9yd2FyZGVkLVByb3RvIGhlYWRlciBmaWVsZCB0byBvYnRhaW50aGUgbGlzdGVuaW5nIHByb3RvY29sIHVzZWQgYnkgdGhlIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBvbiB8IG9mZi4gRGVmYXVsdCB2YWx1ZTogb2ZmSWYgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB4Rm9yd2FyZGVkRm9yUHJvdG8/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RpY2t5U2Vzc2lvblR5cGU6IFRoZSB0eXBlIG9mIHNlc3Npb24gcGVyc2lzdGVuY2UuIERlcGVuZHMgb24gcGFyYW1ldGVyIFN0aWNreVNlc3Npb24sIGlmIGl0IGlzIHNldCB0byBvZmYsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0aWNreVNlc3Npb25UeXBlPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHhGb3J3YXJkZWRGb3JTbGJpcDogT3B0aW9uYWwuIEluZGljYXRlcyB3aGV0aGVyIHRvIHVzZSB0aGUgU0xCLUlQIGhlYWRlciBmaWVsZCB0byBvYnRhaW50aGUgcmVhbCBJUCBhZGRyZXNzIG9mIGEgY2xpZW50IHJlcXVlc3QuVmFsaWQgdmFsdWVzOiBvbiB8IG9mZi4gRGVmYXVsdCB2YWx1ZTogb2ZmSWYgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB4Rm9yd2FyZGVkRm9yU2xiaXA/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQZXJzaXN0ZW5jZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQZXJzaXN0ZW5jZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xpc3RlbmVyX1BlcnNpc3RlbmNlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy54Rm9yd2FyZGVkRm9yU2xiaWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnhGb3J3YXJkZWRGb3JTbGJpZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigneEZvcndhcmRlZEZvclNsYmlkJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMueEZvcndhcmRlZEZvclNsYmlkLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIm9uXCIsXCJvZmZcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd4Rm9yd2FyZGVkRm9yU2xiaWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMueEZvcndhcmRlZEZvclNsYmlkKSk7XG4gICAgaWYocHJvcGVydGllcy5jb29raWVUaW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy5jb29raWVUaW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb29raWVUaW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY29va2llVGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogODY0MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Nvb2tpZVRpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY29va2llVGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29va2llJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvb2tpZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RpY2t5U2Vzc2lvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RpY2t5U2Vzc2lvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RpY2t5U2Vzc2lvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0aWNreVNlc3Npb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wib25cIixcIm9mZlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0aWNreVNlc3Npb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RpY2t5U2Vzc2lvbikpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyc2lzdGVuY2VUaW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJzaXN0ZW5jZVRpbWVvdXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcnNpc3RlbmNlVGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcnNpc3RlbmNlVGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyc2lzdGVuY2VUaW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcnNpc3RlbmNlVGltZW91dCkpO1xuICAgIGlmKHByb3BlcnRpZXMueEZvcndhcmRlZEZvciAmJiAodHlwZW9mIHByb3BlcnRpZXMueEZvcndhcmRlZEZvcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigneEZvcndhcmRlZEZvcicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnhGb3J3YXJkZWRGb3IsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wib25cIixcIm9mZlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3hGb3J3YXJkZWRGb3InLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMueEZvcndhcmRlZEZvcikpO1xuICAgIGlmKHByb3BlcnRpZXMueEZvcndhcmRlZEZvclByb3RvICYmICh0eXBlb2YgcHJvcGVydGllcy54Rm9yd2FyZGVkRm9yUHJvdG8pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3hGb3J3YXJkZWRGb3JQcm90bycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnhGb3J3YXJkZWRGb3JQcm90byxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJvblwiLFwib2ZmXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigneEZvcndhcmRlZEZvclByb3RvJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnhGb3J3YXJkZWRGb3JQcm90bykpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RpY2t5U2Vzc2lvblR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0aWNreVNlc3Npb25UeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGlja3lTZXNzaW9uVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0aWNreVNlc3Npb25UeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImluc2VydFwiLFwic2VydmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RpY2t5U2Vzc2lvblR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RpY2t5U2Vzc2lvblR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnhGb3J3YXJkZWRGb3JTbGJpcCAmJiAodHlwZW9mIHByb3BlcnRpZXMueEZvcndhcmRlZEZvclNsYmlwKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd4Rm9yd2FyZGVkRm9yU2xiaXAnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy54Rm9yd2FyZGVkRm9yU2xiaXAsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wib25cIixcIm9mZlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3hGb3J3YXJkZWRGb3JTbGJpcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy54Rm9yd2FyZGVkRm9yU2xiaXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUGVyc2lzdGVuY2VQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpMaXN0ZW5lci5QZXJzaXN0ZW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUGVyc2lzdGVuY2VQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpMaXN0ZW5lci5QZXJzaXN0ZW5jZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMaXN0ZW5lclBlcnNpc3RlbmNlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0xpc3RlbmVyX1BlcnNpc3RlbmNlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBYRm9yd2FyZGVkRm9yX1NMQklEOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnhGb3J3YXJkZWRGb3JTbGJpZCksXG4gICAgICBDb29raWVUaW1lb3V0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvb2tpZVRpbWVvdXQpLFxuICAgICAgQ29va2llOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvb2tpZSksXG4gICAgICBTdGlja3lTZXNzaW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0aWNreVNlc3Npb24pLFxuICAgICAgUGVyc2lzdGVuY2VUaW1lb3V0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcnNpc3RlbmNlVGltZW91dCksXG4gICAgICBYRm9yd2FyZGVkRm9yOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnhGb3J3YXJkZWRGb3IpLFxuICAgICAgWEZvcndhcmRlZEZvcl9wcm90bzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy54Rm9yd2FyZGVkRm9yUHJvdG8pLFxuICAgICAgU3RpY2t5U2Vzc2lvblR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RpY2t5U2Vzc2lvblR5cGUpLFxuICAgICAgWEZvcndhcmRlZEZvcl9TTEJJUDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy54Rm9yd2FyZGVkRm9yU2xiaXApLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NMb2FkQmFsYW5jZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkcmVzc1R5cGU6IExvYWRlciBiYWxhbmNlciBhZGRyZXNzIHR5cGUuIFN1cHBvcnQgJ2ludGVybmV0JyBhbmQgJ2ludHJhbmV0JyBvbmx5LCBkZWZhdWx0IGlzICdpbnRlcm5ldCcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkcmVzc1R5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1BheTogT3B0aW9uYWwuIEluZGljYXRlcyB3aGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgcGF5IHRoZSBiaWxsIGZvciB0aGUgU3Vic2NyaXB0aW9uLWJpbGxlZCBJbnRlcm5ldCBpbnN0YW5jZSB0byBiZSBjcmVhdGVkLlxuICAgICAqIFZhbGlkIHZhbHVlczogdHJ1ZSB8IGZhbHNlIChkZWZhdWx0IHZhbHVlKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9QYXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBmb3IgbmV0d29yaywgdW5pdCBpbiBNYnBzKE1lZ2EgYml0IHBlciBzZWNvbmQpLiBSYW5nZSBpcyAxIHRvIDEwMDAsIGRlZmF1bHQgaXMgMS4gSWYgSW50ZXJuZXRDaGFyZ2VUeXBlIGlzIHNwZWNpZmllZCBhcyBcInBheWJ5dHJhZmZpY1wiLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlIGFuZCBwbGVhc2Ugc3BlY2lmeSB0aGUgXCJCYW5kd2lkdGhcIiBpbiBBTElZVU46OlNMQjo6TGlzdGVuZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uUHJvdGVjdGlvbjogV2hldGhlciB0byBlbmFibGUgZGVsZXRpb24gcHJvdGVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGR1cmF0aW9uOiBPcHRpb25hbC4gVGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvbiBvZiBhIFN1YnNjcmlwdGlvbiBJbnRlcm5ldCBpbnN0YW5jZS5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSWYgUHJpY2luZ0N5Y2xlIGlzIG1vbnRoLCB0aGUgdmFsaWQgcmFuZ2UgaXMgMSB0byA5LlxuICAgICAqIElmIFByaWNpbmdDeWNsZSBpcyB5ZWFyLCB0aGUgdmFsdWUgcmFuZ2UgaXMgMSB0byAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGR1cmF0aW9uPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogSW5zdGFuY2UgaW50ZXJuZXQgYWNjZXNzIGNoYXJnZSB0eXBlLlN1cHBvcnQgJ3BheWJ5YmFuZHdpZHRoJyBhbmQgJ3BheWJ5dHJhZmZpYycgb25seS4gRGVmYXVsdCBpcyAncGF5Ynl0cmFmZmljJy4gSWYgbG9hZCBiYWxhbmNlciBpcyBjcmVhdGVkIGluIFZQQywgdGhlIGNoYXJnZSB0eXBlIHdpbGwgYmUgc2V0IGFzICdwYXlieXRyYWZmaWMnIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlck5hbWU6IE5hbWUgb2YgY3JlYXRlZCBsb2FkIGJhbGFuY2VyLiBMZW5ndGggaXMgbGltaXRlZCB0byAxLTgwIGNoYXJhY3RlcnMsIGFsbG93ZWQgdG8gY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCAnLSwgLywgXywuJyBXaGVuIG5vdCBzcGVjaWZpZWQsIGEgZGVmYXVsdCBuYW1lIHdpbGwgYmUgYXNzaWduZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJTcGVjOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiB0aGUgU2VydmVyIExvYWQgQmFsYW5jZXIgaW5zdGFuY2UuIEFsbG93ZWQgdmFsdWU6IHNsYi5zMS5zbWFsbHxzbGIuczIuc21hbGx8c2xiLnMyLm1lZGl1bXxzbGIuczMuc21hbGx8c2xiLnMzLm1lZGl1bXxzbGIuczMubGFyZ2V8c2xiLnMzLnhsYXJnZXxzbGIuczMueHhsYXJnZS4gRGVmYXVsdCB2YWx1ZTogc2xiLnMxLnNtYWxsLiBUaGUgc3VwcG9ydGVkIHBlcmZvcm1hbmNlIHNwZWNpZmljYXRpb24gaW4gZWFjaCByZWdpb24gaXMgZGlmZmVyZW50LCB0d28gc3BlY2lmaWNhdGlvbnMgYXJlIHN1cHBvcnRlZCBpbiB0aGUgVVMgRWFzdCAxIHJlZ2lvbi4gSWYgdGhlIHJlZ2lvbiBkb2VzIG5vdCBzdXBwb3J0IHRoZSBwZXJmb3JtYW5jZS1ndWFyYW50ZWVkIGluc3RhbmNlcywgdGhlIHZhbHVlIHdpbGwgbm90IHRha2UgZWZmZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlclNwZWM/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFzdGVyWm9uZUlkOiBUaGUgbWFzdGVyIHpvbmUgaWQgdG8gY3JlYXRlIGxvYWQgYmFsYW5jZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyWm9uZUlkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGlmaWNhdGlvblByb3RlY3Rpb25SZWFzb246IFNldCB0aGUgcmVhc29uIGZvciBtb2RpZnlpbmcgdGhlIHByb3RlY3Rpb24gc3RhdHVzLiBUaGUgbGVuZ3RoIGlzIDEtODAgRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMsIG11c3Qgc3RhcnQgd2l0aCB1cHBlciBhbmQgbG93ZXIgbGV0dGVycyBvciBDaGluZXNlLCBhbmQgY2FuIGluY2x1ZGUgbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSBhbmQgZGFzaGVzICgtKS5cbiAgICAgKiBPbmx5IHZhbGlkIHdoZW4gTW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1cyBpcyBDb25zb2xlUHJvdGVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RpZmljYXRpb25Qcm90ZWN0aW9uUmVhc29uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGlmaWNhdGlvblByb3RlY3Rpb25TdGF0dXM6IE5vblByb3RlY3Rpb24gb3IgZW1wdHk6IG1lYW5zIG5vIHJlc3RyaWN0aW9uIG9uIG1vZGlmaWNhdGlvbiBwcm90ZWN0aW9uXG4gICAgICogQ29uc29sZVByb3RlY3Rpb246IE1vZGlmeSBpbnN0YW5jZSBwcm90ZWN0aW9uIHN0YXR1cyBieSBjb25zb2xlXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RpZmljYXRpb25Qcm90ZWN0aW9uU3RhdHVzPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBheVR5cGU6IE9wdGlvbmFsLiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogVmFsaWQgdmFsdWU6IFBheU9uRGVtYW5kIChQYXktQXMtWW91LUdvKSB8IFByZVBheSAoU3Vic2NyaXB0aW9uKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBPcHRpb25hbC4gVGhlIGR1cmF0aW9uIG9mIHRoZSBTdWJzY3JpcHRpb24tYmlsbGVkIEludGVybmV0IGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogVmFsaWQgdmFsdWVzOiBtb250aCB8IHllYXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpY2luZ0N5Y2xlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNsYXZlWm9uZUlkOiBUaGUgc2xhdmUgem9uZSBpZCB0byBjcmVhdGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbGF2ZVpvbmVJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBzbGIuIE1heCBzdXBwb3J0IDUgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBzbGIuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogcm9zLlJvc1RhZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgVlBDIGlkIHRvIGNyZWF0ZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLiBGb3IgVlBDIG5ldHdvcmsgb25seS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBWU3dpdGNoIGlkIHRvIGNyZWF0ZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLiBGb3IgVlBDIG5ldHdvcmsgb25seS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTG9hZEJhbGFuY2VyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0xvYWRCYWxhbmNlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xvYWRCYWxhbmNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlICYmICh0eXBlb2YgcHJvcGVydGllcy5wcmljaW5nQ3ljbGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJtb250aFwiLFwieWVhclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmljaW5nQ3ljbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmR1cmF0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5kdXJhdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZHVyYXRpb24nLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kdXJhdGlvbixcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogOSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZHVyYXRpb24nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZHVyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uUHJvdGVjdGlvbicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRpb25Qcm90ZWN0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvUGF5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hdXRvUGF5KSk7XG4gICAgaWYocHJvcGVydGllcy5wYXlUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wYXlUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXlUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGF5VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJQYXlPbkRlbWFuZFwiLFwiUHJlUGF5XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF5VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXlUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbGF2ZVpvbmVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zbGF2ZVpvbmVJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMubW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMubW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1vZGlmaWNhdGlvblByb3RlY3Rpb25TdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTm9uUHJvdGVjdGlvblwiLFwiQ29uc29sZVByb3RlY3Rpb25cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RpZmljYXRpb25Qcm90ZWN0aW9uU3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vZGlmaWNhdGlvblByb3RlY3Rpb25TdGF0dXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wicGF5YnliYW5kd2lkdGhcIixcInBheWJ5dHJhZmZpY1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0Q2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvYWRCYWxhbmNlclNwZWMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VyU3BlYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2FkQmFsYW5jZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJhbmR3aWR0aCkpO1xuICAgIGlmKHByb3BlcnRpZXMubW9kaWZpY2F0aW9uUHJvdGVjdGlvblJlYXNvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1vZGlmaWNhdGlvblByb3RlY3Rpb25SZWFzb24pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5tb2RpZmljYXRpb25Qcm90ZWN0aW9uUmVhc29uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kaWZpY2F0aW9uUHJvdGVjdGlvblJlYXNvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tb2RpZmljYXRpb25Qcm90ZWN0aW9uUmVhc29uLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA4MCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kaWZpY2F0aW9uUHJvdGVjdGlvblJlYXNvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tb2RpZmljYXRpb25Qcm90ZWN0aW9uUmVhc29uKSk7XG4gICAgaWYocHJvcGVydGllcy5hZGRyZXNzVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWRkcmVzc1R5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZHJlc3NUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWRkcmVzc1R5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiaW50ZXJuZXRcIixcImludHJhbmV0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWRkcmVzc1R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWRkcmVzc1R5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVJvc1RhZykpKHByb3BlcnRpZXMudGFncykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFzdGVyWm9uZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1hc3RlclpvbmVJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NMb2FkQmFsYW5jZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0xvYWRCYWxhbmNlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMb2FkQmFsYW5jZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0xvYWRCYWxhbmNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFkZHJlc3NUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFkZHJlc3NUeXBlKSxcbiAgICAgIEF1dG9QYXk6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmF1dG9QYXkpLFxuICAgICAgQmFuZHdpZHRoOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJhbmR3aWR0aCksXG4gICAgICBEZWxldGlvblByb3RlY3Rpb246IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGV0aW9uUHJvdGVjdGlvbiksXG4gICAgICBEdXJhdGlvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kdXJhdGlvbiksXG4gICAgICBJbnRlcm5ldENoYXJnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSxcbiAgICAgIExvYWRCYWxhbmNlck5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9hZEJhbGFuY2VyTmFtZSksXG4gICAgICBMb2FkQmFsYW5jZXJTcGVjOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvYWRCYWxhbmNlclNwZWMpLFxuICAgICAgTWFzdGVyWm9uZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1hc3RlclpvbmVJZCksXG4gICAgICBNb2RpZmljYXRpb25Qcm90ZWN0aW9uUmVhc29uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vZGlmaWNhdGlvblByb3RlY3Rpb25SZWFzb24pLFxuICAgICAgTW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1czogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb2RpZmljYXRpb25Qcm90ZWN0aW9uU3RhdHVzKSxcbiAgICAgIFBheVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGF5VHlwZSksXG4gICAgICBQcmljaW5nQ3ljbGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgICAgU2xhdmVab25lSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2xhdmVab25lSWQpLFxuICAgICAgVGFnczogcm9zLmxpc3RNYXBwZXIocm9zLnJvc1RhZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICBWU3dpdGNoSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudlN3aXRjaElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0xvYWRCYWxhbmNlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBZGRyZXNzVHlwZTogVGhlIGFkZHJlc3MgdHlwZSBvZiB0aGUgbG9hZCBiYWxhbmNlci4gXCJpbnRyYW5ldFwiIG9yIFwiaW50ZXJuZXRcIi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFkZHJlc3NUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElwQWRkcmVzczogVGhlIGlwIGFkZHJlc3Mgb2YgdGhlIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcEFkZHJlc3M6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9hZEJhbGFuY2VySWQ6IFRoZSBpZCBvZiBsb2FkIGJhbGFuY2UgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5ldHdvcmtUeXBlOiBUaGUgbmV0d29yayB0eXBlIG9mIHRoZSBsb2FkIGJhbGFuY2VyLiBcInZwY1wiIG9yIFwiY2xhc3NpY1wiIG5ldHdvcmsuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrVHlwZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPcmRlcklkOiBUaGUgb3JkZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRyZXNzVHlwZTogTG9hZGVyIGJhbGFuY2VyIGFkZHJlc3MgdHlwZS4gU3VwcG9ydCAnaW50ZXJuZXQnIGFuZCAnaW50cmFuZXQnIG9ubHksIGRlZmF1bHQgaXMgJ2ludGVybmV0Jy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkcmVzc1R5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBPcHRpb25hbC4gSW5kaWNhdGVzIHdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBwYXkgdGhlIGJpbGwgZm9yIHRoZSBTdWJzY3JpcHRpb24tYmlsbGVkIEludGVybmV0IGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogVmFsaWQgdmFsdWVzOiB0cnVlIHwgZmFsc2UgKGRlZmF1bHQgdmFsdWUpXG4gICAgICovXG4gICAgcHVibGljIGF1dG9QYXk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBUaGUgYmFuZHdpZHRoIGZvciBuZXR3b3JrLCB1bml0IGluIE1icHMoTWVnYSBiaXQgcGVyIHNlY29uZCkuIFJhbmdlIGlzIDEgdG8gMTAwMCwgZGVmYXVsdCBpcyAxLiBJZiBJbnRlcm5ldENoYXJnZVR5cGUgaXMgc3BlY2lmaWVkIGFzIFwicGF5Ynl0cmFmZmljXCIsIHRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmUgYW5kIHBsZWFzZSBzcGVjaWZ5IHRoZSBcIkJhbmR3aWR0aFwiIGluIEFMSVlVTjo6U0xCOjpMaXN0ZW5lci5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFuZHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Qcm90ZWN0aW9uOiBXaGV0aGVyIHRvIGVuYWJsZSBkZWxldGlvbiBwcm90ZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvblByb3RlY3Rpb246IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZHVyYXRpb246IE9wdGlvbmFsLiBUaGUgc3Vic2NyaXB0aW9uIGR1cmF0aW9uIG9mIGEgU3Vic2NyaXB0aW9uIEludGVybmV0IGluc3RhbmNlLlxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiBJZiBQcmljaW5nQ3ljbGUgaXMgbW9udGgsIHRoZSB2YWxpZCByYW5nZSBpcyAxIHRvIDkuXG4gICAgICogSWYgUHJpY2luZ0N5Y2xlIGlzIHllYXIsIHRoZSB2YWx1ZSByYW5nZSBpcyAxIHRvIDMuXG4gICAgICovXG4gICAgcHVibGljIGR1cmF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBJbnN0YW5jZSBpbnRlcm5ldCBhY2Nlc3MgY2hhcmdlIHR5cGUuU3VwcG9ydCAncGF5YnliYW5kd2lkdGgnIGFuZCAncGF5Ynl0cmFmZmljJyBvbmx5LiBEZWZhdWx0IGlzICdwYXlieXRyYWZmaWMnLiBJZiBsb2FkIGJhbGFuY2VyIGlzIGNyZWF0ZWQgaW4gVlBDLCB0aGUgY2hhcmdlIHR5cGUgd2lsbCBiZSBzZXQgYXMgJ3BheWJ5dHJhZmZpYycgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRDaGFyZ2VUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9hZEJhbGFuY2VyTmFtZTogTmFtZSBvZiBjcmVhdGVkIGxvYWQgYmFsYW5jZXIuIExlbmd0aCBpcyBsaW1pdGVkIHRvIDEtODAgY2hhcmFjdGVycywgYWxsb3dlZCB0byBjb250YWluIGxldHRlcnMsIG51bWJlcnMsICctLCAvLCBfLC4nIFdoZW4gbm90IHNwZWNpZmllZCwgYSBkZWZhdWx0IG5hbWUgd2lsbCBiZSBhc3NpZ25lZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEJhbGFuY2VyTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlclNwZWM6IFRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBTZXJ2ZXIgTG9hZCBCYWxhbmNlciBpbnN0YW5jZS4gQWxsb3dlZCB2YWx1ZTogc2xiLnMxLnNtYWxsfHNsYi5zMi5zbWFsbHxzbGIuczIubWVkaXVtfHNsYi5zMy5zbWFsbHxzbGIuczMubWVkaXVtfHNsYi5zMy5sYXJnZXxzbGIuczMueGxhcmdlfHNsYi5zMy54eGxhcmdlLiBEZWZhdWx0IHZhbHVlOiBzbGIuczEuc21hbGwuIFRoZSBzdXBwb3J0ZWQgcGVyZm9ybWFuY2Ugc3BlY2lmaWNhdGlvbiBpbiBlYWNoIHJlZ2lvbiBpcyBkaWZmZXJlbnQsIHR3byBzcGVjaWZpY2F0aW9ucyBhcmUgc3VwcG9ydGVkIGluIHRoZSBVUyBFYXN0IDEgcmVnaW9uLiBJZiB0aGUgcmVnaW9uIGRvZXMgbm90IHN1cHBvcnQgdGhlIHBlcmZvcm1hbmNlLWd1YXJhbnRlZWQgaW5zdGFuY2VzLCB0aGUgdmFsdWUgd2lsbCBub3QgdGFrZSBlZmZlY3QuXG4gICAgICovXG4gICAgcHVibGljIGxvYWRCYWxhbmNlclNwZWM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJab25lSWQ6IFRoZSBtYXN0ZXIgem9uZSBpZCB0byBjcmVhdGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWFzdGVyWm9uZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kaWZpY2F0aW9uUHJvdGVjdGlvblJlYXNvbjogU2V0IHRoZSByZWFzb24gZm9yIG1vZGlmeWluZyB0aGUgcHJvdGVjdGlvbiBzdGF0dXMuIFRoZSBsZW5ndGggaXMgMS04MCBFbmdsaXNoIG9yIENoaW5lc2UgY2hhcmFjdGVycywgbXVzdCBzdGFydCB3aXRoIHVwcGVyIGFuZCBsb3dlciBsZXR0ZXJzIG9yIENoaW5lc2UsIGFuZCBjYW4gaW5jbHVkZSBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pIGFuZCBkYXNoZXMgKC0pLlxuICAgICAqIE9ubHkgdmFsaWQgd2hlbiBNb2RpZmljYXRpb25Qcm90ZWN0aW9uU3RhdHVzIGlzIENvbnNvbGVQcm90ZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBtb2RpZmljYXRpb25Qcm90ZWN0aW9uUmVhc29uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1czogTm9uUHJvdGVjdGlvbiBvciBlbXB0eTogbWVhbnMgbm8gcmVzdHJpY3Rpb24gb24gbW9kaWZpY2F0aW9uIHByb3RlY3Rpb25cbiAgICAgKiBDb25zb2xlUHJvdGVjdGlvbjogTW9kaWZ5IGluc3RhbmNlIHByb3RlY3Rpb24gc3RhdHVzIGJ5IGNvbnNvbGVcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBtb2RpZmljYXRpb25Qcm90ZWN0aW9uU3RhdHVzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGF5VHlwZTogT3B0aW9uYWwuIFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBWYWxpZCB2YWx1ZTogUGF5T25EZW1hbmQgKFBheS1Bcy1Zb3UtR28pIHwgUHJlUGF5IChTdWJzY3JpcHRpb24pXG4gICAgICovXG4gICAgcHVibGljIHBheVR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IE9wdGlvbmFsLiBUaGUgZHVyYXRpb24gb2YgdGhlIFN1YnNjcmlwdGlvbi1iaWxsZWQgSW50ZXJuZXQgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IG1vbnRoIHwgeWVhci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpY2luZ0N5Y2xlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xhdmVab25lSWQ6IFRoZSBzbGF2ZSB6b25lIGlkIHRvIGNyZWF0ZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzbGF2ZVpvbmVJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHNsYi4gTWF4IHN1cHBvcnQgNSB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHNsYi4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSB0YWdzOiByb3MuVGFnTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIFZQQyBpZCB0byBjcmVhdGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS4gRm9yIFZQQyBuZXR3b3JrIG9ubHkuXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgVlN3aXRjaCBpZCB0byBjcmVhdGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS4gRm9yIFZQQyBuZXR3b3JrIG9ubHkuXG4gICAgICovXG4gICAgcHVibGljIHZTd2l0Y2hJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMQjo6TG9hZEJhbGFuY2VyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NMb2FkQmFsYW5jZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0xvYWRCYWxhbmNlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWRkcmVzc1R5cGUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0FkZHJlc3NUeXBlJykpO1xuICAgICAgICB0aGlzLmF0dHJJcEFkZHJlc3MgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0lwQWRkcmVzcycpKTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0xvYWRCYWxhbmNlcklkJykpO1xuICAgICAgICB0aGlzLmF0dHJOZXR3b3JrVHlwZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnTmV0d29ya1R5cGUnKSk7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ09yZGVySWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFkZHJlc3NUeXBlID0gcHJvcHMuYWRkcmVzc1R5cGU7XG4gICAgICAgIHRoaXMuYXV0b1BheSA9IHByb3BzLmF1dG9QYXk7XG4gICAgICAgIHRoaXMuYmFuZHdpZHRoID0gcHJvcHMuYmFuZHdpZHRoO1xuICAgICAgICB0aGlzLmRlbGV0aW9uUHJvdGVjdGlvbiA9IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbjtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLmludGVybmV0Q2hhcmdlVHlwZSA9IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5sb2FkQmFsYW5jZXJOYW1lID0gcHJvcHMubG9hZEJhbGFuY2VyTmFtZTtcbiAgICAgICAgdGhpcy5sb2FkQmFsYW5jZXJTcGVjID0gcHJvcHMubG9hZEJhbGFuY2VyU3BlYztcbiAgICAgICAgdGhpcy5tYXN0ZXJab25lSWQgPSBwcm9wcy5tYXN0ZXJab25lSWQ7XG4gICAgICAgIHRoaXMubW9kaWZpY2F0aW9uUHJvdGVjdGlvblJlYXNvbiA9IHByb3BzLm1vZGlmaWNhdGlvblByb3RlY3Rpb25SZWFzb247XG4gICAgICAgIHRoaXMubW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1cyA9IHByb3BzLm1vZGlmaWNhdGlvblByb3RlY3Rpb25TdGF0dXM7XG4gICAgICAgIHRoaXMucGF5VHlwZSA9IHByb3BzLnBheVR5cGU7XG4gICAgICAgIHRoaXMucHJpY2luZ0N5Y2xlID0gcHJvcHMucHJpY2luZ0N5Y2xlO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5zbGF2ZVpvbmVJZCA9IHByb3BzLnNsYXZlWm9uZUlkO1xuICAgICAgICB0aGlzLnRhZ3MgPSBuZXcgcm9zLlRhZ01hbmFnZXIocm9zLlRhZ1R5cGUuU1RBTkRBUkQsIFwiQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlclwiLCBwcm9wcy50YWdzLCB7IHRhZ1Byb3BlcnR5TmFtZTogJ3RhZ3MnIH0pO1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgICAgIHRoaXMudlN3aXRjaElkID0gcHJvcHMudlN3aXRjaElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3NUeXBlOiB0aGlzLmFkZHJlc3NUeXBlLFxuICAgICAgICAgICAgYXV0b1BheTogdGhpcy5hdXRvUGF5LFxuICAgICAgICAgICAgYmFuZHdpZHRoOiB0aGlzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogdGhpcy5kZWxldGlvblByb3RlY3Rpb24sXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIGludGVybmV0Q2hhcmdlVHlwZTogdGhpcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJOYW1lOiB0aGlzLmxvYWRCYWxhbmNlck5hbWUsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJTcGVjOiB0aGlzLmxvYWRCYWxhbmNlclNwZWMsXG4gICAgICAgICAgICBtYXN0ZXJab25lSWQ6IHRoaXMubWFzdGVyWm9uZUlkLFxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uUHJvdGVjdGlvblJlYXNvbjogdGhpcy5tb2RpZmljYXRpb25Qcm90ZWN0aW9uUmVhc29uLFxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uUHJvdGVjdGlvblN0YXR1czogdGhpcy5tb2RpZmljYXRpb25Qcm90ZWN0aW9uU3RhdHVzLFxuICAgICAgICAgICAgcGF5VHlwZTogdGhpcy5wYXlUeXBlLFxuICAgICAgICAgICAgcHJpY2luZ0N5Y2xlOiB0aGlzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzbGF2ZVpvbmVJZDogdGhpcy5zbGF2ZVpvbmVJZCxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncy5yZW5kZXJUYWdzKCksXG4gICAgICAgICAgICB2cGNJZDogdGhpcy52cGNJZCxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogdGhpcy52U3dpdGNoSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0xvYWRCYWxhbmNlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXJDbG9uZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NMb2FkQmFsYW5jZXJDbG9uZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VMb2FkQmFsYW5jZXJJZDogU291cmNlIGxvYWQgYmFsYW5jZXIgaWQgdG8gY2xvbmVcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VMb2FkQmFsYW5jZXJJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhY2tlbmRTZXJ2ZXJzOiBUaGUgbGlzdCBvZiBFQ1MgaW5zdGFuY2UsIHdoaWNoIHdpbGwgYXR0YWNoZWQgdG8gbG9hZCBiYWxhbmNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrZW5kU2VydmVycz86IEFycmF5PFJvc0xvYWRCYWxhbmNlckNsb25lLkJhY2tlbmRTZXJ2ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhY2tlbmRTZXJ2ZXJzUG9saWN5OiBTb2x1dGlvbiBmb3IgaGFuZGxlIHRoZSBiYWNrZW5kIHNlcnZlciBhbmQgd2VpZ2h0cy4gSWYgc2VsZWN0ICdjbG9uZScsIGl0IHdpbGwgY2xvbmUgZnJvbSBzb3VyY2UgbG9hZCBiYWxhbmNlci4gSWYgc2VsZWN0ICdlbXB0eScgaXQgd2lsbCBub3QgYXR0YWNoIGFueSBiYWNrZW5kIHNlcnZlcnMuIElmIHNlbGVjdCAnYXBwZW5kJyBpdCB3aWxsIGFwcGVuZCB0aGUgbmV3IGJhY2tlbmQgc2VydmVyIGxpc3QgdG8gc291cmNlIGJhY2tlZCBzZXJ2ZXJzLiBJZiBzZWxlY3QgJ3JlcGxhY2UnIGl0IHdpbGwgb25seSBhdHRhY2ggbmV3IGJhY2tlbmQgc2VydmVyIGxpc3QuIERlZmF1bHQgaXMgJ2Nsb25lJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrZW5kU2VydmVyc1BvbGljeT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJOYW1lOiBOYW1lIG9mIGNyZWF0ZWQgbG9hZCBiYWxhbmNlci4gTGVuZ3RoIGlzIGxpbWl0ZWQgdG8gMS04MCBjaGFyYWN0ZXJzLCBhbGxvd2VkIHRvIGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgJy0sIC8sIF8sLicgV2hlbiBub3Qgc3BlY2lmaWVkLCBhIGRlZmF1bHQgbmFtZSB3aWxsIGJlIGFzc2lnbmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlck5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gc2xiLiBNYXggc3VwcG9ydCA1IHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgc2xiLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHJvcy5Sb3NUYWdbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzUG9saWN5OiBTb2x1dGlvbiBmb3IgaGFuZGxlIHRoZSB0YWdzLiBJZiBzZWxlY3QgJ2Nsb25lJywgaXQgd2lsbCBjbG9uZSBmcm9tIHNvdXJjZSBsb2FkIGJhbGFuY2VyLiBJZiBzZWxlY3QgJ2VtcHR5JyBpdCB3aWxsIG5vdCBjb3BweSB0YWdzLiBJZiBzZWxlY3QgJ2FwcGVuZCcgaXQgd2lsbCBhcHBlbmQgdGhlIG5ldyB0YWdzLiBJZiBzZWxlY3QgJ3JlcGxhY2UnIGl0IHdpbGwgYWRkIG5ldyB0YWdzLlxuICAgICAqIERlZmF1bHQgaXMgJ2VtcHR5Jy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzUG9saWN5Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIG5ldyBWU3dpdGNoIElEIHRvIGNyZWF0ZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLiBGb3IgVlBDIG5ldHdvcmsgb25seSBhbmQgdGhlIFZTd2l0Y2ggc2hvdWxkIGJlbG9uZyB0byB0aGUgVlBDIHdoaWNoIHNvdXJjZSBsb2FkIGJhbGFuY2VyIGlzIGxvY2F0ZWQuV2hlbiBub3Qgc3BlY2lmaWVkLCBzb3VyY2UgbG9hZCBiYWxhbmNlciBWU3dpdGNoIElEIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTG9hZEJhbGFuY2VyQ2xvbmVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTG9hZEJhbGFuY2VyQ2xvbmVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NMb2FkQmFsYW5jZXJDbG9uZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2FkQmFsYW5jZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VMb2FkQmFsYW5jZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VMb2FkQmFsYW5jZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlTG9hZEJhbGFuY2VySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlTG9hZEJhbGFuY2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3NQb2xpY3kgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3NQb2xpY3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3NQb2xpY3knLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzUG9saWN5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImNsb25lXCIsXCJlbXB0eVwiLFwiYXBwZW5kXCIsXCJyZXBsYWNlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnc1BvbGljeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YWdzUG9saWN5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudlN3aXRjaElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYWNrZW5kU2VydmVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0xvYWRCYWxhbmNlckNsb25lX0JhY2tlbmRTZXJ2ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVSb3NUYWcpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJzUG9saWN5ICYmICh0eXBlb2YgcHJvcGVydGllcy5iYWNrZW5kU2VydmVyc1BvbGljeSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZFNlcnZlcnNQb2xpY3knLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5iYWNrZW5kU2VydmVyc1BvbGljeSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJjbG9uZVwiLFwiZW1wdHlcIixcImFwcGVuZFwiLFwicmVwbGFjZVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhY2tlbmRTZXJ2ZXJzUG9saWN5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJzUG9saWN5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0xvYWRCYWxhbmNlckNsb25lUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6TG9hZEJhbGFuY2VyQ2xvbmVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0xvYWRCYWxhbmNlckNsb25lUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6TG9hZEJhbGFuY2VyQ2xvbmVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTG9hZEJhbGFuY2VyQ2xvbmVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0xvYWRCYWxhbmNlckNsb25lUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgU291cmNlTG9hZEJhbGFuY2VySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlTG9hZEJhbGFuY2VySWQpLFxuICAgICAgQmFja2VuZFNlcnZlcnM6IHJvcy5saXN0TWFwcGVyKHJvc0xvYWRCYWxhbmNlckNsb25lQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYmFja2VuZFNlcnZlcnMpLFxuICAgICAgQmFja2VuZFNlcnZlcnNQb2xpY3k6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmFja2VuZFNlcnZlcnNQb2xpY3kpLFxuICAgICAgTG9hZEJhbGFuY2VyTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2FkQmFsYW5jZXJOYW1lKSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgICAgVGFnczogcm9zLmxpc3RNYXBwZXIocm9zLnJvc1RhZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICBUYWdzUG9saWN5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhZ3NQb2xpY3kpLFxuICAgICAgVlN3aXRjaElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZTd2l0Y2hJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXJDbG9uZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0xvYWRCYWxhbmNlckNsb25lIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlckNsb25lXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9hZEJhbGFuY2VySWQ6IFRoZSBpZCBvZiBsb2FkIGJhbGFuY2UgZ2VuZXJhdGVkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2FkQmFsYW5jZXJJZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlTG9hZEJhbGFuY2VySWQ6IFNvdXJjZSBsb2FkIGJhbGFuY2VyIGlkIHRvIGNsb25lXG4gICAgICovXG4gICAgcHVibGljIHNvdXJjZUxvYWRCYWxhbmNlcklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcnM6IFRoZSBsaXN0IG9mIEVDUyBpbnN0YW5jZSwgd2hpY2ggd2lsbCBhdHRhY2hlZCB0byBsb2FkIGJhbGFuY2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBiYWNrZW5kU2VydmVyczogQXJyYXk8Um9zTG9hZEJhbGFuY2VyQ2xvbmUuQmFja2VuZFNlcnZlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcnNQb2xpY3k6IFNvbHV0aW9uIGZvciBoYW5kbGUgdGhlIGJhY2tlbmQgc2VydmVyIGFuZCB3ZWlnaHRzLiBJZiBzZWxlY3QgJ2Nsb25lJywgaXQgd2lsbCBjbG9uZSBmcm9tIHNvdXJjZSBsb2FkIGJhbGFuY2VyLiBJZiBzZWxlY3QgJ2VtcHR5JyBpdCB3aWxsIG5vdCBhdHRhY2ggYW55IGJhY2tlbmQgc2VydmVycy4gSWYgc2VsZWN0ICdhcHBlbmQnIGl0IHdpbGwgYXBwZW5kIHRoZSBuZXcgYmFja2VuZCBzZXJ2ZXIgbGlzdCB0byBzb3VyY2UgYmFja2VkIHNlcnZlcnMuIElmIHNlbGVjdCAncmVwbGFjZScgaXQgd2lsbCBvbmx5IGF0dGFjaCBuZXcgYmFja2VuZCBzZXJ2ZXIgbGlzdC4gRGVmYXVsdCBpcyAnY2xvbmUnLlxuICAgICAqL1xuICAgIHB1YmxpYyBiYWNrZW5kU2VydmVyc1BvbGljeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlck5hbWU6IE5hbWUgb2YgY3JlYXRlZCBsb2FkIGJhbGFuY2VyLiBMZW5ndGggaXMgbGltaXRlZCB0byAxLTgwIGNoYXJhY3RlcnMsIGFsbG93ZWQgdG8gY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCAnLSwgLywgXywuJyBXaGVuIG5vdCBzcGVjaWZpZWQsIGEgZGVmYXVsdCBuYW1lIHdpbGwgYmUgYXNzaWduZWQuXG4gICAgICovXG4gICAgcHVibGljIGxvYWRCYWxhbmNlck5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBzbGIuIE1heCBzdXBwb3J0IDUgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBzbGIuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFnczogcm9zLlRhZ01hbmFnZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnc1BvbGljeTogU29sdXRpb24gZm9yIGhhbmRsZSB0aGUgdGFncy4gSWYgc2VsZWN0ICdjbG9uZScsIGl0IHdpbGwgY2xvbmUgZnJvbSBzb3VyY2UgbG9hZCBiYWxhbmNlci4gSWYgc2VsZWN0ICdlbXB0eScgaXQgd2lsbCBub3QgY29wcHkgdGFncy4gSWYgc2VsZWN0ICdhcHBlbmQnIGl0IHdpbGwgYXBwZW5kIHRoZSBuZXcgdGFncy4gSWYgc2VsZWN0ICdyZXBsYWNlJyBpdCB3aWxsIGFkZCBuZXcgdGFncy5cbiAgICAgKiBEZWZhdWx0IGlzICdlbXB0eScuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3NQb2xpY3k6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBuZXcgVlN3aXRjaCBJRCB0byBjcmVhdGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS4gRm9yIFZQQyBuZXR3b3JrIG9ubHkgYW5kIHRoZSBWU3dpdGNoIHNob3VsZCBiZWxvbmcgdG8gdGhlIFZQQyB3aGljaCBzb3VyY2UgbG9hZCBiYWxhbmNlciBpcyBsb2NhdGVkLldoZW4gbm90IHNwZWNpZmllZCwgc291cmNlIGxvYWQgYmFsYW5jZXIgVlN3aXRjaCBJRCB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgcHVibGljIHZTd2l0Y2hJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMQjo6TG9hZEJhbGFuY2VyQ2xvbmVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0xvYWRCYWxhbmNlckNsb25lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NMb2FkQmFsYW5jZXJDbG9uZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0xvYWRCYWxhbmNlcklkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5zb3VyY2VMb2FkQmFsYW5jZXJJZCA9IHByb3BzLnNvdXJjZUxvYWRCYWxhbmNlcklkO1xuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2ZXJzID0gcHJvcHMuYmFja2VuZFNlcnZlcnM7XG4gICAgICAgIHRoaXMuYmFja2VuZFNlcnZlcnNQb2xpY3kgPSBwcm9wcy5iYWNrZW5kU2VydmVyc1BvbGljeTtcbiAgICAgICAgdGhpcy5sb2FkQmFsYW5jZXJOYW1lID0gcHJvcHMubG9hZEJhbGFuY2VyTmFtZTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMudGFncyA9IG5ldyByb3MuVGFnTWFuYWdlcihyb3MuVGFnVHlwZS5TVEFOREFSRCwgXCJBTElZVU46OlNMQjo6TG9hZEJhbGFuY2VyQ2xvbmVcIiwgcHJvcHMudGFncywgeyB0YWdQcm9wZXJ0eU5hbWU6ICd0YWdzJyB9KTtcbiAgICAgICAgdGhpcy50YWdzUG9saWN5ID0gcHJvcHMudGFnc1BvbGljeTtcbiAgICAgICAgdGhpcy52U3dpdGNoSWQgPSBwcm9wcy52U3dpdGNoSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlTG9hZEJhbGFuY2VySWQ6IHRoaXMuc291cmNlTG9hZEJhbGFuY2VySWQsXG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyczogdGhpcy5iYWNrZW5kU2VydmVycyxcbiAgICAgICAgICAgIGJhY2tlbmRTZXJ2ZXJzUG9saWN5OiB0aGlzLmJhY2tlbmRTZXJ2ZXJzUG9saWN5LFxuICAgICAgICAgICAgbG9hZEJhbGFuY2VyTmFtZTogdGhpcy5sb2FkQmFsYW5jZXJOYW1lLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncy5yZW5kZXJUYWdzKCksXG4gICAgICAgICAgICB0YWdzUG9saWN5OiB0aGlzLnRhZ3NQb2xpY3ksXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHRoaXMudlN3aXRjaElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NMb2FkQmFsYW5jZXJDbG9uZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0xvYWRCYWxhbmNlckNsb25lIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBCYWNrZW5kU2VydmVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgYmFja2VuZCBzZXJ2ZXIgdHlwZS4gVmFsaWQgdmFsdWVzOmVjczogRUNTIGluc3RhbmNlIChkZWZhdWx0KWVuaTogRWxhc3RpYyBOZXR3b3JrIEludGVyZmFjZSAoRU5JKVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJJZDogTmVlZCBvbmUgdmFsaWQgaW5zdGFuY2UgaWQuIFRoZSBpbnN0YW5jZSBzdGF0dXMgc2hvdWxkIHJ1bm5pbmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2ZXJJZDogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBiYWNrZW5kIHNlcnZlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZlcklwOiBUaGUgSVAgb2YgdGhlIGluc3RhbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVySXA/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgd2VpZ2h0OiBUaGUgd2VpZ2h0IG9mIGJhY2tlbmQgc2VydmVyIG9mIGxvYWQgYmFsYW5jZXIuIEZyb20gMCB0byAxMDAsIDAgbWVhbnMgb2ZmbGluZS4gRGVmYXVsdCBpcyAxMDAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTG9hZEJhbGFuY2VyQ2xvbmVfQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVySXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmVySXApKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlaWdodCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy53ZWlnaHQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLndlaWdodCAmJiAodHlwZW9mIHByb3BlcnRpZXMud2VpZ2h0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWlnaHQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy53ZWlnaHQsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2VpZ2h0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLndlaWdodCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJCYWNrZW5kU2VydmVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlckNsb25lLkJhY2tlbmRTZXJ2ZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBCYWNrZW5kU2VydmVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlckNsb25lLkJhY2tlbmRTZXJ2ZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0xvYWRCYWxhbmNlckNsb25lQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTG9hZEJhbGFuY2VyQ2xvbmVfQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICBTZXJ2ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2ZXJJZCksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBTZXJ2ZXJJcDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2ZXJJcCksXG4gICAgICBXZWlnaHQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2VpZ2h0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xCOjpNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc01hc3RlclNsYXZlU2VydmVyR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9hZEJhbGFuY2VySWQ6IFRoZSBJRCBvZiB0aGUgU2VydmVyIExvYWQgQmFsYW5jZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzOiBBIGxpc3Qgb2YgYWN0aXZlL3N0YW5kYnkgc2VydmVyIGdyb3VwLlxuICAgICAqIEFuIGFjdGl2ZS9zdGFuZGJ5IHNlcnZlciBncm91cCBjYW4gb25seSBjb250YWluIHR3byBiYWNrZW5kIHNlcnZlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyU2xhdmVCYWNrZW5kU2VydmVyczogQXJyYXk8Um9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cC5NYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hc3RlclNsYXZlU2VydmVyR3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWN0aXZlL3N0YW5kYnkgc2VydmVyIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlclNsYXZlU2VydmVyR3JvdXBOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01hc3RlclNsYXZlU2VydmVyR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01hc3RlclNsYXZlU2VydmVyR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvYWRCYWxhbmNlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvYWRCYWxhbmNlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2FkQmFsYW5jZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubWFzdGVyU2xhdmVTZXJ2ZXJHcm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hc3RlclNsYXZlQmFja2VuZFNlcnZlcnMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWFzdGVyU2xhdmVCYWNrZW5kU2VydmVycykpO1xuICAgIGlmKHByb3BlcnRpZXMubWFzdGVyU2xhdmVCYWNrZW5kU2VydmVycyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5tYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFzdGVyU2xhdmVCYWNrZW5kU2VydmVycycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFzdGVyU2xhdmVCYWNrZW5kU2VydmVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc01hc3RlclNsYXZlU2VydmVyR3JvdXBfTWFzdGVyU2xhdmVCYWNrZW5kU2VydmVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5tYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc01hc3RlclNsYXZlU2VydmVyR3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6TWFzdGVyU2xhdmVTZXJ2ZXJHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTG9hZEJhbGFuY2VySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpLFxuICAgICAgTWFzdGVyU2xhdmVCYWNrZW5kU2VydmVyczogcm9zLmxpc3RNYXBwZXIocm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cE1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubWFzdGVyU2xhdmVCYWNrZW5kU2VydmVycyksXG4gICAgICBNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXN0ZXJTbGF2ZVNlcnZlckdyb3VwTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xCOjpNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkOiBBY3RpdmUvc3RhbmRieSBzZXJ2ZXIgZ3JvdXAgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQ6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlcklkOiBUaGUgSUQgb2YgdGhlIFNlcnZlciBMb2FkIEJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQmFsYW5jZXJJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnM6IEEgbGlzdCBvZiBhY3RpdmUvc3RhbmRieSBzZXJ2ZXIgZ3JvdXAuXG4gICAgICogQW4gYWN0aXZlL3N0YW5kYnkgc2VydmVyIGdyb3VwIGNhbiBvbmx5IGNvbnRhaW4gdHdvIGJhY2tlbmQgc2VydmVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWFzdGVyU2xhdmVCYWNrZW5kU2VydmVyczogQXJyYXk8Um9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cC5NYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hc3RlclNsYXZlU2VydmVyR3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWN0aXZlL3N0YW5kYnkgc2VydmVyIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBtYXN0ZXJTbGF2ZVNlcnZlckdyb3VwTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMQjo6TWFzdGVyU2xhdmVTZXJ2ZXJHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmxvYWRCYWxhbmNlcklkID0gcHJvcHMubG9hZEJhbGFuY2VySWQ7XG4gICAgICAgIHRoaXMubWFzdGVyU2xhdmVCYWNrZW5kU2VydmVycyA9IHByb3BzLm1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnM7XG4gICAgICAgIHRoaXMubWFzdGVyU2xhdmVTZXJ2ZXJHcm91cE5hbWUgPSBwcm9wcy5tYXN0ZXJTbGF2ZVNlcnZlckdyb3VwTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJJZDogdGhpcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIG1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnM6IHRoaXMubWFzdGVyU2xhdmVCYWNrZW5kU2VydmVycyxcbiAgICAgICAgICAgIG1hc3RlclNsYXZlU2VydmVyR3JvdXBOYW1lOiB0aGlzLm1hc3RlclNsYXZlU2VydmVyR3JvdXBOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWFzdGVyU2xhdmVCYWNrZW5kU2VydmVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJUeXBlOiBUaGUgaWRlbnRpdHkgb2YgYmFja2VuZCBzZXJ2ZXIuIENvdWxkIGJlIFwiTWFzdGVyXCIgKGRlZmF1bHQpIG9yIFwiU2xhdmVcIlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVyVHlwZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJJZDogRUNTIGluc3RhbmNlIElEXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2ZXJJZDogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IFRoZSBwb3J0IHVzZWQgYnkgYmFja2VuZCBzZXJ2ZXIuIEZyb20gMSB0byA2NTUzNVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHdlaWdodDogVGhlIHdlaWdodCBvZiBiYWNrZW5kIHNlcnZlciBvZiBsb2FkIGJhbGFuY2VyLiBGcm9tIDAgdG8gMTAwLCAwIG1lYW5zIG9mZmxpbmUuIERlZmF1bHQgaXMgMTAwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwX01hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZlclR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZlclR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlclR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2ZXJUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk1hc3RlclwiLFwiU2xhdmVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2ZXJUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZlclR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wb3J0KSk7XG4gICAgaWYocHJvcGVydGllcy5wb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5wb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2VpZ2h0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLndlaWdodCkpO1xuICAgIGlmKHByb3BlcnRpZXMud2VpZ2h0ICYmICh0eXBlb2YgcHJvcGVydGllcy53ZWlnaHQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlaWdodCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLndlaWdodCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWlnaHQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMud2VpZ2h0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwLk1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwLk1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cE1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cF9NYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTZXJ2ZXJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZlclR5cGUpLFxuICAgICAgU2VydmVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVySWQpLFxuICAgICAgUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIFdlaWdodDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWlnaHQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6OlJ1bGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFRoZSBmcm9udC1lbmQgSFRUUFMgbGlzdGVuZXIgcG9ydCBvZiB0aGUgU2VydmVyIExvYWQgQmFsYW5jZXIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlOlxuICAgICAqIDEtNjU1MzVcbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lclBvcnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIFNlcnZlciBMb2FkIEJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZUxpc3Q6IFRoZSBmb3J3YXJkaW5nIHJ1bGVzIHRvIGFkZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlTGlzdDogQXJyYXk8Um9zUnVsZS5SdWxlTGlzdFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NSdWxlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1J1bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSdWxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsaXN0ZW5lclBvcnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubGlzdGVuZXJQb3J0KSk7XG4gICAgaWYocHJvcGVydGllcy5saXN0ZW5lclBvcnQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmxpc3RlbmVyUG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGlzdGVuZXJQb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubGlzdGVuZXJQb3J0LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2NTUzNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGlzdGVuZXJQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmxpc3RlbmVyUG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZUxpc3QnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZUxpc3QpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJ1bGVMaXN0ICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucnVsZUxpc3QpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5ydWxlTGlzdCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVMaXN0Jywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJ1bGVMaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zUnVsZV9SdWxlTGlzdFByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5ydWxlTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvYWRCYWxhbmNlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvYWRCYWxhbmNlcklkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1J1bGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpSdWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSdWxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6UnVsZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSdWxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTGlzdGVuZXJQb3J0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpc3RlbmVyUG9ydCksXG4gICAgICBMb2FkQmFsYW5jZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCksXG4gICAgICBSdWxlTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zUnVsZVJ1bGVMaXN0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJ1bGVMaXN0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTTEI6OlJ1bGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NSdWxlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTTEI6OlJ1bGVcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSdWxlczogQSBsaXN0IG9mIGZvcndhcmRpbmcgcnVsZXMuIEVhY2ggZWxlbWVudCBvZiBydWxlcyBjb250YWlucyBcIlJ1bGVJZFwiLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUnVsZXM6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpc3RlbmVyUG9ydDogVGhlIGZyb250LWVuZCBIVFRQUyBsaXN0ZW5lciBwb3J0IG9mIHRoZSBTZXJ2ZXIgTG9hZCBCYWxhbmNlciBpbnN0YW5jZS4gVmFsaWQgdmFsdWU6XG4gICAgICogMS02NTUzNVxuICAgICAqL1xuICAgIHB1YmxpYyBsaXN0ZW5lclBvcnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIFNlcnZlciBMb2FkIEJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQmFsYW5jZXJJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVMaXN0OiBUaGUgZm9yd2FyZGluZyBydWxlcyB0byBhZGQuXG4gICAgICovXG4gICAgcHVibGljIHJ1bGVMaXN0OiBBcnJheTxSb3NSdWxlLlJ1bGVMaXN0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMQjo6UnVsZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUnVsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUnVsZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyUnVsZXMgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1J1bGVzJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5saXN0ZW5lclBvcnQgPSBwcm9wcy5saXN0ZW5lclBvcnQ7XG4gICAgICAgIHRoaXMubG9hZEJhbGFuY2VySWQgPSBwcm9wcy5sb2FkQmFsYW5jZXJJZDtcbiAgICAgICAgdGhpcy5ydWxlTGlzdCA9IHByb3BzLnJ1bGVMaXN0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpc3RlbmVyUG9ydDogdGhpcy5saXN0ZW5lclBvcnQsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJJZDogdGhpcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIHJ1bGVMaXN0OiB0aGlzLnJ1bGVMaXN0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUnVsZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUnVsZUxpc3RQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdlNlcnZlckdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgVlNlcnZlciBncm91cCBhc3NvY2lhdGVkIHdpdGggdGhlIGZvcndhcmRpbmcgcnVsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZTZXJ2ZXJHcm91cElkOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZG9tYWluOiBUaGUgZG9tYWluIG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkb21haW4/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXJsOiBUaGUgVVJMLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZm9yd2FyZGluZyBydWxlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJ1bGVMaXN0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJ1bGVMaXN0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUnVsZV9SdWxlTGlzdFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndlNlcnZlckdyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudlNlcnZlckdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTZXJ2ZXJHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZTZXJ2ZXJHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZG9tYWluKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1cmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudXJsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ydWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVsZU5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUnVsZUxpc3RQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpSdWxlLlJ1bGVMaXN0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSdWxlTGlzdFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OlJ1bGUuUnVsZUxpc3RgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUnVsZVJ1bGVMaXN0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1J1bGVfUnVsZUxpc3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZTZXJ2ZXJHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZTZXJ2ZXJHcm91cElkKSxcbiAgICAgIERvbWFpbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW4pLFxuICAgICAgVXJsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVybCksXG4gICAgICBSdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6VlNlcnZlckdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1ZTZXJ2ZXJHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIGlkIG9mIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U2VydmVyR3JvdXBOYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIFZTZXJ2ZXJHcm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U2VydmVyR3JvdXBOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcnM6IFRoZSBsaXN0IG9mIGEgY29tYmluYXRpb24gb2YgRUNTIEluc3RhbmNlLVBvcnQtV2VpZ2h0LlNhbWUgZWNzIGluc3RhbmNlIHdpdGggZGlmZmVyZW50IHBvcnQgaXMgYWxsb3dlZCwgYnV0IHNhbWUgZWNzIGluc3RhbmNlIHdpdGggc2FtZSBwb3J0IGlzbid0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJzPzogQXJyYXk8Um9zVlNlcnZlckdyb3VwLkJhY2tlbmRTZXJ2ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1ZTZXJ2ZXJHcm91cFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NWU2VydmVyR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWU2VydmVyR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTZXJ2ZXJHcm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudlNlcnZlckdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndlNlcnZlckdyb3VwTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U2VydmVyR3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2FkQmFsYW5jZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhY2tlbmRTZXJ2ZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVlNlcnZlckdyb3VwX0JhY2tlbmRTZXJ2ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmJhY2tlbmRTZXJ2ZXJzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1ZTZXJ2ZXJHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OlZTZXJ2ZXJHcm91cGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVlNlcnZlckdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMQjo6VlNlcnZlckdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZTZXJ2ZXJHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVlNlcnZlckdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTG9hZEJhbGFuY2VySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpLFxuICAgICAgVlNlcnZlckdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52U2VydmVyR3JvdXBOYW1lKSxcbiAgICAgIEJhY2tlbmRTZXJ2ZXJzOiByb3MubGlzdE1hcHBlcihyb3NWU2VydmVyR3JvdXBCYWNrZW5kU2VydmVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5iYWNrZW5kU2VydmVycyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpWU2VydmVyR3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NWU2VydmVyR3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNMQjo6VlNlcnZlckdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmFja2VuZFNlcnZlcnM6IEJhY2tlbmQgc2VydmVyIGxpc3QgaW4gdGhpcyBWU2VydmVyR3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYWNrZW5kU2VydmVyczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWU2VydmVyR3JvdXBJZDogVGhlIGlkIG9mIFZTZXJ2ZXJHcm91cCBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlNlcnZlckdyb3VwSWQ6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlcklkOiBUaGUgaWQgb2YgbG9hZCBiYWxhbmNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEJhbGFuY2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U2VydmVyR3JvdXBOYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIFZTZXJ2ZXJHcm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdlNlcnZlckdyb3VwTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhY2tlbmRTZXJ2ZXJzOiBUaGUgbGlzdCBvZiBhIGNvbWJpbmF0aW9uIG9mIEVDUyBJbnN0YW5jZS1Qb3J0LVdlaWdodC5TYW1lIGVjcyBpbnN0YW5jZSB3aXRoIGRpZmZlcmVudCBwb3J0IGlzIGFsbG93ZWQsIGJ1dCBzYW1lIGVjcyBpbnN0YW5jZSB3aXRoIHNhbWUgcG9ydCBpc24ndC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFja2VuZFNlcnZlcnM6IEFycmF5PFJvc1ZTZXJ2ZXJHcm91cC5CYWNrZW5kU2VydmVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTEI6OlZTZXJ2ZXJHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVlNlcnZlckdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NWU2VydmVyR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckJhY2tlbmRTZXJ2ZXJzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdCYWNrZW5kU2VydmVycycpKTtcbiAgICAgICAgdGhpcy5hdHRyVlNlcnZlckdyb3VwSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1ZTZXJ2ZXJHcm91cElkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5sb2FkQmFsYW5jZXJJZCA9IHByb3BzLmxvYWRCYWxhbmNlcklkO1xuICAgICAgICB0aGlzLnZTZXJ2ZXJHcm91cE5hbWUgPSBwcm9wcy52U2VydmVyR3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2ZXJzID0gcHJvcHMuYmFja2VuZFNlcnZlcnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZEJhbGFuY2VySWQ6IHRoaXMubG9hZEJhbGFuY2VySWQsXG4gICAgICAgICAgICB2U2VydmVyR3JvdXBOYW1lOiB0aGlzLnZTZXJ2ZXJHcm91cE5hbWUsXG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyczogdGhpcy5iYWNrZW5kU2VydmVycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVlNlcnZlckdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVlNlcnZlckdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBCYWNrZW5kU2VydmVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJJZDogTmVlZCBvbmUgdmFsaWQgRUNTIGluc3RhbmNlIGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVySWQ6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiBUaGUgcG9ydCBvZiBiYWNrZW5kIHNlcnZlci4gRnJvbSAxIHRvIDY1NTM1LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHdlaWdodDogVGhlIHdlaWdodCBvZiBiYWNrZW5kIHNlcnZlciBvZiBsb2FkIGJhbGFuY2VyLiBGcm9tIDAgdG8gMTAwLCAwIG1lYW5zIG9mZmxpbmUuIERlZmF1bHQgaXMgMTAwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgd2VpZ2h0PzogbnVtYmVyO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWU2VydmVyR3JvdXBfQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLndlaWdodCAmJiAodHlwZW9mIHByb3BlcnRpZXMud2VpZ2h0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWlnaHQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy53ZWlnaHQsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2VpZ2h0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLndlaWdodCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJCYWNrZW5kU2VydmVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTEI6OlZTZXJ2ZXJHcm91cC5CYWNrZW5kU2VydmVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQmFja2VuZFNlcnZlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xCOjpWU2VydmVyR3JvdXAuQmFja2VuZFNlcnZlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVlNlcnZlckdyb3VwQmFja2VuZFNlcnZlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVlNlcnZlckdyb3VwX0JhY2tlbmRTZXJ2ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTZXJ2ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2ZXJJZCksXG4gICAgICBQb3J0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgV2VpZ2h0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlaWdodCksXG4gICAgfTtcbn1cbiJdfQ==