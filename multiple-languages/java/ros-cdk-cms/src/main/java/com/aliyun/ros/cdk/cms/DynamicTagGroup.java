package com.aliyun.ros.cdk.cms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS::DynamicTagGroup</code>, which is used to create a tag rule based on which cloud resources can be automatically added to an application group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.674Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.DynamicTagGroup")
public class DynamicTagGroup extends com.aliyun.ros.cdk.core.Resource {

    protected DynamicTagGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DynamicTagGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DynamicTagGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.DynamicTagGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DynamicTagGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.DynamicTagGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDynamicTagRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrDynamicTagRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TagKey: Tag key.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTagKey() {
        return software.amazon.jsii.Kernel.get(this, "attrTagKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.DynamicTagGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.DynamicTagGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.DynamicTagGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.DynamicTagGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.DynamicTagGroup> {
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
        private final com.aliyun.ros.cdk.cms.DynamicTagGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.DynamicTagGroupProps.Builder();
        }

        /**
         * Property contactGroupList: Alarm contacts.
         * <p>
         * @return {@code this}
         * @param contactGroupList Property contactGroupList: Alarm contacts. This parameter is required.
         */
        public Builder contactGroupList(final com.aliyun.ros.cdk.core.IResolvable contactGroupList) {
            this.props.contactGroupList(contactGroupList);
            return this;
        }
        /**
         * Property contactGroupList: Alarm contacts.
         * <p>
         * @return {@code this}
         * @param contactGroupList Property contactGroupList: Alarm contacts. This parameter is required.
         */
        public Builder contactGroupList(final java.util.List<? extends java.lang.Object> contactGroupList) {
            this.props.contactGroupList(contactGroupList);
            return this;
        }

        /**
         * Property tagKey: Tag key.
         * <p>
         * @return {@code this}
         * @param tagKey Property tagKey: Tag key. This parameter is required.
         */
        public Builder tagKey(final java.lang.String tagKey) {
            this.props.tagKey(tagKey);
            return this;
        }
        /**
         * Property tagKey: Tag key.
         * <p>
         * @return {@code this}
         * @param tagKey Property tagKey: Tag key. This parameter is required.
         */
        public Builder tagKey(final com.aliyun.ros.cdk.core.IResolvable tagKey) {
            this.props.tagKey(tagKey);
            return this;
        }

        /**
         * Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.
         * <p>
         * Values are:
         * true: enable installation
         * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
         * false: disable installation
         * <p>
         * @return {@code this}
         * @param enableInstallAgent Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. This parameter is required.
         */
        public Builder enableInstallAgent(final java.lang.Boolean enableInstallAgent) {
            this.props.enableInstallAgent(enableInstallAgent);
            return this;
        }
        /**
         * Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.
         * <p>
         * Values are:
         * true: enable installation
         * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
         * false: disable installation
         * <p>
         * @return {@code this}
         * @param enableInstallAgent Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. This parameter is required.
         */
        public Builder enableInstallAgent(final com.aliyun.ros.cdk.core.IResolvable enableInstallAgent) {
            this.props.enableInstallAgent(enableInstallAgent);
            return this;
        }

        /**
         * Property enableSubscribeEvent: Whether the event subscription is enabled.
         * <p>
         * Values are
         * :true: enable event subscription
         * false: disable event subscription
         * <p>
         * @return {@code this}
         * @param enableSubscribeEvent Property enableSubscribeEvent: Whether the event subscription is enabled. This parameter is required.
         */
        public Builder enableSubscribeEvent(final java.lang.Boolean enableSubscribeEvent) {
            this.props.enableSubscribeEvent(enableSubscribeEvent);
            return this;
        }
        /**
         * Property enableSubscribeEvent: Whether the event subscription is enabled.
         * <p>
         * Values are
         * :true: enable event subscription
         * false: disable event subscription
         * <p>
         * @return {@code this}
         * @param enableSubscribeEvent Property enableSubscribeEvent: Whether the event subscription is enabled. This parameter is required.
         */
        public Builder enableSubscribeEvent(final com.aliyun.ros.cdk.core.IResolvable enableSubscribeEvent) {
            this.props.enableSubscribeEvent(enableSubscribeEvent);
            return this;
        }

        /**
         * Property matchExpress: Matching list.
         * <p>
         * Only supports one currently.
         * <p>
         * @return {@code this}
         * @param matchExpress Property matchExpress: Matching list. This parameter is required.
         */
        public Builder matchExpress(final com.aliyun.ros.cdk.core.IResolvable matchExpress) {
            this.props.matchExpress(matchExpress);
            return this;
        }
        /**
         * Property matchExpress: Matching list.
         * <p>
         * Only supports one currently.
         * <p>
         * @return {@code this}
         * @param matchExpress Property matchExpress: Matching list. This parameter is required.
         */
        public Builder matchExpress(final java.util.List<? extends java.lang.Object> matchExpress) {
            this.props.matchExpress(matchExpress);
            return this;
        }

        /**
         * Property matchExpressFilterRelation: The relationship between the conditional expressions.
         * <p>
         * Values are:
         * and: the relationship between
         * or: the relationship or the
         * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
         * <p>
         * @return {@code this}
         * @param matchExpressFilterRelation Property matchExpressFilterRelation: The relationship between the conditional expressions. This parameter is required.
         */
        public Builder matchExpressFilterRelation(final java.lang.String matchExpressFilterRelation) {
            this.props.matchExpressFilterRelation(matchExpressFilterRelation);
            return this;
        }
        /**
         * Property matchExpressFilterRelation: The relationship between the conditional expressions.
         * <p>
         * Values are:
         * and: the relationship between
         * or: the relationship or the
         * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
         * <p>
         * @return {@code this}
         * @param matchExpressFilterRelation Property matchExpressFilterRelation: The relationship between the conditional expressions. This parameter is required.
         */
        public Builder matchExpressFilterRelation(final com.aliyun.ros.cdk.core.IResolvable matchExpressFilterRelation) {
            this.props.matchExpressFilterRelation(matchExpressFilterRelation);
            return this;
        }

        /**
         * Property templateIdList: Alarm template ID list.
         * <p>
         * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
         * <p>
         * @return {@code this}
         * @param templateIdList Property templateIdList: Alarm template ID list. This parameter is required.
         */
        public Builder templateIdList(final com.aliyun.ros.cdk.core.IResolvable templateIdList) {
            this.props.templateIdList(templateIdList);
            return this;
        }
        /**
         * Property templateIdList: Alarm template ID list.
         * <p>
         * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
         * <p>
         * @return {@code this}
         * @param templateIdList Property templateIdList: Alarm template ID list. This parameter is required.
         */
        public Builder templateIdList(final java.util.List<? extends java.lang.Object> templateIdList) {
            this.props.templateIdList(templateIdList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.DynamicTagGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.DynamicTagGroup build() {
            return new com.aliyun.ros.cdk.cms.DynamicTagGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
