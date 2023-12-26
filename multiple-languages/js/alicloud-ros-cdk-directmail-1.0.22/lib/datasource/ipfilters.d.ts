import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilters } from './directmail.generated';
export { RosIpfilters as IpfiltersProperty };
/**
 * Properties for defining a `Ipfilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export interface IpfiltersProps {
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Ipfilters`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpfilters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export declare class Ipfilters extends ros.Resource {
    /**
     * Attribute IpfilterIds: The list of ip filter IDs.
     */
    readonly attrIpfilterIds: ros.IResolvable;
    /**
     * Attribute Ipfilters: The list of ip filters.
     */
    readonly attrIpfilters: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: IpfiltersProps, enableResourcePropertyConstraint?: boolean);
}
