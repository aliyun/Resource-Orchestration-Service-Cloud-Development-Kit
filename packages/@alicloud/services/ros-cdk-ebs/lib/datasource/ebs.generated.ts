// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDedicatedBlockStorageCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
 */
export interface RosDedicatedBlockStorageClusterProps {

    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly dedicatedBlockStorageClusterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedBlockStorageClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedBlockStorageClusterProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedBlockStorageClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedBlockStorageClusterId', ros.requiredValidator)(properties.dedicatedBlockStorageClusterId));
    errors.collect(ros.propertyValidator('dedicatedBlockStorageClusterId', ros.validateString)(properties.dedicatedBlockStorageClusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDedicatedBlockStorageClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DedicatedBlockStorageCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedBlockStorageClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DedicatedBlockStorageCluster` resource.
 */
// @ts-ignore TS6133
function rosDedicatedBlockStorageClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedBlockStorageClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'DedicatedBlockStorageClusterId': ros.stringToRosTemplate(properties.dedicatedBlockStorageClusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DedicatedBlockStorageCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedBlockStorageCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
 */
export class RosDedicatedBlockStorageCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DedicatedBlockStorageCluster";

    /**
     * @Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster. Unit: GiB.
     */
    public readonly attrAvailableCapacity: ros.IResolvable;

    /**
     * @Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the dedicated block storage cluster was created. The value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    public readonly attrDedicatedBlockStorageClusterId: ros.IResolvable;

    /**
     * @Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
     */
    public readonly attrDedicatedBlockStorageClusterName: ros.IResolvable;

    /**
     * @Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster. Unit: GiB.
     */
    public readonly attrDeliveryCapacity: ros.IResolvable;

    /**
     * @Attribute Description: The description of the dedicated block storage cluster.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute PerformanceLevel: The performance level of disks.
     */
    public readonly attrPerformanceLevel: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SupportedCategory: This parameter is not supported.
     */
    public readonly attrSupportedCategory: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the dedicated block storage cluster.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TotalCapacity: The total capacity of the dedicated block storage cluster. Unit: GiB.
     */
    public readonly attrTotalCapacity: ros.IResolvable;

    /**
     * @Attribute Type: The dedicated block storage cluster performance type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
     */
    public readonly attrUsedCapacity: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID of the dedicated block storage cluster.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    public dedicatedBlockStorageClusterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedBlockStorageClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedBlockStorageCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAvailableCapacity = this.getAtt('AvailableCapacity');
        this.attrCategory = this.getAtt('Category');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDedicatedBlockStorageClusterId = this.getAtt('DedicatedBlockStorageClusterId');
        this.attrDedicatedBlockStorageClusterName = this.getAtt('DedicatedBlockStorageClusterName');
        this.attrDeliveryCapacity = this.getAtt('DeliveryCapacity');
        this.attrDescription = this.getAtt('Description');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrPerformanceLevel = this.getAtt('PerformanceLevel');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSupportedCategory = this.getAtt('SupportedCategory');
        this.attrTags = this.getAtt('Tags');
        this.attrTotalCapacity = this.getAtt('TotalCapacity');
        this.attrType = this.getAtt('Type');
        this.attrUsedCapacity = this.getAtt('UsedCapacity');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedBlockStorageClusterId = props.dedicatedBlockStorageClusterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedBlockStorageClusterId: this.dedicatedBlockStorageClusterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedBlockStorageClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDedicatedBlockStorageClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export interface RosDedicatedBlockStorageClustersProps {

    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly dedicatedBlockStorageClusterId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedBlockStorageClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedBlockStorageClustersProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedBlockStorageClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dedicatedBlockStorageClusterId', ros.validateString)(properties.dedicatedBlockStorageClusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDedicatedBlockStorageClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DedicatedBlockStorageClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedBlockStorageClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DedicatedBlockStorageClusters` resource.
 */
// @ts-ignore TS6133
function rosDedicatedBlockStorageClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedBlockStorageClustersPropsValidator(properties).assertSuccess();
    }
    return {
      'DedicatedBlockStorageClusterId': ros.stringToRosTemplate(properties.dedicatedBlockStorageClusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DedicatedBlockStorageClusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedBlockStorageClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export class RosDedicatedBlockStorageClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DedicatedBlockStorageClusters";

    /**
     * @Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.
     */
    public readonly attrDedicatedBlockStorageClusterIds: ros.IResolvable;

    /**
     * @Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.
     */
    public readonly attrDedicatedBlockStorageClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    public dedicatedBlockStorageClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedBlockStorageClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedBlockStorageClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedBlockStorageClusterIds = this.getAtt('DedicatedBlockStorageClusterIds');
        this.attrDedicatedBlockStorageClusters = this.getAtt('DedicatedBlockStorageClusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedBlockStorageClusterId = props.dedicatedBlockStorageClusterId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedBlockStorageClusterId: this.dedicatedBlockStorageClusterId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedBlockStorageClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDiskReplicaGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
 */
export interface RosDiskReplicaGroupProps {

    /**
     * @Property replicaGroupId: The ID of the consistent replication group.
     */
    readonly replicaGroupId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskReplicaGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replicaGroupId', ros.requiredValidator)(properties.replicaGroupId));
    errors.collect(ros.propertyValidator('replicaGroupId', ros.validateString)(properties.replicaGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaGroup` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ReplicaGroupId': ros.stringToRosTemplate(properties.replicaGroupId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
 */
export class RosDiskReplicaGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaGroup";

    /**
     * @Attribute Description: The description of the consistent replication group.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public readonly attrDestinationRegionId: ros.IResolvable;

    /**
     * @Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public readonly attrDestinationZoneId: ros.IResolvable;

    /**
     * @Attribute DiskReplicaGroupName: The name of the consistent replication group.
     */
    public readonly attrDiskReplicaGroupName: ros.IResolvable;

    /**
     * @Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed. This parameter provides the return value as a timestamp. Unit: seconds.
     */
    public readonly attrLastRecoverPoint: ros.IResolvable;

    /**
     * @Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    public readonly attrPairIds: ros.IResolvable;

    /**
     * @Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    public readonly attrPairNumber: ros.IResolvable;

    /**
     * @Attribute PrimaryRegion: The initial source region of the replication group.
     */
    public readonly attrPrimaryRegion: ros.IResolvable;

    /**
     * @Attribute PrimaryZone: The initial source available area of the replication group.
     */
    public readonly attrPrimaryZone: ros.IResolvable;

    /**
     * @Attribute RPO: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    public readonly attrRpo: ros.IResolvable;

    /**
     * @Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Site: Site information sources for replication pairs and consistent replication groups.
     */
    public readonly attrSite: ros.IResolvable;

    /**
     * @Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    public readonly attrSourceRegionId: ros.IResolvable;

    /**
     * @Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    public readonly attrSourceZoneId: ros.IResolvable;

    /**
     * @Attribute StandbyRegion: The initial destination region of the replication group.
     */
    public readonly attrStandbyRegion: ros.IResolvable;

    /**
     * @Attribute StandbyZone: The initial destination zone of the replication group.
     */
    public readonly attrStandbyZone: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the replication pair-consistent group.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property replicaGroupId: The ID of the consistent replication group.
     */
    public replicaGroupId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrDestinationRegionId = this.getAtt('DestinationRegionId');
        this.attrDestinationZoneId = this.getAtt('DestinationZoneId');
        this.attrDiskReplicaGroupName = this.getAtt('DiskReplicaGroupName');
        this.attrLastRecoverPoint = this.getAtt('LastRecoverPoint');
        this.attrPairIds = this.getAtt('PairIds');
        this.attrPairNumber = this.getAtt('PairNumber');
        this.attrPrimaryRegion = this.getAtt('PrimaryRegion');
        this.attrPrimaryZone = this.getAtt('PrimaryZone');
        this.attrRpo = this.getAtt('RPO');
        this.attrReplicaGroupId = this.getAtt('ReplicaGroupId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSite = this.getAtt('Site');
        this.attrSourceRegionId = this.getAtt('SourceRegionId');
        this.attrSourceZoneId = this.getAtt('SourceZoneId');
        this.attrStandbyRegion = this.getAtt('StandbyRegion');
        this.attrStandbyZone = this.getAtt('StandbyZone');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replicaGroupId = props.replicaGroupId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            replicaGroupId: this.replicaGroupId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDiskReplicaGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
 */
export interface RosDiskReplicaGroupsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    readonly site?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskReplicaGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('site', ros.validateString)(properties.site));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaGroups` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Site': ros.stringToRosTemplate(properties.site),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
 */
export class RosDiskReplicaGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaGroups";

    /**
     * @Attribute DiskReplicaGroups: The list of disk replica groups.
     */
    public readonly attrDiskReplicaGroups: ros.IResolvable;

    /**
     * @Attribute ReplicaGroupIds: The list of replica group IDs.
     */
    public readonly attrReplicaGroupIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    public site: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskReplicaGroups = this.getAtt('DiskReplicaGroups');
        this.attrReplicaGroupIds = this.getAtt('ReplicaGroupIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.site = props.site;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            site: this.site,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDiskReplicaPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
 */
export interface RosDiskReplicaPairProps {

    /**
     * @Property replicaPairId: The ID of the replication pair.
     */
    readonly replicaPairId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskReplicaPairProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaPairPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replicaPairId', ros.requiredValidator)(properties.replicaPairId));
    errors.collect(ros.propertyValidator('replicaPairId', ros.validateString)(properties.replicaPairId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaPairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaPair` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaPair` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaPairPropsValidator(properties).assertSuccess();
    }
    return {
      'ReplicaPairId': ros.stringToRosTemplate(properties.replicaPairId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
 */
export class RosDiskReplicaPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaPair";

    /**
     * @Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the replication pair was created. The value of this parameter is a timestamp. Unit: seconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the replication pair.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DestinationDiskId: The ID of the secondary disk.
     */
    public readonly attrDestinationDiskId: ros.IResolvable;

    /**
     * @Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public readonly attrDestinationRegionId: ros.IResolvable;

    /**
     * @Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public readonly attrDestinationZoneId: ros.IResolvable;

    /**
     * @Attribute DiskId: The ID of the primary disk.
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * @Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    public readonly attrDiskReplicaPairName: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the replication pair.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute RPO: The recovery point objective (RPO) of the replication pair. Unit: seconds.
     */
    public readonly attrRpo: ros.IResolvable;

    /**
     * @Attribute ReplicaPairId: The ID of the replication pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SourceZoneId: The zone ID of the primary disk.
     */
    public readonly attrSourceZoneId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the replication pair.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property replicaPairId: The ID of the replication pair.
     */
    public replicaPairId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrDestinationDiskId = this.getAtt('DestinationDiskId');
        this.attrDestinationRegionId = this.getAtt('DestinationRegionId');
        this.attrDestinationZoneId = this.getAtt('DestinationZoneId');
        this.attrDiskId = this.getAtt('DiskId');
        this.attrDiskReplicaPairName = this.getAtt('DiskReplicaPairName');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRpo = this.getAtt('RPO');
        this.attrReplicaPairId = this.getAtt('ReplicaPairId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSourceZoneId = this.getAtt('SourceZoneId');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replicaPairId = props.replicaPairId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            replicaPairId: this.replicaPairId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDiskReplicaPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export interface RosDiskReplicaPairsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskReplicaPairsProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairsProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaPairsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaPairsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaPairs` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaPairs` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaPairsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaPairs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPairs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export class RosDiskReplicaPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaPairs";

    /**
     * @Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    public readonly attrDiskReplicaPairs: ros.IResolvable;

    /**
     * @Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    public readonly attrReplicaPairIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaPairs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskReplicaPairs = this.getAtt('DiskReplicaPairs');
        this.attrReplicaPairIds = this.getAtt('ReplicaPairIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaPairsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
