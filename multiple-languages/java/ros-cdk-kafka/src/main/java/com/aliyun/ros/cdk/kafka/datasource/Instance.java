package com.aliyun.ros.cdk.kafka.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::KAFKA::Instance</code>, which is used to query the information about an ApsaraMQ for Kafka instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.730Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.datasource.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.kafka.datasource.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrAllConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AllowedList: White list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowedList() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowedList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeployType: Deployment method.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskSize: Disk size.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskType: Disk type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainEndpoint: The domain name access point of the default access point.
     * <p>
     * The Kafka instance supports domain name access points and IP access points.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EipMax: Peak public network traffic.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipMax() {
        return software.amazon.jsii.Kernel.get(this, "attrEipMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndPoint: Access point.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndPoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpiredTime: Expiration time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceName: Note name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IoMax: Peak flow.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMax() {
        return software.amazon.jsii.Kernel.get(this, "attrIoMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IoMaxSpec: Flow specifications (recommended).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoMaxSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrIoMaxSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MsgRetain: Message save time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMsgRetain() {
        return software.amazon.jsii.Kernel.get(this, "attrMsgRetain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point.
     * <p>
     * The Kafka instance supports domain name access points and IP access points.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaslDomainEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrSaslDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue.
     * <p>
     * The value is 0.10.2 or 2.2.0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SpecType: Instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecType() {
        return software.amazon.jsii.Kernel.get(this, "attrSpecType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SslDomainEndpoint: The domain name of the SSL access point.
     * <p>
     * The Kafka instance supports domain name access points and IP access points.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslDomainEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrSslDomainEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SslEndPoint: External access point.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslEndPoint() {
        return software.amazon.jsii.Kernel.get(this, "attrSslEndPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TopicNumLimit: Maximum number of topic creation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicNumLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicNumLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: VpcId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: Switch id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.datasource.InstanceProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kafka.datasource.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kafka.datasource.Instance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.kafka.datasource.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kafka.datasource.InstanceProps.Builder();
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kafka.datasource.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.kafka.datasource.Instance build() {
            return new com.aliyun.ros.cdk.kafka.datasource.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
