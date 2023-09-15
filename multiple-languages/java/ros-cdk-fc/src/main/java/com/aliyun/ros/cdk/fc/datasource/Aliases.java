package com.aliyun.ros.cdk.fc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::FC::Aliases</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:48.905Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.datasource.Aliases")
public class Aliases extends com.aliyun.ros.cdk.core.Resource {

    protected Aliases(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Aliases(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::FC::Aliases</code>.
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
    public Aliases(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.datasource.AliasesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::FC::Aliases</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Aliases(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.datasource.AliasesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Aliases: The list of aliases.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAliases() {
        return software.amazon.jsii.Kernel.get(this, "attrAliases", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AliasNames: The list of alias names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAliasNames() {
        return software.amazon.jsii.Kernel.get(this, "attrAliasNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.datasource.Aliases}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.datasource.Aliases> {
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
        private final com.aliyun.ros.cdk.fc.datasource.AliasesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.datasource.AliasesProps.Builder();
        }

        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property prefix: Qualified returned alias names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned alias names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned alias names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final java.lang.String prefix) {
            this.props.prefix(prefix);
            return this;
        }
        /**
         * Property prefix: Qualified returned alias names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned alias names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned alias names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.props.prefix(prefix);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.datasource.Aliases}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.datasource.Aliases build() {
            return new com.aliyun.ros.cdk.fc.datasource.Aliases(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
