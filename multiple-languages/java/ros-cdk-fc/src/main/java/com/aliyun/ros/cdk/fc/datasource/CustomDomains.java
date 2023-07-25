package com.aliyun.ros.cdk.fc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::FC::CustomDomains</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.436Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.datasource.CustomDomains")
public class CustomDomains extends com.aliyun.ros.cdk.core.Resource {

    protected CustomDomains(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomDomains(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::FC::CustomDomains</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public CustomDomains(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.datasource.CustomDomainsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::FC::CustomDomains</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public CustomDomains(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.datasource.CustomDomainsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::FC::CustomDomains</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public CustomDomains(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CustomDomains: The list of custom_domain.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCustomDomains() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomDomains", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DomainNames: The list of custom_domain names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainNames() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.datasource.CustomDomains}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.datasource.CustomDomains> {
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
        private com.aliyun.ros.cdk.fc.datasource.CustomDomainsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property prefix: Qualified returned custom domain names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned custom domain names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned custom domain names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final java.lang.String prefix) {
            this.props().prefix(prefix);
            return this;
        }
        /**
         * Property prefix: Qualified returned custom domain names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned custom domain names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned custom domain names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.props().prefix(prefix);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.datasource.CustomDomains}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.datasource.CustomDomains build() {
            return new com.aliyun.ros.cdk.fc.datasource.CustomDomains(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.fc.datasource.CustomDomainsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.fc.datasource.CustomDomainsProps.Builder();
            }
            return this.props;
        }
    }
}
