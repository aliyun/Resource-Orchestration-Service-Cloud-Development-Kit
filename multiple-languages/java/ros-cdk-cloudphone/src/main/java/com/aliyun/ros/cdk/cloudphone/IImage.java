package com.aliyun.ros.cdk.cloudphone;

/**
 * Represents a <code>Image</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.945Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.IImage")
@software.amazon.jsii.Jsii.Proxy(IImage.Jsii$Proxy.class)
public interface IImage extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the image was created.
     * <p>
     * The time follows the ISO 8601 standard.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The image description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute ImageCategory: The image type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCategory();

    /**
     * Attribute ImageId: The image ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId();

    /**
     * Attribute ImageName: The image name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName();

    /**
     * Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsSelfShared();

    /**
     * Attribute OsName: The display name of the OS in Chinese.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsName();

    /**
     * Attribute OsNameEn: The display name of the OS in English.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsNameEn();

    /**
     * Attribute OsType: The image OS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsType();

    /**
     * Attribute Platform: The OS distribution.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform();

    /**
     * Attribute Progress: The progress of image creation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress();

    /**
     * Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsage();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.ImageProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cloudphone.IImage.Jsii$Default {
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
         * Attribute CreateTime: The time when the image was created.
         * <p>
         * The time follows the ISO 8601 standard.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The image description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCategory: The image type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The image ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageName: The image name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsSelfShared() {
            return software.amazon.jsii.Kernel.get(this, "attrIsSelfShared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsName: The display name of the OS in Chinese.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsName() {
            return software.amazon.jsii.Kernel.get(this, "attrOsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsNameEn: The display name of the OS in English.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsNameEn() {
            return software.amazon.jsii.Kernel.get(this, "attrOsNameEn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsType: The image OS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsType() {
            return software.amazon.jsii.Kernel.get(this, "attrOsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Platform: The OS distribution.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
            return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: The progress of image creation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Usage: Whether the image is already running in the cloud phone instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsage() {
            return software.amazon.jsii.Kernel.get(this, "attrUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.ImageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudphone.ImageProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IImage}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IImage, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the image was created.
         * <p>
         * The time follows the ISO 8601 standard.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The image description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCategory: The image type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The image ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageName: The image name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsSelfShared() {
            return software.amazon.jsii.Kernel.get(this, "attrIsSelfShared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsName: The display name of the OS in Chinese.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsName() {
            return software.amazon.jsii.Kernel.get(this, "attrOsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsNameEn: The display name of the OS in English.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsNameEn() {
            return software.amazon.jsii.Kernel.get(this, "attrOsNameEn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsType: The image OS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsType() {
            return software.amazon.jsii.Kernel.get(this, "attrOsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Platform: The OS distribution.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
            return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: The progress of image creation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Usage: Whether the image is already running in the cloud phone instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsage() {
            return software.amazon.jsii.Kernel.get(this, "attrUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.ImageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudphone.ImageProps.class));
        }
    }
}
