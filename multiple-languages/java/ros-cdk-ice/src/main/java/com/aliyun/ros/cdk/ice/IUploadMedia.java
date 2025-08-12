package com.aliyun.ros.cdk.ice;

/**
 * Represents a <code>UploadMedia</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.IUploadMedia")
@software.amazon.jsii.Jsii.Proxy(IUploadMedia.Jsii$Proxy.class)
public interface IUploadMedia extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute FileURL: The OSS URL of the file.
     * <p>
     * The URL does not contain the information used for authentication.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileUrl();

    /**
     * Attribute MediaId: The ID of the media asset.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaId();

    /**
     * Attribute MediaURL: The URL of the media asset.
     * <p>
     * Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaUrl();

    /**
     * Attribute UploadAddress: The upload URL.
     * <p>
     * Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAddress();

    /**
     * Attribute UploadAuth: The upload credential.
     * <p>
     * Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAuth();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.UploadMediaProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ice.IUploadMedia.Jsii$Default {
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
         * Attribute FileURL: The OSS URL of the file.
         * <p>
         * The URL does not contain the information used for authentication.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrFileUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MediaId: The ID of the media asset.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaId() {
            return software.amazon.jsii.Kernel.get(this, "attrMediaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MediaURL: The URL of the media asset.
         * <p>
         * Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrMediaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UploadAddress: The upload URL.
         * <p>
         * Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrUploadAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UploadAuth: The upload credential.
         * <p>
         * Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAuth() {
            return software.amazon.jsii.Kernel.get(this, "attrUploadAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.UploadMediaProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ice.UploadMediaProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUploadMedia}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUploadMedia, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute FileURL: The OSS URL of the file.
         * <p>
         * The URL does not contain the information used for authentication.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrFileUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MediaId: The ID of the media asset.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaId() {
            return software.amazon.jsii.Kernel.get(this, "attrMediaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MediaURL: The URL of the media asset.
         * <p>
         * Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrMediaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UploadAddress: The upload URL.
         * <p>
         * Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrUploadAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UploadAuth: The upload credential.
         * <p>
         * Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAuth() {
            return software.amazon.jsii.Kernel.get(this, "attrUploadAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.UploadMediaProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ice.UploadMediaProps.class));
        }
    }
}
