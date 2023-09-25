package com.aliyun.ros.cdk.cxapi;

/**
 * Represents an artifact within a cloud assembly.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:43.877Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.CloudArtifact")
public class CloudArtifact extends software.amazon.jsii.JsiiObject {

    protected CloudArtifact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CloudArtifact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    protected CloudArtifact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly assembly, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactManifest manifest) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(assembly, "assembly is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(manifest, "manifest is required") });
    }

    /**
     * Returns a subclass of <code>CloudArtifact</code> based on the artifact type defined in the artifact manifest.
     * <p>
     * @return the <code>CloudArtifact</code> that matches the artifact type or <code>undefined</code> if it's an artifact type that is unrecognized by this module.
     * @param assembly The cloud assembly from which to load the artifact. This parameter is required.
     * @param id The artifact ID. This parameter is required.
     * @param artifact The artifact manifest. This parameter is required.
     */
    public static @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cxapi.CloudArtifact fromManifest(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly assembly, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactManifest artifact) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.cxapi.CloudArtifact.class, "fromManifest", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudArtifact.class), new Object[] { java.util.Objects.requireNonNull(assembly, "assembly is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(artifact, "artifact is required") });
    }

    /**
     * @return all the metadata entries of a specific type in this artifact.
     * @param type This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.cxapi.MetadataEntryResult> findMetadataByType(final @org.jetbrains.annotations.NotNull java.lang.String type) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "findMetadataByType", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.MetadataEntryResult.class)), new Object[] { java.util.Objects.requireNonNull(type, "type is required") }));
    }

    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly getAssembly() {
        return software.amazon.jsii.Kernel.get(this, "assembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The artifact's manifest.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactManifest getManifest() {
        return software.amazon.jsii.Kernel.get(this, "manifest", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.ArtifactManifest.class));
    }

    /**
     * The set of messages extracted from the artifact's metadata.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.cxapi.SynthesisMessage> getMessages() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "messages", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.SynthesisMessage.class))));
    }

    /**
     * Returns all the artifacts that this artifact depends on.
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cxapi.CloudArtifact> getDependencies() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.cxapi.CloudArtifact>)(software.amazon.jsii.Kernel.get(this, "dependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudArtifact.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }
}
