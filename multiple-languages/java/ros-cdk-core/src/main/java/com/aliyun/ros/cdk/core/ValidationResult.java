package com.aliyun.ros.cdk.core;

/**
 * Representation of validation results.
 * <p>
 * Models a tree of validation errors so that we have as much information as possible
 * about the failure that occurred.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.834Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ValidationResult")
public class ValidationResult extends software.amazon.jsii.JsiiObject {

    protected ValidationResult(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ValidationResult(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public ValidationResult(final @org.jetbrains.annotations.Nullable java.lang.String errorMessage, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.ValidationResults results) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { errorMessage, results });
    }

    public ValidationResult(final @org.jetbrains.annotations.Nullable java.lang.String errorMessage) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { errorMessage });
    }

    public ValidationResult() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Turn a failed validation into an exception.
     */
    public void assertSuccess() {
        software.amazon.jsii.Kernel.call(this, "assertSuccess", software.amazon.jsii.NativeType.VOID);
    }

    /**
     * Return a string rendering of the tree of validation failures.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String errorTree() {
        return software.amazon.jsii.Kernel.call(this, "errorTree", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Wrap this result with an error message, if it concerns an error.
     * <p>
     * @param message This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ValidationResult prefix(final @org.jetbrains.annotations.NotNull java.lang.String message) {
        return software.amazon.jsii.Kernel.call(this, "prefix", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ValidationResult.class), new Object[] { java.util.Objects.requireNonNull(message, "message is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getErrorMessage() {
        return software.amazon.jsii.Kernel.get(this, "errorMessage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getIsSuccess() {
        return software.amazon.jsii.Kernel.get(this, "isSuccess", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ValidationResults getResults() {
        return software.amazon.jsii.Kernel.get(this, "results", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ValidationResults.class));
    }
}
