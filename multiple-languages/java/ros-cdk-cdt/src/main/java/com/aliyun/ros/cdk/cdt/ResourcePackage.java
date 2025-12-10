package com.aliyun.ros.cdk.cdt;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CDT::ResourcePackage</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.064Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdt.$Module.class, fqn = "@alicloud/ros-cdk-cdt.ResourcePackage")
public class ResourcePackage extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cdt.IResourcePackage {

    protected ResourcePackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourcePackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ResourcePackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdt.ResourcePackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ResourcePackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdt.ResourcePackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the specified instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The ID of the specified order.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdt.ResourcePackageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cdt.ResourcePackageProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cdt.ResourcePackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cdt.ResourcePackage> {
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
        private final com.aliyun.ros.cdk.cdt.ResourcePackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cdt.ResourcePackageProps.Builder();
        }

        /**
         * Property capacity: The capacity of the specified CDT resource package.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The capacity of the specified CDT resource package. This parameter is required.
         */
        public Builder capacity(final java.lang.Number capacity) {
            this.props.capacity(capacity);
            return this;
        }
        /**
         * Property capacity: The capacity of the specified CDT resource package.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The capacity of the specified CDT resource package. This parameter is required.
         */
        public Builder capacity(final com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.props.capacity(capacity);
            return this;
        }

        /**
         * Property pack: The pack of the specified CDT resource package.
         * <p>
         * It can be obtained from the <code>components</code> field in the payload of the <code>getPrice</code> network request on the CDT common buy page.
         * <p>
         * @return {@code this}
         * @param pack Property pack: The pack of the specified CDT resource package. This parameter is required.
         */
        public Builder pack(final java.lang.String pack) {
            this.props.pack(pack);
            return this;
        }
        /**
         * Property pack: The pack of the specified CDT resource package.
         * <p>
         * It can be obtained from the <code>components</code> field in the payload of the <code>getPrice</code> network request on the CDT common buy page.
         * <p>
         * @return {@code this}
         * @param pack Property pack: The pack of the specified CDT resource package. This parameter is required.
         */
        public Builder pack(final com.aliyun.ros.cdk.core.IResolvable pack) {
            this.props.pack(pack);
            return this;
        }

        /**
         * Property region: The region of the specified CDT resource package.
         * <p>
         * @return {@code this}
         * @param region Property region: The region of the specified CDT resource package. This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * Property region: The region of the specified CDT resource package.
         * <p>
         * @return {@code this}
         * @param region Property region: The region of the specified CDT resource package. This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * Property isp: The ISP of the specified CDT resource package.
         * <p>
         * @return {@code this}
         * @param isp Property isp: The ISP of the specified CDT resource package. This parameter is required.
         */
        public Builder isp(final java.lang.String isp) {
            this.props.isp(isp);
            return this;
        }
        /**
         * Property isp: The ISP of the specified CDT resource package.
         * <p>
         * @return {@code this}
         * @param isp Property isp: The ISP of the specified CDT resource package. This parameter is required.
         */
        public Builder isp(final com.aliyun.ros.cdk.core.IResolvable isp) {
            this.props.isp(isp);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cdt.ResourcePackage}.
         */
        @Override
        public com.aliyun.ros.cdk.cdt.ResourcePackage build() {
            return new com.aliyun.ros.cdk.cdt.ResourcePackage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
