import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: The ID of the RocketMQ instance.
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountInfo: The account information.
     */
    public readonly attrAccountInfo: ros.IResolvable;

    /**
     * Attribute AclInfo: The information about access control.
     */
    public readonly attrAclInfo: ros.IResolvable;

    /**
     * Attribute CommodityCode: The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute ExpireTime: The time when the instance expires.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * Attribute GroupCount: The number of groups.
     */
    public readonly attrGroupCount: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: The name of instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceQuotas: The instance quotas.
     */
    public readonly attrInstanceQuotas: ros.IResolvable;

    /**
     * Attribute NetworkInfo: Instance network configuration information.
     */
    public readonly attrNetworkInfo: ros.IResolvable;

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute ProductInfo: The extended configurations of the instance.
     */
    public readonly attrProductInfo: ros.IResolvable;

    /**
     * Attribute ReleaseTime: The time when the instance was released.
     */
    public readonly attrReleaseTime: ros.IResolvable;

    /**
     * Attribute Remark: The description of the instance.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SeriesCode: The primary edition of the instance.
     */
    public readonly attrSeriesCode: ros.IResolvable;

    /**
     * Attribute ServiceCode: The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
     */
    public readonly attrServiceCode: ros.IResolvable;

    /**
     * Attribute Software: The instance software information.
     */
    public readonly attrSoftware: ros.IResolvable;

    /**
     * Attribute StartTime: The time when the instance was started.
     */
    public readonly attrStartTime: ros.IResolvable;

    /**
     * Attribute SubSeriesCode: The sub-category edition of the instance. For information about the differences between sub-category edition instances.
     */
    public readonly attrSubSeriesCode: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the RocketMQ instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TopicCount: The number of topics.
     */
    public readonly attrTopicCount: ros.IResolvable;

    /**
     * Attribute UpdateTime: The time when the instance was last modified.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Attribute UserId: The ID of the user who owns the instance.
     */
    public readonly attrUserId: ros.IResolvable;

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
        this.attrCommodityCode = rosInstance.attrCommodityCode;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrExpireTime = rosInstance.attrExpireTime;
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
        this.attrSubSeriesCode = rosInstance.attrSubSeriesCode;
        this.attrTags = rosInstance.attrTags;
        this.attrTopicCount = rosInstance.attrTopicCount;
        this.attrUpdateTime = rosInstance.attrUpdateTime;
        this.attrUserId = rosInstance.attrUserId;
    }
}
