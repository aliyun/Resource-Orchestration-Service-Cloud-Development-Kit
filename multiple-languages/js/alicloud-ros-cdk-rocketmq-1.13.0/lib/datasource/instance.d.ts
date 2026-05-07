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
     * Attribute GroupCount: The number of groups.
     */
    readonly attrGroupCount: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceName: The name of instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute InstanceQuotas: The instance quotas.
     */
    readonly attrInstanceQuotas: ros.IResolvable | string;
    /**
     * Attribute NetworkInfo: Instance network configuration information.
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
     * Attribute SubSeriesCode: The sub-category edition of the instance. For information about the differences between sub-category edition instances.
     */
    readonly attrSubSeriesCode: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the RocketMQ instance.
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountInfo: The account information.
     */
    readonly attrAccountInfo: ros.IResolvable | string;
    /**
     * Attribute AclInfo: The information about access control.
     */
    readonly attrAclInfo: ros.IResolvable | string;
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
     * Attribute GroupCount: The number of groups.
     */
    readonly attrGroupCount: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceName: The name of instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute InstanceQuotas: The instance quotas.
     */
    readonly attrInstanceQuotas: ros.IResolvable | string;
    /**
     * Attribute NetworkInfo: Instance network configuration information.
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
     * Attribute SubSeriesCode: The sub-category edition of the instance. For information about the differences between sub-category edition instances.
     */
    readonly attrSubSeriesCode: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the RocketMQ instance.
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
