import * as ros from '@alicloud/ros-cdk-core';
import { RosFwSwitch } from './cloudfw.generated';
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
     * Property regionList: The region list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly regionList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property resourceTypeList: The asset type list. Valid values:
     * - BastionHostIP: Bastion machine exit IP.
     * - BastionHostIngressIP: The entrance IP of the fortress machine.
     * - EcsEIP: ECS EIP.
     * - EcsPublicIP: ECS public network IP.
     * - EIP: Elastic Public IP.
     * - EniEIP: Elastic Network card EIP.
     * - NatEIP: NAT EIP.
     * - SlbEIP: SLB EIP.
     * - SlbPublicIP: SLB public network IP.
     * - NatPublicIP: NAT public IP
     * - HAVIP: High Availability Virtual IP.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
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
export declare class FwSwitch extends ros.Resource implements IFwSwitch {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FwSwitchProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: FwSwitchProps, enableResourcePropertyConstraint?: boolean);
}
