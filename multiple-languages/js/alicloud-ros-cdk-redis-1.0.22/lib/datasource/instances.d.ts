import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './redis.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
 */
export interface InstancesProps {
    /**
     * Property architectureType: The architecture of the instance. Valid values:
     * cluster: The instance is a cluster instance.
     * standard: The instance is a standard instance.
     * rwsplit: The instance is a read\/write splitting instance.
     */
    readonly architectureType?: string | ros.IResolvable;
    /**
     * Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property editionType: The edition of the instance. Valid values:
     * Community: Community Edition
     * Enterprise: Enhance Edition (Tair)
     */
    readonly editionType?: string | ros.IResolvable;
    /**
     * Property engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * Property expired: Specifies whether the instance has expired. Valid values:
     * true: The instance has expired.
     * false: The instance has not expired.
     */
    readonly expired?: string | ros.IResolvable;
    /**
     * Property globalInstance: Specifies whether to return the child instances of distributed instances. Valid values:
     * true: Only child instances are returned.
     * false: Child instances are not returned.
     */
    readonly globalInstance?: string | ros.IResolvable;
    /**
     * Property instanceClass: The instance type.
     */
    readonly instanceClass?: string | ros.IResolvable;
    /**
     * Property instanceIds: The IDs of instances.
     * If you specify multiple instance IDs, separate the instance IDs with commas (,).
     */
    readonly instanceIds?: string | ros.IResolvable;
    /**
     * Property instanceStatus: The state of the instance. Valid values:
     * Normal: The instance is normal.
     * Creating: The instance is being created.
     * Changing: The configurations of the instance are being changed.
     * Inactive: The instance is disabled.
     * Flushing: The instance is being released.
     * Released: The instance is released.
     * Transforming: The instance is being transformed.
     * Unavailable: The instance is suspended.
     * Error: The instance cannot be created.
     * Migrating: The instance is being migrated.
     * BackupRecovering: The instance is being restored from a backup.
     * MinorVersionUpgrading: The minor version of the instance is being updated.
     * NetworkModifying: The network type of the instance is being changed.
     * SSLModifying: The SSL certificate of the instance is being changed.
     * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
     *
     */
    readonly instanceStatus?: string | ros.IResolvable;
    /**
     * Property instanceType: The category of the instance. Valid values:
     * Tair
     * Redis
     * Memcache
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property networkType: The network type of the instance. Valid values:
     * CLASSIC: classic network
     * VPC: Virtual Private Cloud (VPC)
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property privateIp: The private IP address of the instance.
     */
    readonly privateIp?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
     */
    readonly searchKey?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: The zone ID of the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Instances`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
 */
export declare class Instances extends ros.Resource {
    /**
     * Attribute InstanceIds: The list of The Redis instance Ids.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of The Redis instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
