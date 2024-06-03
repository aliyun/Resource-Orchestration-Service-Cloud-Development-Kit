package com.aliyun.ros.cdk.cs.datasource;

/**
 * Properties for defining a <code>RosKubernetesCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.692Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.RosKubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosKubernetesClusterProps.Jsii$Proxy.class)
public interface RosKubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosKubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosKubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosKubernetesClusterProps> {
        java.lang.Object clusterId;

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getClusterId}
         * @param clusterId the value to be set.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getClusterId}
         * @param clusterId the value to be set.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosKubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosKubernetesClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosKubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosKubernetesClusterProps {
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
            this.clusterId = builder.clusterId;
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

            if (this.getClusterId() != null) {
                data.set("clusterId", om.valueToTree(this.getClusterId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.datasource.RosKubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosKubernetesClusterProps.Jsii$Proxy that = (RosKubernetesClusterProps.Jsii$Proxy) o;

            return this.clusterId != null ? this.clusterId.equals(that.clusterId) : that.clusterId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId != null ? this.clusterId.hashCode() : 0;
            return result;
        }
    }
}
