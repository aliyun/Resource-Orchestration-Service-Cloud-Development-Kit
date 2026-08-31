import * as ros from '@alicloud/ros-cdk-core';
import { RosFwSwitch } from './cloudfw.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFwSwitch as FwSwitchProperty };

/**
 * Properties for defining a `FwSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
export interface FwSwitchProps {

    /**
     * Property ipaddrList: The IP address list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly ipaddrList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ipVersion: The IP version number.
     */
    readonly ipVersion?: string | ros.IResolvable;

    /**
     * Property memberUid: The member unique identifier.
     */
    readonly memberUid?: string | ros.IResolvable;

    /**
     * Property regionList: The region list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly regionList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceTypeList: The list of asset types.
     * Valid values:
     * - BastionHostEgressIP: the egress IP address of a bastion host.
     * - BastionHostIngressIP: the ingress IP address of a bastion host.
     * - EcsEIP: the EIP of an ECS instance.
     * - EcsPublicIP: the public IP address of an ECS instance.
     * - EIP: an EIP.
     * - EniEIP: the EIP of an ENI.
     * - NatEIP: the EIP of a NAT gateway.
     * - SlbEIP: the EIP of an SLB instance or a CLB instance.
     * - SlbPublicIP: the public IP address of an SLB instance or a CLB instance.
     * - NatPublicIP: the public IP address of a NAT gateway.
     * - HAVIP: an HAVIP.
     * - NlbEIP: the EIP of an NLB instance.
     * - ApiGatewayEIP: the public IP address of an API gateway.
     * - AlbEIP: the EIP of an ALB instance.
     * - AiGatewayEIP: the public IP address of an AI gateway.
     * - GaEIP: the EIP of a GA instance.
     * - SwasEIP: the public IP address of a Simple Application Server instance.
     * - EcdEIP: the public IP address of an Elastic Desktop Service instance.
     * - BastionHostIP: the IP address of a bastion host.
     * > You must specify at least one of the `IpaddrList`, `RegionList`, and
     * `ResourceTypeList` parameters.
     */
    readonly resourceTypeList?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `FwSwitch`.
 */
export interface IFwSwitch extends ros.IResource {
    readonly props: FwSwitchProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::FwSwitch`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFwSwitch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
export class FwSwitch extends ros.Resource implements IFwSwitch {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FwSwitchProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FwSwitchProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFwSwitch = new RosFwSwitch(this, id,  {
            ipaddrList: props.ipaddrList,
            memberUid: props.memberUid,
            ipVersion: props.ipVersion,
            resourceTypeList: props.resourceTypeList,
            regionList: props.regionList,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFwSwitch;
    }
}
