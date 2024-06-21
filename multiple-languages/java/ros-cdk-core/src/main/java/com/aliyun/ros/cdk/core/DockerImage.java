package com.aliyun.ros.cdk.core;

/**
 * A Docker image.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.030Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerImage")
public class DockerImage extends software.amazon.jsii.JsiiObject {

    protected DockerImage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DockerImage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public DockerImage(final @org.jetbrains.annotations.NotNull java.lang.String image, final @org.jetbrains.annotations.Nullable java.lang.String _imageHash) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(image, "image is required"), _imageHash });
    }

    public DockerImage(final @org.jetbrains.annotations.NotNull java.lang.String image) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(image, "image is required") });
    }

    /**
     * Builds a Docker image.
     * <p>
     * @param path The path to the directory containing the Docker file. This parameter is required.
     * @param options Docker build options.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DockerImage fromBuild(final @org.jetbrains.annotations.NotNull java.lang.String path, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.DockerBuildOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.DockerImage.class, "fromBuild", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerImage.class), new Object[] { java.util.Objects.requireNonNull(path, "path is required"), options });
    }

    /**
     * Builds a Docker image.
     * <p>
     * @param path The path to the directory containing the Docker file. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DockerImage fromBuild(final @org.jetbrains.annotations.NotNull java.lang.String path) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.DockerImage.class, "fromBuild", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerImage.class), new Object[] { java.util.Objects.requireNonNull(path, "path is required") });
    }

    /**
     * Reference an image on DockerHub or another online registry.
     * <p>
     * @param image the image name. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DockerImage fromRegistry(final @org.jetbrains.annotations.NotNull java.lang.String image) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.DockerImage.class, "fromRegistry", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerImage.class), new Object[] { java.util.Objects.requireNonNull(image, "image is required") });
    }

    /**
     * Copies a file or directory out of the Docker image to the local filesystem.
     * <p>
     * If <code>outputPath</code> is omitted the destination path is a temporary directory.
     * <p>
     * @return the destination path
     * @param imagePath the path in the Docker image. This parameter is required.
     * @param outputPath the destination path for the copy operation.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String cp(final @org.jetbrains.annotations.NotNull java.lang.String imagePath, final @org.jetbrains.annotations.Nullable java.lang.String outputPath) {
        return software.amazon.jsii.Kernel.call(this, "cp", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(imagePath, "imagePath is required"), outputPath });
    }

    /**
     * Copies a file or directory out of the Docker image to the local filesystem.
     * <p>
     * If <code>outputPath</code> is omitted the destination path is a temporary directory.
     * <p>
     * @return the destination path
     * @param imagePath the path in the Docker image. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String cp(final @org.jetbrains.annotations.NotNull java.lang.String imagePath) {
        return software.amazon.jsii.Kernel.call(this, "cp", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(imagePath, "imagePath is required") });
    }

    /**
     * Runs a Docker image.
     * <p>
     * @param options
     */
    public void run(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.DockerRunOptions options) {
        software.amazon.jsii.Kernel.call(this, "run", software.amazon.jsii.NativeType.VOID, new Object[] { options });
    }

    /**
     * Runs a Docker image.
     */
    public void run() {
        software.amazon.jsii.Kernel.call(this, "run", software.amazon.jsii.NativeType.VOID);
    }

    /**
     * Provides a stable representation of this image for JSON serialization.
     * <p>
     * @return The overridden image name if set or image hash name in that order
     */
    public @org.jetbrains.annotations.NotNull java.lang.String toJSON() {
        return software.amazon.jsii.Kernel.call(this, "toJSON", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getImage() {
        return software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
}
