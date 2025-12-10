// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDedicatedBlockStorageCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
 */
export interface RosDedicatedBlockStorageClusterProps {

    /**
     * @Property azone: The ID of the zone in which to create the dedicated block storage cluster.
     */
    readonly azone: string | ros.IResolvable;

    /**
     * @Property capacity: The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
     */
    readonly capacity: number | ros.IResolvable;

    /**
     * @Property dbscName: The name of the dedicated block storage cluster.
     */
    readonly dbscName: string | ros.IResolvable;

    /**
     * @Property period: The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration specified by Period. Set the value to Month.
     */
    readonly periodUnit: string | ros.IResolvable;

    /**
     * @Property type: The type of the dedicated block storage cluster. Valid values: 
     * Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
     * Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
     * Default value: Premium.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tag: Tags of dedicated block storage cluster.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('azone', ros.requiredValidator)(properties.azone));
    errors.collect(ros.propertyValidator('azone', ros.validateString)(properties.azone));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Standard","Premium"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('capacity', ros.requiredValidator)(properties.capacity));
    if(properties.capacity && (typeof properties.capacity) !== 'object') {
        errors.collect(ros.propertyValidator('capacity', ros.validateRange)({
            data: properties.capacity,
            min: 61440,
            max: 2334720,
          }));
    }
    errors.collect(ros.propertyValidator('capacity', ros.validateNumber)(properties.capacity));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [6,7,8,9,10,11,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
        errors.collect(ros.propertyValidator('tag', ros.validateLength)({
            data: properties.tag.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('dbscName', ros.requiredValidator)(properties.dbscName));
    errors.collect(ros.propertyValidator('dbscName', ros.validateString)(properties.dbscName));
    errors.collect(ros.propertyValidator('periodUnit', ros.requiredValidator)(properties.periodUnit));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosDedicatedBlockStorageClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DedicatedBlockStorageCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedBlockStorageClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DedicatedBlockStorageCluster` resource.
 */
// @ts-ignore TS6133
function rosDedicatedBlockStorageClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedBlockStorageClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'Azone': ros.stringToRosTemplate(properties.azone),
      'Capacity': ros.numberToRosTemplate(properties.capacity),
      'DbscName': ros.stringToRosTemplate(properties.dbscName),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Type': ros.stringToRosTemplate(properties.type),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tag': ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DedicatedBlockStorageCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedBlockStorageCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
 */
export class RosDedicatedBlockStorageCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DedicatedBlockStorageCluster";

    /**
     * @Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    public readonly attrDedicatedBlockStorageClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property azone: The ID of the zone in which to create the dedicated block storage cluster.
     */
    public azone: string | ros.IResolvable;

    /**
     * @Property capacity: The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
     */
    public capacity: number | ros.IResolvable;

    /**
     * @Property dbscName: The name of the dedicated block storage cluster.
     */
    public dbscName: string | ros.IResolvable;

    /**
     * @Property period: The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration specified by Period. Set the value to Month.
     */
    public periodUnit: string | ros.IResolvable;

