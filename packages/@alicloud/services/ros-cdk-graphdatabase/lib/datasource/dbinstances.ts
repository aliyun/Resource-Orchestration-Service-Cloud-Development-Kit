import * as ros from '@alicloud/ros-cdk-core';
import { RosDbInstances } from './graphdatabase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDbInstances as DbInstancesProperty };

/**
 * Properties for defining a `DbInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GraphDatabase::DbInstances`, which is used to query the information about Graph Database (GDB) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
 */
export class DbInstances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DbInstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DbInstanceIds: The list of db instance IDs.
     */
    public readonly attrDbInstanceIds: ros.IResolvable;

    /**
     * Attribute DbInstances: The list of db instances.
     */
    public readonly attrDbInstances: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDbInstances = new RosDbInstances(this, id,  {
            resourceGroupId: props.resourceGroupId,
            dbInstanceDescription: props.dbInstanceDescription,
            dbInstanceId: props.dbInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDbInstances;
        this.attrDbInstanceIds = rosDbInstances.attrDbInstanceIds;
        this.attrDbInstances = rosDbInstances.attrDbInstances;
    }
}
