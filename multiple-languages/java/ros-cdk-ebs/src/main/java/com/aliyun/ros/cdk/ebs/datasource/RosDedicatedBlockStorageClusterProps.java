package com.aliyun.ros.cdk.ebs.datasource;

/**
 * Properties for defining a <code>RosDedicatedBlockStorageCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.338Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.datasource.RosDedicatedBlockStorageClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosDedicatedBlockStorageClusterProps.Jsii$Proxy.class)
public interface RosDedicatedBlockStorageClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDedicatedBlockStorageClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDedicatedBlockStorageClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDedicatedBlockStorageClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDedicatedBlockStorageClusterProps> {
        java.lang.Object dedicatedBlockStorageClusterId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getDedicatedBlockStorageClusterId}
         * @param dedicatedBlockStorageClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedBlockStorageClusterId(java.lang.String dedicatedBlockStorageClusterId) {
            this.dedicatedBlockStorageClusterId = dedicatedBlockStorageClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getDedicatedBlockStorageClusterId}
         * @param dedicatedBlockStorageClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedBlockStorageClusterId(com.aliyun.ros.cdk.core.IResolvable dedicatedBlockStorageClusterId) {
            this.dedicatedBlockStorageClusterId = dedicatedBlockStorageClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDedicatedBlockStorageClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDedicatedBlockStorageClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDedicatedBlockStorageClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDedicatedBlockStorageClusterProps {
        private final java.lang.Object dedicatedBlockStorageClusterId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedBlockStorageClusterId = software.amazon.jsii.Kernel.get(this, "dedicatedBlockStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedBlockStorageClusterId = java.util.Objects.requireNonNull(builder.dedicatedBlockStorageClusterId, "dedicatedBlockStorageClusterId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDedicatedBlockStorageClusterId() {
            return this.dedicatedBlockStorageClusterId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dedicatedBlockStorageClusterId", om.valueToTree(this.getDedicatedBlockStorageClusterId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.datasource.RosDedicatedBlockStorageClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDedicatedBlockStorageClusterProps.Jsii$Proxy that = (RosDedicatedBlockStorageClusterProps.Jsii$Proxy) o;

            if (!dedicatedBlockStorageClusterId.equals(that.dedicatedBlockStorageClusterId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedBlockStorageClusterId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
