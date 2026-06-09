package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>InterRegionTrafficQosPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:45:17.297Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.IInterRegionTrafficQosPolicy")
@software.amazon.jsii.Jsii.Proxy(IInterRegionTrafficQosPolicy.Jsii$Proxy.class)
public interface IInterRegionTrafficQosPolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthGuaranteeMode();

    /**
     * Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyDescription();

    /**
     * Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyId();

    /**
     * Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyName();

    /**
     * Attribute TransitRouterAttachmentId: The ID of the inter-region connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId();

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosPolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.IInterRegionTrafficQosPolicy.Jsii$Default {
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
         * Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthGuaranteeMode() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthGuaranteeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentId: The ID of the inter-region connection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: The ID of the transit router.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.InterRegionTrafficQosPolicyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInterRegionTrafficQosPolicy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInterRegionTrafficQosPolicy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthGuaranteeMode() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthGuaranteeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentId: The ID of the inter-region connection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: The ID of the transit router.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.InterRegionTrafficQosPolicyProps.class));
        }
    }
}
