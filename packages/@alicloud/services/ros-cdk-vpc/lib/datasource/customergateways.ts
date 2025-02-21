import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateways } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomerGateways as CustomerGatewaysProperty };

/**
 * Properties for defining a `CustomerGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export interface CustomerGatewaysProps {

    /**
     * Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `CustomerGateways`.
 */
export interface ICustomerGateways extends ros.IResource {
    readonly props: CustomerGatewaysProps;

    /**
     * Attribute CustomerGatewayIds: The list of customer gateway IDs.
     */
    readonly attrCustomerGatewayIds: ros.IResolvable | string;

    /**
     * Attribute CustomerGateways: The list of customer gateways.
     */
    readonly attrCustomerGateways: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CustomerGateways`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomerGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export class CustomerGateways extends ros.Resource implements ICustomerGateways {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CustomerGatewaysProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CustomerGatewayIds: The list of customer gateway IDs.
     */
    public readonly attrCustomerGatewayIds: ros.IResolvable | string;

    /**
     * Attribute CustomerGateways: The list of customer gateways.
     */
    public readonly attrCustomerGateways: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomerGatewaysProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCustomerGateways = new RosCustomerGateways(this, id,  {
            customerGatewayId: props.customerGatewayId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomerGateways;
        this.attrCustomerGatewayIds = rosCustomerGateways.attrCustomerGatewayIds;
        this.attrCustomerGateways = rosCustomerGateways.attrCustomerGateways;
    }
}
