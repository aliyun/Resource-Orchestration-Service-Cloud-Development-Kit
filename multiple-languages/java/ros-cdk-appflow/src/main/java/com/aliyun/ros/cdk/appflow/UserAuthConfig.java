package com.aliyun.ros.cdk.appflow;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AppFlow::UserAuthConfig</code>, which is used to create configurations for a user credential.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.926Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.UserAuthConfig")
public class UserAuthConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.appflow.IUserAuthConfig {

    protected UserAuthConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserAuthConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public UserAuthConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.UserAuthConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public UserAuthConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.UserAuthConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AuthConfig: AuthConfig.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AuthConfigId: The id of the config.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.UserAuthConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.appflow.UserAuthConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.appflow.UserAuthConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.appflow.UserAuthConfig> {
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
        private final com.aliyun.ros.cdk.appflow.UserAuthConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.appflow.UserAuthConfigProps.Builder();
        }

        /**
         * Property authConfig: AuthConfig.
         * <p>
         * @return {@code this}
         * @param authConfig Property authConfig: AuthConfig. This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }
        /**
         * Property authConfig: AuthConfig.
         * <p>
         * @return {@code this}
         * @param authConfig Property authConfig: AuthConfig. This parameter is required.
         */
        public Builder authConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }

        /**
         * Property authConfigName: The name of the config.
         * <p>
         * @return {@code this}
         * @param authConfigName Property authConfigName: The name of the config. This parameter is required.
         */
        public Builder authConfigName(final java.lang.String authConfigName) {
            this.props.authConfigName(authConfigName);
            return this;
        }
        /**
         * Property authConfigName: The name of the config.
         * <p>
         * @return {@code this}
         * @param authConfigName Property authConfigName: The name of the config. This parameter is required.
         */
        public Builder authConfigName(final com.aliyun.ros.cdk.core.IResolvable authConfigName) {
            this.props.authConfigName(authConfigName);
            return this;
        }

        /**
         * Property connectorId: The id of connector.
         * <p>
         * @return {@code this}
         * @param connectorId Property connectorId: The id of connector. This parameter is required.
         */
        public Builder connectorId(final java.lang.String connectorId) {
            this.props.connectorId(connectorId);
            return this;
        }
        /**
         * Property connectorId: The id of connector.
         * <p>
         * @return {@code this}
         * @param connectorId Property connectorId: The id of connector. This parameter is required.
         */
        public Builder connectorId(final com.aliyun.ros.cdk.core.IResolvable connectorId) {
            this.props.connectorId(connectorId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.appflow.UserAuthConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.appflow.UserAuthConfig build() {
            return new com.aliyun.ros.cdk.appflow.UserAuthConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
