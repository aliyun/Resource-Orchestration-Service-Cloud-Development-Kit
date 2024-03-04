import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcFirewallControlPolicy } from './cloudfw.generated';
export { RosVpcFirewallControlPolicy as VpcFirewallControlPolicyProperty };
/**
 * Properties for defining a `VpcFirewallControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
 */
export interface VpcFirewallControlPolicyProps {
    /**
     * Property aclAction: The action that Cloud Firewall performs on the traffic. Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    readonly aclAction: string | ros.IResolvable;
    /**
     * Property applicationName: The application type that the access control policy supports.
     * Valid values:
     * ANY (indicates that all application types are supported)
     * FTP
     * HTTP
     * HTTPS
     * MySQL
     * SMTP
     * SMTPS
     * RDP
     * VNC
     * SSH
     * Redis
     * MQTT
     * MongoDB
     * Memcache
     * SSL
     */
    readonly applicationName: string | ros.IResolvable;
    /**
     * Property description: The description of the access control policy.
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property destination: The destination address in the access control policy.
     * Set this parameter in the following way:
     * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
     * Example: 10.2.3.0\/24.
     * If the DestinationType parameter is set to group, set the value to the name of an address book.
     * Example: db_group.
     * If the DestinationType parameter is set to domain, set the value to a domain name.
     * Example: *.aliyuncs.com.
     */
    readonly destination: string | ros.IResolvable;
    /**
     * Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    readonly destinationType: string | ros.IResolvable;
    /**
     * Property newOrder: The priority of the access control policy.
     * The priority value starts from 1. A smaller priority value indicates a higher priority.
     * Note The value of -1 indicates the lowest priority.
     */
    readonly newOrder: string | ros.IResolvable;
    /**
     * Property proto: The type of the security protocol in the access control policy.
     */
    readonly proto: string | ros.IResolvable;
    /**
     * Property source: The source address in the access control policy.
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0\/24.
     * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
     */
    readonly source: string | ros.IResolvable;
    /**
     * Property sourceType: The type of the source address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
     * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
     * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
     * If the VPC firewall is used to protect Express Connect, set the value to the ID of
     * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
     * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
     */
    readonly vpcFirewallId: string | ros.IResolvable;
    /**
     * Property destPort: The destination port in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to port.
     */
    readonly destPort?: string | ros.IResolvable;
    /**
     * Property destPortGroup: The address book of destination ports in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to group.
     */
    readonly destPortGroup?: string | ros.IResolvable;
    /**
     * Property destPortType: The type of the destination port in the access control policy. Valid values:
     * port: port
     * group: address book
     */
    readonly destPortType?: string | ros.IResolvable;
    /**
     * Property lang: The natural language of the request and response. Valid values:
     * zh: Chinese
     * en: English
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`, which is used to add an access control policy to a specified policy group for a Virtual Private Cloud (VPC) firewall.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcFirewallControlPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
 */
export declare class VpcFirewallControlPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VpcFirewallControlPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclUuid: The unique ID of the access control policy.
     */
    readonly attrAclUuid: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcFirewallControlPolicyProps, enableResourcePropertyConstraint?: boolean);
}
