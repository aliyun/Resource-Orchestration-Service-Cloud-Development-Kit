package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::GatewayRoute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.205Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.GatewayRoute")
public class GatewayRoute extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mse.IGatewayRoute {

    protected GatewayRoute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GatewayRoute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public GatewayRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayRouteProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public GatewayRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayRouteProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RouteId: The ID of the route.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayRouteProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.GatewayRouteProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.GatewayRoute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.GatewayRoute> {
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
        private final com.aliyun.ros.cdk.mse.GatewayRouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.GatewayRouteProps.Builder();
        }

        /**
         * Property domainIdList: The list of domain IDs in JSON format.
         * <p>
         * @return {@code this}
         * @param domainIdList Property domainIdList: The list of domain IDs in JSON format. This parameter is required.
         */
        public Builder domainIdList(final com.aliyun.ros.cdk.core.IResolvable domainIdList) {
            this.props.domainIdList(domainIdList);
            return this;
        }
        /**
         * Property domainIdList: The list of domain IDs in JSON format.
         * <p>
         * @return {@code this}
         * @param domainIdList Property domainIdList: The list of domain IDs in JSON format. This parameter is required.
         */
        public Builder domainIdList(final java.util.List<? extends java.lang.Object> domainIdList) {
            this.props.domainIdList(domainIdList);
            return this;
        }

        /**
         * Property gatewayUniqueId: The unique ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * Property gatewayUniqueId: The unique ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }

        /**
         * Property name: The name of the route.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the route. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the route.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the route. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property description: The description of the route.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the route. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the route.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the route. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property destinationType: The type of destination service.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Single: single service</li>
         * <li>Multiple: multiple services</li>
         * <li>VersionOriented: tag-based routing</li>
         * <li>Mock: mock response</li>
         * <li>Redirect: redirect</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destinationType Property destinationType: The type of destination service. This parameter is required.
         */
        public Builder destinationType(final java.lang.String destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }
        /**
         * Property destinationType: The type of destination service.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Single: single service</li>
         * <li>Multiple: multiple services</li>
         * <li>VersionOriented: tag-based routing</li>
         * <li>Mock: mock response</li>
         * <li>Redirect: redirect</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destinationType Property destinationType: The type of destination service. This parameter is required.
         */
        public Builder destinationType(final com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }

        /**
         * Property directResponseJson: Configuration for mock response.
         * <p>
         * @return {@code this}
         * @param directResponseJson Property directResponseJson: Configuration for mock response. This parameter is required.
         */
        public Builder directResponseJson(final com.aliyun.ros.cdk.core.IResolvable directResponseJson) {
            this.props.directResponseJson(directResponseJson);
            return this;
        }
        /**
         * Property directResponseJson: Configuration for mock response.
         * <p>
         * @return {@code this}
         * @param directResponseJson Property directResponseJson: Configuration for mock response. This parameter is required.
         */
        public Builder directResponseJson(final com.aliyun.ros.cdk.mse.RosGatewayRoute.DirectResponseJSONProperty directResponseJson) {
            this.props.directResponseJson(directResponseJson);
            return this;
        }

        /**
         * Property domainId: The ID of the domain.
         * <p>
         * @return {@code this}
         * @param domainId Property domainId: The ID of the domain. This parameter is required.
         */
        public Builder domainId(final java.lang.Number domainId) {
            this.props.domainId(domainId);
            return this;
        }
        /**
         * Property domainId: The ID of the domain.
         * <p>
         * @return {@code this}
         * @param domainId Property domainId: The ID of the domain. This parameter is required.
         */
        public Builder domainId(final com.aliyun.ros.cdk.core.IResolvable domainId) {
            this.props.domainId(domainId);
            return this;
        }

        /**
         * Property fallback: Whether to enable fallback service.
         * <p>
         * @return {@code this}
         * @param fallback Property fallback: Whether to enable fallback service. This parameter is required.
         */
        public Builder fallback(final java.lang.Boolean fallback) {
            this.props.fallback(fallback);
            return this;
        }
        /**
         * Property fallback: Whether to enable fallback service.
         * <p>
         * @return {@code this}
         * @param fallback Property fallback: Whether to enable fallback service. This parameter is required.
         */
        public Builder fallback(final com.aliyun.ros.cdk.core.IResolvable fallback) {
            this.props.fallback(fallback);
            return this;
        }

        /**
         * Property fallbackServices: The list of fallback services.
         * <p>
         * @return {@code this}
         * @param fallbackServices Property fallbackServices: The list of fallback services. This parameter is required.
         */
        public Builder fallbackServices(final com.aliyun.ros.cdk.core.IResolvable fallbackServices) {
            this.props.fallbackServices(fallbackServices);
            return this;
        }
        /**
         * Property fallbackServices: The list of fallback services.
         * <p>
         * @return {@code this}
         * @param fallbackServices Property fallbackServices: The list of fallback services. This parameter is required.
         */
        public Builder fallbackServices(final java.util.List<? extends java.lang.Object> fallbackServices) {
            this.props.fallbackServices(fallbackServices);
            return this;
        }

