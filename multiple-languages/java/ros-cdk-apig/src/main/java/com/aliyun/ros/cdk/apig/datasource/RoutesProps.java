package com.aliyun.ros.cdk.apig.datasource;

/**
 * Properties for defining a <code>Routes</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.103Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.datasource.RoutesProps")
@software.amazon.jsii.Jsii.Proxy(RoutesProps.Jsii$Proxy.class)
public interface RoutesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property httpApiId: HTTP API ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiId();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property routeName: The name of the route.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RoutesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RoutesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RoutesProps> {
        java.lang.Object httpApiId;
        java.lang.Object refreshOptions;
        java.lang.Object routeName;

        /**
         * Sets the value of {@link RoutesProps#getHttpApiId}
         * @param httpApiId Property httpApiId: HTTP API ID. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(java.lang.String httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link RoutesProps#getHttpApiId}
         * @param httpApiId Property httpApiId: HTTP API ID. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(com.aliyun.ros.cdk.core.IResolvable httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link RoutesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RoutesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RoutesProps#getRouteName}
         * @param routeName Property routeName: The name of the route.
         * @return {@code this}
         */
        public Builder routeName(java.lang.String routeName) {
            this.routeName = routeName;
            return this;
        }

        /**
         * Sets the value of {@link RoutesProps#getRouteName}
         * @param routeName Property routeName: The name of the route.
         * @return {@code this}
         */
        public Builder routeName(com.aliyun.ros.cdk.core.IResolvable routeName) {
            this.routeName = routeName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RoutesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RoutesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RoutesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RoutesProps {
        private final java.lang.Object httpApiId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object routeName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.httpApiId = software.amazon.jsii.Kernel.get(this, "httpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeName = software.amazon.jsii.Kernel.get(this, "routeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.httpApiId = java.util.Objects.requireNonNull(builder.httpApiId, "httpApiId is required");
            this.refreshOptions = builder.refreshOptions;
            this.routeName = builder.routeName;
        }

        @Override
        public final java.lang.Object getHttpApiId() {
            return this.httpApiId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getRouteName() {
            return this.routeName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("httpApiId", om.valueToTree(this.getHttpApiId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getRouteName() != null) {
                data.set("routeName", om.valueToTree(this.getRouteName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.datasource.RoutesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RoutesProps.Jsii$Proxy that = (RoutesProps.Jsii$Proxy) o;

            if (!httpApiId.equals(that.httpApiId)) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.routeName != null ? this.routeName.equals(that.routeName) : that.routeName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.httpApiId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.routeName != null ? this.routeName.hashCode() : 0);
            return result;
        }
    }
}
