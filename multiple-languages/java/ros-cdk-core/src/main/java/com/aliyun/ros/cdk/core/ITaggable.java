package com.aliyun.ros.cdk.core;

/**
 * Interface to implement tags.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.209Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ITaggable")
@software.amazon.jsii.Jsii.Proxy(ITaggable.Jsii$Proxy.class)
public interface ITaggable extends software.amazon.jsii.JsiiSerializable {

    /**
     * TagManager to set, remove and format tags.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.ITaggable.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * TagManager to set, remove and format tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
            return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
        }
    }

    /**
     * Internal default implementation for {@link ITaggable}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITaggable {

        /**
         * TagManager to set, remove and format tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
            return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
        }
    }
}
