package com.aliyun.ros.cdk.core;

/**
 * File system utilities.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.657Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FileSystem")
public class FileSystem extends software.amazon.jsii.JsiiObject {

    protected FileSystem(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FileSystem(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public FileSystem() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Copies an entire directory structure.
     * <p>
     * @param srcDir Source directory. This parameter is required.
     * @param destDir Destination directory. This parameter is required.
     * @param options options.
     * @param rootDir Root directory to calculate exclusions from.
     */
    public static void copyDirectory(final @org.jetbrains.annotations.NotNull java.lang.String srcDir, final @org.jetbrains.annotations.NotNull java.lang.String destDir, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.CopyOptions options, final @org.jetbrains.annotations.Nullable java.lang.String rootDir) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.FileSystem.class, "copyDirectory", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(srcDir, "srcDir is required"), java.util.Objects.requireNonNull(destDir, "destDir is required"), options, rootDir });
    }

    /**
     * Copies an entire directory structure.
     * <p>
     * @param srcDir Source directory. This parameter is required.
     * @param destDir Destination directory. This parameter is required.
     * @param options options.
     */
    public static void copyDirectory(final @org.jetbrains.annotations.NotNull java.lang.String srcDir, final @org.jetbrains.annotations.NotNull java.lang.String destDir, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.CopyOptions options) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.FileSystem.class, "copyDirectory", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(srcDir, "srcDir is required"), java.util.Objects.requireNonNull(destDir, "destDir is required"), options });
    }

    /**
     * Copies an entire directory structure.
     * <p>
     * @param srcDir Source directory. This parameter is required.
     * @param destDir Destination directory. This parameter is required.
     */
    public static void copyDirectory(final @org.jetbrains.annotations.NotNull java.lang.String srcDir, final @org.jetbrains.annotations.NotNull java.lang.String destDir) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.FileSystem.class, "copyDirectory", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(srcDir, "srcDir is required"), java.util.Objects.requireNonNull(destDir, "destDir is required") });
    }

    /**
     * Produces fingerprint based on the contents of a single file or an entire directory tree.
     * <p>
     * Line endings are converted from CRLF to LF.
     * <p>
     * The fingerprint will also include:
     * <p>
     * <ol>
     * <li>An extra string if defined in <code>options.extra</code>.</li>
     * <li>The symlink follow mode value.</li>
     * </ol>
     * <p>
     * @param fileOrDirectory The directory or file to fingerprint. This parameter is required.
     * @param options Fingerprinting options.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String fingerprint(final @org.jetbrains.annotations.NotNull java.lang.String fileOrDirectory, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.FingerprintOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.FileSystem.class, "fingerprint", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(fileOrDirectory, "fileOrDirectory is required"), options });
    }

    /**
     * Produces fingerprint based on the contents of a single file or an entire directory tree.
     * <p>
     * Line endings are converted from CRLF to LF.
     * <p>
     * The fingerprint will also include:
     * <p>
     * <ol>
     * <li>An extra string if defined in <code>options.extra</code>.</li>
     * <li>The symlink follow mode value.</li>
     * </ol>
     * <p>
     * @param fileOrDirectory The directory or file to fingerprint. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String fingerprint(final @org.jetbrains.annotations.NotNull java.lang.String fileOrDirectory) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.FileSystem.class, "fingerprint", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(fileOrDirectory, "fileOrDirectory is required") });
    }

    /**
     * Checks whether a directory is empty.
     * <p>
     * @param dir The directory to check. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isEmpty(final @org.jetbrains.annotations.NotNull java.lang.String dir) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.FileSystem.class, "isEmpty", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { java.util.Objects.requireNonNull(dir, "dir is required") });
    }

    /**
     * Creates a unique temporary directory in the <strong>system temp directory</strong>.
     * <p>
     * @param prefix A prefix for the directory name. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String mkdtemp(final @org.jetbrains.annotations.NotNull java.lang.String prefix) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.FileSystem.class, "mkdtemp", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(prefix, "prefix is required") });
    }

    /**
     * The real path of the system temp directory.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String getTmpdir() {
        return software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.FileSystem.class, "tmpdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
}
