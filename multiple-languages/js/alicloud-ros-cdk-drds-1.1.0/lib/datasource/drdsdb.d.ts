import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsDB } from './drds.generated';
export { RosDrdsDB as DrdsDBProperty };
/**
 * Properties for defining a `DrdsDB`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
export interface DrdsDBProps {
    /**
     * Property drdsDatabaseName: The name of the Drds database.
     */
    readonly drdsDatabaseName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::DrdsDB`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsDB`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
export declare class DrdsDB extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DrdsDBProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Database creation timestamp.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DrdsDatabaseName: The name of the Drds database.
     */
    readonly attrDrdsDatabaseName: ros.IResolvable;
    /**
     * Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.
     */
    readonly attrInstRole: ros.IResolvable;
    /**
     * Attribute Schema: The schema ID that is assigned to the partitioned database by the system.
     */
    readonly attrSchema: ros.IResolvable;
    /**
     * Attribute SplitMode: The partition mode of the database.Valid values:
* HORIZONTAL: The database is horizontally partitioned.
* VERTICAL: The database is vertically partitioned.
     */
    readonly attrSplitMode: ros.IResolvable;
    /**
     * Attribute StorageType: The storage type of the Drds database. Valid values:
* RDS
* PolarDB
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsDBProps, enableResourcePropertyConstraint?: boolean);
}
