package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a `ALIYUN::EDAS::K8sCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:28.998Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.K8sClusterProps")
@software.amazon.jsii.Jsii.Proxy(K8sClusterProps.Jsii$Proxy.class)
public interface K8sClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property csClusterId: The ID of the CS cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCsClusterId();

    /**
     * Property enableAsm: Whether enable ASM.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAsm() {
        return null;
    }

    /**
     * Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link K8sClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link K8sClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<K8sClusterProps> {
        java.lang.Object csClusterId;
        java.lang.Object enableAsm;
        java.lang.Object namespaceId;

        /**
         * Sets the value of {@link K8sClusterProps#getCsClusterId}
         * @param csClusterId Property csClusterId: The ID of the CS cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder csClusterId(java.lang.String csClusterId) {
            this.csClusterId = csClusterId;
            return this;
        }

        /**
         * Sets the value of {@link K8sClusterProps#getCsClusterId}
         * @param csClusterId Property csClusterId: The ID of the CS cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder csClusterId(com.aliyun.ros.cdk.core.IResolvable csClusterId) {
            this.csClusterId = csClusterId;
            return this;
        }

        /**
         * Sets the value of {@link K8sClusterProps#getEnableAsm}
         * @param enableAsm Property enableAsm: Whether enable ASM.
         * @return {@code this}
         */
        public Builder enableAsm(java.lang.String enableAsm) {
            this.enableAsm = enableAsm;
            return this;
        }

        /**
         * Sets the value of {@link K8sClusterProps#getEnableAsm}
         * @param enableAsm Property enableAsm: Whether enable ASM.
         * @return {@code this}
         */
        public Builder enableAsm(com.aliyun.ros.cdk.core.IResolvable enableAsm) {
            this.enableAsm = enableAsm;
            return this;
        }

        /**
         * Sets the value of {@link K8sClusterProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link K8sClusterProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link K8sClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public K8sClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link K8sClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements K8sClusterProps {
        private final java.lang.Object csClusterId;
        private final java.lang.Object enableAsm;
        private final java.lang.Object namespaceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.csClusterId = software.amazon.jsii.Kernel.get(this, "csClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAsm = software.amazon.jsii.Kernel.get(this, "enableAsm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.csClusterId = java.util.Objects.requireNonNull(builder.csClusterId, "csClusterId is required");
            this.enableAsm = builder.enableAsm;
            this.namespaceId = builder.namespaceId;
        }

        @Override
        public final java.lang.Object getCsClusterId() {
            return this.csClusterId;
        }

        @Override
        public final java.lang.Object getEnableAsm() {
            return this.enableAsm;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("csClusterId", om.valueToTree(this.getCsClusterId()));
            if (this.getEnableAsm() != null) {
                data.set("enableAsm", om.valueToTree(this.getEnableAsm()));
            }
            if (this.getNamespaceId() != null) {
                data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.K8sClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            K8sClusterProps.Jsii$Proxy that = (K8sClusterProps.Jsii$Proxy) o;

            if (!csClusterId.equals(that.csClusterId)) return false;
            if (this.enableAsm != null ? !this.enableAsm.equals(that.enableAsm) : that.enableAsm != null) return false;
            return this.namespaceId != null ? this.namespaceId.equals(that.namespaceId) : that.namespaceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.csClusterId.hashCode();
            result = 31 * result + (this.enableAsm != null ? this.enableAsm.hashCode() : 0);
            result = 31 * result + (this.namespaceId != null ? this.namespaceId.hashCode() : 0);
            return result;
        }
    }
}
