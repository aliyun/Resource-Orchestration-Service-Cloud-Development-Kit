package com.aliyun.ros.cdk.arms.datasource;

/**
 * Represents a <code>Environment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:31:39.126Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.IEnvironment")
@software.amazon.jsii.Jsii.Proxy(IEnvironment.Jsii$Proxy.class)
public interface IEnvironment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BindResourceId: The id or vpcId of the bound container instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceId();

    /**
     * Attribute BindResourceType: Binding resource type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceType();

    /**
     * Attribute BindVpcCidr: The network segment of the bound vpc.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindVpcCidr();

    /**
     * Attribute EnvironmentId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId();

    /**
     * Attribute EnvironmentName: The name of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName();

    /**
     * Attribute EnvironmentSubType: Subtype of environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType();

    /**
     * Attribute EnvironmentType: Type of environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType();

    /**
     * Attribute FeePackage: Paid package.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage();

    /**
     * Attribute GrafanaDatasourceUid: The uid of the Grafana data source.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaDatasourceUid();

    /**
     * Attribute GrafanaFolderUid: Binding Grafana directory uid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaFolderUid();

    /**
     * Attribute ManagedType: Hosting type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType();

    /**
     * Attribute PrometheusInstanceId: The ID of the prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: The tag of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute UserId: User ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.EnvironmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.datasource.IEnvironment.Jsii$Default {
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
         * Attribute BindResourceId: The id or vpcId of the bound container instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrBindResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindResourceType: Binding resource type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrBindResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindVpcCidr: The network segment of the bound vpc.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindVpcCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrBindVpcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentName: The name of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentSubType: Subtype of environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentType: Type of environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeePackage: Paid package.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage() {
            return software.amazon.jsii.Kernel.get(this, "attrFeePackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaDatasourceUid: The uid of the Grafana data source.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaDatasourceUid() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaDatasourceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaFolderUid: Binding Grafana directory uid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaFolderUid() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaFolderUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ManagedType: Hosting type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType() {
            return software.amazon.jsii.Kernel.get(this, "attrManagedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrometheusInstanceId: The ID of the prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: User ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.EnvironmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.EnvironmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEnvironment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEnvironment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BindResourceId: The id or vpcId of the bound container instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrBindResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindResourceType: Binding resource type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrBindResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindVpcCidr: The network segment of the bound vpc.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindVpcCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrBindVpcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentName: The name of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentSubType: Subtype of environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentType: Type of environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeePackage: Paid package.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage() {
            return software.amazon.jsii.Kernel.get(this, "attrFeePackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaDatasourceUid: The uid of the Grafana data source.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaDatasourceUid() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaDatasourceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaFolderUid: Binding Grafana directory uid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaFolderUid() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaFolderUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ManagedType: Hosting type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType() {
            return software.amazon.jsii.Kernel.get(this, "attrManagedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrometheusInstanceId: The ID of the prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: User ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.EnvironmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.EnvironmentProps.class));
        }
    }
}
