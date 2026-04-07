import * as ros from '@alicloud/ros-cdk-core';
import { RosDbAgent } from './hbr.generated';
export { RosDbAgent as DbAgentProperty };
/**
 * Properties for defining a `DbAgent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
export interface DbAgentProps {
    /**
     * Property instanceInfo: Instance infos
     */
    readonly instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;
    /**
     * Property crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
     */
    readonly crossAccountType?: string | ros.IResolvable;
    /**
     * Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
     */
    readonly crossAccountUserId?: number | ros.IResolvable;
}
/**
 * Represents a `DbAgent`.
 */
export interface IDbAgent extends ros.IResource {
    readonly props: DbAgentProps;
    /**
     * Attribute InstanceIds: Uni backup agent instance ids
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute TaskId: Uni backup agent install task id.
     */
    readonly attrTaskId: ros.IResolvable | string;
    /**
     * Attribute UniBackupInstanceDetails: Uni backup agent instance info details
     */
    readonly attrUniBackupInstanceDetails: ros.IResolvable | string;
    /**
     * Attribute UniBackupInstances: Uni backup agent instance info
     */
    readonly attrUniBackupInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::DbAgent`, which is used to install a Data Disaster Recovery client.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbAgent`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
export declare class DbAgent extends ros.Resource implements IDbAgent {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DbAgentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceIds: Uni backup agent instance ids
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute TaskId: Uni backup agent install task id.
     */
    readonly attrTaskId: ros.IResolvable | string;
    /**
     * Attribute UniBackupInstanceDetails: Uni backup agent instance info details
     */
    readonly attrUniBackupInstanceDetails: ros.IResolvable | string;
    /**
     * Attribute UniBackupInstances: Uni backup agent instance info
     */
    readonly attrUniBackupInstances: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbAgentProps, enableResourcePropertyConstraint?: boolean);
}
