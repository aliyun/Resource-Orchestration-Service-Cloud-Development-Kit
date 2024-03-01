import * as ros from '@alicloud/ros-cdk-core';
import { RosTable } from './ots.generated';
export { RosTable as TableProperty };
/**
 * Properties for defining a `Table`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
 */
export interface TableProps {
    /**
     * Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    readonly primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string | ros.IResolvable;
    /**
     * Property columns: Attribute column for table store.
     */
    readonly columns?: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    readonly deviationCellVersionInSec?: number | ros.IResolvable;
    /**
     * Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    readonly maxVersions?: number | ros.IResolvable;
    /**
     * Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    readonly reservedThroughput?: RosTable.ReservedThroughputProperty | ros.IResolvable;
    /**
     * Property secondaryIndices: The secondary indices of the table.
     */
    readonly secondaryIndices?: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    readonly timeToLive?: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::Table`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
 */
export declare class Table extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TableProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TableName: Table name
     */
    readonly attrTableName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TableProps, enableResourcePropertyConstraint?: boolean);
}
