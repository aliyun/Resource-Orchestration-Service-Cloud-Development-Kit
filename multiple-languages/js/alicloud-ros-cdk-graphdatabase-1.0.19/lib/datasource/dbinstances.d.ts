import * as ros from '@alicloud/ros-cdk-core';
import { RosDbInstances } from './graphdatabase.generated';
export { RosDbInstances as DbInstancesProperty };
/**
 * Properties for defining a `DATASOURCE::GraphDatabase::DbInstances`
 */
export interface DbInstancesProps {
    /**
     * Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The first ID of the resource.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::GraphDatabase::DbInstances`
 */
export declare class DbInstances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DbInstanceIds: The list of db instance IDs.
     */
    readonly attrDbInstanceIds: ros.IResolvable;
    /**
     * Attribute DbInstances: The list of db instances.
     */
    readonly attrDbInstances: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::GraphDatabase::DbInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DbInstancesProps, enableResourcePropertyConstraint?: boolean);
}
