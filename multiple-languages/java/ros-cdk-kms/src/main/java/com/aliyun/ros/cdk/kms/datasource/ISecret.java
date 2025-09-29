package com.aliyun.ros.cdk.kms.datasource;

/**
 * Represents a <code>Secret</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.753Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.datasource.ISecret")
@software.amazon.jsii.Jsii.Proxy(ISecret.Jsii$Proxy.class)
public interface ISecret extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutomaticRotation();

    /**
     * Attribute CreateTime: The time when the secret was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDkmsInstanceId();

    /**
     * Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKeyId();

    /**
     * Attribute ExtendedConfig: The extended configuration of the secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtendedConfig();

    /**
     * Attribute LastRotationDate: The time when the last rotation was performed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastRotationDate();

    /**
     * Attribute NextRotationDate: The time when the next rotation will be performed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextRotationDate();

    /**
     * Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlannedDeleteTime();

    /**
     * Attribute RotationInterval: The interval for automatic rotation.
     * <p>
     * The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRotationInterval();

    /**
     * Attribute SecretName: The name of the secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretName();

    /**
     * Attribute SecretType: The type of the secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretType();

    /**
     * Attribute UpdateTime: The time when the secret was updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.SecretProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.kms.datasource.ISecret.Jsii$Default {
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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutomaticRotation() {
            return software.amazon.jsii.Kernel.get(this, "attrAutomaticRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the secret was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the secret.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDkmsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDkmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtendedConfig: The extended configuration of the secret.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtendedConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrExtendedConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastRotationDate: The time when the last rotation was performed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastRotationDate() {
            return software.amazon.jsii.Kernel.get(this, "attrLastRotationDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NextRotationDate: The time when the next rotation will be performed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextRotationDate() {
            return software.amazon.jsii.Kernel.get(this, "attrNextRotationDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlannedDeleteTime() {
            return software.amazon.jsii.Kernel.get(this, "attrPlannedDeleteTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RotationInterval: The interval for automatic rotation.
         * <p>
         * The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRotationInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrRotationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretName: The name of the secret.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretType: The type of the secret.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretType() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the secret was updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.SecretProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.datasource.SecretProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISecret}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISecret, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutomaticRotation() {
            return software.amazon.jsii.Kernel.get(this, "attrAutomaticRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the secret was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the secret.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDkmsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDkmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtendedConfig: The extended configuration of the secret.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtendedConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrExtendedConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastRotationDate: The time when the last rotation was performed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastRotationDate() {
            return software.amazon.jsii.Kernel.get(this, "attrLastRotationDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NextRotationDate: The time when the next rotation will be performed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextRotationDate() {
            return software.amazon.jsii.Kernel.get(this, "attrNextRotationDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlannedDeleteTime() {
            return software.amazon.jsii.Kernel.get(this, "attrPlannedDeleteTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RotationInterval: The interval for automatic rotation.
         * <p>
         * The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRotationInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrRotationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretName: The name of the secret.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretType: The type of the secret.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretType() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the secret was updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.SecretProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.datasource.SecretProps.class));
        }
    }
}
