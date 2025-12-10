package com.aliyun.ros.cdk.flink;

/**
 * Properties for defining a <code>NamespaceV2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespacev2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.119Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.flink.$Module.class, fqn = "@alicloud/ros-cdk-flink.NamespaceV2Props")
@software.amazon.jsii.Jsii.Proxy(NamespaceV2Props.Jsii$Proxy.class)
public interface NamespaceV2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property namespace: Project space name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     * Property resourceSpec: Resource specifications.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NamespaceV2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NamespaceV2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NamespaceV2Props> {
        java.lang.Object instanceId;
        java.lang.Object namespace;
        java.lang.Object resourceSpec;

        /**
         * Sets the value of {@link NamespaceV2Props#getInstanceId}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceV2Props#getInstanceId}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceV2Props#getNamespace}
         * @param namespace Property namespace: Project space name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceV2Props#getNamespace}
         * @param namespace Property namespace: Project space name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceV2Props#getResourceSpec}
         * @param resourceSpec Property resourceSpec: Resource specifications.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.core.IResolvable resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceV2Props#getResourceSpec}
         * @param resourceSpec Property resourceSpec: Resource specifications.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.flink.RosNamespaceV2.ResourceSpecProperty resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NamespaceV2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NamespaceV2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NamespaceV2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NamespaceV2Props {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-flink.NamespaceV2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NamespaceV2Props.Jsii$Proxy that = (NamespaceV2Props.Jsii$Proxy) o;

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
