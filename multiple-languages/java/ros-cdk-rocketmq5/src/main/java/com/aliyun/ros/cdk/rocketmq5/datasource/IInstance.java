package com.aliyun.ros.cdk.rocketmq5.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.262Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountInfo: The account information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountInfo();

    /**
     * Attribute AclInfo: The information about access control.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclInfo();

    /**
     * Attribute Bid: The business ID (BID) of the commodity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid();

    /**
     * Attribute CommodityCode: The commodity code of the instance.
     * <p>
     * The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode();

    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ExpireTime: The time when the instance expires.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute ExtConfig: The extended configurations.
     * <p>
     * We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtConfig();

    /**
     * Attribute GroupCount: The number of groups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupCount();

    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: The name of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceQuotas: The instance quotas.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceQuotas();

    /**
     * Attribute NetworkInfo: The network information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInfo();

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute ProductInfo: The extended configurations of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductInfo();

    /**
     * Attribute ReleaseTime: The time when the instance was released.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReleaseTime();

    /**
     * Attribute Remark: The description of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SeriesCode: The primary edition of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSeriesCode();

    /**
     * Attribute ServiceCode: The code of the service to which the instance belongs.
     * <p>
     * The service code of ApsaraMQ for RocketMQ is rmq.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceCode();

    /**
     * Attribute Software: The instance software information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSoftware();

    /**
     * Attribute StartTime: The time when the instance was started.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime();

    /**
     * Attribute Status: The status of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    /**
     * Attribute SubSeriesCode: The sub-category edition of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubSeriesCode();

    /**
     * Attribute Tags: The resource tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TopicCount: The number of topics.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicCount();

    /**
     * Attribute UpdateTime: The time when the instance was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute UserId: The ID of the user who owns the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.rocketmq5.datasource.IInstance.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AccountInfo: The account information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclInfo: The information about access control.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrAclInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: The business ID (BID) of the commodity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: The commodity code of the instance.
         * <p>
         * The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the instance was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The time when the instance expires.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtConfig: The extended configurations.
         * <p>
         * We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrExtConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupCount: The number of groups.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupCount() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the RocketMQ instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceQuotas: The instance quotas.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceQuotas() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceQuotas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInfo: The network information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductInfo: The extended configurations of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrProductInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReleaseTime: The time when the instance was released.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: The description of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SeriesCode: The primary edition of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSeriesCode() {
            return software.amazon.jsii.Kernel.get(this, "attrSeriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceCode: The code of the service to which the instance belongs.
         * <p>
         * The service code of ApsaraMQ for RocketMQ is rmq.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceCode() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Software: The instance software information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSoftware() {
            return software.amazon.jsii.Kernel.get(this, "attrSoftware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The time when the instance was started.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubSeriesCode: The sub-category edition of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubSeriesCode() {
            return software.amazon.jsii.Kernel.get(this, "attrSubSeriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The resource tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicCount: The number of topics.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicCount() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the instance was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the user who owns the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq5.datasource.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AccountInfo: The account information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclInfo: The information about access control.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrAclInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: The business ID (BID) of the commodity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: The commodity code of the instance.
         * <p>
         * The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the instance was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The time when the instance expires.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtConfig: The extended configurations.
         * <p>
         * We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrExtConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupCount: The number of groups.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupCount() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the RocketMQ instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceQuotas: The instance quotas.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceQuotas() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceQuotas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInfo: The network information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductInfo: The extended configurations of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrProductInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReleaseTime: The time when the instance was released.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: The description of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SeriesCode: The primary edition of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSeriesCode() {
            return software.amazon.jsii.Kernel.get(this, "attrSeriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceCode: The code of the service to which the instance belongs.
         * <p>
         * The service code of ApsaraMQ for RocketMQ is rmq.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceCode() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Software: The instance software information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSoftware() {
            return software.amazon.jsii.Kernel.get(this, "attrSoftware", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The time when the instance was started.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubSeriesCode: The sub-category edition of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubSeriesCode() {
            return software.amazon.jsii.Kernel.get(this, "attrSubSeriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The resource tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicCount: The number of topics.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicCount() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the instance was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the user who owns the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq5.datasource.InstanceProps.class));
        }
    }
}
