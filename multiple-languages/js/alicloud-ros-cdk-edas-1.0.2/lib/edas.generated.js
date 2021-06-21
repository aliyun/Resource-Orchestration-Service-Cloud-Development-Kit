"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosUserDefineRegion = exports.RosK8sCluster = exports.RosK8sApplication = exports.RosDeployGroup = exports.RosClusterMember = exports.RosCluster = exports.RosApplication = void 0;
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
        this.vpcId = props.vpcId;
    }
    get rosProperties() {
        return {
            clusterName: this.clusterName,
            clusterType: this.clusterType,
            networkMode: this.networkMode,
            logicalRegionId: this.logicalRegionId,
            oversoldFactor: this.oversoldFactor,
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
    errors.collect(ros.propertyValidator('packageVersion', ros.validateString)(properties.packageVersion));
    errors.collect(ros.propertyValidator('webContainerConfig', RosK8sApplication_WebContainerConfigPropertyValidator)(properties.webContainerConfig));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('jdk', ros.validateString)(properties.jdk));
    errors.collect(ros.propertyValidator('internetSlbId', ros.validateString)(properties.internetSlbId));
    errors.collect(ros.propertyValidator('preStop', RosK8sApplication_PreStopPropertyValidator)(properties.preStop));
    errors.collect(ros.propertyValidator('readiness', RosK8sApplication_ReadinessPropertyValidator)(properties.readiness));
    if (properties.internetSlbPort && (typeof properties.internetSlbPort) !== 'object') {
        errors.collect(ros.propertyValidator('internetSlbPort', ros.validateRange)({
            data: properties.internetSlbPort,
            min: 1,
            max: 65535,
        }));
    }
    errors.collect(ros.propertyValidator('internetSlbPort', ros.validateNumber)(properties.internetSlbPort));
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
    errors.collect(ros.propertyValidator('runtimeClassName', ros.validateString)(properties.runtimeClassName));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    if (properties.internetSlbProtocol && (typeof properties.internetSlbProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('internetSlbProtocol', ros.validateAllowedValues)({
            data: properties.internetSlbProtocol,
            allowedValues: ["TCP", "HTTP", "HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('internetSlbProtocol', ros.validateString)(properties.internetSlbProtocol));
    errors.collect(ros.propertyValidator('edasContainerVersion', ros.validateString)(properties.edasContainerVersion));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRhcy5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGFzLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBeUQ5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLDRCQUE0QixDQUFDLFVBQWU7SUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUcsSUFBRyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUM5SCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEUsSUFBSSxFQUFF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QVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxxQ0FBcUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7QUE1Rkwsa0RBNkZDO0FBNUZHOztHQUVHO0FBQ29CLDBDQUFzQixHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6OkFwcGxpY2F0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FwcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcGxpY2F0aW9uTmFtZTogVGhlIGFwcGxpY2F0aW9uIG5hbWUgKG9ubHkgYWxsb3cgdGhlIHVzZSBvZiBudW1iZXJzLCBsZXR0ZXJzLCAtLCBfLCB1cCB0byAzNiBjaGFyYWN0ZXJzKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCBvZiBFQ1MgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidWlsZFBhY2tJZDogRURBUy1Db250YWluZXIgY29uc3RydWN0IGEgcGFja2V0IG51bWJlciAoYXZhaWxhYmxlIHZlcnNpb24gbGlzdCBhY3F1aXJlZCB0aHJvdWdoIHRoZSBMaXN0QnVpbGRQYWNrIEFQSSAoQ29uZmlnSWQgb2YgcmVzcG9uc2UpIG9yIFwiY29udGFpbmVyIHZlcnNpb25cIiB0YWJsZSBcIkJ1aWxkaW5nIHBhY2tldCBudW1iZXJcIiBjb2x1bW4gYWNxdWlzaXRpb24pLiBXaGVuIGNyZWF0aW5nIEhTRiBhcHBsaWNhdGlvbiwgdGhpcyBwYXJhbWV0ZXIgbXVzdCBiZSBzcGVjaWZpZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBidWlsZFBhY2tJZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21wb25lbnRJZHM6IEFwcGxpY2F0aW9uIGNvbXBvbmVudCBJRCAoYXZhaWxhYmxlIHRocm91Z2ggdGhlIHF1ZXJ5IGludGVyZmFjZSB0byBvYnRhaW4gYSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gdGhlIGludGVyZmFjZSBMaXN0Q29tcG9uZW50cyksIHdoZW4gY3JlYXRpbmcgdGhlIGFwcGxpY2F0aW9uIHJ1bnRpbWUgZW52aXJvbm1lbnQgdXNpbmcgQXBhY2hlIFRvbWNhdCAod2FyIHBhY2tldCBmb3JtYXQgRHViYm9cbiAgICAgKiBBcHBsaWNhdGlvbiByZXF1aXJlZCkgb3Igc3RhbmRhcmQgSmF2YSBhcHBsaWNhdGlvbiAoamFyIHBhY2thZ2UgZm9ybWF0IFNwcmluZyBCb290IC8gU3ByaW5nIENsb3VkIGFwcGxpY2F0aW9ucyByZXF1aXJlKSB5b3UgbmVlZCB0byBzcGVjaWZ5IHdoZW4gdGhlIG9wZXJhdGluZyBlbnZpcm9ubWVudC4gQ29tbW9ubHkgdXNlZCBhcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgYW5kIG1lYW5pbmc6XG4gICAgICogNCByZXByZXNlbnRzIEFwYWNoZSBUb21jYXQgNy4wLjkxLDcgcmVwcmVzZW50ZWQgQXBhY2hlIFRvbWNhdCA4LjUuNDIsNSByZXByZXNlbnRlZCBPcGVuSkRLIDEuOC54LCA2IHJlcHJlc2VudHMgT3BlbkpES1xuICAgICAqIDEuNy54XG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tcG9uZW50SWRzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGl2ZSBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVjdUluZm86IE1hY2hpbmUgY2FwYWNpdHkgaXMgbmVlZGVkIGVjdV9pZCAoRUNTIEV4YW1wbGVzIGludHJvZHVjaW5nIGFub3RoZXIgdW5pcXVlIGlkZW50aXR5IEVEQVMgRURBUyksIHRoZSBwbHVyYWxpdHkgb2YgXCIsXCIgc2VwYXJhdGVkIChieSBxdWVyeWluZyBMaXN0U2NhbGVPdXRFY3Ugd2hlcmVpbiBlY3VfaWRcbiAgICAgKiBJbnRlcmZhY2UgdG8gb2J0YWluKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlY3VJbmZvPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrVXJsOiBBcHBsaWNhdGlvbiBIZWFsdGggQ2hlY2sgVVJMXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naWNhbFJlZ2lvbklkOiBOYW1lc3BhY2UgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpY2FsUmVnaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVR5cGU6IEFwcGxpY2F0aW9uIHBhY2tldCBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlczogd2FyIG9yIGphclxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBvbmVudElkcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21wb25lbnRJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ2ljYWxSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcGxpY2F0aW9uTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcHBsaWNhdGlvbk5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcGxpY2F0aW9uTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hcHBsaWNhdGlvbk5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAzNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwbGljYXRpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VjdUluZm8nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWN1SW5mbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhbHRoQ2hlY2tVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wYWNrYWdlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFja2FnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYWNrYWdlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJ3YXJcIixcImphclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhY2thZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWlsZFBhY2tJZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5idWlsZFBhY2tJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBcHBsaWNhdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXBwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FwcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQXBwbGljYXRpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSksXG4gICAgICBDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgIEJ1aWxkUGFja0lkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1aWxkUGFja0lkKSxcbiAgICAgIENvbXBvbmVudElkczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb21wb25lbnRJZHMpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgRWN1SW5mbzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lY3VJbmZvKSxcbiAgICAgIEhlYWx0aENoZWNrVVJMOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhlYWx0aENoZWNrVXJsKSxcbiAgICAgIExvZ2ljYWxSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpLFxuICAgICAgUGFja2FnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFja2FnZVR5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OkFwcGxpY2F0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQXBwbGljYXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkFwcGxpY2F0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwSWQ6IEFwcGxpY2F0aW9uIElkLCBhIHVuaXF1ZSBpZGVudGlmaWVyIEVEQVMgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBvcnQ6IEFwcGxpY2F0aW9uIHBvcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvcnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcGxpY2F0aW9uTmFtZTogVGhlIGFwcGxpY2F0aW9uIG5hbWUgKG9ubHkgYWxsb3cgdGhlIHVzZSBvZiBudW1iZXJzLCBsZXR0ZXJzLCAtLCBfLCB1cCB0byAzNiBjaGFyYWN0ZXJzKVxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IENsdXN0ZXIgSUQgb2YgRUNTIGFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1aWxkUGFja0lkOiBFREFTLUNvbnRhaW5lciBjb25zdHJ1Y3QgYSBwYWNrZXQgbnVtYmVyIChhdmFpbGFibGUgdmVyc2lvbiBsaXN0IGFjcXVpcmVkIHRocm91Z2ggdGhlIExpc3RCdWlsZFBhY2sgQVBJIChDb25maWdJZCBvZiByZXNwb25zZSkgb3IgXCJjb250YWluZXIgdmVyc2lvblwiIHRhYmxlIFwiQnVpbGRpbmcgcGFja2V0IG51bWJlclwiIGNvbHVtbiBhY3F1aXNpdGlvbikuIFdoZW4gY3JlYXRpbmcgSFNGIGFwcGxpY2F0aW9uLCB0aGlzIHBhcmFtZXRlciBtdXN0IGJlIHNwZWNpZmllZFxuICAgICAqL1xuICAgIHB1YmxpYyBidWlsZFBhY2tJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbXBvbmVudElkczogQXBwbGljYXRpb24gY29tcG9uZW50IElEIChhdmFpbGFibGUgdGhyb3VnaCB0aGUgcXVlcnkgaW50ZXJmYWNlIHRvIG9idGFpbiBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgaW50ZXJmYWNlIExpc3RDb21wb25lbnRzKSwgd2hlbiBjcmVhdGluZyB0aGUgYXBwbGljYXRpb24gcnVudGltZSBlbnZpcm9ubWVudCB1c2luZyBBcGFjaGUgVG9tY2F0ICh3YXIgcGFja2V0IGZvcm1hdCBEdWJib1xuICAgICAqIEFwcGxpY2F0aW9uIHJlcXVpcmVkKSBvciBzdGFuZGFyZCBKYXZhIGFwcGxpY2F0aW9uIChqYXIgcGFja2FnZSBmb3JtYXQgU3ByaW5nIEJvb3QgLyBTcHJpbmcgQ2xvdWQgYXBwbGljYXRpb25zIHJlcXVpcmUpIHlvdSBuZWVkIHRvIHNwZWNpZnkgd2hlbiB0aGUgb3BlcmF0aW5nIGVudmlyb25tZW50LiBDb21tb25seSB1c2VkIGFwcGxpY2F0aW9uIGNvbXBvbmVudCBJRCBhbmQgbWVhbmluZzpcbiAgICAgKiA0IHJlcHJlc2VudHMgQXBhY2hlIFRvbWNhdCA3LjAuOTEsNyByZXByZXNlbnRlZCBBcGFjaGUgVG9tY2F0IDguNS40Miw1IHJlcHJlc2VudGVkIE9wZW5KREsgMS44LngsIDYgcmVwcmVzZW50cyBPcGVuSkRLXG4gICAgICogMS43LnhcbiAgICAgKi9cbiAgICBwdWJsaWMgY29tcG9uZW50SWRzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aXZlIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWN1SW5mbzogTWFjaGluZSBjYXBhY2l0eSBpcyBuZWVkZWQgZWN1X2lkIChFQ1MgRXhhbXBsZXMgaW50cm9kdWNpbmcgYW5vdGhlciB1bmlxdWUgaWRlbnRpdHkgRURBUyBFREFTKSwgdGhlIHBsdXJhbGl0eSBvZiBcIixcIiBzZXBhcmF0ZWQgKGJ5IHF1ZXJ5aW5nIExpc3RTY2FsZU91dEVjdSB3aGVyZWluIGVjdV9pZFxuICAgICAqIEludGVyZmFjZSB0byBvYnRhaW4pLlxuICAgICAqL1xuICAgIHB1YmxpYyBlY3VJbmZvOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGVhbHRoQ2hlY2tVcmw6IEFwcGxpY2F0aW9uIEhlYWx0aCBDaGVjayBVUkxcbiAgICAgKi9cbiAgICBwdWJsaWMgaGVhbHRoQ2hlY2tVcmw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IE5hbWVzcGFjZSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpY2FsUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVHlwZTogQXBwbGljYXRpb24gcGFja2V0IGZvcm1hdCwgcG9zc2libGUgdmFsdWVzOiB3YXIgb3IgamFyXG4gICAgICovXG4gICAgcHVibGljIHBhY2thZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FwcGxpY2F0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBcHBsaWNhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXBwSWQgPSB0aGlzLmdldEF0dCgnQXBwSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUG9ydCA9IHRoaXMuZ2V0QXR0KCdQb3J0Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uTmFtZSA9IHByb3BzLmFwcGxpY2F0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5jbHVzdGVySWQgPSBwcm9wcy5jbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYnVpbGRQYWNrSWQgPSBwcm9wcy5idWlsZFBhY2tJZDtcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZHMgPSBwcm9wcy5jb21wb25lbnRJZHM7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lY3VJbmZvID0gcHJvcHMuZWN1SW5mbztcbiAgICAgICAgdGhpcy5oZWFsdGhDaGVja1VybCA9IHByb3BzLmhlYWx0aENoZWNrVXJsO1xuICAgICAgICB0aGlzLmxvZ2ljYWxSZWdpb25JZCA9IHByb3BzLmxvZ2ljYWxSZWdpb25JZDtcbiAgICAgICAgdGhpcy5wYWNrYWdlVHlwZSA9IHByb3BzLnBhY2thZ2VUeXBlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZTogdGhpcy5hcHBsaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICBjbHVzdGVySWQ6IHRoaXMuY2x1c3RlcklkLFxuICAgICAgICAgICAgYnVpbGRQYWNrSWQ6IHRoaXMuYnVpbGRQYWNrSWQsXG4gICAgICAgICAgICBjb21wb25lbnRJZHM6IHRoaXMuY29tcG9uZW50SWRzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlY3VJbmZvOiB0aGlzLmVjdUluZm8sXG4gICAgICAgICAgICBoZWFsdGhDaGVja1VybDogdGhpcy5oZWFsdGhDaGVja1VybCxcbiAgICAgICAgICAgIGxvZ2ljYWxSZWdpb25JZDogdGhpcy5sb2dpY2FsUmVnaW9uSWQsXG4gICAgICAgICAgICBwYWNrYWdlVHlwZTogdGhpcy5wYWNrYWdlVHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQXBwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ2x1c3RlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyTmFtZTogQ2x1c3RlciBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3Rlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyVHlwZTogQ2x1c3RlciB0eXBlLiAxLVN3YXJtIGNsdXN0ZXIsIDItRUNTIGNsdXN0ZXIsIDMtS3ViZXJuZXRlcyBDbHVzdGVyXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlclR5cGU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrTW9kZTogTmV0d29yayBUeXBlLiAxLSBjbGFzc2ljIG5ldHdvcmssIDItVlBDXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya01vZGU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IEN1c3RvbSBuYW1lc3BhY2UgUmVnaW9uSWQgKGZvcm1hdDogUGh5c2ljYWwgUmVnaW9uOiBjdXN0b20gbmFtZXNwYWNlIGlkZW50aWZpZXIpXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9naWNhbFJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG92ZXJzb2xkRmFjdG9yOiBEb2NrZXIgQ1BVIGNsdXN0ZXIgb3ZlcnNvbGQuIFN1cHBvcnQgMiAoMTogMiByYXRpbykgLyA0ICgxOiA0KSAvIDggKDE6IDggcmF0aW8pXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3ZlcnNvbGRGYWN0b3I/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFZQQyBuZXR3b3JrIElELiBJZiBuZXR3b3JrIHNlbGVjdGlvbiBWUEMsIHRoaXMgcGFyYW1ldGVyIFJlcXVpcmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2x1c3RlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDbHVzdGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2x1c3RlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9naWNhbFJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ2ljYWxSZWdpb25JZCkpO1xuICAgIGlmKHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm92ZXJzb2xkRmFjdG9yKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvdmVyc29sZEZhY3RvcicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm92ZXJzb2xkRmFjdG9yLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFsyLDQsOF0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvdmVyc29sZEZhY3RvcicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vdmVyc29sZEZhY3RvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya01vZGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmV0d29ya01vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtNb2RlJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm5ldHdvcmtNb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVyVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlclR5cGUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY2x1c3RlclR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2x1c3RlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpDbHVzdGVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDbHVzdGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2x1c3RlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2x1c3RlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENsdXN0ZXJOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lKSxcbiAgICAgIENsdXN0ZXJUeXBlOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSxcbiAgICAgIE5ldHdvcmtNb2RlOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5ldHdvcmtNb2RlKSxcbiAgICAgIExvZ2ljYWxSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dpY2FsUmVnaW9uSWQpLFxuICAgICAgT3ZlcnNvbGRGYWN0b3I6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IpLFxuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDbHVzdGVyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpDbHVzdGVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3Rlck5hbWU6IENsdXN0ZXIgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlclR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSWFhc1Byb3ZpZGVyOiBQcm92aWRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWFhc1Byb3ZpZGVyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyTmFtZTogQ2x1c3RlciBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZS4gMS1Td2FybSBjbHVzdGVyLCAyLUVDUyBjbHVzdGVyLCAzLUt1YmVybmV0ZXMgQ2x1c3RlclxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVyVHlwZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtNb2RlOiBOZXR3b3JrIFR5cGUuIDEtIGNsYXNzaWMgbmV0d29yaywgMi1WUENcbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya01vZGU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IEN1c3RvbSBuYW1lc3BhY2UgUmVnaW9uSWQgKGZvcm1hdDogUGh5c2ljYWwgUmVnaW9uOiBjdXN0b20gbmFtZXNwYWNlIGlkZW50aWZpZXIpXG4gICAgICovXG4gICAgcHVibGljIGxvZ2ljYWxSZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG92ZXJzb2xkRmFjdG9yOiBEb2NrZXIgQ1BVIGNsdXN0ZXIgb3ZlcnNvbGQuIFN1cHBvcnQgMiAoMTogMiByYXRpbykgLyA0ICgxOiA0KSAvIDggKDE6IDggcmF0aW8pXG4gICAgICovXG4gICAgcHVibGljIG92ZXJzb2xkRmFjdG9yOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFZQQyBuZXR3b3JrIElELiBJZiBuZXR3b3JrIHNlbGVjdGlvbiBWUEMsIHRoaXMgcGFyYW1ldGVyIFJlcXVpcmVkXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2x1c3RlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2x1c3Rlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTmFtZSA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVyTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVHlwZSA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVyVHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJJYWFzUHJvdmlkZXIgPSB0aGlzLmdldEF0dCgnSWFhc1Byb3ZpZGVyJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNsdXN0ZXJOYW1lID0gcHJvcHMuY2x1c3Rlck5hbWU7XG4gICAgICAgIHRoaXMuY2x1c3RlclR5cGUgPSBwcm9wcy5jbHVzdGVyVHlwZTtcbiAgICAgICAgdGhpcy5uZXR3b3JrTW9kZSA9IHByb3BzLm5ldHdvcmtNb2RlO1xuICAgICAgICB0aGlzLmxvZ2ljYWxSZWdpb25JZCA9IHByb3BzLmxvZ2ljYWxSZWdpb25JZDtcbiAgICAgICAgdGhpcy5vdmVyc29sZEZhY3RvciA9IHByb3BzLm92ZXJzb2xkRmFjdG9yO1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2x1c3Rlck5hbWU6IHRoaXMuY2x1c3Rlck5hbWUsXG4gICAgICAgICAgICBjbHVzdGVyVHlwZTogdGhpcy5jbHVzdGVyVHlwZSxcbiAgICAgICAgICAgIG5ldHdvcmtNb2RlOiB0aGlzLm5ldHdvcmtNb2RlLFxuICAgICAgICAgICAgbG9naWNhbFJlZ2lvbklkOiB0aGlzLmxvZ2ljYWxSZWdpb25JZCxcbiAgICAgICAgICAgIG92ZXJzb2xkRmFjdG9yOiB0aGlzLm92ZXJzb2xkRmFjdG9yLFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NsdXN0ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ2x1c3Rlck1lbWJlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IENsdXN0ZXIgSUQgdG8gaW1wb3J0IEVDUyBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWRzOiBFQ1MgaW5zdGFuY2UgSUQgbGlzdCB0byBpbXBvcnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFzc3dvcmQ6IFBhc3N3b3JkIEVDUyBob3N0cyBuZWVkIHRvIGltcG9ydCAoRUNTIHNldHRpbmdzIGNhbiBjb250aW51ZSB0byB1c2UgcHVyY2hhc2VkKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2x1c3Rlck1lbWJlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDbHVzdGVyTWVtYmVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2x1c3Rlck1lbWJlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlSWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZUlkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhc3N3b3JkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzd29yZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXNzd29yZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDbHVzdGVyTWVtYmVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJNZW1iZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDbHVzdGVyTWVtYmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDbHVzdGVyTWVtYmVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2x1c3RlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCksXG4gICAgICBJbnN0YW5jZUlkczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpLFxuICAgICAgUGFzc3dvcmQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFzc3dvcmQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDbHVzdGVyTWVtYmVyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpDbHVzdGVyTWVtYmVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJNZW1iZXJJZHM6IENsdXN0ZXIgbWVtYmVyIElEcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBFQ1MgaW5zdGFuY2UgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck1lbWJlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkczogRUNTIGluc3RhbmNlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IENsdXN0ZXIgSUQgdG8gaW1wb3J0IEVDUyBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkczogRUNTIGluc3RhbmNlIElEIGxpc3QgdG8gaW1wb3J0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXNzd29yZDogUGFzc3dvcmQgRUNTIGhvc3RzIG5lZWQgdG8gaW1wb3J0IChFQ1Mgc2V0dGluZ3MgY2FuIGNvbnRpbnVlIHRvIHVzZSBwdXJjaGFzZWQpXG4gICAgICovXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2x1c3Rlck1lbWJlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2x1c3Rlck1lbWJlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTWVtYmVySWRzID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJNZW1iZXJJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZHMgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VJZHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2x1c3RlcklkID0gcHJvcHMuY2x1c3RlcklkO1xuICAgICAgICB0aGlzLmluc3RhbmNlSWRzID0gcHJvcHMuaW5zdGFuY2VJZHM7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwcm9wcy5wYXNzd29yZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbHVzdGVySWQ6IHRoaXMuY2x1c3RlcklkLFxuICAgICAgICAgICAgaW5zdGFuY2VJZHM6IHRoaXMuaW5zdGFuY2VJZHMsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2x1c3Rlck1lbWJlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6RGVwbG95R3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRGVwbG95R3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwSWQ6IEFwcGxpY2F0aW9uIElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IEdyb3VwIG5hbWUsIG1heGltdW0gbGVuZ3RoIG9mIDY0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RlcGxveUdyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RlcGxveUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGVwbG95R3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmdyb3VwTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmdyb3VwTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ncm91cE5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXBwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RlcGxveUdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEZXBsb3lHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpEZXBsb3lHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEZXBsb3lHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRGVwbG95R3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBcHBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcHBJZCksXG4gICAgICBHcm91cE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpFREFTOjpEZXBsb3lHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RlcGxveUdyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpEZXBsb3lHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFwcElkOiBBcHBsaWNhdGlvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBOYW1lOiBEZXBsb3kgZ3JvdXAgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBEZXBsb3kgZ3JvdXAgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBJZDogQXBwbGljYXRpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IEdyb3VwIG5hbWUsIG1heGltdW0gbGVuZ3RoIG9mIDY0LlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpEZXBsb3lHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGVwbG95R3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0RlcGxveUdyb3VwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJHcm91cE5hbWUgPSB0aGlzLmdldEF0dCgnR3JvdXBOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0cklkID0gdGhpcy5nZXRBdHQoJ0lkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcElkID0gcHJvcHMuYXBwSWQ7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcHJvcHMuZ3JvdXBOYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcElkOiB0aGlzLmFwcElkLFxuICAgICAgICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGVwbG95R3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0s4c0FwcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsXG4gICAgICogbGV0dGVycywgYW5kIGh5cGhlbnMgKC0pLiBJdCBjYW4gYmUgdXAgdG8gMzYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogVGhlIGNsdXN0ZXIgSUQuIFlvdSBjYW4gcXVlcnkgdGhlIGNsdXN0ZXIgSUQgYnkgY2FsbGluZyB0aGUgTGlzdENsdXN0ZXIgb3BlcmF0aW9uLlxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgTGlzdENsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwbGljYXRpb25EZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBsaWNhdGlvbkRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1hbmQ6IFRoZSBjb21tYW5kIHRoYXQgaXMgc3BlY2lmaWVkLiBJZiBpdCBpcyBzcGVjaWZpZWQsIGl0IHJlcGxhY2VzIHRoZSBzdGFydHVwIGNvbW1hbmQgaW4gdGhlIGltYWdlIHdoZW4gdGhlIGltYWdlIGlzIHN0YXJ0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbWFuZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kQXJnczogVGhlIGNvbGxlY3Rpb24gb2YgY29tbWFuZHMuIEZvciBleGFtcGxlLCBbe1wiYXJndW1lbnRcIjpcIi1jXCJ9LHtcImFyZ3VtZW50XCI6XCJ0ZXN0XCJ9XSwgd2hlcmUgLWMgYW5kIHRlc3QgYXJlIHR3byBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHNldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tYW5kQXJncz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLkNvbW1hbmRBcmdzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlcGxveUFjcm9zc05vZGVzOiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXN0cmlidXRlIGFwcGxpY2F0aW9uIGluc3RhbmNlcyB0byBtdWx0aXBsZSBub2Rlcy4gVGhlIHZhbHVlIHRydWUgaW5kaWNhdGVzIHllcywgd2hlcmVhcyBvdGhlciB2YWx1ZXMgaW5kaWNhdGUgbm8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95QWNyb3NzTm9kZXM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlcGxveUFjcm9zc1pvbmVzOiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXN0cmlidXRlIGFwcGxpY2F0aW9uIGluc3RhbmNlcyB0byBtdWx0aXBsZSB6b25lcy4gVGhlIHZhbHVlIHRydWUgaW5kaWNhdGVzIHllcywgd2hlcmVhcyBvdGhlciB2YWx1ZXMgaW5kaWNhdGUgbm8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95QWNyb3NzWm9uZXM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVkYXNDb250YWluZXJWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiBFREFTIENvbnRhaW5lciBvbiB3aGljaCB0aGUgZGVwbG95bWVudCBwYWNrYWdlIG9mIHRoZSBhcHBsaWNhdGlvbiBkZXBlbmRzLlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHlvdSBkZXBsb3kgYW4gYXBwbGljYXRpb24gYnkgdXNpbmcgaW1hZ2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVkYXNDb250YWluZXJWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUFoYXM6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBhY2Nlc3MgdG8gQXBwbGljYXRpb24gSGlnaCBBdmFpbGFiaWxpdHkgU2VydmljZSAoQUhBUykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlQWhhcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW52czogVGhlIGNvbGxlY3Rpb24gb2YgZGVwbG95bWVudCBlbnZpcm9ubWVudCB2YXJpYWJsZXMuIEZvciBleGFtcGxlLCBbe1wiTmFtZVwiOlwieFwiLFwiVmFsdWVcIjpcInlcIn0se1wiTmFtZVwiOlwieDJcIixcIlZhbHVlXCI6XCJ5MlwifV0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW52cz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLkVudnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW1hZ2VVcmw6IFRoZSBpbWFnZSBVUkwuIFdoZW4gUGFja2FnZVR5cGUgaXMgc2V0IHRvIEltYWdlLCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZVVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldFNsYklkOiBUaGUgSUQgb2YgdGhlIEludGVybmV0LWZhY2luZyBTTEIgaW5zdGFuY2UuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQsIEVEQVMgYXV0b21hdGljYWxseSBwdXJjaGFzZXMgYSBuZXcgU0xCIGluc3RhbmNlIGZvciB5b3UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRTbGJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldFNsYlBvcnQ6IFRoZSBmcm9udGVuZCBwb3J0IG9mIHRoZSBJbnRlcm5ldC1mYWNpbmcgU0xCIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRTbGJQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0U2xiUHJvdG9jb2w6IFRoZSBwcm90b2NvbCBvZiB0aGUgSW50ZXJuZXQtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBUQ1AsIEhUVFAsIGFuZCBIVFRQUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldFNsYlByb3RvY29sPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0VGFyZ2V0UG9ydDogVGhlIGJhY2tlbmQgcG9ydCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNMQiBpbnN0YW5jZSwgd2hpY2ggaXMgYWxzbyB0aGUgc2VydmljZSBwb3J0IG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRUYXJnZXRQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludHJhbmV0U2xiSWQ6IFRoZSBJRCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNMQiBpbnN0YW5jZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCwgRW50ZXJwcmlzZSBEaXN0cmlidXRlZCBBcHBsaWNhdGlvbiBTZXJ2aWNlIChFREFTKSBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlcyBhIG5ldyBTTEIgaW5zdGFuY2UgZm9yIHlvdS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRyYW5ldFNsYklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludHJhbmV0U2xiUG9ydDogVGhlIGZyb250ZW5kIHBvcnQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRyYW5ldFNsYlBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJQcm90b2NvbDogVGhlIHByb3RvY29sIG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IFRDUCwgSFRUUCwgYW5kIEhUVFBTLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludHJhbmV0U2xiUHJvdG9jb2w/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRUYXJnZXRQb3J0OiBUaGUgYmFja2VuZCBwb3J0IG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU2VydmVyIExvYWQgQmFsYW5jZXIgKFNMQikgaW5zdGFuY2UsIHdoaWNoIGlzIGFsc28gdGhlIHNlcnZpY2UgcG9ydCBvZiB0aGUgYXBwbGljYXRpb24uIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRyYW5ldFRhcmdldFBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNNdWx0aWxpbmd1YWxBcHA6IFNwZWNpZmllcyB3aGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBpcyBhIG11bHRpLWxhbmd1YWdlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzTXVsdGlsaW5ndWFsQXBwPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBqYXZhU3RhcnRVcENvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb24gb2YgSmF2YSBzdGFydHVwIHBhcmFtZXRlcnMgZm9yIGEgSmF2YSBhcHBsaWNhdGlvbi4gVGhlc2Ugc3RhcnR1cCBwYXJhbWV0ZXJzIGludm9sdmUgdGhlIG1lbW9yeSwgYXBwbGljYXRpb24sIGdhcmJhZ2UgY29sbGVjdGlvbiAoR0MpIHBvbGljeSwgdG9vbHMsIHNlcnZpY2UgcmVnaXN0cmF0aW9uIGFuZCBkaXNjb3ZlcnksIGFuZCBjdXN0b20gY29uZmlndXJhdGlvbnMuIFByb3BlciBwYXJhbWV0ZXIgc2V0dGluZ3MgaGVscCByZWR1Y2UgdGhlIEdDIG92ZXJoZWFkLCBzaG9ydGVuIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgdGltZSwgYW5kIGltcHJvdmUgdGhlIHRocm91Z2hwdXQuXG4gICAgICogVGhlIHN5c3RlbSBhdXRvbWF0aWNhbGx5IGNvbmNhdGVuYXRlcyBhbGwgc3RhcnR1cCB2YWx1ZXMgYXMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgSmF2YSBzdGFydHVwIHBhcmFtZXRlcnMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBqYXZhU3RhcnRVcENvbmZpZz86IFJvc0s4c0FwcGxpY2F0aW9uLkphdmFTdGFydFVwQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgamRrOiBUaGUgdmVyc2lvbiBvZiBKYXZhIERldmVsb3BtZW50IEtpdCAoSkRLKSBvbiB3aGljaCB0aGUgZGVwbG95bWVudCBwYWNrYWdlIG9mIHRoZSBhcHBsaWNhdGlvbiBkZXBlbmRzLiBcbiAgICAgKiBWYWxpZCB2YWx1ZXM6IE9wZW4gSkRLIDcgYW5kIE9wZW4gSkRLIDguIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiB5b3UgZGVwbG95IGFuIGFwcGxpY2F0aW9uIGJ5IHVzaW5nIGltYWdlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBqZGs/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGltaXRDcHU6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBDUFVzIGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBpcyBydW5uaW5nLiBVbml0OiBjb3Jlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaW1pdENwdT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaW1pdE1lbTogVGhlIG1heGltdW0gYW1vdW50IG9mIG1lbW9yeSBhbGxvd2VkIGZvciBlYWNoIGFwcGxpY2F0aW9uIGluc3RhbmNlIHdoZW4gdGhlIGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcuIFVuaXQ6IE1CLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpbWl0TWVtPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpdmVuZXNzOiBUaGUgbGl2ZW5lc3MgY2hlY2sgb24gdGhlIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaXZlbmVzcz86IFJvc0s4c0FwcGxpY2F0aW9uLkxpdmVuZXNzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9jYWxWb2x1bWU6IFRoZSBjb25maWd1cmF0aW9uIGZvciBtb3VudGluZyBob3N0IGZpbGVzIHRvIHRoZSBjb250YWluZXIgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcuIEZvciBleGFtcGxlLCB0aGUgdmFsdWUgY2FuIGJlIFt7XCJ0eXBlXCI6XCJcIiwgXCJub2RlUGF0aFwiOlwiL2xvY2FsZmlsZXNcIiwgXCJtb3VudFBhdGhcIjpcIi9hcHAvZmlsZXNcIn0sIHtcInR5cGVcIjpcIkRpcmVjdG9yeVwiLCBcIm5vZGVQYXRoXCI6XCIvbW50XCIsIFwibW91bnRQYXRoXCI6XCIvYXBwL3N0b3JhZ2VcIn1dLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvY2FsVm9sdW1lPzogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uTG9jYWxWb2x1bWVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naWNhbFJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIEVEQVMgbmFtZXNwYWNlLiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBmb3IgYSBub24tZGVmYXVsdCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9naWNhbFJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vdW50RGVzY3M6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgTkFTIG1vdW50aW5nIGNvbmZpZ3VyYXRpb24uIEZvciBleGFtcGxlLCB0aGUgdmFsdWUgY2FuIGJlIFt7XCJOYXNQYXRoXCI6IFwiL2s4c1wiLFwiTW91bnRQYXRoXCI6IFwiL21udFwifSwge1wiTmFzUGF0aFwiOiBcIi9maWxlc1wiLCBcIk1vdW50UGF0aFwiOiBcIi9hcHAvZmlsZXNcIn1dLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vdW50RGVzY3M/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5Nb3VudERlc2NzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogVGhlIG5hbWVzcGFjZSBvZiB0aGUgS3ViZXJuZXRlcyBjbHVzdGVyLiBUaGlzIHBhcmFtZXRlciBkZXRlcm1pbmVzIHRoZSBLdWJlcm5ldGVzIG5hbWVzcGFjZSB3aGVyZSB5b3VyIGFwcGxpY2F0aW9uIGlzIGRlcGxveWVkLiBCeSBkZWZhdWx0LCB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFzSWQ6IFRoZSBJRCBvZiB0aGUgTmV0d29yayBBdHRhY2hlZCBTdG9yYWdlIChOQVMpIGZpbGUgc3lzdGVtIG1vdW50ZWQgdG8gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gVGhlIE5BUyBmaWxlIHN5c3RlbSBtdXN0IGJlIGluIHRoZSBzYW1lIHJlZ2lvbiBhcyB0aGUgY2x1c3Rlci4gVGhlIE5BUyBmaWxlIHN5c3RlbSBtdXN0IGhhdmUgYW4gYXZhaWxhYmxlIG1vdW50IHRhcmdldCwgb3IgaGF2ZSBhIG1vdW50XG4gICAgICogdGFyZ2V0IG9uIHRoZSB2U3dpdGNoIGluIHRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGxvY2F0ZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBtb3VudERlc2NzIGZpZWxkIGV4aXN0cywgYSBOQVMgZmlsZSBzeXN0ZW0gaXMgYXV0b21hdGljYWxseSBwdXJjaGFzZWQgYW5kIG1vdW50ZWQgdG8gdGhlIHZTd2l0Y2ggaW4gdGhlIFZQQyBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hc0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhY2thZ2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZGVwbG95bWVudCBwYWNrYWdlLiBWYWxpZCB2YWx1ZXM6IEZhdEphciwgV0FSLCBhbmQgSW1hZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVVybDogVGhlIFVSTCBvZiB0aGUgZGVwbG95bWVudCBwYWNrYWdlLiBUaGlzIHBhcmFtZXRlciBtdXN0IGJlIHNldCBmb3IgdGhlIGFwcGxpY2F0aW9uc1xuICAgICAqIHRoYXQgYXJlIGRlcGxveWVkIGJ5IHVzaW5nIEZhdEphciBvciBXQVIgcGFja2FnZXMuXG4gICAgICogTm90ZSBUaGUgdmVyc2lvbiBvZiBTREsgZm9yIEphdmEgb3IgUHl0aG9uIG11c3QgYmUgMi40NC4wIG9yIGxhdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHdoZW4gdGhlIFBhY2thZ2VUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gV0FSIG9yIEZhdEphci4gWW91IG11c3Qgc3BlY2lmeSBhIHZlcnNpb24uXG4gICAgICogTm90ZSBUaGUgdmVyc2lvbiBvZiBTREsgZm9yIEphdmEgb3IgUHl0aG9uIG11c3QgYmUgMi40NC4wIG9yIGxhdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvc3RTdGFydDogVGhlIHBvc3Qtc3RhcnQgc2NyaXB0LiBGb3IgZXhhbXBsZSwge1wiRXhlY1wiOiB7XCJDb21tYW5kXCI6IFtcImxzXCIsIFwiL1wiXX19LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvc3RTdGFydD86IFJvc0s4c0FwcGxpY2F0aW9uLlBvc3RTdGFydFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZVN0b3A6IFRoZSBwcmUtc3RvcCBzY3JpcHQuIEZvciBleGFtcGxlLCB7XCJFeGVjXCI6IHtcIkNvbW1hbmRcIjogW1wibHNcIiwgXCIvXCJdfX0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlU3RvcD86IFJvc0s4c0FwcGxpY2F0aW9uLlByZVN0b3BQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWFkaW5lc3M6IFRoZSByZWFkaW5lc3MgY2hlY2sgb24gdGhlIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWFkaW5lc3M/OiBSb3NLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBsaWNhczogVGhlIG51bWJlciBvZiBpbnN0YW5jZXMgZm9yIHRoZSBhcHBsaWNhdGlvbiB0aGF0IHlvdSB3YW50IHRvIGNyZWF0ZS4gRGVmYXVsdDogMVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcGxpY2FzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcG9JZDogVGhlIElEIG9mIHRoZSBpbWFnZSByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0c0NwdTogVGhlIG1heGltdW0gbnVtYmVyIG9mIENQVXMgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpcyBjcmVhdGVkLiBVbml0OiBjb3Jlcy4gVGhlIHZhbHVlIDAgaW5kaWNhdGVzIG5vIGxpbWl0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcXVlc3RzQ3B1PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcXVlc3RzTWVtOiBUaGUgbWF4aW11bSBhbW91bnQgb2YgbWVtb3J5IGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBpcyBjcmVhdGVkLiBVbml0OiBNQi4gVGhlIHZhbHVlIDAgaW5kaWNhdGVzIG5vIGxpbWl0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcXVlc3RzTWVtPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bnRpbWVDbGFzc05hbWU6IFRoZSB0eXBlIG9mIHRoZSBjb250YWluZXIgcnVudGltZS4gVGhpcyBwYXJhbWV0ZXIgaXMgYXBwbGljYWJsZSBvbmx5IHRvIGNsdXN0ZXJzIHRoYXQgdXNlIHNhbmRib3hlZCBjb250YWluZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bnRpbWVDbGFzc05hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xzQ29uZmlnczogVGhlIExvZ3N0b3JlIGNvbmZpZ3VyYXRpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNsc0NvbmZpZ3M/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5TbHNDb25maWdzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0b3JhZ2VUeXBlOiBPbmx5IFNTRCBpcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIHRpbWVvdXQgaW50ZXJ2YWwgb2YgdGhlIGNoYW5nZSBwcm9jZXNzLiBVbml0OiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXJpRW5jb2Rpbmc6IFRoZSB1bmlmb3JtIHJlc291cmNlIGlkZW50aWZpZXIgKFVSSSkgZW5jb2Rpbmcgc2NoZW1lLiBWYWxpZCB2YWx1ZXM6IElTTy04ODU5LTEsIEdCSywgR0IyMzEyLCBhbmQgVVRGLTguXG4gICAgICogTm90ZSBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkIGluIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24sIHRoZSBkZWZhdWx0IFVSSSBlbmNvZGluZ1xuICAgICAqIHNjaGVtZSBpbiB0aGUgVG9tY2F0IGNvbnRhaW5lciBpcyBhcHBsaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVyaUVuY29kaW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZUJvZHlFbmNvZGluZzogU3BlY2lmaWVzIHdoZXRoZXIgdXNlQm9keUVuY29kaW5nRm9yVVJJIGlzIGVuYWJsZWQuXG4gICAgICogTm90ZSBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkIGluIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICogZmFsc2UgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VCb2R5RW5jb2Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYkNvbnRhaW5lcjogVGhlIHZlcnNpb24gb2YgdGhlIFRvbWNhdCBjb250YWluZXIgb24gd2hpY2ggdGhlIGRlcGxveW1lbnQgcGFja2FnZSBvZiB0aGUgYXBwbGljYXRpb24gZGVwZW5kcy4gVGhpcyBwYXJhbWV0ZXIgaXMgYXBwbGljYWJsZSB0byBTcHJpbmcgQ2xvdWQgYW5kIEFwYWNoZSBEdWJibyBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgZGVwbG95ZWQgYnkgdXNpbmcgV0FSIHBhY2thZ2VzLiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdoZW4geW91IGRlcGxveSBhbiBhcHBsaWNhdGlvbiBieSB1c2luZyBpbWFnZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2ViQ29udGFpbmVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYkNvbnRhaW5lckNvbmZpZzogVGhlIFRvbWNhdCBjb250YWluZXIgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJDb250YWluZXJDb25maWc/OiBSb3NLOHNBcHBsaWNhdGlvbi5XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NLOHNBcHBsaWNhdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NLOHNBcHBsaWNhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dpY2FsUmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYXNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGl2ZW5lc3MnLCBSb3NLOHNBcHBsaWNhdGlvbl9MaXZlbmVzc1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxpdmVuZXNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludHJhbmV0U2xiSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYkNvbnRhaW5lcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy53ZWJDb250YWluZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpbWl0Q3B1Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmxpbWl0Q3B1KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbHNDb25maWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fU2xzQ29uZmlnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zbHNDb25maWdzKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYlByb3RvY29sJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW50cmFuZXRTbGJQcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJUQ1BcIixcIkhUVFBcIixcIkhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50cmFuZXRTbGJQcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRyYW5ldFNsYlByb3RvY29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYWNrYWdlVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2ViQ29udGFpbmVyQ29uZmlnJywgUm9zSzhzQXBwbGljYXRpb25fV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMud2ViQ29udGFpbmVyQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignamRrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmpkaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRTbGJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldFNsYklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVTdG9wJywgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByZVN0b3ApKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlYWRpbmVzcycsIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlYWRpbmVzcykpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50ZXJuZXRTbGJQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRlcm5ldFNsYlBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0U2xiUG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludGVybmV0U2xiUG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0U2xiUG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnRlcm5ldFNsYlBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlcGxveUFjcm9zc05vZGVzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5kZXBsb3lBY3Jvc3NOb2RlcykpO1xuICAgIGlmKHByb3BlcnRpZXMucmVxdWVzdHNNZW0gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlcXVlc3RzTWVtKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1ZXN0c01lbScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlcXVlc3RzTWVtLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RzTWVtJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJlcXVlc3RzTWVtKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYWNrYWdlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlQm9keUVuY29kaW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy51c2VCb2R5RW5jb2RpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2phdmFTdGFydFVwQ29uZmlnJywgUm9zSzhzQXBwbGljYXRpb25fSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5qYXZhU3RhcnRVcENvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNNdWx0aWxpbmd1YWxBcHAnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzTXVsdGlsaW5ndWFsQXBwKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXF1ZXN0c0NwdSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVxdWVzdHNDcHUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RzQ3B1Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVxdWVzdHNDcHUsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdHNDcHUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmVxdWVzdHNDcHUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmRBcmdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fQ29tbWFuZEFyZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuY29tbWFuZEFyZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0b3JhZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0b3JhZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9FbnZzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmVudnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ltYWdlVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmltYWdlVXJsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXBsb3lBY3Jvc3Nab25lcycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVwbG95QWNyb3NzWm9uZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bvc3RTdGFydCcsIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvc3RTdGFydCkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50ZXJuZXRUYXJnZXRQb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRlcm5ldFRhcmdldFBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0VGFyZ2V0UG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludGVybmV0VGFyZ2V0UG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0VGFyZ2V0UG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnRlcm5ldFRhcmdldFBvcnQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlcGxpY2FzICYmICh0eXBlb2YgcHJvcGVydGllcy5yZXBsaWNhcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGljYXMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXBsaWNhcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsaWNhcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5yZXBsaWNhcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwbGljYXRpb25EZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBsaWNhdGlvbkRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1cmlFbmNvZGluZycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51cmlFbmNvZGluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50cmFuZXRUYXJnZXRQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmludHJhbmV0VGFyZ2V0UG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREZXNjcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX01vdW50RGVzY3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMubW91bnREZXNjcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYWxWb2x1bWUnLCByb3MubGlzdFZhbGlkYXRvcihSb3NLOHNBcHBsaWNhdGlvbl9Mb2NhbFZvbHVtZVByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5sb2NhbFZvbHVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVudGltZUNsYXNzTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ydW50aW1lQ2xhc3NOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbW1hbmQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0U2xiUHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmludGVybmV0U2xiUHJvdG9jb2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0U2xiUHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldFNsYlByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlRDUFwiLFwiSFRUUFwiLFwiSFRUUFNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldFNsYlByb3RvY29sJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludGVybmV0U2xiUHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VkYXNDb250YWluZXJWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVkYXNDb250YWluZXJWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhY2thZ2VVcmwpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludHJhbmV0U2xiUG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50cmFuZXRTbGJQb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYlBvcnQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRyYW5ldFNsYlBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRyYW5ldFNsYlBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50cmFuZXRTbGJQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBvSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwb0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVBaGFzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVBaGFzKSk7XG4gICAgaWYocHJvcGVydGllcy5saW1pdE1lbSAmJiAodHlwZW9mIHByb3BlcnRpZXMubGltaXRNZW0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpbWl0TWVtJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubGltaXRNZW0sXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGltaXRNZW0nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubGltaXRNZW0pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSzhzQXBwbGljYXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0s4c0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NLOHNBcHBsaWNhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFwcE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBwTmFtZSksXG4gICAgICBDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgIEFwcGxpY2F0aW9uRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBwbGljYXRpb25EZXNjcmlwdGlvbiksXG4gICAgICBDb21tYW5kOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgICAgQ29tbWFuZEFyZ3M6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uQ29tbWFuZEFyZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tbWFuZEFyZ3MpLFxuICAgICAgRGVwbG95QWNyb3NzTm9kZXM6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlcGxveUFjcm9zc05vZGVzKSxcbiAgICAgIERlcGxveUFjcm9zc1pvbmVzOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXBsb3lBY3Jvc3Nab25lcyksXG4gICAgICBFZGFzQ29udGFpbmVyVmVyc2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lZGFzQ29udGFpbmVyVmVyc2lvbiksXG4gICAgICBFbmFibGVBaGFzOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVBaGFzKSxcbiAgICAgIEVudnM6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uRW52c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5lbnZzKSxcbiAgICAgIEltYWdlVXJsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmltYWdlVXJsKSxcbiAgICAgIEludGVybmV0U2xiSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRTbGJJZCksXG4gICAgICBJbnRlcm5ldFNsYlBvcnQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRTbGJQb3J0KSxcbiAgICAgIEludGVybmV0U2xiUHJvdG9jb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRTbGJQcm90b2NvbCksXG4gICAgICBJbnRlcm5ldFRhcmdldFBvcnQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRUYXJnZXRQb3J0KSxcbiAgICAgIEludHJhbmV0U2xiSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50cmFuZXRTbGJJZCksXG4gICAgICBJbnRyYW5ldFNsYlBvcnQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50cmFuZXRTbGJQb3J0KSxcbiAgICAgIEludHJhbmV0U2xiUHJvdG9jb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50cmFuZXRTbGJQcm90b2NvbCksXG4gICAgICBJbnRyYW5ldFRhcmdldFBvcnQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50cmFuZXRUYXJnZXRQb3J0KSxcbiAgICAgIElzTXVsdGlsaW5ndWFsQXBwOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc011bHRpbGluZ3VhbEFwcCksXG4gICAgICBKYXZhU3RhcnRVcENvbmZpZzogcm9zSzhzQXBwbGljYXRpb25KYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmphdmFTdGFydFVwQ29uZmlnKSxcbiAgICAgIEpESzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5qZGspLFxuICAgICAgTGltaXRDcHU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGltaXRDcHUpLFxuICAgICAgTGltaXRNZW06IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGltaXRNZW0pLFxuICAgICAgTGl2ZW5lc3M6IHJvc0s4c0FwcGxpY2F0aW9uTGl2ZW5lc3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5saXZlbmVzcyksXG4gICAgICBMb2NhbFZvbHVtZTogcm9zLmxpc3RNYXBwZXIocm9zSzhzQXBwbGljYXRpb25Mb2NhbFZvbHVtZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5sb2NhbFZvbHVtZSksXG4gICAgICBMb2dpY2FsUmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSxcbiAgICAgIE1vdW50RGVzY3M6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uTW91bnREZXNjc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tb3VudERlc2NzKSxcbiAgICAgIE5hbWVzcGFjZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lc3BhY2UpLFxuICAgICAgTmFzSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFzSWQpLFxuICAgICAgUGFja2FnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFja2FnZVR5cGUpLFxuICAgICAgUGFja2FnZVVybDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYWNrYWdlVXJsKSxcbiAgICAgIFBhY2thZ2VWZXJzaW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhY2thZ2VWZXJzaW9uKSxcbiAgICAgIFBvc3RTdGFydDogcm9zSzhzQXBwbGljYXRpb25Qb3N0U3RhcnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3N0U3RhcnQpLFxuICAgICAgUHJlU3RvcDogcm9zSzhzQXBwbGljYXRpb25QcmVTdG9wUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJlU3RvcCksXG4gICAgICBSZWFkaW5lc3M6IHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVhZGluZXNzKSxcbiAgICAgIFJlcGxpY2FzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcGxpY2FzKSxcbiAgICAgIFJlcG9JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBvSWQpLFxuICAgICAgUmVxdWVzdHNDcHU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdHNDcHUpLFxuICAgICAgUmVxdWVzdHNNZW06IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdHNNZW0pLFxuICAgICAgUnVudGltZUNsYXNzTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydW50aW1lQ2xhc3NOYW1lKSxcbiAgICAgIFNsc0NvbmZpZ3M6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uU2xzQ29uZmlnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zbHNDb25maWdzKSxcbiAgICAgIFN0b3JhZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0b3JhZ2VUeXBlKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICBVcmlFbmNvZGluZzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy51cmlFbmNvZGluZyksXG4gICAgICBVc2VCb2R5RW5jb2Rpbmc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZUJvZHlFbmNvZGluZyksXG4gICAgICBXZWJDb250YWluZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2ViQ29udGFpbmVyKSxcbiAgICAgIFdlYkNvbnRhaW5lckNvbmZpZzogcm9zSzhzQXBwbGljYXRpb25XZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWJDb250YWluZXJDb25maWcpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zSzhzQXBwbGljYXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5nZU9yZGVySWQ6IFRoZSBJRCBvZiB0aGUgY2hhbmdlIHByb2Nlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDaGFuZ2VPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJJZDogVGhlIGNsdXN0ZXIgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENzQ2x1c3RlcklkOiBUaGUgSzhzIGNsdXN0ZXIgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3NDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsXG4gICAgICogbGV0dGVycywgYW5kIGh5cGhlbnMgKC0pLiBJdCBjYW4gYmUgdXAgdG8gMzYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGFwcE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVySWQ6IFRoZSBjbHVzdGVyIElELiBZb3UgY2FuIHF1ZXJ5IHRoZSBjbHVzdGVyIElEIGJ5IGNhbGxpbmcgdGhlIExpc3RDbHVzdGVyIG9wZXJhdGlvbi5cbiAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIExpc3RDbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBsaWNhdGlvbkRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWFuZDogVGhlIGNvbW1hbmQgdGhhdCBpcyBzcGVjaWZpZWQuIElmIGl0IGlzIHNwZWNpZmllZCwgaXQgcmVwbGFjZXMgdGhlIHN0YXJ0dXAgY29tbWFuZCBpbiB0aGUgaW1hZ2Ugd2hlbiB0aGUgaW1hZ2UgaXMgc3RhcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29tbWFuZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1hbmRBcmdzOiBUaGUgY29sbGVjdGlvbiBvZiBjb21tYW5kcy4gRm9yIGV4YW1wbGUsIFt7XCJhcmd1bWVudFwiOlwiLWNcIn0se1wiYXJndW1lbnRcIjpcInRlc3RcIn1dLCB3aGVyZSAtYyBhbmQgdGVzdCBhcmUgdHdvIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb21tYW5kQXJnczogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uQ29tbWFuZEFyZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95QWNyb3NzTm9kZXM6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3RyaWJ1dGUgYXBwbGljYXRpb24gaW5zdGFuY2VzIHRvIG11bHRpcGxlIG5vZGVzLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgeWVzLCB3aGVyZWFzIG90aGVyIHZhbHVlcyBpbmRpY2F0ZSBuby5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVwbG95QWNyb3NzTm9kZXM6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVwbG95QWNyb3NzWm9uZXM6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3RyaWJ1dGUgYXBwbGljYXRpb24gaW5zdGFuY2VzIHRvIG11bHRpcGxlIHpvbmVzLiBUaGUgdmFsdWUgdHJ1ZSBpbmRpY2F0ZXMgeWVzLCB3aGVyZWFzIG90aGVyIHZhbHVlcyBpbmRpY2F0ZSBuby5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVwbG95QWNyb3NzWm9uZXM6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWRhc0NvbnRhaW5lclZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIEVEQVMgQ29udGFpbmVyIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuXG4gICAgICogTm90ZSBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdoZW4geW91IGRlcGxveSBhbiBhcHBsaWNhdGlvbiBieSB1c2luZyBpbWFnZXMuXG4gICAgICovXG4gICAgcHVibGljIGVkYXNDb250YWluZXJWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlQWhhczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIGFjY2VzcyB0byBBcHBsaWNhdGlvbiBIaWdoIEF2YWlsYWJpbGl0eSBTZXJ2aWNlIChBSEFTKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlQWhhczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZzOiBUaGUgY29sbGVjdGlvbiBvZiBkZXBsb3ltZW50IGVudmlyb25tZW50IHZhcmlhYmxlcy4gRm9yIGV4YW1wbGUsIFt7XCJOYW1lXCI6XCJ4XCIsXCJWYWx1ZVwiOlwieVwifSx7XCJOYW1lXCI6XCJ4MlwiLFwiVmFsdWVcIjpcInkyXCJ9XS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW52czogQXJyYXk8Um9zSzhzQXBwbGljYXRpb24uRW52c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbWFnZVVybDogVGhlIGltYWdlIFVSTC4gV2hlbiBQYWNrYWdlVHlwZSBpcyBzZXQgdG8gSW1hZ2UsIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0U2xiSWQ6IFRoZSBJRCBvZiB0aGUgSW50ZXJuZXQtZmFjaW5nIFNMQiBpbnN0YW5jZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCwgRURBUyBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlcyBhIG5ldyBTTEIgaW5zdGFuY2UgZm9yIHlvdS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRTbGJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0U2xiUG9ydDogVGhlIGZyb250ZW5kIHBvcnQgb2YgdGhlIEludGVybmV0LWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRTbGJQb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRTbGJQcm90b2NvbDogVGhlIHByb3RvY29sIG9mIHRoZSBJbnRlcm5ldC1mYWNpbmcgU0xCIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IFRDUCwgSFRUUCwgYW5kIEhUVFBTLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldFNsYlByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRUYXJnZXRQb3J0OiBUaGUgYmFja2VuZCBwb3J0IG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLCB3aGljaCBpcyBhbHNvIHRoZSBzZXJ2aWNlIHBvcnQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRUYXJnZXRQb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJJZDogVGhlIElEIG9mIHRoZSBpbnRlcm5hbC1mYWNpbmcgU0xCIGluc3RhbmNlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCBFbnRlcnByaXNlIERpc3RyaWJ1dGVkIEFwcGxpY2F0aW9uIFNlcnZpY2UgKEVEQVMpIGF1dG9tYXRpY2FsbHkgcHVyY2hhc2VzIGEgbmV3IFNMQiBpbnN0YW5jZSBmb3IgeW91LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRyYW5ldFNsYklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJQb3J0OiBUaGUgZnJvbnRlbmQgcG9ydCBvZiB0aGUgaW50ZXJuYWwtZmFjaW5nIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRyYW5ldFNsYlBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFNsYlByb3RvY29sOiBUaGUgcHJvdG9jb2wgb2YgdGhlIGludGVybmFsLWZhY2luZyBTTEIgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogVENQLCBIVFRQLCBhbmQgSFRUUFMuXG4gICAgICovXG4gICAgcHVibGljIGludHJhbmV0U2xiUHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRyYW5ldFRhcmdldFBvcnQ6IFRoZSBiYWNrZW5kIHBvcnQgb2YgdGhlIGludGVybmFsLWZhY2luZyBTZXJ2ZXIgTG9hZCBCYWxhbmNlciAoU0xCKSBpbnN0YW5jZSwgd2hpY2ggaXMgYWxzbyB0aGUgc2VydmljZSBwb3J0IG9mIHRoZSBhcHBsaWNhdGlvbi4gVmFsaWQgdmFsdWVzOiAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRyYW5ldFRhcmdldFBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc011bHRpbGluZ3VhbEFwcDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGFwcGxpY2F0aW9uIGlzIGEgbXVsdGktbGFuZ3VhZ2UgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGlzTXVsdGlsaW5ndWFsQXBwOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGphdmFTdGFydFVwQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiBKYXZhIHN0YXJ0dXAgcGFyYW1ldGVycyBmb3IgYSBKYXZhIGFwcGxpY2F0aW9uLiBUaGVzZSBzdGFydHVwIHBhcmFtZXRlcnMgaW52b2x2ZSB0aGUgbWVtb3J5LCBhcHBsaWNhdGlvbiwgZ2FyYmFnZSBjb2xsZWN0aW9uIChHQykgcG9saWN5LCB0b29scywgc2VydmljZSByZWdpc3RyYXRpb24gYW5kIGRpc2NvdmVyeSwgYW5kIGN1c3RvbSBjb25maWd1cmF0aW9ucy4gUHJvcGVyIHBhcmFtZXRlciBzZXR0aW5ncyBoZWxwIHJlZHVjZSB0aGUgR0Mgb3ZlcmhlYWQsIHNob3J0ZW4gdGhlIHNlcnZlciByZXNwb25zZSB0aW1lLCBhbmQgaW1wcm92ZSB0aGUgdGhyb3VnaHB1dC5cbiAgICAgKiBUaGUgc3lzdGVtIGF1dG9tYXRpY2FsbHkgY29uY2F0ZW5hdGVzIGFsbCBzdGFydHVwIHZhbHVlcyBhcyB0aGUgY29uZmlndXJhdGlvbiBvZiBKYXZhIHN0YXJ0dXAgcGFyYW1ldGVycyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBqYXZhU3RhcnRVcENvbmZpZzogUm9zSzhzQXBwbGljYXRpb24uSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBqZGs6IFRoZSB2ZXJzaW9uIG9mIEphdmEgRGV2ZWxvcG1lbnQgS2l0IChKREspIG9uIHdoaWNoIHRoZSBkZXBsb3ltZW50IHBhY2thZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGRlcGVuZHMuIFxuICAgICAqIFZhbGlkIHZhbHVlczogT3BlbiBKREsgNyBhbmQgT3BlbiBKREsgOC4gVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHlvdSBkZXBsb3kgYW4gYXBwbGljYXRpb24gYnkgdXNpbmcgaW1hZ2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBqZGs6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaW1pdENwdTogVGhlIG1heGltdW0gbnVtYmVyIG9mIENQVXMgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvblxuICAgICAqIGlzIHJ1bm5pbmcuIFVuaXQ6IGNvcmVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBsaW1pdENwdTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpbWl0TWVtOiBUaGUgbWF4aW11bSBhbW91bnQgb2YgbWVtb3J5IGFsbG93ZWQgZm9yIGVhY2ggYXBwbGljYXRpb24gaW5zdGFuY2Ugd2hlbiB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gVW5pdDogTUIuXG4gICAgICovXG4gICAgcHVibGljIGxpbWl0TWVtOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGl2ZW5lc3M6IFRoZSBsaXZlbmVzcyBjaGVjayBvbiB0aGUgY29udGFpbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBsaXZlbmVzczogUm9zSzhzQXBwbGljYXRpb24uTGl2ZW5lc3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbFZvbHVtZTogVGhlIGNvbmZpZ3VyYXRpb24gZm9yIG1vdW50aW5nIGhvc3QgZmlsZXMgdG8gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZy4gRm9yIGV4YW1wbGUsIHRoZSB2YWx1ZSBjYW4gYmUgW3tcInR5cGVcIjpcIlwiLCBcIm5vZGVQYXRoXCI6XCIvbG9jYWxmaWxlc1wiLCBcIm1vdW50UGF0aFwiOlwiL2FwcC9maWxlc1wifSwge1widHlwZVwiOlwiRGlyZWN0b3J5XCIsIFwibm9kZVBhdGhcIjpcIi9tbnRcIiwgXCJtb3VudFBhdGhcIjpcIi9hcHAvc3RvcmFnZVwifV0uXG4gICAgICovXG4gICAgcHVibGljIGxvY2FsVm9sdW1lOiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5Mb2NhbFZvbHVtZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgRURBUyBuYW1lc3BhY2UuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGZvciBhIG5vbi1kZWZhdWx0IG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9naWNhbFJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW91bnREZXNjczogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBOQVMgbW91bnRpbmcgY29uZmlndXJhdGlvbi4gRm9yIGV4YW1wbGUsIHRoZSB2YWx1ZSBjYW4gYmUgW3tcIk5hc1BhdGhcIjogXCIvazhzXCIsXCJNb3VudFBhdGhcIjogXCIvbW50XCJ9LCB7XCJOYXNQYXRoXCI6IFwiL2ZpbGVzXCIsIFwiTW91bnRQYXRoXCI6IFwiL2FwcC9maWxlc1wifV0uXG4gICAgICovXG4gICAgcHVibGljIG1vdW50RGVzY3M6IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLk1vdW50RGVzY3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgbmFtZXNwYWNlIG9mIHRoZSBLdWJlcm5ldGVzIGNsdXN0ZXIuIFRoaXMgcGFyYW1ldGVyIGRldGVybWluZXMgdGhlIEt1YmVybmV0ZXMgbmFtZXNwYWNlIHdoZXJlIHlvdXIgYXBwbGljYXRpb24gaXMgZGVwbG95ZWQuIEJ5IGRlZmF1bHQsIHRoaXMgcGFyYW1ldGVyIGlzIHNldCB0byBkZWZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXNJZDogVGhlIElEIG9mIHRoZSBOZXR3b3JrIEF0dGFjaGVkIFN0b3JhZ2UgKE5BUykgZmlsZSBzeXN0ZW0gbW91bnRlZCB0byB0aGUgY29udGFpbmVyIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLiBUaGUgTkFTIGZpbGUgc3lzdGVtIG11c3QgYmUgaW4gdGhlIHNhbWUgcmVnaW9uIGFzIHRoZSBjbHVzdGVyLiBUaGUgTkFTIGZpbGUgc3lzdGVtIG11c3QgaGF2ZSBhbiBhdmFpbGFibGUgbW91bnQgdGFyZ2V0LCBvciBoYXZlIGEgbW91bnRcbiAgICAgKiB0YXJnZXQgb24gdGhlIHZTd2l0Y2ggaW4gdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgbG9jYXRlZC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIG1vdW50RGVzY3MgZmllbGQgZXhpc3RzLCBhIE5BUyBmaWxlIHN5c3RlbSBpcyBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlZCBhbmQgbW91bnRlZCB0byB0aGUgdlN3aXRjaCBpbiB0aGUgVlBDIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIG5hc0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFja2FnZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFZhbGlkIHZhbHVlczogRmF0SmFyLCBXQVIsIGFuZCBJbWFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFja2FnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVXJsOiBUaGUgVVJMIG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuIFRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc2V0IGZvciB0aGUgYXBwbGljYXRpb25zXG4gICAgICogdGhhdCBhcmUgZGVwbG95ZWQgYnkgdXNpbmcgRmF0SmFyIG9yIFdBUiBwYWNrYWdlcy5cbiAgICAgKiBOb3RlIFRoZSB2ZXJzaW9uIG9mIFNESyBmb3IgSmF2YSBvciBQeXRob24gbXVzdCBiZSAyLjQ0LjAgb3IgbGF0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHBhY2thZ2VVcmw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIGRlcGxveW1lbnQgcGFja2FnZS4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgd2hlbiB0aGUgUGFja2FnZVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBXQVIgb3IgRmF0SmFyLiBZb3UgbXVzdCBzcGVjaWZ5IGEgdmVyc2lvbi5cbiAgICAgKiBOb3RlIFRoZSB2ZXJzaW9uIG9mIFNESyBmb3IgSmF2YSBvciBQeXRob24gbXVzdCBiZSAyLjQ0LjAgb3IgbGF0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHBhY2thZ2VWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9zdFN0YXJ0OiBUaGUgcG9zdC1zdGFydCBzY3JpcHQuIEZvciBleGFtcGxlLCB7XCJFeGVjXCI6IHtcIkNvbW1hbmRcIjogW1wibHNcIiwgXCIvXCJdfX0uXG4gICAgICovXG4gICAgcHVibGljIHBvc3RTdGFydDogUm9zSzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJlU3RvcDogVGhlIHByZS1zdG9wIHNjcmlwdC4gRm9yIGV4YW1wbGUsIHtcIkV4ZWNcIjoge1wiQ29tbWFuZFwiOiBbXCJsc1wiLCBcIi9cIl19fS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJlU3RvcDogUm9zSzhzQXBwbGljYXRpb24uUHJlU3RvcFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlYWRpbmVzczogVGhlIHJlYWRpbmVzcyBjaGVjayBvbiB0aGUgY29udGFpbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkaW5lc3M6IFJvc0s4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcGxpY2FzOiBUaGUgbnVtYmVyIG9mIGluc3RhbmNlcyBmb3IgdGhlIGFwcGxpY2F0aW9uIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLiBEZWZhdWx0OiAxXG4gICAgICovXG4gICAgcHVibGljIHJlcGxpY2FzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVwb0lkOiBUaGUgSUQgb2YgdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICovXG4gICAgcHVibGljIHJlcG9JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcXVlc3RzQ3B1OiBUaGUgbWF4aW11bSBudW1iZXIgb2YgQ1BVcyBhbGxvd2VkIGZvciBlYWNoIGFwcGxpY2F0aW9uIGluc3RhbmNlIHdoZW4gdGhlIGFwcGxpY2F0aW9uIGlzIGNyZWF0ZWQuIFVuaXQ6IGNvcmVzLiBUaGUgdmFsdWUgMCBpbmRpY2F0ZXMgbm8gbGltaXQuXG4gICAgICovXG4gICAgcHVibGljIHJlcXVlc3RzQ3B1OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVxdWVzdHNNZW06IFRoZSBtYXhpbXVtIGFtb3VudCBvZiBtZW1vcnkgYWxsb3dlZCBmb3IgZWFjaCBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aGVuIHRoZSBhcHBsaWNhdGlvblxuICAgICAqIGlzIGNyZWF0ZWQuIFVuaXQ6IE1CLiBUaGUgdmFsdWUgMCBpbmRpY2F0ZXMgbm8gbGltaXQuXG4gICAgICovXG4gICAgcHVibGljIHJlcXVlc3RzTWVtOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVudGltZUNsYXNzTmFtZTogVGhlIHR5cGUgb2YgdGhlIGNvbnRhaW5lciBydW50aW1lLiBUaGlzIHBhcmFtZXRlciBpcyBhcHBsaWNhYmxlIG9ubHkgdG8gY2x1c3RlcnMgdGhhdCB1c2Ugc2FuZGJveGVkIGNvbnRhaW5lcnMuXG4gICAgICovXG4gICAgcHVibGljIHJ1bnRpbWVDbGFzc05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbHNDb25maWdzOiBUaGUgTG9nc3RvcmUgY29uZmlndXJhdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIHNsc0NvbmZpZ3M6IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLlNsc0NvbmZpZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RvcmFnZVR5cGU6IE9ubHkgU1NEIGlzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcmFnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgdGltZW91dCBpbnRlcnZhbCBvZiB0aGUgY2hhbmdlIHByb2Nlc3MuIFVuaXQ6IHNlY29uZHMuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1cmlFbmNvZGluZzogVGhlIHVuaWZvcm0gcmVzb3VyY2UgaWRlbnRpZmllciAoVVJJKSBlbmNvZGluZyBzY2hlbWUuIFZhbGlkIHZhbHVlczogSVNPLTg4NTktMSwgR0JLLCBHQjIzMTIsIGFuZCBVVEYtOC5cbiAgICAgKiBOb3RlIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQgaW4gYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiwgdGhlIGRlZmF1bHQgVVJJIGVuY29kaW5nXG4gICAgICogc2NoZW1lIGluIHRoZSBUb21jYXQgY29udGFpbmVyIGlzIGFwcGxpZWQuXG4gICAgICovXG4gICAgcHVibGljIHVyaUVuY29kaW5nOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlQm9keUVuY29kaW5nOiBTcGVjaWZpZXMgd2hldGhlciB1c2VCb2R5RW5jb2RpbmdGb3JVUkkgaXMgZW5hYmxlZC5cbiAgICAgKiBOb3RlIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQgaW4gYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiwgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgKiBmYWxzZSBpcyBhcHBsaWVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB1c2VCb2R5RW5jb2Rpbmc6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2ViQ29udGFpbmVyOiBUaGUgdmVyc2lvbiBvZiB0aGUgVG9tY2F0IGNvbnRhaW5lciBvbiB3aGljaCB0aGUgZGVwbG95bWVudCBwYWNrYWdlIG9mIHRoZSBhcHBsaWNhdGlvbiBkZXBlbmRzLiBUaGlzIHBhcmFtZXRlciBpcyBhcHBsaWNhYmxlIHRvIFNwcmluZyBDbG91ZCBhbmQgQXBhY2hlIER1YmJvIGFwcGxpY2F0aW9ucyB0aGF0IGFyZSBkZXBsb3llZCBieSB1c2luZyBXQVIgcGFja2FnZXMuIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiB5b3UgZGVwbG95IGFuIGFwcGxpY2F0aW9uIGJ5IHVzaW5nIGltYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2ViQ29udGFpbmVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2ViQ29udGFpbmVyQ29uZmlnOiBUaGUgVG9tY2F0IGNvbnRhaW5lciBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB3ZWJDb250YWluZXJDb25maWc6IFJvc0s4c0FwcGxpY2F0aW9uLldlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NLOHNBcHBsaWNhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zSzhzQXBwbGljYXRpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwcElkID0gdGhpcy5nZXRBdHQoJ0FwcElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckFwcE5hbWUgPSB0aGlzLmdldEF0dCgnQXBwTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJDaGFuZ2VPcmRlcklkID0gdGhpcy5nZXRBdHQoJ0NoYW5nZU9yZGVySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDc0NsdXN0ZXJJZCA9IHRoaXMuZ2V0QXR0KCdDc0NsdXN0ZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hcHBOYW1lID0gcHJvcHMuYXBwTmFtZTtcbiAgICAgICAgdGhpcy5jbHVzdGVySWQgPSBwcm9wcy5jbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25EZXNjcmlwdGlvbiA9IHByb3BzLmFwcGxpY2F0aW9uRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHByb3BzLmNvbW1hbmQ7XG4gICAgICAgIHRoaXMuY29tbWFuZEFyZ3MgPSBwcm9wcy5jb21tYW5kQXJncztcbiAgICAgICAgdGhpcy5kZXBsb3lBY3Jvc3NOb2RlcyA9IHByb3BzLmRlcGxveUFjcm9zc05vZGVzO1xuICAgICAgICB0aGlzLmRlcGxveUFjcm9zc1pvbmVzID0gcHJvcHMuZGVwbG95QWNyb3NzWm9uZXM7XG4gICAgICAgIHRoaXMuZWRhc0NvbnRhaW5lclZlcnNpb24gPSBwcm9wcy5lZGFzQ29udGFpbmVyVmVyc2lvbjtcbiAgICAgICAgdGhpcy5lbmFibGVBaGFzID0gcHJvcHMuZW5hYmxlQWhhcztcbiAgICAgICAgdGhpcy5lbnZzID0gcHJvcHMuZW52cztcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IHByb3BzLmltYWdlVXJsO1xuICAgICAgICB0aGlzLmludGVybmV0U2xiSWQgPSBwcm9wcy5pbnRlcm5ldFNsYklkO1xuICAgICAgICB0aGlzLmludGVybmV0U2xiUG9ydCA9IHByb3BzLmludGVybmV0U2xiUG9ydDtcbiAgICAgICAgdGhpcy5pbnRlcm5ldFNsYlByb3RvY29sID0gcHJvcHMuaW50ZXJuZXRTbGJQcm90b2NvbDtcbiAgICAgICAgdGhpcy5pbnRlcm5ldFRhcmdldFBvcnQgPSBwcm9wcy5pbnRlcm5ldFRhcmdldFBvcnQ7XG4gICAgICAgIHRoaXMuaW50cmFuZXRTbGJJZCA9IHByb3BzLmludHJhbmV0U2xiSWQ7XG4gICAgICAgIHRoaXMuaW50cmFuZXRTbGJQb3J0ID0gcHJvcHMuaW50cmFuZXRTbGJQb3J0O1xuICAgICAgICB0aGlzLmludHJhbmV0U2xiUHJvdG9jb2wgPSBwcm9wcy5pbnRyYW5ldFNsYlByb3RvY29sO1xuICAgICAgICB0aGlzLmludHJhbmV0VGFyZ2V0UG9ydCA9IHByb3BzLmludHJhbmV0VGFyZ2V0UG9ydDtcbiAgICAgICAgdGhpcy5pc011bHRpbGluZ3VhbEFwcCA9IHByb3BzLmlzTXVsdGlsaW5ndWFsQXBwO1xuICAgICAgICB0aGlzLmphdmFTdGFydFVwQ29uZmlnID0gcHJvcHMuamF2YVN0YXJ0VXBDb25maWc7XG4gICAgICAgIHRoaXMuamRrID0gcHJvcHMuamRrO1xuICAgICAgICB0aGlzLmxpbWl0Q3B1ID0gcHJvcHMubGltaXRDcHU7XG4gICAgICAgIHRoaXMubGltaXRNZW0gPSBwcm9wcy5saW1pdE1lbTtcbiAgICAgICAgdGhpcy5saXZlbmVzcyA9IHByb3BzLmxpdmVuZXNzO1xuICAgICAgICB0aGlzLmxvY2FsVm9sdW1lID0gcHJvcHMubG9jYWxWb2x1bWU7XG4gICAgICAgIHRoaXMubG9naWNhbFJlZ2lvbklkID0gcHJvcHMubG9naWNhbFJlZ2lvbklkO1xuICAgICAgICB0aGlzLm1vdW50RGVzY3MgPSBwcm9wcy5tb3VudERlc2NzO1xuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IHByb3BzLm5hbWVzcGFjZTtcbiAgICAgICAgdGhpcy5uYXNJZCA9IHByb3BzLm5hc0lkO1xuICAgICAgICB0aGlzLnBhY2thZ2VUeXBlID0gcHJvcHMucGFja2FnZVR5cGU7XG4gICAgICAgIHRoaXMucGFja2FnZVVybCA9IHByb3BzLnBhY2thZ2VVcmw7XG4gICAgICAgIHRoaXMucGFja2FnZVZlcnNpb24gPSBwcm9wcy5wYWNrYWdlVmVyc2lvbjtcbiAgICAgICAgdGhpcy5wb3N0U3RhcnQgPSBwcm9wcy5wb3N0U3RhcnQ7XG4gICAgICAgIHRoaXMucHJlU3RvcCA9IHByb3BzLnByZVN0b3A7XG4gICAgICAgIHRoaXMucmVhZGluZXNzID0gcHJvcHMucmVhZGluZXNzO1xuICAgICAgICB0aGlzLnJlcGxpY2FzID0gcHJvcHMucmVwbGljYXM7XG4gICAgICAgIHRoaXMucmVwb0lkID0gcHJvcHMucmVwb0lkO1xuICAgICAgICB0aGlzLnJlcXVlc3RzQ3B1ID0gcHJvcHMucmVxdWVzdHNDcHU7XG4gICAgICAgIHRoaXMucmVxdWVzdHNNZW0gPSBwcm9wcy5yZXF1ZXN0c01lbTtcbiAgICAgICAgdGhpcy5ydW50aW1lQ2xhc3NOYW1lID0gcHJvcHMucnVudGltZUNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5zbHNDb25maWdzID0gcHJvcHMuc2xzQ29uZmlncztcbiAgICAgICAgdGhpcy5zdG9yYWdlVHlwZSA9IHByb3BzLnN0b3JhZ2VUeXBlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgICAgICB0aGlzLnVyaUVuY29kaW5nID0gcHJvcHMudXJpRW5jb2Rpbmc7XG4gICAgICAgIHRoaXMudXNlQm9keUVuY29kaW5nID0gcHJvcHMudXNlQm9keUVuY29kaW5nO1xuICAgICAgICB0aGlzLndlYkNvbnRhaW5lciA9IHByb3BzLndlYkNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy53ZWJDb250YWluZXJDb25maWcgPSBwcm9wcy53ZWJDb250YWluZXJDb25maWc7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgY2x1c3RlcklkOiB0aGlzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uRGVzY3JpcHRpb246IHRoaXMuYXBwbGljYXRpb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMuY29tbWFuZCxcbiAgICAgICAgICAgIGNvbW1hbmRBcmdzOiB0aGlzLmNvbW1hbmRBcmdzLFxuICAgICAgICAgICAgZGVwbG95QWNyb3NzTm9kZXM6IHRoaXMuZGVwbG95QWNyb3NzTm9kZXMsXG4gICAgICAgICAgICBkZXBsb3lBY3Jvc3Nab25lczogdGhpcy5kZXBsb3lBY3Jvc3Nab25lcyxcbiAgICAgICAgICAgIGVkYXNDb250YWluZXJWZXJzaW9uOiB0aGlzLmVkYXNDb250YWluZXJWZXJzaW9uLFxuICAgICAgICAgICAgZW5hYmxlQWhhczogdGhpcy5lbmFibGVBaGFzLFxuICAgICAgICAgICAgZW52czogdGhpcy5lbnZzLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IHRoaXMuaW1hZ2VVcmwsXG4gICAgICAgICAgICBpbnRlcm5ldFNsYklkOiB0aGlzLmludGVybmV0U2xiSWQsXG4gICAgICAgICAgICBpbnRlcm5ldFNsYlBvcnQ6IHRoaXMuaW50ZXJuZXRTbGJQb3J0LFxuICAgICAgICAgICAgaW50ZXJuZXRTbGJQcm90b2NvbDogdGhpcy5pbnRlcm5ldFNsYlByb3RvY29sLFxuICAgICAgICAgICAgaW50ZXJuZXRUYXJnZXRQb3J0OiB0aGlzLmludGVybmV0VGFyZ2V0UG9ydCxcbiAgICAgICAgICAgIGludHJhbmV0U2xiSWQ6IHRoaXMuaW50cmFuZXRTbGJJZCxcbiAgICAgICAgICAgIGludHJhbmV0U2xiUG9ydDogdGhpcy5pbnRyYW5ldFNsYlBvcnQsXG4gICAgICAgICAgICBpbnRyYW5ldFNsYlByb3RvY29sOiB0aGlzLmludHJhbmV0U2xiUHJvdG9jb2wsXG4gICAgICAgICAgICBpbnRyYW5ldFRhcmdldFBvcnQ6IHRoaXMuaW50cmFuZXRUYXJnZXRQb3J0LFxuICAgICAgICAgICAgaXNNdWx0aWxpbmd1YWxBcHA6IHRoaXMuaXNNdWx0aWxpbmd1YWxBcHAsXG4gICAgICAgICAgICBqYXZhU3RhcnRVcENvbmZpZzogdGhpcy5qYXZhU3RhcnRVcENvbmZpZyxcbiAgICAgICAgICAgIGpkazogdGhpcy5qZGssXG4gICAgICAgICAgICBsaW1pdENwdTogdGhpcy5saW1pdENwdSxcbiAgICAgICAgICAgIGxpbWl0TWVtOiB0aGlzLmxpbWl0TWVtLFxuICAgICAgICAgICAgbGl2ZW5lc3M6IHRoaXMubGl2ZW5lc3MsXG4gICAgICAgICAgICBsb2NhbFZvbHVtZTogdGhpcy5sb2NhbFZvbHVtZSxcbiAgICAgICAgICAgIGxvZ2ljYWxSZWdpb25JZDogdGhpcy5sb2dpY2FsUmVnaW9uSWQsXG4gICAgICAgICAgICBtb3VudERlc2NzOiB0aGlzLm1vdW50RGVzY3MsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlLFxuICAgICAgICAgICAgbmFzSWQ6IHRoaXMubmFzSWQsXG4gICAgICAgICAgICBwYWNrYWdlVHlwZTogdGhpcy5wYWNrYWdlVHlwZSxcbiAgICAgICAgICAgIHBhY2thZ2VVcmw6IHRoaXMucGFja2FnZVVybCxcbiAgICAgICAgICAgIHBhY2thZ2VWZXJzaW9uOiB0aGlzLnBhY2thZ2VWZXJzaW9uLFxuICAgICAgICAgICAgcG9zdFN0YXJ0OiB0aGlzLnBvc3RTdGFydCxcbiAgICAgICAgICAgIHByZVN0b3A6IHRoaXMucHJlU3RvcCxcbiAgICAgICAgICAgIHJlYWRpbmVzczogdGhpcy5yZWFkaW5lc3MsXG4gICAgICAgICAgICByZXBsaWNhczogdGhpcy5yZXBsaWNhcyxcbiAgICAgICAgICAgIHJlcG9JZDogdGhpcy5yZXBvSWQsXG4gICAgICAgICAgICByZXF1ZXN0c0NwdTogdGhpcy5yZXF1ZXN0c0NwdSxcbiAgICAgICAgICAgIHJlcXVlc3RzTWVtOiB0aGlzLnJlcXVlc3RzTWVtLFxuICAgICAgICAgICAgcnVudGltZUNsYXNzTmFtZTogdGhpcy5ydW50aW1lQ2xhc3NOYW1lLFxuICAgICAgICAgICAgc2xzQ29uZmlnczogdGhpcy5zbHNDb25maWdzLFxuICAgICAgICAgICAgc3RvcmFnZVR5cGU6IHRoaXMuc3RvcmFnZVR5cGUsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICB1cmlFbmNvZGluZzogdGhpcy51cmlFbmNvZGluZyxcbiAgICAgICAgICAgIHVzZUJvZHlFbmNvZGluZzogdGhpcy51c2VCb2R5RW5jb2RpbmcsXG4gICAgICAgICAgICB3ZWJDb250YWluZXI6IHRoaXMud2ViQ29udGFpbmVyLFxuICAgICAgICAgICAgd2ViQ29udGFpbmVyQ29uZmlnOiB0aGlzLndlYkNvbnRhaW5lckNvbmZpZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSzhzQXBwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZEFyZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYXJndW1lbnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYXJndW1lbnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb21tYW5kQXJnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb21tYW5kQXJnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0NvbW1hbmRBcmdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcmd1bWVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcmd1bWVudCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDb21tYW5kQXJnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Db21tYW5kQXJnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29tbWFuZEFyZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uQ29tbWFuZEFyZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Db21tYW5kQXJnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Db21tYW5kQXJnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQXJndW1lbnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXJndW1lbnQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbmNHQ1RocmVhZHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENvbmNHQ1RocmVhZHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uY0dDVGhyZWFkc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0NvbmNHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29uY0dDVGhyZWFkc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Db25jR0NUaHJlYWRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb25jR0NUaHJlYWRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkNvbmNHQ1RocmVhZHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Db25jR0NUaHJlYWRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0NvbmNHQ1RocmVhZHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tUGFyYW1zUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDdXN0b21QYXJhbXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tUGFyYW1zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fQ3VzdG9tUGFyYW1zUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkN1c3RvbVBhcmFtc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5DdXN0b21QYXJhbXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbVBhcmFtc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5DdXN0b21QYXJhbXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25DdXN0b21QYXJhbXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fQ3VzdG9tUGFyYW1zUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVudnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRW52c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFbnZzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fRW52c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJFbnZzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkVudnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVudnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uRW52c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkVudnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fRW52c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGVjUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbW1hbmQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tbWFuZD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFeGVjUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9FeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jb21tYW5kKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkV4ZWNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uRXhlY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXhlY1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5FeGVjYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9FeGVjUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21tYW5kOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb21tYW5kKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBHMUhlYXBSZWdpb25TaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBHMUhlYXBSZWdpb25TaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9HMUhlYXBSZWdpb25TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uRzFIZWFwUmVnaW9uU2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5HMUhlYXBSZWdpb25TaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uRzFIZWFwUmVnaW9uU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9HMUhlYXBSZWdpb25TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEdDTG9nRmlsZVBhdGhQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEdDTG9nRmlsZVBhdGhQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgR0NMb2dGaWxlUGF0aFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0dDTG9nRmlsZVBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiR0NMb2dGaWxlUGF0aFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5HQ0xvZ0ZpbGVQYXRoYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHQ0xvZ0ZpbGVQYXRoUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVBhdGhgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25HQ0xvZ0ZpbGVQYXRoUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0dDTG9nRmlsZVBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0NMb2dGaWxlU2l6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgR0NMb2dGaWxlU2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHQ0xvZ0ZpbGVTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJHQ0xvZ0ZpbGVTaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEdDTG9nRmlsZVNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uR0NMb2dGaWxlU2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkdDTG9nRmlsZVNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvclByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5IZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0hlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIZWFwRHVtcFBhdGhQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEhlYXBEdW1wUGF0aFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIZWFwRHVtcFBhdGhQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IZWFwRHVtcFBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSGVhcER1bXBQYXRoUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkhlYXBEdW1wUGF0aGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSGVhcER1bXBQYXRoUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkhlYXBEdW1wUGF0aGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkhlYXBEdW1wUGF0aFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9IZWFwRHVtcFBhdGhQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSHR0cEdldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXRoOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEhlYWRlcnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEhlYWRlcnM/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5IdHRwSGVhZGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzY2hlbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NoZW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEh0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBIZWFkZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSzhzQXBwbGljYXRpb25fSHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuaHR0cEhlYWRlcnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjaGVtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2NoZW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2hlbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zY2hlbWUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSFRUUFwiLFwiSFRUUFNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2hlbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2NoZW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hvc3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaG9zdCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIdHRwR2V0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkh0dHBHZXRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEh0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEdldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkh0dHBHZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUGF0aDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXRoKSxcbiAgICAgIEh0dHBIZWFkZXJzOiByb3MubGlzdE1hcHBlcihyb3NLOHNBcHBsaWNhdGlvbkh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSxcbiAgICAgIFNjaGVtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zY2hlbWUpLFxuICAgICAgUG9ydDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIEhvc3Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkh0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkh0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSHR0cEhlYWRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIdHRwSGVhZGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5IdHRwSGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSHR0cEhlYWRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25IdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbml0aWFsSGVhcFNpemVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluaXRpYWxIZWFwU2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbml0aWFsSGVhcFNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Jbml0aWFsSGVhcFNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5pdGlhbEhlYXBTaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkluaXRpYWxIZWFwU2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5pdGlhbEhlYXBTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkluaXRpYWxIZWFwU2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkluaXRpYWxIZWFwU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Jbml0aWFsSGVhcFNpemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4SGVhcFNpemU6IFRoZSBtYXhpbXVtIGhlYXAgc2l6ZS4gVW5pdDogTUIuIFZhbHVlIHJhbmdlOiAwIHRvICgwLjg1IHggQXZhaWxhYmxlIG1lbW9yeSBmb3IgRUNTIGluc3RhbmNlcyBvZiB0aGUgYXBwbGljYXRpb24pXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhIZWFwU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLk1heEhlYXBTaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXNlR2NMb2dGaWxlUm90YXRpb246XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VHY0xvZ0ZpbGVSb3RhdGlvbj86IFJvc0s4c0FwcGxpY2F0aW9uLlVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY3VzdG9tUGFyYW1zOiBJZiB0aGUgcHJlY2VkaW5nIG9wdGlvbnMgY2Fubm90IG1lZXQgeW91ciByZXF1aXJlbWVudHMsIHlvdSBjYW4gdXNlIGN1c3RvbSBwYXJhbWV0ZXJzLiBTZXBhcmF0ZSBwYXJhbWV0ZXJzIHdpdGggc3BhY2VzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY3VzdG9tUGFyYW1zPzogUm9zSzhzQXBwbGljYXRpb24uQ3VzdG9tUGFyYW1zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFyYWxsZWxHY1RocmVhZHM6IE51bWJlciBvZiBwYXJhbGxlbCB0aHJlYWRzIHBhcmFsbGVsIGdjIHdpbGwgdXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFyYWxsZWxHY1RocmVhZHM/OiBSb3NLOHNBcHBsaWNhdGlvbi5QYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluaXRpYWxIZWFwU2l6ZTogVGhlIHNpemUgb2YgdGhlIGluaXRpYWwgaGVhcC4gVW5pdDogTUIuIFRoZSB2YWx1ZSAwIGluZGljYXRlcyB0aGF0IHRoZSBzaXplIGlzIHVubGltaXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluaXRpYWxIZWFwU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLkluaXRpYWxIZWFwU2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZTogV2hldGhlciBlbmFibGUgcnVsZSBwYXJzaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlPzogUm9zSzhzQXBwbGljYXRpb24uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyZWFkU3RhY2tTaXplOiBUaHJlYWQgc3RhY2sgc2l6ZSAoS0IpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGhyZWFkU3RhY2tTaXplPzogUm9zSzhzQXBwbGljYXRpb24uVGhyZWFkU3RhY2tTaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3Vydml2b3JSYXRpbzogRWRlbi9TdXJ2aXZvciBNZW1vcnkgU2l6ZSBSYXRpby5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1cnZpdm9yUmF0aW8/OiBSb3NLOHNBcHBsaWNhdGlvbi5TdXJ2aXZvclJhdGlvUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGVybVNpemU6IEluaXRpYWwgUGVybWFuZW50IEdlbmVyYXRpb24gU2l6ZSAoTUIpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGVybVNpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5QZXJtU2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5ld1NpemU6IEluaXRpYWwgWW91bmcgR2VuZXJhdGlvbiBTaXplIChNQikuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuZXdTaXplPzogUm9zSzhzQXBwbGljYXRpb24uTmV3U2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbmNHY1RocmVhZHM6IE51bWJlciBvZiB0aHJlYWRzIGNvbmN1cnJlbnQgZ2Mgd2lsbCB1c2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb25jR2NUaHJlYWRzPzogUm9zSzhzQXBwbGljYXRpb24uQ29uY0dDVGhyZWFkc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5ld1JhdGlvOiBPbGQvWW91bmcgR2VuZXJhdGlvbiBNZW1vcnkgU2l6ZSBSYXRpby5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5ld1JhdGlvPzogUm9zSzhzQXBwbGljYXRpb24uTmV3UmF0aW9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBnY0xvZ0ZpbGVTaXplOiBHQyBsb2cgZmlsZSBzaXplLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ2NMb2dGaWxlU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhOZXdTaXplOiBUaGUgbWF4aW11bSBzaXplIG9mIHlvdW5nIGdlbmVyYXRpb24uIFVuaXQ6IE1CLiBUaGUgdmFsdWUgbWF4X3VpbnR4IGluZGljYXRlcyB0aGF0IG5vIHVwcGVyIGxpbWl0IGlzIHNwZWNpZmllZCBmb3IgbWVtb3J5IHVzYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4TmV3U2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLk1heE5ld1NpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBnMUhlYXBSZWdpb25TaXplOiBTaXplIG9mIHRoZSBHMSByZWdpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZzFIZWFwUmVnaW9uU2l6ZT86IFJvc0s4c0FwcGxpY2F0aW9uLkcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmludEdjOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJpbnRHYz86IFJvc0s4c0FwcGxpY2F0aW9uLlByaW50R0NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhEaXJlY3RNZW1vcnlTaXplOiBUaGUgbWF4aW11bSBzaXplIG9mIE5JTyBkaXJlY3QgbWVtb3J5LiBVbml0OiBNQi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1heERpcmVjdE1lbW9yeVNpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5NYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4UGVybVNpemU6IFRoZSBtYXhpbXVtIHNpemUgb2YgcGVybWFuZW50IGdlbmVyYXRpb24uIFVuaXQ6IE1CLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4UGVybVNpemU/OiBSb3NLOHNBcHBsaWNhdGlvbi5NYXhQZXJtU2l6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yOiBXaGV0aGVyIGR1bXAgbWVtb3J5IHdoZW4gT09NIG9jY3Vycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yPzogUm9zSzhzQXBwbGljYXRpb24uSGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3JQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZzogV2hldGhlciBlbmFibGUgYXV0b21hdGljIG5hbWVzcGFjZSBwYXJzaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmc/OiBSb3NLOHNBcHBsaWNhdGlvbi5OYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYXBEdW1wUGF0aDogRHVtcCBGaWxlIFBhdGguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBoZWFwRHVtcFBhdGg/OiBSb3NLOHNBcHBsaWNhdGlvbi5IZWFwRHVtcFBhdGhQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBnY0xvZ0ZpbGVQYXRoOiBHQyBsb2cgZGlyZWN0b3J5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ2NMb2dGaWxlUGF0aD86IFJvc0s4c0FwcGxpY2F0aW9uLkdDTG9nRmlsZVBhdGhQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmludEdjRGF0ZVN0YW1wczpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByaW50R2NEYXRlU3RhbXBzPzogUm9zSzhzQXBwbGljYXRpb24uUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB5b3VuZ0dhcmJhZ2VDb2xsZWN0b3I6IEl0IGlzIHVzZWQgdG8gY29uZmlndXJlIHlvdW5nIGdlbmVyYXRpb24gZ2FyYmFnZSBjb2xsZWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB5b3VuZ0dhcmJhZ2VDb2xsZWN0b3I/OiBSb3NLOHNBcHBsaWNhdGlvbi5Zb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvbGRHYXJiYWdlQ29sbGVjdG9yOiBJdCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgb2xkIGdlbmVyYXRpb24gZ2FyYmFnZSBjb2xsZWN0b3IuIFlvdSBtdXN0IGNvbmZpZ3VyZSB0aGUgeW91bmcgZ2VuZXJhdGlvbiBnYXJiYWdlIGNvbGxlY3RvciBmaXJzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9sZEdhcmJhZ2VDb2xsZWN0b3I/OiBSb3NLOHNBcHBsaWNhdGlvbi5PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBKYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBKYXZhU3RhcnRVcENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0phdmFTdGFydFVwQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhIZWFwU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX01heEhlYXBTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4SGVhcFNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZUdjTG9nRmlsZVJvdGF0aW9uJywgUm9zSzhzQXBwbGljYXRpb25fVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy51c2VHY0xvZ0ZpbGVSb3RhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tUGFyYW1zJywgUm9zSzhzQXBwbGljYXRpb25fQ3VzdG9tUGFyYW1zUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3VzdG9tUGFyYW1zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbGxlbEdjVGhyZWFkcycsIFJvc0s4c0FwcGxpY2F0aW9uX1BhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucGFyYWxsZWxHY1RocmVhZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxIZWFwU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX0luaXRpYWxIZWFwU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluaXRpYWxIZWFwU2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlJywgUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJlYWRTdGFja1NpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9UaHJlYWRTdGFja1NpemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy50aHJlYWRTdGFja1NpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1cnZpdm9yUmF0aW8nLCBSb3NLOHNBcHBsaWNhdGlvbl9TdXJ2aXZvclJhdGlvUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3Vydml2b3JSYXRpbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVybVNpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9QZXJtU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBlcm1TaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXdTaXplJywgUm9zSzhzQXBwbGljYXRpb25fTmV3U2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5ld1NpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmNHY1RocmVhZHMnLCBSb3NLOHNBcHBsaWNhdGlvbl9Db25jR0NUaHJlYWRzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29uY0djVGhyZWFkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV3UmF0aW8nLCBSb3NLOHNBcHBsaWNhdGlvbl9OZXdSYXRpb1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5ld1JhdGlvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnY0xvZ0ZpbGVTaXplJywgUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdjTG9nRmlsZVNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heE5ld1NpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9NYXhOZXdTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4TmV3U2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZzFIZWFwUmVnaW9uU2l6ZScsIFJvc0s4c0FwcGxpY2F0aW9uX0cxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5nMUhlYXBSZWdpb25TaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmludEdjJywgUm9zSzhzQXBwbGljYXRpb25fUHJpbnRHQ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW50R2MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heERpcmVjdE1lbW9yeVNpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9NYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4RGlyZWN0TWVtb3J5U2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4UGVybVNpemUnLCBSb3NLOHNBcHBsaWNhdGlvbl9NYXhQZXJtU2l6ZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1heFBlcm1TaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFwRHVtcE9uT3V0T2ZNZW1vcnlFcnJvcicsIFJvc0s4c0FwcGxpY2F0aW9uX0hlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nJywgUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5uYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhcER1bXBQYXRoJywgUm9zSzhzQXBwbGljYXRpb25fSGVhcER1bXBQYXRoUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGVhcER1bXBQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnY0xvZ0ZpbGVQYXRoJywgUm9zSzhzQXBwbGljYXRpb25fR0NMb2dGaWxlUGF0aFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdjTG9nRmlsZVBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW50R2NEYXRlU3RhbXBzJywgUm9zSzhzQXBwbGljYXRpb25fUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wcmludEdjRGF0ZVN0YW1wcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigneW91bmdHYXJiYWdlQ29sbGVjdG9yJywgUm9zSzhzQXBwbGljYXRpb25fWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMueW91bmdHYXJiYWdlQ29sbGVjdG9yKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvbGRHYXJiYWdlQ29sbGVjdG9yJywgUm9zSzhzQXBwbGljYXRpb25fT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9sZEdhcmJhZ2VDb2xsZWN0b3IpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uSmF2YVN0YXJ0VXBDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEphdmFTdGFydFVwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkphdmFTdGFydFVwQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fSmF2YVN0YXJ0VXBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE1heEhlYXBTaXplOiByb3NLOHNBcHBsaWNhdGlvbk1heEhlYXBTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4SGVhcFNpemUpLFxuICAgICAgVXNlR0NMb2dGaWxlUm90YXRpb246IHJvc0s4c0FwcGxpY2F0aW9uVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VHY0xvZ0ZpbGVSb3RhdGlvbiksXG4gICAgICBDdXN0b21QYXJhbXM6IHJvc0s4c0FwcGxpY2F0aW9uQ3VzdG9tUGFyYW1zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tUGFyYW1zKSxcbiAgICAgIFBhcmFsbGVsR0NUaHJlYWRzOiByb3NLOHNBcHBsaWNhdGlvblBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFyYWxsZWxHY1RocmVhZHMpLFxuICAgICAgSW5pdGlhbEhlYXBTaXplOiByb3NLOHNBcHBsaWNhdGlvbkluaXRpYWxIZWFwU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluaXRpYWxIZWFwU2l6ZSksXG4gICAgICBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGU6IHJvc0s4c0FwcGxpY2F0aW9uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlKSxcbiAgICAgIFRocmVhZFN0YWNrU2l6ZTogcm9zSzhzQXBwbGljYXRpb25UaHJlYWRTdGFja1NpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aHJlYWRTdGFja1NpemUpLFxuICAgICAgU3Vydml2b3JSYXRpbzogcm9zSzhzQXBwbGljYXRpb25TdXJ2aXZvclJhdGlvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3Vydml2b3JSYXRpbyksXG4gICAgICBQZXJtU2l6ZTogcm9zSzhzQXBwbGljYXRpb25QZXJtU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcm1TaXplKSxcbiAgICAgIE5ld1NpemU6IHJvc0s4c0FwcGxpY2F0aW9uTmV3U2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5ld1NpemUpLFxuICAgICAgQ29uY0dDVGhyZWFkczogcm9zSzhzQXBwbGljYXRpb25Db25jR0NUaHJlYWRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29uY0djVGhyZWFkcyksXG4gICAgICBOZXdSYXRpbzogcm9zSzhzQXBwbGljYXRpb25OZXdSYXRpb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5ld1JhdGlvKSxcbiAgICAgIEdDTG9nRmlsZVNpemU6IHJvc0s4c0FwcGxpY2F0aW9uR0NMb2dGaWxlU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdjTG9nRmlsZVNpemUpLFxuICAgICAgTWF4TmV3U2l6ZTogcm9zSzhzQXBwbGljYXRpb25NYXhOZXdTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4TmV3U2l6ZSksXG4gICAgICBHMUhlYXBSZWdpb25TaXplOiByb3NLOHNBcHBsaWNhdGlvbkcxSGVhcFJlZ2lvblNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5nMUhlYXBSZWdpb25TaXplKSxcbiAgICAgIFByaW50R0M6IHJvc0s4c0FwcGxpY2F0aW9uUHJpbnRHQ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW50R2MpLFxuICAgICAgTWF4RGlyZWN0TWVtb3J5U2l6ZTogcm9zSzhzQXBwbGljYXRpb25NYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4RGlyZWN0TWVtb3J5U2l6ZSksXG4gICAgICBNYXhQZXJtU2l6ZTogcm9zSzhzQXBwbGljYXRpb25NYXhQZXJtU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heFBlcm1TaXplKSxcbiAgICAgIEhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yOiByb3NLOHNBcHBsaWNhdGlvbkhlYXBEdW1wT25PdXRPZk1lbW9yeUVycm9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhcER1bXBPbk91dE9mTWVtb3J5RXJyb3IpLFxuICAgICAgTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmc6IHJvc0s4c0FwcGxpY2F0aW9uTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZyksXG4gICAgICBIZWFwRHVtcFBhdGg6IHJvc0s4c0FwcGxpY2F0aW9uSGVhcER1bXBQYXRoUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhcER1bXBQYXRoKSxcbiAgICAgIEdDTG9nRmlsZVBhdGg6IHJvc0s4c0FwcGxpY2F0aW9uR0NMb2dGaWxlUGF0aFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdjTG9nRmlsZVBhdGgpLFxuICAgICAgUHJpbnRHQ0RhdGVTdGFtcHM6IHJvc0s4c0FwcGxpY2F0aW9uUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmludEdjRGF0ZVN0YW1wcyksXG4gICAgICBZb3VuZ0dhcmJhZ2VDb2xsZWN0b3I6IHJvc0s4c0FwcGxpY2F0aW9uWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMueW91bmdHYXJiYWdlQ29sbGVjdG9yKSxcbiAgICAgIE9sZEdhcmJhZ2VDb2xsZWN0b3I6IHJvc0s4c0FwcGxpY2F0aW9uT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9sZEdhcmJhZ2VDb2xsZWN0b3IpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIExpdmVuZXNzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVvdXRTZWNvbmRzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRpbWVvdXRTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGV4ZWM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXhlYz86IFJvc0s4c0FwcGxpY2F0aW9uLkV4ZWNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsRGVsYXlTZWNvbmRzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluaXRpYWxEZWxheVNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEdldDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwR2V0PzogUm9zSzhzQXBwbGljYXRpb24uSHR0cEdldFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBlcmlvZFNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGVyaW9kU2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0Y3BTb2NrZXQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGNwU29ja2V0PzogUm9zSzhzQXBwbGljYXRpb24uVGNwU29ja2V0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZmFpbHVyZVRocmVzaG9sZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmYWlsdXJlVGhyZXNob2xkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN1Y2Nlc3NUaHJlc2hvbGQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3VjY2Vzc1RocmVzaG9sZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYExpdmVuZXNzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExpdmVuZXNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTGl2ZW5lc3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0U2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dFNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0U2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXhlYycsIFJvc0s4c0FwcGxpY2F0aW9uX0V4ZWNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5leGVjKSk7XG4gICAgaWYocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsRGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsRGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBHZXQnLCBSb3NLOHNBcHBsaWNhdGlvbl9IdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaHR0cEdldCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kU2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kU2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0Y3BTb2NrZXQnLCBSb3NLOHNBcHBsaWNhdGlvbl9UY3BTb2NrZXRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy50Y3BTb2NrZXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWx1cmVUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWx1cmVUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VjY2Vzc1RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VjY2Vzc1RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkxpdmVuZXNzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkxpdmVuZXNzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMaXZlbmVzc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5MaXZlbmVzc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkxpdmVuZXNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0xpdmVuZXNzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUaW1lb3V0U2Vjb25kczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyksXG4gICAgICBFeGVjOiByb3NLOHNBcHBsaWNhdGlvbkV4ZWNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5leGVjKSxcbiAgICAgIEluaXRpYWxEZWxheVNlY29uZHM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyksXG4gICAgICBIdHRwR2V0OiByb3NLOHNBcHBsaWNhdGlvbkh0dHBHZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwR2V0KSxcbiAgICAgIFBlcmlvZFNlY29uZHM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyksXG4gICAgICBUY3BTb2NrZXQ6IHJvc0s4c0FwcGxpY2F0aW9uVGNwU29ja2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGNwU29ja2V0KSxcbiAgICAgIEZhaWx1cmVUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCksXG4gICAgICBTdWNjZXNzVGhyZXNob2xkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIExvY2FsVm9sdW1lUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1vdW50UGF0aDogU3BlY2lmaWVzIHRoZSBwYXRoIHdpdGhpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW91bnRQYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IFNwZWNpZmllcyB0aGUgbW91bnRpbmcgdHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbm9kZVBhdGg6IFNwZWNpZmllcyB0aGUgaG9zdCBwYXRoLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbm9kZVBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBMb2NhbFZvbHVtZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMb2NhbFZvbHVtZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX0xvY2FsVm9sdW1lUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW91bnRQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vZGVQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5vZGVQYXRoKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkxvY2FsVm9sdW1lUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLkxvY2FsVm9sdW1lYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMb2NhbFZvbHVtZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Mb2NhbFZvbHVtZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbkxvY2FsVm9sdW1lUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX0xvY2FsVm9sdW1lUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBNb3VudFBhdGg6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW91bnRQYXRoKSxcbiAgICAgIFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICBOb2RlUGF0aDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ub2RlUGF0aCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNYXhEaXJlY3RNZW1vcnlTaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heERpcmVjdE1lbW9yeVNpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTWF4RGlyZWN0TWVtb3J5U2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk1heERpcmVjdE1lbW9yeVNpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTWF4RGlyZWN0TWVtb3J5U2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYXhIZWFwU2l6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTWF4SGVhcFNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWF4SGVhcFNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9NYXhIZWFwU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNYXhIZWFwU2l6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhIZWFwU2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWF4SGVhcFNpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTWF4SGVhcFNpemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25NYXhIZWFwU2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9NYXhIZWFwU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYXhOZXdTaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNYXhOZXdTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1heE5ld1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9NYXhOZXdTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1heE5ld1NpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTWF4TmV3U2l6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTWF4TmV3U2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhOZXdTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTWF4TmV3U2l6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9NYXhOZXdTaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1heFBlcm1TaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNYXhQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX01heFBlcm1TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1heFBlcm1TaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1heFBlcm1TaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXhQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5NYXhQZXJtU2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk1heFBlcm1TaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX01heFBlcm1TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdW50RGVzY3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnRQYXRoOiBTcGVjaWZpZXMgdGhlIHBhdGggdG8gbW91bnQgdGhlIGZpbGUgc3lzdGVtIHRvIHRoZSBjb250YWluZXIgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb3VudFBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFzUGF0aDogU3BlY2lmaWVzIHRoZSBmaWxlIHN0b3JhZ2UgcGF0aC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hc1BhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNb3VudERlc2NzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1vdW50RGVzY3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Nb3VudERlc2NzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW91bnRQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXNQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hc1BhdGgpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTW91bnREZXNjc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Nb3VudERlc2NzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNb3VudERlc2NzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk1vdW50RGVzY3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25Nb3VudERlc2NzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX01vdW50RGVzY3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE1vdW50UGF0aDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb3VudFBhdGgpLFxuICAgICAgTmFzUGF0aDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYXNQYXRoKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VDbG91ZE5hbWVzcGFjZVBhcnNpbmdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5OYWNvc1VzZUNsb3VkTmFtZXNwYWNlUGFyc2luZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk5hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX05hY29zVXNlQ2xvdWROYW1lc3BhY2VQYXJzaW5nUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYWNvc1VzZUVuZHBvaW50UGFyc2luZ1J1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTmFjb3NVc2VFbmRwb2ludFBhcnNpbmdSdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX05hY29zVXNlRW5kcG9pbnRQYXJzaW5nUnVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTmV3UmF0aW9Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE5ld1JhdGlvUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5ld1JhdGlvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTmV3UmF0aW9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTmV3UmF0aW9Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmV3UmF0aW9gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5ld1JhdGlvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk5ld1JhdGlvYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uTmV3UmF0aW9Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTmV3UmF0aW9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTmV3U2l6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTmV3U2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOZXdTaXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fTmV3U2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJOZXdTaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLk5ld1NpemVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5ld1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uTmV3U2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbk5ld1NpemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fTmV3U2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBPbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBPbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk9sZEdhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uT2xkR2FyYmFnZUNvbGxlY3RvcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5PbGRHYXJiYWdlQ29sbGVjdG9yYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uT2xkR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9PbGRHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1BhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBhcmFsbGVsR0NUaHJlYWRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQYXJhbGxlbEdDVGhyZWFkc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QYXJhbGxlbEdDVGhyZWFkc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblBhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1BhcmFsbGVsR0NUaHJlYWRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1TaXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1Blcm1TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBlcm1TaXplUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBlcm1TaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQZXJtU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QZXJtU2l6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblBlcm1TaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1Blcm1TaXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvc3RTdGFydFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleGVjOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4ZWM/OiBSb3NLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRFeGVjUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEdldDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwR2V0PzogUm9zSzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9zdFN0YXJ0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvc3RTdGFydFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXhlYycsIFJvc0s4c0FwcGxpY2F0aW9uX1Bvc3RTdGFydEV4ZWNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5leGVjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwR2V0JywgUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmh0dHBHZXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUG9zdFN0YXJ0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBvc3RTdGFydGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9zdFN0YXJ0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBvc3RTdGFydGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblBvc3RTdGFydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIEV4ZWM6IHJvc0s4c0FwcGxpY2F0aW9uUG9zdFN0YXJ0RXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV4ZWMpLFxuICAgICAgSHR0cEdldDogcm9zSzhzQXBwbGljYXRpb25Qb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cEdldCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUG9zdFN0YXJ0RXhlY1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbW1hbmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9zdFN0YXJ0RXhlY1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb3N0U3RhcnRFeGVjUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0RXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQb3N0U3RhcnRFeGVjUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlBvc3RTdGFydEV4ZWNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvc3RTdGFydEV4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0RXhlY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblBvc3RTdGFydEV4ZWNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0RXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ29tbWFuZDogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXRoOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEhlYWRlcnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEhlYWRlcnM/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5IdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2NoZW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNjaGVtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwSGVhZGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5odHRwSGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2NoZW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zY2hlbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjaGVtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJIVFRQXCIsXCJIVFRQU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2hlbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ob3N0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvc3RTdGFydEh0dHBHZXRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUG9zdFN0YXJ0SHR0cEdldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Qb3N0U3RhcnRIdHRwR2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUG9zdFN0YXJ0SHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Qb3N0U3RhcnRIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhdGgpLFxuICAgICAgSHR0cEhlYWRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSxcbiAgICAgIFNjaGVtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zY2hlbWUpLFxuICAgICAgUG9ydDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIEhvc3Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJlU3RvcFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBleGVjOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV4ZWM/OiBSb3NLOHNBcHBsaWNhdGlvbi5QcmVTdG9wRXhlY1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBHZXQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEdldD86IFJvc0s4c0FwcGxpY2F0aW9uLlByZVN0b3BIdHRwR2V0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmVTdG9wUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjJywgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEV4ZWNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5leGVjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwR2V0JywgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5odHRwR2V0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByZVN0b3BQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmVTdG9wYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBFeGVjOiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BFeGVjUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhlYyksXG4gICAgICBIdHRwR2V0OiByb3NLOHNBcHBsaWNhdGlvblByZVN0b3BIdHRwR2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cEdldCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJlU3RvcEV4ZWNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29tbWFuZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21tYW5kPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByZVN0b3BFeGVjUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BFeGVjUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEV4ZWNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmQnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbW1hbmQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJlU3RvcEV4ZWNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcEV4ZWNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BFeGVjUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BFeGVjYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJlU3RvcEV4ZWNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUHJlU3RvcEV4ZWNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbW1hbmQ6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByZVN0b3BIdHRwR2V0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhdGg6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwSGVhZGVyczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwSGVhZGVycz86IEFycmF5PFJvc0s4c0FwcGxpY2F0aW9uLlByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2NoZW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNjaGVtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwSGVhZGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuaHR0cEhlYWRlcnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjaGVtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2NoZW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2hlbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zY2hlbWUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSFRUUFwiLFwiSFRUUFNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2hlbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2NoZW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hvc3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaG9zdCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wSHR0cEdldFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmVTdG9wSHR0cEdldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcEh0dHBHZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJlU3RvcEh0dHBHZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QcmVTdG9wSHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QcmVTdG9wSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUGF0aDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXRoKSxcbiAgICAgIEh0dHBIZWFkZXJzOiByb3MubGlzdE1hcHBlcihyb3NLOHNBcHBsaWNhdGlvblByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaHR0cEhlYWRlcnMpLFxuICAgICAgU2NoZW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaGVtZSksXG4gICAgICBQb3J0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgSG9zdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ob3N0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJlU3RvcEh0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25QcmVTdG9wSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1ByZVN0b3BIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJpbnRHQ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByaW50R0NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbnRHQ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1ByaW50R0NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByaW50R0NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUHJpbnRHQ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbnRHQ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmludEdDYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUHJpbnRHQ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9QcmludEdDUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUHJpbnRHQ0RhdGVTdGFtcHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlByaW50R0NEYXRlU3RhbXBzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmludEdDRGF0ZVN0YW1wc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5QcmludEdDRGF0ZVN0YW1wc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1ByaW50R0NEYXRlU3RhbXBzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWFkaW5lc3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZW91dFNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZW91dFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXhlYzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBleGVjPzogUm9zSzhzQXBwbGljYXRpb24uUmVhZGluZXNzRXhlY1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluaXRpYWxEZWxheVNlY29uZHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5pdGlhbERlbGF5U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwR2V0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBHZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NIdHRwR2V0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGVyaW9kU2Vjb25kczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwZXJpb2RTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRjcFNvY2tldDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0Y3BTb2NrZXQ/OiBSb3NLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmYWlsdXJlVGhyZXNob2xkOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZhaWx1cmVUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VjY2Vzc1RocmVzaG9sZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdWNjZXNzVGhyZXNob2xkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVhZGluZXNzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjJywgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzRXhlY1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmV4ZWMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEdldCcsIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5odHRwR2V0KSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RjcFNvY2tldCcsIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRjcFNvY2tldCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSk7XG4gICAgaWYocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkICYmICh0eXBlb2YgcHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVhZGluZXNzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFRpbWVvdXRTZWNvbmRzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSxcbiAgICAgIEV4ZWM6IHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzRXhlY1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV4ZWMpLFxuICAgICAgSW5pdGlhbERlbGF5U2Vjb25kczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSxcbiAgICAgIEh0dHBHZXQ6IHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzSHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBHZXQpLFxuICAgICAgUGVyaW9kU2Vjb25kczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSxcbiAgICAgIFRjcFNvY2tldDogcm9zSzhzQXBwbGljYXRpb25SZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50Y3BTb2NrZXQpLFxuICAgICAgRmFpbHVyZVRocmVzaG9sZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSxcbiAgICAgIFN1Y2Nlc3NUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVhZGluZXNzRXhlY1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbW1hbmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVhZGluZXNzRXhlY1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NFeGVjUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZWFkaW5lc3NFeGVjUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0V4ZWNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlYWRpbmVzc0V4ZWNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzRXhlY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc0V4ZWNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzRXhlY1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ29tbWFuZDogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVhZGluZXNzSHR0cEdldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXRoOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEhlYWRlcnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEhlYWRlcnM/OiBBcnJheTxSb3NLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2NoZW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNjaGVtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVhZGluZXNzSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzSHR0cEdldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwSGVhZGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5odHRwSGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2NoZW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zY2hlbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjaGVtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJIVFRQXCIsXCJIVFRQU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2hlbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ob3N0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlYWRpbmVzc0h0dHBHZXRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzSHR0cEdldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzSHR0cEdldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5SZWFkaW5lc3NIdHRwR2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzSHR0cEdldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NIdHRwR2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhdGgpLFxuICAgICAgSHR0cEhlYWRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmh0dHBIZWFkZXJzKSxcbiAgICAgIFNjaGVtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zY2hlbWUpLFxuICAgICAgUG9ydDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIEhvc3Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzSHR0cEdldEh0dHBIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblJlYWRpbmVzc0h0dHBHZXRIdHRwSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9SZWFkaW5lc3NIdHRwR2V0SHR0cEhlYWRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBob3N0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hvc3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaG9zdCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzVGNwU29ja2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWFkaW5lc3NUY3BTb2NrZXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uUmVhZGluZXNzVGNwU29ja2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uUmVhZGluZXNzVGNwU29ja2V0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1JlYWRpbmVzc1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUG9ydDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIEhvc3Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NLOHNBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2xzQ29uZmlnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgY29sbGVjdGlvbiB0eXBlLiBUaGUgZmlsZSB0eXBlIGlzIGZpbGUgYW5kIHRoZSBzdGFuZGFyZCBvdXRwdXQgdHlwZSBpcyBzdGRvdXQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvZ0RpcjogSWYgdGhlIHN0YW5kYXJkIG91dHB1dCB0eXBlIGlzIHVzZWQsIHRoZSBjb2xsZWN0aW9uIHBhdGggaXMgc3Rkb3V0LmxvZy4gSWYgdGhlIGZpbGUgdHlwZSBpcyB1c2VkLCB0aGUgY29sbGVjdGlvbiBwYXRoIGlzIHRoZSBwYXRoIG9mIHRoZSBjb2xsZWN0ZWQgZmlsZS4gV2lsZGNhcmRzKCopIGFyZSBzdXBwb3J0ZWQuIFRoZSBjb2xsZWN0aW9uIHBhdGggbXVzdCBtYXRjaCB0aGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbjpcbiAgICAgKiBeLyggKykvKC4gKileLyQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsb2dEaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9nc3RvcmU6IFRoZSBuYW1lIG9mIHRoZSBMb2dzdG9yZS4gTWFrZSBzdXJlIHRoYXQgdGhlIG5hbWUgb2YgdGhlIExvZ3N0b3JlIGlzIHVuaXF1ZSBpbiB0aGUgY2x1c3Rlci4gVGhlIG5hbWUgbXVzdCBjb21wbHkgd2l0aCB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICAgICAqIFRoZSBuYW1lIGNhbiBjb250YWluIG9ubHkgbG93ZXJjYXNlIGxldHRlcnMsIGRpZ2l0cywgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyhfKS4gVGhlIG5hbWUgbXVzdCBzdGFydCBhbmQgZW5kIHdpdGggYSBsb3dlcmNhc2UgbGV0dGVyIG9yIGEgZGlnaXQuIFRoZSBuYW1lIG11c3QgYmUgMyB0byA2MyBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJZiB0aGlzIHBhcmFtZXRlciBpcyBlbXB0eSwgdGhlIHN5c3RlbSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlcyBhIG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsb2dzdG9yZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNsc0NvbmZpZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2xzQ29uZmlnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1Nsc0NvbmZpZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50eXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImZpbGVcIixcInN0ZG91dFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nRGlyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ0RpcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nc3RvcmUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nc3RvcmUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2xzQ29uZmlnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5TbHNDb25maWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTbHNDb25maWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlNsc0NvbmZpZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQXBwbGljYXRpb25TbHNDb25maWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1Nsc0NvbmZpZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICBMb2dEaXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nRGlyKSxcbiAgICAgIExvZ3N0b3JlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTdXJ2aXZvclJhdGlvUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9yaWdpbmFsOiBJbmRpY2F0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvcmlnaW5hbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydHVwOiBJbmRpY2F0ZXMgYSBzdGFydHVwIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0dXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTdXJ2aXZvclJhdGlvUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFN1cnZpdm9yUmF0aW9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9TdXJ2aXZvclJhdGlvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmlnaW5hbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlN1cnZpdm9yUmF0aW9Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uU3Vydml2b3JSYXRpb2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3Vydml2b3JSYXRpb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5TdXJ2aXZvclJhdGlvYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uU3Vydml2b3JSYXRpb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9TdXJ2aXZvclJhdGlvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcmlnaW5hbCksXG4gICAgICBTdGFydHVwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0dXApLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRjcFNvY2tldFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRjcFNvY2tldFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1RjcFNvY2tldFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGNwU29ja2V0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlRjcFNvY2tldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGNwU29ja2V0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlRjcFNvY2tldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblRjcFNvY2tldFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9UY3BTb2NrZXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBvcnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9ydCksXG4gICAgICBIb3N0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhvc3QpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSzhzQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRocmVhZFN0YWNrU2l6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnR1cDogSW5kaWNhdGVzIGEgc3RhcnR1cCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGFydHVwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGhyZWFkU3RhY2tTaXplUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRocmVhZFN0YWNrU2l6ZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0FwcGxpY2F0aW9uX1RocmVhZFN0YWNrU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JpZ2luYWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMub3JpZ2luYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXJ0dXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnR1cCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUaHJlYWRTdGFja1NpemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uVGhyZWFkU3RhY2tTaXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUaHJlYWRTdGFja1NpemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uVGhyZWFkU3RhY2tTaXplYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uVGhyZWFkU3RhY2tTaXplUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1RocmVhZFN0YWNrU2l6ZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgT3JpZ2luYWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VHQ0xvZ0ZpbGVSb3RhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvcmlnaW5hbDogSW5kaWNhdGVzIHRoZSBjb25maWd1cmF0aW9uIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3JpZ2luYWw/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fVXNlR0NMb2dGaWxlUm90YXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5vcmlnaW5hbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnR1cCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFydHVwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLlVzZUdDTG9nRmlsZVJvdGF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBVc2VHQ0xvZ0ZpbGVSb3RhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNBcHBsaWNhdGlvbi5Vc2VHQ0xvZ0ZpbGVSb3RhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvblVzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1VzZUdDTG9nRmlsZVJvdGF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBPcmlnaW5hbDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JpZ2luYWwpLFxuICAgICAgU3RhcnR1cDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFydHVwKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBXZWJDb250YWluZXJDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cFBvcnQ6IFRoZSBwb3J0IHJhbmdlIGlzIGZyb20gMTAyNCB0byA2NTUzNS4gVGhlIGFkbWluIHBlcm1pc3Npb24gaXMgY29uZmlndXJlZCBmb3IgdGhlIGNvbnRhaW5lciwgYnV0IHRoZSByb290IHBlcm1pc3Npb24gaXMgcmVxdWlyZWQgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIHBvcnRzIHdpdGggbnVtYmVycyBsZXNzIHRoYW4gMTAyNC4gVGhlcmVmb3JlLCBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAxMDI0IHdpdGhpbiB0aGUgcmFuZ2UuIElmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgODA4MCBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHVyaUVuY29kaW5nOiBUaGUgZW5jb2RpbmcgZm9ybWF0IGZvciBUb21jYXQuIFZhbGlkIHZhbHVlczogVVRGLTgsIElTTy04ODU5LTEsIEdCSywgYW5kIEdCMjMxMi4gSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCBJU08tODg1OS0xIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdXJpRW5jb2Rpbmc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29udGV4dFBhdGg6IFRoZSBjdXN0b20gcGF0aC4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb25seSB3aGVuIHRoZSBDb250ZXh0SW5wdXRUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gY3VzdG9tLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29udGV4dFBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29udGV4dElucHV0VHlwZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gY3VzdG9taXplIHRoZSBhY2Nlc3MgcGF0aCBmb3IgdGhlIGFwcGxpY2F0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogd2FyOiBUaGUgYXBwbGljYXRpb24gYWNjZXNzIHBhdGggaXMgdGhlIG5hbWUgb2YgdGhlIFdBUiBwYWNrYWdlLiBZb3UgZG8gbm90IG5lZWQgdG8gZW50ZXIgYSBjdXN0b20gcGF0aC5cbiAgICAgKiByb290OiBUaGUgYXBwbGljYXRpb24gYWNjZXNzIHBhdGggaXMgLy4gWW91IGRvIG5vdCBuZWVkIHRvIGVudGVyIGEgY3VzdG9tIHBhdGguXG4gICAgICogY3VzdG9tOiBJZiB5b3Ugc2VsZWN0IHRoaXMgb3B0aW9uLCB5b3UgbXVzdCBzZXQgY29udGV4dFBhdGggdG8gYSBjdXN0b20gcGF0aC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbnRleHRJbnB1dFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXNlQm9keUVuY29kaW5nOiBTcGVjaWZpZXMgd2hldGhlciB0byB1c2UgQm9keUVuY29kaW5nIGZvciBVUkwuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VCb2R5RW5jb2Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZlclhtbDogc2VydmVyWG1sOiBUaGUgY29udGVudCBvZiB0aGUgc2VydmVyLnhtbCBmaWxlIGN1c3RvbWl6ZWQgaW4gYWR2YW5jZWQgY29uZmlndXJhdGlvbnMuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiBVc2VBZHZhbmNlZFNlcnZlclhtbCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZlclhtbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhUaHJlYWRzOiBUaGUgbnVtYmVyIG9mIGNvbm5lY3Rpb25zIGluIHRoZSBjb25uZWN0aW9uIHBvb2wuIERlZmF1bHQgdmFsdWU6IDQwMC5cbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIGdyZWF0bHkgYWZmZWN0cyB0aGUgYXBwbGljYXRpb24gcGVyZm9ybWFuY2UuIFdlIHJlY29tbWVuZCB0aGF0IHlvdSBzZXQgdGhpcyBwYXJhbWV0ZXIgdW5kZXIgcHJvZmVzc2lvbmFsIGd1aWRhbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4VGhyZWFkcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VBZHZhbmNlZFNlcnZlclhtbDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gdXNlIGFkdmFuY2VkIGNvbmZpZ3VyYXRpb25zIHRvIGN1c3RvbWl6ZSB0aGUgc2VydmVyLnhtbCBmaWxlLiBXaGVuIHRoZSBwcmVjZWRpbmcgcGFyYW1ldGVyIHR5cGUgYW5kIHNwZWNpZmljIHBhcmFtZXRlcnMgY2Fubm90IG1lZXQgeW91ciByZXF1aXJlbWVudHMsIHlvdSBjYW4gdXNlIGFkdmFuY2VkIGNvbmZpZ3VyYXRpb25zIHRvIGVkaXQgdGhlIHNlcnZlci54bWwgZmlsZSBvZiBUb21jYXQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VBZHZhbmNlZFNlcnZlclhtbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXNlRGVmYXVsdENvbmZpZzogU3BlY2lmaWVzIHdoZXRoZXIgdG8gdXNlIHRoZSBjdXN0b20gY29uZmlndXJhdGlvbi4gVGhlIHZhbHVlIHRydWUgaW5kaWNhdGVzIHRoYXQgdGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIGlzIG5vdCB1c2VkLCB3aGVyZWFzIHRoZSB2YWx1ZSBmYWxzZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gaXMgdXNlZC4gSWYgdGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIGlzIG5vdCB1c2VkLCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnMgZG8gbm90IHRha2UgZWZmZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdXNlRGVmYXVsdENvbmZpZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBXZWJDb250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSzhzQXBwbGljYXRpb25fV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5odHRwUG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMuaHR0cFBvcnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBQb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaHR0cFBvcnQsXG4gICAgICAgICAgICBtaW46IDEwMjQsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwUG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5odHRwUG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXJpRW5jb2RpbmcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudXJpRW5jb2RpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRleHRQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRleHRQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZXh0SW5wdXRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRleHRJbnB1dFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZUJvZHlFbmNvZGluZycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMudXNlQm9keUVuY29kaW5nKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2ZXJYbWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmVyWG1sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhUaHJlYWRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heFRocmVhZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZUFkdmFuY2VkU2VydmVyWG1sJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy51c2VBZHZhbmNlZFNlcnZlclhtbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlRGVmYXVsdENvbmZpZycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMudXNlRGVmYXVsdENvbmZpZykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJXZWJDb250YWluZXJDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uV2ViQ29udGFpbmVyQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXZWJDb250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6SzhzQXBwbGljYXRpb24uV2ViQ29udGFpbmVyQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0s4c0FwcGxpY2F0aW9uV2ViQ29udGFpbmVyQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0s4c0FwcGxpY2F0aW9uX1dlYkNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgSHR0cFBvcnQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cFBvcnQpLFxuICAgICAgVXJpRW5jb2Rpbmc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXJpRW5jb2RpbmcpLFxuICAgICAgQ29udGV4dFBhdGg6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGV4dFBhdGgpLFxuICAgICAgQ29udGV4dElucHV0VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250ZXh0SW5wdXRUeXBlKSxcbiAgICAgIFVzZUJvZHlFbmNvZGluZzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlQm9keUVuY29kaW5nKSxcbiAgICAgIFNlcnZlclhtbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2ZXJYbWwpLFxuICAgICAgTWF4VGhyZWFkczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhUaHJlYWRzKSxcbiAgICAgIFVzZUFkdmFuY2VkU2VydmVyWG1sOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VBZHZhbmNlZFNlcnZlclhtbCksXG4gICAgICBVc2VEZWZhdWx0Q29uZmlnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VEZWZhdWx0Q29uZmlnKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0s4c0FwcGxpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBZb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3JpZ2luYWw6IEluZGljYXRlcyB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9yaWdpbmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXJ0dXA6IEluZGljYXRlcyBhIHN0YXJ0dXAgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhcnR1cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFlvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBZb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NLOHNBcHBsaWNhdGlvbl9Zb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yaWdpbmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yaWdpbmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydHVwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0dXApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLllvdW5nR2FyYmFnZUNvbGxlY3RvcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgWW91bmdHYXJiYWdlQ29sbGVjdG9yUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0FwcGxpY2F0aW9uLllvdW5nR2FyYmFnZUNvbGxlY3RvcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NLOHNBcHBsaWNhdGlvbllvdW5nR2FyYmFnZUNvbGxlY3RvclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NLOHNBcHBsaWNhdGlvbl9Zb3VuZ0dhcmJhZ2VDb2xsZWN0b3JQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yaWdpbmFsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yaWdpbmFsKSxcbiAgICAgIFN0YXJ0dXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnR1cCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSzhzQ2x1c3RlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjc0NsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBDUyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNzQ2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlQXNtOiBXaGV0aGVyIGVuYWJsZSBBU00uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlQXNtPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIG5hbWVzcGFjZSB0byB3aGljaCB0aGUgY2x1c3RlciB0aGF0IHlvdSB3YW50IHRvIGltcG9ydCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0s4c0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSzhzQ2x1c3RlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0s4c0NsdXN0ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZUFzbScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbmFibGVBc20pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWVzcGFjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjc0NsdXN0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jc0NsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3NDbHVzdGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY3NDbHVzdGVySWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSzhzQ2x1c3RlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpLOHNDbHVzdGVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NLOHNDbHVzdGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSzhzQ2x1c3RlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zSzhzQ2x1c3RlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENzQ2x1c3RlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNzQ2x1c3RlcklkKSxcbiAgICAgIEVuYWJsZUFzbTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVBc20pLFxuICAgICAgTmFtZXNwYWNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZXNwYWNlSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NLOHNDbHVzdGVyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpLOHNDbHVzdGVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3Rlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlclR5cGU6IFRoZSB0eXBlIG9mIHRoZSBjbHVzdGVyOlxuMjogRUNTIGNsdXN0ZXJcbjU6IENvbnRhaW5lciBTZXJ2aWNlIEs4cyBjbHVzdGVyIG9yIFNlcnZlcmxlc3MgSzhzIGNsdXN0ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENzQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIEs4cyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3NDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmV0d29ya01vZGU6IE5ldHdvcmsgbm9kZTpcbjE6IENsYXNzaWMgbmV0d29ya1xuMjogVlBDXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrTW9kZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOb2RlTnVtOiBOdW1iZXIgb2Ygbm9kZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOb2RlTnVtOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN1Yk5ldENpZHI6IFN1YiBuZXQgQ0lEUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN1Yk5ldENpZHI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZzd2l0Y2hJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnN3aXRjaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjc0NsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBDUyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjc0NsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUFzbTogV2hldGhlciBlbmFibGUgQVNNLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVBc206IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2VJZDogVGhlIElEIG9mIHRoZSBuYW1lc3BhY2UgdG8gd2hpY2ggdGhlIGNsdXN0ZXIgdGhhdCB5b3Ugd2FudCB0byBpbXBvcnQgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZXNwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpLOHNDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NLOHNDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NLOHNDbHVzdGVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJOYW1lID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJUeXBlID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0ckNzQ2x1c3RlcklkID0gdGhpcy5nZXRBdHQoJ0NzQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtNb2RlID0gdGhpcy5nZXRBdHQoJ05ldHdvcmtNb2RlJyk7XG4gICAgICAgIHRoaXMuYXR0ck5vZGVOdW0gPSB0aGlzLmdldEF0dCgnTm9kZU51bScpO1xuICAgICAgICB0aGlzLmF0dHJTdWJOZXRDaWRyID0gdGhpcy5nZXRBdHQoJ1N1Yk5ldENpZHInKTtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSB0aGlzLmdldEF0dCgnVnBjSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVnN3aXRjaElkID0gdGhpcy5nZXRBdHQoJ1Zzd2l0Y2hJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jc0NsdXN0ZXJJZCA9IHByb3BzLmNzQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmVuYWJsZUFzbSA9IHByb3BzLmVuYWJsZUFzbTtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2VJZCA9IHByb3BzLm5hbWVzcGFjZUlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNzQ2x1c3RlcklkOiB0aGlzLmNzQ2x1c3RlcklkLFxuICAgICAgICAgICAgZW5hYmxlQXNtOiB0aGlzLmVuYWJsZUFzbSxcbiAgICAgICAgICAgIG5hbWVzcGFjZUlkOiB0aGlzLm5hbWVzcGFjZUlkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NLOHNDbHVzdGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uTmFtZTogTG9naWNhbCByZWdpb24gKG9yIG5hbWVzcGFjZSkgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWdpb25UYWc6IExvZ2ljIHJlZ2lvbiAob3IgbmFtZXNwYWNlKSBJRCAoZm9ybWF0OiBcInBoeXNpY2FsIHJlZ2lvbiBJRDogbG9naWNhbCB6b25lIGlkZW50aWZpZXJcIiwgb3IgXCJsb2dpY2FsIHpvbmUgaWRlbnRpZmllclwiKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvblRhZzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlYnVnRW5hYmxlOiBXaGV0aGVyIGRlYnVnIGlzIGVuYWJsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlYnVnRW5hYmxlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVXNlckRlZmluZVJlZ2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVnaW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25UYWcnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVnaW9uVGFnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25UYWcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uVGFnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWJ1Z0VuYWJsZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVidWdFbmFibGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVXNlckRlZmluZVJlZ2lvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVXNlckRlZmluZVJlZ2lvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFJlZ2lvbk5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uTmFtZSksXG4gICAgICBSZWdpb25UYWc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uVGFnKSxcbiAgICAgIERlYnVnRW5hYmxlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWJ1Z0VuYWJsZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1VzZXJEZWZpbmVSZWdpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBCZWxvbmdSZWdpb246IFVuZGVyIHRoZSBwaHlzaWNhbCByZWdpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJlbG9uZ1JlZ2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZWJ1Z0VuYWJsZTogV2hldGhlciBkZWJ1ZyBpcyBlbmFibGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlYnVnRW5hYmxlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBSZXNvdXJjZSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVnaW9uTmFtZTogUmVnaW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlZ2lvbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXNlcklkOiBVc2VyIGFjY291bnQgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uTmFtZTogTG9naWNhbCByZWdpb24gKG9yIG5hbWVzcGFjZSkgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uVGFnOiBMb2dpYyByZWdpb24gKG9yIG5hbWVzcGFjZSkgSUQgKGZvcm1hdDogXCJwaHlzaWNhbCByZWdpb24gSUQ6IGxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIsIG9yIFwibG9naWNhbCB6b25lIGlkZW50aWZpZXJcIilcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaW9uVGFnOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVidWdFbmFibGU6IFdoZXRoZXIgZGVidWcgaXMgZW5hYmxlXG4gICAgICovXG4gICAgcHVibGljIGRlYnVnRW5hYmxlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBMb2dpYyByZWdpb24gKG9yIG5hbWVzcGFjZSkgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NVc2VyRGVmaW5lUmVnaW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJCZWxvbmdSZWdpb24gPSB0aGlzLmdldEF0dCgnQmVsb25nUmVnaW9uJyk7XG4gICAgICAgIHRoaXMuYXR0ckRlYnVnRW5hYmxlID0gdGhpcy5nZXRBdHQoJ0RlYnVnRW5hYmxlJyk7XG4gICAgICAgIHRoaXMuYXR0cklkID0gdGhpcy5nZXRBdHQoJ0lkJyk7XG4gICAgICAgIHRoaXMuYXR0clJlZ2lvbk5hbWUgPSB0aGlzLmdldEF0dCgnUmVnaW9uTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSB0aGlzLmdldEF0dCgnVXNlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJlZ2lvbk5hbWUgPSBwcm9wcy5yZWdpb25OYW1lO1xuICAgICAgICB0aGlzLnJlZ2lvblRhZyA9IHByb3BzLnJlZ2lvblRhZztcbiAgICAgICAgdGhpcy5kZWJ1Z0VuYWJsZSA9IHByb3BzLmRlYnVnRW5hYmxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVnaW9uTmFtZTogdGhpcy5yZWdpb25OYW1lLFxuICAgICAgICAgICAgcmVnaW9uVGFnOiB0aGlzLnJlZ2lvblRhZyxcbiAgICAgICAgICAgIGRlYnVnRW5hYmxlOiB0aGlzLmRlYnVnRW5hYmxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==