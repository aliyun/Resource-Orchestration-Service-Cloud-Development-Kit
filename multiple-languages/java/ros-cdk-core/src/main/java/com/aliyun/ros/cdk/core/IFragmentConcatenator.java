package com.aliyun.ros.cdk.core;

/**
 * (experimental) Function used to concatenate symbols in the target document language.
 * <p>
 * Interface so it could potentially be exposed over jsii.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.244Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IFragmentConcatenator")
@software.amazon.jsii.Jsii.Proxy(IFragmentConcatenator.Jsii$Proxy.class)
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
public interface IFragmentConcatenator extends software.amazon.jsii.JsiiSerializable {

    /**
     * (experimental) Join the fragment on the left and on the right.
     * <p>
     * @param left This parameter is required.
     * @param right This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    @org.jetbrains.annotations.NotNull java.lang.Object join(final @org.jetbrains.annotations.NotNull java.lang.Object left, final @org.jetbrains.annotations.NotNull java.lang.Object right);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IFragmentConcatenator.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * (experimental) Join the fragment on the left and on the right.
         * <p>
         * @param left This parameter is required.
         * @param right This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object join(final @org.jetbrains.annotations.NotNull java.lang.Object left, final @org.jetbrains.annotations.NotNull java.lang.Object right) {
            return software.amazon.jsii.Kernel.call(this, "join", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { left, right });
        }
    }

    /**
     * Internal default implementation for {@link IFragmentConcatenator}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IFragmentConcatenator {

        /**
         * (experimental) Join the fragment on the left and on the right.
         * <p>
         * @param left This parameter is required.
         * @param right This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object join(final @org.jetbrains.annotations.NotNull java.lang.Object left, final @org.jetbrains.annotations.NotNull java.lang.Object right) {
            return software.amazon.jsii.Kernel.call(this, "join", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { left, right });
        }
    }
}