        /**
         * Property gatewayId: The ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the gateway. This parameter is required.
         */
        public Builder gatewayId(final java.lang.Number gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }
        /**
         * Property gatewayId: The ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the gateway. This parameter is required.
         */
        public Builder gatewayId(final com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }

        /**
         * Property policies: The JSON string of route policies.
         * <p>
         * @return {@code this}
         * @param policies Property policies: The JSON string of route policies. This parameter is required.
         */
        public Builder policies(final java.lang.String policies) {
            this.props.policies(policies);
            return this;
        }
        /**
         * Property policies: The JSON string of route policies.
         * <p>
         * @return {@code this}
         * @param policies Property policies: The JSON string of route policies. This parameter is required.
         */
        public Builder policies(final com.aliyun.ros.cdk.core.IResolvable policies) {
            this.props.policies(policies);
            return this;
        }

        /**
         * Property predicates: Matching rules for the route.
         * <p>
         * @return {@code this}
         * @param predicates Property predicates: Matching rules for the route. This parameter is required.
         */
        public Builder predicates(final com.aliyun.ros.cdk.core.IResolvable predicates) {
            this.props.predicates(predicates);
            return this;
        }
        /**
         * Property predicates: Matching rules for the route.
         * <p>
         * @return {@code this}
         * @param predicates Property predicates: Matching rules for the route. This parameter is required.
         */
        public Builder predicates(final com.aliyun.ros.cdk.mse.RosGatewayRoute.PredicatesProperty predicates) {
            this.props.predicates(predicates);
            return this;
        }

        /**
         * Property redirectJson: Configuration for redirect.
         * <p>
         * @return {@code this}
         * @param redirectJson Property redirectJson: Configuration for redirect. This parameter is required.
         */
        public Builder redirectJson(final com.aliyun.ros.cdk.core.IResolvable redirectJson) {
            this.props.redirectJson(redirectJson);
            return this;
        }
        /**
         * Property redirectJson: Configuration for redirect.
         * <p>
         * @return {@code this}
         * @param redirectJson Property redirectJson: Configuration for redirect. This parameter is required.
         */
        public Builder redirectJson(final com.aliyun.ros.cdk.mse.RosGatewayRoute.RedirectJSONProperty redirectJson) {
            this.props.redirectJson(redirectJson);
            return this;
        }

        /**
         * Property routeOrder: The order of the route.
         * <p>
         * Smaller values indicate higher priority.
         * <p>
         * @return {@code this}
         * @param routeOrder Property routeOrder: The order of the route. This parameter is required.
         */
        public Builder routeOrder(final java.lang.Number routeOrder) {
            this.props.routeOrder(routeOrder);
            return this;
        }
        /**
         * Property routeOrder: The order of the route.
         * <p>
         * Smaller values indicate higher priority.
         * <p>
         * @return {@code this}
         * @param routeOrder Property routeOrder: The order of the route. This parameter is required.
         */
        public Builder routeOrder(final com.aliyun.ros.cdk.core.IResolvable routeOrder) {
            this.props.routeOrder(routeOrder);
            return this;
        }

        /**
         * Property routeType: The type of the route.
         * <p>
         * Valid value: Op (control route).
         * <p>
         * @return {@code this}
         * @param routeType Property routeType: The type of the route. This parameter is required.
         */
        public Builder routeType(final java.lang.String routeType) {
            this.props.routeType(routeType);
            return this;
        }
        /**
         * Property routeType: The type of the route.
         * <p>
         * Valid value: Op (control route).
         * <p>
         * @return {@code this}
         * @param routeType Property routeType: The type of the route. This parameter is required.
         */
        public Builder routeType(final com.aliyun.ros.cdk.core.IResolvable routeType) {
            this.props.routeType(routeType);
            return this;
        }

        /**
         * Property services: The list of backend services.
         * <p>
         * Required when DestinationType is Single, Multiple, or VersionOriented.
         * <p>
         * @return {@code this}
         * @param services Property services: The list of backend services. This parameter is required.
         */
        public Builder services(final com.aliyun.ros.cdk.core.IResolvable services) {
            this.props.services(services);
            return this;
        }
        /**
         * Property services: The list of backend services.
         * <p>
         * Required when DestinationType is Single, Multiple, or VersionOriented.
         * <p>
         * @return {@code this}
         * @param services Property services: The list of backend services. This parameter is required.
         */
        public Builder services(final java.util.List<? extends java.lang.Object> services) {
            this.props.services(services);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.GatewayRoute}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.GatewayRoute build() {
            return new com.aliyun.ros.cdk.mse.GatewayRoute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
