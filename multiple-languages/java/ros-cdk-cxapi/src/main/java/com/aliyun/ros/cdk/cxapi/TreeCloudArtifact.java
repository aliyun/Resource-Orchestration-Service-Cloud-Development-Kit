package com.aliyun.ros.cdk.cxapi;

@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:30.717Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.TreeCloudArtifact")
public class TreeCloudArtifact extends com.aliyun.ros.cdk.cxapi.CloudArtifact {

    protected TreeCloudArtifact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TreeCloudArtifact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public TreeCloudArtifact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly assembly, final @org.jetbrains.annotations.NotNull java.lang.String name, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactManifest artifact) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(assembly, "assembly is required"), java.util.Objects.requireNonNull(name, "name is required"), java.util.Objects.requireNonNull(artifact, "artifact is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getFile() {
        return software.amazon.jsii.Kernel.get(this, "file", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
}
