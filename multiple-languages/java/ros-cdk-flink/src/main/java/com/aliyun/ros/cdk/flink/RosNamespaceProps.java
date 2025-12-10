package com.aliyun.ros.cdk.flink;

/**
 * Properties for defining a <code>RosNamespace</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.130Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.flink.$Module.class, fqn = "@alicloud/ros-cdk-flink.RosNamespaceProps")
@software.amazon.jsii.Jsii.Proxy(RosNamespaceProps.Jsii$Proxy.class)
public interface RosNamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNamespaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNamespaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNamespaceProps> {
        java.lang.Object instanceId;
        java.lang.Object namespace;
        java.lang.Object resourceSpec;

        /**
         * Sets the value of {@link RosNamespaceProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getResourceSpec}
         * @param resourceSpec the value to be set.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.core.IResolvable resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getResourceSpec}
         * @param resourceSpec the value to be set.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.flink.RosNamespace.ResourceSpecProperty resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNamespaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNamespaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNamespaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNamespaceProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object namespace;
        private final java.lang.Object resourceSpec;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceSpec = software.amazon.jsii.Kernel.get(this, "resourceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.resourceSpec = builder.resourceSpec;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getResourceSpec() {
            return this.resourceSpec;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            if (this.getResourceSpec() != null) {
                data.set("resourceSpec", om.valueToTree(this.getResourceSpec()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-flink.RosNamespaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNamespaceProps.Jsii$Proxy that = (RosNamespaceProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!namespace.equals(that.namespace)) return false;
            return this.resourceSpec != null ? this.resourceSpec.equals(that.resourceSpec) : that.resourceSpec == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.resourceSpec != null ? this.resourceSpec.hashCode() : 0);
            return result;
        }
    }
}
