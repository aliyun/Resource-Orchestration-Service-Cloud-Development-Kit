package com.aliyun.ros.cdk.cxapi;

/**
 * Represents a deployable cloud application.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:56.474Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.CloudAssembly")
public class CloudAssembly extends software.amazon.jsii.JsiiObject {

    protected CloudAssembly(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CloudAssembly(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Reads a cloud assembly from the specified directory.
     * <p>
     * @param directory The root directory of the assembly. This parameter is required.
     */
    public CloudAssembly(final @org.jetbrains.annotations.NotNull java.lang.String directory) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(directory, "directory is required") });
    }

    /**
     * Returns a nested assembly.
     * <p>
     * @param artifactId The artifact ID of the nested assembly. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly getNestedAssembly(final @org.jetbrains.annotations.NotNull java.lang.String artifactId) {
        return software.amazon.jsii.Kernel.call(this, "getNestedAssembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class), new Object[] { java.util.Objects.requireNonNull(artifactId, "artifactId is required") });
    }

    /**
     * Returns a nested assembly artifact.
     * <p>
     * @param artifactId The artifact ID of the nested assembly. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.NestedCloudAssemblyArtifact getNestedAssemblyArtifact(final @org.jetbrains.annotations.NotNull java.lang.String artifactId) {
        return software.amazon.jsii.Kernel.call(this, "getNestedAssemblyArtifact", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.NestedCloudAssemblyArtifact.class), new Object[] { java.util.Objects.requireNonNull(artifactId, "artifactId is required") });
    }

    /**
     * Returns a ROS stack artifact by name from this assembly.
     * <p>
     * Deprecated renamed to 'getStackByName' (or 'getStackArtifact(id)')
     * <p>
     * @param stackName This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.RosStackArtifact getStack(final @org.jetbrains.annotations.NotNull java.lang.String stackName) {
        return software.amazon.jsii.Kernel.call(this, "getStack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.RosStackArtifact.class), new Object[] { java.util.Objects.requireNonNull(stackName, "stackName is required") });
    }

    /**
     * Returns a ROS stack artifact from this assembly.
     * <p>
     * Param artifactId the artifact id of the stack (can be obtained through 'stack.artifactId').
     * Throws if there is no stack artifact with that id
     * Returns a 'RosStackArtifact' object.
     * <p>
     * @param artifactId This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.RosStackArtifact getStackArtifact(final @org.jetbrains.annotations.NotNull java.lang.String artifactId) {
        return software.amazon.jsii.Kernel.call(this, "getStackArtifact", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.RosStackArtifact.class), new Object[] { java.util.Objects.requireNonNull(artifactId, "artifactId is required") });
    }

    /**
     * Returns a ROS stack artifact from this assembly.
     * <p>
     * Will only search the current assembly.
     * <p>
     * Param stackName the name of the ROS stack.
     * Throws if there is no stack artifact by that name
     * Throws if there is more than one stack with the same stack name. You can
     * use 'getStackArtifact - stack.artifactId' instead.
     * Returns a 'RosStackArtifact' object.
     * <p>
     * @param stackName This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.RosStackArtifact getStackByName(final @org.jetbrains.annotations.NotNull java.lang.String stackName) {
        return software.amazon.jsii.Kernel.call(this, "getStackByName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.RosStackArtifact.class), new Object[] { java.util.Objects.requireNonNull(stackName, "stackName is required") });
    }

    /**
     * Returns the tree metadata artifact from this assembly.
     * <p>
     * Throws if there is no metadata artifact by that name
     * Returns a 'TreeCloudArtifact' object if there is one defined in the manifest, 'undefined' otherwise.
     */
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cxapi.TreeCloudArtifact tree() {
        return software.amazon.jsii.Kernel.call(this, "tree", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.TreeCloudArtifact.class));
    }

    /**
     * Attempts to find an artifact with a specific identity.
     * <p>
     * Returns A 'CloudArtifact' object or 'undefined' if the artifact does not exist in this assembly.
     * Param id The artifact ID
     * <p>
     * @param id This parameter is required.
     */
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cxapi.CloudArtifact tryGetArtifact(final @org.jetbrains.annotations.NotNull java.lang.String id) {
        return software.amazon.jsii.Kernel.call(this, "tryGetArtifact", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudArtifact.class), new Object[] { java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * All artifacts included in this assembly.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.cxapi.CloudArtifact> getArtifacts() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "artifacts", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudArtifact.class))));
    }

    /**
     * The root directory of the cloud assembly.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getDirectory() {
        return software.amazon.jsii.Kernel.get(this, "directory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The raw assembly manifest.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.AssemblyManifest getManifest() {
        return software.amazon.jsii.Kernel.get(this, "manifest", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.AssemblyManifest.class));
    }

    /**
     * Runtime information such as module versions used to synthesize this assembly.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.RuntimeInfo getRuntime() {
        return software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.RuntimeInfo.class));
    }

    /**
     * @return all the ROS stack artifacts that are included in this assembly.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.cxapi.RosStackArtifact> getStacks() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "stacks", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.RosStackArtifact.class))));
    }

    /**
     * The schema version of the assembly manifest.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getVersion() {
        return software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
}
