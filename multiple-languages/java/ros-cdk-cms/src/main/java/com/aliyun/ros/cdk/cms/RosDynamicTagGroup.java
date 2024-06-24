package com.aliyun.ros.cdk.cms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CMS::DynamicTagGroup</code>, which is used to create a tag rule based on which cloud resources can be automatically added to an application group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.133Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosDynamicTagGroup")
public class RosDynamicTagGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDynamicTagGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDynamicTagGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosDynamicTagGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDynamicTagGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosDynamicTagGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDynamicTagRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrDynamicTagRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTagKey() {
        return software.amazon.jsii.Kernel.get(this, "attrTagKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getContactGroupList() {
        return software.amazon.jsii.Kernel.get(this, "contactGroupList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContactGroupList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contactGroupList", java.util.Objects.requireNonNull(value, "contactGroupList is required"));
    }

    /**
     */
    public void setContactGroupList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "contactGroupList", java.util.Objects.requireNonNull(value, "contactGroupList is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTagKey() {
        return software.amazon.jsii.Kernel.get(this, "tagKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagKey(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tagKey", java.util.Objects.requireNonNull(value, "tagKey is required"));
    }

    /**
     */
    public void setTagKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagKey", java.util.Objects.requireNonNull(value, "tagKey is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableInstallAgent() {
        return software.amazon.jsii.Kernel.get(this, "enableInstallAgent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableInstallAgent(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableInstallAgent", value);
    }

