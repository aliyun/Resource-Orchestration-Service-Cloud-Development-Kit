package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::AnycastEIP</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:18.334Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.AnycastEIP")
public class AnycastEIP extends com.aliyun.ros.cdk.core.Resource {

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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAnycastId() {
        return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpAddress: Anycase IP address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: Anycast EIP instance name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: Order ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property bandwidth: Anycast EIP instance bandwidth.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Anycast EIP instance bandwidth. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: Anycast EIP instance bandwidth.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Anycast EIP instance bandwidth. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }

        /**
         * Property description: Anycast EIP instance description.
         * <p>
         * @return {@code this}
         * @param description Property description: Anycast EIP instance description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: Anycast EIP instance description.
         * <p>
         * @return {@code this}
         * @param description Property description: Anycast EIP instance description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property instanceChargeType: Anycast EIP instance charge type.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Anycast EIP instance charge type. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Anycast EIP instance charge type.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Anycast EIP instance charge type. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property internetChargeType: Anycast EIP instance access public network billing method.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Anycast EIP instance access public network billing method. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Anycast EIP instance access public network billing method.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Anycast EIP instance access public network billing method. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props().internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property name: Anycast EIP instance name.
         * <p>
         * @return {@code this}
         * @param name Property name: Anycast EIP instance name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props().name(name);
            return this;
        }
        /**
         * Property name: Anycast EIP instance name.
         * <p>
         * @return {@code this}
         * @param name Property name: Anycast EIP instance name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props().name(name);
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
