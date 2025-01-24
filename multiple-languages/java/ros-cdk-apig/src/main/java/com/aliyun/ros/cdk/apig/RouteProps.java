package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Route</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.694Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RouteProps")
@software.amazon.jsii.Jsii.Proxy(RouteProps.Jsii$Proxy.class)
public interface RouteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property backend: Backend service configuration for routing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackend();

    /**
     * Property environmentInfo: The information if the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentInfo();

    /**
     * Property httpApiId: The ID of the API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiId();

    /**
     * Property match: The match rule of route resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMatch();

    /**
     * Property routeName: The name of the route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteName();

    /**
     * Property description: The description of route.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property domainIds: The list of domain name IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainIds() {
        return null;
    }

    /**
     * Property domainInfos: Domain items.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainInfos() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RouteProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouteProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouteProps> {
        java.lang.Object backend;
        java.lang.Object environmentInfo;
        java.lang.Object httpApiId;
        java.lang.Object match;
        java.lang.Object routeName;
        java.lang.Object description;
        java.lang.Object domainIds;
        java.lang.Object domainInfos;

        /**
         * Sets the value of {@link RouteProps#getBackend}
         * @param backend Property backend: Backend service configuration for routing. This parameter is required.
         * @return {@code this}
         */
        public Builder backend(com.aliyun.ros.cdk.core.IResolvable backend) {
            this.backend = backend;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getBackend}
         * @param backend Property backend: Backend service configuration for routing. This parameter is required.
         * @return {@code this}
         */
        public Builder backend(com.aliyun.ros.cdk.apig.RosRoute.BackendProperty backend) {
            this.backend = backend;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getEnvironmentInfo}
         * @param environmentInfo Property environmentInfo: The information if the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentInfo(com.aliyun.ros.cdk.core.IResolvable environmentInfo) {
            this.environmentInfo = environmentInfo;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getEnvironmentInfo}
         * @param environmentInfo Property environmentInfo: The information if the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentInfo(com.aliyun.ros.cdk.apig.RosRoute.EnvironmentInfoProperty environmentInfo) {
            this.environmentInfo = environmentInfo;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getHttpApiId}
         * @param httpApiId Property httpApiId: The ID of the API. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(java.lang.String httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getHttpApiId}
         * @param httpApiId Property httpApiId: The ID of the API. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(com.aliyun.ros.cdk.core.IResolvable httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getMatch}
         * @param match Property match: The match rule of route resource. This parameter is required.
         * @return {@code this}
         */
        public Builder match(com.aliyun.ros.cdk.core.IResolvable match) {
            this.match = match;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getMatch}
         * @param match Property match: The match rule of route resource. This parameter is required.
         * @return {@code this}
         */
        public Builder match(com.aliyun.ros.cdk.apig.RosRoute.MatchProperty match) {
            this.match = match;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getRouteName}
         * @param routeName Property routeName: The name of the route. This parameter is required.
         * @return {@code this}
         */
        public Builder routeName(java.lang.String routeName) {
            this.routeName = routeName;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getRouteName}
         * @param routeName Property routeName: The name of the route. This parameter is required.
         * @return {@code this}
         */
        public Builder routeName(com.aliyun.ros.cdk.core.IResolvable routeName) {
            this.routeName = routeName;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDescription}
         * @param description Property description: The description of route.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDescription}
         * @param description Property description: The description of route.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDomainIds}
         * @param domainIds Property domainIds: The list of domain name IDs.
         * @return {@code this}
         */
        public Builder domainIds(com.aliyun.ros.cdk.core.IResolvable domainIds) {
            this.domainIds = domainIds;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDomainIds}
         * @param domainIds Property domainIds: The list of domain name IDs.
         * @return {@code this}
         */
        public Builder domainIds(java.util.List<? extends java.lang.Object> domainIds) {
            this.domainIds = domainIds;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDomainInfos}
         * @param domainInfos Property domainInfos: Domain items.
         * @return {@code this}
         */
        public Builder domainInfos(com.aliyun.ros.cdk.core.IResolvable domainInfos) {
            this.domainInfos = domainInfos;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDomainInfos}
         * @param domainInfos Property domainInfos: Domain items.
         * @return {@code this}
         */
        public Builder domainInfos(java.util.List<? extends java.lang.Object> domainInfos) {
            this.domainInfos = domainInfos;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteProps {
        private final java.lang.Object backend;
        private final java.lang.Object environmentInfo;
        private final java.lang.Object httpApiId;
        private final java.lang.Object match;
        private final java.lang.Object routeName;
        private final java.lang.Object description;
        private final java.lang.Object domainIds;
        private final java.lang.Object domainInfos;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backend = software.amazon.jsii.Kernel.get(this, "backend", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentInfo = software.amazon.jsii.Kernel.get(this, "environmentInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpApiId = software.amazon.jsii.Kernel.get(this, "httpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.match = software.amazon.jsii.Kernel.get(this, "match", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeName = software.amazon.jsii.Kernel.get(this, "routeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainIds = software.amazon.jsii.Kernel.get(this, "domainIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainInfos = software.amazon.jsii.Kernel.get(this, "domainInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backend = java.util.Objects.requireNonNull(builder.backend, "backend is required");
            this.environmentInfo = java.util.Objects.requireNonNull(builder.environmentInfo, "environmentInfo is required");
            this.httpApiId = java.util.Objects.requireNonNull(builder.httpApiId, "httpApiId is required");
            this.match = java.util.Objects.requireNonNull(builder.match, "match is required");
            this.routeName = java.util.Objects.requireNonNull(builder.routeName, "routeName is required");
            this.description = builder.description;
            this.domainIds = builder.domainIds;
            this.domainInfos = builder.domainInfos;
        }

        @Override
        public final java.lang.Object getBackend() {
            return this.backend;
        }

        @Override
        public final java.lang.Object getEnvironmentInfo() {
            return this.environmentInfo;
        }

        @Override
        public final java.lang.Object getHttpApiId() {
            return this.httpApiId;
        }

        @Override
        public final java.lang.Object getMatch() {
            return this.match;
        }

        @Override
        public final java.lang.Object getRouteName() {
            return this.routeName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDomainIds() {
            return this.domainIds;
        }

        @Override
        public final java.lang.Object getDomainInfos() {
            return this.domainInfos;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backend", om.valueToTree(this.getBackend()));
            data.set("environmentInfo", om.valueToTree(this.getEnvironmentInfo()));
            data.set("httpApiId", om.valueToTree(this.getHttpApiId()));
            data.set("match", om.valueToTree(this.getMatch()));
            data.set("routeName", om.valueToTree(this.getRouteName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDomainIds() != null) {
                data.set("domainIds", om.valueToTree(this.getDomainIds()));
            }
            if (this.getDomainInfos() != null) {
                data.set("domainInfos", om.valueToTree(this.getDomainInfos()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RouteProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouteProps.Jsii$Proxy that = (RouteProps.Jsii$Proxy) o;

            if (!backend.equals(that.backend)) return false;
            if (!environmentInfo.equals(that.environmentInfo)) return false;
            if (!httpApiId.equals(that.httpApiId)) return false;
            if (!match.equals(that.match)) return false;
            if (!routeName.equals(that.routeName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.domainIds != null ? !this.domainIds.equals(that.domainIds) : that.domainIds != null) return false;
            return this.domainInfos != null ? this.domainInfos.equals(that.domainInfos) : that.domainInfos == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backend.hashCode();
            result = 31 * result + (this.environmentInfo.hashCode());
            result = 31 * result + (this.httpApiId.hashCode());
            result = 31 * result + (this.match.hashCode());
            result = 31 * result + (this.routeName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.domainIds != null ? this.domainIds.hashCode() : 0);
            result = 31 * result + (this.domainInfos != null ? this.domainInfos.hashCode() : 0);
            return result;
        }
    }
}
