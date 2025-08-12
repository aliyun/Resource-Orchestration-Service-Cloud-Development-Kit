package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>AntiBruteForceRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.005Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IAntiBruteForceRule")
@software.amazon.jsii.Jsii.Proxy(IAntiBruteForceRule.Jsii$Proxy.class)
public interface IAntiBruteForceRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleId();

    /**
     * Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleName();

    /**
     * Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true: yes</li>
     * <li>false: no</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultRule();

    /**
     * Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailCount();

    /**
     * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.
     * <p>
     * Unit: minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrForbiddenTime();

    /**
     * Attribute Span: The period of time during which logon failures from an account are measured.
     * <p>
     * Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpan();

    /**
     * Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuidList();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IAntiBruteForceRule.Jsii$Default {
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
         * Attribute AntiBruteForceRuleId: The ID of the defense rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AntiBruteForceRuleName: The name of the defense rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: yes</li>
         * <li>false: no</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultRule() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailCount() {
            return software.amazon.jsii.Kernel.get(this, "attrFailCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.
         * <p>
         * Unit: minutes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrForbiddenTime() {
            return software.amazon.jsii.Kernel.get(this, "attrForbiddenTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Span: The period of time during which logon failures from an account are measured.
         * <p>
         * Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpan() {
            return software.amazon.jsii.Kernel.get(this, "attrSpan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuidList() {
            return software.amazon.jsii.Kernel.get(this, "attrUuidList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAntiBruteForceRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAntiBruteForceRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AntiBruteForceRuleId: The ID of the defense rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AntiBruteForceRuleName: The name of the defense rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: yes</li>
         * <li>false: no</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultRule() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailCount() {
            return software.amazon.jsii.Kernel.get(this, "attrFailCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.
         * <p>
         * Unit: minutes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrForbiddenTime() {
            return software.amazon.jsii.Kernel.get(this, "attrForbiddenTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Span: The period of time during which logon failures from an account are measured.
         * <p>
         * Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpan() {
            return software.amazon.jsii.Kernel.get(this, "attrSpan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuidList() {
            return software.amazon.jsii.Kernel.get(this, "attrUuidList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps.class));
        }
    }
}
