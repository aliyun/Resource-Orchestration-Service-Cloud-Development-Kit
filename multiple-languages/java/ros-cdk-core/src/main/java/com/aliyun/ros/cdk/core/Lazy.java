package com.aliyun.ros.cdk.core;

/**
 * Lazily produce a value.
 * <p>
 * Can be used to return a string, list or numeric value whose actual value
 * will only be calculated later, during synthesis.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:17.686Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Lazy")
public class Lazy extends software.amazon.jsii.JsiiObject {

    protected Lazy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Lazy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable anyValue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IAnyProducer producer, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.LazyAnyValueOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Lazy.class, "anyValue", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(producer, "producer is required"), options });
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable anyValue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IAnyProducer producer) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Lazy.class, "anyValue", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(producer, "producer is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> listValue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IListProducer producer, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.LazyListValueOptions options) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Lazy.class, "listValue", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { java.util.Objects.requireNonNull(producer, "producer is required"), options }));
    }

    public static @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> listValue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IListProducer producer) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Lazy.class, "listValue", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { java.util.Objects.requireNonNull(producer, "producer is required") }));
    }

    public static @org.jetbrains.annotations.NotNull java.lang.Number numberValue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.INumberProducer producer) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Lazy.class, "numberValue", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(producer, "producer is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String stringValue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IStringProducer producer, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.LazyStringValueOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Lazy.class, "stringValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(producer, "producer is required"), options });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String stringValue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IStringProducer producer) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Lazy.class, "stringValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(producer, "producer is required") });
    }
}
