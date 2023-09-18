package com.aliyun.ros.cdk.core;

/**
 * Represents a RosTemplate element that can be used within a Condition.
 * <p>
 * You can use intrinsic functions, such as <code>Fn.conditionIf</code>,
 * <code>Fn.conditionEquals</code>, and <code>Fn.conditionNot</code>, to conditionally create
 * stack resources. These conditions are evaluated based on input parameters
 * that you declare when you create or update a stack. After you define all your
 * conditions, you can associate them with resources or resource properties in
 * the Resources and Outputs sections of a template.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.011Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IRosConditionExpression")
@software.amazon.jsii.Jsii.Proxy(IRosConditionExpression.Jsii$Proxy.class)
public interface IRosConditionExpression extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResolvable {

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IRosConditionExpression.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The creation stack of this resolvable which will be appended to errors thrown during resolution.
         * <p>
         * If this returns an empty array the stack will not be attached.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack() {
            return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "creationStack", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
        }

        /**
         * Produce the Token's value at resolution time.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }

        /**
         * Return a string representation of this resolvable object.
         * <p>
         * Returns a reversible string representation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String toString() {
            return software.amazon.jsii.Kernel.call(this, "toString", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }

    /**
     * Internal default implementation for {@link IRosConditionExpression}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRosConditionExpression, com.aliyun.ros.cdk.core.IResolvable.Jsii$Default {

        /**
         * The creation stack of this resolvable which will be appended to errors thrown during resolution.
         * <p>
         * If this returns an empty array the stack will not be attached.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack() {
            return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "creationStack", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
        }

        /**
         * Produce the Token's value at resolution time.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }
}
