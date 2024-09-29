import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabases } from './rds.generated';
export { RosDatabases as DatabasesProperty };
/**
 * Properties for defining a `Databases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::Databases`, which is used to query the details of databases in an ApsaraDB RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabases`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
 */
export declare class Databases extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DatabasesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DBNames: The list of The RDS database names.
     */
    readonly attrDbNames: ros.IResolvable;
    /**
     * Attribute Databases: The list of The RDS databases.
     */
    readonly attrDatabases: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabasesProps, enableResourcePropertyConstraint?: boolean);
}
