package com.aliyun.ros.cdk.ram;

/**
 * Any object that has an associated principal that a permission can be granted to.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.380Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.IGrantable")
@software.amazon.jsii.Jsii.Proxy(IGrantable.Jsii$Proxy.class)
public interface IGrantable extends software.amazon.jsii.JsiiSerializable {

    /**
     * The principal to grant permissions to.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal getGrantPrincipal();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ram.IGrantable.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The principal to grant permissions to.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal getGrantPrincipal() {
            return software.amazon.jsii.Kernel.get(this, "grantPrincipal", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.IPrincipal.class));
        }
    }

    /**
     * Internal default implementation for {@link IGrantable}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IGrantable {

        /**
         * The principal to grant permissions to.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal getGrantPrincipal() {
            return software.amazon.jsii.Kernel.get(this, "grantPrincipal", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.IPrincipal.class));
        }
    }
}
