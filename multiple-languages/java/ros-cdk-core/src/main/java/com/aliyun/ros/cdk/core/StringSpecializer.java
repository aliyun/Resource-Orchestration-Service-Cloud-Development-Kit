package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:12.153Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.StringSpecializer")
public class StringSpecializer extends software.amazon.jsii.JsiiObject {

    protected StringSpecializer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StringSpecializer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public StringSpecializer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack, final @org.jetbrains.annotations.NotNull java.lang.String qualifier) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(stack, "stack is required"), java.util.Objects.requireNonNull(qualifier, "qualifier is required") });
    }

    /**
     * Validate that the given string does not contain tokens.
     * <p>
     * @param s This parameter is required.
     * @param what This parameter is required.
     */
    public static void validateNoTokens(final @org.jetbrains.annotations.NotNull java.lang.String s, final @org.jetbrains.annotations.NotNull java.lang.String what) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.StringSpecializer.class, "validateNoTokens", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(s, "s is required"), java.util.Objects.requireNonNull(what, "what is required") });
    }

    /**
     * Specialize only the qualifier.
     * <p>
     * @param s This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String qualifierOnly(final @org.jetbrains.annotations.NotNull java.lang.String s) {
        return software.amazon.jsii.Kernel.call(this, "qualifierOnly", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(s, "s is required") });
    }

    /**
     * Function to replace placeholders in the input string as much as possible.
     * <p>
     * We replace:
     * <p>
     * <ul>
     * <li>${Qualifier}: always</li>
     * <li>${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available</li>
     * </ul>
     * <p>
     * @param s This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String specialize(final @org.jetbrains.annotations.NotNull java.lang.String s) {
        return software.amazon.jsii.Kernel.call(this, "specialize", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(s, "s is required") });
    }

    /**
     * Specialize the given string, make sure it doesn't contain tokens.
     * <p>
     * @param s This parameter is required.
     * @param what This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String specializeNoTokens(final @org.jetbrains.annotations.NotNull java.lang.String s, final @org.jetbrains.annotations.NotNull java.lang.String what) {
        return software.amazon.jsii.Kernel.call(this, "specializeNoTokens", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(s, "s is required"), java.util.Objects.requireNonNull(what, "what is required") });
    }
}
