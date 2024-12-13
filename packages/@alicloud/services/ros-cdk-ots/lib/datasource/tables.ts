import * as ros from '@alicloud/ros-cdk-core';
import { RosTables } from './ots.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTables as TablesProperty };

/**
 * Properties for defining a `Tables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-tables
 */
export interface TablesProps {

    /**
     * Property instanceName: The name of the instance to which the table belongs.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property tableName: The name of table.
     */
    readonly tableName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OTS::Tables`, which is used to query the names of all tables that are created in an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTables`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-tables
 */
export class Tables extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TablesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TableNames: The list of table names.
     */
    public readonly attrTableNames: ros.IResolvable;

    /**
     * Attribute Tables: The list of tables.
     */
    public readonly attrTables: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TablesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTables = new RosTables(this, id,  {
            instanceName: props.instanceName,
            tableName: props.tableName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTables;
        this.attrTableNames = rosTables.attrTableNames;
        this.attrTables = rosTables.attrTables;
    }
}
