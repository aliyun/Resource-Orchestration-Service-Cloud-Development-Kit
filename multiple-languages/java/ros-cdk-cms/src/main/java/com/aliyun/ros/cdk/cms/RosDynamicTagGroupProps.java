package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::DynamicTagGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.271Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosDynamicTagGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosDynamicTagGroupProps.Jsii$Proxy.class)
public interface RosDynamicTagGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getContactGroupList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTagKey();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableInstallAgent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSubscribeEvent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchExpress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMatchExpressFilterRelation() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getTemplateIdList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDynamicTagGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDynamicTagGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDynamicTagGroupProps> {
        private java.util.List<java.lang.String> contactGroupList;
        private java.lang.String tagKey;
        private java.lang.Object enableInstallAgent;
        private java.lang.Object enableSubscribeEvent;
        private java.lang.Object matchExpress;
        private java.lang.String matchExpressFilterRelation;
        private java.util.List<java.lang.String> templateIdList;

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getContactGroupList}
         * @param contactGroupList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupList(java.util.List<java.lang.String> contactGroupList) {
            this.contactGroupList = contactGroupList;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getTagKey}
         * @param tagKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tagKey(java.lang.String tagKey) {
            this.tagKey = tagKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getEnableInstallAgent}
         * @param enableInstallAgent the value to be set.
         * @return {@code this}
         */
        public Builder enableInstallAgent(java.lang.Boolean enableInstallAgent) {
            this.enableInstallAgent = enableInstallAgent;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getEnableInstallAgent}
         * @param enableInstallAgent the value to be set.
         * @return {@code this}
         */
        public Builder enableInstallAgent(com.aliyun.ros.cdk.core.IResolvable enableInstallAgent) {
            this.enableInstallAgent = enableInstallAgent;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getEnableSubscribeEvent}
         * @param enableSubscribeEvent the value to be set.
         * @return {@code this}
         */
        public Builder enableSubscribeEvent(java.lang.Boolean enableSubscribeEvent) {
            this.enableSubscribeEvent = enableSubscribeEvent;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getEnableSubscribeEvent}
         * @param enableSubscribeEvent the value to be set.
         * @return {@code this}
         */
        public Builder enableSubscribeEvent(com.aliyun.ros.cdk.core.IResolvable enableSubscribeEvent) {
            this.enableSubscribeEvent = enableSubscribeEvent;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getMatchExpress}
         * @param matchExpress the value to be set.
         * @return {@code this}
         */
        public Builder matchExpress(com.aliyun.ros.cdk.core.IResolvable matchExpress) {
            this.matchExpress = matchExpress;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getMatchExpress}
         * @param matchExpress the value to be set.
         * @return {@code this}
         */
        public Builder matchExpress(java.util.List<? extends java.lang.Object> matchExpress) {
            this.matchExpress = matchExpress;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getMatchExpressFilterRelation}
         * @param matchExpressFilterRelation the value to be set.
         * @return {@code this}
         */
        public Builder matchExpressFilterRelation(java.lang.String matchExpressFilterRelation) {
            this.matchExpressFilterRelation = matchExpressFilterRelation;
            return this;
        }

        /**
         * Sets the value of {@link RosDynamicTagGroupProps#getTemplateIdList}
         * @param templateIdList the value to be set.
         * @return {@code this}
         */
        public Builder templateIdList(java.util.List<java.lang.String> templateIdList) {
            this.templateIdList = templateIdList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDynamicTagGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDynamicTagGroupProps build() {
            return new Jsii$Proxy(contactGroupList, tagKey, enableInstallAgent, enableSubscribeEvent, matchExpress, matchExpressFilterRelation, templateIdList);
        }
    }

    /**
     * An implementation for {@link RosDynamicTagGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDynamicTagGroupProps {
        private final java.util.List<java.lang.String> contactGroupList;
        private final java.lang.String tagKey;
        private final java.lang.Object enableInstallAgent;
        private final java.lang.Object enableSubscribeEvent;
        private final java.lang.Object matchExpress;
        private final java.lang.String matchExpressFilterRelation;
        private final java.util.List<java.lang.String> templateIdList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contactGroupList = software.amazon.jsii.Kernel.get(this, "contactGroupList", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.tagKey = software.amazon.jsii.Kernel.get(this, "tagKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.enableInstallAgent = software.amazon.jsii.Kernel.get(this, "enableInstallAgent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSubscribeEvent = software.amazon.jsii.Kernel.get(this, "enableSubscribeEvent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchExpress = software.amazon.jsii.Kernel.get(this, "matchExpress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchExpressFilterRelation = software.amazon.jsii.Kernel.get(this, "matchExpressFilterRelation", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.templateIdList = software.amazon.jsii.Kernel.get(this, "templateIdList", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.util.List<java.lang.String> contactGroupList, final java.lang.String tagKey, final java.lang.Object enableInstallAgent, final java.lang.Object enableSubscribeEvent, final java.lang.Object matchExpress, final java.lang.String matchExpressFilterRelation, final java.util.List<java.lang.String> templateIdList) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contactGroupList = java.util.Objects.requireNonNull(contactGroupList, "contactGroupList is required");
            this.tagKey = java.util.Objects.requireNonNull(tagKey, "tagKey is required");
            this.enableInstallAgent = enableInstallAgent;
            this.enableSubscribeEvent = enableSubscribeEvent;
            this.matchExpress = matchExpress;
            this.matchExpressFilterRelation = matchExpressFilterRelation;
            this.templateIdList = templateIdList;
        }

        @Override
        public final java.util.List<java.lang.String> getContactGroupList() {
            return this.contactGroupList;
        }

        @Override
        public final java.lang.String getTagKey() {
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
        public final java.lang.String getMatchExpressFilterRelation() {
            return this.matchExpressFilterRelation;
        }

        @Override
        public final java.util.List<java.lang.String> getTemplateIdList() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosDynamicTagGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDynamicTagGroupProps.Jsii$Proxy that = (RosDynamicTagGroupProps.Jsii$Proxy) o;

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
