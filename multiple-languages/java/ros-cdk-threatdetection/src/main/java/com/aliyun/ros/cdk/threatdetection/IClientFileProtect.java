package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>ClientFileProtect</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.492Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IClientFileProtect")
@software.amazon.jsii.Jsii.Proxy(IClientFileProtect.Jsii$Proxy.class)
public interface IClientFileProtect extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AlertLevel: The severity of alerts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlertLevel();

    /**
     * Attribute FileOps: The operations that you want to perform on the files.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileOps();

    /**
     * Attribute FilePaths: The paths to the monitored files.
     * <p>
     * Wildcard characters are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilePaths();

    /**
     * Attribute Platform: The type of the operating system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform();

    /**
     * Attribute ProcPaths: The paths to the monitored processes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProcPaths();

    /**
     * Attribute RuleAction: The handling method of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction();

    /**
     * Attribute RuleId: The ID of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId();

    /**
     * Attribute RuleName: The name of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute SwitchId: The switch ID of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSwitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IClientFileProtect.Jsii$Default {
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
         * Attribute AlertLevel: The severity of alerts.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlertLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrAlertLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileOps: The operations that you want to perform on the files.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileOps() {
            return software.amazon.jsii.Kernel.get(this, "attrFileOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FilePaths: The paths to the monitored files.
         * <p>
         * Wildcard characters are supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilePaths() {
            return software.amazon.jsii.Kernel.get(this, "attrFilePaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Platform: The type of the operating system.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
            return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProcPaths: The paths to the monitored processes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProcPaths() {
            return software.amazon.jsii.Kernel.get(this, "attrProcPaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleAction: The handling method of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: The ID of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SwitchId: The switch ID of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IClientFileProtect}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IClientFileProtect, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AlertLevel: The severity of alerts.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlertLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrAlertLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileOps: The operations that you want to perform on the files.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileOps() {
            return software.amazon.jsii.Kernel.get(this, "attrFileOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FilePaths: The paths to the monitored files.
         * <p>
         * Wildcard characters are supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilePaths() {
            return software.amazon.jsii.Kernel.get(this, "attrFilePaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Platform: The type of the operating system.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
            return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProcPaths: The paths to the monitored processes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProcPaths() {
            return software.amazon.jsii.Kernel.get(this, "attrProcPaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleAction: The handling method of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: The ID of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SwitchId: The switch ID of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps.class));
        }
    }
}
