package com.aliyun.ros.cdk.core;

/**
 * Represents the building block of the construct graph.
 * <p>
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:06.802Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Construct")
public class Construct extends software.constructs.Construct implements com.aliyun.ros.cdk.core.IConstruct {

    protected Construct(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Construct(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public Construct(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Return whether the given object is a Construct.
     * <p>
     * @param x This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isConstruct(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Construct.class, "isConstruct", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { x });
    }

    /**
     * Perform final modifications before synthesis.
     * <p>
     * This method can be implemented by derived constructs in order to perform
     * final changes before synthesis. prepare() will be called after child
     * constructs have been prepared.
     * <p>
     * This is an advanced framework feature. Only use this if you
     * understand the implications.
     */
    @Override
    protected void onPrepare() {
        software.amazon.jsii.Kernel.call(this, "onPrepare", software.amazon.jsii.NativeType.VOID);
    }

    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     * <p>
     * This method is usually implemented by framework-level constructs such as <code>Stack</code> and <code>Asset</code>
     * as they participate in synthesizing the cloud assembly.
     * <p>
     * @param session The synthesis session. This parameter is required.
     */
    @Override
    protected void onSynthesize(final @org.jetbrains.annotations.NotNull software.constructs.ISynthesisSession session) {
        software.amazon.jsii.Kernel.call(this, "onSynthesize", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Validate the current construct.
     * <p>
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     * <p>
     * @return An array of validation error messages, or an empty array if the construct is valid.
     */
    @Override
    protected @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> onValidate() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "onValidate", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    /**
     * Perform final modifications before synthesis.
     * <p>
     * This method can be implemented by derived constructs in order to perform
     * final changes before synthesis. prepare() will be called after child
     * constructs have been prepared.
     * <p>
     * This is an advanced framework feature. Only use this if you
     * understand the implications.
     */
    protected void prepare() {
        software.amazon.jsii.Kernel.call(this, "prepare", software.amazon.jsii.NativeType.VOID);
    }

    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     * <p>
     * This method is usually implemented by framework-level constructs such as <code>Stack</code> and <code>Asset</code>
     * as they participate in synthesizing the cloud assembly.
     * <p>
     * @param session The synthesis session. This parameter is required.
     */
    public void synthesize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
        software.amazon.jsii.Kernel.call(this, "synthesize", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
    }

    /**
     * Validate the current construct.
     * <p>
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     * <p>
     * @return An array of validation error messages, or an empty array if the construct is valid.
     */
    protected @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> validate() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "validate", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    /**
     * The construct tree node associated with this construct.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
        return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
    }
}
