package com.aliyun.ros.cdk.cms.datasource;

/**
 * Represents a <code>AlarmContact</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.927Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.IAlarmContact")
@software.amazon.jsii.Jsii.Proxy(IAlarmContact.Jsii$Proxy.class)
public interface IAlarmContact extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AlarmContactName: AlarmContactName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContactName();

    /**
     * Attribute ChannelsAliIm: ChannelsAliIm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsAliIm();

    /**
     * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsDingWebHook();

    /**
     * Attribute ChannelsMail: ChannelsMail.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsMail();

    /**
     * Attribute ChannelsSms: ChannelsSMS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsSms();

    /**
     * Attribute ChannelsStateAliIm: ChannelsStateAliIm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateAliIm();

    /**
     * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateDingWebHook();

    /**
     * Attribute ChannelsStateMail: ChannelsStateMail.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateMail();

    /**
     * Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateSms();

    /**
     * Attribute ContactGroups: ContactGroups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContactGroups();

    /**
     * Attribute CreateTime: CreateTime.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Describe: Describe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescribe();

    /**
     * Attribute Lang: The language type of the alarm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLang();

    /**
     * Attribute UpdateTime: UpdateTime.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cms.datasource.IAlarmContact.Jsii$Default {
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
         * Attribute AlarmContactName: AlarmContactName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContactName() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarmContactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsAliIm: ChannelsAliIm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsAliIm() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsAliIm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsDingWebHook() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsDingWebHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsMail: ChannelsMail.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsMail() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsSms: ChannelsSMS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsSms() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsSms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateAliIm: ChannelsStateAliIm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateAliIm() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateAliIm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateDingWebHook() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateDingWebHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateMail: ChannelsStateMail.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateMail() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateSms: ChannelsStateSMS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateSms() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateSms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContactGroups: ContactGroups.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContactGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrContactGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: CreateTime.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Describe: Describe.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescribe() {
            return software.amazon.jsii.Kernel.get(this, "attrDescribe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Lang: The language type of the alarm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLang() {
            return software.amazon.jsii.Kernel.get(this, "attrLang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: UpdateTime.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.datasource.AlarmContactProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAlarmContact}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAlarmContact, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AlarmContactName: AlarmContactName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContactName() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarmContactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsAliIm: ChannelsAliIm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsAliIm() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsAliIm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsDingWebHook() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsDingWebHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsMail: ChannelsMail.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsMail() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsSms: ChannelsSMS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsSms() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsSms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateAliIm: ChannelsStateAliIm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateAliIm() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateAliIm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateDingWebHook() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateDingWebHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateMail: ChannelsStateMail.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateMail() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChannelsStateSms: ChannelsStateSMS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateSms() {
            return software.amazon.jsii.Kernel.get(this, "attrChannelsStateSms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContactGroups: ContactGroups.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContactGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrContactGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: CreateTime.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Describe: Describe.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescribe() {
            return software.amazon.jsii.Kernel.get(this, "attrDescribe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Lang: The language type of the alarm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLang() {
            return software.amazon.jsii.Kernel.get(this, "attrLang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: UpdateTime.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.datasource.AlarmContactProps.class));
        }
    }
}
