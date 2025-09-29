package com.aliyun.ros.cdk.apig.datasource;

/**
 * Properties for defining a <code>Plugins</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugins
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.067Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.datasource.PluginsProps")
@software.amazon.jsii.Jsii.Proxy(PluginsProps.Jsii$Proxy.class)
public interface PluginsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
        return null;
    }

    /**
     * Property pluginClassId: The ID of the plugin class.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPluginClassId() {
        return null;
    }

    /**
     * Property pluginClassName: The name of the plugin class.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPluginClassName() {
        return null;
    }

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
     * @return a {@link Builder} of {@link PluginsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PluginsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PluginsProps> {
        java.lang.Object gatewayId;
        java.lang.Object pluginClassId;
        java.lang.Object pluginClassName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link PluginsProps#getGatewayId}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link PluginsProps#getGatewayId}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link PluginsProps#getPluginClassId}
         * @param pluginClassId Property pluginClassId: The ID of the plugin class.
         * @return {@code this}
         */
        public Builder pluginClassId(java.lang.String pluginClassId) {
            this.pluginClassId = pluginClassId;
            return this;
        }

        /**
         * Sets the value of {@link PluginsProps#getPluginClassId}
         * @param pluginClassId Property pluginClassId: The ID of the plugin class.
         * @return {@code this}
         */
        public Builder pluginClassId(com.aliyun.ros.cdk.core.IResolvable pluginClassId) {
            this.pluginClassId = pluginClassId;
            return this;
        }

        /**
         * Sets the value of {@link PluginsProps#getPluginClassName}
         * @param pluginClassName Property pluginClassName: The name of the plugin class.
         * @return {@code this}
         */
        public Builder pluginClassName(java.lang.String pluginClassName) {
            this.pluginClassName = pluginClassName;
            return this;
        }

        /**
         * Sets the value of {@link PluginsProps#getPluginClassName}
         * @param pluginClassName Property pluginClassName: The name of the plugin class.
         * @return {@code this}
         */
        public Builder pluginClassName(com.aliyun.ros.cdk.core.IResolvable pluginClassName) {
            this.pluginClassName = pluginClassName;
            return this;
        }

        /**
         * Sets the value of {@link PluginsProps#getRefreshOptions}
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
         * Sets the value of {@link PluginsProps#getRefreshOptions}
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
         * Builds the configured instance.
         * @return a new instance of {@link PluginsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PluginsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PluginsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginsProps {
        private final java.lang.Object gatewayId;
        private final java.lang.Object pluginClassId;
        private final java.lang.Object pluginClassName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginClassId = software.amazon.jsii.Kernel.get(this, "pluginClassId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginClassName = software.amazon.jsii.Kernel.get(this, "pluginClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = builder.gatewayId;
            this.pluginClassId = builder.pluginClassId;
            this.pluginClassName = builder.pluginClassName;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getPluginClassId() {
            return this.pluginClassId;
        }

        @Override
        public final java.lang.Object getPluginClassName() {
            return this.pluginClassName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGatewayId() != null) {
                data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            }
            if (this.getPluginClassId() != null) {
                data.set("pluginClassId", om.valueToTree(this.getPluginClassId()));
            }
            if (this.getPluginClassName() != null) {
                data.set("pluginClassName", om.valueToTree(this.getPluginClassName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.datasource.PluginsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PluginsProps.Jsii$Proxy that = (PluginsProps.Jsii$Proxy) o;

            if (this.gatewayId != null ? !this.gatewayId.equals(that.gatewayId) : that.gatewayId != null) return false;
            if (this.pluginClassId != null ? !this.pluginClassId.equals(that.pluginClassId) : that.pluginClassId != null) return false;
            if (this.pluginClassName != null ? !this.pluginClassName.equals(that.pluginClassName) : that.pluginClassName != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId != null ? this.gatewayId.hashCode() : 0;
            result = 31 * result + (this.pluginClassId != null ? this.pluginClassId.hashCode() : 0);
            result = 31 * result + (this.pluginClassName != null ? this.pluginClassName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
