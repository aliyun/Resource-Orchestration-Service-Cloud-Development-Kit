import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateway } from './vpc.generated';
export { RosCustomerGateway as CustomerGatewayProperty };
/**
 * Properties for defining a `CustomerGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
 */
export interface CustomerGatewayProps {
    /**
     * Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `CustomerGateway`.
 */
export interface ICustomerGateway extends ros.IResource {
    readonly props: CustomerGatewayProps;
    /**
     * Attribute Asn: Asn.
     */
    readonly attrAsn: ros.IResolvable | string;
    /**
     * Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
     */
    readonly attrAuthKey: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the customer gateway was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CustomerGatewayId: The ID of the customer gateway.
     */
    readonly attrCustomerGatewayId: ros.IResolvable | string;
    /**
     * Attribute CustomerGatewayName: The name of the customer gateway.
     */
    readonly attrCustomerGatewayName: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the customer gateway.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute IpAddress: The IP address of the customer gateway.
     */
    readonly attrIpAddress: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CustomerGateway`, which is used to query the information about a customer gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomerGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
 */
export declare class CustomerGateway extends ros.Resource implements ICustomerGateway {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CustomerGatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Asn: Asn.
     */
    readonly attrAsn: ros.IResolvable | string;
    /**
     * Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
     */
    readonly attrAuthKey: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the customer gateway was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CustomerGatewayId: The ID of the customer gateway.
     */
    readonly attrCustomerGatewayId: ros.IResolvable | string;
    /**
     * Attribute CustomerGatewayName: The name of the customer gateway.
     */
    readonly attrCustomerGatewayName: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the customer gateway.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute IpAddress: The IP address of the customer gateway.
     */
    readonly attrIpAddress: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomerGatewayProps, enableResourcePropertyConstraint?: boolean);
}
