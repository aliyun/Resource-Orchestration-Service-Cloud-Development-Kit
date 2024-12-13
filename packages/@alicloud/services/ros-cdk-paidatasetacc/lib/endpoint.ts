import * as ros from '@alicloud/ros-cdk-core';
import { RosEndpoint } from './paidatasetacc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEndpoint as EndpointProperty };

/**
 * Properties for defining a `Endpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
export interface EndpointProps {

    /**
     * Property instanceId: The ID of the acceleration instance
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property name: The name of the Mount Target.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property type: The network type of the Mount Target.
     */
    readonly type?: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vswitchId: The ID of the vSwitch.
     */
    readonly vswitchId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIDatasetAcc::Endpoint`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
export class Endpoint extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: EndpointProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndpointId: The ID of the Mount Target.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EndpointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEndpoint = new RosEndpoint(this, id,  {
            type: props.type,
            vpcId: props.vpcId,
            instanceId: props.instanceId,
            vswitchId: props.vswitchId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEndpoint;
        this.attrEndpointId = rosEndpoint.attrEndpointId;
    }
}
