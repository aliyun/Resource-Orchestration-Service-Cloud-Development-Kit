package com.aliyun.ros.cdk.eci.datasource;

/**
 * Properties for defining a <code>RosImageCache</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.086Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.datasource.RosImageCacheProps")
@software.amazon.jsii.Jsii.Proxy(RosImageCacheProps.Jsii$Proxy.class)
public interface RosImageCacheProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageCacheId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageCacheProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageCacheProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageCacheProps> {
        java.lang.Object imageCacheId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosImageCacheProps#getImageCacheId}
         * @param imageCacheId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageCacheId(java.lang.String imageCacheId) {
            this.imageCacheId = imageCacheId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImageCacheId}
         * @param imageCacheId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageCacheId(com.aliyun.ros.cdk.core.IResolvable imageCacheId) {
            this.imageCacheId = imageCacheId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageCacheProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageCacheProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageCacheProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageCacheProps {
        private final java.lang.Object imageCacheId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageCacheId = software.amazon.jsii.Kernel.get(this, "imageCacheId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageCacheId = java.util.Objects.requireNonNull(builder.imageCacheId, "imageCacheId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getImageCacheId() {
            return this.imageCacheId;
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

            data.set("imageCacheId", om.valueToTree(this.getImageCacheId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.datasource.RosImageCacheProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageCacheProps.Jsii$Proxy that = (RosImageCacheProps.Jsii$Proxy) o;

            if (!imageCacheId.equals(that.imageCacheId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageCacheId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
