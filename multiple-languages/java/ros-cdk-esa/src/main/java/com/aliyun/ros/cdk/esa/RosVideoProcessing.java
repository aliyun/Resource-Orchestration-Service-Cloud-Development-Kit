package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::VideoProcessing</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.274Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosVideoProcessing")
public class RosVideoProcessing extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVideoProcessing(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVideoProcessing(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosVideoProcessing.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVideoProcessing(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosVideoProcessingProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlvSeekEnd() {
        return software.amazon.jsii.Kernel.get(this, "attrFlvSeekEnd", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlvSeekStart() {
        return software.amazon.jsii.Kernel.get(this, "attrFlvSeekStart", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlvVideoSeekMode() {
        return software.amazon.jsii.Kernel.get(this, "attrFlvVideoSeekMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMp4SeekEnd() {
        return software.amazon.jsii.Kernel.get(this, "attrMp4SeekEnd", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMp4SeekStart() {
        return software.amazon.jsii.Kernel.get(this, "attrMp4SeekStart", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoSeekEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoSeekEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSiteId() {
        return software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlvSeekEnd() {
        return software.amazon.jsii.Kernel.get(this, "flvSeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlvSeekEnd(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flvSeekEnd", value);
    }

    /**
     */
    public void setFlvSeekEnd(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flvSeekEnd", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlvSeekStart() {
        return software.amazon.jsii.Kernel.get(this, "flvSeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlvSeekStart(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flvSeekStart", value);
    }

    /**
     */
    public void setFlvSeekStart(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flvSeekStart", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlvVideoSeekMode() {
        return software.amazon.jsii.Kernel.get(this, "flvVideoSeekMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlvVideoSeekMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flvVideoSeekMode", value);
    }

    /**
     */
    public void setFlvVideoSeekMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flvVideoSeekMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMp4SeekEnd() {
        return software.amazon.jsii.Kernel.get(this, "mp4SeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMp4SeekEnd(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mp4SeekEnd", value);
    }

    /**
     */
    public void setMp4SeekEnd(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mp4SeekEnd", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMp4SeekStart() {
        return software.amazon.jsii.Kernel.get(this, "mp4SeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMp4SeekStart(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mp4SeekStart", value);
    }

    /**
     */
    public void setMp4SeekStart(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mp4SeekStart", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRule(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rule", value);
    }

    /**
     */
    public void setRule(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rule", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleEnable", value);
    }

    /**
     */
    public void setRuleEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSequence(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "sequence", value);
    }

    /**
     */
    public void setSequence(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sequence", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteVersion", value);
    }

    /**
     */
    public void setSiteVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoSeekEnable() {
        return software.amazon.jsii.Kernel.get(this, "videoSeekEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoSeekEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "videoSeekEnable", value);
    }

    /**
     */
    public void setVideoSeekEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoSeekEnable", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosVideoProcessing}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosVideoProcessing> {
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
        private final com.aliyun.ros.cdk.esa.RosVideoProcessingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosVideoProcessingProps.Builder();
        }

        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param flvSeekEnd This parameter is required.
         */
        public Builder flvSeekEnd(final java.lang.String flvSeekEnd) {
            this.props.flvSeekEnd(flvSeekEnd);
            return this;
        }
        /**
         * @return {@code this}
         * @param flvSeekEnd This parameter is required.
         */
        public Builder flvSeekEnd(final com.aliyun.ros.cdk.core.IResolvable flvSeekEnd) {
            this.props.flvSeekEnd(flvSeekEnd);
            return this;
        }

        /**
         * @return {@code this}
         * @param flvSeekStart This parameter is required.
         */
        public Builder flvSeekStart(final java.lang.String flvSeekStart) {
            this.props.flvSeekStart(flvSeekStart);
            return this;
        }
        /**
         * @return {@code this}
         * @param flvSeekStart This parameter is required.
         */
        public Builder flvSeekStart(final com.aliyun.ros.cdk.core.IResolvable flvSeekStart) {
            this.props.flvSeekStart(flvSeekStart);
            return this;
        }

        /**
         * @return {@code this}
         * @param flvVideoSeekMode This parameter is required.
         */
        public Builder flvVideoSeekMode(final java.lang.String flvVideoSeekMode) {
            this.props.flvVideoSeekMode(flvVideoSeekMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param flvVideoSeekMode This parameter is required.
         */
        public Builder flvVideoSeekMode(final com.aliyun.ros.cdk.core.IResolvable flvVideoSeekMode) {
            this.props.flvVideoSeekMode(flvVideoSeekMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param mp4SeekEnd This parameter is required.
         */
        public Builder mp4SeekEnd(final java.lang.String mp4SeekEnd) {
            this.props.mp4SeekEnd(mp4SeekEnd);
            return this;
        }
        /**
         * @return {@code this}
         * @param mp4SeekEnd This parameter is required.
         */
        public Builder mp4SeekEnd(final com.aliyun.ros.cdk.core.IResolvable mp4SeekEnd) {
            this.props.mp4SeekEnd(mp4SeekEnd);
            return this;
        }

        /**
         * @return {@code this}
         * @param mp4SeekStart This parameter is required.
         */
        public Builder mp4SeekStart(final java.lang.String mp4SeekStart) {
            this.props.mp4SeekStart(mp4SeekStart);
            return this;
        }
        /**
         * @return {@code this}
         * @param mp4SeekStart This parameter is required.
         */
        public Builder mp4SeekStart(final com.aliyun.ros.cdk.core.IResolvable mp4SeekStart) {
            this.props.mp4SeekStart(mp4SeekStart);
            return this;
        }

        /**
         * @return {@code this}
         * @param rule This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * @return {@code this}
         * @param rule This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleEnable This parameter is required.
         */
        public Builder ruleEnable(final java.lang.String ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleEnable This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sequence This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * @return {@code this}
         * @param sequence This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteVersion This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteVersion This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoSeekEnable This parameter is required.
         */
        public Builder videoSeekEnable(final java.lang.String videoSeekEnable) {
            this.props.videoSeekEnable(videoSeekEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoSeekEnable This parameter is required.
         */
        public Builder videoSeekEnable(final com.aliyun.ros.cdk.core.IResolvable videoSeekEnable) {
            this.props.videoSeekEnable(videoSeekEnable);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosVideoProcessing}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosVideoProcessing build() {
            return new com.aliyun.ros.cdk.esa.RosVideoProcessing(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
