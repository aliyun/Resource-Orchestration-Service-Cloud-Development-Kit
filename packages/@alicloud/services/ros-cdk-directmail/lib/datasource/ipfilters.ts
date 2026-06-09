import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilters } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpfilters as IpfiltersProperty };

/**
 * Properties for defining a `Ipfilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export interface IpfiltersProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Ipfilters`.
 */
export interface IIpfilters extends ros.IResource {
    readonly props: IpfiltersProps;

    /**
     * Attribute IpfilterIds: The list of ip filter IDs.
     */
    readonly attrIpfilterIds: ros.IResolvable | string;

    /**
     * Attribute Ipfilters: The list of ip filters.
     */
    readonly attrIpfilters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Ipfilters`, which is used to query IP filters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpfilters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export class Ipfilters extends ros.Resource implements IIpfilters {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: IpfiltersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute IpfilterIds: The list of ip filter IDs.
     */
    public readonly attrIpfilterIds: ros.IResolvable | string;

    /**
     * Attribute Ipfilters: The list of ip filters.
     */
    public readonly attrIpfilters: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpfiltersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpfilters = new RosIpfilters(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpfilters;
        this.attrIpfilterIds = rosIpfilters.attrIpfilterIds;
        this.attrIpfilters = rosIpfilters.attrIpfilters;
    }
}
