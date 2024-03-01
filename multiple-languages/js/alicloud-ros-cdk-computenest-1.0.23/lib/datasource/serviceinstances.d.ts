import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceInstances } from './computenest.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstances`, which is used to query the information about service instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export declare class ServiceInstances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServiceInstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ServiceInstanceIds: The list of service instance IDs.
     */
    readonly attrServiceInstanceIds: ros.IResolvable;
    /**
     * Attribute ServiceInstances: The list of service instances.
     */
    readonly attrServiceInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ServiceInstancesProps, enableResourcePropertyConstraint?: boolean);
}
