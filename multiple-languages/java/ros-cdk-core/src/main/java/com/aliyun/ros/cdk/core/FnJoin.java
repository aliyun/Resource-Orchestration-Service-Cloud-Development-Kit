package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function <code>Fn::Join</code> appends a set of values into a single value, separated by the specified delimiter.
 * <p>
 * If a delimiter is the empty string, the set of values are concatenated
 * with no delimiter.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:06.845Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnJoin")
public class FnJoin extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IResolvable {

    protected FnJoin(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnJoin(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::Join</code> function.
     * <p>
     * @param delimiter The value you want to occur between fragments. This parameter is required.
     * @param listOfValues The list of values you want combined. This parameter is required.
     */
    public FnJoin(final @org.jetbrains.annotations.NotNull java.lang.String delimiter, final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> listOfValues) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(delimiter, "delimiter is required"), java.util.Objects.requireNonNull(listOfValues, "listOfValues is required") });
    }

    /**
     * Produce the Token's value at resolution time.
     * <p>
     * @param context This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
        return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.String toJSON() {
        return software.amazon.jsii.Kernel.call(this, "toJSON", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Return a string representation of this resolvable object.
     * <p>
     * Returns a reversible string representation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.String toString() {
        return software.amazon.jsii.Kernel.call(this, "toString", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The creation stack of this resolvable which will be appended to errors thrown during resolution.
     * <p>
     * If this returns an empty array the stack will not be attached.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "creationStack", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }
}
