import * as ros from '@alicloud/ros-cdk-core';
import { RosServices } from './pai.generated';
export { RosServices as ServicesProperty };
/**
 * Properties for defining a `DATASOURCE::PAI::Services`
 */
export interface ServicesProps {
    /**
     * Property labels: Service Tag.
     */
    readonly labels?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property serviceName: Service Name.
     */
    readonly serviceName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::PAI::Services`
 */
export declare class Services extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ServiceNames: The list of service names.
     */
    readonly attrServiceNames: ros.IResolvable;
    /**
     * Attribute Services: The list of services.
     */
    readonly attrServices: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::PAI::Services`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ServicesProps, enableResourcePropertyConstraint?: boolean);
}
