import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroups as GroupsProperty };

/**
 * Properties for defining a `Groups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
export interface GroupsProps {

    /**
     * Property groupId: API group ID.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * Property groupName: Specified keyword of the API group name.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property instanceId: API Gateway Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property sort: Sort.
     */
    readonly sort?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Groups`, which is used to query the details of existing API groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
export class Groups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApiGroupIds: The list of The ApiGateway group ids.
     */
    public readonly attrApiGroupIds: ros.IResolvable;

    /**
     * Attribute ApiGroups: The information about ApiGateway groups.
     */
    public readonly attrApiGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGroups = new RosGroups(this, id,  {
            groupName: props.groupName,
            instanceId: props.instanceId,
            sort: props.sort,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroups;
        this.attrApiGroupIds = rosGroups.attrApiGroupIds;
        this.attrApiGroups = rosGroups.attrApiGroups;
    }
}
