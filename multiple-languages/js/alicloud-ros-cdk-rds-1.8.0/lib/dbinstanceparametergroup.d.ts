import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceParameterGroup } from './rds.generated';
export { RosDBInstanceParameterGroup as DBInstanceParameterGroupProperty };
/**
 * Properties for defining a `DBInstanceParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
 */
export interface DBInstanceParameterGroupProps {
    /**
     * Property dbInstanceId: Database InstanceId to update properties.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property parameters: Parameters to update for selected database instance.
     */
    readonly parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property forcerestart: whether restart database instance.
     */
    readonly forcerestart?: string | ros.IResolvable;
}
/**
 * Represents a `DBInstanceParameterGroup`.
 */
export interface IDBInstanceParameterGroup extends ros.IResource {
    readonly props: DBInstanceParameterGroupProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::DBInstanceParameterGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstanceParameterGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
 */
export declare class DBInstanceParameterGroup extends ros.Resource implements IDBInstanceParameterGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBInstanceParameterGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceParameterGroupProps, enableResourcePropertyConstraint?: boolean);
}
