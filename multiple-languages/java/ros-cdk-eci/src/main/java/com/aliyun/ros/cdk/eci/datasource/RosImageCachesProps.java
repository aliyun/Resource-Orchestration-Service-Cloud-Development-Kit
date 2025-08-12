package com.aliyun.ros.cdk.eci.datasource;

/**
 * Properties for defining a <code>RosImageCaches</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.datasource.RosImageCachesProps")
@software.amazon.jsii.Jsii.Proxy(RosImageCachesProps.Jsii$Proxy.class)
public interface RosImageCachesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageCacheId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageCacheName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageCachesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageCachesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageCachesProps> {
        java.lang.Object imageCacheId;
        java.lang.Object imageCacheName;
        java.lang.Object limit;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object snapshotId;

        /**
         * Sets the value of {@link RosImageCachesProps#getImageCacheId}
         * @param imageCacheId the value to be set.
         * @return {@code this}
         */
        public Builder imageCacheId(java.lang.String imageCacheId) {
            this.imageCacheId = imageCacheId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getImageCacheId}
         * @param imageCacheId the value to be set.
         * @return {@code this}
         */
        public Builder imageCacheId(com.aliyun.ros.cdk.core.IResolvable imageCacheId) {
            this.imageCacheId = imageCacheId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getImageCacheName}
         * @param imageCacheName the value to be set.
         * @return {@code this}
         */
        public Builder imageCacheName(java.lang.String imageCacheName) {
            this.imageCacheName = imageCacheName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getImageCacheName}
         * @param imageCacheName the value to be set.
         * @return {@code this}
         */
        public Builder imageCacheName(com.aliyun.ros.cdk.core.IResolvable imageCacheName) {
            this.imageCacheName = imageCacheName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getLimit}
         * @param limit the value to be set.
         * @return {@code this}
         */
        public Builder limit(java.lang.Number limit) {
            this.limit = limit;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getLimit}
         * @param limit the value to be set.
         * @return {@code this}
         */
        public Builder limit(com.aliyun.ros.cdk.core.IResolvable limit) {
            this.limit = limit;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCachesProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageCachesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageCachesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageCachesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageCachesProps {
        private final java.lang.Object imageCacheId;
        private final java.lang.Object imageCacheName;
        private final java.lang.Object limit;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object snapshotId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageCacheId = software.amazon.jsii.Kernel.get(this, "imageCacheId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageCacheName = software.amazon.jsii.Kernel.get(this, "imageCacheName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.limit = software.amazon.jsii.Kernel.get(this, "limit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageCacheId = builder.imageCacheId;
            this.imageCacheName = builder.imageCacheName;
            this.limit = builder.limit;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.snapshotId = builder.snapshotId;
        }

        @Override
        public final java.lang.Object getImageCacheId() {
            return this.imageCacheId;
        }

        @Override
        public final java.lang.Object getImageCacheName() {
            return this.imageCacheName;
        }

        @Override
        public final java.lang.Object getLimit() {
            return this.limit;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getImageCacheId() != null) {
                data.set("imageCacheId", om.valueToTree(this.getImageCacheId()));
            }
            if (this.getImageCacheName() != null) {
                data.set("imageCacheName", om.valueToTree(this.getImageCacheName()));
            }
            if (this.getLimit() != null) {
                data.set("limit", om.valueToTree(this.getLimit()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.datasource.RosImageCachesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageCachesProps.Jsii$Proxy that = (RosImageCachesProps.Jsii$Proxy) o;

            if (this.imageCacheId != null ? !this.imageCacheId.equals(that.imageCacheId) : that.imageCacheId != null) return false;
            if (this.imageCacheName != null ? !this.imageCacheName.equals(that.imageCacheName) : that.imageCacheName != null) return false;
            if (this.limit != null ? !this.limit.equals(that.limit) : that.limit != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.snapshotId != null ? this.snapshotId.equals(that.snapshotId) : that.snapshotId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageCacheId != null ? this.imageCacheId.hashCode() : 0;
            result = 31 * result + (this.imageCacheName != null ? this.imageCacheName.hashCode() : 0);
            result = 31 * result + (this.limit != null ? this.limit.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            return result;
        }
    }
}
