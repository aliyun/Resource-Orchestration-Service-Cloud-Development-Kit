package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::BasicIpSet</code>, which is used to create an acceleration region for a basic Global Accelerator (GA) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.395Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.BasicIpSet")
public class BasicIpSet extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ga.IBasicIpSet {

    protected BasicIpSet(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BasicIpSet(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public BasicIpSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicIpSetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public BasicIpSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicIpSetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute IpSetId: The ID of the acceleration region.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicIpSetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.BasicIpSetProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.BasicIpSet}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.BasicIpSet> {
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
        private final com.aliyun.ros.cdk.ga.BasicIpSetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.BasicIpSetProps.Builder();
        }

        /**
         * Property acceleratorId: The ID of the basic GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * Property acceleratorId: The ID of the basic GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * Property accelerateRegionId: The ID of the acceleration region.
         * <p>
         * @return {@code this}
         * @param accelerateRegionId Property accelerateRegionId: The ID of the acceleration region. This parameter is required.
         */
        public Builder accelerateRegionId(final java.lang.String accelerateRegionId) {
            this.props.accelerateRegionId(accelerateRegionId);
            return this;
        }
        /**
         * Property accelerateRegionId: The ID of the acceleration region.
         * <p>
         * @return {@code this}
         * @param accelerateRegionId Property accelerateRegionId: The ID of the acceleration region. This parameter is required.
         */
        public Builder accelerateRegionId(final com.aliyun.ros.cdk.core.IResolvable accelerateRegionId) {
            this.props.accelerateRegionId(accelerateRegionId);
            return this;
        }

        /**
         * Property bandwidth: The bandwidth that you want to allocate to the acceleration region.
         * <p>
         * Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth that you want to allocate to the acceleration region. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The bandwidth that you want to allocate to the acceleration region.
         * <p>
         * Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth that you want to allocate to the acceleration region. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property ispType: The line type of the elastic IP address (EIP) in the acceleration region.
         * <p>
         * Valid values:
         * BGP (default): BGP (Multi-ISP) lines.
         * BGP_PRO: BGP (Multi-ISP) Pro lines.
         * Valid values if you are allowed to use single-ISP bandwidth:
         * ChinaTelecom
         * ChinaUnicom
         * ChinaMobile
         * ChinaTelecom_L2
         * ChinaUnicom_L2
         * ChinaMobile_L2
         * <p>
         * @return {@code this}
         * @param ispType Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. This parameter is required.
         */
        public Builder ispType(final java.lang.String ispType) {
            this.props.ispType(ispType);
            return this;
        }
        /**
         * Property ispType: The line type of the elastic IP address (EIP) in the acceleration region.
         * <p>
         * Valid values:
         * BGP (default): BGP (Multi-ISP) lines.
         * BGP_PRO: BGP (Multi-ISP) Pro lines.
         * Valid values if you are allowed to use single-ISP bandwidth:
         * ChinaTelecom
         * ChinaUnicom
         * ChinaMobile
         * ChinaTelecom_L2
         * ChinaUnicom_L2
         * ChinaMobile_L2
         * <p>
         * @return {@code this}
         * @param ispType Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. This parameter is required.
         */
        public Builder ispType(final com.aliyun.ros.cdk.core.IResolvable ispType) {
            this.props.ispType(ispType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.BasicIpSet}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.BasicIpSet build() {
            return new com.aliyun.ros.cdk.ga.BasicIpSet(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
