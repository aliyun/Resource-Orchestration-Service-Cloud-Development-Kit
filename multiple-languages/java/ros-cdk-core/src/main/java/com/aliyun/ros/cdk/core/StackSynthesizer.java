package com.aliyun.ros.cdk.core;

/**
 * Base class for implementing an IStackSynthesizer.
 * <p>
 * This class needs to exist to provide public surface area for external
 * implementations of stack synthesizers. The protected methods give
 * access to functions that are otherwise &#64;_internal to the framework
 * and could not be accessed by external implementors.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.343Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.StackSynthesizer")
public abstract class StackSynthesizer extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IStackSynthesizer {

    protected StackSynthesizer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StackSynthesizer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    protected StackSynthesizer() {
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
    public abstract @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetLocation addFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetSource asset);

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
     * Write the ROS stack artifact to the session.
     * <p>
     * Use default settings to add a ROSStackArtifact artifact to
     * the given synthesis session. The Stack artifact will control the settings for the
     * ROS deployment.
     * <p>
     * @param session This parameter is required.
     * @param options
     */
    protected void emitArtifact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.SynthesizeStackArtifactOptions options) {
        software.amazon.jsii.Kernel.call(this, "emitArtifact", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required"), options });
    }

    /**
     * Write the ROS stack artifact to the session.
     * <p>
     * Use default settings to add a ROSStackArtifact artifact to
     * the given synthesis session. The Stack artifact will control the settings for the
     * ROS deployment.
     * <p>
     * @param session This parameter is required.
     */
    protected void emitArtifact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        software.amazon.jsii.Kernel.call(this, "emitArtifact", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Turn a file asset location into a ROS representation of that location.
     * <p>
     * If any of the fields contain placeholders, the result will be wrapped in a <code>Fn.sub</code>.
     * <p>
     * @param location This parameter is required.
     */
    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetLocation rosLocationFromFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.FileDestination location) {
        return software.amazon.jsii.Kernel.call(this, "rosLocationFromFileAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetLocation.class), new Object[] { java.util.Objects.requireNonNull(location, "location is required") });
    }

    /**
     * Synthesize the associated stack to the session.
     * <p>
     * @param session This parameter is required.
     */
    @Override
    public abstract void synthesize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session);

    /**
     * Write the stack template to the given session.
     * <p>
     * Return a descriptor that represents the stack template as a file asset
     * source, for adding to an asset manifest (if desired). This can be used to
     * have the asset manifest system (<code>cdk-assets</code>) upload the template to OSS
     * using the appropriate role, so that afterwards only a ROS
     * deployment is necessary.
     * <p>
     * If the template is uploaded as an asset, the <code>stackTemplateAssetObjectUrl</code>
     * property should be set when calling <code>emitArtifact.</code>
     * <p>
     * If the template is <em>NOT</em> uploaded as an asset first and the template turns
     * out to be &gt;50KB, it will need to be uploaded to OSS anyway. At that point
     * the credentials will be the same identity that is doing the <code>UpdateStack</code>
     * call, which may not have the right permissions to write to OSS.
     * <p>
     * @param session This parameter is required.
     */
    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetSource synthesizeTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        return software.amazon.jsii.Kernel.call(this, "synthesizeTemplate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetSource.class), new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Retrieve the bound stack.
     * <p>
     * Fails if the stack hasn't been bound yet.
     */
    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getBoundStack() {
        return software.amazon.jsii.Kernel.get(this, "boundStack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    private static final class Jsii$Proxy extends com.aliyun.ros.cdk.core.StackSynthesizer implements com.aliyun.ros.cdk.core.IStackSynthesizer.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetLocation addFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetSource asset) {
            return software.amazon.jsii.Kernel.call(this, "addFileAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetLocation.class), new Object[] { java.util.Objects.requireNonNull(asset, "asset is required") });
        }

        /**
         * Synthesize the associated stack to the session.
         * <p>
         * @param session This parameter is required.
         */
        @Override
        public final void synthesize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
            software.amazon.jsii.Kernel.call(this, "synthesize", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
        }
    }
}
