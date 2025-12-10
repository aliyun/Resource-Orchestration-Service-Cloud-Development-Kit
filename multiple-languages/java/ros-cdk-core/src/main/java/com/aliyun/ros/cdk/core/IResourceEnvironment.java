package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.743Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IResourceEnvironment")
@software.amazon.jsii.Jsii.Proxy(IResourceEnvironment.Jsii$Proxy.class)
public interface IResourceEnvironment extends software.amazon.jsii.JsiiSerializable {

    /**
     * The Alibaba Cloud account ID that this resource belongs to.
     * <p>
     * Since this can be a Token
     * (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
     * make sure to use Token.compareStrings()
     * instead of just comparing the values for equality.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * The Alibaba Cloud region that this resource belongs to.
     * <p>
     * Since this can be a Token
     * (for example, when the region is ROS's ALIYUN::Region intrinsic),
     * make sure to use Token.compareStrings()
     * instead of just comparing the values for equality.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IResourceEnvironment.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The Alibaba Cloud account ID that this resource belongs to.
         * <p>
         * Since this can be a Token
         * (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
         * make sure to use Token.compareStrings()
         * instead of just comparing the values for equality.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String getAccount() {
            return software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * The Alibaba Cloud region that this resource belongs to.
         * <p>
         * Since this can be a Token
         * (for example, when the region is ROS's ALIYUN::Region intrinsic),
         * make sure to use Token.compareStrings()
         * instead of just comparing the values for equality.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String getRegion() {
            return software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }

    /**
     * Internal default implementation for {@link IResourceEnvironment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IResourceEnvironment {

        /**
         * The Alibaba Cloud account ID that this resource belongs to.
         * <p>
         * Since this can be a Token
         * (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
         * make sure to use Token.compareStrings()
         * instead of just comparing the values for equality.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.String getAccount() {
            return software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * The Alibaba Cloud region that this resource belongs to.
         * <p>
         * Since this can be a Token
         * (for example, when the region is ROS's ALIYUN::Region intrinsic),
         * make sure to use Token.compareStrings()
         * instead of just comparing the values for equality.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.String getRegion() {
            return software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }
}
