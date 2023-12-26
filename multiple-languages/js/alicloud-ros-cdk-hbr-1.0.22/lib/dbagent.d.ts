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
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::DbAgent`, which is used to install a Cloud Backup backup client for a database.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbAgent`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
export declare class DbAgent extends ros.Resource {
    /**
     * Attribute InstanceIds: Uni backup agent instance ids
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute TaskId: Uni backup agent install task id.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * Attribute UniBackupInstanceDetails: Uni backup agent instance info details
     */
    readonly attrUniBackupInstanceDetails: ros.IResolvable;
    /**
     * Attribute UniBackupInstances: Uni backup agent instance info
     */
    readonly attrUniBackupInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbAgentProps, enableResourcePropertyConstraint?: boolean);
}
