package com.aliyun.ros.cdk.arms.datasource;

/**
 * Properties for defining a <code>PrometheusUrl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.780Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.PrometheusUrlProps")
@software.amazon.jsii.Jsii.Proxy(PrometheusUrlProps.Jsii$Proxy.class)
public interface PrometheusUrlProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: Cluster ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrometheusUrlProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrometheusUrlProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrometheusUrlProps> {
        java.lang.Object clusterId;

        /**
         * Sets the value of {@link PrometheusUrlProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusUrlProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrometheusUrlProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrometheusUrlProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrometheusUrlProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrometheusUrlProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.datasource.PrometheusUrlProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrometheusUrlProps.Jsii$Proxy that = (PrometheusUrlProps.Jsii$Proxy) o;

            return this.clusterId != null ? this.clusterId.equals(that.clusterId) : that.clusterId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId != null ? this.clusterId.hashCode() : 0;
            return result;
        }
    }
}
