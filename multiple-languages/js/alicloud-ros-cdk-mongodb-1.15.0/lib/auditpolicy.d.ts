import * as ros from '@alicloud/ros-cdk-core';
import { RosAuditPolicy } from './mongodb.generated';
export { RosAuditPolicy as AuditPolicyProperty };
/**
 * Properties for defining a `AuditPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
 */
export interface AuditPolicyProps {
    /**
     * Property auditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    readonly auditStatus: string | ros.IResolvable;
    /**
     * Property dbInstanceId: Database Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
     */
    readonly storagePeriod?: number | ros.IResolvable;
}
/**
 * Represents a `AuditPolicy`.
 */
export interface IAuditPolicy extends ros.IResource {
    readonly props: AuditPolicyProps;
    /**
     * Attribute AuditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    readonly attrAuditStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::AuditPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAuditPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
 */
export declare class AuditPolicy extends ros.Resource implements IAuditPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AuditPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    readonly attrAuditStatus: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AuditPolicyProps, enableResourcePropertyConstraint?: boolean);
}
