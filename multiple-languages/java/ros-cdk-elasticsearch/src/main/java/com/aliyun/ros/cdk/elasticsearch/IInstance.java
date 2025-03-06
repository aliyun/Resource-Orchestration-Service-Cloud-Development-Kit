package com.aliyun.ros.cdk.elasticsearch;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.236Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain();

    /**
     * Attribute InstanceChargeType: Instance charge type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType();

    /**
     * Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaDomain();

    /**
     * Attribute KibanaPort: Kibana console port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaPort();

    /**
     * Attribute Port:  Instance connection port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute PublicDomain: Instance public connection domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicDomain();

    /**
     * Attribute Status: The Elasticsearch instance status.
     * <p>
     * Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    /**
     * Attribute Version: Elasticsearch version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion();

    /**
     * Attribute VSwitchId: The ID of VSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.elasticsearch.IInstance.Jsii$Default {
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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domain: Instance connection domain (only VPC network access supported).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: Instance charge type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the Elasticsearch instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KibanaDomain: Kibana console domain (Internet access supported).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KibanaPort: Kibana console port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaPort() {
            return software.amazon.jsii.Kernel.get(this, "attrKibanaPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port:  Instance connection port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicDomain: Instance public connection domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The Elasticsearch instance status.
         * <p>
         * Includes active, activating, inactive. Some operations are denied when status is not active.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: Elasticsearch version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of VSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearch.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domain: Instance connection domain (only VPC network access supported).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: Instance charge type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the Elasticsearch instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KibanaDomain: Kibana console domain (Internet access supported).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KibanaPort: Kibana console port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaPort() {
            return software.amazon.jsii.Kernel.get(this, "attrKibanaPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port:  Instance connection port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicDomain: Instance public connection domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The Elasticsearch instance status.
         * <p>
         * Includes active, activating, inactive. Some operations are denied when status is not active.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: Elasticsearch version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of VSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearch.InstanceProps.class));
        }
    }
}
