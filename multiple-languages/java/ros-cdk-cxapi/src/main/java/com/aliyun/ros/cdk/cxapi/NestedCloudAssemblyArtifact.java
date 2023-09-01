package com.aliyun.ros.cdk.cxapi;

/**
 * Asset manifest is a description of a set of assets which need to be built and published.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:34.727Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact")
public class NestedCloudAssemblyArtifact extends com.aliyun.ros.cdk.cxapi.CloudArtifact {

    protected NestedCloudAssemblyArtifact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NestedCloudAssemblyArtifact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public NestedCloudAssemblyArtifact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly assembly, final @org.jetbrains.annotations.NotNull java.lang.String name, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactManifest artifact) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(assembly, "assembly is required"), java.util.Objects.requireNonNull(name, "name is required"), java.util.Objects.requireNonNull(artifact, "artifact is required") });
    }

    /**
     * The relative directory name of the asset manifest.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getDirectoryName() {
        return software.amazon.jsii.Kernel.get(this, "directoryName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Display name.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Full path to the nested assembly directory.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getFullPath() {
        return software.amazon.jsii.Kernel.get(this, "fullPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The nested Assembly.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly getNestedAssembly() {
        return software.amazon.jsii.Kernel.get(this, "nestedAssembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class));
    }
}
