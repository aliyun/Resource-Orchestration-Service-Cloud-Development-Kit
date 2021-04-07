import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomerGateway as CustomerGatewayProperty };

/**
 * Properties for defining a `ALIYUN::VPC::CustomerGateway`
 */
export interface CustomerGatewayProps {

    /**
     * Property ipAddress: The IP address of the user gateway.
     */
    readonly ipAddress: string | ros.IResolvable;

    /**
     * Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::CustomerGateway`
 */
export class CustomerGateway extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CustomerGatewayId: The ID of the user gateway.
     */
    public readonly attrCustomerGatewayId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::CustomerGateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomerGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCustomerGateway = new RosCustomerGateway(this, id,  {
            description: props.description,
            ipAddress: props.ipAddress,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomerGateway;
        this.attrCustomerGatewayId = rosCustomerGateway.attrCustomerGatewayId;
    }
}
