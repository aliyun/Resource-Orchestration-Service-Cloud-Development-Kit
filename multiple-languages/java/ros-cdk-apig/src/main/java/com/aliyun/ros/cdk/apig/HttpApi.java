package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::HttpApi</code>, which is used to create an HTTP API.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.511Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.HttpApi")
public class HttpApi extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IHttpApi {

    protected HttpApi(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HttpApi(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HttpApi(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HttpApi(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BasePath: The base path of the API.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBasePath() {
        return software.amazon.jsii.Kernel.get(this, "attrBasePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: Description of API.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Environments: Published Environmental Information of the API.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironments() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpApiId: The ID of the API.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpApiName: The name of the API.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiName() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Protocols: List of API Access Protocols.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocols() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The type of HTTP API.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.HttpApiProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.HttpApi}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.HttpApi> {
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
        private final com.aliyun.ros.cdk.apig.HttpApiProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.HttpApiProps.Builder();
        }

        /**
         * Property httpApiName: The name of the API.
         * <p>
         * @return {@code this}
         * @param httpApiName Property httpApiName: The name of the API. This parameter is required.
         */
        public Builder httpApiName(final java.lang.String httpApiName) {
            this.props.httpApiName(httpApiName);
            return this;
        }
        /**
         * Property httpApiName: The name of the API.
         * <p>
         * @return {@code this}
         * @param httpApiName Property httpApiName: The name of the API. This parameter is required.
         */
        public Builder httpApiName(final com.aliyun.ros.cdk.core.IResolvable httpApiName) {
            this.props.httpApiName(httpApiName);
            return this;
        }

        /**
         * Property protocols: List of API Access Protocols.
         * <p>
         * @return {@code this}
         * @param protocols Property protocols: List of API Access Protocols. This parameter is required.
         */
        public Builder protocols(final com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.props.protocols(protocols);
            return this;
        }
        /**
         * Property protocols: List of API Access Protocols.
         * <p>
         * @return {@code this}
         * @param protocols Property protocols: List of API Access Protocols. This parameter is required.
         */
        public Builder protocols(final java.util.List<? extends java.lang.Object> protocols) {
            this.props.protocols(protocols);
            return this;
        }

        /**
         * Property basePath: The base path of the API should start with a /.
         * <p>
         * @return {@code this}
         * @param basePath Property basePath: The base path of the API should start with a /. This parameter is required.
         */
        public Builder basePath(final java.lang.String basePath) {
            this.props.basePath(basePath);
            return this;
        }
        /**
         * Property basePath: The base path of the API should start with a /.
         * <p>
         * @return {@code this}
         * @param basePath Property basePath: The base path of the API should start with a /. This parameter is required.
         */
        public Builder basePath(final com.aliyun.ros.cdk.core.IResolvable basePath) {
            this.props.basePath(basePath);
            return this;
        }

        /**
         * Property description: Description of API.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of API. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of API.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of API. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.HttpApi}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.HttpApi build() {
            return new com.aliyun.ros.cdk.apig.HttpApi(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
