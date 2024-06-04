package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * Properties for defining a <code>RosStorageBundle</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.210Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.RosStorageBundleProps")
@software.amazon.jsii.Jsii.Proxy(RosStorageBundleProps.Jsii$Proxy.class)
public interface RosStorageBundleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageBundleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosStorageBundleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosStorageBundleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosStorageBundleProps> {
        java.lang.Object storageBundleName;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosStorageBundleProps#getStorageBundleName}
         * @param storageBundleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageBundleName(java.lang.String storageBundleName) {
            this.storageBundleName = storageBundleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageBundleProps#getStorageBundleName}
         * @param storageBundleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageBundleName(com.aliyun.ros.cdk.core.IResolvable storageBundleName) {
            this.storageBundleName = storageBundleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageBundleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageBundleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosStorageBundleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosStorageBundleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosStorageBundleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosStorageBundleProps {
        private final java.lang.Object storageBundleName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.storageBundleName = software.amazon.jsii.Kernel.get(this, "storageBundleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.storageBundleName = java.util.Objects.requireNonNull(builder.storageBundleName, "storageBundleName is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getStorageBundleName() {
            return this.storageBundleName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("storageBundleName", om.valueToTree(this.getStorageBundleName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudstoragegateway.RosStorageBundleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosStorageBundleProps.Jsii$Proxy that = (RosStorageBundleProps.Jsii$Proxy) o;

            if (!storageBundleName.equals(that.storageBundleName)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.storageBundleName.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