    /**
     * @Property type: The type of the dedicated block storage cluster. Valid values: 
     * Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
     * Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
     * Default value: Premium.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tag: Tags of dedicated block storage cluster.
     */
    public tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedBlockStorageClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedBlockStorageCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedBlockStorageClusterId = this.getAtt('DedicatedBlockStorageClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.azone = props.azone;
        this.capacity = props.capacity;
        this.dbscName = props.dbscName;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.type = props.type;
        this.resourceGroupId = props.resourceGroupId;
        this.tag = props.tag;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            azone: this.azone,
            capacity: this.capacity,
            dbscName: this.dbscName,
            period: this.period,
            periodUnit: this.periodUnit,
            type: this.type,
            resourceGroupId: this.resourceGroupId,
            tag: this.tag,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedBlockStorageClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDedicatedBlockStorageCluster {
    /**
     * @stability external
     */
    export interface TagProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosDedicatedBlockStorageCluster_TagPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DedicatedBlockStorageCluster.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DedicatedBlockStorageCluster.Tag` resource.
 */
// @ts-ignore TS6133
function rosDedicatedBlockStorageClusterTagPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDedicatedBlockStorageCluster_TagPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosDiskReplicaGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
 */
export interface RosDiskReplicaGroupProps {

    /**
     * @Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly destinationRegionId: string | ros.IResolvable;

    /**
     * @Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly destinationZoneId: string | ros.IResolvable;

    /**
     * @Property sourceRegionId: The ID of the region to which the production site belongs.
     */
    readonly sourceRegionId: string | ros.IResolvable;

    /**
     * @Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly sourceZoneId: string | ros.IResolvable;

    /**
     * @Property description: The description of the consistent replication group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskReplicaGroupName: Consistent replication group name.
     */
    readonly diskReplicaGroupName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property rpo: The RPO value set by the consistency group in seconds.
     */
    readonly rpo?: number | ros.IResolvable;

    /**
     * @Property tags: Tags of disk replica group.
     */
    readonly tags?: RosDiskReplicaGroup.TagsProperty[];
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
    errors.collect(ros.propertyValidator('rpo', ros.validateNumber)(properties.rpo));
    errors.collect(ros.propertyValidator('sourceRegionId', ros.requiredValidator)(properties.sourceRegionId));
    errors.collect(ros.propertyValidator('sourceRegionId', ros.validateString)(properties.sourceRegionId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('diskReplicaGroupName', ros.validateString)(properties.diskReplicaGroupName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.requiredValidator)(properties.destinationRegionId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.validateString)(properties.destinationRegionId));
    errors.collect(ros.propertyValidator('destinationZoneId', ros.requiredValidator)(properties.destinationZoneId));
    errors.collect(ros.propertyValidator('destinationZoneId', ros.validateString)(properties.destinationZoneId));
    errors.collect(ros.propertyValidator('sourceZoneId', ros.requiredValidator)(properties.sourceZoneId));
    errors.collect(ros.propertyValidator('sourceZoneId', ros.validateString)(properties.sourceZoneId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDiskReplicaGroup_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaGroup` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'DestinationRegionId': ros.stringToRosTemplate(properties.destinationRegionId),
      'DestinationZoneId': ros.stringToRosTemplate(properties.destinationZoneId),
      'SourceRegionId': ros.stringToRosTemplate(properties.sourceRegionId),
      'SourceZoneId': ros.stringToRosTemplate(properties.sourceZoneId),
      'Description': ros.stringToRosTemplate(properties.description),
      'DiskReplicaGroupName': ros.stringToRosTemplate(properties.diskReplicaGroupName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RPO': ros.numberToRosTemplate(properties.rpo),
      'Tags': ros.listMapper(rosDiskReplicaGroupTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DiskReplicaGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
 */
export class RosDiskReplicaGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaGroup";

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
     * @Attribute DiskReplicaGroupName: Consistent replication group name.
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
     * @Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    public readonly attrRpo: ros.IResolvable;

    /**
     * @Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: resource group ID of enterprise
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Site: Site information sources for replication pairs and consistent replication groups. Possible values:
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
     * @Attribute Tags: The tags of the disk replica group.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public destinationRegionId: string | ros.IResolvable;

    /**
     * @Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public destinationZoneId: string | ros.IResolvable;

    /**
     * @Property sourceRegionId: The ID of the region to which the production site belongs.
     */
    public sourceRegionId: string | ros.IResolvable;

    /**
     * @Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    public sourceZoneId: string | ros.IResolvable;

    /**
     * @Property description: The description of the consistent replication group.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskReplicaGroupName: Consistent replication group name.
     */
    public diskReplicaGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property rpo: The RPO value set by the consistency group in seconds.
     */
    public rpo: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of disk replica group.
     */
    public tags: RosDiskReplicaGroup.TagsProperty[] | undefined;

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
        this.destinationRegionId = props.destinationRegionId;
        this.destinationZoneId = props.destinationZoneId;
        this.sourceRegionId = props.sourceRegionId;
        this.sourceZoneId = props.sourceZoneId;
        this.description = props.description;
        this.diskReplicaGroupName = props.diskReplicaGroupName;
        this.resourceGroupId = props.resourceGroupId;
        this.rpo = props.rpo;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            destinationRegionId: this.destinationRegionId,
            destinationZoneId: this.destinationZoneId,
            sourceRegionId: this.sourceRegionId,
            sourceZoneId: this.sourceZoneId,
            description: this.description,
            diskReplicaGroupName: this.diskReplicaGroupName,
            resourceGroupId: this.resourceGroupId,
            rpo: this.rpo,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDiskReplicaGroup {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDiskReplicaGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosDiskReplicaPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
 */
export interface RosDiskReplicaPairProps {

    /**
     * @Property destinationDiskId: The ID of the standby disk.
     */
    readonly destinationDiskId: string | ros.IResolvable;

    /**
     * @Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly destinationRegionId: string | ros.IResolvable;

    /**
     * @Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly destinationZoneId: string | ros.IResolvable;

    /**
     * @Property diskId: The ID of the primary disk.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * @Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly sourceZoneId: string | ros.IResolvable;

    /**
     * @Property bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:
     * - 10240 Kbps: equal to 10 Mbps.
     * - 20480 Kbps: equal to 20 Mbps.
     * - 51200 Kbps: equal to 50 Mbps.
     * - 102400 Kbps: equal to 100 Mbps.
     * Default value: 10240.
     * This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:\/\/ 'or' https.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:\/\/ or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
     */
    readonly diskReplicaPairName?: string | ros.IResolvable;

    /**
     * @Property paymentType: The payment type of the resource
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
     * - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:
     * - Month.Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    readonly rpo?: number | ros.IResolvable;

    /**
     * @Property tags: Tags of disk replica pair.
     */
    readonly tags?: RosDiskReplicaPair.TagsProperty[];
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
    errors.collect(ros.propertyValidator('diskReplicaPairName', ros.validateString)(properties.diskReplicaPairName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destinationDiskId', ros.requiredValidator)(properties.destinationDiskId));
    errors.collect(ros.propertyValidator('destinationDiskId', ros.validateString)(properties.destinationDiskId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6,12,24,36,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('rpo', ros.validateNumber)(properties.rpo));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.requiredValidator)(properties.destinationRegionId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.validateString)(properties.destinationRegionId));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateAllowedValues)({
          data: properties.bandwidth,
          allowedValues: [10240,20480,51200,102400],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('destinationZoneId', ros.requiredValidator)(properties.destinationZoneId));
    errors.collect(ros.propertyValidator('destinationZoneId', ros.validateString)(properties.destinationZoneId));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('sourceZoneId', ros.requiredValidator)(properties.sourceZoneId));
    errors.collect(ros.propertyValidator('sourceZoneId', ros.validateString)(properties.sourceZoneId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDiskReplicaPair_TagsPropertyValidator))(properties.tags));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaPairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPair` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPair` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaPairPropsValidator(properties).assertSuccess();
    }
    return {
      'DestinationDiskId': ros.stringToRosTemplate(properties.destinationDiskId),
      'DestinationRegionId': ros.stringToRosTemplate(properties.destinationRegionId),
      'DestinationZoneId': ros.stringToRosTemplate(properties.destinationZoneId),
      'DiskId': ros.stringToRosTemplate(properties.diskId),
      'SourceZoneId': ros.stringToRosTemplate(properties.sourceZoneId),
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'Description': ros.stringToRosTemplate(properties.description),
      'DiskReplicaPairName': ros.stringToRosTemplate(properties.diskReplicaPairName),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RPO': ros.numberToRosTemplate(properties.rpo),
      'Tags': ros.listMapper(rosDiskReplicaPairTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DiskReplicaPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
 */
export class RosDiskReplicaPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaPair";

    /**
     * @Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the asynchronous replication relationship.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DestinationDiskId: The ID of the standby disk.
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
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    public readonly attrRpo: ros.IResolvable;

    /**
     * @Attribute ReplicaPairId: The ID of the disk replica pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    public readonly attrSourceZoneId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the disk replica pair.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destinationDiskId: The ID of the standby disk.
     */
    public destinationDiskId: string | ros.IResolvable;

    /**
     * @Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public destinationRegionId: string | ros.IResolvable;

    /**
     * @Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public destinationZoneId: string | ros.IResolvable;

    /**
     * @Property diskId: The ID of the primary disk.
     */
    public diskId: string | ros.IResolvable;

    /**
     * @Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    public sourceZoneId: string | ros.IResolvable;

    /**
     * @Property bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:
     * - 10240 Kbps: equal to 10 Mbps.
     * - 20480 Kbps: equal to 20 Mbps.
     * - 51200 Kbps: equal to 50 Mbps.
     * - 102400 Kbps: equal to 100 Mbps.
     * Default value: 10240.
     * This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:\/\/ 'or' https.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:\/\/ or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
     */
    public diskReplicaPairName: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: The payment type of the resource
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
     * - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:
     * - Month.Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    public rpo: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of disk replica pair.
     */
    public tags: RosDiskReplicaPair.TagsProperty[] | undefined;

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
        this.destinationDiskId = props.destinationDiskId;
        this.destinationRegionId = props.destinationRegionId;
        this.destinationZoneId = props.destinationZoneId;
        this.diskId = props.diskId;
        this.sourceZoneId = props.sourceZoneId;
        this.bandwidth = props.bandwidth;
        this.description = props.description;
        this.diskReplicaPairName = props.diskReplicaPairName;
        this.paymentType = props.paymentType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resourceGroupId = props.resourceGroupId;
        this.rpo = props.rpo;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            destinationDiskId: this.destinationDiskId,
            destinationRegionId: this.destinationRegionId,
            destinationZoneId: this.destinationZoneId,
            diskId: this.diskId,
            sourceZoneId: this.sourceZoneId,
            bandwidth: this.bandwidth,
            description: this.description,
            diskReplicaPairName: this.diskReplicaPairName,
            paymentType: this.paymentType,
            period: this.period,
            periodUnit: this.periodUnit,
            resourceGroupId: this.resourceGroupId,
            rpo: this.rpo,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDiskReplicaPair {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaPair_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPair.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPair.Tags` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDiskReplicaPair_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosDiskReplicaPairAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
 */
export interface RosDiskReplicaPairAdditionProps {

    /**
     * @Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    readonly replicaGroupId: string | ros.IResolvable;

    /**
     * @Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    readonly replicaPairId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskReplicaPairAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaPairAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replicaPairId', ros.requiredValidator)(properties.replicaPairId));
    errors.collect(ros.propertyValidator('replicaPairId', ros.validateString)(properties.replicaPairId));
    errors.collect(ros.propertyValidator('replicaGroupId', ros.requiredValidator)(properties.replicaGroupId));
    errors.collect(ros.propertyValidator('replicaGroupId', ros.validateString)(properties.replicaGroupId));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaPairAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPairAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPairAddition` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaPairAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      'ReplicaGroupId': ros.stringToRosTemplate(properties.replicaGroupId),
      'ReplicaPairId': ros.stringToRosTemplate(properties.replicaPairId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DiskReplicaPairAddition`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPairAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
 */
export class RosDiskReplicaPairAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaPairAddition";

    /**
     * @Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable;

    /**
     * @Attribute ReplicaPairId: The ID of the replication pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    public replicaGroupId: string | ros.IResolvable;

    /**
     * @Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    public replicaPairId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaPairAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrReplicaGroupId = this.getAtt('ReplicaGroupId');
        this.attrReplicaPairId = this.getAtt('ReplicaPairId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replicaGroupId = props.replicaGroupId;
        this.replicaPairId = props.replicaPairId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            replicaGroupId: this.replicaGroupId,
            replicaPairId: this.replicaPairId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaPairAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
