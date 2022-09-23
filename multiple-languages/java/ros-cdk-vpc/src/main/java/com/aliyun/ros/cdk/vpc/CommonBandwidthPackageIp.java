package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::CommonBandwidthPackageIp`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.816Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.CommonBandwidthPackageIp")
public class CommonBandwidthPackageIp extends com.aliyun.ros.cdk.core.Resource {

    protected CommonBandwidthPackageIp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CommonBandwidthPackageIp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackageIp`.
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
    public CommonBandwidthPackageIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIpProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackageIp`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CommonBandwidthPackageIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIpProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AllocationIds: All eip allocation ids of common bandwidth package.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllocationIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpAddresses: All eip addresses of common bandwidth package.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIp> {
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
        private final com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIpProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIpProps.Builder();
        }

        /**
         * Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param bandwidthPackageId Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder bandwidthPackageId(final java.lang.String bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }
        /**
         * Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param bandwidthPackageId Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder bandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }

        /**
         * Property eips: List of eip associated with the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param eips Property eips: List of eip associated with the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder eips(final com.aliyun.ros.cdk.core.IResolvable eips) {
            this.props.eips(eips);
            return this;
        }
        /**
         * Property eips: List of eip associated with the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param eips Property eips: List of eip associated with the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder eips(final java.util.List<? extends java.lang.Object> eips) {
            this.props.eips(eips);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIp}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIp build() {
            return new com.aliyun.ros.cdk.vpc.CommonBandwidthPackageIp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
