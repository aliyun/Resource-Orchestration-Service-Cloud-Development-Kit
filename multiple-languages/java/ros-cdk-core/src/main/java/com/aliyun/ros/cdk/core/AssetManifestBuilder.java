package com.aliyun.ros.cdk.core;

/**
 * Build an asset manifest from assets added to a stack.
 * <p>
 * This class does not need to be used by app builders; it is only necessary for building Stack Synthesizers.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:42.884Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.AssetManifestBuilder")
public class AssetManifestBuilder extends software.amazon.jsii.JsiiObject {

    protected AssetManifestBuilder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AssetManifestBuilder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public AssetManifestBuilder() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Add a docker asset source and destination to the manifest.
     * <p>
     * sourceHash should be unique for every source.
     * <p>
     * @param stack This parameter is required.
     * @param sourceHash This parameter is required.
     * @param source This parameter is required.
     * @param dest This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.DockerImageDestination addDockerImageAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull java.lang.String sourceHash, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.DockerImageSource source, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.DockerImageDestination dest) {
        return software.amazon.jsii.Kernel.call(this, "addDockerImageAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.DockerImageDestination.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(sourceHash, "sourceHash is required"), java.util.Objects.requireNonNull(source, "source is required"), java.util.Objects.requireNonNull(dest, "dest is required") });
    }

    /**
     * Add a file asset source and destination to the manifest.
     * <p>
     * sourceHash should be unique for every source.
     * <p>
     * @param stack This parameter is required.
     * @param sourceHash This parameter is required.
     * @param source This parameter is required.
     * @param dest This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.FileDestination addFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull java.lang.String sourceHash, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.FileSource source, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.FileDestination dest) {
        return software.amazon.jsii.Kernel.call(this, "addFileAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.FileDestination.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(sourceHash, "sourceHash is required"), java.util.Objects.requireNonNull(source, "source is required"), java.util.Objects.requireNonNull(dest, "dest is required") });
    }

    /**
     * Add a docker image asset to the manifest with default settings.
     * <p>
     * Derive the region from the stack, use the asset hash as the key, and set the prefix.
     * <p>
     * @param stack This parameter is required.
     * @param asset This parameter is required.
     * @param target This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.DockerImageDestination defaultAddDockerImageAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DockerImageAssetSource asset, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.AssetManifestDockerImageDestination target) {
        return software.amazon.jsii.Kernel.call(this, "defaultAddDockerImageAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.DockerImageDestination.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(asset, "asset is required"), java.util.Objects.requireNonNull(target, "target is required") });
    }

    /**
     * Add a file asset to the manifest with default settings.
     * <p>
     * Derive the region from the stack, use the asset hash as the key, copy the
     * file extension over, and set the prefix.
     * <p>
     * @param stack This parameter is required.
     * @param asset This parameter is required.
     * @param target This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.FileDestination defaultAddFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetSource asset, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.AssetManifestFileDestination target) {
        return software.amazon.jsii.Kernel.call(this, "defaultAddFileAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.FileDestination.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(asset, "asset is required"), java.util.Objects.requireNonNull(target, "target is required") });
    }

    /**
     * Write the manifest to disk, and add it to the synthesis session.
     * <p>
     * Return the artifact id, which should be added to the <code>additionalDependencies</code>
     * field of the stack artifact.
     * <p>
     * @param stack This parameter is required.
     * @param session This parameter is required.
     * @param options
     * @param dependencies
     */
    public @org.jetbrains.annotations.NotNull java.lang.String emitManifest(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.assembly.schema.AssetManifestOptions options, final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> dependencies) {
        return software.amazon.jsii.Kernel.call(this, "emitManifest", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(session, "session is required"), options, dependencies });
    }

    /**
     * Write the manifest to disk, and add it to the synthesis session.
     * <p>
     * Return the artifact id, which should be added to the <code>additionalDependencies</code>
     * field of the stack artifact.
     * <p>
     * @param stack This parameter is required.
     * @param session This parameter is required.
     * @param options
     */
    public @org.jetbrains.annotations.NotNull java.lang.String emitManifest(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.assembly.schema.AssetManifestOptions options) {
        return software.amazon.jsii.Kernel.call(this, "emitManifest", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(session, "session is required"), options });
    }

    /**
     * Write the manifest to disk, and add it to the synthesis session.
     * <p>
     * Return the artifact id, which should be added to the <code>additionalDependencies</code>
     * field of the stack artifact.
     * <p>
     * @param stack This parameter is required.
     * @param session This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String emitManifest(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        return software.amazon.jsii.Kernel.call(this, "emitManifest", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Whether there are any assets registered in the manifest.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getHasAssets() {
        return software.amazon.jsii.Kernel.get(this, "hasAssets", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }
}
