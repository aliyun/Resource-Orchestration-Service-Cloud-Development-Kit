import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTable } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouteTable as RouteTableProperty };

/**
 * Properties for defining a `RouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
 */
export interface RouteTableProps {

    /**
     * Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly routeTableName?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosRouteTable.TagsProperty[];
}

/**
 * Represents a `RouteTable`.
 */
export interface IRouteTable extends ros.IResource {
    readonly props: RouteTableProps;

    /**
     * Attribute RouteTableId: The ID of the route table.
     */
    readonly attrRouteTableId: ros.IResolvable | string;

    /**
     * Attribute RouteTableName: The name of the route table.
     */
    readonly attrRouteTableName: ros.IResolvable | string;

    /**
     * Attribute RouteTableType: The type of the route table.
     */
    readonly attrRouteTableType: ros.IResolvable | string;

    /**
     * Attribute VSwitchIds: A list of VSwitches under the VPC.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;

    /**
     * Attribute VpcId: The ID of the VRouter to which the route table belongs.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::RouteTable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
 */
export class RouteTable extends ros.Resource implements IRouteTable {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RouteTableProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouteTableId: The ID of the route table.
     */
    public readonly attrRouteTableId: ros.IResolvable | string;

    /**
     * Attribute RouteTableName: The name of the route table.
     */
    public readonly attrRouteTableName: ros.IResolvable | string;

    /**
     * Attribute RouteTableType: The type of the route table.
     */
    public readonly attrRouteTableType: ros.IResolvable | string;

    /**
     * Attribute VSwitchIds: A list of VSwitches under the VPC.
     */
    public readonly attrVSwitchIds: ros.IResolvable | string;

    /**
     * Attribute VpcId: The ID of the VRouter to which the route table belongs.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRouteTable = new RosRouteTable(this, id,  {
            description: props.description,
            vpcId: props.vpcId,
            routeTableName: props.routeTableName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteTable;
        this.attrRouteTableId = rosRouteTable.attrRouteTableId;
        this.attrRouteTableName = rosRouteTable.attrRouteTableName;
        this.attrRouteTableType = rosRouteTable.attrRouteTableType;
        this.attrVSwitchIds = rosRouteTable.attrVSwitchIds;
        this.attrVpcId = rosRouteTable.attrVpcId;
    }
}
