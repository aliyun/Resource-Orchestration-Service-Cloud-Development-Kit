package com.aliyun.ros.cdk.core;

/**
 * (experimental) Token subclass that represents values intrinsic to the target document language.
 * <p>
 * This class will disappear in a future release and should not be used.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:12.076Z")
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Intrinsic")
public class Intrinsic extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IResolvable {

    protected Intrinsic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Intrinsic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * @param value This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public Intrinsic(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }

    /**
     * (experimental) Creates a throwable Error object that contains the token creation stack trace.
     * <p>
     * @param message Error message. This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    protected @org.jetbrains.annotations.NotNull java.lang.Object newError(final @org.jetbrains.annotations.NotNull java.lang.String message) {
        return software.amazon.jsii.Kernel.call(this, "newError", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(message, "message is required") });
    }

    /**
     * (experimental) Produce the Token's value at resolution time.
     * <p>
     * @param _context This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext _context) {
        return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(_context, "_context is required") });
    }

    /**
     * (experimental) Turn this Token into JSON.
     * <p>
     * Called automatically when JSON.stringify() is called on a Token.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.NotNull java.lang.Object toJSON() {
        return software.amazon.jsii.Kernel.call(this, "toJSON", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * (experimental) Convert an instance of this Token to a string.
     * <p>
     * This method will be called implicitly by language runtimes if the object
     * is embedded into a string. We treat it the same as an explicit
     * stringification.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.String toString() {
        return software.amazon.jsii.Kernel.call(this, "toString", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * (experimental) The captured stack trace which represents the location in which this token was created.
     */
    @Override
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "creationStack", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }
}
