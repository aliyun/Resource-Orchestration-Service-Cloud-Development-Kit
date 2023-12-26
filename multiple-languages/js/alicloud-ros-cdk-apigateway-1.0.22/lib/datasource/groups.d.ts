import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './apigateway.generated';
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
     * Property sort: Sort.
     */
    readonly sort?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Groups`, which is used to query the details of existing API groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
export declare class Groups extends ros.Resource {
    /**
     * Attribute ApiGroupIds: The list of The ApiGateway group ids.
     */
    readonly attrApiGroupIds: ros.IResolvable;
    /**
     * Attribute ApiGroups: The information about ApiGateway groups.
     */
    readonly attrApiGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GroupsProps, enableResourcePropertyConstraint?: boolean);
}
