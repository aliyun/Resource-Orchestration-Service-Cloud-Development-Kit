import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateway } from './vpc.generated';
export { RosCustomerGateway as CustomerGatewayProperty };
/**
 * Properties for defining a `ALIYUN::VPC::CustomerGateway`
 */
export interface CustomerGatewayProps {
    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    readonly ipAddress: string;
    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::CustomerGateway`
 */
export declare class CustomerGateway extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute CustomerGatewayId: The ID of the user gateway.
     */
    readonly attrCustomerGatewayId: any;
    /**
     * Create a new `ALIYUN::VPC::CustomerGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomerGatewayProps, enableResourcePropertyConstraint?: boolean);
}
