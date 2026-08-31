package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::AnycastEIP</code>, which is used to create an Anycast elastic IP address (Anycast EIP).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T12:05:00.136Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.AnycastEIP")
public class AnycastEIP extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IAnycastEIP {

    protected AnycastEIP(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AnycastEIP(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AnycastEIP(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.AnycastEIPProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AnycastEIP(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.AnycastEIPProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public AnycastEIP(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AnycastId: Anycast EIP instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastId() {
        return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpAddress: Anycase IP address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Name: Anycast EIP instance name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: Order ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.AnycastEIPProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.AnycastEIP}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.AnycastEIP> {
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
        private com.aliyun.ros.cdk.vpc.AnycastEIPProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property bandwidth: The peak bandwidth of the Anycast EIP instance.
         * <p>
         * Unit: Mbps.
         * Valid values: 200 to 1000.
         * Default value: 1000.
         * <p>
         * <blockquote>
         * <p>
         * The peak bandwidth is for reference only and is not a guaranteed value. It
         * serves as the upper limit for bandwidth.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The peak bandwidth of the Anycast EIP instance. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The peak bandwidth of the Anycast EIP instance.
         * <p>
         * Unit: Mbps.
         * Valid values: 200 to 1000.
         * Default value: 1000.
         * <p>
         * <blockquote>
         * <p>
         * The peak bandwidth is for reference only and is not a guaranteed value. It
         * serves as the upper limit for bandwidth.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The peak bandwidth of the Anycast EIP instance. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }

        /**
         * Property description: The description of the Anycast EIP instance.
         * <p>
         * The description must be 0 to 256 characters in length and cannot start with
         * <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the Anycast EIP instance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the Anycast EIP instance.
         * <p>
         * The description must be 0 to 256 characters in length and cannot start with
         * <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the Anycast EIP instance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the Anycast EIP instance.
         * <p>
         * Set the value to PostPaid. This value specifies the pay-as-you-go billing method.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the Anycast EIP instance. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the Anycast EIP instance.
         * <p>
         * Set the value to PostPaid. This value specifies the pay-as-you-go billing method.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the Anycast EIP instance. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property internetChargeType: The metering method for Internet data transfer.
         * <p>
         * Set the value to PayByTraffic. This value specifies the pay-by-data-transfer
         * metering method.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method for Internet data transfer. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The metering method for Internet data transfer.
         * <p>
         * Set the value to PayByTraffic. This value specifies the pay-by-data-transfer
         * metering method.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method for Internet data transfer. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property name: The name of the Anycast EIP instance.
         * <p>
         * The name must be 0 to 128 characters in length. It must start with a letter or a
         * Chinese character and can contain digits, underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the Anycast EIP instance. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props().name(name);
            return this;
        }
        /**
         * Property name: The name of the Anycast EIP instance.
         * <p>
         * The name must be 0 to 128 characters in length. It must start with a letter or a
         * Chinese character and can contain digits, underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the Anycast EIP instance. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props().name(name);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property serviceLocation: Anycast EIP instance access area.
         * <p>
         * @return {@code this}
         * @param serviceLocation Property serviceLocation: Anycast EIP instance access area. This parameter is required.
         */
        public Builder serviceLocation(final java.lang.String serviceLocation) {
            this.props().serviceLocation(serviceLocation);
            return this;
        }
        /**
         * Property serviceLocation: Anycast EIP instance access area.
         * <p>
         * @return {@code this}
         * @param serviceLocation Property serviceLocation: Anycast EIP instance access area. This parameter is required.
         */
        public Builder serviceLocation(final com.aliyun.ros.cdk.core.IResolvable serviceLocation) {
            this.props().serviceLocation(serviceLocation);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.AnycastEIP}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.AnycastEIP build() {
            return new com.aliyun.ros.cdk.vpc.AnycastEIP(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.AnycastEIPProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.AnycastEIPProps.Builder();
            }
            return this.props;
        }
    }
}
