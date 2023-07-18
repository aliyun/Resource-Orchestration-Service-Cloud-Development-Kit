import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilters } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpfilters as IpfiltersProperty };

/**
 * Properties for defining a `DATASOURCE::DirectMail::Ipfilters`
 */
export interface IpfiltersProps {
}

/**
 * A ROS resource type:  `DATASOURCE::DirectMail::Ipfilters`
 */
export class Ipfilters extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute IpfilterIds: The list of ip filter IDs.
     */
    public readonly attrIpfilterIds: ros.IResolvable;

    /**
     * Attribute Ipfilters: The list of ip filters.
     */
    public readonly attrIpfilters: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::DirectMail::Ipfilters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpfiltersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosIpfilters = new RosIpfilters(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosIpfilters;
        this.attrIpfilterIds = rosIpfilters.attrIpfilterIds;
        this.attrIpfilters = rosIpfilters.attrIpfilters;
    }
}
