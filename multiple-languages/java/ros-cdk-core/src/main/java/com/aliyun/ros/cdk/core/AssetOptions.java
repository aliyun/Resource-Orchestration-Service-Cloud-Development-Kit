package com.aliyun.ros.cdk.core;

/**
 * Asset hash options.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:06.794Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.AssetOptions")
@software.amazon.jsii.Jsii.Proxy(AssetOptions.Jsii$Proxy.class)
public interface AssetOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Specify a custom hash for this asset.
     * <p>
     * If <code>assetHashType</code> is set it must
     * be set to <code>AssetHashType.CUSTOM</code>. For consistency, this custom hash will
     * be SHA256 hashed and encoded as hex. The resulting hash will be the asset
     * hash.
     * <p>
     * NOTE: the hash is used in order to identify a specific revision of the asset, and
     * used for optimizing and caching deployment activities related to this asset such as
     * packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
     * need to make sure it is updated every time the asset changes, or otherwise it is
     * possible that some deployments will not be invalidated.
     * <p>
     * Default: - based on `assetHashType`
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAssetHash() {
        return null;
    }

    /**
     * Specifies the type of hash to calculate for this asset.
     * <p>
     * If <code>assetHash</code> is configured, this option must be <code>undefined</code> or
     * <code>AssetHashType.CUSTOM</code>.
     * <p>
     * Default: - the default is `AssetHashType.SOURCE`, but if `assetHash` is
     * explicitly specified this value defaults to `AssetHashType.CUSTOM`.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.AssetHashType getAssetHashType() {
        return null;
    }

    /**
     * Bundle the asset by executing a command in a Docker container or a custom bundling provider.
     * <p>
     * The asset path will be mounted at <code>/asset-input</code>. The Docker
     * container is responsible for putting content at <code>/asset-output</code>.
     * The content at <code>/asset-output</code> will be zipped and used as the
     * final asset.
     * <p>
     * Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file,
     * archived into a .zip file and uploaded to OSS bucket otherwise.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.BundlingOptions getBundling() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AssetOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AssetOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AssetOptions> {
        java.lang.String assetHash;
        com.aliyun.ros.cdk.core.AssetHashType assetHashType;
        com.aliyun.ros.cdk.core.BundlingOptions bundling;

        /**
         * Sets the value of {@link AssetOptions#getAssetHash}
         * @param assetHash Specify a custom hash for this asset.
         *                  If <code>assetHashType</code> is set it must
         *                  be set to <code>AssetHashType.CUSTOM</code>. For consistency, this custom hash will
         *                  be SHA256 hashed and encoded as hex. The resulting hash will be the asset
         *                  hash.
         *                  <p>
         *                  NOTE: the hash is used in order to identify a specific revision of the asset, and
         *                  used for optimizing and caching deployment activities related to this asset such as
         *                  packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
         *                  need to make sure it is updated every time the asset changes, or otherwise it is
         *                  possible that some deployments will not be invalidated.
         * @return {@code this}
         */
        public Builder assetHash(java.lang.String assetHash) {
            this.assetHash = assetHash;
            return this;
        }

        /**
         * Sets the value of {@link AssetOptions#getAssetHashType}
         * @param assetHashType Specifies the type of hash to calculate for this asset.
         *                      If <code>assetHash</code> is configured, this option must be <code>undefined</code> or
         *                      <code>AssetHashType.CUSTOM</code>.
         * @return {@code this}
         */
        public Builder assetHashType(com.aliyun.ros.cdk.core.AssetHashType assetHashType) {
            this.assetHashType = assetHashType;
            return this;
        }

        /**
         * Sets the value of {@link AssetOptions#getBundling}
         * @param bundling Bundle the asset by executing a command in a Docker container or a custom bundling provider.
         *                 The asset path will be mounted at <code>/asset-input</code>. The Docker
         *                 container is responsible for putting content at <code>/asset-output</code>.
         *                 The content at <code>/asset-output</code> will be zipped and used as the
         *                 final asset.
         * @return {@code this}
         */
        public Builder bundling(com.aliyun.ros.cdk.core.BundlingOptions bundling) {
            this.bundling = bundling;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AssetOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AssetOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AssetOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssetOptions {
        private final java.lang.String assetHash;
        private final com.aliyun.ros.cdk.core.AssetHashType assetHashType;
        private final com.aliyun.ros.cdk.core.BundlingOptions bundling;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.assetHash = software.amazon.jsii.Kernel.get(this, "assetHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.assetHashType = software.amazon.jsii.Kernel.get(this, "assetHashType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.AssetHashType.class));
            this.bundling = software.amazon.jsii.Kernel.get(this, "bundling", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.BundlingOptions.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.assetHash = builder.assetHash;
            this.assetHashType = builder.assetHashType;
            this.bundling = builder.bundling;
        }

        @Override
        public final java.lang.String getAssetHash() {
            return this.assetHash;
        }

        @Override
        public final com.aliyun.ros.cdk.core.AssetHashType getAssetHashType() {
            return this.assetHashType;
        }

        @Override
        public final com.aliyun.ros.cdk.core.BundlingOptions getBundling() {
            return this.bundling;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAssetHash() != null) {
                data.set("assetHash", om.valueToTree(this.getAssetHash()));
            }
            if (this.getAssetHashType() != null) {
                data.set("assetHashType", om.valueToTree(this.getAssetHashType()));
            }
            if (this.getBundling() != null) {
                data.set("bundling", om.valueToTree(this.getBundling()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.AssetOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AssetOptions.Jsii$Proxy that = (AssetOptions.Jsii$Proxy) o;

            if (this.assetHash != null ? !this.assetHash.equals(that.assetHash) : that.assetHash != null) return false;
            if (this.assetHashType != null ? !this.assetHashType.equals(that.assetHashType) : that.assetHashType != null) return false;
            return this.bundling != null ? this.bundling.equals(that.bundling) : that.bundling == null;
        }

        @Override
        public final int hashCode() {
            int result = this.assetHash != null ? this.assetHash.hashCode() : 0;
            result = 31 * result + (this.assetHashType != null ? this.assetHashType.hashCode() : 0);
            result = 31 * result + (this.bundling != null ? this.bundling.hashCode() : 0);
            return result;
        }
    }
}
