import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceInstances } from './computenest.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServiceInstances as ServiceInstancesProperty };

/**
 * Properties for defining a `ServiceInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export interface ServiceInstancesProps {

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstances`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export class ServiceInstances extends ros.Resource {

    /**
     * Attribute ServiceInstanceIds: The list of service instance IDs.
     */
    public readonly attrServiceInstanceIds: ros.IResolvable;

    /**
     * Attribute ServiceInstances: The list of service instances.
     */
    public readonly attrServiceInstances: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServiceInstances = new RosServiceInstances(this, id,  {
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceInstances;
        this.attrServiceInstanceIds = rosServiceInstances.attrServiceInstanceIds;
        this.attrServiceInstances = rosServiceInstances.attrServiceInstances;
    }
}
