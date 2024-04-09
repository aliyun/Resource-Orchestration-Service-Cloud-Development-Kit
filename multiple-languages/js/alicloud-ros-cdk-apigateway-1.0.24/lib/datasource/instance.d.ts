import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './apigateway.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export interface InstanceProps {
    /**
     * Property instanceId: Instance id.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclId: Access control ID.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Attribute AclName: Access control name.
     */
    readonly attrAclName: ros.IResolvable;
    /**
     * Attribute AclStatus: Access control type.
     */
    readonly attrAclStatus: ros.IResolvable;
    /**
     * Attribute AclType: Access control type.
     */
    readonly attrAclType: ros.IResolvable;
    /**
     * Attribute ClassicEgressAddress: Classic network exit address.
     */
    readonly attrClassicEgressAddress: ros.IResolvable;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    readonly attrEgressIpv6Enable: ros.IResolvable;
    /**
     * Attribute ExpiredTime: Instance expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * Attribute HttpsPolicy: Https policy.
     */
    readonly attrHttpsPolicy: ros.IResolvable;
    /**
     * Attribute InstanceId: Instance id.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: Instance name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceRpsLimit: Instance rps limits.
     */
    readonly attrInstanceRpsLimit: ros.IResolvable;
    /**
     * Attribute InstanceSpec: Instance type.
     */
    readonly attrInstanceSpec: ros.IResolvable;
    /**
     * Attribute InstanceSpecAttributes: Instance type.
     */
    readonly attrInstanceSpecAttributes: ros.IResolvable;
    /**
     * Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute InternetEgressAddress: Public network exit address.
     */
    readonly attrInternetEgressAddress: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute SupportIpv6: Does ipv6 support.
     */
    readonly attrSupportIpv6: ros.IResolvable;
    /**
     * Attribute UserVpcId: User's VpcID.
     */
    readonly attrUserVpcId: ros.IResolvable;
    /**
     * Attribute UserVswitchId: DescribeInstances.
     */
    readonly attrUserVswitchId: ros.IResolvable;
    /**
     * Attribute VipTypeList: Vip type.
     */
    readonly attrVipTypeList: ros.IResolvable;
    /**
     * Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    readonly attrVpcEgressAddress: ros.IResolvable;
    /**
     * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    readonly attrVpcIntranetEnable: ros.IResolvable;
    /**
     * Attribute VpcOwnerId: Vpc licensor ID.
     */
    readonly attrVpcOwnerId: ros.IResolvable;
    /**
     * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    readonly attrVpcSlbIntranetEnable: ros.IResolvable;
    /**
     * Attribute ZoneId: Zone.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Attribute ZoneLocalName: Available area.
     */
    readonly attrZoneLocalName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
