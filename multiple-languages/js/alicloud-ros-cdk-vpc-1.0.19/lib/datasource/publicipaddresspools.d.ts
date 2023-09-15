import * as ros from '@alicloud/ros-cdk-core';
import { RosPublicIpAddressPools } from './vpc.generated';
export { RosPublicIpAddressPools as PublicIpAddressPoolsProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::PublicIpAddressPools`
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
     * The name must start with a letter but cannot start with http:// or https://.
     */
    readonly publicIpAddressPoolName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::PublicIpAddressPools`
 */
export declare class PublicIpAddressPools extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.
     */
    readonly attrPublicIpAddressPoolIds: ros.IResolvable;
    /**
     * Attribute PublicIpAddressPools: The list of public ip address pools.
     */
    readonly attrPublicIpAddressPools: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::PublicIpAddressPools`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PublicIpAddressPoolsProps, enableResourcePropertyConstraint?: boolean);
}
