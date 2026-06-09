package com.aliyun.ros.cdk.config;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Config::ReportTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:01:48.361Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosReportTemplate")
public class RosReportTemplate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosReportTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosReportTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.config.RosReportTemplate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosReportTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RosReportTemplateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReportFileFormats() {
        return software.amazon.jsii.Kernel.get(this, "attrReportFileFormats", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReportGranularity() {
        return software.amazon.jsii.Kernel.get(this, "attrReportGranularity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReportLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrReportLanguage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReportScope() {
        return software.amazon.jsii.Kernel.get(this, "attrReportScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReportTemplateDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrReportTemplateDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReportTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrReportTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReportTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrReportTemplateName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionFrequency() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionFrequency", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getReportTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "reportTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReportTemplateName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "reportTemplateName", java.util.Objects.requireNonNull(value, "reportTemplateName is required"));
    }

    /**
     */
    public void setReportTemplateName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reportTemplateName", java.util.Objects.requireNonNull(value, "reportTemplateName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReportFileFormats() {
        return software.amazon.jsii.Kernel.get(this, "reportFileFormats", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReportFileFormats(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "reportFileFormats", value);
    }

    /**
     */
    public void setReportFileFormats(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reportFileFormats", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReportGranularity() {
        return software.amazon.jsii.Kernel.get(this, "reportGranularity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReportGranularity(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "reportGranularity", value);
    }

    /**
     */
    public void setReportGranularity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reportGranularity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReportLanguage() {
        return software.amazon.jsii.Kernel.get(this, "reportLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReportLanguage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "reportLanguage", value);
    }

    /**
     */
    public void setReportLanguage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reportLanguage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReportScope() {
        return software.amazon.jsii.Kernel.get(this, "reportScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReportScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reportScope", value);
    }

    /**
     */
    public void setReportScope(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.config.RosReportTemplate.ReportScopeProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.config.RosReportTemplate.ReportScopeProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "reportScope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReportTemplateDescription() {
        return software.amazon.jsii.Kernel.get(this, "reportTemplateDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReportTemplateDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "reportTemplateDescription", value);
    }

    /**
     */
    public void setReportTemplateDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reportTemplateDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionFrequency() {
        return software.amazon.jsii.Kernel.get(this, "subscriptionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubscriptionFrequency(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionFrequency", value);
    }

    /**
     */
    public void setSubscriptionFrequency(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionFrequency", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosReportTemplate.ReportScopeProperty")
    @software.amazon.jsii.Jsii.Proxy(ReportScopeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReportScopeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReportScopeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReportScopeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReportScopeProperty> {
            java.lang.Object key;
            java.lang.Object matchType;
            java.lang.Object value;

            /**
             * Sets the value of {@link ReportScopeProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ReportScopeProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ReportScopeProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ReportScopeProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ReportScopeProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ReportScopeProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReportScopeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReportScopeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReportScopeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReportScopeProperty {
            private final java.lang.Object key;
            private final java.lang.Object matchType;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.matchType = builder.matchType;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosReportTemplate.ReportScopeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReportScopeProperty.Jsii$Proxy that = (ReportScopeProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.matchType != null ? !this.matchType.equals(that.matchType) : that.matchType != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.RosReportTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.RosReportTemplate> {
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
        private final com.aliyun.ros.cdk.config.RosReportTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.RosReportTemplateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param reportTemplateName This parameter is required.
         */
        public Builder reportTemplateName(final java.lang.String reportTemplateName) {
            this.props.reportTemplateName(reportTemplateName);
            return this;
        }
        /**
         * @return {@code this}
         * @param reportTemplateName This parameter is required.
         */
        public Builder reportTemplateName(final com.aliyun.ros.cdk.core.IResolvable reportTemplateName) {
            this.props.reportTemplateName(reportTemplateName);
            return this;
        }

        /**
         * @return {@code this}
         * @param reportFileFormats This parameter is required.
         */
        public Builder reportFileFormats(final java.lang.String reportFileFormats) {
            this.props.reportFileFormats(reportFileFormats);
            return this;
        }
        /**
         * @return {@code this}
         * @param reportFileFormats This parameter is required.
         */
        public Builder reportFileFormats(final com.aliyun.ros.cdk.core.IResolvable reportFileFormats) {
            this.props.reportFileFormats(reportFileFormats);
            return this;
        }

        /**
         * @return {@code this}
         * @param reportGranularity This parameter is required.
         */
        public Builder reportGranularity(final java.lang.String reportGranularity) {
            this.props.reportGranularity(reportGranularity);
            return this;
        }
        /**
         * @return {@code this}
         * @param reportGranularity This parameter is required.
         */
        public Builder reportGranularity(final com.aliyun.ros.cdk.core.IResolvable reportGranularity) {
            this.props.reportGranularity(reportGranularity);
            return this;
        }

        /**
         * @return {@code this}
         * @param reportLanguage This parameter is required.
         */
        public Builder reportLanguage(final java.lang.String reportLanguage) {
            this.props.reportLanguage(reportLanguage);
            return this;
        }
        /**
         * @return {@code this}
         * @param reportLanguage This parameter is required.
         */
        public Builder reportLanguage(final com.aliyun.ros.cdk.core.IResolvable reportLanguage) {
            this.props.reportLanguage(reportLanguage);
            return this;
        }

        /**
         * @return {@code this}
         * @param reportScope This parameter is required.
         */
        public Builder reportScope(final com.aliyun.ros.cdk.core.IResolvable reportScope) {
            this.props.reportScope(reportScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param reportScope This parameter is required.
         */
        public Builder reportScope(final java.util.List<? extends java.lang.Object> reportScope) {
            this.props.reportScope(reportScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param reportTemplateDescription This parameter is required.
         */
        public Builder reportTemplateDescription(final java.lang.String reportTemplateDescription) {
            this.props.reportTemplateDescription(reportTemplateDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param reportTemplateDescription This parameter is required.
         */
        public Builder reportTemplateDescription(final com.aliyun.ros.cdk.core.IResolvable reportTemplateDescription) {
            this.props.reportTemplateDescription(reportTemplateDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param subscriptionFrequency This parameter is required.
         */
        public Builder subscriptionFrequency(final java.lang.String subscriptionFrequency) {
            this.props.subscriptionFrequency(subscriptionFrequency);
            return this;
        }
        /**
         * @return {@code this}
         * @param subscriptionFrequency This parameter is required.
         */
        public Builder subscriptionFrequency(final com.aliyun.ros.cdk.core.IResolvable subscriptionFrequency) {
            this.props.subscriptionFrequency(subscriptionFrequency);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.RosReportTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.config.RosReportTemplate build() {
            return new com.aliyun.ros.cdk.config.RosReportTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
