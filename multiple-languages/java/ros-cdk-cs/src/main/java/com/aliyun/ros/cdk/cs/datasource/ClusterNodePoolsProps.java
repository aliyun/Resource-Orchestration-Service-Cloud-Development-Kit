package com.aliyun.ros.cdk.cs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::CS::ClusterNodePools</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.978Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps")
@software.amazon.jsii.Jsii.Proxy(ClusterNodePoolsProps.Jsii$Proxy.class)
public interface ClusterNodePoolsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: Cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * @return a {@link Builder} of {@link ClusterNodePoolsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterNodePoolsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterNodePoolsProps> {
        java.lang.Object clusterId;

        /**
         * Sets the value of {@link ClusterNodePoolsProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterNodePoolsProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterNodePoolsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterNodePoolsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterNodePoolsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterNodePoolsProps {
        private final java.lang.Object clusterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterNodePoolsProps.Jsii$Proxy that = (ClusterNodePoolsProps.Jsii$Proxy) o;

            return this.clusterId.equals(that.clusterId);
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            return result;
        }
    }
}
