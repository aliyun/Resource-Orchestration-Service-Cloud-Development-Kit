"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosMountPoint = exports.RosFileSystem = exports.RosAccessRule = exports.RosAccessGroup = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAccessGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAccessGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if (properties.accessGroupName && (Array.isArray(properties.accessGroupName) || (typeof properties.accessGroupName) === 'string')) {
        errors.collect(ros.propertyValidator('accessGroupName', ros.validateLength)({
            data: properties.accessGroupName.length,
            min: 6,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    return errors.wrap('supplied properties not correct for "RosAccessGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DFS::AccessGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DFS::AccessGroup` resource.
 */
// @ts-ignore TS6133
function rosAccessGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessGroupPropsValidator(properties).assertSuccess();
    }
    return {
        'AccessGroupName': ros.stringToRosTemplate(properties.accessGroupName),
        'Description': ros.stringToRosTemplate(properties.description),
        'NetworkType': ros.stringToRosTemplate(properties.networkType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::AccessGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
class RosAccessGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessGroupId = this.getAtt('AccessGroupId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.description = props.description;
        this.networkType = props.networkType;
    }
    get rosProperties() {
        return {
            accessGroupName: this.accessGroupName,
            description: this.description,
            networkType: this.networkType,
        };
    }
    renderProperties(props) {
        return rosAccessGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessGroup = RosAccessGroup;
/**
 * The resource type name for this resource class.
 */
RosAccessGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::AccessGroup";
/**
 * Determine whether the given properties match those of a `RosAccessRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessRuleProps`
 *
 * @returns the result of the validation.
 */
function RosAccessRulePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('networkSegment', ros.requiredValidator)(properties.networkSegment));
    if (properties.networkSegment && (Array.isArray(properties.networkSegment) || (typeof properties.networkSegment) === 'string')) {
        errors.collect(ros.propertyValidator('networkSegment', ros.validateLength)({
            data: properties.networkSegment.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('networkSegment', ros.validateString)(properties.networkSegment));
    errors.collect(ros.propertyValidator('accessGroupId', ros.requiredValidator)(properties.accessGroupId));
    errors.collect(ros.propertyValidator('accessGroupId', ros.validateString)(properties.accessGroupId));
    errors.collect(ros.propertyValidator('rwAccessType', ros.requiredValidator)(properties.rwAccessType));
    if (properties.rwAccessType && (typeof properties.rwAccessType) !== 'object') {
        errors.collect(ros.propertyValidator('rwAccessType', ros.validateAllowedValues)({
            data: properties.rwAccessType,
            allowedValues: ["RDWR", "RDONLY"],
        }));
    }
    errors.collect(ros.propertyValidator('rwAccessType', ros.validateString)(properties.rwAccessType));
    return errors.wrap('supplied properties not correct for "RosAccessRuleProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DFS::AccessRule` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DFS::AccessRule` resource.
 */
// @ts-ignore TS6133
function rosAccessRulePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessRulePropsValidator(properties).assertSuccess();
    }
    return {
        'AccessGroupId': ros.stringToRosTemplate(properties.accessGroupId),
        'NetworkSegment': ros.stringToRosTemplate(properties.networkSegment),
        'RWAccessType': ros.stringToRosTemplate(properties.rwAccessType),
        'Description': ros.stringToRosTemplate(properties.description),
        'Priority': ros.numberToRosTemplate(properties.priority),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::AccessRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
 */
class RosAccessRule extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessRuleId = this.getAtt('AccessRuleId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupId = props.accessGroupId;
        this.networkSegment = props.networkSegment;
        this.rwAccessType = props.rwAccessType;
        this.description = props.description;
        this.priority = props.priority;
    }
    get rosProperties() {
        return {
            accessGroupId: this.accessGroupId,
            networkSegment: this.networkSegment,
            rwAccessType: this.rwAccessType,
            description: this.description,
            priority: this.priority,
        };
    }
    renderProperties(props) {
        return rosAccessRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessRule = RosAccessRule;
/**
 * The resource type name for this resource class.
 */
RosAccessRule.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::AccessRule";
/**
 * Determine whether the given properties match those of a `RosFileSystemProps`
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the result of the validation.
 */
function RosFileSystemPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('spaceCapacity', ros.requiredValidator)(properties.spaceCapacity));
    errors.collect(ros.propertyValidator('spaceCapacity', ros.validateNumber)(properties.spaceCapacity));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('storageType', ros.requiredValidator)(properties.storageType));
    if (properties.storageType && (typeof properties.storageType) !== 'object') {
        errors.collect(ros.propertyValidator('storageType', ros.validateAllowedValues)({
            data: properties.storageType,
            allowedValues: ["STANDARD", "PERFORMANCE"],
        }));
    }
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('partitionNumber', ros.validateNumber)(properties.partitionNumber));
    errors.collect(ros.propertyValidator('protocolType', ros.requiredValidator)(properties.protocolType));
    if (properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
            data: properties.protocolType,
            allowedValues: ["HDFS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    if (properties.dataRedundancyType && (typeof properties.dataRedundancyType) !== 'object') {
        errors.collect(ros.propertyValidator('dataRedundancyType', ros.validateAllowedValues)({
            data: properties.dataRedundancyType,
            allowedValues: ["LRS", "ZRS"],
        }));
    }
    errors.collect(ros.propertyValidator('dataRedundancyType', ros.validateString)(properties.dataRedundancyType));
    if (properties.fileSystemName && (Array.isArray(properties.fileSystemName) || (typeof properties.fileSystemName) === 'string')) {
        errors.collect(ros.propertyValidator('fileSystemName', ros.validateLength)({
            data: properties.fileSystemName.length,
            min: 6,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('fileSystemName', ros.validateString)(properties.fileSystemName));
    if (properties.provisionedThroughputInMiBps && (typeof properties.provisionedThroughputInMiBps) !== 'object') {
        errors.collect(ros.propertyValidator('provisionedThroughputInMiBps', ros.validateRange)({
            data: properties.provisionedThroughputInMiBps,
            min: 1,
            max: 5120,
        }));
    }
    errors.collect(ros.propertyValidator('provisionedThroughputInMiBps', ros.validateNumber)(properties.provisionedThroughputInMiBps));
    if (properties.throughputMode && (typeof properties.throughputMode) !== 'object') {
        errors.collect(ros.propertyValidator('throughputMode', ros.validateAllowedValues)({
            data: properties.throughputMode,
            allowedValues: ["Standard", "Provisioned"],
        }));
    }
    errors.collect(ros.propertyValidator('throughputMode', ros.validateString)(properties.throughputMode));
    if (properties.storageSetName && (Array.isArray(properties.storageSetName) || (typeof properties.storageSetName) === 'string')) {
        errors.collect(ros.propertyValidator('storageSetName', ros.validateLength)({
            data: properties.storageSetName.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('storageSetName', ros.validateString)(properties.storageSetName));
    return errors.wrap('supplied properties not correct for "RosFileSystemProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DFS::FileSystem` resource
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DFS::FileSystem` resource.
 */
// @ts-ignore TS6133
function rosFileSystemPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosFileSystemPropsValidator(properties).assertSuccess();
    }
    return {
        'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
        'SpaceCapacity': ros.numberToRosTemplate(properties.spaceCapacity),
        'StorageType': ros.stringToRosTemplate(properties.storageType),
        'ZoneId': ros.stringToRosTemplate(properties.zoneId),
        'DataRedundancyType': ros.stringToRosTemplate(properties.dataRedundancyType),
        'Description': ros.stringToRosTemplate(properties.description),
        'FileSystemName': ros.stringToRosTemplate(properties.fileSystemName),
        'PartitionNumber': ros.numberToRosTemplate(properties.partitionNumber),
        'ProvisionedThroughputInMiBps': ros.numberToRosTemplate(properties.provisionedThroughputInMiBps),
        'StorageSetName': ros.stringToRosTemplate(properties.storageSetName),
        'ThroughputMode': ros.stringToRosTemplate(properties.throughputMode),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::FileSystem`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
class RosFileSystem extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFileSystem.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFileSystemId = this.getAtt('FileSystemId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.protocolType = props.protocolType;
        this.spaceCapacity = props.spaceCapacity;
        this.storageType = props.storageType;
        this.zoneId = props.zoneId;
        this.dataRedundancyType = props.dataRedundancyType;
        this.description = props.description;
        this.fileSystemName = props.fileSystemName;
        this.partitionNumber = props.partitionNumber;
        this.provisionedThroughputInMiBps = props.provisionedThroughputInMiBps;
        this.storageSetName = props.storageSetName;
        this.throughputMode = props.throughputMode;
    }
    get rosProperties() {
        return {
            protocolType: this.protocolType,
            spaceCapacity: this.spaceCapacity,
            storageType: this.storageType,
            zoneId: this.zoneId,
            dataRedundancyType: this.dataRedundancyType,
            description: this.description,
            fileSystemName: this.fileSystemName,
            partitionNumber: this.partitionNumber,
            provisionedThroughputInMiBps: this.provisionedThroughputInMiBps,
            storageSetName: this.storageSetName,
            throughputMode: this.throughputMode,
        };
    }
    renderProperties(props) {
        return rosFileSystemPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFileSystem = RosFileSystem;
/**
 * The resource type name for this resource class.
 */
RosFileSystem.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::FileSystem";
/**
 * Determine whether the given properties match those of a `RosMountPointProps`
 *
 * @param properties - the TypeScript properties of a `RosMountPointProps`
 *
 * @returns the result of the validation.
 */
function RosMountPointPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["Active", "Inactive"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('networkType', ros.requiredValidator)(properties.networkType));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('accessGroupId', ros.requiredValidator)(properties.accessGroupId));
    errors.collect(ros.propertyValidator('accessGroupId', ros.validateString)(properties.accessGroupId));
    return errors.wrap('supplied properties not correct for "RosMountPointProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DFS::MountPoint` resource
 *
 * @param properties - the TypeScript properties of a `RosMountPointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DFS::MountPoint` resource.
 */
// @ts-ignore TS6133
function rosMountPointPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosMountPointPropsValidator(properties).assertSuccess();
    }
    return {
        'AccessGroupId': ros.stringToRosTemplate(properties.accessGroupId),
        'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
        'NetworkType': ros.stringToRosTemplate(properties.networkType),
        'VpcId': ros.stringToRosTemplate(properties.vpcId),
        'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
        'Description': ros.stringToRosTemplate(properties.description),
        'Status': ros.stringToRosTemplate(properties.status),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::MountPoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MountPoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
class RosMountPoint extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMountPoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMountPointId = this.getAtt('MountPointId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupId = props.accessGroupId;
        this.fileSystemId = props.fileSystemId;
        this.networkType = props.networkType;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.status = props.status;
    }
    get rosProperties() {
        return {
            accessGroupId: this.accessGroupId,
            fileSystemId: this.fileSystemId,
            networkType: this.networkType,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            description: this.description,
            status: this.status,
        };
    }
    renderProperties(props) {
        return rosMountPointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMountPoint = RosMountPoint;
/**
 * The resource type name for this resource class.
 */
RosMountPoint.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::MountPoint";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRmcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQTJCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyw0QkFBNEIsQ0FBQyxVQUFlO0lBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQ25DLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxx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TztZQUNILGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sK0JBQStCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O0FBbkZMLHNDQW9GQztBQW5GRzs7R0FFRztBQUNvQixvQ0FBc0IsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQWNjZXNzR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZGZzLWFjY2Vzc2dyb3VwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQWNjZXNzR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzR3JvdXBOYW1lOiBUaGUgTmFtZSBvZiBBY2Nlc3MgR3JvdXAuIFRoZSBuYW1pbmcgcnVsZXMgYXJlIGFzIGZvbGxvd3M6XG4gICAgICogVGhlIHZhbHVlIGNvbnRhaW5zIDYgdG8gMTAwIGNoYXJhY3RlcnMuXG4gICAgICogR2xvYmFsbHkgdW5pcXVlIGFuZCBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2Vzc0dyb3VwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhY2Nlc3NfZ3JvdXAuXG4gICAgICogVGhlIHZhbHVlIGNvbnRhaW5zIDAgdG8gMTAwIGNoYXJhY3RlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrVHlwZTogVGhlIE5ldHdvcmtUeXBlIG9mIEFjY2VzcyBHcm91cC4gVmFsaWQgdmFsdWVzOiBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya1R5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWNjZXNzR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2Nlc3NHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5ldHdvcmtUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5uZXR3b3JrVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya1R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJWUENcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uZXR3b3JrVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuYWNjZXNzR3JvdXBOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuYWNjZXNzR3JvdXBOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuYWNjZXNzR3JvdXBOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzR3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFjY2Vzc0dyb3VwTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDYsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzR3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2Vzc0dyb3VwTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2Nlc3NHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERlM6OkFjY2Vzc0dyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2Nlc3NHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERlM6OkFjY2Vzc0dyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FjY2Vzc0dyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBY2Nlc3NHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBY2Nlc3NHcm91cE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2Vzc0dyb3VwTmFtZSksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdOZXR3b3JrVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29ya1R5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkRGUzo6QWNjZXNzR3JvdXBgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBY2Nlc3NHcm91cGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZGZzLWFjY2Vzc2dyb3VwXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBY2Nlc3NHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6REZTOjpBY2Nlc3NHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2Nlc3NHcm91cElkOiBUaGUgSUQgb2YgdGhlIGFjY2Vzc19ncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2Vzc0dyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0dyb3VwTmFtZTogVGhlIE5hbWUgb2YgQWNjZXNzIEdyb3VwLiBUaGUgbmFtaW5nIHJ1bGVzIGFyZSBhcyBmb2xsb3dzOlxuICAgICAqIFRoZSB2YWx1ZSBjb250YWlucyA2IHRvIDEwMCBjaGFyYWN0ZXJzLlxuICAgICAqIEdsb2JhbGx5IHVuaXF1ZSBhbmQgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXNzR3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWNjZXNzX2dyb3VwLlxuICAgICAqIFRoZSB2YWx1ZSBjb250YWlucyAwIHRvIDEwMCBjaGFyYWN0ZXJzXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya1R5cGU6IFRoZSBOZXR3b3JrVHlwZSBvZiBBY2Nlc3MgR3JvdXAuIFZhbGlkIHZhbHVlczogVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyBuZXR3b3JrVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FjY2Vzc0dyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBY2Nlc3NHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWNjZXNzR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdBY2Nlc3NHcm91cElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY2Vzc0dyb3VwTmFtZSA9IHByb3BzLmFjY2Vzc0dyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5ldHdvcmtUeXBlID0gcHJvcHMubmV0d29ya1R5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzR3JvdXBOYW1lOiB0aGlzLmFjY2Vzc0dyb3VwTmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmV0d29ya1R5cGU6IHRoaXMubmV0d29ya1R5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FjY2Vzc0dyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQWNjZXNzUnVsZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kZnMtYWNjZXNzcnVsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FjY2Vzc1J1bGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzR3JvdXBJZDogVGhlIHJlc291cmNlIElEIG9mIEFjY2VzcyBHcm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya1NlZ21lbnQ6IFRoZSBOZXR3b3JrU2VnbWVudCBvZiB0aGUgQWNjZXNzIFJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya1NlZ21lbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByd0FjY2Vzc1R5cGU6IFRoZSByZWFkXFwvd3JpdGUgcGVybWlzc2lvbiBvZiB0aGUgYXV0aG9yaXplZCBvYmplY3Qgb24gdGhlIGZpbGUgc3lzdGVtLlxuICAgICAqIFZhbHVlczpcbiAgICAgKiBSRFdSIChkZWZhdWx0KSA6IHJlYWQgYW5kIHdyaXRlLlxuICAgICAqIFJET05MWTogcmVhZC1vbmx5XG4gICAgICovXG4gICAgcmVhZG9ubHkgcndBY2Nlc3NUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBEZXNjcmlwdGlvbiBvZiB0aGUgQWNjZXNzIFJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpb3JpdHk6IFRoZSBQcmlvcml0eSBvZiB0aGUgQWNjZXNzIFJ1bGUuIFZhbGlkIHZhbHVlczogMSB0byAxMDAuIFxuICAgICAqIE5PVEU6IFdoZW4gbXVsdGlwbGUgcnVsZXMgYXJlIG1hdGNoZWQgYnkgdGhlIHNhbWUgYXV0aG9yaXplZCBvYmplY3QsIFxuICAgICAqIHRoZSBoaWdoLXByaW9yaXR5IHJ1bGUgdGFrZXMgZWZmZWN0LiAxIGlzIHRoZSBoaWdoZXN0IHByaW9yaXR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW9yaXR5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FjY2Vzc1J1bGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzUnVsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FjY2Vzc1J1bGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5wcmlvcml0eSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJpb3JpdHkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW9yaXR5Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJpb3JpdHksXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpb3JpdHknLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucHJpb3JpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtTZWdtZW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5ldHdvcmtTZWdtZW50KSk7XG4gICAgaWYocHJvcGVydGllcy5uZXR3b3JrU2VnbWVudCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm5ldHdvcmtTZWdtZW50KSB8fCAodHlwZW9mIHByb3BlcnRpZXMubmV0d29ya1NlZ21lbnQpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrU2VnbWVudCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uZXR3b3JrU2VnbWVudC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrU2VnbWVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uZXR3b3JrU2VnbWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzR3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2Nlc3NHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2Vzc0dyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J3QWNjZXNzVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yd0FjY2Vzc1R5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJ3QWNjZXNzVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucndBY2Nlc3NUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyd0FjY2Vzc1R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yd0FjY2Vzc1R5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUkRXUlwiLFwiUkRPTkxZXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncndBY2Nlc3NUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJ3QWNjZXNzVHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2Nlc3NSdWxlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkRGUzo6QWNjZXNzUnVsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzUnVsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERlM6OkFjY2Vzc1J1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWNjZXNzUnVsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWNjZXNzUnVsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBY2Nlc3NHcm91cElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2Nlc3NHcm91cElkKSxcbiAgICAgICdOZXR3b3JrU2VnbWVudCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29ya1NlZ21lbnQpLFxuICAgICAgJ1JXQWNjZXNzVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucndBY2Nlc3NUeXBlKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ1ByaW9yaXR5Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmlvcml0eSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6REZTOjpBY2Nlc3NSdWxlYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQWNjZXNzUnVsZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZGZzLWFjY2Vzc3J1bGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FjY2Vzc1J1bGUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkRGUzo6QWNjZXNzUnVsZVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2Nlc3NSdWxlSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzX3J1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2Nlc3NSdWxlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0dyb3VwSWQ6IFRoZSByZXNvdXJjZSBJRCBvZiBBY2Nlc3MgR3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGFjY2Vzc0dyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrU2VnbWVudDogVGhlIE5ldHdvcmtTZWdtZW50IG9mIHRoZSBBY2Nlc3MgUnVsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya1NlZ21lbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByd0FjY2Vzc1R5cGU6IFRoZSByZWFkXFwvd3JpdGUgcGVybWlzc2lvbiBvZiB0aGUgYXV0aG9yaXplZCBvYmplY3Qgb24gdGhlIGZpbGUgc3lzdGVtLlxuICAgICAqIFZhbHVlczpcbiAgICAgKiBSRFdSIChkZWZhdWx0KSA6IHJlYWQgYW5kIHdyaXRlLlxuICAgICAqIFJET05MWTogcmVhZC1vbmx5XG4gICAgICovXG4gICAgcHVibGljIHJ3QWNjZXNzVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgRGVzY3JpcHRpb24gb2YgdGhlIEFjY2VzcyBSdWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW9yaXR5OiBUaGUgUHJpb3JpdHkgb2YgdGhlIEFjY2VzcyBSdWxlLiBWYWxpZCB2YWx1ZXM6IDEgdG8gMTAwLiBcbiAgICAgKiBOT1RFOiBXaGVuIG11bHRpcGxlIHJ1bGVzIGFyZSBtYXRjaGVkIGJ5IHRoZSBzYW1lIGF1dGhvcml6ZWQgb2JqZWN0LCBcbiAgICAgKiB0aGUgaGlnaC1wcmlvcml0eSBydWxlIHRha2VzIGVmZmVjdC4gMSBpcyB0aGUgaGlnaGVzdCBwcmlvcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpb3JpdHk6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBY2Nlc3NSdWxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBY2Nlc3NSdWxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NSdWxlSWQgPSB0aGlzLmdldEF0dCgnQWNjZXNzUnVsZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY2Vzc0dyb3VwSWQgPSBwcm9wcy5hY2Nlc3NHcm91cElkO1xuICAgICAgICB0aGlzLm5ldHdvcmtTZWdtZW50ID0gcHJvcHMubmV0d29ya1NlZ21lbnQ7XG4gICAgICAgIHRoaXMucndBY2Nlc3NUeXBlID0gcHJvcHMucndBY2Nlc3NUeXBlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcm9wcy5wcmlvcml0eTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NHcm91cElkOiB0aGlzLmFjY2Vzc0dyb3VwSWQsXG4gICAgICAgICAgICBuZXR3b3JrU2VnbWVudDogdGhpcy5uZXR3b3JrU2VnbWVudCxcbiAgICAgICAgICAgIHJ3QWNjZXNzVHlwZTogdGhpcy5yd0FjY2Vzc1R5cGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBY2Nlc3NSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zRmlsZVN5c3RlbWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kZnMtZmlsZXN5c3RlbVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0ZpbGVTeXN0ZW1Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2xUeXBlOiBQcm90b2NvbCB0eXBlLCBvbmx5IHN1cHBvcnQgSERGU++8iEhhZG9vcEZpbGVTeXN0ZW3vvIlcbiAgICAgKi9cbiAgICByZWFkb25seSBwcm90b2NvbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGFjZUNhcGFjaXR5OiBDYXBhY2l0eSBvZiB0aGUgZmlsZSBzeXN0ZW0uXG4gICAgICogV2hlbiB0aGUgYWN0dWFsIGRhdGEgdm9sdW1lIHJlYWNoZXMgdGhlIGZpbGUgc3lzdGVtIGNhcGFjaXR5LCBkYXRhIGNhbm5vdCBiZSB3cml0dGVuLlxuICAgICAqIFVuaXQ6IEdCXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BhY2VDYXBhY2l0eTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0b3JhZ2VUeXBlOiBUeXBlIG9mIHN0b3JhZ2UgbWVkaWEuXG4gICAgICogVmFsdWVzOlxuICAgICAqIFNUQU5EQVJEIChkZWZhdWx0KSA6IHN0YW5kYXJkIHR5cGUuXG4gICAgICogUEVSRk9STUFOQ0U6IHBlcmZvcm1hbmNlIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lSWQ6IHpvbmUgaWRcbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhUmVkdW5kYW5jeVR5cGU6IFJlZHVuZGFuY3kgbW9kZSBvZiB0aGUgZmlsZSBzeXN0ZW0uXG4gICAgICogVmFsdWVzOlxuICAgICAqIExSUyAoZGVmYXVsdCkgOiBsb2NhbCByZWR1bmRhbmN5LlxuICAgICAqIFpSUzogaW4tY2l0eSByZWR1bmRhbmN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFSZWR1bmRhbmN5VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWxlIHN5c3RlbS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWxlU3lzdGVtTmFtZTogTmFtZSBvZiB0aGUgZmlsZSBzeXN0ZW0uIFRoZSBuYW1pbmcgcnVsZXMgYXJlIGFzIGZvbGxvd3M6XG4gICAgICogVGhlIHZhbHVlIGNvbnRhaW5zIDYgdG8gMTAwIGNoYXJhY3RlcnMuIFxuICAgICAqIEdsb2JhbGx5IHVuaXF1ZSBhbmQgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgKiBUaGUgdmFsdWUgY2FuIGNvbnRhaW4gbGV0dGVycyBhbmQgZGlnaXRzIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlsZVN5c3RlbU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFydGl0aW9uTnVtYmVyOiBUaGUgcmVzZXJ2ZWQgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcnRpdGlvbk51bWJlcj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm92aXNpb25lZFRocm91Z2hwdXRJbk1pQnBzOiBQcmVzZXQgaGFuZGxpbmcgY2FwYWNpdHkuXG4gICAgICogVW5pdDogTUJcXC9zZGF0YSByYW5nZTogMS01MTIwXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaUJwcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdG9yYWdlU2V0TmFtZTogVGhlIHJlc2VydmVkIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZVNldE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGhyb3VnaHB1dE1vZGU6IFRocm91Z2hwdXQgbW9kZVxuICAgICAqIFZhbHVlczpcbiAgICAgKiBTdGFuZGFyZO+8iGRlZmF1bHTvvIk6IHN0YW5kYXJkIHRocm91Z2hwdXRQcm92aXNpb25lZDogcHJlc2V0IHRocm91Z2hwdXRcbiAgICAgKi9cbiAgICByZWFkb25seSB0aHJvdWdocHV0TW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NGaWxlU3lzdGVtUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0ZpbGVTeXN0ZW1Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGaWxlU3lzdGVtUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzcGFjZUNhcGFjaXR5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNwYWNlQ2FwYWNpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NwYWNlQ2FwYWNpdHknLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuc3BhY2VDYXBhY2l0eSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0b3JhZ2VUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0b3JhZ2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5zdG9yYWdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RvcmFnZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0b3JhZ2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RvcmFnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiU1RBTkRBUkRcIixcIlBFUkZPUk1BTkNFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmFnZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RvcmFnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3pvbmVJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy56b25lSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3pvbmVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy56b25lSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcnRpdGlvbk51bWJlcicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wYXJ0aXRpb25OdW1iZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm90b2NvbFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb3RvY29sVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJvdG9jb2xUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm90b2NvbFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSERGU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90b2NvbFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRhdGFSZWR1bmRhbmN5VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGF0YVJlZHVuZGFuY3lUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhUmVkdW5kYW5jeVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kYXRhUmVkdW5kYW5jeVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTFJTXCIsXCJaUlNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhUmVkdW5kYW5jeVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGF0YVJlZHVuZGFuY3lUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5maWxlU3lzdGVtTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmZpbGVTeXN0ZW1OYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZmlsZVN5c3RlbU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWxlU3lzdGVtTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5maWxlU3lzdGVtTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDYsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmlsZVN5c3RlbU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZmlsZVN5c3RlbU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm92aXNpb25lZFRocm91Z2hwdXRJbk1pQnBzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA1MTIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm92aXNpb25lZFRocm91Z2hwdXRJbk1pQnBzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRocm91Z2hwdXRNb2RlICYmICh0eXBlb2YgcHJvcGVydGllcy50aHJvdWdocHV0TW9kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyb3VnaHB1dE1vZGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aHJvdWdocHV0TW9kZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJTdGFuZGFyZFwiLFwiUHJvdmlzaW9uZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJvdWdocHV0TW9kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50aHJvdWdocHV0TW9kZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RvcmFnZVNldE5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zdG9yYWdlU2V0TmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0b3JhZ2VTZXROYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmFnZVNldE5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RvcmFnZVNldE5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmFnZVNldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RvcmFnZVNldE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRmlsZVN5c3RlbVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERlM6OkZpbGVTeXN0ZW1gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0ZpbGVTeXN0ZW1Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6REZTOjpGaWxlU3lzdGVtYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0ZpbGVTeXN0ZW1Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0ZpbGVTeXN0ZW1Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnUHJvdG9jb2xUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm90b2NvbFR5cGUpLFxuICAgICAgJ1NwYWNlQ2FwYWNpdHknOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNwYWNlQ2FwYWNpdHkpLFxuICAgICAgJ1N0b3JhZ2VUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdG9yYWdlVHlwZSksXG4gICAgICAnWm9uZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy56b25lSWQpLFxuICAgICAgJ0RhdGFSZWR1bmRhbmN5VHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGF0YVJlZHVuZGFuY3lUeXBlKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ0ZpbGVTeXN0ZW1OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maWxlU3lzdGVtTmFtZSksXG4gICAgICAnUGFydGl0aW9uTnVtYmVyJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXJ0aXRpb25OdW1iZXIpLFxuICAgICAgJ1Byb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHMpLFxuICAgICAgJ1N0b3JhZ2VTZXROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdG9yYWdlU2V0TmFtZSksXG4gICAgICAnVGhyb3VnaHB1dE1vZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocm91Z2hwdXRNb2RlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpERlM6OkZpbGVTeXN0ZW1gLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBGaWxlU3lzdGVtYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kZnMtZmlsZXN5c3RlbVxuICovXG5leHBvcnQgY2xhc3MgUm9zRmlsZVN5c3RlbSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6REZTOjpGaWxlU3lzdGVtXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZpbGVTeXN0ZW1JZDogVGhlIElEIG9mIHRoZSBmaWxlIHN5c3RlbS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZpbGVTeXN0ZW1JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2xUeXBlOiBQcm90b2NvbCB0eXBlLCBvbmx5IHN1cHBvcnQgSERGU++8iEhhZG9vcEZpbGVTeXN0ZW3vvIlcbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvdG9jb2xUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3BhY2VDYXBhY2l0eTogQ2FwYWNpdHkgb2YgdGhlIGZpbGUgc3lzdGVtLlxuICAgICAqIFdoZW4gdGhlIGFjdHVhbCBkYXRhIHZvbHVtZSByZWFjaGVzIHRoZSBmaWxlIHN5c3RlbSBjYXBhY2l0eSwgZGF0YSBjYW5ub3QgYmUgd3JpdHRlbi5cbiAgICAgKiBVbml0OiBHQlxuICAgICAqL1xuICAgIHB1YmxpYyBzcGFjZUNhcGFjaXR5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RvcmFnZVR5cGU6IFR5cGUgb2Ygc3RvcmFnZSBtZWRpYS5cbiAgICAgKiBWYWx1ZXM6XG4gICAgICogU1RBTkRBUkQgKGRlZmF1bHQpIDogc3RhbmRhcmQgdHlwZS5cbiAgICAgKiBQRVJGT1JNQU5DRTogcGVyZm9ybWFuY2UgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcmFnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lSWQ6IHpvbmUgaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgem9uZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGF0YVJlZHVuZGFuY3lUeXBlOiBSZWR1bmRhbmN5IG1vZGUgb2YgdGhlIGZpbGUgc3lzdGVtLlxuICAgICAqIFZhbHVlczpcbiAgICAgKiBMUlMgKGRlZmF1bHQpIDogbG9jYWwgcmVkdW5kYW5jeS5cbiAgICAgKiBaUlM6IGluLWNpdHkgcmVkdW5kYW5jeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGF0YVJlZHVuZGFuY3lUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZmlsZSBzeXN0ZW0uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlsZVN5c3RlbU5hbWU6IE5hbWUgb2YgdGhlIGZpbGUgc3lzdGVtLiBUaGUgbmFtaW5nIHJ1bGVzIGFyZSBhcyBmb2xsb3dzOlxuICAgICAqIFRoZSB2YWx1ZSBjb250YWlucyA2IHRvIDEwMCBjaGFyYWN0ZXJzLiBcbiAgICAgKiBHbG9iYWxseSB1bmlxdWUgYW5kIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuXG4gICAgICogVGhlIHZhbHVlIGNhbiBjb250YWluIGxldHRlcnMgYW5kIGRpZ2l0cyBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaWxlU3lzdGVtTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcnRpdGlvbk51bWJlcjogVGhlIHJlc2VydmVkIHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFydGl0aW9uTnVtYmVyOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaUJwczogUHJlc2V0IGhhbmRsaW5nIGNhcGFjaXR5LlxuICAgICAqIFVuaXQ6IE1CXFwvc2RhdGEgcmFuZ2U6IDEtNTEyMFxuICAgICAqL1xuICAgIHB1YmxpYyBwcm92aXNpb25lZFRocm91Z2hwdXRJbk1pQnBzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RvcmFnZVNldE5hbWU6IFRoZSByZXNlcnZlZCBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9yYWdlU2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRocm91Z2hwdXRNb2RlOiBUaHJvdWdocHV0IG1vZGVcbiAgICAgKiBWYWx1ZXM6XG4gICAgICogU3RhbmRhcmTvvIhkZWZhdWx077yJOiBzdGFuZGFyZCB0aHJvdWdocHV0UHJvdmlzaW9uZWQ6IHByZXNldCB0aHJvdWdocHV0XG4gICAgICovXG4gICAgcHVibGljIHRocm91Z2hwdXRNb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRmlsZVN5c3RlbVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRmlsZVN5c3RlbS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRmlsZVN5c3RlbUlkID0gdGhpcy5nZXRBdHQoJ0ZpbGVTeXN0ZW1JZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5wcm90b2NvbFR5cGUgPSBwcm9wcy5wcm90b2NvbFR5cGU7XG4gICAgICAgIHRoaXMuc3BhY2VDYXBhY2l0eSA9IHByb3BzLnNwYWNlQ2FwYWNpdHk7XG4gICAgICAgIHRoaXMuc3RvcmFnZVR5cGUgPSBwcm9wcy5zdG9yYWdlVHlwZTtcbiAgICAgICAgdGhpcy56b25lSWQgPSBwcm9wcy56b25lSWQ7XG4gICAgICAgIHRoaXMuZGF0YVJlZHVuZGFuY3lUeXBlID0gcHJvcHMuZGF0YVJlZHVuZGFuY3lUeXBlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbU5hbWUgPSBwcm9wcy5maWxlU3lzdGVtTmFtZTtcbiAgICAgICAgdGhpcy5wYXJ0aXRpb25OdW1iZXIgPSBwcm9wcy5wYXJ0aXRpb25OdW1iZXI7XG4gICAgICAgIHRoaXMucHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaUJwcyA9IHByb3BzLnByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHM7XG4gICAgICAgIHRoaXMuc3RvcmFnZVNldE5hbWUgPSBwcm9wcy5zdG9yYWdlU2V0TmFtZTtcbiAgICAgICAgdGhpcy50aHJvdWdocHV0TW9kZSA9IHByb3BzLnRocm91Z2hwdXRNb2RlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3RvY29sVHlwZTogdGhpcy5wcm90b2NvbFR5cGUsXG4gICAgICAgICAgICBzcGFjZUNhcGFjaXR5OiB0aGlzLnNwYWNlQ2FwYWNpdHksXG4gICAgICAgICAgICBzdG9yYWdlVHlwZTogdGhpcy5zdG9yYWdlVHlwZSxcbiAgICAgICAgICAgIHpvbmVJZDogdGhpcy56b25lSWQsXG4gICAgICAgICAgICBkYXRhUmVkdW5kYW5jeVR5cGU6IHRoaXMuZGF0YVJlZHVuZGFuY3lUeXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBmaWxlU3lzdGVtTmFtZTogdGhpcy5maWxlU3lzdGVtTmFtZSxcbiAgICAgICAgICAgIHBhcnRpdGlvbk51bWJlcjogdGhpcy5wYXJ0aXRpb25OdW1iZXIsXG4gICAgICAgICAgICBwcm92aXNpb25lZFRocm91Z2hwdXRJbk1pQnBzOiB0aGlzLnByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlCcHMsXG4gICAgICAgICAgICBzdG9yYWdlU2V0TmFtZTogdGhpcy5zdG9yYWdlU2V0TmFtZSxcbiAgICAgICAgICAgIHRocm91Z2hwdXRNb2RlOiB0aGlzLnRocm91Z2hwdXRNb2RlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NGaWxlU3lzdGVtUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zTW91bnRQb2ludGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kZnMtbW91bnRwb2ludFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc01vdW50UG9pbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzR3JvdXBJZDogVGhlIElEIG9mIHRoZSBBY2Nlc3MgR3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpbGVTeXN0ZW1JZDogVGhlIElEIG9mIHRoZSBGaWxlIFN5c3RlbS5cbiAgICAgKi9cbiAgICByZWFkb25seSBmaWxlU3lzdGVtSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrVHlwZTogVGhlIG5ldHdvcmsgdHlwZSBvZiB0aGUgTW91bnQgUG9pbnQuIFZhbGlkIHZhbHVlczogVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSB2cGMgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2c3dpdGNoIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIE1vdW50IFBvaW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXR1czogVGhlIHN0YXR1cyBvZiB0aGUgTW91bnQgUG9pbnQuXG4gICAgICogVmFsaWQgdmFsdWVzOiBBY3RpdmUsIEluYWN0aXZlXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01vdW50UG9pbnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW91bnRQb2ludFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01vdW50UG9pbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RhdHVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWN0aXZlXCIsXCJJbmFjdGl2ZVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5ldHdvcmtUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5uZXR3b3JrVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubmV0d29ya1R5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmV0d29ya1R5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVlBDXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya1R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmV0d29ya1R5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpbGVTeXN0ZW1JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5maWxlU3lzdGVtSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpbGVTeXN0ZW1JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maWxlU3lzdGVtSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc0dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWNjZXNzR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2Nlc3NHcm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc01vdW50UG9pbnRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6REZTOjpNb3VudFBvaW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb3VudFBvaW50UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkRGUzo6TW91bnRQb2ludGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNb3VudFBvaW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNb3VudFBvaW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FjY2Vzc0dyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2Vzc0dyb3VwSWQpLFxuICAgICAgJ0ZpbGVTeXN0ZW1JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmlsZVN5c3RlbUlkKSxcbiAgICAgICdOZXR3b3JrVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29ya1R5cGUpLFxuICAgICAgJ1ZwY0lkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICAnVlN3aXRjaElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52U3dpdGNoSWQpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkRGUzo6TW91bnRQb2ludGAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYE1vdW50UG9pbnRgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRmcy1tb3VudHBvaW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNb3VudFBvaW50IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpERlM6Ok1vdW50UG9pbnRcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTW91bnRQb2ludElkOiBUaGUgSUQgb2YgdGhlIG1vdW50IHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTW91bnRQb2ludElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NHcm91cElkOiBUaGUgSUQgb2YgdGhlIEFjY2VzcyBHcm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXNzR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpbGVTeXN0ZW1JZDogVGhlIElEIG9mIHRoZSBGaWxlIFN5c3RlbS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsZVN5c3RlbUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya1R5cGU6IFRoZSBuZXR3b3JrIHR5cGUgb2YgdGhlIE1vdW50IFBvaW50LiBWYWxpZCB2YWx1ZXM6IFZQQy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya1R5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIHZwYyBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2c3dpdGNoIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyB2U3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBNb3VudCBQb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGF0dXM6IFRoZSBzdGF0dXMgb2YgdGhlIE1vdW50IFBvaW50LlxuICAgICAqIFZhbGlkIHZhbHVlczogQWN0aXZlLCBJbmFjdGl2ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0dXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NNb3VudFBvaW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNb3VudFBvaW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJNb3VudFBvaW50SWQgPSB0aGlzLmdldEF0dCgnTW91bnRQb2ludElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY2Vzc0dyb3VwSWQgPSBwcm9wcy5hY2Nlc3NHcm91cElkO1xuICAgICAgICB0aGlzLmZpbGVTeXN0ZW1JZCA9IHByb3BzLmZpbGVTeXN0ZW1JZDtcbiAgICAgICAgdGhpcy5uZXR3b3JrVHlwZSA9IHByb3BzLm5ldHdvcmtUeXBlO1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgICAgIHRoaXMudlN3aXRjaElkID0gcHJvcHMudlN3aXRjaElkO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2Vzc0dyb3VwSWQ6IHRoaXMuYWNjZXNzR3JvdXBJZCxcbiAgICAgICAgICAgIGZpbGVTeXN0ZW1JZDogdGhpcy5maWxlU3lzdGVtSWQsXG4gICAgICAgICAgICBuZXR3b3JrVHlwZTogdGhpcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICAgIHZwY0lkOiB0aGlzLnZwY0lkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiB0aGlzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTW91bnRQb2ludFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19