import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './rocketmq5.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: The ID of the instance that you want to query.
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
     * Attribute AccountInfo: The account information.
     */
    readonly attrAccountInfo: ros.IResolvable | string;

    /**
     * Attribute AclInfo: The information about access control.
     */
    readonly attrAclInfo: ros.IResolvable | string;

    /**
     * Attribute Bid: The business ID (BID) of the commodity.
     */
    readonly attrBid: ros.IResolvable | string;

    /**
     * Attribute CommodityCode: The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
     */
    readonly attrCommodityCode: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The time when the instance expires.
     */
    readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute ExtConfig: The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
     */
    readonly attrExtConfig: ros.IResolvable | string;

    /**
     * Attribute GroupCount: The number of groups.
     */
    readonly attrGroupCount: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceQuotas: The instance quotas.
     */
    readonly attrInstanceQuotas: ros.IResolvable | string;

    /**
     * Attribute NetworkInfo: The network information.
     */
    readonly attrNetworkInfo: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute ProductInfo: The extended configurations of the instance.
     */
    readonly attrProductInfo: ros.IResolvable | string;

    /**
     * Attribute ReleaseTime: The time when the instance was released.
     */
    readonly attrReleaseTime: ros.IResolvable | string;

    /**
     * Attribute Remark: The description of the instance.
     */
    readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SeriesCode: The primary edition of the instance.
     */
    readonly attrSeriesCode: ros.IResolvable | string;

    /**
     * Attribute ServiceCode: The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
     */
    readonly attrServiceCode: ros.IResolvable | string;

    /**
     * Attribute Software: The instance software information.
     */
    readonly attrSoftware: ros.IResolvable | string;

    /**
     * Attribute StartTime: The time when the instance was started.
     */
    readonly attrStartTime: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the instance.
     */
    readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute SubSeriesCode: The sub-category edition of the instance.
     */
    readonly attrSubSeriesCode: ros.IResolvable | string;

    /**
     * Attribute Tags: The resource tags.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute TopicCount: The number of topics.
     */
    readonly attrTopicCount: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the instance was last modified.
     */
    readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute UserId: The ID of the user who owns the instance.
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ5::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountInfo: The account information.
     */
    public readonly attrAccountInfo: ros.IResolvable | string;

    /**
     * Attribute AclInfo: The information about access control.
     */
    public readonly attrAclInfo: ros.IResolvable | string;

    /**
     * Attribute Bid: The business ID (BID) of the commodity.
     */
    public readonly attrBid: ros.IResolvable | string;

    /**
     * Attribute CommodityCode: The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
     */
    public readonly attrCommodityCode: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The time when the instance expires.
     */
    public readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute ExtConfig: The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
     */
    public readonly attrExtConfig: ros.IResolvable | string;

    /**
     * Attribute GroupCount: The number of groups.
     */
    public readonly attrGroupCount: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceQuotas: The instance quotas.
     */
    public readonly attrInstanceQuotas: ros.IResolvable | string;

    /**
     * Attribute NetworkInfo: The network information.
     */
    public readonly attrNetworkInfo: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute ProductInfo: The extended configurations of the instance.
     */
    public readonly attrProductInfo: ros.IResolvable | string;

    /**
     * Attribute ReleaseTime: The time when the instance was released.
     */
    public readonly attrReleaseTime: ros.IResolvable | string;

    /**
     * Attribute Remark: The description of the instance.
     */
    public readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SeriesCode: The primary edition of the instance.
     */
    public readonly attrSeriesCode: ros.IResolvable | string;

    /**
     * Attribute ServiceCode: The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
     */
    public readonly attrServiceCode: ros.IResolvable | string;

    /**
     * Attribute Software: The instance software information.
     */
    public readonly attrSoftware: ros.IResolvable | string;

    /**
     * Attribute StartTime: The time when the instance was started.
     */
    public readonly attrStartTime: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the instance.
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute SubSeriesCode: The sub-category edition of the instance.
     */
    public readonly attrSubSeriesCode: ros.IResolvable | string;

    /**
     * Attribute Tags: The resource tags.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute TopicCount: The number of topics.
     */
    public readonly attrTopicCount: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the instance was last modified.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute UserId: The ID of the user who owns the instance.
     */
    public readonly attrUserId: ros.IResolvable | string;

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
        this.attrAccountInfo = rosInstance.attrAccountInfo;
        this.attrAclInfo = rosInstance.attrAclInfo;
        this.attrBid = rosInstance.attrBid;
        this.attrCommodityCode = rosInstance.attrCommodityCode;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrExpireTime = rosInstance.attrExpireTime;
        this.attrExtConfig = rosInstance.attrExtConfig;
        this.attrGroupCount = rosInstance.attrGroupCount;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceQuotas = rosInstance.attrInstanceQuotas;
        this.attrNetworkInfo = rosInstance.attrNetworkInfo;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrProductInfo = rosInstance.attrProductInfo;
        this.attrReleaseTime = rosInstance.attrReleaseTime;
        this.attrRemark = rosInstance.attrRemark;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrSeriesCode = rosInstance.attrSeriesCode;
        this.attrServiceCode = rosInstance.attrServiceCode;
        this.attrSoftware = rosInstance.attrSoftware;
        this.attrStartTime = rosInstance.attrStartTime;
        this.attrStatus = rosInstance.attrStatus;
        this.attrSubSeriesCode = rosInstance.attrSubSeriesCode;
        this.attrTags = rosInstance.attrTags;
        this.attrTopicCount = rosInstance.attrTopicCount;
        this.attrUpdateTime = rosInstance.attrUpdateTime;
        this.attrUserId = rosInstance.attrUserId;
    }
}
