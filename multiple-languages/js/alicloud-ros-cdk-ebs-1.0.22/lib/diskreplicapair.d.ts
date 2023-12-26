import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPair } from './ebs.generated';
export { RosDiskReplicaPair as DiskReplicaPairProperty };
/**
 * Properties for defining a `DiskReplicaPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
 */
export interface DiskReplicaPairProps {
    /**
     * Property destinationDiskId: The ID of the standby disk.
     */
    readonly destinationDiskId: string | ros.IResolvable;
    /**
     * Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly destinationRegionId: string | ros.IResolvable;
    /**
     * Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly destinationZoneId: string | ros.IResolvable;
    /**
     * Property diskId: The ID of the primary disk.
     */
    readonly diskId: string | ros.IResolvable;
    /**
     * Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly sourceZoneId: string | ros.IResolvable;
    /**
     * Property bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:
     * - 10240 Kbps: equal to 10 Mbps.
     * - 20480 Kbps: equal to 20 Mbps.
     * - 51200 Kbps: equal to 50 Mbps.
     * - 102400 Kbps: equal to 100 Mbps.
     * Default value: 10240.
     * This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * Property description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:\/\/ 'or' https.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:\/\/ or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
     */
    readonly diskReplicaPairName?: string | ros.IResolvable;
    /**
     * Property paymentType: The payment type of the resource
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * Property period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
     * - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:
     * - Month.Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    readonly rpo?: number | ros.IResolvable;
    /**
     * Property tags: Tags of disk replica pair.
     */
    readonly tags?: RosDiskReplicaPair.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EBS::DiskReplicaPair`, which is used to create a replication pair.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
 */
export declare class DiskReplicaPair extends ros.Resource {
    /**
     * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: The description of the asynchronous replication relationship.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DestinationDiskId: The ID of the standby disk.
     */
    readonly attrDestinationDiskId: ros.IResolvable;
    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable;
    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable;
    /**
     * Attribute DiskId: The ID of the primary disk.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    readonly attrDiskReplicaPairName: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    readonly attrRpo: ros.IResolvable;
    /**
     * Attribute ReplicaPairId: The ID of the disk replica pair.
     */
    readonly attrReplicaPairId: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly attrSourceZoneId: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the disk replica pair.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaPairProps, enableResourcePropertyConstraint?: boolean);
}
