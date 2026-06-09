package com.aliyun.ros.cdk.eventbridge;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EventBridge::ApiDestination</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:01:25.380Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.ApiDestination")
public class ApiDestination extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.eventbridge.IApiDestination {

    protected ApiDestination(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ApiDestination(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ApiDestination(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ApiDestinationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ApiDestination(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ApiDestinationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApiDestinationName: The name of the api.
     * <p>
     * The maximum length is 127 characters. Minimum length 2 characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiDestinationName() {
        return software.amazon.jsii.Kernel.get(this, "attrApiDestinationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionName: The connection configuration name.
     * <p>
     * The maximum length is 127 characters. Minimum length 2 characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionName() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the api.
     * <p>
     * It must be no more than 255 characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpApiParameters: Configuration information for API endpoints.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ApiDestinationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eventbridge.ApiDestinationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.eventbridge.ApiDestination}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eventbridge.ApiDestination> {
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
        private final com.aliyun.ros.cdk.eventbridge.ApiDestinationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eventbridge.ApiDestinationProps.Builder();
        }

        /**
         * Property apiDestinationName: The name of the api.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         * <p>
         * @return {@code this}
         * @param apiDestinationName Property apiDestinationName: The name of the api. This parameter is required.
         */
        public Builder apiDestinationName(final java.lang.String apiDestinationName) {
            this.props.apiDestinationName(apiDestinationName);
            return this;
        }
        /**
         * Property apiDestinationName: The name of the api.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         * <p>
         * @return {@code this}
         * @param apiDestinationName Property apiDestinationName: The name of the api. This parameter is required.
         */
        public Builder apiDestinationName(final com.aliyun.ros.cdk.core.IResolvable apiDestinationName) {
            this.props.apiDestinationName(apiDestinationName);
            return this;
        }

        /**
         * Property connectionName: The connection configuration name.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         * <p>
         * <ul>
         * <li>Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param connectionName Property connectionName: The connection configuration name. This parameter is required.
         */
        public Builder connectionName(final java.lang.String connectionName) {
            this.props.connectionName(connectionName);
            return this;
        }
        /**
         * Property connectionName: The connection configuration name.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         * <p>
         * <ul>
         * <li>Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param connectionName Property connectionName: The connection configuration name. This parameter is required.
         */
        public Builder connectionName(final com.aliyun.ros.cdk.core.IResolvable connectionName) {
            this.props.connectionName(connectionName);
            return this;
        }

        /**
         * Property httpApiParameters: Configuration information for API endpoints.
         * <p>
         * @return {@code this}
         * @param httpApiParameters Property httpApiParameters: Configuration information for API endpoints. This parameter is required.
         */
        public Builder httpApiParameters(final com.aliyun.ros.cdk.core.IResolvable httpApiParameters) {
            this.props.httpApiParameters(httpApiParameters);
            return this;
        }
        /**
         * Property httpApiParameters: Configuration information for API endpoints.
         * <p>
         * @return {@code this}
         * @param httpApiParameters Property httpApiParameters: Configuration information for API endpoints. This parameter is required.
         */
        public Builder httpApiParameters(final com.aliyun.ros.cdk.eventbridge.RosApiDestination.HttpApiParametersProperty httpApiParameters) {
            this.props.httpApiParameters(httpApiParameters);
            return this;
        }

        /**
         * Property description: The description of the api.
         * <p>
         * It must be no more than 255 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the api. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the api.
         * <p>
         * It must be no more than 255 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the api. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eventbridge.ApiDestination}.
         */
        @Override
        public com.aliyun.ros.cdk.eventbridge.ApiDestination build() {
            return new com.aliyun.ros.cdk.eventbridge.ApiDestination(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
