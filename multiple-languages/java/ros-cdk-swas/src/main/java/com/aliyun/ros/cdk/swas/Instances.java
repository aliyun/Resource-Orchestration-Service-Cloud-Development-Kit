package com.aliyun.ros.cdk.swas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SWAS::Instances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.159Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.swas.$Module.class, fqn = "@alicloud/ros-cdk-swas.Instances")
public class Instances extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.swas.IInstances {

    protected Instances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.InstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.InstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InnerIpAddresses: The inner IP addresses of simple application servers.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceIds: The IDs of the simple application servers.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicIpAddresses: The public IP addresses of simple application servers.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.InstancesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.swas.InstancesProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.swas.Instances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.swas.Instances> {
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
        private final com.aliyun.ros.cdk.swas.InstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.swas.InstancesProps.Builder();
        }

        /**
         * Property imageId: The image ID.
         * <p>
         * You can call the ListImages operation to query the available images in the specified region.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image ID. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The image ID.
         * <p>
         * You can call the ListImages operation to query the available images in the specified region.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image ID. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property period: The subscription period of the servers.
         * <p>
         * Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the servers. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the servers.
         * <p>
         * Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the servers. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property planId: The plan ID.
         * <p>
         * You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
         * <p>
         * @return {@code this}
         * @param planId Property planId: The plan ID. This parameter is required.
         */
        public Builder planId(final java.lang.String planId) {
            this.props.planId(planId);
            return this;
        }
        /**
         * Property planId: The plan ID.
         * <p>
         * You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
         * <p>
         * @return {@code this}
         * @param planId Property planId: The plan ID. This parameter is required.
         */
        public Builder planId(final com.aliyun.ros.cdk.core.IResolvable planId) {
            this.props.planId(planId);
            return this;
        }

        /**
         * Property amount: The number of simple application servers that you want to create.
         * <p>
         * Valid values: 1 to 20.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param amount Property amount: The number of simple application servers that you want to create. This parameter is required.
         */
        public Builder amount(final java.lang.Number amount) {
            this.props.amount(amount);
            return this;
        }
        /**
         * Property amount: The number of simple application servers that you want to create.
         * <p>
         * Valid values: 1 to 20.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param amount Property amount: The number of simple application servers that you want to create. This parameter is required.
         */
        public Builder amount(final com.aliyun.ros.cdk.core.IResolvable amount) {
            this.props.amount(amount);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: The auto-renewal period.
         * <p>
         * This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The auto-renewal period.
         * <p>
         * This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property dataDiskSize: The size of the data disk that is attached to the server.
         * <p>
         * Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
         * A value of 0 indicates that no data disk is attached.
         * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
         * Default value: 0.
         * <p>
         * @return {@code this}
         * @param dataDiskSize Property dataDiskSize: The size of the data disk that is attached to the server. This parameter is required.
         */
        public Builder dataDiskSize(final java.lang.Number dataDiskSize) {
            this.props.dataDiskSize(dataDiskSize);
            return this;
        }
        /**
         * Property dataDiskSize: The size of the data disk that is attached to the server.
         * <p>
         * Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
         * A value of 0 indicates that no data disk is attached.
         * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
         * Default value: 0.
         * <p>
         * @return {@code this}
         * @param dataDiskSize Property dataDiskSize: The size of the data disk that is attached to the server. This parameter is required.
         */
        public Builder dataDiskSize(final com.aliyun.ros.cdk.core.IResolvable dataDiskSize) {
            this.props.dataDiskSize(dataDiskSize);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.swas.Instances}.
         */
        @Override
        public com.aliyun.ros.cdk.swas.Instances build() {
            return new com.aliyun.ros.cdk.swas.Instances(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
