package com.aliyun.ros.cdk.ga;

/**
 * Represents a <code>BandwidthPackage</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.438Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.IBandwidthPackage")
@software.amazon.jsii.Jsii.Proxy(IBandwidthPackage.Jsii$Proxy.class)
public interface IBandwidthPackage extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AutoPay: The AutoPay of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay();

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUseCoupon();

    /**
     * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId();

    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageName();

    /**
     * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthType();

    /**
     * Attribute BillingType: The BillingType of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBillingType();

    /**
     * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCbnGeographicRegionIdA();

    /**
     * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCbnGeographicRegionIdB();

    /**
     * Attribute ChargeType: The ChargeType of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType();

    /**
     * Attribute PaymentType: The Payment Type of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute Ratio: The Ratio of the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRatio();

    /**
     * Attribute Type: The type of the bandwidth plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BandwidthPackageProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ga.IBandwidthPackage.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AutoPay: The AutoPay of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUseCoupon() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageId: The Resource ID of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageName: The Resource name of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageName() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthType() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BillingType: The BillingType of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBillingType() {
            return software.amazon.jsii.Kernel.get(this, "attrBillingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCbnGeographicRegionIdA() {
            return software.amazon.jsii.Kernel.get(this, "attrCbnGeographicRegionIdA", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCbnGeographicRegionIdB() {
            return software.amazon.jsii.Kernel.get(this, "attrCbnGeographicRegionIdB", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChargeType: The ChargeType of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The Payment Type of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ratio: The Ratio of the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the bandwidth plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BandwidthPackageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.BandwidthPackageProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBandwidthPackage}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBandwidthPackage, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AutoPay: The AutoPay of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUseCoupon() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageId: The Resource ID of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageName: The Resource name of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageName() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthType() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BillingType: The BillingType of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBillingType() {
            return software.amazon.jsii.Kernel.get(this, "attrBillingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCbnGeographicRegionIdA() {
            return software.amazon.jsii.Kernel.get(this, "attrCbnGeographicRegionIdA", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCbnGeographicRegionIdB() {
            return software.amazon.jsii.Kernel.get(this, "attrCbnGeographicRegionIdB", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChargeType: The ChargeType of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The Payment Type of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ratio: The Ratio of the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the bandwidth plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BandwidthPackageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.BandwidthPackageProps.class));
        }
    }
}
