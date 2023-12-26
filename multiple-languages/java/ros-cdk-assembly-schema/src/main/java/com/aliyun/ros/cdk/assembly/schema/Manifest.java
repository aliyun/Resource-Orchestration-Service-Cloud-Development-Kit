package com.aliyun.ros.cdk.assembly.schema;

/**
 * Protocol utility class.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:13.513Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.Manifest")
public class Manifest extends software.amazon.jsii.JsiiObject {

    protected Manifest(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Manifest(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * (deprecated) Deprecated.
     * <p>
     * @deprecated use <code>loadAssemblyManifest()</code>
     * @param filePath This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.AssemblyManifest load(final @org.jetbrains.annotations.NotNull java.lang.String filePath) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.assembly.schema.Manifest.class, "load", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.AssemblyManifest.class), new Object[] { java.util.Objects.requireNonNull(filePath, "filePath is required") });
    }

    /**
     * Load and validates the cloud assembly manifest from file.
     * <p>
     * @param filePath <ul><li>path to the manifest file.</li></ul> This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.AssemblyManifest loadAssemblyManifest(final @org.jetbrains.annotations.NotNull java.lang.String filePath) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.assembly.schema.Manifest.class, "loadAssemblyManifest", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.AssemblyManifest.class), new Object[] { java.util.Objects.requireNonNull(filePath, "filePath is required") });
    }

    /**
     * (deprecated) Deprecated.
     * <p>
     * @deprecated use <code>saveAssemblyManifest()</code>
     * @param manifest This parameter is required.
     * @param filePath This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static void save(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.AssemblyManifest manifest, final @org.jetbrains.annotations.NotNull java.lang.String filePath) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.assembly.schema.Manifest.class, "save", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(manifest, "manifest is required"), java.util.Objects.requireNonNull(filePath, "filePath is required") });
    }

    /**
     * Validates and saves the cloud assembly manifest to file.
     * <p>
     * @param manifest <ul><li>manifest.</li></ul> This parameter is required.
     * @param filePath <ul><li>output file path.</li></ul> This parameter is required.
     */
    public static void saveAssemblyManifest(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.AssemblyManifest manifest, final @org.jetbrains.annotations.NotNull java.lang.String filePath) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.assembly.schema.Manifest.class, "saveAssemblyManifest", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(manifest, "manifest is required"), java.util.Objects.requireNonNull(filePath, "filePath is required") });
    }

    /**
     * Fetch the current schema version number.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String version() {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.assembly.schema.Manifest.class, "version", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
}
