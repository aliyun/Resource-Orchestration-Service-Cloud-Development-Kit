package com.aliyun.ros.cdk.ens;

/**
 * Represents a <code>Image</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.279Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.IImage")
@software.amazon.jsii.Jsii.Proxy(IImage.Jsii$Proxy.class)
public interface IImage extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Architecture: The image architecture.
     * <p>
     * Valid values:
     * i386
     * x86_64
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture();

    /**
     * Attribute ComputeType: Computing type.
     * <p>
     * ens_vm/ens: x86 computing.
     * bare_metal: x86 bare machine or x86 bare metal.
     * arm_vm: ARM computing.
     * arm_bare_metal: ARM bare machine or ARM bare metal.
     * pcfarm: heterogeneous computing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeType();

    /**
     * Attribute CreateTime: The image creation time.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ImageId: The ID of the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId();

    /**
     * Attribute ImageName: The name of the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName();

    /**
     * Attribute ImageOwnerAlias: The source of the image.
     * <p>
     * Valid values:
     * system: public images
     * self: your custom images
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOwnerAlias();

    /**
     * Attribute ImageSize: The size of the image.
     * <p>
     * Unit: GiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageSize();

    /**
     * Attribute InstanceId: The ID of the instance corresponding to the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute OsVersion: The operating system version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsVersion();

    /**
     * Attribute Platform: The type of operating system used by the image.
     * <p>
     * centos
     * ubuntu
     * alios
     * debian
     * rhel
     * windows
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform();

    /**
     * Attribute SnapshotId: The ID of the snapshot corresponding to the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.ImageProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ens.IImage.Jsii$Default {
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
         * Attribute Architecture: The image architecture.
         * <p>
         * Valid values:
         * i386
         * x86_64
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture() {
            return software.amazon.jsii.Kernel.get(this, "attrArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ComputeType: Computing type.
         * <p>
         * ens_vm/ens: x86 computing.
         * bare_metal: x86 bare machine or x86 bare metal.
         * arm_vm: ARM computing.
         * arm_bare_metal: ARM bare machine or ARM bare metal.
         * pcfarm: heterogeneous computing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeType() {
            return software.amazon.jsii.Kernel.get(this, "attrComputeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The image creation time.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageName: The name of the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageOwnerAlias: The source of the image.
         * <p>
         * Valid values:
         * system: public images
         * self: your custom images
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOwnerAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrImageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageSize: The size of the image.
         * <p>
         * Unit: GiB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrImageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance corresponding to the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsVersion: The operating system version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrOsVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Platform: The type of operating system used by the image.
         * <p>
         * centos
         * ubuntu
         * alios
         * debian
         * rhel
         * windows
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
            return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: The ID of the snapshot corresponding to the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.ImageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.ImageProps.class));
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
         * Attribute Architecture: The image architecture.
         * <p>
         * Valid values:
         * i386
         * x86_64
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture() {
            return software.amazon.jsii.Kernel.get(this, "attrArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ComputeType: Computing type.
         * <p>
         * ens_vm/ens: x86 computing.
         * bare_metal: x86 bare machine or x86 bare metal.
         * arm_vm: ARM computing.
         * arm_bare_metal: ARM bare machine or ARM bare metal.
         * pcfarm: heterogeneous computing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeType() {
            return software.amazon.jsii.Kernel.get(this, "attrComputeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The image creation time.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageName: The name of the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageOwnerAlias: The source of the image.
         * <p>
         * Valid values:
         * system: public images
         * self: your custom images
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOwnerAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrImageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageSize: The size of the image.
         * <p>
         * Unit: GiB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrImageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance corresponding to the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsVersion: The operating system version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrOsVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Platform: The type of operating system used by the image.
         * <p>
         * centos
         * ubuntu
         * alios
         * debian
         * rhel
         * windows
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
            return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: The ID of the snapshot corresponding to the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.ImageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.ImageProps.class));
        }
    }
}
