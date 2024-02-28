package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>DynamicTagGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:27.357Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.DynamicTagGroupProps")
@software.amazon.jsii.Jsii.Proxy(DynamicTagGroupProps.Jsii$Proxy.class)
public interface DynamicTagGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property contactGroupList: Alarm contacts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactGroupList();

    /**
     * Property tagKey: Tag key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTagKey();

    /**
     * Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.
     * <p>
     * Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableInstallAgent() {
        return null;
    }

    /**
     * Property enableSubscribeEvent: Whether the event subscription is enabled.
     * <p>
     * Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSubscribeEvent() {
        return null;
    }

    /**
     * Property matchExpress: Matching list.
     * <p>
     * Only supports one currently.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchExpress() {
        return null;
    }

    /**
     * Property matchExpressFilterRelation: The relationship between the conditional expressions.
     * <p>
     * Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchExpressFilterRelation() {
        return null;
    }

    /**
     * Property templateIdList: Alarm template ID list.
     * <p>
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateIdList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DynamicTagGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DynamicTagGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DynamicTagGroupProps> {
        java.lang.Object contactGroupList;
        java.lang.Object tagKey;
        java.lang.Object enableInstallAgent;
        java.lang.Object enableSubscribeEvent;
        java.lang.Object matchExpress;
        java.lang.Object matchExpressFilterRelation;
        java.lang.Object templateIdList;

        /**
         * Sets the value of {@link DynamicTagGroupProps#getContactGroupList}
         * @param contactGroupList Property contactGroupList: Alarm contacts. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupList(com.aliyun.ros.cdk.core.IResolvable contactGroupList) {
            this.contactGroupList = contactGroupList;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getContactGroupList}
         * @param contactGroupList Property contactGroupList: Alarm contacts. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupList(java.util.List<? extends java.lang.Object> contactGroupList) {
            this.contactGroupList = contactGroupList;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getTagKey}
         * @param tagKey Property tagKey: Tag key. This parameter is required.
         * @return {@code this}
         */
        public Builder tagKey(java.lang.String tagKey) {
            this.tagKey = tagKey;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getTagKey}
         * @param tagKey Property tagKey: Tag key. This parameter is required.
         * @return {@code this}
         */
        public Builder tagKey(com.aliyun.ros.cdk.core.IResolvable tagKey) {
            this.tagKey = tagKey;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getEnableInstallAgent}
         * @param enableInstallAgent Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.
         *                           Values are:
         *                           true: enable installation
         *                           Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
         *                           false: disable installation
         * @return {@code this}
         */
        public Builder enableInstallAgent(java.lang.Boolean enableInstallAgent) {
            this.enableInstallAgent = enableInstallAgent;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getEnableInstallAgent}
         * @param enableInstallAgent Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.
         *                           Values are:
         *                           true: enable installation
         *                           Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
         *                           false: disable installation
         * @return {@code this}
         */
        public Builder enableInstallAgent(com.aliyun.ros.cdk.core.IResolvable enableInstallAgent) {
            this.enableInstallAgent = enableInstallAgent;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getEnableSubscribeEvent}
         * @param enableSubscribeEvent Property enableSubscribeEvent: Whether the event subscription is enabled.
         *                             Values are
         *                             :true: enable event subscription
         *                             false: disable event subscription
         * @return {@code this}
         */
        public Builder enableSubscribeEvent(java.lang.Boolean enableSubscribeEvent) {
            this.enableSubscribeEvent = enableSubscribeEvent;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getEnableSubscribeEvent}
         * @param enableSubscribeEvent Property enableSubscribeEvent: Whether the event subscription is enabled.
         *                             Values are
         *                             :true: enable event subscription
         *                             false: disable event subscription
         * @return {@code this}
         */
        public Builder enableSubscribeEvent(com.aliyun.ros.cdk.core.IResolvable enableSubscribeEvent) {
            this.enableSubscribeEvent = enableSubscribeEvent;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getMatchExpress}
         * @param matchExpress Property matchExpress: Matching list.
         *                     Only supports one currently.
         * @return {@code this}
         */
        public Builder matchExpress(com.aliyun.ros.cdk.core.IResolvable matchExpress) {
            this.matchExpress = matchExpress;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getMatchExpress}
         * @param matchExpress Property matchExpress: Matching list.
         *                     Only supports one currently.
         * @return {@code this}
         */
        public Builder matchExpress(java.util.List<? extends java.lang.Object> matchExpress) {
            this.matchExpress = matchExpress;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getMatchExpressFilterRelation}
         * @param matchExpressFilterRelation Property matchExpressFilterRelation: The relationship between the conditional expressions.
         *                                   Values are:
         *                                   and: the relationship between
         *                                   or: the relationship or the
         *                                   Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
         * @return {@code this}
         */
        public Builder matchExpressFilterRelation(java.lang.String matchExpressFilterRelation) {
            this.matchExpressFilterRelation = matchExpressFilterRelation;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getMatchExpressFilterRelation}
         * @param matchExpressFilterRelation Property matchExpressFilterRelation: The relationship between the conditional expressions.
         *                                   Values are:
         *                                   and: the relationship between
         *                                   or: the relationship or the
         *                                   Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
         * @return {@code this}
         */
        public Builder matchExpressFilterRelation(com.aliyun.ros.cdk.core.IResolvable matchExpressFilterRelation) {
            this.matchExpressFilterRelation = matchExpressFilterRelation;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getTemplateIdList}
         * @param templateIdList Property templateIdList: Alarm template ID list.
         *                       When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
         * @return {@code this}
         */
        public Builder templateIdList(com.aliyun.ros.cdk.core.IResolvable templateIdList) {
            this.templateIdList = templateIdList;
            return this;
        }

        /**
         * Sets the value of {@link DynamicTagGroupProps#getTemplateIdList}
         * @param templateIdList Property templateIdList: Alarm template ID list.
         *                       When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
         * @return {@code this}
         */
        public Builder templateIdList(java.util.List<? extends java.lang.Object> templateIdList) {
            this.templateIdList = templateIdList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DynamicTagGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DynamicTagGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DynamicTagGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DynamicTagGroupProps {
        private final java.lang.Object contactGroupList;
        private final java.lang.Object tagKey;
        private final java.lang.Object enableInstallAgent;
        private final java.lang.Object enableSubscribeEvent;
        private final java.lang.Object matchExpress;
        private final java.lang.Object matchExpressFilterRelation;
        private final java.lang.Object templateIdList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contactGroupList = software.amazon.jsii.Kernel.get(this, "contactGroupList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagKey = software.amazon.jsii.Kernel.get(this, "tagKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableInstallAgent = software.amazon.jsii.Kernel.get(this, "enableInstallAgent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSubscribeEvent = software.amazon.jsii.Kernel.get(this, "enableSubscribeEvent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchExpress = software.amazon.jsii.Kernel.get(this, "matchExpress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchExpressFilterRelation = software.amazon.jsii.Kernel.get(this, "matchExpressFilterRelation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateIdList = software.amazon.jsii.Kernel.get(this, "templateIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contactGroupList = java.util.Objects.requireNonNull(builder.contactGroupList, "contactGroupList is required");
            this.tagKey = java.util.Objects.requireNonNull(builder.tagKey, "tagKey is required");
            this.enableInstallAgent = builder.enableInstallAgent;
            this.enableSubscribeEvent = builder.enableSubscribeEvent;
            this.matchExpress = builder.matchExpress;
            this.matchExpressFilterRelation = builder.matchExpressFilterRelation;
            this.templateIdList = builder.templateIdList;
        }

        @Override
        public final java.lang.Object getContactGroupList() {
            return this.contactGroupList;
        }

        @Override
        public final java.lang.Object getTagKey() {
            return this.tagKey;
        }

        @Override
        public final java.lang.Object getEnableInstallAgent() {
            return this.enableInstallAgent;
        }

        @Override
        public final java.lang.Object getEnableSubscribeEvent() {
            return this.enableSubscribeEvent;
        }

        @Override
        public final java.lang.Object getMatchExpress() {
            return this.matchExpress;
        }

        @Override
        public final java.lang.Object getMatchExpressFilterRelation() {
            return this.matchExpressFilterRelation;
        }

        @Override
        public final java.lang.Object getTemplateIdList() {
            return this.templateIdList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("contactGroupList", om.valueToTree(this.getContactGroupList()));
            data.set("tagKey", om.valueToTree(this.getTagKey()));
            if (this.getEnableInstallAgent() != null) {
                data.set("enableInstallAgent", om.valueToTree(this.getEnableInstallAgent()));
            }
            if (this.getEnableSubscribeEvent() != null) {
                data.set("enableSubscribeEvent", om.valueToTree(this.getEnableSubscribeEvent()));
            }
            if (this.getMatchExpress() != null) {
                data.set("matchExpress", om.valueToTree(this.getMatchExpress()));
            }
            if (this.getMatchExpressFilterRelation() != null) {
                data.set("matchExpressFilterRelation", om.valueToTree(this.getMatchExpressFilterRelation()));
            }
            if (this.getTemplateIdList() != null) {
                data.set("templateIdList", om.valueToTree(this.getTemplateIdList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.DynamicTagGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DynamicTagGroupProps.Jsii$Proxy that = (DynamicTagGroupProps.Jsii$Proxy) o;

            if (!contactGroupList.equals(that.contactGroupList)) return false;
            if (!tagKey.equals(that.tagKey)) return false;
            if (this.enableInstallAgent != null ? !this.enableInstallAgent.equals(that.enableInstallAgent) : that.enableInstallAgent != null) return false;
            if (this.enableSubscribeEvent != null ? !this.enableSubscribeEvent.equals(that.enableSubscribeEvent) : that.enableSubscribeEvent != null) return false;
            if (this.matchExpress != null ? !this.matchExpress.equals(that.matchExpress) : that.matchExpress != null) return false;
            if (this.matchExpressFilterRelation != null ? !this.matchExpressFilterRelation.equals(that.matchExpressFilterRelation) : that.matchExpressFilterRelation != null) return false;
            return this.templateIdList != null ? this.templateIdList.equals(that.templateIdList) : that.templateIdList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.contactGroupList.hashCode();
            result = 31 * result + (this.tagKey.hashCode());
            result = 31 * result + (this.enableInstallAgent != null ? this.enableInstallAgent.hashCode() : 0);
            result = 31 * result + (this.enableSubscribeEvent != null ? this.enableSubscribeEvent.hashCode() : 0);
            result = 31 * result + (this.matchExpress != null ? this.matchExpress.hashCode() : 0);
            result = 31 * result + (this.matchExpressFilterRelation != null ? this.matchExpressFilterRelation.hashCode() : 0);
            result = 31 * result + (this.templateIdList != null ? this.templateIdList.hashCode() : 0);
            return result;
        }
    }
}
