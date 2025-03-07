import * as ros from '@alicloud/ros-cdk-core';
import { RosPublicIpAddressPools } from './vpc.generated';
export { RosPublicIpAddressPools as PublicIpAddressPoolsProperty };
/**
 * Properties for defining a `PublicIpAddressPools`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
 */
export interface PublicIpAddressPoolsProps {
    /**
     * Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines
     * BGP_PRO: BGP (Multi-ISP) Pro lines
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance,
     * this parameter is required and you must set the value to BGP_FinanceCloud.
     */
    readonly isp?: string | ros.IResolvable;
    /**
     * Property publicIpAddressPoolName: The name of the IP address pool.
     * This parameter is optional. The name must be 1 to 128 characters in length,
     * and can contain digits, periods (.), underscores (_), and hyphens (-).
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly publicIpAddressPoolName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `PublicIpAddressPools`.
 */
export interface IPublicIpAddressPools extends ros.IResource {
    readonly props: PublicIpAddressPoolsProps;
    /**
     * Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.
     */
    readonly attrPublicIpAddressPoolIds: ros.IResolvable | string;
    /**
     * Attribute PublicIpAddressPools: The list of public ip address pools.
     */
    readonly attrPublicIpAddressPools: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::PublicIpAddressPools`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPublicIpAddressPools`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
 */
export declare class PublicIpAddressPools extends ros.Resource implements IPublicIpAddressPools {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PublicIpAddressPoolsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.
     */
    readonly attrPublicIpAddressPoolIds: ros.IResolvable | string;
    /**
     * Attribute PublicIpAddressPools: The list of public ip address pools.
     */
    readonly attrPublicIpAddressPools: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PublicIpAddressPoolsProps, enableResourcePropertyConstraint?: boolean);
}
