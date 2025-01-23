import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute AclId: Access control ID.
     */
    readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AclName: Access control name.
     */
    readonly attrAclName: ros.IResolvable | string;

    /**
     * Attribute AclStatus: Access control type.
     */
    readonly attrAclStatus: ros.IResolvable | string;

    /**
     * Attribute AclType: Access control type.
     */
    readonly attrAclType: ros.IResolvable | string;

    /**
     * Attribute ClassicEgressAddress: Classic network exit address.
     */
    readonly attrClassicEgressAddress: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    readonly attrEgressIpv6Enable: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: Instance expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute HttpsPolicy: Https policy.
     */
    readonly attrHttpsPolicy: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Instance id.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Instance name.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceRpsLimit: Instance rps limits.
     */
    readonly attrInstanceRpsLimit: ros.IResolvable | string;

    /**
     * Attribute InstanceSpec: Instance type.
     */
    readonly attrInstanceSpec: ros.IResolvable | string;

    /**
     * Attribute InstanceSpecAttributes: Instance type.
     */
    readonly attrInstanceSpecAttributes: ros.IResolvable | string;

    /**
     * Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute InternetEgressAddress: Public network exit address.
     */
    readonly attrInternetEgressAddress: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute SupportIpv6: Does ipv6 support.
     */
    readonly attrSupportIpv6: ros.IResolvable | string;

    /**
     * Attribute UserVpcId: User's VpcID.
     */
    readonly attrUserVpcId: ros.IResolvable | string;

    /**
     * Attribute UserVswitchId: DescribeInstances.
     */
    readonly attrUserVswitchId: ros.IResolvable | string;

    /**
     * Attribute VipTypeList: Vip type.
     */
    readonly attrVipTypeList: ros.IResolvable | string;

    /**
     * Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    readonly attrVpcEgressAddress: ros.IResolvable | string;

    /**
     * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    readonly attrVpcIntranetEnable: ros.IResolvable | string;

    /**
     * Attribute VpcOwnerId: Vpc licensor ID.
     */
    readonly attrVpcOwnerId: ros.IResolvable | string;

    /**
     * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    readonly attrVpcSlbIntranetEnable: ros.IResolvable | string;

    /**
     * Attribute ZoneId: Zone.
     */
    readonly attrZoneId: ros.IResolvable | string;

    /**
     * Attribute ZoneLocalName: Available area.
     */
    readonly attrZoneLocalName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Instance`, which is used to query the information about an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclId: Access control ID.
     */
    public readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AclName: Access control name.
     */
    public readonly attrAclName: ros.IResolvable | string;

    /**
     * Attribute AclStatus: Access control type.
     */
    public readonly attrAclStatus: ros.IResolvable | string;

    /**
     * Attribute AclType: Access control type.
     */
    public readonly attrAclType: ros.IResolvable | string;

    /**
     * Attribute ClassicEgressAddress: Classic network exit address.
     */
    public readonly attrClassicEgressAddress: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    public readonly attrEgressIpv6Enable: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: Instance expiration time.
     */
    public readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute HttpsPolicy: Https policy.
     */
    public readonly attrHttpsPolicy: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Instance id.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Instance name.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceRpsLimit: Instance rps limits.
     */
    public readonly attrInstanceRpsLimit: ros.IResolvable | string;

    /**
     * Attribute InstanceSpec: Instance type.
     */
    public readonly attrInstanceSpec: ros.IResolvable | string;

    /**
     * Attribute InstanceSpecAttributes: Instance type.
     */
    public readonly attrInstanceSpecAttributes: ros.IResolvable | string;

    /**
     * Attribute InstanceType: Instance type.
     */
    public readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute InternetEgressAddress: Public network exit address.
     */
    public readonly attrInternetEgressAddress: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute SupportIpv6: Does ipv6 support.
     */
    public readonly attrSupportIpv6: ros.IResolvable | string;

    /**
     * Attribute UserVpcId: User's VpcID.
     */
    public readonly attrUserVpcId: ros.IResolvable | string;

    /**
     * Attribute UserVswitchId: DescribeInstances.
     */
    public readonly attrUserVswitchId: ros.IResolvable | string;

    /**
     * Attribute VipTypeList: Vip type.
     */
    public readonly attrVipTypeList: ros.IResolvable | string;

    /**
     * Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    public readonly attrVpcEgressAddress: ros.IResolvable | string;

    /**
     * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    public readonly attrVpcIntranetEnable: ros.IResolvable | string;

    /**
     * Attribute VpcOwnerId: Vpc licensor ID.
     */
    public readonly attrVpcOwnerId: ros.IResolvable | string;

    /**
     * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    public readonly attrVpcSlbIntranetEnable: ros.IResolvable | string;

    /**
     * Attribute ZoneId: Zone.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Attribute ZoneLocalName: Available area.
     */
    public readonly attrZoneLocalName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAclId = rosInstance.attrAclId;
        this.attrAclName = rosInstance.attrAclName;
        this.attrAclStatus = rosInstance.attrAclStatus;
        this.attrAclType = rosInstance.attrAclType;
        this.attrClassicEgressAddress = rosInstance.attrClassicEgressAddress;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrEgressIpv6Enable = rosInstance.attrEgressIpv6Enable;
        this.attrExpiredTime = rosInstance.attrExpiredTime;
        this.attrHttpsPolicy = rosInstance.attrHttpsPolicy;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceRpsLimit = rosInstance.attrInstanceRpsLimit;
        this.attrInstanceSpec = rosInstance.attrInstanceSpec;
        this.attrInstanceSpecAttributes = rosInstance.attrInstanceSpecAttributes;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrInternetEgressAddress = rosInstance.attrInternetEgressAddress;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrSupportIpv6 = rosInstance.attrSupportIpv6;
        this.attrUserVpcId = rosInstance.attrUserVpcId;
        this.attrUserVswitchId = rosInstance.attrUserVswitchId;
        this.attrVipTypeList = rosInstance.attrVipTypeList;
        this.attrVpcEgressAddress = rosInstance.attrVpcEgressAddress;
        this.attrVpcIntranetEnable = rosInstance.attrVpcIntranetEnable;
        this.attrVpcOwnerId = rosInstance.attrVpcOwnerId;
        this.attrVpcSlbIntranetEnable = rosInstance.attrVpcSlbIntranetEnable;
        this.attrZoneId = rosInstance.attrZoneId;
        this.attrZoneLocalName = rosInstance.attrZoneLocalName;
    }
}
