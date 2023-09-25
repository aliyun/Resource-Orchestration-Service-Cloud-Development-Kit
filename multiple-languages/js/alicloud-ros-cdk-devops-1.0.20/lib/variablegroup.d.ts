import * as ros from '@alicloud/ros-cdk-core';
import { RosVariableGroup } from './devops.generated';
export { RosVariableGroup as VariableGroupProperty };
/**
 * Properties for defining a `ALIYUN::DEVOPS::VariableGroup`
 */
export interface VariableGroupProps {
    /**
     * Property name: The name of variable group.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
    /**
     * Property variables: Variables information.
     */
    readonly variables: Array<RosVariableGroup.VariablesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property description: The description of variable group.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::DEVOPS::VariableGroup`
 */
export declare class VariableGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute VariableGroupId: Variable group id.
     */
    readonly attrVariableGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DEVOPS::VariableGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VariableGroupProps, enableResourcePropertyConstraint?: boolean);
}
