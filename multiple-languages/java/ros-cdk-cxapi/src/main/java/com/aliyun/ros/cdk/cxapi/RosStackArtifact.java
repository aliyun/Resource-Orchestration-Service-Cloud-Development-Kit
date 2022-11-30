package com.aliyun.ros.cdk.cxapi;

@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:17.632Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.RosStackArtifact")
public class RosStackArtifact extends com.aliyun.ros.cdk.cxapi.CloudArtifact {

    protected RosStackArtifact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosStackArtifact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public RosStackArtifact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly assembly, final @org.jetbrains.annotations.NotNull java.lang.String artifactId, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactManifest artifact) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(assembly, "assembly is required"), java.util.Objects.requireNonNull(artifactId, "artifactId is required"), java.util.Objects.requireNonNull(artifact, "artifact is required") });
    }

    /**
     * A string that represents this stack.
     * <p>
     * Should only be used in user interfaces.
     * If the stackName and artifactId are the same, it will just return that. Otherwise,
     * it will return something like "<artifactId> (<stackName>)"
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * (deprecated) The physical name of this stack.
     * <p>
     * @deprecated renamed to `stackName`
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public @org.jetbrains.annotations.NotNull java.lang.String getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The original name as defined in the CDK app.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getOriginalName() {
        return software.amazon.jsii.Kernel.get(this, "originalName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * ROS parameters to pass to the stack.
     */
    public @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.String> getParameters() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    /**
     * The physical name of this stack.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getStackName() {
        return software.amazon.jsii.Kernel.get(this, "stackName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Object getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The ROS template for this stack.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplate() {
        return software.amazon.jsii.Kernel.get(this, "template", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The file name of the template.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getTemplateFile() {
        return software.amazon.jsii.Kernel.get(this, "templateFile", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
}
