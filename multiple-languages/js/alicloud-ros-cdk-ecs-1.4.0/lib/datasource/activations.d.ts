import * as ros from '@alicloud/ros-cdk-core';
import { RosActivations } from './ecs.generated';
export { RosActivations as ActivationsProperty };
/**
 * Properties for defining a `Activations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export interface ActivationsProps {
    /**
     * Property activationId: Activation code ID.
     */
    readonly activationId?: string | ros.IResolvable;
    /**
     * Property instanceName: The default prefix of the instance name.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Activations`, which is used to query activation codes.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosActivations`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export declare class Activations extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ActivationsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ActivationIds: The list of activation IDs.
     */
    readonly attrActivationIds: ros.IResolvable;
    /**
     * Attribute Activations: The list of activations.
     */
    readonly attrActivations: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ActivationsProps, enableResourcePropertyConstraint?: boolean);
}
