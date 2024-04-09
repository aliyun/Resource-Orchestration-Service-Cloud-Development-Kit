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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclId: Access control ID.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * Attribute AclName: Access control name.
     */
    public readonly attrAclName: ros.IResolvable;

    /**
     * Attribute AclStatus: Access control type.
     */
    public readonly attrAclStatus: ros.IResolvable;

    /**
     * Attribute AclType: Access control type.
     */
    public readonly attrAclType: ros.IResolvable;

    /**
     * Attribute ClassicEgressAddress: Classic network exit address.
     */
    public readonly attrClassicEgressAddress: ros.IResolvable;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    public readonly attrEgressIpv6Enable: ros.IResolvable;

    /**
     * Attribute ExpiredTime: Instance expiration time.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * Attribute HttpsPolicy: Https policy.
     */
    public readonly attrHttpsPolicy: ros.IResolvable;

    /**
     * Attribute InstanceId: Instance id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: Instance name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceRpsLimit: Instance rps limits.
     */
    public readonly attrInstanceRpsLimit: ros.IResolvable;

    /**
     * Attribute InstanceSpec: Instance type.
     */
    public readonly attrInstanceSpec: ros.IResolvable;

    /**
     * Attribute InstanceSpecAttributes: Instance type.
     */
    public readonly attrInstanceSpecAttributes: ros.IResolvable;

    /**
     * Attribute InstanceType: Instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute InternetEgressAddress: Public network exit address.
     */
    public readonly attrInternetEgressAddress: ros.IResolvable;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute SupportIpv6: Does ipv6 support.
     */
    public readonly attrSupportIpv6: ros.IResolvable;

    /**
     * Attribute UserVpcId: User's VpcID.
     */
    public readonly attrUserVpcId: ros.IResolvable;

    /**
     * Attribute UserVswitchId: DescribeInstances.
     */
    public readonly attrUserVswitchId: ros.IResolvable;

    /**
     * Attribute VipTypeList: Vip type.
     */
    public readonly attrVipTypeList: ros.IResolvable;

    /**
     * Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    public readonly attrVpcEgressAddress: ros.IResolvable;

    /**
     * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    public readonly attrVpcIntranetEnable: ros.IResolvable;

    /**
     * Attribute VpcOwnerId: Vpc licensor ID.
     */
    public readonly attrVpcOwnerId: ros.IResolvable;

    /**
     * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    public readonly attrVpcSlbIntranetEnable: ros.IResolvable;

    /**
     * Attribute ZoneId: Zone.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Attribute ZoneLocalName: Available area.
     */
    public readonly attrZoneLocalName: ros.IResolvable;

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
