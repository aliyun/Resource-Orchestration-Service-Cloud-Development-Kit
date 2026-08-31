package com.aliyun.ros.cdk.amqp;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AMQP::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:03:33.243Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.amqp.IInstance {

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
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.amqp.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.amqp.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ClassicEndpoint: The classic endpoint of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrClassicEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateEndpoint: The private endpoint of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicEndpoint: The public endpoint of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.amqp.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.amqp.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.amqp.Instance> {
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
        private com.aliyun.ros.cdk.amqp.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property instanceName: The name of the instance.
         * <p>
         * The name can be up to 64 characters long.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance.
         * <p>
         * The name can be up to 64 characters long.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceType: The instance type.
         * <p>
         * This parameter is required for subscription instances. Valid values:
         * <p>
         * <ul>
         * <li><code>professional</code>: Professional Edition</li>
         * <li><code>enterprise</code>: Enterprise Edition</li>
         * <li><code>vip</code>: Platinum Edition
         * You do not need to specify this parameter for serverless instances.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type.
         * <p>
         * This parameter is required for subscription instances. Valid values:
         * <p>
         * <ul>
         * <li><code>professional</code>: Professional Edition</li>
         * <li><code>enterprise</code>: Enterprise Edition</li>
         * <li><code>vip</code>: Platinum Edition
         * You do not need to specify this parameter for serverless instances.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }

        /**
         * Property maxEipTps: The max eip tps.
         * <p>
         * It is valid when support_eip is true.
         * The minimum value is 128, with the step size 128.
         * <p>
         * @return {@code this}
         * @param maxEipTps Property maxEipTps: The max eip tps. This parameter is required.
         */
        public Builder maxEipTps(final java.lang.Number maxEipTps) {
            this.props().maxEipTps(maxEipTps);
            return this;
        }
        /**
         * Property maxEipTps: The max eip tps.
         * <p>
         * It is valid when support_eip is true.
         * The minimum value is 128, with the step size 128.
         * <p>
         * @return {@code this}
         * @param maxEipTps Property maxEipTps: The max eip tps. This parameter is required.
         */
        public Builder maxEipTps(final com.aliyun.ros.cdk.core.IResolvable maxEipTps) {
            this.props().maxEipTps(maxEipTps);
            return this;
        }

        /**
         * Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
         * <p>
         * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
         * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
         * <p>
         * @return {@code this}
         * @param maxTps Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000]. This parameter is required.
         */
        public Builder maxTps(final java.lang.Number maxTps) {
            this.props().maxTps(maxTps);
            return this;
        }
        /**
         * Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
         * <p>
         * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
         * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
         * <p>
         * @return {@code this}
         * @param maxTps Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000]. This parameter is required.
         */
        public Builder maxTps(final com.aliyun.ros.cdk.core.IResolvable maxTps) {
            this.props().maxTps(maxTps);
            return this;
        }

        /**
         * Property orderNum: Set the number of instances to be created.
         * <p>
         * @return {@code this}
         * @param orderNum Property orderNum: Set the number of instances to be created. This parameter is required.
         */
        public Builder orderNum(final java.lang.Number orderNum) {
            this.props().orderNum(orderNum);
            return this;
        }
        /**
         * Property orderNum: Set the number of instances to be created.
         * <p>
         * @return {@code this}
         * @param orderNum Property orderNum: Set the number of instances to be created. This parameter is required.
         */
        public Builder orderNum(final com.aliyun.ros.cdk.core.IResolvable orderNum) {
            this.props().orderNum(orderNum);
            return this;
        }

        /**
         * Property payType: The billing method of the instance.
         * <p>
         * The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
         * PrePaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instance. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props().payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the instance.
         * <p>
         * The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
         * PrePaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instance. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props().payType(payType);
            return this;
        }

        /**
         * Property period: The period.
         * <p>
         * Valid values: 1, 2, 3, 6, 12, 24, 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props().period(period);
            return this;
        }
        /**
         * Property period: The period.
         * <p>
         * Valid values: 1, 2, 3, 6, 12, 24, 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props().period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props().periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props().periodUnit(periodUnit);
            return this;
        }

        /**
         * Property queueCapacity: The queue capacity.
         * <p>
         * If instance type is professional, the valid value is [50, 1000] with the step size 5.
         * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
         * If instance type is vip, the valid value is [200, 80000] with the step size 100
         * <p>
         * @return {@code this}
         * @param queueCapacity Property queueCapacity: The queue capacity. This parameter is required.
         */
        public Builder queueCapacity(final java.lang.Number queueCapacity) {
            this.props().queueCapacity(queueCapacity);
            return this;
        }
        /**
         * Property queueCapacity: The queue capacity.
         * <p>
         * If instance type is professional, the valid value is [50, 1000] with the step size 5.
         * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
         * If instance type is vip, the valid value is [200, 80000] with the step size 100
         * <p>
         * @return {@code this}
         * @param queueCapacity Property queueCapacity: The queue capacity. This parameter is required.
         */
        public Builder queueCapacity(final com.aliyun.ros.cdk.core.IResolvable queueCapacity) {
            this.props().queueCapacity(queueCapacity);
            return this;
        }

        /**
         * Property storageSize: The storage size.
         * <p>
         * It is valid when instance_type is vip.
         * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: The storage size. This parameter is required.
         */
        public Builder storageSize(final java.lang.Number storageSize) {
            this.props().storageSize(storageSize);
            return this;
        }
        /**
         * Property storageSize: The storage size.
         * <p>
         * It is valid when instance_type is vip.
         * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: The storage size. This parameter is required.
         */
        public Builder storageSize(final com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.props().storageSize(storageSize);
            return this;
        }

        /**
         * Property supportEip: Specifies whether to enable access over the public network.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>true</code>: Enables access over the public network.</li>
         * <li><code>false</code>: Disables access over the public network.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param supportEip Property supportEip: Specifies whether to enable access over the public network. This parameter is required.
         */
        public Builder supportEip(final java.lang.String supportEip) {
            this.props().supportEip(supportEip);
            return this;
        }
        /**
         * Property supportEip: Specifies whether to enable access over the public network.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>true</code>: Enables access over the public network.</li>
         * <li><code>false</code>: Disables access over the public network.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param supportEip Property supportEip: Specifies whether to enable access over the public network. This parameter is required.
         */
        public Builder supportEip(final com.aliyun.ros.cdk.core.IResolvable supportEip) {
            this.props().supportEip(supportEip);
            return this;
        }

        /**
         * Property supportTracing: Specifies whether to enable the message trace feature.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>true</code>: Enables the message trace feature.</li>
         * <li><code>false</code>: Disables the message trace feature.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>The message trace feature is included for 15 days at no charge on Platinum
         * Edition instances. For these instances, you must enable this feature and set the
         * retention period to 15 days.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * <ul>
         * <li>For other instance types, you can enable or disable this feature.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param supportTracing Property supportTracing: Specifies whether to enable the message trace feature. This parameter is required.
         */
        public Builder supportTracing(final java.lang.String supportTracing) {
            this.props().supportTracing(supportTracing);
            return this;
        }
        /**
         * Property supportTracing: Specifies whether to enable the message trace feature.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>true</code>: Enables the message trace feature.</li>
         * <li><code>false</code>: Disables the message trace feature.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>The message trace feature is included for 15 days at no charge on Platinum
         * Edition instances. For these instances, you must enable this feature and set the
         * retention period to 15 days.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * <ul>
         * <li>For other instance types, you can enable or disable this feature.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param supportTracing Property supportTracing: Specifies whether to enable the message trace feature. This parameter is required.
         */
        public Builder supportTracing(final com.aliyun.ros.cdk.core.IResolvable supportTracing) {
            this.props().supportTracing(supportTracing);
            return this;
        }

        /**
         * Property tracingStorageTime: The retention period of message traces.
         * <p>
         * Unit: days. Valid values:
         * <p>
         * <ul>
         * <li><code>3</code></li>
         * <li><code>7</code></li>
         * <li><code>15</code>
         * This parameter is required if you set <code>SupportTracing</code> to <code>true</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tracingStorageTime Property tracingStorageTime: The retention period of message traces. This parameter is required.
         */
        public Builder tracingStorageTime(final java.lang.Number tracingStorageTime) {
            this.props().tracingStorageTime(tracingStorageTime);
            return this;
        }
        /**
         * Property tracingStorageTime: The retention period of message traces.
         * <p>
         * Unit: days. Valid values:
         * <p>
         * <ul>
         * <li><code>3</code></li>
         * <li><code>7</code></li>
         * <li><code>15</code>
         * This parameter is required if you set <code>SupportTracing</code> to <code>true</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tracingStorageTime Property tracingStorageTime: The retention period of message traces. This parameter is required.
         */
        public Builder tracingStorageTime(final com.aliyun.ros.cdk.core.IResolvable tracingStorageTime) {
            this.props().tracingStorageTime(tracingStorageTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.amqp.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.amqp.Instance build() {
            return new com.aliyun.ros.cdk.amqp.Instance(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.amqp.InstanceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.amqp.InstanceProps.Builder();
            }
            return this.props;
        }
    }
}
