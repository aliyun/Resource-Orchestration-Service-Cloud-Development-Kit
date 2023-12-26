import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './hologram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstances as InstancesProperty };

/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hologram-instances
 */
export interface InstancesProps {

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::Hologram::Instances`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hologram-instances
 */
export class Instances extends ros.Resource {

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstances = new RosInstances(this, id,  {
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceIds = rosInstances.attrInstanceIds;
        this.attrInstances = rosInstances.attrInstances;
    }
}
