package com.aliyun.ros.cdk.mse;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MSE::GatewayRoute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.261Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute")
public class RosGatewayRoute extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGatewayRoute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGatewayRoute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mse.RosGatewayRoute.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGatewayRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.RosGatewayRouteProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomainIdList() {
        return software.amazon.jsii.Kernel.get(this, "domainIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainIdList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainIdList", java.util.Objects.requireNonNull(value, "domainIdList is required"));
    }

    /**
     */
    public void setDomainIdList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "domainIdList", java.util.Objects.requireNonNull(value, "domainIdList is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGatewayUniqueId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gatewayUniqueId", java.util.Objects.requireNonNull(value, "gatewayUniqueId is required"));
    }

    /**
     */
    public void setGatewayUniqueId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gatewayUniqueId", java.util.Objects.requireNonNull(value, "gatewayUniqueId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationType() {
        return software.amazon.jsii.Kernel.get(this, "destinationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationType", value);
    }

    /**
     */
    public void setDestinationType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDirectResponseJson() {
        return software.amazon.jsii.Kernel.get(this, "directResponseJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDirectResponseJson(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "directResponseJson", value);
    }

    /**
     */
    public void setDirectResponseJson(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mse.RosGatewayRoute.DirectResponseJSONProperty value) {
        software.amazon.jsii.Kernel.set(this, "directResponseJson", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomainId() {
        return software.amazon.jsii.Kernel.get(this, "domainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "domainId", value);
    }

    /**
     */
    public void setDomainId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFallback() {
        return software.amazon.jsii.Kernel.get(this, "fallback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFallback(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "fallback", value);
    }

    /**
     */
    public void setFallback(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fallback", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFallbackServices() {
        return software.amazon.jsii.Kernel.get(this, "fallbackServices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFallbackServices(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fallbackServices", value);
    }

    /**
     */
    public void setFallbackServices(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.mse.RosGatewayRoute.FallbackServicesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.mse.RosGatewayRoute.FallbackServicesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "fallbackServices", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGatewayId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "gatewayId", value);
    }

    /**
     */
    public void setGatewayId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gatewayId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicies() {
        return software.amazon.jsii.Kernel.get(this, "policies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicies(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policies", value);
    }

    /**
     */
    public void setPolicies(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policies", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPredicates() {
        return software.amazon.jsii.Kernel.get(this, "predicates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPredicates(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "predicates", value);
    }

    /**
     */
    public void setPredicates(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mse.RosGatewayRoute.PredicatesProperty value) {
        software.amazon.jsii.Kernel.set(this, "predicates", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRedirectJson() {
        return software.amazon.jsii.Kernel.get(this, "redirectJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRedirectJson(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "redirectJson", value);
    }

    /**
     */
    public void setRedirectJson(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mse.RosGatewayRoute.RedirectJSONProperty value) {
        software.amazon.jsii.Kernel.set(this, "redirectJson", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteOrder() {
        return software.amazon.jsii.Kernel.get(this, "routeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteOrder(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "routeOrder", value);
    }

    /**
     */
    public void setRouteOrder(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeOrder", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteType() {
        return software.amazon.jsii.Kernel.get(this, "routeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeType", value);
    }

    /**
     */
    public void setRouteType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServices() {
        return software.amazon.jsii.Kernel.get(this, "services", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServices(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "services", value);
    }

    /**
     */
    public void setServices(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.mse.RosGatewayRoute.ServicesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.mse.RosGatewayRoute.ServicesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "services", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.DirectResponseJSONProperty")
    @software.amazon.jsii.Jsii.Proxy(DirectResponseJSONProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DirectResponseJSONProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBody() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DirectResponseJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DirectResponseJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DirectResponseJSONProperty> {
            java.lang.Object body;
            java.lang.Object code;

            /**
             * Sets the value of {@link DirectResponseJSONProperty#getBody}
             * @param body the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder body(java.lang.String body) {
                this.body = body;
                return this;
            }

            /**
             * Sets the value of {@link DirectResponseJSONProperty#getBody}
             * @param body the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder body(com.aliyun.ros.cdk.core.IResolvable body) {
                this.body = body;
                return this;
            }

            /**
             * Sets the value of {@link DirectResponseJSONProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(java.lang.Number code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link DirectResponseJSONProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
                this.code = code;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DirectResponseJSONProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DirectResponseJSONProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DirectResponseJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DirectResponseJSONProperty {
            private final java.lang.Object body;
            private final java.lang.Object code;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.body = software.amazon.jsii.Kernel.get(this, "body", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.body = builder.body;
                this.code = builder.code;
            }

            @Override
            public final java.lang.Object getBody() {
                return this.body;
            }

            @Override
            public final java.lang.Object getCode() {
                return this.code;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBody() != null) {
                    data.set("body", om.valueToTree(this.getBody()));
                }
                if (this.getCode() != null) {
                    data.set("code", om.valueToTree(this.getCode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.DirectResponseJSONProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DirectResponseJSONProperty.Jsii$Proxy that = (DirectResponseJSONProperty.Jsii$Proxy) o;

                if (this.body != null ? !this.body.equals(that.body) : that.body != null) return false;
                return this.code != null ? this.code.equals(that.code) : that.code == null;
            }

            @Override
            public final int hashCode() {
                int result = this.body != null ? this.body.hashCode() : 0;
                result = 31 * result + (this.code != null ? this.code.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.FallbackServicesProperty")
    @software.amazon.jsii.Jsii.Proxy(FallbackServicesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FallbackServicesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAgreementType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPercent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServicePort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FallbackServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FallbackServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FallbackServicesProperty> {
            java.lang.Object agreementType;
            java.lang.Object groupName;
            java.lang.Object name;
            java.lang.Object namespace;
            java.lang.Object percent;
            java.lang.Object serviceId;
            java.lang.Object servicePort;
            java.lang.Object sourceType;
            java.lang.Object version;

            /**
             * Sets the value of {@link FallbackServicesProperty#getAgreementType}
             * @param agreementType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder agreementType(java.lang.String agreementType) {
                this.agreementType = agreementType;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getAgreementType}
             * @param agreementType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder agreementType(com.aliyun.ros.cdk.core.IResolvable agreementType) {
                this.agreementType = agreementType;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getGroupName}
             * @param groupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(java.lang.String groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getGroupName}
             * @param groupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(java.lang.String namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getPercent}
             * @param percent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder percent(java.lang.Number percent) {
                this.percent = percent;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getPercent}
             * @param percent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder percent(com.aliyun.ros.cdk.core.IResolvable percent) {
                this.percent = percent;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.Number serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getServicePort}
             * @param servicePort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicePort(java.lang.Number servicePort) {
                this.servicePort = servicePort;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getServicePort}
             * @param servicePort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicePort(com.aliyun.ros.cdk.core.IResolvable servicePort) {
                this.servicePort = servicePort;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getSourceType}
             * @param sourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceType(java.lang.String sourceType) {
                this.sourceType = sourceType;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getSourceType}
             * @param sourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
                this.sourceType = sourceType;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link FallbackServicesProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FallbackServicesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FallbackServicesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FallbackServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FallbackServicesProperty {
            private final java.lang.Object agreementType;
            private final java.lang.Object groupName;
            private final java.lang.Object name;
            private final java.lang.Object namespace;
            private final java.lang.Object percent;
            private final java.lang.Object serviceId;
            private final java.lang.Object servicePort;
            private final java.lang.Object sourceType;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.agreementType = software.amazon.jsii.Kernel.get(this, "agreementType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.percent = software.amazon.jsii.Kernel.get(this, "percent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.servicePort = software.amazon.jsii.Kernel.get(this, "servicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.agreementType = builder.agreementType;
                this.groupName = builder.groupName;
                this.name = builder.name;
                this.namespace = builder.namespace;
                this.percent = builder.percent;
                this.serviceId = builder.serviceId;
                this.servicePort = builder.servicePort;
                this.sourceType = builder.sourceType;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getAgreementType() {
                return this.agreementType;
            }

            @Override
            public final java.lang.Object getGroupName() {
                return this.groupName;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getNamespace() {
                return this.namespace;
            }

            @Override
            public final java.lang.Object getPercent() {
                return this.percent;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getServicePort() {
                return this.servicePort;
            }

            @Override
            public final java.lang.Object getSourceType() {
                return this.sourceType;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAgreementType() != null) {
                    data.set("agreementType", om.valueToTree(this.getAgreementType()));
                }
                if (this.getGroupName() != null) {
                    data.set("groupName", om.valueToTree(this.getGroupName()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getNamespace() != null) {
                    data.set("namespace", om.valueToTree(this.getNamespace()));
                }
                if (this.getPercent() != null) {
                    data.set("percent", om.valueToTree(this.getPercent()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getServicePort() != null) {
                    data.set("servicePort", om.valueToTree(this.getServicePort()));
                }
                if (this.getSourceType() != null) {
                    data.set("sourceType", om.valueToTree(this.getSourceType()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.FallbackServicesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FallbackServicesProperty.Jsii$Proxy that = (FallbackServicesProperty.Jsii$Proxy) o;

                if (this.agreementType != null ? !this.agreementType.equals(that.agreementType) : that.agreementType != null) return false;
                if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
                if (this.percent != null ? !this.percent.equals(that.percent) : that.percent != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                if (this.servicePort != null ? !this.servicePort.equals(that.servicePort) : that.servicePort != null) return false;
                if (this.sourceType != null ? !this.sourceType.equals(that.sourceType) : that.sourceType != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.agreementType != null ? this.agreementType.hashCode() : 0;
                result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
                result = 31 * result + (this.percent != null ? this.percent.hashCode() : 0);
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.servicePort != null ? this.servicePort.hashCode() : 0);
                result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.HeaderPredicatesProperty")
    @software.amazon.jsii.Jsii.Proxy(HeaderPredicatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HeaderPredicatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HeaderPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HeaderPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HeaderPredicatesProperty> {
            java.lang.Object key;
            java.lang.Object type;
            java.lang.Object value;

            /**
             * Sets the value of {@link HeaderPredicatesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderPredicatesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderPredicatesProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link HeaderPredicatesProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link HeaderPredicatesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link HeaderPredicatesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HeaderPredicatesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HeaderPredicatesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HeaderPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HeaderPredicatesProperty {
            private final java.lang.Object key;
            private final java.lang.Object type;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.type = builder.type;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.HeaderPredicatesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HeaderPredicatesProperty.Jsii$Proxy that = (HeaderPredicatesProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.HttpDubboTranscoderProperty")
    @software.amazon.jsii.Jsii.Proxy(HttpDubboTranscoderProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HttpDubboTranscoderProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDubboServiceGroup() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDubboServiceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDubboServiceVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMothedMapList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HttpDubboTranscoderProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HttpDubboTranscoderProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HttpDubboTranscoderProperty> {
            java.lang.Object dubboServiceGroup;
            java.lang.Object dubboServiceName;
            java.lang.Object dubboServiceVersion;
            java.lang.Object mothedMapList;

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getDubboServiceGroup}
             * @param dubboServiceGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboServiceGroup(java.lang.String dubboServiceGroup) {
                this.dubboServiceGroup = dubboServiceGroup;
                return this;
            }

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getDubboServiceGroup}
             * @param dubboServiceGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboServiceGroup(com.aliyun.ros.cdk.core.IResolvable dubboServiceGroup) {
                this.dubboServiceGroup = dubboServiceGroup;
                return this;
            }

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getDubboServiceName}
             * @param dubboServiceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboServiceName(java.lang.String dubboServiceName) {
                this.dubboServiceName = dubboServiceName;
                return this;
            }

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getDubboServiceName}
             * @param dubboServiceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboServiceName(com.aliyun.ros.cdk.core.IResolvable dubboServiceName) {
                this.dubboServiceName = dubboServiceName;
                return this;
            }

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getDubboServiceVersion}
             * @param dubboServiceVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboServiceVersion(java.lang.String dubboServiceVersion) {
                this.dubboServiceVersion = dubboServiceVersion;
                return this;
            }

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getDubboServiceVersion}
             * @param dubboServiceVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboServiceVersion(com.aliyun.ros.cdk.core.IResolvable dubboServiceVersion) {
                this.dubboServiceVersion = dubboServiceVersion;
                return this;
            }

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getMothedMapList}
             * @param mothedMapList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mothedMapList(com.aliyun.ros.cdk.core.IResolvable mothedMapList) {
                this.mothedMapList = mothedMapList;
                return this;
            }

            /**
             * Sets the value of {@link HttpDubboTranscoderProperty#getMothedMapList}
             * @param mothedMapList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mothedMapList(java.util.List<? extends java.lang.Object> mothedMapList) {
                this.mothedMapList = mothedMapList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HttpDubboTranscoderProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HttpDubboTranscoderProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HttpDubboTranscoderProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpDubboTranscoderProperty {
            private final java.lang.Object dubboServiceGroup;
            private final java.lang.Object dubboServiceName;
            private final java.lang.Object dubboServiceVersion;
            private final java.lang.Object mothedMapList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dubboServiceGroup = software.amazon.jsii.Kernel.get(this, "dubboServiceGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dubboServiceName = software.amazon.jsii.Kernel.get(this, "dubboServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dubboServiceVersion = software.amazon.jsii.Kernel.get(this, "dubboServiceVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mothedMapList = software.amazon.jsii.Kernel.get(this, "mothedMapList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dubboServiceGroup = builder.dubboServiceGroup;
                this.dubboServiceName = builder.dubboServiceName;
                this.dubboServiceVersion = builder.dubboServiceVersion;
                this.mothedMapList = builder.mothedMapList;
            }

            @Override
            public final java.lang.Object getDubboServiceGroup() {
                return this.dubboServiceGroup;
            }

            @Override
            public final java.lang.Object getDubboServiceName() {
                return this.dubboServiceName;
            }

            @Override
            public final java.lang.Object getDubboServiceVersion() {
                return this.dubboServiceVersion;
            }

            @Override
            public final java.lang.Object getMothedMapList() {
                return this.mothedMapList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDubboServiceGroup() != null) {
                    data.set("dubboServiceGroup", om.valueToTree(this.getDubboServiceGroup()));
                }
                if (this.getDubboServiceName() != null) {
                    data.set("dubboServiceName", om.valueToTree(this.getDubboServiceName()));
                }
                if (this.getDubboServiceVersion() != null) {
                    data.set("dubboServiceVersion", om.valueToTree(this.getDubboServiceVersion()));
                }
                if (this.getMothedMapList() != null) {
                    data.set("mothedMapList", om.valueToTree(this.getMothedMapList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.HttpDubboTranscoderProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HttpDubboTranscoderProperty.Jsii$Proxy that = (HttpDubboTranscoderProperty.Jsii$Proxy) o;

                if (this.dubboServiceGroup != null ? !this.dubboServiceGroup.equals(that.dubboServiceGroup) : that.dubboServiceGroup != null) return false;
                if (this.dubboServiceName != null ? !this.dubboServiceName.equals(that.dubboServiceName) : that.dubboServiceName != null) return false;
                if (this.dubboServiceVersion != null ? !this.dubboServiceVersion.equals(that.dubboServiceVersion) : that.dubboServiceVersion != null) return false;
                return this.mothedMapList != null ? this.mothedMapList.equals(that.mothedMapList) : that.mothedMapList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dubboServiceGroup != null ? this.dubboServiceGroup.hashCode() : 0;
                result = 31 * result + (this.dubboServiceName != null ? this.dubboServiceName.hashCode() : 0);
                result = 31 * result + (this.dubboServiceVersion != null ? this.dubboServiceVersion.hashCode() : 0);
                result = 31 * result + (this.mothedMapList != null ? this.mothedMapList.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.MothedMapListProperty")
    @software.amazon.jsii.Jsii.Proxy(MothedMapListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MothedMapListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDubboMothedName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpMothed() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMothedpath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParamMapsList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassThroughAllHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassThroughList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MothedMapListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MothedMapListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MothedMapListProperty> {
            java.lang.Object dubboMothedName;
            java.lang.Object httpMothed;
            java.lang.Object mothedpath;
            java.lang.Object paramMapsList;
            java.lang.Object passThroughAllHeaders;
            java.lang.Object passThroughList;

            /**
             * Sets the value of {@link MothedMapListProperty#getDubboMothedName}
             * @param dubboMothedName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboMothedName(java.lang.String dubboMothedName) {
                this.dubboMothedName = dubboMothedName;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getDubboMothedName}
             * @param dubboMothedName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dubboMothedName(com.aliyun.ros.cdk.core.IResolvable dubboMothedName) {
                this.dubboMothedName = dubboMothedName;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getHttpMothed}
             * @param httpMothed the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpMothed(java.lang.String httpMothed) {
                this.httpMothed = httpMothed;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getHttpMothed}
             * @param httpMothed the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpMothed(com.aliyun.ros.cdk.core.IResolvable httpMothed) {
                this.httpMothed = httpMothed;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getMothedpath}
             * @param mothedpath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mothedpath(java.lang.String mothedpath) {
                this.mothedpath = mothedpath;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getMothedpath}
             * @param mothedpath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mothedpath(com.aliyun.ros.cdk.core.IResolvable mothedpath) {
                this.mothedpath = mothedpath;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getParamMapsList}
             * @param paramMapsList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paramMapsList(com.aliyun.ros.cdk.core.IResolvable paramMapsList) {
                this.paramMapsList = paramMapsList;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getParamMapsList}
             * @param paramMapsList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paramMapsList(java.util.List<? extends java.lang.Object> paramMapsList) {
                this.paramMapsList = paramMapsList;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getPassThroughAllHeaders}
             * @param passThroughAllHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passThroughAllHeaders(java.lang.String passThroughAllHeaders) {
                this.passThroughAllHeaders = passThroughAllHeaders;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getPassThroughAllHeaders}
             * @param passThroughAllHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passThroughAllHeaders(com.aliyun.ros.cdk.core.IResolvable passThroughAllHeaders) {
                this.passThroughAllHeaders = passThroughAllHeaders;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getPassThroughList}
             * @param passThroughList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passThroughList(com.aliyun.ros.cdk.core.IResolvable passThroughList) {
                this.passThroughList = passThroughList;
                return this;
            }

            /**
             * Sets the value of {@link MothedMapListProperty#getPassThroughList}
             * @param passThroughList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passThroughList(java.util.List<? extends java.lang.Object> passThroughList) {
                this.passThroughList = passThroughList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MothedMapListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MothedMapListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MothedMapListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MothedMapListProperty {
            private final java.lang.Object dubboMothedName;
            private final java.lang.Object httpMothed;
            private final java.lang.Object mothedpath;
            private final java.lang.Object paramMapsList;
            private final java.lang.Object passThroughAllHeaders;
            private final java.lang.Object passThroughList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dubboMothedName = software.amazon.jsii.Kernel.get(this, "dubboMothedName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpMothed = software.amazon.jsii.Kernel.get(this, "httpMothed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mothedpath = software.amazon.jsii.Kernel.get(this, "mothedpath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.paramMapsList = software.amazon.jsii.Kernel.get(this, "paramMapsList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passThroughAllHeaders = software.amazon.jsii.Kernel.get(this, "passThroughAllHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passThroughList = software.amazon.jsii.Kernel.get(this, "passThroughList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dubboMothedName = builder.dubboMothedName;
                this.httpMothed = builder.httpMothed;
                this.mothedpath = builder.mothedpath;
                this.paramMapsList = builder.paramMapsList;
                this.passThroughAllHeaders = builder.passThroughAllHeaders;
                this.passThroughList = builder.passThroughList;
            }

            @Override
            public final java.lang.Object getDubboMothedName() {
                return this.dubboMothedName;
            }

            @Override
            public final java.lang.Object getHttpMothed() {
                return this.httpMothed;
            }

            @Override
            public final java.lang.Object getMothedpath() {
                return this.mothedpath;
            }

            @Override
            public final java.lang.Object getParamMapsList() {
                return this.paramMapsList;
            }

            @Override
            public final java.lang.Object getPassThroughAllHeaders() {
                return this.passThroughAllHeaders;
            }

            @Override
            public final java.lang.Object getPassThroughList() {
                return this.passThroughList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDubboMothedName() != null) {
                    data.set("dubboMothedName", om.valueToTree(this.getDubboMothedName()));
                }
                if (this.getHttpMothed() != null) {
                    data.set("httpMothed", om.valueToTree(this.getHttpMothed()));
                }
                if (this.getMothedpath() != null) {
                    data.set("mothedpath", om.valueToTree(this.getMothedpath()));
                }
                if (this.getParamMapsList() != null) {
                    data.set("paramMapsList", om.valueToTree(this.getParamMapsList()));
                }
                if (this.getPassThroughAllHeaders() != null) {
                    data.set("passThroughAllHeaders", om.valueToTree(this.getPassThroughAllHeaders()));
                }
                if (this.getPassThroughList() != null) {
                    data.set("passThroughList", om.valueToTree(this.getPassThroughList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.MothedMapListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MothedMapListProperty.Jsii$Proxy that = (MothedMapListProperty.Jsii$Proxy) o;

                if (this.dubboMothedName != null ? !this.dubboMothedName.equals(that.dubboMothedName) : that.dubboMothedName != null) return false;
                if (this.httpMothed != null ? !this.httpMothed.equals(that.httpMothed) : that.httpMothed != null) return false;
                if (this.mothedpath != null ? !this.mothedpath.equals(that.mothedpath) : that.mothedpath != null) return false;
                if (this.paramMapsList != null ? !this.paramMapsList.equals(that.paramMapsList) : that.paramMapsList != null) return false;
                if (this.passThroughAllHeaders != null ? !this.passThroughAllHeaders.equals(that.passThroughAllHeaders) : that.passThroughAllHeaders != null) return false;
                return this.passThroughList != null ? this.passThroughList.equals(that.passThroughList) : that.passThroughList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dubboMothedName != null ? this.dubboMothedName.hashCode() : 0;
                result = 31 * result + (this.httpMothed != null ? this.httpMothed.hashCode() : 0);
                result = 31 * result + (this.mothedpath != null ? this.mothedpath.hashCode() : 0);
                result = 31 * result + (this.paramMapsList != null ? this.paramMapsList.hashCode() : 0);
                result = 31 * result + (this.passThroughAllHeaders != null ? this.passThroughAllHeaders.hashCode() : 0);
                result = 31 * result + (this.passThroughList != null ? this.passThroughList.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.ParamMapsListProperty")
    @software.amazon.jsii.Jsii.Proxy(ParamMapsListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ParamMapsListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExtractKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExtractKeySpec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMappingType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ParamMapsListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ParamMapsListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ParamMapsListProperty> {
            java.lang.Object extractKey;
            java.lang.Object extractKeySpec;
            java.lang.Object mappingType;

            /**
             * Sets the value of {@link ParamMapsListProperty#getExtractKey}
             * @param extractKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extractKey(java.lang.String extractKey) {
                this.extractKey = extractKey;
                return this;
            }

            /**
             * Sets the value of {@link ParamMapsListProperty#getExtractKey}
             * @param extractKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extractKey(com.aliyun.ros.cdk.core.IResolvable extractKey) {
                this.extractKey = extractKey;
                return this;
            }

            /**
             * Sets the value of {@link ParamMapsListProperty#getExtractKeySpec}
             * @param extractKeySpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extractKeySpec(java.lang.String extractKeySpec) {
                this.extractKeySpec = extractKeySpec;
                return this;
            }

            /**
             * Sets the value of {@link ParamMapsListProperty#getExtractKeySpec}
             * @param extractKeySpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extractKeySpec(com.aliyun.ros.cdk.core.IResolvable extractKeySpec) {
                this.extractKeySpec = extractKeySpec;
                return this;
            }

            /**
             * Sets the value of {@link ParamMapsListProperty#getMappingType}
             * @param mappingType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mappingType(java.lang.String mappingType) {
                this.mappingType = mappingType;
                return this;
            }

            /**
             * Sets the value of {@link ParamMapsListProperty#getMappingType}
             * @param mappingType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mappingType(com.aliyun.ros.cdk.core.IResolvable mappingType) {
                this.mappingType = mappingType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ParamMapsListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ParamMapsListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ParamMapsListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ParamMapsListProperty {
            private final java.lang.Object extractKey;
            private final java.lang.Object extractKeySpec;
            private final java.lang.Object mappingType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.extractKey = software.amazon.jsii.Kernel.get(this, "extractKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.extractKeySpec = software.amazon.jsii.Kernel.get(this, "extractKeySpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mappingType = software.amazon.jsii.Kernel.get(this, "mappingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.extractKey = builder.extractKey;
                this.extractKeySpec = builder.extractKeySpec;
                this.mappingType = builder.mappingType;
            }

            @Override
            public final java.lang.Object getExtractKey() {
                return this.extractKey;
            }

            @Override
            public final java.lang.Object getExtractKeySpec() {
                return this.extractKeySpec;
            }

            @Override
            public final java.lang.Object getMappingType() {
                return this.mappingType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExtractKey() != null) {
                    data.set("extractKey", om.valueToTree(this.getExtractKey()));
                }
                if (this.getExtractKeySpec() != null) {
                    data.set("extractKeySpec", om.valueToTree(this.getExtractKeySpec()));
                }
                if (this.getMappingType() != null) {
                    data.set("mappingType", om.valueToTree(this.getMappingType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.ParamMapsListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ParamMapsListProperty.Jsii$Proxy that = (ParamMapsListProperty.Jsii$Proxy) o;

                if (this.extractKey != null ? !this.extractKey.equals(that.extractKey) : that.extractKey != null) return false;
                if (this.extractKeySpec != null ? !this.extractKeySpec.equals(that.extractKeySpec) : that.extractKeySpec != null) return false;
                return this.mappingType != null ? this.mappingType.equals(that.mappingType) : that.mappingType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.extractKey != null ? this.extractKey.hashCode() : 0;
                result = 31 * result + (this.extractKeySpec != null ? this.extractKeySpec.hashCode() : 0);
                result = 31 * result + (this.mappingType != null ? this.mappingType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.PathPredicatesProperty")
    @software.amazon.jsii.Jsii.Proxy(PathPredicatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PathPredicatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreCase() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PathPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PathPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PathPredicatesProperty> {
            java.lang.Object ignoreCase;
            java.lang.Object path;
            java.lang.Object type;

            /**
             * Sets the value of {@link PathPredicatesProperty#getIgnoreCase}
             * @param ignoreCase the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ignoreCase(java.lang.Boolean ignoreCase) {
                this.ignoreCase = ignoreCase;
                return this;
            }

            /**
             * Sets the value of {@link PathPredicatesProperty#getIgnoreCase}
             * @param ignoreCase the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ignoreCase(com.aliyun.ros.cdk.core.IResolvable ignoreCase) {
                this.ignoreCase = ignoreCase;
                return this;
            }

            /**
             * Sets the value of {@link PathPredicatesProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link PathPredicatesProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link PathPredicatesProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link PathPredicatesProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PathPredicatesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PathPredicatesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PathPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PathPredicatesProperty {
            private final java.lang.Object ignoreCase;
            private final java.lang.Object path;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ignoreCase = software.amazon.jsii.Kernel.get(this, "ignoreCase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ignoreCase = builder.ignoreCase;
                this.path = builder.path;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getIgnoreCase() {
                return this.ignoreCase;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIgnoreCase() != null) {
                    data.set("ignoreCase", om.valueToTree(this.getIgnoreCase()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.PathPredicatesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PathPredicatesProperty.Jsii$Proxy that = (PathPredicatesProperty.Jsii$Proxy) o;

                if (this.ignoreCase != null ? !this.ignoreCase.equals(that.ignoreCase) : that.ignoreCase != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ignoreCase != null ? this.ignoreCase.hashCode() : 0;
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.PredicatesProperty")
    @software.amazon.jsii.Jsii.Proxy(PredicatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PredicatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeaderPredicates() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMethodPredicates() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPathPredicates() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueryPredicates() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PredicatesProperty> {
            java.lang.Object headerPredicates;
            java.lang.Object methodPredicates;
            java.lang.Object pathPredicates;
            java.lang.Object queryPredicates;

            /**
             * Sets the value of {@link PredicatesProperty#getHeaderPredicates}
             * @param headerPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerPredicates(com.aliyun.ros.cdk.core.IResolvable headerPredicates) {
                this.headerPredicates = headerPredicates;
                return this;
            }

            /**
             * Sets the value of {@link PredicatesProperty#getHeaderPredicates}
             * @param headerPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerPredicates(java.util.List<? extends java.lang.Object> headerPredicates) {
                this.headerPredicates = headerPredicates;
                return this;
            }

            /**
             * Sets the value of {@link PredicatesProperty#getMethodPredicates}
             * @param methodPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methodPredicates(com.aliyun.ros.cdk.core.IResolvable methodPredicates) {
                this.methodPredicates = methodPredicates;
                return this;
            }

            /**
             * Sets the value of {@link PredicatesProperty#getMethodPredicates}
             * @param methodPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methodPredicates(java.util.List<? extends java.lang.Object> methodPredicates) {
                this.methodPredicates = methodPredicates;
                return this;
            }

            /**
             * Sets the value of {@link PredicatesProperty#getPathPredicates}
             * @param pathPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathPredicates(com.aliyun.ros.cdk.core.IResolvable pathPredicates) {
                this.pathPredicates = pathPredicates;
                return this;
            }

            /**
             * Sets the value of {@link PredicatesProperty#getPathPredicates}
             * @param pathPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathPredicates(com.aliyun.ros.cdk.mse.RosGatewayRoute.PathPredicatesProperty pathPredicates) {
                this.pathPredicates = pathPredicates;
                return this;
            }

            /**
             * Sets the value of {@link PredicatesProperty#getQueryPredicates}
             * @param queryPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryPredicates(com.aliyun.ros.cdk.core.IResolvable queryPredicates) {
                this.queryPredicates = queryPredicates;
                return this;
            }

            /**
             * Sets the value of {@link PredicatesProperty#getQueryPredicates}
             * @param queryPredicates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryPredicates(java.util.List<? extends java.lang.Object> queryPredicates) {
                this.queryPredicates = queryPredicates;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PredicatesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PredicatesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PredicatesProperty {
            private final java.lang.Object headerPredicates;
            private final java.lang.Object methodPredicates;
            private final java.lang.Object pathPredicates;
            private final java.lang.Object queryPredicates;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.headerPredicates = software.amazon.jsii.Kernel.get(this, "headerPredicates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.methodPredicates = software.amazon.jsii.Kernel.get(this, "methodPredicates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pathPredicates = software.amazon.jsii.Kernel.get(this, "pathPredicates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryPredicates = software.amazon.jsii.Kernel.get(this, "queryPredicates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.headerPredicates = builder.headerPredicates;
                this.methodPredicates = builder.methodPredicates;
                this.pathPredicates = builder.pathPredicates;
                this.queryPredicates = builder.queryPredicates;
            }

            @Override
            public final java.lang.Object getHeaderPredicates() {
                return this.headerPredicates;
            }

            @Override
            public final java.lang.Object getMethodPredicates() {
                return this.methodPredicates;
            }

            @Override
            public final java.lang.Object getPathPredicates() {
                return this.pathPredicates;
            }

            @Override
            public final java.lang.Object getQueryPredicates() {
                return this.queryPredicates;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHeaderPredicates() != null) {
                    data.set("headerPredicates", om.valueToTree(this.getHeaderPredicates()));
                }
                if (this.getMethodPredicates() != null) {
                    data.set("methodPredicates", om.valueToTree(this.getMethodPredicates()));
                }
                if (this.getPathPredicates() != null) {
                    data.set("pathPredicates", om.valueToTree(this.getPathPredicates()));
                }
                if (this.getQueryPredicates() != null) {
                    data.set("queryPredicates", om.valueToTree(this.getQueryPredicates()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.PredicatesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PredicatesProperty.Jsii$Proxy that = (PredicatesProperty.Jsii$Proxy) o;

                if (this.headerPredicates != null ? !this.headerPredicates.equals(that.headerPredicates) : that.headerPredicates != null) return false;
                if (this.methodPredicates != null ? !this.methodPredicates.equals(that.methodPredicates) : that.methodPredicates != null) return false;
                if (this.pathPredicates != null ? !this.pathPredicates.equals(that.pathPredicates) : that.pathPredicates != null) return false;
                return this.queryPredicates != null ? this.queryPredicates.equals(that.queryPredicates) : that.queryPredicates == null;
            }

            @Override
            public final int hashCode() {
                int result = this.headerPredicates != null ? this.headerPredicates.hashCode() : 0;
                result = 31 * result + (this.methodPredicates != null ? this.methodPredicates.hashCode() : 0);
                result = 31 * result + (this.pathPredicates != null ? this.pathPredicates.hashCode() : 0);
                result = 31 * result + (this.queryPredicates != null ? this.queryPredicates.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.QueryPredicatesProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryPredicatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryPredicatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueryPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryPredicatesProperty> {
            java.lang.Object key;
            java.lang.Object type;
            java.lang.Object value;

            /**
             * Sets the value of {@link QueryPredicatesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryPredicatesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryPredicatesProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link QueryPredicatesProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link QueryPredicatesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link QueryPredicatesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueryPredicatesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryPredicatesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryPredicatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryPredicatesProperty {
            private final java.lang.Object key;
            private final java.lang.Object type;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.type = builder.type;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.QueryPredicatesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryPredicatesProperty.Jsii$Proxy that = (QueryPredicatesProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.RedirectJSONProperty")
    @software.amazon.jsii.Jsii.Proxy(RedirectJSONProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RedirectJSONProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RedirectJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RedirectJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RedirectJSONProperty> {
            java.lang.Object code;
            java.lang.Object host;
            java.lang.Object path;

            /**
             * Sets the value of {@link RedirectJSONProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(java.lang.Number code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link RedirectJSONProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link RedirectJSONProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedirectJSONProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedirectJSONProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RedirectJSONProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RedirectJSONProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RedirectJSONProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RedirectJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RedirectJSONProperty {
            private final java.lang.Object code;
            private final java.lang.Object host;
            private final java.lang.Object path;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.code = builder.code;
                this.host = builder.host;
                this.path = builder.path;
            }

            @Override
            public final java.lang.Object getCode() {
                return this.code;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCode() != null) {
                    data.set("code", om.valueToTree(this.getCode()));
                }
                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.RedirectJSONProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RedirectJSONProperty.Jsii$Proxy that = (RedirectJSONProperty.Jsii$Proxy) o;

                if (this.code != null ? !this.code.equals(that.code) : that.code != null) return false;
                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                return this.path != null ? this.path.equals(that.path) : that.path == null;
            }

            @Override
            public final int hashCode() {
                int result = this.code != null ? this.code.hashCode() : 0;
                result = 31 * result + (this.host != null ? this.host.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRoute.ServicesProperty")
    @software.amazon.jsii.Jsii.Proxy(ServicesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServicesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAgreementType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpDubboTranscoder() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPercent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServicePort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServicesProperty> {
            java.lang.Object agreementType;
            java.lang.Object groupName;
            java.lang.Object httpDubboTranscoder;
            java.lang.Object name;
            java.lang.Object namespace;
            java.lang.Object percent;
            java.lang.Object serviceId;
            java.lang.Object servicePort;
            java.lang.Object sourceType;
            java.lang.Object version;

            /**
             * Sets the value of {@link ServicesProperty#getAgreementType}
             * @param agreementType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder agreementType(java.lang.String agreementType) {
                this.agreementType = agreementType;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getAgreementType}
             * @param agreementType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder agreementType(com.aliyun.ros.cdk.core.IResolvable agreementType) {
                this.agreementType = agreementType;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getGroupName}
             * @param groupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(java.lang.String groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getGroupName}
             * @param groupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getHttpDubboTranscoder}
             * @param httpDubboTranscoder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpDubboTranscoder(com.aliyun.ros.cdk.core.IResolvable httpDubboTranscoder) {
                this.httpDubboTranscoder = httpDubboTranscoder;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getHttpDubboTranscoder}
             * @param httpDubboTranscoder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpDubboTranscoder(com.aliyun.ros.cdk.mse.RosGatewayRoute.HttpDubboTranscoderProperty httpDubboTranscoder) {
                this.httpDubboTranscoder = httpDubboTranscoder;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(java.lang.String namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getPercent}
             * @param percent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder percent(java.lang.Number percent) {
                this.percent = percent;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getPercent}
             * @param percent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder percent(com.aliyun.ros.cdk.core.IResolvable percent) {
                this.percent = percent;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.Number serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getServicePort}
             * @param servicePort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicePort(java.lang.Number servicePort) {
                this.servicePort = servicePort;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getServicePort}
             * @param servicePort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicePort(com.aliyun.ros.cdk.core.IResolvable servicePort) {
                this.servicePort = servicePort;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getSourceType}
             * @param sourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceType(java.lang.String sourceType) {
                this.sourceType = sourceType;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getSourceType}
             * @param sourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
                this.sourceType = sourceType;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServicesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServicesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServicesProperty {
            private final java.lang.Object agreementType;
            private final java.lang.Object groupName;
            private final java.lang.Object httpDubboTranscoder;
            private final java.lang.Object name;
            private final java.lang.Object namespace;
            private final java.lang.Object percent;
            private final java.lang.Object serviceId;
            private final java.lang.Object servicePort;
            private final java.lang.Object sourceType;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.agreementType = software.amazon.jsii.Kernel.get(this, "agreementType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpDubboTranscoder = software.amazon.jsii.Kernel.get(this, "httpDubboTranscoder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.percent = software.amazon.jsii.Kernel.get(this, "percent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.servicePort = software.amazon.jsii.Kernel.get(this, "servicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.agreementType = builder.agreementType;
                this.groupName = builder.groupName;
                this.httpDubboTranscoder = builder.httpDubboTranscoder;
                this.name = builder.name;
                this.namespace = builder.namespace;
                this.percent = builder.percent;
                this.serviceId = builder.serviceId;
                this.servicePort = builder.servicePort;
                this.sourceType = builder.sourceType;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getAgreementType() {
                return this.agreementType;
            }

            @Override
            public final java.lang.Object getGroupName() {
                return this.groupName;
            }

            @Override
            public final java.lang.Object getHttpDubboTranscoder() {
                return this.httpDubboTranscoder;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getNamespace() {
                return this.namespace;
            }

            @Override
            public final java.lang.Object getPercent() {
                return this.percent;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getServicePort() {
                return this.servicePort;
            }

            @Override
            public final java.lang.Object getSourceType() {
                return this.sourceType;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAgreementType() != null) {
                    data.set("agreementType", om.valueToTree(this.getAgreementType()));
                }
                if (this.getGroupName() != null) {
                    data.set("groupName", om.valueToTree(this.getGroupName()));
                }
                if (this.getHttpDubboTranscoder() != null) {
                    data.set("httpDubboTranscoder", om.valueToTree(this.getHttpDubboTranscoder()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getNamespace() != null) {
                    data.set("namespace", om.valueToTree(this.getNamespace()));
                }
                if (this.getPercent() != null) {
                    data.set("percent", om.valueToTree(this.getPercent()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getServicePort() != null) {
                    data.set("servicePort", om.valueToTree(this.getServicePort()));
                }
                if (this.getSourceType() != null) {
                    data.set("sourceType", om.valueToTree(this.getSourceType()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRoute.ServicesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServicesProperty.Jsii$Proxy that = (ServicesProperty.Jsii$Proxy) o;

                if (this.agreementType != null ? !this.agreementType.equals(that.agreementType) : that.agreementType != null) return false;
                if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
                if (this.httpDubboTranscoder != null ? !this.httpDubboTranscoder.equals(that.httpDubboTranscoder) : that.httpDubboTranscoder != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
                if (this.percent != null ? !this.percent.equals(that.percent) : that.percent != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                if (this.servicePort != null ? !this.servicePort.equals(that.servicePort) : that.servicePort != null) return false;
                if (this.sourceType != null ? !this.sourceType.equals(that.sourceType) : that.sourceType != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.agreementType != null ? this.agreementType.hashCode() : 0;
                result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
                result = 31 * result + (this.httpDubboTranscoder != null ? this.httpDubboTranscoder.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
                result = 31 * result + (this.percent != null ? this.percent.hashCode() : 0);
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.servicePort != null ? this.servicePort.hashCode() : 0);
                result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.RosGatewayRoute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.RosGatewayRoute> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.mse.RosGatewayRouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.RosGatewayRouteProps.Builder();
        }

        /**
         * @return {@code this}
         * @param domainIdList This parameter is required.
         */
        public Builder domainIdList(final com.aliyun.ros.cdk.core.IResolvable domainIdList) {
            this.props.domainIdList(domainIdList);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainIdList This parameter is required.
         */
        public Builder domainIdList(final java.util.List<? extends java.lang.Object> domainIdList) {
            this.props.domainIdList(domainIdList);
            return this;
        }

        /**
         * @return {@code this}
         * @param gatewayUniqueId This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * @return {@code this}
         * @param gatewayUniqueId This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationType This parameter is required.
         */
        public Builder destinationType(final java.lang.String destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationType This parameter is required.
         */
        public Builder destinationType(final com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }

        /**
         * @return {@code this}
         * @param directResponseJson This parameter is required.
         */
        public Builder directResponseJson(final com.aliyun.ros.cdk.core.IResolvable directResponseJson) {
            this.props.directResponseJson(directResponseJson);
            return this;
        }
        /**
         * @return {@code this}
         * @param directResponseJson This parameter is required.
         */
        public Builder directResponseJson(final com.aliyun.ros.cdk.mse.RosGatewayRoute.DirectResponseJSONProperty directResponseJson) {
            this.props.directResponseJson(directResponseJson);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainId This parameter is required.
         */
        public Builder domainId(final java.lang.Number domainId) {
            this.props.domainId(domainId);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainId This parameter is required.
         */
        public Builder domainId(final com.aliyun.ros.cdk.core.IResolvable domainId) {
            this.props.domainId(domainId);
            return this;
        }

        /**
         * @return {@code this}
         * @param fallback This parameter is required.
         */
        public Builder fallback(final java.lang.Boolean fallback) {
            this.props.fallback(fallback);
            return this;
        }
        /**
         * @return {@code this}
         * @param fallback This parameter is required.
         */
        public Builder fallback(final com.aliyun.ros.cdk.core.IResolvable fallback) {
            this.props.fallback(fallback);
            return this;
        }

        /**
         * @return {@code this}
         * @param fallbackServices This parameter is required.
         */
        public Builder fallbackServices(final com.aliyun.ros.cdk.core.IResolvable fallbackServices) {
            this.props.fallbackServices(fallbackServices);
            return this;
        }
        /**
         * @return {@code this}
         * @param fallbackServices This parameter is required.
         */
        public Builder fallbackServices(final java.util.List<? extends java.lang.Object> fallbackServices) {
            this.props.fallbackServices(fallbackServices);
            return this;
        }

        /**
         * @return {@code this}
         * @param gatewayId This parameter is required.
         */
        public Builder gatewayId(final java.lang.Number gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }
        /**
         * @return {@code this}
         * @param gatewayId This parameter is required.
         */
        public Builder gatewayId(final com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param policies This parameter is required.
         */
        public Builder policies(final java.lang.String policies) {
            this.props.policies(policies);
            return this;
        }
        /**
         * @return {@code this}
         * @param policies This parameter is required.
         */
        public Builder policies(final com.aliyun.ros.cdk.core.IResolvable policies) {
            this.props.policies(policies);
            return this;
        }

        /**
         * @return {@code this}
         * @param predicates This parameter is required.
         */
        public Builder predicates(final com.aliyun.ros.cdk.core.IResolvable predicates) {
            this.props.predicates(predicates);
            return this;
        }
        /**
         * @return {@code this}
         * @param predicates This parameter is required.
         */
        public Builder predicates(final com.aliyun.ros.cdk.mse.RosGatewayRoute.PredicatesProperty predicates) {
            this.props.predicates(predicates);
            return this;
        }

        /**
         * @return {@code this}
         * @param redirectJson This parameter is required.
         */
        public Builder redirectJson(final com.aliyun.ros.cdk.core.IResolvable redirectJson) {
            this.props.redirectJson(redirectJson);
            return this;
        }
        /**
         * @return {@code this}
         * @param redirectJson This parameter is required.
         */
        public Builder redirectJson(final com.aliyun.ros.cdk.mse.RosGatewayRoute.RedirectJSONProperty redirectJson) {
            this.props.redirectJson(redirectJson);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeOrder This parameter is required.
         */
        public Builder routeOrder(final java.lang.Number routeOrder) {
            this.props.routeOrder(routeOrder);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeOrder This parameter is required.
         */
        public Builder routeOrder(final com.aliyun.ros.cdk.core.IResolvable routeOrder) {
            this.props.routeOrder(routeOrder);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeType This parameter is required.
         */
        public Builder routeType(final java.lang.String routeType) {
            this.props.routeType(routeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeType This parameter is required.
         */
        public Builder routeType(final com.aliyun.ros.cdk.core.IResolvable routeType) {
            this.props.routeType(routeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param services This parameter is required.
         */
        public Builder services(final com.aliyun.ros.cdk.core.IResolvable services) {
            this.props.services(services);
            return this;
        }
        /**
         * @return {@code this}
         * @param services This parameter is required.
         */
        public Builder services(final java.util.List<? extends java.lang.Object> services) {
            this.props.services(services);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.RosGatewayRoute}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.RosGatewayRoute build() {
            return new com.aliyun.ros.cdk.mse.RosGatewayRoute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
