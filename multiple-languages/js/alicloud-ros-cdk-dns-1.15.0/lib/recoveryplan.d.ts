import * as ros from '@alicloud/ros-cdk-core';
import { RosRecoveryPlan } from './dns.generated';
export { RosRecoveryPlan as RecoveryPlanProperty };
/**
 * Properties for defining a `RecoveryPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
 */
export interface RecoveryPlanProps {
    /**
     * Property faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
     */
    readonly faultAddrPool: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property lang: The language of the request.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * Property remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * Represents a `RecoveryPlan`.
 */
export interface IRecoveryPlan extends ros.IResource {
    readonly props: RecoveryPlanProps;
    /**
     * Attribute RecoveryPlanId: The ID of the recovery plan.
     */
    readonly attrRecoveryPlanId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::RecoveryPlan`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRecoveryPlan`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
 */
export declare class RecoveryPlan extends ros.Resource implements IRecoveryPlan {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RecoveryPlanProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RecoveryPlanId: The ID of the recovery plan.
     */
    readonly attrRecoveryPlanId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RecoveryPlanProps, enableResourcePropertyConstraint?: boolean);
}
