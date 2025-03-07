package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>ClusterServiceConfigs</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.342Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.ClusterServiceConfigsProps")
@software.amazon.jsii.Jsii.Proxy(ClusterServiceConfigsProps.Jsii$Proxy.class)
public interface ClusterServiceConfigsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property serviceConfigs: Server configs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceConfigs();

    /**
     * @return a {@link Builder} of {@link ClusterServiceConfigsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterServiceConfigsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterServiceConfigsProps> {
        java.lang.Object clusterId;
        java.lang.Object serviceConfigs;

        /**
         * Sets the value of {@link ClusterServiceConfigsProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterServiceConfigsProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterServiceConfigsProps#getServiceConfigs}
         * @param serviceConfigs Property serviceConfigs: Server configs. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfigs(com.aliyun.ros.cdk.core.IResolvable serviceConfigs) {
            this.serviceConfigs = serviceConfigs;
            return this;
        }

        /**
         * Sets the value of {@link ClusterServiceConfigsProps#getServiceConfigs}
         * @param serviceConfigs Property serviceConfigs: Server configs. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfigs(java.util.List<? extends java.lang.Object> serviceConfigs) {
            this.serviceConfigs = serviceConfigs;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterServiceConfigsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterServiceConfigsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterServiceConfigsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterServiceConfigsProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object serviceConfigs;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceConfigs = software.amazon.jsii.Kernel.get(this, "serviceConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.serviceConfigs = java.util.Objects.requireNonNull(builder.serviceConfigs, "serviceConfigs is required");
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getServiceConfigs() {
            return this.serviceConfigs;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("serviceConfigs", om.valueToTree(this.getServiceConfigs()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.ClusterServiceConfigsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterServiceConfigsProps.Jsii$Proxy that = (ClusterServiceConfigsProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            return this.serviceConfigs.equals(that.serviceConfigs);
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.serviceConfigs.hashCode());
            return result;
        }
    }
}
