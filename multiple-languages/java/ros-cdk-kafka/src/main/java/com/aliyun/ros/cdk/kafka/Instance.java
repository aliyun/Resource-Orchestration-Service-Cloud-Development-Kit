package com.aliyun.ros.cdk.kafka;

/**
 * A ROS resource type:  `ALIYUN::KAFKA::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.659Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::KAFKA::Instance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::KAFKA::Instance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: Id of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: Name of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: Id of the order.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kafka.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kafka.Instance> {
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
        private final com.aliyun.ros.cdk.kafka.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kafka.InstanceProps.Builder();
        }

        /**
         * Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.
         * <p>
         * Valid values:
         * 4: Instance of the public type
         * 5: Instance of the VPC type
         * <p>
         * @return {@code this}
         * @param deployType Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder deployType(final java.lang.Number deployType) {
            this.props.deployType(deployType);
            return this;
        }
        /**
         * Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.
         * <p>
         * Valid values:
         * 4: Instance of the public type
         * 5: Instance of the VPC type
         * <p>
         * @return {@code this}
         * @param deployType Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder deployType(final com.aliyun.ros.cdk.core.IResolvable deployType) {
            this.props.deployType(deployType);
            return this;
        }

        /**
         * Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }
        /**
         * Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }

        /**
         * Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * Valid values:
         * 0: Ultra disk
         * 1: SSD
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder diskType(final java.lang.String diskType) {
            this.props.diskType(diskType);
            return this;
        }
        /**
         * Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * Valid values:
         * 0: Ultra disk
         * 1: SSD
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder diskType(final com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.props.diskType(diskType);
            return this;
        }

        /**
         * Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * The default value of this parameter varies with different peak traffic values.
         * Additional fees are charged if the default values are exceeded.
         * Different specifications have different default values, and extra fees are charged.
         * For more information, see Billing.
         * <p>
         * @return {@code this}
         * @param topicQuota Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder topicQuota(final java.lang.Number topicQuota) {
            this.props.topicQuota(topicQuota);
            return this;
        }
        /**
         * Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * The default value of this parameter varies with different peak traffic values.
         * Additional fees are charged if the default values are exceeded.
         * Different specifications have different default values, and extra fees are charged.
         * For more information, see Billing.
         * <p>
         * @return {@code this}
         * @param topicQuota Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder topicQuota(final com.aliyun.ros.cdk.core.IResolvable topicQuota) {
            this.props.topicQuota(topicQuota);
            return this;
        }

        /**
         * Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
         * <p>
         * @return {@code this}
         * @param deployOption Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required. This parameter is required.
         */
        public Builder deployOption(final com.aliyun.ros.cdk.core.IResolvable deployOption) {
            this.props.deployOption(deployOption);
            return this;
        }
        /**
         * Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
         * <p>
         * @return {@code this}
         * @param deployOption Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required. This parameter is required.
         */
        public Builder deployOption(final com.aliyun.ros.cdk.kafka.RosInstance.DeployOptionProperty deployOption) {
            this.props.deployOption(deployOption);
            return this;
        }

        /**
         * Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * This parameter must be specified when the DeployType parameter is set to 4.
         * <p>
         * @return {@code this}
         * @param eipMax Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder eipMax(final java.lang.Number eipMax) {
            this.props.eipMax(eipMax);
            return this;
        }
        /**
         * Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * This parameter must be specified when the DeployType parameter is set to 4.
         * <p>
         * @return {@code this}
         * @param eipMax Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder eipMax(final com.aliyun.ros.cdk.core.IResolvable eipMax) {
            this.props.eipMax(eipMax);
            return this;
        }

        /**
         * Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * For more information about the value range, see Billing.
         * <p>
         * @return {@code this}
         * @param ioMax Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder ioMax(final java.lang.Number ioMax) {
            this.props.ioMax(ioMax);
            return this;
        }
        /**
         * Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
         * <p>
         * For more information about the value range, see Billing.
         * <p>
         * @return {@code this}
         * @param ioMax Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder ioMax(final com.aliyun.ros.cdk.core.IResolvable ioMax) {
            this.props.ioMax(ioMax);
            return this;
        }

        /**
         * Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.
         * <p>
         * When filling in at the same time, subject to IoMaxSpec.
         * It is recommended that you only fill in the flow specification
         * <p>
         * @return {@code this}
         * @param ioMaxSpec Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional. This parameter is required.
         */
        public Builder ioMaxSpec(final java.lang.String ioMaxSpec) {
            this.props.ioMaxSpec(ioMaxSpec);
            return this;
        }
        /**
         * Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.
         * <p>
         * When filling in at the same time, subject to IoMaxSpec.
         * It is recommended that you only fill in the flow specification
         * <p>
         * @return {@code this}
         * @param ioMaxSpec Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional. This parameter is required.
         */
        public Builder ioMaxSpec(final com.aliyun.ros.cdk.core.IResolvable ioMaxSpec) {
            this.props.ioMaxSpec(ioMaxSpec);
            return this;
        }

        /**
         * Property payType: Pay by hour or month.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Pay by hour or month. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: Pay by hour or month.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Pay by hour or month. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property specType: The edition of the Message Queue for Apache Kafka instance.
         * <p>
         * Valid values:
         * professional: Professional Edition
         * normal: Normal version
         * <p>
         * @return {@code this}
         * @param specType Property specType: The edition of the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder specType(final java.lang.String specType) {
            this.props.specType(specType);
            return this;
        }
        /**
         * Property specType: The edition of the Message Queue for Apache Kafka instance.
         * <p>
         * Valid values:
         * professional: Professional Edition
         * normal: Normal version
         * <p>
         * @return {@code this}
         * @param specType Property specType: The edition of the Message Queue for Apache Kafka instance. This parameter is required.
         */
        public Builder specType(final com.aliyun.ros.cdk.core.IResolvable specType) {
            this.props.specType(specType);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.kafka.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.kafka.Instance build() {
            return new com.aliyun.ros.cdk.kafka.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
