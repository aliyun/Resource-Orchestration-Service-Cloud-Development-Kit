import * as ros from '@alicloud/ros-cdk-core';
import { RosVariableGroup } from './devops.generated';
export { RosVariableGroup as VariableGroupProperty };
/**
 * Properties for defining a `VariableGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
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
 * Represents a `VariableGroup`.
 */
export interface IVariableGroup extends ros.IResource {
    readonly props: VariableGroupProps;
    /**
     * Attribute VariableGroupId: Variable group id.
     */
    readonly attrVariableGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DEVOPS::VariableGroup`, which is used to create a variable group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVariableGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
export declare class VariableGroup extends ros.Resource implements IVariableGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VariableGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VariableGroupId: Variable group id.
     */
    readonly attrVariableGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VariableGroupProps, enableResourcePropertyConstraint?: boolean);
}
