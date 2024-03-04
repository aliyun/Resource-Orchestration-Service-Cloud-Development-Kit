// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
export interface RosAccessGroupProps {

    /**
     * @Property accessGroupName: The Name of Access Group. The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     */
    readonly accessGroupName?: string | ros.IResolvable;

    /**
     * @Property description: The description of the access_group.
     * The value contains 0 to 100 characters
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property networkType: The NetworkType of Access Group. Valid values: VPC.
     */
    readonly networkType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAccessGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if(properties.accessGroupName && (Array.isArray(properties.accessGroupName) || (typeof properties.accessGroupName) === 'string')) {
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
function rosAccessGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessGroupPropsValidator(properties).assertSuccess();
    }
    return {
      AccessGroupName: ros.stringToRosTemplate(properties.accessGroupName),
      Description: ros.stringToRosTemplate(properties.description),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::AccessGroup`, which is used to create a permission group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
export class RosAccessGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::AccessGroup";

    /**
     * @Attribute AccessGroupId: The ID of the access_group.
     */
    public readonly attrAccessGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: The Name of Access Group. The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     */
    public accessGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the access_group.
     * The value contains 0 to 100 characters
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The NetworkType of Access Group. Valid values: VPC.
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessGroupId = this.getAtt('AccessGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.description = props.description;
        this.networkType = props.networkType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
            description: this.description,
            networkType: this.networkType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccessRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
 */
export interface RosAccessRuleProps {

    /**
     * @Property accessGroupId: The resource ID of Access Group.
     */
    readonly accessGroupId: string | ros.IResolvable;

    /**
     * @Property networkSegment: The NetworkSegment of the Access Rule.
     */
    readonly networkSegment: string | ros.IResolvable;

    /**
     * @Property rwAccessType: The read\/write permission of the authorized object on the file system.
     * Values:
     * RDWR (default) : read and write.
     * RDONLY: read-only
     */
    readonly rwAccessType: string | ros.IResolvable;

    /**
     * @Property description: The Description of the Access Rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property priority: The Priority of the Access Rule. Valid values: 1 to 100. 
     * NOTE: When multiple rules are matched by the same authorized object, 
     * the high-priority rule takes effect. 1 is the highest priority.
     */
    readonly priority?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessRuleProps`
 *
 * @returns the result of the validation.
 */
function RosAccessRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('networkSegment', ros.requiredValidator)(properties.networkSegment));
    if(properties.networkSegment && (Array.isArray(properties.networkSegment) || (typeof properties.networkSegment) === 'string')) {
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
    if(properties.rwAccessType && (typeof properties.rwAccessType) !== 'object') {
        errors.collect(ros.propertyValidator('rwAccessType', ros.validateAllowedValues)({
          data: properties.rwAccessType,
          allowedValues: ["RDWR","RDONLY"],
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
function rosAccessRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessRulePropsValidator(properties).assertSuccess();
    }
    return {
      AccessGroupId: ros.stringToRosTemplate(properties.accessGroupId),
      NetworkSegment: ros.stringToRosTemplate(properties.networkSegment),
      RWAccessType: ros.stringToRosTemplate(properties.rwAccessType),
      Description: ros.stringToRosTemplate(properties.description),
      Priority: ros.numberToRosTemplate(properties.priority),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::AccessRule`, which is used to create a rule for a permission group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
 */
export class RosAccessRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::AccessRule";

    /**
     * @Attribute AccessRuleId: The ID of the access_rule.
     */
    public readonly attrAccessRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupId: The resource ID of Access Group.
     */
    public accessGroupId: string | ros.IResolvable;

    /**
     * @Property networkSegment: The NetworkSegment of the Access Rule.
     */
    public networkSegment: string | ros.IResolvable;

    /**
     * @Property rwAccessType: The read\/write permission of the authorized object on the file system.
     * Values:
     * RDWR (default) : read and write.
     * RDONLY: read-only
     */
    public rwAccessType: string | ros.IResolvable;

    /**
     * @Property description: The Description of the Access Rule.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property priority: The Priority of the Access Rule. Valid values: 1 to 100. 
     * NOTE: When multiple rules are matched by the same authorized object, 
     * the high-priority rule takes effect. 1 is the highest priority.
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessRuleId = this.getAtt('AccessRuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupId = props.accessGroupId;
        this.networkSegment = props.networkSegment;
        this.rwAccessType = props.rwAccessType;
        this.description = props.description;
        this.priority = props.priority;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupId: this.accessGroupId,
            networkSegment: this.networkSegment,
            rwAccessType: this.rwAccessType,
            description: this.description,
            priority: this.priority,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
export interface RosFileSystemProps {

    /**
     * @Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）
     */
    readonly protocolType: string | ros.IResolvable;

    /**
     * @Property spaceCapacity: Capacity of the file system.
     * When the actual data volume reaches the file system capacity, data cannot be written.
     * Unit: GB
     */
    readonly spaceCapacity: number | ros.IResolvable;

    /**
     * @Property storageType: Type of storage media.
     * Values:
     * STANDARD (default) : standard type.
     * PERFORMANCE: performance type.
     */
    readonly storageType: string | ros.IResolvable;

    /**
     * @Property zoneId: zone id
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property dataRedundancyType: Redundancy mode of the file system.
     * Values:
     * LRS (default) : local redundancy.
     * ZRS: in-city redundancy.
     */
    readonly dataRedundancyType?: string | ros.IResolvable;

    /**
     * @Property description: The description of the file system.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property fileSystemName: Name of the file system. The naming rules are as follows:
     * The value contains 6 to 100 characters. 
     * Globally unique and cannot be an empty string.
     * The value can contain letters and digits and underscores (_).
     */
    readonly fileSystemName?: string | ros.IResolvable;

    /**
     * @Property partitionNumber: The reserved parameters
     */
    readonly partitionNumber?: number | ros.IResolvable;

    /**
     * @Property provisionedThroughputInMiBps: Preset handling capacity.
     * Unit: MB\/sdata range: 1-5120
     */
    readonly provisionedThroughputInMiBps?: number | ros.IResolvable;

    /**
     * @Property storageSetName: The reserved parameters.
     */
    readonly storageSetName?: string | ros.IResolvable;

    /**
     * @Property throughputMode: Throughput mode
     * Values:
     * Standard（default）: standard throughputProvisioned: preset throughput
     */
    readonly throughputMode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFileSystemProps`
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the result of the validation.
 */
function RosFileSystemPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('spaceCapacity', ros.requiredValidator)(properties.spaceCapacity));
    errors.collect(ros.propertyValidator('spaceCapacity', ros.validateNumber)(properties.spaceCapacity));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('storageType', ros.requiredValidator)(properties.storageType));
    if(properties.storageType && (typeof properties.storageType) !== 'object') {
        errors.collect(ros.propertyValidator('storageType', ros.validateAllowedValues)({
          data: properties.storageType,
          allowedValues: ["STANDARD","PERFORMANCE"],
        }));
    }
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('partitionNumber', ros.validateNumber)(properties.partitionNumber));
    errors.collect(ros.propertyValidator('protocolType', ros.requiredValidator)(properties.protocolType));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["HDFS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    if(properties.dataRedundancyType && (typeof properties.dataRedundancyType) !== 'object') {
        errors.collect(ros.propertyValidator('dataRedundancyType', ros.validateAllowedValues)({
          data: properties.dataRedundancyType,
          allowedValues: ["LRS","ZRS"],
        }));
    }
    errors.collect(ros.propertyValidator('dataRedundancyType', ros.validateString)(properties.dataRedundancyType));
    if(properties.fileSystemName && (Array.isArray(properties.fileSystemName) || (typeof properties.fileSystemName) === 'string')) {
        errors.collect(ros.propertyValidator('fileSystemName', ros.validateLength)({
            data: properties.fileSystemName.length,
            min: 6,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('fileSystemName', ros.validateString)(properties.fileSystemName));
    if(properties.provisionedThroughputInMiBps && (typeof properties.provisionedThroughputInMiBps) !== 'object') {
        errors.collect(ros.propertyValidator('provisionedThroughputInMiBps', ros.validateRange)({
            data: properties.provisionedThroughputInMiBps,
            min: 1,
            max: 5120,
          }));
    }
    errors.collect(ros.propertyValidator('provisionedThroughputInMiBps', ros.validateNumber)(properties.provisionedThroughputInMiBps));
    if(properties.throughputMode && (typeof properties.throughputMode) !== 'object') {
        errors.collect(ros.propertyValidator('throughputMode', ros.validateAllowedValues)({
          data: properties.throughputMode,
          allowedValues: ["Standard","Provisioned"],
        }));
    }
    errors.collect(ros.propertyValidator('throughputMode', ros.validateString)(properties.throughputMode));
    if(properties.storageSetName && (Array.isArray(properties.storageSetName) || (typeof properties.storageSetName) === 'string')) {
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
function rosFileSystemPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFileSystemPropsValidator(properties).assertSuccess();
    }
    return {
      ProtocolType: ros.stringToRosTemplate(properties.protocolType),
      SpaceCapacity: ros.numberToRosTemplate(properties.spaceCapacity),
      StorageType: ros.stringToRosTemplate(properties.storageType),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      DataRedundancyType: ros.stringToRosTemplate(properties.dataRedundancyType),
      Description: ros.stringToRosTemplate(properties.description),
      FileSystemName: ros.stringToRosTemplate(properties.fileSystemName),
      PartitionNumber: ros.numberToRosTemplate(properties.partitionNumber),
      ProvisionedThroughputInMiBps: ros.numberToRosTemplate(properties.provisionedThroughputInMiBps),
      StorageSetName: ros.stringToRosTemplate(properties.storageSetName),
      ThroughputMode: ros.stringToRosTemplate(properties.throughputMode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::FileSystem`, which is used to create a file system.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
export class RosFileSystem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::FileSystem";

    /**
     * @Attribute FileSystemId: The ID of the file system.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）
     */
    public protocolType: string | ros.IResolvable;

    /**
     * @Property spaceCapacity: Capacity of the file system.
     * When the actual data volume reaches the file system capacity, data cannot be written.
     * Unit: GB
     */
    public spaceCapacity: number | ros.IResolvable;

    /**
     * @Property storageType: Type of storage media.
     * Values:
     * STANDARD (default) : standard type.
     * PERFORMANCE: performance type.
     */
    public storageType: string | ros.IResolvable;

    /**
     * @Property zoneId: zone id
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property dataRedundancyType: Redundancy mode of the file system.
     * Values:
     * LRS (default) : local redundancy.
     * ZRS: in-city redundancy.
     */
    public dataRedundancyType: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the file system.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property fileSystemName: Name of the file system. The naming rules are as follows:
     * The value contains 6 to 100 characters. 
     * Globally unique and cannot be an empty string.
     * The value can contain letters and digits and underscores (_).
     */
    public fileSystemName: string | ros.IResolvable | undefined;

    /**
     * @Property partitionNumber: The reserved parameters
     */
    public partitionNumber: number | ros.IResolvable | undefined;

    /**
     * @Property provisionedThroughputInMiBps: Preset handling capacity.
     * Unit: MB\/sdata range: 1-5120
     */
    public provisionedThroughputInMiBps: number | ros.IResolvable | undefined;

    /**
     * @Property storageSetName: The reserved parameters.
     */
    public storageSetName: string | ros.IResolvable | undefined;

    /**
     * @Property throughputMode: Throughput mode
     * Values:
     * Standard（default）: standard throughputProvisioned: preset throughput
     */
    public throughputMode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFileSystemPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMountPoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
export interface RosMountPointProps {

    /**
     * @Property accessGroupId: The ID of the Access Group.
     */
    readonly accessGroupId: string | ros.IResolvable;

    /**
     * @Property fileSystemId: The ID of the File System.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * @Property networkType: The network type of the Mount Point. Valid values: VPC.
     */
    readonly networkType: string | ros.IResolvable;

    /**
     * @Property vpcId: The vpc id.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vswitch id.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: The description of the Mount Point.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property status: The status of the Mount Point.
     * Valid values: Active, Inactive
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMountPointProps`
 *
 * @param properties - the TypeScript properties of a `RosMountPointProps`
 *
 * @returns the result of the validation.
 */
function RosMountPointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Active","Inactive"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('networkType', ros.requiredValidator)(properties.networkType));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
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
function rosMountPointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMountPointPropsValidator(properties).assertSuccess();
    }
    return {
      AccessGroupId: ros.stringToRosTemplate(properties.accessGroupId),
      FileSystemId: ros.stringToRosTemplate(properties.fileSystemId),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      Description: ros.stringToRosTemplate(properties.description),
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::MountPoint`, which is used to create a mount target.
 * @Note This class does not contain additional functions, so it is recommended to use the `MountPoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
export class RosMountPoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::MountPoint";

    /**
     * @Attribute MountPointId: The ID of the mount point.
     */
    public readonly attrMountPointId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupId: The ID of the Access Group.
     */
    public accessGroupId: string | ros.IResolvable;

    /**
     * @Property fileSystemId: The ID of the File System.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @Property networkType: The network type of the Mount Point. Valid values: VPC.
     */
    public networkType: string | ros.IResolvable;

    /**
     * @Property vpcId: The vpc id.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vswitch id.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: The description of the Mount Point.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the Mount Point.
     * Valid values: Active, Inactive
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMountPointProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMountPointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
