package com.aliyun.ros.cdk.core;

/**
 * Interface to apply operation to tokens in a string.
 * <p>
 * Interface so it can be exported via jsii.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:22.541Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ITokenMapper")
@software.amazon.jsii.Jsii.Proxy(ITokenMapper.Jsii$Proxy.class)
public interface ITokenMapper extends software.amazon.jsii.JsiiSerializable {

    /**
     * Replace a single token.
     * <p>
     * @param t This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object mapToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable t);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.ITokenMapper.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Replace a single token.
         * <p>
         * @param t This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object mapToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable t) {
            return software.amazon.jsii.Kernel.call(this, "mapToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(t, "t is required") });
        }
    }

    /**
     * Internal default implementation for {@link ITokenMapper}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITokenMapper {

        /**
         * Replace a single token.
         * <p>
         * @param t This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object mapToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable t) {
            return software.amazon.jsii.Kernel.call(this, "mapToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(t, "t is required") });
        }
    }
}
