package com.aliyun.ros.cdk.dataworks;

/**
 * Represents a <code>DataSourceSharedRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.601Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.IDataSourceSharedRule")
@software.amazon.jsii.Jsii.Proxy(IDataSourceSharedRule.Jsii$Proxy.class)
public interface IDataSourceSharedRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the data source sharing rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CreateUser: Creator of the data source permission policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateUser();

    /**
     * Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId();

    /**
     * Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceSharedRuleId();

    /**
     * Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType();

    /**
     * Attribute SharedDataSourceName: The name of the data source shared to the target space.
     * <p>
     * Consists of the name of the source space and the name of the data source, separated by dots.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedDataSourceName();

    /**
     * Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedUser();

    /**
     * Attribute SourceProjectId: The ID of the project to which the data source is originally created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceProjectId();

    /**
     * Attribute TargetProjectId: The ID of the project to which the data source is shared.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetProjectId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dataworks.IDataSourceSharedRule.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the data source sharing rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateUser: Creator of the data source permission policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateUser() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceSharedRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceSharedRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SharedDataSourceName: The name of the data source shared to the target space.
         * <p>
         * Consists of the name of the source space and the name of the data source, separated by dots.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedDataSourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrSharedDataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedUser() {
            return software.amazon.jsii.Kernel.get(this, "attrSharedUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceProjectId: The ID of the project to which the data source is originally created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetProjectId: The ID of the project to which the data source is shared.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDataSourceSharedRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDataSourceSharedRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the data source sharing rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateUser: Creator of the data source permission policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateUser() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceSharedRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceSharedRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SharedDataSourceName: The name of the data source shared to the target space.
         * <p>
         * Consists of the name of the source space and the name of the data source, separated by dots.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedDataSourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrSharedDataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSharedUser() {
            return software.amazon.jsii.Kernel.get(this, "attrSharedUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceProjectId: The ID of the project to which the data source is originally created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetProjectId: The ID of the project to which the data source is shared.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.DataSourceSharedRuleProps.class));
        }
    }
}
