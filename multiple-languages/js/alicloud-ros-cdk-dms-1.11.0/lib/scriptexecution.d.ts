import * as ros from '@alicloud/ros-cdk-core';
import { RosScriptExecution } from './dms.generated';
export { RosScriptExecution as ScriptExecutionProperty };
/**
 * Properties for defining a `ScriptExecution`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
 */
export interface ScriptExecutionProps {
    /**
     * Property dbId: The database ID.
     * > This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
     */
    readonly dbId: number | ros.IResolvable;
    /**
     * Property logic: Whether it is a logical database.
     */
    readonly logic: boolean | ros.IResolvable;
    /**
     * Property script: The specific SQL script to execute. Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
     */
    readonly script: string | ros.IResolvable;
    /**
     * Property tid: The tenant ID.
     * > Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
     */
    readonly tid?: number | ros.IResolvable;
}
/**
 * Represents a `ScriptExecution`.
 */
export interface IScriptExecution extends ros.IResource {
    readonly props: ScriptExecutionProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DMS::ScriptExecution`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScriptExecution`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
 */
export declare class ScriptExecution extends ros.Resource implements IScriptExecution {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScriptExecutionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScriptExecutionProps, enableResourcePropertyConstraint?: boolean);
}
