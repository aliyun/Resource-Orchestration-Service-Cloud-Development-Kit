package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::ApiAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.ApiAttachment")
public class ApiAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected ApiAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ApiAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ApiAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ApiAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ApiAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ApiAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EnvironmentId: The ID of the environment to which the API is to deploy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HttpApiId: The ID of the HTTP API.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteId: The route ID.
     * <p>
     * When publishing an HTTP API route, it must be passed in.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ApiAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.ApiAttachmentProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ApiAttachmentProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.ApiAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.ApiAttachment> {
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
        private final com.aliyun.ros.cdk.apig.ApiAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.ApiAttachmentProps.Builder();
        }

        /**
         * Property backendScene: API release scenario.
         * <p>
         * @return {@code this}
         * @param backendScene Property backendScene: API release scenario. This parameter is required.
         */
        public Builder backendScene(final java.lang.String backendScene) {
            this.props.backendScene(backendScene);
            return this;
        }
        /**
         * Property backendScene: API release scenario.
         * <p>
         * @return {@code this}
         * @param backendScene Property backendScene: API release scenario. This parameter is required.
         */
        public Builder backendScene(final com.aliyun.ros.cdk.core.IResolvable backendScene) {
            this.props.backendScene(backendScene);
            return this;
        }

        /**
         * Property environmentId: The ID of the environment to which the API is to deploy.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the environment to which the API is to deploy. This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * Property environmentId: The ID of the environment to which the API is to deploy.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the environment to which the API is to deploy. This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * Property httpApiId: The ID of the HTTP API.
         * <p>
         * @return {@code this}
         * @param httpApiId Property httpApiId: The ID of the HTTP API. This parameter is required.
         */
        public Builder httpApiId(final java.lang.String httpApiId) {
            this.props.httpApiId(httpApiId);
            return this;
        }
        /**
         * Property httpApiId: The ID of the HTTP API.
         * <p>
         * @return {@code this}
         * @param httpApiId Property httpApiId: The ID of the HTTP API. This parameter is required.
         */
        public Builder httpApiId(final com.aliyun.ros.cdk.core.IResolvable httpApiId) {
            this.props.httpApiId(httpApiId);
            return this;
        }

        /**
         * Property serviceConfigs: Services associated with API publishing and their configurations.
         * <p>
         * @return {@code this}
         * @param serviceConfigs Property serviceConfigs: Services associated with API publishing and their configurations. This parameter is required.
         */
        public Builder serviceConfigs(final com.aliyun.ros.cdk.core.IResolvable serviceConfigs) {
            this.props.serviceConfigs(serviceConfigs);
            return this;
        }
        /**
         * Property serviceConfigs: Services associated with API publishing and their configurations.
         * <p>
         * @return {@code this}
         * @param serviceConfigs Property serviceConfigs: Services associated with API publishing and their configurations. This parameter is required.
         */
        public Builder serviceConfigs(final java.util.List<? extends java.lang.Object> serviceConfigs) {
            this.props.serviceConfigs(serviceConfigs);
            return this;
        }

        /**
         * Property description: The description of publication.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of publication. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of publication.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of publication. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property domainIds: The list of user domain names associated with API publishing.
         * <p>
         * @return {@code this}
         * @param domainIds Property domainIds: The list of user domain names associated with API publishing. This parameter is required.
         */
        public Builder domainIds(final com.aliyun.ros.cdk.core.IResolvable domainIds) {
            this.props.domainIds(domainIds);
            return this;
        }
        /**
         * Property domainIds: The list of user domain names associated with API publishing.
         * <p>
         * @return {@code this}
         * @param domainIds Property domainIds: The list of user domain names associated with API publishing. This parameter is required.
         */
        public Builder domainIds(final java.util.List<? extends java.lang.Object> domainIds) {
            this.props.domainIds(domainIds);
            return this;
        }

        /**
         * Property routeId: The route ID.
         * <p>
         * When publishing an HTTP API route, it must be passed in.
         * <p>
         * @return {@code this}
         * @param routeId Property routeId: The route ID. This parameter is required.
         */
        public Builder routeId(final java.lang.String routeId) {
            this.props.routeId(routeId);
            return this;
        }
        /**
         * Property routeId: The route ID.
         * <p>
         * When publishing an HTTP API route, it must be passed in.
         * <p>
         * @return {@code this}
         * @param routeId Property routeId: The route ID. This parameter is required.
         */
        public Builder routeId(final com.aliyun.ros.cdk.core.IResolvable routeId) {
            this.props.routeId(routeId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.ApiAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.ApiAttachment build() {
            return new com.aliyun.ros.cdk.apig.ApiAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
