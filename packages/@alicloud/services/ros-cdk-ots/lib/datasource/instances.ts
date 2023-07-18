import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './ots.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstances as InstancesProperty };

/**
 * Properties for defining a `DATASOURCE::OTS::Instances`
 */
export interface InstancesProps {

    /**
     * Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::OTS::Instances`
 */
export class Instances extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceNames: The list of instance names.
     */
    public readonly attrInstanceNames: ros.IResolvable;

    /**
     * Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::OTS::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstances = new RosInstances(this, id,  {
            status: props.status,
            instanceName: props.instanceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceNames = rosInstances.attrInstanceNames;
        this.attrInstances = rosInstances.attrInstances;
    }
}
