import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGateways } from './vpc.generated';
export { RosNatGateways as NatGatewaysProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::NatGateways`
 */
export interface NatGatewaysProps {
    /**
     * Property instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property name: The name of the NAT gateway.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId?: string | ros.IResolvable;
    /**
     * Property natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
     */
    readonly natType?: string | ros.IResolvable;
    /**
     * Property networkType: The type of the NAT gateway. Valid values:
     * internet: an Internet NAT gateway
     *  intranet: a VPC NAT gateway
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property status: The status of the NAT gateway. Valid values:
     * Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
     *  Available: The NAT gateway remains in a stable state after the NAT gateway is created.
     *  Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
     *  Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
     *  Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC to which the NAT gateway belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone to which the NAT gateway belongs.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::NatGateways`
 */
export declare class NatGateways extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute NatGatewayIds: The list of The nat gateway ids.
     */
    readonly attrNatGatewayIds: ros.IResolvable;
    /**
     * Attribute NatGateways: The list of The nat gateways.
     */
    readonly attrNatGateways: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::NatGateways`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NatGatewaysProps, enableResourcePropertyConstraint?: boolean);
}
