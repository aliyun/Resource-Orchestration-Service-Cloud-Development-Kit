package com.aliyun.ros.cdk.core;

/**
 * Represents file path ignoring behavior.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:06.880Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IgnoreStrategy")
public abstract class IgnoreStrategy extends software.amazon.jsii.JsiiObject {

    protected IgnoreStrategy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IgnoreStrategy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    protected IgnoreStrategy() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Ignores file paths based on the <a href="https://docs.docker.com/engine/reference/builder/#dockerignore-file"><code>.dockerignore specification</code></a>.
     * <p>
     * @return <code>DockerIgnorePattern</code> associated with the given patterns.
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered. This parameter is required.
     * @param patterns This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DockerIgnoreStrategy docker(final @org.jetbrains.annotations.NotNull java.lang.String absoluteRootPath, final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> patterns) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.IgnoreStrategy.class, "docker", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerIgnoreStrategy.class), new Object[] { java.util.Objects.requireNonNull(absoluteRootPath, "absoluteRootPath is required"), java.util.Objects.requireNonNull(patterns, "patterns is required") });
    }

    /**
     * Creates an IgnoreStrategy based on the <code>ignoreMode</code> and <code>exclude</code> in a <code>CopyOptions</code>.
     * <p>
     * @return <code>IgnoreStrategy</code> based on the <code>CopyOptions</code>
     * @param options the <code>CopyOptions</code> to create the <code>IgnoreStrategy</code> from. This parameter is required.
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IgnoreStrategy fromCopyOptions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.CopyOptions options, final @org.jetbrains.annotations.NotNull java.lang.String absoluteRootPath) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.IgnoreStrategy.class, "fromCopyOptions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IgnoreStrategy.class), new Object[] { java.util.Objects.requireNonNull(options, "options is required"), java.util.Objects.requireNonNull(absoluteRootPath, "absoluteRootPath is required") });
    }

    /**
     * Ignores file paths based on the <a href="https://git-scm.com/docs/gitignore"><code>.gitignore specification</code></a>.
     * <p>
     * @return <code>GitIgnorePattern</code> associated with the given patterns.
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered. This parameter is required.
     * @param patterns This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.GitIgnoreStrategy git(final @org.jetbrains.annotations.NotNull java.lang.String absoluteRootPath, final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> patterns) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.IgnoreStrategy.class, "git", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.GitIgnoreStrategy.class), new Object[] { java.util.Objects.requireNonNull(absoluteRootPath, "absoluteRootPath is required"), java.util.Objects.requireNonNull(patterns, "patterns is required") });
    }

    /**
     * Ignores file paths based on simple glob patterns.
     * <p>
     * @return <code>GlobIgnorePattern</code> associated with the given patterns.
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered. This parameter is required.
     * @param patterns This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.GlobIgnoreStrategy glob(final @org.jetbrains.annotations.NotNull java.lang.String absoluteRootPath, final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> patterns) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.IgnoreStrategy.class, "glob", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.GlobIgnoreStrategy.class), new Object[] { java.util.Objects.requireNonNull(absoluteRootPath, "absoluteRootPath is required"), java.util.Objects.requireNonNull(patterns, "patterns is required") });
    }

    /**
     * Adds another pattern.
     * <p>
     * @param pattern This parameter is required.
     */
    public abstract void add(final @org.jetbrains.annotations.NotNull java.lang.String pattern);

    /**
     * Determines whether a given file path should be ignored or not.
     * <p>
     * @return <code>true</code> if the file should be ignored
     * @param absoluteFilePath absolute file path to be assessed against the pattern. This parameter is required.
     */
    public abstract @org.jetbrains.annotations.NotNull java.lang.Boolean ignores(final @org.jetbrains.annotations.NotNull java.lang.String absoluteFilePath);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    private static final class Jsii$Proxy extends com.aliyun.ros.cdk.core.IgnoreStrategy {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Adds another pattern.
         * <p>
         * @param pattern This parameter is required.
         */
        @Override
        public final void add(final @org.jetbrains.annotations.NotNull java.lang.String pattern) {
            software.amazon.jsii.Kernel.call(this, "add", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(pattern, "pattern is required") });
        }

        /**
         * Determines whether a given file path should be ignored or not.
         * <p>
         * @return <code>true</code> if the file should be ignored
         * @param absoluteFilePath absolute file path to be assessed against the pattern. This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Boolean ignores(final @org.jetbrains.annotations.NotNull java.lang.String absoluteFilePath) {
            return software.amazon.jsii.Kernel.call(this, "ignores", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { java.util.Objects.requireNonNull(absoluteFilePath, "absoluteFilePath is required") });
        }
    }
}
