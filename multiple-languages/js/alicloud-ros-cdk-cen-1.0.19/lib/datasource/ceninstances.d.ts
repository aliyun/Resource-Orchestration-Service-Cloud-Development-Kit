import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstances } from './cen.generated';
export { RosCenInstances as CenInstancesProperty };
/**
 * Properties for defining a `DATASOURCE::CEN::CenInstances`
 */
export interface CenInstancesProps {
    /**
     * Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenInstances.FilterProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CEN::CenInstances`
 */
export declare class CenInstances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CenIds: The list of The Cen instance ids.
     */
    readonly attrCenIds: ros.IResolvable;
    /**
     * Attribute Cens: The information about Cens.
     */
    readonly attrCens: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CEN::CenInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CenInstancesProps, enableResourcePropertyConstraint?: boolean);
}
