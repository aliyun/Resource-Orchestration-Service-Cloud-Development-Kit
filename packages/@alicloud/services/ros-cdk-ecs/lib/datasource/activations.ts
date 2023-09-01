import * as ros from '@alicloud/ros-cdk-core';
import { RosActivations } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosActivations as ActivationsProperty };

/**
 * Properties for defining a `DATASOURCE::ECS::Activations`
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
}

/**
 * A ROS resource type:  `DATASOURCE::ECS::Activations`
 */
export class Activations extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ActivationIds: The list of activation IDs.
     */
    public readonly attrActivationIds: ros.IResolvable;

    /**
     * Attribute Activations: The list of activations.
     */
    public readonly attrActivations: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ECS::Activations`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ActivationsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosActivations = new RosActivations(this, id,  {
            instanceName: props.instanceName,
            activationId: props.activationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosActivations;
        this.attrActivationIds = rosActivations.attrActivationIds;
        this.attrActivations = rosActivations.attrActivations;
    }
}
