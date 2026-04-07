import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTableAttachment } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouteTableAttachment as RouteTableAttachmentProperty };

/**
 * Properties for defining a `RouteTableAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableattachment
 */
export interface RouteTableAttachmentProps {

    /**
     * Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch to bind the route table.
     */
    readonly vSwitchId: string | ros.IResolvable;
}

/**
 * Represents a `RouteTableAttachment`.
 */
export interface IRouteTableAttachment extends ros.IResource {
    readonly props: RouteTableAttachmentProps;

    /**
     * Attribute RouteTableId: The ID of the route table.
     */
    readonly attrRouteTableId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch to bind the route table.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::RouteTableAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTableAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableattachment
 */
export class RouteTableAttachment extends ros.Resource implements IRouteTableAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RouteTableAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouteTableId: The ID of the route table.
     */
    public readonly attrRouteTableId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch to bind the route table.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTableAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRouteTableAttachment = new RosRouteTableAttachment(this, id,  {
            routeTableId: props.routeTableId,
            vSwitchId: props.vSwitchId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteTableAttachment;
        this.attrRouteTableId = rosRouteTableAttachment.attrRouteTableId;
        this.attrVSwitchId = rosRouteTableAttachment.attrVSwitchId;
    }
}
