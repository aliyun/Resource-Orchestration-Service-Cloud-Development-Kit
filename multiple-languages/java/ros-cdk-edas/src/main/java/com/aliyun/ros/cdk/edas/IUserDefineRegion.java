package com.aliyun.ros.cdk.edas;

/**
 * Represents a <code>UserDefineRegion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:24.924Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.IUserDefineRegion")
@software.amazon.jsii.Jsii.Proxy(IUserDefineRegion.Jsii$Proxy.class)
public interface IUserDefineRegion extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BelongRegion: Under the physical region ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBelongRegion();

    /**
     * Attribute DebugEnable: Whether debug is enable.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDebugEnable();

    /**
     * Attribute Id: Resource ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrId();

    /**
     * Attribute RegionName: Region name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionName();

    /**
     * Attribute UserId: User account ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.UserDefineRegionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.edas.IUserDefineRegion.Jsii$Default {
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
         * Attribute BelongRegion: Under the physical region ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBelongRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrBelongRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DebugEnable: Whether debug is enable.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDebugEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrDebugEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Id: Resource ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
            return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionName: Region name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionName() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: User account ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.UserDefineRegionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.UserDefineRegionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUserDefineRegion}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUserDefineRegion, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BelongRegion: Under the physical region ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBelongRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrBelongRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DebugEnable: Whether debug is enable.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDebugEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrDebugEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Id: Resource ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
            return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionName: Region name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionName() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: User account ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.UserDefineRegionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.UserDefineRegionProps.class));
        }
    }
}
