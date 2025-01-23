package com.aliyun.ros.cdk.polardb.datasource;

/**
 * Represents a <code>ParameterGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.551Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.IParameterGroup")
@software.amazon.jsii.Jsii.Proxy(IParameterGroup.Jsii$Proxy.class)
public interface IParameterGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the parameter template was created.
     * <p>
     * The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DbType: The type of the database engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType();

    /**
     * Attribute DbVersion: The version of the database engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion();

    /**
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     * <p>
     * Valid values:
     * 0: A restart is not required.
     * 1: A restart is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceRestart();

    /**
     * Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterCounts();

    /**
     * Attribute ParameterGroupDesc: The description of the parameter template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupDesc();

    /**
     * Attribute ParameterGroupId: The ID of the parameter template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupId();

    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupName();

    /**
     * Attribute ParameterGroupType: The type of the parameter template.
     * <p>
     * Valid values:
     * 0: the default parameter template.
     * 1: a custom parameter template.
     * 2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupType();

    /**
     * Attribute Parameters: Details about the parameter templates.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.polardb.datasource.IParameterGroup.Jsii$Default {
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
         * Attribute CreateTime: The time when the parameter template was created.
         * <p>
         * The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbType: The type of the database engine.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbVersion: The version of the database engine.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
         * <p>
         * Valid values:
         * 0: A restart is not required.
         * 1: A restart is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceRestart() {
            return software.amazon.jsii.Kernel.get(this, "attrForceRestart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterCounts: The number of parameters in the parameter template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterCounts() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterCounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupDesc: The description of the parameter template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupDesc() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupId: The ID of the parameter template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupName: The name of the parameter template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupType: The type of the parameter template.
         * <p>
         * Valid values:
         * 0: the default parameter template.
         * 1: a custom parameter template.
         * 2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: Details about the parameter templates.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IParameterGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IParameterGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the parameter template was created.
         * <p>
         * The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbType: The type of the database engine.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbVersion: The version of the database engine.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
         * <p>
         * Valid values:
         * 0: A restart is not required.
         * 1: A restart is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceRestart() {
            return software.amazon.jsii.Kernel.get(this, "attrForceRestart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterCounts: The number of parameters in the parameter template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterCounts() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterCounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupDesc: The description of the parameter template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupDesc() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupId: The ID of the parameter template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupName: The name of the parameter template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterGroupType: The type of the parameter template.
         * <p>
         * Valid values:
         * 0: the default parameter template.
         * 1: a custom parameter template.
         * 2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: Details about the parameter templates.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps.class));
        }
    }
}
