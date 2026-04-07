import * as ros from '@alicloud/ros-cdk-core';
import { RosPublicIpAddressPool } from './vpc.generated';
export { RosPublicIpAddressPool as PublicIpAddressPoolProperty };
/**
 * Properties for defining a `PublicIpAddressPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-publicipaddresspool
 */
export interface PublicIpAddressPoolProps {
    /**
     * Property bizType: The business type of IP address pool.Value:
     * Cloudbox: Cloud Box.Cloud box users support to select this type.
     * Default (default): default, indicating non -special types.
     */
    readonly bizType?: string | ros.IResolvable;
    /**
     * Property description: Description of the address pool instance.
     * The length is 0-256 characters, and you cannot start with http:\/\/ or https: \/\/.
     */
    readonly description?: string | ros.IResolvable;
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
     * Property name: The name of the address pool instance.
     * The length is 0-128 characters, and you cannot start with http: \/\/ or https: \/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityProtectionTypes: Safety protection level.
     * When configured as empty, the default is DDOS protection (basic version).
     * When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
     */
    readonly securityProtectionTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: The list of container group tags in the form of key\/value pairs. You can define a maximum of 20 tags for each container group.
     */
    readonly tags?: RosPublicIpAddressPool.TagsProperty[];
    /**
     * Property zones: The available areas of the IP address pool.
     * The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
     */
    readonly zones?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `PublicIpAddressPool`.
 */
export interface IPublicIpAddressPool extends ros.IResource {
    readonly props: PublicIpAddressPoolProps;
    /**
     * Attribute PublicIpAddressPoolId: Example ID of the IP address pool.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::PublicIpAddressPool`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPublicIpAddressPool`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-publicipaddresspool
 */
export declare class PublicIpAddressPool extends ros.Resource implements IPublicIpAddressPool {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PublicIpAddressPoolProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PublicIpAddressPoolId: Example ID of the IP address pool.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PublicIpAddressPoolProps, enableResourcePropertyConstraint?: boolean);
}
