import * as ros from '@alicloud/ros-cdk-core';
import { RosAddresses } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAddresses as AddressesProperty };

/**
 * Properties for defining a `Addresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
 */
export interface AddressesProps {

    /**
     * Property addressName: The name of the EIP.
     */
    readonly addressName?: string | ros.IResolvable;

    /**
     * Property allocationId: The ID of the EIP that you want to query.
     */
    readonly allocationId?: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the cloud resource.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property instanceType: The type of the current bound instance.
     * - **EcsInstance**: an ECS instance of the VPC type.
     * - **SlbInstance**: an SLB instance of the VPC type.
     * - **Nat**:NAT gateway.
     * - **HaVip**: a highly available virtual IP address.
     * - **NetworkInterface**: Secondary ENI.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
     */
    readonly ipAddress?: string | ros.IResolvable;

    /**
     * Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. 
     * Only the following regions support BGP (Multi-ISP) Pro lines: 
     * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * Property paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property segmentInstanceId: The ID of the consecutive EIPs.
     * This parameter value is returned only if the EIP is a continuous EIP.
     */
    readonly segmentInstanceId?: string | ros.IResolvable;
}

/**
 * Represents a `Addresses`.
 */
export interface IAddresses extends ros.IResource {
    readonly props: AddressesProps;

    /**
     * Attribute Addresses: The details about the EIP
     */
    readonly attrAddresses: ros.IResolvable | string;

    /**
     * Attribute AllocationIds: The list of allocation IDs.
     */
    readonly attrAllocationIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EIP::Addresses`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddresses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
 */
export class Addresses extends ros.Resource implements IAddresses {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AddressesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Addresses: The details about the EIP
     */
    public readonly attrAddresses: ros.IResolvable | string;

    /**
     * Attribute AllocationIds: The list of allocation IDs.
     */
    public readonly attrAllocationIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAddresses = new RosAddresses(this, id,  {
            segmentInstanceId: props.segmentInstanceId,
            addressName: props.addressName,
            resourceGroupId: props.resourceGroupId,
            instanceId: props.instanceId,
            isp: props.isp,
            allocationId: props.allocationId,
            paymentType: props.paymentType,
            ipAddress: props.ipAddress,
            instanceType: props.instanceType,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAddresses;
        this.attrAddresses = rosAddresses.attrAddresses;
        this.attrAllocationIds = rosAddresses.attrAllocationIds;
    }
}
