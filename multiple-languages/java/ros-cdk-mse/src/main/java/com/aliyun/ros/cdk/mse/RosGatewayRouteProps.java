package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>RosGatewayRoute</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.270Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayRouteProps")
@software.amazon.jsii.Jsii.Proxy(RosGatewayRouteProps.Jsii$Proxy.class)
public interface RosGatewayRouteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainIdList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDirectResponseJson() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFallback() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFallbackServices() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicies() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredicates() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedirectJson() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteOrder() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServices() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGatewayRouteProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGatewayRouteProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGatewayRouteProps> {
        java.lang.Object domainIdList;
        java.lang.Object gatewayUniqueId;
        java.lang.Object name;
        java.lang.Object description;
        java.lang.Object destinationType;
        java.lang.Object directResponseJson;
        java.lang.Object domainId;
        java.lang.Object fallback;
        java.lang.Object fallbackServices;
        java.lang.Object gatewayId;
        java.lang.Object policies;
        java.lang.Object predicates;
        java.lang.Object redirectJson;
        java.lang.Object routeOrder;
        java.lang.Object routeType;
        java.lang.Object services;

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDomainIdList}
         * @param domainIdList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainIdList(com.aliyun.ros.cdk.core.IResolvable domainIdList) {
            this.domainIdList = domainIdList;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDomainIdList}
         * @param domainIdList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainIdList(java.util.List<? extends java.lang.Object> domainIdList) {
            this.domainIdList = domainIdList;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getGatewayUniqueId}
         * @param gatewayUniqueId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(java.lang.String gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getGatewayUniqueId}
         * @param gatewayUniqueId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDestinationType}
         * @param destinationType the value to be set.
         * @return {@code this}
         */
        public Builder destinationType(java.lang.String destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDestinationType}
         * @param destinationType the value to be set.
         * @return {@code this}
         */
        public Builder destinationType(com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDirectResponseJson}
         * @param directResponseJson the value to be set.
         * @return {@code this}
         */
        public Builder directResponseJson(com.aliyun.ros.cdk.core.IResolvable directResponseJson) {
            this.directResponseJson = directResponseJson;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDirectResponseJson}
         * @param directResponseJson the value to be set.
         * @return {@code this}
         */
        public Builder directResponseJson(com.aliyun.ros.cdk.mse.RosGatewayRoute.DirectResponseJSONProperty directResponseJson) {
            this.directResponseJson = directResponseJson;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDomainId}
         * @param domainId the value to be set.
         * @return {@code this}
         */
        public Builder domainId(java.lang.Number domainId) {
            this.domainId = domainId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getDomainId}
         * @param domainId the value to be set.
         * @return {@code this}
         */
        public Builder domainId(com.aliyun.ros.cdk.core.IResolvable domainId) {
            this.domainId = domainId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getFallback}
         * @param fallback the value to be set.
         * @return {@code this}
         */
        public Builder fallback(java.lang.Boolean fallback) {
            this.fallback = fallback;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getFallback}
         * @param fallback the value to be set.
         * @return {@code this}
         */
        public Builder fallback(com.aliyun.ros.cdk.core.IResolvable fallback) {
            this.fallback = fallback;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getFallbackServices}
         * @param fallbackServices the value to be set.
         * @return {@code this}
         */
        public Builder fallbackServices(com.aliyun.ros.cdk.core.IResolvable fallbackServices) {
            this.fallbackServices = fallbackServices;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getFallbackServices}
         * @param fallbackServices the value to be set.
         * @return {@code this}
         */
        public Builder fallbackServices(java.util.List<? extends java.lang.Object> fallbackServices) {
            this.fallbackServices = fallbackServices;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getGatewayId}
         * @param gatewayId the value to be set.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.Number gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getGatewayId}
         * @param gatewayId the value to be set.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getPolicies}
         * @param policies the value to be set.
         * @return {@code this}
         */
        public Builder policies(java.lang.String policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getPolicies}
         * @param policies the value to be set.
         * @return {@code this}
         */
        public Builder policies(com.aliyun.ros.cdk.core.IResolvable policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getPredicates}
         * @param predicates the value to be set.
         * @return {@code this}
         */
        public Builder predicates(com.aliyun.ros.cdk.core.IResolvable predicates) {
            this.predicates = predicates;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getPredicates}
         * @param predicates the value to be set.
         * @return {@code this}
         */
        public Builder predicates(com.aliyun.ros.cdk.mse.RosGatewayRoute.PredicatesProperty predicates) {
            this.predicates = predicates;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getRedirectJson}
         * @param redirectJson the value to be set.
         * @return {@code this}
         */
        public Builder redirectJson(com.aliyun.ros.cdk.core.IResolvable redirectJson) {
            this.redirectJson = redirectJson;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getRedirectJson}
         * @param redirectJson the value to be set.
         * @return {@code this}
         */
        public Builder redirectJson(com.aliyun.ros.cdk.mse.RosGatewayRoute.RedirectJSONProperty redirectJson) {
            this.redirectJson = redirectJson;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getRouteOrder}
         * @param routeOrder the value to be set.
         * @return {@code this}
         */
        public Builder routeOrder(java.lang.Number routeOrder) {
            this.routeOrder = routeOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getRouteOrder}
         * @param routeOrder the value to be set.
         * @return {@code this}
         */
        public Builder routeOrder(com.aliyun.ros.cdk.core.IResolvable routeOrder) {
            this.routeOrder = routeOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getRouteType}
         * @param routeType the value to be set.
         * @return {@code this}
         */
        public Builder routeType(java.lang.String routeType) {
            this.routeType = routeType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getRouteType}
         * @param routeType the value to be set.
         * @return {@code this}
         */
        public Builder routeType(com.aliyun.ros.cdk.core.IResolvable routeType) {
            this.routeType = routeType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getServices}
         * @param services the value to be set.
         * @return {@code this}
         */
        public Builder services(com.aliyun.ros.cdk.core.IResolvable services) {
            this.services = services;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayRouteProps#getServices}
         * @param services the value to be set.
         * @return {@code this}
         */
        public Builder services(java.util.List<? extends java.lang.Object> services) {
            this.services = services;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGatewayRouteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGatewayRouteProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGatewayRouteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGatewayRouteProps {
        private final java.lang.Object domainIdList;
        private final java.lang.Object gatewayUniqueId;
        private final java.lang.Object name;
        private final java.lang.Object description;
        private final java.lang.Object destinationType;
        private final java.lang.Object directResponseJson;
        private final java.lang.Object domainId;
        private final java.lang.Object fallback;
        private final java.lang.Object fallbackServices;
        private final java.lang.Object gatewayId;
        private final java.lang.Object policies;
        private final java.lang.Object predicates;
        private final java.lang.Object redirectJson;
        private final java.lang.Object routeOrder;
        private final java.lang.Object routeType;
        private final java.lang.Object services;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainIdList = software.amazon.jsii.Kernel.get(this, "domainIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayUniqueId = software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationType = software.amazon.jsii.Kernel.get(this, "destinationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.directResponseJson = software.amazon.jsii.Kernel.get(this, "directResponseJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainId = software.amazon.jsii.Kernel.get(this, "domainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fallback = software.amazon.jsii.Kernel.get(this, "fallback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fallbackServices = software.amazon.jsii.Kernel.get(this, "fallbackServices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policies = software.amazon.jsii.Kernel.get(this, "policies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.predicates = software.amazon.jsii.Kernel.get(this, "predicates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.redirectJson = software.amazon.jsii.Kernel.get(this, "redirectJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeOrder = software.amazon.jsii.Kernel.get(this, "routeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeType = software.amazon.jsii.Kernel.get(this, "routeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.services = software.amazon.jsii.Kernel.get(this, "services", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainIdList = java.util.Objects.requireNonNull(builder.domainIdList, "domainIdList is required");
            this.gatewayUniqueId = java.util.Objects.requireNonNull(builder.gatewayUniqueId, "gatewayUniqueId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.description = builder.description;
            this.destinationType = builder.destinationType;
            this.directResponseJson = builder.directResponseJson;
            this.domainId = builder.domainId;
            this.fallback = builder.fallback;
            this.fallbackServices = builder.fallbackServices;
            this.gatewayId = builder.gatewayId;
            this.policies = builder.policies;
            this.predicates = builder.predicates;
            this.redirectJson = builder.redirectJson;
            this.routeOrder = builder.routeOrder;
            this.routeType = builder.routeType;
            this.services = builder.services;
        }

        @Override
        public final java.lang.Object getDomainIdList() {
            return this.domainIdList;
        }

        @Override
        public final java.lang.Object getGatewayUniqueId() {
            return this.gatewayUniqueId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDestinationType() {
            return this.destinationType;
        }

        @Override
        public final java.lang.Object getDirectResponseJson() {
            return this.directResponseJson;
        }

        @Override
        public final java.lang.Object getDomainId() {
            return this.domainId;
        }

        @Override
        public final java.lang.Object getFallback() {
            return this.fallback;
        }

        @Override
        public final java.lang.Object getFallbackServices() {
            return this.fallbackServices;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getPolicies() {
            return this.policies;
        }

        @Override
        public final java.lang.Object getPredicates() {
            return this.predicates;
        }

        @Override
        public final java.lang.Object getRedirectJson() {
            return this.redirectJson;
        }

        @Override
        public final java.lang.Object getRouteOrder() {
            return this.routeOrder;
        }

        @Override
        public final java.lang.Object getRouteType() {
            return this.routeType;
        }

        @Override
        public final java.lang.Object getServices() {
            return this.services;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainIdList", om.valueToTree(this.getDomainIdList()));
            data.set("gatewayUniqueId", om.valueToTree(this.getGatewayUniqueId()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDestinationType() != null) {
                data.set("destinationType", om.valueToTree(this.getDestinationType()));
            }
            if (this.getDirectResponseJson() != null) {
                data.set("directResponseJson", om.valueToTree(this.getDirectResponseJson()));
            }
            if (this.getDomainId() != null) {
                data.set("domainId", om.valueToTree(this.getDomainId()));
            }
            if (this.getFallback() != null) {
                data.set("fallback", om.valueToTree(this.getFallback()));
            }
            if (this.getFallbackServices() != null) {
                data.set("fallbackServices", om.valueToTree(this.getFallbackServices()));
            }
            if (this.getGatewayId() != null) {
                data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            }
            if (this.getPolicies() != null) {
                data.set("policies", om.valueToTree(this.getPolicies()));
            }
            if (this.getPredicates() != null) {
                data.set("predicates", om.valueToTree(this.getPredicates()));
            }
            if (this.getRedirectJson() != null) {
                data.set("redirectJson", om.valueToTree(this.getRedirectJson()));
            }
            if (this.getRouteOrder() != null) {
                data.set("routeOrder", om.valueToTree(this.getRouteOrder()));
            }
            if (this.getRouteType() != null) {
                data.set("routeType", om.valueToTree(this.getRouteType()));
            }
            if (this.getServices() != null) {
                data.set("services", om.valueToTree(this.getServices()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayRouteProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGatewayRouteProps.Jsii$Proxy that = (RosGatewayRouteProps.Jsii$Proxy) o;

            if (!domainIdList.equals(that.domainIdList)) return false;
            if (!gatewayUniqueId.equals(that.gatewayUniqueId)) return false;
            if (!name.equals(that.name)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.destinationType != null ? !this.destinationType.equals(that.destinationType) : that.destinationType != null) return false;
            if (this.directResponseJson != null ? !this.directResponseJson.equals(that.directResponseJson) : that.directResponseJson != null) return false;
            if (this.domainId != null ? !this.domainId.equals(that.domainId) : that.domainId != null) return false;
            if (this.fallback != null ? !this.fallback.equals(that.fallback) : that.fallback != null) return false;
            if (this.fallbackServices != null ? !this.fallbackServices.equals(that.fallbackServices) : that.fallbackServices != null) return false;
            if (this.gatewayId != null ? !this.gatewayId.equals(that.gatewayId) : that.gatewayId != null) return false;
            if (this.policies != null ? !this.policies.equals(that.policies) : that.policies != null) return false;
            if (this.predicates != null ? !this.predicates.equals(that.predicates) : that.predicates != null) return false;
            if (this.redirectJson != null ? !this.redirectJson.equals(that.redirectJson) : that.redirectJson != null) return false;
            if (this.routeOrder != null ? !this.routeOrder.equals(that.routeOrder) : that.routeOrder != null) return false;
            if (this.routeType != null ? !this.routeType.equals(that.routeType) : that.routeType != null) return false;
            return this.services != null ? this.services.equals(that.services) : that.services == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainIdList.hashCode();
            result = 31 * result + (this.gatewayUniqueId.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.destinationType != null ? this.destinationType.hashCode() : 0);
            result = 31 * result + (this.directResponseJson != null ? this.directResponseJson.hashCode() : 0);
            result = 31 * result + (this.domainId != null ? this.domainId.hashCode() : 0);
            result = 31 * result + (this.fallback != null ? this.fallback.hashCode() : 0);
            result = 31 * result + (this.fallbackServices != null ? this.fallbackServices.hashCode() : 0);
            result = 31 * result + (this.gatewayId != null ? this.gatewayId.hashCode() : 0);
            result = 31 * result + (this.policies != null ? this.policies.hashCode() : 0);
            result = 31 * result + (this.predicates != null ? this.predicates.hashCode() : 0);
            result = 31 * result + (this.redirectJson != null ? this.redirectJson.hashCode() : 0);
            result = 31 * result + (this.routeOrder != null ? this.routeOrder.hashCode() : 0);
            result = 31 * result + (this.routeType != null ? this.routeType.hashCode() : 0);
            result = 31 * result + (this.services != null ? this.services.hashCode() : 0);
            return result;
        }
    }
}
