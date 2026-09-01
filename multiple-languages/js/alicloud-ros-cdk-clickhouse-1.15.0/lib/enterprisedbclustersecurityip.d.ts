import * as ros from '@alicloud/ros-cdk-core';
import { RosEnterpriseDBClusterSecurityIP } from './clickhouse.generated';
export { RosEnterpriseDBClusterSecurityIP as EnterpriseDBClusterSecurityIPProperty };
/**
 * Properties for defining a `EnterpriseDBClusterSecurityIP`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
 */
export interface EnterpriseDBClusterSecurityIPProps {
    /**
     * Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property groupName: The name of the whitelist whose settings you want to modify.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    readonly securityIpList: string | ros.IResolvable;
}
/**
 * Represents a `EnterpriseDBClusterSecurityIP`.
 */
export interface IEnterpriseDBClusterSecurityIP extends ros.IResource {
    readonly props: EnterpriseDBClusterSecurityIPProps;
    /**
     * Attribute GroupName: The name of the whitelist whose settings you want to modify.
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable | string;
    /**
     * Attribute SecurityIpType: The type of IP address.
     */
    readonly attrSecurityIpType: ros.IResolvable | string;
    /**
     * Attribute WhitelistNetType: The network type of the whitelist.
     */
    readonly attrWhitelistNetType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnterpriseDBClusterSecurityIP`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
 */
export declare class EnterpriseDBClusterSecurityIP extends ros.Resource implements IEnterpriseDBClusterSecurityIP {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnterpriseDBClusterSecurityIPProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupName: The name of the whitelist whose settings you want to modify.
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable | string;
    /**
     * Attribute SecurityIpType: The type of IP address.
     */
    readonly attrSecurityIpType: ros.IResolvable | string;
    /**
     * Attribute WhitelistNetType: The network type of the whitelist.
     */
    readonly attrWhitelistNetType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnterpriseDBClusterSecurityIPProps, enableResourcePropertyConstraint?: boolean);
}
