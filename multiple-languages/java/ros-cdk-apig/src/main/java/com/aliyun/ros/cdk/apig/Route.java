package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::Route</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.677Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.Route")
public class Route extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IRoute {

    protected Route(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Route(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Route(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RouteProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Route(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RouteProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Backend: Backend services.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackend() {
        return software.amazon.jsii.Kernel.get(this, "attrBackend", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of route resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainInfos: Domain items.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainInfos() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentInfo: Environment information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Match: The match rule of route resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatch() {
        return software.amazon.jsii.Kernel.get(this, "attrMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RouteId: The ID of route resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RouteName: The name of the route.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RouteProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.RouteProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.Route}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.Route> {
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
        private final com.aliyun.ros.cdk.apig.RouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.RouteProps.Builder();
        }

        /**
         * Property backend: Backend service configuration for routing.
         * <p>
         * @return {@code this}
         * @param backend Property backend: Backend service configuration for routing. This parameter is required.
         */
        public Builder backend(final com.aliyun.ros.cdk.core.IResolvable backend) {
            this.props.backend(backend);
            return this;
        }
        /**
         * Property backend: Backend service configuration for routing.
         * <p>
         * @return {@code this}
         * @param backend Property backend: Backend service configuration for routing. This parameter is required.
         */
        public Builder backend(final com.aliyun.ros.cdk.apig.RosRoute.BackendProperty backend) {
            this.props.backend(backend);
            return this;
        }

        /**
         * Property environmentInfo: The information if the environment.
         * <p>
         * @return {@code this}
         * @param environmentInfo Property environmentInfo: The information if the environment. This parameter is required.
         */
        public Builder environmentInfo(final com.aliyun.ros.cdk.core.IResolvable environmentInfo) {
            this.props.environmentInfo(environmentInfo);
            return this;
        }
        /**
         * Property environmentInfo: The information if the environment.
         * <p>
         * @return {@code this}
         * @param environmentInfo Property environmentInfo: The information if the environment. This parameter is required.
         */
        public Builder environmentInfo(final com.aliyun.ros.cdk.apig.RosRoute.EnvironmentInfoProperty environmentInfo) {
            this.props.environmentInfo(environmentInfo);
            return this;
        }

        /**
         * Property httpApiId: The ID of the API.
         * <p>
         * @return {@code this}
         * @param httpApiId Property httpApiId: The ID of the API. This parameter is required.
         */
        public Builder httpApiId(final java.lang.String httpApiId) {
            this.props.httpApiId(httpApiId);
            return this;
        }
        /**
         * Property httpApiId: The ID of the API.
         * <p>
         * @return {@code this}
         * @param httpApiId Property httpApiId: The ID of the API. This parameter is required.
         */
        public Builder httpApiId(final com.aliyun.ros.cdk.core.IResolvable httpApiId) {
            this.props.httpApiId(httpApiId);
            return this;
        }

        /**
         * Property match: The match rule of route resource.
         * <p>
         * @return {@code this}
         * @param match Property match: The match rule of route resource. This parameter is required.
         */
        public Builder match(final com.aliyun.ros.cdk.core.IResolvable match) {
            this.props.match(match);
            return this;
        }
        /**
         * Property match: The match rule of route resource.
         * <p>
         * @return {@code this}
         * @param match Property match: The match rule of route resource. This parameter is required.
         */
        public Builder match(final com.aliyun.ros.cdk.apig.RosRoute.MatchProperty match) {
            this.props.match(match);
            return this;
        }

        /**
         * Property routeName: The name of the route.
         * <p>
         * @return {@code this}
         * @param routeName Property routeName: The name of the route. This parameter is required.
         */
        public Builder routeName(final java.lang.String routeName) {
            this.props.routeName(routeName);
            return this;
        }
        /**
         * Property routeName: The name of the route.
         * <p>
         * @return {@code this}
         * @param routeName Property routeName: The name of the route. This parameter is required.
         */
        public Builder routeName(final com.aliyun.ros.cdk.core.IResolvable routeName) {
            this.props.routeName(routeName);
            return this;
        }

        /**
         * Property description: The description of route.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of route. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of route.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of route. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property domainIds: The list of domain name IDs.
         * <p>
         * @return {@code this}
         * @param domainIds Property domainIds: The list of domain name IDs. This parameter is required.
         */
        public Builder domainIds(final com.aliyun.ros.cdk.core.IResolvable domainIds) {
            this.props.domainIds(domainIds);
            return this;
        }
        /**
         * Property domainIds: The list of domain name IDs.
         * <p>
         * @return {@code this}
         * @param domainIds Property domainIds: The list of domain name IDs. This parameter is required.
         */
        public Builder domainIds(final java.util.List<? extends java.lang.Object> domainIds) {
            this.props.domainIds(domainIds);
            return this;
        }

        /**
         * Property domainInfos: Domain items.
         * <p>
         * @return {@code this}
         * @param domainInfos Property domainInfos: Domain items. This parameter is required.
         */
        public Builder domainInfos(final com.aliyun.ros.cdk.core.IResolvable domainInfos) {
            this.props.domainInfos(domainInfos);
            return this;
        }
        /**
         * Property domainInfos: Domain items.
         * <p>
         * @return {@code this}
         * @param domainInfos Property domainInfos: Domain items. This parameter is required.
         */
        public Builder domainInfos(final java.util.List<? extends java.lang.Object> domainInfos) {
            this.props.domainInfos(domainInfos);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.Route}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.Route build() {
            return new com.aliyun.ros.cdk.apig.Route(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
