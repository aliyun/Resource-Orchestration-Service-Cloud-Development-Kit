package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::CommonBandwidthPackages</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:18.605Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackages")
public class CommonBandwidthPackages extends com.aliyun.ros.cdk.core.Resource {

    protected CommonBandwidthPackages(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CommonBandwidthPackages(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CommonBandwidthPackages(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CommonBandwidthPackages(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public CommonBandwidthPackages(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommonBandwidthPackageIds() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommonBandwidthPackages() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackages", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackages}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackages> {
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
        private com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageId Property commonBandwidthPackageId: The ID of the Internet shared bandwidth. This parameter is required.
         */
        public Builder commonBandwidthPackageId(final java.lang.String commonBandwidthPackageId) {
            this.props().commonBandwidthPackageId(commonBandwidthPackageId);
            return this;
        }
        /**
         * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageId Property commonBandwidthPackageId: The ID of the Internet shared bandwidth. This parameter is required.
         */
        public Builder commonBandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageId) {
            this.props().commonBandwidthPackageId(commonBandwidthPackageId);
            return this;
        }

        /**
         * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageName Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder commonBandwidthPackageName(final java.lang.String commonBandwidthPackageName) {
            this.props().commonBandwidthPackageName(commonBandwidthPackageName);
            return this;
        }
        /**
         * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageName Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder commonBandwidthPackageName(final com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageName) {
            this.props().commonBandwidthPackageName(commonBandwidthPackageName);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackages}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackages build() {
            return new com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackages(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps.Builder();
            }
            return this.props;
        }
    }
}
