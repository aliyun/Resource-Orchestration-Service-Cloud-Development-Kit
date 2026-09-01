import * as ros from '@alicloud/ros-cdk-core';
import { RosActivations } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Activations`.
 */
export interface IActivations extends ros.IResource {
    readonly props: ActivationsProps;

    /**
     * Attribute ActivationIds: The list of activation IDs.
     */
    readonly attrActivationIds: ros.IResolvable | string;

    /**
     * Attribute Activations: The list of activations.
     */
    readonly attrActivations: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Activations`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosActivations`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export class Activations extends ros.Resource implements IActivations {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ActivationsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ActivationIds: The list of activation IDs.
     */
    public readonly attrActivationIds: ros.IResolvable | string;

    /**
     * Attribute Activations: The list of activations.
     */
    public readonly attrActivations: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ActivationsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosActivations = new RosActivations(this, id,  {
            instanceName: props.instanceName,
            activationId: props.activationId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosActivations;
        this.attrActivationIds = rosActivations.attrActivationIds;
        this.attrActivations = rosActivations.attrActivations;
    }
}
