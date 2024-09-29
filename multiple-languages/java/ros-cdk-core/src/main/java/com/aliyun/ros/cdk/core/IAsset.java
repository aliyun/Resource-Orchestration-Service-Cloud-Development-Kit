package com.aliyun.ros.cdk.core;

/**
 * Common interface for all assets.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.759Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IAsset")
@software.amazon.jsii.Jsii.Proxy(IAsset.Jsii$Proxy.class)
public interface IAsset extends software.amazon.jsii.JsiiSerializable {

    /**
     * A hash of this asset, which is available at construction time.
     * <p>
     * As this is a plain string, it
     * can be used in construct IDs in order to enforce creation of a new resource when the content
     * hash has changed.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAssetHash();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IAsset.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * A hash of this asset, which is available at construction time.
         * <p>
         * As this is a plain string, it
         * can be used in construct IDs in order to enforce creation of a new resource when the content
         * hash has changed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String getAssetHash() {
            return software.amazon.jsii.Kernel.get(this, "assetHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }

    /**
     * Internal default implementation for {@link IAsset}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAsset {

        /**
         * A hash of this asset, which is available at construction time.
         * <p>
         * As this is a plain string, it
         * can be used in construct IDs in order to enforce creation of a new resource when the content
         * hash has changed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.String getAssetHash() {
            return software.amazon.jsii.Kernel.get(this, "assetHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }
}
