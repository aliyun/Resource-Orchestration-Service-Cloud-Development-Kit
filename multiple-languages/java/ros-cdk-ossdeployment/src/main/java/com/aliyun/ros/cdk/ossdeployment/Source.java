package com.aliyun.ros.cdk.ossdeployment;

/**
 * Specifies bucket deployment source.
 * <p>
 * Usage:
 * <p>
 * <blockquote><pre>
 *  Source.bucket(bucketName, objectKey)
 *  Source.asset('/local/path/to/directory')
 *  Source.asset('/local/path/to/a/file.zip')
 *  Source.data('hello/world/file.txt', 'Hello, world!')
 *  Source.jsonData('config.json', { key: value })
 * </pre></blockquote>
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.735Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ossdeployment.$Module.class, fqn = "@alicloud/ros-cdk-ossdeployment.Source")
public class Source extends software.amazon.jsii.JsiiObject {

    protected Source(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Source(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public Source() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Uses a local file path as the source of the target bucket contents.
     * <p>
     * ROS CDK will create a temporary bucket and upload the files you want to upload to it.
     * Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.
     * <p>
     * If the local asset is a .zip archive, make sure you trust the
     * producer of the archive.
     * <p>
     * @param path The path to a local file or a directory. This parameter is required.
     * @param options Options for the Asset.
     * @param objectPrefix The prefix of object key.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.ISource asset(final @org.jetbrains.annotations.NotNull java.lang.String path, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ossassets.AssetOptions options, final @org.jetbrains.annotations.Nullable java.lang.String objectPrefix) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.ossdeployment.Source.class, "asset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.ISource.class), new Object[] { java.util.Objects.requireNonNull(path, "path is required"), options, objectPrefix });
    }

    /**
     * Uses a local file path as the source of the target bucket contents.
     * <p>
     * ROS CDK will create a temporary bucket and upload the files you want to upload to it.
     * Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.
     * <p>
     * If the local asset is a .zip archive, make sure you trust the
     * producer of the archive.
     * <p>
     * @param path The path to a local file or a directory. This parameter is required.
     * @param options Options for the Asset.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.ISource asset(final @org.jetbrains.annotations.NotNull java.lang.String path, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ossassets.AssetOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.ossdeployment.Source.class, "asset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.ISource.class), new Object[] { java.util.Objects.requireNonNull(path, "path is required"), options });
    }

    /**
     * Uses a local file path as the source of the target bucket contents.
     * <p>
     * ROS CDK will create a temporary bucket and upload the files you want to upload to it.
     * Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.
     * <p>
     * If the local asset is a .zip archive, make sure you trust the
     * producer of the archive.
     * <p>
     * @param path The path to a local file or a directory. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.ISource asset(final @org.jetbrains.annotations.NotNull java.lang.String path) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.ossdeployment.Source.class, "asset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.ISource.class), new Object[] { java.util.Objects.requireNonNull(path, "path is required") });
    }

    /**
     * Uses a file stored in an OSS bucket as the source for the destination bucket contents.
     * <p>
     * Make sure you trust the producer of the archive. The source bucket and the destination bucket must be in the same region.
     * <p>
     * @param bucket The OSS Bucket. This parameter is required.
     * @param objectKey The path of. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.ISource bucket(final @org.jetbrains.annotations.NotNull java.lang.Object bucket, final @org.jetbrains.annotations.NotNull java.lang.Object objectKey) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(bucket instanceof java.lang.String)
                && !(bucket instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(bucket instanceof com.aliyun.ros.cdk.oss.Bucket)
                && !(bucket.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("bucket")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.oss.Bucket; received ")
                        .append(bucket.getClass()).toString());
            }
            if (
                 !(objectKey instanceof java.lang.String)
                && !(objectKey instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(objectKey.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("objectKey")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(objectKey.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.ossdeployment.Source.class, "bucket", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.ISource.class), new Object[] { java.util.Objects.requireNonNull(bucket, "bucket is required"), java.util.Objects.requireNonNull(objectKey, "objectKey is required") });
    }

    /**
     * Deploys an object with the specified string contents into the bucket.
     * <p>
     * To store a JSON object use <code>Source.jsonData()</code>.
     * <p>
     * @param objectKey The destination OSS object key (relative to the root of the OSS deployment). This parameter is required.
     * @param data The data to be stored in the object. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.ISource data(final @org.jetbrains.annotations.NotNull java.lang.String objectKey, final @org.jetbrains.annotations.NotNull java.lang.String data) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.ossdeployment.Source.class, "data", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.ISource.class), new Object[] { java.util.Objects.requireNonNull(objectKey, "objectKey is required"), java.util.Objects.requireNonNull(data, "data is required") });
    }

    /**
     * Deploys an object with the specified JSON object into the bucket.
     * <p>
     * @param objectKey The destination OSS object key (relative to the root of the OSS deployment). This parameter is required.
     * @param obj A JSON object. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.ISource jsonData(final @org.jetbrains.annotations.NotNull java.lang.String objectKey, final @org.jetbrains.annotations.NotNull java.lang.Object obj) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.ossdeployment.Source.class, "jsonData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.ISource.class), new Object[] { java.util.Objects.requireNonNull(objectKey, "objectKey is required"), obj });
    }
}
