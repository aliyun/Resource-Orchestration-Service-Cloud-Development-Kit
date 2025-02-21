package com.aliyun.ros.cdk.cxapi;

/**
 * Return the appropriate values for the environment placeholders.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.736Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.IEnvironmentPlaceholderProvider")
@software.amazon.jsii.Jsii.Proxy(IEnvironmentPlaceholderProvider.Jsii$Proxy.class)
public interface IEnvironmentPlaceholderProvider extends software.amazon.jsii.JsiiSerializable {

    /**
     * Return the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.String accountId();

    /**
     * Return the region.
     */
    @org.jetbrains.annotations.NotNull java.lang.String region();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cxapi.IEnvironmentPlaceholderProvider.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Return the account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String accountId() {
            return software.amazon.jsii.Kernel.asyncCall(this, "accountId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Return the region.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String region() {
            return software.amazon.jsii.Kernel.asyncCall(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }

    /**
     * Internal default implementation for {@link IEnvironmentPlaceholderProvider}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEnvironmentPlaceholderProvider {

        /**
         * Return the account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.String accountId() {
            return software.amazon.jsii.Kernel.asyncCall(this, "accountId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Return the region.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.String region() {
            return software.amazon.jsii.Kernel.asyncCall(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }
}
