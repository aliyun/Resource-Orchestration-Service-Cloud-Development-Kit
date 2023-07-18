import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroups as GroupsProperty };

/**
 * Properties for defining a `DATASOURCE::ApiGateway::Groups`
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
     * Property sort: Sort.
     */
    readonly sort?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Groups`
 */
export class Groups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ApiGroupIds: The list of The ApiGateway group ids.
     */
    public readonly attrApiGroupIds: ros.IResolvable;

    /**
     * Attribute ApiGroups: The information about ApiGateway groups.
     */
    public readonly attrApiGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ApiGateway::Groups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosGroups = new RosGroups(this, id,  {
            groupName: props.groupName,
            instanceId: props.instanceId,
            sort: props.sort,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroups;
        this.attrApiGroupIds = rosGroups.attrApiGroupIds;
        this.attrApiGroups = rosGroups.attrApiGroups;
    }
}
