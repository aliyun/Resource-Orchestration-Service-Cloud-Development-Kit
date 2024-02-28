package com.aliyun.ros.cdk.core;

/**
 * How to resolve tokens.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:26.445Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ITokenResolver")
@software.amazon.jsii.Jsii.Proxy(ITokenResolver.Jsii$Proxy.class)
public interface ITokenResolver extends software.amazon.jsii.JsiiSerializable {

    /**
     * Resolve a tokenized list.
     * <p>
     * @param l This parameter is required.
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object resolveList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> l, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * Resolve a string with at least one stringified token in it.
     * <p>
     * (May use concatenation)
     * <p>
     * @param s This parameter is required.
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object resolveString(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TokenizedStringFragments s, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * Resolve a single token.
     * <p>
     * @param t This parameter is required.
     * @param context This parameter is required.
     * @param postProcessor This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object resolveToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable t, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IPostProcessor postProcessor);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.ITokenResolver.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Resolve a tokenized list.
         * <p>
         * @param l This parameter is required.
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object resolveList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> l, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolveList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(l, "l is required"), java.util.Objects.requireNonNull(context, "context is required") });
        }

        /**
         * Resolve a string with at least one stringified token in it.
         * <p>
         * (May use concatenation)
         * <p>
         * @param s This parameter is required.
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object resolveString(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TokenizedStringFragments s, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolveString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(s, "s is required"), java.util.Objects.requireNonNull(context, "context is required") });
        }

        /**
         * Resolve a single token.
         * <p>
         * @param t This parameter is required.
         * @param context This parameter is required.
         * @param postProcessor This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object resolveToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable t, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IPostProcessor postProcessor) {
            return software.amazon.jsii.Kernel.call(this, "resolveToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(t, "t is required"), java.util.Objects.requireNonNull(context, "context is required"), java.util.Objects.requireNonNull(postProcessor, "postProcessor is required") });
        }
    }

    /**
     * Internal default implementation for {@link ITokenResolver}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITokenResolver {

        /**
         * Resolve a tokenized list.
         * <p>
         * @param l This parameter is required.
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object resolveList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> l, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolveList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(l, "l is required"), java.util.Objects.requireNonNull(context, "context is required") });
        }

        /**
         * Resolve a string with at least one stringified token in it.
         * <p>
         * (May use concatenation)
         * <p>
         * @param s This parameter is required.
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object resolveString(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TokenizedStringFragments s, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolveString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(s, "s is required"), java.util.Objects.requireNonNull(context, "context is required") });
        }

        /**
         * Resolve a single token.
         * <p>
         * @param t This parameter is required.
         * @param context This parameter is required.
         * @param postProcessor This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object resolveToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable t, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IPostProcessor postProcessor) {
            return software.amazon.jsii.Kernel.call(this, "resolveToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(t, "t is required"), java.util.Objects.requireNonNull(context, "context is required"), java.util.Objects.requireNonNull(postProcessor, "postProcessor is required") });
        }
    }
}
