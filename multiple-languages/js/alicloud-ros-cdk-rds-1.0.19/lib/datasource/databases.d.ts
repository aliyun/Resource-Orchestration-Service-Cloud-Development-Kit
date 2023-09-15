import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabases } from './rds.generated';
export { RosDatabases as DatabasesProperty };
/**
 * Properties for defining a `DATASOURCE::RDS::Databases`
 */
export interface DatabasesProps {
    /**
     * Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property dbName: The names of the databases whose information you want to query.
     */
    readonly dbName?: string | ros.IResolvable;
    /**
     * Property dbStatus: The status of the databases whose information you want to query.
     */
    readonly dbStatus?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::RDS::Databases`
 */
export declare class Databases extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DBNames: The list of The RDS database names.
     */
    readonly attrDbNames: ros.IResolvable;
    /**
     * Attribute Databases: The list of The RDS databases.
     */
    readonly attrDatabases: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::RDS::Databases`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabasesProps, enableResourcePropertyConstraint?: boolean);
}
