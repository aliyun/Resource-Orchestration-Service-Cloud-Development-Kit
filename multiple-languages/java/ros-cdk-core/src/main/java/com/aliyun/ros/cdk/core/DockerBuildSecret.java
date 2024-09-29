package com.aliyun.ros.cdk.core;

/**
 * Methods to build Docker CLI arguments for builds using secrets.
 * <p>
 * Docker BuildKit must be enabled to use build secrets.
 * <p>
 * @see <a href="https://docs.docker.com/build/buildkit/">https://docs.docker.com/build/buildkit/</a>
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.713Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerBuildSecret")
public class DockerBuildSecret extends software.amazon.jsii.JsiiObject {

    protected DockerBuildSecret(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DockerBuildSecret(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public DockerBuildSecret() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * A Docker build secret from a file source.
     * <p>
     * @return The latter half required for <code>--secret</code>
     * @param src The path to the source file, relative to the build directory. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String fromSrc(final @org.jetbrains.annotations.NotNull java.lang.String src) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.DockerBuildSecret.class, "fromSrc", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(src, "src is required") });
    }
}
