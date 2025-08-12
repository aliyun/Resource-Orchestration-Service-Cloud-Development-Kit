package com.aliyun.ros.cdk.waf3;

/**
 * Represents a <code>TGW</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.774Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.ITgw")
@software.amazon.jsii.Jsii.Proxy(ITgw.Jsii$Proxy.class)
public interface ITgw extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute InstanceId: The ID of the WAF instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute Port: Access the cloud product port of WAF.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute ResourceProduct: Access to WAF cloud products.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceProduct();

    /**
     * Attribute TgwId: The protection object ID of the transparent access resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTgwId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.TGWProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.waf3.ITgw.Jsii$Default {
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

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute InstanceId: The ID of the WAF instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Access the cloud product port of WAF.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceProduct: Access to WAF cloud products.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceProduct() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TgwId: The protection object ID of the transparent access resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTgwId() {
            return software.amazon.jsii.Kernel.get(this, "attrTgwId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.TGWProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.waf3.TGWProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITgw}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITgw, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute InstanceId: The ID of the WAF instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Access the cloud product port of WAF.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceProduct: Access to WAF cloud products.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceProduct() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TgwId: The protection object ID of the transparent access resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTgwId() {
            return software.amazon.jsii.Kernel.get(this, "attrTgwId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.TGWProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.waf3.TGWProps.class));
        }
    }
}
