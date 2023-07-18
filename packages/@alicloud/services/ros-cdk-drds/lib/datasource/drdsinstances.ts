import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsInstances } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsInstances as DrdsInstancesProperty };

/**
 * Properties for defining a `DATASOURCE::DRDS::DrdsInstances`
 */
export interface DrdsInstancesProps {

    /**
     * Property description: Example description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property type: Instance type. 
     * Enumeration Value: 
     * 1: PRIVATE 
     * 0: PUBLIC
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::DRDS::DrdsInstances`
 */
export class DrdsInstances extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceIds: The list of drds instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute Instances: The list of drds instances.
     */
    public readonly attrInstances: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::DRDS::DrdsInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDrdsInstances = new RosDrdsInstances(this, id,  {
            type: props.type,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsInstances;
        this.attrInstanceIds = rosDrdsInstances.attrInstanceIds;
        this.attrInstances = rosDrdsInstances.attrInstances;
    }
}
