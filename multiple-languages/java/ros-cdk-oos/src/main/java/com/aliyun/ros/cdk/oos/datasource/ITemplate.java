package com.aliyun.ros.cdk.oos.datasource;

/**
 * Represents a <code>Template</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.585Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.ITemplate")
@software.amazon.jsii.Jsii.Proxy(ITemplate.Jsii$Proxy.class)
public interface ITemplate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Content: The content of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent();

    /**
     * Attribute CreatedBy: The creator of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy();

    /**
     * Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate();

    /**
     * Attribute Description: The description of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Hash: The SHA-256 value of the template content.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHash();

    /**
     * Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasTrigger();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute ShareType: The share type of the template.
     * <p>
     * Valid values:
     * Public
     * Private
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType();

    /**
     * Attribute Tags: The tag keys and values.
     * <p>
     * The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TemplateFormat: The format of the template.
     * <p>
     * Valid values:
     * JSON
     * YAML
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateFormat();

    /**
     * Attribute TemplateId: The ID of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId();

    /**
     * Attribute TemplateType: The type of the template.
     * <p>
     * Valid values:
     * Automation: the template for automated tasks.
     * State: the template for configuration inventories.
     * Package: the template for software packages.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateType();

    /**
     * Attribute UpdatedBy: The user who last updated the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy();

    /**
     * Attribute UpdatedDate: The time when the template was last updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.TemplateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oos.datasource.ITemplate.Jsii$Default {
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
         * Attribute Content: The content of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
            return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The creator of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Hash: The SHA-256 value of the template content.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHash() {
            return software.amazon.jsii.Kernel.get(this, "attrHash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasTrigger() {
            return software.amazon.jsii.Kernel.get(this, "attrHasTrigger", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the template.
         * <p>
         * Valid values:
         * Public
         * Private
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag keys and values.
         * <p>
         * The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateFormat: The format of the template.
         * <p>
         * Valid values:
         * JSON
         * YAML
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateFormat() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateId: The ID of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateType: The type of the template.
         * <p>
         * Valid values:
         * Automation: the template for automated tasks.
         * State: the template for configuration inventories.
         * Package: the template for software packages.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateType() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who last updated the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the template was last updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.TemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.datasource.TemplateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITemplate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITemplate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Content: The content of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
            return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The creator of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Hash: The SHA-256 value of the template content.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHash() {
            return software.amazon.jsii.Kernel.get(this, "attrHash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasTrigger() {
            return software.amazon.jsii.Kernel.get(this, "attrHasTrigger", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the template.
         * <p>
         * Valid values:
         * Public
         * Private
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag keys and values.
         * <p>
         * The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateFormat: The format of the template.
         * <p>
         * Valid values:
         * JSON
         * YAML
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateFormat() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateId: The ID of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateType: The type of the template.
         * <p>
         * Valid values:
         * Automation: the template for automated tasks.
         * State: the template for configuration inventories.
         * Package: the template for software packages.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateType() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who last updated the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the template was last updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.TemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.datasource.TemplateProps.class));
        }
    }
}
