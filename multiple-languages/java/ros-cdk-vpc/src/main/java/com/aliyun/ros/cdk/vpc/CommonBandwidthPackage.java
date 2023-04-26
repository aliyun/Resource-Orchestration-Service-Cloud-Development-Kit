package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::CommonBandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:52.309Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.CommonBandwidthPackage")
public class CommonBandwidthPackage extends com.aliyun.ros.cdk.core.Resource {

    protected CommonBandwidthPackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CommonBandwidthPackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackage`.
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
    public CommonBandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CommonBandwidthPackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackage`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CommonBandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CommonBandwidthPackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.CommonBandwidthPackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.CommonBandwidthPackage> {
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
        private final com.aliyun.ros.cdk.vpc.CommonBandwidthPackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.CommonBandwidthPackageProps.Builder();
        }

        /**
         * Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance.
         * <p>
         * Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance.
         * <p>
         * Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property description: The description of the Internet Shared Bandwidth instance.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter,
         * and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the Internet Shared Bandwidth instance.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter,
         * and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property internetChargeType: The billing model of the Internet Shared Bandwidth instance.
         * <p>
         * Allowed values:
         * PayByBandwidth (default): Billed by bandwidth.
         * PayBy95: Charged at Enhanced 95.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The billing model of the Internet Shared Bandwidth instance.
         * <p>
         * Allowed values:
         * PayByBandwidth (default): Billed by bandwidth.
         * PayBy95: Charged at Enhanced 95.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property isp: Line type of EIP, value: BGP (multi-line).
         * <p>
         * @return {@code this}
         * @param isp Property isp: Line type of EIP, value: BGP (multi-line). This parameter is required.
         */
        public Builder isp(final java.lang.String isp) {
            this.props.isp(isp);
            return this;
        }
        /**
         * Property isp: Line type of EIP, value: BGP (multi-line).
         * <p>
         * @return {@code this}
         * @param isp Property isp: Line type of EIP, value: BGP (multi-line). This parameter is required.
         */
        public Builder isp(final com.aliyun.ros.cdk.core.IResolvable isp) {
            this.props.isp(isp);
            return this;
        }

        /**
         * Property name: The name of the Internet Shared Bandwidth instance.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
         * start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the Internet Shared Bandwidth instance.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
         * start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance.
         * <p>
         * Default to 100.
         * Note This parameter is only supported on the China site.
         * <p>
         * @return {@code this}
         * @param ratio Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder ratio(final java.lang.Number ratio) {
            this.props.ratio(ratio);
            return this;
        }
        /**
         * Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance.
         * <p>
         * Default to 100.
         * Note This parameter is only supported on the China site.
         * <p>
         * @return {@code this}
         * @param ratio Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder ratio(final com.aliyun.ros.cdk.core.IResolvable ratio) {
            this.props.ratio(ratio);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property zone: Zone Id.
         * <p>
         * @return {@code this}
         * @param zone Property zone: Zone Id. This parameter is required.
         */
        public Builder zone(final java.lang.String zone) {
            this.props.zone(zone);
            return this;
        }
        /**
         * Property zone: Zone Id.
         * <p>
         * @return {@code this}
         * @param zone Property zone: Zone Id. This parameter is required.
         */
        public Builder zone(final com.aliyun.ros.cdk.core.IResolvable zone) {
            this.props.zone(zone);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.CommonBandwidthPackage}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.CommonBandwidthPackage build() {
            return new com.aliyun.ros.cdk.vpc.CommonBandwidthPackage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
