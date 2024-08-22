package com.aliyun.ros.cdk.core;

/**
 * Uses conventionally named roles and reify asset storage locations.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:16.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DefaultStackSynthesizer")
public class DefaultStackSynthesizer extends com.aliyun.ros.cdk.core.StackSynthesizer implements com.aliyun.ros.cdk.core.IReusableStackSynthesizer, com.aliyun.ros.cdk.core.IBoundStackSynthesizer {

    protected DefaultStackSynthesizer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DefaultStackSynthesizer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        DEFAULT_FILE_ASSET_PREFIX = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.DefaultStackSynthesizer.class, "DEFAULT_FILE_ASSET_PREFIX", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        DEFAULT_FILE_ASSETS_BUCKET_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.DefaultStackSynthesizer.class, "DEFAULT_FILE_ASSETS_BUCKET_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        DEFAULT_QUALIFIER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.DefaultStackSynthesizer.class, "DEFAULT_QUALIFIER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public DefaultStackSynthesizer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.DefaultStackSynthesizerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { props });
    }

    public DefaultStackSynthesizer() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Register a File Asset.
     * <p>
     * Returns the parameters that can be used to refer to the asset inside the template.
     * <p>
     * The synthesizer must rely on some out-of-band mechanism to make sure the given files
     * are actually placed in the returned location before the deployment happens. This can
     * be by writing the instructions to the asset manifest (for use by the <code>cdk-assets</code> tool),
     * by relying on the CLI to upload files (legacy behavior), or some other operator controlled
     * mechanism.
     * <p>
     * @param asset This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetLocation addFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetSource asset) {
        return software.amazon.jsii.Kernel.call(this, "addFileAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetLocation.class), new Object[] { java.util.Objects.requireNonNull(asset, "asset is required") });
    }

    /**
     * Bind to the stack this environment is going to be used on.
     * <p>
     * Must be called before any of the other methods are called.
     * <p>
     * @param stack This parameter is required.
     */
    @Override
    public void bind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack) {
        software.amazon.jsii.Kernel.call(this, "bind", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(stack, "stack is required") });
    }

    /**
     * Produce a bound Stack Synthesizer for the given stack.
     * <p>
     * This method may be called more than once on the same object.
     * <p>
     * @param stack This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IBoundStackSynthesizer reusableBind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack) {
        return software.amazon.jsii.Kernel.call(this, "reusableBind", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IBoundStackSynthesizer.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required") });
    }

    /**
     * Synthesize the associated stack to the session.
     * <p>
     * @param session This parameter is required.
     */
    @Override
    public void synthesize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        software.amazon.jsii.Kernel.call(this, "synthesize", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    public void synthesizeStackArtifacts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        software.amazon.jsii.Kernel.call(this, "synthesizeStackArtifacts", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Default file asset prefix.
     */
    public final static java.lang.String DEFAULT_FILE_ASSET_PREFIX;

    /**
     * Default file assets bucket name.
     */
    public final static java.lang.String DEFAULT_FILE_ASSETS_BUCKET_NAME;

    /**
     * Default ARN qualifier.
     */
    public final static java.lang.String DEFAULT_QUALIFIER;

    protected @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Stack getStack() {
        return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.DefaultStackSynthesizer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.DefaultStackSynthesizer> {
        /**
         * @return a new instance of {@link Builder}.
         */
        public static Builder create() {
            return new Builder();
        }

        private com.aliyun.ros.cdk.core.DefaultStackSynthesizerProps.Builder props;

        private Builder() {
        }

        /**
         * bucketPrefix to use while storing OSS Assets.
         * <p>
         * Default: - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
         * <p>
         * @return {@code this}
         * @param bucketPrefix bucketPrefix to use while storing OSS Assets. This parameter is required.
         */
        public Builder bucketPrefix(final java.lang.String bucketPrefix) {
            this.props().bucketPrefix(bucketPrefix);
            return this;
        }

        /**
         * Name of the OSS bucket to hold file assets.
         * <p>
         * You must supply this if you have given a non-standard name to the staging bucket.
         * <p>
         * The placeholders <code>${Qualifier}</code>, <code>${ALIYUN::AccountId}</code> and <code>${ALIYUN::Region}</code> will
         * be replaced with the values of qualifier and the stack's account and region,
         * respectively.
         * <p>
         * Default: DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
         * <p>
         * @return {@code this}
         * @param fileAssetsBucketName Name of the OSS bucket to hold file assets. This parameter is required.
         */
        public Builder fileAssetsBucketName(final java.lang.String fileAssetsBucketName) {
            this.props().fileAssetsBucketName(fileAssetsBucketName);
            return this;
        }

        /**
         * Qualifier to disambiguate multiple environments in the same account.
         * <p>
         * You can use this and leave the other naming properties empty if you have deployed
         * the bootstrap environment with standard names but only differnet qualifiers.
         * <p>
         * @return {@code this}
         * @param qualifier Qualifier to disambiguate multiple environments in the same account. This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props().qualifier(qualifier);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.core.DefaultStackSynthesizer}.
         */
        @Override
        public com.aliyun.ros.cdk.core.DefaultStackSynthesizer build() {
            return new com.aliyun.ros.cdk.core.DefaultStackSynthesizer(
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.DefaultStackSynthesizerProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.DefaultStackSynthesizerProps.Builder();
            }
            return this.props;
        }
    }
}
