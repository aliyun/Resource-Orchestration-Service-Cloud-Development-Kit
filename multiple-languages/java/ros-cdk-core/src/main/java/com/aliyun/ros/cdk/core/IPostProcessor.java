package com.aliyun.ros.cdk.core;

/**
 * A Token that can post-process the complete resolved value, after resolve() has recursed over it.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:17.889Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IPostProcessor")
@software.amazon.jsii.Jsii.Proxy(IPostProcessor.Jsii$Proxy.class)
public interface IPostProcessor extends software.amazon.jsii.JsiiSerializable {

    /**
     * Process the completely resolved value, after full recursion/resolution has happened.
     * <p>
     * @param input This parameter is required.
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object postProcess(final @org.jetbrains.annotations.NotNull java.lang.Object input, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IPostProcessor.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Process the completely resolved value, after full recursion/resolution has happened.
         * <p>
         * @param input This parameter is required.
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object postProcess(final @org.jetbrains.annotations.NotNull java.lang.Object input, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "postProcess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { input, java.util.Objects.requireNonNull(context, "context is required") });
        }
    }

    /**
     * Internal default implementation for {@link IPostProcessor}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPostProcessor {

        /**
         * Process the completely resolved value, after full recursion/resolution has happened.
         * <p>
         * @param input This parameter is required.
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object postProcess(final @org.jetbrains.annotations.NotNull java.lang.Object input, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "postProcess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { input, java.util.Objects.requireNonNull(context, "context is required") });
        }
    }
}
