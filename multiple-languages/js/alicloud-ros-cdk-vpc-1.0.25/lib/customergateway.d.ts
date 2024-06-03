import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateway } from './vpc.generated';
export { RosCustomerGateway as CustomerGatewayProperty };
/**
 * Properties for defining a `CustomerGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
export interface CustomerGatewayProps {
    /**
     * Property ipAddress: The IP address of the user gateway.
     */
    readonly ipAddress: string | ros.IResolvable;
    /**
     * Property asn: The autonomous system number of the local data center gateway device.
     */
    readonly asn?: number | ros.IResolvable;
    /**
     * Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::CustomerGateway`, which is used to create a customer gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomerGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
export declare class CustomerGateway extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CustomerGatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CustomerGatewayId: The ID of the user gateway.
     */
    readonly attrCustomerGatewayId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomerGatewayProps, enableResourcePropertyConstraint?: boolean);
}
