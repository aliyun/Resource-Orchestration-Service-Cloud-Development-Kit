package com.aliyun.ros.cdk.vod;

/**
 * Properties for defining a <code>RosStorage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:35.542Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.RosStorageProps")
@software.amazon.jsii.Jsii.Proxy(RosStorageProps.Jsii$Proxy.class)
public interface RosStorageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageLocation();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultUpload() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosStorageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosStorageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosStorageProps> {
        java.lang.Object storageLocation;
        java.lang.Object storageType;
        java.lang.Object defaultUpload;

        /**
         * Sets the value of {@link RosStorageProps#getStorageLocation}
         * @param storageLocation the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageLocation(java.lang.String storageLocation) {
            this.storageLocation = storageLocation;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageProps#getStorageLocation}
         * @param storageLocation the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageLocation(com.aliyun.ros.cdk.core.IResolvable storageLocation) {
            this.storageLocation = storageLocation;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageProps#getStorageType}
         * @param storageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageProps#getStorageType}
         * @param storageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageProps#getDefaultUpload}
         * @param defaultUpload the value to be set.
         * @return {@code this}
         */
        public Builder defaultUpload(java.lang.Boolean defaultUpload) {
            this.defaultUpload = defaultUpload;
            return this;
        }

        /**
         * Sets the value of {@link RosStorageProps#getDefaultUpload}
         * @param defaultUpload the value to be set.
         * @return {@code this}
         */
        public Builder defaultUpload(com.aliyun.ros.cdk.core.IResolvable defaultUpload) {
            this.defaultUpload = defaultUpload;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosStorageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosStorageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosStorageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosStorageProps {
        private final java.lang.Object storageLocation;
        private final java.lang.Object storageType;
        private final java.lang.Object defaultUpload;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.storageLocation = software.amazon.jsii.Kernel.get(this, "storageLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultUpload = software.amazon.jsii.Kernel.get(this, "defaultUpload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.storageLocation = java.util.Objects.requireNonNull(builder.storageLocation, "storageLocation is required");
            this.storageType = java.util.Objects.requireNonNull(builder.storageType, "storageType is required");
            this.defaultUpload = builder.defaultUpload;
        }

        @Override
        public final java.lang.Object getStorageLocation() {
            return this.storageLocation;
        }

        @Override
        public final java.lang.Object getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.lang.Object getDefaultUpload() {
            return this.defaultUpload;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("storageLocation", om.valueToTree(this.getStorageLocation()));
            data.set("storageType", om.valueToTree(this.getStorageType()));
            if (this.getDefaultUpload() != null) {
                data.set("defaultUpload", om.valueToTree(this.getDefaultUpload()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vod.RosStorageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosStorageProps.Jsii$Proxy that = (RosStorageProps.Jsii$Proxy) o;

            if (!storageLocation.equals(that.storageLocation)) return false;
            if (!storageType.equals(that.storageType)) return false;
            return this.defaultUpload != null ? this.defaultUpload.equals(that.defaultUpload) : that.defaultUpload == null;
        }

        @Override
        public final int hashCode() {
            int result = this.storageLocation.hashCode();
            result = 31 * result + (this.storageType.hashCode());
            result = 31 * result + (this.defaultUpload != null ? this.defaultUpload.hashCode() : 0);
            return result;
        }
    }
}
