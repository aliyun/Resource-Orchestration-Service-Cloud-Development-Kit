package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>ALIYUN::CS::ClusterApplication</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.797Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ClusterApplicationProps.Jsii$Proxy.class)
public interface ClusterApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property yamlContent: The yaml content of application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getYamlContent();

    /**
     * Property defaultNamespace: The default namespace for the application, default value is default.
     * <p>
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultNamespace() {
        return null;
    }

    /**
     * Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
     * <p>
     * If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultNamespaceDeletion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterApplicationProps> {
        java.lang.Object clusterId;
        java.lang.Object yamlContent;
        java.lang.Object defaultNamespace;
        java.lang.Object defaultNamespaceDeletion;

        /**
         * Sets the value of {@link ClusterApplicationProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getYamlContent}
         * @param yamlContent Property yamlContent: The yaml content of application. This parameter is required.
         * @return {@code this}
         */
        public Builder yamlContent(java.lang.String yamlContent) {
            this.yamlContent = yamlContent;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getYamlContent}
         * @param yamlContent Property yamlContent: The yaml content of application. This parameter is required.
         * @return {@code this}
         */
        public Builder yamlContent(com.aliyun.ros.cdk.core.IResolvable yamlContent) {
            this.yamlContent = yamlContent;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespace}
         * @param defaultNamespace Property defaultNamespace: The default namespace for the application, default value is default.
         *                         If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
         * @return {@code this}
         */
        public Builder defaultNamespace(java.lang.String defaultNamespace) {
            this.defaultNamespace = defaultNamespace;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespace}
         * @param defaultNamespace Property defaultNamespace: The default namespace for the application, default value is default.
         *                         If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
         * @return {@code this}
         */
        public Builder defaultNamespace(com.aliyun.ros.cdk.core.IResolvable defaultNamespace) {
            this.defaultNamespace = defaultNamespace;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespaceDeletion}
         * @param defaultNamespaceDeletion Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
         *                                 If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
         * @return {@code this}
         */
        public Builder defaultNamespaceDeletion(java.lang.Boolean defaultNamespaceDeletion) {
            this.defaultNamespaceDeletion = defaultNamespaceDeletion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespaceDeletion}
         * @param defaultNamespaceDeletion Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
         *                                 If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
         * @return {@code this}
         */
        public Builder defaultNamespaceDeletion(com.aliyun.ros.cdk.core.IResolvable defaultNamespaceDeletion) {
            this.defaultNamespaceDeletion = defaultNamespaceDeletion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterApplicationProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object yamlContent;
        private final java.lang.Object defaultNamespace;
        private final java.lang.Object defaultNamespaceDeletion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.yamlContent = software.amazon.jsii.Kernel.get(this, "yamlContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultNamespace = software.amazon.jsii.Kernel.get(this, "defaultNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultNamespaceDeletion = software.amazon.jsii.Kernel.get(this, "defaultNamespaceDeletion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.yamlContent = java.util.Objects.requireNonNull(builder.yamlContent, "yamlContent is required");
            this.defaultNamespace = builder.defaultNamespace;
            this.defaultNamespaceDeletion = builder.defaultNamespaceDeletion;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getYamlContent() {
            return this.yamlContent;
        }

        @Override
        public final java.lang.Object getDefaultNamespace() {
            return this.defaultNamespace;
        }

        @Override
        public final java.lang.Object getDefaultNamespaceDeletion() {
            return this.defaultNamespaceDeletion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("yamlContent", om.valueToTree(this.getYamlContent()));
            if (this.getDefaultNamespace() != null) {
                data.set("defaultNamespace", om.valueToTree(this.getDefaultNamespace()));
            }
            if (this.getDefaultNamespaceDeletion() != null) {
                data.set("defaultNamespaceDeletion", om.valueToTree(this.getDefaultNamespaceDeletion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.ClusterApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterApplicationProps.Jsii$Proxy that = (ClusterApplicationProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!yamlContent.equals(that.yamlContent)) return false;
            if (this.defaultNamespace != null ? !this.defaultNamespace.equals(that.defaultNamespace) : that.defaultNamespace != null) return false;
            return this.defaultNamespaceDeletion != null ? this.defaultNamespaceDeletion.equals(that.defaultNamespaceDeletion) : that.defaultNamespaceDeletion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.yamlContent.hashCode());
            result = 31 * result + (this.defaultNamespace != null ? this.defaultNamespace.hashCode() : 0);
            result = 31 * result + (this.defaultNamespaceDeletion != null ? this.defaultNamespaceDeletion.hashCode() : 0);
            return result;
        }
    }
}
