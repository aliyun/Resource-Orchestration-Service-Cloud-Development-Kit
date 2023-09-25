import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheis } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrometheis as PrometheisProperty };

/**
 * Properties for defining a `DATASOURCE::ARMS::Prometheis`
 */
export interface PrometheisProps {

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ARMS::Prometheis`
 */
export class Prometheis extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * Attribute Prometheis: The list of Prometheis.
     */
    public readonly attrPrometheis: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ARMS::Prometheis`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrometheisProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPrometheis = new RosPrometheis(this, id,  {
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrometheis;
        this.attrClusterIds = rosPrometheis.attrClusterIds;
        this.attrPrometheis = rosPrometheis.attrPrometheis;
    }
}
