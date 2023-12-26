import * as ros from '@alicloud/ros-cdk-core';
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DiskReplicaGroup`, which is used to create a replication pair-consistent group.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
 */
export declare class RosDiskReplicaGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaGroup";
    /**
     * @Attribute Description: The description of the consistent replication group.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable;
    /**
     * @Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable;
    /**
     * @Attribute DiskReplicaGroupName: Consistent replication group name.
     */
    readonly attrDiskReplicaGroupName: ros.IResolvable;
    /**
     * @Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed. This parameter provides the return value as a timestamp. Unit: seconds.
     */
    readonly attrLastRecoverPoint: ros.IResolvable;
    /**
     * @Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    readonly attrPairIds: ros.IResolvable;
    /**
     * @Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    readonly attrPairNumber: ros.IResolvable;
    /**
     * @Attribute PrimaryRegion: The initial source region of the replication group.
     */
    readonly attrPrimaryRegion: ros.IResolvable;
    /**
     * @Attribute PrimaryZone: The initial source available area of the replication group.
     */
    readonly attrPrimaryZone: ros.IResolvable;
    /**
     * @Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    readonly attrRpo: ros.IResolvable;
    /**
     * @Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    readonly attrReplicaGroupId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: resource group ID of enterprise
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Site: Site information sources for replication pairs and consistent replication groups. Possible values:
     */
    readonly attrSite: ros.IResolvable;
    /**
     * @Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable;
    /**
     * @Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly attrSourceZoneId: ros.IResolvable;
    /**
     * @Attribute StandbyRegion: The initial destination region of the replication group.
     */
    readonly attrStandbyRegion: ros.IResolvable;
    /**
     * @Attribute StandbyZone: The initial destination zone of the replication group.
     */
    readonly attrStandbyZone: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the disk replica group.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    destinationRegionId: string | ros.IResolvable;
    /**
     * @Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    destinationZoneId: string | ros.IResolvable;
    /**
     * @Property sourceRegionId: The ID of the region to which the production site belongs.
     */
    sourceRegionId: string | ros.IResolvable;
    /**
     * @Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    sourceZoneId: string | ros.IResolvable;
    /**
     * @Property description: The description of the consistent replication group.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskReplicaGroupName: Consistent replication group name.
     */
    diskReplicaGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property rpo: The RPO value set by the consistency group in seconds.
     */
    rpo: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of disk replica group.
     */
    tags: RosDiskReplicaGroup.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDiskReplicaGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DiskReplicaPair`, which is used to create a replication pair.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
 */
export declare class RosDiskReplicaPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaPair";
    /**
     * @Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the asynchronous replication relationship.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DestinationDiskId: The ID of the standby disk.
     */
    readonly attrDestinationDiskId: ros.IResolvable;
    /**
     * @Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable;
    /**
     * @Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable;
    /**
     * @Attribute DiskId: The ID of the primary disk.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * @Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    readonly attrDiskReplicaPairName: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    readonly attrRpo: ros.IResolvable;
    /**
     * @Attribute ReplicaPairId: The ID of the disk replica pair.
     */
    readonly attrReplicaPairId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly attrSourceZoneId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the disk replica pair.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationDiskId: The ID of the standby disk.
     */
    destinationDiskId: string | ros.IResolvable;
    /**
     * @Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    destinationRegionId: string | ros.IResolvable;
    /**
     * @Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    destinationZoneId: string | ros.IResolvable;
    /**
     * @Property diskId: The ID of the primary disk.
     */
    diskId: string | ros.IResolvable;
    /**
     * @Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    sourceZoneId: string | ros.IResolvable;
    /**
     * @Property bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:
     * - 10240 Kbps: equal to 10 Mbps.
     * - 20480 Kbps: equal to 20 Mbps.
     * - 51200 Kbps: equal to 50 Mbps.
     * - 102400 Kbps: equal to 100 Mbps.
     * Default value: 10240.
     * This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:\/\/ 'or' https.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:\/\/ or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
     */
    diskReplicaPairName: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: The payment type of the resource
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
     * - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:
     * - Month.Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    rpo: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of disk replica pair.
     */
    tags: RosDiskReplicaPair.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDiskReplicaPair {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DiskReplicaPairAddition`, which is used to add a replication pair to a replication pair-consistent group.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPairAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
 */
export declare class RosDiskReplicaPairAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaPairAddition";
    /**
     * @Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    readonly attrReplicaGroupId: ros.IResolvable;
    /**
     * @Attribute ReplicaPairId: The ID of the replication pair.
     */
    readonly attrReplicaPairId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    replicaGroupId: string | ros.IResolvable;
    /**
     * @Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    replicaPairId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairAdditionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
