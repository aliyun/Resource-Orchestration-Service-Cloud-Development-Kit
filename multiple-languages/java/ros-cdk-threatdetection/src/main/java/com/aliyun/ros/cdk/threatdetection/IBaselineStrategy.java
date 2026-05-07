package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>BaselineStrategy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.639Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IBaselineStrategy")
@software.amazon.jsii.Jsii.Proxy(IBaselineStrategy.Jsii$Proxy.class)
public interface IBaselineStrategy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BaselineStrategyId: The ID of the baseline check policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyId();

    /**
     * Attribute BaselineStrategyName: The new name of the baseline check policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyName();

    /**
     * Attribute CustomType: The type of the baseline check policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomType();

    /**
     * Attribute CycleDays: The new interval of the baseline check.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCycleDays();

    /**
     * Attribute EndTime: The time when the baseline check based on the baseline check policy ends.
     * <p>
     * Specify the time in the hh:mm:ss format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime();

    /**
     * Attribute RiskSubTypeName: The subtype of the baselines.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskSubTypeName();

    /**
     * Attribute StartTime: The time when the baseline check based on the baseline check policy starts.
     * <p>
     * Specify the time in the hh:mm:ss format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime();

    /**
     * Attribute TargetType: The method that is used to apply the baseline check policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IBaselineStrategy.Jsii$Default {
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
         * Attribute BaselineStrategyId: The ID of the baseline check policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyId() {
            return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BaselineStrategyName: The new name of the baseline check policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyName() {
            return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomType: The type of the baseline check policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomType() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CycleDays: The new interval of the baseline check.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCycleDays() {
            return software.amazon.jsii.Kernel.get(this, "attrCycleDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: The time when the baseline check based on the baseline check policy ends.
         * <p>
         * Specify the time in the hh:mm:ss format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskSubTypeName: The subtype of the baselines.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskSubTypeName() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskSubTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The time when the baseline check based on the baseline check policy starts.
         * <p>
         * Specify the time in the hh:mm:ss format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetType: The method that is used to apply the baseline check policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetType() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBaselineStrategy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBaselineStrategy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BaselineStrategyId: The ID of the baseline check policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyId() {
            return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BaselineStrategyName: The new name of the baseline check policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBaselineStrategyName() {
            return software.amazon.jsii.Kernel.get(this, "attrBaselineStrategyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomType: The type of the baseline check policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomType() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CycleDays: The new interval of the baseline check.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCycleDays() {
            return software.amazon.jsii.Kernel.get(this, "attrCycleDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: The time when the baseline check based on the baseline check policy ends.
         * <p>
         * Specify the time in the hh:mm:ss format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskSubTypeName: The subtype of the baselines.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskSubTypeName() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskSubTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The time when the baseline check based on the baseline check policy starts.
         * <p>
         * Specify the time in the hh:mm:ss format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetType: The method that is used to apply the baseline check policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetType() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.BaselineStrategyProps.class));
        }
    }
}
