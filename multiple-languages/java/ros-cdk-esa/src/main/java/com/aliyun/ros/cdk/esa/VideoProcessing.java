package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::VideoProcessing</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.331Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.VideoProcessing")
public class VideoProcessing extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IVideoProcessing {

    protected VideoProcessing(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VideoProcessing(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VideoProcessing(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.VideoProcessingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VideoProcessing(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.VideoProcessingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigId: Config Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: The configuration type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlvSeekEnd: Custom FLV end parameters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekEnd() {
        return software.amazon.jsii.Kernel.get(this, "attrFlvSeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlvSeekStart: Custom FLV start parameters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekStart() {
        return software.amazon.jsii.Kernel.get(this, "attrFlvSeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlvVideoSeekMode: FLV drag mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvVideoSeekMode() {
        return software.amazon.jsii.Kernel.get(this, "attrFlvVideoSeekMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Mp4SeekEnd: Custom mp4 end parameters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekEnd() {
        return software.amazon.jsii.Kernel.get(this, "attrMp4SeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Mp4SeekStart: Custom mp4 start parameters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekStart() {
        return software.amazon.jsii.Kernel.get(this, "attrMp4SeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Sequence: The rule execution order prioritizes lower numerical values.
     * <p>
     * It is only applicable when setting or modifying the order of individual rule configurations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoSeekEnable: Drag and drop the play function switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoSeekEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoSeekEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.VideoProcessingProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.VideoProcessingProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.VideoProcessing}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.VideoProcessing> {
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
        private final com.aliyun.ros.cdk.esa.VideoProcessingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.VideoProcessingProps.Builder();
        }

        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property flvSeekEnd: Custom FLV end parameters.
         * <p>
         * @return {@code this}
         * @param flvSeekEnd Property flvSeekEnd: Custom FLV end parameters. This parameter is required.
         */
        public Builder flvSeekEnd(final java.lang.String flvSeekEnd) {
            this.props.flvSeekEnd(flvSeekEnd);
            return this;
        }
        /**
         * Property flvSeekEnd: Custom FLV end parameters.
         * <p>
         * @return {@code this}
         * @param flvSeekEnd Property flvSeekEnd: Custom FLV end parameters. This parameter is required.
         */
        public Builder flvSeekEnd(final com.aliyun.ros.cdk.core.IResolvable flvSeekEnd) {
            this.props.flvSeekEnd(flvSeekEnd);
            return this;
        }

        /**
         * Property flvSeekStart: Custom FLV start parameters.
         * <p>
         * @return {@code this}
         * @param flvSeekStart Property flvSeekStart: Custom FLV start parameters. This parameter is required.
         */
        public Builder flvSeekStart(final java.lang.String flvSeekStart) {
            this.props.flvSeekStart(flvSeekStart);
            return this;
        }
        /**
         * Property flvSeekStart: Custom FLV start parameters.
         * <p>
         * @return {@code this}
         * @param flvSeekStart Property flvSeekStart: Custom FLV start parameters. This parameter is required.
         */
        public Builder flvSeekStart(final com.aliyun.ros.cdk.core.IResolvable flvSeekStart) {
            this.props.flvSeekStart(flvSeekStart);
            return this;
        }

        /**
         * Property flvVideoSeekMode: FLV drag mode.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>by_byte</code>: Drag by byte.</li>
         * <li><code>by_time</code>: Drag by time.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param flvVideoSeekMode Property flvVideoSeekMode: FLV drag mode. This parameter is required.
         */
        public Builder flvVideoSeekMode(final java.lang.String flvVideoSeekMode) {
            this.props.flvVideoSeekMode(flvVideoSeekMode);
            return this;
        }
        /**
         * Property flvVideoSeekMode: FLV drag mode.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>by_byte</code>: Drag by byte.</li>
         * <li><code>by_time</code>: Drag by time.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param flvVideoSeekMode Property flvVideoSeekMode: FLV drag mode. This parameter is required.
         */
        public Builder flvVideoSeekMode(final com.aliyun.ros.cdk.core.IResolvable flvVideoSeekMode) {
            this.props.flvVideoSeekMode(flvVideoSeekMode);
            return this;
        }

        /**
         * Property mp4SeekEnd: Custom mp4 end parameters.
         * <p>
         * @return {@code this}
         * @param mp4SeekEnd Property mp4SeekEnd: Custom mp4 end parameters. This parameter is required.
         */
        public Builder mp4SeekEnd(final java.lang.String mp4SeekEnd) {
            this.props.mp4SeekEnd(mp4SeekEnd);
            return this;
        }
        /**
         * Property mp4SeekEnd: Custom mp4 end parameters.
         * <p>
         * @return {@code this}
         * @param mp4SeekEnd Property mp4SeekEnd: Custom mp4 end parameters. This parameter is required.
         */
        public Builder mp4SeekEnd(final com.aliyun.ros.cdk.core.IResolvable mp4SeekEnd) {
            this.props.mp4SeekEnd(mp4SeekEnd);
            return this;
        }

        /**
         * Property mp4SeekStart: Custom mp4 start parameters.
         * <p>
         * @return {@code this}
         * @param mp4SeekStart Property mp4SeekStart: Custom mp4 start parameters. This parameter is required.
         */
        public Builder mp4SeekStart(final java.lang.String mp4SeekStart) {
            this.props.mp4SeekStart(mp4SeekStart);
            return this;
        }
        /**
         * Property mp4SeekStart: Custom mp4 start parameters.
         * <p>
         * @return {@code this}
         * @param mp4SeekStart Property mp4SeekStart: Custom mp4 start parameters. This parameter is required.
         */
        public Builder mp4SeekStart(final com.aliyun.ros.cdk.core.IResolvable mp4SeekStart) {
            this.props.mp4SeekStart(mp4SeekStart);
            return this;
        }

        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * <p>
         * <ul>
         * <li>Match all incoming requests: value set to true</li>
         * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * <p>
         * <ul>
         * <li>Match all incoming requests: value set to true</li>
         * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final java.lang.String ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }
        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property sequence: The rule execution order prioritizes lower numerical values.
         * <p>
         * It is only applicable when setting or modifying the order of individual rule configurations.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: The rule execution order prioritizes lower numerical values. This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * Property sequence: The rule execution order prioritizes lower numerical values.
         * <p>
         * It is only applicable when setting or modifying the order of individual rule configurations.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: The rule execution order prioritizes lower numerical values. This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
        }

        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * Property videoSeekEnable: Drag and drop the play function switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param videoSeekEnable Property videoSeekEnable: Drag and drop the play function switch. This parameter is required.
         */
        public Builder videoSeekEnable(final java.lang.String videoSeekEnable) {
            this.props.videoSeekEnable(videoSeekEnable);
            return this;
        }
        /**
         * Property videoSeekEnable: Drag and drop the play function switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param videoSeekEnable Property videoSeekEnable: Drag and drop the play function switch. This parameter is required.
         */
        public Builder videoSeekEnable(final com.aliyun.ros.cdk.core.IResolvable videoSeekEnable) {
            this.props.videoSeekEnable(videoSeekEnable);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.VideoProcessing}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.VideoProcessing build() {
            return new com.aliyun.ros.cdk.esa.VideoProcessing(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
