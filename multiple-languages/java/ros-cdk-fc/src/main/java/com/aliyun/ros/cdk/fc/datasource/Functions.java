package com.aliyun.ros.cdk.fc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::FC::Functions</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.438Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.datasource.Functions")
public class Functions extends com.aliyun.ros.cdk.core.Resource {

    protected Functions(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Functions(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::FC::Functions</code>.
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
    public Functions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.datasource.FunctionsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::FC::Functions</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Functions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.datasource.FunctionsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FunctionNames: The list of function names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionNames() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Functions: The list of functions.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctions() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.datasource.Functions}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.datasource.Functions> {
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
        private final com.aliyun.ros.cdk.fc.datasource.FunctionsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.datasource.FunctionsProps.Builder();
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
         * Property prefix: Qualified returned function names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned function names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned function names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final java.lang.String prefix) {
            this.props.prefix(prefix);
            return this;
        }
        /**
         * Property prefix: Qualified returned function names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned function names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned function names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.props.prefix(prefix);
            return this;
        }

        /**
         * Property qualifier: The service version, which can be version ID or alias name.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: The service version, which can be version ID or alias name. This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * Property qualifier: The service version, which can be version ID or alias name.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: The service version, which can be version ID or alias name. This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.datasource.Functions}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.datasource.Functions build() {
            return new com.aliyun.ros.cdk.fc.datasource.Functions(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
