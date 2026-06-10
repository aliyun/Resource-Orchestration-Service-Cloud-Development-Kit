package com.aliyun.ros.cdk.cms2;

/**
 * Properties for defining a <code>ServiceObservability</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:59:01.362Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.ServiceObservabilityProps")
@software.amazon.jsii.Jsii.Proxy(ServiceObservabilityProps.Jsii$Proxy.class)
public interface ServiceObservabilityProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property type: The type of the service observability.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property workspace: The workspace of the service observability.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspace();

    /**
     * @return a {@link Builder} of {@link ServiceObservabilityProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServiceObservabilityProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServiceObservabilityProps> {
        java.lang.Object type;
        java.lang.Object workspace;

        /**
         * Sets the value of {@link ServiceObservabilityProps#getType}
         * @param type Property type: The type of the service observability. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ServiceObservabilityProps#getType}
         * @param type Property type: The type of the service observability. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ServiceObservabilityProps#getWorkspace}
         * @param workspace Property workspace: The workspace of the service observability. This parameter is required.
         * @return {@code this}
         */
        public Builder workspace(java.lang.String workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link ServiceObservabilityProps#getWorkspace}
         * @param workspace Property workspace: The workspace of the service observability. This parameter is required.
         * @return {@code this}
         */
        public Builder workspace(com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServiceObservabilityProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServiceObservabilityProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServiceObservabilityProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceObservabilityProps {
        private final java.lang.Object type;
        private final java.lang.Object workspace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspace = software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.workspace = java.util.Objects.requireNonNull(builder.workspace, "workspace is required");
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("type", om.valueToTree(this.getType()));
            data.set("workspace", om.valueToTree(this.getWorkspace()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.ServiceObservabilityProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServiceObservabilityProps.Jsii$Proxy that = (ServiceObservabilityProps.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            return this.workspace.equals(that.workspace);
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.workspace.hashCode());
            return result;
        }
    }
}
