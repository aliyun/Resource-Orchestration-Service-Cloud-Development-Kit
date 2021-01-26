package com.aliyun.ros.cdk.cxapi;

/**
 * Can be used to build a cloud assembly.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:07.274Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder")
public class CloudAssemblyBuilder extends software.amazon.jsii.JsiiObject {

    protected CloudAssemblyBuilder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CloudAssemblyBuilder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Initializes a cloud assembly builder.
     * <p>
     * @param outdir The output directory, uses temporary directory if undefined.
     */
    public CloudAssemblyBuilder(final @org.jetbrains.annotations.Nullable java.lang.String outdir) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { outdir });
    }

    /**
     * Initializes a cloud assembly builder.
     */
    public CloudAssemblyBuilder() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Adds an artifact into the cloud assembly.
     * <p>
     * @param id The ID of the artifact. This parameter is required.
     * @param manifest The artifact manifest. This parameter is required.
     */
    public void addArtifact(final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactManifest manifest) {
        software.amazon.jsii.Kernel.call(this, "addArtifact", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(manifest, "manifest is required") });
    }

    /**
     * Reports that some context is missing in order for this cloud assembly to be fully synthesized.
     * <p>
     * @param missing Missing context information. This parameter is required.
     */
    public void addMissing(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.MissingContext missing) {
        software.amazon.jsii.Kernel.call(this, "addMissing", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(missing, "missing is required") });
    }

    /**
     * Finalizes the cloud assembly into the output directory returns a `CloudAssembly` object that can be used to inspect the assembly.
     * <p>
     * @param options
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly buildAssembly(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cxapi.AssemblyBuildOptions options) {
        return software.amazon.jsii.Kernel.call(this, "buildAssembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class), new Object[] { options });
    }

    /**
     * Finalizes the cloud assembly into the output directory returns a `CloudAssembly` object that can be used to inspect the assembly.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly buildAssembly() {
        return software.amazon.jsii.Kernel.call(this, "buildAssembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class));
    }

    /**
     * Creates a nested cloud assembly.
     * <p>
     * @param artifactId This parameter is required.
     * @param displayName This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder createNestedAssembly(final @org.jetbrains.annotations.NotNull java.lang.String artifactId, final @org.jetbrains.annotations.NotNull java.lang.String displayName) {
        return software.amazon.jsii.Kernel.call(this, "createNestedAssembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder.class), new Object[] { java.util.Objects.requireNonNull(artifactId, "artifactId is required"), java.util.Objects.requireNonNull(displayName, "displayName is required") });
    }

    /**
     * The root directory of the resulting cloud assembly.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getOutdir() {
        return software.amazon.jsii.Kernel.get(this, "outdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
}
