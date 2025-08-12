package com.aliyun.ros.cdk.aligreen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Aligreen::KeywordLib</code>, which is used to create a custom text library.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.390Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.KeywordLib")
public class KeywordLib extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.aligreen.IKeywordLib {

    protected KeywordLib(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected KeywordLib(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public KeywordLib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.KeywordLibProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public KeywordLib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.KeywordLibProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BizTypes: The business scenario.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrBizTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Category: The category of the text library.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Enable: Specifies whether to enable text library.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute KeywordLibId: The ID of the primary key of the keyword library.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibId() {
        return software.amazon.jsii.Kernel.get(this, "attrKeywordLibId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute KeywordLibName: The name of the keyword library defined by the customer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibName() {
        return software.amazon.jsii.Kernel.get(this, "attrKeywordLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Language: Language used by the text Library.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LibType: The category of the text library in each moderation scenario.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLibType() {
        return software.amazon.jsii.Kernel.get(this, "attrLibType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MatchMode: The matching method.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "attrMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceType: The moderation scenario to which the text library applies.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.KeywordLibProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.KeywordLibProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.KeywordLib}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.KeywordLib> {
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
        private final com.aliyun.ros.cdk.aligreen.KeywordLibProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.KeywordLibProps.Builder();
        }

        /**
         * Property keywordLibName: The name of the keyword library defined by the customer.
         * <p>
         * It can contain no more than 20 characters in Chinese, English, and underscore (_).
         * <p>
         * @return {@code this}
         * @param keywordLibName Property keywordLibName: The name of the keyword library defined by the customer. This parameter is required.
         */
        public Builder keywordLibName(final java.lang.String keywordLibName) {
            this.props.keywordLibName(keywordLibName);
            return this;
        }
        /**
         * Property keywordLibName: The name of the keyword library defined by the customer.
         * <p>
         * It can contain no more than 20 characters in Chinese, English, and underscore (_).
         * <p>
         * @return {@code this}
         * @param keywordLibName Property keywordLibName: The name of the keyword library defined by the customer. This parameter is required.
         */
        public Builder keywordLibName(final com.aliyun.ros.cdk.core.IResolvable keywordLibName) {
            this.props.keywordLibName(keywordLibName);
            return this;
        }

        /**
         * Property resourceType: The moderation scenario to which the text library applies.
         * <p>
         * Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The moderation scenario to which the text library applies. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The moderation scenario to which the text library applies.
         * <p>
         * Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The moderation scenario to which the text library applies. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * Property bizTypes: The business scenario.
         * <p>
         * Example:["bizTypeA","bizTypeB"].
         * <p>
         * @return {@code this}
         * @param bizTypes Property bizTypes: The business scenario. This parameter is required.
         */
        public Builder bizTypes(final com.aliyun.ros.cdk.core.IResolvable bizTypes) {
            this.props.bizTypes(bizTypes);
            return this;
        }
        /**
         * Property bizTypes: The business scenario.
         * <p>
         * Example:["bizTypeA","bizTypeB"].
         * <p>
         * @return {@code this}
         * @param bizTypes Property bizTypes: The business scenario. This parameter is required.
         */
        public Builder bizTypes(final java.util.List<? extends java.lang.Object> bizTypes) {
            this.props.bizTypes(bizTypes);
            return this;
        }

        /**
         * Property category: The category of the text library.
         * <p>
         * Valid values:
         * BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the text library. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The category of the text library.
         * <p>
         * Valid values:
         * BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the text library. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * Property language: Language used by the text Library.
         * <p>
         * Example: zh:Chinese、en:English
         * <p>
         * @return {@code this}
         * @param language Property language: Language used by the text Library. This parameter is required.
         */
        public Builder language(final java.lang.String language) {
            this.props.language(language);
            return this;
        }
        /**
         * Property language: Language used by the text Library.
         * <p>
         * Example: zh:Chinese、en:English
         * <p>
         * @return {@code this}
         * @param language Property language: Language used by the text Library. This parameter is required.
         */
        public Builder language(final com.aliyun.ros.cdk.core.IResolvable language) {
            this.props.language(language);
            return this;
        }

        /**
         * Property libType: The category of the text library in each moderation scenario.
         * <p>
         * Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
         * <p>
         * @return {@code this}
         * @param libType Property libType: The category of the text library in each moderation scenario. This parameter is required.
         */
        public Builder libType(final java.lang.String libType) {
            this.props.libType(libType);
            return this;
        }
        /**
         * Property libType: The category of the text library in each moderation scenario.
         * <p>
         * Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
         * <p>
         * @return {@code this}
         * @param libType Property libType: The category of the text library in each moderation scenario. This parameter is required.
         */
        public Builder libType(final com.aliyun.ros.cdk.core.IResolvable libType) {
            this.props.libType(libType);
            return this;
        }

        /**
         * Property matchMode: The matching method.
         * <p>
         * Valid values:fuzzy: fuzzy match precise: exact match.
         * <p>
         * @return {@code this}
         * @param matchMode Property matchMode: The matching method. This parameter is required.
         */
        public Builder matchMode(final java.lang.String matchMode) {
            this.props.matchMode(matchMode);
            return this;
        }
        /**
         * Property matchMode: The matching method.
         * <p>
         * Valid values:fuzzy: fuzzy match precise: exact match.
         * <p>
         * @return {@code this}
         * @param matchMode Property matchMode: The matching method. This parameter is required.
         */
        public Builder matchMode(final com.aliyun.ros.cdk.core.IResolvable matchMode) {
            this.props.matchMode(matchMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.KeywordLib}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.KeywordLib build() {
            return new com.aliyun.ros.cdk.aligreen.KeywordLib(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
