"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosUserDefineRegion = exports.RosDeployGroup = exports.RosClusterMember = exports.RosCluster = exports.RosApplication = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRhcy5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGFzLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBeUQ5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLDRCQUE0QixDQUFDLFVBQWU7SUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUcsSUFBRyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUM5SCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEUsSUFBSSxFQUFF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QUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLHFDQUFxQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMvRixDQUFDOztBQTVGTCxrREE2RkM7QUE1Rkc7O0dBRUc7QUFDb0IsMENBQXNCLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQXBwbGljYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwbGljYXRpb25OYW1lOiBUaGUgYXBwbGljYXRpb24gbmFtZSAob25seSBhbGxvdyB0aGUgdXNlIG9mIG51bWJlcnMsIGxldHRlcnMsIC0sIF8sIHVwIHRvIDM2IGNoYXJhY3RlcnMpXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlcklkOiBDbHVzdGVyIElEIG9mIEVDUyBhcHBsaWNhdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJ1aWxkUGFja0lkOiBFREFTLUNvbnRhaW5lciBjb25zdHJ1Y3QgYSBwYWNrZXQgbnVtYmVyIChhdmFpbGFibGUgdmVyc2lvbiBsaXN0IGFjcXVpcmVkIHRocm91Z2ggdGhlIExpc3RCdWlsZFBhY2sgQVBJIChDb25maWdJZCBvZiByZXNwb25zZSkgb3IgXCJjb250YWluZXIgdmVyc2lvblwiIHRhYmxlIFwiQnVpbGRpbmcgcGFja2V0IG51bWJlclwiIGNvbHVtbiBhY3F1aXNpdGlvbikuIFdoZW4gY3JlYXRpbmcgSFNGIGFwcGxpY2F0aW9uLCB0aGlzIHBhcmFtZXRlciBtdXN0IGJlIHNwZWNpZmllZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1aWxkUGFja0lkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbXBvbmVudElkczogQXBwbGljYXRpb24gY29tcG9uZW50IElEIChhdmFpbGFibGUgdGhyb3VnaCB0aGUgcXVlcnkgaW50ZXJmYWNlIHRvIG9idGFpbiBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgaW50ZXJmYWNlIExpc3RDb21wb25lbnRzKSwgd2hlbiBjcmVhdGluZyB0aGUgYXBwbGljYXRpb24gcnVudGltZSBlbnZpcm9ubWVudCB1c2luZyBBcGFjaGUgVG9tY2F0ICh3YXIgcGFja2V0IGZvcm1hdCBEdWJib1xuICAgICAqIEFwcGxpY2F0aW9uIHJlcXVpcmVkKSBvciBzdGFuZGFyZCBKYXZhIGFwcGxpY2F0aW9uIChqYXIgcGFja2FnZSBmb3JtYXQgU3ByaW5nIEJvb3QgLyBTcHJpbmcgQ2xvdWQgYXBwbGljYXRpb25zIHJlcXVpcmUpIHlvdSBuZWVkIHRvIHNwZWNpZnkgd2hlbiB0aGUgb3BlcmF0aW5nIGVudmlyb25tZW50LiBDb21tb25seSB1c2VkIGFwcGxpY2F0aW9uIGNvbXBvbmVudCBJRCBhbmQgbWVhbmluZzpcbiAgICAgKiA0IHJlcHJlc2VudHMgQXBhY2hlIFRvbWNhdCA3LjAuOTEsNyByZXByZXNlbnRlZCBBcGFjaGUgVG9tY2F0IDguNS40Miw1IHJlcHJlc2VudGVkIE9wZW5KREsgMS44LngsIDYgcmVwcmVzZW50cyBPcGVuSkRLXG4gICAgICogMS43LnhcbiAgICAgKi9cbiAgICByZWFkb25seSBjb21wb25lbnRJZHM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aXZlIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWN1SW5mbzogTWFjaGluZSBjYXBhY2l0eSBpcyBuZWVkZWQgZWN1X2lkIChFQ1MgRXhhbXBsZXMgaW50cm9kdWNpbmcgYW5vdGhlciB1bmlxdWUgaWRlbnRpdHkgRURBUyBFREFTKSwgdGhlIHBsdXJhbGl0eSBvZiBcIixcIiBzZXBhcmF0ZWQgKGJ5IHF1ZXJ5aW5nIExpc3RTY2FsZU91dEVjdSB3aGVyZWluIGVjdV9pZFxuICAgICAqIEludGVyZmFjZSB0byBvYnRhaW4pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVjdUluZm8/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGVhbHRoQ2hlY2tVcmw6IEFwcGxpY2F0aW9uIEhlYWx0aCBDaGVjayBVUkxcbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGhDaGVja1VybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpY2FsUmVnaW9uSWQ6IE5hbWVzcGFjZSBJRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ2ljYWxSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYWNrYWdlVHlwZTogQXBwbGljYXRpb24gcGFja2V0IGZvcm1hdCwgcG9zc2libGUgdmFsdWVzOiB3YXIgb3IgamFyXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQXBwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXBwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBcHBsaWNhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcG9uZW50SWRzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbXBvbmVudElkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9naWNhbFJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ2ljYWxSZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwbGljYXRpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuYXBwbGljYXRpb25OYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuYXBwbGljYXRpb25OYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuYXBwbGljYXRpb25OYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwbGljYXRpb25OYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFwcGxpY2F0aW9uTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDM2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBsaWNhdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwbGljYXRpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZWN1SW5mbycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lY3VJbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFsdGhDaGVja1VybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oZWFsdGhDaGVja1VybCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGFja2FnZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYWNrYWdlVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBhY2thZ2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIndhclwiLFwiamFyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFja2FnZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFja2FnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1aWxkUGFja0lkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJ1aWxkUGFja0lkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FwcGxpY2F0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkFwcGxpY2F0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBcHBsaWNhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcHBsaWNhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQXBwbGljYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBcHBsaWNhdGlvbk5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBwbGljYXRpb25OYW1lKSxcbiAgICAgIENsdXN0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbHVzdGVySWQpLFxuICAgICAgQnVpbGRQYWNrSWQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVpbGRQYWNrSWQpLFxuICAgICAgQ29tcG9uZW50SWRzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbXBvbmVudElkcyksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBFY3VJbmZvOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVjdUluZm8pLFxuICAgICAgSGVhbHRoQ2hlY2tVUkw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tVcmwpLFxuICAgICAgTG9naWNhbFJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2ljYWxSZWdpb25JZCksXG4gICAgICBQYWNrYWdlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYWNrYWdlVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RURBUzo6QXBwbGljYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBJZDogQXBwbGljYXRpb24gSWQsIGEgdW5pcXVlIGlkZW50aWZpZXIgRURBUyBhcHBsaWNhdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9ydDogQXBwbGljYXRpb24gcG9ydFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwbGljYXRpb25OYW1lOiBUaGUgYXBwbGljYXRpb24gbmFtZSAob25seSBhbGxvdyB0aGUgdXNlIG9mIG51bWJlcnMsIGxldHRlcnMsIC0sIF8sIHVwIHRvIDM2IGNoYXJhY3RlcnMpXG4gICAgICovXG4gICAgcHVibGljIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCBvZiBFQ1MgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYnVpbGRQYWNrSWQ6IEVEQVMtQ29udGFpbmVyIGNvbnN0cnVjdCBhIHBhY2tldCBudW1iZXIgKGF2YWlsYWJsZSB2ZXJzaW9uIGxpc3QgYWNxdWlyZWQgdGhyb3VnaCB0aGUgTGlzdEJ1aWxkUGFjayBBUEkgKENvbmZpZ0lkIG9mIHJlc3BvbnNlKSBvciBcImNvbnRhaW5lciB2ZXJzaW9uXCIgdGFibGUgXCJCdWlsZGluZyBwYWNrZXQgbnVtYmVyXCIgY29sdW1uIGFjcXVpc2l0aW9uKS4gV2hlbiBjcmVhdGluZyBIU0YgYXBwbGljYXRpb24sIHRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc3BlY2lmaWVkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkUGFja0lkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tcG9uZW50SWRzOiBBcHBsaWNhdGlvbiBjb21wb25lbnQgSUQgKGF2YWlsYWJsZSB0aHJvdWdoIHRoZSBxdWVyeSBpbnRlcmZhY2UgdG8gb2J0YWluIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBpbnRlcmZhY2UgTGlzdENvbXBvbmVudHMpLCB3aGVuIGNyZWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBydW50aW1lIGVudmlyb25tZW50IHVzaW5nIEFwYWNoZSBUb21jYXQgKHdhciBwYWNrZXQgZm9ybWF0IER1YmJvXG4gICAgICogQXBwbGljYXRpb24gcmVxdWlyZWQpIG9yIHN0YW5kYXJkIEphdmEgYXBwbGljYXRpb24gKGphciBwYWNrYWdlIGZvcm1hdCBTcHJpbmcgQm9vdCAvIFNwcmluZyBDbG91ZCBhcHBsaWNhdGlvbnMgcmVxdWlyZSkgeW91IG5lZWQgdG8gc3BlY2lmeSB3aGVuIHRoZSBvcGVyYXRpbmcgZW52aXJvbm1lbnQuIENvbW1vbmx5IHVzZWQgYXBwbGljYXRpb24gY29tcG9uZW50IElEIGFuZCBtZWFuaW5nOlxuICAgICAqIDQgcmVwcmVzZW50cyBBcGFjaGUgVG9tY2F0IDcuMC45MSw3IHJlcHJlc2VudGVkIEFwYWNoZSBUb21jYXQgOC41LjQyLDUgcmVwcmVzZW50ZWQgT3BlbkpESyAxLjgueCwgNiByZXByZXNlbnRzIE9wZW5KREtcbiAgICAgKiAxLjcueFxuICAgICAqL1xuICAgIHB1YmxpYyBjb21wb25lbnRJZHM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpdmUgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlY3VJbmZvOiBNYWNoaW5lIGNhcGFjaXR5IGlzIG5lZWRlZCBlY3VfaWQgKEVDUyBFeGFtcGxlcyBpbnRyb2R1Y2luZyBhbm90aGVyIHVuaXF1ZSBpZGVudGl0eSBFREFTIEVEQVMpLCB0aGUgcGx1cmFsaXR5IG9mIFwiLFwiIHNlcGFyYXRlZCAoYnkgcXVlcnlpbmcgTGlzdFNjYWxlT3V0RWN1IHdoZXJlaW4gZWN1X2lkXG4gICAgICogSW50ZXJmYWNlIHRvIG9idGFpbikuXG4gICAgICovXG4gICAgcHVibGljIGVjdUluZm86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoZWFsdGhDaGVja1VybDogQXBwbGljYXRpb24gSGVhbHRoIENoZWNrIFVSTFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFsdGhDaGVja1VybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogTmFtZXNwYWNlIElEXG4gICAgICovXG4gICAgcHVibGljIGxvZ2ljYWxSZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhY2thZ2VUeXBlOiBBcHBsaWNhdGlvbiBwYWNrZXQgZm9ybWF0LCBwb3NzaWJsZSB2YWx1ZXM6IHdhciBvciBqYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFja2FnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpBcHBsaWNhdGlvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXBwbGljYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FwcGxpY2F0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJQb3J0ID0gdGhpcy5nZXRBdHQoJ1BvcnQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25OYW1lID0gcHJvcHMuYXBwbGljYXRpb25OYW1lO1xuICAgICAgICB0aGlzLmNsdXN0ZXJJZCA9IHByb3BzLmNsdXN0ZXJJZDtcbiAgICAgICAgdGhpcy5idWlsZFBhY2tJZCA9IHByb3BzLmJ1aWxkUGFja0lkO1xuICAgICAgICB0aGlzLmNvbXBvbmVudElkcyA9IHByb3BzLmNvbXBvbmVudElkcztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVjdUluZm8gPSBwcm9wcy5lY3VJbmZvO1xuICAgICAgICB0aGlzLmhlYWx0aENoZWNrVXJsID0gcHJvcHMuaGVhbHRoQ2hlY2tVcmw7XG4gICAgICAgIHRoaXMubG9naWNhbFJlZ2lvbklkID0gcHJvcHMubG9naWNhbFJlZ2lvbklkO1xuICAgICAgICB0aGlzLnBhY2thZ2VUeXBlID0gcHJvcHMucGFja2FnZVR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lOiB0aGlzLmFwcGxpY2F0aW9uTmFtZSxcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogdGhpcy5jbHVzdGVySWQsXG4gICAgICAgICAgICBidWlsZFBhY2tJZDogdGhpcy5idWlsZFBhY2tJZCxcbiAgICAgICAgICAgIGNvbXBvbmVudElkczogdGhpcy5jb21wb25lbnRJZHMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVjdUluZm86IHRoaXMuZWN1SW5mbyxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrVXJsOiB0aGlzLmhlYWx0aENoZWNrVXJsLFxuICAgICAgICAgICAgbG9naWNhbFJlZ2lvbklkOiB0aGlzLmxvZ2ljYWxSZWdpb25JZCxcbiAgICAgICAgICAgIHBhY2thZ2VUeXBlOiB0aGlzLnBhY2thZ2VUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBcHBsaWNhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJOYW1lOiBDbHVzdGVyIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJUeXBlOiBDbHVzdGVyIHR5cGUuIDEtU3dhcm0gY2x1c3RlciwgMi1FQ1MgY2x1c3RlciwgMy1LdWJlcm5ldGVzIENsdXN0ZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyVHlwZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtNb2RlOiBOZXR3b3JrIFR5cGUuIDEtIGNsYXNzaWMgbmV0d29yaywgMi1WUENcbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrTW9kZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogQ3VzdG9tIG5hbWVzcGFjZSBSZWdpb25JZCAoZm9ybWF0OiBQaHlzaWNhbCBSZWdpb246IGN1c3RvbSBuYW1lc3BhY2UgaWRlbnRpZmllcilcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpY2FsUmVnaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3ZlcnNvbGRGYWN0b3I6IERvY2tlciBDUFUgY2x1c3RlciBvdmVyc29sZC4gU3VwcG9ydCAyICgxOiAyIHJhdGlvKSAvIDQgKDE6IDQpIC8gOCAoMTogOCByYXRpbylcbiAgICAgKi9cbiAgICByZWFkb25seSBvdmVyc29sZEZhY3Rvcj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVlBDIG5ldHdvcmsgSUQuIElmIG5ldHdvcmsgc2VsZWN0aW9uIFZQQywgdGhpcyBwYXJhbWV0ZXIgUmVxdWlyZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDbHVzdGVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDbHVzdGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dpY2FsUmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9naWNhbFJlZ2lvbklkKSk7XG4gICAgaWYocHJvcGVydGllcy5vdmVyc29sZEZhY3RvciAmJiAodHlwZW9mIHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ292ZXJzb2xkRmFjdG9yJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMub3ZlcnNvbGRGYWN0b3IsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzIsNCw4XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ292ZXJzb2xkRmFjdG9yJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm92ZXJzb2xkRmFjdG9yKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3Rlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2x1c3Rlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrTW9kZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uZXR3b3JrTW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya01vZGUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubmV0d29ya01vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyVHlwZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jbHVzdGVyVHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDbHVzdGVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDbHVzdGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDbHVzdGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2x1c3Rlck5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3Rlck5hbWUpLFxuICAgICAgQ2x1c3RlclR5cGU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlclR5cGUpLFxuICAgICAgTmV0d29ya01vZGU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29ya01vZGUpLFxuICAgICAgTG9naWNhbFJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2ljYWxSZWdpb25JZCksXG4gICAgICBPdmVyc29sZEZhY3Rvcjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vdmVyc29sZEZhY3RvciksXG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NsdXN0ZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkNsdXN0ZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyTmFtZTogQ2x1c3RlciBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyVHlwZTogQ2x1c3RlciB0eXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJYWFzUHJvdmlkZXI6IFByb3ZpZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJYWFzUHJvdmlkZXI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJOYW1lOiBDbHVzdGVyIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3Rlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyVHlwZTogQ2x1c3RlciB0eXBlLiAxLVN3YXJtIGNsdXN0ZXIsIDItRUNTIGNsdXN0ZXIsIDMtS3ViZXJuZXRlcyBDbHVzdGVyXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJUeXBlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya01vZGU6IE5ldHdvcmsgVHlwZS4gMS0gY2xhc3NpYyBuZXR3b3JrLCAyLVZQQ1xuICAgICAqL1xuICAgIHB1YmxpYyBuZXR3b3JrTW9kZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogQ3VzdG9tIG5hbWVzcGFjZSBSZWdpb25JZCAoZm9ybWF0OiBQaHlzaWNhbCBSZWdpb246IGN1c3RvbSBuYW1lc3BhY2UgaWRlbnRpZmllcilcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9naWNhbFJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3ZlcnNvbGRGYWN0b3I6IERvY2tlciBDUFUgY2x1c3RlciBvdmVyc29sZC4gU3VwcG9ydCAyICgxOiAyIHJhdGlvKSAvIDQgKDE6IDQpIC8gOCAoMTogOCByYXRpbylcbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnNvbGRGYWN0b3I6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVlBDIG5ldHdvcmsgSUQuIElmIG5ldHdvcmsgc2VsZWN0aW9uIFZQQywgdGhpcyBwYXJhbWV0ZXIgUmVxdWlyZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDbHVzdGVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJOYW1lID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJUeXBlID0gdGhpcy5nZXRBdHQoJ0NsdXN0ZXJUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0cklhYXNQcm92aWRlciA9IHRoaXMuZ2V0QXR0KCdJYWFzUHJvdmlkZXInKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2x1c3Rlck5hbWUgPSBwcm9wcy5jbHVzdGVyTmFtZTtcbiAgICAgICAgdGhpcy5jbHVzdGVyVHlwZSA9IHByb3BzLmNsdXN0ZXJUeXBlO1xuICAgICAgICB0aGlzLm5ldHdvcmtNb2RlID0gcHJvcHMubmV0d29ya01vZGU7XG4gICAgICAgIHRoaXMubG9naWNhbFJlZ2lvbklkID0gcHJvcHMubG9naWNhbFJlZ2lvbklkO1xuICAgICAgICB0aGlzLm92ZXJzb2xkRmFjdG9yID0gcHJvcHMub3ZlcnNvbGRGYWN0b3I7XG4gICAgICAgIHRoaXMudnBjSWQgPSBwcm9wcy52cGNJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbHVzdGVyTmFtZTogdGhpcy5jbHVzdGVyTmFtZSxcbiAgICAgICAgICAgIGNsdXN0ZXJUeXBlOiB0aGlzLmNsdXN0ZXJUeXBlLFxuICAgICAgICAgICAgbmV0d29ya01vZGU6IHRoaXMubmV0d29ya01vZGUsXG4gICAgICAgICAgICBsb2dpY2FsUmVnaW9uSWQ6IHRoaXMubG9naWNhbFJlZ2lvbklkLFxuICAgICAgICAgICAgb3ZlcnNvbGRGYWN0b3I6IHRoaXMub3ZlcnNvbGRGYWN0b3IsXG4gICAgICAgICAgICB2cGNJZDogdGhpcy52cGNJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2x1c3RlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDbHVzdGVyTWVtYmVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCB0byBpbXBvcnQgRUNTIGluc3RhbmNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZHM6IEVDUyBpbnN0YW5jZSBJRCBsaXN0IHRvIGltcG9ydC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXNzd29yZDogUGFzc3dvcmQgRUNTIGhvc3RzIG5lZWQgdG8gaW1wb3J0IChFQ1Mgc2V0dGluZ3MgY2FuIGNvbnRpbnVlIHRvIHVzZSBwdXJjaGFzZWQpXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDbHVzdGVyTWVtYmVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NsdXN0ZXJNZW1iZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDbHVzdGVyTWVtYmVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2x1c3RlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkcykpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pbnN0YW5jZUlkcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlSWRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VJZHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5pbnN0YW5jZUlkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc3dvcmQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGFzc3dvcmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhc3N3b3JkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0NsdXN0ZXJNZW1iZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2x1c3Rlck1lbWJlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpDbHVzdGVyTWVtYmVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NsdXN0ZXJNZW1iZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NsdXN0ZXJNZW1iZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgIEluc3RhbmNlSWRzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pbnN0YW5jZUlkcyksXG4gICAgICBQYXNzd29yZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzd29yZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6Q2x1c3Rlck1lbWJlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NsdXN0ZXJNZW1iZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3Rlck1lbWJlcklkczogQ2x1c3RlciBtZW1iZXIgSURzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIEVDUyBpbnN0YW5jZSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyTWVtYmVySWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWRzOiBFQ1MgaW5zdGFuY2UgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCB0byBpbXBvcnQgRUNTIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWRzOiBFQ1MgaW5zdGFuY2UgSUQgbGlzdCB0byBpbXBvcnQuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBFQ1MgaG9zdHMgbmVlZCB0byBpbXBvcnQgKEVDUyBzZXR0aW5ncyBjYW4gY29udGludWUgdG8gdXNlIHB1cmNoYXNlZClcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpDbHVzdGVyTWVtYmVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDbHVzdGVyTWVtYmVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDbHVzdGVyTWVtYmVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSB0aGlzLmdldEF0dCgnQ2x1c3RlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJNZW1iZXJJZHMgPSB0aGlzLmdldEF0dCgnQ2x1c3Rlck1lbWJlcklkcycpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkcyA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jbHVzdGVySWQgPSBwcm9wcy5jbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZHMgPSBwcm9wcy5pbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHByb3BzLnBhc3N3b3JkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogdGhpcy5jbHVzdGVySWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkczogdGhpcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDbHVzdGVyTWVtYmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFREFTOjpEZXBsb3lHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEZXBsb3lHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBJZDogQXBwbGljYXRpb24gSURcbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogR3JvdXAgbmFtZSwgbWF4aW11bSBsZW5ndGggb2YgNjQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRGVwbG95R3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGVwbG95R3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEZXBsb3lHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZ3JvdXBOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZ3JvdXBOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZ3JvdXBOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmdyb3VwTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcHBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRGVwbG95R3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6RGVwbG95R3JvdXBgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RlcGxveUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RlcGxveUdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEZXBsb3lHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFwcElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcElkKSxcbiAgICAgIEdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRGVwbG95R3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwSWQ6IEFwcGxpY2F0aW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cE5hbWU6IERlcGxveSBncm91cCBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSWQ6IERlcGxveSBncm91cCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcElkOiBBcHBsaWNhdGlvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogR3JvdXAgbmFtZSwgbWF4aW11bSBsZW5ndGggb2YgNjQuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVEQVM6OkRlcGxveUdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEZXBsb3lHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGVwbG95R3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwcElkID0gdGhpcy5nZXRBdHQoJ0FwcElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHRoaXMuZ2V0QXR0KCdHcm91cE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRySWQgPSB0aGlzLmdldEF0dCgnSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBwSWQgPSBwcm9wcy5hcHBJZDtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBwcm9wcy5ncm91cE5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwSWQ6IHRoaXMuYXBwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEZXBsb3lHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbk5hbWU6IExvZ2ljYWwgcmVnaW9uIChvciBuYW1lc3BhY2UpIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uVGFnOiBMb2dpYyByZWdpb24gKG9yIG5hbWVzcGFjZSkgSUQgKGZvcm1hdDogXCJwaHlzaWNhbCByZWdpb24gSUQ6IGxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIsIG9yIFwibG9naWNhbCB6b25lIGlkZW50aWZpZXJcIilcbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25UYWc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWJ1Z0VuYWJsZTogV2hldGhlciBkZWJ1ZyBpcyBlbmFibGVcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWJ1Z0VuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IExvZ2ljIHJlZ2lvbiAob3IgbmFtZXNwYWNlKSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZ2lvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uVGFnJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZ2lvblRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uVGFnJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZ2lvblRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVidWdFbmFibGUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlYnVnRW5hYmxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlckRlZmluZVJlZ2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1VzZXJEZWZpbmVSZWdpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSZWdpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvbk5hbWUpLFxuICAgICAgUmVnaW9uVGFnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvblRhZyksXG4gICAgICBEZWJ1Z0VuYWJsZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVidWdFbmFibGUpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NVc2VyRGVmaW5lUmVnaW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmVsb25nUmVnaW9uOiBVbmRlciB0aGUgcGh5c2ljYWwgcmVnaW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCZWxvbmdSZWdpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVidWdFbmFibGU6IFdoZXRoZXIgZGVidWcgaXMgZW5hYmxlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWJ1Z0VuYWJsZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJZDogUmVzb3VyY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlZ2lvbk5hbWU6IFJlZ2lvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWdpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogVXNlciBhY2NvdW50IElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbk5hbWU6IExvZ2ljYWwgcmVnaW9uIChvciBuYW1lc3BhY2UpIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvblRhZzogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIElEIChmb3JtYXQ6IFwicGh5c2ljYWwgcmVnaW9uIElEOiBsb2dpY2FsIHpvbmUgaWRlbnRpZmllclwiLCBvciBcImxvZ2ljYWwgem9uZSBpZGVudGlmaWVyXCIpXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvblRhZzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlYnVnRW5hYmxlOiBXaGV0aGVyIGRlYnVnIGlzIGVuYWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBkZWJ1Z0VuYWJsZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogTG9naWMgcmVnaW9uIChvciBuYW1lc3BhY2UpIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6VXNlckRlZmluZVJlZ2lvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVXNlckRlZmluZVJlZ2lvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlckRlZmluZVJlZ2lvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQmVsb25nUmVnaW9uID0gdGhpcy5nZXRBdHQoJ0JlbG9uZ1JlZ2lvbicpO1xuICAgICAgICB0aGlzLmF0dHJEZWJ1Z0VuYWJsZSA9IHRoaXMuZ2V0QXR0KCdEZWJ1Z0VuYWJsZScpO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHRoaXMuZ2V0QXR0KCdJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZWdpb25OYW1lID0gdGhpcy5nZXRBdHQoJ1JlZ2lvbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcklkID0gdGhpcy5nZXRBdHQoJ1VzZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5yZWdpb25OYW1lID0gcHJvcHMucmVnaW9uTmFtZTtcbiAgICAgICAgdGhpcy5yZWdpb25UYWcgPSBwcm9wcy5yZWdpb25UYWc7XG4gICAgICAgIHRoaXMuZGVidWdFbmFibGUgPSBwcm9wcy5kZWJ1Z0VuYWJsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlZ2lvbk5hbWU6IHRoaXMucmVnaW9uTmFtZSxcbiAgICAgICAgICAgIHJlZ2lvblRhZzogdGhpcy5yZWdpb25UYWcsXG4gICAgICAgICAgICBkZWJ1Z0VuYWJsZTogdGhpcy5kZWJ1Z0VuYWJsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NVc2VyRGVmaW5lUmVnaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=