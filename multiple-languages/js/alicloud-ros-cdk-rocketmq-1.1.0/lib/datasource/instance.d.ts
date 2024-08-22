import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './rocketmq.generated';
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
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountInfo: The account information.
     */
    readonly attrAccountInfo: ros.IResolvable;
    /**
     * Attribute AclInfo: The information about access control.
     */
    readonly attrAclInfo: ros.IResolvable;
    /**
     * Attribute CommodityCode: The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute ExpireTime: The time when the instance expires.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * Attribute GroupCount: The number of groups.
     */
    readonly attrGroupCount: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: The name of instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceQuotas: The instance quotas.
     */
    readonly attrInstanceQuotas: ros.IResolvable;
    /**
     * Attribute NetworkInfo: Instance network configuration information.
     */
    readonly attrNetworkInfo: ros.IResolvable;
    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute ProductInfo: The extended configurations of the instance.
     */
    readonly attrProductInfo: ros.IResolvable;
    /**
     * Attribute ReleaseTime: The time when the instance was released.
     */
    readonly attrReleaseTime: ros.IResolvable;
    /**
     * Attribute Remark: The description of the instance.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SeriesCode: The primary edition of the instance.
     */
    readonly attrSeriesCode: ros.IResolvable;
    /**
     * Attribute ServiceCode: The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
     */
    readonly attrServiceCode: ros.IResolvable;
    /**
     * Attribute Software: The instance software information.
     */
    readonly attrSoftware: ros.IResolvable;
    /**
     * Attribute StartTime: The time when the instance was started.
     */
    readonly attrStartTime: ros.IResolvable;
    /**
     * Attribute SubSeriesCode: The sub-category edition of the instance. For information about the differences between sub-category edition instances.
     */
    readonly attrSubSeriesCode: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the RocketMQ instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TopicCount: The number of topics.
     */
    readonly attrTopicCount: ros.IResolvable;
    /**
     * Attribute UpdateTime: The time when the instance was last modified.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Attribute UserId: The ID of the user who owns the instance.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
