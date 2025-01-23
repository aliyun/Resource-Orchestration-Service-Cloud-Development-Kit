package com.aliyun.ros.cdk.elasticsearchserverless;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ElasticSearchServerless::App</code>, which is used to create an Elasticsearch serverless application.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:39.144Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.App")
public class App extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.elasticsearchserverless.IApp {

    protected App(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected App(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public App(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.AppProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public App(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.AppProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The Id of the ElasticSearch serverless instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateESDomain: The private network domain of the app.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateEsDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateEsDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateKibanaDomain: The private network kibana domain of the app.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicESDomain: The public network domain of the app.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicEsDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicEsDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicKibanaDomain: The public network kibana domain of the app.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.AppProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearchserverless.AppProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.elasticsearchserverless.App}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.elasticsearchserverless.App> {
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
        private final com.aliyun.ros.cdk.elasticsearchserverless.AppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.elasticsearchserverless.AppProps.Builder();
        }

        /**
         * Property appName: The name of the elastic search serverless version app.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the elastic search serverless version app. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: The name of the elastic search serverless version app.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the elastic search serverless version app. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property authentication: The authentication of the app.
         * <p>
         * Currently only supports specifying passwords for initial users
         * <p>
         * @return {@code this}
         * @param authentication Property authentication: The authentication of the app. This parameter is required.
         */
        public Builder authentication(final com.aliyun.ros.cdk.core.IResolvable authentication) {
            this.props.authentication(authentication);
            return this;
        }
        /**
         * Property authentication: The authentication of the app.
         * <p>
         * Currently only supports specifying passwords for initial users
         * <p>
         * @return {@code this}
         * @param authentication Property authentication: The authentication of the app. This parameter is required.
         */
        public Builder authentication(final com.aliyun.ros.cdk.elasticsearchserverless.RosApp.AuthenticationProperty authentication) {
            this.props.authentication(authentication);
            return this;
        }

        /**
         * Property quotaInfo: The quota info of the app.
         * <p>
         * @return {@code this}
         * @param quotaInfo Property quotaInfo: The quota info of the app. This parameter is required.
         */
        public Builder quotaInfo(final com.aliyun.ros.cdk.core.IResolvable quotaInfo) {
            this.props.quotaInfo(quotaInfo);
            return this;
        }
        /**
         * Property quotaInfo: The quota info of the app.
         * <p>
         * @return {@code this}
         * @param quotaInfo Property quotaInfo: The quota info of the app. This parameter is required.
         */
        public Builder quotaInfo(final com.aliyun.ros.cdk.elasticsearchserverless.RosApp.QuotaInfoProperty quotaInfo) {
            this.props.quotaInfo(quotaInfo);
            return this;
        }

        /**
         * Property appVersion: The version of the app.
         * <p>
         * @return {@code this}
         * @param appVersion Property appVersion: The version of the app. This parameter is required.
         */
        public Builder appVersion(final java.lang.String appVersion) {
            this.props.appVersion(appVersion);
            return this;
        }
        /**
         * Property appVersion: The version of the app.
         * <p>
         * @return {@code this}
         * @param appVersion Property appVersion: The version of the app. This parameter is required.
         */
        public Builder appVersion(final com.aliyun.ros.cdk.core.IResolvable appVersion) {
            this.props.appVersion(appVersion);
            return this;
        }

        /**
         * Property description: The description of the app.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the app. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the app.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the app. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property network: The public network of the app.
         * <p>
         * @return {@code this}
         * @param network Property network: The public network of the app. This parameter is required.
         */
        public Builder network(final com.aliyun.ros.cdk.core.IResolvable network) {
            this.props.network(network);
            return this;
        }
        /**
         * Property network: The public network of the app.
         * <p>
         * @return {@code this}
         * @param network Property network: The public network of the app. This parameter is required.
         */
        public Builder network(final java.util.List<? extends java.lang.Object> network) {
            this.props.network(network);
            return this;
        }

        /**
         * Property privateNetwork: The private network of the app.
         * <p>
         * @return {@code this}
         * @param privateNetwork Property privateNetwork: The private network of the app. This parameter is required.
         */
        public Builder privateNetwork(final com.aliyun.ros.cdk.core.IResolvable privateNetwork) {
            this.props.privateNetwork(privateNetwork);
            return this;
        }
        /**
         * Property privateNetwork: The private network of the app.
         * <p>
         * @return {@code this}
         * @param privateNetwork Property privateNetwork: The private network of the app. This parameter is required.
         */
        public Builder privateNetwork(final java.util.List<? extends java.lang.Object> privateNetwork) {
            this.props.privateNetwork(privateNetwork);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.elasticsearchserverless.App}.
         */
        @Override
        public com.aliyun.ros.cdk.elasticsearchserverless.App build() {
            return new com.aliyun.ros.cdk.elasticsearchserverless.App(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
