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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Activations`, which is used to query activation codes.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosActivations`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export class Activations extends ros.Resource {

    /**
     * Attribute ActivationIds: The list of activation IDs.
     */
    public readonly attrActivationIds: ros.IResolvable;

    /**
     * Attribute Activations: The list of activations.
     */
    public readonly attrActivations: ros.IResolvable;

    /**
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
