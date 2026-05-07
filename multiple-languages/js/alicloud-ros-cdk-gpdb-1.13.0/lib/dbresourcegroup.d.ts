import * as ros from '@alicloud/ros-cdk-core';
import { RosDBResourceGroup } from './gpdb.generated';
export { RosDBResourceGroup as DBResourceGroupProperty };
/**
 * Properties for defining a `DBResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
 */
export interface DBResourceGroupProps {
    /**
     * Property dbInstanceId: The instance ID.> You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property resourceGroupConfig: Resource group configuration.
     */
    readonly resourceGroupConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property resourceGroupName: Resource group name.
     */
    readonly resourceGroupName: string | ros.IResolvable;
}
/**
 * Represents a `DBResourceGroup`.
 */
export interface IDBResourceGroup extends ros.IResource {
    readonly props: DBResourceGroupProps;
    /**
     * Attribute ResourceGroupConfig: Resource group configuration.
     */
    readonly attrResourceGroupConfig: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupName: Resource group name.
     */
    readonly attrResourceGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::DBResourceGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
 */
export declare class DBResourceGroup extends ros.Resource implements IDBResourceGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBResourceGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ResourceGroupConfig: Resource group configuration.
     */
    readonly attrResourceGroupConfig: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupName: Resource group name.
     */
    readonly attrResourceGroupName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBResourceGroupProps, enableResourcePropertyConstraint?: boolean);
}
