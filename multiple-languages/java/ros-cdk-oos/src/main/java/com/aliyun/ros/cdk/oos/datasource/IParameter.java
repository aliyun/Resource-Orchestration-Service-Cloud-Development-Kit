package com.aliyun.ros.cdk.oos.datasource;

/**
 * Represents a <code>Parameter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:21:57.922Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.IParameter")
@software.amazon.jsii.Jsii.Proxy(IParameter.Jsii$Proxy.class)
public interface IParameter extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Constraints: The constraints of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraints();

    /**
     * Attribute CreatedBy: The user who created the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy();

    /**
     * Attribute CreatedDate: The time when the common parameter was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate();

    /**
     * Attribute Description: The description of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute ParameterId: The ID of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterId();

    /**
     * Attribute ParameterVersion: The version number of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterVersion();

    /**
     * Attribute ShareType: The share type of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType();

    /**
     * Attribute Tags: The tags of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Type: The data type of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute UpdatedBy: The user who last updated the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy();

    /**
     * Attribute UpdatedDate: The time when the common parameter was last updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate();

    /**
     * Attribute Value: The value of the common parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrValue();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.ParameterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oos.datasource.IParameter.Jsii$Default {
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
         * Attribute Constraints: The constraints of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraints() {
            return software.amazon.jsii.Kernel.get(this, "attrConstraints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The user who created the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedDate: The time when the common parameter was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterId: The ID of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterId() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterVersion: The version number of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The data type of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who last updated the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the common parameter was last updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Value: The value of the common parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrValue() {
            return software.amazon.jsii.Kernel.get(this, "attrValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.ParameterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.datasource.ParameterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IParameter}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IParameter, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Constraints: The constraints of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraints() {
            return software.amazon.jsii.Kernel.get(this, "attrConstraints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The user who created the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedDate: The time when the common parameter was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterId: The ID of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterId() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterVersion: The version number of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The data type of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who last updated the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the common parameter was last updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Value: The value of the common parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrValue() {
            return software.amazon.jsii.Kernel.get(this, "attrValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.ParameterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.datasource.ParameterProps.class));
        }
    }
}
