package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::AnyCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:39.764Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.AnyClusterProps")
@software.amazon.jsii.Jsii.Proxy(AnyClusterProps.Jsii$Proxy.class)
public interface AnyClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterConfig: Cluster config.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterConfig();

    /**
     * @return a {@link Builder} of {@link AnyClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AnyClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AnyClusterProps> {
        java.lang.Object clusterConfig;

        /**
         * Sets the value of {@link AnyClusterProps#getClusterConfig}
         * @param clusterConfig Property clusterConfig: Cluster config. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> clusterConfig) {
            this.clusterConfig = clusterConfig;
            return this;
        }

        /**
         * Sets the value of {@link AnyClusterProps#getClusterConfig}
         * @param clusterConfig Property clusterConfig: Cluster config. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterConfig(com.aliyun.ros.cdk.core.IResolvable clusterConfig) {
            this.clusterConfig = clusterConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AnyClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AnyClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AnyClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AnyClusterProps {
        private final java.lang.Object clusterConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterConfig = software.amazon.jsii.Kernel.get(this, "clusterConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterConfig = java.util.Objects.requireNonNull(builder.clusterConfig, "clusterConfig is required");
        }

        @Override
        public final java.lang.Object getClusterConfig() {
            return this.clusterConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterConfig", om.valueToTree(this.getClusterConfig()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.AnyClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AnyClusterProps.Jsii$Proxy that = (AnyClusterProps.Jsii$Proxy) o;

            return this.clusterConfig.equals(that.clusterConfig);
        }

        @Override
        public final int hashCode() {
            int result = this.clusterConfig.hashCode();
            return result;
        }
    }
}
