package com.aliyun.ros.cdk.cms2.datasource;

/**
 * Properties for defining a <code>RosServiceObservability</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms2-serviceobservability
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:59:01.373Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.datasource.RosServiceObservabilityProps")
@software.amazon.jsii.Jsii.Proxy(RosServiceObservabilityProps.Jsii$Proxy.class)
public interface RosServiceObservabilityProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspace();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosServiceObservabilityProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosServiceObservabilityProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosServiceObservabilityProps> {
        java.lang.Object type;
        java.lang.Object workspace;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosServiceObservabilityProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceObservabilityProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceObservabilityProps#getWorkspace}
         * @param workspace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspace(java.lang.String workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceObservabilityProps#getWorkspace}
         * @param workspace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspace(com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceObservabilityProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceObservabilityProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosServiceObservabilityProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosServiceObservabilityProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosServiceObservabilityProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosServiceObservabilityProps {
        private final java.lang.Object type;
        private final java.lang.Object workspace;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspace = software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.workspace = java.util.Objects.requireNonNull(builder.workspace, "workspace is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getWorkspace() {
            return this.workspace;
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

            data.set("type", om.valueToTree(this.getType()));
            data.set("workspace", om.valueToTree(this.getWorkspace()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.datasource.RosServiceObservabilityProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosServiceObservabilityProps.Jsii$Proxy that = (RosServiceObservabilityProps.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            if (!workspace.equals(that.workspace)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.workspace.hashCode());
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
