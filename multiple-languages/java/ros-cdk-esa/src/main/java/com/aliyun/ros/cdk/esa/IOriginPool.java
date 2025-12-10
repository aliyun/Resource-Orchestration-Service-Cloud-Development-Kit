package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>OriginPool</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.548Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IOriginPool")
@software.amazon.jsii.Jsii.Proxy(IOriginPool.Jsii$Proxy.class)
public interface IOriginPool extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Enabled: Whether the source address pool is enabled:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabled();

    /**
     * Attribute OriginPoolId: OriginPool Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolId();

    /**
     * Attribute OriginPoolName: The source address pool name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolName();

    /**
     * Attribute Origins: The Source station information added to the source address pool.
     * <p>
     * Multiple Source stations use arrays to transfer values.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrigins();

    /**
     * Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName();

    /**
     * Attribute ReferenceLBCount: How many load balancers are referenced.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferenceLbCount();

    /**
     * Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferences();

    /**
     * Attribute SiteId: The site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginPoolProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IOriginPool.Jsii$Default {
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
         * Attribute Enabled: Whether the source address pool is enabled:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginPoolId: OriginPool Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolId() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginPoolName: The source address pool name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolName() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Origins: The Source station information added to the source address pool.
         * <p>
         * Multiple Source stations use arrays to transfer values.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrigins() {
            return software.amazon.jsii.Kernel.get(this, "attrOrigins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReferenceLBCount: How many load balancers are referenced.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferenceLbCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReferenceLbCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferences() {
            return software.amazon.jsii.Kernel.get(this, "attrReferences", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginPoolProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginPoolProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IOriginPool}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IOriginPool, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Enabled: Whether the source address pool is enabled:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginPoolId: OriginPool Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolId() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginPoolName: The source address pool name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolName() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Origins: The Source station information added to the source address pool.
         * <p>
         * Multiple Source stations use arrays to transfer values.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrigins() {
            return software.amazon.jsii.Kernel.get(this, "attrOrigins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReferenceLBCount: How many load balancers are referenced.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferenceLbCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReferenceLbCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferences() {
            return software.amazon.jsii.Kernel.get(this, "attrReferences", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginPoolProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginPoolProps.class));
        }
    }
}
