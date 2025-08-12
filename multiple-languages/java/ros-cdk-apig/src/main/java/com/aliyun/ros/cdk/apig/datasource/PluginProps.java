package com.aliyun.ros.cdk.apig.datasource;

/**
 * Properties for defining a <code>Plugin</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.659Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.datasource.PluginProps")
@software.amazon.jsii.Jsii.Proxy(PluginProps.Jsii$Proxy.class)
public interface PluginProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property pluginId: The ID of the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginId();

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
     * @return a {@link Builder} of {@link PluginProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PluginProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PluginProps> {
        java.lang.Object pluginId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link PluginProps#getPluginId}
         * @param pluginId Property pluginId: The ID of the plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginId(java.lang.String pluginId) {
            this.pluginId = pluginId;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getPluginId}
         * @param pluginId Property pluginId: The ID of the plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
            this.pluginId = pluginId;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getRefreshOptions}
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
         * Sets the value of {@link PluginProps#getRefreshOptions}
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
         * @return a new instance of {@link PluginProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PluginProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PluginProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginProps {
        private final java.lang.Object pluginId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pluginId = java.util.Objects.requireNonNull(builder.pluginId, "pluginId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getPluginId() {
            return this.pluginId;
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

            data.set("pluginId", om.valueToTree(this.getPluginId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.datasource.PluginProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PluginProps.Jsii$Proxy that = (PluginProps.Jsii$Proxy) o;

            if (!pluginId.equals(that.pluginId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pluginId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
