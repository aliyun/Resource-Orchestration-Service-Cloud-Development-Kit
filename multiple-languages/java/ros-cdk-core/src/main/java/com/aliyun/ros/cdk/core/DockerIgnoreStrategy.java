package com.aliyun.ros.cdk.core;

/**
 * Ignores file paths based on the <a href="https://docs.docker.com/engine/reference/builder/#dockerignore-file"><code>.dockerignore specification</code></a>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.029Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerIgnoreStrategy")
public class DockerIgnoreStrategy extends com.aliyun.ros.cdk.core.IgnoreStrategy {

    protected DockerIgnoreStrategy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DockerIgnoreStrategy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public DockerIgnoreStrategy(final @org.jetbrains.annotations.NotNull java.lang.String absoluteRootPath, final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> patterns) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(absoluteRootPath, "absoluteRootPath is required"), java.util.Objects.requireNonNull(patterns, "patterns is required") });
    }

    /**
     * Adds another pattern.
     * <p>
     * @param pattern This parameter is required.
     */
    @Override
    public void add(final @org.jetbrains.annotations.NotNull java.lang.String pattern) {
        software.amazon.jsii.Kernel.call(this, "add", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(pattern, "pattern is required") });
    }

    /**
     * Determines whether a given file path should be ignored or not.
     * <p>
     * @return <code>true</code> if the file should be ignored
     * @param absoluteFilePath absolute file path to be assessed against the pattern. This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Boolean ignores(final @org.jetbrains.annotations.NotNull java.lang.String absoluteFilePath) {
        return software.amazon.jsii.Kernel.call(this, "ignores", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { java.util.Objects.requireNonNull(absoluteFilePath, "absoluteFilePath is required") });
    }
}
