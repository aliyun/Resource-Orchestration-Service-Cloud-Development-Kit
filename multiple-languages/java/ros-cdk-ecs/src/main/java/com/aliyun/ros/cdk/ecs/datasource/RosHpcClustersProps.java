package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ECS::HpcClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:45.802Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosHpcClustersProps")
@software.amazon.jsii.Jsii.Proxy(RosHpcClustersProps.Jsii$Proxy.class)
public interface RosHpcClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosHpcClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHpcClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHpcClustersProps> {
        java.lang.Object hpcClusterIds;

        /**
         * Sets the value of {@link RosHpcClustersProps#getHpcClusterIds}
         * @param hpcClusterIds the value to be set.
         * @return {@code this}
         */
        public Builder hpcClusterIds(com.aliyun.ros.cdk.core.IResolvable hpcClusterIds) {
            this.hpcClusterIds = hpcClusterIds;
            return this;
        }

        /**
         * Sets the value of {@link RosHpcClustersProps#getHpcClusterIds}
         * @param hpcClusterIds the value to be set.
         * @return {@code this}
         */
        public Builder hpcClusterIds(java.util.List<? extends java.lang.Object> hpcClusterIds) {
            this.hpcClusterIds = hpcClusterIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHpcClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHpcClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHpcClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHpcClustersProps {
        private final java.lang.Object hpcClusterIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.hpcClusterIds = software.amazon.jsii.Kernel.get(this, "hpcClusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.hpcClusterIds = builder.hpcClusterIds;
        }

        @Override
        public final java.lang.Object getHpcClusterIds() {
            return this.hpcClusterIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getHpcClusterIds() != null) {
                data.set("hpcClusterIds", om.valueToTree(this.getHpcClusterIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosHpcClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHpcClustersProps.Jsii$Proxy that = (RosHpcClustersProps.Jsii$Proxy) o;

            return this.hpcClusterIds != null ? this.hpcClusterIds.equals(that.hpcClusterIds) : that.hpcClusterIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.hpcClusterIds != null ? this.hpcClusterIds.hashCode() : 0;
            return result;
        }
    }
}
