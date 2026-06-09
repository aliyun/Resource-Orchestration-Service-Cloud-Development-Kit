import * as ros from '@alicloud/ros-cdk-core';
import { RosVCUInstance } from './ots.generated';
export { RosVCUInstance as VCUInstanceProperty };
/**
 * Properties for defining a `VCUInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vcuinstance
 */
export interface VCUInstanceProps {
    /**
     * Property clusterType: Cluster type (i.e. instance specification).
     * Enumeration values:
     * SSD: High performance.
     * HYBRID: Capacity type.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * Property periodInMonth: Purchase duration. Unit: month. Value range: 1~24.
     */
    readonly periodInMonth: number | ros.IResolvable;
    /**
     * Property vcu: Number of VCU units. Value range: 0~2000.
     */
    readonly vcu: number | ros.IResolvable;
    /**
     * Property aliasName: Instance alias name.
     */
    readonly aliasName?: string | ros.IResolvable;
    /**
     * Property autoRenewPeriodInMonth: Automatic renewal cycle. When automatic renewal is enabled, it is required. Value range: 1~24.
     */
    readonly autoRenewPeriodInMonth?: number | ros.IResolvable;
    /**
     * Property enableAutoRenew: Whether to enable automatic renewal.
     */
    readonly enableAutoRenew?: boolean | ros.IResolvable;
    /**
     * Property enableElasticVcu: Whether to enable instance elasticity. If elasticity is enabled, the peak VCU usage of the instance can exceed the purchased VCU amount, but there will be additional charges.
     */
    readonly enableElasticVcu?: boolean | ros.IResolvable;
    /**
     * Property instanceDescription: Instance description.
     */
    readonly instanceDescription?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    readonly tags?: RosVCUInstance.TagsProperty[];
}
/**
 * Represents a `VCUInstance`.
 */
export interface IVCUInstance extends ros.IResource {
    readonly props: VCUInstanceProps;
    /**
     * Attribute InstanceName: Name of the tablestore VCU instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::VCUInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVCUInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vcuinstance
 */
export declare class VCUInstance extends ros.Resource implements IVCUInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VCUInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceName: Name of the tablestore VCU instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VCUInstanceProps, enableResourcePropertyConstraint?: boolean);
}
