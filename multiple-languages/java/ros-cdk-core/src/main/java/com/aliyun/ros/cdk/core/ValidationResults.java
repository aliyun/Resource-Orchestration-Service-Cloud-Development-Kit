package com.aliyun.ros.cdk.core;

/**
 * A collection of validation results.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.42.0 (build 5f6b62c)", date = "2021-11-30T01:57:31.117Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ValidationResults")
public class ValidationResults extends software.amazon.jsii.JsiiObject {

    protected ValidationResults(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ValidationResults(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public ValidationResults(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.ValidationResult> results) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { results });
    }

    public ValidationResults() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public void collect(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ValidationResult result) {
        software.amazon.jsii.Kernel.call(this, "collect", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(result, "result is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.String errorTreeList() {
        return software.amazon.jsii.Kernel.call(this, "errorTreeList", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Wrap up all validation results into a single tree node.
     * <p>
     * If there are failures in the collection, add a message, otherwise
     * return a success.
     * <p>
     * @param message This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ValidationResult wrap(final @org.jetbrains.annotations.NotNull java.lang.String message) {
        return software.amazon.jsii.Kernel.call(this, "wrap", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ValidationResult.class), new Object[] { java.util.Objects.requireNonNull(message, "message is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getIsSuccess() {
        return software.amazon.jsii.Kernel.get(this, "isSuccess", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.ValidationResult> getResults() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "results", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ValidationResult.class))));
    }

    public void setResults(final @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.ValidationResult> value) {
        software.amazon.jsii.Kernel.set(this, "results", java.util.Objects.requireNonNull(value, "results is required"));
    }
}
