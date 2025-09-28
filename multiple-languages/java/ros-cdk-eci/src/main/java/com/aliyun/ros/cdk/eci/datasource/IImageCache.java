package com.aliyun.ros.cdk.eci.datasource;

/**
 * Represents a <code>ImageCache</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.904Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.datasource.IImageCache")
@software.amazon.jsii.Jsii.Proxy(IImageCache.Jsii$Proxy.class)
public interface IImageCache extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ContainerGroupId: ContainerGroupId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId();

    /**
     * Attribute CreateTime: CreateTime.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EliminationStrategy: The elimination strategy of the mirror cache.
     * <p>
     * The default is empty, indicating that it has been kept.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEliminationStrategy();

    /**
     * Attribute Events: Events.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEvents();

    /**
     * Attribute ExpireDateTime: ExpireDateTime.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireDateTime();

    /**
     * Attribute FlashSnapshotId: FlashSnapshotId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlashSnapshotId();

    /**
     * Attribute ImageCacheId: ImageCacheId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheId();

    /**
     * Attribute ImageCacheName: ImageCacheName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheName();

    /**
     * Attribute ImageCacheSize: ImageCacheSize.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheSize();

    /**
     * Attribute ImageCacheTags: Tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheTags();

    /**
     * Attribute Images: Images.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImages();

    /**
     * Attribute Progress: Progress.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress();

    /**
     * Attribute ResourceGroupId: ResourceGroupId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SnapshotId: SnapshotId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.datasource.ImageCacheProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.eci.datasource.IImageCache.Jsii$Default {
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
         * Attribute ContainerGroupId: ContainerGroupId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: CreateTime.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EliminationStrategy: The elimination strategy of the mirror cache.
         * <p>
         * The default is empty, indicating that it has been kept.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEliminationStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrEliminationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Events: Events.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEvents() {
            return software.amazon.jsii.Kernel.get(this, "attrEvents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireDateTime: ExpireDateTime.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireDateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireDateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlashSnapshotId: FlashSnapshotId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlashSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrFlashSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheId: ImageCacheId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheName: ImageCacheName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheSize: ImageCacheSize.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheSize() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheTags: Tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheTags() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Images: Images.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImages() {
            return software.amazon.jsii.Kernel.get(this, "attrImages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: Progress.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: ResourceGroupId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: SnapshotId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.datasource.ImageCacheProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eci.datasource.ImageCacheProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IImageCache}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IImageCache, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ContainerGroupId: ContainerGroupId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: CreateTime.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EliminationStrategy: The elimination strategy of the mirror cache.
         * <p>
         * The default is empty, indicating that it has been kept.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEliminationStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrEliminationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Events: Events.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEvents() {
            return software.amazon.jsii.Kernel.get(this, "attrEvents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireDateTime: ExpireDateTime.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireDateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireDateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlashSnapshotId: FlashSnapshotId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlashSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrFlashSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheId: ImageCacheId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheName: ImageCacheName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheSize: ImageCacheSize.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheSize() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCacheTags: Tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheTags() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCacheTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Images: Images.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImages() {
            return software.amazon.jsii.Kernel.get(this, "attrImages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: Progress.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: ResourceGroupId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: SnapshotId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.datasource.ImageCacheProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eci.datasource.ImageCacheProps.class));
        }
    }
}
