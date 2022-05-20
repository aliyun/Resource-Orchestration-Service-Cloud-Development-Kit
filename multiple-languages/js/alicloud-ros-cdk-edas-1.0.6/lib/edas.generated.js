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
        ApplicationName: ros.stringToRosTemplate(properties.applicationName),
        ClusterId: ros.stringToRosTemplate(properties.clusterId),
        BuildPackId: ros.numberToRosTemplate(properties.buildPackId),
        ComponentIds: ros.stringToRosTemplate(properties.componentIds),
        Description: ros.stringToRosTemplate(properties.description),
        EcuInfo: ros.stringToRosTemplate(properties.ecuInfo),
        HealthCheckURL: ros.stringToRosTemplate(properties.healthCheckUrl),
        LogicalRegionId: ros.stringToRosTemplate(properties.logicalRegionId),
        PackageType: ros.stringToRosTemplate(properties.packageType),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::Application`
 */
class RosApplication extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::Application`.
     *
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
        ClusterName: ros.stringToRosTemplate(properties.clusterName),
        ClusterType: ros.numberToRosTemplate(properties.clusterType),
        NetworkMode: ros.numberToRosTemplate(properties.networkMode),
        LogicalRegionId: ros.stringToRosTemplate(properties.logicalRegionId),
        OversoldFactor: ros.numberToRosTemplate(properties.oversoldFactor),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::Cluster`
 */
class RosCluster extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
     *
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
        ClusterId: ros.stringToRosTemplate(properties.clusterId),
        InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
        Password: ros.stringToRosTemplate(properties.password),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::ClusterMember`
 */
class RosClusterMember extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::ClusterMember`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosClusterMember.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterMemberIds = this.getAtt('ClusterMemberIds');
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
        AppId: ros.stringToRosTemplate(properties.appId),
        GroupName: ros.stringToRosTemplate(properties.groupName),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::DeployGroup`
 */
class RosDeployGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::DeployGroup`.
     *
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
        AppName: ros.stringToRosTemplate(properties.appName),
        ClusterId: ros.stringToRosTemplate(properties.clusterId),
        ApplicationDescription: ros.stringToRosTemplate(properties.applicationDescription),
        Command: ros.stringToRosTemplate(properties.command),
        CommandArgs: ros.listMapper(rosK8sApplicationCommandArgsPropertyToRosTemplate)(properties.commandArgs),
        DeployAcrossNodes: ros.booleanToRosTemplate(properties.deployAcrossNodes),
        DeployAcrossZones: ros.booleanToRosTemplate(properties.deployAcrossZones),
        EdasContainerVersion: ros.stringToRosTemplate(properties.edasContainerVersion),
        EnableAhas: ros.booleanToRosTemplate(properties.enableAhas),
        Envs: ros.listMapper(rosK8sApplicationEnvsPropertyToRosTemplate)(properties.envs),
        ImageUrl: ros.stringToRosTemplate(properties.imageUrl),
        InternetSlbId: ros.stringToRosTemplate(properties.internetSlbId),
        InternetSlbPort: ros.numberToRosTemplate(properties.internetSlbPort),
        InternetSlbProtocol: ros.stringToRosTemplate(properties.internetSlbProtocol),
        InternetTargetPort: ros.numberToRosTemplate(properties.internetTargetPort),
        IntranetSlbId: ros.stringToRosTemplate(properties.intranetSlbId),
        IntranetSlbPort: ros.numberToRosTemplate(properties.intranetSlbPort),
        IntranetSlbProtocol: ros.stringToRosTemplate(properties.intranetSlbProtocol),
        IntranetTargetPort: ros.numberToRosTemplate(properties.intranetTargetPort),
        IsMultilingualApp: ros.booleanToRosTemplate(properties.isMultilingualApp),
        JavaStartUpConfig: rosK8sApplicationJavaStartUpConfigPropertyToRosTemplate(properties.javaStartUpConfig),
        JDK: ros.stringToRosTemplate(properties.jdk),
        LimitCpu: ros.numberToRosTemplate(properties.limitCpu),
        LimitMem: ros.numberToRosTemplate(properties.limitMem),
        Liveness: rosK8sApplicationLivenessPropertyToRosTemplate(properties.liveness),
        LocalVolume: ros.listMapper(rosK8sApplicationLocalVolumePropertyToRosTemplate)(properties.localVolume),
        LogicalRegionId: ros.stringToRosTemplate(properties.logicalRegionId),
        MountDescs: ros.listMapper(rosK8sApplicationMountDescsPropertyToRosTemplate)(properties.mountDescs),
        Namespace: ros.stringToRosTemplate(properties.namespace),
        NasId: ros.stringToRosTemplate(properties.nasId),
        PackageType: ros.stringToRosTemplate(properties.packageType),
        PackageUrl: ros.stringToRosTemplate(properties.packageUrl),
        PackageVersion: ros.stringToRosTemplate(properties.packageVersion),
        PostStart: rosK8sApplicationPostStartPropertyToRosTemplate(properties.postStart),
        PreStop: rosK8sApplicationPreStopPropertyToRosTemplate(properties.preStop),
        Readiness: rosK8sApplicationReadinessPropertyToRosTemplate(properties.readiness),
        Replicas: ros.numberToRosTemplate(properties.replicas),
        RepoId: ros.stringToRosTemplate(properties.repoId),
        RequestsCpu: ros.numberToRosTemplate(properties.requestsCpu),
        RequestsMem: ros.numberToRosTemplate(properties.requestsMem),
        RuntimeClassName: ros.stringToRosTemplate(properties.runtimeClassName),
        SlsConfigs: ros.listMapper(rosK8sApplicationSlsConfigsPropertyToRosTemplate)(properties.slsConfigs),
        StorageType: ros.stringToRosTemplate(properties.storageType),
        Timeout: ros.numberToRosTemplate(properties.timeout),
        UriEncoding: ros.stringToRosTemplate(properties.uriEncoding),
        UseBodyEncoding: ros.booleanToRosTemplate(properties.useBodyEncoding),
        WebContainer: ros.stringToRosTemplate(properties.webContainer),
        WebContainerConfig: rosK8sApplicationWebContainerConfigPropertyToRosTemplate(properties.webContainerConfig),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::K8sApplication`
 */
class RosK8sApplication extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::K8sApplication`.
     *
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
        Argument: ros.stringToRosTemplate(properties.argument),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.stringToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Value: ros.stringToRosTemplate(properties.value),
        Name: ros.stringToRosTemplate(properties.name),
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
        Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.stringToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.booleanToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.stringToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Path: ros.stringToRosTemplate(properties.path),
        HttpHeaders: ros.listMapper(rosK8sApplicationHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        Scheme: ros.stringToRosTemplate(properties.scheme),
        Port: ros.stringToRosTemplate(properties.port),
        Host: ros.stringToRosTemplate(properties.host),
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
        Value: ros.stringToRosTemplate(properties.value),
        Name: ros.stringToRosTemplate(properties.name),
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
        Value: ros.stringToRosTemplate(properties.value),
        Name: ros.stringToRosTemplate(properties.name),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        MaxHeapSize: rosK8sApplicationMaxHeapSizePropertyToRosTemplate(properties.maxHeapSize),
        UseGCLogFileRotation: rosK8sApplicationUseGCLogFileRotationPropertyToRosTemplate(properties.useGcLogFileRotation),
        CustomParams: rosK8sApplicationCustomParamsPropertyToRosTemplate(properties.customParams),
        ParallelGCThreads: rosK8sApplicationParallelGCThreadsPropertyToRosTemplate(properties.parallelGcThreads),
        InitialHeapSize: rosK8sApplicationInitialHeapSizePropertyToRosTemplate(properties.initialHeapSize),
        NacosUseEndpointParsingRule: rosK8sApplicationNacosUseEndpointParsingRulePropertyToRosTemplate(properties.nacosUseEndpointParsingRule),
        ThreadStackSize: rosK8sApplicationThreadStackSizePropertyToRosTemplate(properties.threadStackSize),
        SurvivorRatio: rosK8sApplicationSurvivorRatioPropertyToRosTemplate(properties.survivorRatio),
        PermSize: rosK8sApplicationPermSizePropertyToRosTemplate(properties.permSize),
        NewSize: rosK8sApplicationNewSizePropertyToRosTemplate(properties.newSize),
        ConcGCThreads: rosK8sApplicationConcGCThreadsPropertyToRosTemplate(properties.concGcThreads),
        NewRatio: rosK8sApplicationNewRatioPropertyToRosTemplate(properties.newRatio),
        GCLogFileSize: rosK8sApplicationGCLogFileSizePropertyToRosTemplate(properties.gcLogFileSize),
        MaxNewSize: rosK8sApplicationMaxNewSizePropertyToRosTemplate(properties.maxNewSize),
        G1HeapRegionSize: rosK8sApplicationG1HeapRegionSizePropertyToRosTemplate(properties.g1HeapRegionSize),
        PrintGC: rosK8sApplicationPrintGCPropertyToRosTemplate(properties.printGc),
        MaxDirectMemorySize: rosK8sApplicationMaxDirectMemorySizePropertyToRosTemplate(properties.maxDirectMemorySize),
        MaxPermSize: rosK8sApplicationMaxPermSizePropertyToRosTemplate(properties.maxPermSize),
        HeapDumpOnOutOfMemoryError: rosK8sApplicationHeapDumpOnOutOfMemoryErrorPropertyToRosTemplate(properties.heapDumpOnOutOfMemoryError),
        NacosUseCloudNamespaceParsing: rosK8sApplicationNacosUseCloudNamespaceParsingPropertyToRosTemplate(properties.nacosUseCloudNamespaceParsing),
        HeapDumpPath: rosK8sApplicationHeapDumpPathPropertyToRosTemplate(properties.heapDumpPath),
        GCLogFilePath: rosK8sApplicationGCLogFilePathPropertyToRosTemplate(properties.gcLogFilePath),
        PrintGCDateStamps: rosK8sApplicationPrintGCDateStampsPropertyToRosTemplate(properties.printGcDateStamps),
        YoungGarbageCollector: rosK8sApplicationYoungGarbageCollectorPropertyToRosTemplate(properties.youngGarbageCollector),
        OldGarbageCollector: rosK8sApplicationOldGarbageCollectorPropertyToRosTemplate(properties.oldGarbageCollector),
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
        TimeoutSeconds: ros.numberToRosTemplate(properties.timeoutSeconds),
        Exec: rosK8sApplicationExecPropertyToRosTemplate(properties.exec),
        InitialDelaySeconds: ros.numberToRosTemplate(properties.initialDelaySeconds),
        HttpGet: rosK8sApplicationHttpGetPropertyToRosTemplate(properties.httpGet),
        PeriodSeconds: ros.numberToRosTemplate(properties.periodSeconds),
        TcpSocket: rosK8sApplicationTcpSocketPropertyToRosTemplate(properties.tcpSocket),
        FailureThreshold: ros.numberToRosTemplate(properties.failureThreshold),
        SuccessThreshold: ros.numberToRosTemplate(properties.successThreshold),
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
        MountPath: ros.stringToRosTemplate(properties.mountPath),
        Type: ros.stringToRosTemplate(properties.type),
        NodePath: ros.stringToRosTemplate(properties.nodePath),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        MountPath: ros.stringToRosTemplate(properties.mountPath),
        NasPath: ros.stringToRosTemplate(properties.nasPath),
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
        Original: ros.booleanToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.booleanToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.stringToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Exec: rosK8sApplicationPostStartExecPropertyToRosTemplate(properties.exec),
        HttpGet: rosK8sApplicationPostStartHttpGetPropertyToRosTemplate(properties.httpGet),
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
        Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
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
        Path: ros.stringToRosTemplate(properties.path),
        HttpHeaders: ros.listMapper(rosK8sApplicationHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        Scheme: ros.stringToRosTemplate(properties.scheme),
        Port: ros.stringToRosTemplate(properties.port),
        Host: ros.stringToRosTemplate(properties.host),
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
        Exec: rosK8sApplicationPreStopExecPropertyToRosTemplate(properties.exec),
        HttpGet: rosK8sApplicationPreStopHttpGetPropertyToRosTemplate(properties.httpGet),
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
        Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
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
        Path: ros.stringToRosTemplate(properties.path),
        HttpHeaders: ros.listMapper(rosK8sApplicationPreStopHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        Scheme: ros.stringToRosTemplate(properties.scheme),
        Port: ros.stringToRosTemplate(properties.port),
        Host: ros.stringToRosTemplate(properties.host),
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
        Value: ros.stringToRosTemplate(properties.value),
        Name: ros.stringToRosTemplate(properties.name),
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
        Original: ros.booleanToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.booleanToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        TimeoutSeconds: ros.numberToRosTemplate(properties.timeoutSeconds),
        Exec: rosK8sApplicationReadinessExecPropertyToRosTemplate(properties.exec),
        InitialDelaySeconds: ros.numberToRosTemplate(properties.initialDelaySeconds),
        HttpGet: rosK8sApplicationReadinessHttpGetPropertyToRosTemplate(properties.httpGet),
        PeriodSeconds: ros.numberToRosTemplate(properties.periodSeconds),
        TcpSocket: rosK8sApplicationReadinessTcpSocketPropertyToRosTemplate(properties.tcpSocket),
        FailureThreshold: ros.numberToRosTemplate(properties.failureThreshold),
        SuccessThreshold: ros.numberToRosTemplate(properties.successThreshold),
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
        Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
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
        Path: ros.stringToRosTemplate(properties.path),
        HttpHeaders: ros.listMapper(rosK8sApplicationReadinessHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
        Scheme: ros.stringToRosTemplate(properties.scheme),
        Port: ros.stringToRosTemplate(properties.port),
        Host: ros.stringToRosTemplate(properties.host),
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
        Value: ros.stringToRosTemplate(properties.value),
        Name: ros.stringToRosTemplate(properties.name),
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
        Port: ros.stringToRosTemplate(properties.port),
        Host: ros.stringToRosTemplate(properties.host),
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
        Type: ros.stringToRosTemplate(properties.type),
        LogDir: ros.stringToRosTemplate(properties.logDir),
        Logstore: ros.stringToRosTemplate(properties.logstore),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Port: ros.stringToRosTemplate(properties.port),
        Host: ros.stringToRosTemplate(properties.host),
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
        Original: ros.numberToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        Original: ros.booleanToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        HttpPort: ros.numberToRosTemplate(properties.httpPort),
        UriEncoding: ros.stringToRosTemplate(properties.uriEncoding),
        ContextPath: ros.stringToRosTemplate(properties.contextPath),
        ContextInputType: ros.stringToRosTemplate(properties.contextInputType),
        UseBodyEncoding: ros.booleanToRosTemplate(properties.useBodyEncoding),
        ServerXml: ros.stringToRosTemplate(properties.serverXml),
        MaxThreads: ros.numberToRosTemplate(properties.maxThreads),
        UseAdvancedServerXml: ros.booleanToRosTemplate(properties.useAdvancedServerXml),
        UseDefaultConfig: ros.booleanToRosTemplate(properties.useDefaultConfig),
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
        Original: ros.stringToRosTemplate(properties.original),
        Startup: ros.stringToRosTemplate(properties.startup),
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
        CsClusterId: ros.stringToRosTemplate(properties.csClusterId),
        EnableAsm: ros.stringToRosTemplate(properties.enableAsm),
        NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::K8sCluster`
 */
class RosK8sCluster extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::K8sCluster`.
     *
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
        AppId: ros.stringToRosTemplate(properties.appId),
        ClusterId: ros.stringToRosTemplate(properties.clusterId),
        ServicePortInfos: ros.listMapper(rosK8sSlbBindingServicePortInfosPropertyToRosTemplate)(properties.servicePortInfos),
        Type: ros.stringToRosTemplate(properties.type),
        LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
        Scheduler: ros.stringToRosTemplate(properties.scheduler),
        Specification: ros.stringToRosTemplate(properties.specification),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::K8sSlbBinding`
 */
