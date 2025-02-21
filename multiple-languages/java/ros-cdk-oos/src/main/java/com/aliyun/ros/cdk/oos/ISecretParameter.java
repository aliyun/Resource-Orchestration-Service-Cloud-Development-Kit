package com.aliyun.ros.cdk.oos;

/**
 * Represents a <code>SecretParameter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.416Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.ISecretParameter")
@software.amazon.jsii.Jsii.Proxy(ISecretParameter.Jsii$Proxy.class)
public interface ISecretParameter extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Constraints: The constraints of the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraints();

    /**
     * Attribute CreatedBy: The user who created the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy();

    /**
     * Attribute CreateTime: The time when the encryption parameter was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyId();

    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterVersion();

    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterId();

    /**
     * Attribute SecretParameterName: The name of the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterName();

    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType();

    /**
     * Attribute Tags: Tags of encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Type: The data type of the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy();

    /**
     * Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.SecretParameterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oos.ISecretParameter.Jsii$Default {
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
         * Attribute Constraints: The constraints of the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraints() {
            return software.amazon.jsii.Kernel.get(this, "attrConstraints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The user who created the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the encryption parameter was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterVersion: The version number of the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretParameterId: The ID of the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretParameterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretParameterName: The name of the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags of encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The data type of the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who updated the encryption parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the encryption parameter was updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.SecretParameterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.SecretParameterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISecretParameter}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISecretParameter, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Constraints: The constraints of the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraints() {
            return software.amazon.jsii.Kernel.get(this, "attrConstraints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The user who created the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the encryption parameter was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterVersion: The version number of the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretParameterId: The ID of the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretParameterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretParameterName: The name of the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags of encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The data type of the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who updated the encryption parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the encryption parameter was updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.SecretParameterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.SecretParameterProps.class));
        }
    }
}
