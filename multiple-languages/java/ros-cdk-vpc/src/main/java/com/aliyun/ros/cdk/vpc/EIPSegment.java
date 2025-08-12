package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::EIPSegment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.159Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.EIPSegment")
public class EIPSegment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IEIPSegment {

    protected EIPSegment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EIPSegment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EIPSegment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPSegmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EIPSegment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPSegmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EipAddresses: List of EIP addresses.
     * <p>
     * like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrEipAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipSegmentInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrEipSegmentInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPSegmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.EIPSegmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.EIPSegment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.EIPSegment> {
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
        private final com.aliyun.ros.cdk.vpc.EIPSegmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.EIPSegmentProps.Builder();
        }

        /**
         * Property eipMask: The mask of the contiguous EIP group.
         * <p>
         * Valid values:
         * 28: 16 contiguous EIPs are allocated for one call.
         * 27: 32 contiguous EIPs are allocated for one call.
         * 26: 64 contiguous EIPs are allocated for one call.
         * 25: 128 contiguous EIPs are allocated for one call.
         * 24: 256 contiguous EIPs are allocated for one call.
         * Note The actual number of assigned EIPs may be less than the expected number because one,
         * three, or four EIPs may be reserved.
         * <p>
         * @return {@code this}
         * @param eipMask Property eipMask: The mask of the contiguous EIP group. This parameter is required.
         */
        public Builder eipMask(final java.lang.Number eipMask) {
            this.props.eipMask(eipMask);
            return this;
        }
        /**
         * Property eipMask: The mask of the contiguous EIP group.
         * <p>
         * Valid values:
         * 28: 16 contiguous EIPs are allocated for one call.
         * 27: 32 contiguous EIPs are allocated for one call.
         * 26: 64 contiguous EIPs are allocated for one call.
         * 25: 128 contiguous EIPs are allocated for one call.
         * 24: 256 contiguous EIPs are allocated for one call.
         * Note The actual number of assigned EIPs may be less than the expected number because one,
         * three, or four EIPs may be reserved.
         * <p>
         * @return {@code this}
         * @param eipMask Property eipMask: The mask of the contiguous EIP group. This parameter is required.
         */
        public Builder eipMask(final com.aliyun.ros.cdk.core.IResolvable eipMask) {
            this.props.eipMask(eipMask);
            return this;
        }

        /**
         * Property bandwidth: The maximum bandwidth of the contiguous EIPs.
         * <p>
         * Unit: Mbit/s. Default value: 5.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum bandwidth of the contiguous EIPs. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The maximum bandwidth of the contiguous EIPs.
         * <p>
         * Unit: Mbit/s. Default value: 5.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum bandwidth of the contiguous EIPs. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property internetChargeType: The metering method of the contiguous EIPs.
         * <p>
         * Valid values:
         * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
         * PayByTraffic: Fees are charged based on data transfer.
         * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method of the contiguous EIPs. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The metering method of the contiguous EIPs.
         * <p>
         * Valid values:
         * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
         * PayByTraffic: Fees are charged based on data transfer.
         * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method of the contiguous EIPs. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property netmode: The network type.
         * <p>
         * Valid values:
         * public: the Internet. This is the default value. After contiguous EIPs are associated with
         * cloud resources, the cloud resources can access the Internet by using the EIPs.
         * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
         * cloud resources can access the hybrid cloud by using the EIPs.
         * Note This network type is available only to users who are added to the whitelist. To use
         * this network type, contact your customer manager.
         * <p>
         * @return {@code this}
         * @param netmode Property netmode: The network type. This parameter is required.
         */
        public Builder netmode(final java.lang.String netmode) {
            this.props.netmode(netmode);
            return this;
        }
        /**
         * Property netmode: The network type.
         * <p>
         * Valid values:
         * public: the Internet. This is the default value. After contiguous EIPs are associated with
         * cloud resources, the cloud resources can access the Internet by using the EIPs.
         * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
         * cloud resources can access the hybrid cloud by using the EIPs.
         * Note This network type is available only to users who are added to the whitelist. To use
         * this network type, contact your customer manager.
         * <p>
         * @return {@code this}
         * @param netmode Property netmode: The network type. This parameter is required.
         */
        public Builder netmode(final com.aliyun.ros.cdk.core.IResolvable netmode) {
            this.props.netmode(netmode);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the EIPs belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the EIPs belong. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the EIPs belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the EIPs belong. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.EIPSegment}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.EIPSegment build() {
            return new com.aliyun.ros.cdk.vpc.EIPSegment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
