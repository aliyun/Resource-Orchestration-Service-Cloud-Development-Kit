import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './kms.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
 */
export interface InstanceProps {
    /**
     * Property productVersion: KMS Instance commodity type (software\/software-small\/hardware\/hardware-small).
     */
    readonly productVersion: string | ros.IResolvable;
    /**
     * Property connection:
     */
    readonly connection?: RosInstance.ConnectionProperty | ros.IResolvable;
    /**
     * Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property keyNum: Maximum number of stored keys. It is required when the InstanceCharge is Subscription.
     */
    readonly keyNum?: number | ros.IResolvable;
    /**
     * Property log: Whether to enable log.
     */
    readonly log?: boolean | ros.IResolvable;
    /**
     * Property logStorage: Log storage.
     */
    readonly logStorage?: number | ros.IResolvable;
    /**
     * Property period: The subscription duration of the KMS instance.
     * If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
     * If PeriodUnit is Year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property renewPeriod: Automatic renewal period, in months.
     */
    readonly renewPeriod?: number | ros.IResolvable;
    /**
     * Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
     */
    readonly renewStatus?: string | ros.IResolvable;
    /**
     * Property secretNum: Maximum number of secrets. It is required when the InstanceCharge is Subscription.
     */
    readonly secretNum?: number | ros.IResolvable;
    /**
     * Property spec: The computation performance level of the KMS instance.
     */
    readonly spec?: number | ros.IResolvable;
    /**
     * Property vpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
     */
    readonly vpcNum?: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
