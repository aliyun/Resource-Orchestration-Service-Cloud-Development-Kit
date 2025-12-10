package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>SiteDeliveryTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.566Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ISiteDeliveryTask")
@software.amazon.jsii.Jsii.Proxy(ISiteDeliveryTask.Jsii$Proxy.class)
public interface ISiteDeliveryTask extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BusinessType: Real-time log type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessType();

    /**
     * Attribute DataCenter: Data Center.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataCenter();

    /**
     * Attribute DeliveryType: Delivery Type:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryType();

    /**
     * Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiscardRate();

    /**
     * Attribute FieldName: The list of delivery fields to be modified, separated by commas.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFieldName();

    /**
     * Attribute FilterRules: The filtering rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilterRules();

    /**
     * Attribute SinkConfig: The delivery configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSinkConfig();

    /**
     * Attribute SiteId: The site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    /**
     * Attribute SiteName: The website name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName();

    /**
     * Attribute TaskName: The task name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.ISiteDeliveryTask.Jsii$Default {
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
         * Attribute BusinessType: Real-time log type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessType() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataCenter: Data Center.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataCenter() {
            return software.amazon.jsii.Kernel.get(this, "attrDataCenter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryType: Delivery Type:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryType() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiscardRate() {
            return software.amazon.jsii.Kernel.get(this, "attrDiscardRate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FieldName: The list of delivery fields to be modified, separated by commas.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFieldName() {
            return software.amazon.jsii.Kernel.get(this, "attrFieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FilterRules: The filtering rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilterRules() {
            return software.amazon.jsii.Kernel.get(this, "attrFilterRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SinkConfig: The delivery configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSinkConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrSinkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: The website name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskName: The task name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISiteDeliveryTask}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISiteDeliveryTask, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BusinessType: Real-time log type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessType() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataCenter: Data Center.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataCenter() {
            return software.amazon.jsii.Kernel.get(this, "attrDataCenter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryType: Delivery Type:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryType() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiscardRate() {
            return software.amazon.jsii.Kernel.get(this, "attrDiscardRate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FieldName: The list of delivery fields to be modified, separated by commas.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFieldName() {
            return software.amazon.jsii.Kernel.get(this, "attrFieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FilterRules: The filtering rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilterRules() {
            return software.amazon.jsii.Kernel.get(this, "attrFilterRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SinkConfig: The delivery configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSinkConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrSinkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: The website name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskName: The task name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps.class));
        }
    }
}
