package com.aliyun.ros.cdk.vod.datasource;

/**
 * Properties for defining a <code>Storage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.168Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.datasource.StorageProps")
@software.amazon.jsii.Jsii.Proxy(StorageProps.Jsii$Proxy.class)
public interface StorageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property storageLocation: The ID of the Storage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageLocation();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StorageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StorageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StorageProps> {
        java.lang.Object storageLocation;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link StorageProps#getStorageLocation}
         * @param storageLocation Property storageLocation: The ID of the Storage. This parameter is required.
         * @return {@code this}
         */
        public Builder storageLocation(java.lang.String storageLocation) {
            this.storageLocation = storageLocation;
            return this;
        }

        /**
         * Sets the value of {@link StorageProps#getStorageLocation}
         * @param storageLocation Property storageLocation: The ID of the Storage. This parameter is required.
         * @return {@code this}
         */
        public Builder storageLocation(com.aliyun.ros.cdk.core.IResolvable storageLocation) {
            this.storageLocation = storageLocation;
            return this;
        }

        /**
         * Sets the value of {@link StorageProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link StorageProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StorageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StorageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StorageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StorageProps {
        private final java.lang.Object storageLocation;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.storageLocation = software.amazon.jsii.Kernel.get(this, "storageLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.storageLocation = java.util.Objects.requireNonNull(builder.storageLocation, "storageLocation is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getStorageLocation() {
            return this.storageLocation;
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

            data.set("storageLocation", om.valueToTree(this.getStorageLocation()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vod.datasource.StorageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StorageProps.Jsii$Proxy that = (StorageProps.Jsii$Proxy) o;

            if (!storageLocation.equals(that.storageLocation)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.storageLocation.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
