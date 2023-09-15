package com.aliyun.ros.cdk.cs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::CS::ClusterUserKubeconfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:47.281Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.RosClusterUserKubeconfigProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterUserKubeconfigProps.Jsii$Proxy.class)
public interface RosClusterUserKubeconfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemporaryDurationMinutes() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterUserKubeconfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterUserKubeconfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterUserKubeconfigProps> {
        java.lang.Object clusterId;
        java.lang.Object privateIpAddress;
        java.lang.Object temporaryDurationMinutes;

        /**
         * Sets the value of {@link RosClusterUserKubeconfigProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterUserKubeconfigProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterUserKubeconfigProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.Boolean privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterUserKubeconfigProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterUserKubeconfigProps#getTemporaryDurationMinutes}
         * @param temporaryDurationMinutes the value to be set.
         * @return {@code this}
         */
        public Builder temporaryDurationMinutes(java.lang.Number temporaryDurationMinutes) {
            this.temporaryDurationMinutes = temporaryDurationMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterUserKubeconfigProps#getTemporaryDurationMinutes}
         * @param temporaryDurationMinutes the value to be set.
         * @return {@code this}
         */
        public Builder temporaryDurationMinutes(com.aliyun.ros.cdk.core.IResolvable temporaryDurationMinutes) {
            this.temporaryDurationMinutes = temporaryDurationMinutes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterUserKubeconfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterUserKubeconfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterUserKubeconfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterUserKubeconfigProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object temporaryDurationMinutes;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.temporaryDurationMinutes = software.amazon.jsii.Kernel.get(this, "temporaryDurationMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.privateIpAddress = builder.privateIpAddress;
            this.temporaryDurationMinutes = builder.temporaryDurationMinutes;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getTemporaryDurationMinutes() {
            return this.temporaryDurationMinutes;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getTemporaryDurationMinutes() != null) {
                data.set("temporaryDurationMinutes", om.valueToTree(this.getTemporaryDurationMinutes()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.datasource.RosClusterUserKubeconfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterUserKubeconfigProps.Jsii$Proxy that = (RosClusterUserKubeconfigProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            return this.temporaryDurationMinutes != null ? this.temporaryDurationMinutes.equals(that.temporaryDurationMinutes) : that.temporaryDurationMinutes == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.temporaryDurationMinutes != null ? this.temporaryDurationMinutes.hashCode() : 0);
            return result;
        }
    }
}
