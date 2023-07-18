import * as ros from '@alicloud/ros-cdk-core';
import { RosApplications } from './edas.generated';
export { RosApplications as ApplicationsProperty };
/**
 * Properties for defining a `DATASOURCE::EDAS::Applications`
 */
export interface ApplicationsProps {
    /**
     * Property appName: The application name keyword.
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property logicalRegionId: The ID of the namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::EDAS::Applications`
 */
export declare class Applications extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AppIds: The list of application IDs.
     */
    readonly attrAppIds: ros.IResolvable;
    /**
     * Attribute Applications: The list of applications.
     */
    readonly attrApplications: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::EDAS::Applications`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ApplicationsProps, enableResourcePropertyConstraint?: boolean);
}
