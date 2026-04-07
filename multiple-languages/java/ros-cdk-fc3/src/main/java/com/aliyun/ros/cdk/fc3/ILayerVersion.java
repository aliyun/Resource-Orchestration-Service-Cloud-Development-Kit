package com.aliyun.ros.cdk.fc3;

/**
 * Represents a <code>LayerVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.648Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.ILayerVersion")
@software.amazon.jsii.Jsii.Proxy(ILayerVersion.Jsii$Proxy.class)
public interface ILayerVersion extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcl();

    /**
     * Attribute CodeSize: The code package size of the layer, in bytes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSize();

    /**
     * Attribute CompatibleRuntime: List of runtime environments supported by the layer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompatibleRuntime();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: Description of the version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute LayerName: Name of the layer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerName();

    /**
     * Attribute LayerVersionArn: Layer version ARN.
     * <p>
     * The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerVersionArn();

    /**
     * Attribute License: Layer License Agreement.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicense();

    /**
     * Attribute Version: The version of the layer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.LayerVersionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.fc3.ILayerVersion.Jsii$Default {
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
         * Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcl() {
            return software.amazon.jsii.Kernel.get(this, "attrAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeSize: The code package size of the layer, in bytes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSize() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompatibleRuntime: List of runtime environments supported by the layer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompatibleRuntime() {
            return software.amazon.jsii.Kernel.get(this, "attrCompatibleRuntime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description of the version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LayerName: Name of the layer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLayerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LayerVersionArn: Layer version ARN.
         * <p>
         * The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerVersionArn() {
            return software.amazon.jsii.Kernel.get(this, "attrLayerVersionArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute License: Layer License Agreement.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicense() {
            return software.amazon.jsii.Kernel.get(this, "attrLicense", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The version of the layer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.LayerVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.LayerVersionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ILayerVersion}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILayerVersion, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcl() {
            return software.amazon.jsii.Kernel.get(this, "attrAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeSize: The code package size of the layer, in bytes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSize() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CompatibleRuntime: List of runtime environments supported by the layer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompatibleRuntime() {
            return software.amazon.jsii.Kernel.get(this, "attrCompatibleRuntime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description of the version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LayerName: Name of the layer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLayerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LayerVersionArn: Layer version ARN.
         * <p>
         * The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerVersionArn() {
            return software.amazon.jsii.Kernel.get(this, "attrLayerVersionArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute License: Layer License Agreement.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicense() {
            return software.amazon.jsii.Kernel.get(this, "attrLicense", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The version of the layer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.LayerVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.LayerVersionProps.class));
        }
    }
}
