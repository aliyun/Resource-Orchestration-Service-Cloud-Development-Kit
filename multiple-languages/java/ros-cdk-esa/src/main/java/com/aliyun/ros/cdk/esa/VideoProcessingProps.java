package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>VideoProcessing</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.277Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.VideoProcessingProps")
@software.amazon.jsii.Jsii.Proxy(VideoProcessingProps.Jsii$Proxy.class)
public interface VideoProcessingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property flvSeekEnd: Custom FLV end parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlvSeekEnd() {
        return null;
    }

    /**
     * Property flvSeekStart: Custom FLV start parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlvSeekStart() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlvVideoSeekMode() {
        return null;
    }

    /**
     * Property mp4SeekEnd: Custom mp4 end parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMp4SeekEnd() {
        return null;
    }

    /**
     * Property mp4SeekStart: Custom mp4 start parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMp4SeekStart() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     * Property ruleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     * Property sequence: The rule execution order prioritizes lower numerical values.
     * <p>
     * It is only applicable when setting or modifying the order of individual rule configurations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     * Property siteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoSeekEnable() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VideoProcessingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VideoProcessingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VideoProcessingProps> {
        java.lang.Object siteId;
        java.lang.Object flvSeekEnd;
        java.lang.Object flvSeekStart;
        java.lang.Object flvVideoSeekMode;
        java.lang.Object mp4SeekEnd;
        java.lang.Object mp4SeekStart;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object sequence;
        java.lang.Object siteVersion;
        java.lang.Object videoSeekEnable;

        /**
         * Sets the value of {@link VideoProcessingProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getFlvSeekEnd}
         * @param flvSeekEnd Property flvSeekEnd: Custom FLV end parameters.
         * @return {@code this}
         */
        public Builder flvSeekEnd(java.lang.String flvSeekEnd) {
            this.flvSeekEnd = flvSeekEnd;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getFlvSeekEnd}
         * @param flvSeekEnd Property flvSeekEnd: Custom FLV end parameters.
         * @return {@code this}
         */
        public Builder flvSeekEnd(com.aliyun.ros.cdk.core.IResolvable flvSeekEnd) {
            this.flvSeekEnd = flvSeekEnd;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getFlvSeekStart}
         * @param flvSeekStart Property flvSeekStart: Custom FLV start parameters.
         * @return {@code this}
         */
        public Builder flvSeekStart(java.lang.String flvSeekStart) {
            this.flvSeekStart = flvSeekStart;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getFlvSeekStart}
         * @param flvSeekStart Property flvSeekStart: Custom FLV start parameters.
         * @return {@code this}
         */
        public Builder flvSeekStart(com.aliyun.ros.cdk.core.IResolvable flvSeekStart) {
            this.flvSeekStart = flvSeekStart;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getFlvVideoSeekMode}
         * @param flvVideoSeekMode Property flvVideoSeekMode: FLV drag mode.
         *                         Value range:
         *                         <p>
         *                         <ul>
         *                         <li><code>by_byte</code>: Drag by byte.</li>
         *                         <li><code>by_time</code>: Drag by time.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder flvVideoSeekMode(java.lang.String flvVideoSeekMode) {
            this.flvVideoSeekMode = flvVideoSeekMode;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getFlvVideoSeekMode}
         * @param flvVideoSeekMode Property flvVideoSeekMode: FLV drag mode.
         *                         Value range:
         *                         <p>
         *                         <ul>
         *                         <li><code>by_byte</code>: Drag by byte.</li>
         *                         <li><code>by_time</code>: Drag by time.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder flvVideoSeekMode(com.aliyun.ros.cdk.core.IResolvable flvVideoSeekMode) {
            this.flvVideoSeekMode = flvVideoSeekMode;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getMp4SeekEnd}
         * @param mp4SeekEnd Property mp4SeekEnd: Custom mp4 end parameters.
         * @return {@code this}
         */
        public Builder mp4SeekEnd(java.lang.String mp4SeekEnd) {
            this.mp4SeekEnd = mp4SeekEnd;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getMp4SeekEnd}
         * @param mp4SeekEnd Property mp4SeekEnd: Custom mp4 end parameters.
         * @return {@code this}
         */
        public Builder mp4SeekEnd(com.aliyun.ros.cdk.core.IResolvable mp4SeekEnd) {
            this.mp4SeekEnd = mp4SeekEnd;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getMp4SeekStart}
         * @param mp4SeekStart Property mp4SeekStart: Custom mp4 start parameters.
         * @return {@code this}
         */
        public Builder mp4SeekStart(java.lang.String mp4SeekStart) {
            this.mp4SeekStart = mp4SeekStart;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getMp4SeekStart}
         * @param mp4SeekStart Property mp4SeekStart: Custom mp4 start parameters.
         * @return {@code this}
         */
        public Builder mp4SeekStart(com.aliyun.ros.cdk.core.IResolvable mp4SeekStart) {
            this.mp4SeekStart = mp4SeekStart;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getSequence}
         * @param sequence Property sequence: The rule execution order prioritizes lower numerical values.
         *                 It is only applicable when setting or modifying the order of individual rule configurations.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getSequence}
         * @param sequence Property sequence: The rule execution order prioritizes lower numerical values.
         *                 It is only applicable when setting or modifying the order of individual rule configurations.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getVideoSeekEnable}
         * @param videoSeekEnable Property videoSeekEnable: Drag and drop the play function switch.
         *                        Value range:
         *                        <p>
         *                        <ul>
         *                        <li><code>on</code>: open.</li>
         *                        <li><code>off</code>: close.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder videoSeekEnable(java.lang.String videoSeekEnable) {
            this.videoSeekEnable = videoSeekEnable;
            return this;
        }

        /**
         * Sets the value of {@link VideoProcessingProps#getVideoSeekEnable}
         * @param videoSeekEnable Property videoSeekEnable: Drag and drop the play function switch.
         *                        Value range:
         *                        <p>
         *                        <ul>
         *                        <li><code>on</code>: open.</li>
         *                        <li><code>off</code>: close.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder videoSeekEnable(com.aliyun.ros.cdk.core.IResolvable videoSeekEnable) {
            this.videoSeekEnable = videoSeekEnable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VideoProcessingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VideoProcessingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VideoProcessingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VideoProcessingProps {
        private final java.lang.Object siteId;
        private final java.lang.Object flvSeekEnd;
        private final java.lang.Object flvSeekStart;
        private final java.lang.Object flvVideoSeekMode;
        private final java.lang.Object mp4SeekEnd;
        private final java.lang.Object mp4SeekStart;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object sequence;
        private final java.lang.Object siteVersion;
        private final java.lang.Object videoSeekEnable;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flvSeekEnd = software.amazon.jsii.Kernel.get(this, "flvSeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flvSeekStart = software.amazon.jsii.Kernel.get(this, "flvSeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flvVideoSeekMode = software.amazon.jsii.Kernel.get(this, "flvVideoSeekMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mp4SeekEnd = software.amazon.jsii.Kernel.get(this, "mp4SeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mp4SeekStart = software.amazon.jsii.Kernel.get(this, "mp4SeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoSeekEnable = software.amazon.jsii.Kernel.get(this, "videoSeekEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.flvSeekEnd = builder.flvSeekEnd;
            this.flvSeekStart = builder.flvSeekStart;
            this.flvVideoSeekMode = builder.flvVideoSeekMode;
            this.mp4SeekEnd = builder.mp4SeekEnd;
            this.mp4SeekStart = builder.mp4SeekStart;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.sequence = builder.sequence;
            this.siteVersion = builder.siteVersion;
            this.videoSeekEnable = builder.videoSeekEnable;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getFlvSeekEnd() {
            return this.flvSeekEnd;
        }

        @Override
        public final java.lang.Object getFlvSeekStart() {
            return this.flvSeekStart;
        }

        @Override
        public final java.lang.Object getFlvVideoSeekMode() {
            return this.flvVideoSeekMode;
        }

        @Override
        public final java.lang.Object getMp4SeekEnd() {
            return this.mp4SeekEnd;
        }

        @Override
        public final java.lang.Object getMp4SeekStart() {
            return this.mp4SeekStart;
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        public final java.lang.Object getRuleEnable() {
            return this.ruleEnable;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSequence() {
            return this.sequence;
        }

        @Override
        public final java.lang.Object getSiteVersion() {
            return this.siteVersion;
        }

        @Override
        public final java.lang.Object getVideoSeekEnable() {
            return this.videoSeekEnable;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getFlvSeekEnd() != null) {
                data.set("flvSeekEnd", om.valueToTree(this.getFlvSeekEnd()));
            }
            if (this.getFlvSeekStart() != null) {
                data.set("flvSeekStart", om.valueToTree(this.getFlvSeekStart()));
            }
            if (this.getFlvVideoSeekMode() != null) {
                data.set("flvVideoSeekMode", om.valueToTree(this.getFlvVideoSeekMode()));
            }
            if (this.getMp4SeekEnd() != null) {
                data.set("mp4SeekEnd", om.valueToTree(this.getMp4SeekEnd()));
            }
            if (this.getMp4SeekStart() != null) {
                data.set("mp4SeekStart", om.valueToTree(this.getMp4SeekStart()));
            }
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }
            if (this.getRuleEnable() != null) {
                data.set("ruleEnable", om.valueToTree(this.getRuleEnable()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSequence() != null) {
                data.set("sequence", om.valueToTree(this.getSequence()));
            }
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }
            if (this.getVideoSeekEnable() != null) {
                data.set("videoSeekEnable", om.valueToTree(this.getVideoSeekEnable()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.VideoProcessingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VideoProcessingProps.Jsii$Proxy that = (VideoProcessingProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.flvSeekEnd != null ? !this.flvSeekEnd.equals(that.flvSeekEnd) : that.flvSeekEnd != null) return false;
            if (this.flvSeekStart != null ? !this.flvSeekStart.equals(that.flvSeekStart) : that.flvSeekStart != null) return false;
            if (this.flvVideoSeekMode != null ? !this.flvVideoSeekMode.equals(that.flvVideoSeekMode) : that.flvVideoSeekMode != null) return false;
            if (this.mp4SeekEnd != null ? !this.mp4SeekEnd.equals(that.mp4SeekEnd) : that.mp4SeekEnd != null) return false;
            if (this.mp4SeekStart != null ? !this.mp4SeekStart.equals(that.mp4SeekStart) : that.mp4SeekStart != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.sequence != null ? !this.sequence.equals(that.sequence) : that.sequence != null) return false;
            if (this.siteVersion != null ? !this.siteVersion.equals(that.siteVersion) : that.siteVersion != null) return false;
            return this.videoSeekEnable != null ? this.videoSeekEnable.equals(that.videoSeekEnable) : that.videoSeekEnable == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.flvSeekEnd != null ? this.flvSeekEnd.hashCode() : 0);
            result = 31 * result + (this.flvSeekStart != null ? this.flvSeekStart.hashCode() : 0);
            result = 31 * result + (this.flvVideoSeekMode != null ? this.flvVideoSeekMode.hashCode() : 0);
            result = 31 * result + (this.mp4SeekEnd != null ? this.mp4SeekEnd.hashCode() : 0);
            result = 31 * result + (this.mp4SeekStart != null ? this.mp4SeekStart.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            result = 31 * result + (this.videoSeekEnable != null ? this.videoSeekEnable.hashCode() : 0);
            return result;
        }
    }
}