class RosK8sSlbBinding extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::K8sSlbBinding`.
     *
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
        TargetPort: ros.numberToRosTemplate(properties.targetPort),
        LoadBalancerProtocol: ros.stringToRosTemplate(properties.loadBalancerProtocol),
        CertId: ros.stringToRosTemplate(properties.certId),
        Port: ros.numberToRosTemplate(properties.port),
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
        RegionName: ros.stringToRosTemplate(properties.regionName),
        RegionTag: ros.stringToRosTemplate(properties.regionTag),
        DebugEnable: ros.booleanToRosTemplate(properties.debugEnable),
        Description: ros.stringToRosTemplate(properties.description),
    };
}
/**
 * A ROS template type:  `ALIYUN::EDAS::UserDefineRegion`
 */
class RosUserDefineRegion extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EDAS::UserDefineRegion`.
     *
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRhcy5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGFzLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBOEQ5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLDRCQUE0QixDQUFDLFVBQWU7SUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUcsSUFBRyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUM5SCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEUsSUFBSSxFQUFF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S0FBMkI7UUFDbEQsT0FBTyxxQ0FBcUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7QUE1Rkwsa0RBNkZDO0FBNUZHOztHQUVHO0FBQ29CLDBDQUFzQixHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6OkFwcGxpY2F0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FwcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcGxpY2F0aW9uTmFtZTogVGhlIGFwcGxpY2F0aW9uIG5hbWUgKG9ubHkgYWxsb3cgdGhlIHVzZSBvZiBudW1iZXJzLCBsZXR0ZXJzLCAtLCBfLCB1cCB0byAzNiBjaGFyYWN0ZXJzKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCBvZiBFQ1MgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWlsZFBhY2tJZDogRURBUy1Db250YWluZXIgY29uc3RydWN0IGEgcGFja2V0IG51bWJlciAoYXZhaWxhYmxlIHZlcnNpb24gbGlzdCBhY3F1aXJlZCB0aHJvdWdoIHRoZSBMaXN0QnVpbGRQYWNrIEFQSSAoQ29uZmlnSWQgb2YgcmVzcG9uc2UpIG9yIFwiY29udGFpbmVyIHZlcnNpb25cIiB0YWJsZSBcIkJ1aWxkaW5nIHBhY2tldCBudW1iZXJcIiBjb2x1bW4gYWNxdWlzaXRpb24pLiBXaGVuIGNyZWF0aW5nIEhTRiBhcHBsaWNhdGlvbiwgdGhpcyBwYXJhbWV0ZXIgbXVzdCBiZSBzcGVjaWZpZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBidWlsZFBhY2tJZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21wb25lbnRJZHM6IEFwcGxpY2F0aW9uIGNvbXBvbmVudCBJRCAoYXZhaWxhYmxlIHRocm91Z2ggdGhlIHF1ZXJ5IGludGVyZmFjZSB0byBvYnRhaW4gYSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gdGhlIGludGVyZmFjZSBMaXN0Q29tcG9uZW50cyksIHdoZW4gY3JlYXRpbmcgdGhlIGFwcGxpY2F0aW9uIHJ1bnRpbWUgZW52aXJvbm1lbnQgdXNpbmcgQXBhY2hlIFRvbWNhdCAod2FyIHBhY2tldCBmb3JtYXQgRHViYm9cbiAgICAgKiBBcHBsaWNhdGlvbiByZXF1aXJlZCkgb3Igc3RhbmRhcmQgSmF2YSBhcHBsaWNhdGlvbiAoamFyIHBhY2thZ2UgZm9ybWF0IFNwcmluZyBCb290IC8gU3ByaW5nIENsb3VkIGFwcGxpY2F0aW9ucyByZXF1aXJlKSB5b3UgbmVlZCB0byBzcGVjaWZ5IHdoZW4gdGhlIG9wZXJhdGluZyBlbnZpcm9ubWVudC4gQ29tbW9ubHkgdXNlZCBhcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgYW5kIG1lYW5pbmc6XG4gICAgICogNCByZXByZXNlbnRzIEFwYWNoZSBUb21jYXQgNy4wLjkxLDcgcmVwcmVzZW50ZWQgQXBhY2hlIFRvbWNhdCA4LjUuNDIsNSByZXByZXNlbnRlZCBPcGVuSkRLIDEuOC54LCA2IHJlcHJlc2VudHMgT3BlbkpES1xuICAgICAqIDEuNy54XG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tcG9uZW50SWRzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGl2ZSBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVjdUluZm86IE1hY2hpbmUgY2FwYWNpdHkgaXMgbmVlZGVkIGVjdV9pZCAoRUNTIEV4YW1wbGVzIGludHJvZHVjaW5nIGFub3RoZXIgdW5pcXVlIGlkZW50aXR5IEVEQVMgRURBUyksIHRoZSBwbHVyYWxpdHkgb2YgXCIsXCIgc2VwYXJhdGVkIChieSBxdWVyeWluZyBMaXN0U2NhbGVPdXRFY3Ugd2hlcmVpbiBlY3VfaWRcbiAgICAgKiBJbnRlcmZhY2UgdG8gb2J0YWluKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlY3VJbmZvPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrVXJsOiBBcHBsaWNhdGlvbiBIZWFsdGggQ2hlY2sgVVJMXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naWNhbFJlZ2lvbklkOiBOYW1lc3BhY2UgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpY2FsUmVnaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVR5cGU6IEFwcGxpY2F0aW9uIHBhY2tldCBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlczogd2FyIG9yIGphclxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBvbmVudElkcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21wb25lbnRJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ2ljYWxSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcGxpY2F0aW9uTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcHBsaWNhdGlvbk5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcGxpY2F0aW9uTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hcHBsaWNhdGlvbk5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAzNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwbGljYXRpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VjdUluZm8nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWN1SW5mbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhbHRoQ2hlY2tVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wYWNrYWdlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFja2FnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYWNrYWdlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJ3YXJcIixcImphclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhY2thZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWlsZFBhY2tJZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5idWlsZFBhY2tJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBcHBsaWNhdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXBwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FwcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQXBwbGljYXRpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSksXG4gICAgICBDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgIEJ1aWxkUGFja0lkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1aWxkUGFja0lkKSxcbiAgICAgIENvbXBvbmVudElkczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb21wb25lbnRJZHMpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgRWN1SW5mbzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lY3VJbmZvKSxcbiAgICAgIEhlYWx0aENoZWNrVVJMOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhlYWx0aENoZWNrVXJsKSxcbiAgICAgIExvZ2ljYWxSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpLFxuICAgICAgUGFja2FnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFja2FnZVR5cGUpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBJZDogQXBwbGljYXRpb24gSWQsIGEgdW5pcXVlIGlkZW50aWZpZXIgRURBUyBhcHBsaWNhdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9ydDogQXBwbGljYXRpb24gcG9ydFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwbGljYXRpb25OYW1lOiBUaGUgYXBwbGljYXRpb24gbmFtZSAob25seSBhbGxvdyB0aGUgdXNlIG9mIG51bWJlcnMsIGxldHRlcnMsIC0sIF8sIHVwIHRvIDM2IGNoYXJhY3RlcnMpXG4gICAgICovXG4gICAgcHVibGljIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCBvZiBFQ1MgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVpbGRQYWNrSWQ6IEVEQVMtQ29udGFpbmVyIGNvbnN0cnVjdCBhIHBhY2tldCBudW1iZXIgKGF2YWlsYWJsZSB2ZXJzaW9uIGxpc3QgYWNxdWlyZWQgdGhyb3VnaCB0aGUgTGlzdEJ1aWxkUGFjayBBUEkgKENvbmZpZ0lkIG9mIHJlc3BvbnNlKSBvciBcImNvbnRhaW5lciB2ZXJzaW9uXCIgdGFibGUgXCJCdWlsZGluZyBwYWNrZXQgbnVtYmVyXCIgY29sdW1uIGFjcXVpc2l0aW9uKS4gV2hlbiBjcmVhdGluZyBIU0YgYXBwbGljYXRpb24sIHRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc3BlY2lmaWVkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkUGFja0lkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tcG9uZW50SWRzOiBBcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgKGF2YWlsYWJsZSB0aHJvdWdoIHRoZSBxdWVyeSBpbnRlcmZhY2UgdG8gb2J0YWluIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBpbnRlcmZhY2UgTGlzdENvbXBvbmVudHMpLCB3aGVuIGNyZWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBydW50aW1lIGVudmlyb25tZW50IHVzaW5nIEFwYWNoZSBUb21jYXQgKHdhciBwYWNrZXQgZm9ybWF0IER1YmJvXG4gICAgICogQXBwbGljYXRpb24gcmVxdWlyZWQpIG9yIHN0YW5kYXJkIEphdmEgYXBwbGljYXRpb24gKGphciBwYWNrYWdlIGZvcm1hdCBTcHJpbmcgQm9vdCAvIFNwcmluZyBDbG91ZCBhcHBsaWNhdGlvbnMgcmVxdWlyZSkgeW91IG5lZWQgdG8gc3BlY2lmeSB3aGVuIHRoZSBvcGVyYXRpbmcgZW52aXJvbm1lbnQuIENvbW1vbmx5IHVzZWQgYXBwbGljYXRpb24gY29tcG9uZW50IElEIGFuZCBtZWFuaW5nOlxuICAgICAqIDQgcmVwcmVzZW50cyBBcGFjaGUgVG9tY2F0IDcuMC45MSw3IHJlcHJlc2VudGVkIEFwYWNoZSBUb21jYXQgOC41LjQyLDUgcmVwcmVzZW50ZWQgT3BlbkpESyAxLjgueCwgNiByZXByZXNlbnRzIE9wZW5KREtcbiAgICAgKiAxLjcueFxuICAgICAqL1xuICAgIHB1YmxpYyBjb21wb25lbnRJZHM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpdmUgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlY3VJbmZvOiBNYWNoaW5lIGNhcGFjaXR5IGlzIG5lZWRlZCBlY3VfaWQgKEVDUyBFeGFtcGxlcyBpbnRyb2R1Y2luZyBhbm90aGVyIHVuaXF1ZSBpZGVudGl0eSBFREFTIEVEQVMpLCB0aGUgcGx1cmFsaXR5IG9mIFwiLFwiIHNlcGFyYXRlZCAoYnkgcXVlcnlpbmcgTGlzdFNjYWxlT3V0RWN1IHdoZXJlaW4gZWN1X2lkXG4gICAgICogSW50ZXJmYWNlIHRvIG9idGFpbikuXG4gICAgICovXG4gICAgcHVibGljIGVjdUluZm86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoZWFsdGhDaGVja1VybDogQXBwbGljYXRpb24gSGVhbHRoIENoZWNrIFVSTFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFsdGhDaGVja1VybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogTmFtZXNwYWNlIElEXG4gICAgICovXG4gICAgcHVibGljIGxvZ2ljYWxSZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhY2thZ2VUeXBlOiBBcHBsaWNhdGlvbiBwYWNrZXQgZm9ybWF0LCBwb3NzaWJsZSB2YWx1ZXM6IHdhciBvciBqYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFja2FnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXBwbGljYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FwcGxpY2F0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJQb3J0ID0gdGhpcy5nZXRBdHQoJ1BvcnQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25OYW1lID0gcHJvcHMuYXBwbGljYXRpb25OYW1lO1xuICAgICAgICB0aGlzLmNsdXN0ZXJJZCA9IHByb3BzLmNsdXN0ZXJJZDtcbiAgICAgICAgdGhpcy5idWlsZFBhY2tJZCA9IHByb3BzLmJ1aWxkUGFja0lkO1xuICAgICAgICB0aGlzLmNvbXBvbmVudElkcyA9IHByb3BzLmNvbXBvbmVudElkcztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVjdUluZm8gPSBwcm9wcy5lY3VJbmZvO1xuICAgICAgICB0aGlzLmhlYWx0aENoZWNrVXJsID0gcHJvcHMuaGVhbHRoQ2hlY2tVcmw7XG4gICAgICAgIHRoaXMubG9naWNhbFJlZ2lvbklkID0gcHJvcHMubG9naWNhbFJlZ2lvbklkO1xuICAgICAgICB0aGlzLnBhY2thZ2VUeXBlID0gcHJvcHMucGFja2FnZVR5cGU7XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZTogdGhpcy5hcHBsaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICBjbHVzdGVySWQ6IHRoaXMuY2x1c3RlcklkLFxuICAgICAgICAgICAgYnVpbGRQYWNrSWQ6IHRoaXMuYnVpbGRQYWNrSWQsXG4gICAgICAgICAgICBjb21wb25lbnRJZHM6IHRoaXMuY29tcG9uZW50SWRzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlY3VJbmZvOiB0aGlzLmVjdUluZm8sXG4gICAgICAgICAgICBoZWFsdGhDaGVja1VybDogdGhpcy5oZWFsdGhDaGVja1VybCxcbiAgICAgICAgICAgIGxvZ2ljYWxSZWdpb25JZDogdGhpcy5sb2dpY2FsUmVnaW9uSWQsXG4gICAgICAgICAgICBwYWNrYWdlVHlwZTogdGhpcy5wYWNrYWdlVHlwZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FwcGxpY2F0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFREFTOjpDbHVzdGVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3Rlck5hbWU6IENsdXN0ZXIgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZS4gMS1Td2FybSBjbHVzdGVyLCAyLUVDUyBjbHVzdGVyLCAzLUt1YmVybmV0ZXMgQ2x1c3RlclxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJUeXBlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya01vZGU6IE5ldHdvcmsgVHlwZS4gMS0gY2xhc3NpYyBuZXR3b3JrLCAyLVZQQ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtNb2RlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naWNhbFJlZ2lvbklkOiBDdXN0b20gbmFtZXNwYWNlIFJlZ2lvbklkIChmb3JtYXQ6IFBoeXNpY2FsIFJlZ2lvbjogY3VzdG9tIG5hbWVzcGFjZSBpZGVudGlmaWVyKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ2ljYWxSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvdmVyc29sZEZhY3RvcjogRG9ja2VyIENQVSBjbHVzdGVyIG92ZXJzb2xkLiBTdXBwb3J0IDIgKDE6IDIgcmF0aW8pIC8gNCAoMTogNCkgLyA4ICgxOiA4IHJhdGlvKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG92ZXJzb2xkRmFjdG9yPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBWUEMgbmV0d29yayBJRC4gSWYgbmV0d29yayBzZWxlY3Rpb24gVlBDLCB0aGlzIHBhcmFtZXRlciBSZXF1aXJlZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2x1c3RlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NsdXN0ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ2ljYWxSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm92ZXJzb2xkRmFjdG9yICYmICh0eXBlb2YgcHJvcGVydGllcy5vdmVyc29sZEZhY3RvcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3ZlcnNvbGRGYWN0b3InLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5vdmVyc29sZEZhY3RvcixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbMiw0LDhdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3ZlcnNvbGRGYWN0b3InLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3Rlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2x1c3Rlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtNb2RlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5ldHdvcmtNb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrTW9kZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5uZXR3b3JrTW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlclR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2x1c3RlclR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJUeXBlJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0NsdXN0ZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2x1c3RlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpDbHVzdGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NsdXN0ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NsdXN0ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDbHVzdGVyTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVyTmFtZSksXG4gICAgICBDbHVzdGVyVHlwZTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVyVHlwZSksXG4gICAgICBOZXR3b3JrTW9kZTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrTW9kZSksXG4gICAgICBMb2dpY2FsUmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSxcbiAgICAgIE92ZXJzb2xkRmFjdG9yOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm92ZXJzb2xkRmFjdG9yKSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDbHVzdGVyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpDbHVzdGVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3Rlck5hbWU6IENsdXN0ZXIgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlclR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSWFhc1Byb3ZpZGVyOiBQcm92aWRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWFhc1Byb3ZpZGVyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyTmFtZTogQ2x1c3RlciBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZS4gMS1Td2FybSBjbHVzdGVyLCAyLUVDUyBjbHVzdGVyLCAzLUt1YmVybmV0ZXMgQ2x1c3RlclxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVyVHlwZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtNb2RlOiBOZXR3b3JrIFR5cGUuIDEtIGNsYXNzaWMgbmV0d29yaywgMi1WUENcbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya01vZGU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IEN1c3RvbSBuYW1lc3BhY2UgUmVnaW9uSWQgKGZvcm1hdDogUGh5c2ljYWwgUmVnaW9uOiBjdXN0b20gbmFtZXNwYWNlIGlkZW50aWZpZXIpXG4gICAgICovXG4gICAgcHVibGljIGxvZ2ljYWxSZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG92ZXJzb2xkRmFjdG9yOiBEb2NrZXIgQ1BVIGNsdXN0ZXIgb3ZlcnNvbGQuIFN1cHBvcnQgMiAoMTogMiByYXRpbykgLyA0ICgxOiA0KSAvIDggKDE6IDggcmF0aW8pXG4gICAgICovXG4gICAgcHVibGljIG92ZXJzb2xkRmFjdG9yOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFZQQyBuZXR3b3JrIElELiBJZiBuZXR3b3JrIHNlbGVjdGlvbiBWUEMsIHRoaXMgcGFyYW1ldGVyIFJlcXVpcmVkXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2x1c3RlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2x1c3Rlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTmFtZSA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVyTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVHlwZSA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVyVHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJJYWFzUHJvdmlkZXIgPSB0aGlzLmdldEF0dCgnSWFhc1Byb3ZpZGVyJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNsdXN0ZXJOYW1lID0gcHJvcHMuY2x1c3Rlck5hbWU7XG4gICAgICAgIHRoaXMuY2x1c3RlclR5cGUgPSBwcm9wcy5jbHVzdGVyVHlwZTtcbiAgICAgICAgdGhpcy5uZXR3b3JrTW9kZSA9IHByb3BzLm5ldHdvcmtNb2RlO1xuICAgICAgICB0aGlzLmxvZ2ljYWxSZWdpb25JZCA9IHByb3BzLmxvZ2ljYWxSZWdpb25JZDtcbiAgICAgICAgdGhpcy5vdmVyc29sZEZhY3RvciA9IHByb3BzLm92ZXJzb2xkRmFjdG9yO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy52cGNJZCA9IHByb3BzLnZwY0lkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsdXN0ZXJOYW1lOiB0aGlzLmNsdXN0ZXJOYW1lLFxuICAgICAgICAgICAgY2x1c3RlclR5cGU6IHRoaXMuY2x1c3RlclR5cGUsXG4gICAgICAgICAgICBuZXR3b3JrTW9kZTogdGhpcy5uZXR3b3JrTW9kZSxcbiAgICAgICAgICAgIGxvZ2ljYWxSZWdpb25JZDogdGhpcy5sb2dpY2FsUmVnaW9uSWQsXG4gICAgICAgICAgICBvdmVyc29sZEZhY3RvcjogdGhpcy5vdmVyc29sZEZhY3RvcixcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB2cGNJZDogdGhpcy52cGNJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2x1c3RlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDbHVzdGVyTWVtYmVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCB0byBpbXBvcnQgRUNTIGluc3RhbmNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZHM6IEVDUyBpbnN0YW5jZSBJRCBsaXN0IHRvIGltcG9ydC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXNzd29yZDogUGFzc3dvcmQgRUNTIGhvc3RzIG5lZWQgdG8gaW1wb3J0IChFQ1Mgc2V0dGluZ3MgY2FuIGNvbnRpbnVlIHRvIHVzZSBwdXJjaGFzZWQpXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDbHVzdGVyTWVtYmVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJNZW1iZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDbHVzdGVyTWVtYmVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkcykpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pbnN0YW5jZUlkcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlSWRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VJZHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5pbnN0YW5jZUlkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc3dvcmQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGFzc3dvcmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhc3N3b3JkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0NsdXN0ZXJNZW1iZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2x1c3Rlck1lbWJlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpDbHVzdGVyTWVtYmVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NsdXN0ZXJNZW1iZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NsdXN0ZXJNZW1iZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgIEluc3RhbmNlSWRzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pbnN0YW5jZUlkcyksXG4gICAgICBQYXNzd29yZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzd29yZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NsdXN0ZXJNZW1iZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3Rlck1lbWJlcklkczogQ2x1c3RlciBtZW1iZXIgSURzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIEVDUyBpbnN0YW5jZSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyTWVtYmVySWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWRzOiBFQ1MgaW5zdGFuY2UgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCB0byBpbXBvcnQgRUNTIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWRzOiBFQ1MgaW5zdGFuY2UgSUQgbGlzdCB0byBpbXBvcnQuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBFQ1MgaG9zdHMgbmVlZCB0byBpbXBvcnQgKEVDUyBzZXR0aW5ncyBjYW4gY29udGludWUgdG8gdXNlIHB1cmNoYXNlZClcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpDbHVzdGVyTWVtYmVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDbHVzdGVyTWVtYmVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDbHVzdGVyTWVtYmVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJNZW1iZXJJZHMgPSB0aGlzLmdldEF0dCgnQ2x1c3Rlck1lbWJlcklkcycpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkcyA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jbHVzdGVySWQgPSBwcm9wcy5jbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZHMgPSBwcm9wcy5pbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHByb3BzLnBhc3N3b3JkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogdGhpcy5jbHVzdGVySWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkczogdGhpcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDbHVzdGVyTWVtYmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFREFTOjpEZXBsb3lHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEZXBsb3lHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBJZDogQXBwbGljYXRpb24gSURcbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogR3JvdXAgbmFtZSwgbWF4aW11bSBsZW5ndGggb2YgNjQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRGVwbG95R3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGVwbG95R3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEZXBsb3lHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZ3JvdXBOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZ3JvdXBOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZ3JvdXBOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmdyb3VwTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcHBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRGVwbG95R3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6RGVwbG95R3JvdXBgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RlcGxveUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RlcGxveUdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEZXBsb3lHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFwcElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcElkKSxcbiAgICAgIEdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRGVwbG95R3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwSWQ6IEFwcGxpY2F0aW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cE5hbWU6IERlcGxveSBncm91cCBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSWQ6IERlcGxveSBncm91cCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcElkOiBBcHBsaWNhdGlvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogR3JvdXAgbmFtZSwgbWF4aW11bSBsZW5ndGggb2YgNjQuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEZXBsb3lHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGVwbG95R3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwcElkID0gdGhpcy5nZXRBdHQoJ0FwcElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHRoaXMuZ2V0QXR0KCdHcm91cE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRySWQgPSB0aGlzLmdldEF0dCgnSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBwSWQgPSBwcm9wcy5hcHBJZDtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBwcm9wcy5ncm91cE5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwSWQ6IHRoaXMuYXBwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEZXBsb3lHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSzhzQXBwbGljYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uLiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYW5kIGNhbiBjb250YWluIGRpZ2l0cyxcbiAgICAgKiBsZXR0ZXJzLCBhbmQgaHlwaGVucyAoLSkuIEl0IGNhbiBiZSB1cCB0byAzNiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlcklkOiBUaGUgY2x1c3RlciBJRC4gWW91IGNhbiBxdWVyeSB0aGUgY2x1c3RlciBJRCBieSBjYWxsaW5nIHRoZSBMaXN0Q2x1c3RlciBvcGVyYXRpb24uXG4gICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBMaXN0Q2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBsaWNhdGlvbkRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcGxpY2F0aW9uRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWFuZDogVGhlIGNvbW1hbmQgdGhhdCBpcyBzcGVjaWZpZWQuIElmIGl0IGlzIHNwZWNpZmllZCwgaXQgcmVwbGFjZXMgdGhlIHN0YXJ0dXAgY29tbWFuZCBpbiB0aGUgaW1hZ2Ugd2hlbiB0aGUgaW1hZ2UgaXMgc3RhcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tYW5kPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1hbmRBcmdzOiBUaGUgY29sbGVjdGlvbiBvZiBjb21tYW5kcy4gRm9yIGV4YW1wbGUsIFt7XCJhcmd1bWVudFwiOlwiLWNcIn0se1wiYXJndW1lbnRcIjpcInRlc3RcIn1dLCB3aGVyZSAtYyBhbmQgdGVzdCBhcmUgdHdvIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1hbmRBcmdzPzogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uQ29tbWFuZEFyZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95QWNyb3NzTm9kZXM6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3RyaWJ1dGUgYXBwbGljYXRpb24gaW5zdGFuY2VzIHRvIG11bHRpcGxlIG5vZGVzLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgeWVzLCB3aGVyZWFzIG90aGVyIHZhbHVlcyBpbmRpY2F0ZSBuby5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3lBY3Jvc3NOb2Rlcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95QWNyb3NzWm9uZXM6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3RyaWJ1dGUgYXBwbGljYXRpb24gaW5zdGFuY2VzIHRvIG11bHRpcGxlIHpvbmVzLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgeWVzLCB3aGVyZWFzIG90aGVyIHZhbHVlcyBpbmRpY2F0ZSBuby5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3lBY3Jvc3Nab25lcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWRhc0NvbnRhaW5lclZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIEVEQVMgQ29udGFpbmVyIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuXG4gICAgICogTm90ZSBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdoZW4geW91IGRlcGxveSBhbiBhcHBsaWNhdGlvbiBieSB1c2luZyBpbWFnZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWRhc0NvbnRhaW5lclZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlQWhhczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIGFjY2VzcyB0byBBcHBsaWNhdGlvbiBIaWdoIEF2YWlsYWJpbGl0eSBTZXJ2aWNlIChBSEFTKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVBaGFzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZzOiBUaGUgY29sbGVjdGlvbiBvZiBkZXBsb3ltZW50IGVudmlyb25tZW50IHZhcmlhYmxlcy4gRm9yIGV4YW1wbGUsIFt7XCJOYW1lXCI6XCJ4XCIsXCJWYWx1ZVwiOlwieVwifSx7XCJOYW1lXCI6XCJ4MlwiLFwiVmFsdWVcIjpcInkyXCJ9XS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbnZzPzogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uRW52c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbWFnZVVybDogVGhlIGltYWdlIFVSTC4gV2hlbiBQYWNrYWdlVHlwZSBpcyBzZXQgdG8gSW1hZ2UsIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0U2xiSWQ6IFRoZSBJRCBvZiB0aGUgSW50ZXJuZXQtZmFjaW5nIFNMQiBpbnN0YW5jZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCwgRURBUyBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlcyBhIG5ldyBTTEIgaW5zdGFuY2UgZm9yIHlvdS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldFNsYklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0U2xiUG9ydDogVGhlIGZyb250ZW5kIHBvcnQgb2YgdGhlIEludGVybmV0LWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldFNsYlBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTbGJQcm90b2NvbDogVGhlIHByb3RvY29sIG9mIHRoZSBJbnRlcm5ldC1mYWNpbmcgU0xCIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IFRDUCwgSFRUUCwgYW5kIEhUVFBTLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0U2xiUHJvdG9jb2w/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRUYXJnZXRQb3J0OiBUaGUgYmFja2VuZCBwb3J0IG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLCB3aGljaCBpcyBhbHNvIHRoZSBzZXJ2aWNlIHBvcnQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldFRhcmdldFBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJJZDogVGhlIElEIG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCBFbnRlcnByaXNlIERpc3RyaWJ1dGVkIEFwcGxpY2F0aW9uIFNlcnZpY2UgKEVEQVMpIGF1dG9tYXRpY2FsbHkgcHVyY2hhc2VzIGEgbmV3IFNMQiBpbnN0YW5jZSBmb3IgeW91LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludHJhbmV0U2xiSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJQb3J0OiBUaGUgZnJvbnRlbmQgcG9ydCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludHJhbmV0U2xiUG9ydD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFNsYlByb3RvY29sOiBUaGUgcHJvdG9jb2wgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogVENQLCBIVFRQLCBhbmQgSFRUUFMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50cmFuZXRTbGJQcm90b2NvbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFRhcmdldFBvcnQ6IFRoZSBiYWNrZW5kIHBvcnQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTZXJ2ZXIgTG9hZCBCYWxhbmNlciAoU0xCKSBpbnN0YW5jZSwgd2hpY2ggaXMgYWxzbyB0aGUgc2VydmljZSBwb3J0IG9mIHRoZSBhcHBsaWNhdGlvbi4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludHJhbmV0VGFyZ2V0UG9ydD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc011bHRpbGluZ3VhbEFwcDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGFwcGxpY2F0aW9uIGlzIGEgbXVsdGktbGFuZ3VhZ2UgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNNdWx0aWxpbmd1YWxBcHA/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGphdmFTdGFydFVwQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiBKYXZhIHN0YXJ0dXAgcGFyYW1ldGVycyBmb3IgYSBKYXZhIGFwcGxpY2F0aW9uLiBUaGVzZSBzdGFydHVwIHBhcmFtZXRlcnMgaW52b2x2ZSB0aGUgbWVtb3J5LCBhcHBsaWNhdGlvbiwgZ2FyYmFnZSBjb2xsZWN0aW9uIChHQykgcG9saWN5LCB0b29scywgc2VydmljZSByZWdpc3RyYXRpb24gYW5kIGRpc2NvdmVyeSwgYW5kIGN1c3RvbSBjb25maWd1cmF0aW9ucy4gUHJvcGVyIHBhcmFtZXRlciBzZXR0aW5ncyBoZWxwIHJlZHVjZSB0aGUgR0Mgb3ZlcmhlYWQsIHNob3J0ZW4gdGhlIHNlcnZlciByZXNwb25zZSB0aW1lLCBhbmQgaW1wcm92ZSB0aGUgdGhyb3VnaHB1dC5cbiAgICAgKiBUaGUgc3lzdGVtIGF1dG9tYXRpY2FsbHkgY29uY2F0ZW5hdGVzIGFsbCBzdGFydHVwIHZhbHVlcyBhcyB0aGUgY29uZmlndXJhdGlvbiBvZiBKYXZhIHN0YXJ0dXAgcGFyYW1ldGVycyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGphdmFTdGFydFVwQ29uZmlnPzogUm9zSzhzQXBwbGljYXRpb24uSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBqZGs6IFRoZSB2ZXJzaW9uIG9mIEphdmEgRGV2ZWxvcG1lbnQgS2l0IChKREspIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuIFxuICAgICAqIFZhbGlkIHZhbHVlczogT3BlbiBKREsgNyBhbmQgT3BlbiBKREsgOC4gVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHlvdSBkZXBsb3kgYW4gYXBwbGljYXRpb24gYnkgdXNpbmcgaW1hZ2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGpkaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaW1pdENwdTogVGhlIG1heGltdW0gbnVtYmVyIG9mIENQVXMgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvblxuICAgICAqIGlzIHJ1bm5pbmcuIFVuaXQ6IGNvcmVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpbWl0Q3B1PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpbWl0TWVtOiBUaGUgbWF4aW11bSBhbW91bnQgb2YgbWVtb3J5IGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gVW5pdDogTUIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGltaXRNZW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGl2ZW5lc3M6IFRoZSBsaXZlbmVzcyBjaGVjayBvbiB0aGUgY29udGFpbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpdmVuZXNzPzogUm9zSzhzQXBwbGljYXRpb24uTGl2ZW5lc3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbFZvbHVtZTogVGhlIGNvbmZpZ3VyYXRpb24gZm9yIG1vdW50aW5nIGhvc3QgZmlsZXMgdG8gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gRm9yIGV4YW1wbGUsIHRoZSB2YWx1ZSBjYW4gYmUgW3tcInR5cGVcIjpcIlwiLCBcIm5vZGVQYXRoXCI6XCIvbG9jYWxmaWxlc1wiLCBcIm1vdW50UGF0aFwiOlwiL2FwcC9maWxlc1wifSwge1widHlwZVwiOlwiRGlyZWN0b3J5XCIsIFwibm9kZVBhdGhcIjpcIi9tbnRcIiwgXCJtb3VudFBhdGhcIjpcIi9hcHAvc3RvcmFnZVwifV0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9jYWxWb2x1bWU/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5Mb2NhbFZvbHVtZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgRURBUyBuYW1lc3BhY2UuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGZvciBhIG5vbi1kZWZhdWx0IG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpY2FsUmVnaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW91bnREZXNjczogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBOQVMgbW91bnRpbmcgY29uZmlndXJhdGlvbi4gRm9yIGV4YW1wbGUsIHRoZSB2YWx1ZSBjYW4gYmUgW3tcIk5hc1BhdGhcIjogXCIvazhzXCIsXCJNb3VudFBhdGhcIjogXCIvbW50XCJ9LCB7XCJOYXNQYXRoXCI6IFwiL2ZpbGVzXCIsIFwiTW91bnRQYXRoXCI6IFwiL2FwcC9maWxlc1wifV0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW91bnREZXNjcz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLk1vdW50RGVzY3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgbmFtZXNwYWNlIG9mIHRoZSBLdWJlcm5ldGVzIGNsdXN0ZXIuIFRoaXMgcGFyYW1ldGVyIGRldGVybWluZXMgdGhlIEt1YmVybmV0ZXMgbmFtZXNwYWNlIHdoZXJlIHlvdXIgYXBwbGljYXRpb24gaXMgZGVwbG95ZWQuIEJ5IGRlZmF1bHQsIHRoaXMgcGFyYW1ldGVyIGlzIHNldCB0byBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXNJZDogVGhlIElEIG9mIHRoZSBOZXR3b3JrIEF0dGFjaGVkIFN0b3JhZ2UgKE5BUykgZmlsZSBzeXN0ZW0gbW91bnRlZCB0byB0aGUgY29udGFpbmVyIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLiBUaGUgTkFTIGZpbGUgc3lzdGVtIG11c3QgYmUgaW4gdGhlIHNhbWUgcmVnaW9uIGFzIHRoZSBjbHVzdGVyLiBUaGUgTkFTIGZpbGUgc3lzdGVtIG11c3QgaGF2ZSBhbiBhdmFpbGFibGUgbW91bnQgdGFyZ2V0LCBvciBoYXZlIGEgbW91bnRcbiAgICAgKiB0YXJnZXQgb24gdGhlIHZTd2l0Y2ggaW4gdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgbG9jYXRlZC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIG1vdW50RGVzY3MgZmllbGQgZXhpc3RzLCBhIE5BUyBmaWxlIHN5c3RlbSBpcyBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlZCBhbmQgbW91bnRlZCB0byB0aGUgdlN3aXRjaCBpbiB0aGUgVlBDIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFzSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFZhbGlkIHZhbHVlczogRmF0SmFyLCBXQVIsIGFuZCBJbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYWNrYWdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVXJsOiBUaGUgVVJMIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc2V0IGZvciB0aGUgYXBwbGljYXRpb25zXG4gICAgICogdGhhdCBhcmUgZGVwbG95ZWQgYnkgdXNpbmcgRmF0SmFyIG9yIFdBUiBwYWNrYWdlcy5cbiAgICAgKiBOb3RlIFRoZSB2ZXJzaW9uIG9mIFNESyBmb3IgSmF2YSBvciBQeXRob24gbXVzdCBiZSAyLjQ0LjAgb3IgbGF0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIGRlcGxveW1lbnQgcGFja2FnZS4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgd2hlbiB0aGUgUGFja2FnZVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBXQVIgb3IgRmF0SmFyLiBZb3UgbXVzdCBzcGVjaWZ5IGEgdmVyc2lvbi5cbiAgICAgKiBOb3RlIFRoZSB2ZXJzaW9uIG9mIFNESyBmb3IgSmF2YSBvciBQeXRob24gbXVzdCBiZSAyLjQ0LjAgb3IgbGF0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9zdFN0YXJ0OiBUaGUgcG9zdC1zdGFydCBzY3JpcHQuIEZvciBleGFtcGxlLCB7XCJFeGVjXCI6IHtcIkNvbW1hbmRcIjogW1wibHNcIiwgXCIvXCJdfX0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9zdFN0YXJ0PzogUm9zSzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlU3RvcDogVGhlIHByZS1zdG9wIHNjcmlwdC4gRm9yIGV4YW1wbGUsIHtcIkV4ZWNcIjoge1wiQ29tbWFuZFwiOiBbXCJsc1wiLCBcIi9cIl19fS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVTdG9wPzogUm9zSzhzQXBwbGljYXRpb24uUHJlU3RvcFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlYWRpbmVzczogVGhlIHJlYWRpbmVzcyBjaGVjayBvbiB0aGUgY29udGFpbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlYWRpbmVzcz86IFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcGxpY2FzOiBUaGUgbnVtYmVyIG9mIGluc3RhbmNlcyBmb3IgdGhlIGFwcGxpY2F0aW9uIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLiBEZWZhdWx0OiAxXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVwbGljYXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb0lkOiBUaGUgSUQgb2YgdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVwb0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcXVlc3RzQ3B1OiBUaGUgbWF4aW11bSBudW1iZXIgb2YgQ1BVcyBhbGxvd2VkIGZvciBlYWNoIGFwcGxpY2F0aW9uIGluc3RhbmNlIHdoZW4gdGhlIGFwcGxpY2F0aW9uIGlzIGNyZWF0ZWQuIFVuaXQ6IGNvcmVzLiBUaGUgdmFsdWUgMCBpbmRpY2F0ZXMgbm8gbGltaXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVxdWVzdHNDcHU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVxdWVzdHNNZW06IFRoZSBtYXhpbXVtIGFtb3VudCBvZiBtZW1vcnkgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvblxuICAgICAqIGlzIGNyZWF0ZWQuIFVuaXQ6IE1CLiBUaGUgdmFsdWUgMCBpbmRpY2F0ZXMgbm8gbGltaXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVxdWVzdHNNZW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVudGltZUNsYXNzTmFtZTogVGhlIHR5cGUgb2YgdGhlIGNvbnRhaW5lciBydW50aW1lLiBUaGlzIHBhcmFtZXRlciBpcyBhcHBsaWNhYmxlIG9ubHkgdG8gY2x1c3RlcnMgdGhhdCB1c2Ugc2FuZGJveGVkIGNvbnRhaW5lcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVudGltZUNsYXNzTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbHNDb25maWdzOiBUaGUgTG9nc3RvcmUgY29uZmlndXJhdGlvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2xzQ29uZmlncz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLlNsc0NvbmZpZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RvcmFnZVR5cGU6IE9ubHkgU1NEIGlzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdG9yYWdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgdGltZW91dCBpbnRlcnZhbCBvZiB0aGUgY2hhbmdlIHByb2Nlc3MuIFVuaXQ6IHNlY29uZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1cmlFbmNvZGluZzogVGhlIHVuaWZvcm0gcmVzb3VyY2UgaWRlbnRpZmllciAoVVJJKSBlbmNvZGluZyBzY2hlbWUuIFZhbGlkIHZhbHVlczogSVNPLTg4NTktMSwgR0JLLCBHQjIzMTIsIGFuZCBVVEYtOC5cbiAgICAgKiBOb3RlIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQgaW4gYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiwgdGhlIGRlZmF1bHQgVVJJIGVuY29kaW5nXG4gICAgICogc2NoZW1lIGluIHRoZSBUb21jYXQgY29udGFpbmVyIGlzIGFwcGxpZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXJpRW5jb2Rpbmc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlQm9keUVuY29kaW5nOiBTcGVjaWZpZXMgd2hldGhlciB1c2VCb2R5RW5jb2RpbmdGb3JVUkkgaXMgZW5hYmxlZC5cbiAgICAgKiBOb3RlIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQgaW4gYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiwgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgKiBmYWxzZSBpcyBhcHBsaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZUJvZHlFbmNvZGluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2ViQ29udGFpbmVyOiBUaGUgdmVyc2lvbiBvZiB0aGUgVG9tY2F0IGNvbnRhaW5lciBvbiB3aGljaCB0aGUgZGVwbG95bWVudCBwYWNrYWdlIG9mIHRoZSBhcHBsaWNhdGlvbiBkZXBlbmRzLiBUaGlzIHBhcmFtZXRlciBpcyBhcHBsaWNhYmxlIHRvIFNwcmluZyBDbG91ZCBhbmQgQXBhY2hlIER1YmJvIGFwcGxpY2F0aW9ucyB0aGF0IGFyZSBkZXBsb3llZCBieSB1c2luZyBXQVIgcGFja2FnZXMuIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiB5b3UgZGVwbG95IGFuIGFwcGxpY2F0aW9uIGJ5IHVzaW5nIGltYWdlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJDb250YWluZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2ViQ29udGFpbmVyQ29uZmlnOiBUaGUgVG9tY2F0IGNvbnRhaW5lciBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlYkNvbnRhaW5lckNvbmZpZz86IFJvc0s4c0FwcGxpY2F0aW9uLldlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0s4c0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0s4c0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ2ljYWxSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hc0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hc0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsaXZlbmVzcycsIFJvc0s4c0FwcGxpY2F0aW9uX0xpdmVuZXNzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubGl2ZW5lc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludHJhbmV0U2xiSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW50cmFuZXRTbGJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2ViQ29udGFpbmVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndlYkNvbnRhaW5lcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGltaXRDcHUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubGltaXRDcHUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nsc0NvbmZpZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9TbHNDb25maWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNsc0NvbmZpZ3MpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludHJhbmV0U2xiUHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmludHJhbmV0U2xiUHJvdG9jb2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludHJhbmV0U2xiUHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlRDUFwiLFwiSFRUUFwiLFwiSFRUUFNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYlByb3RvY29sJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludHJhbmV0U2xiUHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYkNvbnRhaW5lckNvbmZpZycsIFJvc0s4c0FwcGxpY2F0aW9uX1dlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLndlYkNvbnRhaW5lckNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFja2FnZVZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFja2FnZVZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXBwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdqZGsnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuamRrKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldFNsYklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludGVybmV0U2xiSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZVN0b3AnLCBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJlU3RvcCkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50ZXJuZXRTbGJQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRlcm5ldFNsYlBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0U2xiUG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludGVybmV0U2xiUG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0U2xiUG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnRlcm5ldFNsYlBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlYWRpbmVzcycsIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlYWRpbmVzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVwbG95QWNyb3NzTm9kZXMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlcGxveUFjcm9zc05vZGVzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXF1ZXN0c01lbSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVxdWVzdHNNZW0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RzTWVtJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVxdWVzdHNNZW0sXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdHNNZW0nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmVxdWVzdHNNZW0pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhY2thZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VCb2R5RW5jb2RpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnVzZUJvZHlFbmNvZGluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignamF2YVN0YXJ0VXBDb25maWcnLCBSb3NLOHNBcHBsaWNhdGlvbl9KYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmphdmFTdGFydFVwQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc011bHRpbGluZ3VhbEFwcCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaXNNdWx0aWxpbmd1YWxBcHApKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlcXVlc3RzQ3B1ICYmICh0eXBlb2YgcHJvcGVydGllcy5yZXF1ZXN0c0NwdSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdHNDcHUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXF1ZXN0c0NwdSxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1ZXN0c0NwdScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5yZXF1ZXN0c0NwdSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZEFyZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9Db21tYW5kQXJnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5jb21tYW5kQXJncykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmFnZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RvcmFnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRpbWVvdXQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVvdXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aW1lb3V0LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW52cycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX0VudnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuZW52cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW1hZ2VVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW1hZ2VVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlcGxveUFjcm9zc1pvbmVzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5kZXBsb3lBY3Jvc3Nab25lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9zdFN0YXJ0JywgUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9zdFN0YXJ0KSk7XG4gICAgaWYocHJvcGVydGllcy5pbnRlcm5ldFRhcmdldFBvcnQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmludGVybmV0VGFyZ2V0UG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRUYXJnZXRQb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW50ZXJuZXRUYXJnZXRQb3J0LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2NTUzNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRUYXJnZXRQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmludGVybmV0VGFyZ2V0UG9ydCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVwbGljYXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlcGxpY2FzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsaWNhcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlcGxpY2FzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcGxpY2FzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJlcGxpY2FzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lc3BhY2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZXNwYWNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBsaWNhdGlvbkRlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uRGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VyaUVuY29kaW5nJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnVyaUVuY29kaW5nKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFRhcmdldFBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50cmFuZXRUYXJnZXRQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudERlc2NzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fTW91bnREZXNjc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5tb3VudERlc2NzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhbFZvbHVtZScsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX0xvY2FsVm9sdW1lUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmxvY2FsVm9sdW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZGFzQ29udGFpbmVyVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lZGFzQ29udGFpbmVyVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVudGltZUNsYXNzTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ydW50aW1lQ2xhc3NOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbW1hbmQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0U2xiUHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmludGVybmV0U2xiUHJvdG9jb2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0U2xiUHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldFNsYlByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlRDUFwiLFwiSFRUUFwiLFwiSFRUUFNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldFNsYlByb3RvY29sJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludGVybmV0U2xiUHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhY2thZ2VVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFja2FnZVVybCkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50cmFuZXRTbGJQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRyYW5ldFNsYlBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludHJhbmV0U2xiUG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludHJhbmV0U2xiUG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludHJhbmV0U2xiUG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnRyYW5ldFNsYlBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcG9JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBvSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZUFoYXMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZUFoYXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmxpbWl0TWVtICYmICh0eXBlb2YgcHJvcGVydGllcy5saW1pdE1lbSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGltaXRNZW0nLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5saW1pdE1lbSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsaW1pdE1lbScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5saW1pdE1lbSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NLOHNBcHBsaWNhdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSzhzQXBwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0s4c0FwcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQXBwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBOYW1lKSxcbiAgICAgIENsdXN0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVySWQpLFxuICAgICAgQXBwbGljYXRpb25EZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBsaWNhdGlvbkRlc2NyaXB0aW9uKSxcbiAgICAgIENvbW1hbmQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgICBDb21tYW5kQXJnczogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25Db21tYW5kQXJnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb21tYW5kQXJncyksXG4gICAgICBEZXBsb3lBY3Jvc3NOb2Rlczogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVwbG95QWNyb3NzTm9kZXMpLFxuICAgICAgRGVwbG95QWNyb3NzWm9uZXM6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlcGxveUFjcm9zc1pvbmVzKSxcbiAgICAgIEVkYXNDb250YWluZXJWZXJzaW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVkYXNDb250YWluZXJWZXJzaW9uKSxcbiAgICAgIEVuYWJsZUFoYXM6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZUFoYXMpLFxuICAgICAgRW52czogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25FbnZzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmVudnMpLFxuICAgICAgSW1hZ2VVcmw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW1hZ2VVcmwpLFxuICAgICAgSW50ZXJuZXRTbGJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcm5ldFNsYklkKSxcbiAgICAgIEludGVybmV0U2xiUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcm5ldFNsYlBvcnQpLFxuICAgICAgSW50ZXJuZXRTbGJQcm90b2NvbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcm5ldFNsYlByb3RvY29sKSxcbiAgICAgIEludGVybmV0VGFyZ2V0UG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcm5ldFRhcmdldFBvcnQpLFxuICAgICAgSW50cmFuZXRTbGJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRyYW5ldFNsYklkKSxcbiAgICAgIEludHJhbmV0U2xiUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRyYW5ldFNsYlBvcnQpLFxuICAgICAgSW50cmFuZXRTbGJQcm90b2NvbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sKSxcbiAgICAgIEludHJhbmV0VGFyZ2V0UG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRyYW5ldFRhcmdldFBvcnQpLFxuICAgICAgSXNNdWx0aWxpbmd1YWxBcHA6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzTXVsdGlsaW5ndWFsQXBwKSxcbiAgICAgIEphdmFTdGFydFVwQ29uZmlnOiByb3NLOHNBcHBsaWNhdGlvbkphdmFTdGFydFVwQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuamF2YVN0YXJ0VXBDb25maWcpLFxuICAgICAgSkRLOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmpkayksXG4gICAgICBMaW1pdENwdTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5saW1pdENwdSksXG4gICAgICBMaW1pdE1lbTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5saW1pdE1lbSksXG4gICAgICBMaXZlbmVzczogcm9zSzhzQXBwbGljYXRpb25MaXZlbmVzc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpdmVuZXNzKSxcbiAgICAgIExvY2FsVm9sdW1lOiByb3MubGlzdE1hcHBlcihyb3NLOHNBcHBsaWNhdGlvbkxvY2FsVm9sdW1lUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmxvY2FsVm9sdW1lKSxcbiAgICAgIExvZ2ljYWxSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpLFxuICAgICAgTW91bnREZXNjczogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25Nb3VudERlc2NzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm1vdW50RGVzY3MpLFxuICAgICAgTmFtZXNwYWNlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWVzcGFjZSksXG4gICAgICBOYXNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYXNJZCksXG4gICAgICBQYWNrYWdlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYWNrYWdlVHlwZSksXG4gICAgICBQYWNrYWdlVXJsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhY2thZ2VVcmwpLFxuICAgICAgUGFja2FnZVZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFja2FnZVZlcnNpb24pLFxuICAgICAgUG9zdFN0YXJ0OiByb3NLOHNBcHBsaWNhdGlvblBvc3RTdGFydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvc3RTdGFydCksXG4gICAgICBQcmVTdG9wOiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmVTdG9wKSxcbiAgICAgIFJlYWRpbmVzczogcm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWFkaW5lc3MpLFxuICAgICAgUmVwbGljYXM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGljYXMpLFxuICAgICAgUmVwb0lkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcG9JZCksXG4gICAgICBSZXF1ZXN0c0NwdTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXF1ZXN0c0NwdSksXG4gICAgICBSZXF1ZXN0c01lbTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXF1ZXN0c01lbSksXG4gICAgICBSdW50aW1lQ2xhc3NOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ1bnRpbWVDbGFzc05hbWUpLFxuICAgICAgU2xzQ29uZmlnczogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25TbHNDb25maWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNsc0NvbmZpZ3MpLFxuICAgICAgU3RvcmFnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RvcmFnZVR5cGUpLFxuICAgICAgVGltZW91dDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICAgIFVyaUVuY29kaW5nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVyaUVuY29kaW5nKSxcbiAgICAgIFVzZUJvZHlFbmNvZGluZzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlQm9keUVuY29kaW5nKSxcbiAgICAgIFdlYkNvbnRhaW5lcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWJDb250YWluZXIpLFxuICAgICAgV2ViQ29udGFpbmVyQ29uZmlnOiByb3NLOHNBcHBsaWNhdGlvbldlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlYkNvbnRhaW5lckNvbmZpZyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NLOHNBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2hhbmdlT3JkZXJJZDogVGhlIElEIG9mIHRoZSBjaGFuZ2UgcHJvY2Vzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNoYW5nZU9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBUaGUgY2x1c3RlciBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3NDbHVzdGVySWQ6IFRoZSBLOHMgY2x1c3RlciBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDc0NsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uLiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYW5kIGNhbiBjb250YWluIGRpZ2l0cyxcbiAgICAgKiBsZXR0ZXJzLCBhbmQgaHlwaGVucyAoLSkuIEl0IGNhbiBiZSB1cCB0byAzNiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogVGhlIGNsdXN0ZXIgSUQuIFlvdSBjYW4gcXVlcnkgdGhlIGNsdXN0ZXIgSUQgYnkgY2FsbGluZyB0aGUgTGlzdENsdXN0ZXIgb3BlcmF0aW9uLlxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgTGlzdENsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcGxpY2F0aW9uRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGFwcGxpY2F0aW9uRGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiBUaGUgY29tbWFuZCB0aGF0IGlzIHNwZWNpZmllZC4gSWYgaXQgaXMgc3BlY2lmaWVkLCBpdCByZXBsYWNlcyB0aGUgc3RhcnR1cCBjb21tYW5kIGluIHRoZSBpbWFnZSB3aGVuIHRoZSBpbWFnZSBpcyBzdGFydGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb21tYW5kOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWFuZEFyZ3M6IFRoZSBjb2xsZWN0aW9uIG9mIGNvbW1hbmRzLiBGb3IgZXhhbXBsZSwgW3tcImFyZ3VtZW50XCI6XCItY1wifSx7XCJhcmd1bWVudFwiOlwidGVzdFwifV0sIHdoZXJlIC1jIGFuZCB0ZXN0IGFyZSB0d28gcGFyYW1ldGVycyB0aGF0IGNhbiBiZSBzZXQuXG4gICAgICovXG4gICAgcHVibGljIGNvbW1hbmRBcmdzOiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5Db21tYW5kQXJnc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXBsb3lBY3Jvc3NOb2RlczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzdHJpYnV0ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZXMgdG8gbXVsdGlwbGUgbm9kZXMuIFRoZSB2YWx1ZSB0cnVlIGluZGljYXRlcyB5ZXMsIHdoZXJlYXMgb3RoZXIgdmFsdWVzIGluZGljYXRlIG5vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXBsb3lBY3Jvc3NOb2RlczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXBsb3lBY3Jvc3Nab25lczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzdHJpYnV0ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZXMgdG8gbXVsdGlwbGUgem9uZXMuIFRoZSB2YWx1ZSB0cnVlIGluZGljYXRlcyB5ZXMsIHdoZXJlYXMgb3RoZXIgdmFsdWVzIGluZGljYXRlIG5vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXBsb3lBY3Jvc3Nab25lczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlZGFzQ29udGFpbmVyVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgRURBUyBDb250YWluZXIgb24gd2hpY2ggdGhlIGRlcGxveW1lbnQgcGFja2FnZSBvZiB0aGUgYXBwbGljYXRpb24gZGVwZW5kcy5cbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiB5b3UgZGVwbG95IGFuIGFwcGxpY2F0aW9uIGJ5IHVzaW5nIGltYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZWRhc0NvbnRhaW5lclZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVBaGFzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgYWNjZXNzIHRvIEFwcGxpY2F0aW9uIEhpZ2ggQXZhaWxhYmlsaXR5IFNlcnZpY2UgKEFIQVMpLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVBaGFzOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVudnM6IFRoZSBjb2xsZWN0aW9uIG9mIGRlcGxveW1lbnQgZW52aXJvbm1lbnQgdmFyaWFibGVzLiBGb3IgZXhhbXBsZSwgW3tcIk5hbWVcIjpcInhcIixcIlZhbHVlXCI6XCJ5XCJ9LHtcIk5hbWVcIjpcIngyXCIsXCJWYWx1ZVwiOlwieTJcIn1dLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbnZzOiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5FbnZzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGltYWdlVXJsOiBUaGUgaW1hZ2UgVVJMLiBXaGVuIFBhY2thZ2VUeXBlIGlzIHNldCB0byBJbWFnZSwgdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTbGJJZDogVGhlIElEIG9mIHRoZSBJbnRlcm5ldC1mYWNpbmcgU0xCIGluc3RhbmNlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCBFREFTIGF1dG9tYXRpY2FsbHkgcHVyY2hhc2VzIGEgbmV3IFNMQiBpbnN0YW5jZSBmb3IgeW91LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldFNsYklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTbGJQb3J0OiBUaGUgZnJvbnRlbmQgcG9ydCBvZiB0aGUgSW50ZXJuZXQtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldFNsYlBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldFNsYlByb3RvY29sOiBUaGUgcHJvdG9jb2wgb2YgdGhlIEludGVybmV0LWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogVENQLCBIVFRQLCBhbmQgSFRUUFMuXG4gICAgICovXG4gICAgcHVibGljIGludGVybmV0U2xiUHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldFRhcmdldFBvcnQ6IFRoZSBiYWNrZW5kIHBvcnQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UsIHdoaWNoIGlzIGFsc28gdGhlIHNlcnZpY2UgcG9ydCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICogVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldFRhcmdldFBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFNsYklkOiBUaGUgSUQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQsIEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZSAoRURBUykgYXV0b21hdGljYWxseSBwdXJjaGFzZXMgYSBuZXcgU0xCIGluc3RhbmNlIGZvciB5b3UuXG4gICAgICovXG4gICAgcHVibGljIGludHJhbmV0U2xiSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFNsYlBvcnQ6IFRoZSBmcm9udGVuZCBwb3J0IG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcHVibGljIGludHJhbmV0U2xiUG9ydDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludHJhbmV0U2xiUHJvdG9jb2w6IFRoZSBwcm90b2NvbCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBUQ1AsIEhUVFAsIGFuZCBIVFRQUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50cmFuZXRTbGJQcm90b2NvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludHJhbmV0VGFyZ2V0UG9ydDogVGhlIGJhY2tlbmQgcG9ydCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNlcnZlciBMb2FkIEJhbGFuY2VyIChTTEIpIGluc3RhbmNlLCB3aGljaCBpcyBhbHNvIHRoZSBzZXJ2aWNlIHBvcnQgb2YgdGhlIGFwcGxpY2F0aW9uLiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcHVibGljIGludHJhbmV0VGFyZ2V0UG9ydDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzTXVsdGlsaW5ndWFsQXBwOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYXBwbGljYXRpb24gaXMgYSBtdWx0aS1sYW5ndWFnZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNNdWx0aWxpbmd1YWxBcHA6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgamF2YVN0YXJ0VXBDb25maWc6IFRoZSBjb25maWd1cmF0aW9uIG9mIEphdmEgc3RhcnR1cCBwYXJhbWV0ZXJzIGZvciBhIEphdmEgYXBwbGljYXRpb24uIFRoZXNlIHN0YXJ0dXAgcGFyYW1ldGVycyBpbnZvbHZlIHRoZSBtZW1vcnksIGFwcGxpY2F0aW9uLCBnYXJiYWdlIGNvbGxlY3Rpb24gKEdDKSBwb2xpY3ksIHRvb2xzLCBzZXJ2aWNlIHJlZ2lzdHJhdGlvbiBhbmQgZGlzY292ZXJ5LCBhbmQgY3VzdG9tIGNvbmZpZ3VyYXRpb25zLiBQcm9wZXIgcGFyYW1ldGVyIHNldHRpbmdzIGhlbHAgcmVkdWNlIHRoZSBHQyBvdmVyaGVhZCwgc2hvcnRlbiB0aGUgc2VydmVyIHJlc3BvbnNlIHRpbWUsIGFuZCBpbXByb3ZlIHRoZSB0aHJvdWdocHV0LlxuICAgICAqIFRoZSBzeXN0ZW0gYXV0b21hdGljYWxseSBjb25jYXRlbmF0ZXMgYWxsIHN0YXJ0dXAgdmFsdWVzIGFzIHRoZSBjb25maWd1cmF0aW9uIG9mIEphdmEgc3RhcnR1cCBwYXJhbWV0ZXJzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGphdmFTdGFydFVwQ29uZmlnOiBSb3NLOHNBcHBsaWNhdGlvbi5KYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGpkazogVGhlIHZlcnNpb24gb2YgSmF2YSBEZXZlbG9wbWVudCBLaXQgKEpESykgb24gd2hpY2ggdGhlIGRlcGxveW1lbnQgcGFja2FnZSBvZiB0aGUgYXBwbGljYXRpb24gZGVwZW5kcy4gXG4gICAgICogVmFsaWQgdmFsdWVzOiBPcGVuIEpESyA3IGFuZCBPcGVuIEpESyA4LiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdoZW4geW91IGRlcGxveSBhbiBhcHBsaWNhdGlvbiBieSB1c2luZyBpbWFnZXMuXG4gICAgICovXG4gICAgcHVibGljIGpkazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpbWl0Q3B1OiBUaGUgbWF4aW11bSBudW1iZXIgb2YgQ1BVcyBhbGxvd2VkIGZvciBlYWNoIGFwcGxpY2F0aW9uIGluc3RhbmNlIHdoZW4gdGhlIGFwcGxpY2F0aW9uXG4gICAgICogaXMgcnVubmluZy4gVW5pdDogY29yZXMuXG4gICAgICovXG4gICAgcHVibGljIGxpbWl0Q3B1OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGltaXRNZW06IFRoZSBtYXhpbXVtIGFtb3VudCBvZiBtZW1vcnkgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLiBVbml0OiBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGltaXRNZW06IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaXZlbmVzczogVGhlIGxpdmVuZXNzIGNoZWNrIG9uIHRoZSBjb250YWluZXIuXG4gICAgICovXG4gICAgcHVibGljIGxpdmVuZXNzOiBSb3NLOHNBcHBsaWNhdGlvbi5MaXZlbmVzc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvY2FsVm9sdW1lOiBUaGUgY29uZmlndXJhdGlvbiBmb3IgbW91bnRpbmcgaG9zdCBmaWxlcyB0byB0aGUgY29udGFpbmVyIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLiBGb3IgZXhhbXBsZSwgdGhlIHZhbHVlIGNhbiBiZSBbe1widHlwZVwiOlwiXCIsIFwibm9kZVBhdGhcIjpcIi9sb2NhbGZpbGVzXCIsIFwibW91bnRQYXRoXCI6XCIvYXBwL2ZpbGVzXCJ9LCB7XCJ0eXBlXCI6XCJEaXJlY3RvcnlcIiwgXCJub2RlUGF0aFwiOlwiL21udFwiLCBcIm1vdW50UGF0aFwiOlwiL2FwcC9zdG9yYWdlXCJ9XS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9jYWxWb2x1bWU6IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLkxvY2FsVm9sdW1lUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogVGhlIElEIG9mIHRoZSBFREFTIG5hbWVzcGFjZS4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgZm9yIGEgbm9uLWRlZmF1bHQgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpY2FsUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb3VudERlc2NzOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIE5BUyBtb3VudGluZyBjb25maWd1cmF0aW9uLiBGb3IgZXhhbXBsZSwgdGhlIHZhbHVlIGNhbiBiZSBbe1wiTmFzUGF0aFwiOiBcIi9rOHNcIixcIk1vdW50UGF0aFwiOiBcIi9tbnRcIn0sIHtcIk5hc1BhdGhcIjogXCIvZmlsZXNcIiwgXCJNb3VudFBhdGhcIjogXCIvYXBwL2ZpbGVzXCJ9XS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW91bnREZXNjczogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uTW91bnREZXNjc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2U6IFRoZSBuYW1lc3BhY2Ugb2YgdGhlIEt1YmVybmV0ZXMgY2x1c3Rlci4gVGhpcyBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB0aGUgS3ViZXJuZXRlcyBuYW1lc3BhY2Ugd2hlcmUgeW91ciBhcHBsaWNhdGlvbiBpcyBkZXBsb3llZC4gQnkgZGVmYXVsdCwgdGhpcyBwYXJhbWV0ZXIgaXMgc2V0IHRvIGRlZmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hc0lkOiBUaGUgSUQgb2YgdGhlIE5ldHdvcmsgQXR0YWNoZWQgU3RvcmFnZSAoTkFTKSBmaWxlIHN5c3RlbSBtb3VudGVkIHRvIHRoZSBjb250YWluZXIgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcuIFRoZSBOQVMgZmlsZSBzeXN0ZW0gbXVzdCBiZSBpbiB0aGUgc2FtZSByZWdpb24gYXMgdGhlIGNsdXN0ZXIuIFRoZSBOQVMgZmlsZSBzeXN0ZW0gbXVzdCBoYXZlIGFuIGF2YWlsYWJsZSBtb3VudCB0YXJnZXQsIG9yIGhhdmUgYSBtb3VudFxuICAgICAqIHRhcmdldCBvbiB0aGUgdlN3aXRjaCBpbiB0aGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBsb2NhdGVkLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkIGFuZCB0aGUgbW91bnREZXNjcyBmaWVsZCBleGlzdHMsIGEgTkFTIGZpbGUgc3lzdGVtIGlzIGF1dG9tYXRpY2FsbHkgcHVyY2hhc2VkIGFuZCBtb3VudGVkIHRvIHRoZSB2U3dpdGNoIGluIHRoZSBWUEMgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFzSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVHlwZTogVGhlIHR5cGUgb2YgdGhlIGRlcGxveW1lbnQgcGFja2FnZS4gVmFsaWQgdmFsdWVzOiBGYXRKYXIsIFdBUiwgYW5kIEltYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYWNrYWdlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhY2thZ2VVcmw6IFRoZSBVUkwgb2YgdGhlIGRlcGxveW1lbnQgcGFja2FnZS4gVGhpcyBwYXJhbWV0ZXIgbXVzdCBiZSBzZXQgZm9yIHRoZSBhcHBsaWNhdGlvbnNcbiAgICAgKiB0aGF0IGFyZSBkZXBsb3llZCBieSB1c2luZyBGYXRKYXIgb3IgV0FSIHBhY2thZ2VzLlxuICAgICAqIE5vdGUgVGhlIHZlcnNpb24gb2YgU0RLIGZvciBKYXZhIG9yIFB5dGhvbiBtdXN0IGJlIDIuNDQuMCBvciBsYXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFja2FnZVVybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhY2thZ2VWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgZGVwbG95bWVudCBwYWNrYWdlLiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCB3aGVuIHRoZSBQYWNrYWdlVHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIFdBUiBvciBGYXRKYXIuIFlvdSBtdXN0IHNwZWNpZnkgYSB2ZXJzaW9uLlxuICAgICAqIE5vdGUgVGhlIHZlcnNpb24gb2YgU0RLIGZvciBKYXZhIG9yIFB5dGhvbiBtdXN0IGJlIDIuNDQuMCBvciBsYXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFja2FnZVZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb3N0U3RhcnQ6IFRoZSBwb3N0LXN0YXJ0IHNjcmlwdC4gRm9yIGV4YW1wbGUsIHtcIkV4ZWNcIjoge1wiQ29tbWFuZFwiOiBbXCJsc1wiLCBcIi9cIl19fS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9zdFN0YXJ0OiBSb3NLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVTdG9wOiBUaGUgcHJlLXN0b3Agc2NyaXB0LiBGb3IgZXhhbXBsZSwge1wiRXhlY1wiOiB7XCJDb21tYW5kXCI6IFtcImxzXCIsIFwiL1wiXX19LlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmVTdG9wOiBSb3NLOHNBcHBsaWNhdGlvbi5QcmVTdG9wUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVhZGluZXNzOiBUaGUgcmVhZGluZXNzIGNoZWNrIG9uIHRoZSBjb250YWluZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRpbmVzczogUm9zSzhzQXBwbGljYXRpb24uUmVhZGluZXNzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwbGljYXM6IFRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIGZvciB0aGUgYXBwbGljYXRpb24gdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUuIERlZmF1bHQ6IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGljYXM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBvSWQ6IFRoZSBJRCBvZiB0aGUgaW1hZ2UgcmVwb3NpdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVxdWVzdHNDcHU6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBDUFVzIGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb24gaXMgY3JlYXRlZC4gVW5pdDogY29yZXMuIFRoZSB2YWx1ZSAwIGluZGljYXRlcyBubyBsaW1pdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVxdWVzdHNDcHU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0c01lbTogVGhlIG1heGltdW0gYW1vdW50IG9mIG1lbW9yeSBhbGxvd2VkIGZvciBlYWNoIGFwcGxpY2F0aW9uIGluc3RhbmNlIHdoZW4gdGhlIGFwcGxpY2F0aW9uXG4gICAgICogaXMgY3JlYXRlZC4gVW5pdDogTUIuIFRoZSB2YWx1ZSAwIGluZGljYXRlcyBubyBsaW1pdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVxdWVzdHNNZW06IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydW50aW1lQ2xhc3NOYW1lOiBUaGUgdHlwZSBvZiB0aGUgY29udGFpbmVyIHJ1bnRpbWUuIFRoaXMgcGFyYW1ldGVyIGlzIGFwcGxpY2FibGUgb25seSB0byBjbHVzdGVycyB0aGF0IHVzZSBzYW5kYm94ZWQgY29udGFpbmVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVudGltZUNsYXNzTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNsc0NvbmZpZ3M6IFRoZSBMb2dzdG9yZSBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2xzQ29uZmlnczogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uU2xzQ29uZmlnc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdG9yYWdlVHlwZTogT25seSBTU0QgaXMgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9yYWdlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IGludGVydmFsIG9mIHRoZSBjaGFuZ2UgcHJvY2Vzcy4gVW5pdDogc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVyaUVuY29kaW5nOiBUaGUgdW5pZm9ybSByZXNvdXJjZSBpZGVudGlmaWVyIChVUkkpIGVuY29kaW5nIHNjaGVtZS4gVmFsaWQgdmFsdWVzOiBJU08tODg1OS0xLCBHQkssIEdCMjMxMiwgYW5kIFVURi04LlxuICAgICAqIE5vdGUgSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCBpbiBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uLCB0aGUgZGVmYXVsdCBVUkkgZW5jb2RpbmdcbiAgICAgKiBzY2hlbWUgaW4gdGhlIFRvbWNhdCBjb250YWluZXIgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXJpRW5jb2Rpbmc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VCb2R5RW5jb2Rpbmc6IFNwZWNpZmllcyB3aGV0aGVyIHVzZUJvZHlFbmNvZGluZ0ZvclVSSSBpcyBlbmFibGVkLlxuICAgICAqIE5vdGUgSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCBpbiBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uLCB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgICAqIGZhbHNlIGlzIGFwcGxpZWQuXG4gICAgICovXG4gICAgcHVibGljIHVzZUJvZHlFbmNvZGluZzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJDb250YWluZXI6IFRoZSB2ZXJzaW9uIG9mIHRoZSBUb21jYXQgY29udGFpbmVyIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuIFRoaXMgcGFyYW1ldGVyIGlzIGFwcGxpY2FibGUgdG8gU3ByaW5nIENsb3VkIGFuZCBBcGFjaGUgRHViYm8gYXBwbGljYXRpb25zIHRoYXQgYXJlIGRlcGxveWVkIGJ5IHVzaW5nIFdBUiBwYWNrYWdlcy4gVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHlvdSBkZXBsb3kgYW4gYXBwbGljYXRpb24gYnkgdXNpbmcgaW1hZ2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyB3ZWJDb250YWluZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJDb250YWluZXJDb25maWc6IFRoZSBUb21jYXQgY29udGFpbmVyIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHdlYkNvbnRhaW5lckNvbmZpZzogUm9zSzhzQXBwbGljYXRpb24uV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0s4c0FwcGxpY2F0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NLOHNBcHBsaWNhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXBwSWQgPSB0aGlzLmdldEF0dCgnQXBwSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyQXBwTmFtZSA9IHRoaXMuZ2V0QXR0KCdBcHBOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckNoYW5nZU9yZGVySWQgPSB0aGlzLmdldEF0dCgnQ2hhbmdlT3JkZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNzQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NzQ2x1c3RlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcE5hbWUgPSBwcm9wcy5hcHBOYW1lO1xuICAgICAgICB0aGlzLmNsdXN0ZXJJZCA9IHByb3BzLmNsdXN0ZXJJZDtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkRlc2NyaXB0aW9uID0gcHJvcHMuYXBwbGljYXRpb25EZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gcHJvcHMuY29tbWFuZDtcbiAgICAgICAgdGhpcy5jb21tYW5kQXJncyA9IHByb3BzLmNvbW1hbmRBcmdzO1xuICAgICAgICB0aGlzLmRlcGxveUFjcm9zc05vZGVzID0gcHJvcHMuZGVwbG95QWNyb3NzTm9kZXM7XG4gICAgICAgIHRoaXMuZGVwbG95QWNyb3NzWm9uZXMgPSBwcm9wcy5kZXBsb3lBY3Jvc3Nab25lcztcbiAgICAgICAgdGhpcy5lZGFzQ29udGFpbmVyVmVyc2lvbiA9IHByb3BzLmVkYXNDb250YWluZXJWZXJzaW9uO1xuICAgICAgICB0aGlzLmVuYWJsZUFoYXMgPSBwcm9wcy5lbmFibGVBaGFzO1xuICAgICAgICB0aGlzLmVudnMgPSBwcm9wcy5lbnZzO1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gcHJvcHMuaW1hZ2VVcmw7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRTbGJJZCA9IHByb3BzLmludGVybmV0U2xiSWQ7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRTbGJQb3J0ID0gcHJvcHMuaW50ZXJuZXRTbGJQb3J0O1xuICAgICAgICB0aGlzLmludGVybmV0U2xiUHJvdG9jb2wgPSBwcm9wcy5pbnRlcm5ldFNsYlByb3RvY29sO1xuICAgICAgICB0aGlzLmludGVybmV0VGFyZ2V0UG9ydCA9IHByb3BzLmludGVybmV0VGFyZ2V0UG9ydDtcbiAgICAgICAgdGhpcy5pbnRyYW5ldFNsYklkID0gcHJvcHMuaW50cmFuZXRTbGJJZDtcbiAgICAgICAgdGhpcy5pbnRyYW5ldFNsYlBvcnQgPSBwcm9wcy5pbnRyYW5ldFNsYlBvcnQ7XG4gICAgICAgIHRoaXMuaW50cmFuZXRTbGJQcm90b2NvbCA9IHByb3BzLmludHJhbmV0U2xiUHJvdG9jb2w7XG4gICAgICAgIHRoaXMuaW50cmFuZXRUYXJnZXRQb3J0ID0gcHJvcHMuaW50cmFuZXRUYXJnZXRQb3J0O1xuICAgICAgICB0aGlzLmlzTXVsdGlsaW5ndWFsQXBwID0gcHJvcHMuaXNNdWx0aWxpbmd1YWxBcHA7XG4gICAgICAgIHRoaXMuamF2YVN0YXJ0VXBDb25maWcgPSBwcm9wcy5qYXZhU3RhcnRVcENvbmZpZztcbiAgICAgICAgdGhpcy5qZGsgPSBwcm9wcy5qZGs7XG4gICAgICAgIHRoaXMubGltaXRDcHUgPSBwcm9wcy5saW1pdENwdTtcbiAgICAgICAgdGhpcy5saW1pdE1lbSA9IHByb3BzLmxpbWl0TWVtO1xuICAgICAgICB0aGlzLmxpdmVuZXNzID0gcHJvcHMubGl2ZW5lc3M7XG4gICAgICAgIHRoaXMubG9jYWxWb2x1bWUgPSBwcm9wcy5sb2NhbFZvbHVtZTtcbiAgICAgICAgdGhpcy5sb2dpY2FsUmVnaW9uSWQgPSBwcm9wcy5sb2dpY2FsUmVnaW9uSWQ7XG4gICAgICAgIHRoaXMubW91bnREZXNjcyA9IHByb3BzLm1vdW50RGVzY3M7XG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gcHJvcHMubmFtZXNwYWNlO1xuICAgICAgICB0aGlzLm5hc0lkID0gcHJvcHMubmFzSWQ7XG4gICAgICAgIHRoaXMucGFja2FnZVR5cGUgPSBwcm9wcy5wYWNrYWdlVHlwZTtcbiAgICAgICAgdGhpcy5wYWNrYWdlVXJsID0gcHJvcHMucGFja2FnZVVybDtcbiAgICAgICAgdGhpcy5wYWNrYWdlVmVyc2lvbiA9IHByb3BzLnBhY2thZ2VWZXJzaW9uO1xuICAgICAgICB0aGlzLnBvc3RTdGFydCA9IHByb3BzLnBvc3RTdGFydDtcbiAgICAgICAgdGhpcy5wcmVTdG9wID0gcHJvcHMucHJlU3RvcDtcbiAgICAgICAgdGhpcy5yZWFkaW5lc3MgPSBwcm9wcy5yZWFkaW5lc3M7XG4gICAgICAgIHRoaXMucmVwbGljYXMgPSBwcm9wcy5yZXBsaWNhcztcbiAgICAgICAgdGhpcy5yZXBvSWQgPSBwcm9wcy5yZXBvSWQ7XG4gICAgICAgIHRoaXMucmVxdWVzdHNDcHUgPSBwcm9wcy5yZXF1ZXN0c0NwdTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0c01lbSA9IHByb3BzLnJlcXVlc3RzTWVtO1xuICAgICAgICB0aGlzLnJ1bnRpbWVDbGFzc05hbWUgPSBwcm9wcy5ydW50aW1lQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnNsc0NvbmZpZ3MgPSBwcm9wcy5zbHNDb25maWdzO1xuICAgICAgICB0aGlzLnN0b3JhZ2VUeXBlID0gcHJvcHMuc3RvcmFnZVR5cGU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHByb3BzLnRpbWVvdXQ7XG4gICAgICAgIHRoaXMudXJpRW5jb2RpbmcgPSBwcm9wcy51cmlFbmNvZGluZztcbiAgICAgICAgdGhpcy51c2VCb2R5RW5jb2RpbmcgPSBwcm9wcy51c2VCb2R5RW5jb2Rpbmc7XG4gICAgICAgIHRoaXMud2ViQ29udGFpbmVyID0gcHJvcHMud2ViQ29udGFpbmVyO1xuICAgICAgICB0aGlzLndlYkNvbnRhaW5lckNvbmZpZyA9IHByb3BzLndlYkNvbnRhaW5lckNvbmZpZztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBjbHVzdGVySWQ6IHRoaXMuY2x1c3RlcklkLFxuICAgICAgICAgICAgYXBwbGljYXRpb25EZXNjcmlwdGlvbjogdGhpcy5hcHBsaWNhdGlvbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY29tbWFuZDogdGhpcy5jb21tYW5kLFxuICAgICAgICAgICAgY29tbWFuZEFyZ3M6IHRoaXMuY29tbWFuZEFyZ3MsXG4gICAgICAgICAgICBkZXBsb3lBY3Jvc3NOb2RlczogdGhpcy5kZXBsb3lBY3Jvc3NOb2RlcyxcbiAgICAgICAgICAgIGRlcGxveUFjcm9zc1pvbmVzOiB0aGlzLmRlcGxveUFjcm9zc1pvbmVzLFxuICAgICAgICAgICAgZWRhc0NvbnRhaW5lclZlcnNpb246IHRoaXMuZWRhc0NvbnRhaW5lclZlcnNpb24sXG4gICAgICAgICAgICBlbmFibGVBaGFzOiB0aGlzLmVuYWJsZUFoYXMsXG4gICAgICAgICAgICBlbnZzOiB0aGlzLmVudnMsXG4gICAgICAgICAgICBpbWFnZVVybDogdGhpcy5pbWFnZVVybCxcbiAgICAgICAgICAgIGludGVybmV0U2xiSWQ6IHRoaXMuaW50ZXJuZXRTbGJJZCxcbiAgICAgICAgICAgIGludGVybmV0U2xiUG9ydDogdGhpcy5pbnRlcm5ldFNsYlBvcnQsXG4gICAgICAgICAgICBpbnRlcm5ldFNsYlByb3RvY29sOiB0aGlzLmludGVybmV0U2xiUHJvdG9jb2wsXG4gICAgICAgICAgICBpbnRlcm5ldFRhcmdldFBvcnQ6IHRoaXMuaW50ZXJuZXRUYXJnZXRQb3J0LFxuICAgICAgICAgICAgaW50cmFuZXRTbGJJZDogdGhpcy5pbnRyYW5ldFNsYklkLFxuICAgICAgICAgICAgaW50cmFuZXRTbGJQb3J0OiB0aGlzLmludHJhbmV0U2xiUG9ydCxcbiAgICAgICAgICAgIGludHJhbmV0U2xiUHJvdG9jb2w6IHRoaXMuaW50cmFuZXRTbGJQcm90b2NvbCxcbiAgICAgICAgICAgIGludHJhbmV0VGFyZ2V0UG9ydDogdGhpcy5pbnRyYW5ldFRhcmdldFBvcnQsXG4gICAgICAgICAgICBpc011bHRpbGluZ3VhbEFwcDogdGhpcy5pc011bHRpbGluZ3VhbEFwcCxcbiAgICAgICAgICAgIGphdmFTdGFydFVwQ29uZmlnOiB0aGlzLmphdmFTdGFydFVwQ29uZmlnLFxuICAgICAgICAgICAgamRrOiB0aGlzLmpkayxcbiAgICAgICAgICAgIGxpbWl0Q3B1OiB0aGlzLmxpbWl0Q3B1LFxuICAgICAgICAgICAgbGltaXRNZW06IHRoaXMubGltaXRNZW0sXG4gICAgICAgICAgICBsaXZlbmVzczogdGhpcy5saXZlbmVzcyxcbiAgICAgICAgICAgIGxvY2FsVm9sdW1lOiB0aGlzLmxvY2FsVm9sdW1lLFxuICAgICAgICAgICAgbG9naWNhbFJlZ2lvbklkOiB0aGlzLmxvZ2ljYWxSZWdpb25JZCxcbiAgICAgICAgICAgIG1vdW50RGVzY3M6IHRoaXMubW91bnREZXNjcyxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogdGhpcy5uYW1lc3BhY2UsXG4gICAgICAgICAgICBuYXNJZDogdGhpcy5uYXNJZCxcbiAgICAgICAgICAgIHBhY2thZ2VUeXBlOiB0aGlzLnBhY2thZ2VUeXBlLFxuICAgICAgICAgICAgcGFja2FnZVVybDogdGhpcy5wYWNrYWdlVXJsLFxuICAgICAgICAgICAgcGFja2FnZVZlcnNpb246IHRoaXMucGFja2FnZVZlcnNpb24sXG4gICAgICAgICAgICBwb3N0U3RhcnQ6IHRoaXMucG9zdFN0YXJ0LFxuICAgICAgICAgICAgcHJlU3RvcDogdGhpcy5wcmVTdG9wLFxuICAgICAgICAgICAgcmVhZGluZXNzOiB0aGlzLnJlYWRpbmVzcyxcbiAgICAgICAgICAgIHJlcGxpY2FzOiB0aGlzLnJlcGxpY2FzLFxuICAgICAgICAgICAgcmVwb0lkOiB0aGlzLnJlcG9JZCxcbiAgICAgICAgICAgIHJlcXVlc3RzQ3B1OiB0aGlzLnJlcXVlc3RzQ3B1LFxuICAgICAgICAgICAgcmVxdWVzdHNNZW06IHRoaXMucmVxdWVzdHNNZW0sXG4gICAgICAgICAgICBydW50aW1lQ2xhc3NOYW1lOiB0aGlzLnJ1bnRpbWVDbGFzc05hbWUsXG4gICAgICAgICAgICBzbHNDb25maWdzOiB0aGlzLnNsc0NvbmZpZ3MsXG4gICAgICAgICAgICBzdG9yYWdlVHlwZTogdGhpcy5zdG9yYWdlVHlwZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIHVyaUVuY29kaW5nOiB0aGlzLnVyaUVuY29kaW5nLFxuICAgICAgICAgICAgdXNlQm9keUVuY29kaW5nOiB0aGlzLnVzZUJvZHlFbmNvZGluZyxcbiAgICAgICAgICAgIHdlYkNvbnRhaW5lcjogdGhpcy53ZWJDb250YWluZXIsXG4gICAgICAgICAgICB3ZWJDb250YWluZXJDb25maWc6IHRoaXMud2ViQ29udGFpbmVyQ29uZmlnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NLOHNBcHBsaWNhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb21tYW5kQXJnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhcmd1bWVudDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhcmd1bWVudD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENvbW1hbmRBcmdzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbW1hbmRBcmdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fQ29tbWFuZEFyZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FyZ3VtZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFyZ3VtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvbW1hbmRBcmdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkNvbW1hbmRBcmdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb21tYW5kQXJnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Db21tYW5kQXJnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkNvbW1hbmRBcmdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0NvbW1hbmRBcmdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBBcmd1bWVudDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcmd1bWVudCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29uY0dDVGhyZWFkc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29uY0dDVGhyZWFkc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb25jR0NUaHJlYWRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fQ29uY0dDVGhyZWFkc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDb25jR0NUaHJlYWRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkNvbmNHQ1RocmVhZHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbmNHQ1RocmVhZHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uQ29uY0dDVGhyZWFkc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkNvbmNHQ1RocmVhZHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fQ29uY0dDVGhyZWFkc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21QYXJhbXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEN1c3RvbVBhcmFtc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21QYXJhbXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9DdXN0b21QYXJhbXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3VzdG9tUGFyYW1zUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkN1c3RvbVBhcmFtc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tUGFyYW1zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkN1c3RvbVBhcmFtc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkN1c3RvbVBhcmFtc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9DdXN0b21QYXJhbXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW52c1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFbnZzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVudnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9FbnZzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVudnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uRW52c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRW52c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5FbnZzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uRW52c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9FbnZzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4ZWNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29tbWFuZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21tYW5kPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXhlY1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0V4ZWNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmQnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbW1hbmQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRXhlY1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5FeGVjYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFeGVjUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkV4ZWNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25FeGVjUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0V4ZWNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbW1hbmQ6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0cxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5HMUhlYXBSZWdpb25TaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHMUhlYXBSZWdpb25TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkcxSGVhcFJlZ2lvblNpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25HMUhlYXBSZWdpb25TaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0cxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0NMb2dGaWxlUGF0aFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgR0NMb2dGaWxlUGF0aFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHQ0xvZ0ZpbGVQYXRoUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlUGF0aFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJHQ0xvZ0ZpbGVQYXRoUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVBhdGhgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEdDTG9nRmlsZVBhdGhQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uR0NMb2dGaWxlUGF0aGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkdDTG9nRmlsZVBhdGhQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlUGF0aFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBHQ0xvZ0ZpbGVTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBHQ0xvZ0ZpbGVTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEdDTG9nRmlsZVNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9HQ0xvZ0ZpbGVTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkdDTG9nRmlsZVNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uR0NMb2dGaWxlU2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgR0NMb2dGaWxlU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5HQ0xvZ0ZpbGVTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uR0NMb2dGaWxlU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9HQ0xvZ0ZpbGVTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEhlYXBEdW1wUGF0aFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSGVhcER1bXBQYXRoUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEhlYXBEdW1wUGF0aFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0hlYXBEdW1wUGF0aFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIZWFwRHVtcFBhdGhQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSGVhcER1bXBQYXRoYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIZWFwRHVtcFBhdGhQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSGVhcER1bXBQYXRoYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSGVhcER1bXBQYXRoUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0hlYXBEdW1wUGF0aFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIdHRwR2V0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhdGg6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwSGVhZGVyczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwSGVhZGVycz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLkh0dHBIZWFkZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNjaGVtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzY2hlbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9ydDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb3J0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhvc3Q6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaG9zdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEh0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEhlYWRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9IdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5odHRwSGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2NoZW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zY2hlbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjaGVtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJIVFRQXCIsXCJIVFRQU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2hlbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ob3N0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkh0dHBHZXRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEdldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5IdHRwR2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhdGgpLFxuICAgICAgSHR0cEhlYWRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uSHR0cEhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaHR0cEhlYWRlcnMpLFxuICAgICAgU2NoZW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaGVtZSksXG4gICAgICBQb3J0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgSG9zdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEdldEh0dHBIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEdldEh0dHBIZWFkZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIdHRwSGVhZGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkh0dHBIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkh0dHBIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5IdHRwSGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluaXRpYWxIZWFwU2l6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5pdGlhbEhlYXBTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluaXRpYWxIZWFwU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0luaXRpYWxIZWFwU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbml0aWFsSGVhcFNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSW5pdGlhbEhlYXBTaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbml0aWFsSGVhcFNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSW5pdGlhbEhlYXBTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSW5pdGlhbEhlYXBTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0luaXRpYWxIZWFwU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBKYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhIZWFwU2l6ZTogVGhlIG1heGltdW0gaGVhcCBzaXplLiBVbml0OiBNQi4gVmFsdWUgcmFuZ2U6IDAgdG8gKDAuODUgeCBBdmFpbGFibGUgbWVtb3J5IGZvciBFQ1MgaW5zdGFuY2VzIG9mIHRoZSBhcHBsaWNhdGlvbilcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1heEhlYXBTaXplPzogUm9zSzhzQXBwbGljYXRpb24uTWF4SGVhcFNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VHY0xvZ0ZpbGVSb3RhdGlvbjpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZUdjTG9nRmlsZVJvdGF0aW9uPzogUm9zSzhzQXBwbGljYXRpb24uVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjdXN0b21QYXJhbXM6IElmIHRoZSBwcmVjZWRpbmcgb3B0aW9ucyBjYW5ub3QgbWVldCB5b3VyIHJlcXVpcmVtZW50cywgeW91IGNhbiB1c2UgY3VzdG9tIHBhcmFtZXRlcnMuIFNlcGFyYXRlIHBhcmFtZXRlcnMgd2l0aCBzcGFjZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjdXN0b21QYXJhbXM/OiBSb3NLOHNBcHBsaWNhdGlvbi5DdXN0b21QYXJhbXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXJhbGxlbEdjVGhyZWFkczogTnVtYmVyIG9mIHBhcmFsbGVsIHRocmVhZHMgcGFyYWxsZWwgZ2Mgd2lsbCB1c2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXJhbGxlbEdjVGhyZWFkcz86IFJvc0s4c0FwcGxpY2F0aW9uLlBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5pdGlhbEhlYXBTaXplOiBUaGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBoZWFwLiBVbml0OiBNQi4gVGhlIHZhbHVlIDAgaW5kaWNhdGVzIHRoYXQgdGhlIHNpemUgaXMgdW5saW1pdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5pdGlhbEhlYXBTaXplPzogUm9zSzhzQXBwbGljYXRpb24uSW5pdGlhbEhlYXBTaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlOiBXaGV0aGVyIGVuYWJsZSBydWxlIHBhcnNpbmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGU/OiBSb3NLOHNBcHBsaWNhdGlvbi5OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlYWRTdGFja1NpemU6IFRocmVhZCBzdGFjayBzaXplIChLQikuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aHJlYWRTdGFja1NpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5UaHJlYWRTdGFja1NpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdXJ2aXZvclJhdGlvOiBFZGVuL1N1cnZpdm9yIE1lbW9yeSBTaXplIFJhdGlvLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3Vydml2b3JSYXRpbz86IFJvc0s4c0FwcGxpY2F0aW9uLlN1cnZpdm9yUmF0aW9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwZXJtU2l6ZTogSW5pdGlhbCBQZXJtYW5lbnQgR2VuZXJhdGlvbiBTaXplIChNQikuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwZXJtU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLlBlcm1TaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmV3U2l6ZTogSW5pdGlhbCBZb3VuZyBHZW5lcmF0aW9uIFNpemUgKE1CKS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5ld1NpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5OZXdTaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29uY0djVGhyZWFkczogTnVtYmVyIG9mIHRocmVhZHMgY29uY3VycmVudCBnYyB3aWxsIHVzZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbmNHY1RocmVhZHM/OiBSb3NLOHNBcHBsaWNhdGlvbi5Db25jR0NUaHJlYWRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmV3UmF0aW86IE9sZC9Zb3VuZyBHZW5lcmF0aW9uIE1lbW9yeSBTaXplIFJhdGlvLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmV3UmF0aW8/OiBSb3NLOHNBcHBsaWNhdGlvbi5OZXdSYXRpb1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGdjTG9nRmlsZVNpemU6IEdDIGxvZyBmaWxlIHNpemUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBnY0xvZ0ZpbGVTaXplPzogUm9zSzhzQXBwbGljYXRpb24uR0NMb2dGaWxlU2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heE5ld1NpemU6IFRoZSBtYXhpbXVtIHNpemUgb2YgeW91bmcgZ2VuZXJhdGlvbi4gVW5pdDogTUIuIFRoZSB2YWx1ZSBtYXhfdWludHggaW5kaWNhdGVzIHRoYXQgbm8gdXBwZXIgbGltaXQgaXMgc3BlY2lmaWVkIGZvciBtZW1vcnkgdXNhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhOZXdTaXplPzogUm9zSzhzQXBwbGljYXRpb24uTWF4TmV3U2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGcxSGVhcFJlZ2lvblNpemU6IFNpemUgb2YgdGhlIEcxIHJlZ2lvbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBnMUhlYXBSZWdpb25TaXplPzogUm9zSzhzQXBwbGljYXRpb24uRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaW50R2M6XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmludEdjPzogUm9zSzhzQXBwbGljYXRpb24uUHJpbnRHQ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heERpcmVjdE1lbW9yeVNpemU6IFRoZSBtYXhpbXVtIHNpemUgb2YgTklPIGRpcmVjdCBtZW1vcnkuIFVuaXQ6IE1CLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4RGlyZWN0TWVtb3J5U2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLk1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhQZXJtU2l6ZTogVGhlIG1heGltdW0gc2l6ZSBvZiBwZXJtYW5lbnQgZ2VuZXJhdGlvbi4gVW5pdDogTUIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhQZXJtU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLk1heFBlcm1TaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3I6IFdoZXRoZXIgZHVtcCBtZW1vcnkgd2hlbiBPT00gb2NjdXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3I/OiBSb3NLOHNBcHBsaWNhdGlvbi5IZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nOiBXaGV0aGVyIGVuYWJsZSBhdXRvbWF0aWMgbmFtZXNwYWNlIHBhcnNpbmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZz86IFJvc0s4c0FwcGxpY2F0aW9uLk5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGVhcER1bXBQYXRoOiBEdW1wIEZpbGUgUGF0aC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhlYXBEdW1wUGF0aD86IFJvc0s4c0FwcGxpY2F0aW9uLkhlYXBEdW1wUGF0aFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGdjTG9nRmlsZVBhdGg6IEdDIGxvZyBkaXJlY3RvcnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBnY0xvZ0ZpbGVQYXRoPzogUm9zSzhzQXBwbGljYXRpb24uR0NMb2dGaWxlUGF0aFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaW50R2NEYXRlU3RhbXBzOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJpbnRHY0RhdGVTdGFtcHM/OiBSb3NLOHNBcHBsaWNhdGlvbi5QcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHlvdW5nR2FyYmFnZUNvbGxlY3RvcjogSXQgaXMgdXNlZCB0byBjb25maWd1cmUgeW91bmcgZ2VuZXJhdGlvbiBnYXJiYWdlIGNvbGxlY3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHlvdW5nR2FyYmFnZUNvbGxlY3Rvcj86IFJvc0s4c0FwcGxpY2F0aW9uLllvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9sZEdhcmJhZ2VDb2xsZWN0b3I6IEl0IGlzIHVzZWQgdG8gY29uZmlndXJlIHRoZSBvbGQgZ2VuZXJhdGlvbiBnYXJiYWdlIGNvbGxlY3Rvci4gWW91IG11c3QgY29uZmlndXJlIHRoZSB5b3VuZyBnZW5lcmF0aW9uIGdhcmJhZ2UgY29sbGVjdG9yIGZpcnN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb2xkR2FyYmFnZUNvbGxlY3Rvcj86IFJvc0s4c0FwcGxpY2F0aW9uLk9sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEphdmFTdGFydFVwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEphdmFTdGFydFVwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heEhlYXBTaXplJywgUm9zSzhzQXBwbGljYXRpb25fTWF4SGVhcFNpemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5tYXhIZWFwU2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlR2NMb2dGaWxlUm90YXRpb24nLCBSb3NLOHNBcHBsaWNhdGlvbl9Vc2VHQ0xvZ0ZpbGVSb3RhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZUdjTG9nRmlsZVJvdGF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21QYXJhbXMnLCBSb3NLOHNBcHBsaWNhdGlvbl9DdXN0b21QYXJhbXNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21QYXJhbXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmFsbGVsR2NUaHJlYWRzJywgUm9zSzhzQXBwbGljYXRpb25fUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wYXJhbGxlbEdjVGhyZWFkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbEhlYXBTaXplJywgUm9zSzhzQXBwbGljYXRpb25fSW5pdGlhbEhlYXBTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5pdGlhbEhlYXBTaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGUnLCBSb3NLOHNBcHBsaWNhdGlvbl9OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5uYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVhZFN0YWNrU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX1RocmVhZFN0YWNrU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRocmVhZFN0YWNrU2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3Vydml2b3JSYXRpbycsIFJvc0s4c0FwcGxpY2F0aW9uX1N1cnZpdm9yUmF0aW9Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5zdXJ2aXZvclJhdGlvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJtU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX1Blcm1TaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucGVybVNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ld1NpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9OZXdTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubmV3U2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uY0djVGhyZWFkcycsIFJvc0s4c0FwcGxpY2F0aW9uX0NvbmNHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jb25jR2NUaHJlYWRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXdSYXRpbycsIFJvc0s4c0FwcGxpY2F0aW9uX05ld1JhdGlvUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubmV3UmF0aW8pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2djTG9nRmlsZVNpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9HQ0xvZ0ZpbGVTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ2NMb2dGaWxlU2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4TmV3U2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX01heE5ld1NpemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5tYXhOZXdTaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnMUhlYXBSZWdpb25TaXplJywgUm9zSzhzQXBwbGljYXRpb25fRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmcxSGVhcFJlZ2lvblNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW50R2MnLCBSb3NLOHNBcHBsaWNhdGlvbl9QcmludEdDUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbnRHYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4RGlyZWN0TWVtb3J5U2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX01heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5tYXhEaXJlY3RNZW1vcnlTaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhQZXJtU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX01heFBlcm1TaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4UGVybVNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yJywgUm9zSzhzQXBwbGljYXRpb25fSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5oZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmcnLCBSb3NLOHNBcHBsaWNhdGlvbl9OYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFwRHVtcFBhdGgnLCBSb3NLOHNBcHBsaWNhdGlvbl9IZWFwRHVtcFBhdGhQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5oZWFwRHVtcFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2djTG9nRmlsZVBhdGgnLCBSb3NLOHNBcHBsaWNhdGlvbl9HQ0xvZ0ZpbGVQYXRoUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ2NMb2dGaWxlUGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbnRHY0RhdGVTdGFtcHMnLCBSb3NLOHNBcHBsaWNhdGlvbl9QcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW50R2NEYXRlU3RhbXBzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd5b3VuZ0dhcmJhZ2VDb2xsZWN0b3InLCBSb3NLOHNBcHBsaWNhdGlvbl9Zb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy55b3VuZ0dhcmJhZ2VDb2xsZWN0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29sZEdhcmJhZ2VDb2xsZWN0b3InLCBSb3NLOHNBcHBsaWNhdGlvbl9PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMub2xkR2FyYmFnZUNvbGxlY3RvcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJKYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5KYXZhU3RhcnRVcENvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSmF2YVN0YXJ0VXBDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25KYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9KYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTWF4SGVhcFNpemU6IHJvc0s4c0FwcGxpY2F0aW9uTWF4SGVhcFNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhIZWFwU2l6ZSksXG4gICAgICBVc2VHQ0xvZ0ZpbGVSb3RhdGlvbjogcm9zSzhzQXBwbGljYXRpb25Vc2VHQ0xvZ0ZpbGVSb3RhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZUdjTG9nRmlsZVJvdGF0aW9uKSxcbiAgICAgIEN1c3RvbVBhcmFtczogcm9zSzhzQXBwbGljYXRpb25DdXN0b21QYXJhbXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jdXN0b21QYXJhbXMpLFxuICAgICAgUGFyYWxsZWxHQ1RocmVhZHM6IHJvc0s4c0FwcGxpY2F0aW9uUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXJhbGxlbEdjVGhyZWFkcyksXG4gICAgICBJbml0aWFsSGVhcFNpemU6IHJvc0s4c0FwcGxpY2F0aW9uSW5pdGlhbEhlYXBTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5pdGlhbEhlYXBTaXplKSxcbiAgICAgIE5hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZTogcm9zSzhzQXBwbGljYXRpb25OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGUpLFxuICAgICAgVGhyZWFkU3RhY2tTaXplOiByb3NLOHNBcHBsaWNhdGlvblRocmVhZFN0YWNrU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocmVhZFN0YWNrU2l6ZSksXG4gICAgICBTdXJ2aXZvclJhdGlvOiByb3NLOHNBcHBsaWNhdGlvblN1cnZpdm9yUmF0aW9Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdXJ2aXZvclJhdGlvKSxcbiAgICAgIFBlcm1TaXplOiByb3NLOHNBcHBsaWNhdGlvblBlcm1TaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVybVNpemUpLFxuICAgICAgTmV3U2l6ZTogcm9zSzhzQXBwbGljYXRpb25OZXdTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV3U2l6ZSksXG4gICAgICBDb25jR0NUaHJlYWRzOiByb3NLOHNBcHBsaWNhdGlvbkNvbmNHQ1RocmVhZHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25jR2NUaHJlYWRzKSxcbiAgICAgIE5ld1JhdGlvOiByb3NLOHNBcHBsaWNhdGlvbk5ld1JhdGlvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV3UmF0aW8pLFxuICAgICAgR0NMb2dGaWxlU2l6ZTogcm9zSzhzQXBwbGljYXRpb25HQ0xvZ0ZpbGVTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2NMb2dGaWxlU2l6ZSksXG4gICAgICBNYXhOZXdTaXplOiByb3NLOHNBcHBsaWNhdGlvbk1heE5ld1NpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhOZXdTaXplKSxcbiAgICAgIEcxSGVhcFJlZ2lvblNpemU6IHJvc0s4c0FwcGxpY2F0aW9uRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmcxSGVhcFJlZ2lvblNpemUpLFxuICAgICAgUHJpbnRHQzogcm9zSzhzQXBwbGljYXRpb25QcmludEdDUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbnRHYyksXG4gICAgICBNYXhEaXJlY3RNZW1vcnlTaXplOiByb3NLOHNBcHBsaWNhdGlvbk1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhEaXJlY3RNZW1vcnlTaXplKSxcbiAgICAgIE1heFBlcm1TaXplOiByb3NLOHNBcHBsaWNhdGlvbk1heFBlcm1TaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4UGVybVNpemUpLFxuICAgICAgSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3I6IHJvc0s4c0FwcGxpY2F0aW9uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvciksXG4gICAgICBOYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZzogcm9zSzhzQXBwbGljYXRpb25OYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nKSxcbiAgICAgIEhlYXBEdW1wUGF0aDogcm9zSzhzQXBwbGljYXRpb25IZWFwRHVtcFBhdGhQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oZWFwRHVtcFBhdGgpLFxuICAgICAgR0NMb2dGaWxlUGF0aDogcm9zSzhzQXBwbGljYXRpb25HQ0xvZ0ZpbGVQYXRoUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2NMb2dGaWxlUGF0aCksXG4gICAgICBQcmludEdDRGF0ZVN0YW1wczogcm9zSzhzQXBwbGljYXRpb25QcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW50R2NEYXRlU3RhbXBzKSxcbiAgICAgIFlvdW5nR2FyYmFnZUNvbGxlY3Rvcjogcm9zSzhzQXBwbGljYXRpb25Zb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy55b3VuZ0dhcmJhZ2VDb2xsZWN0b3IpLFxuICAgICAgT2xkR2FyYmFnZUNvbGxlY3Rvcjogcm9zSzhzQXBwbGljYXRpb25PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub2xkR2FyYmFnZUNvbGxlY3RvciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGl2ZW5lc3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZW91dFNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZW91dFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXhlYzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBleGVjPzogUm9zSzhzQXBwbGljYXRpb24uRXhlY1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluaXRpYWxEZWxheVNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5pdGlhbERlbGF5U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwR2V0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBHZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5IdHRwR2V0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGVyaW9kU2Vjb25kczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwZXJpb2RTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRjcFNvY2tldDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0Y3BTb2NrZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5UY3BTb2NrZXRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmYWlsdXJlVGhyZXNob2xkOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZhaWx1cmVUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VjY2Vzc1RocmVzaG9sZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdWNjZXNzVGhyZXNob2xkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTGl2ZW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTGl2ZW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9MaXZlbmVzc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjJywgUm9zSzhzQXBwbGljYXRpb25fRXhlY1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmV4ZWMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEdldCcsIFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5odHRwR2V0KSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RjcFNvY2tldCcsIFJvc0s4c0FwcGxpY2F0aW9uX1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRjcFNvY2tldCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSk7XG4gICAgaWYocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkICYmICh0eXBlb2YgcHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTGl2ZW5lc3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTGl2ZW5lc3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExpdmVuZXNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkxpdmVuZXNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTGl2ZW5lc3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTGl2ZW5lc3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFRpbWVvdXRTZWNvbmRzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSxcbiAgICAgIEV4ZWM6IHJvc0s4c0FwcGxpY2F0aW9uRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV4ZWMpLFxuICAgICAgSW5pdGlhbERlbGF5U2Vjb25kczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSxcbiAgICAgIEh0dHBHZXQ6IHJvc0s4c0FwcGxpY2F0aW9uSHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBHZXQpLFxuICAgICAgUGVyaW9kU2Vjb25kczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSxcbiAgICAgIFRjcFNvY2tldDogcm9zSzhzQXBwbGljYXRpb25UY3BTb2NrZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50Y3BTb2NrZXQpLFxuICAgICAgRmFpbHVyZVRocmVzaG9sZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSxcbiAgICAgIFN1Y2Nlc3NUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9jYWxWb2x1bWVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnRQYXRoOiBTcGVjaWZpZXMgdGhlIHBhdGggd2l0aGluIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb3VudFBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdHlwZTogU3BlY2lmaWVzIHRoZSBtb3VudGluZyB0eXBlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBub2RlUGF0aDogU3BlY2lmaWVzIHRoZSBob3N0IHBhdGguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBub2RlUGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYExvY2FsVm9sdW1lUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvY2FsVm9sdW1lUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTG9jYWxWb2x1bWVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tb3VudFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm9kZVBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubm9kZVBhdGgpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTG9jYWxWb2x1bWVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTG9jYWxWb2x1bWVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvY2FsVm9sdW1lUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkxvY2FsVm9sdW1lYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTG9jYWxWb2x1bWVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTG9jYWxWb2x1bWVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE1vdW50UGF0aDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb3VudFBhdGgpLFxuICAgICAgVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgIE5vZGVQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5vZGVQYXRoKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9NYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTWF4RGlyZWN0TWVtb3J5U2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhEaXJlY3RNZW1vcnlTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9NYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1heEhlYXBTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNYXhIZWFwU2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhIZWFwU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX01heEhlYXBTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1heEhlYXBTaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heEhlYXBTaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhIZWFwU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhIZWFwU2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk1heEhlYXBTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX01heEhlYXBTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1heE5ld1NpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1heE5ld1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWF4TmV3U2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX01heE5ld1NpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTWF4TmV3U2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhOZXdTaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhOZXdTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heE5ld1NpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25NYXhOZXdTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX01heE5ld1NpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWF4UGVybVNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1heFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTWF4UGVybVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTWF4UGVybVNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTWF4UGVybVNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heFBlcm1TaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTWF4UGVybVNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTWF4UGVybVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTW91bnREZXNjc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb3VudFBhdGg6IFNwZWNpZmllcyB0aGUgcGF0aCB0byBtb3VudCB0aGUgZmlsZSBzeXN0ZW0gdG8gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vdW50UGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYXNQYXRoOiBTcGVjaWZpZXMgdGhlIGZpbGUgc3RvcmFnZSBwYXRoLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFzUGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1vdW50RGVzY3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTW91bnREZXNjc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX01vdW50RGVzY3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tb3VudFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hc1BhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFzUGF0aCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNb3VudERlc2NzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1vdW50RGVzY3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1vdW50RGVzY3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTW91bnREZXNjc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk1vdW50RGVzY3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTW91bnREZXNjc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTW91bnRQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vdW50UGF0aCksXG4gICAgICBOYXNQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hc1BhdGgpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9OYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE5hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE5hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk5hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25OYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOZXdSYXRpb1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTmV3UmF0aW9Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmV3UmF0aW9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9OZXdSYXRpb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJOZXdSYXRpb1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5OZXdSYXRpb2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmV3UmF0aW9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmV3UmF0aW9gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25OZXdSYXRpb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9OZXdSYXRpb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOZXdTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOZXdTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5ld1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9OZXdTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk5ld1NpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmV3U2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmV3U2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5OZXdTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTmV3U2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9OZXdTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE9sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE9sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX09sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5PbGRHYXJiYWdlQ29sbGVjdG9yYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBPbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk9sZEdhcmJhZ2VDb2xsZWN0b3JgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX09sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUGFyYWxsZWxHQ1RocmVhZHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBhcmFsbGVsR0NUaHJlYWRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUGFyYWxsZWxHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybVNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUGVybVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUGVybVNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUGVybVNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBlcm1TaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBlcm1TaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUGVybVNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUGVybVNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUG9zdFN0YXJ0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGV4ZWM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXhlYz86IFJvc0s4c0FwcGxpY2F0aW9uLlBvc3RTdGFydEV4ZWNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwR2V0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBHZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRIdHRwR2V0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQb3N0U3RhcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9zdFN0YXJ0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjJywgUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0RXhlY1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmV4ZWMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBHZXQnLCBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaHR0cEdldCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQb3N0U3RhcnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb3N0U3RhcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUG9zdFN0YXJ0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgRXhlYzogcm9zSzhzQXBwbGljYXRpb25Qb3N0U3RhcnRFeGVjUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhlYyksXG4gICAgICBIdHRwR2V0OiByb3NLOHNBcHBsaWNhdGlvblBvc3RTdGFydEh0dHBHZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwR2V0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQb3N0U3RhcnRFeGVjUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbW1hbmQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tbWFuZD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQb3N0U3RhcnRFeGVjUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvc3RTdGFydEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRFeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jb21tYW5kKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvc3RTdGFydEV4ZWNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0RXhlY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9zdFN0YXJ0RXhlY1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRFeGVjYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUG9zdFN0YXJ0RXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRFeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21tYW5kOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb21tYW5kKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQb3N0U3RhcnRIdHRwR2V0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhdGg6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwSGVhZGVyczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwSGVhZGVycz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLkh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzY2hlbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NoZW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvc3RTdGFydEh0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBIZWFkZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2hlbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaGVtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2NoZW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNjaGVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRIdHRwR2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBvc3RTdGFydEh0dHBHZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Qb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydEh0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBhdGg6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGF0aCksXG4gICAgICBIdHRwSGVhZGVyczogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25IdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaHR0cEhlYWRlcnMpLFxuICAgICAgU2NoZW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaGVtZSksXG4gICAgICBQb3J0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgSG9zdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmVTdG9wUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGV4ZWM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXhlYz86IFJvc0s4c0FwcGxpY2F0aW9uLlByZVN0b3BFeGVjUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEdldDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwR2V0PzogUm9zSzhzQXBwbGljYXRpb24uUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByZVN0b3BQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V4ZWMnLCBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wRXhlY1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmV4ZWMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBHZXQnLCBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmh0dHBHZXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJlU3RvcFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmVTdG9wYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QcmVTdG9wUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIEV4ZWM6IHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcEV4ZWNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5leGVjKSxcbiAgICAgIEh0dHBHZXQ6IHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwR2V0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmVTdG9wRXhlY1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbW1hbmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJlU3RvcEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wRXhlY1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmVTdG9wRXhlY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcEV4ZWNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QcmVTdG9wRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ29tbWFuZDogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGF0aDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBIZWFkZXJzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBIZWFkZXJzPzogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzY2hlbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NoZW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmVTdG9wSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBIZWFkZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5odHRwSGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2NoZW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zY2hlbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjaGVtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJIVFRQXCIsXCJIVFRQU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2hlbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ob3N0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByZVN0b3BIdHRwR2V0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BIdHRwR2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmVTdG9wSHR0cEdldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BIdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhdGgpLFxuICAgICAgSHR0cEhlYWRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5odHRwSGVhZGVycyksXG4gICAgICBTY2hlbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2NoZW1lKSxcbiAgICAgIFBvcnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9ydCksXG4gICAgICBIb3N0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhvc3QpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmludEdDUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJpbnRHQ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmludEdDUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUHJpbnRHQ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJpbnRHQ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmludEdDYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmludEdDUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByaW50R0NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QcmludEdDUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1ByaW50R0NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByaW50R0NEYXRlU3RhbXBzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9QcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJpbnRHQ0RhdGVTdGFtcHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByaW50R0NEYXRlU3RhbXBzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlYWRpbmVzc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0U2Vjb25kczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleGVjOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4ZWM/OiBSb3NLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NFeGVjUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5pdGlhbERlbGF5U2Vjb25kczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbml0aWFsRGVsYXlTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBHZXQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEdldD86IFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwZXJpb2RTZWNvbmRzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBlcmlvZFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGNwU29ja2V0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRjcFNvY2tldD86IFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZhaWx1cmVUaHJlc2hvbGQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmFpbHVyZVRocmVzaG9sZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdWNjZXNzVGhyZXNob2xkOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1Y2Nlc3NUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWFkaW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dFNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dFNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V4ZWMnLCBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NFeGVjUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXhlYykpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbERlbGF5U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbERlbGF5U2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwR2V0JywgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmh0dHBHZXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZFNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZFNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGNwU29ja2V0JywgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMudGNwU29ja2V0KSk7XG4gICAgaWYocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkICYmICh0eXBlb2YgcHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsdXJlVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsdXJlVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1Y2Nlc3NUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1Y2Nlc3NUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZWFkaW5lc3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVGltZW91dFNlY29uZHM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpLFxuICAgICAgRXhlYzogcm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NFeGVjUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhlYyksXG4gICAgICBJbml0aWFsRGVsYXlTZWNvbmRzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpLFxuICAgICAgSHR0cEdldDogcm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cEdldCksXG4gICAgICBQZXJpb2RTZWNvbmRzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpLFxuICAgICAgVGNwU29ja2V0OiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRjcFNvY2tldCksXG4gICAgICBGYWlsdXJlVGhyZXNob2xkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpLFxuICAgICAgU3VjY2Vzc1RocmVzaG9sZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWFkaW5lc3NFeGVjUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbW1hbmQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tbWFuZD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWFkaW5lc3NFeGVjUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc0V4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NFeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jb21tYW5kKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlYWRpbmVzc0V4ZWNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzRXhlY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzRXhlY1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NFeGVjYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NFeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21tYW5kOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb21tYW5kKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWFkaW5lc3NIdHRwR2V0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhdGg6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwSGVhZGVyczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwSGVhZGVycz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzY2hlbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NoZW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBIZWFkZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2hlbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaGVtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2NoZW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNjaGVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVhZGluZXNzSHR0cEdldFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NIdHRwR2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBhdGg6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGF0aCksXG4gICAgICBIdHRwSGVhZGVyczogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaHR0cEhlYWRlcnMpLFxuICAgICAgU2NoZW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaGVtZSksXG4gICAgICBQb3J0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgSG9zdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9ydDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb3J0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhvc3Q6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaG9zdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ob3N0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NUY3BTb2NrZXRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NUY3BTb2NrZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQb3J0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgSG9zdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTbHNDb25maWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IFRoZSBjb2xsZWN0aW9uIHR5cGUuIFRoZSBmaWxlIHR5cGUgaXMgZmlsZSBhbmQgdGhlIHN0YW5kYXJkIG91dHB1dCB0eXBlIGlzIHN0ZG91dC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9nRGlyOiBJZiB0aGUgc3RhbmRhcmQgb3V0cHV0IHR5cGUgaXMgdXNlZCwgdGhlIGNvbGxlY3Rpb24gcGF0aCBpcyBzdGRvdXQubG9nLiBJZiB0aGUgZmlsZSB0eXBlIGlzIHVzZWQsIHRoZSBjb2xsZWN0aW9uIHBhdGggaXMgdGhlIHBhdGggb2YgdGhlIGNvbGxlY3RlZCBmaWxlLiBXaWxkY2FyZHMoKikgYXJlIHN1cHBvcnRlZC4gVGhlIGNvbGxlY3Rpb24gcGF0aCBtdXN0IG1hdGNoIHRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uOlxuICAgICAqIF4vKCArKS8oLiAqKV4vJC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ0Rpcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsb2dzdG9yZTogVGhlIG5hbWUgb2YgdGhlIExvZ3N0b3JlLiBNYWtlIHN1cmUgdGhhdCB0aGUgbmFtZSBvZiB0aGUgTG9nc3RvcmUgaXMgdW5pcXVlIGluIHRoZSBjbHVzdGVyLiBUaGUgbmFtZSBtdXN0IGNvbXBseSB3aXRoIHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gb25seSBsb3dlcmNhc2UgbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzKF8pLiBUaGUgbmFtZSBtdXN0IHN0YXJ0IGFuZCBlbmQgd2l0aCBhIGxvd2VyY2FzZSBsZXR0ZXIgb3IgYSBkaWdpdC4gVGhlIG5hbWUgbXVzdCBiZSAzIHRvIDYzIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIGVtcHR5LCB0aGUgc3lzdGVtIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGEgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ3N0b3JlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2xzQ29uZmlnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTbHNDb25maWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fU2xzQ29uZmlnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZmlsZVwiLFwic3Rkb3V0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dEaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nRGlyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dzdG9yZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTbHNDb25maWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlNsc0NvbmZpZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNsc0NvbmZpZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uU2xzQ29uZmlnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblNsc0NvbmZpZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fU2xzQ29uZmlnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgIExvZ0Rpcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dEaXIpLFxuICAgICAgTG9nc3RvcmU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nc3RvcmUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFN1cnZpdm9yUmF0aW9Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFN1cnZpdm9yUmF0aW9Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3Vydml2b3JSYXRpb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1N1cnZpdm9yUmF0aW9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU3Vydml2b3JSYXRpb1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5TdXJ2aXZvclJhdGlvYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTdXJ2aXZvclJhdGlvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlN1cnZpdm9yUmF0aW9gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25TdXJ2aXZvclJhdGlvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1N1cnZpdm9yUmF0aW9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGNwU29ja2V0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUY3BTb2NrZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fVGNwU29ja2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hvc3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaG9zdCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUY3BTb2NrZXRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uVGNwU29ja2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUY3BTb2NrZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uVGNwU29ja2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uVGNwU29ja2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUG9ydDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIEhvc3Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGhyZWFkU3RhY2tTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUaHJlYWRTdGFja1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGhyZWFkU3RhY2tTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fVGhyZWFkU3RhY2tTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRocmVhZFN0YWNrU2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5UaHJlYWRTdGFja1NpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRocmVhZFN0YWNrU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5UaHJlYWRTdGFja1NpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25UaHJlYWRTdGFja1NpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fVGhyZWFkU3RhY2tTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Vc2VHQ0xvZ0ZpbGVSb3RhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uVXNlR0NMb2dGaWxlUm90YXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlVzZUdDTG9nRmlsZVJvdGF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFdlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwUG9ydDogVGhlIHBvcnQgcmFuZ2UgaXMgZnJvbSAxMDI0IHRvIDY1NTM1LiBUaGUgYWRtaW4gcGVybWlzc2lvbiBpcyBjb25maWd1cmVkIGZvciB0aGUgY29udGFpbmVyLCBidXQgdGhlIHJvb3QgcGVybWlzc2lvbiBpcyByZXF1aXJlZCB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gcG9ydHMgd2l0aCBudW1iZXJzIGxlc3MgdGhhbiAxMDI0LiBUaGVyZWZvcmUsIGVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIDEwMjQgd2l0aGluIHRoZSByYW5nZS4gSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCA4MDgwIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cFBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXJpRW5jb2Rpbmc6IFRoZSBlbmNvZGluZyBmb3JtYXQgZm9yIFRvbWNhdC4gVmFsaWQgdmFsdWVzOiBVVEYtOCwgSVNPLTg4NTktMSwgR0JLLCBhbmQgR0IyMzEyLiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIElTTy04ODU5LTEgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1cmlFbmNvZGluZz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb250ZXh0UGF0aDogVGhlIGN1c3RvbSBwYXRoLiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvbmx5IHdoZW4gdGhlIENvbnRleHRJbnB1dFR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBjdXN0b20uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb250ZXh0UGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb250ZXh0SW5wdXRUeXBlOiBTcGVjaWZpZXMgd2hldGhlciB0byBjdXN0b21pemUgdGhlIGFjY2VzcyBwYXRoIGZvciB0aGUgYXBwbGljYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiB3YXI6IFRoZSBhcHBsaWNhdGlvbiBhY2Nlc3MgcGF0aCBpcyB0aGUgbmFtZSBvZiB0aGUgV0FSIHBhY2thZ2UuIFlvdSBkbyBub3QgbmVlZCB0byBlbnRlciBhIGN1c3RvbSBwYXRoLlxuICAgICAqIHJvb3Q6IFRoZSBhcHBsaWNhdGlvbiBhY2Nlc3MgcGF0aCBpcyAvLiBZb3UgZG8gbm90IG5lZWQgdG8gZW50ZXIgYSBjdXN0b20gcGF0aC5cbiAgICAgKiBjdXN0b206IElmIHlvdSBzZWxlY3QgdGhpcyBvcHRpb24sIHlvdSBtdXN0IHNldCBjb250ZXh0UGF0aCB0byBhIGN1c3RvbSBwYXRoLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29udGV4dElucHV0VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VCb2R5RW5jb2Rpbmc6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSBCb2R5RW5jb2RpbmcgZm9yIFVSTC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZUJvZHlFbmNvZGluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmVyWG1sOiBzZXJ2ZXJYbWw6IFRoZSBjb250ZW50IG9mIHRoZSBzZXJ2ZXIueG1sIGZpbGUgY3VzdG9taXplZCBpbiBhZHZhbmNlZCBjb25maWd1cmF0aW9ucy5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIFVzZUFkdmFuY2VkU2VydmVyWG1sIGlzIHNldCB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVyWG1sPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heFRocmVhZHM6IFRoZSBudW1iZXIgb2YgY29ubmVjdGlvbnMgaW4gdGhlIGNvbm5lY3Rpb24gcG9vbC4gRGVmYXVsdCB2YWx1ZTogNDAwLlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgZ3JlYXRseSBhZmZlY3RzIHRoZSBhcHBsaWNhdGlvbiBwZXJmb3JtYW5jZS4gV2UgcmVjb21tZW5kIHRoYXQgeW91IHNldCB0aGlzIHBhcmFtZXRlciB1bmRlciBwcm9mZXNzaW9uYWwgZ3VpZGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhUaHJlYWRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHVzZUFkdmFuY2VkU2VydmVyWG1sOiBTcGVjaWZpZXMgd2hldGhlciB0byB1c2UgYWR2YW5jZWQgY29uZmlndXJhdGlvbnMgdG8gY3VzdG9taXplIHRoZSBzZXJ2ZXIueG1sIGZpbGUuIFdoZW4gdGhlIHByZWNlZGluZyBwYXJhbWV0ZXIgdHlwZSBhbmQgc3BlY2lmaWMgcGFyYW1ldGVycyBjYW5ub3QgbWVldCB5b3VyIHJlcXVpcmVtZW50cywgeW91IGNhbiB1c2UgYWR2YW5jZWQgY29uZmlndXJhdGlvbnMgdG8gZWRpdCB0aGUgc2VydmVyLnhtbCBmaWxlIG9mIFRvbWNhdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZUFkdmFuY2VkU2VydmVyWG1sPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VEZWZhdWx0Q29uZmlnOiBTcGVjaWZpZXMgd2hldGhlciB0byB1c2UgdGhlIGN1c3RvbSBjb25maWd1cmF0aW9uLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gaXMgbm90IHVzZWQsIHdoZXJlYXMgdGhlIHZhbHVlIGZhbHNlIGluZGljYXRlcyB0aGF0IHRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBpcyB1c2VkLiBJZiB0aGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gaXMgbm90IHVzZWQsIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVycyBkbyBub3QgdGFrZSBlZmZlY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VEZWZhdWx0Q29uZmlnPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFdlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXZWJDb250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmh0dHBQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5odHRwUG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cFBvcnQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5odHRwUG9ydCxcbiAgICAgICAgICAgIG1pbjogMTAyNCxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmh0dHBQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1cmlFbmNvZGluZycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51cmlFbmNvZGluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGV4dFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGV4dFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRleHRJbnB1dFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGV4dElucHV0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlQm9keUVuY29kaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy51c2VCb2R5RW5jb2RpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlclhtbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJYbWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFRocmVhZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4VGhyZWFkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlQWR2YW5jZWRTZXJ2ZXJYbWwnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnVzZUFkdmFuY2VkU2VydmVyWG1sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VEZWZhdWx0Q29uZmlnJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy51c2VEZWZhdWx0Q29uZmlnKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIldlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5XZWJDb250YWluZXJDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5XZWJDb250YWluZXJDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBIdHRwUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwUG9ydCksXG4gICAgICBVcmlFbmNvZGluZzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy51cmlFbmNvZGluZyksXG4gICAgICBDb250ZXh0UGF0aDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250ZXh0UGF0aCksXG4gICAgICBDb250ZXh0SW5wdXRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRleHRJbnB1dFR5cGUpLFxuICAgICAgVXNlQm9keUVuY29kaW5nOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VCb2R5RW5jb2RpbmcpLFxuICAgICAgU2VydmVyWG1sOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZlclhtbCksXG4gICAgICBNYXhUaHJlYWRzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heFRocmVhZHMpLFxuICAgICAgVXNlQWR2YW5jZWRTZXJ2ZXJYbWw6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZUFkdmFuY2VkU2VydmVyWG1sKSxcbiAgICAgIFVzZURlZmF1bHRDb25maWc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZURlZmF1bHRDb25maWcpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFlvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFlvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1lvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJZb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uWW91bmdHYXJiYWdlQ29sbGVjdG9yYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBZb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uWW91bmdHYXJiYWdlQ29sbGVjdG9yYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1lvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6SzhzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NLOHNDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNzQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIENTIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3NDbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVBc206IFdoZXRoZXIgZW5hYmxlIEFTTS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVBc20/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgbmFtZXNwYWNlIHRvIHdoaWNoIHRoZSBjbHVzdGVyIHRoYXQgeW91IHdhbnQgdG8gaW1wb3J0IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZXNwYWNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSzhzQ2x1c3RlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NLOHNDbHVzdGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQ2x1c3RlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlQXNtJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuYWJsZUFzbSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZXNwYWNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NzQ2x1c3RlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNzQ2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjc0NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jc0NsdXN0ZXJJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NLOHNDbHVzdGVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0s4c0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQ2x1c3RlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNDbHVzdGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NLOHNDbHVzdGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ3NDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3NDbHVzdGVySWQpLFxuICAgICAgRW5hYmxlQXNtOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZUFzbSksXG4gICAgICBOYW1lc3BhY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lc3BhY2VJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6SzhzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0s4c0NsdXN0ZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyTmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNsdXN0ZXI6XG4yOiBFQ1MgY2x1c3RlclxuNTogQ29udGFpbmVyIFNlcnZpY2UgSzhzIGNsdXN0ZXIgb3IgU2VydmVybGVzcyBLOHMgY2x1c3RlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlclR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3NDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgSzhzIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDc0NsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOZXR3b3JrTW9kZTogTmV0d29yayBub2RlOlxuMTogQ2xhc3NpYyBuZXR3b3JrXG4yOiBWUENcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5ldHdvcmtNb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5vZGVOdW06IE51bWJlciBvZiBub2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vZGVOdW06IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3ViTmV0Q2lkcjogU3ViIG5ldCBDSURSLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3ViTmV0Q2lkcjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcGNJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWc3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNzQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIENTIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGNzQ2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlQXNtOiBXaGV0aGVyIGVuYWJsZSBBU00uXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZUFzbTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIG5hbWVzcGFjZSB0byB3aGljaCB0aGUgY2x1c3RlciB0aGF0IHlvdSB3YW50IHRvIGltcG9ydCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0s4c0NsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0s4c0NsdXN0ZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJJZCA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3Rlck5hbWUgPSB0aGlzLmdldEF0dCgnQ2x1c3Rlck5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlclR5cGUgPSB0aGlzLmdldEF0dCgnQ2x1c3RlclR5cGUnKTtcbiAgICAgICAgdGhpcy5hdHRyQ3NDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ3NDbHVzdGVySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTmV0d29ya01vZGUgPSB0aGlzLmdldEF0dCgnTmV0d29ya01vZGUnKTtcbiAgICAgICAgdGhpcy5hdHRyTm9kZU51bSA9IHRoaXMuZ2V0QXR0KCdOb2RlTnVtJyk7XG4gICAgICAgIHRoaXMuYXR0clN1Yk5ldENpZHIgPSB0aGlzLmdldEF0dCgnU3ViTmV0Q2lkcicpO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHRoaXMuZ2V0QXR0KCdWcGNJZCcpO1xuICAgICAgICB0aGlzLmF0dHJWc3dpdGNoSWQgPSB0aGlzLmdldEF0dCgnVnN3aXRjaElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNzQ2x1c3RlcklkID0gcHJvcHMuY3NDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuZW5hYmxlQXNtID0gcHJvcHMuZW5hYmxlQXNtO1xuICAgICAgICB0aGlzLm5hbWVzcGFjZUlkID0gcHJvcHMubmFtZXNwYWNlSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3NDbHVzdGVySWQ6IHRoaXMuY3NDbHVzdGVySWQsXG4gICAgICAgICAgICBlbmFibGVBc206IHRoaXMuZW5hYmxlQXNtLFxuICAgICAgICAgICAgbmFtZXNwYWNlSWQ6IHRoaXMubmFtZXNwYWNlSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0s4c0NsdXN0ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSzhzU2xiQmluZGluZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VQb3J0SW5mb3M6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcG9ydHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZVBvcnRJbmZvczogQXJyYXk8Um9zSzhzU2xiQmluZGluZy5TZXJ2aWNlUG9ydEluZm9zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHR5cGU6IFRoZSB0eXBlIG9mIHRoZSBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogaW50ZXJuZXQgYW5kIGludHJhbmV0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIHRoZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLiBJZiB5b3UgbGVhdmUgdGhpcyBwYXJhbWV0ZXIgZW1wdHksIEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZSAoRURBUykgYXV0b21hdGljYWxseSBwdXJjaGFzZXMgYW4gU0xCIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjaGVkdWxlcjogVGhlIHNjaGVkdWxpbmcgYWxnb3JpdGhtLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqIHdycjogQmFja2VuZCBzZXJ2ZXJzIHRoYXQgaGF2ZSBoaWdoZXIgd2VpZ2h0cyByZWNlaXZlIG1vcmUgcmVxdWVzdHMgdGhhbiB0aG9zZSB0aGF0IGhhdmUgbG93ZXIgd2VpZ2h0cy5cbiAgICAgKiBycjogUmVxdWVzdHMgYXJlIGRpc3RyaWJ1dGVkIHRvIGJhY2tlbmQgc2VydmVycyBpbiBzZXF1ZW5jZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiByclxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVjaWZpY2F0aW9uOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiB0aGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjaWZpY2F0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0s4c1NsYkJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSzhzU2xiQmluZGluZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c1NsYkJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiaW50ZXJuZXRcIixcImludHJhbmV0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcHBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVkdWxlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2hlZHVsZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NwZWNpZmljYXRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3BlY2lmaWNhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VQb3J0SW5mb3MnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZVBvcnRJbmZvcykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZVBvcnRJbmZvcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNlcnZpY2VQb3J0SW5mb3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlUG9ydEluZm9zKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVBvcnRJbmZvcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlUG9ydEluZm9zLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlUG9ydEluZm9zJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzU2xiQmluZGluZ19TZXJ2aWNlUG9ydEluZm9zUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNlcnZpY2VQb3J0SW5mb3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSzhzU2xiQmluZGluZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNTbGJCaW5kaW5nYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NLOHNTbGJCaW5kaW5nUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzU2xiQmluZGluZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zSzhzU2xiQmluZGluZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFwcElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcElkKSxcbiAgICAgIENsdXN0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVySWQpLFxuICAgICAgU2VydmljZVBvcnRJbmZvczogcm9zLmxpc3RNYXBwZXIocm9zSzhzU2xiQmluZGluZ1NlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2VydmljZVBvcnRJbmZvcyksXG4gICAgICBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgTG9hZEJhbGFuY2VySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9hZEJhbGFuY2VySWQpLFxuICAgICAgU2NoZWR1bGVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaGVkdWxlciksXG4gICAgICBTcGVjaWZpY2F0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNwZWNpZmljYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NLOHNTbGJCaW5kaW5nIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpLOHNTbGJCaW5kaW5nXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWRkcmVzczogVGhlIGFkZHJlc3Mgb2YgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFkZHJlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDaGFuZ2VPcmRlcklkOiBUaGUgSUQgb2YgdGhlIGNoYW5nZSBwcm9jZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2hhbmdlT3JkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIGxvYWQgYmFsYW5jZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2FkQmFsYW5jZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2FkQmFsYW5jZXJOYW1lOiBUaGUgbmFtZSBvZiBsb2FkIGJhbGFuY2VyIGluc3RhbmNlIGRlZmluZWQgaW4gRURBUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlUG9ydEluZm9zOiBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBvcnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlUG9ydEluZm9zOiBBcnJheTxSb3NLOHNTbGJCaW5kaW5nLlNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHlwZTogVGhlIHR5cGUgb2YgdGhlIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBpbnRlcm5ldCBhbmQgaW50cmFuZXQuXG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIHRoZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLiBJZiB5b3UgbGVhdmUgdGhpcyBwYXJhbWV0ZXIgZW1wdHksIEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZSAoRURBUykgYXV0b21hdGljYWxseSBwdXJjaGFzZXMgYW4gU0xCIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQmFsYW5jZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjaGVkdWxlcjogVGhlIHNjaGVkdWxpbmcgYWxnb3JpdGhtLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqIHdycjogQmFja2VuZCBzZXJ2ZXJzIHRoYXQgaGF2ZSBoaWdoZXIgd2VpZ2h0cyByZWNlaXZlIG1vcmUgcmVxdWVzdHMgdGhhbiB0aG9zZSB0aGF0IGhhdmUgbG93ZXIgd2VpZ2h0cy5cbiAgICAgKiBycjogUmVxdWVzdHMgYXJlIGRpc3RyaWJ1dGVkIHRvIGJhY2tlbmQgc2VydmVycyBpbiBzZXF1ZW5jZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiByclxuICAgICAqL1xuICAgIHB1YmxpYyBzY2hlZHVsZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVjaWZpY2F0aW9uOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiB0aGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3BlY2lmaWNhdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0s4c1NsYkJpbmRpbmdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0s4c1NsYkJpbmRpbmcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFkZHJlc3MgPSB0aGlzLmdldEF0dCgnQWRkcmVzcycpO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDaGFuZ2VPcmRlcklkID0gdGhpcy5nZXRBdHQoJ0NoYW5nZU9yZGVySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSB0aGlzLmdldEF0dCgnTG9hZEJhbGFuY2VySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VyTmFtZSA9IHRoaXMuZ2V0QXR0KCdMb2FkQmFsYW5jZXJOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcElkID0gcHJvcHMuYXBwSWQ7XG4gICAgICAgIHRoaXMuY2x1c3RlcklkID0gcHJvcHMuY2x1c3RlcklkO1xuICAgICAgICB0aGlzLnNlcnZpY2VQb3J0SW5mb3MgPSBwcm9wcy5zZXJ2aWNlUG9ydEluZm9zO1xuICAgICAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICAgICAgICB0aGlzLmxvYWRCYWxhbmNlcklkID0gcHJvcHMubG9hZEJhbGFuY2VySWQ7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gcHJvcHMuc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLnNwZWNpZmljYXRpb24gPSBwcm9wcy5zcGVjaWZpY2F0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcElkOiB0aGlzLmFwcElkLFxuICAgICAgICAgICAgY2x1c3RlcklkOiB0aGlzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIHNlcnZpY2VQb3J0SW5mb3M6IHRoaXMuc2VydmljZVBvcnRJbmZvcyxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiB0aGlzLmxvYWRCYWxhbmNlcklkLFxuICAgICAgICAgICAgc2NoZWR1bGVyOiB0aGlzLnNjaGVkdWxlcixcbiAgICAgICAgICAgIHNwZWNpZmljYXRpb246IHRoaXMuc3BlY2lmaWNhdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSzhzU2xiQmluZGluZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c1NsYkJpbmRpbmcge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGFyZ2V0UG9ydDogVGhlIGJhY2tlbmQgcG9ydC4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFyZ2V0UG9ydDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvYWRCYWxhbmNlclByb3RvY29sOiBUaGUgcHJvdG9jb2wgb2YgbG9hZCBiYWxhbmNlci4gVmFsaWQgdmFsdWVzOiBUQ1AgYW5kIEhUVFBTLiBJZiB0aGUgSFRUUCBwcm90b2NvbCBpcyB1c2VkLCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gVENQLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyUHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjZXJ0SWQ6IFRoZSBJRCBvZiB0aGUgY2VydGlmaWNhdGUuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGlmIHRoZSBIVFRQUyBwcm90b2NvbCBpcyB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2VydElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IFRoZSBmcm9udGVuZCBwb3J0LiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuIEVhY2ggcG9ydCBtdXN0IGJlIHVuaXF1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c1NsYkJpbmRpbmdfU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0UG9ydCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRQb3J0KSk7XG4gICAgaWYocHJvcGVydGllcy50YXJnZXRQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy50YXJnZXRQb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRQb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFyZ2V0UG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGFyZ2V0UG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyUHJvdG9jb2wnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VyUHJvdG9jb2wpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmxvYWRCYWxhbmNlclByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5sb2FkQmFsYW5jZXJQcm90b2NvbCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyUHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5sb2FkQmFsYW5jZXJQcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJUQ1BcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9hZEJhbGFuY2VyUHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9hZEJhbGFuY2VyUHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZXJ0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMucG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNTbGJCaW5kaW5nLlNlcnZpY2VQb3J0SW5mb3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZpY2VQb3J0SW5mb3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzU2xiQmluZGluZy5TZXJ2aWNlUG9ydEluZm9zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c1NsYkJpbmRpbmdTZXJ2aWNlUG9ydEluZm9zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c1NsYkJpbmRpbmdfU2VydmljZVBvcnRJbmZvc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVGFyZ2V0UG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRQb3J0KSxcbiAgICAgIExvYWRCYWxhbmNlclByb3RvY29sOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvYWRCYWxhbmNlclByb3RvY29sKSxcbiAgICAgIENlcnRJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0SWQpLFxuICAgICAgUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbk5hbWU6IExvZ2ljYWwgcmVnaW9uIChvciBuYW1lc3BhY2UpIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uVGFnOiBMb2dpYyByZWdpb24gKG9yIG5hbWVzcGFjZSkgSUQgKGZvcm1hdDogXCJwaHlzaWNhbCByZWdpb24gSUQ6IGxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIsIG9yIFwibG9naWNhbCB6b25lIGlkZW50aWZpZXJcIilcbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25UYWc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWJ1Z0VuYWJsZTogV2hldGhlciBkZWJ1ZyBpcyBlbmFibGVcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWJ1Z0VuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IExvZ2ljIHJlZ2lvbiAob3IgbmFtZXNwYWNlKSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZ2lvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uVGFnJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZ2lvblRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uVGFnJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZ2lvblRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVidWdFbmFibGUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlYnVnRW5hYmxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSZWdpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvbk5hbWUpLFxuICAgICAgUmVnaW9uVGFnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvblRhZyksXG4gICAgICBEZWJ1Z0VuYWJsZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVidWdFbmFibGUpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NVc2VyRGVmaW5lUmVnaW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmVsb25nUmVnaW9uOiBVbmRlciB0aGUgcGh5c2ljYWwgcmVnaW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCZWxvbmdSZWdpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVidWdFbmFibGU6IFdoZXRoZXIgZGVidWcgaXMgZW5hYmxlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWJ1Z0VuYWJsZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJZDogUmVzb3VyY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlZ2lvbk5hbWU6IFJlZ2lvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWdpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogVXNlciBhY2NvdW50IElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbk5hbWU6IExvZ2ljYWwgcmVnaW9uIChvciBuYW1lc3BhY2UpIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvblRhZzogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIElEIChmb3JtYXQ6IFwicGh5c2ljYWwgcmVnaW9uIElEOiBsb2dpY2FsIHpvbmUgaWRlbnRpZmllclwiLCBvciBcImxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIpXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvblRhZzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlYnVnRW5hYmxlOiBXaGV0aGVyIGRlYnVnIGlzIGVuYWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBkZWJ1Z0VuYWJsZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVXNlckRlZmluZVJlZ2lvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlckRlZmluZVJlZ2lvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQmVsb25nUmVnaW9uID0gdGhpcy5nZXRBdHQoJ0JlbG9uZ1JlZ2lvbicpO1xuICAgICAgICB0aGlzLmF0dHJEZWJ1Z0VuYWJsZSA9IHRoaXMuZ2V0QXR0KCdEZWJ1Z0VuYWJsZScpO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHRoaXMuZ2V0QXR0KCdJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZWdpb25OYW1lID0gdGhpcy5nZXRBdHQoJ1JlZ2lvbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcklkID0gdGhpcy5nZXRBdHQoJ1VzZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5yZWdpb25OYW1lID0gcHJvcHMucmVnaW9uTmFtZTtcbiAgICAgICAgdGhpcy5yZWdpb25UYWcgPSBwcm9wcy5yZWdpb25UYWc7XG4gICAgICAgIHRoaXMuZGVidWdFbmFibGUgPSBwcm9wcy5kZWJ1Z0VuYWJsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlZ2lvbk5hbWU6IHRoaXMucmVnaW9uTmFtZSxcbiAgICAgICAgICAgIHJlZ2lvblRhZzogdGhpcy5yZWdpb25UYWcsXG4gICAgICAgICAgICBkZWJ1Z0VuYWJsZTogdGhpcy5kZWJ1Z0VuYWJsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=