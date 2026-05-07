package com.aliyun.ros.cdk.cr;

/**
 * Represents a <code>ScanRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.293Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.IScanRule")
@software.amazon.jsii.Jsii.Proxy(IScanRule.Jsii$Proxy.class)
public interface IScanRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: Creation time of the scan rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaces();

    /**
     * Attribute RepoNames: The list of repositories.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoNames();

    /**
     * Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoTagFilterPattern();

    /**
     * Attribute RuleName: The scan rule name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute ScanRuleId: The ID of the scan rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanRuleId();

    /**
     * Attribute ScanScope: The scan scope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanScope();

    /**
     * Attribute ScanType: The scan type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanType();

    /**
     * Attribute TriggerType: Trigger type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerType();

    /**
     * Attribute UpdateTime: Change time of the scan rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ScanRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cr.IScanRule.Jsii$Default {
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
         * Attribute CreateTime: Creation time of the scan rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: ACR Instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespaces: The list of namespaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaces() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoNames: The list of repositories.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoNames() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoTagFilterPattern() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoTagFilterPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The scan rule name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanRuleId: The ID of the scan rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScanRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanScope: The scan scope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScanScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanType: The scan type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanType() {
            return software.amazon.jsii.Kernel.get(this, "attrScanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerType: Trigger type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerType() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Change time of the scan rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ScanRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.ScanRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IScanRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IScanRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: Creation time of the scan rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: ACR Instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespaces: The list of namespaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaces() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoNames: The list of repositories.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoNames() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoTagFilterPattern() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoTagFilterPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The scan rule name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanRuleId: The ID of the scan rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScanRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanScope: The scan scope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScanScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanType: The scan type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanType() {
            return software.amazon.jsii.Kernel.get(this, "attrScanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerType: Trigger type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerType() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Change time of the scan rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ScanRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.ScanRuleProps.class));
        }
    }
}
