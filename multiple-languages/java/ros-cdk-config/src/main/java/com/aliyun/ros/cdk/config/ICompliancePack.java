package com.aliyun.ros.cdk.config;

/**
 * Represents a <code>CompliancePack</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.916Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.ICompliancePack")
@software.amazon.jsii.Jsii.Proxy(ICompliancePack.Jsii$Proxy.class)
public interface ICompliancePack extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountId: Aliyun User Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId();

    /**
     * Attribute CompliancePackId: Compliance Package ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackId();

    /**
     * Attribute CompliancePackName: Compliance Package Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackName();

    /**
     * Attribute CompliancePackTemplateId: Compliance Package Template Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackTemplateId();

    /**
     * Attribute Description: Description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.CompliancePackProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.config.ICompliancePack.Jsii$Default {
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
         * Attribute AccountId: Aliyun User Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompliancePackId: Compliance Package ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackId() {
            return software.amazon.jsii.Kernel.get(this, "attrCompliancePackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompliancePackName: Compliance Package Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackName() {
            return software.amazon.jsii.Kernel.get(this, "attrCompliancePackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompliancePackTemplateId: Compliance Package Template Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrCompliancePackTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.CompliancePackProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.CompliancePackProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICompliancePack}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICompliancePack, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccountId: Aliyun User Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompliancePackId: Compliance Package ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackId() {
            return software.amazon.jsii.Kernel.get(this, "attrCompliancePackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompliancePackName: Compliance Package Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackName() {
            return software.amazon.jsii.Kernel.get(this, "attrCompliancePackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompliancePackTemplateId: Compliance Package Template Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompliancePackTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrCompliancePackTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.CompliancePackProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.CompliancePackProps.class));
        }
    }
}