    /**
     */
    public void setEnableInstallAgent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableInstallAgent", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSubscribeEvent() {
        return software.amazon.jsii.Kernel.get(this, "enableSubscribeEvent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSubscribeEvent(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableSubscribeEvent", value);
    }

    /**
     */
    public void setEnableSubscribeEvent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSubscribeEvent", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMatchExpress() {
        return software.amazon.jsii.Kernel.get(this, "matchExpress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMatchExpress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "matchExpress", value);
    }

    /**
     */
    public void setMatchExpress(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cms.RosDynamicTagGroup.MatchExpressProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cms.RosDynamicTagGroup.MatchExpressProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "matchExpress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMatchExpressFilterRelation() {
        return software.amazon.jsii.Kernel.get(this, "matchExpressFilterRelation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMatchExpressFilterRelation(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "matchExpressFilterRelation", value);
    }

    /**
     */
    public void setMatchExpressFilterRelation(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "matchExpressFilterRelation", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateIdList() {
        return software.amazon.jsii.Kernel.get(this, "templateIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateIdList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateIdList", value);
    }

    /**
     */
    public void setTemplateIdList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "templateIdList", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty")
    @software.amazon.jsii.Jsii.Proxy(MatchExpressProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MatchExpressProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagValue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagValueMatchFunction();

        /**
         * @return a {@link Builder} of {@link MatchExpressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MatchExpressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MatchExpressProperty> {
            java.lang.Object tagValue;
            java.lang.Object tagValueMatchFunction;

            /**
             * Sets the value of {@link MatchExpressProperty#getTagValue}
             * @param tagValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValue(java.lang.String tagValue) {
                this.tagValue = tagValue;
                return this;
            }

            /**
             * Sets the value of {@link MatchExpressProperty#getTagValue}
             * @param tagValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValue(com.aliyun.ros.cdk.core.IResolvable tagValue) {
                this.tagValue = tagValue;
                return this;
            }

            /**
             * Sets the value of {@link MatchExpressProperty#getTagValueMatchFunction}
             * @param tagValueMatchFunction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValueMatchFunction(java.lang.String tagValueMatchFunction) {
                this.tagValueMatchFunction = tagValueMatchFunction;
                return this;
            }

            /**
             * Sets the value of {@link MatchExpressProperty#getTagValueMatchFunction}
             * @param tagValueMatchFunction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValueMatchFunction(com.aliyun.ros.cdk.core.IResolvable tagValueMatchFunction) {
                this.tagValueMatchFunction = tagValueMatchFunction;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MatchExpressProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MatchExpressProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MatchExpressProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MatchExpressProperty {
            private final java.lang.Object tagValue;
            private final java.lang.Object tagValueMatchFunction;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.tagValue = software.amazon.jsii.Kernel.get(this, "tagValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagValueMatchFunction = software.amazon.jsii.Kernel.get(this, "tagValueMatchFunction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.tagValue = java.util.Objects.requireNonNull(builder.tagValue, "tagValue is required");
                this.tagValueMatchFunction = java.util.Objects.requireNonNull(builder.tagValueMatchFunction, "tagValueMatchFunction is required");
            }

            @Override
            public final java.lang.Object getTagValue() {
                return this.tagValue;
            }

            @Override
            public final java.lang.Object getTagValueMatchFunction() {
                return this.tagValueMatchFunction;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("tagValue", om.valueToTree(this.getTagValue()));
                data.set("tagValueMatchFunction", om.valueToTree(this.getTagValueMatchFunction()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MatchExpressProperty.Jsii$Proxy that = (MatchExpressProperty.Jsii$Proxy) o;

                if (!tagValue.equals(that.tagValue)) return false;
                return this.tagValueMatchFunction.equals(that.tagValueMatchFunction);
            }

            @Override
            public final int hashCode() {
                int result = this.tagValue.hashCode();
                result = 31 * result + (this.tagValueMatchFunction.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosDynamicTagGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosDynamicTagGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms.RosDynamicTagGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosDynamicTagGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param contactGroupList This parameter is required.
         */
        public Builder contactGroupList(final com.aliyun.ros.cdk.core.IResolvable contactGroupList) {
            this.props.contactGroupList(contactGroupList);
            return this;
        }
        /**
         * @return {@code this}
         * @param contactGroupList This parameter is required.
         */
        public Builder contactGroupList(final java.util.List<? extends java.lang.Object> contactGroupList) {
            this.props.contactGroupList(contactGroupList);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagKey This parameter is required.
         */
        public Builder tagKey(final java.lang.String tagKey) {
            this.props.tagKey(tagKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagKey This parameter is required.
         */
        public Builder tagKey(final com.aliyun.ros.cdk.core.IResolvable tagKey) {
            this.props.tagKey(tagKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableInstallAgent This parameter is required.
         */
        public Builder enableInstallAgent(final java.lang.Boolean enableInstallAgent) {
            this.props.enableInstallAgent(enableInstallAgent);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableInstallAgent This parameter is required.
         */
        public Builder enableInstallAgent(final com.aliyun.ros.cdk.core.IResolvable enableInstallAgent) {
            this.props.enableInstallAgent(enableInstallAgent);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSubscribeEvent This parameter is required.
         */
        public Builder enableSubscribeEvent(final java.lang.Boolean enableSubscribeEvent) {
            this.props.enableSubscribeEvent(enableSubscribeEvent);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSubscribeEvent This parameter is required.
         */
        public Builder enableSubscribeEvent(final com.aliyun.ros.cdk.core.IResolvable enableSubscribeEvent) {
            this.props.enableSubscribeEvent(enableSubscribeEvent);
            return this;
        }

        /**
         * @return {@code this}
         * @param matchExpress This parameter is required.
         */
        public Builder matchExpress(final com.aliyun.ros.cdk.core.IResolvable matchExpress) {
            this.props.matchExpress(matchExpress);
            return this;
        }
        /**
         * @return {@code this}
         * @param matchExpress This parameter is required.
         */
        public Builder matchExpress(final java.util.List<? extends java.lang.Object> matchExpress) {
            this.props.matchExpress(matchExpress);
            return this;
        }

        /**
         * @return {@code this}
         * @param matchExpressFilterRelation This parameter is required.
         */
        public Builder matchExpressFilterRelation(final java.lang.String matchExpressFilterRelation) {
            this.props.matchExpressFilterRelation(matchExpressFilterRelation);
            return this;
        }
        /**
         * @return {@code this}
         * @param matchExpressFilterRelation This parameter is required.
         */
        public Builder matchExpressFilterRelation(final com.aliyun.ros.cdk.core.IResolvable matchExpressFilterRelation) {
            this.props.matchExpressFilterRelation(matchExpressFilterRelation);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateIdList This parameter is required.
         */
        public Builder templateIdList(final com.aliyun.ros.cdk.core.IResolvable templateIdList) {
            this.props.templateIdList(templateIdList);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateIdList This parameter is required.
         */
        public Builder templateIdList(final java.util.List<? extends java.lang.Object> templateIdList) {
            this.props.templateIdList(templateIdList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.RosDynamicTagGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosDynamicTagGroup build() {
            return new com.aliyun.ros.cdk.cms.RosDynamicTagGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
