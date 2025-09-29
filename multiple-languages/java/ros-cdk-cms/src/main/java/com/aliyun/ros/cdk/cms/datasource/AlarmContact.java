package com.aliyun.ros.cdk.cms.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::CMS::AlarmContact</code>, which is used to query the information about an alert contact.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.555Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.AlarmContact")
public class AlarmContact extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cms.datasource.IAlarmContact {

    protected AlarmContact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AlarmContact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AlarmContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AlarmContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AlarmContactName: AlarmContactName.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContactName() {
        return software.amazon.jsii.Kernel.get(this, "attrAlarmContactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsAliIm: ChannelsAliIm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsAliIm() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsAliIm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsDingWebHook() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsDingWebHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsMail: ChannelsMail.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsMail() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsSms: ChannelsSMS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsSms() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsSms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsStateAliIm: ChannelsStateAliIm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateAliIm() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsStateAliIm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateDingWebHook() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsStateDingWebHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsStateMail: ChannelsStateMail.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateMail() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsStateMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChannelsStateSms() {
        return software.amazon.jsii.Kernel.get(this, "attrChannelsStateSms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ContactGroups: ContactGroups.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContactGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrContactGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: CreateTime.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Describe: Describe.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescribe() {
        return software.amazon.jsii.Kernel.get(this, "attrDescribe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Lang: The language type of the alarm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLang() {
        return software.amazon.jsii.Kernel.get(this, "attrLang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: UpdateTime.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.datasource.AlarmContactProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.datasource.AlarmContact}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.datasource.AlarmContact> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms.datasource.AlarmContactProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.datasource.AlarmContactProps.Builder();
        }

        /**
         * Property alarmContactName: AlarmContactName.
         * <p>
         * @return {@code this}
         * @param alarmContactName Property alarmContactName: AlarmContactName. This parameter is required.
         */
        public Builder alarmContactName(final java.lang.String alarmContactName) {
            this.props.alarmContactName(alarmContactName);
            return this;
        }
        /**
         * Property alarmContactName: AlarmContactName.
         * <p>
         * @return {@code this}
         * @param alarmContactName Property alarmContactName: AlarmContactName. This parameter is required.
         */
        public Builder alarmContactName(final com.aliyun.ros.cdk.core.IResolvable alarmContactName) {
            this.props.alarmContactName(alarmContactName);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.datasource.AlarmContact}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.datasource.AlarmContact build() {
            return new com.aliyun.ros.cdk.cms.datasource.AlarmContact(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
