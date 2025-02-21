package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * Properties for defining a <code>StorageBundle</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.126Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.StorageBundleProps")
@software.amazon.jsii.Jsii.Proxy(StorageBundleProps.Jsii$Proxy.class)
public interface StorageBundleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property storageBundleName: The name of the gateway cluster.
     * <p>
     * The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageBundleName();

    /**
     * Property description: The description of the gateway cluster.
     * <p>
     * The description must be 0 to 128 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StorageBundleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StorageBundleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StorageBundleProps> {
        java.lang.Object storageBundleName;
        java.lang.Object description;

        /**
         * Sets the value of {@link StorageBundleProps#getStorageBundleName}
         * @param storageBundleName Property storageBundleName: The name of the gateway cluster. This parameter is required.
         *                          The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder storageBundleName(java.lang.String storageBundleName) {
            this.storageBundleName = storageBundleName;
            return this;
        }

        /**
         * Sets the value of {@link StorageBundleProps#getStorageBundleName}
         * @param storageBundleName Property storageBundleName: The name of the gateway cluster. This parameter is required.
         *                          The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder storageBundleName(com.aliyun.ros.cdk.core.IResolvable storageBundleName) {
            this.storageBundleName = storageBundleName;
            return this;
        }

        /**
         * Sets the value of {@link StorageBundleProps#getDescription}
         * @param description Property description: The description of the gateway cluster.
         *                    The description must be 0 to 128 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link StorageBundleProps#getDescription}
         * @param description Property description: The description of the gateway cluster.
         *                    The description must be 0 to 128 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StorageBundleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StorageBundleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StorageBundleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StorageBundleProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudstoragegateway.StorageBundleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StorageBundleProps.Jsii$Proxy that = (StorageBundleProps.Jsii$Proxy) o;

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
