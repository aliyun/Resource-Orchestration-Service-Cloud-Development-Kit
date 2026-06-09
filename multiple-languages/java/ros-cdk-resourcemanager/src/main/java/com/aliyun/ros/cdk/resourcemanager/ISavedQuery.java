package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>SavedQuery</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.264Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.ISavedQuery")
@software.amazon.jsii.Jsii.Proxy(ISavedQuery.Jsii$Proxy.class)
public interface ISavedQuery extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Expression: Query Expression of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpression();

    /**
     * Attribute SavedQueryId: The id of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryId();

    /**
     * Attribute SavedQueryName: The name of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryName();

    /**
     * Attribute UpdateTime: Update time of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SavedQueryProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.ISavedQuery.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Expression: Query Expression of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpression() {
            return software.amazon.jsii.Kernel.get(this, "attrExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SavedQueryId: The id of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryId() {
            return software.amazon.jsii.Kernel.get(this, "attrSavedQueryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SavedQueryName: The name of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryName() {
            return software.amazon.jsii.Kernel.get(this, "attrSavedQueryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update time of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SavedQueryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.SavedQueryProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISavedQuery}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISavedQuery, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Expression: Query Expression of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpression() {
            return software.amazon.jsii.Kernel.get(this, "attrExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SavedQueryId: The id of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryId() {
            return software.amazon.jsii.Kernel.get(this, "attrSavedQueryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SavedQueryName: The name of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSavedQueryName() {
            return software.amazon.jsii.Kernel.get(this, "attrSavedQueryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update time of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SavedQueryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.SavedQueryProps.class));
        }
    }
}
