package com.aliyun.ros.cdk.maxcompute;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MaxCompute::Package</code>, which is used to create a package.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.854Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.Package")
public class Package extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.maxcompute.IPackage {

    protected Package(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Package(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Package(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.PackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Package(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.PackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PackageName: The name of the project package.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageName() {
        return software.amazon.jsii.Kernel.get(this, "attrPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProjectName: The name of the MaxCompute project.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.PackageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.maxcompute.PackageProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.maxcompute.Package}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.maxcompute.Package> {
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
        private final com.aliyun.ros.cdk.maxcompute.PackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.maxcompute.PackageProps.Builder();
        }

        /**
         * Property packageName: The name of the project package.
         * <p>
         * @return {@code this}
         * @param packageName Property packageName: The name of the project package. This parameter is required.
         */
        public Builder packageName(final java.lang.String packageName) {
            this.props.packageName(packageName);
            return this;
        }
        /**
         * Property packageName: The name of the project package.
         * <p>
         * @return {@code this}
         * @param packageName Property packageName: The name of the project package. This parameter is required.
         */
        public Builder packageName(final com.aliyun.ros.cdk.core.IResolvable packageName) {
            this.props.packageName(packageName);
            return this;
        }

        /**
         * Property projectName: The name of the MaxCompute project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the MaxCompute project. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The name of the MaxCompute project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the MaxCompute project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property acl: The access-control list (ACL).
         * <p>
         * @return {@code this}
         * @param acl Property acl: The access-control list (ACL). This parameter is required.
         */
        public Builder acl(final com.aliyun.ros.cdk.core.IResolvable acl) {
            this.props.acl(acl);
            return this;
        }
        /**
         * Property acl: The access-control list (ACL).
         * <p>
         * @return {@code this}
         * @param acl Property acl: The access-control list (ACL). This parameter is required.
         */
        public Builder acl(final com.aliyun.ros.cdk.maxcompute.RosPackage.AclProperty acl) {
            this.props.acl(acl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.maxcompute.Package}.
         */
        @Override
        public com.aliyun.ros.cdk.maxcompute.Package build() {
            return new com.aliyun.ros.cdk.maxcompute.Package(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
