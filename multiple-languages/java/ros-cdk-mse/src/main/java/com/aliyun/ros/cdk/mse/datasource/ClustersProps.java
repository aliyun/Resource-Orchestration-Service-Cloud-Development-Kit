package com.aliyun.ros.cdk.mse.datasource;

/**
 * Properties for defining a <code>DATASOURCE::MSE::Clusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.424Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.datasource.ClustersProps")
@software.amazon.jsii.Jsii.Proxy(ClustersProps.Jsii$Proxy.class)
public interface ClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterAliasName: The alias name of cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterAliasName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClustersProps> {
        java.lang.Object clusterAliasName;

        /**
         * Sets the value of {@link ClustersProps#getClusterAliasName}
         * @param clusterAliasName Property clusterAliasName: The alias name of cluster.
         * @return {@code this}
         */
        public Builder clusterAliasName(java.lang.String clusterAliasName) {
            this.clusterAliasName = clusterAliasName;
            return this;
        }

        /**
         * Sets the value of {@link ClustersProps#getClusterAliasName}
         * @param clusterAliasName Property clusterAliasName: The alias name of cluster.
         * @return {@code this}
         */
        public Builder clusterAliasName(com.aliyun.ros.cdk.core.IResolvable clusterAliasName) {
            this.clusterAliasName = clusterAliasName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClustersProps {
        private final java.lang.Object clusterAliasName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterAliasName = software.amazon.jsii.Kernel.get(this, "clusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterAliasName = builder.clusterAliasName;
        }

        @Override
        public final java.lang.Object getClusterAliasName() {
            return this.clusterAliasName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getClusterAliasName() != null) {
                data.set("clusterAliasName", om.valueToTree(this.getClusterAliasName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.datasource.ClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClustersProps.Jsii$Proxy that = (ClustersProps.Jsii$Proxy) o;

            return this.clusterAliasName != null ? this.clusterAliasName.equals(that.clusterAliasName) : that.clusterAliasName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterAliasName != null ? this.clusterAliasName.hashCode() : 0;
            return result;
        }
    }
}
