import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilters } from './directmail.generated';
export { RosIpfilters as IpfiltersProperty };
/**
 * Properties for defining a `DATASOURCE::DirectMail::Ipfilters`
 */
export interface IpfiltersProps {
}
/**
 * A ROS resource type:  `DATASOURCE::DirectMail::Ipfilters`
 */
export declare class Ipfilters extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute IpfilterIds: The list of ip filter IDs.
     */
    readonly attrIpfilterIds: ros.IResolvable;
    /**
     * Attribute Ipfilters: The list of ip filters.
     */
    readonly attrIpfilters: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DirectMail::Ipfilters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: IpfiltersProps, enableResourcePropertyConstraint?: boolean);
}
