import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway } from './apig.generated';
export { RosGateway as GatewayProperty };
/**
 * Properties for defining a `Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateway
 */
export interface GatewayProps {
    /**
     * Property gatewayId: Cloud-native API Gateway ID.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Gateway`.
 */
export interface IGateway extends ros.IResource {
    readonly props: GatewayProps;
    /**
     * Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    readonly attrEnvironments: ros.IResolvable | string;
    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    readonly attrExpireTime: ros.IResolvable | string;
    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute GatewayName: The name of the Gateway.
     */
    readonly attrGatewayName: ros.IResolvable | string;
    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    readonly attrLoadBalancers: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the Gateway.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    readonly attrSecurityGroup: ros.IResolvable | string;
    /**
     * Attribute Spec: Gateway instance specifications.
     */
    readonly attrSpec: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the Gateway.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update timestamp. Unit: milliseconds.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    readonly attrVSwitch: ros.IResolvable | string;
    /**
     * Attribute Version: The gateway version.
     */
    readonly attrVersion: ros.IResolvable | string;
    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    readonly attrVpc: ros.IResolvable | string;
    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    readonly attrZones: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateway
 */
export declare class Gateway extends ros.Resource implements IGateway {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    readonly attrEnvironments: ros.IResolvable | string;
    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    readonly attrExpireTime: ros.IResolvable | string;
    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute GatewayName: The name of the Gateway.
     */
    readonly attrGatewayName: ros.IResolvable | string;
    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    readonly attrLoadBalancers: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the Gateway.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    readonly attrSecurityGroup: ros.IResolvable | string;
    /**
     * Attribute Spec: Gateway instance specifications.
     */
    readonly attrSpec: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the Gateway.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update timestamp. Unit: milliseconds.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    readonly attrVSwitch: ros.IResolvable | string;
    /**
     * Attribute Version: The gateway version.
     */
    readonly attrVersion: ros.IResolvable | string;
    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    readonly attrVpc: ros.IResolvable | string;
    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    readonly attrZones: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayProps, enableResourcePropertyConstraint?: boolean);
}
