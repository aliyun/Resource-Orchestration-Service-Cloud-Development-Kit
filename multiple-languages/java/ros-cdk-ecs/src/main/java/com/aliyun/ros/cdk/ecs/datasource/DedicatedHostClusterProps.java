package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DedicatedHostCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:14.660Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DedicatedHostClusterProps")
@software.amazon.jsii.Jsii.Proxy(DedicatedHostClusterProps.Jsii$Proxy.class)
public interface DedicatedHostClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dedicatedHostClusterId: Dedicated host cluster id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDedicatedHostClusterId();

    /**
     * @return a {@link Builder} of {@link DedicatedHostClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DedicatedHostClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DedicatedHostClusterProps> {
        java.lang.Object dedicatedHostClusterId;

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getDedicatedHostClusterId}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: Dedicated host cluster id. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterId(java.lang.String dedicatedHostClusterId) {
            this.dedicatedHostClusterId = dedicatedHostClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getDedicatedHostClusterId}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: Dedicated host cluster id. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterId) {
            this.dedicatedHostClusterId = dedicatedHostClusterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DedicatedHostClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DedicatedHostClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DedicatedHostClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DedicatedHostClusterProps {
        private final java.lang.Object dedicatedHostClusterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostClusterId = software.amazon.jsii.Kernel.get(this, "dedicatedHostClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostClusterId = java.util.Objects.requireNonNull(builder.dedicatedHostClusterId, "dedicatedHostClusterId is required");
        }

        @Override
        public final java.lang.Object getDedicatedHostClusterId() {
            return this.dedicatedHostClusterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dedicatedHostClusterId", om.valueToTree(this.getDedicatedHostClusterId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.DedicatedHostClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DedicatedHostClusterProps.Jsii$Proxy that = (DedicatedHostClusterProps.Jsii$Proxy) o;

            return this.dedicatedHostClusterId.equals(that.dedicatedHostClusterId);
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostClusterId.hashCode();
            return result;
        }
    }
}
