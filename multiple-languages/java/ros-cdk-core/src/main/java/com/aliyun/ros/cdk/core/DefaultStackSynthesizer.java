package com.aliyun.ros.cdk.core;

/**
 * Uses conventionally named roles and reify asset storage locations.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:43.897Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DefaultStackSynthesizer")
public class DefaultStackSynthesizer extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IStackSynthesizer {

    protected DefaultStackSynthesizer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DefaultStackSynthesizer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        DEFAULT_QUALIFIER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.DefaultStackSynthesizer.class, "DEFAULT_QUALIFIER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public DefaultStackSynthesizer() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
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
     * Synthesize all artifacts required for the stack into the session.
     * <p>
     * @param session This parameter is required.
     */
    @Override
    public void synthesizeStackArtifacts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        software.amazon.jsii.Kernel.call(this, "synthesizeStackArtifacts", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Default ARN qualifier.
     */
    public final static java.lang.String DEFAULT_QUALIFIER;

    protected @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Stack getStack() {
        return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
    }
}
