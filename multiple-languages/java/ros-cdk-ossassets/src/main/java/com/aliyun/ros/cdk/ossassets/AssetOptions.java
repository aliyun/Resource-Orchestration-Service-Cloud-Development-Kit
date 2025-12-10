package com.aliyun.ros.cdk.ossassets;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.631Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ossassets.$Module.class, fqn = "@alicloud/ros-cdk-ossassets.AssetOptions")
@software.amazon.jsii.Jsii.Proxy(AssetOptions.Jsii$Proxy.class)
public interface AssetOptions extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.FileCopyOptions, com.aliyun.ros.cdk.core.AssetOptions {

    /**
     * Whether or not the asset needs to exist beyond deployment time;
     * <p>
     * i.e.
     * are copied over to a different location and not needed afterwards.
     * Setting this property to true has an impact on the lifecycle of the asset,
     * because we will assume that it is safe to delete after the ROS
     * deployment succeeds.
     * <p>
     * For example, FC Function assets are copied over to Function during
     * deployment. Therefore, it is not necessary to store the asset in OSS bucket,
     * so we consider those deployTime assets.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDeployTime() {
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
        java.lang.Boolean deployTime;
        java.util.List<java.lang.String> exclude;
        com.aliyun.ros.cdk.core.SymlinkFollowMode followSymlinks;
        com.aliyun.ros.cdk.core.IgnoreMode ignoreMode;
        java.lang.String assetHash;
        com.aliyun.ros.cdk.core.AssetHashType assetHashType;
        com.aliyun.ros.cdk.core.BundlingOptions bundling;

        /**
         * Sets the value of {@link AssetOptions#getDeployTime}
         * @param deployTime Whether or not the asset needs to exist beyond deployment time;.
         *                   i.e.
         *                   are copied over to a different location and not needed afterwards.
         *                   Setting this property to true has an impact on the lifecycle of the asset,
         *                   because we will assume that it is safe to delete after the ROS
         *                   deployment succeeds.
         *                   <p>
         *                   For example, FC Function assets are copied over to Function during
         *                   deployment. Therefore, it is not necessary to store the asset in OSS bucket,
         *                   so we consider those deployTime assets.
         * @return {@code this}
         */
        public Builder deployTime(java.lang.Boolean deployTime) {
            this.deployTime = deployTime;
            return this;
        }

        /**
         * Sets the value of {@link AssetOptions#getExclude}
         * @param exclude File paths matching the patterns will be excluded.
         *                See <code>ignoreMode</code> to set the matching behavior.
         *                Has no effect on Assets bundled using the <code>bundling</code> property.
         * @return {@code this}
         */
        public Builder exclude(java.util.List<java.lang.String> exclude) {
            this.exclude = exclude;
            return this;
        }

        /**
         * Sets the value of {@link AssetOptions#getFollowSymlinks}
         * @param followSymlinks A strategy for how to handle symlinks.
         * @return {@code this}
         */
        public Builder followSymlinks(com.aliyun.ros.cdk.core.SymlinkFollowMode followSymlinks) {
            this.followSymlinks = followSymlinks;
            return this;
        }

        /**
         * Sets the value of {@link AssetOptions#getIgnoreMode}
         * @param ignoreMode The ignore behavior to use for <code>exclude</code> patterns.
         * @return {@code this}
         */
        public Builder ignoreMode(com.aliyun.ros.cdk.core.IgnoreMode ignoreMode) {
            this.ignoreMode = ignoreMode;
            return this;
        }

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
        private final java.lang.Boolean deployTime;
        private final java.util.List<java.lang.String> exclude;
        private final com.aliyun.ros.cdk.core.SymlinkFollowMode followSymlinks;
        private final com.aliyun.ros.cdk.core.IgnoreMode ignoreMode;
        private final java.lang.String assetHash;
        private final com.aliyun.ros.cdk.core.AssetHashType assetHashType;
        private final com.aliyun.ros.cdk.core.BundlingOptions bundling;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deployTime = software.amazon.jsii.Kernel.get(this, "deployTime", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.exclude = software.amazon.jsii.Kernel.get(this, "exclude", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.followSymlinks = software.amazon.jsii.Kernel.get(this, "followSymlinks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.SymlinkFollowMode.class));
            this.ignoreMode = software.amazon.jsii.Kernel.get(this, "ignoreMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IgnoreMode.class));
            this.assetHash = software.amazon.jsii.Kernel.get(this, "assetHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.assetHashType = software.amazon.jsii.Kernel.get(this, "assetHashType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.AssetHashType.class));
            this.bundling = software.amazon.jsii.Kernel.get(this, "bundling", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.BundlingOptions.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deployTime = builder.deployTime;
            this.exclude = builder.exclude;
            this.followSymlinks = builder.followSymlinks;
            this.ignoreMode = builder.ignoreMode;
            this.assetHash = builder.assetHash;
            this.assetHashType = builder.assetHashType;
            this.bundling = builder.bundling;
        }

        @Override
        public final java.lang.Boolean getDeployTime() {
            return this.deployTime;
        }

        @Override
        public final java.util.List<java.lang.String> getExclude() {
            return this.exclude;
        }

        @Override
        public final com.aliyun.ros.cdk.core.SymlinkFollowMode getFollowSymlinks() {
            return this.followSymlinks;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IgnoreMode getIgnoreMode() {
            return this.ignoreMode;
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

            if (this.getDeployTime() != null) {
                data.set("deployTime", om.valueToTree(this.getDeployTime()));
            }
            if (this.getExclude() != null) {
                data.set("exclude", om.valueToTree(this.getExclude()));
            }
            if (this.getFollowSymlinks() != null) {
                data.set("followSymlinks", om.valueToTree(this.getFollowSymlinks()));
            }
            if (this.getIgnoreMode() != null) {
                data.set("ignoreMode", om.valueToTree(this.getIgnoreMode()));
            }
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ossassets.AssetOptions"));
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

            if (this.deployTime != null ? !this.deployTime.equals(that.deployTime) : that.deployTime != null) return false;
            if (this.exclude != null ? !this.exclude.equals(that.exclude) : that.exclude != null) return false;
            if (this.followSymlinks != null ? !this.followSymlinks.equals(that.followSymlinks) : that.followSymlinks != null) return false;
            if (this.ignoreMode != null ? !this.ignoreMode.equals(that.ignoreMode) : that.ignoreMode != null) return false;
            if (this.assetHash != null ? !this.assetHash.equals(that.assetHash) : that.assetHash != null) return false;
            if (this.assetHashType != null ? !this.assetHashType.equals(that.assetHashType) : that.assetHashType != null) return false;
            return this.bundling != null ? this.bundling.equals(that.bundling) : that.bundling == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deployTime != null ? this.deployTime.hashCode() : 0;
            result = 31 * result + (this.exclude != null ? this.exclude.hashCode() : 0);
            result = 31 * result + (this.followSymlinks != null ? this.followSymlinks.hashCode() : 0);
            result = 31 * result + (this.ignoreMode != null ? this.ignoreMode.hashCode() : 0);
            result = 31 * result + (this.assetHash != null ? this.assetHash.hashCode() : 0);
            result = 31 * result + (this.assetHashType != null ? this.assetHashType.hashCode() : 0);
            result = 31 * result + (this.bundling != null ? this.bundling.hashCode() : 0);
            return result;
        }
    }
}
