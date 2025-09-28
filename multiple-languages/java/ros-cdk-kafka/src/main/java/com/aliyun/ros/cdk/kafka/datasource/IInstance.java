package com.aliyun.ros.cdk.kafka.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.662Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllConfig();

    /**
     * Attribute AllowedList: White list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowedList();

    /**
     * Attribute CreateTime: Creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DeployType: Deployment method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType();

    /**
     * Attribute DiskSize: Disk size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskSize();

    /**
     * Attribute DiskType: Disk type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType();

    /**
     * Attribute DomainEndpoint: The domain name access point of the default access point.
     * <p>
     * The Kafka instance supports domain name access points and IP access points.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainEndpoint();

    /**
     * Attribute EipMax: Peak public network traffic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipMax();

    /**
     * Attribute EndPoint: Access point.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndPoint();

    /**
     * Attribute ExpiredTime: Expiration time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: Note name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute IoMax: Peak flow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMax();

    /**
     * Attribute IoMaxSpec: Flow specifications (recommended).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMaxSpec();

    /**
     * Attribute MsgRetain: Message save time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMsgRetain();

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point.
     * <p>
     * The Kafka instance supports domain name access points and IP access points.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaslDomainEndpoint();

    /**
     * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue.
     * <p>
     * The value is 0.10.2 or 2.2.0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceVersion();

    /**
     * Attribute SpecType: Instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecType();

    /**
     * Attribute SslDomainEndpoint: The domain name of the SSL access point.
     * <p>
     * The Kafka instance supports domain name access points and IP access points.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslDomainEndpoint();

    /**
     * Attribute SslEndPoint: External access point.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslEndPoint();

    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TopicNumLimit: Maximum number of topic creation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicNumLimit();

    /**
     * Attribute VpcId: VpcId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: Switch id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.kafka.datasource.IInstance.Jsii$Default {
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
         * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrAllConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowedList: White list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowedList() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowedList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeployType: Deployment method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType() {
            return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskSize: Disk size.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskType: Disk type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainEndpoint: The domain name access point of the default access point.
         * <p>
         * The Kafka instance supports domain name access points and IP access points.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipMax: Peak public network traffic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipMax() {
            return software.amazon.jsii.Kernel.get(this, "attrEipMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndPoint: Access point.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndPoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: Expiration time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: Note name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoMax: Peak flow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMax() {
            return software.amazon.jsii.Kernel.get(this, "attrIoMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoMaxSpec: Flow specifications (recommended).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMaxSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrIoMaxSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MsgRetain: Message save time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMsgRetain() {
            return software.amazon.jsii.Kernel.get(this, "attrMsgRetain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The paymen type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point.
         * <p>
         * The Kafka instance supports domain name access points and IP access points.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaslDomainEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrSaslDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue.
         * <p>
         * The value is 0.10.2 or 2.2.0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpecType: Instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecType() {
            return software.amazon.jsii.Kernel.get(this, "attrSpecType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslDomainEndpoint: The domain name of the SSL access point.
         * <p>
         * The Kafka instance supports domain name access points and IP access points.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslDomainEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrSslDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslEndPoint: External access point.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslEndPoint() {
            return software.amazon.jsii.Kernel.get(this, "attrSslEndPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicNumLimit: Maximum number of topic creation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicNumLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicNumLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VpcId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Switch id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the instance is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.datasource.InstanceProps.class));
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
         * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrAllConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowedList: White list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowedList() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowedList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeployType: Deployment method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType() {
            return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskSize: Disk size.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskType: Disk type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainEndpoint: The domain name access point of the default access point.
         * <p>
         * The Kafka instance supports domain name access points and IP access points.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipMax: Peak public network traffic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipMax() {
            return software.amazon.jsii.Kernel.get(this, "attrEipMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndPoint: Access point.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndPoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: Expiration time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: Note name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoMax: Peak flow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMax() {
            return software.amazon.jsii.Kernel.get(this, "attrIoMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoMaxSpec: Flow specifications (recommended).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMaxSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrIoMaxSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MsgRetain: Message save time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMsgRetain() {
            return software.amazon.jsii.Kernel.get(this, "attrMsgRetain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The paymen type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point.
         * <p>
         * The Kafka instance supports domain name access points and IP access points.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaslDomainEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrSaslDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue.
         * <p>
         * The value is 0.10.2 or 2.2.0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpecType: Instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecType() {
            return software.amazon.jsii.Kernel.get(this, "attrSpecType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslDomainEndpoint: The domain name of the SSL access point.
         * <p>
         * The Kafka instance supports domain name access points and IP access points.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslDomainEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrSslDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslEndPoint: External access point.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslEndPoint() {
            return software.amazon.jsii.Kernel.get(this, "attrSslEndPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicNumLimit: Maximum number of topic creation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicNumLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicNumLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VpcId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Switch id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the instance is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.datasource.InstanceProps.class));
        }
    }
}
