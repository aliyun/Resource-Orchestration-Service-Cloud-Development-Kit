package com.aliyun.ros.cdk.ga;

/**
 * Represents a <code>Accelerator</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.091Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.IAccelerator")
@software.amazon.jsii.Jsii.Proxy(IAccelerator.Jsii$Proxy.class)
public interface IAccelerator extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AcceleratorId: The ID of the GA instance to query.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorId();

    /**
     * Attribute AcceleratorName: The Name of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorName();

    /**
     * Attribute AutoPay: The AutoPay of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay();

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUseCoupon();

    /**
     * Attribute DnsName: The DNS name of the accelerator.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName();

    /**
     * Attribute Duration: The Duration of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuration();

    /**
     * Attribute OrderId: The OrderId of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId();

    /**
     * Attribute PaymentType: The Payment Typethe GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPricingCycle();

    /**
     * Attribute Spec: The instance type of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AcceleratorProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ga.IAccelerator.Jsii$Default {
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
         * Attribute AcceleratorId: The ID of the GA instance to query.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorId() {
            return software.amazon.jsii.Kernel.get(this, "attrAcceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AcceleratorName: The Name of the GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorName() {
            return software.amazon.jsii.Kernel.get(this, "attrAcceleratorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoPay: The AutoPay of the GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUseCoupon() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsName: The DNS name of the accelerator.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Duration: The Duration of the GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The OrderId of the GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The Payment Typethe GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PricingCycle: The PricingCycle of the GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPricingCycle() {
            return software.amazon.jsii.Kernel.get(this, "attrPricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The instance type of the GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AcceleratorProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.AcceleratorProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAccelerator}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAccelerator, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AcceleratorId: The ID of the GA instance to query.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorId() {
            return software.amazon.jsii.Kernel.get(this, "attrAcceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AcceleratorName: The Name of the GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorName() {
            return software.amazon.jsii.Kernel.get(this, "attrAcceleratorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoPay: The AutoPay of the GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUseCoupon() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsName: The DNS name of the accelerator.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Duration: The Duration of the GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The OrderId of the GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The Payment Typethe GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PricingCycle: The PricingCycle of the GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPricingCycle() {
            return software.amazon.jsii.Kernel.get(this, "attrPricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The instance type of the GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AcceleratorProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.AcceleratorProps.class));
        }
    }
}
