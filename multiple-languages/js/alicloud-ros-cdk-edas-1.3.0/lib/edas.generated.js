"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosUserDefineRegion = exports.RosK8sSlbBinding = exports.RosK8sCluster = exports.RosK8sApplication = exports.RosDeployGroup = exports.RosClusterMember = exports.RosCluster = exports.RosApplication = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('componentIds', ros.validateString)(properties.componentIds));
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    errors.collect(ros.propertyValidator('applicationName', ros.requiredValidator)(properties.applicationName));
    if (properties.applicationName && (Array.isArray(properties.applicationName) || (typeof properties.applicationName) === 'string')) {
        errors.collect(ros.propertyValidator('applicationName', ros.validateLength)({
            data: properties.applicationName.length,
            min: 1,
            max: 36,
        }));
    }
    errors.collect(ros.propertyValidator('applicationName', ros.validateString)(properties.applicationName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('ecuInfo', ros.validateString)(properties.ecuInfo));
    errors.collect(ros.propertyValidator('healthCheckUrl', ros.validateString)(properties.healthCheckUrl));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if (properties.packageType && (typeof properties.packageType) !== 'object') {
        errors.collect(ros.propertyValidator('packageType', ros.validateAllowedValues)({
            data: properties.packageType,
            allowedValues: ["war", "jar"],
        }));
    }
    errors.collect(ros.propertyValidator('packageType', ros.validateString)(properties.packageType));
    errors.collect(ros.propertyValidator('deployment', RosApplication_DeploymentPropertyValidator)(properties.deployment));
    errors.collect(ros.propertyValidator('buildPackId', ros.validateNumber)(properties.buildPackId));
    return errors.wrap('supplied properties not correct for "RosApplicationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Application` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Application` resource.
 */
// @ts-ignore TS6133
function rosApplicationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosApplicationPropsValidator(properties).assertSuccess();
    }
    return {
        'ApplicationName': ros.stringToRosTemplate(properties.applicationName),
        'ClusterId': ros.stringToRosTemplate(properties.clusterId),
        'BuildPackId': ros.numberToRosTemplate(properties.buildPackId),
        'ComponentIds': ros.stringToRosTemplate(properties.componentIds),
        'Deployment': rosApplicationDeploymentPropertyToRosTemplate(properties.deployment),
        'Description': ros.stringToRosTemplate(properties.description),
        'EcuInfo': ros.stringToRosTemplate(properties.ecuInfo),
        'HealthCheckURL': ros.stringToRosTemplate(properties.healthCheckUrl),
        'LogicalRegionId': ros.stringToRosTemplate(properties.logicalRegionId),
        'PackageType': ros.stringToRosTemplate(properties.packageType),
        'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::Application`, which is used to create an application in an Elastic Compute Service (ECS) cluster in Enterprise Distributed Application Service (EDAS).
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
 */
class RosApplication extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrPort = this.getAtt('Port');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.applicationName = props.applicationName;
        this.clusterId = props.clusterId;
        this.buildPackId = props.buildPackId;
        this.componentIds = props.componentIds;
        this.deployment = props.deployment;
        this.description = props.description;
        this.ecuInfo = props.ecuInfo;
        this.healthCheckUrl = props.healthCheckUrl;
        this.logicalRegionId = props.logicalRegionId;
        this.packageType = props.packageType;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            applicationName: this.applicationName,
            clusterId: this.clusterId,
            buildPackId: this.buildPackId,
            componentIds: this.componentIds,
            deployment: this.deployment,
            description: this.description,
            ecuInfo: this.ecuInfo,
            healthCheckUrl: this.healthCheckUrl,
            logicalRegionId: this.logicalRegionId,
            packageType: this.packageType,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosApplication = RosApplication;
/**
 * The resource type name for this resource class.
 */
RosApplication.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Application";
/**
 * Determine whether the given properties match those of a `DeploymentProperty`
 *
 * @param properties - the TypeScript properties of a `DeploymentProperty`
 *
 * @returns the result of the validation.
 */
function RosApplication_DeploymentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('releaseType', ros.validateNumber)(properties.releaseType));
    errors.collect(ros.propertyValidator('desc', ros.validateString)(properties.desc));
    errors.collect(ros.propertyValidator('gray', ros.validateBoolean)(properties.gray));
    errors.collect(ros.propertyValidator('appEnv', ros.validateString)(properties.appEnv));
    errors.collect(ros.propertyValidator('batch', ros.validateNumber)(properties.batch));
    errors.collect(ros.propertyValidator('warUrl', ros.requiredValidator)(properties.warUrl));
    errors.collect(ros.propertyValidator('warUrl', ros.validateString)(properties.warUrl));
    errors.collect(ros.propertyValidator('trafficControlStrategy', ros.validateString)(properties.trafficControlStrategy));
    errors.collect(ros.propertyValidator('batchWaitTime', ros.validateNumber)(properties.batchWaitTime));
    errors.collect(ros.propertyValidator('packageVersion', ros.requiredValidator)(properties.packageVersion));
    if (properties.packageVersion && (Array.isArray(properties.packageVersion) || (typeof properties.packageVersion) === 'string')) {
        errors.collect(ros.propertyValidator('packageVersion', ros.validateLength)({
            data: properties.packageVersion.length,
            min: 1,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('packageVersion', ros.validateString)(properties.packageVersion));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "DeploymentProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Application.Deployment` resource
 *
 * @param properties - the TypeScript properties of a `DeploymentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Application.Deployment` resource.
 */
// @ts-ignore TS6133
function rosApplicationDeploymentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApplication_DeploymentPropertyValidator(properties).assertSuccess();
    return {
        'ReleaseType': ros.numberToRosTemplate(properties.releaseType),
        'Desc': ros.stringToRosTemplate(properties.desc),
        'Gray': ros.booleanToRosTemplate(properties.gray),
        'AppEnv': ros.stringToRosTemplate(properties.appEnv),
        'Batch': ros.numberToRosTemplate(properties.batch),
        'WarUrl': ros.stringToRosTemplate(properties.warUrl),
        'TrafficControlStrategy': ros.stringToRosTemplate(properties.trafficControlStrategy),
        'BatchWaitTime': ros.numberToRosTemplate(properties.batchWaitTime),
        'PackageVersion': ros.stringToRosTemplate(properties.packageVersion),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
    };
}
/**
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    if (properties.oversoldFactor && (typeof properties.oversoldFactor) !== 'object') {
        errors.collect(ros.propertyValidator('oversoldFactor', ros.validateAllowedValues)({
            data: properties.oversoldFactor,
            allowedValues: [2, 4, 8],
        }));
    }
    errors.collect(ros.propertyValidator('oversoldFactor', ros.validateNumber)(properties.oversoldFactor));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('clusterName', ros.requiredValidator)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('networkMode', ros.requiredValidator)(properties.networkMode));
    errors.collect(ros.propertyValidator('networkMode', ros.validateNumber)(properties.networkMode));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateNumber)(properties.clusterType));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
        'ClusterName': ros.stringToRosTemplate(properties.clusterName),
        'ClusterType': ros.numberToRosTemplate(properties.clusterType),
        'NetworkMode': ros.numberToRosTemplate(properties.networkMode),
        'LogicalRegionId': ros.stringToRosTemplate(properties.logicalRegionId),
        'OversoldFactor': ros.numberToRosTemplate(properties.oversoldFactor),
        'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
        'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::Cluster`, which is used to create a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-cluster
 */
class RosCluster extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterName = this.getAtt('ClusterName');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrIaasProvider = this.getAtt('IaasProvider');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterName = props.clusterName;
        this.clusterType = props.clusterType;
        this.networkMode = props.networkMode;
        this.logicalRegionId = props.logicalRegionId;
        this.oversoldFactor = props.oversoldFactor;
        this.resourceGroupId = props.resourceGroupId;
        this.vpcId = props.vpcId;
    }
    get rosProperties() {
        return {
            clusterName: this.clusterName,
            clusterType: this.clusterType,
            networkMode: this.networkMode,
            logicalRegionId: this.logicalRegionId,
            oversoldFactor: this.oversoldFactor,
            resourceGroupId: this.resourceGroupId,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCluster = RosCluster;
/**
 * The resource type name for this resource class.
 */
RosCluster.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Cluster";
/**
 * Determine whether the given properties match those of a `RosClusterMemberProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterMemberProps`
 *
 * @returns the result of the validation.
 */
function RosClusterMemberPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if (properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosClusterMemberProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::ClusterMember` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterMemberProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::ClusterMember` resource.
 */
// @ts-ignore TS6133
function rosClusterMemberPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosClusterMemberPropsValidator(properties).assertSuccess();
    }
    return {
        'ClusterId': ros.stringToRosTemplate(properties.clusterId),
        'InstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
        'Password': ros.stringToRosTemplate(properties.password),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::ClusterMember`, which is used to add Elastic Compute Service (ECS) instances to a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterMember` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
 */
class RosClusterMember extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosClusterMember.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterMemberIds = this.getAtt('ClusterMemberIds');
        this.attrEcuIds = this.getAtt('EcuIds');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.instanceIds = props.instanceIds;
        this.password = props.password;
    }
    get rosProperties() {
        return {
            clusterId: this.clusterId,
            instanceIds: this.instanceIds,
            password: this.password,
        };
    }
    renderProperties(props) {
        return rosClusterMemberPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosClusterMember = RosClusterMember;
/**
 * The resource type name for this resource class.
 */
RosClusterMember.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::ClusterMember";
/**
 * Determine whether the given properties match those of a `RosDeployGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDeployGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDeployGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    if (properties.groupName && (Array.isArray(properties.groupName) || (typeof properties.groupName) === 'string')) {
        errors.collect(ros.propertyValidator('groupName', ros.validateLength)({
            data: properties.groupName.length,
            min: 1,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    return errors.wrap('supplied properties not correct for "RosDeployGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::DeployGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDeployGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::DeployGroup` resource.
 */
// @ts-ignore TS6133
function rosDeployGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDeployGroupPropsValidator(properties).assertSuccess();
    }
    return {
        'AppId': ros.stringToRosTemplate(properties.appId),
        'GroupName': ros.stringToRosTemplate(properties.groupName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::DeployGroup`, which is used to create an instance group for an application.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeployGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
 */
class RosDeployGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDeployGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrId = this.getAtt('Id');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.groupName = props.groupName;
    }
    get rosProperties() {
        return {
            appId: this.appId,
            groupName: this.groupName,
        };
    }
    renderProperties(props) {
        return rosDeployGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDeployGroup = RosDeployGroup;
/**
 * The resource type name for this resource class.
 */
RosDeployGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::DeployGroup";
/**
 * Determine whether the given properties match those of a `RosK8sApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosK8sApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosK8sApplicationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    errors.collect(ros.propertyValidator('nasId', ros.validateString)(properties.nasId));
    errors.collect(ros.propertyValidator('liveness', RosK8sApplication_LivenessPropertyValidator)(properties.liveness));
    errors.collect(ros.propertyValidator('intranetSlbId', ros.validateString)(properties.intranetSlbId));
    errors.collect(ros.propertyValidator('webContainer', ros.validateString)(properties.webContainer));
    errors.collect(ros.propertyValidator('limitCpu', ros.validateNumber)(properties.limitCpu));
    errors.collect(ros.propertyValidator('slsConfigs', ros.listValidator(RosK8sApplication_SlsConfigsPropertyValidator))(properties.slsConfigs));
    if (properties.intranetSlbProtocol && (typeof properties.intranetSlbProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('intranetSlbProtocol', ros.validateAllowedValues)({
            data: properties.intranetSlbProtocol,
            allowedValues: ["TCP", "HTTP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('intranetSlbProtocol', ros.validateString)(properties.intranetSlbProtocol));
    errors.collect(ros.propertyValidator('webContainerConfig', RosK8sApplication_WebContainerConfigPropertyValidator)(properties.webContainerConfig));
    errors.collect(ros.propertyValidator('packageVersion', ros.validateString)(properties.packageVersion));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('jdk', ros.validateString)(properties.jdk));
    errors.collect(ros.propertyValidator('internetSlbId', ros.validateString)(properties.internetSlbId));
    errors.collect(ros.propertyValidator('preStop', RosK8sApplication_PreStopPropertyValidator)(properties.preStop));
    if (properties.internetSlbPort && (typeof properties.internetSlbPort) !== 'object') {
        errors.collect(ros.propertyValidator('internetSlbPort', ros.validateRange)({
            data: properties.internetSlbPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('internetSlbPort', ros.validateNumber)(properties.internetSlbPort));
    errors.collect(ros.propertyValidator('readiness', RosK8sApplication_ReadinessPropertyValidator)(properties.readiness));
    errors.collect(ros.propertyValidator('deployAcrossNodes', ros.validateBoolean)(properties.deployAcrossNodes));
    if (properties.requestsMem && (typeof properties.requestsMem) !== 'object') {
        errors.collect(ros.propertyValidator('requestsMem', ros.validateRange)({
            data: properties.requestsMem,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('requestsMem', ros.validateNumber)(properties.requestsMem));
    errors.collect(ros.propertyValidator('packageType', ros.validateString)(properties.packageType));
    errors.collect(ros.propertyValidator('useBodyEncoding', ros.validateBoolean)(properties.useBodyEncoding));
    errors.collect(ros.propertyValidator('javaStartUpConfig', RosK8sApplication_JavaStartUpConfigPropertyValidator)(properties.javaStartUpConfig));
    errors.collect(ros.propertyValidator('isMultilingualApp', ros.validateBoolean)(properties.isMultilingualApp));
    if (properties.requestsCpu && (typeof properties.requestsCpu) !== 'object') {
        errors.collect(ros.propertyValidator('requestsCpu', ros.validateRange)({
            data: properties.requestsCpu,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('requestsCpu', ros.validateNumber)(properties.requestsCpu));
    errors.collect(ros.propertyValidator('commandArgs', ros.listValidator(RosK8sApplication_CommandArgsPropertyValidator))(properties.commandArgs));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('envs', ros.listValidator(RosK8sApplication_EnvsPropertyValidator))(properties.envs));
    errors.collect(ros.propertyValidator('imageUrl', ros.validateString)(properties.imageUrl));
    errors.collect(ros.propertyValidator('deployAcrossZones', ros.validateBoolean)(properties.deployAcrossZones));
    errors.collect(ros.propertyValidator('postStart', RosK8sApplication_PostStartPropertyValidator)(properties.postStart));
    if (properties.internetTargetPort && (typeof properties.internetTargetPort) !== 'object') {
        errors.collect(ros.propertyValidator('internetTargetPort', ros.validateRange)({
            data: properties.internetTargetPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('internetTargetPort', ros.validateNumber)(properties.internetTargetPort));
    if (properties.replicas && (typeof properties.replicas) !== 'object') {
        errors.collect(ros.propertyValidator('replicas', ros.validateRange)({
            data: properties.replicas,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('replicas', ros.validateNumber)(properties.replicas));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('applicationDescription', ros.validateString)(properties.applicationDescription));
    errors.collect(ros.propertyValidator('uriEncoding', ros.validateString)(properties.uriEncoding));
    errors.collect(ros.propertyValidator('intranetTargetPort', ros.validateNumber)(properties.intranetTargetPort));
    errors.collect(ros.propertyValidator('mountDescs', ros.listValidator(RosK8sApplication_MountDescsPropertyValidator))(properties.mountDescs));
    errors.collect(ros.propertyValidator('localVolume', ros.listValidator(RosK8sApplication_LocalVolumePropertyValidator))(properties.localVolume));
    errors.collect(ros.propertyValidator('edasContainerVersion', ros.validateString)(properties.edasContainerVersion));
    errors.collect(ros.propertyValidator('runtimeClassName', ros.validateString)(properties.runtimeClassName));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    if (properties.internetSlbProtocol && (typeof properties.internetSlbProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('internetSlbProtocol', ros.validateAllowedValues)({
            data: properties.internetSlbProtocol,
            allowedValues: ["TCP", "HTTP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('internetSlbProtocol', ros.validateString)(properties.internetSlbProtocol));
    errors.collect(ros.propertyValidator('packageUrl', ros.validateString)(properties.packageUrl));
    if (properties.intranetSlbPort && (typeof properties.intranetSlbPort) !== 'object') {
        errors.collect(ros.propertyValidator('intranetSlbPort', ros.validateRange)({
            data: properties.intranetSlbPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('intranetSlbPort', ros.validateNumber)(properties.intranetSlbPort));
    errors.collect(ros.propertyValidator('repoId', ros.validateString)(properties.repoId));
    errors.collect(ros.propertyValidator('enableAhas', ros.validateBoolean)(properties.enableAhas));
    if (properties.limitMem && (typeof properties.limitMem) !== 'object') {
        errors.collect(ros.propertyValidator('limitMem', ros.validateRange)({
            data: properties.limitMem,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('limitMem', ros.validateNumber)(properties.limitMem));
    return errors.wrap('supplied properties not correct for "RosK8sApplicationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication` resource
 *
 * @param properties - the TypeScript properties of a `RosK8sApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosK8sApplicationPropsValidator(properties).assertSuccess();
    }
    return {
        'AppName': ros.stringToRosTemplate(properties.appName),
        'ClusterId': ros.stringToRosTemplate(properties.clusterId),
        'ApplicationDescription': ros.stringToRosTemplate(properties.applicationDescription),
        'Command': ros.stringToRosTemplate(properties.command),
        'CommandArgs': ros.listMapper(rosK8sApplicationCommandArgsPropertyToRosTemplate)(properties.commandArgs),
        'DeployAcrossNodes': ros.booleanToRosTemplate(properties.deployAcrossNodes),
        'DeployAcrossZones': ros.booleanToRosTemplate(properties.deployAcrossZones),
        'EdasContainerVersion': ros.stringToRosTemplate(properties.edasContainerVersion),
        'EnableAhas': ros.booleanToRosTemplate(properties.enableAhas),
        'Envs': ros.listMapper(rosK8sApplicationEnvsPropertyToRosTemplate)(properties.envs),
        'ImageUrl': ros.stringToRosTemplate(properties.imageUrl),
        'InternetSlbId': ros.stringToRosTemplate(properties.internetSlbId),
        'InternetSlbPort': ros.numberToRosTemplate(properties.internetSlbPort),
        'InternetSlbProtocol': ros.stringToRosTemplate(properties.internetSlbProtocol),
        'InternetTargetPort': ros.numberToRosTemplate(properties.internetTargetPort),
        'IntranetSlbId': ros.stringToRosTemplate(properties.intranetSlbId),
        'IntranetSlbPort': ros.numberToRosTemplate(properties.intranetSlbPort),
        'IntranetSlbProtocol': ros.stringToRosTemplate(properties.intranetSlbProtocol),
        'IntranetTargetPort': ros.numberToRosTemplate(properties.intranetTargetPort),
        'IsMultilingualApp': ros.booleanToRosTemplate(properties.isMultilingualApp),
        'JavaStartUpConfig': rosK8sApplicationJavaStartUpConfigPropertyToRosTemplate(properties.javaStartUpConfig),
        'JDK': ros.stringToRosTemplate(properties.jdk),
        'LimitCpu': ros.numberToRosTemplate(properties.limitCpu),
        'LimitMem': ros.numberToRosTemplate(properties.limitMem),
        'Liveness': rosK8sApplicationLivenessPropertyToRosTemplate(properties.liveness),
        'LocalVolume': ros.listMapper(rosK8sApplicationLocalVolumePropertyToRosTemplate)(properties.localVolume),
        'LogicalRegionId': ros.stringToRosTemplate(properties.logicalRegionId),
        'MountDescs': ros.listMapper(rosK8sApplicationMountDescsPropertyToRosTemplate)(properties.mountDescs),
        'Namespace': ros.stringToRosTemplate(properties.namespace),
        'NasId': ros.stringToRosTemplate(properties.nasId),
        'PackageType': ros.stringToRosTemplate(properties.packageType),
        'PackageUrl': ros.stringToRosTemplate(properties.packageUrl),
        'PackageVersion': ros.stringToRosTemplate(properties.packageVersion),
        'PostStart': rosK8sApplicationPostStartPropertyToRosTemplate(properties.postStart),
        'PreStop': rosK8sApplicationPreStopPropertyToRosTemplate(properties.preStop),
        'Readiness': rosK8sApplicationReadinessPropertyToRosTemplate(properties.readiness),
        'Replicas': ros.numberToRosTemplate(properties.replicas),
        'RepoId': ros.stringToRosTemplate(properties.repoId),
        'RequestsCpu': ros.numberToRosTemplate(properties.requestsCpu),
        'RequestsMem': ros.numberToRosTemplate(properties.requestsMem),
        'RuntimeClassName': ros.stringToRosTemplate(properties.runtimeClassName),
        'SlsConfigs': ros.listMapper(rosK8sApplicationSlsConfigsPropertyToRosTemplate)(properties.slsConfigs),
        'StorageType': ros.stringToRosTemplate(properties.storageType),
        'Timeout': ros.numberToRosTemplate(properties.timeout),
        'UriEncoding': ros.stringToRosTemplate(properties.uriEncoding),
        'UseBodyEncoding': ros.booleanToRosTemplate(properties.useBodyEncoding),
        'WebContainer': ros.stringToRosTemplate(properties.webContainer),
        'WebContainerConfig': rosK8sApplicationWebContainerConfigPropertyToRosTemplate(properties.webContainerConfig),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::K8sApplication`, which is used to create an application in a Kubernetes cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `K8sApplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sapplication
 */
class RosK8sApplication extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosK8sApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrAppName = this.getAtt('AppName');
        this.attrChangeOrderId = this.getAtt('ChangeOrderId');
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrCsClusterId = this.getAtt('CsClusterId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.clusterId = props.clusterId;
        this.applicationDescription = props.applicationDescription;
        this.command = props.command;
        this.commandArgs = props.commandArgs;
        this.deployAcrossNodes = props.deployAcrossNodes;
        this.deployAcrossZones = props.deployAcrossZones;
        this.edasContainerVersion = props.edasContainerVersion;
        this.enableAhas = props.enableAhas;
        this.envs = props.envs;
        this.imageUrl = props.imageUrl;
        this.internetSlbId = props.internetSlbId;
        this.internetSlbPort = props.internetSlbPort;
        this.internetSlbProtocol = props.internetSlbProtocol;
        this.internetTargetPort = props.internetTargetPort;
        this.intranetSlbId = props.intranetSlbId;
        this.intranetSlbPort = props.intranetSlbPort;
        this.intranetSlbProtocol = props.intranetSlbProtocol;
        this.intranetTargetPort = props.intranetTargetPort;
        this.isMultilingualApp = props.isMultilingualApp;
        this.javaStartUpConfig = props.javaStartUpConfig;
        this.jdk = props.jdk;
        this.limitCpu = props.limitCpu;
        this.limitMem = props.limitMem;
        this.liveness = props.liveness;
        this.localVolume = props.localVolume;
        this.logicalRegionId = props.logicalRegionId;
        this.mountDescs = props.mountDescs;
        this.namespace = props.namespace;
        this.nasId = props.nasId;
        this.packageType = props.packageType;
        this.packageUrl = props.packageUrl;
        this.packageVersion = props.packageVersion;
        this.postStart = props.postStart;
        this.preStop = props.preStop;
        this.readiness = props.readiness;
        this.replicas = props.replicas;
        this.repoId = props.repoId;
        this.requestsCpu = props.requestsCpu;
        this.requestsMem = props.requestsMem;
        this.runtimeClassName = props.runtimeClassName;
        this.slsConfigs = props.slsConfigs;
        this.storageType = props.storageType;
        this.timeout = props.timeout;
        this.uriEncoding = props.uriEncoding;
        this.useBodyEncoding = props.useBodyEncoding;
        this.webContainer = props.webContainer;
        this.webContainerConfig = props.webContainerConfig;
    }
    get rosProperties() {
        return {
            appName: this.appName,
            clusterId: this.clusterId,
            applicationDescription: this.applicationDescription,
            command: this.command,
            commandArgs: this.commandArgs,
            deployAcrossNodes: this.deployAcrossNodes,
            deployAcrossZones: this.deployAcrossZones,
            edasContainerVersion: this.edasContainerVersion,
            enableAhas: this.enableAhas,
            envs: this.envs,
            imageUrl: this.imageUrl,
            internetSlbId: this.internetSlbId,
            internetSlbPort: this.internetSlbPort,
            internetSlbProtocol: this.internetSlbProtocol,
            internetTargetPort: this.internetTargetPort,
            intranetSlbId: this.intranetSlbId,
            intranetSlbPort: this.intranetSlbPort,
            intranetSlbProtocol: this.intranetSlbProtocol,
            intranetTargetPort: this.intranetTargetPort,
            isMultilingualApp: this.isMultilingualApp,
            javaStartUpConfig: this.javaStartUpConfig,
            jdk: this.jdk,
            limitCpu: this.limitCpu,
            limitMem: this.limitMem,
            liveness: this.liveness,
            localVolume: this.localVolume,
            logicalRegionId: this.logicalRegionId,
            mountDescs: this.mountDescs,
            namespace: this.namespace,
            nasId: this.nasId,
            packageType: this.packageType,
            packageUrl: this.packageUrl,
            packageVersion: this.packageVersion,
            postStart: this.postStart,
            preStop: this.preStop,
            readiness: this.readiness,
            replicas: this.replicas,
            repoId: this.repoId,
            requestsCpu: this.requestsCpu,
            requestsMem: this.requestsMem,
            runtimeClassName: this.runtimeClassName,
            slsConfigs: this.slsConfigs,
            storageType: this.storageType,
            timeout: this.timeout,
            uriEncoding: this.uriEncoding,
            useBodyEncoding: this.useBodyEncoding,
            webContainer: this.webContainer,
            webContainerConfig: this.webContainerConfig,
        };
    }
    renderProperties(props) {
        return rosK8sApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosK8sApplication = RosK8sApplication;
/**
 * The resource type name for this resource class.
 */
RosK8sApplication.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sApplication";
/**
 * Determine whether the given properties match those of a `CommandArgsProperty`
 *
 * @param properties - the TypeScript properties of a `CommandArgsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_CommandArgsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('argument', ros.validateString)(properties.argument));
    return errors.wrap('supplied properties not correct for "CommandArgsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CommandArgs` resource
 *
 * @param properties - the TypeScript properties of a `CommandArgsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CommandArgs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationCommandArgsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_CommandArgsPropertyValidator(properties).assertSuccess();
    return {
        'Argument': ros.stringToRosTemplate(properties.argument),
    };
}
/**
 * Determine whether the given properties match those of a `ConcGCThreadsProperty`
 *
 * @param properties - the TypeScript properties of a `ConcGCThreadsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ConcGCThreadsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "ConcGCThreadsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ConcGCThreads` resource
 *
 * @param properties - the TypeScript properties of a `ConcGCThreadsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ConcGCThreads` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationConcGCThreadsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ConcGCThreadsPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `CustomParamsProperty`
 *
 * @param properties - the TypeScript properties of a `CustomParamsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_CustomParamsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "CustomParamsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CustomParams` resource
 *
 * @param properties - the TypeScript properties of a `CustomParamsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CustomParams` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationCustomParamsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_CustomParamsPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.stringToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `EnvsProperty`
 *
 * @param properties - the TypeScript properties of a `EnvsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_EnvsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "EnvsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Envs` resource
 *
 * @param properties - the TypeScript properties of a `EnvsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Envs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationEnvsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_EnvsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Name': ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `ExecProperty`
 *
 * @param properties - the TypeScript properties of a `ExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ExecPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "ExecProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Exec` resource
 *
 * @param properties - the TypeScript properties of a `ExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Exec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationExecPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ExecPropertyValidator(properties).assertSuccess();
    return {
        'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}
/**
 * Determine whether the given properties match those of a `G1HeapRegionSizeProperty`
 *
 * @param properties - the TypeScript properties of a `G1HeapRegionSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_G1HeapRegionSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "G1HeapRegionSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.G1HeapRegionSize` resource
 *
 * @param properties - the TypeScript properties of a `G1HeapRegionSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.G1HeapRegionSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationG1HeapRegionSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_G1HeapRegionSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `GCLogFilePathProperty`
 *
 * @param properties - the TypeScript properties of a `GCLogFilePathProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_GCLogFilePathPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "GCLogFilePathProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFilePath` resource
 *
 * @param properties - the TypeScript properties of a `GCLogFilePathProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFilePath` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationGCLogFilePathPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_GCLogFilePathPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.stringToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `GCLogFileSizeProperty`
 *
 * @param properties - the TypeScript properties of a `GCLogFileSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_GCLogFileSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "GCLogFileSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFileSize` resource
 *
 * @param properties - the TypeScript properties of a `GCLogFileSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFileSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationGCLogFileSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_GCLogFileSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `HeapDumpOnOutOfMemoryErrorProperty`
 *
 * @param properties - the TypeScript properties of a `HeapDumpOnOutOfMemoryErrorProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HeapDumpOnOutOfMemoryErrorPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "HeapDumpOnOutOfMemoryErrorProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpOnOutOfMemoryError` resource
 *
 * @param properties - the TypeScript properties of a `HeapDumpOnOutOfMemoryErrorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpOnOutOfMemoryError` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHeapDumpOnOutOfMemoryErrorPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_HeapDumpOnOutOfMemoryErrorPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.booleanToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `HeapDumpPathProperty`
 *
 * @param properties - the TypeScript properties of a `HeapDumpPathProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HeapDumpPathPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "HeapDumpPathProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpPath` resource
 *
 * @param properties - the TypeScript properties of a `HeapDumpPathProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpPath` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHeapDumpPathPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_HeapDumpPathPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.stringToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `HttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `HttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HttpGetPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_HttpHeadersPropertyValidator))(properties.httpHeaders));
    if (properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
            data: properties.scheme,
            allowedValues: ["HTTP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "HttpGetProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGet` resource
 *
 * @param properties - the TypeScript properties of a `HttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHttpGetPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_HttpGetPropertyValidator(properties).assertSuccess();
    return {
        'Path': ros.stringToRosTemplate(properties.path),
        'HttpHeaders': ros.listMapper(rosK8sApplicationHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        'Scheme': ros.stringToRosTemplate(properties.scheme),
        'Port': ros.stringToRosTemplate(properties.port),
        'Host': ros.stringToRosTemplate(properties.host),
    };
}
/**
 * Determine whether the given properties match those of a `HttpGetHttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `HttpGetHttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HttpGetHttpHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "HttpGetHttpHeadersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGetHttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `HttpGetHttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGetHttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHttpGetHttpHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_HttpGetHttpHeadersPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Name': ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `HttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `HttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HttpHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "HttpHeadersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `HttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHttpHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_HttpHeadersPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Name': ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `InitialHeapSizeProperty`
 *
 * @param properties - the TypeScript properties of a `InitialHeapSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_InitialHeapSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "InitialHeapSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.InitialHeapSize` resource
 *
 * @param properties - the TypeScript properties of a `InitialHeapSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.InitialHeapSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationInitialHeapSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_InitialHeapSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `JavaStartUpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `JavaStartUpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_JavaStartUpConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('maxHeapSize', RosK8sApplication_MaxHeapSizePropertyValidator)(properties.maxHeapSize));
    errors.collect(ros.propertyValidator('useGcLogFileRotation', RosK8sApplication_UseGCLogFileRotationPropertyValidator)(properties.useGcLogFileRotation));
    errors.collect(ros.propertyValidator('customParams', RosK8sApplication_CustomParamsPropertyValidator)(properties.customParams));
    errors.collect(ros.propertyValidator('parallelGcThreads', RosK8sApplication_ParallelGCThreadsPropertyValidator)(properties.parallelGcThreads));
    errors.collect(ros.propertyValidator('initialHeapSize', RosK8sApplication_InitialHeapSizePropertyValidator)(properties.initialHeapSize));
    errors.collect(ros.propertyValidator('nacosUseEndpointParsingRule', RosK8sApplication_NacosUseEndpointParsingRulePropertyValidator)(properties.nacosUseEndpointParsingRule));
    errors.collect(ros.propertyValidator('threadStackSize', RosK8sApplication_ThreadStackSizePropertyValidator)(properties.threadStackSize));
    errors.collect(ros.propertyValidator('survivorRatio', RosK8sApplication_SurvivorRatioPropertyValidator)(properties.survivorRatio));
    errors.collect(ros.propertyValidator('permSize', RosK8sApplication_PermSizePropertyValidator)(properties.permSize));
    errors.collect(ros.propertyValidator('newSize', RosK8sApplication_NewSizePropertyValidator)(properties.newSize));
    errors.collect(ros.propertyValidator('concGcThreads', RosK8sApplication_ConcGCThreadsPropertyValidator)(properties.concGcThreads));
    errors.collect(ros.propertyValidator('newRatio', RosK8sApplication_NewRatioPropertyValidator)(properties.newRatio));
    errors.collect(ros.propertyValidator('gcLogFileSize', RosK8sApplication_GCLogFileSizePropertyValidator)(properties.gcLogFileSize));
    errors.collect(ros.propertyValidator('maxNewSize', RosK8sApplication_MaxNewSizePropertyValidator)(properties.maxNewSize));
    errors.collect(ros.propertyValidator('g1HeapRegionSize', RosK8sApplication_G1HeapRegionSizePropertyValidator)(properties.g1HeapRegionSize));
    errors.collect(ros.propertyValidator('printGc', RosK8sApplication_PrintGCPropertyValidator)(properties.printGc));
    errors.collect(ros.propertyValidator('maxDirectMemorySize', RosK8sApplication_MaxDirectMemorySizePropertyValidator)(properties.maxDirectMemorySize));
    errors.collect(ros.propertyValidator('maxPermSize', RosK8sApplication_MaxPermSizePropertyValidator)(properties.maxPermSize));
    errors.collect(ros.propertyValidator('heapDumpOnOutOfMemoryError', RosK8sApplication_HeapDumpOnOutOfMemoryErrorPropertyValidator)(properties.heapDumpOnOutOfMemoryError));
    errors.collect(ros.propertyValidator('nacosUseCloudNamespaceParsing', RosK8sApplication_NacosUseCloudNamespaceParsingPropertyValidator)(properties.nacosUseCloudNamespaceParsing));
    errors.collect(ros.propertyValidator('heapDumpPath', RosK8sApplication_HeapDumpPathPropertyValidator)(properties.heapDumpPath));
    errors.collect(ros.propertyValidator('gcLogFilePath', RosK8sApplication_GCLogFilePathPropertyValidator)(properties.gcLogFilePath));
    errors.collect(ros.propertyValidator('printGcDateStamps', RosK8sApplication_PrintGCDateStampsPropertyValidator)(properties.printGcDateStamps));
    errors.collect(ros.propertyValidator('youngGarbageCollector', RosK8sApplication_YoungGarbageCollectorPropertyValidator)(properties.youngGarbageCollector));
    errors.collect(ros.propertyValidator('oldGarbageCollector', RosK8sApplication_OldGarbageCollectorPropertyValidator)(properties.oldGarbageCollector));
    return errors.wrap('supplied properties not correct for "JavaStartUpConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.JavaStartUpConfig` resource
 *
 * @param properties - the TypeScript properties of a `JavaStartUpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.JavaStartUpConfig` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationJavaStartUpConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_JavaStartUpConfigPropertyValidator(properties).assertSuccess();
    return {
        'MaxHeapSize': rosK8sApplicationMaxHeapSizePropertyToRosTemplate(properties.maxHeapSize),
        'UseGCLogFileRotation': rosK8sApplicationUseGCLogFileRotationPropertyToRosTemplate(properties.useGcLogFileRotation),
        'CustomParams': rosK8sApplicationCustomParamsPropertyToRosTemplate(properties.customParams),
        'ParallelGCThreads': rosK8sApplicationParallelGCThreadsPropertyToRosTemplate(properties.parallelGcThreads),
        'InitialHeapSize': rosK8sApplicationInitialHeapSizePropertyToRosTemplate(properties.initialHeapSize),
        'NacosUseEndpointParsingRule': rosK8sApplicationNacosUseEndpointParsingRulePropertyToRosTemplate(properties.nacosUseEndpointParsingRule),
        'ThreadStackSize': rosK8sApplicationThreadStackSizePropertyToRosTemplate(properties.threadStackSize),
        'SurvivorRatio': rosK8sApplicationSurvivorRatioPropertyToRosTemplate(properties.survivorRatio),
        'PermSize': rosK8sApplicationPermSizePropertyToRosTemplate(properties.permSize),
        'NewSize': rosK8sApplicationNewSizePropertyToRosTemplate(properties.newSize),
        'ConcGCThreads': rosK8sApplicationConcGCThreadsPropertyToRosTemplate(properties.concGcThreads),
        'NewRatio': rosK8sApplicationNewRatioPropertyToRosTemplate(properties.newRatio),
        'GCLogFileSize': rosK8sApplicationGCLogFileSizePropertyToRosTemplate(properties.gcLogFileSize),
        'MaxNewSize': rosK8sApplicationMaxNewSizePropertyToRosTemplate(properties.maxNewSize),
        'G1HeapRegionSize': rosK8sApplicationG1HeapRegionSizePropertyToRosTemplate(properties.g1HeapRegionSize),
        'PrintGC': rosK8sApplicationPrintGCPropertyToRosTemplate(properties.printGc),
        'MaxDirectMemorySize': rosK8sApplicationMaxDirectMemorySizePropertyToRosTemplate(properties.maxDirectMemorySize),
        'MaxPermSize': rosK8sApplicationMaxPermSizePropertyToRosTemplate(properties.maxPermSize),
        'HeapDumpOnOutOfMemoryError': rosK8sApplicationHeapDumpOnOutOfMemoryErrorPropertyToRosTemplate(properties.heapDumpOnOutOfMemoryError),
        'NacosUseCloudNamespaceParsing': rosK8sApplicationNacosUseCloudNamespaceParsingPropertyToRosTemplate(properties.nacosUseCloudNamespaceParsing),
        'HeapDumpPath': rosK8sApplicationHeapDumpPathPropertyToRosTemplate(properties.heapDumpPath),
        'GCLogFilePath': rosK8sApplicationGCLogFilePathPropertyToRosTemplate(properties.gcLogFilePath),
        'PrintGCDateStamps': rosK8sApplicationPrintGCDateStampsPropertyToRosTemplate(properties.printGcDateStamps),
        'YoungGarbageCollector': rosK8sApplicationYoungGarbageCollectorPropertyToRosTemplate(properties.youngGarbageCollector),
        'OldGarbageCollector': rosK8sApplicationOldGarbageCollectorPropertyToRosTemplate(properties.oldGarbageCollector),
    };
}
/**
 * Determine whether the given properties match those of a `LivenessProperty`
 *
 * @param properties - the TypeScript properties of a `LivenessProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_LivenessPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.timeoutSeconds && (typeof properties.timeoutSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateRange)({
            data: properties.timeoutSeconds,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_ExecPropertyValidator)(properties.exec));
    if (properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_HttpGetPropertyValidator)(properties.httpGet));
    if (properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    errors.collect(ros.propertyValidator('tcpSocket', RosK8sApplication_TcpSocketPropertyValidator)(properties.tcpSocket));
    if (properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if (properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('successThreshold', ros.validateRange)({
            data: properties.successThreshold,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    return errors.wrap('supplied properties not correct for "LivenessProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Liveness` resource
 *
 * @param properties - the TypeScript properties of a `LivenessProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Liveness` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationLivenessPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_LivenessPropertyValidator(properties).assertSuccess();
    return {
        'TimeoutSeconds': ros.numberToRosTemplate(properties.timeoutSeconds),
        'Exec': rosK8sApplicationExecPropertyToRosTemplate(properties.exec),
        'InitialDelaySeconds': ros.numberToRosTemplate(properties.initialDelaySeconds),
        'HttpGet': rosK8sApplicationHttpGetPropertyToRosTemplate(properties.httpGet),
        'PeriodSeconds': ros.numberToRosTemplate(properties.periodSeconds),
        'TcpSocket': rosK8sApplicationTcpSocketPropertyToRosTemplate(properties.tcpSocket),
        'FailureThreshold': ros.numberToRosTemplate(properties.failureThreshold),
        'SuccessThreshold': ros.numberToRosTemplate(properties.successThreshold),
    };
}
/**
 * Determine whether the given properties match those of a `LocalVolumeProperty`
 *
 * @param properties - the TypeScript properties of a `LocalVolumeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_LocalVolumePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('nodePath', ros.validateString)(properties.nodePath));
    return errors.wrap('supplied properties not correct for "LocalVolumeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.LocalVolume` resource
 *
 * @param properties - the TypeScript properties of a `LocalVolumeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.LocalVolume` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationLocalVolumePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_LocalVolumePropertyValidator(properties).assertSuccess();
    return {
        'MountPath': ros.stringToRosTemplate(properties.mountPath),
        'Type': ros.stringToRosTemplate(properties.type),
        'NodePath': ros.stringToRosTemplate(properties.nodePath),
    };
}
/**
 * Determine whether the given properties match those of a `MaxDirectMemorySizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxDirectMemorySizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxDirectMemorySizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxDirectMemorySizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxDirectMemorySize` resource
 *
 * @param properties - the TypeScript properties of a `MaxDirectMemorySizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxDirectMemorySize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxDirectMemorySizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_MaxDirectMemorySizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `MaxHeapSizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxHeapSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxHeapSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxHeapSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxHeapSize` resource
 *
 * @param properties - the TypeScript properties of a `MaxHeapSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxHeapSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxHeapSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_MaxHeapSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `MaxNewSizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxNewSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxNewSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxNewSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxNewSize` resource
 *
 * @param properties - the TypeScript properties of a `MaxNewSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxNewSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxNewSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_MaxNewSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `MaxPermSizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxPermSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxPermSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxPermSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxPermSize` resource
 *
 * @param properties - the TypeScript properties of a `MaxPermSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxPermSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxPermSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_MaxPermSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `MountDescsProperty`
 *
 * @param properties - the TypeScript properties of a `MountDescsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MountDescsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('nasPath', ros.validateString)(properties.nasPath));
    return errors.wrap('supplied properties not correct for "MountDescsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MountDescs` resource
 *
 * @param properties - the TypeScript properties of a `MountDescsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MountDescs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMountDescsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_MountDescsPropertyValidator(properties).assertSuccess();
    return {
        'MountPath': ros.stringToRosTemplate(properties.mountPath),
        'NasPath': ros.stringToRosTemplate(properties.nasPath),
    };
}
/**
 * Determine whether the given properties match those of a `NacosUseCloudNamespaceParsingProperty`
 *
 * @param properties - the TypeScript properties of a `NacosUseCloudNamespaceParsingProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NacosUseCloudNamespaceParsingPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NacosUseCloudNamespaceParsingProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseCloudNamespaceParsing` resource
 *
 * @param properties - the TypeScript properties of a `NacosUseCloudNamespaceParsingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseCloudNamespaceParsing` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNacosUseCloudNamespaceParsingPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_NacosUseCloudNamespaceParsingPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.booleanToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `NacosUseEndpointParsingRuleProperty`
 *
 * @param properties - the TypeScript properties of a `NacosUseEndpointParsingRuleProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NacosUseEndpointParsingRulePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NacosUseEndpointParsingRuleProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseEndpointParsingRule` resource
 *
 * @param properties - the TypeScript properties of a `NacosUseEndpointParsingRuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseEndpointParsingRule` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNacosUseEndpointParsingRulePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_NacosUseEndpointParsingRulePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.booleanToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `NewRatioProperty`
 *
 * @param properties - the TypeScript properties of a `NewRatioProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NewRatioPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NewRatioProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewRatio` resource
 *
 * @param properties - the TypeScript properties of a `NewRatioProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewRatio` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNewRatioPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_NewRatioPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `NewSizeProperty`
 *
 * @param properties - the TypeScript properties of a `NewSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NewSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NewSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewSize` resource
 *
 * @param properties - the TypeScript properties of a `NewSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNewSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_NewSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `OldGarbageCollectorProperty`
 *
 * @param properties - the TypeScript properties of a `OldGarbageCollectorProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_OldGarbageCollectorPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "OldGarbageCollectorProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.OldGarbageCollector` resource
 *
 * @param properties - the TypeScript properties of a `OldGarbageCollectorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.OldGarbageCollector` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationOldGarbageCollectorPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_OldGarbageCollectorPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.stringToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `ParallelGCThreadsProperty`
 *
 * @param properties - the TypeScript properties of a `ParallelGCThreadsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ParallelGCThreadsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "ParallelGCThreadsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ParallelGCThreads` resource
 *
 * @param properties - the TypeScript properties of a `ParallelGCThreadsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ParallelGCThreads` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationParallelGCThreadsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ParallelGCThreadsPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `PermSizeProperty`
 *
 * @param properties - the TypeScript properties of a `PermSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PermSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "PermSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PermSize` resource
 *
 * @param properties - the TypeScript properties of a `PermSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PermSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPermSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PermSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `PostStartProperty`
 *
 * @param properties - the TypeScript properties of a `PostStartProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PostStartPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_PostStartExecPropertyValidator)(properties.exec));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_PostStartHttpGetPropertyValidator)(properties.httpGet));
    return errors.wrap('supplied properties not correct for "PostStartProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStart` resource
 *
 * @param properties - the TypeScript properties of a `PostStartProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStart` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPostStartPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PostStartPropertyValidator(properties).assertSuccess();
    return {
        'Exec': rosK8sApplicationPostStartExecPropertyToRosTemplate(properties.exec),
        'HttpGet': rosK8sApplicationPostStartHttpGetPropertyToRosTemplate(properties.httpGet),
    };
}
/**
 * Determine whether the given properties match those of a `PostStartExecProperty`
 *
 * @param properties - the TypeScript properties of a `PostStartExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PostStartExecPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "PostStartExecProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartExec` resource
 *
 * @param properties - the TypeScript properties of a `PostStartExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartExec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPostStartExecPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PostStartExecPropertyValidator(properties).assertSuccess();
    return {
        'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}
/**
 * Determine whether the given properties match those of a `PostStartHttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `PostStartHttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PostStartHttpGetPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_HttpGetHttpHeadersPropertyValidator))(properties.httpHeaders));
    if (properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
            data: properties.scheme,
            allowedValues: ["HTTP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "PostStartHttpGetProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartHttpGet` resource
 *
 * @param properties - the TypeScript properties of a `PostStartHttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartHttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPostStartHttpGetPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PostStartHttpGetPropertyValidator(properties).assertSuccess();
    return {
        'Path': ros.stringToRosTemplate(properties.path),
        'HttpHeaders': ros.listMapper(rosK8sApplicationHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        'Scheme': ros.stringToRosTemplate(properties.scheme),
        'Port': ros.stringToRosTemplate(properties.port),
        'Host': ros.stringToRosTemplate(properties.host),
    };
}
/**
 * Determine whether the given properties match those of a `PreStopProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_PreStopExecPropertyValidator)(properties.exec));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_PreStopHttpGetPropertyValidator)(properties.httpGet));
    return errors.wrap('supplied properties not correct for "PreStopProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStop` resource
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStop` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PreStopPropertyValidator(properties).assertSuccess();
    return {
        'Exec': rosK8sApplicationPreStopExecPropertyToRosTemplate(properties.exec),
        'HttpGet': rosK8sApplicationPreStopHttpGetPropertyToRosTemplate(properties.httpGet),
    };
}
/**
 * Determine whether the given properties match those of a `PreStopExecProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopExecPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "PreStopExecProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopExec` resource
 *
 * @param properties - the TypeScript properties of a `PreStopExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopExec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopExecPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PreStopExecPropertyValidator(properties).assertSuccess();
    return {
        'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}
/**
 * Determine whether the given properties match those of a `PreStopHttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopHttpGetPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_PreStopHttpGetHttpHeadersPropertyValidator))(properties.httpHeaders));
    if (properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
            data: properties.scheme,
            allowedValues: ["HTTP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "PreStopHttpGetProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGet` resource
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopHttpGetPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PreStopHttpGetPropertyValidator(properties).assertSuccess();
    return {
        'Path': ros.stringToRosTemplate(properties.path),
        'HttpHeaders': ros.listMapper(rosK8sApplicationPreStopHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        'Scheme': ros.stringToRosTemplate(properties.scheme),
        'Port': ros.stringToRosTemplate(properties.port),
        'Host': ros.stringToRosTemplate(properties.host),
    };
}
/**
 * Determine whether the given properties match those of a `PreStopHttpGetHttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetHttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopHttpGetHttpHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "PreStopHttpGetHttpHeadersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGetHttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetHttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGetHttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopHttpGetHttpHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PreStopHttpGetHttpHeadersPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Name': ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `PrintGCProperty`
 *
 * @param properties - the TypeScript properties of a `PrintGCProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PrintGCPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "PrintGCProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGC` resource
 *
 * @param properties - the TypeScript properties of a `PrintGCProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGC` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPrintGCPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PrintGCPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.booleanToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `PrintGCDateStampsProperty`
 *
 * @param properties - the TypeScript properties of a `PrintGCDateStampsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PrintGCDateStampsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "PrintGCDateStampsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGCDateStamps` resource
 *
 * @param properties - the TypeScript properties of a `PrintGCDateStampsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGCDateStamps` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPrintGCDateStampsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_PrintGCDateStampsPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.booleanToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `ReadinessProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.timeoutSeconds && (typeof properties.timeoutSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateRange)({
            data: properties.timeoutSeconds,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_ReadinessExecPropertyValidator)(properties.exec));
    if (properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_ReadinessHttpGetPropertyValidator)(properties.httpGet));
    if (properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    errors.collect(ros.propertyValidator('tcpSocket', RosK8sApplication_ReadinessTcpSocketPropertyValidator)(properties.tcpSocket));
    if (properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if (properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('successThreshold', ros.validateRange)({
            data: properties.successThreshold,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    return errors.wrap('supplied properties not correct for "ReadinessProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Readiness` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Readiness` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ReadinessPropertyValidator(properties).assertSuccess();
    return {
        'TimeoutSeconds': ros.numberToRosTemplate(properties.timeoutSeconds),
        'Exec': rosK8sApplicationReadinessExecPropertyToRosTemplate(properties.exec),
        'InitialDelaySeconds': ros.numberToRosTemplate(properties.initialDelaySeconds),
        'HttpGet': rosK8sApplicationReadinessHttpGetPropertyToRosTemplate(properties.httpGet),
        'PeriodSeconds': ros.numberToRosTemplate(properties.periodSeconds),
        'TcpSocket': rosK8sApplicationReadinessTcpSocketPropertyToRosTemplate(properties.tcpSocket),
        'FailureThreshold': ros.numberToRosTemplate(properties.failureThreshold),
        'SuccessThreshold': ros.numberToRosTemplate(properties.successThreshold),
    };
}
/**
 * Determine whether the given properties match those of a `ReadinessExecProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessExecPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "ReadinessExecProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessExec` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessExec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessExecPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ReadinessExecPropertyValidator(properties).assertSuccess();
    return {
        'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}
/**
 * Determine whether the given properties match those of a `ReadinessHttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessHttpGetPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_ReadinessHttpGetHttpHeadersPropertyValidator))(properties.httpHeaders));
    if (properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
            data: properties.scheme,
            allowedValues: ["HTTP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "ReadinessHttpGetProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGet` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessHttpGetPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ReadinessHttpGetPropertyValidator(properties).assertSuccess();
    return {
        'Path': ros.stringToRosTemplate(properties.path),
        'HttpHeaders': ros.listMapper(rosK8sApplicationReadinessHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        'Scheme': ros.stringToRosTemplate(properties.scheme),
        'Port': ros.stringToRosTemplate(properties.port),
        'Host': ros.stringToRosTemplate(properties.host),
    };
}
/**
 * Determine whether the given properties match those of a `ReadinessHttpGetHttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetHttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessHttpGetHttpHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ReadinessHttpGetHttpHeadersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGetHttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetHttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGetHttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessHttpGetHttpHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ReadinessHttpGetHttpHeadersPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Name': ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `ReadinessTcpSocketProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessTcpSocketProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessTcpSocketPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "ReadinessTcpSocketProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessTcpSocket` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessTcpSocketProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessTcpSocket` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessTcpSocketPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ReadinessTcpSocketPropertyValidator(properties).assertSuccess();
    return {
        'Port': ros.stringToRosTemplate(properties.port),
        'Host': ros.stringToRosTemplate(properties.host),
    };
}
/**
 * Determine whether the given properties match those of a `SlsConfigsProperty`
 *
 * @param properties - the TypeScript properties of a `SlsConfigsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_SlsConfigsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["file", "stdout"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('logDir', ros.validateString)(properties.logDir));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    return errors.wrap('supplied properties not correct for "SlsConfigsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SlsConfigs` resource
 *
 * @param properties - the TypeScript properties of a `SlsConfigsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SlsConfigs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationSlsConfigsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_SlsConfigsPropertyValidator(properties).assertSuccess();
    return {
        'Type': ros.stringToRosTemplate(properties.type),
        'LogDir': ros.stringToRosTemplate(properties.logDir),
        'Logstore': ros.stringToRosTemplate(properties.logstore),
    };
}
/**
 * Determine whether the given properties match those of a `SurvivorRatioProperty`
 *
 * @param properties - the TypeScript properties of a `SurvivorRatioProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_SurvivorRatioPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "SurvivorRatioProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SurvivorRatio` resource
 *
 * @param properties - the TypeScript properties of a `SurvivorRatioProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SurvivorRatio` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationSurvivorRatioPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_SurvivorRatioPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `TcpSocketProperty`
 *
 * @param properties - the TypeScript properties of a `TcpSocketProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_TcpSocketPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "TcpSocketProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.TcpSocket` resource
 *
 * @param properties - the TypeScript properties of a `TcpSocketProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.TcpSocket` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationTcpSocketPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_TcpSocketPropertyValidator(properties).assertSuccess();
    return {
        'Port': ros.stringToRosTemplate(properties.port),
        'Host': ros.stringToRosTemplate(properties.host),
    };
}
/**
 * Determine whether the given properties match those of a `ThreadStackSizeProperty`
 *
 * @param properties - the TypeScript properties of a `ThreadStackSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ThreadStackSizePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "ThreadStackSizeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ThreadStackSize` resource
 *
 * @param properties - the TypeScript properties of a `ThreadStackSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ThreadStackSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationThreadStackSizePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_ThreadStackSizePropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.numberToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `UseGCLogFileRotationProperty`
 *
 * @param properties - the TypeScript properties of a `UseGCLogFileRotationProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_UseGCLogFileRotationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "UseGCLogFileRotationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.UseGCLogFileRotation` resource
 *
 * @param properties - the TypeScript properties of a `UseGCLogFileRotationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.UseGCLogFileRotation` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationUseGCLogFileRotationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_UseGCLogFileRotationPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.booleanToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `WebContainerConfigProperty`
 *
 * @param properties - the TypeScript properties of a `WebContainerConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_WebContainerConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.httpPort && (typeof properties.httpPort) !== 'object') {
        errors.collect(ros.propertyValidator('httpPort', ros.validateRange)({
            data: properties.httpPort,
            min: 1024,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('httpPort', ros.validateNumber)(properties.httpPort));
    errors.collect(ros.propertyValidator('uriEncoding', ros.validateString)(properties.uriEncoding));
    errors.collect(ros.propertyValidator('contextPath', ros.validateString)(properties.contextPath));
    errors.collect(ros.propertyValidator('contextInputType', ros.validateString)(properties.contextInputType));
    errors.collect(ros.propertyValidator('useBodyEncoding', ros.validateBoolean)(properties.useBodyEncoding));
    errors.collect(ros.propertyValidator('serverXml', ros.validateString)(properties.serverXml));
    errors.collect(ros.propertyValidator('maxThreads', ros.validateNumber)(properties.maxThreads));
    errors.collect(ros.propertyValidator('useAdvancedServerXml', ros.validateBoolean)(properties.useAdvancedServerXml));
    errors.collect(ros.propertyValidator('useDefaultConfig', ros.validateBoolean)(properties.useDefaultConfig));
    return errors.wrap('supplied properties not correct for "WebContainerConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.WebContainerConfig` resource
 *
 * @param properties - the TypeScript properties of a `WebContainerConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.WebContainerConfig` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationWebContainerConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_WebContainerConfigPropertyValidator(properties).assertSuccess();
    return {
        'HttpPort': ros.numberToRosTemplate(properties.httpPort),
        'UriEncoding': ros.stringToRosTemplate(properties.uriEncoding),
        'ContextPath': ros.stringToRosTemplate(properties.contextPath),
        'ContextInputType': ros.stringToRosTemplate(properties.contextInputType),
        'UseBodyEncoding': ros.booleanToRosTemplate(properties.useBodyEncoding),
        'ServerXml': ros.stringToRosTemplate(properties.serverXml),
        'MaxThreads': ros.numberToRosTemplate(properties.maxThreads),
        'UseAdvancedServerXml': ros.booleanToRosTemplate(properties.useAdvancedServerXml),
        'UseDefaultConfig': ros.booleanToRosTemplate(properties.useDefaultConfig),
    };
}
/**
 * Determine whether the given properties match those of a `YoungGarbageCollectorProperty`
 *
 * @param properties - the TypeScript properties of a `YoungGarbageCollectorProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_YoungGarbageCollectorPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "YoungGarbageCollectorProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.YoungGarbageCollector` resource
 *
 * @param properties - the TypeScript properties of a `YoungGarbageCollectorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.YoungGarbageCollector` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationYoungGarbageCollectorPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sApplication_YoungGarbageCollectorPropertyValidator(properties).assertSuccess();
    return {
        'Original': ros.stringToRosTemplate(properties.original),
        'Startup': ros.stringToRosTemplate(properties.startup),
    };
}
/**
 * Determine whether the given properties match those of a `RosK8sClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosK8sClusterProps`
 *
 * @returns the result of the validation.
 */
function RosK8sClusterPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableAsm', ros.validateString)(properties.enableAsm));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('csClusterId', ros.requiredValidator)(properties.csClusterId));
    errors.collect(ros.propertyValidator('csClusterId', ros.validateString)(properties.csClusterId));
    return errors.wrap('supplied properties not correct for "RosK8sClusterProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosK8sClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sCluster` resource.
 */
// @ts-ignore TS6133
function rosK8sClusterPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosK8sClusterPropsValidator(properties).assertSuccess();
    }
    return {
        'CsClusterId': ros.stringToRosTemplate(properties.csClusterId),
        'EnableAsm': ros.stringToRosTemplate(properties.enableAsm),
        'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::K8sCluster`, which is used to create a cluster of Container Service for Kubernetes (ACK).
 * @Note This class does not contain additional functions, so it is recommended to use the `K8sCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
 */
class RosK8sCluster extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosK8sCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterName = this.getAtt('ClusterName');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrCsClusterId = this.getAtt('CsClusterId');
        this.attrNetworkMode = this.getAtt('NetworkMode');
        this.attrNodeNum = this.getAtt('NodeNum');
        this.attrSubNetCidr = this.getAtt('SubNetCidr');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVswitchId = this.getAtt('VswitchId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.csClusterId = props.csClusterId;
        this.enableAsm = props.enableAsm;
        this.namespaceId = props.namespaceId;
    }
    get rosProperties() {
        return {
            csClusterId: this.csClusterId,
            enableAsm: this.enableAsm,
            namespaceId: this.namespaceId,
        };
    }
    renderProperties(props) {
        return rosK8sClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosK8sCluster = RosK8sCluster;
/**
 * The resource type name for this resource class.
 */
RosK8sCluster.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sCluster";
/**
 * Determine whether the given properties match those of a `RosK8sSlbBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosK8sSlbBindingProps`
 *
 * @returns the result of the validation.
 */
function RosK8sSlbBindingPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["internet", "intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    errors.collect(ros.propertyValidator('specification', ros.validateString)(properties.specification));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('servicePortInfos', ros.requiredValidator)(properties.servicePortInfos));
    if (properties.servicePortInfos && (Array.isArray(properties.servicePortInfos) || (typeof properties.servicePortInfos) === 'string')) {
        errors.collect(ros.propertyValidator('servicePortInfos', ros.validateLength)({
            data: properties.servicePortInfos.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('servicePortInfos', ros.listValidator(RosK8sSlbBinding_ServicePortInfosPropertyValidator))(properties.servicePortInfos));
    return errors.wrap('supplied properties not correct for "RosK8sSlbBindingProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosK8sSlbBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding` resource.
 */
// @ts-ignore TS6133
function rosK8sSlbBindingPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosK8sSlbBindingPropsValidator(properties).assertSuccess();
    }
    return {
        'AppId': ros.stringToRosTemplate(properties.appId),
        'ClusterId': ros.stringToRosTemplate(properties.clusterId),
        'ServicePortInfos': ros.listMapper(rosK8sSlbBindingServicePortInfosPropertyToRosTemplate)(properties.servicePortInfos),
        'Type': ros.stringToRosTemplate(properties.type),
        'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
        'Scheduler': ros.stringToRosTemplate(properties.scheduler),
        'Specification': ros.stringToRosTemplate(properties.specification),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::K8sSlbBinding`, which is used to bind a Server Load Balancer (SLB) instance to an application in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `K8sSlbBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
 */
class RosK8sSlbBinding extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosK8sSlbBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddress = this.getAtt('Address');
        this.attrAppId = this.getAtt('AppId');
        this.attrChangeOrderId = this.getAtt('ChangeOrderId');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrLoadBalancerName = this.getAtt('LoadBalancerName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.clusterId = props.clusterId;
        this.servicePortInfos = props.servicePortInfos;
        this.type = props.type;
        this.loadBalancerId = props.loadBalancerId;
        this.scheduler = props.scheduler;
        this.specification = props.specification;
    }
    get rosProperties() {
        return {
            appId: this.appId,
            clusterId: this.clusterId,
            servicePortInfos: this.servicePortInfos,
            type: this.type,
            loadBalancerId: this.loadBalancerId,
            scheduler: this.scheduler,
            specification: this.specification,
        };
    }
    renderProperties(props) {
        return rosK8sSlbBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosK8sSlbBinding = RosK8sSlbBinding;
/**
 * The resource type name for this resource class.
 */
RosK8sSlbBinding.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sSlbBinding";
/**
 * Determine whether the given properties match those of a `ServicePortInfosProperty`
 *
 * @param properties - the TypeScript properties of a `ServicePortInfosProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sSlbBinding_ServicePortInfosPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetPort', ros.requiredValidator)(properties.targetPort));
    if (properties.targetPort && (typeof properties.targetPort) !== 'object') {
        errors.collect(ros.propertyValidator('targetPort', ros.validateRange)({
            data: properties.targetPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('targetPort', ros.validateNumber)(properties.targetPort));
    errors.collect(ros.propertyValidator('loadBalancerProtocol', ros.requiredValidator)(properties.loadBalancerProtocol));
    if (properties.loadBalancerProtocol && (typeof properties.loadBalancerProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancerProtocol', ros.validateAllowedValues)({
            data: properties.loadBalancerProtocol,
            allowedValues: ["TCP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('loadBalancerProtocol', ros.validateString)(properties.loadBalancerProtocol));
    errors.collect(ros.propertyValidator('certId', ros.validateString)(properties.certId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if (properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    return errors.wrap('supplied properties not correct for "ServicePortInfosProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding.ServicePortInfos` resource
 *
 * @param properties - the TypeScript properties of a `ServicePortInfosProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding.ServicePortInfos` resource.
 */
// @ts-ignore TS6133
function rosK8sSlbBindingServicePortInfosPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosK8sSlbBinding_ServicePortInfosPropertyValidator(properties).assertSuccess();
    return {
        'TargetPort': ros.numberToRosTemplate(properties.targetPort),
        'LoadBalancerProtocol': ros.stringToRosTemplate(properties.loadBalancerProtocol),
        'CertId': ros.stringToRosTemplate(properties.certId),
        'Port': ros.numberToRosTemplate(properties.port),
    };
}
/**
 * Determine whether the given properties match those of a `RosUserDefineRegionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserDefineRegionProps`
 *
 * @returns the result of the validation.
 */
function RosUserDefineRegionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('regionName', ros.requiredValidator)(properties.regionName));
    errors.collect(ros.propertyValidator('regionName', ros.validateString)(properties.regionName));
    errors.collect(ros.propertyValidator('regionTag', ros.requiredValidator)(properties.regionTag));
    errors.collect(ros.propertyValidator('regionTag', ros.validateString)(properties.regionTag));
    errors.collect(ros.propertyValidator('debugEnable', ros.validateBoolean)(properties.debugEnable));
    return errors.wrap('supplied properties not correct for "RosUserDefineRegionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::UserDefineRegion` resource
 *
 * @param properties - the TypeScript properties of a `RosUserDefineRegionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::UserDefineRegion` resource.
 */
// @ts-ignore TS6133
function rosUserDefineRegionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosUserDefineRegionPropsValidator(properties).assertSuccess();
    }
    return {
        'RegionName': ros.stringToRosTemplate(properties.regionName),
        'RegionTag': ros.stringToRosTemplate(properties.regionTag),
        'DebugEnable': ros.booleanToRosTemplate(properties.debugEnable),
        'Description': ros.stringToRosTemplate(properties.description),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::UserDefineRegion`, which is used to create or edit a custom namespace.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserDefineRegion` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
 */
class RosUserDefineRegion extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosUserDefineRegion.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBelongRegion = this.getAtt('BelongRegion');
        this.attrDebugEnable = this.getAtt('DebugEnable');
        this.attrId = this.getAtt('Id');
        this.attrRegionName = this.getAtt('RegionName');
        this.attrUserId = this.getAtt('UserId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.regionName = props.regionName;
        this.regionTag = props.regionTag;
        this.debugEnable = props.debugEnable;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            regionName: this.regionName,
            regionTag: this.regionTag,
            debugEnable: this.debugEnable,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosUserDefineRegionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosUserDefineRegion = RosUserDefineRegion;
/**
 * The resource type name for this resource class.
 */
RosUserDefineRegion.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::UserDefineRegion";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRhcy5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGFzLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBb0U5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLDRCQUE0QixDQUFDLFVBQWU7SUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUcsSUFBRyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUM5SCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEUsSUFBSSxFQUFF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S0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLHFDQUFxQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMvRixDQUFDOztBQXJGTCxrREFzRkM7QUFyRkc7O0dBRUc7QUFDb0IsMENBQXNCLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0FwcGxpY2F0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVkYXMtYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBcHBsaWNhdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBsaWNhdGlvbk5hbWU6IFRoZSBhcHBsaWNhdGlvbiBuYW1lIChvbmx5IGFsbG93IHRoZSB1c2Ugb2YgbnVtYmVycywgbGV0dGVycywgLSwgXywgdXAgdG8gMzYgY2hhcmFjdGVycylcbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IENsdXN0ZXIgSUQgb2YgRUNTIGFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVpbGRQYWNrSWQ6IEVEQVMtQ29udGFpbmVyIGNvbnN0cnVjdCBhIHBhY2tldCBudW1iZXIgKGF2YWlsYWJsZSB2ZXJzaW9uIGxpc3QgYWNxdWlyZWQgdGhyb3VnaCB0aGUgTGlzdEJ1aWxkUGFjayBBUEkgKENvbmZpZ0lkIG9mIHJlc3BvbnNlKSBvciBcImNvbnRhaW5lciB2ZXJzaW9uXCIgdGFibGUgXCJCdWlsZGluZyBwYWNrZXQgbnVtYmVyXCIgY29sdW1uIGFjcXVpc2l0aW9uKS4gV2hlbiBjcmVhdGluZyBIU0YgYXBwbGljYXRpb24sIHRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc3BlY2lmaWVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVpbGRQYWNrSWQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tcG9uZW50SWRzOiBBcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgKGF2YWlsYWJsZSB0aHJvdWdoIHRoZSBxdWVyeSBpbnRlcmZhY2UgdG8gb2J0YWluIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBpbnRlcmZhY2UgTGlzdENvbXBvbmVudHMpLCB3aGVuIGNyZWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBydW50aW1lIGVudmlyb25tZW50IHVzaW5nIEFwYWNoZSBUb21jYXQgKHdhciBwYWNrZXQgZm9ybWF0IER1YmJvXG4gICAgICogQXBwbGljYXRpb24gcmVxdWlyZWQpIG9yIHN0YW5kYXJkIEphdmEgYXBwbGljYXRpb24gKGphciBwYWNrYWdlIGZvcm1hdCBTcHJpbmcgQm9vdCBcXC8gU3ByaW5nIENsb3VkIGFwcGxpY2F0aW9ucyByZXF1aXJlKSB5b3UgbmVlZCB0byBzcGVjaWZ5IHdoZW4gdGhlIG9wZXJhdGluZyBlbnZpcm9ubWVudC4gQ29tbW9ubHkgdXNlZCBhcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgYW5kIG1lYW5pbmc6XG4gICAgICogNCByZXByZXNlbnRzIEFwYWNoZSBUb21jYXQgNy4wLjkxLDcgcmVwcmVzZW50ZWQgQXBhY2hlIFRvbWNhdCA4LjUuNDIsNSByZXByZXNlbnRlZCBPcGVuSkRLIDEuOC54LCA2IHJlcHJlc2VudHMgT3BlbkpES1xuICAgICAqIDEuNy54XG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tcG9uZW50SWRzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlcGxveW1lbnQ6IERlcGxveSBhcHBsaWNhdGlvbiBpbmZvcm1hdGlvbiB0byBFQ1MgY2x1c3RlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3ltZW50PzogUm9zQXBwbGljYXRpb24uRGVwbG95bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGl2ZSBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVjdUluZm86IE1hY2hpbmUgY2FwYWNpdHkgaXMgbmVlZGVkIGVjdV9pZCAoRUNTIEV4YW1wbGVzIGludHJvZHVjaW5nIGFub3RoZXIgdW5pcXVlIGlkZW50aXR5IEVEQVMgRURBUyksIHRoZSBwbHVyYWxpdHkgb2YgXCIsXCIgc2VwYXJhdGVkIChieSBxdWVyeWluZyBMaXN0U2NhbGVPdXRFY3Ugd2hlcmVpbiBlY3VfaWRcbiAgICAgKiBJbnRlcmZhY2UgdG8gb2J0YWluKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlY3VJbmZvPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrVXJsOiBBcHBsaWNhdGlvbiBIZWFsdGggQ2hlY2sgVVJMXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naWNhbFJlZ2lvbklkOiBOYW1lc3BhY2UgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpY2FsUmVnaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVR5cGU6IEFwcGxpY2F0aW9uIHBhY2tldCBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlczogd2FyIG9yIGphclxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBvbmVudElkcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21wb25lbnRJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ2ljYWxSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcGxpY2F0aW9uTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcHBsaWNhdGlvbk5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcGxpY2F0aW9uTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hcHBsaWNhdGlvbk5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAzNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwbGljYXRpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VjdUluZm8nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWN1SW5mbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhbHRoQ2hlY2tVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wYWNrYWdlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFja2FnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYWNrYWdlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJ3YXJcIixcImphclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhY2thZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXBsb3ltZW50JywgUm9zQXBwbGljYXRpb25fRGVwbG95bWVudFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlcGxveW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1aWxkUGFja0lkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJ1aWxkUGFja0lkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FwcGxpY2F0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkFwcGxpY2F0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBcHBsaWNhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcHBsaWNhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQXBwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQXBwbGljYXRpb25OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBsaWNhdGlvbk5hbWUpLFxuICAgICAgJ0NsdXN0ZXJJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgICdCdWlsZFBhY2tJZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVpbGRQYWNrSWQpLFxuICAgICAgJ0NvbXBvbmVudElkcyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tcG9uZW50SWRzKSxcbiAgICAgICdEZXBsb3ltZW50Jzogcm9zQXBwbGljYXRpb25EZXBsb3ltZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVwbG95bWVudCksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdFY3VJbmZvJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lY3VJbmZvKSxcbiAgICAgICdIZWFsdGhDaGVja1VSTCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tVcmwpLFxuICAgICAgJ0xvZ2ljYWxSZWdpb25JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSxcbiAgICAgICdQYWNrYWdlVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFja2FnZVR5cGUpLFxuICAgICAgJ1Jlc291cmNlR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFwcGxpY2F0aW9uIGluIGFuIEVsYXN0aWMgQ29tcHV0ZSBTZXJ2aWNlIChFQ1MpIGNsdXN0ZXIgaW4gRW50ZXJwcmlzZSBEaXN0cmlidXRlZCBBcHBsaWNhdGlvbiBTZXJ2aWNlIChFREFTKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQXBwbGljYXRpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVkYXMtYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FwcGxpY2F0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBJZDogQXBwbGljYXRpb24gSWQsIGEgdW5pcXVlIGlkZW50aWZpZXIgRURBUyBhcHBsaWNhdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9ydDogQXBwbGljYXRpb24gcG9ydFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwbGljYXRpb25OYW1lOiBUaGUgYXBwbGljYXRpb24gbmFtZSAob25seSBhbGxvdyB0aGUgdXNlIG9mIG51bWJlcnMsIGxldHRlcnMsIC0sIF8sIHVwIHRvIDM2IGNoYXJhY3RlcnMpXG4gICAgICovXG4gICAgcHVibGljIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCBvZiBFQ1MgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVpbGRQYWNrSWQ6IEVEQVMtQ29udGFpbmVyIGNvbnN0cnVjdCBhIHBhY2tldCBudW1iZXIgKGF2YWlsYWJsZSB2ZXJzaW9uIGxpc3QgYWNxdWlyZWQgdGhyb3VnaCB0aGUgTGlzdEJ1aWxkUGFjayBBUEkgKENvbmZpZ0lkIG9mIHJlc3BvbnNlKSBvciBcImNvbnRhaW5lciB2ZXJzaW9uXCIgdGFibGUgXCJCdWlsZGluZyBwYWNrZXQgbnVtYmVyXCIgY29sdW1uIGFjcXVpc2l0aW9uKS4gV2hlbiBjcmVhdGluZyBIU0YgYXBwbGljYXRpb24sIHRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc3BlY2lmaWVkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkUGFja0lkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tcG9uZW50SWRzOiBBcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgKGF2YWlsYWJsZSB0aHJvdWdoIHRoZSBxdWVyeSBpbnRlcmZhY2UgdG8gb2J0YWluIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBpbnRlcmZhY2UgTGlzdENvbXBvbmVudHMpLCB3aGVuIGNyZWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBydW50aW1lIGVudmlyb25tZW50IHVzaW5nIEFwYWNoZSBUb21jYXQgKHdhciBwYWNrZXQgZm9ybWF0IER1YmJvXG4gICAgICogQXBwbGljYXRpb24gcmVxdWlyZWQpIG9yIHN0YW5kYXJkIEphdmEgYXBwbGljYXRpb24gKGphciBwYWNrYWdlIGZvcm1hdCBTcHJpbmcgQm9vdCBcXC8gU3ByaW5nIENsb3VkIGFwcGxpY2F0aW9ucyByZXF1aXJlKSB5b3UgbmVlZCB0byBzcGVjaWZ5IHdoZW4gdGhlIG9wZXJhdGluZyBlbnZpcm9ubWVudC4gQ29tbW9ubHkgdXNlZCBhcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgYW5kIG1lYW5pbmc6XG4gICAgICogNCByZXByZXNlbnRzIEFwYWNoZSBUb21jYXQgNy4wLjkxLDcgcmVwcmVzZW50ZWQgQXBhY2hlIFRvbWNhdCA4LjUuNDIsNSByZXByZXNlbnRlZCBPcGVuSkRLIDEuOC54LCA2IHJlcHJlc2VudHMgT3BlbkpES1xuICAgICAqIDEuNy54XG4gICAgICovXG4gICAgcHVibGljIGNvbXBvbmVudElkczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlcGxveW1lbnQ6IERlcGxveSBhcHBsaWNhdGlvbiBpbmZvcm1hdGlvbiB0byBFQ1MgY2x1c3RlcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVwbG95bWVudDogUm9zQXBwbGljYXRpb24uRGVwbG95bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGl2ZSBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVjdUluZm86IE1hY2hpbmUgY2FwYWNpdHkgaXMgbmVlZGVkIGVjdV9pZCAoRUNTIEV4YW1wbGVzIGludHJvZHVjaW5nIGFub3RoZXIgdW5pcXVlIGlkZW50aXR5IEVEQVMgRURBUyksIHRoZSBwbHVyYWxpdHkgb2YgXCIsXCIgc2VwYXJhdGVkIChieSBxdWVyeWluZyBMaXN0U2NhbGVPdXRFY3Ugd2hlcmVpbiBlY3VfaWRcbiAgICAgKiBJbnRlcmZhY2UgdG8gb2J0YWluKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZWN1SW5mbzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrVXJsOiBBcHBsaWNhdGlvbiBIZWFsdGggQ2hlY2sgVVJMXG4gICAgICovXG4gICAgcHVibGljIGhlYWx0aENoZWNrVXJsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naWNhbFJlZ2lvbklkOiBOYW1lc3BhY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9naWNhbFJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVR5cGU6IEFwcGxpY2F0aW9uIHBhY2tldCBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlczogd2FyIG9yIGphclxuICAgICAqL1xuICAgIHB1YmxpYyBwYWNrYWdlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FwcGxpY2F0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBcHBsaWNhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXBwSWQgPSB0aGlzLmdldEF0dCgnQXBwSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUG9ydCA9IHRoaXMuZ2V0QXR0KCdQb3J0Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uTmFtZSA9IHByb3BzLmFwcGxpY2F0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5jbHVzdGVySWQgPSBwcm9wcy5jbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYnVpbGRQYWNrSWQgPSBwcm9wcy5idWlsZFBhY2tJZDtcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZHMgPSBwcm9wcy5jb21wb25lbnRJZHM7XG4gICAgICAgIHRoaXMuZGVwbG95bWVudCA9IHByb3BzLmRlcGxveW1lbnQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lY3VJbmZvID0gcHJvcHMuZWN1SW5mbztcbiAgICAgICAgdGhpcy5oZWFsdGhDaGVja1VybCA9IHByb3BzLmhlYWx0aENoZWNrVXJsO1xuICAgICAgICB0aGlzLmxvZ2ljYWxSZWdpb25JZCA9IHByb3BzLmxvZ2ljYWxSZWdpb25JZDtcbiAgICAgICAgdGhpcy5wYWNrYWdlVHlwZSA9IHByb3BzLnBhY2thZ2VUeXBlO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk5hbWU6IHRoaXMuYXBwbGljYXRpb25OYW1lLFxuICAgICAgICAgICAgY2x1c3RlcklkOiB0aGlzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGJ1aWxkUGFja0lkOiB0aGlzLmJ1aWxkUGFja0lkLFxuICAgICAgICAgICAgY29tcG9uZW50SWRzOiB0aGlzLmNvbXBvbmVudElkcyxcbiAgICAgICAgICAgIGRlcGxveW1lbnQ6IHRoaXMuZGVwbG95bWVudCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZWN1SW5mbzogdGhpcy5lY3VJbmZvLFxuICAgICAgICAgICAgaGVhbHRoQ2hlY2tVcmw6IHRoaXMuaGVhbHRoQ2hlY2tVcmwsXG4gICAgICAgICAgICBsb2dpY2FsUmVnaW9uSWQ6IHRoaXMubG9naWNhbFJlZ2lvbklkLFxuICAgICAgICAgICAgcGFja2FnZVR5cGU6IHRoaXMucGFja2FnZVR5cGUsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHRoaXMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBcHBsaWNhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBEZXBsb3ltZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlbGVhc2VUeXBlOiBCYXRjaCBtb2RlLlxuICAgICAqIDAgaXMgYXV0b21hdGljLlxuICAgICAqIDEgbWVhbnMgbWFudWFsIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZCBiZXR3ZWVuIGJhdGNoZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWxlYXNlVHlwZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZXNjOiBBcHBsaWNhdGlvbiBkZXBsb3ltZW50IGRlc2NyaXB0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZXNjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGdyYXk6IFdoZXRoZXIgQ2FuYXJ5IFJlbGVhc2UuXG4gICAgICogVHJ1ZTogQ2FuYXJ5IFJlbGVhc2UuXG4gICAgICogV2hlbiBpbXBsZW1lbnRpbmcgYSBncmF5IHJlbGVhc2UsIHRoZSBHcm91cElkIHRoYXQgd2lsbCBiZSB1c2VkIGZvciB0aGUgZ3JheSByZWxlYXNlIG11c3QgYmUgc3BlY2lmaWVkLlxuICAgICAqIEdyYXkgcmVsZWFzZSBpcyBhIGJhdGNoIHJlbGVhc2UuXG4gICAgICogQWZ0ZXIgdGhlIGdyYXkgcmVsZWFzZSBpcyBjb21wbGV0ZSwgbm9ybWFsIHJlbGVhc2UgY2FuIGJlIGRvbmUsIGFuZCB0aGUgQmF0Y2ggY29udHJvbHMgdGhlIGdyb3VwaW5nLlxuICAgICAqIEZhbHNlOiBOb24tQ2FuYXJ5IFJlbGVhc2UgKHNpbmdsZSBvciBncm91cGVkIHJlbGVhc2UpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ3JheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYXBwRW52OiBEZXBsb3ltZW50IGVudmlyb25tZW50IHZhcmlhYmxlcywgdGhlIGZvcm1hdCBtdXN0IGNvbmZvcm0gdG9cbiAgICAgKiB7XCJuYW1lXCI6XCJ4XCIsXCJ2YWx1ZVwiOlwieVwifSx7XCJuYW1lXCI6XCJ4MlwiLFwidmFsdWVcIjpcInkyXCJ9LCBcbiAgICAgKiBhbmQgdGhlIGtleSBpcyBmaXhlZCBhcyBuYW1lIGFuZCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFwcEVudj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBiYXRjaDogRWFjaCBncm91cCBvZiBiYXRjaGVzLldoZW4gdGhlIEdyb3VwSWQgb2YgdGhlIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBncm91cCBpcyBhIHNwZWNpZmljIGFwcGxpY2F0aW9uIGdyb3VwIElELFxuICAgICAqIGl0IG1lYW5zIHRvIGRlcGxveSB0byB0aGUgc3BlY2lmaWVkIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqICBBdCB0aGlzIHRpbWUsIHRoZSBtaW5pbXVtIG51bWJlciBvZiBiYXRjaGVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBpcyAxLFxuICAgICAqICBhbmQgdGhlIG1heGltdW0gbnVtYmVyIG9mIGJhdGNoZXMgaXMgdGhlIG1heGltdW0gbnVtYmVyIG9mXG4gICAgICogIEVDUyBpbnN0YW5jZXMgaW4gdGhlIG5vcm1hbCBzdGF0ZSB1bmRlciB0aGUgYXBwbGljYXRpb24gZ3JvdXAuIFxuICAgICAqIFRoZSBhY3R1YWwgbnVtYmVyIG9mIGJhdGNoZXMgcmVzdWx0cyByYW5nZTogWzEsIHNwZWNpZmllZCBudW1iZXIgb2YgYmF0Y2hlc10uXG4gICAgICogV2hlbiB0aGUgR3JvdXBJZCBvZiB0aGUgc3BlY2lmaWVkIGFwcGxpY2F0aW9uIGdyb3VwIGlzIGFsbCwgXG4gICAgICogaXQgbWVhbnMgdG8gZGVwbG95IHRvIGFsbCBhcHBsaWNhdGlvbiBncm91cHMuIFxuICAgICAqIEF0IHRoaXMgdGltZSwgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGJhdGNoZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGlzIDEsXG4gICAgICogYW5kIHRoZSBtYXhpbXVtIG51bWJlciBvZiBiYXRjaGVzIGlzIHRoZSBudW1iZXIgb2ZcbiAgICAgKiBFQ1MgaW5zdGFuY2VzIHVuZGVyIHRoZSBncm91cCB3aXRoIHRoZSBsYXJnZXN0IG51bWJlciBvZiBFQ1NzIGluIHRoZSBub3JtYWwgc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBiYXRjaD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB3YXJVcmw6IFRoZSBVUkwgYWRkcmVzcyBvZiB0aGUgYXBwbGljYXRpb24gZGVwbG95bWVudCBwYWNrYWdlIChXQVIgb3IgSkFSKS5cbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGFwcGxpY2F0aW9uIGRlcGxveW1lbnQgcGFja2FnZSBwYXRoIHN0b3JlZCBpbiBPU1MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB3YXJVcmw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0cmFmZmljQ29udHJvbFN0cmF0ZWd5OiBHcmF5IHJlbGVhc2UgcG9saWN5IGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRyYWZmaWNDb250cm9sU3RyYXRlZ3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYmF0Y2hXYWl0VGltZTogQmF0Y2ggd2FpdGluZyB0aW1lLCB1bml0OiBtaW51dGUuXG4gICAgICogVGhlIGRlZmF1bHQgaXMgMCwgd2hpY2ggbWVhbnMgbm8gd2FpdGluZy5cbiAgICAgKiBUaGUgbWF4aW11bSBpcyA1LlxuICAgICAqIFdoZW4gdGhlIGFjdHVhbCBudW1iZXIgb2YgYmF0Y2hlcyBpcyBsYXJnZSwgYSByZWFzb25hYmxlIHZhbHVlIG5lZWRzIHRvIGJlIHNldCxcbiAgICAgKiBvdGhlcndpc2UgdGhlIGNoYW5nZSBkdXJhdGlvbiBvZiB0aGlzIGFwcGxpY2F0aW9uIGRlcGxveW1lbnQgd2lsbCBiZSBsb25nZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBiYXRjaFdhaXRUaW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhY2thZ2VWZXJzaW9uOiBEZXBsb3llZCBhcHBsaWNhdGlvbiBkZXBsb3ltZW50IHBhY2thZ2UgdmVyc2lvbixcbiAgICAgKiB1cCB0byA2NCBjaGFyYWN0ZXJzLCBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGltZXN0YW1wXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYWNrYWdlVmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IERlcGxveW1lbnQgZ3JvdXAgSUQuXG4gICAgICogSWYgeW91IHdhbnQgdG8gZGVwbG95IHRvIGFsbCBncm91cHMsIHNldCB0aGUgcGFyYW1ldGVyIHRvIGFsbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEZXBsb3ltZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlcGxveW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBcHBsaWNhdGlvbl9EZXBsb3ltZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWxlYXNlVHlwZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5yZWxlYXNlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzYycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncmF5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5ncmF5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBFbnYnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwRW52KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYXRjaCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYXRjaCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2FyVXJsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLndhclVybCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2FyVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndhclVybCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY0NvbnRyb2xTdHJhdGVneScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmFmZmljQ29udHJvbFN0cmF0ZWd5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYXRjaFdhaXRUaW1lJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJhdGNoV2FpdFRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhY2thZ2VWZXJzaW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhY2thZ2VWZXJzaW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5wYWNrYWdlVmVyc2lvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnBhY2thZ2VWZXJzaW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucGFja2FnZVZlcnNpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVmVyc2lvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYWNrYWdlVmVyc2lvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYWNrYWdlVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkRlcGxveW1lbnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6QXBwbGljYXRpb24uRGVwbG95bWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGVwbG95bWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbi5EZXBsb3ltZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FwcGxpY2F0aW9uRGVwbG95bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBcHBsaWNhdGlvbl9EZXBsb3ltZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUmVsZWFzZVR5cGUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlbGVhc2VUeXBlKSxcbiAgICAgICdEZXNjJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjKSxcbiAgICAgICdHcmF5Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JheSksXG4gICAgICAnQXBwRW52Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBFbnYpLFxuICAgICAgJ0JhdGNoJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYXRjaCksXG4gICAgICAnV2FyVXJsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy53YXJVcmwpLFxuICAgICAgJ1RyYWZmaWNDb250cm9sU3RyYXRlZ3knOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYWZmaWNDb250cm9sU3RyYXRlZ3kpLFxuICAgICAgJ0JhdGNoV2FpdFRpbWUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJhdGNoV2FpdFRpbWUpLFxuICAgICAgJ1BhY2thZ2VWZXJzaW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYWNrYWdlVmVyc2lvbiksXG4gICAgICAnR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NDbHVzdGVyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVkYXMtY2x1c3RlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3Rlck5hbWU6IENsdXN0ZXIgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZS4gMS1Td2FybSBjbHVzdGVyLCAyLUVDUyBjbHVzdGVyLCAzLUt1YmVybmV0ZXMgQ2x1c3RlclxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJUeXBlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya01vZGU6IE5ldHdvcmsgVHlwZS4gMS0gY2xhc3NpYyBuZXR3b3JrLCAyLVZQQ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtNb2RlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naWNhbFJlZ2lvbklkOiBDdXN0b20gbmFtZXNwYWNlIFJlZ2lvbklkIChmb3JtYXQ6IFBoeXNpY2FsIFJlZ2lvbjogY3VzdG9tIG5hbWVzcGFjZSBpZGVudGlmaWVyKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ2ljYWxSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvdmVyc29sZEZhY3RvcjogRG9ja2VyIENQVSBjbHVzdGVyIG92ZXJzb2xkLiBTdXBwb3J0IDIgKDE6IDIgcmF0aW8pIFxcLyA0ICgxOiA0KSBcXC8gOCAoMTogOCByYXRpbylcbiAgICAgKi9cbiAgICByZWFkb25seSBvdmVyc29sZEZhY3Rvcj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVlBDIG5ldHdvcmsgSUQuIElmIG5ldHdvcmsgc2VsZWN0aW9uIFZQQywgdGhpcyBwYXJhbWV0ZXIgUmVxdWlyZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDbHVzdGVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDbHVzdGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dpY2FsUmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSk7XG4gICAgaWYocHJvcGVydGllcy5vdmVyc29sZEZhY3RvciAmJiAodHlwZW9mIHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ292ZXJzb2xkRmFjdG9yJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzIsNCw4XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ292ZXJzb2xkRmFjdG9yJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm92ZXJzb2xkRmFjdG9yKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3Rlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2x1c3Rlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrTW9kZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uZXR3b3JrTW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya01vZGUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubmV0d29ya01vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyVHlwZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jbHVzdGVyVHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDbHVzdGVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDbHVzdGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDbHVzdGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0NsdXN0ZXJOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVyTmFtZSksXG4gICAgICAnQ2x1c3RlclR5cGUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSxcbiAgICAgICdOZXR3b3JrTW9kZSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29ya01vZGUpLFxuICAgICAgJ0xvZ2ljYWxSZWdpb25JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSxcbiAgICAgICdPdmVyc29sZEZhY3Rvcic6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IpLFxuICAgICAgJ1Jlc291cmNlR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICAgICdWcGNJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGNsdXN0ZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYENsdXN0ZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVkYXMtY2x1c3RlclxuICovXG5leHBvcnQgY2xhc3MgUm9zQ2x1c3RlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RURBUzo6Q2x1c3RlclwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyTmFtZTogQ2x1c3RlciBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyVHlwZTogQ2x1c3RlciB0eXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJYWFzUHJvdmlkZXI6IFByb3ZpZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJYWFzUHJvdmlkZXI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJOYW1lOiBDbHVzdGVyIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3Rlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyVHlwZTogQ2x1c3RlciB0eXBlLiAxLVN3YXJtIGNsdXN0ZXIsIDItRUNTIGNsdXN0ZXIsIDMtS3ViZXJuZXRlcyBDbHVzdGVyXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJUeXBlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya01vZGU6IE5ldHdvcmsgVHlwZS4gMS0gY2xhc3NpYyBuZXR3b3JrLCAyLVZQQ1xuICAgICAqL1xuICAgIHB1YmxpYyBuZXR3b3JrTW9kZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogQ3VzdG9tIG5hbWVzcGFjZSBSZWdpb25JZCAoZm9ybWF0OiBQaHlzaWNhbCBSZWdpb246IGN1c3RvbSBuYW1lc3BhY2UgaWRlbnRpZmllcilcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9naWNhbFJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3ZlcnNvbGRGYWN0b3I6IERvY2tlciBDUFUgY2x1c3RlciBvdmVyc29sZC4gU3VwcG9ydCAyICgxOiAyIHJhdGlvKSBcXC8gNCAoMTogNCkgXFwvIDggKDE6IDggcmF0aW8pXG4gICAgICovXG4gICAgcHVibGljIG92ZXJzb2xkRmFjdG9yOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFZQQyBuZXR3b3JrIElELiBJZiBuZXR3b3JrIHNlbGVjdGlvbiBWUEMsIHRoaXMgcGFyYW1ldGVyIFJlcXVpcmVkXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2x1c3RlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2x1c3Rlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTmFtZSA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVyTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVHlwZSA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVyVHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJJYWFzUHJvdmlkZXIgPSB0aGlzLmdldEF0dCgnSWFhc1Byb3ZpZGVyJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNsdXN0ZXJOYW1lID0gcHJvcHMuY2x1c3Rlck5hbWU7XG4gICAgICAgIHRoaXMuY2x1c3RlclR5cGUgPSBwcm9wcy5jbHVzdGVyVHlwZTtcbiAgICAgICAgdGhpcy5uZXR3b3JrTW9kZSA9IHByb3BzLm5ldHdvcmtNb2RlO1xuICAgICAgICB0aGlzLmxvZ2ljYWxSZWdpb25JZCA9IHByb3BzLmxvZ2ljYWxSZWdpb25JZDtcbiAgICAgICAgdGhpcy5vdmVyc29sZEZhY3RvciA9IHByb3BzLm92ZXJzb2xkRmFjdG9yO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy52cGNJZCA9IHByb3BzLnZwY0lkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsdXN0ZXJOYW1lOiB0aGlzLmNsdXN0ZXJOYW1lLFxuICAgICAgICAgICAgY2x1c3RlclR5cGU6IHRoaXMuY2x1c3RlclR5cGUsXG4gICAgICAgICAgICBuZXR3b3JrTW9kZTogdGhpcy5uZXR3b3JrTW9kZSxcbiAgICAgICAgICAgIGxvZ2ljYWxSZWdpb25JZDogdGhpcy5sb2dpY2FsUmVnaW9uSWQsXG4gICAgICAgICAgICBvdmVyc29sZEZhY3RvcjogdGhpcy5vdmVyc29sZEZhY3RvcixcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB2cGNJZDogdGhpcy52cGNJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2x1c3RlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0NsdXN0ZXJNZW1iZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWRhcy1jbHVzdGVybWVtYmVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ2x1c3Rlck1lbWJlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IENsdXN0ZXIgSUQgdG8gaW1wb3J0IEVDUyBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWRzOiBFQ1MgaW5zdGFuY2UgSUQgbGlzdCB0byBpbXBvcnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFzc3dvcmQ6IFBhc3N3b3JkIEVDUyBob3N0cyBuZWVkIHRvIGltcG9ydCAoRUNTIHNldHRpbmdzIGNhbiBjb250aW51ZSB0byB1c2UgcHVyY2hhc2VkKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2x1c3Rlck1lbWJlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDbHVzdGVyTWVtYmVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2x1c3Rlck1lbWJlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlSWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZUlkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhc3N3b3JkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzd29yZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXNzd29yZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDbHVzdGVyTWVtYmVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJNZW1iZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDbHVzdGVyTWVtYmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDbHVzdGVyTWVtYmVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0NsdXN0ZXJJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgICdJbnN0YW5jZUlkcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmluc3RhbmNlSWRzKSxcbiAgICAgICdQYXNzd29yZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFzc3dvcmQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJgLCB3aGljaCBpcyB1c2VkIHRvIGFkZCBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZXMgdG8gYSBjbHVzdGVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDbHVzdGVyTWVtYmVyYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLWNsdXN0ZXJtZW1iZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NsdXN0ZXJNZW1iZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJNZW1iZXJJZHM6IENsdXN0ZXIgbWVtYmVyIElEcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBFQ1MgaW5zdGFuY2UgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck1lbWJlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFY3VJZHM6IEVDVSBJRHMgY29ycmVzcG9uZGluZyB0byB0aGUgRUNTIGluc3RhbmNlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVjdUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkczogRUNTIGluc3RhbmNlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IENsdXN0ZXIgSUQgdG8gaW1wb3J0IEVDUyBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkczogRUNTIGluc3RhbmNlIElEIGxpc3QgdG8gaW1wb3J0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXNzd29yZDogUGFzc3dvcmQgRUNTIGhvc3RzIG5lZWQgdG8gaW1wb3J0IChFQ1Mgc2V0dGluZ3MgY2FuIGNvbnRpbnVlIHRvIHVzZSBwdXJjaGFzZWQpXG4gICAgICovXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2x1c3Rlck1lbWJlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2x1c3Rlck1lbWJlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTWVtYmVySWRzID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJNZW1iZXJJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyRWN1SWRzID0gdGhpcy5nZXRBdHQoJ0VjdUlkcycpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkcyA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jbHVzdGVySWQgPSBwcm9wcy5jbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZHMgPSBwcm9wcy5pbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHByb3BzLnBhc3N3b3JkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogdGhpcy5jbHVzdGVySWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkczogdGhpcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDbHVzdGVyTWVtYmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zRGVwbG95R3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWRhcy1kZXBsb3lncm91cFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RlcGxveUdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcElkOiBBcHBsaWNhdGlvbiBJRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBHcm91cCBuYW1lLCBtYXhpbXVtIGxlbmd0aCBvZiA2NC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEZXBsb3lHcm91cFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEZXBsb3lHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RlcGxveUdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5ncm91cE5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5ncm91cE5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5ncm91cE5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZ3JvdXBOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEZXBsb3lHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpEZXBsb3lHcm91cGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGVwbG95R3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6RGVwbG95R3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGVwbG95R3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RlcGxveUdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FwcElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBJZCksXG4gICAgICAnR3JvdXBOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gaW5zdGFuY2UgZ3JvdXAgZm9yIGFuIGFwcGxpY2F0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBEZXBsb3lHcm91cGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWRhcy1kZXBsb3lncm91cFxuICovXG5leHBvcnQgY2xhc3MgUm9zRGVwbG95R3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFwcElkOiBBcHBsaWNhdGlvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBOYW1lOiBEZXBsb3kgZ3JvdXAgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBEZXBsb3kgZ3JvdXAgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBJZDogQXBwbGljYXRpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IEdyb3VwIG5hbWUsIG1heGltdW0gbGVuZ3RoIG9mIDY0LlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEZXBsb3lHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGVwbG95R3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwcElkID0gdGhpcy5nZXRBdHQoJ0FwcElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHRoaXMuZ2V0QXR0KCdHcm91cE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRySWQgPSB0aGlzLmdldEF0dCgnSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBwSWQgPSBwcm9wcy5hcHBJZDtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBwcm9wcy5ncm91cE5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwSWQ6IHRoaXMuYXBwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEZXBsb3lHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0s4c0FwcGxpY2F0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVkYXMtazhzYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NLOHNBcHBsaWNhdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24uIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2FuIGNvbnRhaW4gZGlnaXRzLFxuICAgICAqIGxldHRlcnMsIGFuZCBoeXBoZW5zICgtKS4gSXQgY2FuIGJlIHVwIHRvIDM2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IFRoZSBjbHVzdGVyIElELiBZb3UgY2FuIHF1ZXJ5IHRoZSBjbHVzdGVyIElEIGJ5IGNhbGxpbmcgdGhlIExpc3RDbHVzdGVyIG9wZXJhdGlvbi5cbiAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIExpc3RDbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcGxpY2F0aW9uRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwbGljYXRpb25EZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiBUaGUgY29tbWFuZCB0aGF0IGlzIHNwZWNpZmllZC4gSWYgaXQgaXMgc3BlY2lmaWVkLCBpdCByZXBsYWNlcyB0aGUgc3RhcnR1cCBjb21tYW5kIGluIHRoZSBpbWFnZSB3aGVuIHRoZSBpbWFnZSBpcyBzdGFydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1hbmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWFuZEFyZ3M6IFRoZSBjb2xsZWN0aW9uIG9mIGNvbW1hbmRzLiBGb3IgZXhhbXBsZSwgW3tcImFyZ3VtZW50XCI6XCItY1wifSx7XCJhcmd1bWVudFwiOlwidGVzdFwifV0sIHdoZXJlIC1jIGFuZCB0ZXN0IGFyZSB0d28gcGFyYW1ldGVycyB0aGF0IGNhbiBiZSBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbWFuZEFyZ3M/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5Db21tYW5kQXJnc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXBsb3lBY3Jvc3NOb2RlczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzdHJpYnV0ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZXMgdG8gbXVsdGlwbGUgbm9kZXMuIFRoZSB2YWx1ZSB0cnVlIGluZGljYXRlcyB5ZXMsIHdoZXJlYXMgb3RoZXIgdmFsdWVzIGluZGljYXRlIG5vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlcGxveUFjcm9zc05vZGVzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXBsb3lBY3Jvc3Nab25lczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzdHJpYnV0ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZXMgdG8gbXVsdGlwbGUgem9uZXMuIFRoZSB2YWx1ZSB0cnVlIGluZGljYXRlcyB5ZXMsIHdoZXJlYXMgb3RoZXIgdmFsdWVzIGluZGljYXRlIG5vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlcGxveUFjcm9zc1pvbmVzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlZGFzQ29udGFpbmVyVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgRURBUyBDb250YWluZXIgb24gd2hpY2ggdGhlIGRlcGxveW1lbnQgcGFja2FnZSBvZiB0aGUgYXBwbGljYXRpb24gZGVwZW5kcy5cbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiB5b3UgZGVwbG95IGFuIGFwcGxpY2F0aW9uIGJ5IHVzaW5nIGltYWdlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlZGFzQ29udGFpbmVyVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVBaGFzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgYWNjZXNzIHRvIEFwcGxpY2F0aW9uIEhpZ2ggQXZhaWxhYmlsaXR5IFNlcnZpY2UgKEFIQVMpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUFoYXM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVudnM6IFRoZSBjb2xsZWN0aW9uIG9mIGRlcGxveW1lbnQgZW52aXJvbm1lbnQgdmFyaWFibGVzLiBGb3IgZXhhbXBsZSwgW3tcIk5hbWVcIjpcInhcIixcIlZhbHVlXCI6XCJ5XCJ9LHtcIk5hbWVcIjpcIngyXCIsXCJWYWx1ZVwiOlwieTJcIn1dLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVudnM/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5FbnZzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGltYWdlVXJsOiBUaGUgaW1hZ2UgVVJMLiBXaGVuIFBhY2thZ2VUeXBlIGlzIHNldCB0byBJbWFnZSwgdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTbGJJZDogVGhlIElEIG9mIHRoZSBJbnRlcm5ldC1mYWNpbmcgU0xCIGluc3RhbmNlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCBFREFTIGF1dG9tYXRpY2FsbHkgcHVyY2hhc2VzIGEgbmV3IFNMQiBpbnN0YW5jZSBmb3IgeW91LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0U2xiSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTbGJQb3J0OiBUaGUgZnJvbnRlbmQgcG9ydCBvZiB0aGUgSW50ZXJuZXQtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0U2xiUG9ydD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldFNsYlByb3RvY29sOiBUaGUgcHJvdG9jb2wgb2YgdGhlIEludGVybmV0LWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogVENQLCBIVFRQLCBhbmQgSFRUUFMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRTbGJQcm90b2NvbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldFRhcmdldFBvcnQ6IFRoZSBiYWNrZW5kIHBvcnQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UsIHdoaWNoIGlzIGFsc28gdGhlIHNlcnZpY2UgcG9ydCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICogVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0VGFyZ2V0UG9ydD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFNsYklkOiBUaGUgSUQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQsIEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZSAoRURBUykgYXV0b21hdGljYWxseSBwdXJjaGFzZXMgYSBuZXcgU0xCIGluc3RhbmNlIGZvciB5b3UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50cmFuZXRTbGJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFNsYlBvcnQ6IFRoZSBmcm9udGVuZCBwb3J0IG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50cmFuZXRTbGJQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludHJhbmV0U2xiUHJvdG9jb2w6IFRoZSBwcm90b2NvbCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBUQ1AsIEhUVFAsIGFuZCBIVFRQUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRyYW5ldFNsYlByb3RvY29sPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludHJhbmV0VGFyZ2V0UG9ydDogVGhlIGJhY2tlbmQgcG9ydCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNlcnZlciBMb2FkIEJhbGFuY2VyIChTTEIpIGluc3RhbmNlLCB3aGljaCBpcyBhbHNvIHRoZSBzZXJ2aWNlIHBvcnQgb2YgdGhlIGFwcGxpY2F0aW9uLiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50cmFuZXRUYXJnZXRQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzTXVsdGlsaW5ndWFsQXBwOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYXBwbGljYXRpb24gaXMgYSBtdWx0aS1sYW5ndWFnZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc011bHRpbGluZ3VhbEFwcD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgamF2YVN0YXJ0VXBDb25maWc6IFRoZSBjb25maWd1cmF0aW9uIG9mIEphdmEgc3RhcnR1cCBwYXJhbWV0ZXJzIGZvciBhIEphdmEgYXBwbGljYXRpb24uIFRoZXNlIHN0YXJ0dXAgcGFyYW1ldGVycyBpbnZvbHZlIHRoZSBtZW1vcnksIGFwcGxpY2F0aW9uLCBnYXJiYWdlIGNvbGxlY3Rpb24gKEdDKSBwb2xpY3ksIHRvb2xzLCBzZXJ2aWNlIHJlZ2lzdHJhdGlvbiBhbmQgZGlzY292ZXJ5LCBhbmQgY3VzdG9tIGNvbmZpZ3VyYXRpb25zLiBQcm9wZXIgcGFyYW1ldGVyIHNldHRpbmdzIGhlbHAgcmVkdWNlIHRoZSBHQyBvdmVyaGVhZCwgc2hvcnRlbiB0aGUgc2VydmVyIHJlc3BvbnNlIHRpbWUsIGFuZCBpbXByb3ZlIHRoZSB0aHJvdWdocHV0LlxuICAgICAqIFRoZSBzeXN0ZW0gYXV0b21hdGljYWxseSBjb25jYXRlbmF0ZXMgYWxsIHN0YXJ0dXAgdmFsdWVzIGFzIHRoZSBjb25maWd1cmF0aW9uIG9mIEphdmEgc3RhcnR1cCBwYXJhbWV0ZXJzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgamF2YVN0YXJ0VXBDb25maWc/OiBSb3NLOHNBcHBsaWNhdGlvbi5KYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGpkazogVGhlIHZlcnNpb24gb2YgSmF2YSBEZXZlbG9wbWVudCBLaXQgKEpESykgb24gd2hpY2ggdGhlIGRlcGxveW1lbnQgcGFja2FnZSBvZiB0aGUgYXBwbGljYXRpb24gZGVwZW5kcy4gXG4gICAgICogVmFsaWQgdmFsdWVzOiBPcGVuIEpESyA3IGFuZCBPcGVuIEpESyA4LiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdoZW4geW91IGRlcGxveSBhbiBhcHBsaWNhdGlvbiBieSB1c2luZyBpbWFnZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgamRrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpbWl0Q3B1OiBUaGUgbWF4aW11bSBudW1iZXIgb2YgQ1BVcyBhbGxvd2VkIGZvciBlYWNoIGFwcGxpY2F0aW9uIGluc3RhbmNlIHdoZW4gdGhlIGFwcGxpY2F0aW9uXG4gICAgICogaXMgcnVubmluZy4gVW5pdDogY29yZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGltaXRDcHU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGltaXRNZW06IFRoZSBtYXhpbXVtIGFtb3VudCBvZiBtZW1vcnkgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLiBVbml0OiBNQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaW1pdE1lbT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaXZlbmVzczogVGhlIGxpdmVuZXNzIGNoZWNrIG9uIHRoZSBjb250YWluZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGl2ZW5lc3M/OiBSb3NLOHNBcHBsaWNhdGlvbi5MaXZlbmVzc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvY2FsVm9sdW1lOiBUaGUgY29uZmlndXJhdGlvbiBmb3IgbW91bnRpbmcgaG9zdCBmaWxlcyB0byB0aGUgY29udGFpbmVyIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLiBGb3IgZXhhbXBsZSwgdGhlIHZhbHVlIGNhbiBiZSBbe1widHlwZVwiOlwiXCIsIFwibm9kZVBhdGhcIjpcIlxcL2xvY2FsZmlsZXNcIiwgXCJtb3VudFBhdGhcIjpcIlxcL2FwcFxcL2ZpbGVzXCJ9LCB7XCJ0eXBlXCI6XCJEaXJlY3RvcnlcIiwgXCJub2RlUGF0aFwiOlwiXFwvbW50XCIsIFwibW91bnRQYXRoXCI6XCJcXC9hcHBcXC9zdG9yYWdlXCJ9XS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbFZvbHVtZT86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLkxvY2FsVm9sdW1lUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogVGhlIElEIG9mIHRoZSBFREFTIG5hbWVzcGFjZS4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgZm9yIGEgbm9uLWRlZmF1bHQgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ2ljYWxSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb3VudERlc2NzOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIE5BUyBtb3VudGluZyBjb25maWd1cmF0aW9uLiBGb3IgZXhhbXBsZSwgdGhlIHZhbHVlIGNhbiBiZSBbe1wiTmFzUGF0aFwiOiBcIlxcL2s4c1wiLFwiTW91bnRQYXRoXCI6IFwiXFwvbW50XCJ9LCB7XCJOYXNQYXRoXCI6IFwiXFwvZmlsZXNcIiwgXCJNb3VudFBhdGhcIjogXCJcXC9hcHBcXC9maWxlc1wifV0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW91bnREZXNjcz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLk1vdW50RGVzY3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgbmFtZXNwYWNlIG9mIHRoZSBLdWJlcm5ldGVzIGNsdXN0ZXIuIFRoaXMgcGFyYW1ldGVyIGRldGVybWluZXMgdGhlIEt1YmVybmV0ZXMgbmFtZXNwYWNlIHdoZXJlIHlvdXIgYXBwbGljYXRpb24gaXMgZGVwbG95ZWQuIEJ5IGRlZmF1bHQsIHRoaXMgcGFyYW1ldGVyIGlzIHNldCB0byBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXNJZDogVGhlIElEIG9mIHRoZSBOZXR3b3JrIEF0dGFjaGVkIFN0b3JhZ2UgKE5BUykgZmlsZSBzeXN0ZW0gbW91bnRlZCB0byB0aGUgY29udGFpbmVyIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLiBUaGUgTkFTIGZpbGUgc3lzdGVtIG11c3QgYmUgaW4gdGhlIHNhbWUgcmVnaW9uIGFzIHRoZSBjbHVzdGVyLiBUaGUgTkFTIGZpbGUgc3lzdGVtIG11c3QgaGF2ZSBhbiBhdmFpbGFibGUgbW91bnQgdGFyZ2V0LCBvciBoYXZlIGEgbW91bnRcbiAgICAgKiB0YXJnZXQgb24gdGhlIHZTd2l0Y2ggaW4gdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgbG9jYXRlZC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIG1vdW50RGVzY3MgZmllbGQgZXhpc3RzLCBhIE5BUyBmaWxlIHN5c3RlbSBpcyBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlZCBhbmQgbW91bnRlZCB0byB0aGUgdlN3aXRjaCBpbiB0aGUgVlBDIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFzSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFZhbGlkIHZhbHVlczogRmF0SmFyLCBXQVIsIGFuZCBJbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYWNrYWdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVXJsOiBUaGUgVVJMIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc2V0IGZvciB0aGUgYXBwbGljYXRpb25zXG4gICAgICogdGhhdCBhcmUgZGVwbG95ZWQgYnkgdXNpbmcgRmF0SmFyIG9yIFdBUiBwYWNrYWdlcy5cbiAgICAgKiBOb3RlIFRoZSB2ZXJzaW9uIG9mIFNESyBmb3IgSmF2YSBvciBQeXRob24gbXVzdCBiZSAyLjQ0LjAgb3IgbGF0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIGRlcGxveW1lbnQgcGFja2FnZS4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgd2hlbiB0aGUgUGFja2FnZVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBXQVIgb3IgRmF0SmFyLiBZb3UgbXVzdCBzcGVjaWZ5IGEgdmVyc2lvbi5cbiAgICAgKiBOb3RlIFRoZSB2ZXJzaW9uIG9mIFNESyBmb3IgSmF2YSBvciBQeXRob24gbXVzdCBiZSAyLjQ0LjAgb3IgbGF0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9zdFN0YXJ0OiBUaGUgcG9zdC1zdGFydCBzY3JpcHQuIEZvciBleGFtcGxlLCB7XCJFeGVjXCI6IHtcIkNvbW1hbmRcIjogW1wibHNcIiwgXCJcXC9cIl19fS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb3N0U3RhcnQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVTdG9wOiBUaGUgcHJlLXN0b3Agc2NyaXB0LiBGb3IgZXhhbXBsZSwge1wiRXhlY1wiOiB7XCJDb21tYW5kXCI6IFtcImxzXCIsIFwiXFwvXCJdfX0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlU3RvcD86IFJvc0s4c0FwcGxpY2F0aW9uLlByZVN0b3BQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWFkaW5lc3M6IFRoZSByZWFkaW5lc3MgY2hlY2sgb24gdGhlIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWFkaW5lc3M/OiBSb3NLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBsaWNhczogVGhlIG51bWJlciBvZiBpbnN0YW5jZXMgZm9yIHRoZSBhcHBsaWNhdGlvbiB0aGF0IHlvdSB3YW50IHRvIGNyZWF0ZS4gRGVmYXVsdDogMVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcGxpY2FzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcG9JZDogVGhlIElEIG9mIHRoZSBpbWFnZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0c0NwdTogVGhlIG1heGltdW0gbnVtYmVyIG9mIENQVXMgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpcyBjcmVhdGVkLiBVbml0OiBjb3Jlcy4gVGhlIHZhbHVlIDAgaW5kaWNhdGVzIG5vIGxpbWl0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcXVlc3RzQ3B1PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcXVlc3RzTWVtOiBUaGUgbWF4aW11bSBhbW91bnQgb2YgbWVtb3J5IGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBpcyBjcmVhdGVkLiBVbml0OiBNQi4gVGhlIHZhbHVlIDAgaW5kaWNhdGVzIG5vIGxpbWl0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcXVlc3RzTWVtPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bnRpbWVDbGFzc05hbWU6IFRoZSB0eXBlIG9mIHRoZSBjb250YWluZXIgcnVudGltZS4gVGhpcyBwYXJhbWV0ZXIgaXMgYXBwbGljYWJsZSBvbmx5IHRvIGNsdXN0ZXJzIHRoYXQgdXNlIHNhbmRib3hlZCBjb250YWluZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bnRpbWVDbGFzc05hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xzQ29uZmlnczogVGhlIExvZ3N0b3JlIGNvbmZpZ3VyYXRpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNsc0NvbmZpZ3M/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5TbHNDb25maWdzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0b3JhZ2VUeXBlOiBPbmx5IFNTRCBpcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIHRpbWVvdXQgaW50ZXJ2YWwgb2YgdGhlIGNoYW5nZSBwcm9jZXNzLiBVbml0OiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXJpRW5jb2Rpbmc6IFRoZSB1bmlmb3JtIHJlc291cmNlIGlkZW50aWZpZXIgKFVSSSkgZW5jb2Rpbmcgc2NoZW1lLiBWYWxpZCB2YWx1ZXM6IElTTy04ODU5LTEsIEdCSywgR0IyMzEyLCBhbmQgVVRGLTguXG4gICAgICogTm90ZSBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkIGluIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24sIHRoZSBkZWZhdWx0IFVSSSBlbmNvZGluZ1xuICAgICAqIHNjaGVtZSBpbiB0aGUgVG9tY2F0IGNvbnRhaW5lciBpcyBhcHBsaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVyaUVuY29kaW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZUJvZHlFbmNvZGluZzogU3BlY2lmaWVzIHdoZXRoZXIgdXNlQm9keUVuY29kaW5nRm9yVVJJIGlzIGVuYWJsZWQuXG4gICAgICogTm90ZSBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkIGluIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICogZmFsc2UgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VCb2R5RW5jb2Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYkNvbnRhaW5lcjogVGhlIHZlcnNpb24gb2YgdGhlIFRvbWNhdCBjb250YWluZXIgb24gd2hpY2ggdGhlIGRlcGxveW1lbnQgcGFja2FnZSBvZiB0aGUgYXBwbGljYXRpb24gZGVwZW5kcy4gVGhpcyBwYXJhbWV0ZXIgaXMgYXBwbGljYWJsZSB0byBTcHJpbmcgQ2xvdWQgYW5kIEFwYWNoZSBEdWJibyBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgZGVwbG95ZWQgYnkgdXNpbmcgV0FSIHBhY2thZ2VzLiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdoZW4geW91IGRlcGxveSBhbiBhcHBsaWNhdGlvbiBieSB1c2luZyBpbWFnZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2ViQ29udGFpbmVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYkNvbnRhaW5lckNvbmZpZzogVGhlIFRvbWNhdCBjb250YWluZXIgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJDb250YWluZXJDb25maWc/OiBSb3NLOHNBcHBsaWNhdGlvbi5XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NLOHNBcHBsaWNhdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NLOHNBcHBsaWNhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dpY2FsUmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYXNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGl2ZW5lc3MnLCBSb3NLOHNBcHBsaWNhdGlvbl9MaXZlbmVzc1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxpdmVuZXNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludHJhbmV0U2xiSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYkNvbnRhaW5lcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy53ZWJDb250YWluZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpbWl0Q3B1Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmxpbWl0Q3B1KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbHNDb25maWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fU2xzQ29uZmlnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zbHNDb25maWdzKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYlByb3RvY29sJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW50cmFuZXRTbGJQcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJUQ1BcIixcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50cmFuZXRTbGJQcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJDb250YWluZXJDb25maWcnLCBSb3NLOHNBcHBsaWNhdGlvbl9XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy53ZWJDb250YWluZXJDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhY2thZ2VWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhY2thZ2VWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignamRrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmpkaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRTbGJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldFNsYklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVTdG9wJywgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByZVN0b3ApKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0U2xiUG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRTbGJQb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldFNsYlBvcnQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldFNsYlBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldFNsYlBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50ZXJuZXRTbGJQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWFkaW5lc3MnLCBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZWFkaW5lc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlcGxveUFjcm9zc05vZGVzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5kZXBsb3lBY3Jvc3NOb2RlcykpO1xuICAgIGlmKHByb3BlcnRpZXMucmVxdWVzdHNNZW0gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlcXVlc3RzTWVtKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1ZXN0c01lbScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlcXVlc3RzTWVtLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RzTWVtJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJlcXVlc3RzTWVtKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYWNrYWdlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlQm9keUVuY29kaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy51c2VCb2R5RW5jb2RpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2phdmFTdGFydFVwQ29uZmlnJywgUm9zSzhzQXBwbGljYXRpb25fSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5qYXZhU3RhcnRVcENvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNNdWx0aWxpbmd1YWxBcHAnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzTXVsdGlsaW5ndWFsQXBwKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXF1ZXN0c0NwdSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVxdWVzdHNDcHUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RzQ3B1Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVxdWVzdHNDcHUsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdHNDcHUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmVxdWVzdHNDcHUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmRBcmdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fQ29tbWFuZEFyZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuY29tbWFuZEFyZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0b3JhZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0b3JhZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9FbnZzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmVudnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ltYWdlVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmltYWdlVXJsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXBsb3lBY3Jvc3Nab25lcycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVwbG95QWNyb3NzWm9uZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bvc3RTdGFydCcsIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvc3RTdGFydCkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50ZXJuZXRUYXJnZXRQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRlcm5ldFRhcmdldFBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0VGFyZ2V0UG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludGVybmV0VGFyZ2V0UG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0VGFyZ2V0UG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnRlcm5ldFRhcmdldFBvcnQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlcGxpY2FzICYmICh0eXBlb2YgcHJvcGVydGllcy5yZXBsaWNhcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGljYXMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXBsaWNhcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsaWNhcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5yZXBsaWNhcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwbGljYXRpb25EZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBsaWNhdGlvbkRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1cmlFbmNvZGluZycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51cmlFbmNvZGluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50cmFuZXRUYXJnZXRQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmludHJhbmV0VGFyZ2V0UG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREZXNjcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX01vdW50RGVzY3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMubW91bnREZXNjcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYWxWb2x1bWUnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9Mb2NhbFZvbHVtZVByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5sb2NhbFZvbHVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZWRhc0NvbnRhaW5lclZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWRhc0NvbnRhaW5lclZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bnRpbWVDbGFzc05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVudGltZUNsYXNzTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21tYW5kKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnRlcm5ldFNsYlByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRlcm5ldFNsYlByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldFNsYlByb3RvY29sJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW50ZXJuZXRTbGJQcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJUQ1BcIixcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRTbGJQcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldFNsYlByb3RvY29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhY2thZ2VVcmwpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludHJhbmV0U2xiUG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50cmFuZXRTbGJQb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYlBvcnQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRyYW5ldFNsYlBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYlBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50cmFuZXRTbGJQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwb0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVBaGFzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVBaGFzKSk7XG4gICAgaWYocHJvcGVydGllcy5saW1pdE1lbSAmJiAodHlwZW9mIHByb3BlcnRpZXMubGltaXRNZW0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpbWl0TWVtJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubGltaXRNZW0sXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGltaXRNZW0nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubGltaXRNZW0pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSzhzQXBwbGljYXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0s4c0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NLOHNBcHBsaWNhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBcHBOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBOYW1lKSxcbiAgICAgICdDbHVzdGVySWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCksXG4gICAgICAnQXBwbGljYXRpb25EZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBwbGljYXRpb25EZXNjcmlwdGlvbiksXG4gICAgICAnQ29tbWFuZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgICAnQ29tbWFuZEFyZ3MnOiByb3MubGlzdE1hcHBlcihyb3NLOHNBcHBsaWNhdGlvbkNvbW1hbmRBcmdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbW1hbmRBcmdzKSxcbiAgICAgICdEZXBsb3lBY3Jvc3NOb2Rlcyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlcGxveUFjcm9zc05vZGVzKSxcbiAgICAgICdEZXBsb3lBY3Jvc3Nab25lcyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlcGxveUFjcm9zc1pvbmVzKSxcbiAgICAgICdFZGFzQ29udGFpbmVyVmVyc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZWRhc0NvbnRhaW5lclZlcnNpb24pLFxuICAgICAgJ0VuYWJsZUFoYXMnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVBaGFzKSxcbiAgICAgICdFbnZzJzogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25FbnZzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmVudnMpLFxuICAgICAgJ0ltYWdlVXJsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbWFnZVVybCksXG4gICAgICAnSW50ZXJuZXRTbGJJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRTbGJJZCksXG4gICAgICAnSW50ZXJuZXRTbGJQb3J0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcm5ldFNsYlBvcnQpLFxuICAgICAgJ0ludGVybmV0U2xiUHJvdG9jb2wnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludGVybmV0U2xiUHJvdG9jb2wpLFxuICAgICAgJ0ludGVybmV0VGFyZ2V0UG9ydCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRUYXJnZXRQb3J0KSxcbiAgICAgICdJbnRyYW5ldFNsYklkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRyYW5ldFNsYklkKSxcbiAgICAgICdJbnRyYW5ldFNsYlBvcnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludHJhbmV0U2xiUG9ydCksXG4gICAgICAnSW50cmFuZXRTbGJQcm90b2NvbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50cmFuZXRTbGJQcm90b2NvbCksXG4gICAgICAnSW50cmFuZXRUYXJnZXRQb3J0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRyYW5ldFRhcmdldFBvcnQpLFxuICAgICAgJ0lzTXVsdGlsaW5ndWFsQXBwJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNNdWx0aWxpbmd1YWxBcHApLFxuICAgICAgJ0phdmFTdGFydFVwQ29uZmlnJzogcm9zSzhzQXBwbGljYXRpb25KYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmphdmFTdGFydFVwQ29uZmlnKSxcbiAgICAgICdKREsnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmpkayksXG4gICAgICAnTGltaXRDcHUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpbWl0Q3B1KSxcbiAgICAgICdMaW1pdE1lbSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGltaXRNZW0pLFxuICAgICAgJ0xpdmVuZXNzJzogcm9zSzhzQXBwbGljYXRpb25MaXZlbmVzc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpdmVuZXNzKSxcbiAgICAgICdMb2NhbFZvbHVtZSc6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uTG9jYWxWb2x1bWVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubG9jYWxWb2x1bWUpLFxuICAgICAgJ0xvZ2ljYWxSZWdpb25JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSxcbiAgICAgICdNb3VudERlc2NzJzogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25Nb3VudERlc2NzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm1vdW50RGVzY3MpLFxuICAgICAgJ05hbWVzcGFjZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZXNwYWNlKSxcbiAgICAgICdOYXNJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFzSWQpLFxuICAgICAgJ1BhY2thZ2VUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYWNrYWdlVHlwZSksXG4gICAgICAnUGFja2FnZVVybCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFja2FnZVVybCksXG4gICAgICAnUGFja2FnZVZlcnNpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhY2thZ2VWZXJzaW9uKSxcbiAgICAgICdQb3N0U3RhcnQnOiByb3NLOHNBcHBsaWNhdGlvblBvc3RTdGFydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvc3RTdGFydCksXG4gICAgICAnUHJlU3RvcCc6IHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZVN0b3ApLFxuICAgICAgJ1JlYWRpbmVzcyc6IHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVhZGluZXNzKSxcbiAgICAgICdSZXBsaWNhcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGljYXMpLFxuICAgICAgJ1JlcG9JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwb0lkKSxcbiAgICAgICdSZXF1ZXN0c0NwdSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdHNDcHUpLFxuICAgICAgJ1JlcXVlc3RzTWVtJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXF1ZXN0c01lbSksXG4gICAgICAnUnVudGltZUNsYXNzTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucnVudGltZUNsYXNzTmFtZSksXG4gICAgICAnU2xzQ29uZmlncyc6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uU2xzQ29uZmlnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zbHNDb25maWdzKSxcbiAgICAgICdTdG9yYWdlVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RvcmFnZVR5cGUpLFxuICAgICAgJ1RpbWVvdXQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXQpLFxuICAgICAgJ1VyaUVuY29kaW5nJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy51cmlFbmNvZGluZyksXG4gICAgICAnVXNlQm9keUVuY29kaW5nJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlQm9keUVuY29kaW5nKSxcbiAgICAgICdXZWJDb250YWluZXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlYkNvbnRhaW5lciksXG4gICAgICAnV2ViQ29udGFpbmVyQ29uZmlnJzogcm9zSzhzQXBwbGljYXRpb25XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWJDb250YWluZXJDb25maWcpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gYXBwbGljYXRpb24gaW4gYSBLdWJlcm5ldGVzIGNsdXN0ZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEs4c0FwcGxpY2F0aW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLWs4c2FwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NLOHNBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5nZU9yZGVySWQ6IFRoZSBJRCBvZiB0aGUgY2hhbmdlIHByb2Nlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDaGFuZ2VPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJJZDogVGhlIGNsdXN0ZXIgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENzQ2x1c3RlcklkOiBUaGUgSzhzIGNsdXN0ZXIgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3NDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsXG4gICAgICogbGV0dGVycywgYW5kIGh5cGhlbnMgKC0pLiBJdCBjYW4gYmUgdXAgdG8gMzYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGFwcE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IFRoZSBjbHVzdGVyIElELiBZb3UgY2FuIHF1ZXJ5IHRoZSBjbHVzdGVyIElEIGJ5IGNhbGxpbmcgdGhlIExpc3RDbHVzdGVyIG9wZXJhdGlvbi5cbiAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIExpc3RDbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBsaWNhdGlvbkRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWFuZDogVGhlIGNvbW1hbmQgdGhhdCBpcyBzcGVjaWZpZWQuIElmIGl0IGlzIHNwZWNpZmllZCwgaXQgcmVwbGFjZXMgdGhlIHN0YXJ0dXAgY29tbWFuZCBpbiB0aGUgaW1hZ2Ugd2hlbiB0aGUgaW1hZ2UgaXMgc3RhcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29tbWFuZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1hbmRBcmdzOiBUaGUgY29sbGVjdGlvbiBvZiBjb21tYW5kcy4gRm9yIGV4YW1wbGUsIFt7XCJhcmd1bWVudFwiOlwiLWNcIn0se1wiYXJndW1lbnRcIjpcInRlc3RcIn1dLCB3aGVyZSAtYyBhbmQgdGVzdCBhcmUgdHdvIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb21tYW5kQXJnczogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uQ29tbWFuZEFyZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95QWNyb3NzTm9kZXM6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3RyaWJ1dGUgYXBwbGljYXRpb24gaW5zdGFuY2VzIHRvIG11bHRpcGxlIG5vZGVzLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgeWVzLCB3aGVyZWFzIG90aGVyIHZhbHVlcyBpbmRpY2F0ZSBuby5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVwbG95QWNyb3NzTm9kZXM6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95QWNyb3NzWm9uZXM6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3RyaWJ1dGUgYXBwbGljYXRpb24gaW5zdGFuY2VzIHRvIG11bHRpcGxlIHpvbmVzLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgeWVzLCB3aGVyZWFzIG90aGVyIHZhbHVlcyBpbmRpY2F0ZSBuby5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVwbG95QWNyb3NzWm9uZXM6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWRhc0NvbnRhaW5lclZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIEVEQVMgQ29udGFpbmVyIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuXG4gICAgICogTm90ZSBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdoZW4geW91IGRlcGxveSBhbiBhcHBsaWNhdGlvbiBieSB1c2luZyBpbWFnZXMuXG4gICAgICovXG4gICAgcHVibGljIGVkYXNDb250YWluZXJWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlQWhhczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIGFjY2VzcyB0byBBcHBsaWNhdGlvbiBIaWdoIEF2YWlsYWJpbGl0eSBTZXJ2aWNlIChBSEFTKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlQWhhczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZzOiBUaGUgY29sbGVjdGlvbiBvZiBkZXBsb3ltZW50IGVudmlyb25tZW50IHZhcmlhYmxlcy4gRm9yIGV4YW1wbGUsIFt7XCJOYW1lXCI6XCJ4XCIsXCJWYWx1ZVwiOlwieVwifSx7XCJOYW1lXCI6XCJ4MlwiLFwiVmFsdWVcIjpcInkyXCJ9XS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW52czogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uRW52c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbWFnZVVybDogVGhlIGltYWdlIFVSTC4gV2hlbiBQYWNrYWdlVHlwZSBpcyBzZXQgdG8gSW1hZ2UsIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0U2xiSWQ6IFRoZSBJRCBvZiB0aGUgSW50ZXJuZXQtZmFjaW5nIFNMQiBpbnN0YW5jZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCwgRURBUyBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlcyBhIG5ldyBTTEIgaW5zdGFuY2UgZm9yIHlvdS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRTbGJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0U2xiUG9ydDogVGhlIGZyb250ZW5kIHBvcnQgb2YgdGhlIEludGVybmV0LWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRTbGJQb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTbGJQcm90b2NvbDogVGhlIHByb3RvY29sIG9mIHRoZSBJbnRlcm5ldC1mYWNpbmcgU0xCIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IFRDUCwgSFRUUCwgYW5kIEhUVFBTLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldFNsYlByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRUYXJnZXRQb3J0OiBUaGUgYmFja2VuZCBwb3J0IG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLCB3aGljaCBpcyBhbHNvIHRoZSBzZXJ2aWNlIHBvcnQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRUYXJnZXRQb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJJZDogVGhlIElEIG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCBFbnRlcnByaXNlIERpc3RyaWJ1dGVkIEFwcGxpY2F0aW9uIFNlcnZpY2UgKEVEQVMpIGF1dG9tYXRpY2FsbHkgcHVyY2hhc2VzIGEgbmV3IFNMQiBpbnN0YW5jZSBmb3IgeW91LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRyYW5ldFNsYklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJQb3J0OiBUaGUgZnJvbnRlbmQgcG9ydCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRyYW5ldFNsYlBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFNsYlByb3RvY29sOiBUaGUgcHJvdG9jb2wgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogVENQLCBIVFRQLCBhbmQgSFRUUFMuXG4gICAgICovXG4gICAgcHVibGljIGludHJhbmV0U2xiUHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFRhcmdldFBvcnQ6IFRoZSBiYWNrZW5kIHBvcnQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTZXJ2ZXIgTG9hZCBCYWxhbmNlciAoU0xCKSBpbnN0YW5jZSwgd2hpY2ggaXMgYWxzbyB0aGUgc2VydmljZSBwb3J0IG9mIHRoZSBhcHBsaWNhdGlvbi4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRyYW5ldFRhcmdldFBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc011bHRpbGluZ3VhbEFwcDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGFwcGxpY2F0aW9uIGlzIGEgbXVsdGktbGFuZ3VhZ2UgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGlzTXVsdGlsaW5ndWFsQXBwOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGphdmFTdGFydFVwQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiBKYXZhIHN0YXJ0dXAgcGFyYW1ldGVycyBmb3IgYSBKYXZhIGFwcGxpY2F0aW9uLiBUaGVzZSBzdGFydHVwIHBhcmFtZXRlcnMgaW52b2x2ZSB0aGUgbWVtb3J5LCBhcHBsaWNhdGlvbiwgZ2FyYmFnZSBjb2xsZWN0aW9uIChHQykgcG9saWN5LCB0b29scywgc2VydmljZSByZWdpc3RyYXRpb24gYW5kIGRpc2NvdmVyeSwgYW5kIGN1c3RvbSBjb25maWd1cmF0aW9ucy4gUHJvcGVyIHBhcmFtZXRlciBzZXR0aW5ncyBoZWxwIHJlZHVjZSB0aGUgR0Mgb3ZlcmhlYWQsIHNob3J0ZW4gdGhlIHNlcnZlciByZXNwb25zZSB0aW1lLCBhbmQgaW1wcm92ZSB0aGUgdGhyb3VnaHB1dC5cbiAgICAgKiBUaGUgc3lzdGVtIGF1dG9tYXRpY2FsbHkgY29uY2F0ZW5hdGVzIGFsbCBzdGFydHVwIHZhbHVlcyBhcyB0aGUgY29uZmlndXJhdGlvbiBvZiBKYXZhIHN0YXJ0dXAgcGFyYW1ldGVycyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBqYXZhU3RhcnRVcENvbmZpZzogUm9zSzhzQXBwbGljYXRpb24uSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBqZGs6IFRoZSB2ZXJzaW9uIG9mIEphdmEgRGV2ZWxvcG1lbnQgS2l0IChKREspIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuIFxuICAgICAqIFZhbGlkIHZhbHVlczogT3BlbiBKREsgNyBhbmQgT3BlbiBKREsgOC4gVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHlvdSBkZXBsb3kgYW4gYXBwbGljYXRpb24gYnkgdXNpbmcgaW1hZ2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBqZGs6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaW1pdENwdTogVGhlIG1heGltdW0gbnVtYmVyIG9mIENQVXMgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvblxuICAgICAqIGlzIHJ1bm5pbmcuIFVuaXQ6IGNvcmVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBsaW1pdENwdTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpbWl0TWVtOiBUaGUgbWF4aW11bSBhbW91bnQgb2YgbWVtb3J5IGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gVW5pdDogTUIuXG4gICAgICovXG4gICAgcHVibGljIGxpbWl0TWVtOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGl2ZW5lc3M6IFRoZSBsaXZlbmVzcyBjaGVjayBvbiB0aGUgY29udGFpbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBsaXZlbmVzczogUm9zSzhzQXBwbGljYXRpb24uTGl2ZW5lc3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbFZvbHVtZTogVGhlIGNvbmZpZ3VyYXRpb24gZm9yIG1vdW50aW5nIGhvc3QgZmlsZXMgdG8gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gRm9yIGV4YW1wbGUsIHRoZSB2YWx1ZSBjYW4gYmUgW3tcInR5cGVcIjpcIlwiLCBcIm5vZGVQYXRoXCI6XCJcXC9sb2NhbGZpbGVzXCIsIFwibW91bnRQYXRoXCI6XCJcXC9hcHBcXC9maWxlc1wifSwge1widHlwZVwiOlwiRGlyZWN0b3J5XCIsIFwibm9kZVBhdGhcIjpcIlxcL21udFwiLCBcIm1vdW50UGF0aFwiOlwiXFwvYXBwXFwvc3RvcmFnZVwifV0uXG4gICAgICovXG4gICAgcHVibGljIGxvY2FsVm9sdW1lOiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5Mb2NhbFZvbHVtZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgRURBUyBuYW1lc3BhY2UuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGZvciBhIG5vbi1kZWZhdWx0IG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9naWNhbFJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW91bnREZXNjczogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBOQVMgbW91bnRpbmcgY29uZmlndXJhdGlvbi4gRm9yIGV4YW1wbGUsIHRoZSB2YWx1ZSBjYW4gYmUgW3tcIk5hc1BhdGhcIjogXCJcXC9rOHNcIixcIk1vdW50UGF0aFwiOiBcIlxcL21udFwifSwge1wiTmFzUGF0aFwiOiBcIlxcL2ZpbGVzXCIsIFwiTW91bnRQYXRoXCI6IFwiXFwvYXBwXFwvZmlsZXNcIn1dLlxuICAgICAqL1xuICAgIHB1YmxpYyBtb3VudERlc2NzOiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5Nb3VudERlc2NzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogVGhlIG5hbWVzcGFjZSBvZiB0aGUgS3ViZXJuZXRlcyBjbHVzdGVyLiBUaGlzIHBhcmFtZXRlciBkZXRlcm1pbmVzIHRoZSBLdWJlcm5ldGVzIG5hbWVzcGFjZSB3aGVyZSB5b3VyIGFwcGxpY2F0aW9uIGlzIGRlcGxveWVkLiBCeSBkZWZhdWx0LCB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gZGVmYXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZXNwYWNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFzSWQ6IFRoZSBJRCBvZiB0aGUgTmV0d29yayBBdHRhY2hlZCBTdG9yYWdlIChOQVMpIGZpbGUgc3lzdGVtIG1vdW50ZWQgdG8gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gVGhlIE5BUyBmaWxlIHN5c3RlbSBtdXN0IGJlIGluIHRoZSBzYW1lIHJlZ2lvbiBhcyB0aGUgY2x1c3Rlci4gVGhlIE5BUyBmaWxlIHN5c3RlbSBtdXN0IGhhdmUgYW4gYXZhaWxhYmxlIG1vdW50IHRhcmdldCwgb3IgaGF2ZSBhIG1vdW50XG4gICAgICogdGFyZ2V0IG9uIHRoZSB2U3dpdGNoIGluIHRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGxvY2F0ZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBtb3VudERlc2NzIGZpZWxkIGV4aXN0cywgYSBOQVMgZmlsZSBzeXN0ZW0gaXMgYXV0b21hdGljYWxseSBwdXJjaGFzZWQgYW5kIG1vdW50ZWQgdG8gdGhlIHZTd2l0Y2ggaW4gdGhlIFZQQyBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBuYXNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhY2thZ2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZGVwbG95bWVudCBwYWNrYWdlLiBWYWxpZCB2YWx1ZXM6IEZhdEphciwgV0FSLCBhbmQgSW1hZ2UuXG4gICAgICovXG4gICAgcHVibGljIHBhY2thZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVVybDogVGhlIFVSTCBvZiB0aGUgZGVwbG95bWVudCBwYWNrYWdlLiBUaGlzIHBhcmFtZXRlciBtdXN0IGJlIHNldCBmb3IgdGhlIGFwcGxpY2F0aW9uc1xuICAgICAqIHRoYXQgYXJlIGRlcGxveWVkIGJ5IHVzaW5nIEZhdEphciBvciBXQVIgcGFja2FnZXMuXG4gICAgICogTm90ZSBUaGUgdmVyc2lvbiBvZiBTREsgZm9yIEphdmEgb3IgUHl0aG9uIG11c3QgYmUgMi40NC4wIG9yIGxhdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYWNrYWdlVXJsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHdoZW4gdGhlIFBhY2thZ2VUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gV0FSIG9yIEZhdEphci4gWW91IG11c3Qgc3BlY2lmeSBhIHZlcnNpb24uXG4gICAgICogTm90ZSBUaGUgdmVyc2lvbiBvZiBTREsgZm9yIEphdmEgb3IgUHl0aG9uIG11c3QgYmUgMi40NC4wIG9yIGxhdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYWNrYWdlVmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvc3RTdGFydDogVGhlIHBvc3Qtc3RhcnQgc2NyaXB0LiBGb3IgZXhhbXBsZSwge1wiRXhlY1wiOiB7XCJDb21tYW5kXCI6IFtcImxzXCIsIFwiXFwvXCJdfX0uXG4gICAgICovXG4gICAgcHVibGljIHBvc3RTdGFydDogUm9zSzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlU3RvcDogVGhlIHByZS1zdG9wIHNjcmlwdC4gRm9yIGV4YW1wbGUsIHtcIkV4ZWNcIjoge1wiQ29tbWFuZFwiOiBbXCJsc1wiLCBcIlxcL1wiXX19LlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmVTdG9wOiBSb3NLOHNBcHBsaWNhdGlvbi5QcmVTdG9wUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVhZGluZXNzOiBUaGUgcmVhZGluZXNzIGNoZWNrIG9uIHRoZSBjb250YWluZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRpbmVzczogUm9zSzhzQXBwbGljYXRpb24uUmVhZGluZXNzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwbGljYXM6IFRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIGZvciB0aGUgYXBwbGljYXRpb24gdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUuIERlZmF1bHQ6IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGljYXM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBvSWQ6IFRoZSBJRCBvZiB0aGUgaW1hZ2UgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVxdWVzdHNDcHU6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBDUFVzIGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb24gaXMgY3JlYXRlZC4gVW5pdDogY29yZXMuIFRoZSB2YWx1ZSAwIGluZGljYXRlcyBubyBsaW1pdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVxdWVzdHNDcHU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0c01lbTogVGhlIG1heGltdW0gYW1vdW50IG9mIG1lbW9yeSBhbGxvd2VkIGZvciBlYWNoIGFwcGxpY2F0aW9uIGluc3RhbmNlIHdoZW4gdGhlIGFwcGxpY2F0aW9uXG4gICAgICogaXMgY3JlYXRlZC4gVW5pdDogTUIuIFRoZSB2YWx1ZSAwIGluZGljYXRlcyBubyBsaW1pdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVxdWVzdHNNZW06IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydW50aW1lQ2xhc3NOYW1lOiBUaGUgdHlwZSBvZiB0aGUgY29udGFpbmVyIHJ1bnRpbWUuIFRoaXMgcGFyYW1ldGVyIGlzIGFwcGxpY2FibGUgb25seSB0byBjbHVzdGVycyB0aGF0IHVzZSBzYW5kYm94ZWQgY29udGFpbmVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVudGltZUNsYXNzTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNsc0NvbmZpZ3M6IFRoZSBMb2dzdG9yZSBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2xzQ29uZmlnczogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uU2xzQ29uZmlnc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdG9yYWdlVHlwZTogT25seSBTU0QgaXMgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9yYWdlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IGludGVydmFsIG9mIHRoZSBjaGFuZ2UgcHJvY2Vzcy4gVW5pdDogc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVyaUVuY29kaW5nOiBUaGUgdW5pZm9ybSByZXNvdXJjZSBpZGVudGlmaWVyIChVUkkpIGVuY29kaW5nIHNjaGVtZS4gVmFsaWQgdmFsdWVzOiBJU08tODg1OS0xLCBHQkssIEdCMjMxMiwgYW5kIFVURi04LlxuICAgICAqIE5vdGUgSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCBpbiBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uLCB0aGUgZGVmYXVsdCBVUkkgZW5jb2RpbmdcbiAgICAgKiBzY2hlbWUgaW4gdGhlIFRvbWNhdCBjb250YWluZXIgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXJpRW5jb2Rpbmc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VCb2R5RW5jb2Rpbmc6IFNwZWNpZmllcyB3aGV0aGVyIHVzZUJvZHlFbmNvZGluZ0ZvclVSSSBpcyBlbmFibGVkLlxuICAgICAqIE5vdGUgSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCBpbiBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uLCB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgICAqIGZhbHNlIGlzIGFwcGxpZWQuXG4gICAgICovXG4gICAgcHVibGljIHVzZUJvZHlFbmNvZGluZzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJDb250YWluZXI6IFRoZSB2ZXJzaW9uIG9mIHRoZSBUb21jYXQgY29udGFpbmVyIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuIFRoaXMgcGFyYW1ldGVyIGlzIGFwcGxpY2FibGUgdG8gU3ByaW5nIENsb3VkIGFuZCBBcGFjaGUgRHViYm8gYXBwbGljYXRpb25zIHRoYXQgYXJlIGRlcGxveWVkIGJ5IHVzaW5nIFdBUiBwYWNrYWdlcy4gVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHlvdSBkZXBsb3kgYW4gYXBwbGljYXRpb24gYnkgdXNpbmcgaW1hZ2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyB3ZWJDb250YWluZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJDb250YWluZXJDb25maWc6IFRoZSBUb21jYXQgY29udGFpbmVyIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHdlYkNvbnRhaW5lckNvbmZpZzogUm9zSzhzQXBwbGljYXRpb24uV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSzhzQXBwbGljYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0s4c0FwcGxpY2F0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJBcHBOYW1lID0gdGhpcy5nZXRBdHQoJ0FwcE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyQ2hhbmdlT3JkZXJJZCA9IHRoaXMuZ2V0QXR0KCdDaGFuZ2VPcmRlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJJZCA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyQ3NDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ3NDbHVzdGVySWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHByb3BzLmFwcE5hbWU7XG4gICAgICAgIHRoaXMuY2x1c3RlcklkID0gcHJvcHMuY2x1c3RlcklkO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uRGVzY3JpcHRpb24gPSBwcm9wcy5hcHBsaWNhdGlvbkRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBwcm9wcy5jb21tYW5kO1xuICAgICAgICB0aGlzLmNvbW1hbmRBcmdzID0gcHJvcHMuY29tbWFuZEFyZ3M7XG4gICAgICAgIHRoaXMuZGVwbG95QWNyb3NzTm9kZXMgPSBwcm9wcy5kZXBsb3lBY3Jvc3NOb2RlcztcbiAgICAgICAgdGhpcy5kZXBsb3lBY3Jvc3Nab25lcyA9IHByb3BzLmRlcGxveUFjcm9zc1pvbmVzO1xuICAgICAgICB0aGlzLmVkYXNDb250YWluZXJWZXJzaW9uID0gcHJvcHMuZWRhc0NvbnRhaW5lclZlcnNpb247XG4gICAgICAgIHRoaXMuZW5hYmxlQWhhcyA9IHByb3BzLmVuYWJsZUFoYXM7XG4gICAgICAgIHRoaXMuZW52cyA9IHByb3BzLmVudnM7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBwcm9wcy5pbWFnZVVybDtcbiAgICAgICAgdGhpcy5pbnRlcm5ldFNsYklkID0gcHJvcHMuaW50ZXJuZXRTbGJJZDtcbiAgICAgICAgdGhpcy5pbnRlcm5ldFNsYlBvcnQgPSBwcm9wcy5pbnRlcm5ldFNsYlBvcnQ7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRTbGJQcm90b2NvbCA9IHByb3BzLmludGVybmV0U2xiUHJvdG9jb2w7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRUYXJnZXRQb3J0ID0gcHJvcHMuaW50ZXJuZXRUYXJnZXRQb3J0O1xuICAgICAgICB0aGlzLmludHJhbmV0U2xiSWQgPSBwcm9wcy5pbnRyYW5ldFNsYklkO1xuICAgICAgICB0aGlzLmludHJhbmV0U2xiUG9ydCA9IHByb3BzLmludHJhbmV0U2xiUG9ydDtcbiAgICAgICAgdGhpcy5pbnRyYW5ldFNsYlByb3RvY29sID0gcHJvcHMuaW50cmFuZXRTbGJQcm90b2NvbDtcbiAgICAgICAgdGhpcy5pbnRyYW5ldFRhcmdldFBvcnQgPSBwcm9wcy5pbnRyYW5ldFRhcmdldFBvcnQ7XG4gICAgICAgIHRoaXMuaXNNdWx0aWxpbmd1YWxBcHAgPSBwcm9wcy5pc011bHRpbGluZ3VhbEFwcDtcbiAgICAgICAgdGhpcy5qYXZhU3RhcnRVcENvbmZpZyA9IHByb3BzLmphdmFTdGFydFVwQ29uZmlnO1xuICAgICAgICB0aGlzLmpkayA9IHByb3BzLmpkaztcbiAgICAgICAgdGhpcy5saW1pdENwdSA9IHByb3BzLmxpbWl0Q3B1O1xuICAgICAgICB0aGlzLmxpbWl0TWVtID0gcHJvcHMubGltaXRNZW07XG4gICAgICAgIHRoaXMubGl2ZW5lc3MgPSBwcm9wcy5saXZlbmVzcztcbiAgICAgICAgdGhpcy5sb2NhbFZvbHVtZSA9IHByb3BzLmxvY2FsVm9sdW1lO1xuICAgICAgICB0aGlzLmxvZ2ljYWxSZWdpb25JZCA9IHByb3BzLmxvZ2ljYWxSZWdpb25JZDtcbiAgICAgICAgdGhpcy5tb3VudERlc2NzID0gcHJvcHMubW91bnREZXNjcztcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBwcm9wcy5uYW1lc3BhY2U7XG4gICAgICAgIHRoaXMubmFzSWQgPSBwcm9wcy5uYXNJZDtcbiAgICAgICAgdGhpcy5wYWNrYWdlVHlwZSA9IHByb3BzLnBhY2thZ2VUeXBlO1xuICAgICAgICB0aGlzLnBhY2thZ2VVcmwgPSBwcm9wcy5wYWNrYWdlVXJsO1xuICAgICAgICB0aGlzLnBhY2thZ2VWZXJzaW9uID0gcHJvcHMucGFja2FnZVZlcnNpb247XG4gICAgICAgIHRoaXMucG9zdFN0YXJ0ID0gcHJvcHMucG9zdFN0YXJ0O1xuICAgICAgICB0aGlzLnByZVN0b3AgPSBwcm9wcy5wcmVTdG9wO1xuICAgICAgICB0aGlzLnJlYWRpbmVzcyA9IHByb3BzLnJlYWRpbmVzcztcbiAgICAgICAgdGhpcy5yZXBsaWNhcyA9IHByb3BzLnJlcGxpY2FzO1xuICAgICAgICB0aGlzLnJlcG9JZCA9IHByb3BzLnJlcG9JZDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0c0NwdSA9IHByb3BzLnJlcXVlc3RzQ3B1O1xuICAgICAgICB0aGlzLnJlcXVlc3RzTWVtID0gcHJvcHMucmVxdWVzdHNNZW07XG4gICAgICAgIHRoaXMucnVudGltZUNsYXNzTmFtZSA9IHByb3BzLnJ1bnRpbWVDbGFzc05hbWU7XG4gICAgICAgIHRoaXMuc2xzQ29uZmlncyA9IHByb3BzLnNsc0NvbmZpZ3M7XG4gICAgICAgIHRoaXMuc3RvcmFnZVR5cGUgPSBwcm9wcy5zdG9yYWdlVHlwZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dDtcbiAgICAgICAgdGhpcy51cmlFbmNvZGluZyA9IHByb3BzLnVyaUVuY29kaW5nO1xuICAgICAgICB0aGlzLnVzZUJvZHlFbmNvZGluZyA9IHByb3BzLnVzZUJvZHlFbmNvZGluZztcbiAgICAgICAgdGhpcy53ZWJDb250YWluZXIgPSBwcm9wcy53ZWJDb250YWluZXI7XG4gICAgICAgIHRoaXMud2ViQ29udGFpbmVyQ29uZmlnID0gcHJvcHMud2ViQ29udGFpbmVyQ29uZmlnO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogdGhpcy5jbHVzdGVySWQsXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkRlc2NyaXB0aW9uOiB0aGlzLmFwcGxpY2F0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjb21tYW5kOiB0aGlzLmNvbW1hbmQsXG4gICAgICAgICAgICBjb21tYW5kQXJnczogdGhpcy5jb21tYW5kQXJncyxcbiAgICAgICAgICAgIGRlcGxveUFjcm9zc05vZGVzOiB0aGlzLmRlcGxveUFjcm9zc05vZGVzLFxuICAgICAgICAgICAgZGVwbG95QWNyb3NzWm9uZXM6IHRoaXMuZGVwbG95QWNyb3NzWm9uZXMsXG4gICAgICAgICAgICBlZGFzQ29udGFpbmVyVmVyc2lvbjogdGhpcy5lZGFzQ29udGFpbmVyVmVyc2lvbixcbiAgICAgICAgICAgIGVuYWJsZUFoYXM6IHRoaXMuZW5hYmxlQWhhcyxcbiAgICAgICAgICAgIGVudnM6IHRoaXMuZW52cyxcbiAgICAgICAgICAgIGltYWdlVXJsOiB0aGlzLmltYWdlVXJsLFxuICAgICAgICAgICAgaW50ZXJuZXRTbGJJZDogdGhpcy5pbnRlcm5ldFNsYklkLFxuICAgICAgICAgICAgaW50ZXJuZXRTbGJQb3J0OiB0aGlzLmludGVybmV0U2xiUG9ydCxcbiAgICAgICAgICAgIGludGVybmV0U2xiUHJvdG9jb2w6IHRoaXMuaW50ZXJuZXRTbGJQcm90b2NvbCxcbiAgICAgICAgICAgIGludGVybmV0VGFyZ2V0UG9ydDogdGhpcy5pbnRlcm5ldFRhcmdldFBvcnQsXG4gICAgICAgICAgICBpbnRyYW5ldFNsYklkOiB0aGlzLmludHJhbmV0U2xiSWQsXG4gICAgICAgICAgICBpbnRyYW5ldFNsYlBvcnQ6IHRoaXMuaW50cmFuZXRTbGJQb3J0LFxuICAgICAgICAgICAgaW50cmFuZXRTbGJQcm90b2NvbDogdGhpcy5pbnRyYW5ldFNsYlByb3RvY29sLFxuICAgICAgICAgICAgaW50cmFuZXRUYXJnZXRQb3J0OiB0aGlzLmludHJhbmV0VGFyZ2V0UG9ydCxcbiAgICAgICAgICAgIGlzTXVsdGlsaW5ndWFsQXBwOiB0aGlzLmlzTXVsdGlsaW5ndWFsQXBwLFxuICAgICAgICAgICAgamF2YVN0YXJ0VXBDb25maWc6IHRoaXMuamF2YVN0YXJ0VXBDb25maWcsXG4gICAgICAgICAgICBqZGs6IHRoaXMuamRrLFxuICAgICAgICAgICAgbGltaXRDcHU6IHRoaXMubGltaXRDcHUsXG4gICAgICAgICAgICBsaW1pdE1lbTogdGhpcy5saW1pdE1lbSxcbiAgICAgICAgICAgIGxpdmVuZXNzOiB0aGlzLmxpdmVuZXNzLFxuICAgICAgICAgICAgbG9jYWxWb2x1bWU6IHRoaXMubG9jYWxWb2x1bWUsXG4gICAgICAgICAgICBsb2dpY2FsUmVnaW9uSWQ6IHRoaXMubG9naWNhbFJlZ2lvbklkLFxuICAgICAgICAgICAgbW91bnREZXNjczogdGhpcy5tb3VudERlc2NzLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZSxcbiAgICAgICAgICAgIG5hc0lkOiB0aGlzLm5hc0lkLFxuICAgICAgICAgICAgcGFja2FnZVR5cGU6IHRoaXMucGFja2FnZVR5cGUsXG4gICAgICAgICAgICBwYWNrYWdlVXJsOiB0aGlzLnBhY2thZ2VVcmwsXG4gICAgICAgICAgICBwYWNrYWdlVmVyc2lvbjogdGhpcy5wYWNrYWdlVmVyc2lvbixcbiAgICAgICAgICAgIHBvc3RTdGFydDogdGhpcy5wb3N0U3RhcnQsXG4gICAgICAgICAgICBwcmVTdG9wOiB0aGlzLnByZVN0b3AsXG4gICAgICAgICAgICByZWFkaW5lc3M6IHRoaXMucmVhZGluZXNzLFxuICAgICAgICAgICAgcmVwbGljYXM6IHRoaXMucmVwbGljYXMsXG4gICAgICAgICAgICByZXBvSWQ6IHRoaXMucmVwb0lkLFxuICAgICAgICAgICAgcmVxdWVzdHNDcHU6IHRoaXMucmVxdWVzdHNDcHUsXG4gICAgICAgICAgICByZXF1ZXN0c01lbTogdGhpcy5yZXF1ZXN0c01lbSxcbiAgICAgICAgICAgIHJ1bnRpbWVDbGFzc05hbWU6IHRoaXMucnVudGltZUNsYXNzTmFtZSxcbiAgICAgICAgICAgIHNsc0NvbmZpZ3M6IHRoaXMuc2xzQ29uZmlncyxcbiAgICAgICAgICAgIHN0b3JhZ2VUeXBlOiB0aGlzLnN0b3JhZ2VUeXBlLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgdXJpRW5jb2Rpbmc6IHRoaXMudXJpRW5jb2RpbmcsXG4gICAgICAgICAgICB1c2VCb2R5RW5jb2Rpbmc6IHRoaXMudXNlQm9keUVuY29kaW5nLFxuICAgICAgICAgICAgd2ViQ29udGFpbmVyOiB0aGlzLndlYkNvbnRhaW5lcixcbiAgICAgICAgICAgIHdlYkNvbnRhaW5lckNvbmZpZzogdGhpcy53ZWJDb250YWluZXJDb25maWcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0s4c0FwcGxpY2F0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbW1hbmRBcmdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFyZ3VtZW50OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFyZ3VtZW50Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29tbWFuZEFyZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29tbWFuZEFyZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Db21tYW5kQXJnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXJndW1lbnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXJndW1lbnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29tbWFuZEFyZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uQ29tbWFuZEFyZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbW1hbmRBcmdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkNvbW1hbmRBcmdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uQ29tbWFuZEFyZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fQ29tbWFuZEFyZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdBcmd1bWVudCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXJndW1lbnQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbmNHQ1RocmVhZHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENvbmNHQ1RocmVhZHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uY0dDVGhyZWFkc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0NvbmNHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29uY0dDVGhyZWFkc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Db25jR0NUaHJlYWRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb25jR0NUaHJlYWRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkNvbmNHQ1RocmVhZHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Db25jR0NUaHJlYWRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0NvbmNHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbVBhcmFtc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3VzdG9tUGFyYW1zUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbVBhcmFtc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0N1c3RvbVBhcmFtc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDdXN0b21QYXJhbXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uQ3VzdG9tUGFyYW1zYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21QYXJhbXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uQ3VzdG9tUGFyYW1zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uQ3VzdG9tUGFyYW1zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0N1c3RvbVBhcmFtc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ09yaWdpbmFsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICAnU3RhcnR1cCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW52c1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFbnZzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVudnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9FbnZzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVudnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uRW52c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRW52c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5FbnZzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uRW52c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9FbnZzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgICdOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGVjUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbW1hbmQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tbWFuZD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFeGVjUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9FeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jb21tYW5kKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkV4ZWNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uRXhlY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXhlY1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5FeGVjYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9FeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ29tbWFuZCc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0cxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5HMUhlYXBSZWdpb25TaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHMUhlYXBSZWdpb25TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkcxSGVhcFJlZ2lvblNpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25HMUhlYXBSZWdpb25TaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0cxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEdDTG9nRmlsZVBhdGhQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEdDTG9nRmlsZVBhdGhQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgR0NMb2dGaWxlUGF0aFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0dDTG9nRmlsZVBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiR0NMb2dGaWxlUGF0aFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5HQ0xvZ0ZpbGVQYXRoYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHQ0xvZ0ZpbGVQYXRoUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVBhdGhgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25HQ0xvZ0ZpbGVQYXRoUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0dDTG9nRmlsZVBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEdDTG9nRmlsZVNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEdDTG9nRmlsZVNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgR0NMb2dGaWxlU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0dDTG9nRmlsZVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiR0NMb2dGaWxlU2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5HQ0xvZ0ZpbGVTaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHQ0xvZ0ZpbGVTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVNpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25HQ0xvZ0ZpbGVTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0dDTG9nRmlsZVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIZWFwRHVtcFBhdGhQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEhlYXBEdW1wUGF0aFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIZWFwRHVtcFBhdGhQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IZWFwRHVtcFBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSGVhcER1bXBQYXRoUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkhlYXBEdW1wUGF0aGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSGVhcER1bXBQYXRoUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkhlYXBEdW1wUGF0aGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkhlYXBEdW1wUGF0aFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9IZWFwRHVtcFBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEh0dHBHZXRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGF0aDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBIZWFkZXJzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBIZWFkZXJzPzogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uSHR0cEhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2NoZW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNjaGVtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwSGVhZGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2hlbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaGVtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2NoZW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNjaGVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSHR0cEdldFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5IdHRwR2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkh0dHBHZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25IdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXRoKSxcbiAgICAgICdIdHRwSGVhZGVycyc6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uSHR0cEhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaHR0cEhlYWRlcnMpLFxuICAgICAgJ1NjaGVtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2NoZW1lKSxcbiAgICAgICdQb3J0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgICdIb3N0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEdldEh0dHBIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEdldEh0dHBIZWFkZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSHR0cEhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIdHRwSGVhZGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5IdHRwSGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEhlYWRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25IdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5pdGlhbEhlYXBTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbml0aWFsSGVhcFNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5pdGlhbEhlYXBTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fSW5pdGlhbEhlYXBTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluaXRpYWxIZWFwU2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Jbml0aWFsSGVhcFNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluaXRpYWxIZWFwU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Jbml0aWFsSGVhcFNpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Jbml0aWFsSGVhcFNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fSW5pdGlhbEhlYXBTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3JpZ2luYWwnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBKYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhIZWFwU2l6ZTogVGhlIG1heGltdW0gaGVhcCBzaXplLiBVbml0OiBNQi4gVmFsdWUgcmFuZ2U6IDAgdG8gKDAuODUgeCBBdmFpbGFibGUgbWVtb3J5IGZvciBFQ1MgaW5zdGFuY2VzIG9mIHRoZSBhcHBsaWNhdGlvbilcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1heEhlYXBTaXplPzogUm9zSzhzQXBwbGljYXRpb24uTWF4SGVhcFNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VHY0xvZ0ZpbGVSb3RhdGlvbjpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZUdjTG9nRmlsZVJvdGF0aW9uPzogUm9zSzhzQXBwbGljYXRpb24uVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjdXN0b21QYXJhbXM6IElmIHRoZSBwcmVjZWRpbmcgb3B0aW9ucyBjYW5ub3QgbWVldCB5b3VyIHJlcXVpcmVtZW50cywgeW91IGNhbiB1c2UgY3VzdG9tIHBhcmFtZXRlcnMuIFNlcGFyYXRlIHBhcmFtZXRlcnMgd2l0aCBzcGFjZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjdXN0b21QYXJhbXM/OiBSb3NLOHNBcHBsaWNhdGlvbi5DdXN0b21QYXJhbXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXJhbGxlbEdjVGhyZWFkczogTnVtYmVyIG9mIHBhcmFsbGVsIHRocmVhZHMgcGFyYWxsZWwgZ2Mgd2lsbCB1c2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXJhbGxlbEdjVGhyZWFkcz86IFJvc0s4c0FwcGxpY2F0aW9uLlBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5pdGlhbEhlYXBTaXplOiBUaGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBoZWFwLiBVbml0OiBNQi4gVGhlIHZhbHVlIDAgaW5kaWNhdGVzIHRoYXQgdGhlIHNpemUgaXMgdW5saW1pdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5pdGlhbEhlYXBTaXplPzogUm9zSzhzQXBwbGljYXRpb24uSW5pdGlhbEhlYXBTaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlOiBXaGV0aGVyIGVuYWJsZSBydWxlIHBhcnNpbmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGU/OiBSb3NLOHNBcHBsaWNhdGlvbi5OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlYWRTdGFja1NpemU6IFRocmVhZCBzdGFjayBzaXplIChLQikuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aHJlYWRTdGFja1NpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5UaHJlYWRTdGFja1NpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdXJ2aXZvclJhdGlvOiBFZGVuXFwvU3Vydml2b3IgTWVtb3J5IFNpemUgUmF0aW8uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdXJ2aXZvclJhdGlvPzogUm9zSzhzQXBwbGljYXRpb24uU3Vydml2b3JSYXRpb1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBlcm1TaXplOiBJbml0aWFsIFBlcm1hbmVudCBHZW5lcmF0aW9uIFNpemUgKE1CKS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBlcm1TaXplPzogUm9zSzhzQXBwbGljYXRpb24uUGVybVNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuZXdTaXplOiBJbml0aWFsIFlvdW5nIEdlbmVyYXRpb24gU2l6ZSAoTUIpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmV3U2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLk5ld1NpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb25jR2NUaHJlYWRzOiBOdW1iZXIgb2YgdGhyZWFkcyBjb25jdXJyZW50IGdjIHdpbGwgdXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29uY0djVGhyZWFkcz86IFJvc0s4c0FwcGxpY2F0aW9uLkNvbmNHQ1RocmVhZHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuZXdSYXRpbzogT2xkXFwvWW91bmcgR2VuZXJhdGlvbiBNZW1vcnkgU2l6ZSBSYXRpby5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5ld1JhdGlvPzogUm9zSzhzQXBwbGljYXRpb24uTmV3UmF0aW9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBnY0xvZ0ZpbGVTaXplOiBHQyBsb2cgZmlsZSBzaXplLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ2NMb2dGaWxlU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhOZXdTaXplOiBUaGUgbWF4aW11bSBzaXplIG9mIHlvdW5nIGdlbmVyYXRpb24uIFVuaXQ6IE1CLiBUaGUgdmFsdWUgbWF4X3VpbnR4IGluZGljYXRlcyB0aGF0IG5vIHVwcGVyIGxpbWl0IGlzIHNwZWNpZmllZCBmb3IgbWVtb3J5IHVzYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4TmV3U2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLk1heE5ld1NpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBnMUhlYXBSZWdpb25TaXplOiBTaXplIG9mIHRoZSBHMSByZWdpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZzFIZWFwUmVnaW9uU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLkcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmludEdjOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJpbnRHYz86IFJvc0s4c0FwcGxpY2F0aW9uLlByaW50R0NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhEaXJlY3RNZW1vcnlTaXplOiBUaGUgbWF4aW11bSBzaXplIG9mIE5JTyBkaXJlY3QgbWVtb3J5LiBVbml0OiBNQi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1heERpcmVjdE1lbW9yeVNpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5NYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4UGVybVNpemU6IFRoZSBtYXhpbXVtIHNpemUgb2YgcGVybWFuZW50IGdlbmVyYXRpb24uIFVuaXQ6IE1CLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4UGVybVNpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5NYXhQZXJtU2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yOiBXaGV0aGVyIGR1bXAgbWVtb3J5IHdoZW4gT09NIG9jY3Vycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yPzogUm9zSzhzQXBwbGljYXRpb24uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZzogV2hldGhlciBlbmFibGUgYXV0b21hdGljIG5hbWVzcGFjZSBwYXJzaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmc/OiBSb3NLOHNBcHBsaWNhdGlvbi5OYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYXBEdW1wUGF0aDogRHVtcCBGaWxlIFBhdGguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBoZWFwRHVtcFBhdGg/OiBSb3NLOHNBcHBsaWNhdGlvbi5IZWFwRHVtcFBhdGhQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBnY0xvZ0ZpbGVQYXRoOiBHQyBsb2cgZGlyZWN0b3J5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ2NMb2dGaWxlUGF0aD86IFJvc0s4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVBhdGhQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmludEdjRGF0ZVN0YW1wczpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByaW50R2NEYXRlU3RhbXBzPzogUm9zSzhzQXBwbGljYXRpb24uUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB5b3VuZ0dhcmJhZ2VDb2xsZWN0b3I6IEl0IGlzIHVzZWQgdG8gY29uZmlndXJlIHlvdW5nIGdlbmVyYXRpb24gZ2FyYmFnZSBjb2xsZWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB5b3VuZ0dhcmJhZ2VDb2xsZWN0b3I/OiBSb3NLOHNBcHBsaWNhdGlvbi5Zb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvbGRHYXJiYWdlQ29sbGVjdG9yOiBJdCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgb2xkIGdlbmVyYXRpb24gZ2FyYmFnZSBjb2xsZWN0b3IuIFlvdSBtdXN0IGNvbmZpZ3VyZSB0aGUgeW91bmcgZ2VuZXJhdGlvbiBnYXJiYWdlIGNvbGxlY3RvciBmaXJzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9sZEdhcmJhZ2VDb2xsZWN0b3I/OiBSb3NLOHNBcHBsaWNhdGlvbi5PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBKYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBKYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0phdmFTdGFydFVwQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhIZWFwU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX01heEhlYXBTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4SGVhcFNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZUdjTG9nRmlsZVJvdGF0aW9uJywgUm9zSzhzQXBwbGljYXRpb25fVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy51c2VHY0xvZ0ZpbGVSb3RhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tUGFyYW1zJywgUm9zSzhzQXBwbGljYXRpb25fQ3VzdG9tUGFyYW1zUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3VzdG9tUGFyYW1zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbGxlbEdjVGhyZWFkcycsIFJvc0s4c0FwcGxpY2F0aW9uX1BhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucGFyYWxsZWxHY1RocmVhZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxIZWFwU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX0luaXRpYWxIZWFwU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluaXRpYWxIZWFwU2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlJywgUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJlYWRTdGFja1NpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9UaHJlYWRTdGFja1NpemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy50aHJlYWRTdGFja1NpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1cnZpdm9yUmF0aW8nLCBSb3NLOHNBcHBsaWNhdGlvbl9TdXJ2aXZvclJhdGlvUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3Vydml2b3JSYXRpbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVybVNpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9QZXJtU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBlcm1TaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXdTaXplJywgUm9zSzhzQXBwbGljYXRpb25fTmV3U2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5ld1NpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmNHY1RocmVhZHMnLCBSb3NLOHNBcHBsaWNhdGlvbl9Db25jR0NUaHJlYWRzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29uY0djVGhyZWFkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV3UmF0aW8nLCBSb3NLOHNBcHBsaWNhdGlvbl9OZXdSYXRpb1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5ld1JhdGlvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnY0xvZ0ZpbGVTaXplJywgUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdjTG9nRmlsZVNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heE5ld1NpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9NYXhOZXdTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4TmV3U2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZzFIZWFwUmVnaW9uU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX0cxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5nMUhlYXBSZWdpb25TaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmludEdjJywgUm9zSzhzQXBwbGljYXRpb25fUHJpbnRHQ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW50R2MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heERpcmVjdE1lbW9yeVNpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9NYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4RGlyZWN0TWVtb3J5U2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4UGVybVNpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9NYXhQZXJtU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1heFBlcm1TaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvcicsIFJvc0s4c0FwcGxpY2F0aW9uX0hlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nJywgUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5uYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhcER1bXBQYXRoJywgUm9zSzhzQXBwbGljYXRpb25fSGVhcER1bXBQYXRoUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGVhcER1bXBQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnY0xvZ0ZpbGVQYXRoJywgUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlUGF0aFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdjTG9nRmlsZVBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW50R2NEYXRlU3RhbXBzJywgUm9zSzhzQXBwbGljYXRpb25fUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wcmludEdjRGF0ZVN0YW1wcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigneW91bmdHYXJiYWdlQ29sbGVjdG9yJywgUm9zSzhzQXBwbGljYXRpb25fWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMueW91bmdHYXJiYWdlQ29sbGVjdG9yKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvbGRHYXJiYWdlQ29sbGVjdG9yJywgUm9zSzhzQXBwbGljYXRpb25fT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9sZEdhcmJhZ2VDb2xsZWN0b3IpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSmF2YVN0YXJ0VXBDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEphdmFTdGFydFVwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkphdmFTdGFydFVwQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdNYXhIZWFwU2l6ZSc6IHJvc0s4c0FwcGxpY2F0aW9uTWF4SGVhcFNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhIZWFwU2l6ZSksXG4gICAgICAnVXNlR0NMb2dGaWxlUm90YXRpb24nOiByb3NLOHNBcHBsaWNhdGlvblVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlR2NMb2dGaWxlUm90YXRpb24pLFxuICAgICAgJ0N1c3RvbVBhcmFtcyc6IHJvc0s4c0FwcGxpY2F0aW9uQ3VzdG9tUGFyYW1zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tUGFyYW1zKSxcbiAgICAgICdQYXJhbGxlbEdDVGhyZWFkcyc6IHJvc0s4c0FwcGxpY2F0aW9uUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXJhbGxlbEdjVGhyZWFkcyksXG4gICAgICAnSW5pdGlhbEhlYXBTaXplJzogcm9zSzhzQXBwbGljYXRpb25Jbml0aWFsSGVhcFNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbml0aWFsSGVhcFNpemUpLFxuICAgICAgJ05hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZSc6IHJvc0s4c0FwcGxpY2F0aW9uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlKSxcbiAgICAgICdUaHJlYWRTdGFja1NpemUnOiByb3NLOHNBcHBsaWNhdGlvblRocmVhZFN0YWNrU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocmVhZFN0YWNrU2l6ZSksXG4gICAgICAnU3Vydml2b3JSYXRpbyc6IHJvc0s4c0FwcGxpY2F0aW9uU3Vydml2b3JSYXRpb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1cnZpdm9yUmF0aW8pLFxuICAgICAgJ1Blcm1TaXplJzogcm9zSzhzQXBwbGljYXRpb25QZXJtU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcm1TaXplKSxcbiAgICAgICdOZXdTaXplJzogcm9zSzhzQXBwbGljYXRpb25OZXdTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV3U2l6ZSksXG4gICAgICAnQ29uY0dDVGhyZWFkcyc6IHJvc0s4c0FwcGxpY2F0aW9uQ29uY0dDVGhyZWFkc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbmNHY1RocmVhZHMpLFxuICAgICAgJ05ld1JhdGlvJzogcm9zSzhzQXBwbGljYXRpb25OZXdSYXRpb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5ld1JhdGlvKSxcbiAgICAgICdHQ0xvZ0ZpbGVTaXplJzogcm9zSzhzQXBwbGljYXRpb25HQ0xvZ0ZpbGVTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2NMb2dGaWxlU2l6ZSksXG4gICAgICAnTWF4TmV3U2l6ZSc6IHJvc0s4c0FwcGxpY2F0aW9uTWF4TmV3U2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heE5ld1NpemUpLFxuICAgICAgJ0cxSGVhcFJlZ2lvblNpemUnOiByb3NLOHNBcHBsaWNhdGlvbkcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5nMUhlYXBSZWdpb25TaXplKSxcbiAgICAgICdQcmludEdDJzogcm9zSzhzQXBwbGljYXRpb25QcmludEdDUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbnRHYyksXG4gICAgICAnTWF4RGlyZWN0TWVtb3J5U2l6ZSc6IHJvc0s4c0FwcGxpY2F0aW9uTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heERpcmVjdE1lbW9yeVNpemUpLFxuICAgICAgJ01heFBlcm1TaXplJzogcm9zSzhzQXBwbGljYXRpb25NYXhQZXJtU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heFBlcm1TaXplKSxcbiAgICAgICdIZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvcic6IHJvc0s4c0FwcGxpY2F0aW9uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvciksXG4gICAgICAnTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmcnOiByb3NLOHNBcHBsaWNhdGlvbk5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmcpLFxuICAgICAgJ0hlYXBEdW1wUGF0aCc6IHJvc0s4c0FwcGxpY2F0aW9uSGVhcER1bXBQYXRoUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhcER1bXBQYXRoKSxcbiAgICAgICdHQ0xvZ0ZpbGVQYXRoJzogcm9zSzhzQXBwbGljYXRpb25HQ0xvZ0ZpbGVQYXRoUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2NMb2dGaWxlUGF0aCksXG4gICAgICAnUHJpbnRHQ0RhdGVTdGFtcHMnOiByb3NLOHNBcHBsaWNhdGlvblByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbnRHY0RhdGVTdGFtcHMpLFxuICAgICAgJ1lvdW5nR2FyYmFnZUNvbGxlY3Rvcic6IHJvc0s4c0FwcGxpY2F0aW9uWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMueW91bmdHYXJiYWdlQ29sbGVjdG9yKSxcbiAgICAgICdPbGRHYXJiYWdlQ29sbGVjdG9yJzogcm9zSzhzQXBwbGljYXRpb25PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub2xkR2FyYmFnZUNvbGxlY3RvciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGl2ZW5lc3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZW91dFNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZW91dFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXhlYzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBleGVjPzogUm9zSzhzQXBwbGljYXRpb24uRXhlY1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluaXRpYWxEZWxheVNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5pdGlhbERlbGF5U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwR2V0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBHZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5IdHRwR2V0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGVyaW9kU2Vjb25kczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwZXJpb2RTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRjcFNvY2tldDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0Y3BTb2NrZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5UY3BTb2NrZXRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmYWlsdXJlVGhyZXNob2xkOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZhaWx1cmVUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VjY2Vzc1RocmVzaG9sZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdWNjZXNzVGhyZXNob2xkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTGl2ZW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTGl2ZW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9MaXZlbmVzc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjJywgUm9zSzhzQXBwbGljYXRpb25fRXhlY1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmV4ZWMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEdldCcsIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5odHRwR2V0KSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RjcFNvY2tldCcsIFJvc0s4c0FwcGxpY2F0aW9uX1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRjcFNvY2tldCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSk7XG4gICAgaWYocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkICYmICh0eXBlb2YgcHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTGl2ZW5lc3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTGl2ZW5lc3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExpdmVuZXNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkxpdmVuZXNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTGl2ZW5lc3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTGl2ZW5lc3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUaW1lb3V0U2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpLFxuICAgICAgJ0V4ZWMnOiByb3NLOHNBcHBsaWNhdGlvbkV4ZWNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5leGVjKSxcbiAgICAgICdJbml0aWFsRGVsYXlTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSxcbiAgICAgICdIdHRwR2V0Jzogcm9zSzhzQXBwbGljYXRpb25IdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cEdldCksXG4gICAgICAnUGVyaW9kU2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyksXG4gICAgICAnVGNwU29ja2V0Jzogcm9zSzhzQXBwbGljYXRpb25UY3BTb2NrZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50Y3BTb2NrZXQpLFxuICAgICAgJ0ZhaWx1cmVUaHJlc2hvbGQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpLFxuICAgICAgJ1N1Y2Nlc3NUaHJlc2hvbGQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIExvY2FsVm9sdW1lUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1vdW50UGF0aDogU3BlY2lmaWVzIHRoZSBwYXRoIHdpdGhpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW91bnRQYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IFNwZWNpZmllcyB0aGUgbW91bnRpbmcgdHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbm9kZVBhdGg6IFNwZWNpZmllcyB0aGUgaG9zdCBwYXRoLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbm9kZVBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBMb2NhbFZvbHVtZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMb2NhbFZvbHVtZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0xvY2FsVm9sdW1lUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW91bnRQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vZGVQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5vZGVQYXRoKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkxvY2FsVm9sdW1lUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkxvY2FsVm9sdW1lYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMb2NhbFZvbHVtZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Mb2NhbFZvbHVtZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkxvY2FsVm9sdW1lUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0xvY2FsVm9sdW1lUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTW91bnRQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb3VudFBhdGgpLFxuICAgICAgJ1R5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgJ05vZGVQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ub2RlUGF0aCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heERpcmVjdE1lbW9yeVNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTWF4RGlyZWN0TWVtb3J5U2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ09yaWdpbmFsJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICAnU3RhcnR1cCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWF4SGVhcFNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1heEhlYXBTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heEhlYXBTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTWF4SGVhcFNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTWF4SGVhcFNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTWF4SGVhcFNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heEhlYXBTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heEhlYXBTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTWF4SGVhcFNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTWF4SGVhcFNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1heE5ld1NpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1heE5ld1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWF4TmV3U2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX01heE5ld1NpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTWF4TmV3U2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhOZXdTaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhOZXdTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heE5ld1NpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25NYXhOZXdTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX01heE5ld1NpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1heFBlcm1TaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNYXhQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX01heFBlcm1TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1heFBlcm1TaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heFBlcm1TaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhQZXJtU2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk1heFBlcm1TaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX01heFBlcm1TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3JpZ2luYWwnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3VudERlc2NzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1vdW50UGF0aDogU3BlY2lmaWVzIHRoZSBwYXRoIHRvIG1vdW50IHRoZSBmaWxlIHN5c3RlbSB0byB0aGUgY29udGFpbmVyIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW91bnRQYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hc1BhdGg6IFNwZWNpZmllcyB0aGUgZmlsZSBzdG9yYWdlIHBhdGguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYXNQYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTW91bnREZXNjc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNb3VudERlc2NzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTW91bnREZXNjc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnRQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vdW50UGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFzUGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYXNQYXRoKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1vdW50RGVzY3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTW91bnREZXNjc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTW91bnREZXNjc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Nb3VudERlc2NzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTW91bnREZXNjc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Nb3VudERlc2NzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTW91bnRQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb3VudFBhdGgpLFxuICAgICAgJ05hc1BhdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hc1BhdGgpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9OYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX05hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ09yaWdpbmFsJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE5ld1JhdGlvUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOZXdSYXRpb1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOZXdSYXRpb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX05ld1JhdGlvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk5ld1JhdGlvUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk5ld1JhdGlvYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOZXdSYXRpb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5OZXdSYXRpb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk5ld1JhdGlvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX05ld1JhdGlvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3JpZ2luYWwnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOZXdTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOZXdTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5ld1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9OZXdTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk5ld1NpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmV3U2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmV3U2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5OZXdTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTmV3U2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9OZXdTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3JpZ2luYWwnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBPbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBPbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk9sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uT2xkR2FyYmFnZUNvbGxlY3RvcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5PbGRHYXJiYWdlQ29sbGVjdG9yYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3JpZ2luYWwnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9QYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QYXJhbGxlbEdDVGhyZWFkc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUGFyYWxsZWxHQ1RocmVhZHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ09yaWdpbmFsJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICAnU3RhcnR1cCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybVNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUGVybVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUGVybVNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUGVybVNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBlcm1TaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUGVybVNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUGVybVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvc3RTdGFydFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleGVjOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4ZWM/OiBSb3NLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRFeGVjUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEdldDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwR2V0PzogUm9zSzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9zdFN0YXJ0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvc3RTdGFydFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXhlYycsIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydEV4ZWNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5leGVjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwR2V0JywgUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmh0dHBHZXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUG9zdFN0YXJ0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBvc3RTdGFydGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9zdFN0YXJ0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBvc3RTdGFydGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblBvc3RTdGFydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdFeGVjJzogcm9zSzhzQXBwbGljYXRpb25Qb3N0U3RhcnRFeGVjUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhlYyksXG4gICAgICAnSHR0cEdldCc6IHJvc0s4c0FwcGxpY2F0aW9uUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBHZXQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvc3RTdGFydEV4ZWNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29tbWFuZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21tYW5kPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBvc3RTdGFydEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9zdFN0YXJ0RXhlY1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydEV4ZWNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmQnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbW1hbmQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUG9zdFN0YXJ0RXhlY1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRFeGVjYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb3N0U3RhcnRFeGVjUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBvc3RTdGFydEV4ZWNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Qb3N0U3RhcnRFeGVjUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydEV4ZWNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb21tYW5kJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXRoOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEhlYWRlcnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEhlYWRlcnM/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5IdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2NoZW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNjaGVtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwSGVhZGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5odHRwSGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2NoZW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zY2hlbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjaGVtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJIVFRQXCIsXCJIVFRQU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2hlbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ob3N0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvc3RTdGFydEh0dHBHZXRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0SHR0cEdldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRIdHRwR2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUGF0aCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGF0aCksXG4gICAgICAnSHR0cEhlYWRlcnMnOiByb3MubGlzdE1hcHBlcihyb3NLOHNBcHBsaWNhdGlvbkh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5odHRwSGVhZGVycyksXG4gICAgICAnU2NoZW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zY2hlbWUpLFxuICAgICAgJ1BvcnQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgJ0hvc3QnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhvc3QpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByZVN0b3BQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXhlYzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBleGVjPzogUm9zSzhzQXBwbGljYXRpb24uUHJlU3RvcEV4ZWNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwR2V0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBHZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5QcmVTdG9wSHR0cEdldFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJlU3RvcFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXhlYycsIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BFeGVjUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXhlYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEdldCcsIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaHR0cEdldCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0V4ZWMnOiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BFeGVjUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhlYyksXG4gICAgICAnSHR0cEdldCc6IHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwR2V0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmVTdG9wRXhlY1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbW1hbmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJlU3RvcEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wRXhlY1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmVTdG9wRXhlY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcEV4ZWNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QcmVTdG9wRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NvbW1hbmQnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb21tYW5kKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmVTdG9wSHR0cEdldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXRoOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEhlYWRlcnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEhlYWRlcnM/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5QcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNjaGVtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzY2hlbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9ydDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb3J0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhvc3Q6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaG9zdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByZVN0b3BIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEhlYWRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2hlbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaGVtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2NoZW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNjaGVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcEh0dHBHZXRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BIdHRwR2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXRoKSxcbiAgICAgICdIdHRwSGVhZGVycyc6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5odHRwSGVhZGVycyksXG4gICAgICAnU2NoZW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zY2hlbWUpLFxuICAgICAgJ1BvcnQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgJ0hvc3QnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhvc3QpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJpbnRHQ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByaW50R0NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbnRHQ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1ByaW50R0NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByaW50R0NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJpbnRHQ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbnRHQ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmludEdDYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJpbnRHQ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QcmludEdDUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3JpZ2luYWwnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICAnU3RhcnR1cCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1ByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmludEdDRGF0ZVN0YW1wc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJpbnRHQ0RhdGVTdGFtcHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ09yaWdpbmFsJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlYWRpbmVzc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0U2Vjb25kczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleGVjOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4ZWM/OiBSb3NLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NFeGVjUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5pdGlhbERlbGF5U2Vjb25kczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbml0aWFsRGVsYXlTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBHZXQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEdldD86IFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwZXJpb2RTZWNvbmRzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBlcmlvZFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGNwU29ja2V0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRjcFNvY2tldD86IFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZhaWx1cmVUaHJlc2hvbGQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmFpbHVyZVRocmVzaG9sZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdWNjZXNzVGhyZXNob2xkOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1Y2Nlc3NUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWFkaW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dFNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dFNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V4ZWMnLCBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NFeGVjUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXhlYykpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbERlbGF5U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbERlbGF5U2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwR2V0JywgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmh0dHBHZXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZFNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZFNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGNwU29ja2V0JywgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMudGNwU29ja2V0KSk7XG4gICAgaWYocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkICYmICh0eXBlb2YgcHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsdXJlVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsdXJlVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1Y2Nlc3NUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1Y2Nlc3NUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZWFkaW5lc3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1RpbWVvdXRTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyksXG4gICAgICAnRXhlYyc6IHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV4ZWMpLFxuICAgICAgJ0luaXRpYWxEZWxheVNlY29uZHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpLFxuICAgICAgJ0h0dHBHZXQnOiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwR2V0KSxcbiAgICAgICdQZXJpb2RTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSxcbiAgICAgICdUY3BTb2NrZXQnOiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRjcFNvY2tldCksXG4gICAgICAnRmFpbHVyZVRocmVzaG9sZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCksXG4gICAgICAnU3VjY2Vzc1RocmVzaG9sZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVhZGluZXNzRXhlY1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbW1hbmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVhZGluZXNzRXhlY1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NFeGVjUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZWFkaW5lc3NFeGVjUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0V4ZWNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc0V4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzRXhlY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc0V4ZWNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NvbW1hbmQnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb21tYW5kKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWFkaW5lc3NIdHRwR2V0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhdGg6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwSGVhZGVyczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwSGVhZGVycz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzY2hlbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NoZW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBIZWFkZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2hlbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaGVtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2NoZW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNjaGVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVhZGluZXNzSHR0cEdldFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NIdHRwR2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXRoKSxcbiAgICAgICdIdHRwSGVhZGVycyc6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSxcbiAgICAgICdTY2hlbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaGVtZSksXG4gICAgICAnUG9ydCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9ydCksXG4gICAgICAnSG9zdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ05hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc1RjcFNvY2tldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc1RjcFNvY2tldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQb3J0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgICdIb3N0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTbHNDb25maWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IFRoZSBjb2xsZWN0aW9uIHR5cGUuIFRoZSBmaWxlIHR5cGUgaXMgZmlsZSBhbmQgdGhlIHN0YW5kYXJkIG91dHB1dCB0eXBlIGlzIHN0ZG91dC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9nRGlyOiBJZiB0aGUgc3RhbmRhcmQgb3V0cHV0IHR5cGUgaXMgdXNlZCwgdGhlIGNvbGxlY3Rpb24gcGF0aCBpcyBzdGRvdXQubG9nLiBJZiB0aGUgZmlsZSB0eXBlIGlzIHVzZWQsIHRoZSBjb2xsZWN0aW9uIHBhdGggaXMgdGhlIHBhdGggb2YgdGhlIGNvbGxlY3RlZCBmaWxlLiBXaWxkY2FyZHMoKikgYXJlIHN1cHBvcnRlZC4gVGhlIGNvbGxlY3Rpb24gcGF0aCBtdXN0IG1hdGNoIHRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uOlxuICAgICAqIF5cXC8oICspXFwvKC4gKileXFwvJC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ0Rpcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsb2dzdG9yZTogVGhlIG5hbWUgb2YgdGhlIExvZ3N0b3JlLiBNYWtlIHN1cmUgdGhhdCB0aGUgbmFtZSBvZiB0aGUgTG9nc3RvcmUgaXMgdW5pcXVlIGluIHRoZSBjbHVzdGVyLiBUaGUgbmFtZSBtdXN0IGNvbXBseSB3aXRoIHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gb25seSBsb3dlcmNhc2UgbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzKF8pLiBUaGUgbmFtZSBtdXN0IHN0YXJ0IGFuZCBlbmQgd2l0aCBhIGxvd2VyY2FzZSBsZXR0ZXIgb3IgYSBkaWdpdC4gVGhlIG5hbWUgbXVzdCBiZSAzIHRvIDYzIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIGVtcHR5LCB0aGUgc3lzdGVtIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGEgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ3N0b3JlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2xzQ29uZmlnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTbHNDb25maWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fU2xzQ29uZmlnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZmlsZVwiLFwic3Rkb3V0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dEaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nRGlyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dzdG9yZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTbHNDb25maWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlNsc0NvbmZpZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNsc0NvbmZpZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uU2xzQ29uZmlnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblNsc0NvbmZpZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fU2xzQ29uZmlnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1R5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgJ0xvZ0Rpcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nRGlyKSxcbiAgICAgICdMb2dzdG9yZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nc3RvcmUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFN1cnZpdm9yUmF0aW9Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFN1cnZpdm9yUmF0aW9Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3Vydml2b3JSYXRpb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1N1cnZpdm9yUmF0aW9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU3Vydml2b3JSYXRpb1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5TdXJ2aXZvclJhdGlvYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTdXJ2aXZvclJhdGlvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlN1cnZpdm9yUmF0aW9gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25TdXJ2aXZvclJhdGlvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1N1cnZpdm9yUmF0aW9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRjcFNvY2tldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRjcFNvY2tldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGNwU29ja2V0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlRjcFNvY2tldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlRjcFNvY2tldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblRjcFNvY2tldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9UY3BTb2NrZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQb3J0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgICdIb3N0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUaHJlYWRTdGFja1NpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRocmVhZFN0YWNrU2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUaHJlYWRTdGFja1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9UaHJlYWRTdGFja1NpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGhyZWFkU3RhY2tTaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlRocmVhZFN0YWNrU2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGhyZWFkU3RhY2tTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlRocmVhZFN0YWNrU2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblRocmVhZFN0YWNrU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9UaHJlYWRTdGFja1NpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgJ1N0YXJ0dXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Vc2VHQ0xvZ0ZpbGVSb3RhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uVXNlR0NMb2dGaWxlUm90YXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlVzZUdDTG9nRmlsZVJvdGF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPcmlnaW5hbCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgICdTdGFydHVwJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBXZWJDb250YWluZXJDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cFBvcnQ6IFRoZSBwb3J0IHJhbmdlIGlzIGZyb20gMTAyNCB0byA2NTUzNS4gVGhlIGFkbWluIHBlcm1pc3Npb24gaXMgY29uZmlndXJlZCBmb3IgdGhlIGNvbnRhaW5lciwgYnV0IHRoZSByb290IHBlcm1pc3Npb24gaXMgcmVxdWlyZWQgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIHBvcnRzIHdpdGggbnVtYmVycyBsZXNzIHRoYW4gMTAyNC4gVGhlcmVmb3JlLCBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAxMDI0IHdpdGhpbiB0aGUgcmFuZ2UuIElmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgODA4MCBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHVyaUVuY29kaW5nOiBUaGUgZW5jb2RpbmcgZm9ybWF0IGZvciBUb21jYXQuIFZhbGlkIHZhbHVlczogVVRGLTgsIElTTy04ODU5LTEsIEdCSywgYW5kIEdCMjMxMi4gSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCBJU08tODg1OS0xIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdXJpRW5jb2Rpbmc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29udGV4dFBhdGg6IFRoZSBjdXN0b20gcGF0aC4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb25seSB3aGVuIHRoZSBDb250ZXh0SW5wdXRUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gY3VzdG9tLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29udGV4dFBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29udGV4dElucHV0VHlwZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gY3VzdG9taXplIHRoZSBhY2Nlc3MgcGF0aCBmb3IgdGhlIGFwcGxpY2F0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogd2FyOiBUaGUgYXBwbGljYXRpb24gYWNjZXNzIHBhdGggaXMgdGhlIG5hbWUgb2YgdGhlIFdBUiBwYWNrYWdlLiBZb3UgZG8gbm90IG5lZWQgdG8gZW50ZXIgYSBjdXN0b20gcGF0aC5cbiAgICAgKiByb290OiBUaGUgYXBwbGljYXRpb24gYWNjZXNzIHBhdGggaXMgXFwvLiBZb3UgZG8gbm90IG5lZWQgdG8gZW50ZXIgYSBjdXN0b20gcGF0aC5cbiAgICAgKiBjdXN0b206IElmIHlvdSBzZWxlY3QgdGhpcyBvcHRpb24sIHlvdSBtdXN0IHNldCBjb250ZXh0UGF0aCB0byBhIGN1c3RvbSBwYXRoLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29udGV4dElucHV0VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VCb2R5RW5jb2Rpbmc6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSBCb2R5RW5jb2RpbmcgZm9yIFVSTC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZUJvZHlFbmNvZGluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmVyWG1sOiBzZXJ2ZXJYbWw6IFRoZSBjb250ZW50IG9mIHRoZSBzZXJ2ZXIueG1sIGZpbGUgY3VzdG9taXplZCBpbiBhZHZhbmNlZCBjb25maWd1cmF0aW9ucy5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIFVzZUFkdmFuY2VkU2VydmVyWG1sIGlzIHNldCB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVyWG1sPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heFRocmVhZHM6IFRoZSBudW1iZXIgb2YgY29ubmVjdGlvbnMgaW4gdGhlIGNvbm5lY3Rpb24gcG9vbC4gRGVmYXVsdCB2YWx1ZTogNDAwLlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgZ3JlYXRseSBhZmZlY3RzIHRoZSBhcHBsaWNhdGlvbiBwZXJmb3JtYW5jZS4gV2UgcmVjb21tZW5kIHRoYXQgeW91IHNldCB0aGlzIHBhcmFtZXRlciB1bmRlciBwcm9mZXNzaW9uYWwgZ3VpZGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhUaHJlYWRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHVzZUFkdmFuY2VkU2VydmVyWG1sOiBTcGVjaWZpZXMgd2hldGhlciB0byB1c2UgYWR2YW5jZWQgY29uZmlndXJhdGlvbnMgdG8gY3VzdG9taXplIHRoZSBzZXJ2ZXIueG1sIGZpbGUuIFdoZW4gdGhlIHByZWNlZGluZyBwYXJhbWV0ZXIgdHlwZSBhbmQgc3BlY2lmaWMgcGFyYW1ldGVycyBjYW5ub3QgbWVldCB5b3VyIHJlcXVpcmVtZW50cywgeW91IGNhbiB1c2UgYWR2YW5jZWQgY29uZmlndXJhdGlvbnMgdG8gZWRpdCB0aGUgc2VydmVyLnhtbCBmaWxlIG9mIFRvbWNhdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZUFkdmFuY2VkU2VydmVyWG1sPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VEZWZhdWx0Q29uZmlnOiBTcGVjaWZpZXMgd2hldGhlciB0byB1c2UgdGhlIGN1c3RvbSBjb25maWd1cmF0aW9uLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gaXMgbm90IHVzZWQsIHdoZXJlYXMgdGhlIHZhbHVlIGZhbHNlIGluZGljYXRlcyB0aGF0IHRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBpcyB1c2VkLiBJZiB0aGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gaXMgbm90IHVzZWQsIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVycyBkbyBub3QgdGFrZSBlZmZlY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VEZWZhdWx0Q29uZmlnPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFdlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXZWJDb250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmh0dHBQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5odHRwUG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFBvcnQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5odHRwUG9ydCxcbiAgICAgICAgICAgIG1pbjogMTAyNCxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmh0dHBQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1cmlFbmNvZGluZycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51cmlFbmNvZGluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGV4dFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGV4dFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRleHRJbnB1dFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGV4dElucHV0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlQm9keUVuY29kaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy51c2VCb2R5RW5jb2RpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlclhtbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJYbWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFRocmVhZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4VGhyZWFkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlQWR2YW5jZWRTZXJ2ZXJYbWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnVzZUFkdmFuY2VkU2VydmVyWG1sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VEZWZhdWx0Q29uZmlnJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy51c2VEZWZhdWx0Q29uZmlnKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIldlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5XZWJDb250YWluZXJDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5XZWJDb250YWluZXJDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnSHR0cFBvcnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBQb3J0KSxcbiAgICAgICdVcmlFbmNvZGluZyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXJpRW5jb2RpbmcpLFxuICAgICAgJ0NvbnRleHRQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250ZXh0UGF0aCksXG4gICAgICAnQ29udGV4dElucHV0VHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGV4dElucHV0VHlwZSksXG4gICAgICAnVXNlQm9keUVuY29kaW5nJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlQm9keUVuY29kaW5nKSxcbiAgICAgICdTZXJ2ZXJYbWwnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZlclhtbCksXG4gICAgICAnTWF4VGhyZWFkcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4VGhyZWFkcyksXG4gICAgICAnVXNlQWR2YW5jZWRTZXJ2ZXJYbWwnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VBZHZhbmNlZFNlcnZlclhtbCksXG4gICAgICAnVXNlRGVmYXVsdENvbmZpZyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZURlZmF1bHRDb25maWcpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFlvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFlvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1lvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJZb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uWW91bmdHYXJiYWdlQ29sbGVjdG9yYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBZb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uWW91bmdHYXJiYWdlQ29sbGVjdG9yYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1lvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ09yaWdpbmFsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICAnU3RhcnR1cCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NLOHNDbHVzdGVyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVkYXMtazhzY2x1c3RlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0s4c0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3NDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgQ1MgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjc0NsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUFzbTogV2hldGhlciBlbmFibGUgQVNNLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUFzbT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2VJZDogVGhlIElEIG9mIHRoZSBuYW1lc3BhY2UgdG8gd2hpY2ggdGhlIGNsdXN0ZXIgdGhhdCB5b3Ugd2FudCB0byBpbXBvcnQgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NLOHNDbHVzdGVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0s4c0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNDbHVzdGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVBc20nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW5hYmxlQXNtKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lc3BhY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lc3BhY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3NDbHVzdGVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3NDbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NzQ2x1c3RlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNzQ2x1c3RlcklkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0s4c0NsdXN0ZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQ2x1c3RlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSzhzQ2x1c3RlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNDbHVzdGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0NsdXN0ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0s4c0NsdXN0ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQ3NDbHVzdGVySWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNzQ2x1c3RlcklkKSxcbiAgICAgICdFbmFibGVBc20nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZUFzbSksXG4gICAgICAnTmFtZXNwYWNlSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWVzcGFjZUlkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFREFTOjpLOHNDbHVzdGVyYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBjbHVzdGVyIG9mIENvbnRhaW5lciBTZXJ2aWNlIGZvciBLdWJlcm5ldGVzIChBQ0spLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBLOHNDbHVzdGVyYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLWs4c2NsdXN0ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0s4c0NsdXN0ZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3Rlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlclR5cGU6IFRoZSB0eXBlIG9mIHRoZSBjbHVzdGVyOlxuMjogRUNTIGNsdXN0ZXJcbjU6IENvbnRhaW5lciBTZXJ2aWNlIEs4cyBjbHVzdGVyIG9yIFNlcnZlcmxlc3MgSzhzIGNsdXN0ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENzQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIEs4cyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3NDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmV0d29ya01vZGU6IE5ldHdvcmsgbm9kZTpcbjE6IENsYXNzaWMgbmV0d29ya1xuMjogVlBDXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrTW9kZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOb2RlTnVtOiBOdW1iZXIgb2Ygbm9kZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOb2RlTnVtOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN1Yk5ldENpZHI6IFN1YiBuZXQgQ0lEUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN1Yk5ldENpZHI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZzd2l0Y2hJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnN3aXRjaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjc0NsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBDUyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjc0NsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUFzbTogV2hldGhlciBlbmFibGUgQVNNLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVBc206IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2VJZDogVGhlIElEIG9mIHRoZSBuYW1lc3BhY2UgdG8gd2hpY2ggdGhlIGNsdXN0ZXIgdGhhdCB5b3Ugd2FudCB0byBpbXBvcnQgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZXNwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NLOHNDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NLOHNDbHVzdGVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJOYW1lID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJUeXBlID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0ckNzQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NzQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtNb2RlID0gdGhpcy5nZXRBdHQoJ05ldHdvcmtNb2RlJyk7XG4gICAgICAgIHRoaXMuYXR0ck5vZGVOdW0gPSB0aGlzLmdldEF0dCgnTm9kZU51bScpO1xuICAgICAgICB0aGlzLmF0dHJTdWJOZXRDaWRyID0gdGhpcy5nZXRBdHQoJ1N1Yk5ldENpZHInKTtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSB0aGlzLmdldEF0dCgnVnBjSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVnN3aXRjaElkID0gdGhpcy5nZXRBdHQoJ1Zzd2l0Y2hJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jc0NsdXN0ZXJJZCA9IHByb3BzLmNzQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmVuYWJsZUFzbSA9IHByb3BzLmVuYWJsZUFzbTtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2VJZCA9IHByb3BzLm5hbWVzcGFjZUlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNzQ2x1c3RlcklkOiB0aGlzLmNzQ2x1c3RlcklkLFxuICAgICAgICAgICAgZW5hYmxlQXNtOiB0aGlzLmVuYWJsZUFzbSxcbiAgICAgICAgICAgIG5hbWVzcGFjZUlkOiB0aGlzLm5hbWVzcGFjZUlkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NLOHNDbHVzdGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zSzhzU2xiQmluZGluZ2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLWs4c3NsYmJpbmRpbmdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NLOHNTbGJCaW5kaW5nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVBvcnRJbmZvczogVGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwb3J0cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlUG9ydEluZm9zOiBBcnJheTxSb3NLOHNTbGJCaW5kaW5nLlNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHlwZTogVGhlIHR5cGUgb2YgdGhlIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBpbnRlcm5ldCBhbmQgaW50cmFuZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlcklkOiBUaGUgSUQgb2YgdGhlIGxvYWQgYmFsYW5jZXIgaW5zdGFuY2UuIElmIHlvdSBsZWF2ZSB0aGlzIHBhcmFtZXRlciBlbXB0eSwgRW50ZXJwcmlzZSBEaXN0cmlidXRlZCBBcHBsaWNhdGlvbiBTZXJ2aWNlIChFREFTKSBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlcyBhbiBTTEIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NoZWR1bGVyOiBUaGUgc2NoZWR1bGluZyBhbGdvcml0aG0uIFZhbGlkIHZhbHVlczogXG4gICAgICogd3JyOiBCYWNrZW5kIHNlcnZlcnMgdGhhdCBoYXZlIGhpZ2hlciB3ZWlnaHRzIHJlY2VpdmUgbW9yZSByZXF1ZXN0cyB0aGFuIHRob3NlIHRoYXQgaGF2ZSBsb3dlciB3ZWlnaHRzLlxuICAgICAqIHJyOiBSZXF1ZXN0cyBhcmUgZGlzdHJpYnV0ZWQgdG8gYmFja2VuZCBzZXJ2ZXJzIGluIHNlcXVlbmNlLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IHJyXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NoZWR1bGVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWNpZmljYXRpb246IFRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwZWNpZmljYXRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSzhzU2xiQmluZGluZ1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NLOHNTbGJCaW5kaW5nUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzU2xiQmluZGluZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50eXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50eXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50eXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJpbnRlcm5ldFwiLFwiaW50cmFuZXRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZWR1bGVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNjaGVkdWxlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3BlY2lmaWNhdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zcGVjaWZpY2F0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2FkQmFsYW5jZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2FkQmFsYW5jZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVBvcnRJbmZvcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlUG9ydEluZm9zKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlUG9ydEluZm9zICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZVBvcnRJbmZvcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VQb3J0SW5mb3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlUG9ydEluZm9zJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VQb3J0SW5mb3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VQb3J0SW5mb3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNTbGJCaW5kaW5nX1NlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuc2VydmljZVBvcnRJbmZvcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NLOHNTbGJCaW5kaW5nUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0s4c1NsYkJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzU2xiQmluZGluZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNTbGJCaW5kaW5nUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NLOHNTbGJCaW5kaW5nUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FwcElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBJZCksXG4gICAgICAnQ2x1c3RlcklkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVySWQpLFxuICAgICAgJ1NlcnZpY2VQb3J0SW5mb3MnOiByb3MubGlzdE1hcHBlcihyb3NLOHNTbGJCaW5kaW5nU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zZXJ2aWNlUG9ydEluZm9zKSxcbiAgICAgICdUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgICdMb2FkQmFsYW5jZXJJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpLFxuICAgICAgJ1NjaGVkdWxlcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2NoZWR1bGVyKSxcbiAgICAgICdTcGVjaWZpY2F0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zcGVjaWZpY2F0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFREFTOjpLOHNTbGJCaW5kaW5nYCwgd2hpY2ggaXMgdXNlZCB0byBiaW5kIGEgU2VydmVyIExvYWQgQmFsYW5jZXIgKFNMQikgaW5zdGFuY2UgdG8gYW4gYXBwbGljYXRpb24gaW4gYSBDb250YWluZXIgU2VydmljZSBmb3IgS3ViZXJuZXRlcyAoQUNLKSBjbHVzdGVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBLOHNTbGJCaW5kaW5nYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLWs4c3NsYmJpbmRpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0s4c1NsYkJpbmRpbmcgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWRkcmVzczogVGhlIGFkZHJlc3Mgb2YgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFkZHJlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDaGFuZ2VPcmRlcklkOiBUaGUgSUQgb2YgdGhlIGNoYW5nZSBwcm9jZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2hhbmdlT3JkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIGxvYWQgYmFsYW5jZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2FkQmFsYW5jZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2FkQmFsYW5jZXJOYW1lOiBUaGUgbmFtZSBvZiBsb2FkIGJhbGFuY2VyIGluc3RhbmNlIGRlZmluZWQgaW4gRURBUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlUG9ydEluZm9zOiBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBvcnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlUG9ydEluZm9zOiBBcnJheTxSb3NLOHNTbGJCaW5kaW5nLlNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHlwZTogVGhlIHR5cGUgb2YgdGhlIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBpbnRlcm5ldCBhbmQgaW50cmFuZXQuXG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIHRoZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLiBJZiB5b3UgbGVhdmUgdGhpcyBwYXJhbWV0ZXIgZW1wdHksIEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZSAoRURBUykgYXV0b21hdGljYWxseSBwdXJjaGFzZXMgYW4gU0xCIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQmFsYW5jZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjaGVkdWxlcjogVGhlIHNjaGVkdWxpbmcgYWxnb3JpdGhtLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqIHdycjogQmFja2VuZCBzZXJ2ZXJzIHRoYXQgaGF2ZSBoaWdoZXIgd2VpZ2h0cyByZWNlaXZlIG1vcmUgcmVxdWVzdHMgdGhhbiB0aG9zZSB0aGF0IGhhdmUgbG93ZXIgd2VpZ2h0cy5cbiAgICAgKiBycjogUmVxdWVzdHMgYXJlIGRpc3RyaWJ1dGVkIHRvIGJhY2tlbmQgc2VydmVycyBpbiBzZXF1ZW5jZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiByclxuICAgICAqL1xuICAgIHB1YmxpYyBzY2hlZHVsZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVjaWZpY2F0aW9uOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiB0aGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3BlY2lmaWNhdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0s4c1NsYkJpbmRpbmdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0s4c1NsYkJpbmRpbmcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFkZHJlc3MgPSB0aGlzLmdldEF0dCgnQWRkcmVzcycpO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDaGFuZ2VPcmRlcklkID0gdGhpcy5nZXRBdHQoJ0NoYW5nZU9yZGVySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSB0aGlzLmdldEF0dCgnTG9hZEJhbGFuY2VySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VyTmFtZSA9IHRoaXMuZ2V0QXR0KCdMb2FkQmFsYW5jZXJOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcElkID0gcHJvcHMuYXBwSWQ7XG4gICAgICAgIHRoaXMuY2x1c3RlcklkID0gcHJvcHMuY2x1c3RlcklkO1xuICAgICAgICB0aGlzLnNlcnZpY2VQb3J0SW5mb3MgPSBwcm9wcy5zZXJ2aWNlUG9ydEluZm9zO1xuICAgICAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICAgICAgICB0aGlzLmxvYWRCYWxhbmNlcklkID0gcHJvcHMubG9hZEJhbGFuY2VySWQ7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gcHJvcHMuc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLnNwZWNpZmljYXRpb24gPSBwcm9wcy5zcGVjaWZpY2F0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcElkOiB0aGlzLmFwcElkLFxuICAgICAgICAgICAgY2x1c3RlcklkOiB0aGlzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIHNlcnZpY2VQb3J0SW5mb3M6IHRoaXMuc2VydmljZVBvcnRJbmZvcyxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiB0aGlzLmxvYWRCYWxhbmNlcklkLFxuICAgICAgICAgICAgc2NoZWR1bGVyOiB0aGlzLnNjaGVkdWxlcixcbiAgICAgICAgICAgIHNwZWNpZmljYXRpb246IHRoaXMuc3BlY2lmaWNhdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSzhzU2xiQmluZGluZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c1NsYkJpbmRpbmcge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGFyZ2V0UG9ydDogVGhlIGJhY2tlbmQgcG9ydC4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFyZ2V0UG9ydDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlclByb3RvY29sOiBUaGUgcHJvdG9jb2wgb2YgbG9hZCBiYWxhbmNlci4gVmFsaWQgdmFsdWVzOiBUQ1AgYW5kIEhUVFBTLiBJZiB0aGUgSFRUUCBwcm90b2NvbCBpcyB1c2VkLCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gVENQLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyUHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjZXJ0SWQ6IFRoZSBJRCBvZiB0aGUgY2VydGlmaWNhdGUuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGlmIHRoZSBIVFRQUyBwcm90b2NvbCBpcyB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2VydElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IFRoZSBmcm9udGVuZCBwb3J0LiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuIEVhY2ggcG9ydCBtdXN0IGJlIHVuaXF1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c1NsYkJpbmRpbmdfU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0UG9ydCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRQb3J0KSk7XG4gICAgaWYocHJvcGVydGllcy50YXJnZXRQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy50YXJnZXRQb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRQb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFyZ2V0UG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGFyZ2V0UG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyUHJvdG9jb2wnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VyUHJvdG9jb2wpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmxvYWRCYWxhbmNlclByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5sb2FkQmFsYW5jZXJQcm90b2NvbCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyUHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5sb2FkQmFsYW5jZXJQcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJUQ1BcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyUHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VyUHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZXJ0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMucG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNTbGJCaW5kaW5nLlNlcnZpY2VQb3J0SW5mb3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzU2xiQmluZGluZy5TZXJ2aWNlUG9ydEluZm9zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c1NsYkJpbmRpbmdTZXJ2aWNlUG9ydEluZm9zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c1NsYkJpbmRpbmdfU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1RhcmdldFBvcnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFBvcnQpLFxuICAgICAgJ0xvYWRCYWxhbmNlclByb3RvY29sJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2FkQmFsYW5jZXJQcm90b2NvbCksXG4gICAgICAnQ2VydElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0SWQpLFxuICAgICAgJ1BvcnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVXNlckRlZmluZVJlZ2lvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLXVzZXJkZWZpbmVyZWdpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbk5hbWU6IExvZ2ljYWwgcmVnaW9uIChvciBuYW1lc3BhY2UpIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uVGFnOiBMb2dpYyByZWdpb24gKG9yIG5hbWVzcGFjZSkgSUQgKGZvcm1hdDogXCJwaHlzaWNhbCByZWdpb24gSUQ6IGxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIsIG9yIFwibG9naWNhbCB6b25lIGlkZW50aWZpZXJcIilcbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25UYWc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWJ1Z0VuYWJsZTogV2hldGhlciBkZWJ1ZyBpcyBlbmFibGVcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWJ1Z0VuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IExvZ2ljIHJlZ2lvbiAob3IgbmFtZXNwYWNlKSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZ2lvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uVGFnJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZ2lvblRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uVGFnJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZ2lvblRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVidWdFbmFibGUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlYnVnRW5hYmxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnUmVnaW9uTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uTmFtZSksXG4gICAgICAnUmVnaW9uVGFnJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWdpb25UYWcpLFxuICAgICAgJ0RlYnVnRW5hYmxlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVidWdFbmFibGUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIG9yIGVkaXQgYSBjdXN0b20gbmFtZXNwYWNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBVc2VyRGVmaW5lUmVnaW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLXVzZXJkZWZpbmVyZWdpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1VzZXJEZWZpbmVSZWdpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmVsb25nUmVnaW9uOiBVbmRlciB0aGUgcGh5c2ljYWwgcmVnaW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCZWxvbmdSZWdpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVidWdFbmFibGU6IFdoZXRoZXIgZGVidWcgaXMgZW5hYmxlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWJ1Z0VuYWJsZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJZDogUmVzb3VyY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlZ2lvbk5hbWU6IFJlZ2lvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWdpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogVXNlciBhY2NvdW50IElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbk5hbWU6IExvZ2ljYWwgcmVnaW9uIChvciBuYW1lc3BhY2UpIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvblRhZzogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIElEIChmb3JtYXQ6IFwicGh5c2ljYWwgcmVnaW9uIElEOiBsb2dpY2FsIHpvbmUgaWRlbnRpZmllclwiLCBvciBcImxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIpXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvblRhZzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlYnVnRW5hYmxlOiBXaGV0aGVyIGRlYnVnIGlzIGVuYWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBkZWJ1Z0VuYWJsZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVXNlckRlZmluZVJlZ2lvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlckRlZmluZVJlZ2lvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQmVsb25nUmVnaW9uID0gdGhpcy5nZXRBdHQoJ0JlbG9uZ1JlZ2lvbicpO1xuICAgICAgICB0aGlzLmF0dHJEZWJ1Z0VuYWJsZSA9IHRoaXMuZ2V0QXR0KCdEZWJ1Z0VuYWJsZScpO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHRoaXMuZ2V0QXR0KCdJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZWdpb25OYW1lID0gdGhpcy5nZXRBdHQoJ1JlZ2lvbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcklkID0gdGhpcy5nZXRBdHQoJ1VzZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5yZWdpb25OYW1lID0gcHJvcHMucmVnaW9uTmFtZTtcbiAgICAgICAgdGhpcy5yZWdpb25UYWcgPSBwcm9wcy5yZWdpb25UYWc7XG4gICAgICAgIHRoaXMuZGVidWdFbmFibGUgPSBwcm9wcy5kZWJ1Z0VuYWJsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlZ2lvbk5hbWU6IHRoaXMucmVnaW9uTmFtZSxcbiAgICAgICAgICAgIHJlZ2lvblRhZzogdGhpcy5yZWdpb25UYWcsXG4gICAgICAgICAgICBkZWJ1Z0VuYWJsZTogdGhpcy5kZWJ1Z0VuYWJsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=