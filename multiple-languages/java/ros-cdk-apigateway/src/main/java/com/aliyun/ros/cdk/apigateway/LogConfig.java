package com.aliyun.ros.cdk.apigateway;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ApiGateway::LogConfig</code>, which is used to create a log configuration.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.766Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.LogConfig")
public class LogConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apigateway.ILogConfig {

    protected LogConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LogConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LogConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.LogConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LogConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.LogConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SlsLogStore: Logstore name of SLS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsLogStore() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsLogStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SlsProject: Project name of SLS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsProject() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.LogConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.LogConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.LogConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.LogConfig> {
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
        private final com.aliyun.ros.cdk.apigateway.LogConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.LogConfigProps.Builder();
        }

        /**
         * Property slsLogStore: Logstore name of SLS.
         * <p>
         * @return {@code this}
         * @param slsLogStore Property slsLogStore: Logstore name of SLS. This parameter is required.
         */
        public Builder slsLogStore(final java.lang.String slsLogStore) {
            this.props.slsLogStore(slsLogStore);
            return this;
        }
        /**
         * Property slsLogStore: Logstore name of SLS.
         * <p>
         * @return {@code this}
         * @param slsLogStore Property slsLogStore: Logstore name of SLS. This parameter is required.
         */
        public Builder slsLogStore(final com.aliyun.ros.cdk.core.IResolvable slsLogStore) {
            this.props.slsLogStore(slsLogStore);
            return this;
        }

        /**
         * Property slsProject: Project name of SLS.
         * <p>
         * @return {@code this}
         * @param slsProject Property slsProject: Project name of SLS. This parameter is required.
         */
        public Builder slsProject(final java.lang.String slsProject) {
            this.props.slsProject(slsProject);
            return this;
        }
        /**
         * Property slsProject: Project name of SLS.
         * <p>
         * @return {@code this}
         * @param slsProject Property slsProject: Project name of SLS. This parameter is required.
         */
        public Builder slsProject(final com.aliyun.ros.cdk.core.IResolvable slsProject) {
            this.props.slsProject(slsProject);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.LogConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.LogConfig build() {
            return new com.aliyun.ros.cdk.apigateway.LogConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
