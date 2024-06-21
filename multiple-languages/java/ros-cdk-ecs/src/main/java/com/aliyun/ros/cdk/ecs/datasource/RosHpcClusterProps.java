package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>RosHpcCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:09.559Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosHpcClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosHpcClusterProps.Jsii$Proxy.class)
public interface RosHpcClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHpcClusterId();

    /**
     * @return a {@link Builder} of {@link RosHpcClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHpcClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHpcClusterProps> {
        java.lang.Object hpcClusterId;

        /**
         * Sets the value of {@link RosHpcClusterProps#getHpcClusterId}
         * @param hpcClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosHpcClusterProps#getHpcClusterId}
         * @param hpcClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHpcClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHpcClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHpcClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHpcClusterProps {
        private final java.lang.Object hpcClusterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.hpcClusterId = java.util.Objects.requireNonNull(builder.hpcClusterId, "hpcClusterId is required");
        }

        @Override
        public final java.lang.Object getHpcClusterId() {
            return this.hpcClusterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("hpcClusterId", om.valueToTree(this.getHpcClusterId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosHpcClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHpcClusterProps.Jsii$Proxy that = (RosHpcClusterProps.Jsii$Proxy) o;

            return this.hpcClusterId.equals(that.hpcClusterId);
        }

        @Override
        public final int hashCode() {
            int result = this.hpcClusterId.hashCode();
            return result;
        }
    }
}
