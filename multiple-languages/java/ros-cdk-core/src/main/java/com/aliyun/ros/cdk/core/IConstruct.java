package com.aliyun.ros.cdk.core;

/**
 * Represents a construct.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:16.990Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IConstruct")
@software.amazon.jsii.Jsii.Proxy(IConstruct.Jsii$Proxy.class)
public interface IConstruct extends software.amazon.jsii.JsiiSerializable, software.constructs.IConstruct, com.aliyun.ros.cdk.core.IDependable {

    /**
     * The construct tree node for this construct.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IConstruct.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }
    }

    /**
     * Internal default implementation for {@link IConstruct}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IConstruct, com.aliyun.ros.cdk.core.IDependable.Jsii$Default, software.constructs.IConstruct.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }
    }
}
